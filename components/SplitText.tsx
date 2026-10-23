type Props = {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
};

export default function SplitText({ text, className = "", delay = 0, step = 80 }: Props) {
  const lines = text.split("\n");
  let i = 0;
  return (
    <span className={className}>
      {lines.map((line, li) => (
        <span key={li} >
          {line.split(" ").map((word, wi) => (
            <span key={wi} className="split-word mr-[0.25em]">
              <span style={{ animationDelay: `${delay + i++ * step}ms` }}>{word}</span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
