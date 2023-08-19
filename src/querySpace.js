import { Fragment } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/rubyblue.css";
import { getPropTypes } from "./data/utils";

function QuerySpace(params) {
    return(

        <Fragment>
            <CodeMirror
                value = {params.defaultQuery}
                options = {{
                    mode : "sql",
                    theme : "rubyblue",
                    lineNumbers : true,
                }}
            />
        </Fragment>

    );
}

QuerySpace.propTypes = getPropTypes("defaultQuery");

export default QuerySpace;