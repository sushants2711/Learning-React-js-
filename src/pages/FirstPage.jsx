import { useState } from "react";
import { Resturant } from "../component/Resturant"
import { MenuApi } from "../API/MenuApi.js";


export const FirstPage = () => {
    const [ menu, setMenu ] = useState(MenuApi) ;

    return(
        <>
        <Resturant  menuData={menu}/>
        </>
    )
}