import json
import pandas as pd
from backend.utils.const import *
import glob
import pickle
from backend.utils.file_utils import *

meta_df = load_metadata(root_path)
all_json = glob.glob(f'{root_path}/**/*.json', recursive=True)
first_row = FileReader(all_json[0])
print(first_row)
df_covid = load_dataframe(all_json[69980:70000], meta_df)
import pdb;pdb.set_trace()
pickle.dump(df_covid, open(DB_SAMPLE_CACHE, "wb"))
