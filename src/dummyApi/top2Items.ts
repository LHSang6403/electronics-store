interface TopItem {
  id: number;
  name: string;
  price: number;
  feature: string;
  description: string;
  image: string;
}

const items: TopItem[] = [
  {
    id: 1,
    name: "Arduino V1",
    price: 300000,
    feature: "circut",
    description:
      "Arduino V1, a pinnacle in open-source electronics, offers intuitive electronic platforms for enthusiasts and innovators.",
    image: "/assets/arduino.png",
  },
  {
    id: 2,
    name: "Arduino V3",
    price: 500000,
    feature: "circut",
    description:
      "Fuel creativity with our Arduino modules—compact and perfect for tech enthusiasts to bring their ideas to life.",
    image: "/assets/arduino.png",
  },
];

export default items;
