interface Props {
  imageUrl?: string;
  title: string;
  description: string;
  name: string;
}

const ListCard = ({ imageUrl, title, description, name }: Props) => {
  return (
    <div className="flex items-center space-x-4 p-6">
      <div className="shrink-0">
        <img
          src={imageUrl || "/assets/images/user.jpeg"}
          alt={name}
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-md font-medium truncate text-gray-900">{title}</p>
        <p className="w-2/3 text-md truncate text-gray-500 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ListCard;
