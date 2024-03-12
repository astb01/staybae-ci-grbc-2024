import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faApple,
  faFacebook,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGem } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SlimCard from 'src/components/cards/SlimCard';
import PropertyType from 'src/interfaces/Property';

const MakeBooking = () => {
  const [propertyDetails, setPropertyDetails] = useState<PropertyType>();
  const [payType, setPayType] = useState('full');
  const [dateRange, setDateRange] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.state?.propertyDetails) {
      setPropertyDetails(location.state.propertyDetails);
      const formattedStartDate = format(
        new Date(location.state.propertyDetails.dateFrom),
        'd',
      );
      const formattedEndDate = format(
        new Date(location.state.propertyDetails.dateTo),
        'd MMM',
      );
      setDateRange(`${formattedStartDate} - ${formattedEndDate}`);
    }
  }, []);

  return (
    <main className="max-w-full px-8 sm:px-16 ml-16 mr-16 my-10">
      {propertyDetails ? (
        <div className="flex flex-col space-y-6">
          <Link to={`/property/${propertyDetails._id}`}>
            <span className="font-medium text-lg ml-20 underline">
              &lt; Back to property details
            </span>
          </Link>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col space-y-4 w-1/2">
              <div className="flex flex-row border border-gray-200 rounded-md justify-between p-8">
                <div className="flex flex-col justify-center">
                  <span className="font-medium">This is a rare find</span>
                  <span className="font-light">
                    This place is usually booked.
                  </span>
                </div>
                <FontAwesomeIcon icon={faGem} size="2x" color="#C71585" />
              </div>

              <div className="flex flex-col space-y-6">
                <h2 className="text-xl">Your trip</h2>
                <div className="flex flex-col space-y-1">
                  <span>Dates</span>
                  <div className="flex flex-row justify-between">
                    <span className="font-light text-sm">{dateRange}</span>
                    <span className="underline">Edit</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <span>Guests</span>
                  <div className="flex flex-row justify-between">
                    <span className="font-light text-sm">1</span>
                    <span className="underline">Edit</span>
                  </div>
                </div>

                <div className="h-0 border border-gray-200"></div>

                <h2 className="text-xl">Choose how to pay</h2>

                <div className="flex flex-col">
                  <div
                    className={`flex flex-row p-8 justify-between rounded-t-lg ${
                      payType === 'full'
                        ? 'border-2 border-black'
                        : 'border border-top-gray-200'
                    }`}>
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium">Pay in full</span>
                      <span className="font-light text-sm">
                        Pay the total (&pound;{propertyDetails?.totalPrice})
                      </span>
                    </div>
                    <input
                      type="radio"
                      name="payType"
                      checked={payType === 'full'}
                      onChange={() => setPayType('full')}
                    />
                  </div>
                  <div
                    className={`flex flex-row p-8 justify-between ${
                      payType === 'klarna'
                        ? 'border-2 border-black'
                        : 'border border-b-gray-200'
                    } `}>
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium">
                        Pay in 3 payments with Klarna
                      </span>
                      <span className="font-light text-sm">
                        3 payments of the total (&pound;
                        {Math.round(propertyDetails.totalPrice / 3).toFixed(2)}
                        )&nbsp;each (0 % APR).{' '}
                        <span className="font-medium underline">More info</span>
                      </span>
                    </div>
                    <input
                      type="radio"
                      name="payType"
                      checked={payType === 'klarna'}
                      onChange={() => setPayType('klarna')}
                    />
                  </div>
                </div>

                <div className="h-0 border border-gray-200"></div>

                <h2 className="text-xl">Log in or sign up to book</h2>

                <div className="flex flex-col border border-gray-200 rounded-md">
                  <div className="flex flex-col border-b border-gray-200 w-full p-4">
                    <span className="font-light">United Kingdom (+44)</span>
                  </div>
                  <div className="flex flex-col p-4">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="flex flex-col relative -top-4">
                  <span className="text-xs text-gray-500 font-light">
                    We&apos;ll call or text you to confirm your number. Standard
                    message and data rates apply.{' '}
                    <span className="font-medium underline">
                      Privacy Policy
                    </span>
                  </span>
                </div>

                <button className="bg-pink-600 text-white w-full rounded-lg py-3 mt-10 hover:bg-pink-400">
                  Continue
                </button>

                <div className="flex flex-row space-x-4 justify-between items-center">
                  <div className="h-0 border border-gray-200 w-full"></div>
                  <span className="text-sm text-gray-500">or</span>
                  <div className="h-0 border border-gray-200 w-full"></div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex flex-row justify-between items-center space-x-4">
                    <div className="border border-gray-300 rounded-md w-1/3 flex p-4 justify-center">
                      <FontAwesomeIcon
                        icon={faFacebook as IconProp}
                        size={'lg'}
                      />
                    </div>
                    <div className="border border-gray-300 rounded-md w-1/3 flex p-4 justify-center">
                      <FontAwesomeIcon
                        icon={faGoogle as IconProp}
                        size={'lg'}
                      />
                    </div>
                    <div className="border border-gray-300 rounded-md w-1/3 flex p-4 justify-center">
                      <FontAwesomeIcon icon={faApple as IconProp} size={'lg'} />
                    </div>
                  </div>
                  <div>
                    <button className="border flex flex-row items-center px-5 border-black text-black w-full rounded-lg py-3 mt-10 hover:bg-gray-100">
                      <FontAwesomeIcon icon={faEnvelope} className="" />

                      <span className="text-sm mx-auto font-light">
                        Continue with email
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[500px]">
              <div className="flex flex-col border border-gray-200 rounded-md px-4 py-6 space-y-4">
                <SlimCard property={propertyDetails} />
                <div className="h-0 border border-gray-200"></div>

                <h2 className="text-xl">Price details</h2>

                <div className="flex flex-col space-y-3 w-full">
                  <div className="flex flex-row justify-between items-center w-full">
                    <span className="font-light">
                      &pound;{propertyDetails.perNightPrice}&nbsp;x&nbsp;8
                      nights
                    </span>
                    <span className="font-light">
                      &pound;{propertyDetails.totalPrice}
                    </span>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <span className="font-light underline">Cleaning fee</span>
                    <span className="font-light">&pound;65.00</span>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <span className="font-light underline">
                      Staybae service fee
                    </span>
                    <span className="font-light">&pound;350.00</span>
                  </div>

                  <div className="h-0 border border-gray-200"></div>

                  <div className="flex flex-row justify-between items-center w-full">
                    <span className="underline font-medium">Total (GBP)</span>
                    <span className="font-light">
                      &pound;
                      {Math.round(
                        65 + 350 + propertyDetails.totalPrice,
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>Loading ....</>
      )}
    </main>
  );
};

export default MakeBooking;
