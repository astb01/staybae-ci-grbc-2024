import { Link } from 'react-router-dom';
import { useFetchTopPicks } from 'src/hooks/useFetchTopPicks';
import PropertyType from 'src/interfaces/Property';
import MediumCard from '../cards/MediumCard';
import Skeleton from '../skeleton/Skeleton';

const TopPicks = () => {
  const { isLoading, data } = useFetchTopPicks();

  if (isLoading) return <Skeleton />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4">
      {!isLoading &&
        data?.data.map((topPickProperty: PropertyType, tpId: number) => (
          <Link
            to={`/property/${topPickProperty._id}`}
            key={`top-pick-${tpId}`}>
            <MediumCard property={topPickProperty} />
          </Link>
        ))}
    </div>
  );
};

export default TopPicks;
