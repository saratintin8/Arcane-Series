import Item from "./Item";
import React from "react";
import "../Styles/Listado.css";
import { useNavigate } from "react-router-dom";

export default function Listado() {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("Sign in")
        navigate("/")
    }

    return (
        <div className="ContentImageList">

            <div className="TitleList">
                <h1>Arcane Character</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <div className="ContentList">

                <Item
                    name="Vi"
                    image="Vi"
                    image2="Vi2"
                    type="Guardiana de Piltover"
                    tags="Fighter Assassin"
                    town="Zaun"
                    description="Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures. 
                    Growing up all but alone, Vi developed finely honed survival instincts as well as a wickedly abrasive sense of humor. Now working with the Wardens to keep the peace in Piltover, 
                    she wields mighty hextech gauntlets gauntlets that can punch through walls and suspects with equal ease."
                />

                <Item
                    name="Jinx"
                    image="Jinx"
                    image2="Jinx2"
                    type="La Bala Perdida"
                    tags="Marksman"
                    town="Zaun"
                    description="A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, 
                    she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. 
                    Jinx despises boredom and gleefully brings her own chaotic brand of pandemonium wherever she goes."
                />

                <Item
                    name="Vander"
                    image="Vander"
                    image2="Vander2"
                    type="La Ira de Zaun"
                    tags="Fighter Tank"
                    town="Zaun"
                    description="Vander was a Zaunite bartender and the adoptive father of Vi and Jinx. 
                    A talented boxer and a good-hearted man, he was widely respected by the denizens of the undercity and was willing to die for his own convictions, 
                    especially if it meant saving those he cared about. A caring person, Vander was always willing to protect those that needed his help."
                />

                <Item
                    name="Jayce"
                    image="Jayce"
                    image2="Jayce2"
                    type="El Defensor del Mañana"
                    tags="Fighter Marksman"
                    town="Piltover"
                    description=" Jayce is a brilliant inventor who has pledged his life to the defense of Piltover and its unyielding pursuit of progress. 
                    While revered throughout the city as a hero, he hasn't taken well to the attention it brings. Still, Jayce's heart is in the right place, 
                    and even those who envy his natural skills are grateful for his protection in the City of Progress."
                />

                <Item
                    name="Heimerdinger"
                    image="Heimerdinger"
                    image2="Heimerdinger2"
                    type="El Inventor Venerado"
                    tags="Mage Support"
                    town="Piltover"
                    description="A brilliant yet eccentric yordle scientist, Professor Cecil B Heimerdinger is one of the most innovative and esteemed inventors  Piltover has ever known. 
                    Heimerdinger has crafted some of Piltover's most miraculous not to mention lethal machinery, 
                    and constantly tinkers with his inventions to make them even more efficient."
                />

                <Item
                    name="Viktor"
                    image="Viktor"
                    image2="Viktor2"
                    type="El Heraldo de las Máquinas"
                    tags="Mage"
                    town="Zaun y Piltover"
                    description="Viktor has devoted his life to the advancement of humankind. He seeks to lift the people of Zaun to a new level of understanding, 
                    he believes that only by embracing a glorious evolution of technology can humanity's full potential be realized. 
                    With a body augmented by steel and science, Viktor pursues of this bright future."
                />

                <Item
                    name="Mel"
                    image="Mel"
                    image2="Mel2"
                    type="Concejal Medarda"
                    tags="Councillor-Aristocrat"
                    town="Runaterra y Piltover"
                    description="Mel Medarda is a  Noxian aristocrat based in Piltover and a member of Piltover's ruling council. 
                    A disowned heir of the  Medarda Clan, Mel is an ambitious politician willing to do anything to put herself at the top. 
                    Using her political prowess, the actions she made have forever changed the course of Piltover's history.
                    Mel is able to convince and manipulate people in her favor."
                />

                <Item
                    name="Caitlyn"
                    image="Caitlyn"
                    image2="Caitlyn2"
                    type="La Sheriff de Piltover"
                    tags="Warden (Sheriff)"
                    town="Piltover"
                    description="Renowned as the finest peacekeeper, Caitlyn is Piltover’s best shot at ridding the city of its elusive criminal elements. 
                    Caitlyn’s most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the city of progress. 
                    Caitlyn is a woman who is very devoted to the community of Piltover."
                />

                <Item
                    name="Ekko"
                    image="Ekko"
                    image2="Ekko2"
                    type="El Manipulador del Tiempo"
                    tags="Watcher-Inventor"
                    town="Zaun"
                    description="A prodigy from the rough streets of Zaun, Ekko manipulates time time to twist any situation to his advantage. Using his own invention,
                    the Z-Drive, he explores the branching possibilities of reality to craft the perfect moment. 
                    Though he revels in this freedom, when there’s a threat to his friends, he’ll do anything to defend them."
                />

                <Item
                    name="Silco"
                    image="Silco"
                    image2="Silco2"
                    type="El ojo de Zaun"
                    tags="Drug Lord"
                    town="Zaun"
                    description="Silco was a Zaunite drug lord and industrialist, 
                    and the adoptive father of Jinx. A tyrannical and brutal individual, 
                    he was a radical supporter of Zaun's independence from Piltover and was willing to do just about anything to achieve it. 
                    Silco is a callous and brutal yet highly intelligent and cautious man who will do anything to achieve his goals."
                />

                <Item
                    name="Singed"
                    image="Singed"
                    image2="Singed2"
                    type="El químico loco"
                    tags="Scientist-Alchemist"
                    town="Piltover"
                    description=" Singed is a Zaunite alchemist of unmatched intellect, 
                    who has devoted his life to pushing the boundaries of knowledge with no price, even his own sanity, too high to pay. 
                    Is there a method to his madness. His concoctions rarely fail, but it appears to many that Singed has lost all sense of humanity, 
                    leaving a toxic trail of misery and terror in his wake."
                />

                <Item
                    name="Deckard"
                    image="Deckard"
                    image2="Deckard2"
                    type="Gigante Descomunal"
                    tags="Knife-Shimmer"
                    town="Zaun"
                    description="Deckard was a Zaunite teenage street urchin working as a thug and informant for Silco. 
                    He was the first human to use shimmer and presumably died while under its influence. 
                    While he normally had a typical physique for a boy of his age, shimmer transformed him into a hulking behemoth, 
                    extremely tall and muscular. "
                />
            </div >
        </div>
    );

}




