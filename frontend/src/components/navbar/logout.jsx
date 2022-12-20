import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import process from "process";


const Logout = () => {
    axios.get('${process.env.LOGOUT}')
    .then(()=>{
        Swal.fire({
            icon:"warning",
            title: "deco",
            text: "Vous voulez vraiment vous deco ?",
            showCancelButtonn: true,
            showConfirmButtonn: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    text: "vous etes deco",
                    timer: "1500",
                  })
                };
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            })
            .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

export default Logout;