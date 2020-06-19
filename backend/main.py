import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from schemas import *
import pickle

db = pickle.load(open("sample_db.pkl","rb"))
app = FastAPI()

@app.get("/query/")
def read_query():
    return {"Hello": "World"}

@app.post("/answer")
def post_answer():
    pass

@app.get("/answer/paper/{paper_id}", response_model=Paper)
def read_paper(paper_id: str):
    paper = db.loc[db['paper_id']==paper_id]
    return {"paper_id": paper_id,
            "title": "what is covid-19",
            "author": "Jack",
            "abstract": str(paper['abstract'].values),
            "body_text": str(paper['body_text'].values)}

@app.get("/display")
def display():
    papers = db.iloc[:5]
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