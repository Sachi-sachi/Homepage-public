import "../CSS/LeftNav.css";

export default function LeftNav() {
  const navItems = [
    { id: 1, icon: "🌐", label: "Global", href: "#" },
    { id: 2, icon: "📅", label: "Calendar", href: "#" },
    { id: 3, icon: "📄", label: "Documents", href: "#" },
    { id: 4, icon: "📊", label: "Reports", href: "#" },
    { id: 5, icon: "🔧", label: "Tools", href: "#" },
    { id: 6, icon: "➕", label: "Add", href: "#" },
  ];

  return (
    <nav className="leftNav" aria-label="Secondary navigation">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="leftNav__item"
          title={item.label}
          aria-label={item.label}
        >
          <span className="leftNav__icon">{item.icon}</span>
        </a>
      ))}
    </nav>
  );
}
