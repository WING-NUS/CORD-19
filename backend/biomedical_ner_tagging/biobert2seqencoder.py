import torch
import torch.nn as nn
import wasabi
from typing import List
from sciwing.utils.class_nursery import ClassNursery
from sciwing.data.line import Line
import transformers

class Biobert2SeqEncoder(nn.Module, ClassNursery):
    def __init__(
        self,
        model: transformers.modeling_bert.BertForMaskedLM,
        tokenizer,
        device: torch.device = torch.device("cpu"),
    ):
        super(Biobert2SeqEncoder, self).__init__()
        self.model = model
        self.tokenizer = tokenizer
        self.device = torch.device(device) if isinstance(device, str) else device

    def forward(
        self,
        lines: List[Line],
    ) -> torch.Tensor:

        # Step 1: Tokenize
        all_tokens = [self.tokenizer.tokenize(line.text) for line in lines]
        max_len = max([len(tokens) for tokens in all_tokens]) + 2
        print(max_len)
        src = torch.zeros((len(lines), max_len, 768))
        for i, tokens in enumerate(all_tokens):
            #line = [look_up_word(w, self.vocab_table) for w in line.text.split()]
            # Step 2: Add [CLS] and [SEP]
            tokens = ['[CLS]'] + tokens + ['[SEP]']
            # Step 3: Pad tokens
            padded_tokens = tokens + ['[PAD]' for _ in range(max_len - len(tokens))]
            attn_mask = [1 if token != '[PAD]' else 0 for token in padded_tokens]
            # Step 5: Get BERT vocabulary index for each token
            token_ids = self.tokenizer.convert_tokens_to_ids(padded_tokens)
            # Converting everything to torch tensors before feeding them to bert_model
            token_ids = torch.tensor(token_ids).unsqueeze(0) # Shape : [1, 12]
            attn_mask = torch.tensor(attn_mask).unsqueeze(0)  # Shape : [1, 12]
            # Feed them to bert
            hidden_reps, cls_head = self.model(token_ids, attention_mask=attn_mask,)
          #  import pdb;
          #  if cls_head[1].shape[1] == 60:
          #      pdb.set_trace()
            src[i, :, :] = cls_head[1]

        return src