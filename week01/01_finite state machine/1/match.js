// console.log(1)
let strTest = "qasdfgghj"

function match(str) {
    // console.log(str.indexOf("a"))
    if (str.indexOf("a") > 0) {
        console.log(1)
        return true
    } else {
        console.log(2)
        return false
    }
}
match(strTest)