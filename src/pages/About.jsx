import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const slides = [
  {
    title: "ControlAR no es solo un dashboard",
    subtitle: "Es una estructura de control operativo",
    description:
      "Disenado para consolidar ventas, pauta y caja en un solo flujo de lectura y decision.",
    image: "/recorte-stats-pauta-1.png",
    alt: "Vista de metricas de pauta 1",
    bullets: [
      "Lectura centralizada del negocio.",
      "Datos accionables en tiempo real.",
      "Menos dispersion entre herramientas.",
    ],
  },
  {
    title: "Control de pauta",
    subtitle: "Marketing con trazabilidad completa",
    description:
      "Visualiza el rendimiento por campana, adset y anuncio para tomar decisiones de inversion mas precisas.",
    image: "/recorte-stats-pauta-2.png",
    alt: "Vista de metricas de pauta 2",
    tipoEstructura: "secundaria",
    bullets: [
      "KPIs configurables por etapa de negocio.",
      "Alertas para detectar desbalances rapido.",
      "Historial estructurado para ver tendencias.",
    ],
  },
  {
    title: "Control financiero",
    subtitle: "Caja e indicadores en un mismo panel",
    description:
      "Consolida ingresos, egresos y retiros en una lectura clara de margen real.",
    image: "/recorte-stats-pauta-3.png",
    alt: "Vista de metricas de pauta 3",
    tipoEstructura: "financiera",
    bullets: [
      "Seguimiento de flujo diario sin planillas.",
      "Ganancia real visible por corte temporal.",
      "Menos carga operativa, mas capacidad de analisis.",
    ],
  },
  {
    title: "Operacion lista para escalar",
    subtitle: "Acceso simple, estructura robusta",
    description:
      "Una implementacion orientada a equipos que necesitan visibilidad, control y velocidad para decidir.",
    image: "/recorte-login.png",
    alt: "Pantalla de acceso",
    imageFit: "contain",
    bullets: [
      "Interfaz clara para todo el equipo.",
      "Proceso operativo con menos friccion.",
      "Base solida para crecimiento sostenido.",
    ],
  },
  {
    title: "El control no es un reporte.",
    subtitle: "Es una estructura",
    description:
      "ControlAR organiza datos, procesos y equipos bajo una misma lógica operativa.",
    tipoEstructura: "cierre",
    bullets: [
      "Multiempresa.",
      "Roles y permisos definidos.",
      "Trazabilidad.",
      "Automatizacion de tareas repetitivas.",
      "Historial estructurado"
    ],
  },
];

export default function About({ scrollContainerRef }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const slideSteps = slides.length - 1;
  const snappedProgress = useTransform(scrollYProgress, (value) => {
    if (slideSteps <= 0) return 0;
    return Math.round(value * slideSteps) / slideSteps;
  });
  const smoothSnappedProgress = useSpring(snappedProgress, {
    stiffness: 260,
    damping: 36,
    mass: 0.35,
  });

  const endX = `${(-100 * (slides.length - 1)) / slides.length}%`;
  const x = useTransform(smoothSnappedProgress, [0, 1], ["0%", endX]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: `calc(100vh + ${slides.length * 25}vh)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{ x, width: `${slides.length * 100}vw` }}
        >

          {slides.map((slide) => {
            const isFinancial = slide.tipoEstructura === "financiera";
            const isSecondary = slide.tipoEstructura === "secundaria";
            const isCierre = slide.tipoEstructura === "cierre";
            const backgroundClass = isFinancial
              ? "bg-gradient-to-r from-blue-900/10 to-transparent"
              : isSecondary
              ? "bg-gradient-to-r from-blue-900/20 to-blue-900/10"
              : "bg-gradient-to-r from-slate-900/30 to-slate-900/10";
            const gridColsClass =
              isSecondary
                ? "lg:grid-cols-[35%_65%]"
                : isFinancial
                ? "lg:grid-cols-[65%_35%]"
                : "lg:grid-cols-2";

            const textBlock = (
              <div>
                <h2 className="text-2xl font-bold tracking-wide text-slate-100 md:text-3xl lg:text-4xl">
                  {slide.title}
                </h2>
                <p className="mt-2 text-base text-blue-200 md:text-lg">
                  {slide.subtitle}
                </p>
                <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base lg:text-lg">
                  {slide.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-200 md:text-base">
                  {slide.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            );

            const imageBlock = (
              <div
                className={`overflow-hidden rounded-xl ${
                  slide.imageFit === "contain" ? "scale-70" : ""
                } border border-white/10 bg-black/30`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full ${
                    slide.imageFit === "contain"
                      ? "object-contain bg-black p-3"
                      : "object-cover"
                  }`}
                />
              </div>
            );

            const cierreBlock = (
              <div className="w-full px-6 py-24 md:px-16 lg:px-32">
                <div className="mx-auto max-w-6xl">
                  
                  {/* TITULOS */}
                  <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-wide text-slate-100 md:text-4xl lg:text-5xl">
                      {slide.title}
                    </h2>

                    <h3 className="text-xl font-medium text-slate-300 md:text-2xl lg:text-3xl">
                      {slide.subtitle}
                    </h3>
                  </div>

                  {/* CONTENIDO */}
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">

                    {/* DESCRIPCION */}
                    <div>
                      <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                        {slide.description}
                      </p>
                    </div>

                    {/* BULLETS */}
                    <div>
                      <ul className="space-y-4 text-sm md:text-base text-slate-200">
                        {slide.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            );

            return (
              <article
                key={slide.title}
                className="h-screen w-screen flex-shrink-0 px-4 py-10 md:px-8 lg:px-12 lg:py-20"
              >
                <div className="flex w-full justify-center mt-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                    About ControlAR
                  </p>
                </div> 
                {isCierre ? (
                  <div
                    className={`mx-auto flex h-full w-9/10 items-center justify-center rounded-2xl border border-white/15 p-5 backdrop-blur-[2px] lg:mt-4 lg:px-8 lg:py-4 ${backgroundClass}`}
                  >
                    {cierreBlock}
                  </div>
                ) : (
                  <div className={`mx-auto flex h-full w-9/10 flex-col justify-center rounded-2xl border border-white/15 p-5 backdrop-blur-[2px] lg:mt-4 lg:px-8 lg:py-4 ${backgroundClass}`}>
                    <div className={`grid grid-cols-1 items-center gap-6 ${gridColsClass}`}>
                      {isFinancial ? imageBlock : textBlock}
                      {isFinancial ? textBlock : imageBlock}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
