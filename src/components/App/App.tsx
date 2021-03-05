import {FC} from 'react';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App: FC = () => {

  return (
    <div className="Wrapper">
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
