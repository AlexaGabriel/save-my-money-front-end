import house from "../assets/house-fill.svg"
import transaction from "../assets/arrow-left-right.svg"
import bill from "../assets/receipt.svg"
import goal from "../assets/bullseye.svg"
import price from "../assets/bar-chart-fill.svg"

const icons = {
    house,
    transaction,
    bill,
    goal,
    price,
  };

export default function IconAndText({ icon, text, alt }: { icon: keyof typeof icons, text: string, alt: string }) {
  const selectedIcon = icons[icon];
  return (
    <div className="flex gap-2 items-center text-tertiary font-sans font-bold">
      <img src={selectedIcon.src} className='w-6 h-6' alt={alt} />
      <p>{text}</p>
    </div>
  )
}