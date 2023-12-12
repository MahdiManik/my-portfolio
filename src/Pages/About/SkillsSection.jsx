const SkillProgressBar = ({ skillName, skillPercentage }) => {
  const progressBarStyle = {
    height: "20px",
    backgroundColor: "#eee",
    position: "relative",
  };

  const progressStyle = {
    height: "100%",
    width: `${skillPercentage}%`,
    backgroundColor: "#4CAF50",
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <div style={progressBarStyle}>
        <div style={progressStyle}></div>
      </div>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        {skillName} - {skillPercentage}%
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div
      className="pb-20"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <h3 className="text-5xl font-bold text-orange-600 mb-10 text-center border-b-2 w-96 mx-auto border-orange-600 p-3">
        Skills
      </h3>
      <SkillProgressBar skillName="HTML & CSS" skillPercentage={85} />
      <SkillProgressBar skillName="Tailwind" skillPercentage={90} />
      <SkillProgressBar skillName="JavaScript" skillPercentage={75} />
      <SkillProgressBar skillName="React" skillPercentage={88} />
      <SkillProgressBar skillName="NodeJS" skillPercentage={60} />
    </div>
  );
};

export default SkillsSection;
