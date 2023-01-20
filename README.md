# age-counting



## Description

In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. Your goal is to count how many items exist that have an age equal to 32. Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.

Example Input
{"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

File Contents (output.txt)
IAfpK
9snd2

Example Output
7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
Example Output with ChallengeToken
7cXa7Xc7X80Xa5Xe5X93X2bXc2Xe5X8aXe0Xb4X6kXmyX86X52Xf
Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every third character with an X.

Your ChallengeToken: k0myq86352af


