

import ImageSlider from "@/ImageSlider";
import image1 from "../assets/sponsor/LegumbresSliderHome.jpg"

const IMAGES = [
  { url: image1, alt: "" },
  
 
]

export const Hero = () => {
  return (
    
    <section className=" grid "> 
     <div
      
    >
      <ImageSlider images={IMAGES} />
     
    </div>
   
     
      <div className=" absolute  text-center lg:text-start space-y-6 ml-40 my-44  ">
        <main className=" text-5xl grid grid-cols-2 md:text-6xl font-bold  ">
          <h1 className="inline  text-pgreen">
            <span className="inline text-white">
            Making 
            </span>{" "}
            Farmers
            
          </h1>
          
        </main>
        <main className=" text-5xl grid grid-cols-2 md:text-6xl font-bold  ">
        <h2 className="inline text-white">
          <span className="inline text-pgreen">{" "}
            Energy 
            </span>{" "}
            Independent
          
          </h2>
          
        </main>
        
        <main className=" text-5xl grid grid-cols-2 md:text-6xl font-bold  ">
        <p className="text-xl text-white md:w-10/12 mx-auto lg:mx-0">
        We help farmers to solve their real day-to-day sustainability challenges, accompanying them on every step of the way, from seed to shelf.
        </p>
          
        </main>

       
       
        
      </div>
     
      {/* Hero cards sections */}
     
     
      

      {/* Shadow effect */}
      
    </section>
  );
};
