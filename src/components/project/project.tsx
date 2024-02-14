import styles from './project.module.css'
import Projectcard from './projectcard/projectcard'

const Project = () => {
  return (
    <div className='bg-dark mt-5 pt-5'>

    <div className={`${styles.container} container text-center pt-3`}>
    <div className="row m-0">
        <div className="col-md-12" data-aos='fade-down' data-aos-delay='300'>
            <p className={`${styles.p} text-white-50`}>Recent Work</p>
            <h2 className={`${styles.text} text-white fs-1`} >My Best <span className={`${styles.span}`}>Project</span></h2>
        </div> 
        <Projectcard/>    
    </div>
       
    </div>
    </div>
  )
}

export default Project

//1:42