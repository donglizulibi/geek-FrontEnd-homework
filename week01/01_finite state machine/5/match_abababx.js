function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

// 判断第一个ab里面的a
function start(c) {
    if (c === 'a') {
        return foundA;
    } else {
        return start;
    }
}
// 设定end状态
function end(c) {
    return end
}

// 判断第一个ab里面的b
function foundA(c) {
    if (c === 'b') {
        return start2;
    } else {
        return start(c);
    }
}

// 判断第二个ab里面的a
function start2(c) {
    if (c === 'a') {
        return foundA2
    } else {
        return start(c)
    }
}

// 判断第二个ab里面的b
function foundA2(c) {
    if (c === 'b') {
        return start3;
    } else {
        return start(c);
    }
}

// 判断第三个ab里面的a
function start3(c) {
    if (c === 'a') {
        return foundA3
    } else {
        return start(c)
    }
}

// 判断第三个ab里面的b
function foundA3(c) {
    if (c === 'b') {
        return foundB
    } else {
        return start(c)
    }
}

function foundB(c) {
    if (c === 'x') {
        return end;
    } else {
        return start3(c);
    }
}

const demo = 'ababababx'
    // ab ab abx
    // ab ab ab abx

console.log(match(demo))