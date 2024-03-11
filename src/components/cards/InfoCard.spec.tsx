import { render } from '@testing-library/react';
import { describe } from 'vitest';
import InfoCard from './InfoCard';
import { SINGLE_PROPERTY } from 'src/__mocks__/fixtures/property/property';
import { MemoryRouter } from 'react-router-dom';

describe('InfoCard component', () => {
  it('should render as expected', async () => {
    const property = SINGLE_PROPERTY('1');

    const { findByTestId, getByTestId } = render(
      <MemoryRouter>
        <InfoCard property={property} />
      </MemoryRouter>,
    );

    expect(await findByTestId('info-card')).toBeInTheDocument();
    expect(getByTestId('property-caption')).toHaveTextContent(property.caption);
    expect(getByTestId('property-desc')).toHaveTextContent(
      property.description,
    );
  });
});
