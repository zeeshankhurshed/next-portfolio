import Image from 'next/image'
import styles from './skillcard.module.css'
const expertise=[
    {
        id:'1',
        image:'/images/next.png',
        title:'Next js',
        count:'70%'
    },
    {
        id:'2',
        image:'/images/react.png',
        title:'React js',
        count:'90%'
    },
    {
        id:'3',
        image:'/images/htmlcss.png',
        title:'HTML/CSS',
        count:'97%'
    },
    {
        id:'4',
        image:'/images/js.png',
        title:'Javascript',
        count:'60%'
    },
    {
        id:'5',
        image:'/images/typescript.png',
        title:'TypeScript',
        count:'50%'
    },
    // {
    //     id:'6',
    //     image:'/images/html.webp',
    //     title:'HTML',
    //     count:'97%'
    // },
    {
        id:'7',
        image:'/images/mern.png',
        title:'MERN',
        count:'67%'
    },
    // {
    //     id:'8',
    //     image:'/images/mongodb.png',
    //     title:'MongoDB',
    //     count:'55%'
    // },
    {
        id:'8',
        image:'/images/bt.png',
        title:'Bootstrap',
        count:'97%'
    },
    {
        id:'9',
        image:'/images/tw.png',
        title:'Tailwind',
        count:'65%'
    },
]

const Skillcard = ({}) => {
  return (

<div className={`${styles.cardinner}`}>
    <div className="row m-0">

   
    {
        expertise.map((item)=>(
            <div className="col-md-3">

            
            <div className={`${styles.cardexp} text-center rounded`} data-aos='flip-left' data-aos-achro-placement='top-center' data-aos-delay='500'>
                <div className=' my-3'>
            <Image src={item.image} className={`${styles.img} `} alt='' width={100} height={100} />
                </div>
            <h5 className={`${styles.title} text-white my-3 fw-bold`}>{item.title}</h5>
            <p className={`${styles.count} text-white-50 rounded bg-dark py-1 `}>{item.count}</p>
        </div>
        </div>
        ))
    }
    </div>
</div>

  )
  
  
}

export default Skillcard