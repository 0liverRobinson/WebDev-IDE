const lineNumber = document.getElementById("lineCount");
let toggle = false;
function syntaxHighlight(textArea)
{
    let lineCount = textArea.value, lines = [];
    lineCount = lineCount.split("\n");
    lines[0] = lineCount = lineCount.length;
    for ( ; --lineCount >= 1; lines.unshift(lineCount));
    lines = lines.join("\r<br>");
    lineNumber.innerHTML=lines;
    lineNumber.scrollTop = textArea.scrollTop;   
    enableTabSpaces(textArea, event);
}
function resetToggle() { toggle = false; }
function enableTabSpaces(textArea, event)
{
    if (event.keyCode != 9 || toggle)
        return;
    event.preventDefault();
    let start = textArea.selectionStart;
    let end = textArea.selectionEnd;
    textArea.value = textArea.value.substring(0, start) + "\t" + textArea.value.substring(end);
    textArea.selectionStart = textArea.selectionEnd = start+1;
    toggle = true;
}
function run(string)
{
    let documentContent = encodeURIComponent( string );
    let documentType = "data:text/html";
    let charSet = "utf-8"    
    document.getElementById("mainArea").src = documentType + ";charset=" + charSet + "," + documentContent;
}