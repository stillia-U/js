alert('리스트 해킹 프로그램입니다.');
const listname = prompt('리스트 이름은 무엇인가요?');
const mode = prompt(`어떤 해킹을 할 것인가요? 다음 종류 중에 고르세요. (리스트 삭제, 리스트 반복 삭제, 리스트 끝에 추가, 리스트 끝에 반복 추가, 리스트 앞에 추가, 리스트 앞에 반복 추가)`);
switch (mode){
    case '리스트 삭제':
        const Information1 = prompt("몇번째 항목을 삭제 하실 건가요?");
        document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(listname).deleteValue(Number(Information1));
        break;
    case '리스트 반복 삭제':
        const loop1 = prompt('몇번 반복 삭제 할 것인가요?');
        for(i=0;i<Number(loop1);i++){
            document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(listname).deleteValue(i);
        };
        break;
    case '리스트 끝에 추가':
        const Information2 = prompt("어떤 내용을 추가하실 건가요?");
        document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(listname).appendValue(Information2);
        break;
    case '리스트 끝에 반복 추가':
        let Information3 = prompt("어떤 내용을 추가하실 건가요?");
        const loop2 = prompt('몇번 반복 추가 할 것인가요?');
        for(i=0;i<Number(loop2);i++){
            document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(listname).appendValue(Information3);
        };
        break;
    case '리스트 앞에 추가':
        const Information4 = prompt("어떤 내용을 추가하실 건가요?");
        document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(listname).insertValue(1, Information4);
        break;
    case '리스트 앞에 반복 추가':
        let Information5 = prompt("어떤 내용을 추가하실 건가요?");
        const loop3 = prompt("몇번 반복 추가 하실 건가요?");
        for(i=0;i<Number(loop3);i++){
             document.getElementsByTagName('iframe')[0].contentWindow.Entry.variableContainer.getListByName(listname).insertValue(1, Information5);
        }
}