




// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIyZDAxMjdmNi0xNjlkLTQwYTAtYTg3Yi05OTE2NDM2MjRmY2EiLCJ1c24iOiJ1c2VyX2ZxU3ZESFpld0oiLCJleHAiOjE2NTc3MTUxNTF9.TFL-FCCMuedeR0H3YfDZpScOjsOByxKqa78qQYdPN68",
//     "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIyZDAxMjdmNi0xNjlkLTQwYTAtYTg3Yi05OTE2NDM2MjRmY2EiLCJ1c24iOiJ1c2VyX2ZxU3ZESFpld0oiLCJleHAiOjE2NTc3MTg3NTF9.tEiY3CpKTg4eBWU4WhDbyBKALk4t2H4wFmwOE0kXFyw"
//   }














///  {STRING METHODS  [18] }   * * * * * * * * * * *  replace()   * * * * * * * * * * * 


// Here we are going to replace the current text with the new text.

// In this we are using the function to get all text from previous 
// text parameters and replace them with the new text of function.




{/* <body style="text-align:center;" id="body">
    <h1 style="color:green;">  
            GeeksForGeeks  
        </h1>
    <p id="GFG_UP" style="font-size: 19px; font-weight: bold;">
    </p>
    <button onClick="GFG_Fun()">
        click here
    </button>
    <p id="GFG_DOWN" style="color: green; font-size: 24px; font-weight: bold;">
    </p>
    <script>
        var up = document.getElementById('GFG_UP');
        var down = document.getElementById('GFG_DOWN');
        var str = "I have a Lenovo Laptop, a Honor Phone, and a Samsung Tab.";
        var Obj = {
            Lenovo: "Dell",
            Honor: "OnePlus",
            Samsung: "Lenovo"
        };
        up.innerHTML = str;
  
        function GFG_Fun() {
            var RE = new RegExp(Object.keys(Obj).join("|"), "gi");
            down.innerHTML = str.replace(RE, function(matched) {
                return Obj[matched];
            });
        }
    </script>
</body> */}




// ************************ SORTING THE ARRAY ****************************// 

// USING FOREACH FUNCTIONS *******//
const array = ["apple", "orange", "leamon", "grapes", "mango", "pear", "orange", "apple", "orange", "leamon", "grapes"];

function person(array) {
    const result = [];
    array.forEach(item => {
        //       console.log("dghvjbf", result.includes(item))
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    )
    return console.log(result);
}

person(array);

// ["apple", "orange", "leamon", "grapes", "mango", "pear"]

// USING FILTER METHOD TO FILTER the ARRAY instead of sort method

var arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));


// USING REDUCE METHOD WE CAN SORT THE ARRAY //
var arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    var unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
}

console.log(removeDuplicates(arr));
    // USING REDUCE METHOD WE CAN SORT THE ARRAY //



















































