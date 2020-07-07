import React, { useState, useLocation } from "react";
import AbstractDetails from "./AbstractDetails";
import Header from "./Header";
import SimilarArticle from "./SimilarArticle";
// import BodyText from "./BodyText";
import Article from "./Article";
import ReactDOM from "react-dom";

const ArticleDetails = () => {
  const [showBodyText, setBodyText] = useState(false);
  const location = useLocation();
  const {
    paper_id,
    doi,
    doc_date,
    title,
    authors,
    summary,
    abstract,
    bodyText
  } = location.state.article;
  const author = authors.join(", ");
  var MAX_ITEMS = 1;

  // render() {
  // const [open, setOpen] = useState(false);
  // const { paper, similar } = this.props.location.state.article;

  // const [showBodyText, setBodyText] = useState(false);

  // function handleButtonClick() {
  //   return setBodyText(!showBodyText);
  // }
  // const [showBodyText, setBodyText] = useState(false);

  //toggle show less/more for body text
  // const toggle = () => {
  //   return setOpen(!open);
  // };

  // const getRenderedItems = () => {
  //   if (open) {
  //     return paper.bodyText.text;
  //   }
  //   return paper.bodyText.text.slice(0, MAX_ITEMS);
  // };

  return (
    <div className="App-header">
      <Header />
      <div className="articles">
        <div className="article">
          <div className="title-author-date">
            <h2>Title: {title}</h2>
            <div>Authors: {author}</div>
            <div>Publish Date: {doc_date}</div>
          </div>
          <AbstractDetails abstract={abstract} />
          {/* <button className="button" onClick={handleButtonClick}>
              <h3> Show Body Text</h3>
            </button>
            {showBodyText && <AbstractDetails abstract={abstract} />} */}

          <div className="answer-list">
            <h3>Body Text</h3>
            {/* <BodyText bodyText={bodyText} /> */}
            {bodyText.text.map((item, id) => (
              <span key={id}>
                {item}
                <br />
                <br />
              </span>
            ))}
          </div>
        </div>
        <h2>Similar Articles</h2>
        <div>
          {similar.map(article => (
            <SimilarArticle key={article.paper_id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};
// }
// ReactDOM.render(<ArticleDetails />, document.getElementById("root"));

export default ArticleDetails;

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
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
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
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
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
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
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
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
        }
      }
    }
  },
  {
    paper_id: "paper id test 5",
    doi: "doi test",
    doc_date: "2020-03-31",
    title:
      "SARS-CoV-2 Cell Entry Depends on ACE2 and TMPRSS2 and Is Blocked by a Clinically Proven Protease Inhibitor",
    authors: ["author test"],
    summary:
      "Cell entry of coronaviruses depends on binding of the viral spike (S) proteins to cellular receptors and on S protein priming by host cell proteases.\nUnravelling which cellular factors are used by SARS-CoV-2 for entry might provide insights into viral transmission and reveal therapeutic targets.\nHere, we demonstrate that SARS-CoV-2 uses the SARS-CoV receptor ACE2 for entry and the serine protease TMPRSS2 for S protein priming.\nA TMPRSS2 inhibitor approved for clinical use blocked entry and might constitute a treatment option.\nFinally, we show that the sera from convalescent SARS patients cross-neutralized SARS-2-S-driven entry.\nOur results reveal important commonalities between SARS-CoV-2 and SARS-CoV infection and identify a potential target for antiviral intervention.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
        }
      }
    }
  },
  {
    paper_id: "paper id test 6",
    doi: "doi test",
    doc_date: "2020-03-31",
    title:
      "On the interactions of the receptor-binding domain of SARS-CoV-1 and SARS-CoV-2 spike proteins with monoclonal antibodies and the receptor ACE2",
    authors: ["author test"],
    summary:
      "A new betacoronavirus named SARS-CoV-2 has emerged as a new threat to global health and economy.\nBy constant-pH Monte Carlo simulations and the PROCEEDpKa method, we have mapped the electrostatic epitopes for four monoclonal antibodies and the angiotensin-converting enzyme 2 (ACE2) on both SARS-CoV-1 and the new SARS-CoV-2 S receptor binding domain (RBD) proteins.\nHowever, the affinity between the S RBD protein from the new SARS-CoV-2 and ACE2 is higher than for any studied antibody previously found complexed with SARS-CoV-1.\nBased on physical chemical analysis and free energies estimates, we can shed some light on the involved molecular recognition processes, their clinical aspects, the implications for drug developments, and suggest structural modifications on the CR3022 antibody that would improve its binding affinities for SARS-CoV-2 and contribute to address the ongoing international health crisis.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
        }
      }
    }
  },
  {
    paper_id: "paper id test 7",
    doi: "doi test",
    doc_date: "2020-03-31",
    title: "Structural Basis of SARS-CoV-2 Spike Protein Priming by TMPRSS2",
    authors: ["author test"],
    summary:
      "The present study aims to investigate the conformational details of complex between TMPRSS2 and SARS-CoV-2 spike protein, in order to discern the finer details of the priming of viral spike and to point candidate drug targets.\nBriefly, full length structural model of TMPRSS2 was developed and docked against the resolved structure of SARS-CoV-2 spike protein with directional restraints of both cleavage sites.\nKey functional residues of TMPRSS2 (His296, Ser441 and Ser460) were found to interact with immediate flanking residues of cleavage sites of SARS-CoV-2 spike protein.\nIn summary, the present study provide structural characteristics of molecular complex between human TMPRSS2 and SARS-CoV-2 spike protein and points to the candidate drug targets that could further be exploited to direct structure base drug designing.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
        }
      }
    }
  },
  {
    paper_id: "paper id test 8",
    doi: "doi test",
    doc_date: "2020-03-31",
    title:
      "The SARS-CoV-2 exerts a distinctive strategy for interacting with the ACE2 human receptor",
    authors: ["author test"],
    summary:
      "We compare the interaction between the human ACE2 receptor and the SARS-CoV-2 spike protein with that of other pathogenic coronaviruses using molecular dynamics simulations.\nSARS-CoV, SARS-CoV-2, and HCoV-NL63 recognize ACE2 as the natural receptor but present a distinct binding interface to ACE2 and a different network of residue-residue contacts.\nSARS-CoV and SARS-CoV-2 have comparable binding affinities achieved by balancing energetics and dynamics.\nThe SARS-CoV-2–ACE2 complex contains a higher number of contacts, a larger interface area, and decreased interface residue fluctuations relative to SARS-CoV.\nThese findings expose an exceptional evolutionary exploration exerted by coronaviruses toward host recognition.\nWe postulate that the versatility of cell receptor binding strategies has immediate implications on therapeutic strategies.\nOne Sentence  Molecular dynamics simulations reveal a temporal dimension of coronaviruses interactions with the host receptor.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
        }
      }
    }
  },
  {
    paper_id: "paper id test 9",
    doi: "doi test",
    doc_date: "2020-03-31",
    title:
      "Broad Host Range of SARS-CoV-2 Predicted by Comparative and Structural Analysis of ACE2 in Vertebrates",
    authors: ["author test"],
    summary:
      "Here, we utilized a unique dataset of 410 vertebrates, including 252 mammals, to study cross-species conservation of ACE2 and its likelihood to function as a SARS-CoV-2 receptor.\nWe designed a five-category ranking score based on the conservation properties of 25 amino acids important for the binding between receptor and virus, classifying all species from very high to very low.\nWe employed a protein structural analysis to qualitatively assess whether amino acid changes at variable residues would be likely to disrupt ACE2/SARS-CoV-2 binding, and found the number of predicted unfavorable changes significantly correlated with the binding score.\nUtilized appropriately, our results may lead to the identification of intermediate host species for SARS-CoV-2, justify the selection of animal models of COVID-19, and assist the conservation of animals both in native habitats and in human care.",
    abstract: {
      text: ["abstract text test"],
      tags: {
        sciwing: ["tag 1"]
      }
    },
    bodyText: {
      text: ["bodytext text test", "paragraph 2"],
      tags: {
        "0": {
          tagPerPara: {
            "0": "Label1",
            "1": "Label2"
          }
        },
        "1": {
          tagPerPara: {
            "0": "Label3",
            "1": "Label4"
          }
        }
      }
    }
  }
];
