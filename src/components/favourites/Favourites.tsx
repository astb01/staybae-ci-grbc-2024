/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext } from 'react';
import FavouriteContext from 'src/context/FavouritesContext';
import { XCircleIcon } from '@heroicons/react/24/outline';
import SmallCard from '../cards/SmallCard';

interface FavouriteProps {
  setIsShowFavourites: (val: boolean) => void;
}

const Favourites = ({ setIsShowFavourites }: FavouriteProps) => {
  const { favourites, totalFavourites } = useContext(FavouriteContext);

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)] ease-in-out duration-500"
      onClick={() => setIsShowFavourites(false)}>
      <div
        className="bg-white w-[350px] h-full absolute right-0 ease-in-out duration-300"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between relative top-28 mx-4 items-center bg-orange-600 p-4 text-white">
            <XCircleIcon
              className="h-6 cursor-pointer hover:scale-105"
              onClick={() => setIsShowFavourites(false)}
            />
            <h1 className="text-md">Favourites&nbsp;({totalFavourites})</h1>
          </div>

          {favourites.length === 0 && (
            <span className="relative text-sm mt-36 m-6">
              You have no favourites saved
            </span>
          )}

          <ul className="relative mt-36 mx-4">
            {favourites?.map((favourite) => (
              <li key={`${favourite._id}`}>
                <SmallCard
                  id={favourite._id!}
                  city={favourite.city}
                  country={favourite.country}
                  heroImg={favourite.heroImg}
                  setIsShowFavourites={setIsShowFavourites}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
