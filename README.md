# leet_code_challenge

#### 1.Two sum number find index
Example:1 
```
nums = [1,5,9]
target = 10

while i < 3 үед
> i = 0 үед
trP = 10 - 1 = 9
nmMap[9] ? : nmMap[1] = 0
> i = 1 үед
trP = 5
nmMap[5] ? : nmMap[5] = 1
> i = 2 үед
trP = 10 - 9 = 1
nmMap[1] ? return [nmMap[1], 2] 
```
`Массиваар гүйхдээ утга бүр дээр map {key,value} үүссэн эсэх шалгана,
array бүх цифрийг байршилтай нь хадгална. Хайж байгаа тооны 2 талыг байгаа эсэх шалгана`
```AB ==> [A,B,C]; AB - B; if map{A}? [map{A}, current index] : map{A=0,B=1,C=2};```

#### 2.Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

#### _.Palindrome number to check
Example: 1
```x = 120
result = x ==> result = 120
sum = 0

step 1: x 120 >= 1
modToo = 120 % 10 ==> 0
sum  = 0 + 0
x = 120 / 10 ==> 12

step 2: x 12 >= 1
modToo = 2
sum = (0 * 10) + 2 ==> 2
x = 12 / 10 ==> 1

step 3: x 1 >= 1
modToo = 1
sum = (2 * 10) + 1 ==> 21
x = 1 / 10 ==> 0

result:120 == sum:21 ==> false```