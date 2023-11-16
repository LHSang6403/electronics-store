import SquareBanner from "../components/squareBanner";
import PersonCard from "../components/personCard";

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

const bannerData: SquareBannerProps = {
  image:
    "https://nhaantoan.com/wp-content/uploads/2019/04/videoblocks-asian-business-man-at-outdoor_bfelhc91z_thumbnail-full01.png",
  title: "",
  description: "",
};

const highlightCartList: HighlightCartProps[] = [
  {
    title: "5,000+",
    content: "Reliable Products.",
  },
  {
    title: "7,000+",
    content: "Online Customers.",
  },
  {
    title: "10,000+",
    content: "Technical Experts.",
  },
  {
    title: "15,000+",
    content: "Exclusive Deals & Promotions.",
  },
];

const personCardList: PersonCardProps[] = [
  {
    name: "John Doe",
    image:
      "https://vietmytravel.com/wp-content/uploads/2023/01/portrait-of-businessman-nguyen-ba-lich.jpg",
    description:
      "Passionate about technology and innovation. Join me in exploring the world of possibilities!",
  },
  {
    name: "Jane Smith",
    image:
      "https://media.istockphoto.com/id/1129638598/photo/businessman-in-suit-looking-at-camera-making-conference-video-call.jpg?s=612x612&w=0&k=20&c=K1ufuNnodv6yPNnG9Sih6QT7O-fvfz33NnWcg1nDvgQ=",
    description:
      "Dedicated to creating meaningful connections through design and creativity.",
  },
  {
    name: "Alex Johnson",
    image:
      "https://us.images.westend61.com/0001455983pw/businessman-working-on-laptop-while-sitting-at-office-RBF07918.jpg",
    description:
      "Enthusiastic coder and problem solver. Let's build a better future through technology!",
  },
];

function HighlightCart({ title, content }: HighlightCartProps): JSX.Element {
  return (
    <div className="w-full h-full p-1 flex flex-col justify-center items-center">
      <h2 className="text-primary text-xl font-medium">{title}</h2>
      <p className="h-10 text-center text-[12px]">{content}</p>
    </div>
  );
}

export default function About(): JSX.Element {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-fit pt-2 flex flex-row justify-center items-center">
        <div className="w-fit h-[460px] transform skew-x-[20deg] overflow-hidden flex justify-center items-center p-2">
          <div className="rounded-3xl overflow-hidden transform skew-x-[-20deg]">
            <SquareBanner data={bannerData} />
          </div>
        </div>
        <div className="w-1/2 h-[460px] flex flex-col justify-center items-center p-2 pl-0">
          <h1 className="w-[90%] text-3xl font-semibold">
            I am [Founder&apos;s Name] - founder of this store
          </h1>
          <p className="w-[90%] text-justify">
            At the helm of our electronic haven is [Founder&apos;s Name], a tech
            trailblazer who has dedicated years to shaping the landscape of
            online electronics retail. [Founder&apos;s Name]&apos;s commitment
            to quality, customer satisfaction, and staying ahead in the
            ever-evolving tech world defines the ethos of our store.
          </p>
          <hr className="w-[90%] h-[1px] my-2 border-none bg-black"></hr>
          <div className="w-[90%] h-fit flex flex-row justify-start items-center gap-2">
            {highlightCartList.map((each, index) => (
              <div className="w-fit h-fit rounded-lg" key={index}>
                <HighlightCart title={each.title} content={each.content} />
              </div>
            ))}
          </div>
          <hr className="w-[90%] h-[1px] my-2 border-none bg-black"></hr>
        </div>
      </div>
      <div className="w-full h-fit mt-6 py-4 flex flex-row justify-center items-center text-3xl font-medium">
        Meet Our Team
      </div>
      <div className="w-full h-screen mt-8 bg-red-200 pt-2 flex flex-row justify-center items-center">
        {personCardList.map((each, index) => (
          <div className="mx-2" key={index}>
            <PersonCard data={each} />
          </div>
        ))}
      </div>
      <div className="w-full h-fit mt-6 py-4 flex flex-row justify-center items-center text-3xl font-medium">
        Our Story
      </div>
      <div className="w-full h-screen mt-8 bg-yellow-200 pt-2 flex flex-row justify-center items-center"></div>
    </div>
  );
}
