const Footer = ({ theme }) => {
  return (
    <footer className="footer">
      <p>
        Engineered with {theme === "dark" ? "💚" : "💙"} by{" "}
        <span className="footer-author">Georgy</span> — ©{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
