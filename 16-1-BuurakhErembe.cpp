#include <iostream>
// MTZ University - Bie daalt - 2 bodlogo 2; Selection Sort used

void printArray(const double arr[], int size) {
    std::cout << "Array: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

void myDescSort(double arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = i + 1; j < size; j++) {
            if (arr[j] > arr[i]) {
                double temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

int main() {
    double originalMassive[] = {3.2, 2.7, 7.2, 1.8, 3.45, 9.7, 4.1, 5.6, 8.9, 1.2};
    int size = sizeof(originalMassive) / sizeof(originalMassive[0]);

    std::cout << "Original massive: ";
    printArray(originalMassive, size);

    myDescSort(originalMassive, size);

    std::cout << "Erembelsenii daraa: ";
    printArray(originalMassive, size);

    return 0;
}