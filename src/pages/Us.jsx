import { useState } from "react";
import { motion } from "motion/react";
import EcosystemModal from "../components/EcosystemModal";

const ldCapabilities = [
    "Desarrollo de software propio",
    "Arquitectura multiempresa",
    "Sistemas orientados a control",
    "Diseno enfocado en operacion",
    "Análisis de datos para decision",
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
            "Estructura de pauta con foco en rentabilidad operativa: lectura por embudo, control de gasto y optimización por objetivo.",
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
        <div className="relative w-full px-4 pb-12 pt-24 md:px-8 lg:px-12">
            <div className="mb-4 flex w-full justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                    Quienes somos
                </p>
            </div>
            <div className="mx-auto w-full rounded-3xl border border-white/15 bg-slate-950/45 p-3 backdrop-blur-md md:p-4">
                <header className="mx-auto max-w-4xl text-center">
                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
                        Somos infraestructura tecnológica.
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-xl">
                        LD.dev desarrolla herramientas propias orientadas a control operativo y toma de decisiones.
                    </p>
                </header>

                <section className="mt-1 grid items-stretch gap-6 lg:mt-2 lg:grid-cols-[2fr_1fr]">
                    <article className="rounded-2xl border border-white/10 bg-black/25 p-6">
                        <h3 className="text-2xl font-semibold text-slate-100 md:text-3xl">
                            <span className="font-anton text-5xl tracking-wide text-white">LD</span>
                            <span className="ml-1 inline-block bg-gradient-to-r from-blue-300 to-blue-950 bg-clip-text font-anton text-2xl font-light tracking-wider text-transparent">
                                .dev
                            </span>
                        </h3>
                        <ul className="mt-6 grid grid-flow-col grid-rows-4 gap-x-8 gap-y-3 text-base text-slate-300 md:text-lg">
                            {ldCapabilities.map((item) => (
                                <motion.li key={item} {...listItemAnimation}>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-2xl border border-white/10 bg-black/25 p-6">
                        <h3 className="text-4xl font-semibold tracking-tight text-slate-100 md:text-5xl">
                            Ecosistema
                        </h3>
                        <ul className="mt-6 grid grid-flow-col grid-rows-2 gap-x-8 gap-y-3 text-2xl font-light tracking-wider">
                            {ecosystemUnits.map((unit) => (
                                <motion.li key={unit.label} {...listItemAnimation}>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedUnit(unit)}
                                        className="rounded-md px-1 py-0.5 transition cursor-pointer hover:bg-white/5"
                                    >
                                        <span className={unit.className}>{unit.label}</span>
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-slate-400">
                            Click en cada area para ver funcionalidades.
                        </p>
                    </article>
                </section>

                <footer className="mx-auto mt-6 text-center lg:mt-4">
                    <h4 className="text-2xl font-semibold text-slate-100 md:text-3xl">
                        <span className="text-blue-900">ControlAR</span>
                    </h4>
                    <p className="mt-2 text-lg leading-relaxed text-slate-200 md:text-xl">
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
                <div className="w-full pt-4">
                    <p className="text-center text-sm text-slate-400">
                        &copy; 2026 LD.dev. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
