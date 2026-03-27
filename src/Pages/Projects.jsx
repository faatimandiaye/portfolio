import projet1 from "../assets/ma.jpg"
 import projet2 from "../assets/hero.jpg"
 import projet3 from "../assets/cod.jpg"

function Projects() {

  const projects = [
    {
      title: "Mini Market",
      description: "Application avec React et Laravel",
      image: projet1,
      link: "https://github.com/mariama-sadio/mini-market"
    },
    {
      title: "Portfolio",
      description: "Mon site portfolio moderne avec React",
      image: projet2,
      link: "https://github.com/mariama-sadio/mini-market-portfolio"
    },
    {
      title: "Gestion des tâches",
      description: "Application React",
      image: projet3,
      link: "#"
    }
  ]

  return (
    <section className="projects">
      <h2>Mes projets</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank">Voir sur GitHub</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects