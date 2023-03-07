import React from "react";
import { NavLink } from "react-router-dom";
import Tablewithsearch from "./Tablewithsearch";

const MainTablewithsearch =() =>{

    return(
        <>
        <Tablewithsearch />
        <NavLink to="/sample" className="Navlink-header">
          Go to sibling page
        </NavLink>
        </>
    )
}

export default MainTablewithsearch;