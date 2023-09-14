"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
    // function for add class sticky on page scroll start
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 80) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
        }, []);
        const StickyheaderClass = isSticky ? 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed navbar-stick' : 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed navbar-unstick';
      const topheaderClass = isSticky ? 'gradient-5 text-white fw-bold fs-15 mb-2 position-relative d-none' : 'gradient-5 text-white fw-bold fs-15 mb-2 position-relative';


      const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
      // Function to show the offcanvas
      const toggleOffcanvas = () => {
        setIsOffcanvasVisible(!isOffcanvasVisible);
      };
    
      // Function to hide the offcanvas
      const hideOffcanvas = () => {
        setIsOffcanvasVisible(false);
      };

      // function to show the dropdown menu
      const [isDropdownVisible, setIsDropdownVisible] = useState(false);

        const toggleDropdown = () => {
          setIsDropdownVisible(!isDropdownVisible);
        };
    
      

  return (
    <>
    <nav className={StickyheaderClass}>
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link href="/">           
                <Image
                  src="/images/logo-dark.png"   
                  alt="logo"
                  width={134} 
                  height={26} 
                />
            </Link>
          </div>
          <div className={`navbar-collapse offcanvas offcanvas-nav offcanvas-start ${isOffcanvasVisible ? 'show' : ''}`}>
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">Sandbox</h3>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={hideOffcanvas}>                    
              </button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="dropdown">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="dropdown">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${isDropdownVisible ? 'show' : ''}`}
                 onClick={toggleDropdown}>
                 Services
                </a>
                 <ul className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>
                    <li className="nav-item">                      
                      <a className="dropdown-item" href="#" data-bs-toggle="dropdown">Demo</a>
                    </li>                    
                    <li className="nav-item">
                    <a className="dropdown-item" href="#" data-bs-toggle="dropdown">Demos</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="dropdown">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:first.last@email.com" className="link-inverse">
                    info@email.com
                  </a>
                  <br />00 (123) 456 78 90
                  <br />
                  <nav className="nav social social-white mt-4">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item d-none d-lg-block">
                <nav className="nav social social-muted justify-content-end text-end">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </nav>
              </li>
              <li className="nav-item d-lg-none">
              <button className={`hamburger offcanvas-nav-btn ${isOffcanvasVisible ? 'show' : ''}`}
                 onClick={toggleOffcanvas}>
                  <span></span>
              </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>





    
    <header className="position-absolute w-100">
      <div className={topheaderClass} style={{ zIndex: 1 }}>
      <div className="container py-2 text-center">
        <p className="mb-0">✨ Sandbox is part of Envato{"'"}s Biggest Sale to date, be quick and grab a </p>
      </div>
    </div>
     <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link href="/">           
                <Image
                  src="/images/logo-dark.png"   
                  alt="logo"
                  width={134} 
                  height={26} 
                />
            </Link>
          </div>
          <div className={`navbar-collapse offcanvas offcanvas-nav offcanvas-start ${isOffcanvasVisible ? 'show' : ''}`}>
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">Sandbox</h3>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={hideOffcanvas}>                    
              </button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="dropdown">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="dropdown">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${isDropdownVisible ? 'show' : ''}`}
                 onClick={toggleDropdown}>
                 Services
                </a>
                 <ul className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>
                    <li className="nav-item">                      
                      <a className="dropdown-item" href="#" data-bs-toggle="dropdown">Demo</a>
                    </li>                    
                    <li className="nav-item">
                    <a className="dropdown-item" href="#" data-bs-toggle="dropdown">Demos</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-bs-toggle="dropdown">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:first.last@email.com" className="link-inverse">
                    info@email.com
                  </a>
                  <br />00 (123) 456 78 90
                  <br />
                  <nav className="nav social social-white mt-4">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item d-none d-lg-block">
                <nav className="nav social social-muted justify-content-end text-end">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </nav>
              </li>
              <li className="nav-item d-lg-none">
              <button className={`hamburger offcanvas-nav-btn ${isOffcanvasVisible ? 'show' : ''}`}
                 onClick={toggleOffcanvas}>
                  <span></span>
              </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header