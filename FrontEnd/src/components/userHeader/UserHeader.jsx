import { useState } from "react"
import "./userHeader.scss"

function UserHeader({firstName, lastName }) {
    const [isOpen, setIsOpen] = useState(false)
    const [newUserName, setNewUserName] = useState()
    let text=""

    async function changeUserName(event, newUserName) {
        event.preventDefault();
        
        const token= localStorage.getItem("token");
        const newUserNameJson = JSON.stringify({userName: newUserName});

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: newUserNameJson
            })

            if(response){
                return text="Changement effectué"
            } else throw new Error("Erreur lors de la requête")
        }
        catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur :", error.message);
        }

    }

    function formEditName() {
        if (isOpen) {
            return (
                <div className="edit-form">
                    <h2 className="edit-title">Edit User Info</h2>
                    <form onSubmit={(event) => changeUserName(event, newUserName)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">User name</label>
                        <input 
                            className="edit-input"
                            type="text" 
                            id="username" 
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="firstname">First name</label>
                        <input 
                            className="edit-readOnly"
                            type="text" 
                            id="firstname" 
                            value={firstName}
                            readOnly={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last name</label>
                        <input 
                            className="edit-readOnly"
                            type="text" 
                            id="lastname" 
                            value={lastName}
                            readOnly={true}
                        />
                    </div>
                    <p>{text}</p>
                    <button 
                        className="edit-button" 
                        type="submit"
                        >
                            Save
                    </button>
                    <button 
                        className="edit-button" 
                        onClick={() => setIsOpen(!isOpen)} 
                        >
                            Cancel
                    </button>
                    </form>
                </div>
            )
        }
    }

    return (
        <div className="header">
            <h1>
                Welcome back <br /> {firstName} {lastName}!
            </h1>
            <button 
                className="edit-button" 
                onClick={() => setIsOpen(!isOpen)} 
                style={{display: isOpen ? `none` : ``}}>
                    Edit Name
            </button>
            {formEditName()}
        </div>
    )
}

export default UserHeader