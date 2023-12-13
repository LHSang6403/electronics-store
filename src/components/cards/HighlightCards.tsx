import { highlightCartList as highlightCard } from "@/dummyApi/about";
interface HighlightCartProps {
  title: string;
  content: string;
}

export default function HighlightCards(): JSX.Element {
  const highlightCartList: HighlightCartProps[] = highlightCard;

  return (
    <div className="w-[90%] h-fit sm:overflow-auto flex flex-row justify-start items-center gap-2">
      {highlightCartList.map((each, index) => (
        <div className="w-fit h-fit rounded-lg" key={index}>
          <HighlightCart title={each.title} content={each.content} />
        </div>
      ))}
    </div>
  );
}

function HighlightCart({ title, content }: HighlightCartProps): JSX.Element {
  return (
    <div className="w-full h-full p-1 flex flex-col justify-center items-center">
      <h2 className="text-primary text-xl sm:text-base font-medium">{title}</h2>
      <p className="w-fit h-fit text-center text-[14px]">{content}</p>
    </div>
  );
}
