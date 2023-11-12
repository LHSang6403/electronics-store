import trendingCategories from "../dummyApi/trendingCategories";

interface TrendingCategory {
  id: number;
  name: string;
  image: string;
}

export default function TrendingCategories(): JSX.Element {
  const data: TrendingCategory[] = trendingCategories;

  return (
    <div className="w-full h-full mt-4 flex flex-row justify-center items-center">
      {data.map((item, index) => (
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
          <button className="w-24 h-8 bg-primary text-">Select</button>
        </div>
      ))}
    </div>
  );
}
