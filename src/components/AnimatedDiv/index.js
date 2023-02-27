import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function AnimatedDiv({children}) {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >{children}</motion.div>
      )}
    </InView>
  );
}
