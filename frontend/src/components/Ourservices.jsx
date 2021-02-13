import React from "react";
import Services from "./Services";
import Breadcrumbs from "./Breadcrumbs";
export default function Ourservices(){
    return (
        <>
			<Breadcrumbs title={"Our Services"} link={"/ourservices"}/>
        <Services/>
        </>
    )
}