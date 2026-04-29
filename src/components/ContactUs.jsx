const ContactUs = () => {
  return (
    <section className="contactUs">
      <p className="text-primary counter-contact">04.</p>
      <h4>Let's Build Something</h4>
      <p className="contact-desc">
        <span className="contact-desc-lines">
          I'm always open to freelance work, interesting engineering
        </span>
        <span className="contact-desc-lines">
          challenges, or just a good conversation about tech. Drop me a
          line{" "}
        </span>
        <span className="contact-desc-lines">— I'll get back fast.</span>
      </p>
      <button>Say Hello!</button>
      <div className="contact-links">
        <div className="contact-link-item"></div>
        <div className="contact-link-item"></div>
        <div className="contact-link-item"></div>
        <div className="contact-link-item"></div>
      </div>
    </section>
  );
};

export default ContactUs;
