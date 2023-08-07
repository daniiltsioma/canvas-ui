import { Link } from "react-router-dom";

interface Props {
  url: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  color: string;
}

const ImageCard = ({ url, imageUrl, title, subtitle, color }: Props) => {
  return (
    <div className="max-w-sm w-[300px] border border-gray-200 drop-shadow-lg rounded-xs">
      <Link to={url} className="relative">
        <img src={imageUrl} alt={title} className="w-full" />
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-60 z-9`}
          style={{ backgroundColor: color }}
        ></div>
      </Link>
      <div>
        <Link to={url} className="block p-4">
          <div className={`text-md font-semibold`} style={{ color: color }}>
            {title}
          </div>
          <div className="text-sm">{subtitle}</div>
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
