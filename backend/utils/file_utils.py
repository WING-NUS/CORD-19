import os
import os.path as osp
import json
import pandas as pd
from tqdm import tqdm


class FileReader:
    def __init__(self, file_path):
        with open(file_path) as file:
            content = json.load(file)
            self.paper_id = content['paper_id']
            self.title = content["metadata"]["title"]
            self.authors = content["metadata"]["authors"]
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
                self.body_text.append((entry['section'], entry['text']))
            # Extend Here
            #
            #

    def __repr__(self):
        return f'{self.paper_id}: {self.title[:200]}...{self.authors[:200]}...{self.abstract[:200]}... {self.body_text[:200]}...'

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
    dict_ = {'paper_id': [], 'doi': [], 'cord_uid': [], 'doc_date': [], 'url': [], 'title': [], "authors": [],
             'abstract': [], 'body_text': []}

    for idx, entry in tqdm(enumerate(all_json)):
        if idx % (len(all_json) // 1) == 0:
            print(f'Processing index: {idx} of {len(all_json)}')
        content = FileReader(entry)
        dict_['paper_id'].append(content.paper_id)
        dict_['abstract'].append(content.abstract)
        dict_['body_text'].append(content.body_text)
        dict_['title'].append(content.title)
        dict_['authors'].append(content.authors)

        idx = df_meta.loc[df_meta['pmcid'] == content.paper_id].index
        if len(idx) is 0:
            print("ERROR: no corresponding DOI: ", content.paper_id, "\nUse sha instead")
            idx = df_meta.loc[df_meta['sha'] == content.paper_id].index

        if len(idx) is 1:
            row = df_meta.iloc[idx[0]]
            dict_['doi'].append(row["doi"])
            dict_['cord_uid'].append(row['cord_uid'])
            dict_['doc_date'].append(row['publish_time'])
            dict_['url'].append(row['url'])
        else:
            dict_['doi'].append("")
            dict_['cord_uid'].append("")
            dict_["doc_date"].append("")
            dict_['url'].append("")

    # df_covid = pd.DataFrame(dict_, columns=['paper_id', 'abstract', 'body_text'])
    try:
        df_covid = pd.DataFrame(dict_,
                            columns=['paper_id', 'doi', 'cord_uid', 'title', 'url', 'doc_date', 'authors', 'abstract',
                                    'body_text', ])
    except Exception:
        print("Error occured when making dataframe")
        import pdb;pdb.set_trace()
    return df_covid

def create_folder(root):
    if not osp.exists(root):
        os.makedirs(root)
    assert(osp.isdir(root) is True)
