import React from "react";
import Header from "./components/Header/Header";
import Card, { CardProps } from "./components/cards/Card/Card";

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
          {cards.map((cardProps) => (
            <Card key={cardProps.title} {...cardProps} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
