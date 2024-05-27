# ArrayLists

ArrayLists are a more flexible and advanced version of Arrays.  
Unlike arrays they need to be explicitly imported from java.utils.

```java
import java.util.ArrayList;
```

There are several different ways to declare and initialize them.

```java
ArrayList<String> list0; // declares without initializing
list0.add("LOL!"); // => throws not initialized
ArrayList<String> list1 = new ArrayList(); // initializes a new empty arraylist
ArrayList<String> list2 = new ArrayList(10); // sets initial capacity of 10
ArrayList<String> list3 = new ArrayList<>(); // same as list1 but with generics... idk.
ArrayList<String> list4 = new ArrayList<String>(); // more generics. still dont know.
ArrayList<String> list5 = new ArrayList(list3);
ArrayList<String> list6 = list3;


```

TODO differences here

## Methods

Even though many of the methods for ArrayList have very similar functionality as the methods provided for arrays they don't all have the same names!

### add()

Takes a value of the required type and adds it to the end of the list.

:::info
This changes the amount of values in our data structure, which is NOT possible with arrays.
:::

```java


```
