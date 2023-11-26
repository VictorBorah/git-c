import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { UserImage } from "./UserImage";

export const PersonCard = ({ person }) => {
  return (
    <div className="lg:w-2/4 md:w-3/4 sm:w-4/4 overflow-hidden bg-white rounded-lg shadow-lg m-5 p-5">
      <div className="w-2/4 bg-cover bg-landscape">
        <UserImage />
      </div>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-gray-900">{person.username}</h1>
        <div className="w-full text-xl font-bold text-gray-500">
          <SlLocationPin className="float-left" />
          {person.address}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          <b>Email:</b> {person.email}
        </p>
        <p className="mt-2 text-sm text-gray-600">
          <b>Hobbies:</b> {person.hobbies}
        </p>
        <h1 className="text-l font-bold text-gray-700">Tel: {person.mobile}</h1>
        <div className="flex justify-between mt-3 item-center">
          <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
            View User
          </button>
        </div>
      </div>
    </div>
  );
};
