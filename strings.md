# Strings

Strings have been introduced when we took a look at [reference types](/reference#strings).

:::info
Strings are ***collections of characters***.
:::

## Immutability

Java Strings are **immutable**. 

:::info
An immutable object is an object whose internal state remains constant after it has been entirely created.
:::

This has a few implications we need to keep in mind for both OCA questions and everyday applications.

First of all all String methods have been implemented in a way that does not change anything at the original object. They create a new one and return it. This is different than many other methods that will actually change the values of the memory at the adress they receive afflicting any future readings and destroying the old value forever.

## Methods

The string class comes with a lot of methods. We need to know at least the following 14 for the OCA exam.  
We **don't** need to explicitly import the String class to use them.

### length()

Returns the length (amount of characters) of the string we use it on as integer.

```java
String countMe = "Hello";
int strLength = countMe.length(); // 5
```

:::warning
This returns the amount of characters. => It is ***one-indexed***!
:::

### charAt()

Takes the string we use it on and returns the character at the index we passed. We need to pass an int and the return is char type.  
:::warning
This uses index values. => They are ***zero-indexed***.
:::

```java
String myChars = "Ey, BC!";
char charFour = myChars.charAt(5); // C
```

### indexOf()

Searches the string for our input parameter. Returns the index of the **first occurance** if found and **-1** if not found.  
We can search for strings or chars. We can pass a fromIndex int as second parameter to start searching from there.

```java
String searchMe = "Hello, Hello. I am, but 2 be?";
int helloIndex = searchMe.indexOf("Hello"); // 0
int notFoundIndex = searchMe.indexOf("Goodbye"); // -1
int secondHelloIndex = searchMe.indexOf("Hello", 2); // 7
int secondOChar = searchMe.indexOf('o', 7); // 11

```

### substring()

Returns a substring (part of the original string) defined by our input parameters. Takes an int start index and an optional int end index. If we don't pass an end index it is set to length()-1.  
The end index sets the index **after** the last character included in the substring. (It is "**exclusive**").  
**Throws** IndexOutOfBoundsException if the start or end index is negative or greater than the length of the string. Also throws if start is greater than end.

```java
String subStringsHere = "I am not sure if there is a method to my madness.";
String officialVersion = subStringsHere.substring(17); // there is a method to my madness.
String iThink = subStringsHere.substring(0, 5); // I am
String iThrow = subStringsHere.substring(50, -3); // throws for all the reasons above
```

### toUpperCase(), toLowerCase(), equals()

These don't really need explanation. First two are Locale dependent but that's beyond my concerns.

### equalsIgnoreCase(), startsWith(), endsWith()

Same deal. They exist and do what one would expect.

### contains()
Takes input String, returns boolean. Maybe you want [indexOf()](strings#indexof) if you need more than a bool.

### replace()

Takes two input arguments:
- The first argument is the value for the target to search and replace.
- The second one is the value to replace targets with.

You can use CharSequence arguments: Either two chars or two Strings.
Unlike replaceAll() it does **not** work with regEx.
:::warning
Use **MATCHING** arguments. 2 Strings or 2 chars.
:::

### trim()

Returns input String with **ALL leading** and **ALL trailing** white space characters removed. Does not affect white spaces in between non white space chars.

### concat()

Takes another String as input and returns concatenated String consisitign of object String and argument String.

### split()

Takes a regEx target as argument. Splits the String into substrings around any matches.  
Returns an **Array** of Strings.
