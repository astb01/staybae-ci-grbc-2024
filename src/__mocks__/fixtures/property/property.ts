export const SINGLE_PROPERTY = (id: string) => {
  return {
    _id: id,
    city: 'Los Angeles, California',
    country: 'USA',
    lat: 34.053691,
    lon: -118.242766,
    description: 'Two bedroom house in LA',
    caption: 'Live with the stars',
    rating: 4.2,
    perNightPrice: 120.0,
    totalPrice: 571.0,
    heroImg: 'https://source.unsplash.com/YAPZt8wxMO4',
    images: [
      'https://source.unsplash.com/vOa-PSimwg4',
      'https://source.unsplash.com/g51F6-WYzyU',
      'https://source.unsplash.com/OPTtVaI8H2Q',
    ],
    dateFrom: '2023-11-01T00:00:00Z',
    dateTo: '2023-11-07T00:00:00Z',
    numRooms: 2,
    numBeds: 2,
    numToilets: 2,
    numVotes: 500,
    sharedProperty: true,
    region: 'United States',
  };
};
