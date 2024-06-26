import {cardData} from "@/app/elements/services";

const ServicesGrid = () => {
    return (
        <div className="max-w-[1080px] mx-auto mt-14 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="bg-primary-blue bg-opacity-5 py-4 flex items-center justify-center rounded-md gap-4 text-primary-blue"
                >
                    {card.icon}
                    <p>{card.text}</p>
                </div>
            ))}
        </div>
    );
};

export default ServicesGrid;