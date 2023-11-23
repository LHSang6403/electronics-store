interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Best quality",
    description: "Our commitment to excellence shines through all products.",
    image: "/assets/cards/quality-icon.png",
  },
  {
    id: 2,
    title: "Best price",
    description: "Discover unbeatable value without compromising on quality.",
    image: "/assets/cards/price-icon.png",
  },
  {
    id: 3,
    title: "Guarantee",
    description:
      "Shop with confidence knowing that your satisfaction is top priority.",
    image: "/assets/cards/guarantee-icon.png",
  },
  {
    id: 4,
    title: "Best service",
    description:
      "Experience personalized service that goes beyond the transaction.",
    image: "/assets/cards/service-icon.png",
  },
];

export default cards;
