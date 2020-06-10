import sys
import argparse
import glob
from backend.utils.search_result_retrieval import *
from backend.abstract_tagging.abstract_tagging import *
from backend.biomedical_ner_tagging.biomedical_ner_tagging import *

def parse_argument():
    parser = argparse.ArgumentParser()
    parser.add_argument("--query", default="What do we know about Covid-19 vaccines ?", help="Input query", type=str)
    parser.add_argument("--database_root", default='/Users/zijinkong/Desktop/Covid-19/CORD-19-research-challenge/',
                        help="Enter the database path you want to analyse", type=str)

    parser.add_argument("--cache_root", default="./cache",
                        help="Input the location where you want to store cache", type=str)

    parser.add_argument("--num", default=20, help="Enter the max number of results you want to retrieve. n <= 20", type=str)
    return parser

if __name__ == "__main__":
    print("initialzation")
    # initialization
    args = parse_argument().parse_args()
    db_root = args.database_root
    cache_root = args.cache_root
    num = args.num
    print("abstract tagging")
    # Abstract tagging
    abstract_tagger = AbstractTagger()
    print("load database")
    # Load database
    all_json = glob.glob(f'{db_root}/**/*.json', recursive=True)[:1000]
    df_meta = utils.load_metadata(db_root)
    df_covid = utils.load_dataframe(all_json, df_meta)
    print("fetch query")
    # TODO: Able to enter multiple queries with one initialization on server
    # fetch query
    question = args.query
    print("get answer and save")
    # get answer and save
    ans = retrieve_answer(question, cache_root)
    ans = ans['results']['docs'][:num]
    dois = get_answer_ids(ans)

    """
    print("get abstract labels")
    method = 'SciWing'
    abstracts, tags = get_abstract_labels(abstract_tagger, method, dois, df_covid)
    """

    print("get Biomedical labels")
    method = 'SciWing'
    label_type = 'cadec'
    body_texts, tags = get_abstract_labels(abstract_tagger, method, label_type, dois, df_covid)


