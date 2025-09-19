interface BannerProps {
    imageSrc: string,
    title: string
}

export default function Banner({imageSrc, title}: BannerProps) {
  return (
    <div className="flex flex-wrap place-content-center h-[300px] relative">
      <img
        src={imageSrc}
        className="absolute inset-0 h-[300px] w-full object-cover object-center brightness-50"
      />
      <h2 className="font-cinzel text-5xl text-shadow-[0_0_10px_rgb(0_0_0_/_1)] z-15">{title}</h2>
    </div>
  );
}
