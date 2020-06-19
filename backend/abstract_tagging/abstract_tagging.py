from backend.abstract_tagging.sciwing.coda19_classification_elmo_lstm_inter import BuildCoda19ClassificationInfer
import pathlib

def get_abstract_labels(tagger, method, dois, df_covid):
    """

    :param tagger: AbstactTagger
    :param dois: a list of papers that needs tagging abstracts
    :param df_covid: database
    :return: tags
    """
    abstracts = [df_covid.loc[df_covid['doi'] == doi]["abstract"].values for doi in dois]
    abstracts = [abs[0] if len(abs) > 0 else "" for abs in abstracts]
    tags = tagger.tag_abstracts(method, abstracts)
    return abstracts, tags

class AbstractTagger():
    def __init__(self):
        self.sciwing_model = None

    def tag_abstracts(self, method, abstracts):
        """

        :param method: model being used
        :param abstracts: List[str], a list of abstracts
        :return: List[List[str]], a list of tags for each abstract
        """
        if method == "SciWing":
            if not self.sciwing_model:
                self.sciwing_model = self.create_sciwing_tagger()
            tags = []
            for abs in abstracts:
                tags.append([self.sciwing_model.on_user_input(text) for text in abs.split('.')[:-1]])
            return tags

    def create_sciwing_tagger(self):
        dirname = pathlib.Path(".", "coda19_classification_elmo_slower")
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