import { useState } from "react";
import {
  AiOutlineSearch,
  AiTwotoneCalendar,
  AiOutlineSwap,
  AiOutlineDown,
} from "react-icons/ai";

export function SearchForm() {
  
  const handleClick = () => {
    const formHide = document.querySelector(".container__header .form .tour__advanced");
    if(formHide.style.display === "none") {
      formHide.style.display = "block";
    }
    else{
      formHide.style.display = "none";
    }
  }

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

  return (
    <section>
      <div className="form">
        <form className="tour__search">
          <div className="form__show">
            <input
              className="form__search"
              type="search"
              placeholder="Destination, city "
            ></input>
            <span className="icon__search">
              <AiOutlineSearch />
            </span>
          </div>
          <div className="form__show">
            <select className="month">
              <option value="">Any Month</option>
              {month.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <span className="icon__calendar">
              <AiTwotoneCalendar />
            </span>
          </div>
          <div className="form__show">
            <select className="sort__by">
              <option value="">Sort By Date</option>
              {sort.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <span className="icon__exchange">
              <AiOutlineSwap />
            </span>
          </div>
          <div className="form__show">
            <input value="Search" className="button" type="submit"></input>
          </div>
        </form>
        <form className="tour__advanced">
          <div className="form__hide_advanced">
            <div className="form__hide">
              <select className="list__categories">
                <option value="">Any Categories</option>
                {categories.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <span className="icon__arrowDown">
                <AiOutlineDown />
              </span>
            </div>
            <div className="form__hide">
              <select className="destinations">
                <option value="">Any Destination</option>
                {destination.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <span className="icon__arrowDown">
                <AiOutlineDown />
              </span>
            </div>
            <div className="form__hide">
              <input
                type="text"
                className="budget"
                placeholder="Max budget ex. 500"
              ></input>
              <span>$</span>
            </div>
          </div>
        </form>
        <div className="tour__addvanced__search" onClick={handleClick}>
          <a className="toggle" >
            <AiOutlineDown />
            Advanced Search
          </a>
        </div>
      </div>
    </section>
  );
}
