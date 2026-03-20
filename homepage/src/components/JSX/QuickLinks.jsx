import "../CSS/QuickLinks.css";
import bmwLogo from "../../assets/bti-logo.png";
import ppleLogo from "../../assets/pple.png";
import courseraLogo from "../../assets/coursera.png";
import partnerLogo from "../../assets/partner.jpg";
import empLogo from "../../assets/emp.jpg";
import avyensLogo from "../../assets/ayvens.jpg";
import mytripLogo from "../../assets/mytrip.png";
import zohoLogo from "../../assets/zoho.png";
import pr2poLogo from "../../assets/prpo.jpg";
import complimityLogo from "../../assets/comp.jpg";
import btiAnalyticsLogo from "../../assets/analytics.jpg";

export default function QuickLinks() {
  const quickLinks = [
    { id: 1, name: "BMW TechWorks India Site", icon: bmwLogo },
    {
      id: 2,
      name: "Seat Booking - Login",
      icon: null,
    },
    { id: 3, name: "ITConnect - IT Support System", icon: null },
    { id: 4, name: "PeopleStrong - BTI's HRMS System", icon: ppleLogo },
    { id: 5, name: "Coursera - BTI Learning Management", icon: courseraLogo },
    { id: 6, name: "Benefits You - Employee Insurance", icon: null },
    { id: 7, name: "BMW Partner Academy", icon: partnerLogo },
    { id: 8, name: "Viva Engage", icon: null },
    {
      id: 11,
      name: "Emplause - BTI Rewards & Recognition Platform",
      icon: empLogo,
    },
    { id: 12, name: "My Ayvens - Car Lease Portal", icon: avyensLogo },
    { id: 13, name: "MakeMyTrip - Our Travel Desk", icon: mytripLogo },
    { id: 14, name: "Zoho Expense - Reimbursement System", icon: zohoLogo },
    { id: 15, name: "PR2PO - Purchase Requisitions System", icon: pr2poLogo },
    {
      id: 16,
      name: "BTI Analytics (only for Leadership)",
      icon: btiAnalyticsLogo,
    },
    {
      id: 17,
      name: "Complimity - Compliance Management",
      icon: complimityLogo,
    },
  ];

  return (
    <aside className="quickLinks">
      <h3 className="quickLinks__title">Quick Links</h3>
      <nav className="quickLinks__list">
        {quickLinks.map((link) => (
          <a key={link.id} href="#" className="quickLinks__item">
            <div className="quickLinks__iconBox">
              {link.icon ? (
                <img
                  src={link.icon}
                  alt={link.name}
                  className="quickLinks__icon"
                />
              ) : (
                <span className="quickLinks__placeholder">📱</span>
              )}
            </div>
            <span className="quickLinks__name">{link.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
