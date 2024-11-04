import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "150px auto",
    borderColor: "blue",
};

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return (
        <div>
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Spinner