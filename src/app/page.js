"use client";

import { useState } from "react";
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
import DevTerminal from "./components/DevTerminal";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";
import Toast from "./components/Toast";

export default function Home() {
    const [toast, setToast] = useState("");

    const showToast = (msg) => {
        setToast(msg);
        window.setTimeout(() => setToast(""), 2200);
    };

    return (
        <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-sky-300 selection:text-black">
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[#05070c]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.12),_transparent_55%)]" />
                <div className="site-grain absolute inset-0 opacity-40" />
            </div>

            <ScrollProgress />
            <CommandPalette onToast={showToast} />
            <Toast message={toast} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />
            </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section id="home">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="terminal">
                    <DevTerminal />
                </section>
                <section id="experience">
                    <Experience />
                </section>
            </main>

            <section id="education" className="w-full">
                <EducationHero />
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section id="skills">
                    <Skills />
                </section>
                <section id="certifications">
                    <Certifications />
                </section>
                <section id="projects">
                    <Projects />
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
