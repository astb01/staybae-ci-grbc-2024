import { useNavigate } from 'react-router-dom';
import HeroImage from '../../assets/images/hero-image.jpeg';

const Banner = () => {
  const navigate = useNavigate();

  const handleFlexibleSearch = () => {
    const endDate = new Date();
    endDate.setFullYear(new Date().getFullYear() + 10);

    navigate('/search', {
      replace: true,
      state: {
        startDate: new Date().toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: 10,
      },
    });
  };

  return (
    <div className="flex flex-col relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <img
        src={HeroImage}
        alt={'hero'}
        className="w-full object-cover min-h-0"
      />
      <div className="absolute top-1/2 w-full text-center text-white">
        <p className="sm:text-lg text-sm">Not sure where to go? We can help.</p>

        <button
          className="text-orange-500 px-10 py-4 bg-white rounded-full cursor-pointer mt-2 font-bold 
      hover:bg-black hover:text-white active:scale-90 transition duration-150 hover:border-orange-500 
      border-transparent border-2"
          onClick={handleFlexibleSearch}>
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
