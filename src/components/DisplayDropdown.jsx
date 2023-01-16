import {Dropdown} from "./Dropdown"

import {socials, people} from "../mockData"

export const DisplayDropdown = () => {

    return <div>
        {/* Socials */}
        <Dropdown />
        options={socials}
        label="Socials"
        onChange={e => setSocialSelected(e.target.value)}
        />
        <p> selected Social : {socialSelected} </p>

        
        {/* People */}
        <Dropdown />
        <p>
        person : {personSelected}
        </p>
    </div>
}