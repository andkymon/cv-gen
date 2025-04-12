import { format } from "date-fns";
import "./Preview.css";

function Preview({ personalInfo, education, work }) {
  return (
    <div className="preview">
      <PersonalInfoCV personalInfo={personalInfo} />
      <EducationCV education={education} />
      <WorkCV work={work} />
    </div>
  );
}

function PersonalInfoCV({ personalInfo }) {
  return (
    <>
      <h1>{personalInfo.name}</h1>
      <div className="contact-info">
        {personalInfo.email}
        {(personalInfo.email.replace(/\s/g, "").length > 0 &&
          personalInfo.contact.replace(/\s/g, "").length > 0) &&
          " | "}
        {personalInfo.contact}
        <br></br>
        {personalInfo.linkedin}
        {(personalInfo.linkedin.replace(/\s/g, "").length > 0 &&
          personalInfo.website.replace(/\s/g, "").length > 0) &&
          " | "}
        {personalInfo.website}
      </div>
    </>
  )
}

function EducationCV({ education }) {
  return (
    <>
      <h2>Education</h2>
      <div class='heading-wrapper'>
        <h3>{education.degree}</h3>
        <div>{format(education.start_date, 'MMMM y')} - {format(education.end_date, 'MMMM y')}</div>
      </div>
      <div>{education.school}</div>
      <p>◦ {education.description}</p>
    </>
  )
}

function WorkCV({ work }) {
  return (
    <>
      <h2>Work Experience</h2>
      <div class='heading-wrapper'>
        <h3>{work.position}</h3>
        <div>{format(work.start_date, 'MMMM y')} - {format(work.end_date, 'MMMM y')}</div>
      </div>
      <div>{work.company}</div>
      <p>◦ {work.description}</p>
    </>
  )
}

export default Preview;
