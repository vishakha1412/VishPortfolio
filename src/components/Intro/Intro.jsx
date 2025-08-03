 
import { motion } from 'framer-motion';
 

   


 export const Intro = () => {
  const name = "Vishakha Sharma";
  const letters = name.split("");

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
      },
    },
  };

  const child = {
    animate: {
      y: [0, -10, 0],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 px-6 text-white">
      <motion.div
        className="flex gap-1 flex-wrap text-4xl sm:text-5xl md:text-6xl font-extrabold"
        variants={container}
        animate="animate"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
        <motion.span variants={child}>👋</motion.span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-center text-lg sm:text-xl md:text-2xl max-w-xl"
      >
        Frontend Developer | Building expressive interfaces with React & Tailwind ✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-10 space-x-4"
      > 
      </motion.div>
    </section>
  
 
 

      </>
  );
};

 
