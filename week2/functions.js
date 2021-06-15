// function addition (a, b) {
// alert (a +b)
// }
// addition (4,6)
// addition (5,4)
// addition (3,7)

// function addition (a, b) {
//     return (a +b)
//     }
//     let result= addition (4,6)
//     addition (5,4)
//     addition (3,7)
//      alert (result);
     
    //  function foo (i) {
    //      if (i < 0) 
    //         return;
    //         alert (`begin:` +i);
    //         foo (i -1);
    //         alert (`end` +i) 
    //  }
    //  foo(3)

    let password = 12345
    function checkPassword (input, password) {
        if (input === password)  {
            return "successful";
        }
            else {
                return "incorrect password"
            }
        }
    let response= checkPassword(1234, password)
    alert (response)