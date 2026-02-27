import { motion } from 'motion/react';
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';


export default function Home({ onNavigate }) {
    return (
        <div className="h-[calc(100vh-20%)] lg:h-screen backdrop-blur-[3px] w-full flex items-center justify-center">
            <div className='flex flex-col lg:flex-row mt-[calc(100vh/4)] lg:mt-25 w-full h-full items-center justify-between'>
                <div className='flex flex-col w-full lg:w-4/10 h-4/10 lg:h-5/10 items-center lg:items-start justify-center lg:justify-start lg:ml-10 lg:pt-5 pl-2 lg:pl-10 '>
                    <motion.h1 className="text-3xl font-bold text-white text-center lg:text-left mb-4 lg:mb-8"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >Bienvenido a <br /><motion.span className="text-blue-700 [text-shadow:0_0_4px_rgba(59,130,246,0.35),0_0_12px_rgba(59,130,246,0.2)] text-5xl">ControlAR</motion.span></motion.h1>
                    <motion.h2 className="text-2xl text-white text-center lg:text-left mb-4 lg:mb-8"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >Un sistema pensado por <motion.span className="text-blue-500 font-bold">profesionales para profesionales</motion.span></motion.h2>
                    <motion.p className="text-xl text-white text-center lg:text-left mb-4 lg:mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >Tu operativa, tus resultados, al alcance de tu mano.</motion.p>
                    <div className='flex flex-row gap-3'>
                        <Button
                            className="px-2 lg:px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
                            onClick={() => onNavigate?.('problems')}
                            variant="contained"
                            endIcon={<PlayCircleFilledWhiteOutlinedIcon />}
                        >
                            <span className="inline-flex items-center gap-2">
                                Comenzar
                            </span>
                        </Button>
                        <Button
                            className="px-2 lg:px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
                            onClick={() => window.open('https://wa.me/5492236200677/?text=Hola,%20quiero%20contactar%20con%20un%20asesor', '_blank', 'noopener,noreferrer')}
                            variant="contained"
                            endIcon={<AddIcCallOutlinedIcon />}
                        >
                            Contactar Asesor
                        </Button>
                    </div>
                </div>
                <div className='flex w-full lg:w-6/10 flex-1 lg:h-6/10 px-2 lg:px-10 items-start mt-6 lg:mt-0 lg:items-center justify-center'>
                    <motion.img
                        src="/recorte-inicio-1.png"
                        alt="Ilustración de bienvenida"
                        className="w-full h-auto rounded-xl shadow-xl shadow-gray-900/50 object-cover hover:scale-105 transition-transform duration-300"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    />
                </div>
            </div>
        </div>
    );
}
