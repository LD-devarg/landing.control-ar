import { motion } from 'motion/react';

export default function CardProblems({ img, title, description, imgClassName = "", className = "" }) {
    return (
        <motion.div className={`bg-gradient-to-b from-white/10 via-blue-950/20 to-black/50 backdrop-blur-[2px] rounded-lg p-4 md:p-6 flex flex-col items-center text-center justify-center hover:shadow-none w-full h-full ${className}`}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex flex-col h-full">
                <div className="flex h-3/10 w-full items-end justify-center mb-2">
                    <h3 className="text-4xl font-bold text-white font-roboto mb-2">{title}</h3>
                </div>
                <div className="flex h-5/10 w-full items-center justify-center">
                    <p className="text-2xl text-white font-light font-roboto">{description}</p>
                </div>
                <div className={`flex w-full h-2/10 items-start justify-center ${imgClassName}`}>
                    <img src={img} alt={title} className={`h-auto object-contain ${imgClassName}`} />
                </div>
            </div>

        </motion.div>
    );
}
