function getToday() {
    let td = new Date();
    let dd = td.getDate();
    let mm = td.getMonth() + 1;
    let yyyy = td.getFullYear();
    if(dd<10) {dd='0' + dd} if(mm<10) {mm='0'+mm}

    yyyy = yyyy.toString();
    mm = mm.toString();
    dd = dd.toString();

    let today = yyyy + ". " + mm + ". " + dd;
    return today;
}

window.onload = function main() {
    let content = document.getElementById("schedule");
    let button = document.getElementById("add-button");
   
    button.addEventListener('click', function addList() {

        if(!content.value)
        {
            alert("내용을 입력해 주세요.");
            content.focus(); //입력창에 포커스 활성화
            return false;
        }
        let tr = document.createElement("tr"); // 테이블 <tr> 생성
        let checkBox = document.createElement("button") // 테이블 <tr>안에 들어갈 체크박스 <input> 생성
        checkBox.style.width ='20px';
        checkBox.style.height ='20px';
        // tr박스 안에는
        // <td>체크박스</td>
        // <td>텍스트</td>
        // 이렇게 들어가야함

        // 체크박스 만들기
        checkBox.setAttribute("type", "checkbox"); // <input type="checkbox">
        checkBox.setAttribute("class", "checkBox"); // <input type="checkbox" class="checkBox">

        let td01 = document.createElement("td"); // 첫 번째 <td> 생성
        td01.innerText = getToday(); // 첫 번째 <td> 안에 날짜 저장

        let td02 = document.createElement("td"); // 두 번째 <td> 생성
        td02.innerHTML = content.value; // 두 번째 <td> 안에 입력 텍스트 저장

        let td03 = document.createElement("td"); // 세 번째 <td> 생성
        td03.appendChild (checkBox); // 세 번째 <td> 안에 <input> 추가

        tr.appendChild(td01);
        tr.appendChild(td02);
        tr.appendChild(td03);

        (document.getElementsByClassName("table__table"))[0].appendChild(tr); //tBody의 #list
        content.value = ""; // 입력창의 내용이 추가되었으므로 입력창 지우기
        content.focus(); //입력창 포커스(활성화)

        checkBox.addEventListener('click', () => {
            if(window.confirm("정말 삭제하시겠습니까?")) {
                tr.parentNode.removeChild(tr);
            }
        })

    })
    
    content.addEventListener("keypress", (event) => {
        if (event.key === 'Enter') {
            // event.preventDefault();
            if(!content.value)
        {
            alert("내용을 입력해 주세요.");
            content.focus(); //입력창에 포커스 활성화
            return false;
        }
        let tr = document.createElement("tr"); // 테이블 <tr> 생성
        let checkBox = document.createElement("button") // 테이블 <tr>안에 들어갈 체크박스 <input> 생성
        checkBox.style.width ='20px';
        checkBox.style.height ='20px';
        // tr박스 안에는
        // <td>체크박스</td>
        // <td>텍스트</td>
        // 이렇게 들어가야함

        // 체크박스 만들기
        checkBox.setAttribute("type", "checkbox"); // <input type="checkbox">
        checkBox.setAttribute("class", "checkBox"); // <input type="checkbox" class="checkBox">

        let td01 = document.createElement("td"); // 첫 번째 <td> 생성
        td01.innerText = getToday(); // 첫 번째 <td> 안에 날짜 저장

        let td02 = document.createElement("td"); // 두 번째 <td> 생성
        td02.innerHTML = content.value; // 두 번째 <td> 안에 입력 텍스트 저장

        let td03 = document.createElement("td"); // 세 번째 <td> 생성
        td03.appendChild (checkBox); // 세 번째 <td> 안에 <input> 추가

        tr.appendChild(td01);
        tr.appendChild(td02);
        tr.appendChild(td03);

        (document.getElementsByClassName("table__table"))[0].appendChild(tr); //tBody의 #list
        content.value = ""; // 입력창의 내용이 추가되었으므로 입력창 지우기
        content.focus(); //입력창 포커스(활성화)

        checkBox.addEventListener('click', () => {
            if(window.confirm("정말 삭제하시겠습니까?")) {
                tr.parentNode.removeChild(tr);
            }
        })
    }
        
    });
};



