import { Loader } from "./icons";

type Variant = "primary" | "secondary";

type Position = "left" | "center" | "right"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | number | React.ReactNode;
  icon?: React.ReactNode;
  disabled: boolean;
  loading: boolean;
  variant: Variant;
  position?: Position
}

export default function Button({
  children,
  icon,
  disabled,
  loading,
  variant,
  position,
  ...props
}: ButtonProps) {

  let positionStyle

  if(position === "left"){
    positionStyle = "justify-self-start"
  } else if (position === "center"){
    positionStyle = "justify-self-center w-full"
  } else if (position === "right"){
    positionStyle = "justify-self-end"
  }

  const baseStyle = `font-poppins ${positionStyle} justify-center rounded-full px-4 py-2 gap-2 flex items-center cursor-pointer disabled:bg-gray-400 transition-all duration-300 min-w-[150px]`

  const variants: Record<Variant, string> = {
    primary: `${baseStyle} bg-(--offred) hover:bg-(--red)`,
    secondary: `${baseStyle} bg-(--white) border-2 border-(--offred) text-(--offred) hover:border-(--red) hover:text-(--red)`
  };

  if (icon) {
    return (
      <button disabled={disabled || loading} className={variants[variant]} {...props}>
        {icon}
      </button>
    );
  }

  return (
    <button disabled={disabled || loading} className={variants[variant]} {...props}>
      {children}
      {loading && <Loader />}
    </button>
  );
}
