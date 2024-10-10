
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "black" | "white" | "warning"; 
  fill?: "filled" | "emptied";
  size?: "small" | "medium" | "large" | "extra-large";
  asChild?: boolean;
}

export function Button({
  color = "black",
  fill = "filled",
  size = "medium",
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Component =  "button";

  const baseStyles = "font-semibold border-2 rounded inline-flex items-center justify-center gap-2 transition duration-300 uppercase";
  
  const colorStyles = fill === "filled" ? 
    (color === "black" ? "bg-gray-800 border-gray-800 text-white hover:bg-gray-600" :
    color === "warning" ? "bg-[#A72925] border-[#A72925] text-white hover:bg-[#9c5e5c]" : // Added warning color styles
    "bg-white border-white text-gray-800 hover:bg-gray-200") :
    (color === "black" ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white" :
    color === "warning" ? "border-[#A72925] text-[#A72925] hover:bg-[#A72925] hover:text-white" : // Added warning styles for emptied
    "border-white text-white hover:bg-white hover:text-gray-800");

  const sizeStyles = size === "small" ? "text-sm py-2 px-4" :
    size === "medium" ? "text-base py-2 px-4" :
    size === "large" ? "text-lg py-2 px-4" :
    "text-lg py-3 px-4";

  const disabledStyles = "text-gray-500 bg-gray-300 border-gray-300 pointer-events-none";

  return (
    <Component
      className={`${baseStyles} ${colorStyles} ${sizeStyles} ${props.disabled ? disabledStyles : ''} ${className}`}
      {...props}
    />
  );
}
