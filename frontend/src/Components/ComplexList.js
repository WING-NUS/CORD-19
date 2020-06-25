import React, { useState, useEffect } from "react";
import axios from "axios";

// const list = [
//   {
//     id: "1",
//     Title:
//       "SARS-CoV-2 RNA detection of hospital isolation ward hyglene monitoring \
//     during the Coronavirus Disease 2019 outbreak in a Chinese hosputal",
//     Authors: "Jie Wang, Haiting Feng, Sheng Zhang",
//     Abstract: {
//       text:
//         "The aim of this paper was to monitor the presence of SARS-Cov-2 among hospital\
//       environment surfaces, sewage, and personal protective equipment (PPE) of staffs in \
//       isolation wards in the First Affiliated Hospital of Zhejiang University, China.\
//       Surfaces of objects were routinely wiped with 1000 mg/L chlorine containing disinfectant.\
//       Air and sewage disinfection was proceeded routinely and strictly. Hospital environmental \
//       surfaces and PPE of staffs in isolation wards were sampled using swabs. The sewage from various\
//       inlet and outlets were sampled. The respiratory and stool specimens of patients were collected.\
//       The respiratory specimens of staffs in the isolation wards were also sampled once a week. \
//       Quantitative real-time reverse transcription PCR (qRT-PCR) methods were used to confirm the existence\
//       Of SARS-Cov-2 RNA. Viral culture was done for the samples positive for SARS-Cov-2 RNA.\
//       During the study period, 33 laboratory-confirmed patients were hospitalized in isolation wards in the\
//       hospital. None of SARS-Cov-2 RNA was detected among the 36 objects surface samples and 9 staffs PPE \
//       samples in isolation wards. Though the 3 sewage samples from the inlet of preprocessing disinfection \
//       pool were positive for SARS-CoV-2 RNA and the sample from the outlet of preprocessing disinfection\
//       pool was weakly positive, the sewage sample from the outlet of the last disinfection pool was negative\
//       All of the 5 sewage samples from various points were negative by viral culture of SARS-Cov-2. None of \
//       the respiratory specimens of staffs in the isolation wards were positive.Though SARS-Cov-2 RNA of the\
//       sewage samples were positive from inlets of the sewage disinfection pool and negative from the outlet \
//       of the last sewage disinfection pool, no viable virus was detected by culture. The monitoring data in\
//       this study suggested that the strict disinfection and hand hygiene could decrease the hospital-associated \
//       COVID-19 infection risk of the staffs in isolation wards",
//       Background: "",
//       Purpose:
//         "The aim of this paper was to monitor the presence of SARS-Cov-2 among hospital environment surfaces,\
//       sewage, and personal protective equipment (PPE) of staffs in isolation wards in the First Affiliated Hospital\
//       of Zhejiang University, China.",
//       Methodology:
//         "Surfaces of objects were routinely wiped with 1000 mg/L chlorine containing disinfectant. Air and\
//       sewage disinfection was proceeded routinely and strictly. Hospital environmental surfaces and PPE of staffs in \
//       isolation wards were sampled using swabs. The sewage from various inlet and outlets were sampled. The respiratory\
//       and stool specimens of patients were collected. The respiratory specimens of staffs in the isolation wards were\
//       also sampled once a week. Quantitative real-time reverse transcription PCR (qRT-PCR) methods were used to confirm\
//       the existence of SARS-Cov-2 RNA. Viral culture was done for the samples positive for SARS-Cov-2 RNA.",
//       Findings:
//         "During the study period, 33 laboratory-confirmed patients were hospitalized in isolation wards\
//       in the hospital. None of SARS-Cov-2 RNA was detected among the 36 objects surface samples and 9 staffs \
//       PPE samples in isolation wards. Though the 3 sewage samples from the inlet of preprocessing disinfection\
//       pool were positive for SARS-CoV-2 RNA and the sample from the outlet of preprocessing disinfection pool \
//       was weakly positive, the sewage sample from the outlet of the last disinfection pool was negative. All of \
//       the 5 sewage samples from various points were negative by viral culture of SARS-Cov-2. None of the respiratory\
//       specimens of staffs in the isolation wards were positive."
//     }
//   },
//   {
//     id: "2",
//     Title:
//       " the second one : SARS-CoV-2 RNA detection of hospital isolation ward hyglene monitoring \
//     during the Coronavirus Disease 2019 outbreak in a Chinese hosputal",
//     Authors: "Jie Wang, Haiting Feng, Sheng Zhang",
//     Abstract: {
//       text:
//         "The aim of this paper was to monitor the presence of SARS-Cov-2 among hospital\
//       environment surfaces, sewage, and personal protective equipment (PPE) of staffs in \
//       isolation wards in the First Affiliated Hospital of Zhejiang University, China.\
//       Surfaces of objects were routinely wiped with 1000 mg/L chlorine containing disinfectant.\
//       Air and sewage disinfection was proceeded routinely and strictly. Hospital environmental \
//       surfaces and PPE of staffs in isolation wards were sampled using swabs. The sewage from various\
//       inlet and outlets were sampled. The respiratory and stool specimens of patients were collected.\
//       The respiratory specimens of staffs in the isolation wards were also sampled once a week. \
//       Quantitative real-time reverse transcription PCR (qRT-PCR) methods were used to confirm the existence\
//       Of SARS-Cov-2 RNA. Viral culture was done for the samples positive for SARS-Cov-2 RNA.\
//       During the study period, 33 laboratory-confirmed patients were hospitalized in isolation wards in the\
//       hospital. None of SARS-Cov-2 RNA was detected among the 36 objects surface samples and 9 staffs PPE \
//       samples in isolation wards. Though the 3 sewage samples from the inlet of preprocessing disinfection \
//       pool were positive for SARS-CoV-2 RNA and the sample from the outlet of preprocessing disinfection\
//       pool was weakly positive, the sewage sample from the outlet of the last disinfection pool was negative\
//       All of the 5 sewage samples from various points were negative by viral culture of SARS-Cov-2. None of \
//       the respiratory specimens of staffs in the isolation wards were positive.Though SARS-Cov-2 RNA of the\
//       sewage samples were positive from inlets of the sewage disinfection pool and negative from the outlet \
//       of the last sewage disinfection pool, no viable virus was detected by culture. The monitoring data in\
//       this study suggested that the strict disinfection and hand hygiene could decrease the hospital-associated \
//       COVID-19 infection risk of the staffs in isolation wards",
//       Background: "",
//       Purpose:
//         "The aim of this paper was to monitor the presence of SARS-Cov-2 among hospital environment surfaces,\
//       sewage, and personal protective equipment (PPE) of staffs in isolation wards in the First Affiliated Hospital\
//       of Zhejiang University, China.",
//       Methodology:
//         "Surfaces of objects were routinely wiped with 1000 mg/L chlorine containing disinfectant. Air and\
//       sewage disinfection was proceeded routinely and strictly. Hospital environmental surfaces and PPE of staffs in \
//       isolation wards were sampled using swabs. The sewage from various inlet and outlets were sampled. The respiratory\
//       and stool specimens of patients were collected. The respiratory specimens of staffs in the isolation wards were\
//       also sampled once a week. Quantitative real-time reverse transcription PCR (qRT-PCR) methods were used to confirm\
//       the existence of SARS-Cov-2 RNA. Viral culture was done for the samples positive for SARS-Cov-2 RNA.",
//       Findings:
//         "During the study period, 33 laboratory-confirmed patients were hospitalized in isolation wards\
//       in the hospital. None of SARS-Cov-2 RNA was detected among the 36 objects surface samples and 9 staffs \
//       PPE samples in isolation wards. Though the 3 sewage samples from the inlet of preprocessing disinfection\
//       pool were positive for SARS-CoV-2 RNA and the sample from the outlet of preprocessing disinfection pool \
//       was weakly positive, the sewage sample from the outlet of the last disinfection pool was negative. All of \
//       the 5 sewage samples from various points were negative by viral culture of SARS-Cov-2. None of the respiratory\
//       specimens of staffs in the isolation wards were positive."
//     }
//   }
// ];

const ComplexList = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const response = await axios.get(
      // 'http://localhost:8000/display'
      `https://code-buffalo-api.herokuapp.com/quizzes`
      //`${process.env.REACT_APP_BASE_URL}/display`
    );
    setArticles(response.data);
  };

  useEffect(() => {
    getArticles();
  }, []);
  debugger;
  return (
    <ul className="App-articles">
      {JSON.stringify(articles)}
      {/* {articles.map(item => (
        <li key={item.paper_id}>
          <div>{item.paper_id}</div>
          <div>{item.title}</div>
          <div>{item.author}</div>
          <div>{item.abstract}</div>
          <div>{item.body_text}</div>
        </li>
      ))} */}
    </ul>
  );
};

export default ComplexList;
