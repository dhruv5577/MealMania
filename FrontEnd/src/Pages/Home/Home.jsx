import { useState } from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import './Home.module.css'
import Display from '../../components/Display/Display';

export default function Home() {

  const[category,setCategory]=useState('All');

  return (
    <div>
     <Header/>
     <Menu category={category} setCategory={setCategory}/>
     <Display category={category}/>
    </div>
  )
}
