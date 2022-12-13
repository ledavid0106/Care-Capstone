import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ProductionResult from '../../components/ProductionResults/ProductionResults';
import useAuth from '../../hooks/useAuth';


const ProductionPage = () => {
    
    const [user, token] = useAuth();


    return ( 
        <ProductionResult/>
     );
}
 
export default ProductionPage;