import { use } from 'react';
import { useState } from 'react';

export default function Player({initialName, symbol}) {
    const [playerName, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(editing => !editing);  
    }

    function handleChange(event) {
        // This function updates the player name when the input changes
        // It is called when the input field is edited
        // event.target.value contains the new value of the input field
        // setName is used to update the playerName state
        // This will trigger a re-render with the new player name
        setName(event.target.value);
    }


    let editablePlayerName =  <span className="player-name">{playerName}</span>;

    if (isEditing){
        //On change event handler is added to the input field
        // This allows the player name to be updated as the user types
        // The input field is required, meaning it cannot be empty
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (
        <li> 
            <span className="player"> 
              {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span> 
            {isEditing ? 
                <button onClick={handleEditClick}>Save</button> : 
                <button onClick={handleEditClick}>Edit</button>
            }
            {isEditing && <button onClick={() => setIsEditing(false)}>Cancel</button    >}  
        </li>
    ); 
}

