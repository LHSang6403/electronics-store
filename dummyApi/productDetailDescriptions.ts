interface ProductDetailDescription {
  id: number;
  name: string;
  category: string;
  description: string;
}

const products: ProductDetailDescription[] = [
  {
    id: 0,
    name: "Smartphone Samsung Galaxy S22 Ultra 1TB Ultra-black",
    category: "Electronics",
    description:
      "Experience the pinnacle of smartphone technology with the Samsung Galaxy S22 Ultra. Boasting an impressive 1TB storage capacity, this smartphone redefines the limits of what your pocket-sized device can hold. The Ultra-black variant adds a touch of sophistication, while its water-resistant design ensures durability in various conditions. Capture stunning moments with the advanced camera system and enjoy extended usage with its long-lasting battery life. Elevate your mobile experience with the Samsung Galaxy S22 Ultra.",
  },
  {
    id: 1,
    name: "Laptop Dell XPS 15 2023 Edition",
    category: "Electronics",
    description:
      "Unleash your productivity with the Dell XPS 15 2023 Edition. This high-performance laptop is engineered for professionals and creatives who demand excellence. Immerse yourself in the brilliance of a 4K display, delivering vivid colors and sharp details. Powered by the latest Intel processor, the XPS 15 excels in multitasking and resource-intensive tasks. With its premium build quality and sleek design, it's not just a laptop; it's a statement of sophistication. Elevate your computing experience with the Dell XPS 15 2023 Edition.",
  },
  {
    id: 2,
    name: "Smart Watch FitBit Versa 5",
    category: "Wearables",
    description:
      "Enhance your well-being with the FitBit Versa 5 Smart Watch. This advanced wearable seamlessly integrates fitness tracking, heart rate monitoring, and built-in GPS, providing real-time insights into your health. Its sleek design, vibrant display, and personalized watch faces make a stylish statement. From fitness stats to notifications, stay connected and motivated. The Versa 5 goes beyond tracking – monitor sleep patterns, stress levels, and enjoy personalized breathing sessions. The FitBit app offers in-depth analysis, trends, and goal tracking. Whether you're a fitness enthusiast or starting a wellness journey, the FitBit Versa 5 is your dedicated companion.",
  },
  {
    id: 3,
    name: "Wireless Noise-Canceling Headphones Sony WH-1000XM5",
    category: "Electronics",
    description:
      "Immerse yourself in a world of pure audio bliss with the Sony WH-1000XM5 Wireless Noise-Canceling Headphones. These premium over-ear headphones deliver industry-leading noise-canceling technology, ensuring an uninterrupted listening experience. The sleek design and plush ear cups provide comfort for extended wear. Enjoy the freedom of wireless connectivity and exceptional sound quality. Whether you're in a bustling city or on a long flight, the Sony WH-1000XM5 headphones create your personal oasis of sound.",
  },
  {
    id: 4,
    name: "Gaming Console PlayStation 5 Pro",
    category: "Gaming",
    description:
      "Elevate your gaming experience to new heights with the PlayStation 5 Pro Gaming Console. Immerse yourself in stunning 8K graphics and ultra-fast loading times, powered by the latest gaming technology. The diverse game library offers a range of adventures for every gamer. The sleek design and adaptive triggers provide a tactile gaming experience like never before. Whether you're a casual gamer or a seasoned pro, the PlayStation 5 Pro takes gaming to the next level.",
  },
  {
    id: 5,
    name: "Digital Camera Canon EOS R5",
    category: "Electronics",
    description:
      "Unleash your creativity with the Canon EOS R5 Digital Camera. This high-resolution mirrorless camera features advanced autofocus and 8K video recording capabilities, making it a versatile tool for photographers and videographers alike. The ergonomic design and intuitive controls enhance the shooting experience, while the impressive image quality captures every detail. Whether you're a professional or an enthusiast, the Canon EOS R5 empowers you to push the boundaries of visual storytelling.",
  },
  {
    id: 6,
    name: "Smart Home Speaker Amazon Echo Show 10",
    category: "Smart Home",
    description:
      "Transform your living space with the Amazon Echo Show 10 Smart Home Speaker. This innovative smart speaker features a rotating screen, making it a dynamic hub for video calls, streaming, and smart home control. With Alexa at your command, effortlessly control compatible devices, set timers, and get answers to your questions. The Echo Show 10 adapts to your space, ensuring you never miss a moment. Elevate your smart home experience with the Amazon Echo Show 10.",
  },
  {
    id: 7,
    name: "Electric Scooter Xiaomi Mi Electric Scooter Pro 2",
    category: "Electronics",
    description:
      "Embrace eco-friendly commuting with the Xiaomi Mi Electric Scooter Pro 2. This electric scooter combines sleek design with a long-range battery, allowing you to navigate the urban landscape with ease. With smart connectivity features and a portable foldable design, it's the ideal solution for the modern commuter. Effortlessly glide through the city and reduce your carbon footprint with the Xiaomi Mi Electric Scooter Pro 2.",
  },
  {
    id: 8,
    name: "Fitness Tracker Garmin Venu 2",
    category: "Wearables",
    description:
      "Maximize your fitness journey with the Garmin Venu 2 Fitness Tracker. This GPS-enabled wearable boasts a vibrant AMOLED display and offers comprehensive health monitoring features. Track your workouts, monitor your heart rate, and receive insights into your overall well-being. With built-in sports apps and smart notifications, the Garmin Venu 2 keeps you connected and motivated on your path to a healthier lifestyle.",
  },
  {
    id: 9,
    name: "4K UHD Smart TV LG OLED C1 Series",
    category: "Electronics",
    description:
      "Experience cinematic entertainment at home with the LG OLED C1 Series 4K UHD Smart TV. Featuring stunning OLED technology, this TV delivers perfect blacks, vibrant colors, and sharp details. The Dolby Vision and Dolby Atmos support elevate your viewing and listening experience. With webOS for smart functionality and a sleek design, the LG OLED C1 Series is a centerpiece for your home entertainment.",
  },
  {
    id: 10,
    name: "Compact Refrigerator Samsung RT18M6213SR",
    category: "Appliances",
    description:
      "Optimize your kitchen space with the Samsung RT18M6213SR Compact Refrigerator. This space-saving refrigerator features adjustable shelves and a built-in ice maker for convenience. With a sleek stainless steel finish, it adds a touch of modern elegance to your kitchen. Keep your groceries fresh and your beverages cold with the Samsung RT18M6213SR Compact Refrigerator.",
  },
  {
    id: 11,
    name: "Bluetooth Earbuds Apple AirPods Pro",
    category: "Electronics",
    description:
      "Immerse yourself in the world of wireless audio with the Apple AirPods Pro Bluetooth Earbuds. These true wireless earbuds feature active noise cancellation, transparency mode, and a customizable fit for all-day comfort. The H1 chip ensures seamless connectivity, while the adaptive EQ delivers immersive sound. Elevate your audio experience with the convenience and style of Apple AirPods Pro.",
  },
  {
    id: 12,
    name: "Coffee Maker Keurig K-Elite",
    category: "Appliances",
    description:
      "Start your day with the perfect cup of coffee brewed by the Keurig K-Elite Coffee Maker. This single-serve coffee maker combines strength control and programmable settings, allowing you to customize your brew. The sleek design and easy-to-use interface make it a stylish and efficient addition to your kitchen. Experience the joy of hassle-free coffee mornings with the Keurig K-Elite.",
  },
  {
    id: 13,
    name: "Portable External Hard Drive WD Black 2TB",
    category: "Electronics",
    description:
      "Expand your storage capabilities with the WD Black 2TB Portable External Hard Drive. This high-performance external hard drive is designed for gaming and content creation, offering fast data transfer speeds and ample storage space. Compact and durable, it's the perfect companion for storing your games, videos, and important files on the go.",
  },
  {
    id: 14,
    name: "Robot Vacuum Roomba i7+",
    category: "Smart Home",
    description:
      "Effortlessly maintain a clean home with the Roomba i7+ Robot Vacuum. This intelligent vacuum features automatic dirt disposal, making it a hands-free solution for busy households. The advanced mapping technology ensures efficient navigation, while the high-efficiency filter captures allergens. With the Roomba i7+, enjoy a cleaner home without the effort.",
  },
  {
    id: 15,
    name: "Powerful Blender Vitamix A3500",
    category: "Appliances",
    description:
      "Experience the versatility of the Vitamix A3500 Powerful Blender. This premium blender offers variable speed control and programmable settings for achieving the perfect blend every time. From smoothies to soups, the A3500 handles a variety of culinary tasks with ease. Elevate your kitchen experience with the power and precision of the Vitamix A3500.",
  },
  {
    id: 16,
    name: "Convertible Laptop/Tablet Microsoft Surface Pro 8",
    category: "Electronics",
    description:
      "Unleash your creativity on the go with the Microsoft Surface Pro 8 Convertible Laptop/Tablet. This versatile device features a detachable keyboard, a responsive touch screen, and powerful performance for productivity and creativity. With its slim and lightweight design, the Surface Pro 8 adapts to your workflow wherever you are. Redefine the way you work and create with the Microsoft Surface Pro 8.",
  },
  {
    id: 17,
    name: "Outdoor Security Camera Arlo Pro 4",
    category: "Smart Home",
    description:
      "Enhance your home security with the Arlo Pro 4 Outdoor Security Camera. This weather-resistant camera delivers 2K HDR video and advanced detection features, ensuring clear and reliable surveillance. With wire-free installation and compatibility with smart home platforms, the Arlo Pro 4 provides peace of mind for your outdoor spaces.",
  },
  {
    id: 18,
    name: "Air Purifier Dyson Pure Hot+Cool",
    category: "Appliances",
    description:
      "Breathe cleaner air with the Dyson Pure Hot+Cool Air Purifier. This multifunctional device purifies the air, heats, and cools your living space. With intelligent sensing and reporting, it automatically adjusts to maintain air quality. Sleek and efficient, the Dyson Pure Hot+Cool is a must-have for creating a comfortable and healthier home environment.",
  },
  {
    id: 19,
    name: "High-Performance Gaming Mouse Logitech G Pro X Superlight",
    category: "Gaming",
    description:
      "Gain a competitive edge with the Logitech G Pro X Superlight High-Performance Gaming Mouse. This ultra-lightweight mouse features the HERO sensor for precision and speed, making it the perfect choice for gamers. With customizable buttons and a sleek design, the G Pro X Superlight delivers exceptional performance and comfort during intense gaming sessions.",
  },
  {
    id: 20,
    name: "Smart Thermostat Google Nest Learning Thermostat",
    category: "Smart Home",
    description:
      "Take control of your home's climate with the Google Nest Learning Thermostat. This programmable thermostat learns your preferences and adjusts the temperature to maximize comfort and energy savings. With smart connectivity and a stylish design, the Nest Learning Thermostat combines functionality and aesthetics for a seamless smart home experience.",
  },
  {
    id: 21,
    name: "Cordless Vacuum Cleaner Dyson V11 Torque Drive",
    category: "Appliances",
    description:
      "Experience the power of cordless cleaning with the Dyson V11 Torque Drive Cordless Vacuum Cleaner. This high-performance vacuum features intelligent suction and an LCD screen for real-time performance monitoring. With versatile attachments and a sleek design, the Dyson V11 provides efficient and hassle-free cleaning for every corner of your home.",
  },
  {
    id: 22,
    name: "Wireless Gaming Headset SteelSeries Arctis 7",
    category: "Gaming",
    description:
      "Immerse yourself in the gaming world with the SteelSeries Arctis 7 Wireless Gaming Headset. Featuring DTS Headphone:X v2.0 surround sound and a ClearCast microphone, this headset delivers an immersive and clear audio experience. With a comfortable fit and wireless convenience, the Arctis 7 is the perfect companion for long gaming sessions.",
  },
  {
    id: 23,
    name: "Smart Doorbell Ring Video Doorbell Pro 2",
    category: "Smart Home",
    description:
      "Enhance your home security with the Ring Video Doorbell Pro 2. This video doorbell features advanced motion detection, 1080p HD video, and customizable faceplates. With real-time alerts and two-way communication, you can monitor and interact with visitors from anywhere. Elevate your home's entryway with the smart and sleek design of the Ring Video Doorbell Pro 2.",
  },
];

export default products;
