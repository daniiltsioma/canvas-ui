interface Props {
  imageUrl: string;
  title: string;
  term: string;
  colorClass: string;
}

const Card = ({ imageUrl, title, term, colorClass }: Props) => {
  return (
    <div className="max-w-sm w-[300px] border border-gray-200 shadow">
      <a href="#">
        <img src={imageUrl} alt={title} className="w-full" />
      </a>
      <div className="">
        <a href="#" className="block p-4">
          <div className={`text-md ${colorClass} font-semibold`}>{title}</div>
          <div className="text-sm">{term}</div>
        </a>
      </div>
    </div>
  );
};

export default Card;
