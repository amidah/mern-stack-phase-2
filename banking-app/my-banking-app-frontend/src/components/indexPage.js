import AOS from 'aos';
import '../App.css';
import '../style.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customerSignUp, findAllCustomer } from '../slice/customerSlice';
import { loginSignIn } from '../slice/userSlice';
import { useForm } from 'react-hook-form';
import ErrorModal from './ErrorModal';

function IndexPage(){
    let loginState = useSelector(state => state.userKey);
    const [error, setError] = useState();
    let [contactForm, setContactForm] = useState({});
    let initialCustomerNumber = 112233;
    let initialAccountNumber = 10010;
    let initialAmount = 1000;
    let navigate = useNavigate();

    let [user, setUser] = useState({
           "cname": "", "emailid": "", "gender": "", "phoneNumber": "", "address": "", "password": "", "accno": 0, "amount": 0.0,
           "typeofuser": "customer", "cid": 0
    });

    let [login, setLogin] = useState({"emailid": "", "password": "", "typeofuser": ""});
    let [storeData, setStoreData] = useState(false);
    let dispatch = useDispatch();
    let {userList, customerList, loading} = useState(state => state);
}

export default IndexPage;