import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center ">
        <img
          src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((item, index) => {
            return item.length === 0 ? (
              <span key={index} className="w-[1px] h-8 bg-zinc-700"></span>
            ) : (
              <a key={index} className="text-sm flex items-center gap-1">
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                ) : null}
                {item}
              </a>
            );
          })}
        </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
