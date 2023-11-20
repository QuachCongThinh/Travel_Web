import { useState } from "react";

export function FooterBar() {
  const [menusFooter] = useState({
    title: "© Copyright Grand Tour Theme Demo - Theme by ThemeGoods",
    menus: [
      {
        name: "Home",
        link: "",
      },
      {
        name: "Tours",
        link: "",
      },
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Purchase Theme",
        link: "",
      },
    ],
  });

  return (
    <section>
      <div className="footer__bar">
        <div className="footer__bar_wrapper">
          <div className="footer__menu">
            <div className="copyright">{menusFooter.title}</div>
            <div className="menu__footer">
              <ul>
                {menusFooter.menus?.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
