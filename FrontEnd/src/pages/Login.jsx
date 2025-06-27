import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className='container'>
      <header className='container-header'>
        <h1>Estacionamento</h1>
        <img
          src=""
          alt="Logo"
        />
      </header>

      <div className='container-menu'>
        <h2 className='titulo'>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            logar();
          }}
        >
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
