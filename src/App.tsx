import React from 'react';
import logo from './logo.svg';
import { Counter } from './store/feauters/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Admin } from './components/Admin';
import { DetailProduct } from './components/DetailProduct';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import {useState} from 'react'



function App() {

  const [db, setDb] = useState<DbType>({
    currentUser: null,
    users: [
      {
        id:0,
        firstName: "Admin",
        surname: '',
        email: 'admin',
        password: 'admin',
        isAdmin: true,
      }
    ],
    products: [],
    categories: [],
    cart: [],
  })
  
  console.log(db)

  
  const signUp = (data:UserType) => {
  
    setDb(prev => ({
      ...prev,
      users: [...prev.users, data],
      currentUser: data
    }))
  } 

  const signIn = (data:SignInType) => {
  
    const findUser = db.users.find(user => user.email === data.email && user.password === data.password)
    
    if (findUser) {
      setDb(prev => ({
        ...prev,
        currentUser: findUser
      }))
    }
  } 

  const createProduct = (data:ProductType) => {
    debugger
      setDb(prev => ({
        ...prev,
        products: [...prev.products, data]
      }))
  } 

  const logOut = () => {
      setDb(prev => ({
        ...prev,
        currentUser: null
      }))
  } 

  return (
      <BrowserRouter>
        <div className="App">
          <Header onCallback={logOut} db={db}/>
          <Routes>
            <Route path='/' element={<Products db={db} />} />
            <Route path='/signIn' element={<SignIn db={db} onCallback={signIn}/>} />
            <Route path='/signUp' element={<SignUp db={db} onCallback={signUp}/>} />
            <Route path='/admin' element={<Admin onCallback={createProduct} db={db} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<DetailProduct />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
  );
}

export default App;


export type SignInType = {
  email: string,
  password: string
}

export type DbType = {
  currentUser: UserType | null,
  users: UserType[],
  products: ProductType[],
  categories: CategoryType[],
  cart: ProductType[],
}

export type UserType = {
  id: number,
  firstName: string,
  surname: string,
  email: string,
  password: string,
  isAdmin: boolean
}

export type ProductType = {
  id: number,
  title: string,
  description: string,
  price: number,
}

export type CategoryType = {
  id: number,
  title: string
}

