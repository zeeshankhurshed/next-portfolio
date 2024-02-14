import Link from "next/link";
import styles from "./footer.module.css";
import { FaRegAddressCard } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className="container pt-3">
      <div className="row m-0">
        <div className={`${styles.foot} col-md-4`}>
          <div className={`${styles.logo} text-white fw-bold`}>
            <span className={`${styles.spanText} `}>WD</span>
            Warriors
          </div>
          <p className="py-2 text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum rem fuga expedita laborum vel a, neque consectetur error facere ratione quibusdam similique.</p>
          <Link href='#' className={`${styles.mail} fw-bold`}>zeeshankhursheed680@gmail.com</Link>
        </div>

        <div className={`${styles.foot} col-md-4`}>
            <h5 className="fw-bold text-white-50">Quick Link</h5>
            
            <ul className="p-0 list-unstyled">
            <li className="pt-3">
                <Link className="text-decoration-none text-white-50 " href={''}>About</Link>
                
                </li>
            <li className="pt-3">
                <Link className="text-decoration-none text-white-50 " href={''}>Services</Link>
                
                </li>
            <li className="pt-3">
                <Link className="text-decoration-none text-white-50 " href={''}>Project</Link>
                
                </li>
            <li className="pt-3">
                
                <Link className="text-decoration-none text-white-50 " href={''}>Contact</Link>
                </li>
            </ul>
        </div>
        <div className={`${styles.foot} col-md-4`}>
        <h5 className="fw-bold text-white-50">Address</h5>
        <p className={styles.icons}><FaRegAddressCard /> <span className="text-white-50">Tarnol, Islamabad</span></p>
        <p className={styles.icons}><CiMail /> <span className="text-white-50">zeeshankhursheed680@gmail.com</span></p>
        <p className={styles.icons}><FaPhoneAlt /> <span className="text-white-50">+3455231199</span></p>
        </div>
      </div>
       
       <hr />
       <p className={`${styles.right} text-white-50 pb-5`}>@copywrite zeeshankhursheed680 2024</p>
    </div>
    </div>
  ); 
};

export default Footer;
