import React, { useState, useEffect } from "react";
import Axios from "axios";
import Article from "./Article";
import Header from "./Header";
import test_data from "./test_data";

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
        <div className="article">
          <h3>Query:&nbsp;{query}</h3>
        </div>

        {/* test using sample data */}
        {/* {JSON.stringify(articles)} */}
        {/* {articleSample !== [] &&
          articleSample.map(article => (
            <Article key={article.paper_id} article={article} />
          ))} */}
        {/* actual code using api */}
        {articles !== [] &&
          articles.map(article => (
            <Article key={article.paper_id} article={article} />
          ))}
      </ul>
    </div>
  );
}

export default SearchMain;
const articleSample = [
  {
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
    },

    paper_id: "d0dafaa2700d9fa0289b620ce87992f9cf393ae1",
    doi: "10.1016/s0140-6736(20)30763-7",
    doc_date: "2020-03-31",
    title:
      "Spike protein recognition of mammalian ACE2 predicts the host range and an optimized ACE2 for SARS-CoV-2 infection",
    authors: ["Junwen.Luan", "Yue.Lu", "Xiaolu.Jin", "Leiliang.Zhang"],
    summary: "",
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
    bodyText: {
      text: [
        "Corona Virus Disease 2019 (COVID- 19) , which was reported from Wuhan city, Hubei province of China, has caused over 78,000 human infections and more than 2700 deaths (as of February 25, 2020) [1, 2] . Severe Acute Respiratory Syndrome Corona Virus 2 (SARS-CoV-2) was identified as the pathogen of COVID- 19 [1e3] . After SARS-CoV and MERS-CoV, SARS-CoV-2 has become the third coronavirus that causes severe respiratory disease and human death [4, 5] .",
        "Belonging to the subgenus sarbecvirus of Coronaviridae, both SARS-CoV-2 and SARS-CoV are human SARS-related coronavirus (SARSr-CoV). Its genome is a single-stranded RNA composed of about 30 kb nucleotides. SARS-CoV-2 encodes at least four major structural proteins, namely spike protein (S), membrane protein (M), envelope protein (E), and nucleocapsid protein (N) [6] . S protein, which is a type I glycoprotein, protrudes from the surface of the virus and can contact the host cell earlier. S protein has attracted great attention because of its function in receptor binding.",
        "Angiotensin-converting enzyme 2 (ACE2) binds to the receptorbinding motif (RBM) in the receptor-binding domain (RBD) of SARS-CoV and functions as a receptor for SARS-CoV [7, 8] . ACE2 is widely distributed in heart, liver, testis, kidney, intestine and other tissues. It has the physiological functions of regulating heart and kidney function and controlling blood pressure [9] . Recently, it has been found that human ACE2 promoted the entry of SARS-CoV-2 into the cells [3, 10] . RBD domain of SARS-CoV-2 interacts with human ACE2. Thus, ACE2 is defined as the receptor for SARS-CoV-2.",
        "The specificity of the interaction between virus and receptor determines the host tropism and host range. The origin of SARS-CoV-2 is presumed to be bat [3] . However, the intermediate host is not clear, and some studies suggest that pangolin is involved in the evolution of SARS-CoV-2 [11, 12] . It is not clear which mammals are involved in the evolution of SARS-CoV-2 and which animals may be infected by SARS-CoV-2. By sequence alignment of key amino acids binding to RBD in ACE2, the interaction between RBD of SARS-CoV-2/SARS-CoV and mammalian ACE2 was predicted. Based on the potential interaction between S protein and mammalian ACE2, it was speculated that SARS-CoV-2/SARS-CoV preserved the ability to infect many mammals including cat, dog, pangolin and Chinese hamster. From the structure stimulation, we identified N82 in ACE2 show closer contact with F486 of SARS-CoV-2 S protein compared with M82 of ACE2.",
        "The S protein sequence of SARS-CoV-2 is YP_009724390.1, and the S protein sequence of SARS-CoV is NP_828851.1. RBM of SARS-CoV is from 424 to 494. RBM of SARS-CoV-2 is from 437 to 508.",
        "A total of 42 mammalian ACE2 protein sequences were selected from the wild animal protection lists of Hubei Province and Jiangxi Province, primates, bats, dog, and cat. These sequences are as follows: hACE2: Homo sapiens (BAB40370. Cavia porcellus (XP_023417808.1), CgACE2: Cricetulus griseus (A0A061HZ66). Based on the known key sites in SARS-CoV S protein interacting with human ACE2, we analyzed whether these sites were conserved on ACE2 from wild mammals and domestic pets. Phylogenetic and molecular evolutionary analyses of ACE2 were conducted using MEGA version X [13] . Phylogenetic tree was generated with Jones-Taylor-Thornton (JTT) evolutionary model using Maximum Likelihood method.",
        "The interaction interfaces of SARSr-CoV S and ACE2 from cat/ dog/pangolin/Chinese hamster were simulated by Chimera software Ver 1.14 [14] . The simulation were based on the structures of hACE2 with SARS-CoV S RBD (PDB: 2AJF) [7] and hACE2 with SARS-CoV-2 S RBD (PDB: 6LZG).",
        "Human ACE2 is the receptor for both SARS-CoV and SARS-CoV-2. According to the literature [15] , the key amino acids (AAs) in the S protein of SARS-CoV interacting with human ACE2 are Y442, L472, N479, D480, T487, Y491 [7, 15] . We compared the RBM in S protein of SARS-CoV-2 with that of SARS-CoV (Fig. 1A) . These amino acids corresponding to SARS-CoV-2 are L455, F486, Q493, S494, N501 and Y505 (Fig. 1A) . Although five of six key AAs in SARS-CoV-2 are changed compared with SARS-CoV, the overall structure of interfaces of ACE2-RBM are similar (Fig. 1B) .",
        "The key AAs in hACE2 for interacting with RBM are K31, E35, D38, M82 and K353 [7, 15] . Among them, K31 and K353 in hACE2 are most critical residues for RBM recognition. Because the overall structure of interfaces of ACE2-RBM in SARS-CoV-2 and SARS-CoV are similar, we analyzed the key RBD recognizing AAs of ACE2 protein from selected mammals, as shown in Table 1 . We predicted that the mammals whose ACE2 could bind to the S protein of SARS- Next, we constructed a phylogenetic tree for mammalian ACE2 proteins. The ACE2 protein sequences of 42 mammalian animals were compared by ClustalW method of MEGA-X software. Then the JTT model of maximum likelihood method was used to construct ACE2 phylogenetic tree. As shown in Fig. 2 , species that cannot bind to S protein are marked in red, and species that can bind to S protein are marked in green. No correlation between genetic distance and the interaction of ACE2/S was found. Some Pets including dog (Canis lupus familiaris) and cat (Felis catus) potentially recognize S protein, indicating the importance to monitor the pets for SARS-CoV-2 infection. We found that four members of Circetidae including Mesocricetus auratus, Phodopus campbelli, Ictidomys tridecemlineatus, and Cricetulus griseus remained the key residues for association with S protein from SARS-CoV and SARS-CoV-2, though two members of Muridae (Rattus norvegicus, Mus musculus) could not bind to S protein. This founding suggested that Circetidae mammals could be developed as SARSr-CoV small animal models.",
        "We noticed that ACE2 from dog, cat, pangolin and Chinese hamster potentially associated with S protein (Table 1 ). Next, we predicted the structure of cat/dog/pangolin/Chinese hamster ACE2 with SARSr-CoV RBD. The structure of protein complex between RBD region of S protein of SARS-CoV and human ACE2 has been resolved (PDB: 2AJF) [7] . Recently, the structure of SARS-CoV-2 RBD with human ACE2 was also determined [16, 17] . We used Chimera software to display homologous model, and obtained the interaction complex structure of RBD region of SARSr-CoV (SARS-CoV-2 and SARS-CoV) and cat/dog/pangolin/Chinese hamster ACE2. Overall, the RBM structures of S protein of SARS-CoV-2 and SARS-CoV are similar (Fig. 3) . Interaction interface of SARSr-CoV RBD and cat/dog/pangolin/Chinese hamster ACE2 confirmed the potential interaction between SARS-CoV-2 and cat/dog/pangolin/ Chinese hamster ACE2, indicating that these ACE2 could support SARS-CoV-2 entry. The AA in 82 position of human ACE2 is M82, while the corresponding AA in cat, dog, pangolin and Chinese hamster ACE2 is T82, T81, N82 and N82, respectively. The distance between F486 of SARS-CoV-2 S protein and the corresponding AA in ACE2 is 3.753Å for human (Fig. 1A) , 2.695Å for dog (Fig. 3A) , 3.753Å for cat (Fig. 3B ), 1.621Å for pangolin (Fig. 3C) , and 2.024Å for Chinese hamster (Fig. 3D) , respectively. We concluded that N82 in ACE2 showed closer contact with F486 of SARS-CoV-2 S protein than M82 of ACE2.",
        "The host tropism of zoonotic coronavirus is hybrid, and it is important to determine the natural host and host range of coronavirus. In the past two decades, SARS-CoV, MERS-CoV and SARS-CoV-2 have caused serious outbreaks of human infectious diseases. All the three human coronaviruses originated from bats, but the intermediate hosts were different. SARS-CoV is believed to come from the Paguma larvata [18] , and the intermediate host of MERS-CoV is Camelus dromedaries [19] . The new coronavirus SARS-CoV-2 has recently caused a serious epidemic in China, but its intermediate hosts are not clear.",
        "S protein of SARS-CoV-2 interacts with human ACE2, which promotes the entry of SARS-CoV-2, indicating that human ACE2 is the receptor of SARS-CoV-2 [3] . ACE2 contains at least five key amino acids critical for binding S protein of SARSr-CoV [15] . Based on these five amino acids, we analyzed the corresponding amino Table 1 Prediction of the RBD binding capacity of mammalian ACE2.",
        "AA position  matched AA  binding capacity   31  35  38  82  353 hACE2",
        "Phylogenetic tree of mammalian ACE2 proteins. ACE2 sequences from a total of 42 mammals were analyzed by MEGA-X and the phylogenetic tree was constructed with JTT evolutionary model using Maximum Likelihood method. The red represents the species whose ACE2 cannot bind to S protein, and the green is the species whose ACE2 associate with S protein. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.)",
        "acids of different mammals to determine which mammalian ACE2 could interact with S protein of human SARSr-CoV. By analyzing the protein sequence of mammalian ACE2, we found that the ACE2 of Camelus dromedarius, Procyon lotor, Rhinolophus ferrumequinum, Rattus norvegicus, Mus musculus, Ornithorhynchus anatinus, Loxodonta africana, Erinaceus europaeus, Nyctereutes procyonoides, Suricata suricatta, Dipodomys ordii, and Cavia porcellus lose the capability to associate with S protein (Table 1) . These mammals could be ruled out from the potential host list for SARS-CoV-2. We found that S protein may bind to ACE2 from some wild mammals, which suggests that we should investigate whether these animals may be intermediate hosts for SARS-CoV-2. It has been reported that the RBM region in S protein of pangolin coronavirus is similar to that of S protein of SARS-CoV-2 [11, 12] , which may be involved in the recombination of SARS-CoV-2. We identified that N82 of pangolin ACE2 showed closer contact with RBD than human ACE2 (Fig. 3C) , indicating that pangolin ACE2 might show better affinity to SARS-CoV-2. This finding further supports the hypothesis that pangolin is involved in SARS-CoV-2 evolution. In current study, only a limited list of wild mammals is covered. In the future, we should select more mammals for study. Although no SARS-CoV-2 has been found in domestic cats and dogs, cat/dog ACE2 may bind to S protein of SARS-CoV-2. In the future, we should pay attention to monitoring whether domestic cats and dogs could be infected by SARS-CoV-2. Animal model is an important tool in the study of infectious diseases. ACE2 of mice cannot interact with SARS-CoV-2, so it cannot be used as animal model of SARS-CoV-2 directly. Some studies have generated mice transfected with human ACE2 as the models to study SARS-CoV [20] , and these mice can also be used as animal models for SARS-CoV-2 infection. Interestingly, we identified that N82 in ACE2 is closer to RBD than M82 (Fig. 3C and D) , indicating a novel strategy to design an optimized ACE2 for SARS-CoV-2 infection. We speculated that small peptide based on N82 of ACE2 might show higher affinity to SARS-CoV-2 RBD. We proposed that if M82 in human ACE2 was mutated to N82, the modified human ACE2 will enhance SARS-CoV-2 infection. In the future, those ideas will be tested in cell culture and animal model. We noticed that the ACE2 proteins from Circetidae (Mesocricetus auratus, Phodopus campbelli, Ictidomys tridecemlineatus, and Cricetulus griseus) are capable to recognize RBD. Mesocricetus auratus (golden hamster) and Cricetulus griseus (Chinese hamster) are experimental animals and our finding indicates the possibility to develop small animal models for SARS-CoV-2 infection using Chinese hamster and golden hamster.",
        "The authors declare that there are no conflicts of interest."
      ],
      tags: {
        sciwing: {
          "1,1": "treatment",
          "1,3": "test",
          "3,3": "problem",
          "5,1": "treatment",
          "5,3": "test",
          "4,3": "problem"
        }
      }
    },
    similar: [
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
      }
    ]
  }
];

// const articleSample = [
//   {
//     answer: {
//       score: "96.63428994184085",
//       sents: [
//         "In addition to direct government contributions, innovative finance mechanisms have been successful in raising funds for vaccines in the past and should be used to fund the development of COVID-19 vaccines.",
//         "8, 9 The International Finance Facility for Immunisation (IFFIm) raises funds with vaccine bonds, which turn long-term contributions by donors into available cash.",
//         "8 IFFIm was created to support Gavi, the Vaccine Alliance, but could be used to finance CEPI's COVID-19 vaccine efforts.",
//         "With advanced market commitments, donors make funding commitments to vaccine manufacturers and, in exchange, companies sign a legally binding commitment to provide the vaccines at a price affordable to low-income and middle-income countries.",
//         "Gavi's board expressed support for the use of Gavi's IFFIm and advanced market commitments to improve COVID-19 vaccine development and access.",
//         "10 The need for COVID-19 vaccines is global, although the need is differentially distributed within populations.",
//         "Vaccines would likely be prioritised for health-care workers and people at greatest risk of severe illness and death.",
//         "High-income countries must not monopolise the global supply of COVID-19 vaccines.",
//         "This risk is real: during the 2009 influenza A/H1N1 pandemic, rich countries negotiated large advance orders for the vaccine, crowding out poor countries.",
//         "11 Such an outcome would result in a suboptimal allocation of an initially scarce resource."
//       ]
//     },

//     paper_id: "d0dafaa2700d9fa0289b620ce87992f9cf393ae1",
//     doi: "10.1016/s0140-6736(20)30763-7",
//     doc_date: "2020-03-31",
//     title:
//       "Spike protein recognition of mammalian ACE2 predicts the host range and an optimized ACE2 for SARS-CoV-2 infection",
//     authors: ["Junwen.Luan", "Yue.Lu", "Xiaolu.Jin", "Leiliang.Zhang"],
//     summary: "",
//     abstract: {
//       text: [
//         "a b s t r a c t SARS-CoV-2 causes the recent global COVID-19 public health emergency",
//         " ACE2 is the receptor for both SARS-CoV-2 and SARS-CoV",
//         " To predict the potential host range of SARS-CoV-2, we analyzed the key residues of ACE2 for recognizing S protein",
//         " We found that most of the selected mammals including pets (dog and cat), pangolin and Circetidae mammals remained the most of key residues for association with S protein from SARS-CoV and SARS-CoV-2",
//         " The interaction interface between cat/dog/pangolin/Chinese hamster ACE2 and SARS-CoV/SARS-CoV-2 S protein was simulated through homology modeling",
//         " We identified that N82 in ACE2 showed a closer contact with SARS-CoV-2 S protein than M82 in human ACE2",
//         " Our finding will provide important insights into the host range of SARS-CoV-2 and a new strategy to design an optimized ACE2 for SARS-CoV-2 infection",
//         "\nPlease cite this article as: J",
//         " Luan et al",
//         ", Spike protein recognition of mammalian ACE2 predicts the host range and an optimized ACE2 for SARS-CoV-2 infection, Biochemical and Biophysical Research Communications, https://doi"
//       ],
//       tags: {
//         sciwing: [
//           "background",
//           "finding",
//           "method",
//           "finding",
//           "finding",
//           "finding",
//           "finding",
//           "other",
//           "other",
//           "finding"
//         ]
//       }
//     },
//     bodyText: {
//       text: [
//         "Corona Virus Disease 2019 (COVID- 19) , which was reported from Wuhan city, Hubei province of China, has caused over 78,000 human infections and more than 2700 deaths (as of February 25, 2020) [1, 2] . Severe Acute Respiratory Syndrome Corona Virus 2 (SARS-CoV-2) was identified as the pathogen of COVID- 19 [1e3] . After SARS-CoV and MERS-CoV, SARS-CoV-2 has become the third coronavirus that causes severe respiratory disease and human death [4, 5] .",
//         "Belonging to the subgenus sarbecvirus of Coronaviridae, both SARS-CoV-2 and SARS-CoV are human SARS-related coronavirus (SARSr-CoV). Its genome is a single-stranded RNA composed of about 30 kb nucleotides. SARS-CoV-2 encodes at least four major structural proteins, namely spike protein (S), membrane protein (M), envelope protein (E), and nucleocapsid protein (N) [6] . S protein, which is a type I glycoprotein, protrudes from the surface of the virus and can contact the host cell earlier. S protein has attracted great attention because of its function in receptor binding.",
//         "Angiotensin-converting enzyme 2 (ACE2) binds to the receptorbinding motif (RBM) in the receptor-binding domain (RBD) of SARS-CoV and functions as a receptor for SARS-CoV [7, 8] . ACE2 is widely distributed in heart, liver, testis, kidney, intestine and other tissues. It has the physiological functions of regulating heart and kidney function and controlling blood pressure [9] . Recently, it has been found that human ACE2 promoted the entry of SARS-CoV-2 into the cells [3, 10] . RBD domain of SARS-CoV-2 interacts with human ACE2. Thus, ACE2 is defined as the receptor for SARS-CoV-2.",
//         "The specificity of the interaction between virus and receptor determines the host tropism and host range. The origin of SARS-CoV-2 is presumed to be bat [3] . However, the intermediate host is not clear, and some studies suggest that pangolin is involved in the evolution of SARS-CoV-2 [11, 12] . It is not clear which mammals are involved in the evolution of SARS-CoV-2 and which animals may be infected by SARS-CoV-2. By sequence alignment of key amino acids binding to RBD in ACE2, the interaction between RBD of SARS-CoV-2/SARS-CoV and mammalian ACE2 was predicted. Based on the potential interaction between S protein and mammalian ACE2, it was speculated that SARS-CoV-2/SARS-CoV preserved the ability to infect many mammals including cat, dog, pangolin and Chinese hamster. From the structure stimulation, we identified N82 in ACE2 show closer contact with F486 of SARS-CoV-2 S protein compared with M82 of ACE2.",
//         "The S protein sequence of SARS-CoV-2 is YP_009724390.1, and the S protein sequence of SARS-CoV is NP_828851.1. RBM of SARS-CoV is from 424 to 494. RBM of SARS-CoV-2 is from 437 to 508.",
//         "A total of 42 mammalian ACE2 protein sequences were selected from the wild animal protection lists of Hubei Province and Jiangxi Province, primates, bats, dog, and cat. These sequences are as follows: hACE2: Homo sapiens (BAB40370. Cavia porcellus (XP_023417808.1), CgACE2: Cricetulus griseus (A0A061HZ66). Based on the known key sites in SARS-CoV S protein interacting with human ACE2, we analyzed whether these sites were conserved on ACE2 from wild mammals and domestic pets. Phylogenetic and molecular evolutionary analyses of ACE2 were conducted using MEGA version X [13] . Phylogenetic tree was generated with Jones-Taylor-Thornton (JTT) evolutionary model using Maximum Likelihood method.",
//         "The interaction interfaces of SARSr-CoV S and ACE2 from cat/ dog/pangolin/Chinese hamster were simulated by Chimera software Ver 1.14 [14] . The simulation were based on the structures of hACE2 with SARS-CoV S RBD (PDB: 2AJF) [7] and hACE2 with SARS-CoV-2 S RBD (PDB: 6LZG).",
//         "Human ACE2 is the receptor for both SARS-CoV and SARS-CoV-2. According to the literature [15] , the key amino acids (AAs) in the S protein of SARS-CoV interacting with human ACE2 are Y442, L472, N479, D480, T487, Y491 [7, 15] . We compared the RBM in S protein of SARS-CoV-2 with that of SARS-CoV (Fig. 1A) . These amino acids corresponding to SARS-CoV-2 are L455, F486, Q493, S494, N501 and Y505 (Fig. 1A) . Although five of six key AAs in SARS-CoV-2 are changed compared with SARS-CoV, the overall structure of interfaces of ACE2-RBM are similar (Fig. 1B) .",
//         "The key AAs in hACE2 for interacting with RBM are K31, E35, D38, M82 and K353 [7, 15] . Among them, K31 and K353 in hACE2 are most critical residues for RBM recognition. Because the overall structure of interfaces of ACE2-RBM in SARS-CoV-2 and SARS-CoV are similar, we analyzed the key RBD recognizing AAs of ACE2 protein from selected mammals, as shown in Table 1 . We predicted that the mammals whose ACE2 could bind to the S protein of SARS- Next, we constructed a phylogenetic tree for mammalian ACE2 proteins. The ACE2 protein sequences of 42 mammalian animals were compared by ClustalW method of MEGA-X software. Then the JTT model of maximum likelihood method was used to construct ACE2 phylogenetic tree. As shown in Fig. 2 , species that cannot bind to S protein are marked in red, and species that can bind to S protein are marked in green. No correlation between genetic distance and the interaction of ACE2/S was found. Some Pets including dog (Canis lupus familiaris) and cat (Felis catus) potentially recognize S protein, indicating the importance to monitor the pets for SARS-CoV-2 infection. We found that four members of Circetidae including Mesocricetus auratus, Phodopus campbelli, Ictidomys tridecemlineatus, and Cricetulus griseus remained the key residues for association with S protein from SARS-CoV and SARS-CoV-2, though two members of Muridae (Rattus norvegicus, Mus musculus) could not bind to S protein. This founding suggested that Circetidae mammals could be developed as SARSr-CoV small animal models.",
//         "We noticed that ACE2 from dog, cat, pangolin and Chinese hamster potentially associated with S protein (Table 1 ). Next, we predicted the structure of cat/dog/pangolin/Chinese hamster ACE2 with SARSr-CoV RBD. The structure of protein complex between RBD region of S protein of SARS-CoV and human ACE2 has been resolved (PDB: 2AJF) [7] . Recently, the structure of SARS-CoV-2 RBD with human ACE2 was also determined [16, 17] . We used Chimera software to display homologous model, and obtained the interaction complex structure of RBD region of SARSr-CoV (SARS-CoV-2 and SARS-CoV) and cat/dog/pangolin/Chinese hamster ACE2. Overall, the RBM structures of S protein of SARS-CoV-2 and SARS-CoV are similar (Fig. 3) . Interaction interface of SARSr-CoV RBD and cat/dog/pangolin/Chinese hamster ACE2 confirmed the potential interaction between SARS-CoV-2 and cat/dog/pangolin/ Chinese hamster ACE2, indicating that these ACE2 could support SARS-CoV-2 entry. The AA in 82 position of human ACE2 is M82, while the corresponding AA in cat, dog, pangolin and Chinese hamster ACE2 is T82, T81, N82 and N82, respectively. The distance between F486 of SARS-CoV-2 S protein and the corresponding AA in ACE2 is 3.753Å for human (Fig. 1A) , 2.695Å for dog (Fig. 3A) , 3.753Å for cat (Fig. 3B ), 1.621Å for pangolin (Fig. 3C) , and 2.024Å for Chinese hamster (Fig. 3D) , respectively. We concluded that N82 in ACE2 showed closer contact with F486 of SARS-CoV-2 S protein than M82 of ACE2.",
//         "The host tropism of zoonotic coronavirus is hybrid, and it is important to determine the natural host and host range of coronavirus. In the past two decades, SARS-CoV, MERS-CoV and SARS-CoV-2 have caused serious outbreaks of human infectious diseases. All the three human coronaviruses originated from bats, but the intermediate hosts were different. SARS-CoV is believed to come from the Paguma larvata [18] , and the intermediate host of MERS-CoV is Camelus dromedaries [19] . The new coronavirus SARS-CoV-2 has recently caused a serious epidemic in China, but its intermediate hosts are not clear.",
//         "S protein of SARS-CoV-2 interacts with human ACE2, which promotes the entry of SARS-CoV-2, indicating that human ACE2 is the receptor of SARS-CoV-2 [3] . ACE2 contains at least five key amino acids critical for binding S protein of SARSr-CoV [15] . Based on these five amino acids, we analyzed the corresponding amino Table 1 Prediction of the RBD binding capacity of mammalian ACE2.",
//         "AA position  matched AA  binding capacity   31  35  38  82  353 hACE2",
//         "Phylogenetic tree of mammalian ACE2 proteins. ACE2 sequences from a total of 42 mammals were analyzed by MEGA-X and the phylogenetic tree was constructed with JTT evolutionary model using Maximum Likelihood method. The red represents the species whose ACE2 cannot bind to S protein, and the green is the species whose ACE2 associate with S protein. (For interpretation of the references to colour in this figure legend, the reader is referred to the Web version of this article.)",
//         "acids of different mammals to determine which mammalian ACE2 could interact with S protein of human SARSr-CoV. By analyzing the protein sequence of mammalian ACE2, we found that the ACE2 of Camelus dromedarius, Procyon lotor, Rhinolophus ferrumequinum, Rattus norvegicus, Mus musculus, Ornithorhynchus anatinus, Loxodonta africana, Erinaceus europaeus, Nyctereutes procyonoides, Suricata suricatta, Dipodomys ordii, and Cavia porcellus lose the capability to associate with S protein (Table 1) . These mammals could be ruled out from the potential host list for SARS-CoV-2. We found that S protein may bind to ACE2 from some wild mammals, which suggests that we should investigate whether these animals may be intermediate hosts for SARS-CoV-2. It has been reported that the RBM region in S protein of pangolin coronavirus is similar to that of S protein of SARS-CoV-2 [11, 12] , which may be involved in the recombination of SARS-CoV-2. We identified that N82 of pangolin ACE2 showed closer contact with RBD than human ACE2 (Fig. 3C) , indicating that pangolin ACE2 might show better affinity to SARS-CoV-2. This finding further supports the hypothesis that pangolin is involved in SARS-CoV-2 evolution. In current study, only a limited list of wild mammals is covered. In the future, we should select more mammals for study. Although no SARS-CoV-2 has been found in domestic cats and dogs, cat/dog ACE2 may bind to S protein of SARS-CoV-2. In the future, we should pay attention to monitoring whether domestic cats and dogs could be infected by SARS-CoV-2. Animal model is an important tool in the study of infectious diseases. ACE2 of mice cannot interact with SARS-CoV-2, so it cannot be used as animal model of SARS-CoV-2 directly. Some studies have generated mice transfected with human ACE2 as the models to study SARS-CoV [20] , and these mice can also be used as animal models for SARS-CoV-2 infection. Interestingly, we identified that N82 in ACE2 is closer to RBD than M82 (Fig. 3C and D) , indicating a novel strategy to design an optimized ACE2 for SARS-CoV-2 infection. We speculated that small peptide based on N82 of ACE2 might show higher affinity to SARS-CoV-2 RBD. We proposed that if M82 in human ACE2 was mutated to N82, the modified human ACE2 will enhance SARS-CoV-2 infection. In the future, those ideas will be tested in cell culture and animal model. We noticed that the ACE2 proteins from Circetidae (Mesocricetus auratus, Phodopus campbelli, Ictidomys tridecemlineatus, and Cricetulus griseus) are capable to recognize RBD. Mesocricetus auratus (golden hamster) and Cricetulus griseus (Chinese hamster) are experimental animals and our finding indicates the possibility to develop small animal models for SARS-CoV-2 infection using Chinese hamster and golden hamster.",
//         "The authors declare that there are no conflicts of interest."
//       ],
//       tags: {
//         "0": {
//           tagPerPara: {
//             "0": "Label1",
//             "1": "Label2"
//           }
//         },
//         "1": {
//           tagPerPara: {
//             "0": "Label3",
//             "1": "Label4"
//           }
//         }
//       }
//     },
//     similar: [
//       {
//         paper_id: "paper id test 1",
//         doi: "doi test",
//         doc_date: "",
//         title:
//           "Biophysical characterization of the SARS-CoV-2 spike protein binding with the ACE2 receptor and implications for infectivity",
//         authors: ["author test"],
//         summary:
//           "We computationally contrasted the binding interactions between human ACE2 and coronavirus spike protein receptor binding domain (RBD) of the 2002 epidemic-causing SARS-CoV-1, SARS-CoV-2, and bat coronavirus RaTG13 using the Rosetta energy function.\nWe find that the RBD of the spike protein of SARS-CoV-2 is highly optimized to achieve very strong binding with human ACE2 (hACE2) which is consistent with its enhanced infectivity.\nNotably, the SARS-CoV-2 RBD out-competes the angiotensin 2 receptor type I (ATR1) which is the native binding partner of ACE2 by 35% in terms of the calculated binding affinity.\nBy contrasting the spike protein SARS-CoV-2 Rosetta binding energy with ACE2 of different livestock and pet species we find strongest binding with bat ACE2 followed by human, feline, equine, canine and finally chicken.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       },
//       {
//         paper_id: "paper id test 2",
//         doi: "doi test",
//         doc_date: "2020-03-31",
//         title:
//           "Phylogenetic Analysis and Structural Modeling of SARS-CoV-2 Spike Protein Reveals an Evolutionary Distinct and Proteolytically Sensitive Activation Loop",
//         authors: ["author test"],
//         summary:
//           "The 2019 novel coronavirus (2019-nCoV/SARS-CoV-2) originally arose as part of a major outbreak of respiratory disease centered on Hubei province, China.\nTaxonomically, SARS-CoV-2 was shown to be a Betacoronavirus (lineage B) closely related to SARS-CoV and SARS-related bat coronaviruses, and it has been reported to share a common receptor with SARS-CoV (ACE-2).\nSubsequently, betacoronaviruses from pangolins were identified as close relatives to SARS-CoV-2.\nCompared to SARS-CoV and all other coronaviruses in Betacoronavirus lineage B, we identify an extended structural loop containing basic amino acids at the interface of the receptor binding (S1) and fusion (S2) domains.\nWe suggest this loop confers fusion activation and entry properties more in line with betacoronaviruses in lineages A and C, and be a key component in the evolution of SARS-CoV-2 with this structural loop affecting virus stability and transmission.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       },
//       {
//         paper_id: "paper id test 3",
//         doi: "doi test",
//         doc_date: "2020-03-31",
//         title:
//           "Structural and Functional Basis of SARS-CoV-2 Entry by Using Human ACE2",
//         authors: ["author test"],
//         summary:
//           "The recent emergence of a novel coronavirus (SARS-CoV-2) in China has caused significant public health concerns.\nRecently, ACE2 was reported as an entry receptor for SARS-CoV-2.\nIn this study, we present the crystal structure of the C-terminal domain of SARS-CoV-2 (SARS-CoV-2-CTD) spike (S) protein in complex with human ACE2 (hACE2), which reveals a hACE2-binding mode similar overall to that observed for SARS-CoV.\nHowever, atomic details at the binding interface demonstrate that key residue substitutions in SARS-CoV-2-CTD slightly strengthen the interaction and lead to higher affinity for receptor binding than SARS-RBD.\nAdditionally, a panel of murine monoclonal antibodies (mAbs) and polyclonal antibodies (pAbs) against SARS-CoV-S1/receptor-binding domain (RBD) were unable to interact with the SARS-CoV-2 S protein, indicating notable differences in antigenicity between SARS-CoV and SARS-CoV-2.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       },
//       {
//         paper_id: "paper id test 4",
//         doi: "doi test",
//         doc_date: "2020-03-31",
//         title:
//           "Structure, Function, and Antigenicity of the SARS-CoV-2 Spike Glycoprotein",
//         authors: ["author test"],
//         summary:
//           "Coronavirus spike (S) glycoproteins promote entry into cells and are the main target of antibodies.\nWe found that the SARS-CoV-2 S glycoprotein harbors a furin cleavage site at the boundary between the S(1)/S(2) subunits, which is processed during biogenesis and sets this virus apart from SARS-CoV and SARS-related CoVs. We determined cryo-EM structures of the SARS-CoV-2 S ectodomain trimer, providing a blueprint for the design of vaccines and inhibitors of viral entry.\nFinally, we demonstrate that SARS-CoV S murine polyclonal antibodies potently inhibited SARS-CoV-2 S mediated entry into cells, indicating that cross-neutralizing antibodies targeting conserved S epitopes can be elicited upon vaccination.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       },
//       {
//         paper_id: "paper id test 5",
//         doi: "doi test",
//         doc_date: "2020-03-31",
//         title:
//           "SARS-CoV-2 Cell Entry Depends on ACE2 and TMPRSS2 and Is Blocked by a Clinically Proven Protease Inhibitor",
//         authors: ["author test"],
//         summary:
//           "Cell entry of coronaviruses depends on binding of the viral spike (S) proteins to cellular receptors and on S protein priming by host cell proteases.\nUnravelling which cellular factors are used by SARS-CoV-2 for entry might provide insights into viral transmission and reveal therapeutic targets.\nHere, we demonstrate that SARS-CoV-2 uses the SARS-CoV receptor ACE2 for entry and the serine protease TMPRSS2 for S protein priming.\nA TMPRSS2 inhibitor approved for clinical use blocked entry and might constitute a treatment option.\nFinally, we show that the sera from convalescent SARS patients cross-neutralized SARS-2-S-driven entry.\nOur results reveal important commonalities between SARS-CoV-2 and SARS-CoV infection and identify a potential target for antiviral intervention.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       },
//       {
//         paper_id: "paper id test 6",
//         doi: "doi test",
//         doc_date: "2020-03-31",
//         title:
//           "On the interactions of the receptor-binding domain of SARS-CoV-1 and SARS-CoV-2 spike proteins with monoclonal antibodies and the receptor ACE2",
//         authors: ["author test"],
//         summary:
//           "A new betacoronavirus named SARS-CoV-2 has emerged as a new threat to global health and economy.\nBy constant-pH Monte Carlo simulations and the PROCEEDpKa method, we have mapped the electrostatic epitopes for four monoclonal antibodies and the angiotensin-converting enzyme 2 (ACE2) on both SARS-CoV-1 and the new SARS-CoV-2 S receptor binding domain (RBD) proteins.\nHowever, the affinity between the S RBD protein from the new SARS-CoV-2 and ACE2 is higher than for any studied antibody previously found complexed with SARS-CoV-1.\nBased on physical chemical analysis and free energies estimates, we can shed some light on the involved molecular recognition processes, their clinical aspects, the implications for drug developments, and suggest structural modifications on the CR3022 antibody that would improve its binding affinities for SARS-CoV-2 and contribute to address the ongoing international health crisis.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       },
//       {
//         paper_id: "paper id test 7",
//         doi: "doi test",
//         doc_date: "2020-03-31",
//         title:
//           "Structural Basis of SARS-CoV-2 Spike Protein Priming by TMPRSS2",
//         authors: ["author test"],
//         summary:
//           "The present study aims to investigate the conformational details of complex between TMPRSS2 and SARS-CoV-2 spike protein, in order to discern the finer details of the priming of viral spike and to point candidate drug targets.\nBriefly, full length structural model of TMPRSS2 was developed and docked against the resolved structure of SARS-CoV-2 spike protein with directional restraints of both cleavage sites.\nKey functional residues of TMPRSS2 (His296, Ser441 and Ser460) were found to interact with immediate flanking residues of cleavage sites of SARS-CoV-2 spike protein.\nIn summary, the present study provide structural characteristics of molecular complex between human TMPRSS2 and SARS-CoV-2 spike protein and points to the candidate drug targets that could further be exploited to direct structure base drug designing.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       },
//       {
//         paper_id: "paper id test 8",
//         doi: "doi test",
//         doc_date: "2020-03-31",
//         title:
//           "The SARS-CoV-2 exerts a distinctive strategy for interacting with the ACE2 human receptor",
//         authors: ["author test"],
//         summary:
//           "We compare the interaction between the human ACE2 receptor and the SARS-CoV-2 spike protein with that of other pathogenic coronaviruses using molecular dynamics simulations.\nSARS-CoV, SARS-CoV-2, and HCoV-NL63 recognize ACE2 as the natural receptor but present a distinct binding interface to ACE2 and a different network of residue-residue contacts.\nSARS-CoV and SARS-CoV-2 have comparable binding affinities achieved by balancing energetics and dynamics.\nThe SARS-CoV-2–ACE2 complex contains a higher number of contacts, a larger interface area, and decreased interface residue fluctuations relative to SARS-CoV.\nThese findings expose an exceptional evolutionary exploration exerted by coronaviruses toward host recognition.\nWe postulate that the versatility of cell receptor binding strategies has immediate implications on therapeutic strategies.\nOne Sentence  Molecular dynamics simulations reveal a temporal dimension of coronaviruses interactions with the host receptor.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       },
//       {
//         paper_id: "paper id test 9",
//         doi: "doi test",
//         doc_date: "2020-03-31",
//         title:
//           "Broad Host Range of SARS-CoV-2 Predicted by Comparative and Structural Analysis of ACE2 in Vertebrates",
//         authors: ["author test"],
//         summary:
//           "Here, we utilized a unique dataset of 410 vertebrates, including 252 mammals, to study cross-species conservation of ACE2 and its likelihood to function as a SARS-CoV-2 receptor.\nWe designed a five-category ranking score based on the conservation properties of 25 amino acids important for the binding between receptor and virus, classifying all species from very high to very low.\nWe employed a protein structural analysis to qualitatively assess whether amino acid changes at variable residues would be likely to disrupt ACE2/SARS-CoV-2 binding, and found the number of predicted unfavorable changes significantly correlated with the binding score.\nUtilized appropriately, our results may lead to the identification of intermediate host species for SARS-CoV-2, justify the selection of animal models of COVID-19, and assist the conservation of animals both in native habitats and in human care.",
//         abstract: {
//           text: ["abstract text test"],
//           tags: {
//             sciwing: ["tag 1"]
//           }
//         },
//         bodyText: {
//           text: ["bodytext text test", "paragraph 2"],
//           tags: {
//             "0": {
//               tagPerPara: {
//                 "0": "Label1",
//                 "1": "Label2"
//               }
//             },
//             "1": {
//               tagPerPara: {
//                 "0": "Label3",
//                 "1": "Label4"
//               }
//             }
//           }
//         }
//       }
//     ]
//   },
//   {
//     answer: {
//       score: "100.0",
//       sents: [
//         "Molecular Mechanism of Action of Repurposed Drugs and Traditional Chinese Medicine Used for the Treatment of Patients Infected With COVID-19: A Systematic Review",
//         "At this moment, the therapeutic approaches to handle COVID-19 are only supportive.",
//         "There is neither a vaccine to prevent infections nor clinically approved antiviral drugs to treat COVID-19; therefore, identifying drug treatment options as soon as possible is critical for responding to the pandemic.",
//         "Clinical trials for vaccines are currently underway.",
//         "Potential vaccines have been administered to volunteers in a phase 1 safety trial by the USA government; however, the efficacy, such as how long immunity will last or if people might become infected even if they possess a high level of antibodies against SARS-CoV-2, will not become clear for at least one year after injection [16] .",
//         "Furthermore, the safety of the developed vaccines is unknown because laboratory tests are being conducted in parallel to clinical trial phase 1 owing to the emergence of COVID-19 as a pandemic.",
//         "The unknown efficacy and safety of the vaccines used might cause disease enhancement, by which vaccinated subjects might develop an even more severe form of disease than the subjects that have not been vaccinated, which has been shown in studies of SARS vaccines, in which vaccinated ferrets developed damaging inflammation in their livers after they were infected with the virus [17] .",
//         "Until now, no drugs have been successfully developed for the control of COVID-19 [18] ; however, numerous effort are underway worldwide, and particularly in China [19] .",
//         "Therefore, drug repurposing and the use of existing alternative medicine have been used as effective methods for the treatment of patients with COVID-19.",
//         "In this comprehensive review, we reviewed the use of existing drugs or alternative treatment methods and discussed the mode of action from a molecular mechanism perspective to attenuate COVID-19 in the human system."
//       ]
//     },
//     paper_id: "8198900b75d855cd82dc34ed8b9872074a9fa937",
//     doi: "10.1101/2020.04.10.20060376",
//     doc_date: "2020-04-14",
//     title:
//       "Giant Reverse Transcriptase-Encoding Transposable Elements at Telomeres",
//     authors: ["Irina.Arkhipova", "Irina.Yushenova", "Fernando.Rodriguez"],
//     summary: "",
//     abstract: {
//       text: [
//         "Transposable elements are omnipresent in eukaryotic genomes and have a profound impact on chromosome structure, function and evolution",
//         " Their structural and functional diversity is thought to be reasonably well-understood, especially in retroelements, which transpose via an RNA intermediate copied into cDNA by the element-encoded reverse transcriptase, and are characterized by a compact structure",
//         " Here, we report a novel type of expandable eukaryotic retroelements, which we call Terminons",
//         " These elements can attach to G-rich telomeric repeat overhangs at the chromosome ends, in a process apparently facilitated by complementary C-rich repeats at the 3 0 -end of the RNA template immediately adjacent to a hammerhead ribozyme motif",
//         " Terminon units, which can exceed 40 kb in length, display an unusually complex and diverse structure, and can form very long chains, with host genes often captured between units",
//         " As the principal polymerizing component, Terminons contain Athena reverse transcriptases previously described in bdelloid rotifers and belonging to the enigmatic group of Penelope-like elements, but can additionally accumulate multiple cooriented ORFs, including DEDDy 3 0 -exonucleases, GDSL esterases/lipases, GIY-YIG-like endonucleases, rolling-circle replication initiator (Rep) proteins, and putatively structural ORFs with coiled-coil motifs and transmembrane domains",
//         " The extraordinary length and complexity of Terminons and the high degree of interfamily variability in their ORF content challenge the current views on the structural organization of eukaryotic retroelements, and highlight their possible connections with the viral world and the implications for the elevated frequency of gene transfer"
//       ],
//       tags: {
//         sciwing: [
//           "background",
//           "background",
//           "purpose",
//           "background",
//           "background",
//           "background",
//           "finding"
//         ]
//       }
//     },
//     bodyText: {
//       text: [
//         "Transposable elements (TEs) are segments of DNA with the ability to relocate within or between genomes, which is conferred by the element-encoded enzymatic functions. Traditionally, TEs are divided into two major classes: class I (retrotransposons) code for a reverse transcriptase (RT) capable of making a cDNA copy of the template RNA, which serves as a transposition intermediate; and class II (DNA TEs) code for a transposase, which can mobilize DNA in the absence of RNA intermediates (Finnegan 1989; Wicker et al. 2007; Kapitonov and Jurka 2008) . Retrotransposons are in turn subdivided into four subclasses: LTR (long terminal repeat) retrotransposons, which are closely related to retroviruses; nonLTR retrotransposons, also called LINEs; DIRS, or YR-retrotransposons; and Penelope-like elements (PLEs). These subclasses are phylogenetically distinct, and their RTs usually operate together with the respective types of coencoded phosphotransferase/endonuclease (EN) DNAcleaving enzymes: IN (DDE-integrase); APE (apurinic-apyrimidinic EN) or REL (restriction enzyme-like EN); YR (tyrosine recombinase); and GIY-YIG (nickase initially identified in prokaryotic group I introns). It is the concerted action of the RT and the phosphotransferase that determines the retroelement's ability to insert into internal genomic locations. Enzymatically active domains are typically fused into a single polyprotein called pol, which may undergo proteolytic processing or function as a multi-domain protein. Formation of a ribonucleoprotein (RNP) particle is ensured by the structural ORF1 (gag), which is usually separated from the downstream ORF2 (pol) by a programmed ribosomal frameshift or by inframe stop codons. Downstream of pol, many retrovirus-like TEs have incorporated env genes of various origins coding for envelope glycoproteins responsible for membrane fusion and interaction with cell surface receptors during viral entry and egress. Two families of RT-containing viruses, hepadnaviruses and caulimoviruses (collectively called pararetroviruses), differ from retroviruses in encapsidating their DNA instead of RNA, and do not regularly integrate into chromosomes (Glebe and Bremer 2013; Hohn and Rothnie 2013) .",
//         "Penelope-like elements (PLEs) are an enigmatic group of retroelements whose RTs share a common ancestor with telomerase reverse transcriptases (TERTs) (Arkhipova et al. 2003) . Canonical PLEs are 3-4 kilobases (kb) in length; are framed by terminal repeats called pLTRs, which may be either direct or inverted; encode an RT with a C-terminal GIY-YIG EN domain; and yield target-site duplications (TSD) of variable length upon insertion (Evgen'ev and Arkhipova 2005) . Of special interest is the unique group of PLE RTs named Athena (Gladyshev and Arkhipova 2007) . Previously described Athena retroelements are 4-6 kb in length; are phylogenetically distinct from canonical Penelope RTs; do not carry EN domains; and contain stretches of telomeric repeats at the junctions with host DNA. Such EN-deficient RTs are found at or near telomeres in many basidiomycete fungi and in a few plants and protists, but are particularly abundant at telomeres of bdelloid rotifers (Gladyshev and Arkhipova 2007) .",
//         "Bdelloid rotifers are microscopic freshwater invertebrates that reproduce clonally, are highly resistant to desiccation and ionizing radiation, and contain numerous horizontally transferred genes in their genomes Mark Welch et al. 2008) . Genome sequencing of the first bdelloid representative, Adineta vaga, revealed that over 8% of its genes originate from bacteria, fungi, plants, or protists (Flot et al. 2013) . Known TE families make up over 3% of the A. vaga genome, and are characterized by low copy numbers and high family diversity. Recently, we described canonical Penelope retrotransposons from A. vaga, which integrate into internal chromosomal locations with the aid of the C-terminal GIY-YIG EN domain ). Here we investigate Athena-containing retroelements in A. vaga, compare their organization in related species separated by tens of millions of years, and discover that they possess an extraordinarily complex structure not yet described in retroelements. We also uncover the basis for their affinity to telomeres and identify putative cisacting elements that may play a role in mobilizing genes of foreign origin and members of multigene families.",
//         "We first sought to verify the boundaries of Athena retroelements in the A. vaga genome assembly. The commonly used TE detection pipelines perform poorly on A. vaga due to overabundance of low-copy-number families with one or two members (Flot et al. 2013) . Most of the computergenerated Athena consensi were represented by RT and some adjacent sequences, but their boundary verification was far from straightforward. Specifically, while the 3 0 boundary, at least in some families, was relatively easy to define from comparison between inserts, the 5 0 boundaries were mostly formed by variably positioned 5 0 -truncations of apparently longer units, which included a variety of ORFs shared by some families but different in others. All other bdelloid TEs (LTR, nonLTR, DNA TEs) form well-defined host-TE boundaries (Flot et al. 2013) .",
//         "To facilitate boundary definition, we employed small RNA coverage as a proxy for delimiting host-TE junctions (El Baidouri et al. 2015) . Piwi-interacting RNAs (piRNAs) are a class of small RNAs typically expressed from specialized loci termed piRNA clusters, which in many genomes are composed of multiple adjacent TEs or their fragments, and ensure silencing of homologous TEs in the germ line (Weick and Miska 2014) . Our piRNA libraries, as expected, were highly enriched in known A. vaga TEs (Rodriguez and Arkhipova 2016). Notably, for most Athena RTs, we observed that piRNA coverage extends well beyond the RT ORF ( fig. 1 ). However, inspection of RT flanks did not reveal any sequences that might correspond to adjacent TEs in a piRNA cluster. Instead, the zone of piRNA coverage includes a multitude of densely spaced ORFs, which display the same polarity as Athena RTs, and apparently constitute parts of very large transposable units.",
//         "The most surprising observation is the length of these units, which can exceed 40 kb, far more than any of the known retroelement types. A highly variable and diversified gene content is also not typical of retroelements, which display relatively simple and well-defined ORF composition (e.g., gag-pol-env in LTR retrotransposons, or gag-pol in nonLTR retrotransposons). Collectively, these observations indicate that Athena-containing units represent a previously undescribed type of TEs, and justify further inquiry into their characteristics. 5 0 -and 3 0 -Boundaries Define the Giant Terminon Units",
//         "In three previously described Athena families, the 3 0 -and 5 0boundaries were formed by short stretches of species-specific reverse-complement telomeric repeats (Gladyshev and Arkhipova 2007) . A genome-wide inventory of host-TE boundaries near Athena-like RTs in A. vaga reveals that, although the immediate RT environment does not always include such repeats, they are invariably found at the actual TE-host junction (supplementary table S1, Supplementary Material online). In other words, the RT is not always positioned near the 3 0 -end of the entire unit, so that a series of intervening ORFs may appear between the RT and telomeric repeats at the host-TE boundary. The 5 0 -boundaries in most cases are also formed by stretches of telomeric repeats capping 5 0 -terminally truncated copies. The Athena-M family is somewhat of an exception: out of six contigs, only one had (ACACCC) 2 at the junction between the 3 0 -pLTR and the downstream Athena-M copy (supplementary table S1, Supplementary Material online).",
//         "Since terminal addition is the only plausible mechanism that can account for the presence of telomeric repeats at both 3 0 -and 5 0 -termini (see below and Discussion), we further refer to the giant Athena-containing transposable units as Terminons, reflecting their capacity to attach to chromosome ends. Indeed, we were unable to find a TE or a host gene interrupted by a Terminon insertion. On the contrary, we observed multiple cases in which part of a preexisting TE or gene was irreversibly lost by truncation, with subsequent addition of telomeric repeats and Terminon attachment (supplementary table S1 and figs. S1A and S6, Supplementary Material online). Remarkably, the added Terminon units can extend telomeres by tens of kb at a time. Such additions can effectively counteract the ongoing terminal erosion, the dynamic nature of which is seen from comparison of the same A. vaga telomere at different points in time: telomere M1 (Gladyshev and Arkhipova 2007) The 3 0 ends of Terminons are often present in higher copy numbers than the 5 0 ends, a pattern observed in nonLTR retrotransposons, which display well-defined 3 0 ends and frequent 5 0 -truncations (Wei et al. 2001; Hayashi et al. 2014) . As seen in supplementary figure S2, Supplementary Material online, intragenomic Terminon replication follows the mastercopy model, whereby shorter copies are derived from the longest resident copy. Indeed, WJ and W2 families propagated a subset of internally deleted copies, which is indicative of trans-complementation.",
//         "To classify families with highly variable gene content, we relied on phylogenetic relationships of the element-encoded RTs, which are the longest and the most conserved ORFs in each unit. The phylogram in figure , which lack essential catalytic residues, and are colocalized on the same unit with a catalytically intact RTs (W, N, S/T, or K). Interestingly, Athena RTs from Philodina roseola, a species from the bdelloid family Philodinidae (Gladyshev and Arkhipova 2007) , can be confidently placed into N and W clades defined by RTs from A. vaga (supplementary fig. S3A , Supplementary Material online), indicating that the split between clades predates the divergence of bdelloid families (>60 Mya) (Mark Welch et al. 2008) . Table 1 presents the inventory of A. vaga families, with the scaffold harboring the longest and most intact representative designated as the reference scaffold for each family. Members of each family share common features and display betweenclade variability in the RT ORF structure, manifested in the presence/absence of programmed ribosomal frameshifts, commonly found in retrovirus-like elements; gain and loss of introns; and acquisition of RT derivatives lacking catalytic residues.",
//         'All members of the ILOM clade are characterized by a À1 programmed ribosomal frameshift, allowing the RT to be Giant Retrotransposons at Telomeres . doi:10.1093/molbev/msx159 MBE expressed as a fusion with ORF1, which mostly consists of coiled-coil (CC) motifs. The À1 frameshift has a canonical structure, formed by a heptanucleotide "slippery sequence" (typically T 6 G or T 6 C, translating into consecutive Phe residues), and a downstream pseudoknot or hairpin (Caliskan et al. 2015 ',
//         "Unlike other retroelements, PLEs, especially Athenas, possess an unusual ability to accumulate and retain spliceosomal introns (Arkhipova et al. 2003) . Members of the NT clade have accumulated the largest number of introns, harboring 4-9 introns each (supplementary figs. S3A and S5, Supplementary Material online). Intron positions are highly conserved in the core motifs RT1-2 and RT5 (Xiong and Eickbush 1990) , and an additional intron appears in the conserved NGY motif of the RT thumb domain in the NT clade. Members of the W clade have the frameshift and either 2 or 4 introns. In the JVX clade, V and X have the frameshift and either one (V) or two (X) introns, while J lacks frameshifts and contains 2 or 4 introns. Even in the poorly conserved N-terminal (ORF1) moiety, one of the intron positions is conserved between JVX, W, and NT clades, while two other positions are specific either for NT clade or for J/W clades (supplementary figs. S3 and S7, Supplementary Material online). Intron acquisition can be followed by occasional intron losses, as follows from the intron presence-absence mapping on the phylogenetic tree (supplementary fig. S3A , Supplementary Material online). All members of the frameshifted ILOM clade are intronless. ",
//         "In the JVX clade, Athena-derived ORFs are characterized by complete loss of the RT catalytic residues: the core palm motifs RT3-5 (or A-C), encompassing the DDD catalytic triad, along with finger motifs RT1-2, are wiped out in the context of an otherwise intact, intron-containing ORF, rendering the RT domain catalytically inactive (supplementary fig. S5 , Supplementary Material online). While their roles evidently cannot involve catalysis, these RT derivatives should have the potential to interact with a catalytically active RT (from W or N/T clades), which is usually present on the same unit (see below). The highly diverse Y clade (supplementary fig. S3A , Supplementary Material online) entirely lacks the Nterminus corresponding to ORF1, and contains barely recognizable RT derivatives.",
//         "In each Terminon family, RTs and the associated CC-ORFs represent the obligatory components of these units (table 1; Overall, each Terminon family is characterized by a core set of genes, all of which, however, are not necessarily present in each family (table 1) Such unidirectionality facilitates rapid assessment of Terminon boundaries at-a-glance, since the ORFs in the adjacent host DNA are distributed between Watson and Crick strands. The enzymatic potential of extra ORFs is described in the next section.",
//         "DEDDy/DEDDh Single-Stranded 3 0 -Exonucleases Eight Terminon families (table 1) contain ORFs with homology to the DEDD-type (or DnaQ-like) 3 0 -5 0 exonuclease domain, which has three conserved sequence motifs (ExoI, ExoII, and ExoIII) with four acidic residues serving as ligands for the two metal ions required for catalysis (Zuo and Deutcher 2001) . Two variants of the ExoIII motif are known: YX 3 D (DEDYD) and HX 4 D (DEDHD). These exonucleases perform 3 0 -end processing of structured RNAs (RNase D, RNase T, exosome subunit Rrp6), but may also act on singlestranded DNAs (WRN, DnaQ, and proofreading subunits of A-and B-type DNA polymerases). Six of the Terminonencoded exonucleases are of the DEDYD-type, with the second D replaced with E (DEEYD); the remaining three derivatives in L1-L3 families lack the acidic residues, indicating catalytic inactivity. An additional EHCHC motif in all families, which is known to coordinate Zn 2þ binding in Maelstrom proteins involved in piRNA biogenesis (Chen et al. 2015) , suggests conservation of the RNA binding function. DEDDy exonucleases (ExoN) have also been found in nidoviruses, and were hypothesized to have a proofreading function in these large (þ)ssRNA viruses (Ulferts and Ziebuhr 2014) . Both DEDDy-like and GDSL-like Terminon ORFs exhibit similarity to ORF3's in bdelloid LTR retrotransposons (Rodriguez et al. 2017) .",
//         "GDSL Esterases of the SGNH Hydrolase Family GDSL esterases/lipases are hydrolytic enzymes with broad substrate specificity (Akoh et al. 2004) . They contain five conserved blocks with a G-D-S-L or similar sequence with the catalytic Ser in the first block, and are also called SGNH hydrolases, after the letters specifying the invariant catalytic S, G, N, and H residues in the conserved blocks I, II, II, and V, respectively. Most members of the L1-L3 families encode these ORFs (table 1) , which are similar to PC-esterases (pfam13839), enzymes predicted to have acyl esterase activity modifying cell-surface biopolymers such as glycans and glycoproteins (Anantharaman and Aravind 2010). However, the hydrolytic function of these ORFs must be impaired, as the Ser residues of the catalytic S-N-H triad are lacking. GDSLesterase-like ORFs in a subset of nonLTR retrotransposons (CR1, RTEX, and BRIDGE1), which differ from PC-esterases, are thought to interact with membrane glycoproteins to facilitate entry or exit (Kapitonov and Jurka 2003; Schneider et al. 2013) , and at least some of them possess hydrolytic activity, while others lack such activity but preserve binding properties (Montanier et al. 2009 ). In the viral world, analogous ORFs encode hemagglutinin-esterase fusion glycoproteins in ssRNA viruses, for example, orthomyxoviruses (influenza C) and coronaviruses (Zeng et al. 2008) . Notably, the GDSL domain is found in the I family as an integral part of ORF1, although it may also lack catalytic activity (supplementary figs. S5 and S6D, Supplementary Material online).",
//         "GIY-YIG EN are nickases, with a single active site that hydrolyzes DNA by a one-metal ion mechanism, but can also generate double-strand breaks if DNA is nicked sequentially (Kleinstiver et al. 2013 (Kowalski et al. 1999) , and is framed by N-and C-terminal extensions averaging 300 and 130 aa, respectively. This arrangement does not match any of the known domain architectures, in which the GIY-YIG domain exhibits strong N-terminal preference. While the Nand C-terminal extensions lack known motifs, a characteristic arrangement of Cys residues (CX 2-4 CX 2 CX 33-35 CX 2 CX 10 CXCX 59-63 HX 3 C), with a CXC motif embedded within the GIY-YIG motif, partially matches that in the PLE Neptune clade, where it is found between RT and EN (Arkhipova 2006) . While this array of Cys residues does not match known Zn-finger-like profiles, it could still play a role in DNA binding, or form S-S bridges.",
//         "In ",
//         "Coiled-Coil Motif-Containing ORFs (CC-ORFs) Table 1 shows the nearly universal occurrence of CC-ORFs in the families prone to expansion (W and NT clades in fig. 2 ).",
//         "Most of the numerous CC-ORFs, which are 400-500 aa in Arkhipova et al. . doi:10.1093/molbev/msx159 MBE length and occur as stand-alone coding sequences on either side of Athena RTs, exhibit similarity to the N-terminal moieties of RTs (equivalent to ORF1 in the frameshifted W and VX clades). The extreme N-terminus of RTs is clade-specific and comes in three variants (supplementary fig. S7A and B, Supplementary Material online). In the ILOM clade, it contains an excess of polar (S, T, Q, N, and Y) with some basic (K and R) residues. In the catalytically dead JVX clade, it displays a high content of acidic residues (D and E) at the N-termini, and weak matches to BAR domains sensing membrane curvature (pfam03114). In the intron-rich, catalytically intact NT and W clades, it carries a conserved N-terminal KR-rich motif with an adjacent region of weak homology to helix-turn-helix dsDNA-binding motifs, while the central core occasionally shows similarity to DnaJ chaperones and surface antigens . While ORF1's and CC-ORFs do not resemble classical orthoretroviral gag genes and lack Zn-knuckles, they are reminiscent of the gag genes forming nucleocapsids in foamy viruses (Spumaretrovirinae), which are similarly sized, do not undergo proteolytic processing, and contain up to four coiled-coil motifs (Goldstone et al. 2013; Mullers 2013) . A combination of KR-rich and DE-rich N-termini in cooccurring CC-ORFs is highly likely to affect RNP properties, and might aid in raising the limits on RNA packaging.",
//         "TM-ORFs are found in 12 Terminon families (table 1) and are typically small (200-300 aa in length), with one (or rarely two) predicted TM domain of type I membrane topology (singlepass N-exo/C-cyt). Some of these ORFs also contain a predicted coiled-coil motif and/or cysteine residues which may form disulfide bridges. The low conservation of TM-ORFs offers limited insight into their function other than possible interaction with membranes. We searched for HHR motifs in A. vaga genomic DNA with the parameters used in (Cervera and De la Pena 2014), which were based on empirical criteria and tested on datasets of functionally active HHRs. A total of 497 HHR motifs fitting these descriptors were detected in A. vaga scaffolds, and assigned to M, O, W1, N, Q, R, S, and T families. Inspection of the remaining families revealed the essential core motifs (CUGANGA. . .GAAA) in the L and W families, albeit with a slightly different spacing (a much longer loop 2) ( fig. 3A ). When we modified the descriptor to accommodate these families, HHR-like motifs were detected in all PLE families, except for K, W2, and P. However, all members of the K, W2, and P families contain substitutions in the core HHR motif, although the sequence can easily be aligned with other HHRs and apparently preserves the structural helices ( (Lünse et al. 2016) , the AvPen3a HHR functions as a monomer.",
//         "The HHR-bearing repeats represent the most conserved region of the pLTRs, possibly reflecting their role as cis-acting elements for 3 0 -end recognition by RT, analogous to 3 0 -end stem-loop recognition in LINEs (Hayashi et al. 2014) . Such cisacting elements could participate in trans-mobilization of genic regions unrelated to Terminons, as seen in examples shown in figure 1 and supplementary figure S1 , Supplementary Material online. While the variable nature of 5 0 -termini and the lack of TSDs precludes unambiguous identification of such transduction events, it is noteworthy that foreign genes and members of host multigene families are often colocalized with telomeric repeats and HHRs, as are Terminon ORFs (see below).",
//         "The HHR motif can be positioned within pLTRs in two ways: intron-containing clades (NT-W) harbor the HHR motif near the 3 0 -end, with telomeric repeats directly adjacent to helix I ( fig. 3A , type I.t), while the intron-less families (L,O,M) carry the HHR motif in the 5 0 -terminal part of the pLTR, as do canonical Penelope elements. Note that helix I is the outermost helix of the type I HHR fold, and the expected cleavage site is always located in the center of the HHR, never coinciding with the TE-host boundary.",
//         'The putative Rep-associated origins of replication represent yet another type of cis-acting elements often found near fulllength Rep ORFs. They usually consist of a hairpin structure ( fig. 1) , often in combination with a series of tandem repeats, which are reminiscent of "iterons" in geminiviruses and contribute to the specificity of Rep binding to the hairpin (Londono et al. 2010) . Such sequences often mark the point separating two divergent ORFs, as seen in geminiviruses (Hanley-Bowdoin et al. 2013 ).',
//         "The directionality of ORFs within each unit ( fig. 1 and sup plementary figs. S2 and S6, Supplementary Material online) implies that transcript continuity is important for function, and distinguishes Terminons from self-synthesizing Polintons/ Mavericks, a class of virus-like DNA TEs of comparable size (15-20 kb, encoding up to ten ORFs in both orientations) (Kapitonov and Jurka 2006; Pritham et al. 2007) . Such ORF unidirectionality is typical for retroelements, but not for DNA TEs. Spacing between Terminon ORFs can be very close, consistent with residing on a single long transcript rather than on individual transcriptional units.",
//         "Except for directionality, ORFs in different families are not arranged in any predetermined order, which often makes We did not detect internal capture of host genes within boundaries of any of the A. vaga Terminon units: if a Terminon sequence is interrupted, it is usually by insertion of a different TE type (LTR, nonLTR, or DNA TEs) (supplementary fig. S6 , Supplementary Material online). Neither could we find a known TE or host gene to be interrupted by Terminon insertion: if broken, TEs or host genes are subject to end healing by telomeric repeats followed by Terminon attachment, so that the missing gene part is not found at the other end of Terminons or elsewhere in the genome (as in examples shown in supplementary figs. S1A and S6, Supplementary Material online).",
//         "Importantly, while foreign genes and host genes from multigene families are rarely internalized within units, they are often found between Terminons or their 3 0 -ends, either in direct or inverse orientation ( fig. 1 and supplementary fig.  S1C , Supplementary Material online). Thus, Terminons are likely to participate in gene amplification and transfer by providing cis-acting elements for transduction of genes via trans-action of the RT. Such complex structures could additionally propagate via rolling-circle replication, if combined with Rep origins of replication.",
//         "Most of the Terminon families in A. vaga, as judged by RNAseq counts, exhibit measurable levels of transcriptional activity, which is largely anticorrelated with small RNA counts ( fig.  4A ). Members of the M, O, and W2 families could represent recent additions which have not yet established a robust piRNA response. It should be noted that Terminons are ideally suited for establishment of piRNA clusters (Weick and Miska 2014) . These genomic loci, which give rise to noncanonical Pol II transcripts processed into piRNAs, are characterized, inter alia, by extended transcript length and intron retention (Sapetschnig and Miska 2014; Chen et al. 2016) . Giant Retrotransposons at Telomeres . doi:10.1093/molbev/msx159 MBE Furthermore, not only can Terminons generate long sensestrand transcripts, but many copies are flanked at the 3 0 -end by an adjacent host gene in antisense orientation (supplementary table S1, Supplementary Material online) with the potential to provide a promoter for antisense transcription, which could stimulate formation of a dual-strand piRNA cluster (Sapetschnig and Miska 2014) . If a flanking gene is 3 0 -truncated by terminal erosion and loses transcription termination signals, the resulting transcriptional readthrough would yield antisense Terminon transcripts, and hence RNA-mediated silencing (Kowalik et al. 2015) .",
//         "In earlier work, we amplified intron-containing Athena RT fragments by PCR of genomic DNA from representatives of three different bdelloid families, which diverged tens of millions of years ago (Mark Welch et al. 2008) : Philodina roseola (Philodinidae), Habrotrocha constricta (Habrotrochidae), and A. vaga (Adinetidae). These fragments can now be reliably assigned to W, K, and N Terminon clades. To evaluate the degree of Terminon conservation in bdelloids, we inspected sequenced cosmid inserts from P. roseola, as well as Athenacontaining contigs from a draft PacBio assembly of a natural isolate Adineta sp.11. In P. roseola, Terminons are joined to host DNA via a different telomeric repeat hexamer (TCACCC) n while in Adineta sp. 11 junctions are mostly formed by a variant octamer (TCACACCC) n . Strikingly, ORF composition and even syntenic blocks have been preserved in several families, and thus can be traced back to their common ancestor. For example, the extended ORF block in the S/T family, which includes the catalytically dead AthX and AthV (GIY-YIG, DEDDy, AthX, AthV, 2xGIY-YIG, CC JVX , AthT, aORF; supplementary fig. S6C , Supplementary Material online), appears in both Adineta spp., which diverged over 10 Mya, and phylogenetic analysis of Terminon ORFs confirms the presence of virtually every described family throughout each species' evolutionary history (supplementary fig. S3 , Supplementary Material online). Although nonRT Terminon-associated ORFs are shorter and less conserved than RTs, yielding less reliable branch support, their phylogeny is broadly congruent with the RT-based phylogeny, indicating that these ORFs have largely coevolved within each Terminon family (supplementary figs. S3B and S7, Supplementary Material online). The apparent exception is the Rep-related ORFs, for which a discordant phylogeny hints at the more transient character of their association with Terminons, albeit sufficiently prolonged to allow intron accumulation ( fig. 3C ). Overall, while the prevailing mode of inheritance for each Terminon family appears to be vertical, they may also persist within genera and species via horizontal mobility if a master copy is lost.",
//         "To reinforce the connections between host gene relocation and Terminon addition observed in isolated examples ( fig. 1  and supplementary fig. S1 , Supplementary Material online), we sought to investigate statistically the correlations between TE families, foreign genes, and telomeric repeats in window sizes 10 kb. At such distances, the overall TE density in A.",
//         "vaga was shown to be significantly higher around foreign genes, and vice versa (Flot et al. 2013) . We began by counting the number of telomeric repeats in windows of 2, 5, and 10 kb around each TE type. Using single-factor ANOVA (Tukey's test), we investigated distribution of telomeric repeats around different TE families for each window size. It is evident that the number of telomeric repeats is significantly higher near Athena RTs than near LTR, nonLTR, TIR, and Helitron elements, for window sizes ! 2kb ( fig. 4B and supplementary table S2, Supplementary Material online). Significant differences between Athena and Penelope start with the window size of 5 kb.",
//         "Regarding HHR motifs, a clear association is again observed with PLEs but not any other TE type, with 508 out of 614 HHR counts showing the association ( fig. 4C ). HHR motifs also tend to occur close to foreign genes and host gene families with piRNA coverage, known to accumulate in the extended subtelomeric regions (Flot et al. 2013 ), but are almost never found near the bulk of host genes in the core genome ( fig.  4C ). Similar patterns are observed for telomeric repeats, which yield elevated counts near TEs and foreign genes, but low counts near the bulk of host genes ( fig. 4D ). Comparing Figure 4B and D, it is worth noting that accumulation of other TE types in subtelomeres is likely due to the reduced deleterious effects of their insertion in these regions.",
//         'Notably, reinspection of our telomere-enriched mini-libraries from A. vaga and P. roseola (Gladyshev and Arkhipova 2007) shows that over 50% of sequenced plasmid clones represented various parts of Terminons, although <20% were previously recognized as Athena-containing. Together with fluorescent in situ hybridization data localizing AthO/AthM-containing cosmids to P. roseola telomeres (Gladyshev and Arkhipova 2007) , our analysis underscores the capacity of Terminons to occupy terminal positions, forming multiple layers of "sacrificial DNA" at telomeres.',
//         "For years, our knowledge of structural and functional TE diversity has remained relatively stable, with the understanding that we have largely grasped the major principles of their structural organization and the underlying basis for their mobility. It is therefore of special interest to identify taxonomic groups harboring hitherto unknown TE types. The principal subdivision between TEs rests upon the involvement of RNA into the replication cycle (class I TEs) or lack thereof (class II TEs). In class I autonomous TEs, the process of RNA copying into DNA requires that the TE codes for an RT, the enzyme capable of performing RNA-dependent DNA synthesis. On these grounds, the novel TEs described herein, named Terminons, can be unambiguously classified as retrotransposons. This, however, does not rule out the presence of enzymatic activities that may be involved in additional stages of the transposition cycle, which may even include rolling-circle replication. In total, the newly annotated Terminons occupy 1.1% of the A. vaga genome, increasing the known TE content from $3% (Flot et al. 2013 ) to slightly over 4%. Arkhipova et al. . doi:10.1093/molbev/msx159 MBE Molecular signatures around Terminons clearly point at terminal addition as the primary integration mechanism ( fig. 3D ). The characteristic 5 0 -truncation (supplementary fig. S2 , Supplementary Material online), which in nonLTR retrotransposons is often ascribed to premature RT fall-offs, in Terminons may also result from terminal DNA erosion, if the 5 0 -end is exposed to exonucleases before being capped by telomeric repeats. Long head-to-tail chains of sequentially added Terminons can exceed 60 kb in length, thereby greatly increasing the buffer zone that counteracts the ongoing terminal erosion. Site-specific integration into telomeric repeats, as observed in Bombyx mori for SART/TRAS retrotransposons (Fujiwara et al. 2005) , is highly unlikely, because Terminons are often found attached to terminally truncated and healed host genes or TEs. The observed bias towards oppositely oriented transcriptional units, especially 3 0 -truncated ones, could indicate a shift from uni-strand piRNA-producing loci known to operate in somatic tissues to dual-strand loci known to operate in the germ line, via antisense transcriptional units often lacking a proper poly(A) signal (Mohn et al. 2014; Weick and Miska 2014; Kowalik et al. 2015) . Members of the most prolific T family (supplementary figs. S2 and S6C, Supplementary Material online) have additionally incorporated a small transcriptionally active antisense ORF near the 3 0 end.",
//         'Although Terminons can harbor a diverse set of enzymatic activities (table 1), none of these appear obligatory, except for RT itself, which is combined with CC-ORF of putatively structural nature. Some of the enzymatic ORFs (GIY-YIG, Rep) may have been recruited to facilitate transposition, while others (GDSL esterases; RNase D-like DEDDy exonucleases) may assist in RNP assembly and/or evading host defenses. It is of special interest that catalytically deficient ORFs derived from various enzymes are consistently found in Terminon units, often in combination with their catalytically intact counterparts, and have persisted throughout bdelloid evolution, indicating that their retention is not accidental. Moreover, those ORFs have evolved under purifying selection (data not shown), suggesting that their recruitment was not based on catalysis. Noncatalytic functions for such "pseudoenzymes" (Adrain and Freeman 2012) could be structural or regulatory, and may include utilization of their binding capabilities, or involvement in heteromeric complex formation. The observed difference in the extreme N-termini of KR-rich (NT/W-like) and DE-rich (JVX-like) ORFs, which carry strong positive and negative charges, respectively, could promote heteromeric complex formation, or the latter could act as nucleic acid decoys.',
//         "Interestingly, Terminons do not encode any protease-like ORFs, indicating that the CC-RT fusion polyproteins are either processed by host proteases, or can form large multimeric complexes, where RT moieties belong to polypeptide chains up to 1.3 kDa. Neither do they code for an RNase H-like activity, which removes RNA from DNA-RNA hybrid intermediates in cytoplasmically replicating retroviruses and LTR retrotransposons, but is optional in nonLTR retrotransposons, which can utilize host RNase H for target-primed reverse transcription in the nucleus (Malik and Eickbush 2001) . The nonenzymatic CC-ORFs with coiled-coil motifs resemble in organization the gag proteins of certain reverse-transcribing viruses, which are dependent on eukaryotic cell membranes for their replication.",
//         "Despite the presence of exceptionally complex Terminon retroelements in all examined members of the class Bdelloidea, separated by tens of millions of years of evolution, we could not find Athena-like RTs in draft genomes of rotifers of the sister class Monogononta, which contain canonical EN(þ) PLEs of the Neptune type (Arkhipova 2006; Arkhipova et al. 2013) . Neither could we find any extra ORFs in EN-deficient RTs of telomeric Coprina PLEs in numerous sequenced filamentous fungi, where they occur in tandem arrays (Gladyshev and Arkhipova 2007; Arkhipova et al. 2013) . Fungal EN(À) PLEs can be very efficient at terminal addition, occupying every telomere in some basidiomycetes, for example, Agaricus bisporus and Tuber melanosporum (Martin et al. 2010; Foulongne-Oriol et al. 2013) . These EN(À) PLEs code for a single nonframeshifted ca. 1000-aa CC-RT ORF, but have no additional coding capacities. Thus, terminal addition per se does not require an extended ORF repertoire, although telomeric placement is clearly associated with the HHR motifs and reversecomplement telomeric repeats, which in bdelloids are uniquely exposed next to the HHR fold for optimal annealing to G-rich overhangs ( fig. 3A and D) .",
//         "Phylogenetic analysis of Athena RTs does not favor the scenario of shorter PLEs having evolved by reduction of longer ones. Rather, their phylogeny is more consistent with complex elements evolving from shorter ones via splitting of longer ORFs; acquisition of additional ORFs, possibly at the transcript level to account for coorientation; accumulation of introns; and loss of frameshifts. The L clade may serve as an example of recent expandability, as it still retains HHR remnants between neighboring ORFs (supplementary fig. S6D , Supplementary Material online). A split of ancestral elements into individual subdomains, perhaps by insertion of W-like ORFs, may have been accompanied by combination of elements with different subdomains, eventually giving rise to a highly complex structure preserving only one active RT compatible with a cognate HHR motif, which permits retrotransposition of the entire unit starting with HHR. The pLTR structure appears to have undergone a shift in HHR positioning relative to telomeric repeats (type I to type I.t; fig. 3A and D), which was likely selected to favor the optimal 3 0 -terminal configuration. Interestingly, a recent study associates HHR motifs with nonautonomous LTR retrotransposons, which may exist as short RNA circles (Cervera et al. 2016) ; however, all of those motifs belong to type III but not type I, differing in the topology of the open-ended helix, and possibly reflecting different structural requirements of PLE and LTR RTs.",
//         "It may be asked whether the unique structural characteristics of these retroelements could be associated with any biological features specific to the class Bdelloidea. In our view, the most relevant biological feature is the unusual susceptibility of bdelloid telomeric regions to acquisition of foreign genetic material and amplification of foreign genes and host multigene families (Flot et al. 2013; Rodriguez and Arkhipova 2016) . PLEs are unique in their capacity to retain Giant Retrotransposons at Telomeres . doi:10.1093/molbev/msx159 MBE introns after retrotransposition, which is also applicable to genes captured between pLTRs (Arkhipova et al. 2003 . Retromobility of longer templates would be disfavored at internal chromosomal locations in the absence of a reliable integration mechanism, as it would largely depend on preexisting nicks or breaks. Bdelloid telomeres, however, apparently offer the opportunity to bypass intrachromosomal integration by supplying the exposed G-rich overhangs, and a TE which can take advantage of such overhangs for its proliferation can additionally provide the host with extra means of terminal DNA addition. The terminal attachment mode does not rule out occasional intrachromosomal integration events, which might be triggered by random DNA breakage or by the presumed nicking activity of GIY-YIG EN when present. However, such events would be rare in comparison with terminal addition, since the lack of RT-EN fusion eliminates the cis-preference effect based on cotranslational cis-recognition of structural elements near the 3 0 -end of the template by the RT.",
//         "In summary, we have identified and characterized a novel and ancient type of retroelements with unusually complex organization and variable gene content, which can be added to telomeric G-rich overhangs with the aid of the 3 0 -terminally positioned hammerhead ribozyme motif. Combination of putatively structural ORF types with differently charged N-termini within a unit suggests that they participate in formation of RNP particles with unusual properties. The associated cis-acting elements are strongly correlated with foreign genes and multigene families in the bdelloid rotifer A. vaga, suggesting their participation in intragenomic and/or intergenomic gene transfer.",
//         "It would be of interest to investigate Terminon-encoded ORFs for enzymatic activities in vivo and in vitro, as well as formation of putative RNP complexes, however such studies would be premature until transpositionally active copies are identified. While it is evident that Terminons have been recently transposing, as judged by thehigh degree of nucleotide sequence identitywithin some families (WJ, T) (supplementary fig. S2 and fig. S6C , Supplementary Material online), the sequenced A. vaga strain has been maintained in the laboratory for over 25 years and is no longer experiencing selective pressures to which natural populations are subjected, allowing ORFs to decay. Thus, we expect that further understanding of Terminon biology will come from comparative analysis of multiple bdelloid natural isolates. Although the mode of transmission for most families is predominantly vertical, as their interspecific divergence parallels that of host genes (data not shown), some families could exhibit horizontal mobility.ThegiantsizeandvariableORFcompositionofretroelements described herein pose new challenges to developers of automated TE annotation tools, and leave us wondering how many unknown TE types with the potential to give rise to novel intracellular or extracellular entities are lurking in the still poorly explored genomes of understudied taxonomic groups, and what unanticipated impacts they can have on their eukaryotic hosts.",
//         "Supplementary data are available at Molecular Biology and Evolution online."
//       ],
//       tags: {
//         "0": {
//           tagPerPara: {
//             "0": "Label1",
//             "1": "Label2"
//           }
//         },
//         "1": {
//           tagPerPara: {
//             "0": "Label3",
//             "1": "Label4"
//           }
//         }
//       }
//     },
//     similar: [
//       {
//         paper_id: "",
//         doi: "",
//         title: "",
//         doc_date: "",
//         authors: [""],
//         summary: "",
//         abstract: {
//           text: [],
//           tags: {
//             sciwing: []
//           }
//         },
//         bodyText: {
//           text: [""],
//           tags: {}
//         }
//       }
//     ]
//   },
//   {
//     answer: {
//       score: "91.30101961832347",
//       sents: [
//         "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
//         "Around the half of the responders will accept to participate in a COVID-19 vaccine clinical trial.",
//         "In the context of a clinical trial, men were also more prone to participate.",
//         "Fears about COVID-19 were not associated with willingness to participate in a clinical trial.",
//         "However, individuals who considered themselves at-risk for COVID-19 infection were more prone to accept to participate in a clinical trial for a vaccine.",
//         "Out of the context of the pandemics, the feeling to be at-risk for a disease was not the main motivation to participate in a vaccine clinical trial [7] .",
//         "Moreover, older age was associated (except in the group over 80 years) with willingness to participate in a COVID-19 vaccine clinical trial, this observation contrast with a previous study about willingness to participate in a vaccine clinical trial [7] .",
//         "This observation suggests that in the pandemics context, individuals are more prone to participate in a clinical trial for a vaccine."
//       ]
//     },

//     paper_id: "eee9bfeffbb609eff810827214ba9edf543349ae",
//     doi: "10.1101/2020.04.23.20076513",
//     doc_date: "2020-04-27",
//     title:
//       "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
//     authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
//     summary: "",
//     abstract: {
//       text: [],
//       tags: {
//         sciwing: []
//       }
//     },
//     bodyText: {
//       text: [
//         "Abstract Purpose: To provide recommendations and standard operating procedures for intensive care unit (ICU) and hospital preparations for a mass disaster or influenza epidemic with a specific focus on surge capacity and infrastructure considerations. Methods: Based on a literature review and expert opinion, a Delphi process was used to define the essential topics including surge capacity and infrastructure considerations. Results: Key recommendations include: (1) hospitals should increase their ICU beds to the maximal extent by expanding ICU capacity and expanding ICUs into other areas; (2) hospitals should have appropriate beds and monitors for these expansion areas; hospitals should develop contingency plans at the facility and government (local, state, provincial, national) levels to provide additional ventilators;",
//         "(3) hospitals should develop a phased staffing plan (nursing and physician) for ICUs that provides sufficient patient care supervision during contingency and crisis situations; (4) hospitals should provide expert input to the emergency management personnel at the hospital both during planning for surge capacity as well as during response; (5) hospitals should assure that adequate infrastructure support is present to support critical care activities; (6) hospitals should prioritize locations for expansion by expanding existing ICUs, using postanesthesia care units and emergency departments to capacity, then stepdown units, large procedure suites, telemetry units and finally hospital wards. Conclusions: Judicious planning and adoption of protocols for surge capacity and infrastructure considerations are necessary to optimize outcomes during a pandemic.",
//         "The type of the mass casualty event (MCE) is a major determinant of the demands on a hospital. For 2009 H1N1 influenza, the impact on ICU services varied considerably. The proportion of ICU beds occupied by patients with H1N1 peaked at 9-19% in Australia and New Zealand [1] , but ICU services in Mexico were overwhelmed, and many patients required ventilation outside ICUs [2] .",
//         "used for events of any scale and for both sudden (e.g., bomb detonation) or gradual events (e.g., pandemic influenza). 2. Scope: using examples and general recommendations, provide templates for intensive care unit (ICU) and isolation area expansion including consideration of central system capacity expansion (such as oxygen). Recent recommendations have called for institutions to prepare for at least a 300% increase in ICU capacity beyond baseline during a pandemic or catastrophic disaster [3] . This level of expansion of space and services is not achievable without significant prior planning/preparedness activities. Institutions should define their own capacities and capabilities. Defining specific limitations (e.g., shortage of available ventilators), sources to mitigate these shortfalls (e.g., national stockpile, institutional cache) and a strategy for accepting/using outside resources to expand capacity is critical to response success. This document cannot account for operational planning details at individual institutions, but aims to provide a brief, general overview of key issues to be addressed during events requiring critical care surge capacity generation. Hospitals should create their own specific plans according to hospital size, role in the community and the hazards recognized in the community. Hospitals may refer to recent articles for surge capacity frameworks [4, 5] and crisis patient care decision frameworks [6, 7] . 3. Goals and objectives: describe the basis for institutional standard operating procedures (SOP) for ICU and isolation space expansion using templates. Provide recommendations for expansion of oxygen capacity and continuity of infrastructure operation.",
//         "1. Mass casualty event: an event generating a large number of victims that does not generate demand exceeding the facility or community resources. 2. Disaster: an event generating large numbers of victims that exceed usual hospital and/or community resources and requires changes in the usual practices to meet demand (usually short term). Usually implies temporary communications and resource shortfalls and a temporary lack of situational awareness. Note that a MCE is not equivalent to a disaster, and increased capacity and preparedness increase facility surge capacity for larger patient volumes before a MCE becomes a disaster. 3. Crisis standard of care: a substantial change in usual health care operations and the level of care it is possible to deliver, made necessary by a pervasive (e.g., pandemic influenza) or catastrophic (e.g., earthquake, hurricane) disaster. This change in the level of care delivered is justified by specific circumstances and is formally declared by government entities. The formal declaration that crisis standards of care are in operation enables specific legal/regulatory powers and protections for health care providers in the necessary tasks of allocating and using scarce medical resources [7]. 4. Surge capacity: three functional components of surge capacity exist (Fig. 1 ) [5, 7] . a. Conventional: using usual patient care spaces, resources and practices. b. Contingency: using adapted areas of the facility for ICU services (procedure areas, post-anesthesia care, operative suites, stepdown units) including adaptations to standard staffing and resource practices to provide functionally equivalent medical care, with minimal increase in risk to the patient. c. Crisis: providing sufficient care under the circumstances with significant changes to standard staffing and resource practices (e.g., using an oxygen-saturation monitor with high/low rate alarms instead of usual cardiac and other monitors, tiered staffing so one nurse/physician with critical care expertise supervises several staff with lesser degrees of training that provide the bedside care) that may significantly impact patient morbidity and mortality.",
//         "1. An incident management system (Hospital Incident Command System or alternative nationally compliant system) [8, 9] is in place at the facility. This assures that in addition to using appropriate incident command positions and terminology that the process of management by objectives and utilization of formal and practiced planning cycles to generate incident action plans (IAP) for the next operational period is followed. The Hospital Emergency Executive Control Group coordinates these activities (see Chap. 3: Coordination and collaboration of interface units). 2. Coordination agreements and systems with neighboring/regional health care facilities are put in place [10] by the Local, Regional or National Emergency Executive Control Group (see Chap. 3: Coordination and collaboration of interface units). These may cross jurisdictional and even national boundaries. The importance of resource-balancing across multiple institutions cannot be overemphasized. During a single-site event, expedient patient transfer to those facilities with resources provides the best care possible, and during a pervasive event (such as a pandemic), S12 inter-facility coordination assures a consistent standard of care across a given region. 'Regions' are usually defined functionally for hospitals rather than geographically (as is the case for emergency management), and planning should include usual referral partners regardless of geographic boundaries. 3. The hospital has an ICU, operating rooms, postanesthesia care, stepdown/intermediate care units and procedure areas (may include respiratory/gastrointestinal procedure rooms or outpatient surgery/procedure areas) [11] [12] [13] 4. The hospital has prepared for MCEs including stockpiling equipment, medications and basic supplies [11, 12] . This should include planning for special populations regardless of the hospital's role in the community (for example, a hospital that does not usually provide burn or pediatric care may have to provide care for these patients during an incident that overwhelms or damages usual community resources). 5. The hospital has one ventilator per critical care bed [12] but can obtain limited additional ventilators within 6-12 h.",
//         "Lines of authority 1. The hospital incident manager [9] has overall decisionmaking authority to implement surge capacity or any other systematic decisions involved in the response. Depending on the organization of the system, the hospital incident manager optimally may answer to (or at least coordinate with) an over-arching governmental entity and be providing institutional direction informed by higher level situational awareness and objectives. Critical care staff (unit nursing supervisor or physician depending on availability) at hospitals should be prepared to act within their authority to:",
//         "a. Inform the incident manager about the status and capacity of ICU services and their resource needs. These updates should occur as soon as possible after event declaration and be updated every few hours until the influx of patients has stabilized (after a no-notice event) at which point twice-daily reporting is likely to be sufficient unless specific circumstances require an update. 1 Unless temporary, requires state empowerment, clinical guidance, and protection for triage decisions and authorization for alternate care sites/techniques. Once situational awareness has been achieved, triage decisions should be as systematic and integrated into institutional process, review and documentation as possible.",
//         "2 Institutions consider impact on the community of resource use (consider ''greatest good'' versus individual patient needs, e.g., conserve resources when possible), but patient-centered decision making is still the focus. 3 Institutions (and providers) should make triage decisions balancing the availability of resources to others and the individual patient's needs-shift to community-centered decision making S13 e. Change staffing patterns and hours to provide the most appropriate coverage based on the demands of the incident.",
//         "1. Critical care surge capacity-critical care is expanded across a continuum of physical space reflected below from conventional to crisis capacity.",
//         "The institutional plan should provide for a phased expansion of critical care appropriate to the incident demands. Hospitals should be able to increase their ICU beds to the maximal extent by expanding ICUs and other areas with appropriate beds and monitors. Increases beyond 25% over usual capacity are unlikely with the current H1N1 virus. Future mutations, outbreaks or MCE may require maximum feasible expansion of capacity. This maximal feasible number will vary between institutions and countries, and be determined by the number of excess ICU patients, the usual ICU bed proportion of the total population and the maximum feasible expansion. As noted above, one group recommended a 300% expansion target, but many facilities may not be able to reach this target [3] and should consider phased expansion to double capacity. a. Conventional: involves spaces usually used for critical care. Occupancy and staffing of existing beds is Request additional staffing as needed for post-anesthesia care (6 beds), pre-induction (6 beds) and special procedures/outpatient surgery unit (12 beds up to 24 beds) 3. Move stable ICU patients to step-down units, move step-down and rule-outs to non-monitored beds as appropriate 4. Transfer patients from monitored to non-monitored beds as appropriate 5. Staff gastroenterology laboratory and cardiac outpatient area if required 6. Move cots to pre-designated discharge holding area/waiting areas for holding patients pending transfers and clearing rooms 7. Assess with Planning Chief need to activate regional transfer plan and for additional/follow-on staff and material resources Crisis care 1. Add cots or stretchers, transfer stable critical care patients with less resource demand to medicine floors (medical units are preferred by location to surgery, neurology, pediatric floor beds due to location) according to demand based on surge capacity worksheet 2. Note additional beds created in units and halls do not have dedicated monitoring systems. Call bioelectronics for any additional spares and ask that they pull Accident & Emergency (A&E) orthopedic area monitors, crash cart monitors, and depending on needs may move portable monitors from surgery/procedure areas. May need to make request to other facilities or discontinue cardiac/invasive monitoring to decrease demand. Can also use saturation monitor for high/low rate alarm-respiratory care can assist re-allocation of saturation monitors 3. Assess situation with Planning Section Chief-as above-if internal/external transfers will not allow patients to move off cots within 6 h then: Decompression/demobilization In conjunction with incident manager prepare patient lists for transfer-focus on those that are stable or with resource needs that are difficult to meet in the current environment but do not preclude transfer. As more resources and staff become available and transfers are made to other institutions, transition critical care back to contingency and then conventional locations, restoring normal operations and care locations",
//         "Note that these represent a small portion of an overall surge capacity plan (which itself is a portion of the institutional emergency operations plan) and should be tailored to the needs of the facility maximized, including moving appropriate patients to step-down care from ICU (facilitated by having preexisting 'bump lists'), increasing staffing through callbacks and holding staff as needed. This should be coupled with hospital-wide implementation of the same strategies of maximal bed use including 'surge discharge' that prioritize floor patients for early discharge or movement to other holding areas/hall beds per unit protocol so that adequate space can be created for ICU patient transfers [14, 15] . Discharge holding areas should be pre-identified, and processes for patient assessment and rapid discharge should be in place if patients are to move efficiently between the emergency department (ED)/accident and emergency (A&E), operating suites, ICUs and inpatient floors. For example, a lounge or waiting area may be designated as an area where patients designated for early discharge can be moved while awaiting final orders, medications and transportation in order to more quickly make these beds available for incoming patients. This is of particular utility in a 'no-notice' or sudden event. During a more prolonged event, selective admission and surgical strategies (deferring elective procedures and selective scheduling of other procedures) will be of prominent value in maintaining maximal critical care resources. b. Contingency: utilizes spaces that can provide comparable services to true ICU beds with supervising staff that have critical care skills. This would include use of pre-and post-anesthesia care units (PACU), operating suites (especially in procedure areas), procedure rooms [gastroenterology (GI), respiratory, interventional radiology], step-down units/monitored units and potentially emergency department beds (though competing priorities for use will impact incident manager decisions about which spaces to use). The overall objective is to concentrate care for the least stable and most critically ill in the conventional critical care areas and move those that are more stable or with lower resource requirements to other areas of care. Key infrastructure features include the ability to provide usual cardiac and oxygen saturation monitoring, intravenous medications and drips and mechanical ventilation [11] [12] [13] . In preparing hospitals for a crisis, locations should be prioritized in the following order: expanding existing ICUs, postanesthesia care units and emergency departments to capacity, then step-down units, large procedure suites, telemetry units and finally hospital wards [12] . Infection control personnel should create a phased plan to accommodate larger numbers of patients with highly infectious diseases as this may be different than planning for patients that do not require isolation.",
//         "Hospitals should balance ICU needs and the potential decreasing benefits of increasing ICU capacity (because of excess workload) with other hospital needs that may suffer more as services are depleted. Staff for these areas (anesthesia, surgery, critical care, emergency) should have a high degree of comfort managing the critically ill, at least on a short-term basis. Hospital incident 'worksheets' should be developed that map and prioritize care areas for use based on ability to monitor the patient rooms, proximity to existing critical care or step-down units, and institution-specific factors (for example, PACU and pre-anesthesia care first, followed by conversion of step-down unit to ICU level care, etc.) ( Table 2) . Staff and equipment considerations should be pre-planned so that critical care staff can supervise overall care for critical patients while reducing their hands-on patient care responsibilities ('increasing the altitude of supervision' to oversee a larger number of patients) [11, 12] . Ventilators are expensive and difficult to stockpile, but contingency plans at the facility and government (local, state, provincial, national) levels should provide for some additional ventilators. Planned criteria for re-distribution of equipment (use of oxygen saturation monitors restricted to those that are on ventilators or on high-flow oxygen, for example, with spot checks for others) or conservation of equipment (what medications should be given by pumps vs. those that can safely be given by gravity flow) may facilitate implementation during an event [3, 16] . Prioritization of support services (minimizing tests ordered, laboratory and radiology restricting services to essential tests and diagnostics, use of alternative diagnostics-for example, ultrasound rather than computed tomography for abdominal imaging) is also required and should be institution-wide. Restrictions on utilization of diagnostics (laboratory, radiology) should increase with demand in pre-planned phases. The phased response for H1N1 may last several weeks [1, 2] . c. Crisis: provision of 'sufficient' critical care in areas that are not designed for high-intensity care, for example, using floor beds with an oxygen saturation monitor (with high/low rate and low saturation alarms) for a patient on a ventilator and using staff that do not have significant training in critical care to provide basic care (basic nursing care, vital signs monitoring, etc.) with an even higher 'altitude' of the critical care nurses and physicians supervising these providers (e.g., critical care nursing and physician staff round on the patients at scheduled intervals to provide guidance to the primary nursing and physician staff and are available for consultation/questions). Should demand exceed resource capacity for specific equipment (e.g., ventilators, extra-corporeal membrane oxygenation equipment), with no resources expected and no transfers possible [7, 17] , triage processes should be implemented that have been pre-planned to the extent possible and are consistent with the community standard of care and any state, provincial or national guidance.",
//         "Central system considerations 1. Oxygen a. Remodeling or building projects at a hospital should consider incorporating oxygen ports (or extra ports) into patient rooms, meeting rooms, etc., to facilitate conversion to patient care areas or the accommodation of additional beds in usual areas. However, safety considerations are paramount, as these systems may not be used often and yet still require regular inspection and testing. Multi-patient regulators are available that can serve multiple patients on variable oxygen flow rates from a single wall port, and these may be useful for providing cohort care, particularly in flat-space areas such as meeting rooms, etc. Though this does not provide critical care, it can open beds up that can be used for critical care and thus is a valuable part of planning. b. Hospitals should carefully consider limitations of the oxygen supply. Even if enough ventilators or oxygen flow meters are available such that every bed in the hospital would have one, the oxygen systems for most hospitals were not designed to provide such a supply and maintain pressure within the system. Continued supply and re-supply of liquid oxygen may be another limiting factor. Hospitals should examine their oxygen delivery and storage systems for vulnerabilities. Often, there are many potential points of failure within these systems with little redundancy or recovery. It may be to the institution's advantage to duplicate liquid oxygen systems, ideally separated geographically, or at least equipped to allow an interface with a trailerbased liquid oxygen system should the primary fixed delivery system fail. 2. Suction/compressed air: suction and compressed air lines are a lower priority for incorporation into congregate care spaces (those providing low acuity non-ambulatory patient care); however, at least compressed air (and ideally suction) should be available for any spaces where mechanical ventilation is a consideration (i.e., patient rooms). Hand-held and battery-operated suction units are available and may have utility, though the availability of wall suction is far preferable because of superior performance. 3. Utilities a. Electricity: emergency generators at most hospitals do not have the capacity to power outlets in all patient rooms sufficiently for the monitors, ventilators and pumps necessary for critical care. Further, heating, air conditioning and ventilation systems (including negative flow systems) may not be included or adequately powered with emergency power circuits. Critical care staff should identify which systems and outlets are included in emergency power, which are not and what the maximum load is (just because outlets are marked for emergency use does not mean that the generators can support the electrical draw if many of these outlets are used at once). The hospital should plan with jurisdictional emergency management the types and quantities of generators necessary to effectively run the facility should primary power fail and have the necessary adaptors available to wire temporary generators into the hospital system [18] . b. Water: clean water is required for many health care activities, including large volumes for hemodialysis. Hospital planners may be unaware of the water needs for critical care activities and should work with critical care to forecast needs and identify suppliers and an operating procedure. c. Continuity of operational planning: the ability of the institution to provide critical care depends on the maintenance of the operating infrastructure. Water and utilities are separated from these because of the specific considerations above, but the availability of lighting, communications, information technology, fire suppression, heating/ventilation/air conditioning, nutrition services, laboratory, radiology and many other support and infrastructure services is not assured and critical care planners should be familiar with planning for maintaining general hospital operations during outages and other incidents [19, 20] . Functional roles and responsibilities of the internal personnel and interface agencies or sectors (these should be defined prior to the event and the specific actions to be taken listed in job action sheets or other resources that the care providers and incident management team can reference during an event) with resource acquisition (particularly for non-medical supplies such as security personnel for traffic control, etc.), coordinates the response on the jurisdictional level, and depending on the regional construct may assist with arranging patient transfers. This group assists with Emergency Medical Services and other patient transportation resources. b. Health care systems: provide mutual aid including resources and staff to disproportionately affected hospitals. Depending on regional constructs, these systems ideally have a coordinating entity that establishes priorities of response and resource assignments, coordinates patient transfers, and works with other stakeholder agencies to obtain necessary staff, resources and emergency declarations. Hospital personnel should understand how these systems work in their area and practice using them prior to an event [3, 10] .",
//         "Logistics support and requirements necessary for the effective implementation of the SOP Incident management framework, institutional mobilization (disaster) plan, pre-existing phased implementation plans for capacity expansion, materials and resources appropriate to the plans (scope determined by institutional commitment and financial resources) and mechanism for monitoring, requesting and receiving resources [22] [23] [24] are required.",
//         "Development/adaptation of facility plans should include administrative and critical care stakeholders, review and vetting with other affected department staff [Accident Facilities should establish temporary anteroom/changing area off hallway (2 h). Facilities should isolate ventilation to unit and change to 50% supply, 100% exhaust.",
//         "Step-down care may be provided in MICU prior to transfer to floor negative pressure rooms 2. Open Surgery and Procedure center as isolation stepdown/critical care isolation area in consultation with incident manager if necessary ([7 patients or more anticipated). Ventilation is already exhausted from this area; elective surgical volumes should be reduced during event. Use locker rooms as clean/infectious transition zones for PPE donning/doffing. May use operating suites for ICU level care in cooperation with anesthesia. Capacity 36 beds including 24 in waiting/recovery and 12 operating room/procedure rooms 3. PPE used by staff continuously in infectious area Crisis patient care (catastrophic event, e.g., pandemic influenza) 1. Using the standard surge capacity worksheet as a tool, determine with incident management which patient care areas to use as infectious patient cohort care depending on the current and anticipated event scope. Cohort areas to may expand and contract during the course of the event 2. Facilities should assist with construction of temporary anterooms for PPE changing adjacent to each cohort area and assure exhaust ventilation for these areas. Supply may not be able to be manipulated for large areas 3. Hospital should implement access control and staff screening/monitoring plans 4. PPE used by staff continuously in infectious/cohort area, potentially hospital-wide depending on scope of the event and transmissibility",
//         "Sample core infectious disease critical care capacity elements for 'City Hospital.' Note that this plan reflects specific adaptations for the facility and that each facility should identify a phased approach to these patients. Space concerns are only one element of an overall infectious disease response plan and guidance for specific disease management, infection control, staff screening, behavioral health, visitor and access control policies, Emergency Department screening and cohorting, and patient transport planning (use of elevators, etc.) policies all should be included in the institutional plan City Hospital SOP for critical care management of a special pathogen: this guideline applies ONLY to pathogens that are transmitted by airborne or suspected airborne routes AND have a high likelihood of transmission and severe morbidity/mortality (may include SARS, pandemic influenza, some hemorrhagic fevers). These patients require careful and comprehensive use of personal protective equipment (PPE) by staff caregivers S18 & Emergency (A&E), operating room, stepdown units, and procedure areas, laboratory and radiology services, etc.], and preparedness activities supporting the SOP (materials acquisition, planning).",
//         "The initial development of the critical care surge plan should include a draft, with discussion, revision and a feedback cycle to the facility stakeholders. Once a draft plan is complete, a tabletop exercise should test basic assumptions of the plan with revision as needed. Initial orientation and training of staff on procedures should follow, and the plans should then be tested as realistically as possible in a functional exercise. After each exercise or event, an after-action review should identify areas for improvement and corrective actions. The SOP should be redrafted as needed based on the experiences, or additional preparedness/planning activities may need to occur.",
//         "Education on these changes is conducted, and the plan exercised again. Too often hospital disaster exercises stop with the patients being processed through the ED/A&E and do not require inpatient decision-making.",
//         "Effective augmentation of critical care services at a hospital requires substantial planning prior to the event, with integration of planning efforts across multiple services at the hospital and the engagement of community and government partners. Development of a phased critical care expansion plan addressing staff, space and supplies in conjunction with hospital administration and emergency management personnel should be a priority with the ongoing 2009 H1N1 influenza pandemic.",
//         "Conflict of interest None."
//       ],
//       tags: {
//         "0": {
//           tagPerPara: {
//             "0": "Label1",
//             "1": "Label2"
//           }
//         },
//         "1": {
//           tagPerPara: {
//             "0": "Label3",
//             "1": "Label4"
//           }
//         }
//       }
//     },
//     similar: [
//       {
//         paper_id: "",
//         doi: "",
//         doc_date: "2020-04-27",
//         title: "",
//         authors: [""],
//         summary: "",
//         abstract: {
//           text: [],
//           tags: {
//             sciwing: []
//           }
//         },
//         bodyText: {
//           text: [""],
//           tags: {}
//         }
//       }
//     ]
//   },
//   {
//     answer: {
//       score: "91.30101961832347",
//       sents: [
//         "Intention to participate in a COVID-19 vaccine clinical trial and to get vaccinated against COVID-19 in France during the pandemic",
//         "Around the half of the responders will accept to participate in a COVID-19 vaccine clinical trial.",
//         "In the context of a clinical trial, men were also more prone to participate.",
//         "Fears about COVID-19 were not associated with willingness to participate in a clinical trial.",
//         "However, individuals who considered themselves at-risk for COVID-19 infection were more prone to accept to participate in a clinical trial for a vaccine.",
//         "Out of the context of the pandemics, the feeling to be at-risk for a disease was not the main motivation to participate in a vaccine clinical trial [7] .",
//         "Moreover, older age was associated (except in the group over 80 years) with willingness to participate in a COVID-19 vaccine clinical trial, this observation contrast with a previous study about willingness to participate in a vaccine clinical trial [7] .",
//         "This observation suggests that in the pandemics context, individuals are more prone to participate in a clinical trial for a vaccine."
//       ]
//     },
//     paper_id: "1",
//     doi: "10.1101/2020.04.23.20076513",
//     doc_date: "2020-04-27",
//     title:
//       "Chapter 2. Surge capacity and infrastructure considerations for mass critical care",
//     authors: ["John.Hick", "Michael.Christian", "Charles.Sprung"],
//     summary: "",
//     abstract: {
//       text: [],
//       tags: {
//         sciwing: []
//       }
//     },
//     bodyText: {
//       text: [
//         "Abstract Purpose: To provide recommendations and standard operating procedures for intensive care unit (ICU) and hospital preparations for a mass disaster or influenza epidemic with a specific focus on surge capacity and infrastructure considerations. Methods: Based on a literature review and expert opinion, a Delphi process was used to define the essential topics including surge capacity and infrastructure considerations. Results: Key recommendations include: (1) hospitals should increase their ICU beds to the maximal extent by expanding ICU capacity and expanding ICUs into other areas; (2) hospitals should have appropriate beds and monitors for these expansion areas; hospitals should develop contingency plans at the facility and government (local, state, provincial, national) levels to provide additional ventilators;",
//         "(3) hospitals should develop a phased staffing plan (nursing and physician) for ICUs that provides sufficient patient care supervision during contingency and crisis situations; (4) hospitals should provide expert input to the emergency management personnel at the hospital both during planning for surge capacity as well as during response; (5) hospitals should assure that adequate infrastructure support is present to support critical care activities; (6) hospitals should prioritize locations for expansion by expanding existing ICUs, using postanesthesia care units and emergency departments to capacity, then stepdown units, large procedure suites, telemetry units and finally hospital wards. Conclusions: Judicious planning and adoption of protocols for surge capacity and infrastructure considerations are necessary to optimize outcomes during a pandemic.",
//         "The type of the mass casualty event (MCE) is a major determinant of the demands on a hospital. For 2009 H1N1 influenza, the impact on ICU services varied considerably. The proportion of ICU beds occupied by patients with H1N1 peaked at 9-19% in Australia and New Zealand [1] , but ICU services in Mexico were overwhelmed, and many patients required ventilation outside ICUs [2] .",
//         "used for events of any scale and for both sudden (e.g., bomb detonation) or gradual events (e.g., pandemic influenza). 2. Scope: using examples and general recommendations, provide templates for intensive care unit (ICU) and isolation area expansion including consideration of central system capacity expansion (such as oxygen). Recent recommendations have called for institutions to prepare for at least a 300% increase in ICU capacity beyond baseline during a pandemic or catastrophic disaster [3] . This level of expansion of space and services is not achievable without significant prior planning/preparedness activities. Institutions should define their own capacities and capabilities. Defining specific limitations (e.g., shortage of available ventilators), sources to mitigate these shortfalls (e.g., national stockpile, institutional cache) and a strategy for accepting/using outside resources to expand capacity is critical to response success. This document cannot account for operational planning details at individual institutions, but aims to provide a brief, general overview of key issues to be addressed during events requiring critical care surge capacity generation. Hospitals should create their own specific plans according to hospital size, role in the community and the hazards recognized in the community. Hospitals may refer to recent articles for surge capacity frameworks [4, 5] and crisis patient care decision frameworks [6, 7] . 3. Goals and objectives: describe the basis for institutional standard operating procedures (SOP) for ICU and isolation space expansion using templates. Provide recommendations for expansion of oxygen capacity and continuity of infrastructure operation.",
//         "1. Mass casualty event: an event generating a large number of victims that does not generate demand exceeding the facility or community resources. 2. Disaster: an event generating large numbers of victims that exceed usual hospital and/or community resources and requires changes in the usual practices to meet demand (usually short term). Usually implies temporary communications and resource shortfalls and a temporary lack of situational awareness. Note that a MCE is not equivalent to a disaster, and increased capacity and preparedness increase facility surge capacity for larger patient volumes before a MCE becomes a disaster. 3. Crisis standard of care: a substantial change in usual health care operations and the level of care it is possible to deliver, made necessary by a pervasive (e.g., pandemic influenza) or catastrophic (e.g., earthquake, hurricane) disaster. This change in the level of care delivered is justified by specific circumstances and is formally declared by government entities. The formal declaration that crisis standards of care are in operation enables specific legal/regulatory powers and protections for health care providers in the necessary tasks of allocating and using scarce medical resources [7]. 4. Surge capacity: three functional components of surge capacity exist (Fig. 1 ) [5, 7] . a. Conventional: using usual patient care spaces, resources and practices. b. Contingency: using adapted areas of the facility for ICU services (procedure areas, post-anesthesia care, operative suites, stepdown units) including adaptations to standard staffing and resource practices to provide functionally equivalent medical care, with minimal increase in risk to the patient. c. Crisis: providing sufficient care under the circumstances with significant changes to standard staffing and resource practices (e.g., using an oxygen-saturation monitor with high/low rate alarms instead of usual cardiac and other monitors, tiered staffing so one nurse/physician with critical care expertise supervises several staff with lesser degrees of training that provide the bedside care) that may significantly impact patient morbidity and mortality.",
//         "1. An incident management system (Hospital Incident Command System or alternative nationally compliant system) [8, 9] is in place at the facility. This assures that in addition to using appropriate incident command positions and terminology that the process of management by objectives and utilization of formal and practiced planning cycles to generate incident action plans (IAP) for the next operational period is followed. The Hospital Emergency Executive Control Group coordinates these activities (see Chap. 3: Coordination and collaboration of interface units). 2. Coordination agreements and systems with neighboring/regional health care facilities are put in place [10] by the Local, Regional or National Emergency Executive Control Group (see Chap. 3: Coordination and collaboration of interface units). These may cross jurisdictional and even national boundaries. The importance of resource-balancing across multiple institutions cannot be overemphasized. During a single-site event, expedient patient transfer to those facilities with resources provides the best care possible, and during a pervasive event (such as a pandemic), S12 inter-facility coordination assures a consistent standard of care across a given region. 'Regions' are usually defined functionally for hospitals rather than geographically (as is the case for emergency management), and planning should include usual referral partners regardless of geographic boundaries. 3. The hospital has an ICU, operating rooms, postanesthesia care, stepdown/intermediate care units and procedure areas (may include respiratory/gastrointestinal procedure rooms or outpatient surgery/procedure areas) [11] [12] [13] 4. The hospital has prepared for MCEs including stockpiling equipment, medications and basic supplies [11, 12] . This should include planning for special populations regardless of the hospital's role in the community (for example, a hospital that does not usually provide burn or pediatric care may have to provide care for these patients during an incident that overwhelms or damages usual community resources). 5. The hospital has one ventilator per critical care bed [12] but can obtain limited additional ventilators within 6-12 h.",
//         "Lines of authority 1. The hospital incident manager [9] has overall decisionmaking authority to implement surge capacity or any other systematic decisions involved in the response. Depending on the organization of the system, the hospital incident manager optimally may answer to (or at least coordinate with) an over-arching governmental entity and be providing institutional direction informed by higher level situational awareness and objectives. Critical care staff (unit nursing supervisor or physician depending on availability) at hospitals should be prepared to act within their authority to:",
//         "a. Inform the incident manager about the status and capacity of ICU services and their resource needs. These updates should occur as soon as possible after event declaration and be updated every few hours until the influx of patients has stabilized (after a no-notice event) at which point twice-daily reporting is likely to be sufficient unless specific circumstances require an update. 1 Unless temporary, requires state empowerment, clinical guidance, and protection for triage decisions and authorization for alternate care sites/techniques. Once situational awareness has been achieved, triage decisions should be as systematic and integrated into institutional process, review and documentation as possible.",
//         "2 Institutions consider impact on the community of resource use (consider ''greatest good'' versus individual patient needs, e.g., conserve resources when possible), but patient-centered decision making is still the focus. 3 Institutions (and providers) should make triage decisions balancing the availability of resources to others and the individual patient's needs-shift to community-centered decision making S13 e. Change staffing patterns and hours to provide the most appropriate coverage based on the demands of the incident.",
//         "1. Critical care surge capacity-critical care is expanded across a continuum of physical space reflected below from conventional to crisis capacity.",
//         "The institutional plan should provide for a phased expansion of critical care appropriate to the incident demands. Hospitals should be able to increase their ICU beds to the maximal extent by expanding ICUs and other areas with appropriate beds and monitors. Increases beyond 25% over usual capacity are unlikely with the current H1N1 virus. Future mutations, outbreaks or MCE may require maximum feasible expansion of capacity. This maximal feasible number will vary between institutions and countries, and be determined by the number of excess ICU patients, the usual ICU bed proportion of the total population and the maximum feasible expansion. As noted above, one group recommended a 300% expansion target, but many facilities may not be able to reach this target [3] and should consider phased expansion to double capacity. a. Conventional: involves spaces usually used for critical care. Occupancy and staffing of existing beds is Request additional staffing as needed for post-anesthesia care (6 beds), pre-induction (6 beds) and special procedures/outpatient surgery unit (12 beds up to 24 beds) 3. Move stable ICU patients to step-down units, move step-down and rule-outs to non-monitored beds as appropriate 4. Transfer patients from monitored to non-monitored beds as appropriate 5. Staff gastroenterology laboratory and cardiac outpatient area if required 6. Move cots to pre-designated discharge holding area/waiting areas for holding patients pending transfers and clearing rooms 7. Assess with Planning Chief need to activate regional transfer plan and for additional/follow-on staff and material resources Crisis care 1. Add cots or stretchers, transfer stable critical care patients with less resource demand to medicine floors (medical units are preferred by location to surgery, neurology, pediatric floor beds due to location) according to demand based on surge capacity worksheet 2. Note additional beds created in units and halls do not have dedicated monitoring systems. Call bioelectronics for any additional spares and ask that they pull Accident & Emergency (A&E) orthopedic area monitors, crash cart monitors, and depending on needs may move portable monitors from surgery/procedure areas. May need to make request to other facilities or discontinue cardiac/invasive monitoring to decrease demand. Can also use saturation monitor for high/low rate alarm-respiratory care can assist re-allocation of saturation monitors 3. Assess situation with Planning Section Chief-as above-if internal/external transfers will not allow patients to move off cots within 6 h then: Decompression/demobilization In conjunction with incident manager prepare patient lists for transfer-focus on those that are stable or with resource needs that are difficult to meet in the current environment but do not preclude transfer. As more resources and staff become available and transfers are made to other institutions, transition critical care back to contingency and then conventional locations, restoring normal operations and care locations",
//         "Note that these represent a small portion of an overall surge capacity plan (which itself is a portion of the institutional emergency operations plan) and should be tailored to the needs of the facility maximized, including moving appropriate patients to step-down care from ICU (facilitated by having preexisting 'bump lists'), increasing staffing through callbacks and holding staff as needed. This should be coupled with hospital-wide implementation of the same strategies of maximal bed use including 'surge discharge' that prioritize floor patients for early discharge or movement to other holding areas/hall beds per unit protocol so that adequate space can be created for ICU patient transfers [14, 15] . Discharge holding areas should be pre-identified, and processes for patient assessment and rapid discharge should be in place if patients are to move efficiently between the emergency department (ED)/accident and emergency (A&E), operating suites, ICUs and inpatient floors. For example, a lounge or waiting area may be designated as an area where patients designated for early discharge can be moved while awaiting final orders, medications and transportation in order to more quickly make these beds available for incoming patients. This is of particular utility in a 'no-notice' or sudden event. During a more prolonged event, selective admission and surgical strategies (deferring elective procedures and selective scheduling of other procedures) will be of prominent value in maintaining maximal critical care resources. b. Contingency: utilizes spaces that can provide comparable services to true ICU beds with supervising staff that have critical care skills. This would include use of pre-and post-anesthesia care units (PACU), operating suites (especially in procedure areas), procedure rooms [gastroenterology (GI), respiratory, interventional radiology], step-down units/monitored units and potentially emergency department beds (though competing priorities for use will impact incident manager decisions about which spaces to use). The overall objective is to concentrate care for the least stable and most critically ill in the conventional critical care areas and move those that are more stable or with lower resource requirements to other areas of care. Key infrastructure features include the ability to provide usual cardiac and oxygen saturation monitoring, intravenous medications and drips and mechanical ventilation [11] [12] [13] . In preparing hospitals for a crisis, locations should be prioritized in the following order: expanding existing ICUs, postanesthesia care units and emergency departments to capacity, then step-down units, large procedure suites, telemetry units and finally hospital wards [12] . Infection control personnel should create a phased plan to accommodate larger numbers of patients with highly infectious diseases as this may be different than planning for patients that do not require isolation.",
//         "Hospitals should balance ICU needs and the potential decreasing benefits of increasing ICU capacity (because of excess workload) with other hospital needs that may suffer more as services are depleted. Staff for these areas (anesthesia, surgery, critical care, emergency) should have a high degree of comfort managing the critically ill, at least on a short-term basis. Hospital incident 'worksheets' should be developed that map and prioritize care areas for use based on ability to monitor the patient rooms, proximity to existing critical care or step-down units, and institution-specific factors (for example, PACU and pre-anesthesia care first, followed by conversion of step-down unit to ICU level care, etc.) ( Table 2) . Staff and equipment considerations should be pre-planned so that critical care staff can supervise overall care for critical patients while reducing their hands-on patient care responsibilities ('increasing the altitude of supervision' to oversee a larger number of patients) [11, 12] . Ventilators are expensive and difficult to stockpile, but contingency plans at the facility and government (local, state, provincial, national) levels should provide for some additional ventilators. Planned criteria for re-distribution of equipment (use of oxygen saturation monitors restricted to those that are on ventilators or on high-flow oxygen, for example, with spot checks for others) or conservation of equipment (what medications should be given by pumps vs. those that can safely be given by gravity flow) may facilitate implementation during an event [3, 16] . Prioritization of support services (minimizing tests ordered, laboratory and radiology restricting services to essential tests and diagnostics, use of alternative diagnostics-for example, ultrasound rather than computed tomography for abdominal imaging) is also required and should be institution-wide. Restrictions on utilization of diagnostics (laboratory, radiology) should increase with demand in pre-planned phases. The phased response for H1N1 may last several weeks [1, 2] . c. Crisis: provision of 'sufficient' critical care in areas that are not designed for high-intensity care, for example, using floor beds with an oxygen saturation monitor (with high/low rate and low saturation alarms) for a patient on a ventilator and using staff that do not have significant training in critical care to provide basic care (basic nursing care, vital signs monitoring, etc.) with an even higher 'altitude' of the critical care nurses and physicians supervising these providers (e.g., critical care nursing and physician staff round on the patients at scheduled intervals to provide guidance to the primary nursing and physician staff and are available for consultation/questions). Should demand exceed resource capacity for specific equipment (e.g., ventilators, extra-corporeal membrane oxygenation equipment), with no resources expected and no transfers possible [7, 17] , triage processes should be implemented that have been pre-planned to the extent possible and are consistent with the community standard of care and any state, provincial or national guidance.",
//         "Central system considerations 1. Oxygen a. Remodeling or building projects at a hospital should consider incorporating oxygen ports (or extra ports) into patient rooms, meeting rooms, etc., to facilitate conversion to patient care areas or the accommodation of additional beds in usual areas. However, safety considerations are paramount, as these systems may not be used often and yet still require regular inspection and testing. Multi-patient regulators are available that can serve multiple patients on variable oxygen flow rates from a single wall port, and these may be useful for providing cohort care, particularly in flat-space areas such as meeting rooms, etc. Though this does not provide critical care, it can open beds up that can be used for critical care and thus is a valuable part of planning. b. Hospitals should carefully consider limitations of the oxygen supply. Even if enough ventilators or oxygen flow meters are available such that every bed in the hospital would have one, the oxygen systems for most hospitals were not designed to provide such a supply and maintain pressure within the system. Continued supply and re-supply of liquid oxygen may be another limiting factor. Hospitals should examine their oxygen delivery and storage systems for vulnerabilities. Often, there are many potential points of failure within these systems with little redundancy or recovery. It may be to the institution's advantage to duplicate liquid oxygen systems, ideally separated geographically, or at least equipped to allow an interface with a trailerbased liquid oxygen system should the primary fixed delivery system fail. 2. Suction/compressed air: suction and compressed air lines are a lower priority for incorporation into congregate care spaces (those providing low acuity non-ambulatory patient care); however, at least compressed air (and ideally suction) should be available for any spaces where mechanical ventilation is a consideration (i.e., patient rooms). Hand-held and battery-operated suction units are available and may have utility, though the availability of wall suction is far preferable because of superior performance. 3. Utilities a. Electricity: emergency generators at most hospitals do not have the capacity to power outlets in all patient rooms sufficiently for the monitors, ventilators and pumps necessary for critical care. Further, heating, air conditioning and ventilation systems (including negative flow systems) may not be included or adequately powered with emergency power circuits. Critical care staff should identify which systems and outlets are included in emergency power, which are not and what the maximum load is (just because outlets are marked for emergency use does not mean that the generators can support the electrical draw if many of these outlets are used at once). The hospital should plan with jurisdictional emergency management the types and quantities of generators necessary to effectively run the facility should primary power fail and have the necessary adaptors available to wire temporary generators into the hospital system [18] . b. Water: clean water is required for many health care activities, including large volumes for hemodialysis. Hospital planners may be unaware of the water needs for critical care activities and should work with critical care to forecast needs and identify suppliers and an operating procedure. c. Continuity of operational planning: the ability of the institution to provide critical care depends on the maintenance of the operating infrastructure. Water and utilities are separated from these because of the specific considerations above, but the availability of lighting, communications, information technology, fire suppression, heating/ventilation/air conditioning, nutrition services, laboratory, radiology and many other support and infrastructure services is not assured and critical care planners should be familiar with planning for maintaining general hospital operations during outages and other incidents [19, 20] . Functional roles and responsibilities of the internal personnel and interface agencies or sectors (these should be defined prior to the event and the specific actions to be taken listed in job action sheets or other resources that the care providers and incident management team can reference during an event) with resource acquisition (particularly for non-medical supplies such as security personnel for traffic control, etc.), coordinates the response on the jurisdictional level, and depending on the regional construct may assist with arranging patient transfers. This group assists with Emergency Medical Services and other patient transportation resources. b. Health care systems: provide mutual aid including resources and staff to disproportionately affected hospitals. Depending on regional constructs, these systems ideally have a coordinating entity that establishes priorities of response and resource assignments, coordinates patient transfers, and works with other stakeholder agencies to obtain necessary staff, resources and emergency declarations. Hospital personnel should understand how these systems work in their area and practice using them prior to an event [3, 10] .",
//         "Logistics support and requirements necessary for the effective implementation of the SOP Incident management framework, institutional mobilization (disaster) plan, pre-existing phased implementation plans for capacity expansion, materials and resources appropriate to the plans (scope determined by institutional commitment and financial resources) and mechanism for monitoring, requesting and receiving resources [22] [23] [24] are required.",
//         "Development/adaptation of facility plans should include administrative and critical care stakeholders, review and vetting with other affected department staff [Accident Facilities should establish temporary anteroom/changing area off hallway (2 h). Facilities should isolate ventilation to unit and change to 50% supply, 100% exhaust.",
//         "Step-down care may be provided in MICU prior to transfer to floor negative pressure rooms 2. Open Surgery and Procedure center as isolation stepdown/critical care isolation area in consultation with incident manager if necessary ([7 patients or more anticipated). Ventilation is already exhausted from this area; elective surgical volumes should be reduced during event. Use locker rooms as clean/infectious transition zones for PPE donning/doffing. May use operating suites for ICU level care in cooperation with anesthesia. Capacity 36 beds including 24 in waiting/recovery and 12 operating room/procedure rooms 3. PPE used by staff continuously in infectious area Crisis patient care (catastrophic event, e.g., pandemic influenza) 1. Using the standard surge capacity worksheet as a tool, determine with incident management which patient care areas to use as infectious patient cohort care depending on the current and anticipated event scope. Cohort areas to may expand and contract during the course of the event 2. Facilities should assist with construction of temporary anterooms for PPE changing adjacent to each cohort area and assure exhaust ventilation for these areas. Supply may not be able to be manipulated for large areas 3. Hospital should implement access control and staff screening/monitoring plans 4. PPE used by staff continuously in infectious/cohort area, potentially hospital-wide depending on scope of the event and transmissibility",
//         "Sample core infectious disease critical care capacity elements for 'City Hospital.' Note that this plan reflects specific adaptations for the facility and that each facility should identify a phased approach to these patients. Space concerns are only one element of an overall infectious disease response plan and guidance for specific disease management, infection control, staff screening, behavioral health, visitor and access control policies, Emergency Department screening and cohorting, and patient transport planning (use of elevators, etc.) policies all should be included in the institutional plan City Hospital SOP for critical care management of a special pathogen: this guideline applies ONLY to pathogens that are transmitted by airborne or suspected airborne routes AND have a high likelihood of transmission and severe morbidity/mortality (may include SARS, pandemic influenza, some hemorrhagic fevers). These patients require careful and comprehensive use of personal protective equipment (PPE) by staff caregivers S18 & Emergency (A&E), operating room, stepdown units, and procedure areas, laboratory and radiology services, etc.], and preparedness activities supporting the SOP (materials acquisition, planning).",
//         "The initial development of the critical care surge plan should include a draft, with discussion, revision and a feedback cycle to the facility stakeholders. Once a draft plan is complete, a tabletop exercise should test basic assumptions of the plan with revision as needed. Initial orientation and training of staff on procedures should follow, and the plans should then be tested as realistically as possible in a functional exercise. After each exercise or event, an after-action review should identify areas for improvement and corrective actions. The SOP should be redrafted as needed based on the experiences, or additional preparedness/planning activities may need to occur.",
//         "Education on these changes is conducted, and the plan exercised again. Too often hospital disaster exercises stop with the patients being processed through the ED/A&E and do not require inpatient decision-making.",
//         "Effective augmentation of critical care services at a hospital requires substantial planning prior to the event, with integration of planning efforts across multiple services at the hospital and the engagement of community and government partners. Development of a phased critical care expansion plan addressing staff, space and supplies in conjunction with hospital administration and emergency management personnel should be a priority with the ongoing 2009 H1N1 influenza pandemic.",
//         "Conflict of interest None."
//       ],
//       tags: {
//         "0": {
//           tagPerPara: {
//             "0": "Label1",
//             "1": "Label2"
//           }
//         },
//         "1": {
//           tagPerPara: {
//             "0": "Label3",
//             "1": "Label4"
//           }
//         }
//       }
//     },
//     similar: [
//       {
//         paper_id: "",
//         doi: "",
//         doc_date: "2020-04-27",
//         title: "",
//         authors: [""],
//         summary: "",
//         abstract: {
//           text: [],
//           tags: {
//             sciwing: []
//           }
//         },
//         bodyText: {
//           text: [""],
//           tags: {}
//         }
//       }
//     ]
//   }
// ];
