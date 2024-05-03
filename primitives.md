# Primitive Data Types in Java

The official Java SE Specifications describe Types [here](https://docs.oracle.com/javase/specs/jls/se7/html/jls-4.html);

## boolean

Our standard logical type. Can only be true or false. Is **not** meant to be casted from or into in java!

```java
boolean isSet = false;
isSet = !isSet;
```

## int, short, long & byte

Our integer number types. They are all two's complement and only differ in size.

:::details
| Type          | Size          | min Value | max Value   |
| ------------- | ------------- | --------- | ----------- |
| byte          | 8-bit         | -128      | 127         |
| short         | 16-bit        | -32768    | 32,767      |
| int           | 32-bit        | -2^31     | (2^31)-1    |
| long          | 64-bit        | -2^63     | (2^63)-1    |
:::

## float & double

These are our floating point number types. They represent 32 and 64-bit IEEE 754 values respectively. We basically use double unless we really want to save memory for some reason.

## char

Represents a single 16-bit Unicode character. Minimum value '\u0000' (or 0) and maximum value '\uffff' (or 65,535 inclusive). This is a bit different than the char type in other languages like C or C++.

## casting primitives

We can (and will need to) cast our primitives using the following syntax:

```java

// Widening aka upcasting. Will be done implicitly if we dont specify:
int x = 12;
double xAccurate = (double) x;

// Narrowing aka downcasting. Needs to be done explicitly because it can lead to information loss.
double muchInfo = 9.12342345;
int lessInfo = (int) muchInfo;

```

::: details

```java
// We can obviously cast results of longer evalutions like this as well:
int algoResult = (int) someMethodReturningAFloat(((33 * x)%4))

// We could also cast a char into an int like this, can be used when you wanna iterate over the alphabet or something:
char myChar = 'A';
int convertedChar = (int) myChar; // convertedChar will be 65 here because thats the value of A

```

Bonus fact: Technically *null* is also it's own type. You cannot set a variable type to null or cast it into one though. The only thing you can do with null type values is widen them.
:::
