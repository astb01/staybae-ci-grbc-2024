import { useNavigate } from 'react-router-dom';

interface SmallCardProps {
  id: string;
  city: string;
  country: string;
  heroImg: string;
  setIsShowFavourites: (val: boolean) => void;
}

const SmallCard = ({
  id,
  city,
  country,
  heroImg,
  setIsShowFavourites,
}: SmallCardProps) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    setIsShowFavourites(false);
    navigate(`/property/${id}`);
  };

  return (
    <div
      className="flex flex-row space-x-4 items-center cursor-pointer hover:shadow-md p-4"
      key={id}
      onClick={onClickHandler}>
      <div className="overflow-hidden rounded-lg w-32">
        <img
          src={heroImg}
          className="object-cover relative w-full h-32"
          alt={`${city}, ${country}`}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold">
          {city}, {country}
        </span>
      </div>
    </div>
  );
};

export default SmallCard;
