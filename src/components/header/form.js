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
      title: "Any Month",
      values: [
        {
          name: "January",
        },
        {
          name: "February",
        },
        {
          name: "March",
        },
        {
          name: "April",
        },
        {
          name: "May",
        },
        {
          name: "June",
        },
        {
          name: "July",
        },
        {
          name: "August",
        },
        {
          name: "September",
        },
        {
          name: "October",
        },
        {
          name: "November",
        },
        {
          name: "December",
        },
      ],
    },
  ]);
  const [sort] = useState([
    {
      title: "Sort By Date",
      values: [
        {
          name: "Price Low to High",
        },
        {
          name: "Price High to Low",
        },
        {
          name: "Sort by Name",
        },
        {
          name: "Sort by Popularity",
        },
        {
          name: "Sort by Review Core",
        },
      ],
    },
  ]);
  const [categories] = useState([
    {
      title: "Any Category",
      values: [
        { name: "Moutain" },
        { name: "Rural" },
        { name: "Snow & Ice" },
        { name: "WildLife" },
      ],
    },
  ]);
  const [destination] = useState([
    {
      title: "Any Destination",
      values: [
        {
          name: "Tokyo",
        },
        {
          name: "Seoul",
        },
        {
          name: "Paris",
        },
        {
          name: "London",
        },
        {
          name: "Venice",
        },
        {
          name: "Miami",
        },
        {
          name: "Rome",
        },
        {
          name: "Prague",
        },
        {
          name: "Califonia",
        },
        {
          name: "Kyoto",
        },
        {
          name: "HongKong",
        },
        {
          name: "Santorini",
        },
      ],
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
                <option value={option.title}>{option.title}</option>
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
