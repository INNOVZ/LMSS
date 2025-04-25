import { useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export function Component() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <ul ref={scope}>
      <li />
      <li />
      <li />
    </ul>
  );
}
