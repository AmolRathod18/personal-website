"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import EducationHero from "./components/EducationHero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Footer } from "./components/atoms/Footer";
import ScrollToTop from "./components/atoms/ScrollToTop";

// Background speckles component - Optimized for mobile
const BackgroundSpeckles = ({ isHydrated }) => {
    const [speckles1, setSpeckles1] = useState([]);
    const [speckles2, setSpeckles2] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        // Reduce speckles count on mobile for better performance
        const count1 = isMobile ? 30 : 80;
        const count2 = isMobile ? 20 : 60;
        
        // Generate speckles only on client
        const s1 = [...Array(count1)].map((_, i) => ({
            id: i,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.7 + 0.3,
            blur: isMobile ? Math.random() * 5 + 3 : Math.random() * 10 + 5,
            blurOpacity: Math.random() * 0.8 + 0.2,
        }));
        
        const s2 = [...Array(count2)].map((_, i) => ({
            id: i,
            width: Math.random() * 1.5 + 1,
            height: Math.random() * 1.5 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 15 + Math.random() * 25,
            delay: Math.random() * 8,
            blueOpacity: Math.random() * 0.6 + 0.4,
            blur: isMobile ? Math.random() * 6 + 3 : Math.random() * 12 + 5,
            blurBlueOpacity: Math.random() * 0.8 + 0.2,
        }));

        setSpeckles1(s1);
        setSpeckles2(s2);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, [isMobile]);

    if (!isHydrated || speckles1.length === 0) return null;

    return (
        <>
            {/* Moving speckles of light - Layer 1 - Optimized */}
            <div className="absolute inset-0 opacity-60 will-change-transform">
                {speckles1.map((s) => (
                    <div
                        key={`speckle-1-${s.id}`}
                        className="absolute bg-white rounded-full will-change-transform"
                        style={{
                            width: s.width + 'px',
                            height: s.height + 'px',
                            left: s.left + '%',
                            top: s.top + '%',
                            animation: `float-speckle ${s.duration}s linear infinite`,
                            animationDelay: s.delay + 's',
                            opacity: s.opacity,
                            boxShadow: `0 0 ${s.blur}px rgba(255,255,255,${s.blurOpacity})`,
                            transform: 'translateZ(0)'
                        }}
                    ></div>
                ))}
            </div>

            {/* Moving speckles of light - Layer 2 (with blue tint) - Optimized */}
            <div className="absolute inset-0 opacity-40 will-change-transform">
                {speckles2.map((s) => (
                    <div
                        key={`speckle-2-${s.id}`}
                        className="absolute rounded-full will-change-transform"
                        style={{
                            width: s.width + 'px',
                            height: s.height + 'px',
                            left: s.left + '%',
                            top: s.top + '%',
                            animation: `float-speckle-reverse ${s.duration}s linear infinite`,
                            animationDelay: s.delay + 's',
                            background: `rgba(135, 206, 250, ${s.blueOpacity})`,
                            boxShadow: `0 0 ${s.blur}px rgba(135, 206, 250, ${s.blurBlueOpacity})`,
                            transform: 'translateZ(0)'
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default function Home() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-gray-300 selection:text-black relative">
            {/* Dark Textured Black Background with Moving Speckles - Optimized */}
            <div className="fixed top-0 -z-10 h-full w-full bg-black overflow-hidden will-change-transform" suppressHydrationWarning>
                {/* Base dark textured background */}
                <div className="absolute inset-0 bg-black opacity-95"></div>
                
                {/* Texture overlay - Lighter on mobile */}
                <div className="absolute inset-0 opacity-5 md:opacity-10" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E")',
                    backgroundSize: '400px 400px'
                }}></div>

                {/* Moving speckles - pass hydration state */}
                <BackgroundSpeckles isHydrated={isHydrated} />

                {/* Subtle blue glow in background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent opacity-30"></div>

                {/* CSS animations - Optimized */}
                <style jsx>{`
                    @keyframes float-speckle {
                        0%, 100% {
                            transform: translateY(0) translateX(0) translateZ(0);
                        }
                        25% {
                            transform: translateY(-100px) translateX(50px) translateZ(0);
                        }
                        50% {
                            transform: translateY(-200px) translateX(-50px) translateZ(0);
                        }
                        75% {
                            transform: translateY(-300px) translateX(30px) translateZ(0);
                        }
                    }
                    
                    @keyframes float-speckle-reverse {
                        0%, 100% {
                            transform: translateY(100vh) translateX(0) translateZ(0);
                        }
                        25% {
                            transform: translateY(75vh) translateX(-50px) translateZ(0);
                        }
                        50% {
                            transform: translateY(50vh) translateX(50px) translateZ(0);
                        }
                        75% {
                            transform: translateY(25vh) translateX(-30px) translateZ(0);
                        }
                    }
                        }
                        50% {
                            transform: translateY(50vh) translateX(50px);
                        }
                        75% {
                            transform: translateY(25vh) translateX(-30px);
                        }
                        100% {
                            transform: translateY(0) translateX(0);
                        }
                    }
                `}</style>
            </div>

            <div className="w-full">
                <div className="w-full bg-gradient-to-b from-black via-gray-950 to-black">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Navbar />
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <section id="home">
                            <Hero />
                        </section>
                        <section id="about">
                            <About />
                        </section>
                    </div>
                </div>
            </div>
            
            {/* Full-width Education Hero Banners - Replaces Education Section */}
            <section id="education" className="w-full">
                <EducationHero />
            </section>
            
            <div className="w-full bg-gradient-to-b from-black via-gray-950 to-black">
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
                        <Contact />
                    </section>
                    <Footer />
                </div>
            </div>
            
            {/* Scroll to Top Button */}
            <ScrollToTop />
        </div>
    );
}
