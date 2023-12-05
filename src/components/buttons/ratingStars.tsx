import Image from "next/image";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps): JSX.Element {
  const wholeNumber = Math.floor(rating);
  const decimalNumber = rating - wholeNumber;

  const stars = Array.from({ length: wholeNumber }, (_, i) => (
    <div key={i} className="w-4 h-4">
      <Image
        alt={`Rating Star ${i}`}
        src="/assets/stars/whole-star.png"
        layout="fixed"
        width={20}
        height={20}
      />
    </div>
  ));

  if (decimalNumber !== 0) {
    stars.push(
      <div key={Math.ceil(rating)} className="w-4 h-4">
        <Image
          alt={`Rating Star ${Math.ceil(rating)}`}
          src="/assets/stars/half-star.png"
          layout="fixed"
          width={20}
          height={20}
        />
      </div>
    );
  }

  return <div className="w-fit h-fit mb-2 flex flex-row gap-2">{stars}</div>;
}
