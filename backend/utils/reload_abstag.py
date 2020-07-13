from const import *
import pickle
from backend.abstract_tagging.abstract_tagging import *

df_covid = pickle.load(open(DB_CACHE, "rb"))
tags_cache = pickle.load(open(ABSTAG_JSON_CACHE, "rb"))
# TODO: paper_ids should be the ids of ABSTAG to-be-added
paper_ids = df_covid['paper_id'].values
abstract_tagger = AbstractTagger()
tags_cache = get_abstract_labels(abstract_tagger, paper_ids, tags_cache, df_covid)
pickle.dump(tags_cache, open(ABSTAG_JSON_CACHE, "wb"))