import React from "react";
import './ToggleSwitch.css'

function ToggleSwitch() {
    return (
        <div>
            <label for="filter" class="switch" aria-label="Toggle Filter">
                <input type="checkbox" id="filter" />
                <span>Latest</span>
                <span>Popular</span>
            </label>
        </div>
    )
}

export default ToggleSwitch;