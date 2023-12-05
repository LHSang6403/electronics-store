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

export const bannerData: SquareBannerProps = {
  image:
    "https://nhaantoan.com/wp-content/uploads/2019/04/videoblocks-asian-business-man-at-outdoor_bfelhc91z_thumbnail-full01.png",
  title: "",
  description: "",
};

export const highlightCartList: HighlightCartProps[] = [
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

export const personCardList: PersonCardProps[] = [
  {
    name: "John Doe",
    image:
      "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D",
    description:
      "Passionate about technology and innovation. Join me in exploring the world of possibilities!",
  },
  {
    name: "Jane Smith",
    image:
      "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D",
    description:
      "Dedicated to creating meaningful connections through design and creativity.",
  },
  {
    name: "Alex Johnson",
    image:
      "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D",
    description:
      "Enthusiastic coder and problem solver. Let's build a better future through technology!",
  },
];
