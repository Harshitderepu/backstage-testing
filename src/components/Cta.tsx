export const Cta = () => {
  return (
    <section id="cta" className=" py-24 sm:py-32 mx-32 ">
      <div className="mockup-browser border border-base-300 ">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300 text-pgreen ">
            https://www.youtube.com/@agrivijay
          </div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-base-300  bg-bggreen">
          <div className="flex justify-center px-4 py-2  ">
            <iframe
              width="1200"
              height="560"
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              title="YouTube video player"
              allow="accelerometer; 
              "
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
