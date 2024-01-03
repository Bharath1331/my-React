import React from "react";

export default function Hero({ name }) {
  if (name === "Joker") {
    throw new Error("Not a hero"); // 抛出一个错误
  }
  return <div>Hero {name}</div>;
}
