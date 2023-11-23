interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps): JSX.Element {
  const wholeNumber = Math.floor(rating);
  const decimalNumber = rating - wholeNumber;

  const stars = Array.from({ length: wholeNumber }, (_, i) => (
    <img
      className="w-5 h-5"
      key={i}
      alt={`star-${i}`}
      src="/assets/stars/whole-star.png"
    ></img>
  ));

  if (decimalNumber !== 0) {
    stars.push(
      <img
        className="w-5 h-5"
        key={Math.ceil(rating)}
        alt={`star-${Math.ceil(rating)}`}
        src="/assets/stars/half-star.png"
      ></img>
    );
  }

  return <div className="w-fit h-fit mb-2 flex flex-row gap-2">{stars}</div>;
}
