#include <iostream>

class Month {
public:
    Month(int month) : month(month) {}

    void printDaysAndWeeks() const {
        if (isValidMonth()) {
            printDays();
            printWeeks();
        } else {
            std::cout << "Buruu sariin too oruulsan baina." << std::endl;
        }
    }

private:
    int month;

    bool isValidMonth() const {
        return (month >= 1 && month <= 12);
    }

    void printDays() const {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                std::cout << "Ene sar ni: 31 odortei" << std::endl;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                std::cout << "Ene sar ni: 30 odortei" << std::endl;
                break;
            case 2:
                std::cout << "Ene sar ni: 28 eswel 29 odortei (ondor jil)" << std::endl;
                break;
        }
    }

    void printWeeks() const {
        int weeks = (month == 2) ? 4 : 4 + (month % 2);
        std::cout << "Doloo honogiin too: " << weeks << std::endl;
    }
};

int main() {
    int month;

    // garaas sariin toog awna
    std::cout << "Sariin toog oruul (1-12): ";
    std::cin >> month;
    std::cout << std::endl;

    Month userMonth(month);
    userMonth.printDaysAndWeeks();

    return 0;
}