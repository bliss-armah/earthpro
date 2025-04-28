interface ChooseUsOptionsProps {
  bgColor: string;
  count: string;
  title: string;
  description: string;
}

export default function ChooseUsOptions({
  bgColor,
  count,
  title,
  description,
}: ChooseUsOptionsProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-white font-bold rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        {count}
      </div>
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
