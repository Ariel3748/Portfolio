import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profile from "./data/profile.json";

export default function App() {
  return (
    <div id="top">
      <Header name={profile.name} />
      <main>
        <About profile={profile} />
        <Projects />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </div>
  );
}
