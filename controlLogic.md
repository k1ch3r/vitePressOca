# Control Structures I: Logic and Conditions

Control structures are fundamental concepts in programming that allow us to control *how and when* certain blocks of code are executed. 

They introduce decision-making abilities into our programs, enabling them to behave differently based on varying conditions.

In a program, code is generally executed sequentially from top to bottom, following the First-In-First-Out (FIFO) principle. 
Control structures allow us to break away from this linear execution flow.

In this section, we will first focus on logic operators and conditional statements, which form the basis of decision-making in programming.

## Logic Operators

To make our code respond differently to various inputs, we need to define **when** specific operations should occur. While human language uses terms like "and", "or", "between", "while", etc. loosely, programming requires **precision**.
But the conditions we set to control our code must be interpreted **reliably and as expected** by the computer.

Because Computers are "fancy calculators" for the most part it makes sense that we use the same terms and concepts as mathematical logic.
Our most important concepts, their operators and their functions are these:

| Name | Operator | Description                                                                            |
|------|----------|----------------------------------------------------------------------------------------|
| AND  |    &&    | Only results in true if both operands (left and right) are true                        |
| OR   |   \|\|   | Results in true whenever any of the operands are true                                  |
| NOT  |     !    | Returns the opposite value of the operand following it                                 |
| XOR  |     ^    | Only returns true if excalty one of the two operands is true                           |

Here's an example for the functionalties using a decision table:

| Operand1 | Operand2 | &&      | \|\|    | ^       |
|----------|----------|---------|---------|---------|
| true     | true     | true    | true    | false   |
| true     | false    | false   | true    | true    |
| false    | true     | false   | true    | true    |
| false    | false    | false   | false   | false   |

## Conditions: If, else, else if

Using these tools we can start using simple conditions:

```java
boolean keepRunning = true;
int count = 0;

if(keepRunning && count < 11) {
    // any code here will be executed if keep running is true and count is lower than 11 
} else {
    // code here will be executed whenever the if block did not get executed.
}

```

So **if** checks it's condition to decide if the block of instructions following it should be executed or not and **else** negates the result of the if condition.

Knowing that we can define **else if** as (!if statement was true && other condition(s) we can set). Whenever the if block was not executed AND our additional condition returns true it will execute the block.

```java
if(false) {
    // will not execute because the condition is not met
} else if(false) {
    // will not execute either because even though if did not execute our additional condition is not met
}

```

Let's make a "else exclusive or" condition using what we learned before:

```java
if(a < 10) {
    // any code
}

if(a >= 10 ^ b){
    // this will excute if a is not smaller than 10 and b is false or if a is smaller than 10 and b is true only
}

```

Once we understand the tools we introduced so far we can achieve a very large range of functionalities.

But what if we need to do something multiple times? What if we need to to it multiple times depending on inputs?

If we don't want to chain a lot of similar or identical conditional statements we need a way to check conditions **continuosly**. We will look at different ways to do that next!
