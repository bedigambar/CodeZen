let htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
    mode: "xml",
    theme: "monokai",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true
});

let cssEditor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
    mode: "css",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true
});

let jsEditor = CodeMirror.fromTextArea(document.getElementById("jsCode"), {
    mode: "javascript",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true
});

function compiler() {
    var codes = document.getElementById("output").contentWindow.document;
    document.body.onkeyup = function () {
        codes.open();
        codes.writeln(
            htmlEditor.getValue() +
            "<style>" +
            cssEditor.getValue() +
            "</style>" +
            "<script>" +
            jsEditor.getValue() +
            "</script>"
        );
        codes.close();
    };
}

function copy(msg) {
    navigator.clipboard.writeText(msg).then(
        () => {
            console.log("Content copied to clipboard");
        },
        () => {
            console.error("Failed to copy content");
        }
    );
}

function copyContentofhtml() {
    let msg = htmlEditor.getValue();
    copy(msg);
}

function copyContentofcss() {
    let msg = cssEditor.getValue();
    copy(msg);
}

function copyContentofjs() {
    let msg = jsEditor.getValue();
    copy(msg);
}

compiler(); 