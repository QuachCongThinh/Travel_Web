import { useState } from "react";
import { BackToTop } from "../hook/backToTop";

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
        <div className="footer__content">
          <div className="copyright">{menusFooter.title}</div>
          <div className="menu__footer">
            <ul>
              {menusFooter.menus?.map((item, menuKey) => (
                <li key={menuKey}>{item.name}</li>
              ))}
            </ul>
            <BackToTop />
          </div>
        </div>
      </div>
    </section>
  );
}
