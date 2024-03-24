import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { findAllCustomer } from '../slice/customerSlice';
import { findTransaction } from '../slice/transactionSlice';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

function AdminPage(){
    let [customers, setCustomers] = useState([{}]);
    let [transactions, setTransactions] = useState([{}]);
    let [customer, setCustomer] = useState({});
    let dispatch = useDispatch();
    let {customerList, transactionList} = useSelector(state => state);
    let [cid, setCid] = useState(0);
    let [accno, setAccno] = useState(0);
    let [searchCustomerResult, setSearchCustomerResult] = useState(false);
    let [phonenumber, setPhoneNumber]  = useState(0);
    let [customerRecordNotFound, setCustomerRecordNotFound] = useState("");
    let navigate = useNavigate();
    
    const logout = (event) => {
        navigate("/");
    }

    const searchCustomerInfo = (event) => {
        event.preventDefault();
        setAccno(0);
        setCid(0);
    }



};

export default AdminPage;