import { useState, useEffect } from "react";
import { MenuBar } from "../../components/menuBar/menubar";
import { HiOutlineXMark } from "react-icons/hi2";
import { MenuTrips } from "../../components/menuBar/menuTrips";
import { SocialMenuBar } from "../../components/menuBar/socialMenuBar";
import { fetchData } from "../../utils";
import "../../pages/menubar/style.scss";

const MobileMenu = () => {
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
  const [menuTrips, setMenuTrips] = useState({});
  const [social, setSocial] = useState({});

  useEffect(() => {
    fetchData("/menu-trips")
      .then((data) => {
        // text; // => 'Page not found'
        setMenuTrips(data);
      })
      .catch((error) => {
        setMenuTrips({});
        // error.message; // 'An error has occurred: 404'
      });
    fetchData("/social")
      .then((data) => {
        // text; // => 'Page not found'
        setSocial(data);
      })
      .catch((data) => {
        setSocial({});
        // error.message; // 'An error has occurred: 404'
      });
  }, []);


  return (
    <div id="main__menubar">
      <div id="icon__menubar">
        <a>
          <span className="icon__xmark__closemenu">
            <HiOutlineXMark />
          </span>
        </a>
      </div>
      <MenuBar />
      <MenuTrips data={menuTrips} />
      <SocialMenuBar data={social} />
    </div>
  );
};
export default MobileMenu;
