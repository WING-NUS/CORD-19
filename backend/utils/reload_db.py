import json
import pandas as pd
from const import *
import glob
import pickle
from utils import *

meta_df = load_metadata(root_path)
all_json = glob.glob(f'{root_path}/**/*.json', recursive=True)
first_row = FileReader(all_json[0])
print(first_row)
df_covid = load_dataframe(all_json, meta_df)
pickle.dump(df_covid, open(ABSTAG_JSON_CACHE, "wb"))