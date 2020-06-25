from backend.abstract_tagging.sciwing.coda19_classification_elmo_lstm_inter import BuildCoda19ClassificationInfer
import pathlib
from backend.utils.const import *
from tqdm import tqdm
import numpy as np

def get_abstract_labels(tagger, paper_ids, tags_cache, df_covid):
    """

    :param tagger: AbstactTagger
    :param dois: a list of papers that needs tagging abstracts
    :param df_covid: database
    :return: tags
    """
    abstag = tagger.tag_abstracts(paper_ids, tags_cache, df_covid)
    return abstag

class AbstractTagger():
    def __init__(self):
        self.sciwing_model = None

    def tag_abstracts(self, paper_ids, tags_cache, df_covid):
        """

        :param method: model being used
        :param abstracts: List[str], a list of abstracts
        :return: List[List[str]], a list of tags for each abstract
        """

        # Initialise tagging machine
        for method in ABSTAG_METHOD:
            if method == "sciwing":
                if not self.sciwing_model:
                    self.sciwing_model = self.create_sciwing_tagger()
            # if there are other methods

        for paper_id in tqdm(paper_ids):
            idx = df_covid.loc[df_covid['paper_id'] == paper_id].index
            tags_cache[paper_id] = dict()
            tags_cache[paper_id]["sciwing"] = [self.sciwing_model.on_user_input(text) for text in df_covid.loc[idx, "abstract"].values[0].split(".")[:-1]]
            # if there are other methods

        return tags_cache

    def create_sciwing_tagger(self):
        dirname = pathlib.Path("./backend/abstract_tagging/sciwing/", "coda19_classification_elmo_slower")
        model_filepath = dirname.joinpath("checkpoints", "best_model.pt")
        hparams = {
            "embedding_type": "glove_6B_100",
            "hidden_dim": 50,
            "bidirectional": True,
            "combine_strategy": "concat",
            "num_classes": 5,
            "model_filepath": model_filepath,
            "device": "cpu",
        }
        infer = BuildCoda19ClassificationInfer(hparams=hparams)
        infer_obj = infer.build_infer()
        return infer_obj
