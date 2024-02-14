import Servicecard from './servicecard';
import styles from './services.module.css'


const Services = () => {
  return (
    <>
    <div className='bg-dark pt-1'>
  <div className={`${styles.container} container text-center `}>
    <div className="row m-0">
        <div className="col-md-12" data-aos='fade-down' data-aos-delay='300'>
            <p className={`${styles.p} text-white-50`}>Popular Services</p>
            <h2 className={`${styles.text} text-white fs-1`} >My Special <span className={`${styles.span}`}>Services</span> For You</h2>
        </div>     
       
    </div>
    </div>
  <Servicecard/>
  </div>
    </>
  )
}

export default Services