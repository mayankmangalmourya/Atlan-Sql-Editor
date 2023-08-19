import { Fragment } from "react";

function querySpace(params) {
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

export default querySpace;