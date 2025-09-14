import React from "react";
import f1 from "../../assets/1 1.png";
import f2 from "../../assets/2 1.png";
import f3 from "../../assets/3 1.png";
import f4 from "../../assets/4 1.png";

const Feature = () => {
  const feature = [
    {
      id: 1,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
      image: f1,
    },
    {
      id: 2,
      title: "High Quality",
      description: "We served the coffee to you maintaining the best quality",
      image: f2,
    },
    {
      id: 3,
      title: "Pure Grades ",
      description:
        "The coffee is made of the green coffee beans which you will love",
      image: f3,
    },
    {
      id: 4,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
      image: f4,
    },
  ];

  return (
    <div className="bg-[#ECEAE3] py-5">
      <div className="flex gap-6 items-center justify-center px-30 py-5 ">
        {feature.map((f) => (
          <div key={f.id} className="flex flex-col items-start  text-[#1B1A1A] space-y-4">
            <img src={f.image} alt={f.title} className="size-15 object-cover " />
            <h2 className="text-2xl  font-semibold mt-2">{f.title}</h2>
            <p className="Raleway mt-1 text-base">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
