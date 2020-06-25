from BioNER_dataset import BioNERDatasetManager
from sciwing.models.rnn_seq_crf_tagger import RnnSeqCrfTagger
from sciwing.metrics.token_cls_accuracy import TokenClassificationAccuracy
import sciwing.constants as constants
from biobert2seqencoder import Biobert2SeqEncoder
import transformers
from transformers import AutoModelWithLMHead, AutoTokenizer
import torch
import torch.optim as optim
from sciwing.engine.engine import Engine
import argparse
import pathlib
import wasabi
from sciwing.infer.seq_label_inference.seq_label_inference import (
    SequenceLabellingInference,
)

PATHS = constants.PATHS
DATA_DIR = PATHS["DATA_DIR"]

def build_ner_biobert_model(hparams):
   # data_dir = pathlib.Path(DATA_DIR)
    exp_dirpath = pathlib.Path(dirname)
    train_filename = "./ner/%s/%s.train"%(hparams.get("dataset"), hparams.get("dataset"))
    dev_filename = "./ner/%s/%s.dev"%(hparams.get("dataset"), hparams.get("dataset"))
    test_filename = "./ner/%s/%s.test"%(hparams.get("dataset"), hparams.get("dataset"))

    data_manager = BioNERDatasetManager(
        train_filename=train_filename,
        dev_filename=dev_filename,
        test_filename=test_filename,
        column_names=["NER"],
        train_only="ner",
    )

    config = transformers.BertConfig(output_hidden_states=True, vocab_size=28996)

    model = AutoModelWithLMHead.from_pretrained("monologg/biobert_v1.1_pubmed", config=config)
    tokenizer = AutoTokenizer.from_pretrained("monologg/biobert_v1.1_pubmed")

    # TODO: Specifying the max length

    biobert2seqencoder = Biobert2SeqEncoder(
        tokenizer=tokenizer,
        model=model,
        device=torch.device(hparams.get("device")),
    )

    model = RnnSeqCrfTagger(
        rnn2seqencoder=biobert2seqencoder,
        encoding_dim=768,
        device=torch.device(hparams.get("device")),
        datasets_manager=data_manager,
    )

    infer = SequenceLabellingInference(
        model=model,
        model_filepath=str(exp_dirpath.joinpath("checkpoints", "best_model.pt")),
        datasets_manager=data_manager,
    )

    return infer

if __name__ == "__main__":
    dirname = pathlib.Path(".", "ner_biobert_output")
    model_filepath = dirname.joinpath("checkpoints", "best_model.pt")
    hparams = {
        "embedding_type": "glove_6B_100",
        "hidden_dim": 50,
        "bidirectional": True,
        "combine_strategy": "concat",
        "num_classes": 5,
        "dataset":"cadec",
        "model_filepath": model_filepath,
        "device": "cpu",
    }
    infer = build_ner_biobert_model(hparams)
