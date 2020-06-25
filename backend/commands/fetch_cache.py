from backend.utils.const import *
import pickle

abstag = pickle.load(open(DB_SAMPLE_CACHE, 'rb'))
def get_abstract_tags(paper_ids: List[str]):
    ans = dict()
    for method in ABSTAG_METHOD:
        ans[method] = [abstag[paper_id] for paper_id in paper_ids]
    return ans