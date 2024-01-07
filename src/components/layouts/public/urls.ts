interface URL {
  name: string;
  url: string;
}

const menu: URL[] = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/product" },
  { name: "Cart", url: "/cart" },
  { name: "Blog", url: "/blog" },
  { name: "About", url: "/about" },
];

export default menu;
