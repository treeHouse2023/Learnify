import React from "react";
import "./UploadedResources.css";
import systemSoftwareImg from "./Samples/system_software- ESE.jpg";
import softwareEngineeringImg from "./Samples/software_Engineering- ESE.jpg";
import mathFoundationImg from "./Samples/Mathematical_foundation_in_computer_science.jpg";
import dataStructureImg from "./Samples/Data_Structure_ESE.jpg";
import computerNetworksImg from "./Samples/Computer_Networkss.jpg";
import cProgrammingImg from "./Samples/C_Programming.jpg";
import cProgrammingImg1 from "./Samples/Principle_of_programming _and_algorithm_using_C- MSE.jpg";
import webDesigningImg1 from "./Samples/Web_Desiging- MSE.jpg";
import webDesigningImg from "./Samples/Web_Desiging- ESE.jpg";
import environmentalStudiesImg from "./Samples/Environment_Studies_ESE.jpg";
import ASPNetImg from "./Samples/ASP_Net.jpg";
import communityEngagementImg from "./Samples/Community_Engagement_course.jpg";
import computerOrientedMathImg from "./Samples/computer_Orientated Numerical_and_statistical _technique- MSE.jpg";
import computerOrientedMathImgg from "./Samples/computer_Orientated Numerical_and_statistical _techniquee- ESE.jpg";
import computerArchitectureImg from "./Samples/computer_system _architecture.jpg";
import dataWarehousingImg from "./Samples/Data_Warehousing_and _Mining.jpg";
import databaseConceptsImg from "./Samples/Database_Concepts_.jpg";
import discreteMathematicsImg from "./Samples/Discrete_mathematics.jpg";
import humanValuesImg1 from "./Samples/human_value_and_general _studies- ESE.jpg";
import humanValuesImg from "./Samples/human_value_and_general _studies- MSE.jpg";
import oopStructureImg1 from "./Samples/Object_Oriented _Programming_Structure- MSE.jpg";
import oopStructureImg from "./Samples/Object_Oriented _Programming_Structure- ESE.jpg";
import operatingSystemImg from "./Samples/Operating_system_ESE.jpg";
import programmingCSharpImg from "./Samples/Programming_in_Csharp - ESE.jpg";
import programmingPythonImg from "./Samples/Programming_Python- ESE.jpg";
import computerGraphicsImg1 from "./Samples/Computer_Graphics- MSE.jpg";
import machineLearningImg1 from "./Samples/Machine_Learning- MSE.jpg";
import coreJavaImg1 from "./Samples/Core_Java- MSE.jpg";
import machineLearningImg from "./Samples/Machine_Learning- ESE.jpg";
import computerGraphicsImg from "./Samples/Computer_Graphics- ESE.jpg";
import coreJavaImg from "./Samples/Core_Java- ESE.jpg";

function Uploads() {
  const courses = {
    4: [
      {
        title: "C Programming (MSE)",
        items: ["Course Code : CSA105", "Semester : 1", "Session : 2023"],
        imgSrc: cProgrammingImg1,
      },
      {
        title: "C Programming (ESE)",
        items: ["Course Code : CSA105", "Semester : 1", "Session : 2023"],
        imgSrc: cProgrammingImg,
      },
      {
        title: "Web Designing (MSE)",
        items: ["Course Code : CSA106", "Semester : 1", "Session : 2023"],
        imgSrc: webDesigningImg1,
      },
      {
        title: "Web Designing (ESE)",
        items: ["Course Code : CSA106", "Semester : 1", "Session : 2023"],
        imgSrc: webDesigningImg,
      },
      {
        title: "Environmental Studies (ESE)",
        items: ["Course Code : EVS100", "Semester : 1", "Session : 2023"],
        imgSrc: environmentalStudiesImg,
      },
      {
        title: "Human Values and General Studies (ESE)",
        items: ["Course Code : SGS107", "Semester : 2", "Session : 2023"],
        imgSrc: humanValuesImg1,
      },
      {
        title: "Human Values and General Studies (MSE)",
        items: ["Course Code : SGS107", "Semester : 2", "Session : 2023"],
        imgSrc: humanValuesImg,
      },
      {
        title: "System Software (ESE)",
        items: ["Course Code : CSA217", "Semester : 3", "Session : 2024"],
        imgSrc: systemSoftwareImg,
      },
      {
        title: "Software Engineering (ESE)",
        items: ["Course Code : CSA213", "Semester : 3", "Session : 2024"],
        imgSrc: softwareEngineeringImg,
      },
      {
        title: "Mathematical Foundation (ESE)",
        items: ["Course Code : MTH190A", "Semester : 3", "Session : 2024"],
        imgSrc: mathFoundationImg,
      },
      {
        title: "Data Structure (ESE)",
        items: ["Course Code : CSA209", "Semester : 3", "Session : 2024"],
        imgSrc: dataStructureImg,
      },
      {
        title: "Computer Networks (ESE)",
        items: ["Course Code : CSA218", "Semester : 3", "Session : 2024"],
        imgSrc: computerNetworksImg,
      },
      {
        title: "Computer Oriented Numerical and Statistical Technique (MSE)",
        items: ["Course Code : CSA201", "Semester : 3", "Session : 2023"],
        imgSrc: computerOrientedMathImg,
      },
      {
        title: "Computer Oriented Numerical and Statistical Technique (ESE)",
        items: ["Course Code : CSA201", "Semester : 3", "Session : 2023"],
        imgSrc: computerOrientedMathImgg,
      },
      {
        title: "Database Concepts (MSE)",
        items: ["Course Code : CSA203", "Semester : 3", "Session : 2024"],
        imgSrc: databaseConceptsImg,
      },
      {
        title: "Community Engagement (ESE)",
        items: ["Course Code : CEC101", "Semester : 4", "Session : 2024"],
        imgSrc: communityEngagementImg,
      },
      {
        title: "Computer System Architecture (ESE)",
        items: ["Course Code : CSA204", "Semester : 4", "Session : 2024"],
        imgSrc: computerArchitectureImg,
      },
      {
        title: "Object Oriented Programming Structure (MSE)",
        items: ["Course Code : CSA202", "Semester : 4", "Session : 2024"],
        imgSrc: oopStructureImg1,
      },
      {
        title: "Object Oriented Programming Structure (ESE)",
        items: ["Course Code : CSA202", "Semester : 4", "Session : 2024"],
        imgSrc: oopStructureImg,
      },
      {
        title: "Operating System (ESE)",
        items: ["Course Code : CSA303", "Semester : 4", "Session : 2024"],
        imgSrc: operatingSystemImg,
      },
      {
        title: "Programming in C# (ESE)",
        items: ["Course Code : CSA210", "Semester : 4", "Session : 2024"],
        imgSrc: programmingCSharpImg,
      },

      {
        title: "ASP.Net (ESE)",
        items: ["Course Code : CSA317", "Semester : 5", "Session : 2024"],
        imgSrc: ASPNetImg,
      },
      {
        title: "Data Warehousing and Mining (ESE)",
        items: ["Course Code : CSA314", "Semester : 5", "Session : 2024"],
        imgSrc: dataWarehousingImg,
      },
      {
        title: "Discrete Mathematics (ESE)",
        items: ["Course Code : CSA316", "Semester : 5", "Session : 2024"],
        imgSrc: discreteMathematicsImg,
      },
      {
        title: "Programming in Python (ESE)",
        items: ["Course Code : CSA315", "Semester : 5", "Session : 2024"],
        imgSrc: programmingPythonImg,
      },
      {
        title: "Computer Graphics and Multimedia (ESE)",
        items: ["Course Code : CSA309", "Semester : 6", "Session : 2024"],
        imgSrc: computerGraphicsImg,
      },
      {
        title: "Computer Graphics and Multimedia (MSE)",
        items: ["Course Code : CSA309", "Semester : 6", "Session : 2024"],
        imgSrc: computerGraphicsImg1,
      },
      {
        title: "Machine Learning (ESE)",
        items: ["Course Code : CSA323", "Semester : 6", "Session : 2024"],
        imgSrc: machineLearningImg,
      },
      {
        title: "Machine Learning (MSE)",
        items: ["Course Code : CSA323", "Semester : 6", "Session : 2024"],
        imgSrc: machineLearningImg1,
      },
      {
        title: "Core Java (ESE)",
        items: ["Course Code : CSA302", "Semester : 6", "Session : 2024"],
        imgSrc: coreJavaImg,
      },
      {
        title: "Core Java (MSE)",
        items: ["Course Code : CSA302", "Semester : 6", "Session : 2024"],
        imgSrc: coreJavaImg1,
      },
    ],
  };

  const handleDownload = (imgSrc) => {
    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="guidelines-hero">
      <h1 className="display-4 mb-4">Uploaded Question Papers</h1>
      {courses[4].map((card, index) => (
        <div className="card" style={{ margin: "10px" }} key={index}>
          <img src={card.imgSrc} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
          </div>
          <ul className="list-group list-group-flush">
            {card.items.map((item, i) => (
              <li className="list-group-item" key={i}>
                {item}
              </li>
            ))}
          </ul>
          <div className="card-body">
            <button
              className="card-link btn btn-link"
              onClick={() => handleDownload(card.imgSrc)}
            >
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Uploads;
