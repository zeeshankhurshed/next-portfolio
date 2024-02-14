import styles from './blog.module.css'
import Blogcard from './blogcard/blogcard'

const Blog= () => {
  return (
    <div className=' my-3 pt-2'>

    <div className={`${styles.container} container text-center pt-5`}>
    <div className="row m-0">
        <div className="col-md-12 mb-5" data-aos='fade-down' data-aos-delay='500' >
            <p className={`${styles.p} text-white-50`}>My Blog</p>
            <h2 className={`${styles.text} text-white fs-1`} >My Latest <span className={`${styles.span}`}>Blog</span> and News</h2>
        </div> 

           <Blogcard/> 
           
    </div>
       
    </div>
    </div>
  )
}

export default Blog