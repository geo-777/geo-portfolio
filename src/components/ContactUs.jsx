import { Send } from "lucide-react";

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
      <a
        href="https://wa.me/919400779364?text=Hey%20Georgy"
        target="_blank"
        className="whatsapp-link"
      >
        <Send size={18} />
        <p>Say Hello!</p>
      </a>
      <div className="contact-links">
        <a
          className="contact-link-item"
          href="https://github.com/geo-777"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          className="contact-link-item"
          href="https://www.linkedin.com/in/georgy-binu"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a className="contact-link-item" href="https://x.com/geo_codes_">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a
          className="contact-link-item"
          href="mailto:geo.binu.25@gmail.com?subject=Project%20Inquiry&body=Hi%20Georgy,%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
        >
          <i class="fa-brands fa-google"></i>
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
