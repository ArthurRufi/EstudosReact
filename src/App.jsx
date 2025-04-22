import AddTasks from "./AddTasks";
import Tasks from "./components/Tasks";
import './App.css';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Comprar Ração",
    description: "Comprar 10kg de ração para o gato",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Reunião Pessoal",
    description: "Reunião Pessoal com Arquiteta",
    isCompleted: false,    
  },
  {
    id: 3,
    title: "Iniciar Projeto",
    description: "Iniciar projeto do SaaS cliente 3031",
    isCompleted: false,
  }
  
  ])
  return (  // Adicionando o return aqui para que o JSX seja retornado corretamente
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <ul className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </ul>
        <Tasks tasks={tasks}/>
        <AddTasks />
      </div>
    </div>
  );
}

export default App;
