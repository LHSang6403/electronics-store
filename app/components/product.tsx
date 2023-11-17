interface ProductData {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
}

export default function Product(props: ProductData): JSX.Element {
  const data: ProductData = props;

  return (
    <div className="w-36 h-48 mx-2 my-4 rounded-xl shadow-lg flex flex-col items-center justify-start bg-[#EEEEEE] hover:cursor-pointer">
      <div className="p-1 pb-0">
        <img
          className="w-36 h-32 object-cover rounded-[12px] shadow-lg bg-black"
          alt={`img-${data.id}`}
          src={data.image}
        ></img>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="w-full px-2  text-lg overflow-hidden whitespace-nowrap overflow-ellipsis">
          {data.name}
        </h1>
        <div className="w-full px-3 flex flex-row justify-between flex-start">
          <div className="text-sm flex flex-row justify-center items-center">
            <p>{data.rating}</p>
            <img
              className="w-3 h-3 ml-0.5"
              alt="star"
              src="/assets/star.png"
            ></img>
          </div>
          <h2 className="text-sm">{data.price}</h2>
        </div>
      </div>
    </div>
  );
}
