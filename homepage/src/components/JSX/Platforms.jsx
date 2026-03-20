import "../CSS/Platforms.css";

export default function Platforms() {
  return (
    <section className="platforms">
      <div className="platforms__container">
        <div className="platforms__grid">
          <article className="platforms__card">
            <h3 className="platforms__cardTitle">
              <span className="platforms__cardIcon">🏗️</span>
              ArchCraft
            </h3>
            <p className="platforms__cardText">
              Archcraft is the central platform for software requirements
              engineering, software architecture design, detailed design, and
              API management. It provides a structured and standardized
              environment where teams can define, design, and manage software
              solutions consistently. Archcraft supports collaboration across
              projects and ensures that requirements, architectures, and
              interfaces are clearly documented, aligned, and reusable
              throughout the software development lifecycle.
            </p>
          </article>

          <article className="platforms__card">
            <h3 className="platforms__cardTitle">
              <span className="platforms__cardIcon">💻</span>
              CodeCraft
            </h3>
            <p className="platforms__cardText">
              Codecraft is the corporate E/E development platform that supports
              modern software and electronics development across the
              organization. It includes continuous integration and provides a
              central, standardized infrastructure with shared tools and
              services. Codecraft is used by both internal teams and external
              partners to develop, build, test, and integrate software
              efficiently. By offering a stable, scalable, and well operated
              environment, Codecraft enables consistent quality, faster
              development, and smooth collaboration across projects and
              departments.
            </p>
          </article>

          <article className="platforms__card">
            <h3 className="platforms__cardTitle">
              <span className="platforms__cardIcon">✓</span>
              ValidationCraft
            </h3>
            <p className="platforms__cardText">
              ValidationCraft Marketplace provides a flexible validation
              environment that supports different test runners while harmonizing
              test libraries and test reporting. It offers a low impact approach
              that projects can adopt immediately, without major changes. The
              focus is on reusable and standardized solutions, supported by
              versioned tooling with regular releases. ValidationCraft acts as a
              single point of responsibility, ensuring clear ownership,
              consistent maintenance, and reliable support for all validation
              needs.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
