import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import schemas
import json
import pickle
import glob
from starlette.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://192.168.1.132/",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

root_path="/Users/zijinkong/Desktop/Covid-19/CORD-19-research-challenge"
all_json = glob.glob(f'{root_path}/**/*.json', recursive=True)
db = pickle.load(open("/Users/zijinkong/Desktop/Covid-19/CORD-19/backend/sample_db.pkl","rb"))

@app.get("/query/")
def read_query(query: str):
    return {"Hello": "World"}

@app.post("/answer")
def post_answer():
    pass

@app.get("/answer/paper/{paper_id}", response_model=schemas.Paper)
def read_paper(paper_id: str):
    paper = db.loc[db['paper_id']==paper_id]
    return {"paper_id": paper_id,
            "title": "what is covid-19",
            "author": "Jack",
            "abstract": str(paper['abstract'].values),
            "body_text": str(paper['body_text'].values)}

@app.get("/display", response_model=List[schemas.Paper])
def display():
    print("CALL FROM FRONTEND")
    #print(type(json.load(open(all_json[0], "rb"))))
    #return json.load(open(all_json[0], "rb"))
    papers = db[:5]
    paper = papers.iloc[0]
    return [{"paper_id": paper['paper_id'],
            "title": "what is covid-19",
            "author": "Jack",
            "abstract": paper['abstract'],
            "body_text": paper['body_text']}]

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)