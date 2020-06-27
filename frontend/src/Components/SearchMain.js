import React, { useState, useEffect } from "react";
import Axios from "axios";
import Article from "./Article";
import Header from "./Header";

function SearchMain() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [alert, setAlert] = useState("");

  //url for search function
  const url = `http://localhost:8000/answer/?query=${query}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data) {
        return setAlert("No article retrieved for this query.");
      }
      console.log(result);
      setArticles(result.data);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App-header">
      <Header />
      {/*Search Input*/}
      <form onSubmit={onSubmit} className="search-form" htmlFor="search-input">
        <input
          type="text"
          name="query"
          value={query}
          id="search-input"
          placeholder="Search..."
          autoComplete="off"
          onChange={onChange}
        />
        <input type="submit" value="Search" />
      </form>
      <ul className="articles">
        {/* test using sample data */}
        {/* {JSON.stringify(articles)} */}
        {articleSample !== [] &&
          articleSample.map(article => (
            <Article key={article.paper_id} article={article} />
          ))}
        {/* actual code using api */}
        {/* {articles !== [] &&
          articles.map(article => (
            <Article key={article.paper_id} article={article} />
          ))} */}
      </ul>
    </div>
  );
}

export default SearchMain;

const articleSample = [
  {
    doi: "10.1101/2020.04.10.20060376",
    paper_id: "8198900b75d855cd82dc34ed8b9872074a9fa937",
    doc_date: "2020-04-14",
    title:
      "Giant Reverse Transcriptase-Encoding Transposable Elements at Telomeres",
    authors: ["Irina.Arkhipova", "Irina.Yushenova", "Fernando.Rodriguez"],
    abstract: {
      text: [
        "Transposable elements are omnipresent in eukaryotic genomes and have a profound impact on chromosome structure, function and evolution",
        " Their structural and functional diversity is thought to be reasonably well-understood, especially in retroelements, which transpose via an RNA intermediate copied into cDNA by the element-encoded reverse transcriptase, and are characterized by a compact structure",
        " Here, we report a novel type of expandable eukaryotic retroelements, which we call Terminons",
        " These elements can attach to G-rich telomeric repeat overhangs at the chromosome ends, in a process apparently facilitated by complementary C-rich repeats at the 3 0 -end of the RNA template immediately adjacent to a hammerhead ribozyme motif",
        " Terminon units, which can exceed 40 kb in length, display an unusually complex and diverse structure, and can form very long chains, with host genes often captured between units",
        " As the principal polymerizing component, Terminons contain Athena reverse transcriptases previously described in bdelloid rotifers and belonging to the enigmatic group of Penelope-like elements, but can additionally accumulate multiple cooriented ORFs, including DEDDy 3 0 -exonucleases, GDSL esterases/lipases, GIY-YIG-like endonucleases, rolling-circle replication initiator (Rep) proteins, and putatively structural ORFs with coiled-coil motifs and transmembrane domains",
        " The extraordinary length and complexity of Terminons and the high degree of interfamily variability in their ORF content challenge the current views on the structural organization of eukaryotic retroelements, and highlight their possible connections with the viral world and the implications for the elevated frequency of gene transfer"
      ],
      tags: {
        sciwing: [
          "background",
          "background",
          "purpose",
          "background",
          "background",
          "background",
          "finding"
        ]
      }
    },
    answer: {
      score: "100.0",
      sents: [
        "Molecular Mechanism of Action of Repurposed Drugs and Traditional Chinese Medicine Used for the Treatment of Patients Infected With COVID-19: A Systematic Review",
        "At this moment, the therapeutic approaches to handle COVID-19 are only supportive.",
        "There is neither a vaccine to prevent infections nor clinically approved antiviral drugs to treat COVID-19; therefore, identifying drug treatment options as soon as possible is critical for responding to the pandemic.",
        "Clinical trials for vaccines are currently underway.",
        "Potential vaccines have been administered to volunteers in a phase 1 safety trial by the USA government; however, the efficacy, such as how long immunity will last or if people might become infected even if they possess a high level of antibodies against SARS-CoV-2, will not become clear for at least one year after injection [16] .",
        "Furthermore, the safety of the developed vaccines is unknown because laboratory tests are being conducted in parallel to clinical trial phase 1 owing to the emergence of COVID-19 as a pandemic.",
        "The unknown efficacy and safety of the vaccines used might cause disease enhancement, by which vaccinated subjects might develop an even more severe form of disease than the subjects that have not been vaccinated, which has been shown in studies of SARS vaccines, in which vaccinated ferrets developed damaging inflammation in their livers after they were infected with the virus [17] .",
        "Until now, no drugs have been successfully developed for the control of COVID-19 [18] ; however, numerous effort are underway worldwide, and particularly in China [19] .",
        "Therefore, drug repurposing and the use of existing alternative medicine have been used as effective methods for the treatment of patients with COVID-19.",
        "In this comprehensive review, we reviewed the use of existing drugs or alternative treatment methods and discussed the mode of action from a molecular mechanism perspective to attenuate COVID-19 in the human system."
      ]
    }
  },
  {
    doi: "10.1016/s0140-6736(20)30763-7",
    paper_id: "d0dafaa2700d9fa0289b620ce87992f9cf393ae1",
    doc_date: "2020-03-31",
    title:
      "Spike protein recognition of mammalian ACE2 predicts the host range and an optimized ACE2 for SARS-CoV-2 infection",
    authors: ["Junwen.Luan", "Yue.Lu", "Xiaolu.Jin", "Leiliang.Zhang"],
    abstract: {
      text: [
        "a b s t r a c t SARS-CoV-2 causes the recent global COVID-19 public health emergency",
        " ACE2 is the receptor for both SARS-CoV-2 and SARS-CoV",
        " To predict the potential host range of SARS-CoV-2, we analyzed the key residues of ACE2 for recognizing S protein",
        " We found that most of the selected mammals including pets (dog and cat), pangolin and Circetidae mammals remained the most of key residues for association with S protein from SARS-CoV and SARS-CoV-2",
        " The interaction interface between cat/dog/pangolin/Chinese hamster ACE2 and SARS-CoV/SARS-CoV-2 S protein was simulated through homology modeling",
        " We identified that N82 in ACE2 showed a closer contact with SARS-CoV-2 S protein than M82 in human ACE2",
        " Our finding will provide important insights into the host range of SARS-CoV-2 and a new strategy to design an optimized ACE2 for SARS-CoV-2 infection",
        "\nPlease cite this article as: J",
        " Luan et al",
        ", Spike protein recognition of mammalian ACE2 predicts the host range and an optimized ACE2 for SARS-CoV-2 infection, Biochemical and Biophysical Research Communications, https://doi"
      ],
      tags: {
        sciwing: [
          "background",
          "finding",
          "method",
          "finding",
          "finding",
          "finding",
          "finding",
          "other",
          "other",
          "finding"
        ]
      }
    },
    answer: {
      score: "96.63428994184085",
      sents: [
        "In addition to direct government contributions, innovative finance mechanisms have been successful in raising funds for vaccines in the past and should be used to fund the development of COVID-19 vaccines.",
        "8, 9 The International Finance Facility for Immunisation (IFFIm) raises funds with vaccine bonds, which turn long-term contributions by donors into available cash.",
        "8 IFFIm was created to support Gavi, the Vaccine Alliance, but could be used to finance CEPI's COVID-19 vaccine efforts.",
        "With advanced market commitments, donors make funding commitments to vaccine manufacturers and, in exchange, companies sign a legally binding commitment to provide the vaccines at a price affordable to low-income and middle-income countries.",
        "Gavi's board expressed support for the use of Gavi's IFFIm and advanced market commitments to improve COVID-19 vaccine development and access.",
        "10 The need for COVID-19 vaccines is global, although the need is differentially distributed within populations.",
        "Vaccines would likely be prioritised for health-care workers and people at greatest risk of severe illness and death.",
        "High-income countries must not monopolise the global supply of COVID-19 vaccines.",
        "This risk is real: during the 2009 influenza A/H1N1 pandemic, rich countries negotiated large advance orders for the vaccine, crowding out poor countries.",
        "11 Such an outcome would result in a suboptimal allocation of an initially scarce resource."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.23.20076513",
    paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
    doc_date: "2020-04-27",
    title:
      "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
    authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "91.30101961832347",
      sents: [
        "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
        "Around the half of the responders will accept to participate in a COVID-19 vaccine clinical trial.",
        "In the context of a clinical trial, men were also more prone to participate.",
        "Fears about COVID-19 were not associated with willingness to participate in a clinical trial.",
        "However, individuals who considered themselves at-risk for COVID-19 infection were more prone to accept to participate in a clinical trial for a vaccine.",
        "Out of the context of the pandemics, the feeling to be at-risk for a disease was not the main motivation to participate in a vaccine clinical trial [7] .",
        "Moreover, older age was associated (except in the group over 80 years) with willingness to participate in a COVID-19 vaccine clinical trial, this observation contrast with a previous study about willingness to participate in a vaccine clinical trial [7] .",
        "This observation suggests that in the pandemics context, individuals are more prone to participate in a clinical trial for a vaccine."
      ]
    }
  },
  {
    doi: "10.1101/2020.03.24.20042937",
    paper_id: "9400b97894e5bd73216ef65f456acb78b2cb2754",
    doc_date: "2020-03-28",
    title: "",
    authors: [],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "89.010768975053",
      sents: [
        "Correlation between universal BCG vaccination policy and reduced morbidity and mortality for COVID-19: an epidemiological study",
        "COVID-19 has spread to most countries in the world.",
        "Puzzlingly, the impact of the disease is different in different countries.",
        "These differences are attributed to differences in cultural norms, mitigation efforts, and health infrastructure.",
        "Here we propose that national differences in COVID-19 impact could be partially explained by the different national policies respect to Bacillus Calmette-Guérin (BCG) childhood vaccination.",
        "BCG vaccination has been reported to offer broad protection to respiratory infections.",
        "We compared large number of countries BCG vaccination policies with the morbidity and mortality for COVID-19.",
        "We found that countries without universal policies of BCG vaccination (Italy, Nederland, USA) have been more severely affected compared to countries with universal and long-standing BCG policies.",
        "Countries that have a late start of universal BCG policy (Iran, 1984) had high mortality, consistent with the idea that BCG protects the vaccinated elderly population.",
        "We also found that BCG vaccination also reduced the number of reported COVID-19 cases in a country.",
        "The combination of reduced morbidity and mortality makes BCG vaccination a potential new tool in the fight against COVID-19."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.23.20076513",
    paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
    doc_date: "2020-04-27",
    title:
      "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
    authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "88.98778397193239",
      sents: [
        "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
        "will certainly or probably agree to get vaccinated against COVID-19.",
        "Older age, male gender, fear about COVID-19, being healthcare workers and individual perceived risk were associated with COVID-19 vaccine acceptance Vaccine hesitancy was associated with a decrease in COVID-19 vaccine acceptance.",
        "One thousand and five hundred and fifty responders (47.6 % 95 % CI 45.9-49.3 %) will certainly or probably agree to participate in a COVID-19 vaccine clinical trial."
      ]
    }
  },
  {
    doi: "10.1080/21645515.2020.1735227",
    paper_id: "d5448306c493aaa77174e9140427688e0f9c1824",
    doc_date: "2020-03-18",
    title:
      "Porcine Epidemic Diarrhea Virus and Discovery of a Recombinant Swine Enteric Coronavirus, Italy",
    authors: [],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "88.76804538662226",
      sents: [
        "COVID-19, an emerging coronavirus infection: advances and prospects in designing and developing vaccines, immunotherapeutics, and therapeutics",
        "Most of the therapeutic options that are available for managing COVID-19 are based on previous experiences in treating SARS-and MERS-CoV.",
        "A major reason for the lack of approved and commercially available vaccines or therapeutic agents against these CoVs might be the relative lack of interest among the pharmaceutical companies.",
        "13 These are outbreak scenarios: the demand for drugs or vaccines lasts only for a period while the outbreak lasts.",
        "The number of affected people will also be a small proportion of the global drug and vaccine market.",
        "So by the time a new drug or vaccine is developed, there might not be any patients for clinical trials and also no meaningful market for newly discovered drugs.",
        "According to WHO guidelines, infected patients will receive supportive care including oxygen therapy, fluid therapy, and antibiotics for treating secondary bacterial infections.",
        "The WHO also recommends the isolation of patients suspected or confirmed for COVID-19.",
        "16 The major therapeutic drugs that might be effective in managing COVID-19 include remdesivir, lopinavir/ritonavir alone or in combination with interferon-β, convalescent plasma, and mAbs.",
        "17 Nevertheless, before utilizing these drugs for COVID-19 pneumonia patients, clinical efficacy, and safety studies should be conducted.",
        "This article describes advances in designing vaccines and therapeutics to counter COVID-19 while also discussing experiences with SARS-and MERS-CoVs, which together could pave ways in the right direction to halt this emerging virus."
      ]
    }
  },
  {
    doi: "10.1101/2020.03.30.20048165",
    paper_id: "cb38754d3c89acdcc13f65c94ee3ced319922c30",
    doc_date: "2020-04-06",
    title:
      "Coronavirus Pandemic (SARS-COV-2): Pre-Exercise Screening Questionnaire (PESQ) for Telepresential Exercise",
    authors: [
      "Zisis.Kozlakidis",
      "Sabe.Sabesan",
      "Leônidas.De Oliveira Neto",
      "Vagner.Deuel De Oliveira Tavares",
      "Felipe.Schuch",
      "Kenio.Lima"
    ],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "87.65721628065006",
      sents: [
        "Association of BCG vaccination policy with prevalence and mortality of COVID-19",
        "is the (which was not peer-reviewed) The copyright holder for this preprint .",
        "https://doi.org/10.1101/2020.03.30.20048165 doi: medRxiv preprint Figure 2 : Effect of BCG vaccination policy on COVID-19 a.",
        "The boxplot of total cases per one million population sorted by BCG Group in countries with life expectancy higher than 78 years.",
        "Groups B and C (no current BCG vaccination) show a significantly higher rate of cases of COVID-19 compared to Group A (countries currently implementing BCG vaccination).",
        "Groups B and C (no current BCG vaccination) show a significantly (p = .0024 and p = .0326) higher rate of cases of COVID-19 compared to Group A (countries currently implementing BCG vaccination).",
        "b.",
        "The boxplot of total deaths per one million population sorted by BCG Group in countries with life expectancy higher than 78 years.",
        "Groups B and C (no current BCG vaccination) show a significantly higher rate of cases of COVID-19 compared to Group A (countries currently implementing BCG vaccination).",
        "Groups B and C (no current BCG vaccination) show a significantly (p = .0011 and p < .0001) higher rate of deaths from COVID-19 compared to Group A (countries currently implementing BCG vaccination).",
        "CC-BY 4.0 International license It is made available under a author/funder, who has granted medRxiv a license to display the preprint in perpetuity."
      ]
    }
  },
  {
    doi: "10.1016/j.ebiom.2020.102768",
    paper_id: "54adf0867cfd42839625c25623e3c0a080c605ff",
    doc_date: "2020-04-16",
    title: "Infectious Chronic Rhinosinusitis",
    authors: ["Sumit.Bose", "Leslie.Grammer", "Anju.Peters", "Chicago."],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "83.0451971854167",
      sents: [
        "Journal Pre-proof Impact of immune enhancement on Covid-19 polyclonal hyperimmune globulin therapy and vaccine development Impact of immune enhancement on Covid-19 polyclonal hyperimmune globulin therapy and vaccine development",
        "The pandemic spread of a novel coronavirus -SARS coronavirus-2 (SARS-CoV-2) as a cause of acute respiratory illness, named Covid-19, is placing the healthcare systems of many countries under unprecedented stress.",
        "Global economies are also spiraling towards a recession in fear of this new life-threatening disease.",
        "Vaccines that prevent SARS-CoV-2 infection and therapeutics that reduces the risk of severe Covid-19 are thus urgently needed.",
        "A rapid method to derive antiviral treatment for Covid-19 is the use of convalescent plasma derived hyperimmune globulin.",
        "However, both hyperimmune globulin and vaccine development face a common hurdle -the risk of antibody-mediated disease enhancement.",
        "The goal of this review is to examine the body of evidence supporting the hypothesis of immune enhancement that could be pertinent to Covid-19.",
        "We also discuss how this risk could be mitigated so that both hyperimmune globulin and vaccines could be rapidly translated to overcome the current global health crisis."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.23.20076513",
    paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
    doc_date: "2020-04-27",
    title:
      "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
    authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "82.91483612287566",
      sents: [
        "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
        "Background: The world is facing the COVID-19 pandemic.",
        "Development of vaccine is challenging.",
        "Aim: To determine the proportion of people who intend to get vaccinated against COVID-19 in France or to participate in a vaccine clinical trial.",
        "Methods: We conducted an anonymous on-line survey from the 26th of March to the 20th of April 2020.",
        "Primary endpoints were the intention to get vaccinated against COVID-19 if a vaccine was available or participate in a vaccine clinical trial.",
        "Results: Three thousand two hundred and fifty nine individuals answered the survey; women accounted for 67.4 % of the responders, 670 (20.6 %) were under 30 years of age, 1,502 (46.1 %) between 30-49 years, 803 (24.6 %) between 50-64 years, 271 (8.3%) between 65-80 years, 13 (0.4%) over 80 years of age.",
        "According to their statements, 2.512 participants (77.6%, 95 % CI 76.2-79 %)"
      ]
    }
  },
  {
    doi: "10.1101/2020.04.07.20053272",
    paper_id: "eb75b255e56960c472d2d13c3b23d5b392e95253",
    doc_date: "2020-04-08",
    title:
      "Semantic overlay network for large-scale spatial information indexing",
    authors: [
      "Zhiqiang.Zou",
      "Yue.Wang",
      "Kai.Cao",
      "Tianshan.Qu",
      "Zhongmin.Wang"
    ],
    abstract: {
      text: [
        "The increased demand for online services of spatial information poses new challenges to the combined filed of Computer Science and Geographic Information Science",
        " Amongst others, these include fast indexing of spatial data in distributed networks",
        " In this paper we propose a novel semantic overlay network for large-scale multi-dimensional spatial information indexing, called SON_LSII, which has a hybrid structure integrating a semantic quad-tree and Chord ring",
        " The SON_LSII is a small world overlay network that achieves a very competitive trade-off between indexing efficiency and maintenance overhead",
        " To create SON_LSII, we use an effective semantic clustering strategy that considers two aspects, i",
        "e",
        ", the semantic of spatial information that peer holds in overlay network and physical network performances",
        " Based on SON_LSII, a mapping method is used to reduce the multi-dimensional features into a single dimension and an efficient indexing algorithm is presented to support complex range queries of the spatial information with a massive number of concurrent users",
        " The results from extensive experiments demonstrate that SON_LSII is superior to existing overlay networks in various respects, including scalability, maintenance, rate of indexing hits, indexing logical hops, and adaptability",
        " Thus, the proposed SON_LSII can be used for large-scale spatial information indexing"
      ],
      tags: {
        sciwing: [
          "background",
          "background",
          "purpose",
          "finding",
          "method",
          "other",
          "background",
          "method",
          "finding",
          "finding"
        ]
      }
    },
    answer: {
      score: "79.07138672654771",
      sents: [
        "Connecting BCG Vaccination and COVID-19: Additional Data Authors, their academic degrees, designations and affiliations",
        "The reasons for a wide variation in severity of coronavirus disease 2019 (COVID-19) across the affected countries of the world are not known.",
        "Two recent studies have suggested a link between the BCG vaccination policy and the morbidity and mortality due to COVID-19.",
        "In the present study we compared the impact of COVID-19 in terms of case fatality rates (CFR) between countries with high disease burden and those with BCG revaccination policies presuming that revaccination practices would have provided added protection to the population against severe COVID-19.",
        "We found a significant difference in the CFR between the two groups of countries.",
        "Our data further supports the view that universal BCG vaccination has a protective effect on the course of COVID-19 probably preventing progression to severe disease and death.",
        "Clinical trials of BCG vaccine are urgently needed to establish its beneficial role in COVID-19 as suggested by the epidemiological data, especially in countries without a universal BCG vaccination policy."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.07.20053272",
    paper_id: "eb75b255e56960c472d2d13c3b23d5b392e95253",
    doc_date: "2020-04-08",
    title:
      "Semantic overlay network for large-scale spatial information indexing",
    authors: [
      "Zhiqiang.Zou",
      "Yue.Wang",
      "Kai.Cao",
      "Tianshan.Qu",
      "Zhongmin.Wang"
    ],
    abstract: {
      text: [
        "The increased demand for online services of spatial information poses new challenges to the combined filed of Computer Science and Geographic Information Science",
        " Amongst others, these include fast indexing of spatial data in distributed networks",
        " In this paper we propose a novel semantic overlay network for large-scale multi-dimensional spatial information indexing, called SON_LSII, which has a hybrid structure integrating a semantic quad-tree and Chord ring",
        " The SON_LSII is a small world overlay network that achieves a very competitive trade-off between indexing efficiency and maintenance overhead",
        " To create SON_LSII, we use an effective semantic clustering strategy that considers two aspects, i",
        "e",
        ", the semantic of spatial information that peer holds in overlay network and physical network performances",
        " Based on SON_LSII, a mapping method is used to reduce the multi-dimensional features into a single dimension and an efficient indexing algorithm is presented to support complex range queries of the spatial information with a massive number of concurrent users",
        " The results from extensive experiments demonstrate that SON_LSII is superior to existing overlay networks in various respects, including scalability, maintenance, rate of indexing hits, indexing logical hops, and adaptability",
        " Thus, the proposed SON_LSII can be used for large-scale spatial information indexing"
      ],
      tags: {
        sciwing: [
          "background",
          "background",
          "purpose",
          "finding",
          "method",
          "other",
          "background",
          "method",
          "finding",
          "finding"
        ]
      }
    },
    answer: {
      score: "79.07138672654771",
      sents: [
        "Connecting BCG Vaccination and COVID-19: Additional Data Authors, their academic degrees, designations and affiliations",
        "The reasons for a wide variation in severity of coronavirus disease 2019 (COVID-19) across the affected countries of the world are not known.",
        "Two recent studies have suggested a link between the BCG vaccination policy and the morbidity and mortality due to COVID-19.",
        "In the present study we compared the impact of COVID-19 in terms of case fatality rates (CFR) between countries with high disease burden and those with BCG revaccination policies presuming that revaccination practices would have provided added protection to the population against severe COVID-19.",
        "We found a significant difference in the CFR between the two groups of countries.",
        "Our data further supports the view that universal BCG vaccination has a protective effect on the course of COVID-19 probably preventing progression to severe disease and death.",
        "Clinical trials of BCG vaccine are urgently needed to establish its beneficial role in COVID-19 as suggested by the epidemiological data, especially in countries without a universal BCG vaccination policy."
      ]
    }
  },
  {
    doi: "10.1016/j.eururo.2020.04.039",
    paper_id: "31042ccf8374ad96d39d8156d9e2ced042734ba9",
    doc_date: "2020-04-24",
    title:
      "High-throughput detection of mutations responsible for childhood hearing loss using resequencing microarrays",
    authors: [
      "Prachi.Kothiyal",
      "Stephanie.Cox",
      "Jonathan.Ebert",
      "Ammar.Husami",
      "Margaret.Kenna",
      "John.Greinwald",
      "Bruce.Aronow",
      "Heidi.Rehm"
    ],
    abstract: {
      text: [
        "Background: Despite current knowledge of mutations in 45 genes that can cause nonsyndromic sensorineural hearing loss (SNHL), no unified clinical test has been developed that can comprehensively detect mutations in multiple genes",
        " We therefore designed Affymetrix resequencing microarrays capable of resequencing 13 genes mutated in SNHL (GJB2, GJB6, CDH23, KCNE1, KCNQ1, MYO7A, OTOF, PDS, MYO6, SLC26A5, TMIE, TMPRSS3, USH1C)",
        " We present results from hearing loss arrays developed in two different research facilities and highlight some of the approaches we adopted to enhance the applicability of resequencing arrays in a clinical setting",
        " Results: We leveraged sequence and intensity pattern features responsible for diminished coverage and accuracy and developed a novel algorithm, sPROFILER, which resolved >80% of no-calls from GSEQ and allowed 99",
        "6% (range: 99",
        "2-99",
        "8%) of sequence to be called, while maintaining overall accuracy at >99",
        "8% based upon dideoxy sequencing comparison",
        " Conclusions: Together, these findings provide insight into critical issues for disease-centered resequencing protocols suitable for clinical application and support the use of array-based resequencing technology as a valuable molecular diagnostic tool for pediatric SNHL and other genetic diseases with substantial genetic heterogeneity"
      ],
      tags: {
        sciwing: [
          "background",
          "method",
          "finding",
          "finding",
          "method",
          "other",
          "finding",
          "finding",
          "finding"
        ]
      }
    },
    answer: {
      score: "77.32363430297835",
      sents: [
        "Editorial 4 Adjustments in the Use of Intravesical Instillations of Bacillus Calmette-Guérin for High-risk Non-muscle-invasive Bladder",
        "67 courses that have been ongoing for longer than 1 yr can be 68 safely terminated for high-risk NMIBC patients.",
        "Although 69 the European Association of Urology (EAU) guidelines [5] 70 recommend 3-weekly instillations at 3, 6, 12, 18, 24, 30, and 71 36 mo on the basis of European Organization for Research 72 and Treatment of Cancer data [6], the optimal schedule for 73 maintenance BCG remains unclear.",
        "Among high-risk NMIBC 74 patients, maintenance BCG reduces the rates of recurrence 75 and progression by approximately 15% and 4%, respectively 76 [4,7].",
        "77 3.",
        "Patients with suspected or confirmed COVID-19 78 Any patient with a suspicion of COVID-19 should be tested.",
        "79 In the presence of confirmed COVID-19, a cautionary 80 approach would be to delay instillation of BCG given that 81 there are no data on tolerance of intravesical BCG among 82 COVID-19 patients.",
        "The median age (70 yr) and high 83 comorbidity status of patients diagnosed with NMIBC 84 increase their risk of developing a very severe form of 85 COVID-19 [2].",
        "This could be associated with both more 86 adverse side effects of BCG and/or more severe forms of 87 COVID-19.",
        "On the basis of the previously described natural 88 history of COVID-19 [2], it is advisable to delay BCG 89 instillation for at least 3 wk after initial symptoms to allow 90 for complete recovery.",
        "91 4.",
        "BCG vaccination and COVID-19 92 Recent theories suggest that use of BCG as a vaccination 93 could prevent COVID-19.",
        "This is based on the epidemiologi-94 cal observation that older patients are at higher risk of 95 COVID-19, especially severe forms, while younger patients 96 could be protected by BCG vaccination providing childhood 97 immunity that may last for approximately 20 yr [8].",
        "In 98 addition, preclinical studies in mice have shown that BCG 99 vaccination could offer protection against various DNA and 100 RNA viruses via induction of innate immune memory and 101 heterologous lymphocyte activation [9].",
        "Two randomized 102 controlled trials are currently testing BCG vaccination for 103 COVID-19 prevention in Australia (NCT04327206) and the 104 Netherlands (NCT04328441).",
        "Arguably, intravesical instilla-105 tions of BCG for induction of a local immune response with 106 activation of macrophages, neutrophils, and natural killer T 107 lymphocytes [10] could help in preventing and/or control-108 ling COVID-19, but this is only a hypothesis that cannot 109 currently be used for clinical decision-making.",
        "Only post-110 crisis retrospective analyses of COVID-19 incidence among 111 NMIBC patients treated with intravesical instillations of 112 BCG during the pandemic will provide interesting insights 113 into this view.",
        "114 5.",
        "Management of BCG side effects 115 In managing side effects related to intravesical BCG 116 instillations, careful attention should be paid to persistent 117 fever by isolating and testing patients for COVID-19."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.23.20076513",
    paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
    doc_date: "2020-04-27",
    title:
      "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
    authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "77.26867725014299",
      sents: [
        "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
        'In this on-line survey, we observed that nearly 77 % of the responders would accept a vaccine against COVID-19 although 35 % of the responders were qualified as "vaccine hesitant".',
        "Moreover, 47.6 % of the responders would accept to participate in a clinical trial for a COVID-19 vaccine.",
        "Concerning the intention to get vaccinated, our results are similar to the results of the longitudinal Coconel study conducted by the Observatoire Régional de Santé Provence Alpes Côte d'Azur [10] .",
        "Similar to their results, we observed that men were more prone to get vaccinated than women.",
        "Women accounted for the vast majority of our study responders, suggesting that in real-life settings, COVID-19 vaccine acceptance could be greater.",
        "In addition, older individuals are more prone to get vaccinated in both studies, this is probably due to a greater perceived risk of getting infected and developing a severe disease in older people.",
        "In the same vein, healthcare workers were more prone to get vaccinated or to participate in a vaccine clinical trial than the others, it is probably due, in part, to a greater perceived risk to get infected.",
        "Healthcare workers are particularly vulnerable and accounted for 10 % of the infected people in Italy [11] .",
        "On the contrary, expecting a low infection risk is associated with a lower willingness to get vaccinated [12] ."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.18.20071142",
    paper_id: "46ec3a9b64437b3a7908f0efbf575e1645ee0419",
    doc_date: "2020-04-23",
    title:
      "Porcine Circovirus type 2 -Systemic disease on pig farms and associated knowledge of key players in the pig industry in Central Uganda",
    authors: [
      "Eneku.Wilfred",
      "Francis.Mutebi",
      "Frank.Mwiine",
      "Okwee-Acai.James",
      "Ojok.Lonzy"
    ],
    abstract: {
      text: [
        "A B S T R A C T Porcine Circovirus type 2 (PCV2) infections and associated diseases have been rarely studied in Africa",
        " There is no report of PCV2 infection-associated morbidity and the level of awareness of stakeholders has never been investigated in Uganda",
        " This cross sectional survey investigated the occurrence of Porcine Circovirus type 2systemic disease (PCV2-SD) among pigs and the associated level of awareness of stakeholders in Central Uganda",
        " Data were collected using questionnaires, Focus Group Discussions (FGDs), key informant interviews and laboratory investigations",
        " All respondents (n = 131) and farmers attending FGDs (n = 31) had never heard of PCV2-SD and only 16",
        "7% (n = 2) of the interviewed animal health workers (n = 12) knew about the disease",
        " Among the farms, 20 piglets presenting with a chronic wasting and a persistent diarrhea were detected and sampled for laboratory investigations",
        " Severe lymphoid depletion with histiocytic and macrophage infiltration in lymphoid organs (n = 8), shortening of intestinal villi (n = 9), abscesses in various organs (n = 15) and granulomatous pneumonia (n = 2) were the major histopathological lesions described",
        " Immunohistochemistry and PCR assays on organs with implicating lesions confirmed PCV2 infection in 25% (n = 5) of the 20 pigs",
        " The study confirmed the occurrence of PCV2 infections among piglets with persistent diarrhea on pig farms in central Uganda and revealed a low level of associated knowledge among farmers and veterinary practitioners",
        " The study arouses the need for systematic studies on prevalence of PCV2 infections and sensitization of stakeholders on occurrence of PCV2 infections in Uganda"
      ],
      tags: {
        sciwing: [
          "background",
          "background",
          "purpose",
          "method",
          "finding",
          "finding",
          "method",
          "finding",
          "finding",
          "finding",
          "finding"
        ]
      }
    },
    answer: {
      score: "76.64097930290502",
      sents: [
        "Is there evidence that BCG vaccination has non-specific protective effects for COVID 19 infections or is it an illusion created by lack of testing?",
        "The landscape of COVID-19 attributable deaths and cases throughout the world is constantly evolving.",
        "Given this constant change, we have to be careful before making assertions on how BCG vaccinations influence the emergence of COVID-19-related cases and deaths.",
        "We cannot exclude endogenous factors such as testing, that affect the relationship between the BCG vaccine and number of COVID-19 attributable cases and mortality.",
        "We argue that it may be beneficial to create a longitudinal study that can be used to get more insights of the relationship between the BCG vaccine and COVID-19.",
        "We are currently in the process of creating a panel dataset to analyze the effects of the BCG vaccine inclusion on COVID-19 attributable cases and mortality change over time."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.23.20076513",
    paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
    doc_date: "2020-04-27",
    title:
      "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
    authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "75.52102463738123",
      sents: [
        "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
        "The impact of the current pandemic on the intention to participate in a COVID-19 vaccine clinical trial and on the intention to get vaccinated against COVID-19 vaccine is not obvious.",
        "This is a particular concern in France, which has been shown to be the leader-country of vaccine hesitancy [8] .",
        "The aim of this study was to evaluate the impact of the pandemics on the intention to get vaccinated against COVID-19."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.08.20056051",
    paper_id: "3444632493df477a1e1264db4c8f61f78829f4c7",
    doc_date: "2020-04-11",
    title: "Journal Pre-proof COVID-19 spread: the Italian case",
    authors: ["Sergio.Harari", "Michele.Vitacca", "M.Fers"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "67.79831413435105",
      sents: [
        "Exercising caution in correlating COVID-19 incidence and mortality rates with BCG vaccination policies due to variable rates of SARS CoV-2 testing",
        "Our independent analysis of COVID-19 cases per million of inhabitant in 78 countries that were stratified based on the prevalence of BCG vaccination (universal vaccination policy) shows that, a priori, there is a correlation between current universal BCG vaccination policy and a lower incidence of CoV-2 infection and related deaths.",
        "However, we note that testing rates (tests per million inhabitants) was positively correlated with incidence of CoV-2 infection.",
        "Taking in consideration this important bias, we curated the data to compare the number cases amongst countries with distinct universal BCG policy based on high CoV-2 testing rates, as defined by 2,500 tests or more per million inhabitants.",
        "The results show a lack of significant difference in incidence of COVID-19 cases in countries with current universal BCG vaccination policy and countries with never-or in the past-universal BCG vaccination policy.",
        "Other variables tested included population density, percent urban population, percent migrants, median age, sex, time since the first confirmed COVID-19 case, percent smokers, and heart associated mortality.",
        "Urban population and median age were significantly associated with increased number of cases; however, their impact were not as significant as CoV-2 testing rates.",
        "Interestingly, COVID-19 associated mortality was decreased in countries with current universal BCG vaccination policy and similar CoV-2 testing rates.",
        "This may however reflect potential inaccuracies in reporting of COVID-19 mortalities due to lack of Cov-2 testing.",
        "Our study is limited by several critical considerations, which were not addressed here.",
        "These include the variability and inaccuracies in reporting positive cases and reporting specific mortality associated with CoV-2 infection, lack of reporting on asymptomatic or minimally symptomatic cases, the impact of social and economic barriers in accessing care, the association with other co-morbidities, and the adherence or access to vaccination as per policy.",
        "In this regard, a recent report showed a correlation of universal BCG vaccination policies and the number of COVID-19 cases when controlling for income [7] .",
        "This study however did not take in consideration CoV-2 testing rates.",
        "It is also possible that the lower rate of CoV-2 testing, combined with lower viral loads in traditionally warmer countries with higher incidence of tuberculosis, could impact our observations [8] ."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.18.20071142",
    paper_id: "46ec3a9b64437b3a7908f0efbf575e1645ee0419",
    doc_date: "2020-04-23",
    title:
      "Porcine Circovirus type 2 -Systemic disease on pig farms and associated knowledge of key players in the pig industry in Central Uganda",
    authors: [
      "Eneku.Wilfred",
      "Francis.Mutebi",
      "Frank.Mwiine",
      "Okwee-Acai.James",
      "Ojok.Lonzy"
    ],
    abstract: {
      text: [
        "A B S T R A C T Porcine Circovirus type 2 (PCV2) infections and associated diseases have been rarely studied in Africa",
        " There is no report of PCV2 infection-associated morbidity and the level of awareness of stakeholders has never been investigated in Uganda",
        " This cross sectional survey investigated the occurrence of Porcine Circovirus type 2systemic disease (PCV2-SD) among pigs and the associated level of awareness of stakeholders in Central Uganda",
        " Data were collected using questionnaires, Focus Group Discussions (FGDs), key informant interviews and laboratory investigations",
        " All respondents (n = 131) and farmers attending FGDs (n = 31) had never heard of PCV2-SD and only 16",
        "7% (n = 2) of the interviewed animal health workers (n = 12) knew about the disease",
        " Among the farms, 20 piglets presenting with a chronic wasting and a persistent diarrhea were detected and sampled for laboratory investigations",
        " Severe lymphoid depletion with histiocytic and macrophage infiltration in lymphoid organs (n = 8), shortening of intestinal villi (n = 9), abscesses in various organs (n = 15) and granulomatous pneumonia (n = 2) were the major histopathological lesions described",
        " Immunohistochemistry and PCR assays on organs with implicating lesions confirmed PCV2 infection in 25% (n = 5) of the 20 pigs",
        " The study confirmed the occurrence of PCV2 infections among piglets with persistent diarrhea on pig farms in central Uganda and revealed a low level of associated knowledge among farmers and veterinary practitioners",
        " The study arouses the need for systematic studies on prevalence of PCV2 infections and sensitization of stakeholders on occurrence of PCV2 infections in Uganda"
      ],
      tags: {
        sciwing: [
          "background",
          "background",
          "purpose",
          "method",
          "finding",
          "finding",
          "method",
          "finding",
          "finding",
          "finding",
          "finding"
        ]
      }
    },
    answer: {
      score: "67.21821575755995",
      sents: [
        "Is there evidence that BCG vaccination has non-specific protective effects for COVID 19 infections or is it an illusion created by lack of testing?",
        "Below we present most important highlights and findings related to the analyzed literature.",
        "Shet et al.",
        "(2020) apply simple log-linear regression model to investigate COVID-related mortality and BCG vaccinations.",
        "The researchers use the following covariates in their model: GDP per capita, the percentage of population 65 years and above and the relative position of each country on the epidemic timeline.",
        "The findings show that countries with BCS vaccinations show lower levels of COVID-19-related mortality.",
        "In turn, Berg et al.",
        "(2020) , after analyzing data on first 30day COVID-19 country-wise outbreaks, argue that BCG immunizations are associated with flattened growth curves for confirmed cases of COVID-19 infections and deaths.",
        "Similarly, Hegarty et al.",
        "(2020) argue that countries that vaccinate their populations against BCG, experience less COVID-19-related cases and lower death rates caused by COVID-19.",
        "Miller et al.",
        "(2020) propose that differences between countries in COVID-19 impact could be partially explained by different levels of BCG policy implementations."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.23.20076513",
    paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
    doc_date: "2020-04-27",
    title:
      "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
    authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "56.6730307938748",
      sents: [
        "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
        "Recruitment of volunteers in a vaccine clinical trial is a real challenge [6] , and some trials are stopped du to difficulties in recruitment.",
        "Vaccine hesitancy may also has an impact on recruitment in COVID-19 vaccine clinical trial [7] .",
        "After its clinical development, a COVID-19 vaccine will also face the challenge of acceptance by the general population in a post-crisis context."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.23.20076513",
    paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
    doc_date: "2020-04-27",
    title:
      "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
    authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "51.799984030270785",
      sents: [
        "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
        "The questionnaire addressed: (1) demographical characteristics (age, chronic medical conditions), (2) fears about COVID-19, (3) history of vaccination against pandemic H1N1 influenza and seasonal influenza, (4) intention to get vaccinated if a COVID-19 vaccine was available, (5) vaccine hesitancy."
      ]
    }
  },
  {
    doi: "10.1101/2020.04.23.20076513",
    paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
    doc_date: "2020-04-27",
    title:
      "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
    authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
    abstract: {
      text: [],
      tags: {
        sciwing: []
      }
    },
    answer: {
      score: "50.0",
      sents: [
        "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
        "Conclusions and Relevance: Nearly 75 % and 48 % of the survey responders were likely to accept vaccination or participation in a clinical trial against COVID-19.",
        "Vaccine hesitancy will be the major barrier to COVID-19 vaccine uptake."
      ]
    }
  }
];
