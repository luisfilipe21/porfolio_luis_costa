import { AboutSection } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import "./styles/index.scss";

function App() {

  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
