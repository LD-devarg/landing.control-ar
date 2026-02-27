import { useEffect } from "react";
import { motion } from "motion/react";

export default function EcosystemModal({ isOpen, onClose, item }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") onClose?.();
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen || !item) return null;

    return (
        <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4"
            onClick={onClose}
            role="presentation"
        >
            <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="relative w-full max-w-4xl rounded-2xl border border-white/15 bg-slate-950 p-4 shadow-2xl md:p-6"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`Detalles de ${item.label}`}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 rounded-md border border-white/20 px-3 py-1 text-sm text-slate-200 hover:bg-white/10"
                >
                    Cerrar
                </button>

                <div className="grid gap-6 pt-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                            Area
                        </p>
                        <h3 className="mt-2 text-4xl font-semibold text-slate-100">
                            <span className={item.className}>{item.label}</span>
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                            {item.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
