import { GraduationCap, School } from "lucide-react";
import profilePhoto from "../assets/me.jpeg";

// Empty placeholder for you to build
const SkillScroller = () => {
  return <div className="about-skill-scroller"></div>;
};

const education = [
  {
    icon: School,
    type: "School",
    name: "St.Peter's Senior Secondary School Kadayiruppu",
    period: "2011 – 2025",
    grade: "96.6%",
    gradeLabel: "Percentage",
    details: "Science Stream (Computer Science)",
  },
  {
    icon: GraduationCap,
    type: "College",
    name: "Govt. Engineering College Thrissur",
    period: "2025 – 2029",
    grade: "9.47",
    gradeLabel: "CGPA",
    details: "B.Tech in Computer Science & Engineering",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-dot-pattern" />
      <div className="about-container">
        <div className="about-header">
          <span className="about-section-number">01.</span>
          <h2 className="about-section-title">About Me</h2>
          <div className="about-section-line" />
        </div>

        <div className="about-bio-grid">
          <div className="about-bio-content">
            <p className="about-bio-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="about-bio-text">
              I'm a fullstack web developer with a passion for building modern,
              performant applications. While my core is React & Node.js, I also
              love diving into systems programming with C and exploring how
              things work under the hood.
            </p>
          </div>

          <div className="about-profile-wrapper">
            <div className="about-profile-glow" />
            <img
              src={profilePhoto}
              alt="Profile photo"
              className="about-profile-img"
            />
          </div>
        </div>

        <h3 className="about-subheading">// tech stack</h3>
        <SkillScroller />

        <h3 className="about-subheading about-education-heading">
          // education
        </h3>
        <div className="about-education-grid">
          {education.map((edu) => {
            const Icon = edu.icon;
            return (
              <div key={edu.type} className="about-education-card">
                <div className="about-edu-header">
                  <div className="about-edu-icon-box">
                    <Icon size={22} className="about-edu-icon" />
                  </div>
                  <div className="about-edu-title-wrap">
                    <span className="about-edu-type">{edu.type}</span>
                    <h4 className="about-edu-name">{edu.name}</h4>
                  </div>
                </div>
                <p className="about-edu-details">{edu.details}</p>
                <div className="about-edu-footer">
                  <span className="about-edu-period">{edu.period}</span>
                  <div className="about-edu-grade">
                    <span className="about-grade-value">{edu.grade}</span>
                    <span className="about-grade-label">{edu.gradeLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
