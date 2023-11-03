import { moneyFormat } from "../helpers";
import Swal from "sweetalert2";
const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `¿Borrar Suscripción a ${type}?`,
      text: "No lo podras revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar.",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "¡Eliminado!",
          "Eliminaste la suscripción con exito",
          "success"
        );
        eliminarItem(id);
      }
    });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    editItem(id);
  };

  const urlImage = `/src/img/${type}.png`;
  return (
    <div className="single-item">
      <img src={urlImage} alt="servicios" />
      <h3>Precio:{moneyFormat(Number(price))}</h3>
      <a href="" className="delete" onClick={handleDelete}>
        Borrar
      </a>
      <a href="" className="edit" onClick={handleEdit}>
        Editar
      </a>
    </div>
  );
};

export default SingleItem;
