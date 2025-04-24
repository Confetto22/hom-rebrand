import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroCard = () => {
  return (
    <section className="hero_card bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')] bg-center bg-cover">
      <div className="cover min-h-[80vh] w-full h-full p-8 flex flex-col items-center justify-center gap-9">
        <h1 className="text-center uppercase font-extrabold text-[3rem] tracking-wider text-[var(--theme-white)] drop-shadow-lg drop-shadow-[#b3b31f]">
          mystery embassy <br /> international
        </h1>
        <Link
          to={"#"}
          className="capitalize border border-[#ffffffc2] py-4 px-8 rounded-[3rem] flex items-center gap-1 font-semibold bg-[#0000007d] hover:bg-[#000] ease-in duration-300 hover:gap-3"
        >
          get in touch{" "}
          <span className="text-[1.4rem] ">
            <MdKeyboardArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HeroCard;
