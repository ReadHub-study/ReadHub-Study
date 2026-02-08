import React from "react";
import { Link } from "react-router-dom";
import Library from "../Pages/Library";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between px-[17px] py-[10px]  text-[12px] fixed w-full bottom-0 bg-white ">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/50 rounded-[10px] py-2 w-[53px] text-primary stroke-primary flex justify-center transition-colors duration-300"
              : "bg-transparent rounded-[10px] py-2 w-[53px] text-[#737373] stroke-[#737373] flex justify-center transition-colors duration-300 "
          }
        >
          <span className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Home</p>
          </span>
        </NavLink>

        <NavLink
          to={"/library"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/50 rounded-[10px] py-2 w-[53px] text-primary stroke-primary flex justify-center transition-colors duration-300"
              : "bg-transparent rounded-[10px] py-2 w-[53px] text-[#737373] stroke-[#737373] flex justify-center transition-colors duration-300"
          }
        >
          <span className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 6L20 20M12 6V20M8 8V20M4 4V20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Library</p>
          </span>
        </NavLink>

        <NavLink
          to={"/notes"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/50 rounded-[10px] py-2 w-[53px] text-primary stroke-primary flex justify-center transition-colors duration-300"
              : "bg-transparent rounded-[10px] py-2 w-[53px] text-[#737373] stroke-[#737373] flex justify-center transition-colors duration-300"
          }
        >
          <span className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 11L3 17V20H12L15 17"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9998 12L17.3998 16.6C17.026 16.9665 16.5233 17.1717 15.9998 17.1717C15.4763 17.1717 14.9737 16.9665 14.5998 16.6L9.39984 11.4C9.03339 11.0261 8.82812 10.5235 8.82812 10C8.82812 9.47649 9.03339 8.97386 9.39984 8.6L13.9998 4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Notes</p>
          </span>
        </NavLink>

        <NavLink
          to={"/explore"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/50 rounded-[10px] py-2 w-[53px] text-primary stroke-primary flex justify-center transition-colors duration-300 "
              : "bg-transparent rounded-[10px] py-2 w-[53px] text-[#737373] stroke-[#737373] flex justify-center transition-colors duration-300"
          }
        >
          <span className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.5 16.5L14.5 14.5L16.5 7.5L9.5 9.5L7.5 16.5ZM12 13.5C11.5833 13.5 11.2293 13.3543 10.938 13.063C10.6467 12.7717 10.5007 12.4173 10.5 12C10.4993 11.5827 10.6453 11.2287 10.938 10.938C11.2307 10.6473 11.5847 10.5013 12 10.5C12.4153 10.4987 12.7697 10.6447 13.063 10.938C13.3563 11.2313 13.502 11.5853 13.5 12C13.498 12.4147 13.3523 12.769 13.063 13.063C12.7737 13.357 12.4193 13.5027 12 13.5ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.2217 16.105 20.0007 14.2173 20 12C19.9993 9.78267 19.2203 7.895 17.663 6.337C16.1057 4.779 14.218 4 12 4C9.782 4 7.89433 4.77933 6.337 6.338C4.77967 7.89667 4.00067 9.784 4 12C3.99933 14.216 4.77867 16.1037 6.338 17.663C7.89733 19.2223 9.78467 20.0013 12 20Z"
                fill="#737373"
              />
            </svg>
            <p>Explore</p>
          </span>
        </NavLink>

        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/50 rounded-[10px] py-2 w-[53px] text-primary stroke-primary flex justify-center transition-colors duration-300"
              : "bg-transparent rounded-[10px] py-2 w-[53px] text-[#737373] stroke-[#737373] flex justify-center transition-colors duration-300"
          }
        >
          <span className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                stroke-width="1.5"
              />
            </svg>
            <p>Profile</p>
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
