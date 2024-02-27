import React from "react";
import { NUMS, OPERATORS } from "./constant";

export default function Calculator() {
  return (
    <div>
      {NUMS.map((num) => (
        <button type="button">{num}</button>
      ))}
      {OPERATORS.map((op) => (
        <button type="button">{op}</button>
      ))}
    </div>
  );
}
