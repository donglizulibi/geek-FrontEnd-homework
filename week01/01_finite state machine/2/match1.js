var str = 'asdgabsdf'

function match(string) {
    var arr = [...string]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' && arr[i + 1] == "b") {
            console.log(i)
            return i
        }
    }
}

match(str)