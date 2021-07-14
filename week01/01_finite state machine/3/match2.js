var match = function(string) {
    let foundA = false,
        foundB = false,
        foundC = false,
        foundD = false,
        foundE = false
    for (let c of string) {
        if (c == 'a') {
            foundA = true
        } else if (c == 'b' && foundA) {
            foundB = true
        } else if (c == 'c' && foundB) {
            foundC = true
        } else if (c == 'd' && foundC) {
            foundD = true
        } else if (c == 'e' && foundD) {
            foundE = true
        } else if (c == 'f' && foundE) {
            return true
        } else {
            foundA = false
            foundB = false
            foundC = false
            foundD = false
            foundE = false
        }
    }
    return false
}
console.log(match('abdcdef'))