import image1 from "../assets/sponsor/Acres-of-Farm-Irrigation-300x300.png"
import image2 from "../assets/sponsor/Bioslurry-Produced-300x300.png"
import image3 from "../assets/sponsor/CO2-Mitigated-300x300.png"
import image4 from "../assets/sponsor/Clean-Energy-produced-300x300.png"
import image5 from "../assets/sponsor/Lives-Impacted-300x300.png"
import image6 from "../assets/sponsor/Renewable-Energy-Products-300x300.png"

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <img src={image1} alt="" className="w-28 "  /> ,
    name: "KGS OF FIREWOOD SAVED",
  },
  {
    icon: <img src={image2} alt="" className="w-28 "    /> ,
    name: "INR OF INCREASED SAVINGS",
  },
  {
    icon: <img src={image3} alt="" className="w-28 "   /> ,
    name: "TONNES OF C02/ GHG EMISSIONS MITIGATED",
  },
  {
    icon: <img src={image4} alt="" className="w-28 "   /> ,
    name: "LITRES OF BIOSLURRY PRODUCED",
  },
  {
    icon: <img src={image5} alt="" className="w-28  bg-clip-content"    /> ,
    name: "LIVES IMPACTED",
  },
  {
    icon: <img src={image6} alt="" className="w-28 "   /> ,
    name: "NO. OF RENEWABLE ENERGY PRODUCTS RECOMMENDED AND INSTALLED",
  },
  {
    icon: <img src={image1} alt="" className="w-28 "  /> ,
    name: "KGS OF FIREWOOD SAVED",
  },
  {
    icon: <img src={image2} alt="" className="w-28 "    /> ,
    name: "INR OF INCREASED SAVINGS",
  },
  {
    icon: <img src={image3} alt="" className="w-28 "   /> ,
    name: "TONNES OF C02/ GHG EMISSIONS MITIGATED",
  },
  {
    icon: <img src={image4} alt="" className="w-28 "   /> ,
    name: "LITRES OF BIOSLURRY PRODUCED",
  },
  {
    icon: <img src={image5} alt="" className="w-28  bg-clip-content"    /> ,
    name: "LIVES IMPACTED",
  },
  {
    icon: <img src={image6} alt="" className="w-28 "   /> ,
    name: "NO. OF RENEWABLE ENERGY PRODUCTS RECOMMENDED AND INSTALLED",
  },
  {
    icon: <img src={image4} alt="" className="w-28 "   /> ,
    name: "LITRES OF BIOSLURRY PRODUCED",
  },
  {
    icon: <img src={image5} alt="" className="w-28  bg-clip-content"    /> ,
    name: "LIVES IMPACTED",
  },
  {
    icon: <img src={image6} alt="" className="w-28 "   /> ,
    name: "NO. OF RENEWABLE ENERGY PRODUCTS RECOMMENDED AND INSTALLED",
  },
  {
    icon: <img src={image6} alt="" className="w-28 "   /> ,
    name: "NO. OF RENEWABLE ENERGY PRODUCTS RECOMMENDED AND INSTALLED",
  },
  
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className=" pt-24 sm:py-32"
    >
      <h2 className="text-center text-xl lg:text-4xl font-bold mb-8 text-primary ">
      Our Esteemed Partners
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex flex-col test-wrap w-44  items-center gap-1 text-bggreen"
          >
            <span>{icon}</span>
            <p className=" text-base font-bold text-wrap">{name}</p>
          </div>
          
        ))}
      </div>
    </section>
  );
};
