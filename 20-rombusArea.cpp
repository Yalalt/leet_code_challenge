#include <iostream>
#include <cmath>

class Rhombus {
private:
    double sideLength;
    double angleRadians;

public:
    // Constructor
    Rhombus(double side, double angle) : sideLength(side), angleRadians(angle) {}

    double calculateArea() const {
        return sideLength * sideLength * sin(angleRadians);
    }
};

int main() {
    double sideLength = 5.0;
    double angleDegrees = 45.0;

    // angle radian shiljuulj bn
    double angleRadians = angleDegrees * M_PI / 180.0;

    // object vvsgej bn
    Rhombus myRhombus(sideLength, angleRadians);

    // class method duudaj bn
    double area = myRhombus.calculateArea();

    std::cout << "Rombiin neg taliin urt " << sideLength << " bolon ontsog " << angleDegrees << " gradius:\n";
    std::cout << "Rombiin talbai ni: " << area << " mk." << std::endl;

    return 0;
}