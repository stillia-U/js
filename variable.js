alert('변수 해킹 프로그램입니다.');
const variablename = prompt('변수 이름은 무엇인가요?');
const information = prompt("어떤 내용을 해킹 하실 건가요?")
document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getVariableByName(variablename).setValue(information)
