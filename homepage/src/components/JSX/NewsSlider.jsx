import { useEffect, useState } from "react";
import "../CSS/NewsSlider.css";

const newsArticles = [
  {
    title: "Latest Industry Updates",
    description:
      "Stay informed with the newest developments in technology and innovation.",
    img: "https://via.placeholder.com/400x300?text=News+1",
    date: "March 15, 2026",
  },
  {
    title: "Company Milestones Achieved",
    description:
      "Celebrating our journey and the remarkable achievements of our team.",
    img: "https://via.placeholder.com/400x300?text=News+2",
    date: "March 12, 2026",
  },
  {
    title: "Technology Breakthroughs",
    description:
      "Discover how we're pushing the boundaries of what's possible.",
    img: "https://via.placeholder.com/400x300?text=News+3",
    date: "March 10, 2026",
  },
  {
    title: "Team Expansion News",
    description:
      "We're growing! Meet our new talented members joining the organization.",
    img: "https://via.placeholder.com/400x300?text=News+4",
    date: "March 8, 2026",
  },
  {
    title: "Upcoming Events",
    description:
      "Don't miss our upcoming conferences, webinars, and networking events.",
    img: "https://via.placeholder.com/400x300?text=News+5",
    date: "March 5, 2026",
  },
];

export default function NewsSlider() {
  const [active, setActive] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Auto rotation (pauses on hover/click)
  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % newsArticles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInteracting]);

  const getStyle = (index) => {
    const diff = (index - active + newsArticles.length) % newsArticles.length;

    if (diff === 0) {
      return {
        zIndex: 5,
        opacity: 1,
        filter: "blur(0px)",
        transform: "translate(-50%, -10%) scale(1)",
      };
    }

    if (diff === 1) {
      return {
        zIndex: 4,
        opacity: 0.7,
        filter: "blur(3px)",
        transform: "translate(20%, -50%) rotateY(-15deg) scale(0.85)",
      };
    }

    if (diff === 2) {
      return {
        zIndex: 3,
        opacity: 0.4,
        filter: "blur(6px)",
        transform: "translate(90%, -120%) rotateY(-25deg) scale(0.7)",
      };
    }

    return {
      zIndex: 1,
      opacity: 0,
      filter: "blur(10px)",
      transform: "translate(-50%, -120%) scale(0.6)",
    };
  };

  return (
    <section
      className="news-slider"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <div className="news-slider__container">
        <h2>Latest News & Updates</h2>

        <div className="slider-stage">
          {newsArticles.map((item, index) => {
            const diff =
              (index - active + newsArticles.length) % newsArticles.length;
            const isCenter = diff === 0;

            return (
              <div
                key={index}
                className={`slide ${!isCenter ? "clickable" : ""}`}
                style={getStyle(index)}
                onClick={() => {
                  if (!isCenter) setActive(index);
                }}
              >
                <div className="slide-content">
                  <img src={item.img} alt={item.title} className="news-image" />
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-description">{item.description}</p>

                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
