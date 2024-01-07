const PageHeading = ({ name }: { name: string }) => {
  return (
    <h1 className="font-semibold text-[#424242] w-fit h-fit text-[70px] -mb-6 ml-10 xl:ml-0 sm:ml-3">
      {name}
    </h1>
  );
};

export default PageHeading;
