import logo from '../assets/logo.png'
import IconAndText from './IconAndText'

export default function SideBar() {
  return (
    <section className="bg-primary  w-64 h-full z-20 shadow-2xl">
      <img src={logo.src} className='w-40 ml-4 mt-4' alt="logo"  />
      <article className=" flex flex-col ml-8 text-lg gap-5 mt-12 ">
        <IconAndText icon="house" text="Home" alt="home icon" />
        <IconAndText icon="transaction" text="Transaction" alt="transaction icon" />
        <IconAndText icon="bill" text="Bill" alt="bill icon" />
        <IconAndText icon="goal" text="Goal" alt="goal icon" />
        <IconAndText icon="price" text="Price" alt="price icon" />
      </article>
    </section>
  )
}
