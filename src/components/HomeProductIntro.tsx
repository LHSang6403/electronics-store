import Image from "next/image";

const HomeProductIntro = (): JSX.Element => {
  return (
    <div className="w-full h-full bg-[#FFFFFF] rounded-3xl shadow-sm flex justify-center items-center">
      <Image
        src="/assets/pageImages/kangaroo.jpg"
        alt="Kangaroo Machine"
        width={512}
        height={250}
      />
    </div>
  );
};

export default HomeProductIntro;
