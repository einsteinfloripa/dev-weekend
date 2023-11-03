import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import FoodContainer from "./components/FoodContainer";

import "./App.css";

function App() {
  const foods = [
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "Frango Yin Yang",
      description: "Um pouco arros, um pouco de salada",
      price: 14.9,
    },
    {
      image: "https://einsteinfloripa.com.br/images/org/viana.png",
      title: "Frango Yi",
      description: "Um pouco arros",
      price: 12.9,
    },
  ];

  return (
    <>
      <Header />

      <div className='food-section'>
        <SectionTitle title='Primeiro, seu prato' />
        <div>
          {foods.map((food) => (
            <FoodContainer
            image={food.image}
            title={food.title}
            description={food.description}
            price={food.price}
          />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
