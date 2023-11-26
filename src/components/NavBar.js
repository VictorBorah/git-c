"use client";
import React from "react";

export const NavBar = (props) => {
  return (
    <div className="navbar bg-slate-950">
      <a
        onClick={props.sayHi}
        className="btn btn-ghost text-xl text-white font-bold "
      >
        King Kong College
      </a>
    </div>
  );
};
