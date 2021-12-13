import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  slug: string;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageTransition = ({ children, slug }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
      key={slug}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
