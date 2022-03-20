
import './App.css';
import { InputForm } from './components/InputForm';
import { Title } from './components/Title';


function App() {
  return (
    <div className="body">
      <Title />  
      <InputForm />
      <TodoLst />
    </div>
  );
}

export default App;
