import IconAndText from "./IconAndText";

export default function TopBar(){
    return(
        <section className="flex justify-around gap-100 items-center bg-secondary rounded-br-2xl h-16 w-full z-0">
            <IconAndText icon="house" text="Home" alt="home icon" />
            <article id="user-info" className="flex gap-2 items-center">
            <img src="https://avatars.githubusercontent.com/u/112034837?v=4&size=64" className="w-8 h-8 rounded-2xl" alt="user avatar" />
            <p className=" text-tertiary font-sans font-semibold">UserName</p>
            </article>
        </section>
    )
}