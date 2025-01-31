import PropTypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";
import '../styles/MapMarker.css';

const MapMarker = ({ color, size }) => {


    return (
        <div>
            <FaMapMarkerAlt color={color} size={size} className="map-marker"/>
        </div>
    )
}


MapMarker.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string
}

export default MapMarker