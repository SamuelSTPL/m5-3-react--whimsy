import React from "react";
import { useSpring, animated } from "react-spring";

export const ScaleIn = ({ children }) => {
  const style = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: "scale(1)",

    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 500,
      friction: 15,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};
