import SquareBanner from "../components/squareBanner";
import PersonCard from "../components/personCard";
import TimeLine from "../components/timeLine";
import {
  bannerData as banner,
  highlightCartList as highlightCard,
  personCardList as personCard,
} from "../dummyApi/about";

interface HighlightCartProps {
  title: string;
  content: string;
}

interface SquareBannerProps {
  image: string;
  title: string;
  description: string;
}

interface PersonCardProps {
  name: string;
  image: string;
  description: string;
}

function HighlightCart({ title, content }: HighlightCartProps): JSX.Element {
  return (
    <div className="w-full h-full p-1 flex flex-col justify-center items-center">
      <h2 className="text-primary text-xl sm:text-base font-medium">{title}</h2>
      <p className="h-10 text-center text-[14px]">{content}</p>
    </div>
  );
}

export default function About(): JSX.Element {
  const bannerData: SquareBannerProps = banner;
  const highlightCartList: HighlightCartProps[] = highlightCard;
  const personCardList: PersonCardProps[] = personCard;

  return (
    <div className="w-full h-auto">
      <div className="w-full overflow-hidden h-fit pt-2 flex flex-row sm:flex-col justify-center items-center sm:gap-4">
        <div className="w-fit h-fit transform skew-x-[20deg] overflow-hidden flex justify-center items-center p-2 sm:pt-0 sm:px-4">
          <div className="transform skew-x-[-20deg]">
            <SquareBanner data={bannerData} />
          </div>
        </div>
        <div className="w-1/2 xl:w-full h-[460px] sm:h-fit flex flex-col justify-center items-center p-2 pl-0">
          <h1 className="w-[90%] text-3xl font-semibold">
            I am [Founder&apos;s Name] - founder of this store
          </h1>
          <p className="w-[90%] font-light text-justify">
            At the helm of our electronic haven is [Founder&apos;s Name], a tech
            trailblazer who has dedicated years to shaping the landscape of
            online electronics retail. [Founder&apos;s Name]&apos;s commitment
            to quality, customer satisfaction, and staying ahead in the
            ever-evolving tech world defines the ethos of our store.
          </p>
          <hr className="w-[90%] h-[1px] my-2 border-none bg-black"></hr>
          <div className="w-[90%] h-fit sm:pb-2 sm:overflow-auto flex flex-row justify-start items-center gap-2">
            {highlightCartList.map((each, index) => (
              <div className="w-fit h-fit rounded-lg" key={index}>
                <HighlightCart title={each.title} content={each.content} />
              </div>
            ))}
          </div>
          <hr className="w-[90%] h-[1px] my-2 border-none bg-black"></hr>
        </div>
      </div>
      <div className="w-full h-fit mt-4 py-4 flex flex-row justify-center items-center text-3xl font-medium">
        Our Story
      </div>
      <div className="w-full h-fit mt-8 px-20 sm:px-4 font-light text-justify">
        At our electronic store, we embarked on a journey driven by a passion
        for technology and a commitment to providing a seamless and innovative
        shopping experience. Recognizing the ever-growing demand for
        cutting-edge gadgets and electronics, we established this store as a
        haven for tech enthusiasts, offering a curated selection of the latest
        products. Our mission is to not only meet but exceed the expectations of
        our customers by combining expert guidance, exclusive deals, and a
        dedication to staying at the forefront of technological advancements.
        Welcome to our electronic emporium, where we believe that technology
        should be accessible, exciting, and tailored to enhance every aspect of
        your life.
      </div>
      <div className="w-full h-fit bg-black rounded-t-[36px] text-white mt-8 pt-8 pb-2 flex flex-row justify-center items-center text-3xl font-medium">
        Our Mission
      </div>
      <div className="w-full h-fit bg-black text-white py-8 px-20 sm:px-4 font-light text-justify">
        As an electronic store, our responsibility is clear: deliver quality
        tech solutions, provide transparent information, and prioritize customer
        satisfaction. We are committed to eco-friendly practices, aiming to make
        responsible choices easier for you. At our store, your tech journey is
        our priority, and we are here to ensure it is seamless, sustainable, and
        satisfying.
      </div>
      <div className="w-full h-fit bg-black text-white pt-6 py-4 flex flex-row justify-center items-center text-3xl font-medium">
        Meet Our Cores
      </div>
      <div className="w-full h-full rounded-b-[36px] bg-black py-2">
        <div className="w-auto mx-4 h-fit overflow-hidden flex flex-row  justify-center items-end">
          <ul className="w-fit h-fit py-8  flex flex-row sm:flex-col justify-center items-end gap-4">
            <li className="w-52 h-[370px] sm:hidden" key="0">
              <PersonCard data={personCardList[personCardList.length - 1]} />
            </li>
            {personCardList.map((each, index) => (
              <li
                className={`w-full mx-auto ${
                  index === Math.floor(personCardList.length / 2)
                    ? "h-[450px]"
                    : "h-[420px]"
                }`}
                key={index}
              >
                <PersonCard data={each} />
              </li>
            ))}
            <li className="w-52 h-[400px] sm:hidden" key="4">
              <PersonCard data={personCardList[0]} />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-fit pt-8 pb-2 flex flex-row justify-center items-center text-3xl font-medium">
        Our Story
      </div>
      <div className="w-full h-fit mt-8 px-32 sm:px-4 pb-8 flex flex-row justify-center items-center">
        <TimeLine />
      </div>
    </div>
  );
}
