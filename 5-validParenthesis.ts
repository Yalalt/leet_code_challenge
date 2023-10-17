function isValid(s: string): boolean {
    let pistack = [];

    // parenthesis have to even
    if (s.length % 2 !=  0) {
        return false;
    }

    // open parenthesis add to LIFO stack
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            pistack.push(s[i]);
        } else {
            // closed parenthesis to check if
            // stack last index
            let lastIndex = pistack.length - 1;

            if (s[i] == ')') {
                if (pistack[lastIndex] == '(') {
                    console.log("stack (1)");
                    pistack.pop();
                } else {
                    return false;
                }
            }

            if (s[i] == '}') {
                if (pistack[lastIndex] === '{') {
                    console.log('stack {2}');
                    pistack.pop();
                } else {
                    return false;
                }
            }

            if (s[i] == ']') {
                if (pistack[lastIndex] === '[') {
                    console.log("stack [3]");
                    pistack.pop();
                } else {
                    return false;
                }
            }
            console.log(pistack.length);
        }
    }
    // closed parenthesis by couple and have to stack is empty
    return pistack.length === 0;
};

let test5 = isValid("()[{}]");
console.log(test5);