import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import FoodContainer from "./components/FoodContainer";
import Footer from "./components/Footer";
import BuyScreen from "./components/BuyScreen";
import "./App.css";
import { useState } from "react";

function App() {
  const foods = [
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "Frango Yin ",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 14.9,
    },
    {
      image: "https://acdn.mitiendanube.com/stores/002/547/070/products/1141-9cafc074873738137b16915243850729-640-0.png",
      title: "Frango barbicue",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 16.9,
    },
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "Frango com farofa",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 12.9,
    },
  ];
  const drinks = [
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "coca ",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 14.9,
    },
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "pespsi",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 16.9,
    },
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "h2o",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 12.9,
    },
  ];
  const desert = [
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "sorvete ",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 14.9,
    },
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "paçoca",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 16.9,
    },
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "morango",
      description: "Um pouco arros!!!, um pouco de salada",
      price: 12.9,
    },
  ];
  const [foodSelect, setFoodSelected] = useState(null);
  const [drinktSelect, setDrinkSelected] = useState(null);
  const [desertSelect, setDesertSelected] = useState(null);
  const allSelected =
    foodSelect != null && drinktSelect != null && desertSelect != null;
  console.log(foodSelect);

  const [screenContainer, setBuyScreen] = useState(false);
  console.log(screenContainer);

  return (
    <>
      {screenContainer && (
        <BuyScreen
          food={foodSelect}
          drink={drinktSelect}
          desert={desertSelect}
        ></BuyScreen>
      )}
      <Header />
      <div className="food-section">
        <SectionTitle title="Primeiro, seu prato" />
        <div>
          {foods.map((foods, index) => (
            <FoodContainer
              onClick={() =>
                setFoodSelected({ title: foods.title, price: foods.price })
              }
              isSelected={foodSelect?.title === foods.title}
              image={foods.image}
              title={foods.title}
              description={foods.description}
              price={foods.price}
              key={`dishes-${index}`}
            />
          ))}
        </div>
        <SectionTitle title="Agora, sua bebida" />
        <div>
          {drinks.map((drinks, index) => (
            <FoodContainer
              onClick={() =>
                setDrinkSelected({ title: drinks.title, price: drinks.price })
              }
              isSelected={drinktSelect?.title === drinks.title}
              image={drinks.image}
              title={drinks.title}
              description={drinks.description}
              price={drinks.price}
              key={`drinks-${index}`}
            />
          ))}
        </div>
        <SectionTitle title="Por fim, sua salada" />
        <div>
          {desert.map((desert, index) => (
            <FoodContainer
              onClick={() =>
                setDesertSelected({ title: desert.title, price: desert.price })
              }
              isSelected={desertSelect?.title === desert.title}
              image={desert.image}
              title={desert.title}
              description={desert.description}
              price={desert.price}
              key={`desert-${index}`}
            />
          ))}
        </div>
      </div>
      <Footer verify={allSelected} onClick={() => setBuyScreen(true)} />
    </>
  );
}

export default App;
