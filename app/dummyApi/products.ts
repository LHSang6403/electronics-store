interface ProductData {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  sale?: string;
}

const products: ProductData[] = [
  {
    id: 0,
    name: "Smartphone Samsung Galaxy S22 Ultra 1TB Ultra-black",
    price: 599000,
    category: "Electronics",
    description:
      "A water-resistant phone with a great camera and long battery life.",
    image: "/assets/products/smartphone.png",
    rating: 4.5,
    sale: "",
  },
  {
    id: 1,
    name: "Smartphone iPhone 14 Pro Max 1TB Natual Titanium",
    price: 599000,
    category: "Electronics",
    description: "A feature-packed smartphone with advanced functionalities.",
    image: "/assets/products/smartphone.png",
    rating: 4.5,
    sale: "",
  },
  {
    id: 2,
    name: "Laptop Macbook Pro M3Pro 2023 max options 96GB/ 8TB SSD Space Black",
    price: 1299000,
    category: "Electronics",
    description:
      "The MacBook Pro, a flagship laptop by Apple, blends sleek design with powerful performance. Featuring a stunning Retina display and driven by Intel processors or Apple's M1 chip, it excels in speed and efficiency.",
    image: "/assets/products/smartphone.png",
    rating: 4.8,
    sale: "Hot sale 11/11 - x2 items",
  },
  {
    id: 3,
    name: "Wireless Headphones Sony 1000XM-5 Anti-Noise",
    price: 89000,
    category: "Electronics",
    description:
      "Immerse yourself in music with these high-quality wireless headphones.",
    image: "/assets/products/smartphone.png",
    rating: 4.3,
    sale: "",
  },
  {
    id: 4,
    name: "4K LG Smart TV 65-inch",
    price: 799000,
    category: "Electronics",
    description:
      "Transform your entertainment experience with this stunning 4K Smart TV.",
    image: "/assets/products/smartphone.png",
    rating: 4.7,
    sale: "Sale off 20%",
  },
  {
    id: 5,
    name: "Digital Camera Canon R6ii",
    price: 499000,
    category: "Electronics",
    description:
      "Capture moments in crystal-clear detail with this advanced digital camera.",
    image: "/assets/products/smartphone.png",
    rating: 4.6,
    sale: "Free shipping",
  },
  {
    id: 6,
    name: "Gaming Console X",
    price: 349000,
    category: "Electronics",
    description:
      "Experience the thrill of gaming with the powerful Gaming Console X.",
    image: "/assets/products/smartphone.png",
    rating: 4.9,
    sale: "",
  },
  {
    id: 7,
    name: "Smart Watch Pro",
    price: 199000,
    category: "Electronics",
    description:
      "Stay connected and track your fitness with the sleek Smart Watch Pro.",
    image: "/assets/products/smartphone.png",
    rating: 4.4,
    sale: "",
  },
  {
    id: 8,
    name: "Noise-Canceling Earbuds",
    price: 129000,
    category: "Electronics",
    description:
      "Enjoy premium sound quality with these cutting-edge noise-canceling earbuds.",
    image: "/assets/products/smartphone.png",
    rating: 4.5,
    sale: "",
  },
  {
    id: 9,
    name: "Home Security Camera",
    price: 149000,
    category: "Electronics",
    description:
      "Keep your home secure with the latest in smart home security technology.",
    image: "/assets/products/smartphone.png",
    rating: 4.7,
    sale: "",
  },
  {
    id: 10,
    name: "Tablet Pro",
    price: 449000,
    category: "Electronics",
    description:
      "Boost your productivity with the high-performance Tablet Pro, perfect for work and play.",
    image: "/assets/products/smartphone.png",
    rating: 4.6,
    sale: "",
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    price: 79000,
    category: "Electronics",
    description:
      "Elevate your audio experience with this portable and stylish Bluetooth speaker.",
    image: "/assets/products/smartphone.png",
    rating: 4.3,
    sale: "",
  },
  {
    id: 12,
    name: "Robot Vacuum",
    price: 299000,
    category: "Electronics",
    description:
      "Effortlessly maintain a clean home with the intelligent Robot Vacuum.",
    image: "/assets/products/smartphone.png",
    rating: 4.8,
    sale: "",
  },
  {
    id: 13,
    name: "LED Monitor",
    price: 249000,
    category: "Electronics",
    description:
      "Enhance your computing experience with vibrant colors and crisp visuals on the LED Monitor.",
    image: "led_monitor.jpg",
    rating: 4.6,
    sale: "",
  },
  {
    id: 14,
    name: "Drone Explorer",
    price: 499.99,
    category: "Electronics",
    description:
      "Capture breathtaking aerial views with the high-performance Drone Explorer.",
    image: "drone_explorer.jpg",
    rating: 4.9,
    sale: "",
  },
  {
    id: 15,
    name: "Virtual Reality Headset",
    price: 349.99,
    category: "Electronics",
    description:
      "Immerse yourself in a world of virtual reality with the cutting-edge Virtual Reality Headset",
    image: "smart_home_hub.jpg",
    rating: 4.5,
    sale: "",
  },
  {
    id: 16,
    name: "Smart Home Hub",
    price: 199.99,
    category: "Electronics",
    description:
      "Transform your home into a smart haven with the intuitive Smart Home Hub.",
    image: "smart_home_hub.jpg",
    rating: 4.5,
    sale: "",
  },
  {
    id: 17,
    name: "Fitness Smartwatch",
    price: 129.99,
    category: "Electronics",
    description:
      "Achieve your fitness goals with the feature-packed Fitness Smartwatch by your side.",
    image: "fitness_smartwatch.jpg",
    rating: 4.3,
    sale: "",
  },
  {
    id: 18,
    name: "Portable Power Bank",
    price: 39.99,
    category: "Electronics",
    description:
      "Stay charged on the go with the compact and efficient Portable Power Bank.",
    image: "portable_power_bank.jpg",
    rating: 4.6,
    sale: "",
  },
  {
    id: 19,
    name: "E-Reader Oasis",
    price: 179.99,
    category: "Electronics",
    description:
      "Indulge in a captivating reading experience with the advanced E-Reader Oasis.",
    image: "e_reader_oasis.jpg",
    rating: 4.7,
    sale: "",
  },
  {
    id: 20,
    name: "Compact Drone",
    price: 299.99,
    category: "Electronics",
    description:
      "Explore new heights with the sleek and portable Compact Drone for aerial adventures.",
    image: "compact_drone.jpg",
    rating: 4.4,
    sale: "",
  },
  {
    id: 21,
    name: "Smart Refrigerator",
    price: 1499.99,
    category: "Electronics",
    description:
      "Experience the future of kitchen convenience with the state-of-the-art Smart Refrigerator.",
    image: "smart_refrigerator.jpg",
    rating: 4.8,
    sale: "",
  },
  {
    id: 22,
    name: "Gaming Mouse",
    price: 49.99,
    category: "Electronics",
    description:
      "Take your gaming experience to the next level with the precision of the Gaming Mouse.",
    image: "gaming_mouse.jpg",
    rating: 4.5,
    sale: "",
  },
  {
    id: 23,
    name: "Bluetooth Earbuds",
    price: 59.99,
    category: "Electronics",
    description:
      "Enjoy immersive audio on the go with these stylish and wireless Bluetooth Earbuds.",
    image: "bluetooth_earbuds.jpg",
    rating: 4.3,
    sale: "",
  },
  {
    id: 24,
    name: "Smart Security System",
    price: 349.99,
    category: "Electronics",
    description:
      "Secure your home with the advanced features of the Smart Security System for peace of mind.",
    image: "smart_security_system.jpg",
    rating: 4.7,
    sale: "",
  },
  {
    id: 25,
    name: "Curved Gaming Monitor",
    price: 699.99,
    category: "Electronics",
    description:
      "Immerse yourself in gaming glory with the ultra-responsive Curved Gaming Monitor.",
    image: "curved_gaming_monitor.jpg",
    rating: 4.9,
    sale: "",
  },
];

export default products;
