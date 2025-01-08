import './App.css';

// import { students } from './data';
// import { ListMap } from './components/lists';
// import Counter from './components/counter';
// import LightningCounter from './components/lightning_counter';
// import CountThree from './components/count_to_three';
// import ControlledComponent from './components/controlled_component';
// import Form from './components/form';
// import Accordion from './components/accordion'
// import Calculator from './components/calculator'
import BmiCalculator from './components/bmi_calculator'

function App() {
  return (
    <div>
      <BmiCalculator />
      {/* <ControlledComponent />
      <Calculator />
      <Accordion />
      <br />
      <Form />
      <CountThree />
      <br />
      <LightningCounter />
      <br />
      <Counter />
      <br />
      <ListMap students={students} /> */}
    </div>
);
}

export default App;
