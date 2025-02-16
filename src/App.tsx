import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Resume from "./components/pages/Resume";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-primary relative z-0">
              <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
