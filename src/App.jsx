import "./App.css";
import { FaCat } from "react-icons/fa6";

function App() {
  return (
    <div className="min-h-screen bg-pink-200 flex flex-col">
      <nav className="bg-white py-3 shadow-md">
        <div className="flex items-center justify-center text-gray-800 text-lg">
          <FaCat size={40} color="#7C3AED" className="mr-5" />
          <h1 className="text-2xl font-bold text-purple-600 ">DudaSys</h1>
          <FaCat size={40} color="#7C3AED" className="ml-5 " />
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center p-6">
        <form action="https://getform.io/f/bllznleb" method="POST" className="max-w-md bg-white p-6 rounded-lg shadow-md space-y-2" >
          <h2 className="text-2xl font-semibold text-center mb-4">Entrar na sua conta</h2>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Digite o email"
              className="w-80 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:border-purple-600"
            />
          </div>
          <div>
            <input
              type="password"
              name="senha"
              placeholder="Digite a senha"
              className="w-80 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:border-purple-600 hover:border-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-80 bg-purple-600 text-white py-2 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
