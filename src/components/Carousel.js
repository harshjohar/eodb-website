import { useState } from "react";
import { data } from "../data/carousalData";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
function CarouselScreen() {
    const [index, setIndex] = useState(0);
    return (
        <div className="relative h-[400px] w-full flex justify-evenly">
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
            <div className="h-full flex justify-center flex-1 md:flex-[0.6]">
                <img
                    src={data[index].image}
                    alt=""
                    className="w-full md:w-[80%] object-cover shadow-xl rounded-xl shadow-white"
                />
            </div>
            <div className="hidden h-full md:flex flex-col items-center justify-center flex-[0.4] space-y-4">
                <h1 className="text-5xl font-extrabold">{data[index].title}</h1>
                <p>{data[index].description}</p>
            </div>
        </div>
    );
}

export default CarouselScreen;
