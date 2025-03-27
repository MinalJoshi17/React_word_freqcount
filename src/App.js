import './App.css';
import react,  {useState}  from 'react';
import Navigation from './Component/Navigation';
import Counter from './Component/Counter';

function App() {
  const [searchString, setSearchString] = useState('hi');
  return (
    <>
      <Navigation />
      <Counter /> 
   </>
  );
}

export default App;

