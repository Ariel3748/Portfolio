import Icon from "./Icon";

export default function Contact({ profile }) {
  const items = [
    profile.email && {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: "envelope-fill",
    },
    profile.github && {
      label: "GitHub",
      value: profile.github.replace(/^https?:\/\//, ""),
      href: profile.github,
      icon: "github",
    },
    profile.linkedin && {
      label: "LinkedIn",
      value: profile.linkedin.replace(/^https?:\/\//, ""),
      href: profile.linkedin,
      icon: "linkedin",
    },
    profile.location && {
      label: "Ubicación",
      value: profile.location,
      href: null,
      icon: "geo-alt-fill",
    },
  ].filter(Boolean);

  return (
    <section id="contact">
      <div className="container">
        <p className="eyebrow">// contact</p>
        <h2 className="section-title">Contacto</h2>

        <div className="contact-grid">
          {items.map((item) => {
            const content = (
              <>
                <span className="contact-card-icon">
                  <Icon name={item.icon} />
                </span>
                <span>
                  <p className="contact-card-label">{item.label}</p>
                  <p className="contact-card-value">{item.value}</p>
                </span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                className="contact-card"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="contact-card">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
