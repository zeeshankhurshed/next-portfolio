import Skillcard from './skillcard/skillcard'
import styles from './skills.module.css'

const Skills= () => {
  return (
    <div className={`${styles.container} container ps-0 pe-0`}>
        <div className={`${styles.row} row m-0 pt-5`}>
            <div className={`${styles.coll} col-md-4 ps-0 pe-0`} data-aos='fade-right' data-aos-delay='300'>
                <p className='text-white-50 fs-5'>My Skills</p>
                <h2 className={`${styles.text} text-white `}>Let's Explore Popular <span className={`${styles.span}`}>Skill</span> & Experience</h2>
                <p className='py-3 fs-6 text-white-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nesciunt maxime totam eos cumque sit rem eligendi beatae accusantium, inventore aliquam ipsum debitis.</p>
                <button className={`${styles.btn} `} type='button'>
                        Learn More
                    </button>
            </div>
            <div className="col-md-8 p-0">
                    <Skillcard/>
            </div>
        </div>
    </div>
  )
}

export default Skills