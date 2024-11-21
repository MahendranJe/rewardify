import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import ContactHeader from './Components/ContactHeader';
import ContactForm from './Components/ContactForm';
import StoreBasicInfo from './Components/StoreBasicInfo';
import StoreDocument from './Components/StoreDocument'
import StoreAgreement from './Components/StoreAgreement';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from './Components/Orders'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/storeBaseinfo' element={<StoreBasicInfo />} />
                <Route path='/storeDocument' element={<StoreDocument />} />
                <Route path='/storeAgreement' element={<StoreAgreement />} />
                <Route path='/ContactForm' element={<ContactForm/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/orders' element ={<Orders/>}/>
            </Routes>

        </Router>
    );
}

export default App;
