import nltk

def empty_abstag():
    return {'sciwing':[]}

def to_ans(ans):
    answers = []
    for note in ans["results"]["docs"]:
        answers.append({"doi": note["doi"],
                        "doc_score": note["doc_score"],
                        "doc_date": note["doc_date"],
                        "title": note["title"],
                        "sents": [sent[1] for sent in note["sentences"]]})
    return answers



def to_paper_info(row, abstags, i2b2tags, genericHeader):
    if len(row["authors"]) > 0:
        authors = [".".join([author['first'], author['last']]) for author in row["authors"]]
    else:
        authors = []

    abstract = nltk.sent_tokenize(row["abstract"])

    return {"paper_id": row["paper_id"],
                "doi": row["doi"],
                "title": row["title"],
                "doc_date": row["doc_date"],
                "authors": authors,
                "summary": "",
                "abstract": {"text": abstract,
                             "tags": abstags},
                "bodyText": {"section_header":
                                 {"original": [para[0] for para in row["body_text"]],
                                  "generic": genericHeader, },
                             "text": [para[1] for para in row["body_text"]],
                             "tags": {"sciwingI2B2": i2b2tags}},
                "url": row["url"],
            }


def to_general_ans(ans, row, abstag, i2b2tags, genericHeader):
    if len(row["authors"]) > 0:
        authors = [".".join([author['first'], author['last']]) for author in row["authors"]]
    else:
        authors = []

    abstract = nltk.sent_tokenize(row["abstract"])

    sents = [sent[1] for sent in ans["sentences"] if type(sent[1]) is str]
    res = {"answer": {"score": ans["doc_score"],
                      "sents": sents,},
           "paper_id": row["paper_id"],
           "doi": row["doi"],
           "title": row["title"],
           "doc_date": row["doc_date"],
           "authors": authors,
           "summary": "",
           "abstract": {"text": abstract,
                        "tags": abstag},
           "bodyText": {"section_header": {"original": [para[0] for para in row["body_text"]],
                                           "generic": genericHeader, #TODO: change to generic section header
                                            },
                        "text": [para[1] for para in row["body_text"]],
                        "tags": {"sciwingI2B2": i2b2tags}
                        },
           "url": row["url"],
           }
    return res

def to_similar(similars, db_abstags, db_i2b2ner, db_genericheader):
    if similars is None:
        return [{"paper_id": "",
                    "doi": "",
                    "title": "",
                    "doc_date": "",
                    "authors": [""],
                    "summary": "",
                    "abstract": {"text": [""],
                                 "tags": {"sciwing": []}},
                    "bodyText": {"section_header": {"original": [],
                                           "generic": []}, #TODO: change to generic section header
                                 "text": [""],
                                 "tags": {"sciwingI2B2":{}}}
                    ,
                    "url": "",
                    }]
    res = []

    for idx in range(len(similars)):
        row = similars.iloc[idx]
        abstract = nltk.sent_tokenize(row["abstract"])
        if not row["paper_id"] or row["paper_id"] not in db_abstags:
            abstags = {"sciwing": [""] * len(abstract)}
        else:
            abstags = db_abstags[row["paper_id"]]

        if not row["paper_id"] or row["paper_id"] not in db_i2b2ner or not db_i2b2ner[row["paper_id"]]:
            i2b2tags = dict()
        else:
            i2b2tags = db_i2b2ner[row["paper_id"]]

        if not row["paper_id"] or row["paper_id"] not in db_genericheader:
            genericHeader = [""] * len(row["body_text"])
        else:
            genericHeader = db_genericheader[row["paper_id"]]

        res.append(to_paper_info(similars.iloc[idx], abstags, i2b2tags, genericHeader))
    return res


def to_graph(x, y, Xaxis, Yaxis, values, abstag):
    resdict = dict()
    for key, val in values.items():
        resdict[",".join(key)] = {"num": len(val),
                 "articles": [to_paper_info(val.iloc[i], abstag) for i in range(len(val))]}

    return {"Xtype": x,
            "Ytype": y,
            "Xaxis": Xaxis,
            "Yaxis": Yaxis,
            "values": resdict}

