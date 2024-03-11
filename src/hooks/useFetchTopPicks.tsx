import { useQuery } from 'react-query';
import Axios from 'src/api/Axios';

const fetchTopPickProperties = () => {
  return Axios.get(`/properties`);
};

export const useFetchTopPicks = () => {
  return useQuery(`top-pick-properties`, fetchTopPickProperties);
};
