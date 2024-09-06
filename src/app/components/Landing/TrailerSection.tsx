const TrailerSection = () => {
  return (
    <section className="h-fit w-full px-5 lg:px-20 aspect-[21/9] relative">
      <iframe 
        className="w-full h-full rounded-[20px]" 
        src="https://www.youtube.com/embed/GVShYC-CuEU?autoplay=1&loop=1&playlist=GVShYC-CuEU" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </section>
  )
}

export default TrailerSection;
