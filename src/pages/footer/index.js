import { Awards } from "../../components/footer/award";
import { Contact } from "../../components/footer/contact";
import { RecentTrips } from "../../components/footer/recenttrips";
import { useState, useEffect } from "react";
import { fetchData } from "../../utils";

const Footer = () => {
  const [award, setAward] = useState({});
  const [contact, setContact] = useState({});
  const [trips, setTrips] = useState({});
  // const [social, setSocial] = useState({});

  useEffect(() => {
    fetchData("/awards")
      .then((data) => {
        // text; // => 'Page not found'
        setAward(data);
      })
      .catch((error) => {
        setAward({});
        // error.message; // 'An error has occurred: 404'
      });
    fetchData("/contact")
      .then((data) => {
        // text; // => 'Page not found'
        setContact(data);
      })
      .catch((error) => {
        setContact({});
        // error.message; // 'An error has occurred: 404'
      });
      fetchData("/recent-trips")
      .then((data) => {
        // text; // => 'Page not found'
        setTrips(data);
      })
      .catch((error) => {
        setTrips({});
        // error.message; // 'An error has occurred: 404'
      });
      // fetchData("/social")
      // .then((data) => {
      //   // text; // => 'Page not found'
      //   setSocial(data);
      // })
      // .catch((error) => {
      //   setSocial({});
      //   // error.message; // 'An error has occurred: 404'
      // });
  }, []);
  return (
    <>
      <div className="footer">
        <div className="container">
          <ul className="widget">
            <Awards data={award}/>
            <Contact data={contact}/>
            <RecentTrips data={recent-trips.recentTrips}/>
          </ul>
          {/* <div className="footer__bar">
            <div className="footer__bar_wrapper">
              <div className="footer__menu">
                <div className="copyright">
                  © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
                </div>
                <div className="menu__footer">
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">Tours</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                    <li>
                      <a href="">Purchase Theme</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="toTop">
          <a>
            <AiOutlineUp />
          </a>
        </div> */}
      </div>
    </>
  );
};
export default Footer;
