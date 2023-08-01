interface Props {
  imageUrl: string;
  title: string;
  term: string;
  color: string;
}

const ImageCard = ({ imageUrl, title, term, color }: Props) => {
  return (
    <div className="max-w-sm w-[300px] border border-gray-200 drop-shadow-lg rounded-xs">
      <a href="/course" className="relative">
        <img src={imageUrl} alt={title} className="w-full" />
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-60 z-9`}
          style={{ backgroundColor: color }}
        ></div>
      </a>
      <div className="">
        <a href="/course" className="block p-4">
          <div className={`text-md font-semibold`} style={{ color: color }}>
            {title}
          </div>
          <div className="text-sm">{term}</div>
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
