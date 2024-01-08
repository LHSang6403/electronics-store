import Combobox from "@components/buttons/ComboBox";

const CategorySections = ({
  categories,
  brandsLines,
}: {
  categories: string[];
  brandsLines: string[][];
}) => {
  const filters: string[] = ["Price", "Brand", "Rating", "Sale", "Functions"];

  return (
    <div className="w-full h-full pt-2 flex flex-col items-center">
      <Heading name="Options" />
      <div className="w-full h-fit mt-4 mb-8 ml-6">
        {filters.map((filter, index) => (
          <Combobox title={filter} key={index} />
        ))}
      </div>
      <Heading name="Category" />
      <div className="w-full mb-8">
        {categories.map((category, index) => (
          <CategorySelection key={index} name={category} />
        ))}
      </div>
      <Heading name="Category" />
      <div className="w-full mb-8">
        {categories.map((category, index) => (
          <CategorySelection key={index} name={category} />
        ))}
      </div>
    </div>
  );
};

const CategorySelection = ({ name }: { name: string }) => {
  return (
    <div className="w-[50%] h-10 mt-2 text-lg flex items-center border-b-[0.6px] border-b-[#AFAFAF] mx-4">
      {name}
    </div>
  );
};

const Heading = ({ name }: { name: string }) => {
  return <h2 className="mx-2 text-2xl font-semibold">{name}</h2>;
};

export default CategorySections;
