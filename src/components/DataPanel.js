import React from "react";
import { PersonCard } from "./PersonCard";

export const DataPanel = ({ people }) => {
  return (
    <div className="flex flex-wrap  content-center">
      {people.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  );
};
