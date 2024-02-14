import Image from "next/image";
import styles from "./projectcard.module.css";

const detail = [
  {
    id: 1,
    image: "/images/ecommerce.webp",
    title: "E-Commerce Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo possimus alias cum totam ducimus illum harum quibusdam excepturi, ut earum dolore doloribus at, quisquam, laboriosam eum tempora dicta ad  adipisicing elit. Tempore nemo possimus alias cum totam ducimus illum harum quibusdam excepturi, ut earum dolore doloribus at, quisquam, laboriosam eum tempora.",
    count: {
      react: "React js",
      next: "Node js",
      frame: "Bootstrap",
      tech: "MongoDB",
    },
  },
  {
    id: 2,
    image: "/images/portfolio.png",
    title: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo possimus alias cum totam ducimus illum harum quibusdam excepturi, ut earum dolore doloribus at, quisquam, laboriosam eum tempora dicta ad  adipisicing elit. Tempore nemo possimus alias cum totam ducimus illum harum quibusdam excepturi, ut earum dolore doloribus at, quisquam, laboriosam eum tempora.",
    count: {
      react: "React js",
      next: "Next js",
      frame: "Bootstrap",
      tech: "Typescript",
    },
  },
  {
    id: 3,
    image: "/images/adminpanel.png",
    title: "Admin-Panel Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo possimus alias cum totam ducimus illum harum quibusdam excepturi, ut earum dolore doloribus at, quisquam, laboriosam eum tempora dicta ad?  adipisicing elit. Tempore nemo possimus alias cum totam ducimus illum harum quibusdam excepturi, ut earum dolore doloribus at, quisquam, laboriosam eum tempora.",
    count: {
      react: "React js",
      next: "Node js",
      frame: "Bootstrap",
      tech: "MonogoDB",
    },
  },
  {
    id: 3,
    image: "/images/dynamic.png",
    title: "Dynamic Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo possimus alias cum totam ducimus illum harum quibusdam excepturi, ut earum dolore doloribus at, quisquam, laboriosam eum tempora dicta ad  adipisicing elit. Tempore nemo possimus alias cum totam ducimus illum harum quibusdam excepturi, ut earum dolore doloribus at, quisquam, laboriosam eum tempora. ",
    count: {
      react: "React js",
      next: "Next js",
      frame: "Bootstrap",
      tech: "MonogoDB",
    },
  },
];

const Projectcard = () => {
    return (
      <div className={`{styles.container} mt-5`}>
        
          {detail.map((item) => (
            <div key={item.id} className={`${styles.cardswraper} d-flex pb-5`}>
              <div className={styles.cards}>
                <div className={`${styles.card} ${styles.cardone}`}>
                  {/* Using Next.js Image component */}
                  <Image
                    src={item.image}
                    width={500}
                    height={300}
                    alt={item.title}
                    className={`${styles.img}`}
                  />
                </div>
              </div>
              <div className={`${styles.text} px-5`}>
                <h2 className={`${styles.title} text-white text-start pb-3`}>{item.title}</h2>
                 <p className={`${styles.description} text-white-50 text-start pb-3`}>{item.desc}</p>
                 <div className={styles.buttonwrapper}>

              <button type="button" className={`${styles.button} btn  p-2 mx-2`}>{item.count.react}</button>
              <button type="button" className={`${styles.button} btn  p-2 mx-2`}>{item.count.next}</button>
              <button type="button" className={`${styles.button} btn  p-2 mx-2`}>{item.count.frame}</button>
              <button type="button" className={`${styles.button} btn  p-2 mx-2`}>{item.count.tech}</button>
                 </div>
              </div>
            </div>
          ))}
        
      </div>
    );
  };
  
  export default Projectcard;
