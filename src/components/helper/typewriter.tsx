import { TypeAnimation } from "react-type-animation"
import styles from './typewriter.module.css'

const Typewriter = () => {
  return (
    <div className={styles.typewriter}>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a React Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Next js Developer',
        1000,
        'a Mern Stack Developer',
        1000,
        'a Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block', color:'white', fontWeight:'bolder' }}
      repeat={Infinity}
    />
     </div>
  )
}

export default Typewriter