#include "stdio.h"

void main(int argc, char** argv) {
    int input, current, remain;
    printf("Enter a positive integer: ");

    scanf("%d",&input);

    current = 2;
    remain = input;
    while(current <= remain) {
        if((remain % current)==0) {
            printf("%d ", current);
            remain = remain / current;
        } else {
            current++;
        }
    }
}

// 2147483627 
// 47 53 862097
// 0.01s user 0.00s system 0% cpu 11.844 total
