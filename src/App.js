import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import Subproduct from './Pages/ProductList/SubProduct';
import Fullview from './components/FullView/CardFullview/Fullview';
import TextilePrinting from './components/FullView/TextileRoll/TextileView';
import Fabric from './components/FullView/TextileRoll/Fabric';
import Scarf from './components/FullView/TextileRoll/Scarf';
import DecorPillow from './components/FullView/TextileRoll/DecorPillow';
import BeanBag from './components/FullView/TextileRoll/BeanBag';
import Placemat from './components/FullView/TextileRoll/Placemat';
import Dining from './components/FullView/TextileRoll/Dining';
import Armband from './components/FullView/TextileRoll/Armband';
import Sash from './components/FullView/TextileRoll/Sash';
import Apron from './components/FullView/TextileRoll/Apron';
import Pouches from './components/FullView/TextileRoll/Pouches';
import Froster from './components/FullView/officestore/Froster';
import WindowBrand from './components/FullView/officestore/WindowBrand';
import WindowGraphic from './components/FullView/officestore/WindowGraphic';
import OneWay from './components/FullView/officestore/OneWay';
import DecorWindow from './components/FullView/officestore/DecorWindow';
import FloorSticker from './components/FullView/officestore/FloorSticker';
import ReposionableCling from './components/FullView/officestore/ReposionableCling';
import WallVeyil from './components/FullView/officestore/WallVeyil';
import LetterBoardView from './components/FullView/LetterBoardView/LetterBoardView';
import EnvelopesFullView from './components/FullView/EnvelopesFullView/EnvelopesFullView';


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductList />} />
          <Route path="/Fashion/Textile Roll" element={<TextilePrinting />} />
          <Route path="/Fashion/Scarf" element={<Scarf />} />
          <Route path="/Fashion/Decorative Pillow" element={<DecorPillow />} />
          <Route path="/Fashion/Bean Bags" element={<BeanBag />} />
          <Route path="/Fashion/Placemat" element={<Placemat />} />
          <Route path="/Fashion/Dining" element={<Dining />} />
          <Route path="/Lifestyle/Armband" element={<Armband />} />
          <Route path="/LifeStyle/Sash" element={<Sash/>}/>
          <Route path="/LifeStyle/Apron" element={<Apron/>}/>
          <Route path="/Lifestyle/Drawstring Pouches" element={<Pouches/>}/>
          <Route path="/Office & Store Branding/:id" element={<Froster/>}/>
          <Route path='/Office & Store Branding/Window Vinyl Lettering' element={<WindowBrand/>}/>
          <Route path='/Office & Store Branding/Window Graphic' element={<WindowGraphic/>}/>
          <Route path='/Office & Store Branding/One Way Vision Sticker' element={<OneWay/>}/>
          <Route path='/Office & Store Branding/Window Films' element={<DecorWindow/>}/>
          <Route path='/Office & Store Branding/Floor Direction Sticker' element={<FloorSticker/>}/>
          <Route path="/Office & Store Branding/Floor Sale Sticker" element={<FloorSticker/>}/>
          <Route path='/Office & Store Branding/Floor Branding Sticker' element={<FloorSticker/>}/>
          <Route path='/Office & Store Branding/Footprint Floor Sticker' element={<FloorSticker/>}/>
          <Route path='/Office & Store Branding/Repositionable Clings' element={<ReposionableCling/>}/>
          <Route path='Office & Store Branding/Wall Vinyl Lettering' element={<WallVeyil/>}/>










          <Route path="/:header/:id" element={<Subproduct />} />
          <Route path="/fabric" element={<Fabric />} />

          <Route path="/FullViewCard" element={<Fullview />} />

          <Route path='/letterhead' element={<LetterBoardView/>}/>
          <Route path='/envelopes' element={<EnvelopesFullView/>}></Route>
                  </Routes>
      </Layout>
    </Router>

  )
}
