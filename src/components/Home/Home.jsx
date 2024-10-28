import React, { createContext, useState } from 'react';



export const homeContext = createContext(null)
const Home = (data) => {
    console.log(data)
    
    const [homeData, setHomeData] = useState("from Home")
    
    return (
        <div>
            this is home page 
            <homeContext.Provider value={homeData}>
                {data.children}
            </homeContext.Provider>
        </div>
    );
};

export default Home;