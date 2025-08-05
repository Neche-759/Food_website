import React from "react"
import MenuSection from "./ourmenu"
import MenuGrid from "./Menugrid"
import AppsSection from "./appsection"
import Footer from "./menufooter"
import Menufooter from "./menufooter"



export const Menuhome = ()=>{
    return(

        <React.Fragment>
            <MenuSection />
            <MenuGrid />
            <AppsSection />
            <Menufooter />
        </React.Fragment>
    )
}