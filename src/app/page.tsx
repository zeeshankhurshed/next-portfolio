'use client'
// import Nav from '@/components/nav/nav';
import styles from './page.module.css'
import NavMobile from '@/components/navmobile/NavMobile';
import { useEffect, useState } from 'react';
import Hero from '@/components/hero/hero';
import Aboutme from '@/components/aboutme/aboutme';
import Services from '@/components/services/services';
import Skills from '@/components/skills/skills';
import Project from '@/components/project/project';
import Pricetable from '@/components/pricetable/pricetable';
import Reviews from '@/components/reviews/reviews';
import Blog from '@/components/blog/blog';
import Contact from '@/components/contact/contact';
// import Footer from '@/components/footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  // const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  // console.log('showNav:', showNav); // Add this line to check state
//animation setup

      useEffect(() => {
        AOS.init({
          duration:1000,
          easing:'ease',
          once:true,
          anchorPlacement: 'top-bottom',
        })
      }, [])

  return (
    <div className={`${styles.topbar} overflow-hidden`}>
      {/* <h2 className={`${styles.heading} font-bold m-0` }>
      </h2> */}
        {/* <Nav openNav={showNavHandler}/> */}
        <NavMobile showNav={showNav} closeNav={closeNavHandler}/>
        <Hero/>
        <Aboutme/>
        <Services/>
        <Skills/>
        <Project/>
        <Pricetable/>
        <Reviews/>
        <Blog/>
        <Contact/>
        {/* <Footer/> */}
    </div>
  );
}
