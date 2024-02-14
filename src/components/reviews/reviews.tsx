import styles from './reviews.module.css'
import Reviewswiper from './reviewswiper/reviewswiper'

const Reviews = () => {
  return (
    <div className={`${styles.bg} bg-dark mt-5 pt-2`}>

    <div className={`${styles.container} container text-center pt-5`}>
    <div className="row m-0">
        <div className="col-md-12" data-aos='fade-down' data-aos-delay='500'>
            <p className={`${styles.p} text-white-50`}>Client Reviews</p>
            <h2 className={`${styles.text} text-white fs-1`} >I've <span className={`${styles.span}`}>40+</span> Clients Feedback</h2>
        </div> 

        <Reviewswiper/>      
           
    </div>
       
    </div>
    </div>
  )
}

export default Reviews