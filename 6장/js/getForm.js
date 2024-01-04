const selectMenu = document.querySelector("#major");

function displaySelect(){
    let selectText = selectMenu.option[selectMenu.selectedIndex].innerText;
    alert(`[${selectText}]를 선택했습니다.`);
}

selectMenu.onchange = displaySelect;