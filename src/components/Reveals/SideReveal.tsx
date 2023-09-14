import { motion } from 'framer-motion'

interface SideRevealProps {
  children: React.ReactNode
  side?: 'left' | 'right'
  width?: 'fit-content' | '100%'
  height?: 'auto' | '100%'
  delayIndex?: number
}

const SideReveal: React.FC<SideRevealProps> = ({ children, side = 'left', width = 'fit-content', delayIndex, height = 'auto' }) => {
  const x = side === 'left' ? -100 : 100;
  const delay = delayIndex ? (delayIndex + 1) * 0.2 : 0.2;

  return (
    <motion.div
      style={{ width, height }}
      initial={{
        opacity: 0,
        x: x
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 1,
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

export default SideReveal;