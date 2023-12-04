interface URL {
  name: string;
  url: string;
}

const menu: URL[] = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Cart", url: "/cart" },
  { name: "About", url: "/about" },
];

export default menu;
