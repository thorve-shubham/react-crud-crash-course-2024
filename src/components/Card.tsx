import React from "react";

type CardProps = {
  children: any;
  bg?: string;
};

export const Card: React.FC<CardProps> = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};
