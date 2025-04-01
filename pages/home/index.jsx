import { useEffect, useState } from 'react'
import './style.css'
import Trash from "../../assets/bin.png"
import api from "../../services/api.js"

function Home() {

  let  users = []

  async function getUsers(){
    const usersFromapi = await api.get("/usuarios")
    users = usersFromapi.data
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome:' name="nome" type='text' />
        <input placeholder='Idade' name="idade" type='number'/>
        <input placeholder='Email' name="email" type='email'/>
        <button type="button">Cadastrar</button> 
      </form>
      { users.map(user => (
        <div key={user.id} className='card'>
        <div>
          <p>Nome: <span>{user.name}</span> </p>
          <p>Idade: <span>{user.age}</span> </p>
          <p>E-mail: <span>{user.email}</span> </p>
        </div>
        <button className='bin' type="button">
          <img className='bin-button' src={Trash} />
        </button>
      </div>
      ))}
      
    </div>
  )
}

export default Home
