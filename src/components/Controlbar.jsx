import React, { useState } from "react";
import { ReactDatePicker } from "./DatePicker.jsx";

export const Controlbar = (props) => {
  const { onSearch } = props;

  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  const handleInput = (e) => {
    const text = e.target.value;
    setTerm(text);
    setLocation(text);
  };

  const handleEnterKeyPressed = (e) => {
    const key = e.key;
    if (e.key === "Enter") {
      onSearch(term, location);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-row justify-evenly items-center m-0 shadow-xl rounded-full w-2/5">
        <div className="flex justify-center items-center top-1/2 bottom-1/2">
          <input
            type="search"
            placeholder="Search"
            onChange={handleInput}
            value={props.location}
            className="bg-gray-800 border-none w-0 p-0 opacity-0 rounded-full leading-5 text-sm hover:transition-all hover:w-60 focus:scale-100"
          ></input>
          <i className="fa-solid fa-location-dot bg-teal-600 w-10 h-10 rounded-full text-center leading-10 text-lg cursor-pointer hover:transition-all hover:text-white"></i>
        </div>

        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn bg-white text-black border-none hover:bg-slate-50 m-1"
          >
            <i className="fa-solid fa-calendar-days"> Date:</i>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-52 p-2 shadow bg-teal-600 text-primary-content"
          >
            <ReactDatePicker />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn m-1 bg-white text-black border-none"
          >
            <i class="fa-solid fa-filter"></i>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <h4 className="px-4">Age Restrictions</h4>
            <li>
              <a>Ages: 13+</a>
            </li>
            <input type="checkbox" className="toggle" checked />
            <li>
              <a>Ages: 18+</a>
            </li>
            <input type="checkbox" className="toggle" checked />
            <li>
              <a>Ages: 21+</a>
            </li>
            <input type="checkbox" className="toggle" checked />
          </ul>
        </div>

        <div>
          <i className="fa-solid fa-magnifying-glass bg-teal-600 w-10 h-10 rounded-full text-center leading-10 text-lg cursor-pointer hover:transition-all hover:text-white"></i>
          <input
            type="search"
            placeholder="Search"
            className="bg-gray-800 border-none w-0 p-0 opacity-0 rounded-full leading-5 text-sm hover:transition-all hover:w-60"
          ></input>
        </div>
      </form>
    </div>
  );
};
