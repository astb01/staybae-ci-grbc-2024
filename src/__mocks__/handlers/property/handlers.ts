import { http, HttpResponse } from 'msw';
import { SINGLE_PROPERTY } from 'src/__mocks__/fixtures/property/property';

const BASE_PATH_URI = '*/property';

export const handlers = [
  http.get(`${BASE_PATH_URI}/:id`, () => {
    return HttpResponse.json(SINGLE_PROPERTY);
  }),
];
