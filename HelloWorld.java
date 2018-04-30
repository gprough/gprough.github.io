/*
  author: Griffin

  Purpose: Test output and input.

*/

import java.util.Scanner; //used for user-input

public class HelloWorld{

  //entry point of program
  public static void main(String[] args){

    /*
      other datatypes:
      int - 3,100, -33,
      double - 2,3, 0.333,
      char - 'x', '1', '!'
      boolean - true/false
      String - "word", "cat", "OhYeah!"
     */

    //declare all variables
    String word = "Hello World";
    Scanner input = new Scanner(System.in);
    String name = "";
    Double GPA = 0.0;
    int age = 0;

    //output Hello World!
    System.out.println(word);

    //prompt the user
    System.out.println("What is your name?");

    //get user input
    name = input.next();

    //output what user typed in
    System.out.println("Hello " + name);


   /*
    To get other datatypes with scanner:
    .next() - to get a string
    .nextInt() - to get int
    .nextDouble() - to get double
   */

    System.out.println("Okay " + name + " now tell me your age.");

    age = input.nextInt();

    System.out.println(name + " now tell me your gpa.");

    GPA = input.nextDouble();

    System.out.println("So your name is " + name + " your age is " + age + " and your GPA is " + GPA + " now I can tell your Dad about your GPA.");

 }//end main

}//endclass
