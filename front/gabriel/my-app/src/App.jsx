import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import FoodContainer from "./components/FoodContainer";

import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/foods")
      .then((response) => setFoods(response.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading === true) return <p>Carregando...</p>;

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
