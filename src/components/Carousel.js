import { useState } from "react";
import { data } from "../data/carousalData";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
function CarouselScreen() {
    const [index, setIndex] = useState(0);
    return (
        <div className="relative h-full w-full flex justify-evenly">
            <button
                className="absolute top-[40%] right-0 bg-black text-white p-4"
                onClick={() => setIndex((index + 1) % data.length)}
            >
                <FaArrowCircleRight/>
            </button>
            <button
                className="absolute top-[40%] left-0 bg-black text-white p-4"
                onClick={() =>
                    index === 0
                        ? setIndex(data.length - 1)
                        : setIndex(index - 1)
                }
            >
              <FaArrowCircleLeft />
            </button>
            <div className="h-full shadow-lg">
                <img
                    src={data[index].image}
                    alt=""
                    className="h-full object-contain"
                />
            </div>
            <div className="hidden h-full md:flex flex-col items-center justify-center">
                <h1 className="text-4xl">{data[index].title}</h1>
                <p>{data[index].description}</p>
            </div>
        </div>
    );
}

export default CarouselScreen;
