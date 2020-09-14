import React, { useState } from 'react';
import {SimpleMenu} from './simplemenu/SimpleMenu'
import "./styles.scss"
import {Calculator } from "./calculator"
import { Calendar} from "./calendar";
import { Recipes} from "./recipes";
import { Contact } from "./contact";
import { Logout } from "./logout";

export const Dashboard = () => {
    const [view, setView] = useState("recipes")

    return <div className='main_dashboard'>
        <SimpleMenu onChange={(value) => setView(value)}/>
        {view === "calculator" && <Calculator />}
        {view === "calendar" && <Calendar />}
        {view === "recipes" && <Recipes />}
        {view === "contact" && <Contact />}
        {view === "logout" && <Logout/>}
    </div>
}



