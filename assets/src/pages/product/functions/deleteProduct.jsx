import Swal from "sweetalert2";
import axios from "axios";
import { URL_PRODUCT } from "../../../middleware/environment";
import PropTypes from "prop-types";


const DeleteProduct = (id) => {
  Swal.fire({
    title: "Etes vous sur ?",
    text: "Opération irréversible",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Annuler",
    confirmButtonText: "Supprimer !",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`${URL_PRODUCT}/${id}`).then(() => {
        Swal.fire({
          icon: "success",
          title: "Projet supprimé",
          showConfirmButtonn: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      });
    }
  })
  .catch((error) => {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Une erreur est survenue",
      showConfirmButton: false,
      timer: 1500,
    });
  });
};

// Proptypes permet de typer les variables

DeleteProduct.propTypes = {
  id: PropTypes.number,
};

export default DeleteProduct;