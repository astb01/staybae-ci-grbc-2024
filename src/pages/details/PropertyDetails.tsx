import {
  faCircle as faCircleOutline,
  faGem,
} from '@fortawesome/free-regular-svg-icons';
import { faBath, faBed, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeartIcon as FavouritedHeartIcon } from '@heroicons/react/20/solid';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
  HeartIcon as NotFavouritedHeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingImage from 'src/assets/images/loading-image.gif';
import Rating from 'src/components/rating/Rating';
import useFavourite from 'src/hooks/useFavourite';
import { useFetchProperty } from 'src/hooks/useFetchProperty';
import useProgressiveImage from 'src/hooks/useProgressiveImage';
import PropertyType from 'src/interfaces/Property';

const PropertyDetails = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [currentImageSrc, setCurrentImageSrc] = useState<string>('');

  const loadedImage = useProgressiveImage(currentImageSrc);

  const { id } = useParams();
  const { isFavourite, addFavourite, removeFavourite } = useFavourite();
  const propertyIsSaved = isFavourite(id);

  const onSuccessPropertyLoaded = (successData: PropertyType) => {
    const allPropertyImages = [
      successData?.heroImg,
      // eslint-disable-next-line no-unsafe-optional-chaining
      ...successData?.images,
    ];

    setImages(allPropertyImages);
    setCurrentImageSrc(allPropertyImages[0]);

    window.scrollTo(0, 0);
  };

  const { data } = useFetchProperty(id, onSuccessPropertyLoaded);

  const previousImage = () => {
    const isFirstSlide = currentImage === 0;
    const newImageIdx = isFirstSlide ? images.length - 1 : currentImage - 1;

    setCurrentImage(newImageIdx);
    setCurrentImageSrc(images[newImageIdx]);
  };

  const nextImage = () => {
    const isLastSlide = currentImage === images.length - 1;
    const newImageIdx = isLastSlide ? 0 : currentImage + 1;

    setCurrentImage(newImageIdx);
    setCurrentImageSrc(images[newImageIdx]);
  };

  const switchToImage = (imgIndex: number) => {
    setCurrentImage(imgIndex);
    setCurrentImageSrc(images[imgIndex]);
  };

  const toggleSave = () => {
    console.log('data', data, 'prop saved', propertyIsSaved, 'id', id);

    if (propertyIsSaved && id) {
      removeFavourite(id);
    } else {
      addFavourite(data);
    }
  };

  return (
    <main className="max-w-full px-8 sm:px-16 ml-16 mr-16">
      <div className="flex justify-between ml-4">
        <div className="my-10 w-full md:w-2/3">
          <div className="text-xl md:text-2xl font-semibold">
            {data?.description}
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
              {data && (
                <Rating
                  doSingle={true}
                  id={data?._id}
                  ratingScore={data.rating}
                  propertyRating={data.rating}
                />
              )}
              <span className="m-2">&bull;</span>
              <span className="text-sm mx-2">{data?.numVotes} votes</span>
              <span className="m-2">&bull;</span>
              <span className="text-sm mx-2">
                {data?.city}, {data?.country}
              </span>
            </div>

            {propertyIsSaved ? (
              <div
                className="flex flex-row items-center cursor-pointer"
                onClick={toggleSave}
                title="Click to unsave">
                <FavouritedHeartIcon className="h-6" color="red" />
                <span className="text-sm ml-2">Saved</span>
              </div>
            ) : (
              <div
                className="flex flex-row items-center cursor-pointer"
                onClick={toggleSave}
                title="Click to save">
                <NotFavouritedHeartIcon className="h-6" />
                <span className="text-sm ml-2">Save</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex md:justify-start justify-center">
        <div className="max-w-[1400px] w-full h-[700px] md:w-2/3 py-4 px-4 relative group">
          <div
            style={{
              backgroundImage: `url(${loadedImage || LoadingImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ArrowLeftIcon
              className="h-4"
              onClick={previousImage}
              title="Previous image"
            />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ArrowRightIcon
              className="h-4"
              onClick={nextImage}
              title="Next image"
            />
          </div>
          <div className="flex top-4 justify-center py-2 space-x-3">
            {images?.map((img, imgId) => (
              <div key={`image-${imgId}`}>
                <FontAwesomeIcon
                  icon={imgId === currentImage ? faCircle : faCircleOutline}
                  size="2xs"
                  className="cursor-pointer"
                  onClick={() => switchToImage(imgId)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-row md:flex-col my-10 flex-grow md:inline-block hidden">
          <div className="ml-6 rounded-xl border-2 border-gray-200 shadow-md p-6 h-[350px]">
            <div className="flex justify-between">
              <p className="font-semibold text-lg">
                &pound;{data?.perNightPrice}{' '}
                <span className="text-sm font-light">night</span>
              </p>
              {data && (
                <Rating
                  doSingle={true}
                  id={data._id}
                  ratingScore={data?.rating}
                  propertyRating={data?.rating}
                />
              )}
            </div>

            <button className="bg-pink-600 text-white w-full rounded-lg py-3 mt-10 hover:bg-pink-400">
              Reserve
            </button>

            <div className="font-light text-sm mt-4 text-center">
              You won&apos;t be charged yet
            </div>

            <div className="flex flex-col space-y-3 mt-10">
              {data ? (
                <>
                  <div className="flex justify-between">
                    <div className="text-md font-light">
                      &pound;{data?.perNightPrice} x{' '}
                      {Math.round(data?.totalPrice / data?.perNightPrice)}{' '}
                      nights
                    </div>
                    <div className="font-light text-md">
                      &pound;{data?.perNightPrice}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="text-md font-light">StayBae Admin Fee</div>
                    <div className="font-light text-md">&pound;120</div>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div className="flex justify-between">
                    <div className="text-md font-semibold">Total</div>
                    <div className="font-semibold text-md">
                      &pound;
                      {data?.totalPrice ? data?.totalPrice + 120 : 0}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="ml-6 hidden md:inline-block justify-between mt-10 rounded-lg border-2 border-gray-200 shadow-md p-6 items-center">
            <span className="font-semibold mr-4">This is a rare find</span>
            <FontAwesomeIcon icon={faGem} size="2x" color="#C71585" />
          </div>
        </div>

        <div className="md:hidden flex flex-row fixed justify-between items-center bottom-0 h-16 bg-white w-full border border-t-gray-300">
          <div className="flex flex-col">
            <div>
              <span className="ml-4 text-md font-semibold">
                &pound;{data?.perNightPrice}
              </span>
              &nbsp;
              <span className="text-sm font-light">night</span>
              &nbsp;/&nbsp;&pound;
              {data?.totalPrice ? data?.totalPrice + 120 : 0} total
            </div>
          </div>
          <button className="bg-pink-600 text-white rounded-lg mr-4 p-2 hover:bg-pink-400">
            Reserve
          </button>
        </div>
      </div>

      <div className="flex flex-row mt-10 space-x-2">
        <div className="flex flex-row rounded-xl w-40 border-2 p-4 items-center space-x-2 justify-center">
          <FontAwesomeIcon icon={faBed} />
          <span className="text-xs md:text-sm">{data?.numBeds} bed(s)</span>
        </div>
        <div className="flex flex-row rounded-xl w-40 border-2 p-4 items-center space-x-2 justify-center">
          <FontAwesomeIcon icon={faBath} size="sm" />
          <span className="text-xs md:text-sm">{data?.numToilets} bath(s)</span>
        </div>
        <div className="flex flex-row rounded-xl w-40 border-2 p-4 items-center space-x-2 justify-center">
          <span className="text-xs md:text-sm">{data?.numRooms} room(s)</span>
        </div>
      </div>

      <hr className="w-full m-6 border-1 border-gray-200 mx-auto" />

      <div className="flex flex-col mt-2 space-y-6">
        {data?.sharedProperty && (
          <div className="flex flex-row space-x-4">
            <UserGroupIcon className="h-10" />
            <div className="flex flex-col space-y-3">
              <span className="text-md">Shared Property</span>
              <span className="text-gray-400">
                You are likely to be with more than one person in this property.
              </span>
            </div>
          </div>
        )}
        <div className="flex flex-row space-x-4">
          <MapPinIcon className="h-10" />
          <div className="flex flex-col space-y-3">
            <span className="text-md">Great Location</span>
            <span className="text-gray-400">
              100% of recent guests gave this property a 5 star rating.
            </span>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <ShieldCheckIcon className="h-10" />
          <div className="flex flex-col space-y-3">
            <span className="text-md">Secure</span>
            <span className="text-gray-400">
              Stay knowing you are fully protected.
            </span>
          </div>
        </div>
      </div>

      <hr className="w-full m-6 border-1 border-gray-200 mx-auto" />
    </main>
  );
};

export default PropertyDetails;
