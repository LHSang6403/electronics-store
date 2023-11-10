"user client";
import MainLayout from "./layouts/mainLayout";
import CarouselSlider from "./components/carouselSlider";

export default function Home(): ReturnType<React.FC> {
  return (
    <>
      <MainLayout>
        <main className="flex h-auto min-h-screen flex-col items-center justify-start">
          <div className="w-full h-[500px] bg-slate-200 flex flex-row">
            <div className="w-2/5 h-full pl-12 py-8 flex flex-col">
              <h1 className="w-[88%] text-[36px] font-bold">
                Your go-to destination for top-quality electronic products in
                Vietnam!
              </h1>
              <div className="w-full flex flex-row justify-start items-center">
                <button className="w-28 h-8 my-2 bg-primary text-lg pt-1">
                  Shop now
                </button>
                <hr className="w-[280px] h-[2px] ml-2 bg-primary rounded"></hr>
              </div>
              <p className="w-[84%] mt-1 text-justify">
                At{" "}
                <p className="inline font-bold text-secondary">
                  Electrical Store
                </p>
                , we take pride in being a trustworthy destination for tech
                enthusiasts and electronic lovers. With a professional and
                dedicated team, we are committed to providing customers with the
                best shopping experience.
              </p>
            </div>
            <div className="w-3/5 h-full">
              <CarouselSlider />
            </div>
          </div>
          <div className="w-full h-[350px] bg-red-200">top 4</div>
          <div className="w-full h-[150px] bg-yellow-100">banner</div>
        </main>
      </MainLayout>
    </>
  );
}
