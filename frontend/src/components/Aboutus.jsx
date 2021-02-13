import React from "react";
import Services from "./Services";
import Ourskill from  "./Ourskill";
import Breadcrumbs from "./Breadcrumbs";
export default function Aboutus(){
    return (
        <div>
            <Breadcrumbs title={"About us"} link={"/aboutus"}/>
            <Ourskill />
            <Services/>
        </div>
    )
}