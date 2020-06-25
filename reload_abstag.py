from backend.utils.const import *
import pickle
from backend.abstract_tagging.abstract_tagging import *
import json

df_covid = pickle.load(open(DB_SAMPLE_CACHE, "rb"))
tags_cache = json.load(open(ABSTAG_JSON_CACHE, "r"))

paper_ids = df_covid['paper_id'].values
abstract_tagger = AbstractTagger()
tags_cache = get_abstract_labels(abstract_tagger, paper_ids, tags_cache, df_covid)
json.dump(tags_cache, open(ABSTAG_JSON_CACHE, 'w'))
