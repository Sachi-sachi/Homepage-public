import "../CSS/Leadership.css";

export default function Leadership() {
  const leaders = [
    {
      id: 1,
      name: "John Doe",
      title: "Engineer",
      description: "John is engineer",
      image: null,
    },
    {
      id: 2,
      name: "John Doe",
      title: "Engineer",
      description: "John is engineer",
      image: null,
    },
    {
      id: 3,
      name: "John Doe",
      title: "Engineer",
      description: "John is engineer",
      image: null,
    },
    {
      id: 4,
      name: "John Doe",
      title: "Engineer",
      description: "John is engineer",
      image: null,
    },
    {
      id: 5,
      name: "John Doe",
      title: "Engineer",
      description: "John is engineer",
      image: null,
    },
    {
      id: 6,
      name: "John Doe",
      title: "Engineer",
      description: "John is engineer",
      image: null,
    },
    {
      id: 7,
      name: "John Doe",
      title: "Engineer",
      description: "John is engineer",
      image: null,
    },
    {
      id: 8,
      name: "John Doe",
      title: "Engineer",
      description: "John is engineer",
      image: null,
    },
  ];

  return (
    <section className="leadership">
      <div className="leadership__container">
        <h2 className="leadership__title">Our Leadership</h2>
        <div className="leadership__grid">
          {leaders.map((leader) => (
            <div key={leader.id} className="leadership__card">
              <div className="leadership__imageBox">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leadership__image"
                  />
                ) : (
                  <div className="leadership__placeholder">
                    <span className="leadership__placeholderIcon">👤</span>
                  </div>
                )}
              </div>
              <div className="leadership__content">
                <h3 className="leadership__name">{leader.name}</h3>
                <p className="leadership__jobTitle">{leader.title}</p>
                <p className="leadership__description">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
