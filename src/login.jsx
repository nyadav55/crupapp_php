import React, { useState } from 'react';
import "./style.css";


function Userlogin() {
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");
    const [msg, setmsg] = useState("");

    const handleInputchange = (e, type) => {
        switch(type) {
            case "user": seterror(""); setuser(e.target.value);
            if(e.target.value === "") {
                seterror("Please fill Username!");
            }
            break;
            case "password": seterror(""); setpassword(e.target.value);
            if(e.target.value === "") {
                seterror("Please fill Password!");
            }
            break;
            default:
        }
    }

    function loginSubmit() {
        if(user !== "" && password !== "") {
            var url = "login.php";
            var headers = {
                "accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                user: user,
                password: password
            };
            fetch(url, {
                method: "Post",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((Response) => Response.JSON())
            .then((Response) => {
                setmsg(Response[0].result);
            }).catch((error) => {
                seterror(error);
                console.log(error);
            })
        } else {
            seterror("Please fill all fields")
        }
    }
    return (
<div className="form">
    <label>Username</label>
    <input type="text" value={user} onChange={(e) => handleInputchange(e, "user")}/>
    <label>Password</label>
    <input type="password" value={password} onChange={(e) => handleInputchange(e, "password")}/>
    <label></label>
    <input type="submit" defaultValue="login" className="button"/>
</div>
    );

}
export default Userlogin;