interface Suggestion {
  id: number;
  name: string;
  image: string;
  price: number;
  feature: string;
  discription: string;
}

const suggestions: Suggestion[] = [
  {
    id: 1,
    name: "Paint brush",
    image:
      "https://images.pexels.com/photos/5583115/pexels-photo-5583115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    feature: "",
    discription:
      "A print brush, commonly used in the field of printing, is a specialized tool designed for cleaning and maintaining the print heads and other components of printers. Its soft bristles effectively remove dust and debris, ensuring optimal print quality.",
    price: 500000,
  },
  {
    id: 2,
    name: "Aluminum tools",
    image:
      "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1600",
    feature: "",
    discription:
      "Aluminum tools encompass a wide range of instruments made from lightweight and durable aluminum. These tools are commonly used in various industries due to their corrosion resistance and strength. Examples include wrenches, pliers, and screwdrivers.",
    price: 500000,
  },
  {
    id: 3,
    name: "drill",
    image:
      "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1600",
    feature: "",
    discription:
      "A drill is a versatile power tool used for creating holes in various materials, such as wood, metal, or plastic. It typically consists of a rotating drill bit and a motor, making it an essential tool for construction, woodworking, and DIY projects.",
    price: 500000,
  },
  {
    id: 4,
    name: "Screw wrench",
    image:
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600",
    feature: "",
    discription:
      "A screw wrench, also known as a screwdriver or screw gun, is a hand tool designed for turning screws. It comes in various shapes and sizes to match different screw types. This tool is indispensable for assembling furniture, installing fixtures, and performing repairs.",
    price: 500000,
  },
  {
    id: 5,
    name: "Knife",
    image:
      "https://images.pexels.com/photos/1409215/pexels-photo-1409215.jpeg?auto=compress&cs=tinysrgb&w=1600",
    feature: "",
    discription:
      "A knife is a sharp-edged cutting tool used for a multitude of purposes, including food preparation, crafting, and general utility. Knives come in various shapes and sizes, with different blade designs catering to specific tasks, such as slicing, chopping, or precision cutting.",
    price: 500000,
  },
  {
    id: 6,
    name: "Cutting machines",
    image:
      "https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?auto=compress&cs=tinysrgb&w=1600",
    feature: "",
    discription:
      "A cutting machine is a powered device used for precision cutting of various materials, such as fabric, paper, or metal. These machines range from simple handheld cutters to advanced computer-controlled devices, providing efficiency and accuracy in manufacturing, crafting, and industrial applications.",
    price: 500000,
  },
];

export default suggestions;
