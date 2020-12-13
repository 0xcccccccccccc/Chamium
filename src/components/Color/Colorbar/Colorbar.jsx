import React from "react";
import colorbar_html from "./index-standalone.html"
import css from "./Colorbar.css"
export default class TodoList extends React.Component {

    render() {
        return (
            <div >
                <iframe className={css.FrameWindow} src={colorbar_html}/>
            </div>
        );
    }
}