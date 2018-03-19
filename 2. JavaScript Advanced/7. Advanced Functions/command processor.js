function processCommands(cmds) {
    let commandProcessor= (function () {
        let text="";
        return {
            append: (newText) => text+=newText,
            removeStart: (n) => text=text.slice(n),
            removeEnd: (n) => text=text.slice(0, text.length-n),
            print: () => console.log(text)
        }
    })();
    for (let str of cmds) {
        let [cmd,val]=str.split(" ");
        commandProcessor[cmd](val);
    }
}
processCommands(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);