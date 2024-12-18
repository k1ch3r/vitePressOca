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
| Type          | Size          | min Value | max Value   | max Value (Scientific Notation) |
| ------------- | ------------- | --------- | ----------- | ------------------------------- |
| byte          | 8-bit         | -128      | 127         | 1.27E2                          |
| short         | 16-bit        | -32768    | 32,767      | 3.2767E4                        |
| int           | 32-bit        | -2^31     | (2^31)-1    | 2.147483647E9                   |
| long          | 64-bit        | -2^63     | (2^63)-1    | 9.223372036854776E18            |

We look at the floating type ranges [here](/primitives#float-double).

:::

:::tip
If in doubt just use int. Only use different types when you have a reason.
:::

Integer types can use non decimal number formats as well.

```java
int decimal = 10_0; // we can use underscores in our source in between any digits of number values. they do nothing.
int hexadecimal = 0x64; // equivalent to 100 in decimal.
int binary = 0b1100100; // equivalent to 100 in decimal
int octal = 0144; // equivalent to 100 in decimal
long longLiteral = 123L; // a long literal. works with capital L or lower case l.
```

**There are no special characters for short, byte or int literals.**

:::warning
The values will all be treated as decimal integer values here. They are all 100. If we want to print them in other number fromats we have to use methods to do it.

**NOTE the 0144 example above!**
Any leading 0 makes java interpret an int as octal value. This can lead to misunderstandings/mistakes!
:::

```java
int value = 100;

System.out.println(Integer.toBinaryString(value)); // prints "1100100"
System.out.println(Integer.toOctalString(value)); // prints "144"
System.out.println(Integer.toHexString(value)); // prints "64"
```

## float & double

These are our floating point number types. They represent 32 and 64-bit IEEE 754 values respectively. We basically use double unless we really want to save memory for some reason.

:::details
| Type          | Size          | min Value | max Value   | max Value (Scientific Notation)   |
| ------------- | ------------- | --------- | ----------- | ----------------------------------|
| float         | 32-bit        | 1.4E-45   | 3.4028235E38| 3.4028235E38                      |
| double        | 64-bit        | 4.9E-324  | 1.7976931348623157E308 | 1.7976931348623157E308 |

We looked at the integer type ranges [here](/primitives#int-short-long-byte).

:::

We can use literals and scientific notation for floating point types.

```java
double decimal = 3.14;
double scientific = 3.14e-2; // equivalent to 0.0314
float a = 1; // works (lul)
float myFloat = 3.14f; // 3.14F works just as well. See warning and tip below!
float yourMistake = 3.1; // does not work.
double uselessSyntax = 4.2d; // literal d and D work for double
```

Using scientific notation is relatively common and can be done with less care than using integer literals.

:::warning
Floats with decimal points only work if we use the correct literal for setting the value like we did in the example above. myFloat = 3.14f and myFloat = 3.14F works. float myFloat = 3.14 throws an error!
:::
:::tip
If in doubt use double. Only use float when you have a good reason.
:::



## char

Represents a single 16-bit Unicode character. Minimum value '\u0000' (or 0) and maximum value '\uffff' (or 65,535 inclusive). This is a bit different than the char type in other languages like C or C++.

```java
char letter = 'A';
char unicode = '\u0041'; // equivalent to 'A'
```

## casting primitives

We can (and will need to) cast our primitives using the following syntax:

```java

// Widening aka upcasting. Will be done implicitly if we dont specify:
int x = 12;
double xAccurate = (double) x;

// Narrowing aka downcasting. Needs to be done explicitly because it can lead to information loss.
double muchInfo = 9.12342345;
int lessInfo = (int) muchInfo; // this is 9.

```

::: details

```java
// We can obviously cast results of longer evalutions like this as well:
int algoResult = (int) someMethodReturningAFloat(((33 * x)%4))

// We could also cast a char into an int like this, can be used when you wanna iterate over the alphabet or something:
char myChar = 'A';
int convertedChar = (int) myChar; // convertedChar will be 65 here because thats the value of A

```

Bonus fact: Technically *null* is also it's own type. You cannot set a variable type to null or cast it into one though. The only thing you can do with null is [assign it to a variable of a reference type](/reference.md#default-values).
:::

### Java widening order

The order of number types is this:
byte < short < int < long < float < double

## default values

We will talk about when primitive default values are used and how to handle that behaviour in more detail later.
:::warning
i still need to do that. i should link it here once i did!
:::

For now we can just take note of the default values for our primitive types briefly:

| Primitive Type | Default Value |
| -------------- | ------------- |
| byte           | 0             |
| short          | 0             |
| int            | 0             |
| long           | 0L            |
| float          | 0.0f          |
| double         | 0.0d          |
| char           | '\u0000'      |
| boolean        | false         |
