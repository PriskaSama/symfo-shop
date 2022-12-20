import React from "react";
import { Navbar } from "../../components/navbar";

const DashBoard = () => {
    return (
        <>
        <Navbar/>
        <h1>Hello {window.user.alias}, Bienvenue sur votre profil : </h1>
        </>
    );
};

export default DashBoard;