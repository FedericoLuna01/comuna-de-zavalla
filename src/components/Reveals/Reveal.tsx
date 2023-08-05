import { motion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  side?: 'left' | 'right'
  width?: 'fit-content' | '100%'
  height?: 'auto' | '100%'
  delayIndex?: number
}

const Reveal: React.FC<RevealProps> = ({ children, side = 'left', width = 'fit-content', delayIndex, height = 'auto' }) => {
  const x = side === 'left' ? -100 : 100;
  const delay = delayIndex ? (delayIndex + 1) * 0.2 : 0.2;

  return (
    <motion.div
      style={{ width, height }}
      initial={{
        opacity: .5,
        y: x
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: .8,
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;