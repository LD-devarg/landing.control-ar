import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <Link
                        to="/"
                        className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                    >
                        &larr; Volver al inicio
                    </Link>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                        Política de Privacidad
                    </h1>

                    <div className="space-y-6 text-slate-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Introducción</h2>
                            <p>
                                En LD.dev, desarrolladores de ControlAR, nos tomamos muy en serio la privacidad de nuestros usuarios y la seguridad de su información. Esta política de privacidad describe cómo recopilamos, usamos, procesamos y protegemos su información cuando utiliza nuestros servicios.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Información que recopilamos</h2>
                            <p>
                                Recopilamos diferentes tipos de información en relación con los servicios que prestamos, incluyendo:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Información de contacto y credenciales de usuario.</li>
                                <li>Datos operativos y métricas ingresadas en la plataforma ControlAR.</li>
                                <li>Información técnica sobre el uso de la aplicación (direcciones IP, tipo de navegador, sistema operativo).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. Uso de la información</h2>
                            <p>
                                Utilizamos la información recopilada para los siguientes propósitos:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                                <li>Procesar y facilitar operaciones a través del sistema orientado a control.</li>
                                <li>Analizar datos para ofrecer decisiones accionables y mejorar continuamente la arquitectura multiempresa.</li>
                                <li>Comunicarnos con los usuarios acerca de actualizaciones, soporte técnico o cambios en nuestras políticas.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Protección de datos</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas y organizativas de alto nivel para proteger su información personal y los datos de su empresa contra el acceso no autorizado, la alteración, la divulgación o destrucción. Entendemos que su infraestructura tecnológica debe ser confiable y segura.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Compartición de información</h2>
                            <p>
                                No vendemos ni alquilamos información personal a terceros. Podemos compartir información con proveedores de servicios de confianza que nos asisten en la operación de nuestra plataforma, siempre bajo estrictos acuerdos de confidencialidad.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Derechos del usuario</h2>
                            <p>
                                Usted tiene derecho a acceder, corregir, actualizar o solicitar la eliminación de su información personal en cualquier momento comunicándose con nuestro equipo de soporte.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">7. Cambios a esta política</h2>
                            <p>
                                LD.dev se reserva el derecho de actualizar esta política de privacidad según corresponda por cambios operativos o requerimientos legales. Notificaremos cualquier cambio significativo publicando la nueva política en esta página.
                            </p>
                        </section>

                        <section className="pt-4 border-t border-slate-800">
                            <p className="text-sm text-slate-400">
                                Última actualización: {new Date().toLocaleDateString('es-AR')}
                            </p>
                            <p className="text-sm text-slate-400 mt-2">
                                Para consultas o mayor información, por favor contacte a nuestro equipo a través de los canales oficiales.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
