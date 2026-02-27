    import CardProblems from "../components/CardProblems";
    import { motion } from "motion/react";

    export default function Problems() {
        return (
            <div className="h-[calc(100vh-5%)] lg:h-screen backdrop-blur-[3px] w-full flex items-center justify-center flex-col px-4 md:px-8 lg:px-10">
                <h2 className="text-center mb-5 lg:mb-3 lg:mt-16">
                    <span className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-wide font-anton text-slate-200">
                        El verdadero problema no es crecer. <br />
                        Es no tener{" "}
                        <motion.span className="text-blue-500 font-anton font-extrabold text-3xl lg:text-5xl tracking-wider [text-shadow:0_0_4px_rgba(59,130,246,0.35),0_0_12px_rgba(59,130,246,0.2)]">
                            CONTROL
                        </motion.span>
                    </span>
                </h2>

                <div className="lg:hidden w-full">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2">
                        <div className="snap-center shrink-0 w-9/10 h-[52vh]">
                            <CardProblems
                                img="/datos.png"
                                title="Falta de control centralizado"
                                description="Tu pauta, ventas y caja no hablan entre si. Asi es imposible saber tu ganancia real."
                                imgClassName="w-20 h-20 md:w-24 md:h-24"
                            />
                        </div>

                        <div className="snap-center shrink-0 w-9/10 h-[52vh]">
                            <CardProblems
                                img="/decisiones.png"
                                title="Decisiones basadas en datos incompletos"
                                description="El ROAS no es ganancia. Sin costos reales, el numero miente."
                                imgClassName="w-24 h-20 md:w-28 md:h-24"
                            />
                        </div>

                        <div className="snap-center shrink-0 w-9/10 h-[52vh]">
                            <CardProblems
                                img="/tareas.png"
                                title="Horas invertidas en tareas repetitivas"
                                description="Validar depositos y cruzar planillas no es estrategia. Es friccion operativa."
                                imgClassName="w-20 h-20 md:w-24 md:h-24"
                            />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-3 gap-6 w-full h-[68%] items-center">
                    <div className="h-[75%] w-full flex items-center justify-center">
                        <div className="w-[85%] h-full">
                            <CardProblems
                                img="/datos.png"
                                title="Falta de control centralizado"
                                description="Tu pauta, ventas y caja no hablan entre si. Asi es imposible saber tu ganancia real."
                                imgClassName="w-24 h-24"
                            />
                        </div>
                    </div>

                    <div className="h-[92%] w-full flex items-center justify-center">
                        <div className="w-full h-full">
                            <CardProblems
                                img="/decisiones.png"
                                title="Decisiones basadas en datos incompletos"
                                description="El ROAS no es ganancia. Sin costos reales, el numero miente."
                                imgClassName="w-40 h-24"
                            />
                        </div>
                    </div>

                    <div className="h-[75%] w-full flex items-center justify-center">
                        <div className="w-[85%] h-full">
                            <CardProblems
                                img="/tareas.png"
                                title="Horas invertidas en tareas repetitivas"
                                description="Validar depositos y cruzar planillas no es estrategia. Es friccion operativa."
                                imgClassName="w-24 h-24"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
