import React from 'react';

function Header() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Videograph Template" />
      <meta name="keywords" content="Videograph, unica, creative, html" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Videograph | Template</title>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Page Preloader */}
      <div id="preloder">
        <div className="loader"></div>
      </div>

      {/* Header Section Begin */}
      <header className="header bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="logo">
              <a href="./index.html">
                <img src="img/logo.png" alt="Videograph Logo" className="h-10" />
              </a>
            </div>
            <nav className="header__nav__menu mobile-menu hidden lg:block">
              <ul className="flex space-x-8 text-white">
                <li className="active">
                  <a href="./index.html" className="hover:text-yellow-400">Home</a>
                </li>
                <li>
                  <a href="./about.html" className="hover:text-yellow-400">About</a>
                </li>
                <li>
                  <a href="./portfolio.html" className="hover:text-yellow-400">Portfolio</a>
                </li>
                <li>
                  <a href="./services.html" className="hover:text-yellow-400">Services</a>
                </li>
                <li className="relative">
                  <a href="#" className="hover:text-yellow-400">Pages</a>
                  <ul className="dropdown absolute hidden bg-gray-800 text-white">
                    <li><a href="./about.html" className="hover:text-yellow-400">About</a></li>
                    <li><a href="./portfolio.html" className="hover:text-yellow-400">Portfolio</a></li>
                    <li><a href="./blog.html" className="hover:text-yellow-400">Blog</a></li>
                    <li><a href="./blog-details.html" className="hover:text-yellow-400">Blog Details</a></li>
                  </ul>
                </li>
                <li>
                  <a href="./contact.html" className="hover:text-yellow-400">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="header__nav__social flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu-wrap" className="lg:hidden">
          {/* Mobile menu items */}
        </div>
      </header>
      {/* Header End */}
    </>
  );
}

export default Header;
