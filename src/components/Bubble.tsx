import clsx from "clsx";

interface IBubbleProps {
  icon: React.ReactNode | string;
  title: string;
  text: string;
  url: string;
  className?: string;
}

export const Bubble = ({ icon, text, title, className, url }: IBubbleProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer"
      className={clsx(
        "bg-white flex items-center rounded-2xl p-8 drop-shadow-[4px_4px_10px_rgba(0,0,0,0.4)] flex-1 hover:scale-105 transition-transform",
        className
      )}
    >
      <div className="mr-4 text-pink-700">
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 min-w-16 min-h-16 rounded-full border-2 border-pink-700"
          />
        ) : (
          icon
        )}
      </div>
      <div className="flex flex-col">
        <div className="font-bold">{title}</div>
        <div className="text-sm">{text}</div>
      </div>
    </a>
  );
};
