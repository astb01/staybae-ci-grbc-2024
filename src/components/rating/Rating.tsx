import { useState } from 'react';

interface RatingProps {
  id?: string;
  propertyRating?: number;
  doSingle: boolean;
  ratingScore?: number;
}

const Rating = ({
  id,
  propertyRating = 0,
  doSingle = true,
  ratingScore,
}: RatingProps) => {
  const [rating] = useState(propertyRating);

  return (
    <div>
      {doSingle ? (
        <div className="flex flex-row space-x-1 items-center">
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
            }}
            type="button"
            key={`${id}-star-1`}
            className="on">
            <span className="star">&#9733;</span>
          </button>
          <span className="text-sm">{ratingScore}</span>
        </div>
      ) : (
        [...Array(5)].map((_, idx) => {
          idx += 1;

          return (
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
              }}
              type="button"
              key={`${id}-star-${idx}`}
              className={idx <= rating ? 'on' : 'off'}>
              <span className="star">&#9733;</span>
            </button>
          );
        })
      )}
    </div>
  );
};

export default Rating;
