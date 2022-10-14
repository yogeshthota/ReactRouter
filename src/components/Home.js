import { useNavigate } from 'react-router-dom';
import React from 'react';

function Home(props) {
    const navigate = useNavigate();//used for navigation
    return (
        <>
        <div>
            Home Page
        </div>
        {<button onClick={() => navigate('order-summary',{replace:true})}> Place Order </button>
        //replace will replace the empty page(or history) , 
        //instead of pushing 'order-summary' page to the stack
        //this way when we click Go Back button in 'order-summary', 
        //it will go to the empty page of the browser
        //we can close the browser,click on 'order-summary' and then Go Back button to check this.
        }
        </>
    );
}

export default Home;