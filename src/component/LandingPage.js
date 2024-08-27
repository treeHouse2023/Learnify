import React, { forwardRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

const subjects = {
  BCA: {
    1: [
      { code: "CSA103", title: "Principles of Digital Electronics" },
      { code: "CSA104", title: "Office Automation Laboratory" },
      { code: "CSA110", title: "Computer Fundamentals and Office Automation" },
      { code: "CSA111", title: "Algorithm and Programming Logic Design" },
      { code: "CSA112", title: "Workshop on Photoshop and Corel Draw" },
      { code: "ENG151B", title: "Communication Skills" },
      { code: "ENG152A", title: "Communication Skills Lab" },
      { code: "MGT101", title: "Principles & Practices of Management" },
      { code: "MGT151A", title: "Fundamentals of Management" },
      { code: "MGT155", title: "Fundamentals of Accounting and Finance" },
    ],
    2: [
      {
        code: "CSA105",
        title: "Principles of Programming and Algorithms using C",
      },
      { code: "CSA106", title: "Web Designing" },
      { code: "MTH190A", title: "Mathematical Foundation of Computer Science" },
      { code: "EVS100", title: "Environmental Studies" },
      { code: "SGS107", title: "Human Values and General Studies" },
      { code: "CSA108", title: "C Programming Laboratory" },
      { code: "CSA109", title: "Web Designing Laboratory" },
    ],
    3: [
      {
        code: "CSA201",
        title: "Computer Oriented Numerical and Statistical Techniques",
      },
      { code: "CSA202", title: "Object Oriented Programming Structures" },
      { code: "CSA203", title: "Database Concepts" },
      { code: "CSA204", title: "Computer System Architecture" },
      { code: "CSA211", title: "Information Systems" },
      { code: "CSA207", title: "Database Concepts Laboratory" },
      {
        code: "CSA208",
        title: "Object Oriented Programming Structures Laboratory",
      },
      { code: "CSA221", title: "Workshop on E-Marketing" },
    ],
    4: [
      { code: "CSA209", title: "Data Structures" },
      { code: "CSA213", title: "Software Engineering" },
      { code: "CSA210", title: "Programming in C#" },
      { code: "CSA217", title: "System Software" },
      { code: "CSA218", title: "Computer Networks" },
      { code: "CSA216", title: "Programming in C# Laboratory" },
      { code: "CSA219", title: "Data Structures Laboratory" },
      { code: "CSA220", title: "Computer Networks Laboratory" },
    ],
    5: [
      { code: "CSA303", title: "Operating Systems" },
      { code: "CSA315", title: "Programming in Python" },
      { code: "CSA316", title: "Discrete Mathematics" },
      { code: "CSA317", title: "Web Engineering using ASP.NET" },
      { code: "CSA312", title: "Web Engineering using ASP.NET Laboratory" },
      { code: "CSA318", title: "Programming in Python Laboratory" },
      { code: "CSA319", title: "Workshop on App Development" },
      { code: "CSA314", title: "Data Warehousing and Mining" },
      { code: "CSA320", title: "Basics of Artificial Intelligence" },
      { code: "CSA321", title: "Introduction to Internet of Things" },
    ],
    6: [
      { code: "CSA302", title: "Core JAVA" },
      { code: "CSA309", title: "Computer Graphics and Multimedia" },
      { code: "CSA308", title: "Core JAVA Laboratory" },
      { code: "CSA311", title: "Computer Graphics Laboratory" },
      { code: "CSA313", title: "Major Project" },
      { code: "CSA321", title: "Digital Image Processing" },
      { code: "CSA322", title: "Machine Learning" },
      { code: "CSA323", title: "Cloud Computing" },
    ],
  },

  MCA: {
    1: [
      { code: "CSA517", title: "Discrete Mathematical Structures" },
      { code: "CSA518", title: "Advanced Database Management System" },
      { code: "CSA519", title: "Data Structures and File Processing" },
      { code: "CSA520", title: "Software Testing and Quality Assurance" },
      { code: "CSA521", title: "Python Programming" },
      {
        code: "CSA522",
        title: "Advanced Database Management Systems Laboratory",
      },
      {
        code: "CSA523",
        title: "Data Structures and File Processing Laboratory",
      },
      { code: "CSA524", title: "Python Programming Laboratory" },
    ],
    2: [
      { code: "CSA525", title: "Advanced JAVA & Network Programming" },
      { code: "CSA526", title: "Linux and Shell Programming" },
      { code: "CSA527", title: "Advanced Web Technology" },
      { code: "CSA577", title: "Design and Analysis of Algorithms" },
      { code: "CSA578", title: "Computer Based Optimization Techniques" },
      {
        code: "CSA528",
        title: "Advanced JAVA & Network Programming Laboratory",
      },
      { code: "CSA529", title: "Advanced Web Technology Laboratory" },
      { code: "CSA530", title: "Linux and Shell Programming Laboratory" },
    ],
    3: [
      { code: "CSA612", title: "Theory of Computer Science" },
      { code: "CSA628", title: "Computer Networks and Data Communication" },
      { code: "CSA629", title: "Advances in Operating System" },
      { code: "CSA676", title: "Artificial Intelligence" },
      { code: "CSAXXX", title: "Discipline Elective I" },
      {
        code: "CSA630",
        title: "Computer Networks and Data Communication Laboratory",
      },
      { code: "ENG551", title: "Technical Writing and Communications Skills" },
      { code: "CSA631", title: "Summer Training Seminar" },
      { code: "CEC101", title: "Community Engagement Course (Part 1)" },
      { code: "CEC102", title: "Community Engagement Course (Part 2)" },
    ],
    4: [
      { code: "CSAXXX", title: "Discipline Elective I" },
      { code: "CSAXXX", title: "Discipline Elective II" },
      { code: "CSAXXX", title: "Discipline Elective III" },
      { code: "CSAXXX", title: "Discipline Elective IV" },
      { code: "CSA689", title: "Major Project" },
    ],
  },

  MSc_CS: {
    1: [
      { code: "CSA517", title: "Discrete Mathematical Structures" },
      { code: "CSA518", title: "Advanced Database Management System" },
      { code: "CSA519", title: "Data Structures and File Processing" },
      { code: "CSA520", title: "Software Testing and Quality Assurance" },
      { code: "CSA521", title: "Python Programming" },
      {
        code: "CSA522",
        title: "Advanced Database Management Systems Laboratory",
      },
      {
        code: "CSA523",
        title: "Data Structures and File Processing Laboratory",
      },
      { code: "CSA524", title: "Python Programming Laboratory" },
    ],
    2: [
      { code: "CSA510", title: "Computer Networks and Data Communication" },
      { code: "CSA577", title: "Design and Analysis of Algorithms" },
      { code: "CSA578", title: "Computer Based Optimization Techniques" },
      { code: "CSA579", title: "Interactive Computer Graphics" },
      { code: "CSA580", title: "Theory of Computer Science" },
      {
        code: "CSA516",
        title: "Computer Networks and Data Communication Laboratory",
      },
      { code: "CSA581", title: "Design and Analysis of Algorithms Laboratory" },
      { code: "CSA582", title: "Interactive Computer Graphics Laboratory" },
    ],
    3: [
      { code: "CSAXXX", title: "Discipline Elective-I" },
      { code: "CSA623", title: ".NET Framework and C#" },
      { code: "CSA627", title: "Research Methodology" },
      { code: "CSA629", title: "Advances in Operating System" },
      { code: "CSA676", title: "Artificial Intelligence" },
      { code: "CSA624", title: ".NET Framework and C# Laboratory" },
      {
        code: "CSA679",
        title: "Artificial Intelligence (LISP and PROLOG) Laboratory",
      },
      { code: "CEC101", title: "Community Engagement Course (Part 1)" },
      { code: "CEC102", title: "Community Engagement Course (Part 2)" },
    ],
    4: [
      { code: "CSAXXX", title: "Discipline Elective-I" },
      { code: "CSAXXX", title: "Discipline Elective-II" },
      { code: "CSAXXX", title: "Discipline Elective-III" },
      { code: "CSAXXX", title: "Discipline Elective-IV" },
      { code: "CSA689", title: "Major Project" },
    ],
  },

  BSc: {
    1: [
      {
        code: "CSA171",
        title: "Computer Fundamentals and Programming using C",
      },
      {
        code: "MTH121A",
        title: "Calculus",
      },
      {
        code: "MTH123A",
        title: "Algebra",
      },
      {
        code: "PHY101B",
        title: "Mechanics",
      },
      {
        code: "PHY104A",
        title: "Physics Laboratory-I",
      },
      {
        code: "ENG151B",
        title: "Communication Skills",
      },
      {
        code: "ENG152A",
        title: "Communication Skills Lab",
      },
      {
        code: "CSA172",
        title: "Computer Fundamentals and Programming using C Laboratory",
      },
    ],

    2: [
      {
        code: "CSA106",
        title: "Web Designing",
      },
      {
        code: "CSA109",
        title: "Web Designing Laboratory",
      },
      {
        code: "MTH127",
        title: "Theory of Equations",
      },
      {
        code: "MTH128",
        title: "Differential Equations",
      },
      {
        code: "PHY111B",
        title: "Vibrations and Waves",
      },
      {
        code: "PHY132",
        title: "Waves and Analog Electronics Laboratory",
      },
      {
        code: "EVS100",
        title: "Environmental Studies",
      },
      {
        code: "SGS107",
        title: "Human Values and General Studies",
      },
    ],

    3: [
      {
        code: "CSA203",
        title: "Database Concepts",
      },
      {
        code: "CSA204",
        title: "Computer System Architecture",
      },
      {
        code: "MTH229",
        title: "Real Analysis",
      },
      {
        code: "MTH231",
        title: "Partial Differential Equations",
      },
      {
        code: "PHY221A",
        title: "Digital Systems and Application",
      },
      {
        code: "PHY224",
        title: "Digital Electronics Laboratory",
      },
      {
        code: "CSA207",
        title: "Database Concepts Laboratory",
      },
    ],

    4: [
      {
        code: "CSA213",
        title: "Software Engineering",
      },
      {
        code: "CSA218",
        title: "Computer Networks",
      },
      {
        code: "MTH225A",
        title: "Numerical Methods",
      },
      {
        code: "MTH234",
        title: "Analytical Geometry",
      },
      {
        code: "PHY231A",
        title: "Optics",
      },
      {
        code: "PHY234",
        title: "Thermal and Statistical Physics",
      },
      {
        code: "PHY235",
        title: "Thermal and Statistical Physics Laboratory",
      },
      {
        code: "MTH226",
        title: "Numerical Methods Laboratory",
      },
    ],

    5: [
      {
        code: "CSA303",
        title: "Operating Systems",
      },
      {
        code: "DSE-I",
        title: "Discipline Specific Elective-I",
      },
      {
        code: "DSE-II",
        title: "Discipline Specific Elective-II",
      },
      {
        code: "MTH324",
        title: "Number Theory",
      },
      {
        code: "PHY303C",
        title: "Solid State Physics",
      },
      {
        code: "PHY322",
        title: "Quantum Physics",
      },
      {
        code: "PHY323",
        title: "Quantum and Solid State Laboratory",
      },
    ],

    6: [
      {
        code: "CSA302",
        title: "Design and Analysis of Algorithms",
      },
      {
        code: "CSA304",
        title: "Artificial Intelligence",
      },
      {
        code: "CSA305",
        title: "Computer Graphics",
      },
      {
        code: "DSE-III",
        title: "Discipline Specific Elective-III",
      },
      {
        code: "DSE-IV",
        title: "Discipline Specific Elective-IV",
      },
      {
        code: "CSA307",
        title: "Project Work",
      },
      {
        code: "CSA308",
        title: "Major Project",
      },
    ],
  },

  PGDCA: {
    1: [
      {
        code: "CSA501P",
        title: "Fundamentals of Information Technology",
      },
      { code: "CSA502P", title: "Programming in C", L: 4, T: 0, P: 0, Cr: 4 },
      {
        code: "CSA503P",
        title: "Database Management System",
      },
      {
        code: "CSA504P",
        title: "Computer Organization and Architecture",
      },
      {
        code: "CSA505P",
        title: "Information Systems",
      },
      {
        code: "CSA506P",
        title: "Programming in C Laboratory",
      },
      {
        code: "CSA507P",
        title: "Database Management System Laboratory",
      },
    ],

    2: [
      {
        code: "CSA508P",
        title: "Computer Network and Internet Applications",
      },
      { code: "CSA509P", title: "Operating System" },
      { code: "CSA510P", title: "Core JAVA" },
      { code: "CSA511P", title: "Web Designing" },
      {
        code: "CSA512P",
        title: "Software Engineering",
      },
      {
        code: "CSA513P",
        title: "Core JAVA Laboratory",
      },
      {
        code: "CSA514P",
        title: "Web Designing Laboratory",
      },
    ],
  },
};

const LandingPage = forwardRef((props, ref) => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleProgramChange = (event) => {
    setSelectedProgram(event.target.value);
    setSelectedYear("");
    setSelectedSubject("");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedSubject("");
  };

  return (
    <section
      className="hero d-flex align-items-center justify-content-center"
      ref={ref}
    >
      <div className="container text-center text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-section">
            <h1 className="display-3 mb-4">Find Your Question Papers</h1>
            <p className="lead mb-4">
              Find and share educational resources easily.
            </p>

            {/* Search Form */}
            <form action="#" className="mb-4">
              <div className="form-row justify-content-center">
                <div className="col-auto">
                  <select
                    className="form-control form-control-lg"
                    value={selectedProgram}
                    onChange={handleProgramChange}
                  >
                    <option value="">Select Program</option>
                    <option value="BCA">BCA</option>
                    <option value="MSc_CS">MSc_CS</option>
                    <option value="BSc">BSc</option>
                    <option value="PGDCA">PGDCA</option>
                    <option value="MCA">MCA</option>
                  </select>
                </div>
                <div className="col-auto">
                  <select
                    className="form-control form-control-lg"
                    value={selectedYear}
                    onChange={handleYearChange}
                    disabled={!selectedProgram}
                  >
                    <option value="">Select Sem.</option>
                    <option value="1">First Sem.</option>
                    <option value="2">Second Sem.</option>
                    <option value="3">Third Sem.</option>
                    <option value="4">Fourth Sem.</option>
                    <option value="5">Fifth Sem.</option>
                    <option value="6">Sixth Sem.</option>
                  </select>
                </div>
                <div className="col-auto">
                  <select
                    className="form-control form-control-lg"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    disabled={!selectedYear}
                  >
                    <option value="">Select Subject</option>
                    {selectedProgram &&
                      selectedYear &&
                      subjects[selectedProgram]?.[selectedYear]?.map(
                        (subject, index) => (
                          <option key={index} value={subject.code}>
                            {subject.title}
                          </option>
                        )
                      )}
                  </select>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="fas fa-search"></i> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default LandingPage;
