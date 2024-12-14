import React from "react";
import Car from "./components/Car";

const carData = [
  {
    id: 1,
    name: "Toyota Prius",
    brand: "Toyota",
    price: 30000,
    stars: 3,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2023-toyota-prius-front-three-quarters-in-motin-3-1670948359.jpg?crop=0.726xw:0.613xh;0.147xw,0.337xh&resize=1200:*",
    altText: "Toyota Prius",
  },
  {
    id: 2,
    name: "Rolls Royce Phantom",
    brand: "Rolls Royce",
    price: 460000,
    stars: 5,
    image:
      "https://cdn.motor1.com/images/mgl/G3AXvZ/s1/rolls-royce-phantom-goldfinger.webp",
    altText: "Rolls Royce",
  },
  {
    id: 3,
    name: "Volkswagen Beetle",
    brand: "Volkswagen",
    price: 19000,
    stars: 4,
    image:
      "https://cdn.dealeraccelerate.com/cam/34/6781/468893/1920x1440/1968-volkswagen-beetle",
    altText: "Volkswagen Beetle",
  },
  {
    id: 4,
    name: "Porsche Taycan",
    brand: "Porsche",
    price: 100400,
    stars: 5,
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/Taycan-2024/11515/1707404051019/front-left-side-47.jpg?tr=w-664",
    altText: "Porsche Taycan",
  },
];

const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {carData.map((item, index, array) => {
        return (
          <Car
            key={item.id}
            image={item.image}
            altText={item.altText}
            name={item.name}
            brand={item.brand}
            price={item.price}
            stars={item.stars}
          />
        );
      })}
    </section>
  );
};

export default App;