import { useState, useEffect,  } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Logar() {
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')
const navigate = useNavigate()

const logar = async () => {
    try { 
        const res = await axios.post('http://localhost:3000/login', {
            email: email,
            senha: senha
        });
        if (res.status === 200) {
            // Sucesso no login, redirecionar para a página principal
            navigate('/home');
        } else {
            alert('Login falhou, verifique suas credenciais');
        }
    }

}



function App() {
  return (
    <>
      <div className='cabecalho'>
        <header>
            <h1>Login</h1>

        </header>
      </div>
    </>
  )
}

export default App
