import { UseQueryOptions, useQuery } from 'react-query';
import Axios from 'src/api/Axios';
import PropertyType from 'src/interfaces/Property';

const fetchProperty = (props: UseQueryOptions): Promise<PropertyType> => {
  const propertyId = props.queryKey ? props.queryKey[1] : 0;

  return Axios.get(`/properties/${propertyId}`).then((res) => res.data);
};

export const useFetchProperty = (
  id?: string,
  onSuccess?: (data: PropertyType) => void,
) => {
  return useQuery([`property-detail`, id], fetchProperty, {
    onSuccess,
  });
};
