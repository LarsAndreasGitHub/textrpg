import * as React from "react";

interface ArrowButtonProps {
    direction: "up" | "right" | "down" | "left";

}

const ArrowButton: React.StatelessComponent<ArrowButtonProps> = (props) => {
    return (
        <div className={props.direction}/>
    );
};

export default ArrowButton;
