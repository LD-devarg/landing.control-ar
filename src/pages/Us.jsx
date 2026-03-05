import { useState } from "react";
import { motion } from "motion/react";
import EcosystemModal from "../components/EcosystemModal";

const ldCapabilities = [
    "Desarrollo de software propio",
    "Arquitectura multiempresa",
    "Sistemas orientados a control",
    "Diseño enfocado en operacion",
    "Análisis de datos para decisión",
    "Ciencia de datos aplicada a negocio",
    "Consultoría administrativa y financiera",
];

const ecosystemUnits = [
    {
        label: ".web",
        image: "/web_fondo_negro.png",
        alt: "Vista del area web",
        description:
            "Diseño y desarrollo de aplicaciones web, ecommerce, plataformas digitales y soluciones a medida.",
        className:
            "inline-block bg-gradient-to-b from-green-950 to-lime-400 bg-clip-text text-transparent",
    },
    {
        label: ".ads",
        image: "/ads_fondo_negro.png",
        alt: "Vista del area ads",
        description:
            "Estructura de pauta con foco en rentabilidad operativa: lectura por embudo, control de gasto y optimizacion por objetivo.",
        className:
            "inline-block bg-gradient-to-r from-pink-400 via-pink-500 to-purple-950 bg-clip-text text-transparent",
    },
    {
        label: ".data",
        image: "/data_fondo_negro.png",
        alt: "Vista del area data",
        description:
            "Modelado y consolidación de datos para convertir información dispersa en decisiones accionables para negocio y equipo.",
        className:
            "inline-block bg-gradient-to-r from-zinc-700/80 via-slate-200 to-zinc-700/80 bg-clip-text text-transparent",
    },
    {
        label: ".ops",
        image: "/ops_fondo_negro.png",
        alt: "Vista del area ops",
        description:
            "Diseño de procesos operativos y automatizaciones para reducir fricción, estandarizar tareas y escalar con trazabilidad.",
        className:
            "inline-block bg-gradient-to-r from-orange-900 to-orange-400 bg-clip-text text-transparent",
    },
    {
        label: ".bsns",
        image: "/bsns_fondo_negro.png",
        alt: "Vista del area bsns",
        description:
            "Capa estratégica del ecosistema: definición de indicadores, estructura financiera y dirección para crecimiento sostenible.",
        className:
            "inline-block bg-gradient-to-r from-slate-400 via-slate-700 to-slate-400 bg-clip-text text-transparent",
    },
];

const listItemAnimation = {
    initial: { opacity: 0, x: -16 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.35, ease: "easeOut" },
    whileHover: { x: 6 },
};

export default function Us() {
    const [selectedUnit, setSelectedUnit] = useState(null);

    return (
        <div className="relative w-full px-3 pb-2 pt-22 sm:px-4 md:px-8 lg:px-12">
            <div className="mb-3 flex w-full justify-center sm:mb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:text-xs sm:tracking-[0.28em]">
                    Quienes somos
                </p>
            </div>

            <div className="mx-auto w-full rounded-2xl border border-white/15 bg-slate-950/45 p-3 backdrop-blur-md sm:rounded-3xl sm:p-4 md:p-5">
                <header className="mx-auto max-w-4xl text-center">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:mt-3 sm:text-4xl md:text-5xl">
                        Somos infraestructura tecnologica.
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base md:text-xl">
                        LD.dev desarrolla herramientas propias orientadas a control operativo y toma de decisiones.
                    </p>
                </header>

                <section className="mt-4 grid items-stretch gap-4 sm:gap-5 lg:mt-5 lg:grid-cols-[2fr_1fr]">
                    <article className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-6">
                        <div className="flex justify-center h-25 w-25 mb-0">
                            <img src="/dev_blanco_sf.png" alt="Logo LD.dev" />
                        </div>

                        <ul className="grid grid-cols-1 gap-y-2 text-sm text-slate-300 sm:grid-flow-col sm:grid-rows-4 sm:gap-x-8 sm:gap-y-3 sm:text-base md:text-lg">
                            {ldCapabilities.map((item) => (
                                <motion.li key={item} {...listItemAnimation}>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-6">
                        <h3 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl md:text-5xl">
                            Ecosistema
                        </h3>

                        <ul className="mt-4 grid grid-cols-2 gap-2 text-xl font-light tracking-wider sm:mt-6 sm:grid-flow-col sm:grid-rows-2 sm:gap-x-8 sm:gap-y-3 sm:text-2xl">
                            {ecosystemUnits.map((unit) => (
                                <motion.li key={unit.label} {...listItemAnimation}>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedUnit(unit)}
                                        className="w-full rounded-md px-1 py-0.5 text-left transition cursor-pointer hover:bg-white/5"
                                    >
                                        <span className={unit.className}>{unit.label}</span>
                                    </button>
                                </motion.li>
                            ))}
                        </ul>

                        <p className="mt-4 text-xs text-slate-400 sm:mt-6 sm:text-sm">
                            Click en cada area para ver funcionalidades.
                        </p>
                    </article>
                </section>

                <footer className="mx-auto mt-5 text-center lg:mt-4">
                    <h4 className="text-xl font-semibold text-slate-100 sm:text-2xl md:text-3xl">
                        <span className="text-blue-900">ControlAR</span>
                    </h4>
                    <p className="mt-2 text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
                        Es una app creada por este ecosistema para clientes que necesitan convertir datos dispersos en estructura operativa.
                    </p>
                </footer>
            </div>

            <EcosystemModal
                isOpen={Boolean(selectedUnit)}
                item={selectedUnit}
                onClose={() => setSelectedUnit(null)}
            />

            <footer>
                <div className="w-full flex flex-col items-center gap-2 pt-2">
                    <p className="text-center text-xs text-slate-400 sm:text-sm">
                        &copy; 2026 LD.dev. Todos los derechos reservados.
                    </p>
                    <a
                        href="/politica-privacidad"
                        className="text-center text-xs text-slate-400 underline underline-offset-2 transition-colors hover:text-slate-200 sm:text-sm"
                    >
                        Política de Privacidad
                    </a>
                </div>
            </footer>
        </div>
    );
}
