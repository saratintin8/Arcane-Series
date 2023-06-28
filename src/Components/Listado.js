import Item from "./Item";
import React from "react";
import "../Styles/Listado.css"
//import { useState } from "react"

export default function Listado({ user, setUser }) {



    const handleLogout = () => {
        setUser([])
    }

    return (
        <div className="ContentImageList">
            
            <div className="ContentList">

                <h1>Arcane Characters
                <button onClick={handleLogout}>Logout</button>
                </h1>

                <Item
                    name="Vi"
                    image="Vi"
                    image2="Vi2"
                    type="Guardiana de Piltover"
                    tags="Fighter Assassin"
                    town="Zaun"
                    description="Vi, born as Violet, is a Zaun Crest icon Zaunite vigilante and Jinx's older sister. A hotheaded and fearless woman who excels at fighting and likes to solve her problems with her fists, she wields a pair of powerful hextech gauntlets that can punch through buildings - and people - with little trouble."
                />

                <Item
                    name="Jinx"
                    image="Jinx"
                    image2="Jinx2"
                    type="La Bala Perdida"
                    tags="Marksman"
                    town="Zaun"
                />

                <Item
                    name="Vander"
                    image="Vander"
                    image2="Vander2"
                    type="La Ira Descontrolada de Zaun"
                    tags="Fighter Tank"
                    town="Zaun"
                />

                <Item
                    name="Jayce"
                    image="Jayce"
                    image2="Jayce2"
                    type="El Defensor del Mañana"
                    tags="Fighter Marksman"
                    town="Piltover"
                />

                <Item
                    name="Heimerdinger"
                    image="Heimerdinger"
                    image2="Heimerdinger2"
                    type="El Inventor Venerado"
                    tags="Mage Support"
                    town="Piltover"
                />

                <Item
                    name="Viktor"
                    image="Viktor"
                    image2="Viktor2"
                    type="El Heraldo de las Máquinas"
                    tags="Mage"
                    town="Zaun y Piltover"
                />

                <Item
                    name="Mel"
                    image="Mel"
                    image2="Mel2"
                    type="Concejal Medarda"
                    tags="Councillor-Aristocrat"
                    town="Runaterra y Piltover"
                />

                <Item
                    name="Caitlyn"
                    image="Caitlyn"
                    image2="Caitlyn2"
                    type="La Sheriff de Piltover"
                    tags="Warden (Sheriff)"
                    town="Piltover"
                />

                <Item
                    name="Ekko"
                    image="Ekko"
                    image2="Ekko2"
                    type="El Manipulador del Tiempo"
                    tags="Watcher-Inventor"
                    town="Zaun"
                />

                <Item
                    name="Silco"
                    image="Silco"
                    image2="Silco2"
                    type="El ojo de Zaun"
                    tags="Drug Lord"
                    town="Zaun"
                />

                <Item
                    name="Singed"
                    image="Singed"
                    image2="Singed2"
                    type="El químico loco"
                    tags="Scientist-Alchemist"
                    town="Piltover"
                />
            </div >
        </div>
    );

}




