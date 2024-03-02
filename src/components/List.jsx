import React from "react";
import Game from './Game';

const List = () => {
    return (
        <div className="List">
                        <Game name='Stardew Valley' img="./src/assets/stardew.jpg" desc="Farming Game" link="https://store.steampowered.com/app/413150/Stardew_Valley/"/>
                        <Game name='Lemon Cake' img="./src/assets/lemoncake.webp" desc="Cooking Game" link="https://store.steampowered.com/app/1338330/Lemon_Cake/"/>

                        <Game name='Papas Cupcakeria' img="./src/assets/papas.jpg" desc="Papas resturant game" link="https://www.coolmathgames.com/0-papas-cupcakeria"/>
                        <Game name='Sims 4' img="./src/assets/sims4.png" desc="Simulation game" link="https://www.ea.com/games/the-sims/the-sims-4"/>

                        <Game name='Animal Crossing' img="./src/assets/animalcrossing.jpg" desc="Cozy island game" link="https://animalcrossing.nintendo.com/"/>
                        <Game name='Poptropica' img="./src/assets/poptropica.jpg" desc="Multiplayer exploration game" link="https://www.coolmathgames.com/0-poptropica"/>
                        <Game name='Minecraft' img="./src/assets/minecraft.png" desc="Multiplayer simulation game" link="https://www.minecraft.net/en-us"/>

                        <Game name='Sudoku' img="./src/assets/sudoku.jpg" desc="Logic puzzle game" link="https://sudoku.com/"/>
                        <Game name='Garden Story' img="./src/assets/garden.jpg" desc="cozy adventure game" link="https://store.steampowered.com/app/1062140/Garden_Story/"/>
                        <Game name='Kind Words' img="./src/assets/kind.jpg" desc="Chill letter writing game" link="https://store.steampowered.com/app/1070710/Kind_Words_lo_fi_chill_beats_to_write_to/"/>
                        

        </div>

    )
}

export default List;