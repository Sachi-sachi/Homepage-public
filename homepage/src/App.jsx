import { useState } from "react";
import Header from "./components/JSX/Header";
import LeftNav from "./components/JSX/LeftNav";
import SideMenu from "./components/JSX/SideMenu";
import QuickLinks from "./components/JSX/QuickLinks";
import AboutFactory from "./components/JSX/AboutFactory";
import NewsSlider from "./components/JSX/NewsSlider";
import Platforms from "./components/JSX/Platforms";
import Leadership from "./components/JSX/Leadership";
import Footer from "./components/JSX/Footer";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header onMenuToggle={() => setMenuOpen((open) => !open)} />
      <LeftNav />
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="appMain" onClick={() => setMenuOpen(false)}>
        <div className="appContent">
          <div className="appContent__main">
            <AboutFactory />
            <NewsSlider />
            <Platforms />
            <Leadership />
          </div>
          <QuickLinks />
        </div>
      </main>
      <Footer />
    </div>
  );
}
