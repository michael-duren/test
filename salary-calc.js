console.log(`hello world`);
// local storage https://www.youtube.com/watch?v=AUOzvFzdIk4 

let salaryArray = [];

let totalSalary = 0;


function submitSalary(event) {
    event.preventDefault();
    let fName = document.querySelector('#fNameInput').value;
    let lName = document.querySelector('#lNameInput').value;
    let idNum = document.querySelector('#idNumInput').value;
    let title = document.querySelector('#titleInput').value;
    let annualSalary = Number(document.querySelector('#anualSalaryInput').value);// without Number() array will remain string. anyth stirng js will try, but w Number() it will convert it on best attempt// earlist you get a string ie in queryselector on 15 and pulling form DOM next step should be converting to a number vs on line 31
    // https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html
    // as soon as you input the number in your code, convert it to a number ASAP
    let salaryTable = document.querySelector('#salaryData');
    salaryTable.innerHTML += `
        <tr>
            <td>${fName}</td>
            <td>${lName}</td>
            <td>${idNum}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
            <td><button onclick="deleteRow(event)">Delete</button></td>
        </tr>
    `
    salaryArray.push(annualSalary);
    
    // for (let num of annualSalaryArrayString) {
        
    //     totalSalary = totalSalary + num;
    //     console.log(totalSalary);
    // }

    // annualSalaryArrayString.forEach(i => {
    //     totalSalary += i;
    // })
    // console.log(annualSalaryArrayString);

    for (let i = 0; i < salaryArray.length -1; i ++){
    totalSalary = totalSalary + salaryArray[salaryArray.length -1];
    console.log(totalSalary);
    }
    console.log(totalSalary);
}
;
   




function deleteRow(event) { // 
    let row = event.target.parentElement.parentElement;
    row.remove();
}

let test = 'hello';

const array = [1, 2, 3, 4, 5];
let sum = 0;
array.forEach(e => {
    sum += e;
})

console.log(sum);