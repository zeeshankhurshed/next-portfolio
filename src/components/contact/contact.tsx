import Link from 'next/link'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className='bg-dark my-5 py-5'>

    <div className={`${styles.container} container pt-3`}>
    <div className="row m-0">
          <div className={`${styles.col} col-md-6 `} data-aos='fade-right' data-aos-delay='500'>
            <h6 className={`${styles.p} text-white-50`}>Get In Touch</h6>
            <h2 className={`${styles.text} text-white fs-1`} >Lets Make your <span className={`${styles.span}`}>Brand</span> brilliant</h2>
            <p className='text-white-50 fw-light '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eum nihil. Eaque laudantium iusto voluptatum!</p>
            <Link href='#' className={`${styles.fone} fs-2 fw-bold`}>+3455231199</Link>
        </div> 

        <div className="col-md-6" data-aos='zoom-out' data-aos-achro-placement='top-center' data-aos-delay='500'>
        <form action="" className={styles.form}>
  <input type="text" placeholder="Name" className="rounded p-2 w-50 bg-secondary " />
  <input type="text" placeholder="Email" className="rounded p-2 w-50 bg-secondary" />
  <input type="text" placeholder="Subject" className="rounded p-2 w-100 mt-3 bg-secondary" />
  <textarea placeholder="Message" rows={4} className="w-100 mt-3 rounded bg-secondary"></textarea>
  <button type="button" className="btn btn-primary w-100 mt-2 py-2">Submit</button>
</form>

           
        </div>
         
    </div>
       
    </div>
    </div>
  )
  }
export default Contact