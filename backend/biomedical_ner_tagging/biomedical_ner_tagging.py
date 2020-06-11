from backend.biomedical_ner_tagging.ner_biobert_infer import *
import pathlib

def get_biomedical_ner_labels(tagger, method, dois, df_covid):
    """

    :param tagger: bioMedicalNERTagger
    :param method:
    :param dois:
    :param df_covid:
    :return:
    """
    body_texts = [df_covid.loc[df_covid['doi'] == doi]["body_text"].values for doi in dois]
    body_texts = [bd[0] if len(bd) > 0 else "" for bd in body_texts]
    tags = tagger.tag_abstracts(method, body_texts)
    return body_texts, tags

class BioMedicalNERTagger():
    def __init__(self):
        self.sciwing_model = None

    def tag_all(self, method, label_type, body_texts):
        """

        :param method: model being used
        :param label_type: jnlpba, cadec,..etc
        :param body_texts: List[str], a list of body_texts
        :return: List[List[str]], a list of tags of each body_text,
        should contain the same number of words with each body_text.
        """
        if method == "SciWing":
            if not self.sciwing_model:
                self.sciwing_model = self.create_sciwing_tagger()
            tags = []
            # TODO: Do tagging
            return tags
        # TODO: differentiate label_type

    def create_sciwing_tagger(self):
        dirname = pathlib.Path(".", "ner_biobert_output")
        model_filepath = dirname.joinpath("checkpoints", "best_model.pt")
        hparams = {
            "embedding_type": "glove_6B_100",
            "hidden_dim": 50,
            "bidirectional": True,
            "combine_strategy": "concat",
            "num_classes": 5,
            "dataset": "cadec",
            "model_filepath": model_filepath,
            "device": "cpu",
        }
        infer = build_ner_biobert_model(hparams)
        return infer