import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import Fullview from '../src//components/FullView/CardFullview/Fullview';
import { LetterBoardTable } from './constants';
import LetterBoardView from './components/FullView/LetterBoardView/LetterBoardView';
import EnvelopesFullView from './components/FullView/EnvelopesFullView/EnvelopesFullView';


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/full' element={<Fullview/>}/>
          <Route path='/letterhead' element={<LetterBoardView/>}/>
          <Route path='/envelopes' element={<EnvelopesFullView/>}></Route>
        </Routes>
      </Layout>
    </Router>

  )
}
