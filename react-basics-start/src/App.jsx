import List from "./List.jsx";

function App() {

  const fruits = [

    {id: 1 ,name: 'Apple',cal: "sma"} , 
    {id: 2 ,name: 'Orange', cal: 45}, 
    {id: 3 ,name: 'Banana', cal:105},
    {id: 4 ,name: 'Lime', cal: 159}, 
    {id: 5 ,name: 'Pineapple', cal: 37}

   ];

   const veggies = [

    {id: 1 ,name: 'Carrots',cal: 95} , 
    {id: 2 ,name: 'Squash', cal: 45}, 
    {id: 3 ,name: 'Okra', cal:105},
    {id: 4 ,name: 'Cabbage', cal: 159}, 
    {id: 5 ,name: 'Potato', cal: 37}

   ];

  return(
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {veggies.length > 0 ? <List items={veggies} category="Vegtables"/> : null}
    </>
  );
  
  
}


export default App
