import { PreEvents, UpcomingEvent } from "@/static/Events";

const EventsSection = () => {
    return (
        <section className="flex flex-col lg:flex-row px-5 lg:px-20 gap-5 w-full aspect-[3/4] lg:aspect-[21/9] relative">
            <div className="flex-grow-1 h-2/5 lg:h-full">
                <div className="flex flex-col relative h-full gap-5">
                    <div className="h-fit bg-gradient-to-tr from-[#023662] to-[#004B8B] rounded-[20px]">
                        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center p-5 text-nowrap">OUR EVENTS</h1>
                    </div>
                    <div
                        className="w-full h-full aspect-square lg:aspect-auto top-0 left-0 bg-cover bg-center"
                        style={{
                        clipPath: `polygon(calc(100% - 0px) 20px, calc(100% - 0px) 20px, calc(100% - 0.26175799999999px) 16.7558949px, calc(100% - 1.0195839999998px) 13.6784512px, calc(100% - 2.2323059999999px) 10.8088463px, calc(100% - 3.858752px) 8.1882576px, calc(100% - 5.85775px) 5.8578625px, calc(100% - 8.188128px) 3.8588384px, calc(100% - 10.808714px) 2.2323627px, calc(100% - 13.678336px) 1.0196128px, calc(100% - 16.755822px) 0.2617661px, calc(100% - 20px) 3.3111080641971E-31px, 20px 0px, 20px 0px, 16.7558949px 0.26176637px, 13.6784512px 1.01961376px, 10.8088463px 2.23236459px, 8.1882576px 3.85884128px, 5.8578625px 5.85786625px, 3.8588384px 8.18826192px, 2.2323627px 10.80885071px, 1.0196128px 13.67845504px, 0.2617661px 16.75589733px, 3.3111080641971E-31px 20px, 0px calc(100% - 20px), 0px calc(100% - 20px), 0.26176664px calc(100% - 16.755822px), 1.01961472px calc(100% - 13.678336px), 2.23236648px calc(100% - 10.808714px), 3.85884416px calc(100% - 8.1881279999999px), 5.85787px calc(100% - 5.85775px), 8.18826624px calc(100% - 3.8587519999999px), 10.80885512px calc(100% - 2.232306px), 13.67845888px calc(100% - 1.019584px), 16.75589976px calc(100% - 0.26175800000004px), 20px calc(100% - 0px), calc(100% - 220px) calc(100% - 0px), calc(100% - 220px) calc(100% - 0px), calc(100% - 216.755822px) calc(100% - 0.26175799999993px), calc(100% - 213.678336px) calc(100% - 1.0195839999999px), calc(100% - 210.808714px) calc(100% - 2.232306px), calc(100% - 208.188128px) calc(100% - 3.858752px), calc(100% - 205.85775px) calc(100% - 5.85775px), calc(100% - 203.858752px) calc(100% - 8.1881280000001px), calc(100% - 202.232306px) calc(100% - 10.808714px), calc(100% - 201.019584px) calc(100% - 13.678336px), calc(100% - 200.261758px) calc(100% - 16.755822px), calc(100% - 200px) calc(100% - 20px), calc(100% - 200px) calc(100% - 50px), calc(100% - 200px) calc(100% - 50px), calc(100% - 199.738242px) calc(100% - 53.244178px), calc(100% - 198.980416px) calc(100% - 56.321664px), calc(100% - 197.767694px) calc(100% - 59.191286px), calc(100% - 196.141248px) calc(100% - 61.811872px), calc(100% - 194.14225px) calc(100% - 64.14225px), calc(100% - 191.811872px) calc(100% - 66.141248px), calc(100% - 189.191286px) calc(100% - 67.767694px), calc(100% - 186.321664px) calc(100% - 68.980416px), calc(100% - 183.244178px) calc(100% - 69.738242px), calc(100% - 180px) calc(100% - 70px), calc(100% - 20px) calc(100% - 70px), calc(100% - 20px) calc(100% - 70px), calc(100% - 16.755822px) calc(100% - 70.261758px), calc(100% - 13.678336px) calc(100% - 71.019584px), calc(100% - 10.808714px) calc(100% - 72.232306px), calc(100% - 8.188128px) calc(100% - 73.858752px), calc(100% - 5.85775px) calc(100% - 75.85775px), calc(100% - 3.8587520000001px) calc(100% - 78.188128px), calc(100% - 2.232306px) calc(100% - 80.808714px), calc(100% - 1.019584px) calc(100% - 83.678336px), calc(100% - 0.2617580000001px) calc(100% - 86.755822px), calc(100% - 1.1368683772162E-13px) calc(100% - 90px), calc(100% - 0px) 20px)`,
                        backgroundImage: `url(${PreEvents[0].image})`,
                        }}     
                    >  
                        <div className="absolute bottom-[5.75rem] right-5 flex gap-2.5 w-fit bg-gradient-to-tr from-[#F4AE09] to-[#F8C13D] px-4 py-2 rounded-2xl">
                            <p className="font-semibold text-xl text-white">Read More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div className="relative flex flex-col w-auto h-full pr-52 justify-end">
                            <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-white px-5">{PreEvents[0].title}</h1>
                            <p className="text-sm md:text-medium lg:text-lg xl:text-xl lg:text-justify text-white m-5 line-clamp-4 md:line-clamp-none">{PreEvents[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-center bg-cover rounded-[20px] w-full" style={{ backgroundImage: `url(${UpcomingEvent.upcomingImage})` }}>
                <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-white p-5">Upcoming Event</h1>
                <div className="flex gap-2.5 w-fit bg-gradient-to-tr from-[#F4AE09] to-[#F8C13D] py-2 px-3 rounded-xl relative left-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                <h2 className="font-semibold text-md text-white">{UpcomingEvent.date}</h2>
                </div>
                <div className="w-full h-full flex flex-col justify-end">
                <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-white px-5">{UpcomingEvent.title}</h1>
                <p className="text-sm md:text-medium lg:text-lg xl:text-xl text-white p-5 text-justify">{UpcomingEvent.description}</p>
                </div>
            </div>
        </section>
    )
}

export default EventsSection;