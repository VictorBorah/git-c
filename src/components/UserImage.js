"use client";
import React from "react";
import Image from "next/image";

export const UserImage = () => {
  return (
    <Image
      src="https://api.victorborah.cloud/temp/user-avatar.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
};
