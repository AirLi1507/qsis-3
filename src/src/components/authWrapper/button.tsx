"use client";

const Button = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className="text-sky-900/75 hover:text-sky-50 text-lg font-bold w-full bg-sky-50/75 hover:bg-sky-700/60 border-2 border-sky-50/25 rounded-md inset-shadow-[0_0_4px_rgba(0,0,0,.25)] flex justify-center p-2 duration-200 cursor-pointer">{props.children}</button>
  )
}

export default Button
