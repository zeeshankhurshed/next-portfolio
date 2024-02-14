import styles from './aboutme.module.css'
import { FaCheck } from "react-icons/fa";

const Aboutme = () => {
  return  (
    <div className={`${styles.about} pb-5 `}>
    <div className={`${styles.aboutText} mx-auto align-items-center `}>
        <div className="row m-0">
            <div className="col-md-6">
            <div data-aos='fade-right' data-aos-delay='500' >
        <p className={`${styles.headingMini}`}>About Me</p>
        <h2 className={`${styles.headingPrimary} p-0 text-white`}>
            Professional <span className={`${styles.web}`}>Website</span> for your business
        </h2>
        <p className={`${styles.p} text-white-50`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque est voluptate maxime ullam corrupti neque itaque dolores nihil, perferendis praesentium ex ut animi dolore fuga? Tempora, iusto nostrum possimus commodi corporis error cumque optio distinctio?</p>
        <div className= {`pt-2 d-inline-block`}>
            <div className='d-flex ' >
            <FaCheck className={`${styles.icons}`}/>
            <p className={`${styles.front} ps-3`}>Frontend Development</p>
            </div>
            <div className='d-flex  '>
            <FaCheck className={`${styles.icons}`}/>
            <p className={`${styles.front} ps-3`}>Backend Development</p>
            </div>
            <div className='d-flex ' >
            <FaCheck className={`${styles.icons}`}/>
            <p className={`${styles.front} ps-3`}>Web Development</p>
            </div>
            <div className='d-flex' >
            <FaCheck className={`${styles.icons}`}/>
            <p className={`${styles.front} ps-3`}>MERN Development</p>
            </div>
            <div className='d-flex  '>
            <FaCheck className={`${styles.icons}`}/>
            <p className={`${styles.front} ps-3`}>Next js Development</p>
            </div>
        </div>
        
    </div>
            </div>

            <div className="col-md-6">
            <div className={`${styles.prof} pt-5`}>
            <div className={`${styles.profwrap} align-items-center `}>
                <div data-aos="zoom-in" data-aos-anchor-placement='top-center' className={`${styles.profinner} p-3 text-center rounded`}>
                    <p className={`${styles.num} text-black fw-bold `}>3</p>
                    <p className={`${styles.years} text-black fw-bold`}>Years experience</p>
                </div>
                <div  data-aos="zoom-in" data-aos-anchor-placement='top-center' data-aos-delay='200' className={`${styles.profinner} p-3 text-center rounded`}>
                    <p className={`${styles.num} text-black fw-bold `}>200+</p>
                    <p className={`${styles.years} text-black fw-bold`}>Happy Client</p>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement='top-center' data-aos-delay='400' className={`${styles.profinner} p-3 text-center rounded`}>
                    <p className={`${styles.num} text-black fw-bold `}>100+</p>
                    <p className={`${styles.years} text-black fw-bold`}>Project Done</p>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement='top-center' data-aos-delay='600' className={`${styles.profinner} p-3 text-center rounded`}>
                    <p className={`${styles.num} text-black fw-bold `}>3+</p>
                    <p className={`${styles.years} text-black fw-bold`}>Award Win</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    
    
    </div>
  </div>
 )
}

export default Aboutme