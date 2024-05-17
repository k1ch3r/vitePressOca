# Arrays

We already introduced the java array typ in our [reference types](/reference#arrays).

:::info
A java array is a *collection* of elements of the *same type* with a *specific "size"* (amount of elements).
:::

Arrays are one of the most common and important reference types. They are part of the OCA curriculum as well. Let's take a closer look at them!

## Syntax Basics

:::tip
We should give our arrays **plural nouns** as name.
:::

### Declaration and Initialization

```java
// we can declare an array with just a data type and a name. We need to set a lenght or initialize somehow in order to treat individual values though.
int[] unfinishedNumbers;
// we can use a literal and set values. we dont need to explicitly add length.
int[] numbers = { 1, 2, 5 };
// we can also use a constructor. this will set default values!
int[] fiveNumbersLater = new int[5];
// technically we can combine both. (i would not). we also cant set length here.
int[] literalAndDefaultNumbers = new int[] { 2, 3, 6, 5, 1 }
```

:::warning
Literal and constructor syntax can only be used one time for every array. Once we initialized the values we can NOT change them all with the same tools anymore
:::

```java
int[] fiveNumbersLater = new int[5];
// does NOT work
fiveNumbersLater = { 1, 2, 3, 4, 5};
```

### The varargs Syntax

You can make a function (do I need to say method for our OOP overlords?) take an undefined amount of arguments of the same type.

```java
public void iCanHandleIntegers(int... passedInts) {
    // you have an array containing the passed arguments inside now
    for(int intElement : passedInts) System.out.print(intElement);
    System.out.println("are the " + passedInts.length + " ints you have passed");
}
// psvm { iCanHandleIntegers(1, 2, 3); } -> 1 3 5 are the 3 ints you have passed
```

Afaik varargs or vargs stands for "variable number of arguments".  
I think it is meant to be used for values that are (only) relevant inside the method receiving them primarily.  
It should be enough to just know they exist for OCA.

### Enhanced For Iteration

We can use the "enhanced for loop" (glad I did not come up with this name) to iterate over an array.

```java
int[] numbers = { 1, 2 };
// we still have to type the array content even though it should be known xD
for(int num : numbers) System.out.println(num);
// we can"t change the external values with the local variable:
for(int num : numbers) {
    num += 1;
    System.out.println(num);
    // this prints num + 1 but does NOT affect the numbers array
}
// still returns [1, 2]. 
System.out.println(Arrays.toString(numbers));

```

Not sure how "enhanced" this is. Are you?  
Pretty niche use case probably.

## Methods

### Arrays.toString()

This is a quick and basic way to look at the contents of an Array. It is needed because referencing the array itself without calling a method only returns the memory address.

```java
int[] intArr= { 1, 2, 3 };
System.out.println(intArr); // prints a reference: [I@2503dbd3
Arrays.toString(intArr); // returns [1, 2, 3];

```

### Arrays.sort

:::danger
This modifies our ***original array***. The unsorted order can be lost.
:::

Sorts the contents of an array. The actual sorting logic **depends on the datatype** of our input array.

```java
int[] intArr = { 2, 7, 1};
Arrays.sort(intArr); // intArr is now { 1, 2, 7 }

char[] charArr = { 'a', 'A', '5' };
Arrays.sort(charArr); // charArr is now { '5', 'A', 'a' }

String[] strArr = { "Hello", "!", "day", "11", "Dear." };
Arrays.sort(strArr); // strArr is now { !, 100, 11, Dear., Hello, day }
```

### Arrays.binarySearch()

Takes a **sorted** array and a key as value. Returns the index of the found value matching our key if it finds a match. Returns the correct index to insert ***+ 1 as negative integer value*** if the key is not found. (Just look at the exmample below xP)

```java
int[] sortedNos = { 0, 2, 8, 9, 12};
int[] unsortedNos = { 2, 1, 8 };
// returns 1 because the value 2 is found at index 1
Arrays.binarySearch(sortedNos, 2);
// returns -3 because 3 was not found and would be inserted at index 2
Arrays.binarySearch(sortedNos, 3);
// returns -3 even though 2 is in our array because our input array was not sorted.
Arrays.binarySearch(unsortedNos, 2); 

```

:::tip
Does the fact that the insertion index for values that were not found is off by one confuse you?  
Well we **cannot** return -0 for a value that should be inserted at index 0. There is no -0 value.  
So we have to use the available negative int range starting with -1.
:::

## Behaviours and Pitfalls
