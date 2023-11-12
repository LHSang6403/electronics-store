interface TrendingCategory {
  id: number;
  name: string;
  image: string;
}
export default function TrendingCategories(): JSX.Element {
  const trendingCategories: TrendingCategory[] = [
    {
      id: 1,
      name: "Laptop",
      image: "/assets/trendingCategories/trending-category-1.png",
    },
    {
      id: 2,
      name: "Smartphone",
      image: "/assets/trendingCategories/trending-category-1.png",
    },
    {
      id: 3,
      name: "Tablet",
      image: "/assets/trendingCategories/trending-category-1.png",
    },
    {
      id: 4,
      name: "Smartwatch",
      image: "/assets/trendingCategories/trending-category-1.png",
    },
    {
      id: 5,
      name: "Headphone",
      image: "/assets/trendingCategories/trending-category-1.png",
    },
  ];

  return (
    <div className="w-full h-full mt-4 flex flex-row justify-center items-center">
      {trendingCategories.map((item, index) => (
        <div
          className="w-44 h-52 mx-2 shadow-md flex flex-col justify-center items-center bg-[#EEEEEE]"
          key={item.id}
        >
          <img
            className="w-32 h-32 rounded-full"
            alt={`category-img-${item.id}`}
            src={item.image}
          ></img>
          <p className="h-8 text-xl">{item.name}</p>
          <button className="w-28 h-8 bg-primary text-">Select</button>
        </div>
      ))}
    </div>
  );
}
