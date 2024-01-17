#include <iostream>
#include <sstream>
#include <vector>

int main() {
    std::cout << "2 mor massive-iin utga oruulna uu."
              << "\nToo taslalaar tusgaarlan oruulna."
              << "(zai awahgvi bichne)\nexample:\nOrolt (mor 1): 2,3,4\nOrolt (mor 2): 8,4,3" << std::endl;

    std::cout << "Orolt (mor 1): ";
    std::string input1;
    std::getline(std::cin, input1);

    std::cout << "\nOrolt (mor 2): ";
    std::string input2;
    std::getline(std::cin, input2);

    std::istringstream stream1(input1);
    std::istringstream stream2(input2);

    std::vector<int> array1;
    std::vector<int> array2;
    int num;

    while (stream1 >> num) {
        array1.push_back(num);
        if (stream1.peek() == ',')
            stream1.ignore();
    }

    while (stream2 >> num) {
        array2.push_back(num);
        if (stream2.peek() == ',')
            stream2.ignore();
    }

    if (array1.size() != array2.size()) {
        std::cout << "\nmassive oroltiin toonuud tentsvv toonii elementtei baih!" << std::endl;
        return 0;
    }

    std::vector<int> result(array1.size());
    for (size_t i = 0; i < array1.size(); i++) {
        result[i] = array1[i] * array2[i];
    }

    std::cout << "\nMassive urjiber ni: ";
    for (size_t i = 0; i < result.size(); i++) {
        std::cout << result[i];
        if (i < result.size() - 1)
            std::cout << ",";
    }

    std::cout << std::endl;

    return 0;
} 