var str = 'qweasdabcdefwett';

function match(string) {
    var arr = [...string]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' &&
            arr[i + 1] == "b" &&
            arr[i + 2] == "c" &&
            arr[i + 3] == "d" &&
            arr[i + 4] == "e" &&
            arr[i + 5] == "f") {
            console.log(i)

            return i
        }
    }
}
match(str)