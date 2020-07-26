import os.path as osp
root = "/diskC/Kong211/work/CORD-19/"
root = "/Users/zijinkong/Desktop/Covid-19/CORD-19/"

root_path = osp.join(root, '../CORD-19-research-challenge')
ANS_CACHE_ROOT = osp.join(root, "./database/ans_cache")
ANS_SAMPLE = osp.join(root, "./database/ans_cache/answer.json")

DB_CACHE = osp.join(root, "./database/database.pkl")
DB_SAMPLE_CACHE = osp.join(root, "./database/sample.pkl")

ABSTAG_JSON_CACHE = osp.join(root, "./database/abstag.json")
ABSTAG_METHOD = ["sciwing"]

GenericHeader_JSON_CACHE = osp.join(root, "./database/generic_headers.json")

SciwingI2B2_NER_CACHE = osp.join(root, "./database/i2b2ner.json")
SciwingI2B2_NER_CACHE_SAMPLE = osp.join(root, "./database/sciwingI2B2_sample.json")

SIMILAR_SAMPLE_CACHE = osp.join(root, "./database/similar_sample.pkl")
SIMILAR_CACHE = osp.join(root, "./database/similar.pkl")

XTYPEs = ["Date"]
YTYPEs = ["Risk Factor"]
