"use client";

import React from "react";
import ReactTimeago from "react-timeago";

type TimeProps = {
  className: string;
  createAt: Date;
};

const Timestamp = ({ createAt, className }: TimeProps) => {
  return (
    <ReactTimeago
      date={createAt}
      formatter={(value, unit, suffix, epochMilliseconds, nextFormatter) => {
        if (unit === "second") {
          return `${value}${unit[0]}`;
        } else if (unit === "minute") {
          return `${value}${unit[0]}`;
        } else if (unit === "hour") {
          return `${value}${unit[0]}`;
        } else if (unit === "day") {
          return `${value}${unit[0]}`;
        } else if (unit === "week") {
          return `${value}${unit[0]}`;
        } else if (unit === "month") {
          return `${value}${unit[0]}`;
        } else {
          return nextFormatter?.(value, unit, suffix, epochMilliseconds);
        }
      }}
    />
  );
};

export default Timestamp;
