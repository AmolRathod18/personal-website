"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import EducationHero from "./components/EducationHero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Footer } from "./components/atoms/Footer";
import ScrollToTop from "./components/atoms/ScrollToTop";
import Experience from "./components/Experience";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";
import Toast from "./components/Toast";
import ToolsMarquee from "./components/ToolsMarquee";
import PortfolioIntro from "./components/PortfolioIntro";

export default function Home() {
    const [toast, setToast] = useState("");
    const [theme, setTheme] = useState("silver");

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("portfolio-theme");
        if (savedTheme === "dark") setTheme("dark");
    }, []);

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const nextTheme = currentTheme === "silver" ? "dark" : "silver";
            window.localStorage.setItem("portfolio-theme", nextTheme);
            return nextTheme;
        });
    };

    const showToast = (msg) => {
        setToast(msg);
        window.setTimeout(() => setToast(""), 2200);
    };

    return (
        <div className={`portfolio-light ${theme === "dark" ? "portfolio-dark" : ""} relative overflow-x-clip antialiased selection:bg-neutral-400 selection:text-white`}>
            <PortfolioIntro />
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[#e5e6e8]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,_rgba(255,255,255,0.78),_transparent_48%),radial-gradient(ellipse_at_85%_30%,_rgba(177,181,184,0.24),_transparent_46%)]" />
                <div className="field-grid absolute inset-0 opacity-50" />
                <div className="site-grain absolute inset-0 opacity-20" />
            </div>

            <ScrollProgress />
            <CommandPalette onToast={showToast} />
            <Toast message={toast} />

            <div className="site-shell sticky top-3 z-50 mx-auto px-4 sm:px-6 lg:px-10 2xl:px-14">
                <Navbar theme={theme} onToggleTheme={toggleTheme} />
            </div>

            <main className="site-shell mx-auto px-4 sm:px-6 lg:px-10 2xl:px-14">
                <section id="home">
                    <Hero />
                </section>
                <ToolsMarquee />
                <section id="projects">
                    <Projects />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="about">
                    <About />
                </section>
            </main>

            <section id="education" className="w-full">
                <EducationHero />
            </section>

            <div className="site-shell mx-auto px-4 sm:px-6 lg:px-10 2xl:px-14">
                <section id="skills">
                    <Skills />
                </section>
                <section id="certifications">
                    <Certifications />
                </section>
                <section id="contact">
                    <Contact onToast={showToast} />
                </section>
                <Footer />
            </div>

            <ScrollToTop />
        </div>
    );
}
