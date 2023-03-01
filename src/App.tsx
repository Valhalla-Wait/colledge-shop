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

const db:DbType = {
  currentUser: null,
  users: [],
  products: [],
  categories: [],
  cart: [],
}

export const dbContext = React.createContext(db)

function App() {

  return (
    <dbContext.Provider value={db}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/product/:id' element={<DetailProduct />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </dbContext.Provider>
  );
}

export default App;


type DbType = {
  currentUser: UserType | null,
  users: UserType[],
  products: ProductType[],
  categories: CategoryType[],
  cart: ProductType[],
}

type UserType = {
  id: number,
  firstName: string,
  surname: string,
  email: string,
  password: string,
  isAdmin: boolean
}

type ProductType = {
  id: number,
  title: string,
  description: string,
  price: number,
  categoryId: number
}

type CategoryType = {
  id: number,
  title: string
}

