import gsap from "gsap";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

interface Props {
  maxCount?: number;
}

export const useCounter = ({ maxCount = 10 }: Props) => {
  const [counter, setCounter] = useState(5);

  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "easy.out",
      })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, []);

  useEffect(() => {
    // if (counter < 10) return;
    tl.current.play(0);
  }, [counter]);

  return {
    elementToAnimate,
    counter,
    handleClick,
  };
};
