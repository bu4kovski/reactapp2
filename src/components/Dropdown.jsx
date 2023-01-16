import { getMouseEventOptions } from "@testing-library/user-event/dist/utils"



export const Dropdown = ({label, options}) => {

    return <div>
        <label>{label}</label>
        <select
        //  onChange={onChange}>
        >
            {options.map(optionElement => <option key={optionElement.value}>
                {optionElement.name}
                </option>)}
        </select>
    </div>
}