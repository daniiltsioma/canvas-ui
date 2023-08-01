import Header from "components/Header/Header";
import ImageCard from "components/cards/Card/ImageCard";

interface CardProps {
  imageUrl: string;
  title: string;
  term: string;
  color: string;
}

const Dashboard = () => {
  const cards: CardProps[] = [
    {
      imageUrl: "/assets/images/class-1.jpeg",
      title: "Calculus III",
      term: "Spring 2023",
      color: "#EA580C",
    },
    {
      imageUrl: "/assets/images/class-2.jpeg",
      title: "Physics III",
      term: "Spring 2023",
      color: "#DB2777",
    },
    {
      imageUrl: "/assets/images/class-3.jpg",
      title: "Global Environmental Change",
      term: "Spring 2023",
      color: "#52525B",
    },
  ];

  return (
    <div className="container px-5">
      <Header size="lg">Dashboard</Header>
      <div className="flex space-x-6 pt-5">
        {cards.map((card) => (
          <ImageCard
            key={card.title}
            imageUrl={card.imageUrl}
            title={card.title}
            term={card.term}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
