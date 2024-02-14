// import CV from '@/app/assets/image/CV.pdf';

import styles from './hero.module.css'
import Typewriter from '../helper/typewriter'
import Image from 'next/image'
const Hero= () => {
  return(
    <div className={`${styles.hero} custom-bg`}>
        <div className='d-flex justify-content-between '>
            <div className='align-items-center'>
                <div className={`${styles.text} position-absolute `}>
                    <h4 data-aos="fade-right" className='mt-5 text-white'>WELLCOME TO MY WORLD</h4>
                <div data-aos="fade-left" data-aos-delay="400">
                    <h3 className={`${styles.text1} fw-bold text-white`}>
                        Hi, I'm <span className={`${styles.text2}`}>Zeeshan Khursheed</span>
                        </h3>
                        <Typewriter/>
                </div>
                <p data-aos="fade-up" data-aos-delay="800" className={`${styles.p} text-white-50 w-50`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et minima voluptas nemo non tempora odio ipsa, dignissimos quidem laboriosam velit eveniet, accusamus eligendi quas modi repudiandae ipsum illum vero totam?</p>
                <div className={`${styles.button} d-flex align-items-center   mt-4 px-3`}>
                    <button data-aos="zoom-in" data-aos-delay="1200" className={`${styles.btn} `} type='button'>
                        Hire Me
                    </button>
                    {/* <a href={CV} download="CV" className={`${styles.btn} ms-3 `}>Download CV</a> */}
                    <button type='button' data-aos="zoom-out" data-aos-delay="1600" className={`${styles.btn} ms-3 `}>Download CV</button>
                    

                </div>

                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="2000" className={`${styles.img} position-absolute`}>
            <Image src='/images/hero.png' width={600} height={600} alt='hero' className='object-contain'/>

            </div>

        </div>
    </div>
  ) 
}

export default Hero
