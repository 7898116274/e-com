import React, { useState } from 'react';
import axios from 'axios';


function Mountain() {
      const [user, setUser] = useState();
      const getToken = async (e) => {
            e.preventDefault(); // Prevent default behavior of the click event

            try {
                  const response = await axios.get("http://localhost:5000/api/user/verify");
                  const result = response.data;
                  console.log(result);
                  // Assuming setUser is a function to set the user state
                  setUser(result); // Make sure to define setUser somewhere in your code
            } catch (error) {
                  console.log(error.message);
                  // Handle error, such as showing an error message to the user
            }
      };

      return (
            <>

                  <button onClick={getToken}>Get Token</button>
                  {
                        user ? (
                              <h1>Hello{user.userContact}</h1>
                        ) : (
                              <h1>no</h1>
                        )
                  }
            </>

      );
}

export default Mountain;