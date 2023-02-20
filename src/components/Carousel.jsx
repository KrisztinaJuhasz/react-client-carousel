import CarouselItems from "./CarouselItems"

const Carousel = () => {
    return (
        <div className="bg-slate-600 py-10 overflow-x-clip">
            <div className="flex flex-row self-start justify-start items-baseline animate-carousel hover:animate-pause">
                <CarouselItems />
                <CarouselItems />
                <CarouselItems />
            </div>
        </div>
    )
}

export default Carousel
