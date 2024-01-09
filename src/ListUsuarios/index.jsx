import React from "react";
import { UsuarioItem } from "../UsuarioItem";
import "./ListUsuario.css";

export function ListUsuarios() {
  return (
    <div className="userListContainer">
      <div className="welcomeMessage">
        <h1 className="text1">Welcome to the</h1>
        <h1 className="text2">Frontend Quiz!</h1>
        <p className="p">pick a subject to get started</p>
      </div>

      <ul className="userList">
        <UsuarioItem
          img={"./src/assets/codigo.png"}
          title={"HTML"}
          alt={"html"}
        />
        <UsuarioItem 
        img={"./src/assets/css.png"} 
        title={"CSS"} 
        alt={"css"} 
        />

        <UsuarioItem
          img={"./src/assets/js.png"}
          title={"Javascript"}
          alt={"javascript"}
        />

        <UsuarioItem
          img={"./src/assets/accesibilidad.png"}
          title={"Accessibility"}
          alt={"accessibility"}
        />
      </ul>
    </div>
  );
}
