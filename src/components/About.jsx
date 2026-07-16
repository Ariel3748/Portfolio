import Icon from "./Icon";

export default function About({ profile }) {
  return (
    <section id="about" className="hero">
      <div className="container">
        <p className="eyebrow">// about</p>
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-bio">{profile.bio}</p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="file-earmark-pdf-fill" />
            Ver CV
          </a>
          <a className="btn" href="#contact">
            <Icon name="arrow-right" />
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
}
