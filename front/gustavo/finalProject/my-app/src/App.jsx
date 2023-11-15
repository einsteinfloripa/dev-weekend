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
      image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/4b/8b/9f/kam-yin-amsterdam-zuidoost.jpg",
      title: "Frango Yin ",
      description: "frango kung-fu",
      price: 14.9,
    },
    {
      image: "https://marolacomcarambola.com.br/wp-content/uploads/2016/11/receita-de-frango-com-bacon-e-molho-barbecue-1.jpg",
      title: "Frango barbicue",
      description: "Frango ao molho barbicue",
      price: 16.9,
    },
    {
      image: "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2019/05/frango-assado-com-farofa.jpg?fit=1200%2C675&ssl=1",
      title: "Frango com farofa",
      description: "Frango com forofinha",
      price: 12.9,
    },
  ];
  const drinks = [
    {
      image: "https://st3.depositphotos.com/1063437/32154/i/450/depositphotos_321541624-stock-photo-can-and-glass-of-coca.jpg",
      title: "Coca ",
      description: "Coquinha geladinha",
      price: 14.9,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJS-dvaSQu_5LYpjSqgUE81tgn63AKn77PcQ&usqp=CAU",
      title: "Pespsi",
      description: "pepsi > coca?",
      price: 16.9,
    },
    {
      image: "https://supermaraja.com.br/wp-content/uploads/2020/08/273.jpg",
      title: "H2o",
      description: "h2o é mt bom",
      price: 12.9,
    },
  ];
  const desert = [
    {
      image: "https://cdn.awsli.com.br/600x450/1011/1011926/produto/39105544/casquinha-de-sorvete-biscoito-doce-conny-d56edf5d.jpg",
      title: "Sorvete ",
      description: "Sorvete geladinho de sobremesa",
      price: 14.9,
    },
    {
      image: "https://jadoces.com.br/wp-content/uploads/2022/08/118402-2.jpg",
      title: "Paçoca",
      description: "Não é um docinho do RU, mas a paçoca tem seu valor",
      price: 16.9,
    },
    {
      image: "https://cdn.sistemawbuy.com.br/arquivos/aa0543e6e28970c84ad7321d40710790/produtos/6414a343a053f/morango-bandeija-6417d918bec47.jpg",
      title: "Morango",
      description: "ta achando que a vida é um morango?",
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
        {screenContainer && (
        <BuyScreen
          food={foodSelect}
          drink={drinktSelect}
          desert={desertSelect}
        ></BuyScreen>
      )}
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
