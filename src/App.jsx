import { AboutSection } from "./components/About";
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
      </main>
    </>
  )
}

export default App
