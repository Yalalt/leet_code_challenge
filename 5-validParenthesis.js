function isValid(s) {
    var pistack = [];
    // parenthesis have to even
    if (s.length % 2 != 0) {
        return false;
    }
    // open parenthesis add to LIFO stack
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            pistack.push(s[i]);
        }
        else {
            // closed parenthesis to check if
            // stack last index
            var lastIndex = pistack.length - 1;
            if (s[i] == ')') {
                if (pistack[lastIndex] == '(') {
                    pistack.pop();
                    console.log(pistack);
                    console.log("stack (1)");
                }
                else {
                    return false;
                }
            }
            if (s[i] == '}') {
                console.log('stack33 }');
                if (pistack[lastIndex] === '{') {
                    console.log(pistack);
                    console.log('stack {2}');
                    pistack.pop();
                }
                else {
                    return false;
                }
            }
            if (s[i] == ']') {
                if (pistack[lastIndex] === '[') {
                    console.log(pistack);
                    console.log("stack [3]");
                    pistack.pop();
                }
                else {
                    return false;
                }
            }
            console.log(pistack.length);
        }
    }
    // closed parenthesis by couple and have to stack is empty
    return pistack.length === 0;
}
;
var test5 = isValid("()[{}]");
console.log(test5);
