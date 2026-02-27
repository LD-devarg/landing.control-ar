import { useState } from "react";

export default function Navbar({ onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigate = (sectionId) => {
        onNavigate?.(sectionId);
        setIsOpen(false);
    };

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] md:w-[70%] lg:w-[50%] z-50">
            <nav className="relative bg-transparent backdrop-blur-[5px] border border-white/70 p-2 rounded-2xl md:rounded-full bg-opacity-50">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white text-lg font-bold">
                        <img src="/controlar_blanco_sin_texto.png" alt="Controlar Logo" className="h-10 w-10 ml-3 md:ml-6" />
                    </div>

                    <div className="hidden md:flex">
                        <button
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            onClick={() => handleNavigate('home')}
                        >
                            Inicio
                        </button>
                        <button
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            onClick={() => handleNavigate('problems')}
                        >
                            Qué resolvemos
                        </button>
                        <button
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            onClick={() => handleNavigate('about')}
                        >
                            Acerca de
                        </button>
                        <button
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            onClick={() => handleNavigate('us')}
                        >
                            Quiénes somos
                        </button>
                    </div>

                    <button
                        type="button"
                        className="md:hidden text-white p-2 rounded-lg mr-1"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <span className="block w-6 h-0.5 bg-white mb-1.5" />
                        <span className="block w-6 h-0.5 bg-white mb-1.5" />
                        <span className="block w-6 h-0.5 bg-white" />
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-2 px-2 pb-2">
                        <div className="flex flex-col rounded-xl border border-white/25 bg-black/30 backdrop-blur-md overflow-hidden">
                            <button
                                className="text-left text-gray-200 hover:text-white hover:bg-white/10 px-4 py-3 text-sm font-medium"
                                onClick={() => handleNavigate('home')}
                            >
                                Home
                            </button>
                            <button
                                className="text-left text-gray-200 hover:text-white hover:bg-white/10 px-4 py-3 text-sm font-medium"
                                onClick={() => handleNavigate('problems')}
                            >
                                Problems
                            </button>
                            <button
                                className="text-left text-gray-200 hover:text-white hover:bg-white/10 px-4 py-3 text-sm font-medium"
                                onClick={() => handleNavigate('about')}
                            >
                                About
                            </button>
                            <button
                                className="text-left text-gray-200 hover:text-white hover:bg-white/10 px-4 py-3 text-sm font-medium"
                                onClick={() => handleNavigate('about')}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
