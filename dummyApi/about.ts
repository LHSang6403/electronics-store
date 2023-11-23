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
