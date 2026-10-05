function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    window.location.hash = "about";
    window.location.href = `mailto:chaudhariaditi081@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <p>Email: chaudhariaditi081@gmail.com</p>
      <p>Phone: +91 XXXXX XXXXX</p>

      <div className="contact-links">
        <a
          href="https://github.com/chaudhariaditi081"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/aditi-chaudhari-b1b05743a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;