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
        <a className="contact-link-item"></a>
        <a className="contact-link-item"></a>
        <a className="contact-link-item"></a>
        <a className="contact-link-item"></a>
      </div>
    </section>
  );
};

export default ContactUs;
