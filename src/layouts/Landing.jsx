import { motion, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Problems from '../pages/Problems';
import Us from '../pages/Us';
import ProductDemoModal from "../components/ProductDemoModal";


export default function Landing() {
    const containerRef = useRef(null);
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const demoUrl = import.meta.env.VITE_CONTROLAR_DEMO_URL || "";
    const { scrollYProgress } = useScroll({ container: containerRef });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollToSection = (sectionId) => {
        const container = containerRef.current;
        if (!container) return;

        const section = container.querySelector(`#${sectionId}`);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div
            ref={containerRef}
            className="h-screen w-full overflow-y-auto scroll-smooth snap-y snap-proximity lg:snap-mandatory"
            style={{ backgroundImage: "url('/fondo5.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Navbar onNavigate={scrollToSection} />
            <section id="home" className="snap-start min-h-screen">
                <Home onNavigate={scrollToSection} onOpenDemo={() => setIsDemoOpen(true)} />
            </section>
            <section id="problems" className="snap-start min-h-screen">
                <Problems />
            </section>
            <section id="about" className="snap-start min-h-screen">
                <About scrollContainerRef={containerRef} />
            </section>
            <section id="us" className="snap-start min-h-screen">
                <Us />
            </section>
            <motion.div
                className="fixed left-0 right-0 bottom-0 h-1 bg-white/80 origin-left z-50"
                style={{ scaleX }}
            />
            <ProductDemoModal
                isOpen={isDemoOpen}
                demoUrl={demoUrl}
                onClose={() => setIsDemoOpen(false)}
            />
        </div>
    );
}
