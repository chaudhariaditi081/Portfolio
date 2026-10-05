function About() {
  return (
    <>
      <section id="about" className="section hero">
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK JAVA DEVELOPER</p>
          <h1>
            Hi, I'm <span>Aditi Chaudhari</span>
          </h1>
          <h2>I build thoughtful digital experiences.</h2>
          <p>
            I'm an IT graduate who enjoys turning ideas into responsive,
            user-friendly web applications. I work across Java, React, and the
            technologies that bring useful products to life.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              View Projects <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-outline" href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/chaudhariaditi081" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/aditi-chaudhari-b1b05743a" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

      </section>

      <section id="story" className="section story-section">
        <div className="story-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Technology with a <span>human side.</span></h2>
          <p>
            I'm an Information Technology graduate who enjoys solving practical
            problems through clean, accessible web experiences. I like learning
            by building, exploring new tools, and refining the details that make
            an application feel easy to use.
          </p>
        </div>
        <div className="story-details">
          <div>
            <span>FOCUS</span>
            <strong>Full-stack web development</strong>
          </div>
          <div>
            <span>EDUCATION</span>
            <strong>Information Technology</strong>
          </div>
          <div>
            <span>ALWAYS LEARNING</span>
            <strong>Java · React · SQL</strong>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;