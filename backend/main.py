import uvicorn
from fastapi import FastAPI
from schemas import *
import pickle
from utils import search_result_retrieval, const, conversion
import json

database = pickle.load(open(const.DB_SAMPLE_CACHE, 'rb'))
abstags = json.load(open(const.ABSTAG_JSON_CACHE, 'rb'))

app = FastAPI()

@app.get("/answer/", response_model=List[Answer])
def answer_query(query: str, limit = 20):
    ans = search_result_retrieval.retrieve_answer(query, const.ANS_CACHE_ROOT)
    print("Retrieve answers successfully.")
    ans = conversion.to_ans(ans)
    return ans

@app.get("/answer/abstract", response_model=Abstract)
def expand_abs(doi: str):
    # dummy doi
    doi = "10.1292/jvms.13-0518"
    row = database.loc[database['doi'] == doi]
    # TODO: ensure the existence
    tags = abstags[row["paper_id"].values[0]]
    abs = conversion.to_abstract(row, tags)
    return abs

@app.get("/answer/paper/{paper_id}", response_model=Paper)
def read_paper(paper_id: str):
    paper = database.loc[database['paper_id']==paper_id]
    return {"paper_id": paper_id,
            "title": "what is covid-19",
            "author": "Jack",
            "abstract": str(paper['abstract'].values),
            "body_text": str(paper['body_text'].values)}

@app.get("/display")
def display():
    papers = database.iloc[:5]
    return papers
        #papers.to_json(orient='split')
    """
    paper = papers.iloc[0]
    return {"paper_id": paper['paper_id'],
            "title": "what is covid-19",
            "author": "Jack",
            "abstract": paper['abstract'],
            "body_text": paper['body_text']}
    """
if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)