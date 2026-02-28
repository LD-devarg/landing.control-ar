import { useEffect } from "react";
import { motion } from "motion/react";

export default function ProductDemoModal({ isOpen, onClose, demoUrl }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") onClose?.();
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-3 md:p-6"
            onClick={onClose}
            role="presentation"
        >
            <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative flex h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-slate-950"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Demo ControlAR"
            >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <p className="text-sm text-slate-200 md:text-base">
                        Demo <span className="text-blue-500 font-bold">ControlAR</span>
                    </p>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md border border-white/20 px-3 py-1 text-sm text-slate-200 hover:bg-white/10"
                    >
                        Cerrar
                    </button>
                </div>

                {demoUrl ? (
                    <iframe
                        src={demoUrl}
                        title="ControlAR Demo"
                        className="h-full w-full bg-black"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center text-slate-300">
                        Configura <code className="mx-1 rounded bg-white/10 px-1">VITE_CONTROLAR_DEMO_URL</code> para cargar la demo de prod.
                    </div>
                )}
            </motion.div>
        </div>
    );
}
