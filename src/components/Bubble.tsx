interface IBubbleProps{
  icon: React.ReactNode;
  title: string;
  text: string;
}

export const Bubble = ({icon, text, title}: IBubbleProps) => {
  return (
    <div className="bg-white flex items-center rounded-[48px] p-8 drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)] flex-1">
      <div className="mr-4 text-pink-700">{icon}</div>
      <div className="flex flex-col">
        <div className="font-bold">{title}</div>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  )
}