import { http, HttpResponse } from 'msw';
import { ALL_PROPERTIES } from '../../fixtures/properties/properties';

const BASE_PATH_URI = '*/properties';

export const handlers = [
  http.get(`${BASE_PATH_URI}`, () => {
    return HttpResponse.json(ALL_PROPERTIES);
  }),
  http.get(`${BASE_PATH_URI}/:id`, async ({ params }) => {
    const { id } = params;

    ALL_PROPERTIES.find((prop) => `${prop._id}` === id);

    return HttpResponse.json(
      ALL_PROPERTIES.find((prop) => `${prop._id}` === id),
    );
  }),
];
