# Reference Types in Java

Every other data type that was not mentioned in the [Primitive Data Types](./primitives)
Section is a *reference type*.  
By convention the reference types always start with an uppercase letter.  
They are called reference type because unlike primitives they don't store actual values themselves. Instead they store *references* to where data is stored.  

```Java
        // Declaring an array, which is a reference type
        String[] names = {"joe", "mike" };
        /* 
        we capitalize "String" here, because it is a reference type.
        we do NOT capitalize "names" because it is a variable name.
        */
        // This prints the reference address
        System.out.println("Reference address of the names array: " + names);
        // [Ljava.lang.String;@7344699f
```

We will take a first look at important reference types here and go into more details about some of them later in separate sections.

## Classes and Objects

- All the provided reference types **use** Classes and Objects to define more complex data types. Technically they are no different than any other Classes and Objects. We can build our own data structures and import additional ones from third party sources as well.
- Technically classes and objects **themselves** are reference types as well. They have a defined structure and their own methods.
- We will go into more detail about classes, objects and oop concepts later on [here](/classes).
- Because they are objects reference types can invoke and call methods.

## Strings

One of the first reference types to get familiar with is the String type. Strings are collections of characters and used for all kinds of text processing.

:::warning
In java String are **always** delimited with **double quotes**! Single quotes are used for char type values **only**!
:::

```java
String exampleStr = "Hello, World!";  // correct
String wrongSyntax = 'This throws!' // does not work in java!

```

## Arrays

In Java Arrays are a *collection of elements **of the same type***. They are declared using the new keyword like this:

```java
int[] myArray = new int[5];
```

Their length **has to** be defined when declaring them and **cannot** be changed afterwards. If you don't set specific values for elements when declaring an array they are given a **default value**. If the array is holding primitives their default value is whatever all bits off is interpreted as. If it is holding reference types their default values are set to **null**.

:::details
Here's a list of default values for primitives as a refresher:

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
:::

tbd in own section: anonymous arrays.

```java
// a named Array:
int[] luckyNumbers = { 7, 13, 21 };

// using an anonymous array:
import java.util.stream.IntStream;

public class MyClass {
    public static void main(String args[]) {
        int totalWinnings = IntStream.of(new int[] {3000, 4500, 5000}).sum();
        System.out.println(totalWinnings); // 12500
    }
}
```

:::warning
If you need to use elements of multiple different data types or modify the amount of values used you **don't** use Arrays in Java!
:::

## Interfaces, Enums etc

There is a category of types called **interface** and a special object type called **enum** (enumeration). We will not go into those or any other reference types at this point for now though.

## Working with reference types

Some general notes about working with reference types:

### Default values

Instance (class level) variables have a default value of null. That means they can exist without actually referencing anything (yet).
Local (method level) variables do **not** have any default value.

:::warning
Local variable objects should always be initialized in order to prevent compile time errors later on.

Methods using instance variable objects should usually be able to handle a possible **NullPointerException**.
:::

```java
public class Reference {
    
    int hi;
    void methodVariable() {
        int x;
        System.out.println(hi); // works, prints 0
         // throws might not have been initialized, does not compile:
        System.out.println(x);
        
       switch(1) {
            case 1:
            default:
                x = 4;
        }
        // this works bc default is ALWAYS executed (no case with a break)
        System.out.println(x); 
    }
}
```

## Comparison, reference copies and cloning

You can compare reference types using == or their equals() Method.

```java
Pet rocky = new Pet;
Pet rex = rocky;
if(rocky == rex) {
    System.out.println("Rocky dressed as rex today!")
}
```

Classes provide an equals() method that just uses == as well. It can be overwritten if needed though.

Using objA = objB like we did withrex and rocky above copies the **reference**. "Both" variables point at the same object now and changing one of them changes the other one as well. They are **teh same object**, it can just be found with two different names.

A more in depth explanation of clones, copies and the differences can be found [here](https://www.oreilly.com/library/view/java-8-pocket/9781491901083/ch04.html).
