import "./Preview.css";

function Preview({ personalInfo }) {
  return (
    <div className="preview">
      <PersonalInfoCV personalInfo={personalInfo} />
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

export default Preview;
