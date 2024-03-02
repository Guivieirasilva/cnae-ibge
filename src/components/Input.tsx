import { InputHTMLAttributes } from 'react'

interface InputIconProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputIconProps) {
  return (
    <div className="relative">
      <input
        type="se"
        {...rest}
        className="text-base-span placeholder:text-base-span w-full rounded-lg bg-base-list py-2 pl-10 pr-4 focus:outline-none"
      />
      <img
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
        src="./busca.svg"
        alt=""
      />
    </div>
  )
}
