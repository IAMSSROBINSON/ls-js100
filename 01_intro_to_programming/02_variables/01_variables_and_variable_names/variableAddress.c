#include <stdio.h>

int main (int argc, char *argv[]) {

  int answer = 41;
  printf("\n%p", &answer);
  printf("\n%d\n", answer);

  answer = 42;
  printf("\n%p", &answer);
  printf("\n%d\n", answer);

  return 0;
}