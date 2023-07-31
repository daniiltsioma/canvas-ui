export interface CardProps {
  imageUrl: string;
  title: string;
  term: string;
  color: string;
}

const Card = ({ imageUrl, title, term, color }: CardProps) => {
  return (
    <div className="max-w-sm w-[300px] border border-gray-200 shadow">
      <a href="#">
        <img src={imageUrl} alt={title} className="w-full" />
      </a>
      <div className="">
        <a href="#" className="block p-4">
          <div className={`text-md text-500 font-semibold`}>{title}</div>
          <div className="text-sm">{term}</div>
        </a>
      </div>
    </div>
  );
};

export default Card;
