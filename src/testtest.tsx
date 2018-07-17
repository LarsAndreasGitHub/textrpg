import * as React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";

interface DispatchProps {
    dispatch: (tekst: string) => void;
}

class TestTest extends React.Component<DispatchProps> {
    public render() {
        const onClick = () => {
            this.props.dispatch("test!");
        };
        return (
            <button onClick={onClick}>
                hei
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        dispatch: (tekst: string) => dispatch({
            type: "ACTION-TYPE",
            tekst: tekst,
        })
    };
};

export default connect(null, mapDispatchToProps)(TestTest);
