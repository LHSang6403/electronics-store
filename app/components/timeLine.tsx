interface Event {
  time: string;
  title: string;
  description: string;
}

const events: Event[] = [
  {
    time: "February 2022",
    title: "Application UI code in Tailwind CSS",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    time: "March 2022",
    title: "Marketing UI design in Figma",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
  {
    time: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
  {
    time: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

export default function TimeLine(): JSX.Element {
  return (
    <div className="w-full h-full">
      <ul className="relative border-s border-primary">
        {events.map((event, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {event.time}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <p className="mb-4 text-base font-light text-gray-500 dark:text-gray-400">
              {event.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
