import PropTypes from "prop-types";
import { MdHelp } from "react-icons/md";
import driver from "../utils/driver";
import MapMarker from "./MapMarker";
import Modal from "./Modal";
import { useState } from "react";
import location from "../data/data";
import { Link } from "react-router-dom";

const Content = ({ toggleSidebar }) => {
  const [purace, rioCauca, hermosas, OceanoPacifico] = location;

  // Estados para manejar visibilidad del modal y datos dinámicos
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalData, setModalData] = useState({}); // Datos dinámicos para el modal

  console.log(location);

  const handleHelpButton = () => {
    toggleSidebar(); // Llamar para alternar el estado del Sidebar
    driver.drive();
  };

  const showModal = (data) => {
    setModalData(data);
    setIsModalActive(true);
  };

  return (
    <div className="content">
      {/* Botones con información específica */}
      <button
        id="purace"
        className="marker-button"
        onClick={() => showModal(purace)}
      >
        <MapMarker size="4rem" color="#670010" />
      </button>

      <button
        id="rio-cauca"
        className="marker-button"
        onClick={() => showModal(rioCauca)}
      >
        <MapMarker size="4rem" color="#670010" />
      </button>

      <button
        id="pacifico"
        className="marker-button"
        onClick={() => showModal(OceanoPacifico)}
      >
        <MapMarker size="4rem" color="#670010" />
      </button>

      <button
        id="hermosa"
        className="marker-button"
        onClick={() => showModal(hermosas)}
      >
        <MapMarker size="4rem" color="#670010" />
      </button>

      {/* Render del modal dinámico */}
      {isModalActive && (
        <Modal id="modal" setIsModalActive={setIsModalActive} data={modalData} />
      )}

      <div className="content-info">
        <section className="content-titles">
          <h1 className="titulo">Atlas</h1>
          <h3>Un rio Cauca, muchos mundos</h3>
        </section>
        <p>Abrochen sus cinturones que vamos a transicionar</p>

        <section className="content-buttons">
         
          <Link to='/capitulo-1' className="link">
            <button id="atlas-button-explorar" className="atlas-button-explorar">Explorar</button>
          </Link>

          {/* <a href="/components/camitulo1Html/capitulo.html">Explorar</a> */}

          <MdHelp color="#32CD32" size="4rem" onClick={handleHelpButton} />
        </section>
      </div>
    </div>
  );
};

Content.propTypes = {
  toggleSidebar: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Content;
