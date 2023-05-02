import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";

const SwitcherTema = ({ tema }) => {
    const claro = <Icono src={themeOn} alt="Tema claro" />
    const oscuro = <Icono src={themeOff} alt="Tema oscuro" />

    return <>{ tema ? oscuro : claro }</>;
};

export default SwitcherTema;