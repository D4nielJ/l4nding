import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='2'
    stroke='hsl(0, 0%, 100%)'
    {...props}
  />
);

const btnVariants = {
  open: {},
  closed: {},
  hover: {},
};

const openTransitions = {
  duration: 0.5,
  ease: 'easeInOut',
  times: [0, 0.25, 0.5],
};

const closeTransitions = {
  duration: 0.25,
  ease: 'easeInOut',
};

const ToggleMenu = ({ open, color, ...props }) => (
  <div className='navbar-toggle'>
    <motion.div
      role='button'
      tabIndex={0}
      className='flex flex-col justify-around w-6 h-6'
      variants={btnVariants}
      animate={open ? 'open' : 'closed'}
      {...props}
    >
      <svg
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Path
          stroke={color}
          variants={{
            closed: { d: 'M2 7H28 7' },
            open: {
              d: ['M2 7H28 7', 'M2 7H28 7', 'M6 6.38477L24.3848 24.7695'],
            },
          }}
          transition={open ? openTransitions : closeTransitions}
        />
        <Path
          stroke={color}
          d='M2 15H28 15'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: [1, 1, 0] },
          }}
          transition={open ? openTransitions : closeTransitions}
        />
        <Path
          stroke={color}
          variants={{
            closed: { d: 'M15 23L28 23' },
            // hover: { d: 'M2 23L28 23' },
            open: {
              d: ['M15 23L28 23', 'M2 23L28 23', 'M6 24.3848L24.3848 5.99999'],
            },
          }}
          transition={open ? openTransitions : closeTransitions}
        />
      </svg>
    </motion.div>
  </div>
);

export default ToggleMenu;
