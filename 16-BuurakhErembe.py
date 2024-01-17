import numpy as np

def printArray(arr):
  print("Array: ", end="")
  for i in arr:
    print(f"{i} ", end="")
  print()

def myDescSort(arr):
  for i in range(len(arr)-1):
    for j in range(i+1, len(arr)):
      if arr[j] > arr[i]:
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

originalMassive = np.array([3.2, 2.7, 7.0, 1.8, 3.45, 9.07])

print("Original massive: ", end="")
printArray(originalMassive)

myDescSort(originalMassive)

print("Erembelsenii daraa: ", end="")  
printArray(originalMassive)
