 let a=  prompt("enter your num1")
let b= prompt("Enter your num2")
let o=prompt("enter your operation")

    switch(o)
    {

        case "+": document.write(a+b)

        break;

        case "/": 
            document.write(a/b)
        break;
        case "-":
            document.write(a-b)
            break;

        case"*":
            document.write(a*b) 
            break;
        case "%": 
            document.write(a%b)
    break;


default:
    document.write("you have an error")
            break;

    }

