import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import PropertyType from 'src/interfaces/Property';

type InfoCardProps = {
  property: PropertyType;
};

const InfoCard = ({ property }: InfoCardProps) => {
  return (
    <Link to={`/property/${property._id}`}>
      <div
        className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
        data-testid={'info-card'}>
        <div className="overflow-hidden rounded-lg flex-shrink-0">
          <img
            alt={property.description}
            src={property.heroImg}
            className="relative h-24 w-40 md:h-40 md:w-80 object-cover"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
            <p>
              {property.city}, {property.country}
            </p>
          </div>

          <div className="text-xl" data-testid={'property-caption'}>
            {property.caption}
          </div>

          <div className="border-b w-10 pt-2" />

          <div
            className="pt-2 text-sm text-gray-500"
            data-testid={'property-desc'}>
            {property.description}
          </div>

          <div className="flex justify-between items-end pt-5">
            <div className="flex items-center justify-center">
              <StarIcon className="h-5 text-red-400" />
              {property.rating}
            </div>

            <div>
              <p className="pt-2 font-semibold text-lg lg:text-2xl">
                &pound;{property.perNightPrice}/night
              </p>
              <p className="pt-2 font-extralight text-right">
                &pound;{property.totalPrice} total
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
