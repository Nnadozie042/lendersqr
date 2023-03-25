import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Switch from './Componenets/SideBar/Switch';
import User from './Componenets/SideBar/User';
 import Gauarantors from './Componenets/SideBar/Gauarantors'
 import Loan from './Componenets/SideBar/Loan';
 import Decision from './Componenets/SideBar/Decision';
 import Request from './Componenets/SideBar/Request';
 import White from './Componenets/SideBar/White'
 import Karma from './Componenets/SideBar/Karma';
 import Organisation from './Componenets/SideBar/Organisation';
 import Products from './Componenets/SideBar/Products';
 import Free from './Componenets/SideBar/free.js';
 import Transaction from './Componenets/SideBar/Transaction';
 import Account from './Componenets/SideBar/Account'
 import Settlement from './Componenets/SideBar/Settlement';
 import Report from './Componenets/SideBar/Report'
 import Preference from './Componenets/SideBar/Preference';
 import Saving from './Componenets/SideBar/Saving'
 import Pricing from './Componenets/SideBar/Pricing';
import Audit from './Componenets/SideBar/Audit';
import Body from './Componenets/SideBar/Body';
import Cover from './Componenets/SideBar/Cover'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <BrowserRouter>
 <Routes>
  <Route exact path="/"element={<App/>}/>
  <Route  path="/Body" element={<Body />} />
  <Route path="/Switch" element={<Switch />} />
  <Route path="/User" element={<User />} />
  <Route path="/Gauarantors" element={<Gauarantors />} />
  <Route path="/Loan" element={<Loan />} />
  <Route path="/Decision" element={<Decision />} />
  <Route path="/Saving" element={<Saving />} />
  <Route path="/White" element={<White />} />
  <Route path="/Request" element={<Request />} />
  <Route path="Karma" element={<Karma />} />
  <Route path="/Organisation" element={<Organisation />} />
  <Route path="/Products" element={<Products />} />
  <Route path="/Free" element={<Free />} />
  <Route path="/Transaction" element={<Transaction />} />
  <Route path="/Account" element={<Account />} />
  <Route path="/Settlement" element={<Settlement />} />
  <Route path="/Report" element={<Report />} />
  <Route path="/Preference" element={<Preference />} />
  <Route path="/Pricing" element={<Pricing />} />
  <Route path="/Audit" element={<Audit />} /> 
  <Route path="/userDetails/:id"element={<Cover/>}/>
 
 </Routes>
</BrowserRouter>
 

);


