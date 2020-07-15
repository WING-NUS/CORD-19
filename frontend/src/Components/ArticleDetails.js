import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import Axios from "axios";
import Header from "./Header";
import SimilarArticle from "./SimilarArticle";
import BodyText from "./BodyText";
import Collapsible from "react-collapsible";

export default function ArticleDetails(props) {
  const [showBodyText, setShowBodyText] = useState(false);

  //dinamic similar articles, comment out &set correct url to use
  const [query, setQuery] = useState("");
  const [similar, setSimilar] = useState([]);
  const [showSimilar, setShowSimilar] = useState(false);
  const url = `http://localhost:8000/answer/?paper_id=${query}`;

  const [sectionHeaders, setsectionHeaders] = useState("");

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      setSimilar(result.data);
      setQuery("");
      setShowSimilar(!showSimilar);
    }
  };

  const {
    paper_id,
    doi,
    doc_date,
    title,
    authors,
    summary,
    abstract,
    bodyText
  } = props.location.state.article;
  const author = authors.join(", ");
  var MAX_ITEMS = 1;

  const section_headers = bodyText.section_header.Original;

  let unique_section_headers = section_headers.filter(
    (item, i, ar) => ar.indexOf(item) === i
  );

  return (
    <div>
      <div className="App-header">
        <Header />
      </div>
      <div className="articles">
        <div className="article">
          <div className="title-author-date">
            <h2>Title: {title}</h2>
            <span>
              Authors: {author}
              &nbsp;&nbsp;|&nbsp;&nbsp;Publish Date: {doc_date}
            </span>
          </div>
          {/* <AbstractDetails abstract={abstract} /> */}
          <Collapsible trigger="Show Abstract">
            <AbstractDetails abstract={abstract} />
          </Collapsible>

          <Collapsible trigger="Show Body Text">
            <BodyText bodyText={bodyText} />
          </Collapsible>
          {/* dinamic similar articles, comment out */}
          {/* <button className="button" onClick={() => getData()}>
            <h3>Similar Articles</h3>
          </button> */}
          <Collapsible trigger="Show Similar Articles">
            {() => getData()}
            {similar.map(article => (
              <SimilarArticle key={article.paper_id} article={article} />
            ))}
          </Collapsible>

          {/* <div>
            {showSimilar &&
              similar.map(article => (
                <SimilarArticle key={article.paper_id} article={article} />
              ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

const similar = [
  {
    paper_id: "paper id test 1",
    doi: "doi test",
    doc_date: "",
    title:
      "Biophysical characterization of the SARS-CoV-2 spike protein binding with the ACE2 receptor and implications for infectivity",
    authors: ["author test"],
    summary:
      "We computationally contrasted the binding interactions between human ACE2 and coronavirus spike protein receptor binding domain (RBD) of the 2002 epidemic-causing SARS-CoV-1, SARS-CoV-2, and bat coronavirus RaTG13 using the Rosetta energy function.\nWe find that the RBD of the spike protein of SARS-CoV-2 is highly optimized to achieve very strong binding with human ACE2 (hACE2) which is consistent with its enhanced infectivity.\nNotably, the SARS-CoV-2 RBD out-competes the angiotensin 2 receptor type I (ATR1) which is the native binding partner of ACE2 by 35% in terms of the calculated binding affinity.\nBy contrasting the spike protein SARS-CoV-2 Rosetta binding energy with ACE2 of different livestock and pet species we find strongest binding with bat ACE2 followed by human, feline, equine, canine and finally chicken.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        sciwing: {
          "1,1": "lable2",
          "0,2": "lable1"
        }
      }
    }
  },
  {
    paper_id: "paper id test 2",
    doi: "doi test",
    doc_date: "2020-03-31",
    title:
      "Phylogenetic Analysis and Structural Modeling of SARS-CoV-2 Spike Protein Reveals an Evolutionary Distinct and Proteolytically Sensitive Activation Loop",
    authors: ["author test"],
    summary:
      "The 2019 novel coronavirus (2019-nCoV/SARS-CoV-2) originally arose as part of a major outbreak of respiratory disease centered on Hubei province, China.\nTaxonomically, SARS-CoV-2 was shown to be a Betacoronavirus (lineage B) closely related to SARS-CoV and SARS-related bat coronaviruses, and it has been reported to share a common receptor with SARS-CoV (ACE-2).\nSubsequently, betacoronaviruses from pangolins were identified as close relatives to SARS-CoV-2.\nCompared to SARS-CoV and all other coronaviruses in Betacoronavirus lineage B, we identify an extended structural loop containing basic amino acids at the interface of the receptor binding (S1) and fusion (S2) domains.\nWe suggest this loop confers fusion activation and entry properties more in line with betacoronaviruses in lineages A and C, and be a key component in the evolution of SARS-CoV-2 with this structural loop affecting virus stability and transmission.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        sciwing: {
          "1,1": "lable2",
          "0,2": "lable1"
        }
      }
    }
  },
  {
    paper_id: "paper id test 3",
    doi: "doi test",
    doc_date: "2020-03-31",
    title:
      "Structural and Functional Basis of SARS-CoV-2 Entry by Using Human ACE2",
    authors: ["author test"],
    summary:
      "The recent emergence of a novel coronavirus (SARS-CoV-2) in China has caused significant public health concerns.\nRecently, ACE2 was reported as an entry receptor for SARS-CoV-2.\nIn this study, we present the crystal structure of the C-terminal domain of SARS-CoV-2 (SARS-CoV-2-CTD) spike (S) protein in complex with human ACE2 (hACE2), which reveals a hACE2-binding mode similar overall to that observed for SARS-CoV.\nHowever, atomic details at the binding interface demonstrate that key residue substitutions in SARS-CoV-2-CTD slightly strengthen the interaction and lead to higher affinity for receptor binding than SARS-RBD.\nAdditionally, a panel of murine monoclonal antibodies (mAbs) and polyclonal antibodies (pAbs) against SARS-CoV-S1/receptor-binding domain (RBD) were unable to interact with the SARS-CoV-2 S protein, indicating notable differences in antigenicity between SARS-CoV and SARS-CoV-2.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        sciwing: {
          "1,1": "lable2",
          "0,2": "lable1"
        }
      }
    }
  },
  {
    paper_id: "paper id test 4",
    doi: "doi test",
    doc_date: "2020-03-31",
    title:
      "Structure, Function, and Antigenicity of the SARS-CoV-2 Spike Glycoprotein",
    authors: ["author test"],
    summary:
      "Coronavirus spike (S) glycoproteins promote entry into cells and are the main target of antibodies.\nWe found that the SARS-CoV-2 S glycoprotein harbors a furin cleavage site at the boundary between the S(1)/S(2) subunits, which is processed during biogenesis and sets this virus apart from SARS-CoV and SARS-related CoVs. We determined cryo-EM structures of the SARS-CoV-2 S ectodomain trimer, providing a blueprint for the design of vaccines and inhibitors of viral entry.\nFinally, we demonstrate that SARS-CoV S murine polyclonal antibodies potently inhibited SARS-CoV-2 S mediated entry into cells, indicating that cross-neutralizing antibodies targeting conserved S epitopes can be elicited upon vaccination.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        sciwing: {
          "1,1": "lable2",
          "0,2": "lable1"
        }
      }
    }
  }
];
