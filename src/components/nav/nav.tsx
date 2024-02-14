import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu4Line } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./nav.module.css";

interface NavLink {
  title: string;
  path: string;
}

const links: NavLink[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Nav = (): ReactElement => {
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className={styles.nav}>
      <div className={`${styles.navText} d-flex align-items-center justify-content-between mx-auto`}>
        <div data-aos="fade-right" data-aos-delay="800" className={`${styles.logo} text-white`}>
          <span className={`${styles.spanText} `}>WD</span>
          Warriors
        </div>
        <div className={`${styles.navul} d-flex justify-content-end align-items-center m-0 fs-6 `}>
          <ul className={`${styles.textul} m-0 list-unstyled ${navVisible ? styles.textulVisible : styles.textulHidden}`}>
            {links.map((link, index) => (
              <li key={index} className={`${styles.li} px-2 `}>
                <Link data-aos="fade-up" data-aos-delay="800" href={link.path} className="text-decoration-none">
                  <span className={`${styles.link} text-white  ${path === link.path ? styles.active : ''}`}>
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.hamburger}>
          <RiMenu4Line onClick={toggleNav} className="text-white fs-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
