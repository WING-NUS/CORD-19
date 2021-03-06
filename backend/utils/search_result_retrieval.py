import os
import os.path as osp
from utils import file_utils, const
import json
import requests

def retrieve_answer(query):
    headers = {
        'Content-Type': 'application/json',
    }

    data = '{\"question\":\"%s\", \"section\":\"\"}'%query
    response = requests.post('http://cslab241.cs.aueb.gr:5000/just_the_json', headers=headers, data=data)

    return response.json()

def get_answer_dois(articles):
    return [article['doi'] for article in articles]

def combine(ans):
    """
    Combines the results in ans that is from the same article.
    :param ans: answer.json
    :return: filtered answer.json
    """
    notes = [res for res in ans["results"]["docs"]]
    dois = []
    filtered = []
    for note in notes:
        if note['doi'] not in dois:
            dois.append(note["doi"])
            filtered.append(note)
        else:
            idx = dois.index(note["doi"])
            added = filtered[idx]
            added["sentences"].append(note["sentences"])
            filtered[idx]["sentences"] = added["sentences"]

    return filtered





