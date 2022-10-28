const incomeBtn = document.querySelector("#incomeBtn") as HTMLButtonElement;
const expenseBtn = document.querySelector("#expenseBtn") as HTMLButtonElement;
const assetBtn = document.querySelector("#assetBtn") as HTMLButtonElement;


incomeBtn.onclick = () => {
    moveLocation("/incomeScreen.html");
}

expenseBtn.onclick = () => {
    moveLocation("/expenseScreen.html");
}

assetBtn.onclick = () => {
    moveLocation("/assetScreen.html");
}

function moveLocation(screen: string){
    location.href = screen;
}