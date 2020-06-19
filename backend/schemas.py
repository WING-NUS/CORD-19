from pydantic import BaseModel
from typing import List
"""
class Author(BaseModel):
    first: str
    middle: List[str]
    last: str
    suffix: str
    email: str
    affiliation: str

class Abstract(BaseModel):
    paper_id: str
    content: str

class BodyText(BaseModel):
    paper_id: str
    content: str

class Citation(BaseModel):
    paper_id: str
    content: str
"""
class Paper(BaseModel):
    paper_id: str
    title: str
    author: str
    abstract: str
    body_text: str
 #   citation: List[Citation]
