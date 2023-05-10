import React, { useRef } from "react";
import s from "./style.module.css";

function Nav(props) {
  const links = useRef();

  const navBtnHandler = () => {
    links.current.classList.toggle(s.nav_open);
    // if(links.current.style.display === 'flex'){
    //   links.current.style.display = 'none';
    // }else{
    //   links.current.style.display = 'flex';
    // }
    }

  return (
    <nav className={s.nav}>
      <a href="/">LOGO</a>

      <div className={s.links} ref={links}>
        <a href="/">About us</a>
        <a href="/">Products</a>
        <a href="/">Services</a>
        <a href="/">Contacts</a>
      </div>
      {/* <a href="http;//google.com">test</a> */}
      <button onClick={navBtnHandler} className={s.navBtn}>
        =
      </button>
    </nav>
  );
}

export default Nav;





