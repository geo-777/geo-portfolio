import { Terminal } from "lucide-react";
const Home = () => {
  const codeLines = [
    { text: "const developer = {", delay: 0.8 },
    { text: '  name: "John Doe",', delay: 1.0 },
    { text: '  role: "Fullstack Web Developer",', delay: 1.2 },
    { text: '  stack: ["React", "Node", "TypeScript"],', delay: 1.4 },
    { text: '  also: ["C", "Python", "C++"],', delay: 1.6 },
    { text: '  status: "open to work"', delay: 1.8 },
    { text: "};", delay: 2.0 },
  ];
  return (
    <section className="home-page">
      <div className="home-left">
        <div className="freelance-label">
          <span></span>
          <p>Available for freelance</p>
        </div>
        <div className="home-headings">
          <h2>Fullstack</h2>
          <h2 className="heading-dev">Developer.</h2>
          <h3>& Engineer.</h3>
        </div>
        <p className="home-desc">
          College student exploring different areas of computer science,
          building modern web apps with React and Node along the way.
        </p>
        <div className="home-cta-btns">
          <button className="home-cta view-projects">View Projects</button>
          <button className="home-cta get-in-touch">Get in touch</button>
        </div>
      </div>
      <div className="home-right">
        <div className="code-window">
          <div className="code-window-header">
            <div className="cwh-action-btns">
              <span className="cwh-action-btn-item red-action-btn"></span>
              <span className="cwh-action-btn-item yellow-action-btn"></span>
              <span className="cwh-action-btn-item"></span>
            </div>
            <div className="cwh-heading">
              {" "}
              <Terminal size={12} /> <p>profile.ts</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
