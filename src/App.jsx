import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<p>Loading...</p>}>
        <main>
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
      </Suspense>
    </>
  );
}

export default App;