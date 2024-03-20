import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utlis/motion";

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Highly organized and self-motivated individual with a strong foundation in programming and problem-solving. 
        Proficient in multiple programming languages like C++, C, Python, JavaScript and frameworks like React, Three.js, Node.js, Express.js. 
        Fascinated by the intricacies of web development, I derive immense satisfaction from bringing designs to life through code. As a dedicated team player and quick learner, 
        I&apos;m eager to dive into challenging projects and contribute positively to collaborative endeavors, while continuously honing my craft in this dynamic field.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");