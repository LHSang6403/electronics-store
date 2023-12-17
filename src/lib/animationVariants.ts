const fadeInAminationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 },
  }),
};

export default fadeInAminationVariants;
