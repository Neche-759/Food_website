import Footer from "./menufooter"
import { Bookmenu_nav } from "../book components/navbar"
import Menufooter from "./menufooter"
import BlogDetails from "./BlogDetails"
import Body from "./body"
import Homepage from "./navbar"



export const Blog_home = ()=>{
    return(

        <React.Fragment>
            <BlogDetails />
            <Body />
            <Footer/>
            <Homepage />
        </React.Fragment>
    )
}