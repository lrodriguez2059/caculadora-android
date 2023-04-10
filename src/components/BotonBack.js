import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/BotonBack.css'

function BotonBack (props) {
    return (
        <div className="boton-back" 
        onClick={() => props.manejarClick()}> <FontAwesomeIcon icon={faDeleteLeft}/></div>
    )

}

export default BotonBack;