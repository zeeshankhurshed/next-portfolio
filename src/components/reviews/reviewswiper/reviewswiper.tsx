import Image from 'next/image'
import styles from './reviewswiper.module.css'
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data=[
    {
        id:1,
        image:'/images/hero.png',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in quaerat animi ipsam magni error, vero nulla nam enim eveniet cum voluptatibus consequatur recusandae et dolores illo omnis dolorem.',
        name:'Nadeem Fareed',
        tech:'Next Developer'
    },
    {
        id:2,
        image:'/images/hero.png',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in quaerat animi ipsam magni error, vero nulla nam enim eveniet cum voluptatibus consequatur recusandae et dolores illo omnis dolorem.',
        name:'Abid Rasheed',
        tech:'React Developer'
    },
    {
        id:3,
        image:'/images/hero.png',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in quaerat animi ipsam magni error, vero nulla nam enim eveniet cum voluptatibus consequatur recusandae et dolores illo omnis dolorem.',
        name:'Waseem Ul Hassan',
        tech:'Mern Developer'
    },
    {
        id:4,
        image:'/images/hero.png',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in quaerat animi ipsam magni error, vero nulla nam enim eveniet cum voluptatibus consequatur recusandae et dolores illo omnis dolorem.',
        name:'Yasir Shahzad',
        tech:'Fullstack Developer'
    },
    {
        id:5,
        image:'/images/hero.png',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in quaerat animi ipsam magni error, vero nulla nam enim eveniet cum voluptatibus consequatur recusandae et dolores illo omnis dolorem.',
        name:'Wasqas Rasheed',
        tech:'Web Developer'
    },
    {
        id:6,
        image:'/images/hero.png',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in quaerat animi ipsam magni error, vero nulla nam enim eveniet cum voluptatibus consequatur recusandae et dolores illo omnis dolorem.',
        name:'Abudl Fareed',
        tech:'React Native Developer'
    },
]

const Reviewswiper = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,      // Enable autoplay
        autoplaySpeed: 2000  // Set autoplay speed in milliseconds (e.g., 2000 ms = 2 seconds)
      };
  
    return (
      <div className="container my-5">
        <div className="row m-0">
          <Slider {...settings} >
            {data.map((d) => (
              <div className="col-md-4  py-3" key={d.id}>
              <div className={`${styles.card} card p-3 bg-dark`}>
                <div className="pt-3 d-flex justify-content-center">
                  <Image src={d.image} alt="" className={`${styles.img}`} width={100} height={100} />
                </div>
                <p className={`${styles.desc} m-0 pt-3 text-white-50`}>{d.desc}</p>
                <div className={styles.star}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h6 className="m-0 pt-4 text-white">{d.name}</h6>
                <p className={`${styles.text} pb-3`}>{d.tech}</p>
              </div>
            </div>
            
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Reviewswiper;