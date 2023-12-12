import { useState } from "react";
import {
  AiOutlineSearch,
  AiTwotoneCalendar,
  AiOutlineDown,
} from "react-icons/ai";
import { TfiExchangeVertical } from "react-icons/tfi";

export function SearchForm() {
  const [month] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  const [sort] = useState([
    "Price Low to High",
    "Price High to Low",
    "Sort by Name",
    "Sort by Popularity",
    "Sort by Review Core",
  ]);
  const [categories] = useState(["Moutain", "Rural", "Snow & Ice", "WildLife"]);
  const [destination] = useState([
    "Tokyo",
    "Seoul",
    "Paris",
    "London",
    "Venice",
    "Miami",
    "Rome",
    "Prague",
    "Califonia",
    "Kyoto",
    "HongKong",
    "Santorini",
  ]);

  window.addEventListener("load", () => {
    const formHide = document.querySelector(
      ".container__header .form #tour__advanced"
    );
    const toggle = document.querySelector(
      ".container__header .form .tour__addvanced__search .icon_down"
    );
    const tourSearch = document.querySelector(
      ".container__header .form #tour__search"
    );
    const title = document.querySelector(".container__header #title")
    toggle.onclick = function () {
      formHide.classList.toggle("show");
      toggle.classList.toggle("icon_up");
      tourSearch.classList.toggle("top");
      title.classList.toggle("titleTop");
    };
  });

  return (
    <div className="form">
      <form id="tour__search">
        <div className="form__text">
          <input
            className="search"
            type="text"
            placeholder="Destination, city "
          ></input>
          <span>
            <AiOutlineSearch />
          </span>
        </div>
        <div className="form__month">
          <select className="month">
            <option value="">Any Month</option>
            {month.map((item, monthKey) => (
              <option key={monthKey} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span>
            <AiTwotoneCalendar />
          </span>
        </div>
        <div className="form__sort">
          <select className="sort__by">
            <option value="">Sort By Date</option>
            {sort.map((item, sortKey) => (
              <option key={sortKey} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span>
            <TfiExchangeVertical />
          </span>
        </div>
        <div className="form__search">
          <input value="Search" className="button" type="submit"></input>
        </div>
      </form>
      <form id="tour__advanced">
        <div className="form__hide_advanced">
          <div className="form__categories">
            <select className="list__categories">
              <option value="">Any Categories</option>
              {categories.map((item, cateKey) => (
                <option key={cateKey} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <span>
              <AiOutlineDown />
            </span>
          </div>
          <div className="form__destinations">
            <select className="destinations">
              <option value="">Any Destination</option>
              {destination.map((item, desKey) => (
                <option key={desKey} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <span>
              <AiOutlineDown />
            </span>
          </div>
          <div className="form__budget">
            <input
              type="text"
              className="budget"
              placeholder="Max budget ex. 500"
            ></input>
            <span>$</span>
          </div>
        </div>
      </form>
      <div className="tour__addvanced__search">
        <a className="icon_down">Advanced Search</a>
      </div>
    </div>
  );
}
