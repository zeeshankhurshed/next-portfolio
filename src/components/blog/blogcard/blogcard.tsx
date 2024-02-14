import Image from 'next/image'
import styles from './blogcard.module.css'
import { CiCalendar } from "react-icons/ci";
import { FaCommentAlt } from "react-icons/fa";
import Link from 'next/link';
const data=[
    {
        id:1,
        image:'/images/fd.jpg',
        date:'24 Jan 2024',
        tech:'Fullstack Developer roadmap',
        comment:{
            num:4,
            count:''
        }

    },
    {
        id:2,
        image:'/images/fd.jpg',
        date:'26 Jan 2024',
        tech:'Starting with React/Next js',
        comment:{
            num:8,
            count:''
        }

    },
    {
        id:3,
        image:'/images/fd.jpg',
        date:'24 Jan 2024',
        tech:'Time Management in Tech Job',
        comment:{
            num:8,
            count:''
        }

    },
]

const Blogcard = () => {
  return (
    <div className=''>
        <div className="row m-0">
        
                {
                    data.map((t)=>(
                        <div className="col-md-4  py-3" key={t.id}>
                        <div className={`${styles.card} card p-3 bg-dark`} data-aos='zoom-in' data-aos-achro-placement='top-center' data-aos-delay='500'>
                          <div className="pt-3 d-flex justify-content-center">
                            <Image src={t.image} alt="" className={`${styles.img}`} width={350} height={250} />
                          </div>
                          <p className={`${styles.date}  m-0 pt-3 text-white-50 text-start`}><CiCalendar className={styles.cal}/> {t.date}</p>
                         
                          <Link href='#' className= {`${styles.tech} m-0 py-4 text-white text-start`}>{t.tech}</Link>
                          <div className='d-flex justify-content-between align-items-center'>
                          <p className={`${styles.text} text-white-50 m-0`}><FaCommentAlt />  {t.comment.num}comments</p>
                          <Link href='#' className='text-white'>Read More</Link>
                          </div>
                        </div>
                      </div>
                    ))
                }
          
        </div>
    </div>
  )
}

export default Blogcard