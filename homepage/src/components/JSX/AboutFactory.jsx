import "../CSS/AboutFactory.css";

export default function AboutFactory() {
  return (
    <section className="aboutFactory">
      <div className="aboutFactory__container">
        <h2 className="aboutFactory__title">About Software Factory</h2>

        <p className="aboutFactory__text">
          Software Factory is the Software Engineering Center of Excellence for
          BMW Group. We enable modern, high-quality software development by
          providing standardized processes, tools, and methods across the
          organization.
        </p>

        <p className="aboutFactory__text">
          It accelerates delivery, improves quality, and ensures seamless
          collaboration across the entire software lifecycle (from requirements
          to continuous updates) helping teams build scalable, future‑ready
          software with confidence.
        </p>
      </div>
    </section>
  );
}
