// Animation variants for consistent use across components

export const fadeIn = (direction = "up", delay = 0) => {
    return {
      hidden: {
        y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
        x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        opacity: 0
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren = 0) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren,
          delayChildren
        }
      }
    };
  };
  
  export const textVariant = (delay = 0) => {
    return {
      hidden: {
        y: 20,
        opacity: 0
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.6,
          delay
        }
      }
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut"
        }
      }
    };
  };
  
  export const scaleVariant = (delay = 0) => {
    return {
      hidden: {
        scale: 0.8,
        opacity: 0
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
          delay
        }
      }
    };
  };
  
  export const buttonHoverVariant = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };
  
  export const cardHoverVariant = {
    initial: { y: 0 },
    hover: { y: -5, transition: { duration: 0.3 } }
  };
  
  // Animated underline effect
  export const underlineVariant = {
    initial: { width: "0%" },
    hover: { width: "100%", transition: { duration: 0.3 } }
  };
  
  // Pulse glow effect
  export const pulseGlow = {
    animate: {
      boxShadow: [
        "0 0 5px 0px rgba(139, 92, 246, 0.3)",
        "0 0 20px 5px rgba(139, 92, 246, 0.6)",
        "0 0 5px 0px rgba(139, 92, 246, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  // Float animation
  export const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };