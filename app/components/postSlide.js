"use client";

import Card from "./card";
import { useState } from "react";

export default function PostSlide({ title, cards }) {
  const cardShowed = cards.slice(0, 8); // Display up to 8 cards

  return (
    <div className="my-6">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        <div>
          <button className="text-blue-500">View All</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardShowed.map((card, index) => (
          <Card cardDetails={card} key={index} />
        ))}
      </div>
    </div>
  );
}
