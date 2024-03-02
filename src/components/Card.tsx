interface CardProps {
  code: string
  name: string
}
export function Card({ code, name }: CardProps) {
  return (
    <span className="my-1 flex w-full items-center rounded-xl bg-base-list p-4">
      {code} - {name}
    </span>
  )
}
