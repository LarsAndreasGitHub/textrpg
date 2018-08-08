import * as React from "react";

interface ArrowButtonProps {
    direction: "up" | "right" | "down" | "left";

}

const ArrowButton: React.StatelessComponent<ArrowButtonProps> = (props) => {
    return (
        <button className={"arrowbutton " + props.direction}>
            <Arrow/>
        </button>
    );
};

const Arrow: React.StatelessComponent<{}> = () => {
    return (
        <div className="triangle-container">
            <svg className="triangle-svg">
                <polygon points="50,15 0,100 100,100" className="triangle"/>
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
    );
};

export default ArrowButton;
