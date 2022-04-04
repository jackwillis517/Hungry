import React from 'react'
import '../stylesheets/CookbookPage.css'

const CookbookPage = () => {
    window.addEventListener("load", () => { // sets the values of the items
        var data = [ // ideally this will be replaced with a call to some database that contains their food things
        ["https://www.hurricaneshutterhardware.com/images/15904009228761704723300.png", "foodName", "foodInfo"], 
        ["https://www.hurricaneshutterhardware.com/images/15904009228761704723300.png", "foodName", "foodInfo"], 
        ["https://www.hurricaneshutterhardware.com/images/15904009228761704723300.png", "foodName", "foodInfo"]
        ];
        var filter = "none";
        let container = document.getElementById("grid");
        for (let i of data) { // loops through data, the cool thing is that unlike my last solution this can go forever

            let card = document.createElement("div"); // background stuff
            card.className = "card";

            let image = document.createElement("img"); // img stuff
            image.className = "foodImage";
            image.src = i[0];

            let name = document.createElement("div"); // nm stuff
            name.className = "foodName";
            name.append(i[1]);

            let description = document.createElement("div"); // dsc stuff
            description.className = "foodDesc";
            description.append(i[2]);


                //this is where i do the button stuff
                let delbt = document.createElement("div");

                //delete button stuff
                let delbutton = document.createElement("button"); 
                delbutton.className = "btnForm";
                delbutton.onclick = function (){
                window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // you can guess what this links to
            }
        delbt.appendChild(delbutton);
            /*
            for this, im thinking we do something along the lines of having a counter that incs by 1 every time we create a new card
            when the button is pressed, it gets the data[num] and sends a delete request for that item back to the database (?)
            then it forces a page refresh so it re-generates the page without the food item
            */

        let menbt = document.createElement("div");
        //add to menue button stuff
        let addmenButton = document.createElement("button");
        addmenButton.className = "btnForm";
        addmenButton.onclick = function (){
            window.location.replace("https://www.youtube.com/watch?v=A67ZkAd1wmI"); // you can guess what this links to
        }
        menbt.appendChild(addmenButton);
        
        // honestly this one is going to be tough, but maybe something like a dropdown that has a list of possible menues, and the same idea
        // where we get data[num] and send it to whatever menu item was clicked? i need to think about this one a little more though.
        
        
        //add items to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(delbt);
        card.appendChild(menbt);
        //display the card
        container.appendChild(card);
    }})
    return (
        <div id="grid"> </div>
    )
}

export default CookbookPage



