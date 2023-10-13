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