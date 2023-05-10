import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';

const App = () => {
  const coffeeCollection = useLoaderData()
  // console.log(coffeeCollection);
  const [coffees, setCoffees] = useState(coffeeCollection);
  const handleRemainingItems = id => {
    const remainingCoffees = coffees.filter(coffee => coffee._id !== id);
    setCoffees(remainingCoffees)
  }
  return (
    <section className='container mx-auto p-24'>
      <h2 className='text-3xl font-bold text-center mb-6'>Hot Hot Cold Gold Coffee</h2>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleRemainingItems={handleRemainingItems} />)
        }
      </div>
    </section>
  );
};

export default App;