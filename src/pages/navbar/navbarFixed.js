import { useState } from "react";
import images from "../../assets/images";
import "./style.scss";
import "../../style/all.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

const NavBarFixed = () => {
  const [menus] = useState([
    {
      name: "Home",
      path: "",
      child: [
        {
          name: "Home 1 - Background Image",
          path: "",
        },
        {
          name: "Home 2 - Youtube Video",
          path: "",
        },
        {
          name: "Home 3 - Google Inspired",
          path: "",
        },
        {
          name: "Home 4 - Travel site",
          path: "",
        },
      ],
    },
    {
      name: "Tours",
      path: "",
      child: [
        {
          name: "Tour Classic FullWidth",
          path: "",
          submenu: [
            {
              name: "2 Columns",
              path: "",
            },
            {
              name: "3 Columns",
              path: "",
            },
            {
              name: "4 Columns",
              path: "",
            },
          ],
        },
        {
          name: "Tour Classic Sidebar",
          path: "",
          submenu: [
            {
              name: "Right Sidebar",
              path: "",
            },
            {
              name: "Left Sidebar",
              path: "",
            },
          ],
        },
        {
          name: "Tour Grid FullWidth",
          path: "",
          submenu: [
            {
              name: "2 Columns",
              path: "",
            },
            {
              name: "3 Columns",
              path: "",
            },
            {
              name: "4 Columns",
              path: "",
            },
          ],
        },
        {
          name: "Tour Grid Sidebar",
          path: "",
          submenu: [
            {
              name: "Right Sidebar",
              path: "",
            },
            {
              name: "Left Sidebar",
              path: "",
            },
          ],
        },
        {
          name: "Tour List Sidebar",
          path: "",
          submenu: [
            {
              name: "Right Sidebar",
              path: "",
            },
            {
              name: "Left Sidebar",
              path: "",
            },
          ],
        },
        {
          name: "Tour Header Type",
          path: "",
          submenu: [
            {
              name: "Featured Image",
              path: "",
            },
            {
              name: "Video",
              path: "",
            },
          ],
        },
        {
          name: "Tour Categories",
          path: "",
          submenu: [
            {
              name: "Rural",
              path: "",
            },
            {
              name: "Snow & Ice",
              path: "",
            },
            {
              name: "Wildlife",
              path: "",
            },
            {
              name: "Mountain",
              path: "",
            },
          ],
        },
      ],
    },
    {
      name: "Booking",
      path: "",
      child: [
        {
          name: "Online Payment for Booking",
          path: "",
          submenu: [
            {
              name: "Variable Tour Pricing",
              path: "",
            },
            {
              name: "Simple Tour Pricing",
              path: "",
            },
          ],
        },
        {
          name: "Custom Booking Form",
          path: "",
          submenu: [
            {
              name: "Booking Form + Sub Tour Date",
              path: "",
            },
            {
              name: "Booking Form + Custom Date",
              path: "",
            },
          ],
        },
        {
          name: "Tour Durations",
          path: "",
          submenu: [
            {
              name: "Single Day Tour",
              path: "",
            },
            {
              name: "Mutiple Days Tour",
              path: "",
            },
          ],
        },
        {
          name: "Custom Booking URL for Affiliate Tour",
          path: "",
        },
        {
          name: "Custom Booking using custom HTML & Shortcode",
          path: "",
        },
        {
          name: "Header Options",
          path: "",
          submenu: [
            {
              name: "Standard Background Header",
              path: "",
            },
            {
              name: "Video Background Header",
              path: "",
            },
          ],
        },
        {
          name: "Layout Options",
          path: "",
          submenu: [
            {
              name: "Width Sidebar",
              path: "",
            },
            {
              name: "FullWidth",
              path: "",
            },
          ],
        },
      ],
    },
    {
      name: "Destinations",
      path: "",
      child: [
        {
          name: "Destination FullWidth",
          path: "",
        },
        {
          name: "Destination + Video Header",
          path: "",
        },
        {
          name: "Destination Right Sidebar",
          path: "",
        },
        {
          name: "Destination Left Sidebar",
          path: "",
        },
        {
          name: "Single Destination",
          path: "",
        },
        {
          name: "Single Destination + Video",
          path: "",
        },
      ],
    },
    {
      name: "Pages",
      path: "",
      child: [
        {
          name: "About Us",
          path: "",
        },
        {
          name: "Contact Us",
          path: "",
        },
        {
          name: "FAQs",
          path: "",
        },
        {
          name: "Gallery",
          path: "",
        },
        {
          name: "Page FullWidth",
          path: "",
        },
        {
          name: "Page + Video Background Header",
          path: "",
        },
        {
          name: "Page Right Sidebar",
          path: "",
        },
        {
          name: "Page Left Sidebar",
          path: "",
        },
      ],
    },
    {
      name: "Blog",
      path: "",
      child: [
        {
          name: "Blog Right Sidebar",
          path: "",
        },
        {
          name: "Blog Left Sidebar",
          path: "",
        },
        {
          name: "Blog FullWidth",
          path: "",
        },
        {
          name: "Blog Grid Right Sidebar",
          path: "",
        },
        {
          name: "Blog Grid Left Sidebar",
          path: "",
        },
        {
          name: "Blog Grid FullWidth",
          path: "",
        },
        {
          name: "Blog Full + Grid Right Sidebar",
          path: "",
        },
        {
          name: "Blog Full + Grid Left Sidebar",
          path: "",
        },
        {
          name: "Blog Full + Grid FullWidth",
          path: "",
        },
      ],
    },
    {
      name: "Shortcodes",
      path: "",
      child: [
        {
          name: "Accordion & Toogles",
          path: "",
        },
        {
          name: "Alert Boxes",
          path: "",
        },
        {
          name: "Animated Content",
          path: "",
        },
        {
          name: "Button & Social Icons",
          path: "",
        },
        {
          name: "Columns",
          path: "",
        },
        {
          name: "Google Maps",
          path: "",
        },
        {
          name: "Image Frames & Animation",
          path: "",
        },
        {
          name: "Image Teasers",
          path: "",
        },
        {
          name: "Pricing Tables",
          path: "",
        },
        {
          name: "Tabs",
          path: "",
        },
      ],
    },
    {
      name: "Shop",
      path: "",
      child: [
        {
          name: "Shop FullWidth",
          path: "",
        },
        {
          name: "Shop Sidebar",
          path: "",
        },
        {
          name: "Single Products FullWidth",
          path: "",
        },
        {
          name: "Single Products With Sidebar",
          path: "",
        },
      ],
    },
  ]);

  window.addEventListener("load", () => {
    const openMenu = document.getElementById("logo__menu_fixed");
    const menuBar = document.getElementById("main__menubar");
    const closeMenu = document.getElementById("icon__menubar");
    const body = document.querySelector("body");
    const wrapper = document.getElementById("wrapper");

    openMenu.onclick = function () {
      menuBar.classList.toggle("active");
      body.classList.toggle("scroll__hide");
      wrapper.classList.toggle("blur");
    };
    closeMenu.onclick = function () {
      menuBar.classList.remove("active");
      body.classList.remove("scroll__hide");
      wrapper.classList.remove("blur");
    };
  });

  var prevScrollpos = window.scrollY;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbarFixed").classList.add("show");
    } else {
      document.querySelector(".navbarFixed").classList.remove("show");
    }
    if (currentScrollPos === 0) {
      document.querySelector(".navbarFixed").classList.add("hidden");
    } else {
      document.querySelector(".navbarFixed").classList.remove("hidden");
    }
    if (prevScrollpos < currentScrollPos) {
      document.querySelector(".navbarFixed").classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <div className="navbarFixed">
        <div className="navbar__logo_black">
          <img src={images.logo_black} alt="Logo"></img>
        </div>
        <div className="navbar__menu_fixed">
          <ul>
            {menus.map((menu, menuKey) => (
              <li key={menuKey} className="menu__parent">
                <Link to={menu.path} className="menu">
                  {menu.name}
                </Link>
                {menu.child && (
                  <ul className="header__menuFixed__dropdown">
                    {menu.child.map((childItem, childKey) => (
                      <li key={`${menuKey}-${childKey}`}>
                        <Link
                          className={`${
                            childItem.submenu
                              ? "link__menuFixed"
                              : "link_menuFixed"
                          }`}
                          to={childItem.path}
                        >
                          {childItem.name}
                        </Link>
                        {childItem.submenu && (
                          <ul className="header__menuFixed__horizontal">
                            {childItem.submenu?.map(
                              (submenuItem, submenuKey) => (
                                <li key={`${menuKey}-${submenuKey}`}>
                                  <Link to={submenuItem.path}>
                                    {submenuItem.name}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="menu__cart">
            <div id="logo__menu_fixed">
              <IoIosMenu />
            </div>
            <div id="logo__cart">
              <AiOutlineShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBarFixed;
