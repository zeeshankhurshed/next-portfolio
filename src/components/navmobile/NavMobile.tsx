import { HiMiniXMark } from "react-icons/hi2";
import styles from './navmobile.module.css'


interface Props {
  showNav: boolean; // Boolean to determine if navigation is shown
  closeNav: () => void; // Function to close the navigation
}
const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "d-block" : "d-none";

  return (
    <div>
      <div className={`${styles.navmobile} ${navOpenStyle}`}>
       
 
</div>
 <ul className={`${styles.ul} ${navOpenStyle} d-flex`}>
    <li className={`${styles.li} py-3`}><a className={`${styles.nav_link} fs-5 text-decoration-none text-white`} href="#">Home</a></li>
    <li className={`${styles.li} py-3`}><a className={`${styles.nav_link} fs-5 text-decoration-none text-white`} href="#">About</a></li>
    <li className={`${styles.li} py-3`}><a className={`${styles.nav_link} fs-5 text-decoration-none text-white`} href="#">Services</a></li>
    <li className={`${styles.li} py-3`}><a className={`${styles.nav_link} fs-5 text-decoration-none text-white`} href="#">Blog</a></li>
    <li className={`${styles.li} py-3`}><a className={`${styles.nav_link}  fs-5 text-decoration-none text-white`} href="#">Contact</a></li>
    <HiMiniXMark onClick={closeNav} className={`${styles.mark} position-absolute`} />
      </ul>
    </div>
    )
}

export default NavMobile