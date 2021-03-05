import {FC} from 'react';
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const App: FC = () => {

  return (
    <div className="Wrapper">
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
