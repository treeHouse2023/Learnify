import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./UploadedResources.css";

import Algorithm_design_and_analysis_MSE_2022_Surbhi from "./Samples/Algorithm design and analysis_MSE_2022_Surbhi.jpg";
import algorithm_design_and_programming_C_ESE_2024_samipta from "./Samples/algorithm design and programming C_ESE_2024_samipta.jpg";
import algorithm_design_and_programming_using_C_BCA_SHUBHA_ESE_2024 from "./Samples/algorithm design and programming using C_BCA_SHUBHA_ESE_2024.jpg";
import algorithm_design_and_programming_using_C_BCA_SHUBHA_MSE_2023 from "./Samples/algorithm design and programming using C_BCA_SHUBHA_MSE_2023.jpg";
import algorithm_design_in_programming_using_C_MSE_2024_samipta from "./Samples/algorithm design in programming using C_MSE_2024_samipta.jpg";
import algorithm_Mani_programming_logic_design_BCA_SHUBHA_MSE_2022 from "./Samples/algorithm Mani programming logic design_BCA_SHUBHA_MSE_2022.jpg";
import algorithm_programing_and_logic_design_BCA_SHUBHA_ESE_2022 from "./Samples/algorithm programing and logic design_BCA_SHUBHA_ESE_2022.jpg";
import artificial_intelligence_ESE_2023_Surbhi from "./Samples/artificial intelligence_ESE_2023_Surbhi.png";
import artificial_intelligence_MSE_2023_Surbhi from "./Samples/artificial intelligence_MSE_2023_Surbhi.jpg";
import ASP_Net from "./Samples/ASP_Net.jpg";
import basic_communication_skill_BCA_SHUBHA_MSE_2022_4 from "./Samples/basic communication skill_BCA_SHUBHA_MSE_2022 _4.jpg";
import basic_communication_skills_BCA_SHUBHA_ESE_2022 from "./Samples/basic communication skills_BCA_SHUBHA_ESE_2022.jpg";
import business_management_for_beginners_BCA_SHUBHA_ESE_2022_4 from "./Samples/business management for beginners_BCA_SHUBHA_ESE_2022 _4.jpg";
import business_management_for_beginners_BCA_SHUBHA_MSE_2023 from "./Samples/business management for beginners_BCA_SHUBHA_MSE_2023.jpg";
import business_management_for_beginners_ESE_2024_samipta from "./Samples/business management for beginners_ESE_2024_samipta.jpg";
import business_management_for_beginners_MSE_2024_samipta from "./Samples/business management for beginners_MSE_2024_samipta.jpg";
import C_Programming from "./Samples/C_Programming.jpg";
import Cambridge_English_I_BCA_SHUBHA_ESE_2024 from "./Samples/Cambridge English I_BCA_SHUBHA_ESE_2024.jpg";
import Cambridge_English_I_ESE_2024_samipta from "./Samples/Cambridge English I_ESE_2024_samipta.jpg";
import Community_Engagement_course from "./Samples/Community_Engagement_course.jpg";
import computer_architecture_and_its_organisation_ESE_2021_Surbhi from "./Samples/computer architecture and its organisation _ESE_2021_Surbhi.jpg";
import computer_fundamental_and_automation_BCA_SHUBHA_MSE_2022_4 from "./Samples/computer fundamental and automation_BCA_SHUBHA_MSE_2022 _4.jpg";
import computer_fundamental_and_office_automation_ESE_2024_samipta from "./Samples/computer fundamental and office automation_ESE_2024_samipta.jpg";
import computer_fundamental_and_office_automation_MSE_2024_samipta from "./Samples/computer fundamental and office automation_MSE_2024_samipta.jpg";
import computer_fundamental_of_automation_and_office_automation_BCA_SHUBHA_MSE_2023 from "./Samples/computer fundamental of automation and office automation_BCA_SHUBHA_MSE_2023.jpg";
import computer_fundamentals_and_office_automation_BCA_SHUBHA_ESE_2024 from "./Samples/computer fundamentals and office automation_BCA_SHUBHA_ESE_2024.jpg";
import Computer_Graphics_ESE_2022_Surbhi from "./Samples/Computer Graphics_ESE_2022_Surbhi.jpg";
import Computer_graphics_MSE_2022_Surbhi from "./Samples/Computer graphics_MSE_2022_Surbhi.jpg";
import Computer_Networks_ESE_2022_Surbhi from "./Samples/Computer Networks_ESE_2022_Surbhi.png";
import Computer_Networks_MSE_2022_Surbhi from "./Samples/Computer Networks_MSE_2022_Surbhi.jpg";
import Computer_Graphics_ESE from "./Samples/Computer_Graphics- ESE.jpg";
import Computer_Graphics_MSE from "./Samples/Computer_Graphics- MSE.jpg";
import Computer_Networkss from "./Samples/Computer_Networkss.jpg";
import computer_Orientated_Numerical_and_statistical_technique_MSE from "./Samples/computer_Orientated Numerical_and_statistical _technique- MSE.jpg";
import computer_Orientated_Numerical_and_statistical_technique_ESE from "./Samples/computer_Orientated Numerical_and_statistical _techniquee- ESE.jpg";
import computer_system_architecture from "./Samples/computer_system _architecture.jpg";
import Core_java_2024_ese_Deepeka from "./Samples/Core java_2024_ese_Deepeka.jpg";
import Core_java_2024_Mse_Deepeka from "./Samples/Core java_2024_Mse_Deepeka.jpg";
import Core_Java_ESE from "./Samples/Core_Java- ESE.jpg";
import Core_Java_MSE from "./Samples/Core_Java- MSE.jpg";
import Data_communication_MSE_2023_Surbhi from "./Samples/Data communication_MSE_2023_Surbhi.jpg";
import data_communicatoion_ESE_2022_Surbhi from "./Samples/data communicatoion_ESE_2022_Surbhi.jpg";
import DATA_MINING_ESE_2023_Surbhi from "./Samples/DATA MINING_ESE_2023_Surbhi.jpg";
import Data_mining_ESE_2024_Surbhi from "./Samples/Data mining_ESE_2024_Surbhi.png";
import Data_Mining_MSE_2023_Surbhi from "./Samples/Data Mining_MSE_2023_Surbhi.jpg";
import Data_mining_MSE_2024_Surbhi from "./Samples/Data mining_MSE_2024_Surbhi.jpg";
import data_structure_using_C_2024_ese_Deepeka from "./Samples/data structure using C_2024_ese_Deepeka.png";
import data_structure_using_c_2024_mse_Deepeka from "./Samples/data structure using c_2024_mse_Deepeka.jpg";
import data_structure_reappear_2021_Surbhi from "./Samples/data structure_reappear_2021_Surbhi.jpg";
import Data_Structure_ESE from "./Samples/Data_Structure_ESE.jpg";
import Data_Warehousing_and_Mining from "./Samples/Data_Warehousing_and _Mining.jpg";
import Database_communication_MSE_2022_Surbhi from "./Samples/Database communication_MSE_2022_Surbhi.jpg";
import Database_manage_emnt_system_ESE_2022_Surbhi from "./Samples/Database maanage emnt system_ESE_2022_Surbhi.png";
import Database_management_system_ESE_2022_surbhi from "./Samples/Database management system_ESE_2022_surbhi.jpg";
import Database_Concepts from "./Samples/Database_Concepts_.jpg";
import DesignThinkingInnovation_BCA_SHUBHA_MSE_2023 from "./Samples/design thinking an innovation_BCA_SHUBHA_MSE_2023.jpg";
import DesignThinkingInnovation_BCA_SHUBHA_ESE_2022_4 from "./Samples/Design thinking and innovation_BCA_SHUBHA_ESE_2023.jpg";
import DesignThinkingInnovation_ESE_2024_Samipta from "./Samples/design thinking and innovation_ESE_2024_samipta.jpg";
import DesignThinkingInnovation_MSE_2024_Samipta from "./Samples/design thinking and innovation_MSE_2024_samipta.jpg";
import DigitalImageProcessing_2025_MSE_Gurpreet from "./Samples/Digital_iamge_procesing_2025_MSE_gurpreet.jpg";
import DiscreteMathematics_2024_ESE_Deepeka from "./Samples/Discrete mathematics_2024_ese_Deepeka.png";
import DiscreteMathematics from "./Samples/Discrete_mathematics.jpg";
import EngineeringMathematicsIII_ESE_2022_Surbhi from "./Samples/Engnerring mathamatics III_ESE_2022_Surbhi.jpg";
import EngineeringMathematicsIII_ESE_2023_Surbhi from "./Samples/Engnerring mathamatics III_ESE_2023_Surbhi.jpg";
import EngineeringMathematicsIII_MSE_2022_Surbhi from "./Samples/Engnerring mathamatics III_MSE_2023_Surbhi.jpg";
import EngineeringMathematicsIII_MSE_2023_Surbhi from "./Samples/Engnerring mathamatics III_MSE_2022_Surbhi.jpg";
import EnvironmentStudies_ESE from "./Samples/Environment_Studies_ESE.jpg";
import EnvironmentalStudies_BCA_SHUBHA_MSE_2024 from "./Samples/environmental studies_BCA_SHUBHA_MSE_2024.jpg";
import EssentialsEntrepreneurship_BCA_SHUBHA_MSE_2022_4 from "./Samples/essentials of entrepreneurship, thinking and action_BCA_SHUBHA_MSE_2022 _4.jpg";
import FundamentalOfManagement_BCA_SHUBHA_ESE_2022 from "./Samples/fundamental of management_BCA_SHUBHA_ESE_2022.jpg";
import HumanValueEthics_BCA_SHUBHA_ESE_2022_4 from "./Samples/human value and ethics_BCA_SHUBHA_ESE_2022 _4.jpg";
import HumanValueEthics_ESE_2024_Samipta from "./Samples/human value and ethics_ESE_2024_samipta.jpg";
import HumanValuesEthics_BCA_SHUBHA_MSE_2023_4 from "./Samples/human values and ethics_BCA_SHUBHA_MSE_2023 _4.jpg";
import HumanValuesWorkEthics_MSE_2024_Samipta from "./Samples/human values and work ethics_MSE_2024_samipta.jpg";
import HumanValueGeneralStudies_ESE from "./Samples/human_value_and_general _studies- ESE.jpg";
import HumanValueGeneralStudies_MSE from "./Samples/human_value_and_general _studies- MSE.jpg";
import IntroductionToJavaProgramming_MSE_2023_Surbhi from "./Samples/Introduction to Java programming_MSE_2023_Surbhi.jpg";
import IntroductionToJavaProgramming_MSE_2024_Surbhi from "./Samples/INtroduction to java programe_MSE_2023_Surbhi.jpg";
import IntroductionToJavaProgramming_MSE_2024_Surbhi1 from "./Samples/introduction to java programing_MSE_2024_Surbhi.jpg";
import IntroductionToJavaProgramming_ESE_2023_Surbhi from "./Samples/Introduction to Java programming_ESE_2023_Surbhi.jpg";
import IntroductionToJavaProgramming_ESE_2024_Surbhi from "./Samples/Introduction to Java programming_ESE_2023_Surbhi.jpg";
import MachineLearning_ESE from "./Samples/Machine_Learning- ESE.jpg";
import MachineLearning_MSE from "./Samples/Machine_Learning- MSE.jpg";
import MathematicalFoundationCS_BCA_SHUBHA_MSE_2023_4 from "./Samples/mathematical foundation of computer science_BCA_SHUBHA_MSE_2023_4.jpg";
import MathematicalFoundationInCS from "./Samples/Mathematical_foundation_in_computer_science.jpg";
import MathematicsFoundationCS_BCA_SHUBHA_MSE_2024 from "./Samples/mathematics foundation of computer science_BCA_SHUBHA_MSE_2024.jpg";
import Mechanics1_MSE_2023_VANITA from "./Samples/mechanics 1_MSE_2023_VANITA.jpg";
import MechanicsII_2024_ESE_Deepeka from "./Samples/Mechanics II_2024_ese_Deepeka.png";
import MechanicsII_2024_MSE_Deepeka from "./Samples/Mechanics II_2024_Mse_Deepeka.png";
import MicroprocessorApplication_ESE_2022_Surbhi from "./Samples/Microprocer and its application_ESE_2022_Surbhi.jpg";
import MicroprocessorApplication_ESE_2023_Surbhi from "./Samples/Microprocesser and its application_ESE_2023Surbhi.jpg";
import MicroprocessorApplication_MSE_2023_Surbhi from "./Samples/Microprocesser and its application_MSE_2023_Surbhi.jpg";
import MicroprocessorApplication_MSE_2022_Surbhi from "./Samples/MIcroprocessio and its apppliucation_MSE_2022_Surbhi.jpg";
import NaturalLanguageProcessing_2025_MSE_Gurpreet from "./Samples/Natural_language_procesing_2025_MSE_gurpreet.jpg";
import NuclearPhysics_MSE_2022_VANITA from "./Samples/nuclear physics_MSE_2022_VANITA.jpg";
import NuclearPhysics_MSE_2024_VANITA from "./Samples/nuclear physics_MSE_2024_VANITA.jpg";
import NuclearPhysics_2024_ESE_Deepeka from "./Samples/nUCLEAR_physics_2024_ese_Deepeka.jpg";
import NumberTheory_MSE_2023_VANITA from "./Samples/number theory_MSE_2023_VANITA.jpg";
import ObjectOrientedProgrammingStructure_ESE_2021_Surbhi from "./Samples/Object oriented Programing structure_ESE_2021_Surbhi.jpg";
import ObjectOrientedProgrammingUsingCpp_BCA_SHUBHA_MSE_2024 from "./Samples/object oriented programming using C++_BCA_SHUBHA_MSE_2024.jpg";
import ObjectOrientedProgrammingStructure_ESEn from "./Samples/Object_Oriented _Programming_Structure- ESE.jpg";
import ObjectOrientedProgrammingStructure_MSEn from "./Samples/Object_Oriented _Programming_Structure- MSE.jpg";
import OperatingSystemConcept_ESE_2022_Surbhi from "./Samples/Operating system concept_ESE_2022_Surbhi.png";
import OperatingSystemConcept_ESE_2023_Surbhi from "./Samples/Operating system concept_ESE_2023Surbhi.png";
import OperatingSystemConcept_MSE_2022_Surbhi from "./Samples/OPerating system concept_MSE_2022_Surbhi.jpg";
import OperatingSystemConcept_MSE_2023_Surbhi from "./Samples/Operating system concept_MSE_2023_Surbhi.png";
import OperatingSystem_ESE from "./Samples/Operating_system_ESE.jpg";
import Optics_ESE_2024_VANITA from "./Samples/optics_ESE_2024_VANITA.jpg";
import ParticlePhysics_2024_ESE_Deepeka from "./Samples/Particle physics_2024_ese_Deepeka.jpg";
import ParticlePhysics_MSE_2024_VANITA from "./Samples/particle physics_MSE_2024_VANITA.jpg";
import Photo_15_2025_03_27_00_37_15 from "./Samples/photo_15_2025-03-27_00-37-15.jpg";
import PrincipleDigitalElectronics_ESE_2024_Samipta from "./Samples/principle of digital electronics_ESE_2024_samipta.jpg";
import PrincipleDigitalElectronics_MSE_2024_Samipta from "./Samples/principle of digital electronics_MSE_2024_samipta.jpg";
import PrincipleProgrammingAlgorithm_C_MSE from "./Samples/Principle_of_programming _and_algorithm_using_C- MSE.jpg";
import PrinciplesDigitalElectronics_BCA_SHUBHA_ESE_2022_4 from "./Samples/principles of digital electronics_BCA_SHUBHA_ESE_2022 _4.jpg";
import PrinciplesDigitalElectronics_BCA_SHUBHA_MSE_2023 from "./Samples/principles of digital electronics_BCA_SHUBHA_MSE_2023.jpg";
import PrinciplesProgrammingAlgorithms_C_BCA_SHUBHA_MSE_2022_3 from "./Samples/principles of programming and algorithms using C_BCA_SHUBHA_MSE_2022 _3.jpg";
import ProgrammingInCSharp_ESE from "./Samples/Programming_in_Csharp - ESE.jpg";
import ProgrammingPython_ESE from "./Samples/Programming_Python- ESE.jpg";
import QuantumPhysics_MSE_2023_VANITA from "./Samples/quantum physics_MSE_2023_VANITA.jpg";
import RProgramming_2025_MSE_Gurpreet from "./Samples/R_Programing_2025_MSE_gurpreet.jpg";
import RelationalDatabaseManagementSystem_ESE_2024_Surbhi from "./Samples/relational database management system_ESE_2023_Surbhi.jpg";
import RelationalDatabaseManagementSystem_ESE_2023_Surbhi from "./Samples/relational database management system_ESE_2023_Surbhi.jpg";
import RelationalDatabaseManagementSystem_MSE_2023_Surbhi from "./Samples/relational database management system_MSE_2023_Surbhi.jpg";
import RelationalDatabaseManagementSystem_MSE_2024_Surbhi from "./Samples/relational database management system_MSE_2024_Surbhi.jpg";
import SoftwareEngineering_ESE_2022_Surbhi from "./Samples/Software Engineering_ESE_2022_Surbhi.png";
import SoftwareEngineering_MSE_2022_Surbhi from "./Samples/Software Engineering_ESE_2022_Surbhi.png";
import SoftwareEngineering_ESE from "./Samples/software_Engineering- ESE.jpg";
import SolidStatePhysics_ESE_2023_VANITA from "./Samples/solid state physics_ESE_2023_VANITA.jpg";
import SolidStatePhysics_MSE_2024_VANITA from "./Samples/solid state physics_MSE_2024_VANITA.jpg";
import SystemProgramming_ESE_2022_Surbhi from "./Samples/System Programing_ESE_2022_Surbhi.jpg";
import SystemProgramming_MSE_2022_Surbhi from "./Samples/System Programing_MSE_2022_Surbhi.jpg";
import SystemProgramming_MSE_2023_Surbhi from "./Samples/system Programing_MSE_2023_Surbhi.jpg";
import SystemProgramming_ESE_2023_Surbhi from "./Samples/System programming_ESE_2023_Surbhi.png";
import SystemSimulation_ESE_2024_Surbhi from "./Samples/SYSTEM SIMULATION AND _ESE_2024_Surbhi.jpg";
import SystemSimulationModeling_MSE_2023_Surbhi from "./Samples/System Simulation Modeling_MSE_2023_Surbhi.jpg";
import SystemSimulationModeling_MSE_2024_Surbhi from "./Samples/System Simulation Modeling_MSE_2023_Surbhi.jpg";
import SystemSimulationModeling_ESE_2024_Surbhi from "./Samples/SYSTEM SIMULATION AND _ESE_2024_Surbhi.jpg";
import SystemSimulationModeling_ESE_2023_Surbhi from "./Samples/system_simulation_and _modeling_ESE_2023_Surbhi.jpg";
import SystemSoftware_ESE from "./Samples/system_software- ESE.jpg";
import TheoryOfComputation_MSE_2024_Surbhi from "./Samples/theory of computation_MSE_2023_Surbhi.jpg";
import TheoryOfComputation_ESE_2024_Surbhi from "./Samples/Theory of computation. _ESE_2024_Surbhi.png";
import TheoryOfComputation_ESE_2023_Surbhi from "./Samples/theory of computation_ESE_2023_Surbhi.jpg";
import TheoryOfComputation_MSE_2023_Surbhi from "./Samples/theory of computation_MSE_2023_Surbhi.jpg";
import ThermalStatisticalPhysics_MSE_2024_VANITA from "./Samples/thermal and statistical physics_MSE_2024_VANITA.jpg";
import ThermalStatisticalPhysics_ESE_2024_VANITA from "./Samples/thermal and statistical physics_MSE_2024_VANITA.jpg";
import WebDesigning_BCA_SHUBHA_ESE_2023 from "./Samples/web designing_BCA_SHUBHA_ESE_2023.jpg";
import WebDesigning_BCA_SHUBHA_MSE_2022_3 from "./Samples/web designing_BCA_SHUBHA_MSE_2022 _3.jpg";
import WebDesigning_ESE from "./Samples/Web_Desiging- ESE.jpg";
import WebDesigning_MSE from "./Samples/Web_Desiging- MSE.jpg";
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
import BUSINESS_ENVIRONMENT_AND_INDIAN_ETHOS_ESE_2025 from "./Samples/BUSINESS ENVIRONMENT AND INDIAN ETHOS_ESE_2025.png";
import Management_Process_and_OrganisationalBehaviour_ESE_2025 from "./Samples/Management Process and OrganisationalBehaviour_ESE_2025.png";
import Managerial_Economics_ESE_2025 from "./Samples/Managerial Economics_ESE_2025.jpg";
import Quantitative_Methods_ESE_2025 from "./Samples/Quantitative Methods_ESE_2025.png";
import Accounting_for_Decision_Making_ESE_2025 from "./Samples/Accounting for Decision Making_ESE_2025.png";
import Python_Programming_ESE_2025 from "./Samples/Python Programming_ESE_2025.jpg";
import Software_Engineering_and_Testing_2025_ESE from "./Samples/Software Engineering and Testing_2025_ese.jpg";
import MBA_MSE_Sem_1_page_0007 from "./Samples/MBA MSE Sem 1_page-0007.jpg";
import Quantitative_Methods_2023_MSE from "./Samples/Quantitative Methods_2023_MSE.jpg";
import Managerial_Economics_Business_Economics_2023_MSE from "./Samples/Managerial Economics Business Economics_2023_MSE.jpg";
import Management_Processes_and_Organisational_Behaviour_MSE_2023 from "./Samples/Management Processes & Organisational Behaviour_mse_2023.jpg";
import Business_Environment_and_Indian_Ethos_MSE_2023 from "./Samples/Business Environment and Indian Ethos_MSE_2023.JPG";
import Business_Environment_and_Indian_Ethos_ESE_2023 from "./Samples/Business Environment and Indian Ethos_ese_2023.jpg";
import BUSINESS_ENVIRONMENT_AND_INDIAN_ETHOS_ESE_2024 from "./Samples/BUSINESS ENVIRONMENT AND INDIAN ETHOS_ese_2024.jpg";
import Management_Process_and_Organisational_Behaviour_ESE_2024 from "./Samples/Management Process and Organisational Behaviour_ese_2024.jpg";
import Corporate_Law_and_Governance_ESE_2023 from "./Samples/Corporate Law and Governance_ese_2023.jpg";
import Management_Processes_and_Organisational_Behaviour_ESE_2023_PALVI from "./Samples/Management Processes & Organisational Behaviour_ese_2023_PALVI.jpg";
import Managerial_Economics_Business_Economics_ESE_2023 from "./Samples/Managerial Economics  Business Economics_ESE_2023_PALVI.png";
import Accounting_for_Decision_Making_ESE_2024_PALVI from "./Samples/Accounting for Decision Making_ese_2024_PALVI.jpg";
import Quantitative_Methods_ESE_2024_PALVI from "./Samples/Quantitative Methods_ese_2024_PALVI.png";
import Quantitative_Methods_ESE_2023_PALVI from "./Samples/Quantitative Methods_ese_2023_PALVI.png";
import Accounting_for_Decision_Making_2024_ESE_PALVI from "./Samples/Accounting for Decision Making_2024_ESE_PALVI.png";
import Managerial_Economics_Business_Economics_ESE_2023_PALVI from "./Samples/Managerial Economics  Business Economics_ESE_2023_PALVI.png";
import Data_Structures_and_File_Processing_ESE_2025_navjot from "./Samples/Data Structures and File Processing_ESE_2025_navjot.jpg";
import Title_Accounting_for_Decision_Making_MSE_2023_palvi from "./Samples/Title Accounting for Decision Making_MSE_2023_palvi.png";
import Discrete_Mathematical_Structures_ESE_2025_Navjot from "./Samples/Discrete Mathematical Structures_ESE_2025_Navjot.png";
import Data_Structures_and_File_Processing_2025_ESE_Navjot from "./Samples/Data Structures and File Processing_2025_ESE_Navjot.png";
import CORPORATE_LAW_AND_GOVERNANCE_MSE_2023 from "./Samples/CORPORATE LAW AND GOVERNANCE_MSE_2023.jpg";

const UploadedResources = () => {
  const [query, setQuery] = useState("");

  const courses = {
    4: [
      {
        title: "Algorithm Design and Analysis",
        code: "CSA301",
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: Algorithm_design_and_analysis_MSE_2022_Surbhi,
      },
      {
        title: "Business Environment and Indian Ethos",
        code: "MGT501",
        semester: "MSE",
        session: "2025",
        contributor: "Nishant",
        imgSrc: BUSINESS_ENVIRONMENT_AND_INDIAN_ETHOS_ESE_2025,
      },
      {
        title: "Management Process and Organisational Behaviour",
        code: "MGT503",
        semester: "MSE",
        session: "2025",
        contributor: "Nishant",
        imgSrc: Management_Process_and_OrganisationalBehaviour_ESE_2025,
      },
      {
        title: "Managerial Economics",
        code: "ECO501",
        semester: "MSE",
        session: "2025",
        contributor: "Nishant",
        imgSrc: Managerial_Economics_ESE_2025,
      },
      {
        title: "Quantitative Methods",
        code: "ECO502",
        semester: "MSE",
        session: "2025",
        contributor: "Nishant",
        imgSrc: Quantitative_Methods_ESE_2025,
      },
      {
        title: "Accounting for Decision Making",
        code: "MGT502",
        semester: "MSE",
        session: "2025",
        contributor: "Nishant",
        imgSrc: Accounting_for_Decision_Making_ESE_2025,
      },
      {
        title: "Software Engineering and Testing",
        code: "CSA660",
        semester: "MSE",
        session: "2025",
        contributor: "Nishant",
        imgSrc: Software_Engineering_and_Testing_2025_ESE,
      },
      {
        title: "MBA MSE Semester 1",
        code: "MBA-MSE",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: MBA_MSE_Sem_1_page_0007,
      },
      {
        title: "Quantitative Methods",
        code: "ECO502",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: Quantitative_Methods_2023_MSE,
      },
      {
        title: "Managerial Economics Business Economics",
        code: "ECO501",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: Managerial_Economics_Business_Economics_2023_MSE,
      },
      {
        title: "Management Process and Organisational Behaviour",
        code: "MGT503",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: Management_Processes_and_Organisational_Behaviour_MSE_2023,
      },
      {
        title: "Business Environment and Indian Ethos",
        code: "MGT501",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: Business_Environment_and_Indian_Ethos_MSE_2023,
      },
      {
        title: "Business Environment and Indian Ethos",
        code: "MGT501",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: Business_Environment_and_Indian_Ethos_ESE_2023,
      },
      {
        title: "Business Environment and Indian Ethos",
        code: "MGT501",
        semester: "MSE",
        session: "2024",
        contributor: "Nishant",
        imgSrc: BUSINESS_ENVIRONMENT_AND_INDIAN_ETHOS_ESE_2024,
      },
      {
        title: "Management Process and Organisational Behaviour",
        code: "MGT503",
        semester: "MSE",
        session: "2024",
        contributor: "Nishant",
        imgSrc: Management_Process_and_Organisational_Behaviour_ESE_2024,
      },
      {
        title: "Management Process and Organisational Behaviour",
        code: "MGT503",
        semester: "MSE",
        session: "2023",
        contributor: "PALVI",
        imgSrc:
          Management_Processes_and_Organisational_Behaviour_ESE_2023_PALVI,
      },
      {
        title: "Managerial Economics",
        code: "ECO501",
        semester: "MSE",
        session: "2023",
        contributor: "PALVI",
        imgSrc: Managerial_Economics_Business_Economics_ESE_2023_PALVI,
      },
      {
        title: "Managerial Economics Business Economics",
        code: "ECO501",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: Managerial_Economics_Business_Economics_ESE_2023,
      },
      {
        title: "Accounting for Decision Making",
        code: "MGT502",
        semester: "MSE",
        session: "2024",
        contributor: "PALVI",
        imgSrc: Accounting_for_Decision_Making_ESE_2024_PALVI,
      },
      {
        title: "Accounting for Decision Making",
        code: "MGT502",
        semester: "MSE",
        session: "2024",
        contributor: "PALVI",
        imgSrc: Accounting_for_Decision_Making_2024_ESE_PALVI,
      },
      {
        title: "Accounting for Decision Making",
        code: "MGT502",
        semester: "MSE",
        session: "2023",
        contributor: "PALVI",
        imgSrc: Title_Accounting_for_Decision_Making_MSE_2023_palvi,
      },
      {
        title: "Quantitative Methods",
        code: "ECO502",
        semester: "MSE",
        session: "2024",
        contributor: "PALVI",
        imgSrc: Quantitative_Methods_ESE_2024_PALVI,
      },
      {
        title: "Quantitative Methods",
        code: "ECO502",
        semester: "MSE",
        session: "2023",
        contributor: "PALVI",
        imgSrc: Quantitative_Methods_ESE_2023_PALVI,
      },
      {
        title: "Corporate Law and Governance",
        code: "MGT521",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: Corporate_Law_and_Governance_ESE_2023,
      },
      {
        title: "Corporate Law and Governance",
        code: "MGT521",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant",
        imgSrc: CORPORATE_LAW_AND_GOVERNANCE_MSE_2023,
      },
      {
        title: "Discrete Mathematical Structures",
        code: "CSA657",
        semester: "MSE",
        session: "2025",
        contributor: "Navjot",
        imgSrc: Discrete_Mathematical_Structures_ESE_2025_Navjot,
      },
      {
        title: "Data Structures and File Processing",
        code: "CSA663",
        semester: "MSE",
        session: "2025",
        contributor: "Navjot",
        imgSrc: Data_Structures_and_File_Processing_ESE_2025_navjot,
      },
      {
        title: "Data Structures and File Processing",
        code: "CSA663",
        semester: "MSE",
        session: "2025",
        contributor: "Navjot",
        imgSrc: Data_Structures_and_File_Processing_2025_ESE_Navjot,
      },

      {
        title: "Algorithm Design and Programming C",
        code: "CSA111",
        semester: "ESE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: algorithm_design_and_programming_C_ESE_2024_samipta,
      },
      {
        title: "Algorithm Design and Programming using C",
        code: "CSA111",
        semester: "ESE",
        session: "2024",
        contributor: "Shubha",
        imgSrc: algorithm_design_and_programming_using_C_BCA_SHUBHA_ESE_2024,
      },
      {
        title: "Algorithm Design and Programming using C",
        code: "CSA111",
        semester: "MSE",
        session: "2023",
        contributor: "Shubha",
        imgSrc: algorithm_design_and_programming_using_C_BCA_SHUBHA_MSE_2023,
      },
      {
        title: "Algorithm Design in Programming using C",
        code: "CSA111",
        semester: "MSE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: algorithm_design_in_programming_using_C_MSE_2024_samipta,
      },
      {
        title: "Algorithm & Programming Logic Design",
        code: "CSA111",
        semester: "MSE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: algorithm_Mani_programming_logic_design_BCA_SHUBHA_MSE_2022,
      },
      {
        title: "Algorithm & Programming Logic Design",
        code: "CSA111",
        semester: "ESE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: algorithm_programing_and_logic_design_BCA_SHUBHA_ESE_2022,
      },
      {
        title: "Artificial Intelligence",
        code: "CSA401",
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: artificial_intelligence_ESE_2023_Surbhi,
      },
      {
        title: "Artificial Intelligence",
        code: "CSA401",
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: artificial_intelligence_MSE_2023_Surbhi,
      },
      {
        title: "ASP.Net",
        code: "CSA502",
        semester: null,
        session: null,
        contributor: null,
        imgSrc: ASP_Net,
      },
      {
        title: "Basic Communication Skills",
        code: "ENG151B",
        semester: "MSE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: basic_communication_skill_BCA_SHUBHA_MSE_2022_4,
      },
      {
        title: "Basic Communication Skills",
        code: "ENG151B",
        semester: "ESE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: basic_communication_skills_BCA_SHUBHA_ESE_2022,
      },
      {
        title: "Business Management for Beginners",
        code: "MBA101",
        semester: "ESE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: business_management_for_beginners_BCA_SHUBHA_ESE_2022_4,
      },
      {
        title: "Business Management for Beginners",
        code: "MBA101",
        semester: "MSE",
        session: "2023",
        contributor: "Shubha",
        imgSrc: business_management_for_beginners_BCA_SHUBHA_MSE_2023,
      },
      {
        title: "Business Management for Beginners",
        code: "MBA101",
        semester: "ESE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: business_management_for_beginners_ESE_2024_samipta,
      },
      {
        title: "Business Management for Beginners",
        code: "MBA101",
        semester: "MSE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: business_management_for_beginners_MSE_2024_samipta,
      },
      {
        title: "C Programming",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: C_Programming,
      },
      {
        title: "Cambridge English I",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Shubha",
        imgSrc: Cambridge_English_I_BCA_SHUBHA_ESE_2024,
      },
      {
        title: "Cambridge English I",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: Cambridge_English_I_ESE_2024_samipta,
      },
      {
        title: "Community Engagement Course",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: Community_Engagement_course,
      },
      {
        title: "Computer Architecture and Its Organisation",
        code: null,
        semester: "ESE",
        session: "2021",
        contributor: "Surbhi",
        imgSrc: computer_architecture_and_its_organisation_ESE_2021_Surbhi,
      },
      {
        title: "Computer Fundamental and Automation",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: computer_fundamental_and_automation_BCA_SHUBHA_MSE_2022_4,
      },
      {
        title: "Computer Fundamentals and Office Automation",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: computer_fundamental_and_office_automation_ESE_2024_samipta,
      },
      {
        title: "Computer Fundamentals and Office Automation",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: computer_fundamental_and_office_automation_MSE_2024_samipta,
      },
      {
        title: "Computer Fundamentals of Automation and Office Automation",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Shubha",
        imgSrc:
          computer_fundamental_of_automation_and_office_automation_BCA_SHUBHA_MSE_2023,
      },
      {
        title: "Computer Fundamentals and Office Automation",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Shubha",
        imgSrc: computer_fundamentals_and_office_automation_BCA_SHUBHA_ESE_2024,
      },
      {
        title: "Computer Graphics",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: Computer_Graphics_ESE_2022_Surbhi,
      },
      {
        title: "Computer Graphics",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: Computer_graphics_MSE_2022_Surbhi,
      },
      {
        title: "Computer Networks",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: Computer_Networks_ESE_2022_Surbhi,
      },
      {
        title: "Computer Networks",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: Computer_Networks_MSE_2022_Surbhi,
      },
      {
        title: "C Programming (MSE)",
        code: "CSA105",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: cProgrammingImg1,
      },
      {
        title: "C Programming (ESE)",
        code: "CSA105",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: cProgrammingImg,
      },
      {
        title: "Web Designing (MSE)",
        code: "CSA106",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: webDesigningImg1,
      },
      {
        title: "Web Designing (ESE)",
        code: "CSA106",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: webDesigningImg,
      },
      {
        title: "Environmental Studies (ESE)",
        code: "EVS100",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: environmentalStudiesImg,
      },
      {
        title: "Human Values and General Studies (ESE)",
        code: "SGS107",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: humanValuesImg1,
      },
      {
        title: "Human Values and General Studies (MSE)",
        code: "SGS107",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: humanValuesImg,
      },
      {
        title: "System Software (ESE)",
        code: "CSA217",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: systemSoftwareImg,
      },
      {
        title: "Software Engineering (ESE)",
        code: "CSA213",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: softwareEngineeringImg,
      },
      {
        title: "Mathematical Foundation (ESE)",
        code: "MTH190A",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: mathFoundationImg,
      },
      {
        title: "Data Structure (ESE)",
        code: "CSA209",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: dataStructureImg,
      },
      {
        title: "Computer Networks (ESE)",
        code: "CSA218",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: computerNetworksImg,
      },
      {
        title: "Computer Oriented Numerical and Statistical Technique (MSE)",
        code: "CSA201",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: computerOrientedMathImg,
      },
      {
        title: "Computer Oriented Numerical and Statistical Technique (ESE)",
        code: "CSA201",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: computerOrientedMathImgg,
      },
      {
        title: "Database Concepts (MSE)",
        code: "CSA203",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: databaseConceptsImg,
      },
      {
        title: "Community Engagement (ESE)",
        code: "CEC101",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: communityEngagementImg,
      },
      {
        title: "Computer System Architecture (ESE)",
        code: "CSA204",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: computerArchitectureImg,
      },
      {
        title: "Object Oriented Programming Structure (MSE)",
        code: "CSA202",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: oopStructureImg1,
      },
      {
        title: "Object Oriented Programming Structure (ESE)",
        code: "CSA202",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: oopStructureImg,
      },
      {
        title: "Operating System (ESE)",
        code: "CSA303",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: operatingSystemImg,
      },
      {
        title: "Programming in C# (ESE)",
        code: "CSA210",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: programmingCSharpImg,
      },
      {
        title: "ASP.Net (ESE)",
        code: "CSA317",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: ASPNetImg,
      },
      {
        title: "Data Warehousing and Mining (ESE)",
        code: "CSA314",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: dataWarehousingImg,
      },
      {
        title: "Discrete Mathematics (ESE)",
        code: "CSA316",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: discreteMathematicsImg,
      },
      {
        title: "Programming in Python (ESE)",
        code: "CSA315",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: programmingPythonImg,
      },
      {
        title: "Computer Graphics and Multimedia (ESE)",
        code: "CSA309",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: computerGraphicsImg,
      },
      {
        title: "Computer Graphics and Multimedia (MSE)",
        code: "CSA309",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: computerGraphicsImg1,
      },
      {
        title: "Machine Learning (ESE)",
        code: "CSA323",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: machineLearningImg,
      },
      {
        title: "Machine Learning (MSE)",
        code: "CSA323",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: machineLearningImg1,
      },
      {
        title: "Core Java (ESE)",
        code: "CSA302",
        semester: "ESE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: coreJavaImg,
      },
      {
        title: "Core Java (MSE)",
        code: "CSA302",
        semester: "MSE",
        session: "2023",
        contributor: "Nishant Chauhan",
        imgSrc: coreJavaImg1,
      },
      {
        title: "Computer Graphics",
        code: null,
        semester: "ESE",
        session: null,
        contributor: null,
        imgSrc: Computer_Graphics_ESE,
      },
      {
        title: "Computer Graphics",
        code: null,
        semester: "MSE",
        session: null,
        contributor: null,
        imgSrc: Computer_Graphics_MSE,
      },
      {
        title: "Computer Networks",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: Computer_Networkss,
      },
      {
        title: "Computer Oriented Numerical and Statistical Techniques",
        code: null,
        semester: "MSE",
        session: null,
        contributor: null,
        imgSrc: computer_Orientated_Numerical_and_statistical_technique_MSE,
      },
      {
        title: "Computer Oriented Numerical and Statistical Techniques",
        code: null,
        semester: "ESE",
        session: null,
        contributor: null,
        imgSrc: computer_Orientated_Numerical_and_statistical_technique_ESE,
      },
      {
        title: "Computer System Architecture",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: computer_system_architecture,
      },
      {
        title: "Core Java",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: Core_java_2024_ese_Deepeka,
      },
      {
        title: "Core Java",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: Core_java_2024_Mse_Deepeka,
      },
      {
        title: "Core Java",
        code: null,
        semester: "ESE",
        session: null,
        contributor: null,
        imgSrc: Core_Java_ESE,
      },
      {
        title: "Core Java",
        code: null,
        semester: "MSE",
        session: null,
        contributor: null,
        imgSrc: Core_Java_MSE,
      },
      {
        title: "Data Communication",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: Data_communication_MSE_2023_Surbhi,
      },
      {
        title: "Data Communication",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: data_communicatoion_ESE_2022_Surbhi,
      },
      {
        title: "Data Mining",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: DATA_MINING_ESE_2023_Surbhi,
      },
      {
        title: "Data Mining",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: Data_mining_ESE_2024_Surbhi,
      },
      {
        title: "Data Mining",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: Photo_15_2025_03_27_00_37_15,
      },
      {
        title: "Data Mining",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: Data_Mining_MSE_2023_Surbhi,
      },
      {
        title: "Data Mining",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: Data_mining_MSE_2024_Surbhi,
      },
      {
        title: "Data Structure Using C",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: data_structure_using_C_2024_ese_Deepeka,
      },
      {
        title: "Data Structure Using C",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: data_structure_using_c_2024_mse_Deepeka,
      },
      {
        title: "Data Structure (Reappear)",
        code: null,
        semester: null,
        session: "2021",
        contributor: "Surbhi",
        imgSrc: data_structure_reappear_2021_Surbhi,
      },
      {
        title: "Data Structure",
        code: null,
        semester: "ESE",
        session: null,
        contributor: null,
        imgSrc: Data_Structure_ESE,
      },
      {
        title: "Data Warehousing and Mining",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: Data_Warehousing_and_Mining,
      },
      {
        title: "Database Communication",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: Database_communication_MSE_2022_Surbhi,
      },
      {
        title: "Database Management System",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: Database_manage_emnt_system_ESE_2022_Surbhi,
      },
      {
        title: "Database Management System",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: Database_management_system_ESE_2022_surbhi,
      },
      {
        title: "Database Concepts",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: Database_Concepts,
      },
      {
        title: "Design Thinking & Innovation",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Shubha",
        imgSrc: DesignThinkingInnovation_BCA_SHUBHA_MSE_2023,
      },
      {
        title: "Design Thinking & Innovation",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: DesignThinkingInnovation_BCA_SHUBHA_ESE_2022_4,
      },

      {
        title: "Design Thinking & Innovation",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: DesignThinkingInnovation_ESE_2024_Samipta,
      },
      {
        title: "Design Thinking & Innovation",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: DesignThinkingInnovation_MSE_2024_Samipta,
      },
      {
        title: "Digital Image Processing",
        code: null,
        semester: "MSE",
        session: "2025",
        contributor: "Gurpreet",
        imgSrc: DigitalImageProcessing_2025_MSE_Gurpreet,
      },
      {
        title: "Discrete Mathematics",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: DiscreteMathematics_2024_ESE_Deepeka,
      },
      {
        title: "Discrete Mathematics",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: DiscreteMathematics,
      },
      {
        title: "Discrete Mathematics",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: PrincipleProgrammingAlgorithm_C_MSE,
      },
      {
        title: "Engineering Mathematics III",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: EngineeringMathematicsIII_ESE_2022_Surbhi,
      },
      {
        title: "Engineering Mathematics III",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: EngineeringMathematicsIII_ESE_2023_Surbhi,
      },
      {
        title: "Engineering Mathematics III",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: EngineeringMathematicsIII_MSE_2022_Surbhi,
      },
      {
        title: "Engineering Mathematics III",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: EngineeringMathematicsIII_MSE_2023_Surbhi,
      },
      {
        title: "Environmental Studies",
        code: null,
        semester: "ESE",
        session: null,
        contributor: null,
        imgSrc: EnvironmentStudies_ESE,
      },
      {
        title: "Environmental Studies",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Shubha",
        imgSrc: EnvironmentalStudies_BCA_SHUBHA_MSE_2024,
      },
      {
        title: "Essentials of Entrepreneurship",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: EssentialsEntrepreneurship_BCA_SHUBHA_MSE_2022_4,
      },
      {
        title: "Fundamentals of Management",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: FundamentalOfManagement_BCA_SHUBHA_ESE_2022,
      },

      {
        title: "Human Values & Ethics",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: HumanValueEthics_BCA_SHUBHA_ESE_2022_4,
      },
      {
        title: "Human Values & Ethics",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: HumanValueEthics_ESE_2024_Samipta,
      },
      {
        title: "Human Values & Ethics",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Shubha",
        imgSrc: HumanValuesEthics_BCA_SHUBHA_MSE_2023_4,
      },
      {
        title: "Human Values & Work Ethics",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: HumanValuesWorkEthics_MSE_2024_Samipta,
      },
      {
        title: "Human Values & General Studies",
        code: null,
        semester: "ESE",
        session: null,
        contributor: null,
        imgSrc: HumanValueGeneralStudies_ESE,
      },
      {
        title: "Human Values & General Studies",
        code: null,
        semester: "MSE",
        session: null,
        contributor: null,
        imgSrc: HumanValueGeneralStudies_MSE,
      },
      {
        title: "Introduction to Java Programming",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: IntroductionToJavaProgramming_MSE_2023_Surbhi,
      },
      {
        title: "Introduction to Java Programming",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: IntroductionToJavaProgramming_MSE_2024_Surbhi,
      },
      {
        title: "Introduction to Java Programming",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: IntroductionToJavaProgramming_MSE_2024_Surbhi1,
      },
      {
        title: "Introduction to Java Programming",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: IntroductionToJavaProgramming_ESE_2023_Surbhi,
      },
      {
        title: "Introduction to Java Programming",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: IntroductionToJavaProgramming_ESE_2024_Surbhi,
      },
      {
        title: "Machine Learning",
        code: null,
        semester: "ESE",
        session: null,
        contributor: null,
        imgSrc: MachineLearning_ESE,
      },
      {
        title: "Machine Learning",
        code: null,
        semester: "MSE",
        session: null,
        contributor: null,
        imgSrc: MachineLearning_MSE,
      },
      {
        title: "Mathematical Foundation of CS",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Shubha",
        imgSrc: MathematicalFoundationCS_BCA_SHUBHA_MSE_2023_4,
      },
      {
        title: "Mathematical Foundation in CS",
        code: null,
        semester: null,
        session: null,
        contributor: null,
        imgSrc: MathematicalFoundationInCS,
      },
      {
        title: "Mathematical Foundation of CS",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Shubha",
        imgSrc: MathematicalFoundationCS_BCA_SHUBHA_MSE_2023_4,
      },
      {
        title: "Mathematical Foundation of CS",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Shubha",
        imgSrc: MathematicsFoundationCS_BCA_SHUBHA_MSE_2024,
      },
      {
        title: "Mechanics I",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Vanita",
        imgSrc: Mechanics1_MSE_2023_VANITA,
      },
      {
        title: "Mechanics II",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: MechanicsII_2024_ESE_Deepeka,
      },
      {
        title: "Mechanics II",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: MechanicsII_2024_MSE_Deepeka,
      },
      {
        title: "Microprocessor Applications",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: MicroprocessorApplication_ESE_2022_Surbhi,
      },
      {
        title: "Microprocessor Applications",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: MicroprocessorApplication_ESE_2023_Surbhi,
      },
      {
        title: "Microprocessor Applications",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: MicroprocessorApplication_MSE_2022_Surbhi,
      },
      {
        title: "Microprocessor Applications",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: MicroprocessorApplication_MSE_2023_Surbhi,
      },
      {
        title: "Natural Language Processing",
        code: null,
        semester: "MSE",
        session: "2025",
        contributor: "Gurpreet",
        imgSrc: NaturalLanguageProcessing_2025_MSE_Gurpreet,
      },
      {
        title: "Nuclear Physics",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Vanita",
        imgSrc: NuclearPhysics_MSE_2022_VANITA,
      },
      {
        title: "Nuclear Physics",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Vanita",
        imgSrc: NuclearPhysics_MSE_2024_VANITA,
      },
      {
        title: "Nuclear Physics",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: NuclearPhysics_2024_ESE_Deepeka,
      },
      {
        title: "Number Theory",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Vanita",
        imgSrc: NumberTheory_MSE_2023_VANITA,
      },
      {
        title: "Object-Oriented Programming Structure",
        code: null,
        semester: "ESE",
        session: "2021",
        contributor: "Surbhi",
        imgSrc: ObjectOrientedProgrammingStructure_ESE_2021_Surbhi,
      },
      {
        title: "Object-Oriented Programming Structure",
        code: null,
        semester: "ESE",
        session: "2021",
        contributor: "Surbhi",
        imgSrc: ObjectOrientedProgrammingStructure_ESEn,
      },
      {
        title: "Object-Oriented Programming Structure",
        code: null,
        semester: "ESE",
        session: "2021",
        contributor: "Surbhi",
        imgSrc: ObjectOrientedProgrammingStructure_MSEn,
      },

      {
        title: "Object-Oriented Programming Using C++",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Shubha",
        imgSrc: ObjectOrientedProgrammingUsingCpp_BCA_SHUBHA_MSE_2024,
      },
      {
        title: "Operating System",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: OperatingSystem_ESE,
      },
      {
        title: "Operating System Concepts",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: OperatingSystemConcept_ESE_2022_Surbhi,
      },
      {
        title: "Operating System Concepts",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: OperatingSystemConcept_ESE_2023_Surbhi,
      },
      {
        title: "Operating System Concepts",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: OperatingSystemConcept_MSE_2022_Surbhi,
      },
      {
        title: "Operating System Concepts",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: OperatingSystemConcept_MSE_2023_Surbhi,
      },
      {
        title: "Optics",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Vanita",
        imgSrc: Optics_ESE_2024_VANITA,
      },
      {
        title: "Particle Physics",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Deepeka",
        imgSrc: ParticlePhysics_2024_ESE_Deepeka,
      },
      {
        title: "Particle Physics",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Vanita",
        imgSrc: ParticlePhysics_MSE_2024_VANITA,
      },
      {
        title: "Principles of Digital Electronics",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: PrincipleDigitalElectronics_ESE_2024_Samipta,
      },
      {
        title: "Principles of Digital Electronics",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Samipta",
        imgSrc: PrincipleDigitalElectronics_MSE_2024_Samipta,
      },
      {
        title: "Principles of Digital Electronics",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: PrinciplesDigitalElectronics_BCA_SHUBHA_ESE_2022_4,
      },
      {
        title: "Principles of Digital Electronics",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Shubha",
        imgSrc: PrinciplesDigitalElectronics_BCA_SHUBHA_MSE_2023,
      },

      {
        title: "Principles of Programming Algorithms (C)",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Shubha",
        imgSrc: PrinciplesProgrammingAlgorithms_C_BCA_SHUBHA_MSE_2022_3,
      },
      {
        title: "Programming in C#",
        code: null,
        semester: "ESE",
        session: "Unknown",
        contributor: "Unknown",
        imgSrc: ProgrammingInCSharp_ESE,
      },
      {
        title: "Programming in Python",
        code: null,
        semester: "ESE",
        session: "Unknown",
        contributor: "Unknown",
        imgSrc: ProgrammingPython_ESE,
      },
      {
        title: "Quantum Physics",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Vanita",
        imgSrc: QuantumPhysics_MSE_2023_VANITA,
      },
      {
        title: "R Programming",
        code: null,
        semester: "MSE",
        session: "2025",
        contributor: "Gurpreet",
        imgSrc: RProgramming_2025_MSE_Gurpreet,
      },
      {
        title: "Relational Database Management System",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: RelationalDatabaseManagementSystem_ESE_2024_Surbhi,
      },
      {
        title: "Relational Database Management System",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: RelationalDatabaseManagementSystem_ESE_2023_Surbhi,
      },
      {
        title: "Relational Database Management System",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: RelationalDatabaseManagementSystem_MSE_2023_Surbhi,
      },
      {
        title: "Relational Database Management System",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: RelationalDatabaseManagementSystem_MSE_2024_Surbhi,
      },
      {
        title: "Software Engineering",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: SoftwareEngineering_ESE_2022_Surbhi,
      },
      {
        title: "Software Engineering",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: SoftwareEngineering_MSE_2022_Surbhi,
      },
      {
        title: "Software Engineering",
        code: null,
        semester: "ESE",
        session: "Unknown",
        contributor: "Unknown",
        imgSrc: SoftwareEngineering_ESE,
      },
      {
        title: "Solid State Physics",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Vanita",
        imgSrc: SolidStatePhysics_ESE_2023_VANITA,
      },
      {
        title: "Solid State Physics",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Vanita",
        imgSrc: SolidStatePhysics_MSE_2024_VANITA,
      },
      {
        title: "System Programming",
        code: null,
        semester: "ESE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: SystemProgramming_ESE_2022_Surbhi,
      },
      {
        title: "System Programming",
        code: null,
        semester: "MSE",
        session: "2022",
        contributor: "Surbhi",
        imgSrc: SystemProgramming_MSE_2022_Surbhi,
      },
      {
        title: "System Programming",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: SystemProgramming_MSE_2023_Surbhi,
      },
      {
        title: "System Programming",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: SystemProgramming_ESE_2023_Surbhi,
      },
      {
        title: "System Simulation",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: SystemSimulation_ESE_2024_Surbhi,
      },
      {
        title: "System Simulation & Modeling",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: SystemSimulationModeling_MSE_2023_Surbhi,
      },
      {
        title: "System Simulation & Modeling",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: SystemSimulationModeling_MSE_2024_Surbhi,
      },
      {
        title: "System Simulation & Modeling",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: SystemSimulationModeling_ESE_2024_Surbhi,
      },
      {
        title: "System Simulation & Modeling",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: SystemSimulationModeling_ESE_2023_Surbhi,
      },
      {
        title: "System Software",
        code: null,
        semester: "ESE",
        session: "Unknown",
        contributor: "Unknown",
        imgSrc: SystemSoftware_ESE,
      },
      {
        title: "Theory of Computation",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: TheoryOfComputation_MSE_2024_Surbhi,
      },
      {
        title: "Theory of Computation",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Surbhi",
        imgSrc: TheoryOfComputation_ESE_2024_Surbhi,
      },
      {
        title: "Theory of Computation",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: TheoryOfComputation_ESE_2023_Surbhi,
      },
      {
        title: "Theory of Computation",
        code: null,
        semester: "MSE",
        session: "2023",
        contributor: "Surbhi",
        imgSrc: TheoryOfComputation_MSE_2023_Surbhi,
      },
      {
        title: "Thermal & Statistical Physics",
        code: null,
        semester: "MSE",
        session: "2024",
        contributor: "Vanita",
        imgSrc: ThermalStatisticalPhysics_MSE_2024_VANITA,
      },
      {
        title: "Thermal & Statistical Physics",
        code: null,
        semester: "ESE",
        session: "2024",
        contributor: "Vanita",
        imgSrc: ThermalStatisticalPhysics_ESE_2024_VANITA,
      },
      {
        title: "Web Designing",
        code: null,
        semester: "ESE",
        session: "2023",
        contributor: "Shubha",
        imgSrc: WebDesigning_BCA_SHUBHA_ESE_2023,
      },
      {
        title: "Web Designing",
        code: null,
        semester: "MSE",
        session: "2022-23",
        contributor: "Shubha",
        imgSrc: WebDesigning_BCA_SHUBHA_MSE_2022_3,
      },
      {
        title: "Web Designing",
        code: null,
        semester: "ESE",
        session: "Unknown",
        contributor: "Unknown",
        imgSrc: WebDesigning_ESE,
      },
      {
        title: "Web Designing",
        code: null,
        semester: "MSE",
        session: "Unknown",
        contributor: "Unknown",
        imgSrc: WebDesigning_MSE,
      },
    ],
  };

  const filteredCourses = Object.values(courses || {})
    .flat()
    .filter((course) => {
      const title = course.title?.toLowerCase() || "";
      const code = course.code?.toLowerCase() || "";
      const search = query.toLowerCase();
      return title.includes(search) || code.includes(search);
    });

  const handleDownload = (imgSrc) => {
    const link = document.createElement("a");
    link.href = imgSrc;
    link.setAttribute("download", imgSrc.split("/").pop());
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredCourses]);

  return (
    <div className="uploaded-resources-wrapper">
      {/* 🔍 Search Section */}
      <section className="search-section">
        <h1 className="heading">Search Question Papers</h1>
        <input
          type="text"
          placeholder="Search by title or course code..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      {/* 📄 Cards Section */}
      <section className="cards-section">
        <div className="row justify-content-center">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div className="col-lg-4 col-md-6 mb-4 card-wrapper" key={index}>
                <div className="card custom-card h-100">
                  <img
                    src={course.imgSrc}
                    className="card-img-top"
                    alt={course.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{course.title}</h5>
                    <p className="card-text">Course Code: {course.code}</p>
                    <p className="card-text">Semester: {course.semester}</p>
                    <p className="card-text">Session: {course.session}</p>
                    <p className="card-text">
                      Contributor: {course.contributor}
                    </p>
                  </div>
                  <div className="card-body text-center">
                    <button
                      className="btn btn-success rounded-pill px-4"
                      onClick={() => handleDownload(course.imgSrc)}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No results found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default UploadedResources;
