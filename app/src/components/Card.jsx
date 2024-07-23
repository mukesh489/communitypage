import React from "react";

const Card = ({socailMediaPic,name}) => {
  return (
    <div className=" justify-between flex items-center text-[#abddff] bg-[#263238] w-15 h-[6.5rem] m-2  rounded-md ">
      <div>
         {socailMediaPic}
      </div>
      <div className="mr-[100px]">
        <h3>0.24 token </h3>
        <p>{name}</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-14"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
