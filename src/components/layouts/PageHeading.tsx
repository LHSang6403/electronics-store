const PageHeading = ({ name }: { name: string }) => {
  return (
    <h1 className="w-fit h-12 font-semibold text-[#424242] text-[60px]">
      {name}
    </h1>
  );
};

export default PageHeading;
