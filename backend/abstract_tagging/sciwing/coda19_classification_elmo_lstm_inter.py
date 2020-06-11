import os
from sciwing.models.simpleclassifier import SimpleClassifier
from sciwing.modules.lstm2vecencoder import LSTM2VecEncoder
from sciwing.modules.embedders.word_embedder import WordEmbedder
from sciwing.modules.embedders.elmo_embedder import ElmoEmbedder
from sciwing.modules.embedders.concat_embedders import ConcatEmbedders
import sciwing.constants as constants
from sciwing.infer.classification.classification_inference import (
    ClassificationInference,
)
from sciwing.datasets.classification.text_classification_dataset import (
    TextClassificationDatasetManager,
)
from sciwing.infer.interface_client_base import BaseInterfaceClient
from sciwing.cli.sciwing_interact import SciWINGInteract
from typing import Dict, Any
import torch
import pathlib

PATHS = constants.PATHS
DATA_DIR = PATHS["DATA_DIR"]
DATA_DIR = pathlib.Path(DATA_DIR)

class BuildCoda19ClassificationInfer(BaseInterfaceClient):
    def __init__(self, hparams: Dict[str, Any]):
        self.hparams = hparams
        self.data_manager = self.build_dataset()
        self.model = self.build_model()

    def build_model(self):
        word_embedder = WordEmbedder(embedding_type=self.hparams.get("embedding_type"), device=self.hparams.get("device"))
        elmo_embedder = ElmoEmbedder(device=self.hparams.get("device"))

        embedder = ConcatEmbedders([word_embedder, elmo_embedder])

        encoder = LSTM2VecEncoder(
            embedder=embedder,
            hidden_dim=self.hparams.get("hidden_dim"),
            combine_strategy=self.hparams.get("combine_strategy"),
            bidirectional=self.hparams.get("bidirectional"),
            device=torch.device(self.hparams.get("device")),
        )

        classiier_encoding_dim = (
            2 * self.hparams.get("hidden_dim") if self.hparams.get("bidirectional") else self.hparams.get("hidden_dim")
        )
        model = SimpleClassifier(
            encoder=encoder,
            encoding_dim=classiier_encoding_dim,
            num_classes=self.hparams.get("num_classes"),
            classification_layer_bias=True,
            datasets_manager=self.data_manager,
            device=self.hparams.get("device"),
        )

        return model

    def build_dataset(self):
        #   train_file = DATA_PATH.joinpath("coda-19.train")
        #   dev_file = DATA_PATH.joinpath("coda-19.dev")
        #   test_file = DATA_PATH.joinpath("coda-19.test")
        train_filename = "./backend/abstract_tagging/sciwing/coda19_classification_elmo_slower/data/coda-19.train"
        dev_filename = "./backend/abstract_tagging/sciwing/coda19_classification_elmo_slower/data/coda-19.dev"
        test_filename = "./backend/abstract_tagging/sciwing/coda19_classification_elmo_slower/data/coda-19.test"

        data_manager = TextClassificationDatasetManager(
            train_filename=train_filename,
            dev_filename=dev_filename,
            test_filename=test_filename,
        )
        return data_manager

    def build_infer(self):
        inference = ClassificationInference(
            model=self.model,
            model_filepath=self.hparams.get("model_filepath"),
            datasets_manager=self.data_manager,
        )

        return inference

if __name__ == "__main__":
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
    cli = SciWINGInteract(infer_client=infer)
    cli.interact()