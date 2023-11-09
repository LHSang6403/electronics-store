interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, name: "Agitator", image: "/assets/categories/agitator.png" },
  { id: 2, name: "Battery", image: "/assets/categories/battery.png" },
  { id: 3, name: "Cutting", image: "/assets/categories/cutting.png" },
  { id: 4, name: "Drill", image: "/assets/categories/drill.png" },
  { id: 5, name: "Fan", image: "/assets/categories/fan.png" },
  { id: 6, name: "Gauges", image: "/assets/categories/gauges.png" },
  { id: 7, name: "Iron", image: "/assets/categories/iron.png" },
  { id: 8, name: "Light", image: "/assets/categories/light.png" },
  { id: 9, name: "Plier", image: "/assets/categories/plier.png" },
  { id: 10, name: "Tools", image: "/assets/categories/tools.png" },
  { id: 11, name: "Wearing", image: "/assets/categories/wearing.png" },
  { id: 12, name: "Wire", image: "/assets/categories/wire.png" },
];

export default categories;
