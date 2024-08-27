import React from "react";
import "./UploadedResources.css";
import systemSoftwareImg from "./Samples/system_software.jpg";
import softwareEngineeringImg from "./Samples/software_Engineering.jpg";
import mathFoundationImg from "./Samples/Mathamatical_Foundation.jpg";
import dataStructureImg from "./Samples/Data_Structure.jpg";
import computerNetworksImg from "./Samples/Computer_Networks.jpg";
import cProgrammingImg from "./Samples/C_Programming.jpg";
import webDesigningImg from "./Samples/Web_Desiging.jpg";
import environmentalStudiesImg from "./Samples/Environmental_Studies.jpg";

function Uploads() {
  const courses = {
    4: [
      {
        title: "System Software",
        code: "Course Code : CSA217",
        text: "Programme : BCA",
        items: ["Course Code : CSA217", "Semester : 3", "Session : 2024"],
        imgSrc: systemSoftwareImg,
      },
      {
        title: "Software Engineering",
        code: "Course Code : CSA213",
        text: "Programme : BCA",
        items: ["Course Code : CSA213", "Semester : 3", "Session : 2024"],
        imgSrc: softwareEngineeringImg,
      },
      {
        title: "Mathematical Foundation",
        code: "Course Code : MTH190A",
        text: "Programme : BCA",
        items: ["Course Code : MTH190A", "Semester : 3", "Session : 2024"],
        imgSrc: mathFoundationImg,
      },
      {
        title: "Data Structure",
        code: "Course Code : CSA209",
        text: "Programme : BCA",
        items: ["Course Code : CSA209", "Semester : 3", "Session : 2024"],
        imgSrc: dataStructureImg,
      },
      {
        title: "Computer Networks",
        code: "Course Code : CSA218",
        text: "Programme : BCA",
        items: ["Course Code : CSA218", "Semester : 3", "Session : 2024"],
        imgSrc: computerNetworksImg,
      },
      {
        title: "C Programming",
        code: "Course Code : CSA105",
        text: "Programme : BCA",
        items: ["Course Code : CSA105", "Semester : 1", "Session : 2023"],
        imgSrc: cProgrammingImg,
      },
      {
        title: "Web Designing",
        code: "Course Code : CSA106",
        text: "Programme : BCA",
        items: ["Course Code : CSA106", "Semester : 1", "Session : 2023"],
        imgSrc: webDesigningImg,
      },
      {
        title: "Environmental Studies",
        code: "Course Code : EVS100",
        text: "Programme : BCA",
        items: ["Course Code : EVS100", "Semester : 1", "Session : 2023"],
        imgSrc: environmentalStudiesImg,
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
