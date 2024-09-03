const TrailerSection = () => {
  return (
      <section className="h-fit w-full px-5 lg:px-20 aspect-[21/9] relative">
        <iframe 
          className="w-full h-full rounded-[20px]" 
          src="https://www.youtube.com/embed/3zimQ_Wn4TE?autoplay=1" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </section>
  )
}

export default TrailerSection;
