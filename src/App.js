import "./App.css";

import { useContext } from "react";

// Context
import { ThemeContext } from "./context/ThemeContextProvider";

// Components
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Footer from "./components/Footer/Footer";

function App() {
    const [{ themeName }] = useContext(ThemeContext);
    return (
        <div className={`${themeName} app`}>
            <Header />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <ScrollTop />
            <Footer />
        </div>
    );
}

export default App;
