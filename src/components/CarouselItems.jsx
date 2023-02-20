const items = [
    { name: "Angular", image: "/logo/angular.png" },
    { name: "Ionic", image: "/logo/ionic.png" },
    { name: "Nest", image: "/logo/nest.png" },
    { name: "Node", image: "/logo/node.png" },
    { name: "React", image: "/logo/react.png" },
    { name: "Sass", image: "/logo/sass.png" },
    { name: "Strapi", image: "/logo/strapi.png" },
    { name: "Tailwind", image: "/logo/tailwind.png" },
    { name: "Vue", image: "/logo/vue.png" },
]

const CarouselItems = () => {
    return (
        <>
            {items.map((item) => (
                <div key={item.name} className="w-28 h-28 aspect-square mx-10 flex flex-col justify-center items-center">
                    <img src={item.image} alt={item.name} className="max-h-20 mb-5 filter grayscale hover:grayscale-0 transition-all ease-in-out duration-500" />
                    <p className="text-slate-400">{ item.name }</p>
                </div>
            ))}
        </>
    )
}

export default CarouselItems
