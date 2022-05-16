// document.getElementById("counter").innerText=5

let firstcount = document.getElementById("counter")
let count = 0
// function increament(){
//     count = count + 1
//     firstcount.innerText = count
// }
function increament(){
    count = count + 1;
    // while (count < 30){
    //     return(firstcount.innerText = count)
    // }

    if (count < 30){
        return (firstcount.innerText = count)
    }

    else firstcount.innerText = ("you have exceeded maximum cars");

}
