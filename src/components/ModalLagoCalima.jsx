import { useRef } from "react";
import PropTypes from "prop-types";
import "../styles/Modal.css";
import LagoCalima from "../assets/LagoCalima.png"
import logoModal from "../assets/logo-modal.png"
import { FiInfo } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const ModalLagoCalima = ({ setIsModalActive, data }) => {
    const modalRef = useRef(null); // Referencia al modal para manipularlo directamente

    const styleFondo={
        backgroundImage: `url(${LagoCalima})`
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalActive(false);
    };

    // Función para permitir el arrastre del modal
    const handleMouseDown = (e) => {
        const modal = modalRef.current;
        const offsetX = e.clientX - modal.getBoundingClientRect().left; // Distancia desde la izquierda
        const offsetY = e.clientY - modal.getBoundingClientRect().top; // Distancia desde la parte superior


        console.log(e.clientX)
        console.log(e.clientY)

        console.log(offsetX)
        console.log(offsetY)


        // Función para mover el modal mientras se arrastra
        const handleMouseMove = (e) => {
            modal.style.left = `${e.clientX}px`;
            modal.style.top = `${e.clientY}px`;
        };

        // Eliminar los eventos cuando se suelta el ratón
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        // Añadir event listeners para mover el modal
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const { name, description, imageUrl } = data;

    return (
        <div
            className="modal"
            ref={modalRef}
            style={styleFondo}
            onMouseDown={handleMouseDown}
        >
            {/* Si deseas mantener la cabecera, puedes descomentar esta sección */}
            {/* <div className="modal-header">
                <FiInfo className="info-icon" />
                <GrClose
                    className="button-close"
                    color="#0F6E50"
                    onClick={closeModal}
                />
            </div> */}

            <div className="header-modal">
                <div className="logo__modal">
                    <img src={logoModal} alt="" />
                </div>
            </div>


            <div className="modal-content" 
                        style={{ backgroundImage: `url(${LagoCalima})` }} // Establecer imagen de fondo
                        >

                <h1>Lago Calima</h1>
                <div className="linea"></div>
                <span>Abastece las dos cuencas mas importantes del país (Cuenca alta del <br />
                    Río Magdalena y Cuenca alta del Río Cauca) catalogándola como una <br />
                    estrella hídrica del macizo colombiano, que aporta bienes y servicios <br />
                    ambientales representados en ecosistemas de Páramo, subparamo, <br />
                    bosque Andino y altoandino, favoreciendo asi la viabilidad de <br />
                    especies de flora y fauna.</span>

            </div>
            
        </div>
    );
};

export default ModalLagoCalima;
