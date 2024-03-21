import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utlis/motion";
import { mygithub, linkedin, leetcode } from "../assets";

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

      <motion.div 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-12 flex justify-start gap-10">
      <button
      onClick={() => {
        window.location.href = "mailto:dhara.sup@gmail.com";
      }} 
      className=" text-sm bg-[#1d1836] py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary min-[280px]:max-[440px]:px-5 min-[280px]:max-[440px]:py-2">
        Hire Me
      </button> 
      <button
      onClick={() => {
        window.open("https://drive.google.com/file/d/1WRfEYC3-7JE_5k_29ppnSiGTPbu9PgUx/view?usp=sharing", "_blank");
      }}  
      className=" text-sm bg-[#1d1836] py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary min-[280px]:max-[440px]:px-5 min-[280px]:max-[440px]:py-2">
        Download CV
      </button> 
      </motion.div>

      <motion.div 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-8 flex gap-6 justify-start">
        <div
        onClick={() => window.open("https://github.com/SUPARNA150", "_blank")} 
        className="bg-[#dcdbe2] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
          <img
                src={mygithub}
                alt='github'
                className='w-full h-full object-contain'
              />
        </div>
        <div
        onClick={() => window.open("https://www.linkedin.com/in/suparna-dhara/", "_blank")} 
        className="bg-[#dcdbe2] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
          <img
                src={linkedin}
                alt='linkedin'
                className='w-full h-full object-contain'
              />
        </div>
        <div
        onClick={() => window.open("https://leetcode.com/Suparna15/", "_blank")} 
        className="bg-[#dcdbe2] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
          <img
                src={leetcode}
                alt='leetcode'
                className='w-3/4 h-3/4 object-contain'
              />
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about");