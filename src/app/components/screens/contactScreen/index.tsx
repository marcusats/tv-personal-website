import { motion } from 'framer-motion';
import Reveal from '../../effects/reveal';

const ContactSection = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen text-white px-4 sm:px-8">
            <Reveal width='auto'>
                <motion.div className="m-auto p-4 sm:p-8 text-center">
                    {/* Adjust the heading size for smaller screens */}
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900 mb-2 sm:mb-4">
                        Contact.
                    </h2>
                    {/* Adjust the paragraph text size for smaller screens */}
                    <p className="text-base sm:text-lg mb-2 sm:mb-4">
                        Shoot me an email if you want to connect! You can also find me on <a href="https://www.linkedin.com/in/marcos-aurelio-salazar-torres-mast/" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-900 transition-colors duration-300"> LinkedIn</a> or <a href="https://twitter.com/Marcsast" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-900 transition-colors duration-300">Twitter</a> if that&apos;s more like you.
                    </p>
                    {/* Adjust the email link size for smaller screens */}
                    <a href="mailto:salazartorres.ma@gmail.com" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900 bg-clip-text text-transparent hover:text-pink-900 transition-colors duration-300">
                        salazartorres.ma@gmail.com
                    </a>
                </motion.div>
            </Reveal>
        </div>
    );
};

export default ContactSection;
