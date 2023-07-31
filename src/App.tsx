import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/cards/Card/Card";
import { getColorClass } from "utils/tailwindUtils";

interface CardProps {
  imageUrl: string;
  title: string;
  term: string;
  color: string;
}

function App() {
  const cards: CardProps[] = [
    {
      imageUrl: "/assets/images/class-1.jpeg",
      title: "Calculus III",
      term: "Spring 2023",
      color: "orange",
    },
    {
      imageUrl: "/assets/images/class-2.jpeg",
      title: "Physics III",
      term: "Spring 2023",
      color: "pink",
    },
    {
      imageUrl: "/assets/images/class-3.jpg",
      title: "Global Environmental Change",
      term: "Spring 2023",
      color: "gray",
    },
  ];

  return (
    <>
      <div className="container px-5">
        <Header>Dashboard</Header>
        <div className="flex space-x-6 pt-5">
          {cards.map((card) => (
            <Card
              key={card.title}
              imageUrl={card.imageUrl}
              title={card.title}
              term={card.term}
              colorClass={getColorClass(card.color, 500)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
