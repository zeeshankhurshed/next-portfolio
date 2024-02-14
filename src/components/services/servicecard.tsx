import styles from './servicecard.module.css';
import Image from 'next/image';


const cardData=[
 {
  id:1,
  image:'./images/commandline.svg' ,
  title:'React Website',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ducimus numquam veritatis, eius earum doloribus corrupti natus impedit eveniet omnis?',
  count:'01'
 },
 {
  id:2,
  image:'./images/commandline.svg' ,
  title:'Next Js Website',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ducimus numquam veritatis, eius earum doloribus corrupti natus impedit eveniet omnis?',
  count:'02'
 },
 {
  id:3,
  image:'./images/commandline.svg' ,
  title:'Fullstack webstie',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ducimus numquam veritatis, eius earum doloribus corrupti natus impedit eveniet omnis?',
  count:'03'
 },
 {
  id:4,
  image:'./images/commandline.svg' ,
  title:'Node JS Api',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ducimus numquam veritatis, eius earum doloribus corrupti natus impedit eveniet omnis?',
  count:'04'
 },
 {
  id:5,
  image:'./images/commandline.svg' ,
  title:'MERN Website',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ducimus numquam veritatis, eius earum doloribus corrupti natus impedit eveniet omnis?',
  count:'05'
 },
 {
  id:6,
  image:'./images/commandline.svg' ,
  title:'Bug Fixing',
  description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ducimus numquam veritatis, eius earum doloribus corrupti natus impedit eveniet omnis?',
  count:'06'
 },

]
const Servicecard = () => {
  return (
    <div className="container my-3 ps-0 pe-0">
      <div className="row m-0 ">
        {cardData.map((item) => (
          <div className="col-md-4 my-2" key={item.id}>
            <div data-aos='fade-up' data-aos-delay='500' className={`${styles.card} rounded p-4 position-relative text-center`}>
              <Image src={item.image} alt=''   width={100} height={100} className={`${styles.cap} pb-3`} />
              <h3 className='text-white py-3'>{item.title}</h3>
              <p className='text-white'>{item.description}</p>
              <div className={`${styles.corner}`} >
              <div className={`${styles.integ} `}>
                <h5 className={`text-white fw-bold`}>{item.count}</h5>
              </div>
            </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicecard;