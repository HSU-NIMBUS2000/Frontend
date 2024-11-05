import React from "react";
import './ToggleSwitch.css'

function ToggleSwitch({changeAvatar}) {

    return (
        <div class="btn-group">
            <button onClick={()=>changeAvatar(0)} class="btn left" type="button">의사</button>
            <button onClick={()=>changeAvatar(1)} class="btn middle" type="button">토끼</button>
            <button onClick={()=>changeAvatar(2)} class="btn right" type="button">고양이</button>
        </div>
    )
}

export default ToggleSwitch;