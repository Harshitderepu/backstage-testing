import cubeLeg from "../assets/cube-leg.png";

export const Services = () => {
  return (
    <section className=" py-24 sm:py-32 bg-bggreen">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div className=" px-12">
          <h2 className="text-6xl md:text-6xl font-bold text-pgreen">
            <span className=" text-white ">What is </span>
            AgriVijay
          </h2>

          <p className="text-white text-xl mt-4 mb-8 ">
          AgriVijay is India’s first Marketplace of Renewable Energy products for farmers & rural households bringing all products in solar, biogas, thermal, wind & electric under one roof and with Energy Advisory approach where farmers’ energy needs are understood coupled with waste availability at their end before products are recommended, sold and deployed along with abating GHG/CO2 emissions mitigating Climate Change aligned with United Nations SDG’s becoming Energy Independent along with increased savings & income.


          <p className="text-white text-xl mt-4 mb-8 ">
          With the help of dedicated Website, Call Centres in local language, Field Sales, Technical Team & offline stores model at village level known as Renewable Energy Stores, the knowledge and benefits of Renewable Energy products are disseminated providing high quality and branded renewable energy products on rural grounds with benefits such as free solar insurance, long term warranty, assured after sales service, EMI/Financing facility etc. helping Farmers & Rural households to become Renewable Energy producers & consumers.
          </p>
          </p>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
