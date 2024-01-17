#include <iostream>
using namespace std;

int main() 
{
    string msg = "Mongol uls Hyatad orosiin holboonii ulsuudtai hileldeg";
    int count = 0;
    
    for(int i = 0; i < msg.length(); i++){
      if(msg[i] == 'o'){
        count++;
      }
    }
    
    if(count > 0){
      cout << msg << " : ene text o useg " << count << " orson baina." << endl;
    } else {
      cout << msg << " : end o useg baihgvi bna." << endl;
    }
    
    return 0;
}