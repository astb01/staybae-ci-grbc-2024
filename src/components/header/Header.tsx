import { Link, useNavigate } from 'react-router-dom';
import StayBaeLogo from '../../assets/images/staybae.png';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import { useState } from 'react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';

// region images:
import RegionFlexible from '../../assets/images/region-flexible.jpeg';
import RegionUsa from '../../assets/images/region-usa.png';
import RegionAsia from '../../assets/images/region-asia.png';
import RegionEu from '../../assets/images/region-eu.png';
import RegionAus from '../../assets/images/region-aus.png';
import RegionSouthAmerica from '../../assets/images/region-south-america.png';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type Props = {
  setIsShowFavourites: (val: boolean) => void;
};

const Header = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
  const [showRegions, setShowRegions] = useState<boolean>(false);
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const navigate = useNavigate();

  const handleSelectedDate = (ranges: RangeKeyDict) => {
    if (ranges && ranges?.selection) {
      const { startDate, endDate } = ranges.selection;

      if (startDate) {
        setStartDate(startDate);
      }
      if (endDate) {
        setEndDate(endDate);
      }
    }
  };

  const resetInput = () => {
    setSearchTerm('');
  };

  const handleSearch = () => {
    setSearchTerm('');
    setShowRegions(false);

    navigate('/search', {
      replace: true,
      state: {
        location: searchTerm,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  const handleRegionSearch = (region: string) => {
    const endDate = new Date();
    endDate.setFullYear(new Date().getFullYear() + 10);

    setShowRegions(false);
    setSearchTerm('');

    navigate('/search', {
      replace: true,
      state: {
        region,
        startDate: new Date().toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: 10,
      },
    });
  };

  const toggleRegions = () => {
    setShowRegions(!showRegions);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
      <Link to={'/home'}>
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <img
            src={StayBaeLogo}
            alt="alt"
            title="StayBae"
            height={50}
            width={50}
          />

          <span className="text-md md:text-4xl font-bold ml-2" title="Staybae">
            StayBae
          </span>
        </div>
      </Link>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm hover:shadow-md">
        <div
          className="ml-4 rounded-lg text-gray-700 text-sm cursor-pointer"
          title="Find a property by region"
          onClick={toggleRegions}>
          Anywhere
        </div>

        <input
          type="text"
          name="search"
          id="searchId"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Start your search ..."
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2 text-white cursor-pointer md:mx-2" />
      </div>

      <div
        className="flex space-x-4 items-center justify-end"
        onClick={() => props.setIsShowFavourites(true)}>
        <div className="flex sm:space-x-2 cursor-pointer border-2 rounded-full p-4 hover:shadow-md">
          <p className="text-sm hidden md:inline-block">Favourites</p>
          <HeartIcon className="h-6" color="red" />
        </div>
      </div>

      {showRegions && (
        <div className="absolute top-20 z-10 left-1/4 flex flex-col col-span-2 w-[500px] mx-auto bg-white rounded-3xl border-2 border-gray-100 mt-2 p-2">
          <p className="font-medium p-2 ml-4">Search by region</p>

          <div className="grid grid-cols-3 gap-3 mt-3 mx-auto">
            <div className="flex flex-col items-center">
              <div
                className="border-2 rounded-lg border-gray-300 h-32 w-32 overflow-hidden"
                onClick={() => handleRegionSearch('Worldwide')}>
                <img
                  src={RegionFlexible}
                  alt="I'm flexible"
                  className="object-cover h-full hover:scale-105 cursor-pointer"
                />
              </div>
              <span className="text-sm font-light">I&apos;m flexible</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="border-2 rounded-lg border-gray-300 h-32 w-32 overflow-hidden"
                onClick={() => handleRegionSearch('United States')}>
                <img
                  src={RegionUsa}
                  alt="USA"
                  className="object-cover h-full hover:scale-105 cursor-pointer"
                />
              </div>
              <span className="text-sm font-light">United States</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="border-2 rounded-lg border-gray-300 h-32 w-32 overflow-hidden"
                onClick={() => handleRegionSearch('South America')}>
                <img
                  src={RegionSouthAmerica}
                  alt="South America"
                  className="object-cover h-full hover:scale-105 cursor-pointer"
                />
              </div>
              <span className="text-sm font-light">South America</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="border-2 rounded-lg border-gray-300 h-32 w-32 overflow-hidden"
                onClick={() => handleRegionSearch('Europe')}>
                <img
                  src={RegionEu}
                  alt="Europe"
                  className="object-cover h-full hover:scale-105 cursor-pointer"
                />
              </div>
              <span className="text-sm font-light">Europe</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="border-2 rounded-lg border-gray-300 h-32 w-32 overflow-hidden"
                onClick={() => handleRegionSearch('Asia')}>
                <img
                  src={RegionAsia}
                  alt="Asia"
                  className="object-cover h-full hover:scale-105 cursor-pointer"
                />
              </div>
              <span className="text-sm font-light">Asia</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="flex flex-col items-center border-2 rounded-lg border-gray-300 h-32 w-32 overflow-hidden"
                onClick={() => handleRegionSearch('Australia')}>
                <img
                  src={RegionAus}
                  alt="Australia"
                  className="object-cover h-full hover:scale-105 cursor-pointer"
                />
              </div>
              <span className="text-sm font-light">Australia</span>
            </div>
          </div>
        </div>
      )}

      {searchTerm && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5861']}
            onChange={handleSelectedDate}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />

            <input
              type="number"
              id="numberOfGuestsId"
              min={1}
              value={numberOfGuests}
              onChange={(e) =>
                setNumberOfGuests(e.target.value as unknown as number)
              }
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={handleSearch} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
