import { useState } from "react";
import { AiOutlineUp } from "react-icons/ai";

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
              {menusFooter.menus?.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
            <div className="button__toTop">
              <AiOutlineUp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
