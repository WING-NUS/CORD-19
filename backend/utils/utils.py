import os
import os.path as osp
import json
import pandas as pd


class FileReader:
    def __init__(self, file_path):
        with open(file_path) as file:
            content = json.load(file)
            self.paper_id = content['paper_id']
            self.abstract = []
            self.body_text = []

            # Abstract
            if 'abstract' not in content.keys():
                self.abstract = ""
            else:
                self.abstract = [entry['text'] for entry in content['abstract']]
                self.abstract = '\n'.join(self.abstract)

            # Body Text
            for entry in content['body_text']:
                self.body_text.append(entry['text'])
            self.body_text = '\n'.join(self.body_text)
            # Extend Here
            #
            #

    def __repr__(self):
        return f'{self.paper_id}: {self.abstract[:200]}... {self.body_text[:200]}...'

def load_metadata(db_root):
    metadata_path = f'{db_root}/metadata.csv'
    meta_df = pd.read_csv(metadata_path, dtype={
        'pubmed_id': str,
        'Microsoft Academic Paper ID': str,
        'doi': str
    })
    print(meta_df.head())
    return meta_df

def load_dataframe(all_json, df_meta):
    dict_ = {'paper_id': [], 'doi':[], 'cord_uid': [], 'abstract': [], 'body_text': []}

    for idx, entry in enumerate(all_json):
        if idx % (len(all_json) // 10) == 0:
            print(f'Processing index: {idx} of {len(all_json)}')
        content = FileReader(entry)
        dict_['paper_id'].append(content.paper_id)
        dict_['abstract'].append(content.abstract)
        dict_['body_text'].append(content.body_text)

        row = df_meta.loc[df_meta['pmcid'] == content.paper_id]
        dict_['doi'].append(row["doi"].values[0] if len(row["doi"].values) > 0 else "")
        dict_['cord_uid'].append(row['cord_uid'].values[0] if len(row["cord_uid"].values) > 0 else "")

    # df_covid = pd.DataFrame(dict_, columns=['paper_id', 'abstract', 'body_text'])
    df_covid = pd.DataFrame(dict_, columns=['paper_id', 'doi', 'cord_uid', 'body_text', 'abstract'])
    print(df_covid.head())
    return df_covid

def create_folder(root):
    if not osp.exists(root):
        os.makedirs(root)
    assert(osp.isdir(root) is True)