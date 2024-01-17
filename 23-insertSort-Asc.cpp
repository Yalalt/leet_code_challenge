// This algorithm using insertion sort numbers

#include <iostream>
using namespace std;

int main() {
    int nums;
    cin >> nums;

    int arr[nums];
    for(int i = 0; i < nums; i++) {
        cin >> arr[i];
    }

    for (int i = 1; i < nums; i++)
    {
        // i index number to save odoo
        // odoo baigaa toog omnohtei ni compare, zvvn gar taldah toonuudiig erembeleed
        // daraagiin i index ruu compare urgeljluulne
        int odoo = i;
        while (arr[odoo - 1] > arr[odoo])
        {
            // swap
            int temp = arr[odoo - 1];
            arr[odoo - 1] = arr[odoo];
            arr[odoo] = temp;
            odoo--;
        
            if(odoo == 0) {
                break;
            }
        }
    }

    for (int j = 0; j < nums; j++)
    {
        cout << arr[j] << " ";
    }
    cout << endl;
}