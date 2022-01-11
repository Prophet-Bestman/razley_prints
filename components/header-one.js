import React, { useContext, useEffect, useState } from "react";
import { Logo, NavLinksData, FooterBottomData } from "@/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuContext } from "@/context/menu-context";

const HeaderOne = () => {
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header className="header home-page-one">
      <nav
        className={`navbar navbar-default header-navigation  ${
          true === sticky
            ? " stricky stricky-fixed slideInDown animated"
            : " stricky slideIn animated"
        }`}
      >
        <div className="thm-container clearfix">
          <div className="navbar-header">
            <Link href="/">
              <a className="navbar-brand">
                <img src={Logo.dark} alt="Awesome Image" />
              </a>
            </Link>
            <span className="mobile-menu__toggler" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </span>
          </div>

          <div
            className="collapse show navbar-collapse main-navigation mainmenu "
            id="main-nav-bar"
          >
            <ul className="nav navbar-nav navigation-box">
              {NavLinksData.map((links, index) => {
                return (
                  <li
                    key={index}
                    className={router.pathname == links.url ? "active" : ""}
                  >
                    <Link href={links.url}>
                      <a>{links.name}</a>
                    </Link>
                    {undefined !== links.subItems ? (
                      <ul className="sub-menu">
                        {links.subItems.map((subLinks, index) => (
                          <li key={index}>
                            <Link href={subLinks.url}>
                              <a>{subLinks.name}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right-side-box">
            <div className="social">
              {FooterBottomData.social.map(({ icon, url }, index) => {
                return (
                  <a key={index} href={url} className={`${icon} hvr-pulse`}></a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderOne;
