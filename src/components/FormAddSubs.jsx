import { useState } from "react";
const FormAddSubs = ({
  setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
  editId,
  setEditId,
  spent,
  count,
}) => {
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);
  const handleSubs = (e) => {
    e.preventDefault("");
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    if (count - spent < Number(price)) {
      setErrorMoney(true);
      return;
    }
    setError(false);
    setErrorMoney(false);
    if (editId != "") {
      const newSubs = subs.map((item) => {
        if (item.id === editId) {
          item.type = type;
          item.price = price;
        }
        return item;
      });
      setSubs(newSubs);
      setEditId(""); // Asegúrate de restablecer editId después de la edición.
    } else {
      const data = {
        type: type,
        price: price,
        id: Date.now(),
      };
      setSubs([...subs, data]);
    }

    setType("");
    setPrice("");
  };

  return (
    <div className="add-subscription">
      <h3>Agregar suscripcion</h3>
      <form onSubmit={handleSubs}>
        <p>Servicio</p>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">Elegir:</option>
          <option value="Netflix">Netflix </option>
          <option value="DisneyPlus">Disney plus </option>
          <option value="HBOmax">HBO max </option>
          <option value="PrimeVideos">Prime videos</option>
          <option value="Spotify">Spotify</option>
          <option value="AppleTV">Apple TV</option>
        </select>
        <p>Cantidad</p>
        <input
          type="number"
          placeholder="$1500"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        {editId != "" ? (
          <input type="submit" value="Guardar" />
        ) : (
          <input type="submit" value="Agregar" />
        )}
      </form>
      {error ? <p className="error">Campos invalidos</p> : null}
      {errorMoney ? (
        <p className="error">No tienes suficiente presupuesto </p>
      ) : null}
    </div>
  );
};

export default FormAddSubs;
