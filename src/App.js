import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "../src/redux/store/store"
import Login from './Components/Login';
import ContactForm from './Components/ContactForm';
import StoreBasicInfo from './Components/StoreBasicInfo';
import StoreDocument from './Components/StoreDocument'
import StoreAgreement from './Components/StoreAgreement';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from './Components/Orders'
import AddProduct from './Components/AddProduct';
import ProductListing from './Components/ProductList';
import MyProfile from './Components/Profile';
function App() {
    return (
        <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/storeBaseinfo' element={<StoreBasicInfo />} />
                <Route path='/storeDocument' element={<StoreDocument />} />
                <Route path='/storeAgreement' element={<StoreAgreement />} />
                <Route path='/ContactForm' element={<ContactForm/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/orders' element ={<Orders/>}/>
                <Route path ='/addProduct' element={<AddProduct/>}/>
                <Route path ='/productList' element={<ProductListing/>}/>
                <Route path ='/myProfile' element={<MyProfile/>}/>
            </Routes>

        </Router>

        </Provider>
    );
}

export default App;
