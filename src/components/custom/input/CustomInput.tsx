import { AutocompleteRenderInputParams } from "@mui/material";
import "./inputStyles.css";

interface Props {
    params?: AutocompleteRenderInputParams;
    placeholder?: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

export const CustomInput = ({ params, placeholder, onClick }: Props) => {
    return (
        <div className="input__container" ref={params?.InputProps.ref}>
            <input
                type="text"
                {...params?.inputProps}
                placeholder={`${placeholder ? placeholder : ""}`}
            />
            <span className="material-icons " onClick={onClick}>
                search
            </span>
        </div>
    );
};
