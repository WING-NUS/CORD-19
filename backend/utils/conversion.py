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



def to_paper_info(row, abstag):
    if len(row["authors"]) > 0:
        authors = [".".join([author['first'], author['last']]) for author in row["authors"]]
    else:
        authors = []

    abstract = [x + "." for x in row['abstract'].split(".")]
    abstract[-1] = abstract[-1].strip(".")

    return {"paper_id": row["paper_id"],
                "doi": row["doi"],
                "title": row["title"],
                "doc_date": "doc_date",
                "authors": authors,
                "summary": "",
                "abstract": {"text": abstract,
                             "tags": abstag},
                "bodyText": {"text": row["body_text"].split("\n"),
                             "tags": {"sciwingI2B2": {"1, 2": "CHEM", "2, 3": "Bio"}}},
                "url": row["url"],
            }


def to_general_ans(ans, row, abstag):
    if len(row["authors"]) > 0:
        authors = [".".join([author['first'], author['last']]) for author in row["authors"]]
    else:
        authors = []

    abstract = [x + "." for x in row['abstract'].split(".")]
    abstract[-1] = abstract[-1].strip(".")
    sents = [sent[1] for sent in ans["sentences"] if type(sent[1]) is str]
    res = {"answer": {"score": ans["doc_score"],
                      "sents": sents,},
           "paper_id": row["paper_id"],
           "doi": row["doi"],
           "title": row["title"],
           "doc_date": "doc_date",
           "authors": authors,
           "summary": "",
           "abstract": {"text": abstract,
                        "tags": abstag},
           "bodyText": {"section_header": {"original": [para[0] for para in row["body_text"]],
                                           "generic": [para[0] for para in row["body_text"]] #TODO: change to generic section header
                                            },
                        "text": [para[1] for para in row["body_text"]],
                        "tags": {"sciwingI2B2": {"1, 2": "CHEM", "2, 3": "Bio"}}
                        },
           "url": row["url"],
           }
    return res

def to_similar(similars, db_abstags):
    if similars is None:
        return [{"paper_id": "",
                    "doi": "",
                    "title": "",
                    "doc_date": "",
                    "authors": [""],
                    "summary": "",
                    "abstract": {"text": [""],
                                 "tags": {"sciwing": []}},
                    "bodyText": {"text": [""],
                                 "tags": {"sciwingI2B2":{}}},
                    "url": "",
                    }]
    res = []
    for idx in range(len(similars)):
        row = similars.iloc[idx]
        if row['paper_id'] in db_abstags.keys():
            abstag = db_abstags[row['paper_id']]
        else:
            abstag = empty_abstag()
        res.append(to_paper_info(similars.iloc[idx], abstag))
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

"""
def to_abstract(row, tags):
    authors = []
    if len(row["authors"]) > 0:
        authors = [".".join([author['first'], author['last'][0]]) for author in row["authors"].values[0]]
    ans = {"doi": row["doi"].values[0] if len(row["doi"]) > 0 else "",
            "paper_id": row["paper_id"].values[0] if len(row["paper_id"]) > 0 else "",
            "title": row["title"].values[0] if len(row["title"]) > 0 else "",
            "authors": authors,
            "text": row['abstract'].values[0].split(".")[:-1] if len(row["text"]) > 0 else [],
            "sciwingTags":tags["sciwing"]}
    return ans
"""