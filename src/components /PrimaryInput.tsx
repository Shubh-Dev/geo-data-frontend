import React from "react";
const PrimaryInput = ({text: string}) => {
    return (
    <div>
        <input type="text" value={text} />
    </div>
    )
}

export default PrimaryInput;