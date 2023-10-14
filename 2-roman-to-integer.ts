function romanToInt(s: string): number {

    let romArr = s.split('');
    let restNumber = 0;

    for(let i = 0; i < romArr.length; i++) {
        if(romArr[i] == 'I') {
            if (romArr[i+1] == 'V') {
                restNumber += 4;
            } else if (romArr[i+1] == 'X') {
                restNumber += 9;
            } else {
                restNumber += 1;
            }
        }

        if (romArr[i] == 'V') {
            if (romArr[i-1] != 'I') {
                restNumber += 5;
            }
        }

        if (romArr[i] == 'X') {
            if (romArr[i-1] != 'I') {
                if (romArr[i+1] == 'L') {
                    restNumber += 40;
                } else if (romArr[i+1] == 'C') {
                    restNumber += 90;
                } else {
                    restNumber += 10;
                }
            }
        }

        if (romArr[i] == 'L') {
            if (romArr[i - 1] != 'X') {
                restNumber += 50;
            }
        }

        if (romArr[i] == 'C') {
            if (romArr[i - 1] != 'X') {
                if (romArr[i + 1] == 'D') {
                    restNumber += 400;
                } else if (romArr[i + 1] == 'M') {
                    restNumber += 900;
                } else {
                    restNumber += 100;
                }
            }
        }

        if (romArr[i] == 'D') {
            if (romArr[i - 1] != 'C') {
                restNumber += 500;
            }
        }

        if (romArr[i] == 'M') {
            if (romArr[i - 1] != 'C') {
                restNumber += 1000;
            }
        }
    }
    return restNumber;
}