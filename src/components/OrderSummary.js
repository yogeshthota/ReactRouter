import React from 'react';
import {useNavigate} from 'react-router-dom';
function OrderSummary(props) {
    const navigate =useNavigate();
    return (
        <>
        <div>
            Order Confirmed!
        </div>
        {//go to the back page
        <button onClick={() => navigate(-1)}>Go Back</button>
        }
        </>
    );
}

export default OrderSummary;