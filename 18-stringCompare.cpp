#include <iostream>
#include <string>
using namespace std;

int main() 
{
    string input1;
    cout << "Temdegt mor oruulna uu 1: ";
    getline(cin, input1);
    
    string input2;
    cout << "\nTemdegt mor oruulna uu 2: " << endl;
    getline(cin, input2);
    
    bool isEqual = true;
    
    if(input1.length() == input2.length()){
      for(int i = 0; i < input1.length(); i++){
        if(input1[i] != input2[i]){
          isEqual = false;
          break;
        }
      }
    } else {
      isEqual = false;
    }
    
    
    if(isEqual){
      cout << "Temdegt moruud ijil baina." << endl;
    } else {
      cout << "Temdegt moruud oor baina!" << endl;
    }
    
    
    return 0;
}