

import "./image-slider.css"

type ImageSliderProps = {
  images: {
    url: string
    alt: string
  }[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  

  

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }) => (
          <img
            key={url}
            src={url}
            alt={alt}
           
            className="img-slider-img"
     
          />
        ))}
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}