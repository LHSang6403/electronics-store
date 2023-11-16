interface PersonCardProps {
  data: {
    image: string;
    name: string;
    description: string;
  };
}

export default function PersonCard({ data }: PersonCardProps): JSX.Element {
  const { name, image, description } = data;
  return (
    <div className="w-40 h-56 bg-yellow-200">
      {name !== "" && <div className="w-full h-16 bg-yellow-200">{name}</div>}
      <img className="w-40 h-40 object-cover" src={image}></img>
      {description !== "" && <div>{description}</div>}
    </div>
  );
}
