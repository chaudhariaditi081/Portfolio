function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* BiteBox */}
        <div className="project-card">
          <img
            src="/images/bitebox.png"
            alt="BiteBox Project"
            loading="lazy"
          />

          <h3>BiteBox</h3>

          <p>
            A food delivery website designed using HTML, CSS and JavaScript.
          </p>

          <a
            href="https://github.com/chaudhariaditi081/bite-box-project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

        {/* EV Charge Finder */}
        <div className="project-card">
          <img
            src="/images/ev-charge.png"
            alt="EV Charge Finder Project"
            loading="lazy"
          />

          <h3>EV Charge Finder</h3>

          <p>
            A website that helps users find nearby EV charging stations.
          </p>

          <a
            href="https://github.com/chaudhariaditi081/EV_Charger.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

        {/* ShopKart */}
        <div className="project-card">
          <img
            src="/images/shopkart.png"
            alt="ShopKart Project"
            loading="lazy"
          />

          <h3>ShopKart</h3>

          <p>
            A React-based e-commerce website with product listing and cart
            functionality.
          </p>

          <a
            href="https://github.com/chaudhariaditi081/react_shopkart_website.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;