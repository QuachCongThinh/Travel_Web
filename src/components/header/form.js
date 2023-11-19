import { useState } from "react";
import {
  AiOutlineSearch,
  AiTwotoneCalendar,
  AiOutlineSwap,
  AiOutlineDown,
} from "react-icons/ai";

export function SearchForm() {
  const [month] = useState([
    {
      value: "Any Month",
      title: "Any Month",
    },
  ]);
  const [sort] = useState([
    {
      value: "Sort By Date",
      title: "Sort By Date",
    },
  ]);
  const [categories] = useState([
    {
      value: "Any Category",
      title: "Any Category",
    },
  ]);
  const [destination] = useState([
    {
      value: "Any Destination",
      title: "Any Destination",
    },
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
              {month.map((option) => (
                <option value={option.value}>{option.title}</option>
              ))}
            </select>
            <span className="icon__calendar">
              <AiTwotoneCalendar />
            </span>
          </div>
          <div className="form__show">
            <select className="sort__by">
              {sort.map((option) => (
                <option value={option.value}>{option.title}</option>
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
                {categories.map((option) => (
                  <option value={option.value}>{option.title}</option>
                ))}
              </select>
              <span className="icon__arrowDown">
                <AiOutlineDown />
              </span>
            </div>
            <div className="form__hide">
              <select className="destinations">
                {destination.map((option) => (
                  <option value={option.value}>{option.title}</option>
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
        <div className="tour__addvanced__search">
          <a href="/#" className="toggle">
            <AiOutlineDown />
            Advanced Search
          </a>
        </div>
      </div>
    </section>
  );
}
