import Pricecard from './pricecard/pricecard'
import styles from './pricetable.module.css'


const Pricetable = ({}) => {
  return (
    <div className=' mt-5 pt-2'>

    <div className={`${styles.container} container text-center`}>
    <div className="row m-0">
        <div className="col-md-12" data-aos='fade-down' data-aos-delay='500'>
            <p className={`${styles.p} text-white-50`}>Popular Services</p>
            <h2 className={`${styles.text} text-white fs-1`} >Best <span className={`${styles.span}`}>Pricing</span> for Your Project</h2>
        </div> 

        <Pricecard/>
           
    </div>
       
    </div>
    </div>
  )
}

export default Pricetable