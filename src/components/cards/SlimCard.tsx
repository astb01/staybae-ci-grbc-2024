import PropertyType from 'src/interfaces/Property';
import { StarIcon } from '@heroicons/react/20/solid';

type SlimCardProps = {
  property: PropertyType;
};

const SlimCard = ({ property }: SlimCardProps) => {
  return (
    <div className="flex flex-row space-x-4 cursor-pointer hover:shadow-md p-4">
      <div className="overflow-hidden rounded-lg flex-shrink-0">
        <img
          src={property.heroImg}
          alt={property.description}
          className="relative h-24 w-40 md:w-28 md:h-28 object-cover"
        />
      </div>

      <div className="flex flex-col justify-between py-5">
        <span className="font-light text-sm">Entire accomodation!</span>
        <span className="font-light text-sm">{property.caption}</span>
        <div className="flex items-center space-x-1">
          <StarIcon className="h-3 text-red-400" />
          <span className="text-xs text-gray-600 font-light">
            {property.rating}
          </span>
          <span className="text-xs text-gray-600 font-light">
            ({property.numVotes} votes)
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlimCard;
