
// // let i=0

// // do{
// //     document.write('hello guys');i++;

// // }while(i>100)
//     let i=2
//     do{
    
//         document.write(Number(i));i+=2;
//     }while(i<=10)
 let a=  Number (prompt("enter your num1"))
let b=  Number (prompt("Enter your num2"))
let o=prompt("enter your operation")

    switch(o){

        case"+": document.write(a+b)

        break;

        case"/": document.write(a/b)
        break;
        case"-": document.write(a-b)
            break;

        case"*": document.write(a*b) 
            break;
case"%": document.write(a%b) break;


default:
    document.write("you have an error")

    }
