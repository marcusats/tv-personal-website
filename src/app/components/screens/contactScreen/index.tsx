import { motion } from 'framer-motion';
import Reveal from '../../effects/reveal';

const ContactSection = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen text-white">
            <Reveal width='auto'>
                <motion.div className="m-auto p-8 text-center">
                    <h2 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900 mb-4">
                        Contact.
                    </h2>
                    <p className="text-lg mb-4">
                        Shoot me an email if you want to connect! You can also find me on <a href="https://www.linkedin.com/in/marcos-aurelio-salazar-torres-mast/" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-900 transition-colors duration-300"> LinkedIn</a> or <a href="https://twitter.com/Marcsast" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-900 transition-colors duration-300">Twitter</a> if that&apos;s more like you.
                    </p>
                    <a href="mailto:salazartorres.ma@gmail.com" className="text-xl font-bold bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900 bg-clip-text text-transparent hover:text-pink-900 transition-colors duration-300">
                        salazartorres.ma@gmail.com
                    </a>
                </motion.div>
            </Reveal>
        </div>
    );
};

export default ContactSection;
