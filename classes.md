# Intro to Classes and Methods

Every Java file that contains code needs to contain **at least one class**.  
The only relevant example of a Java file without a class I know of is a [package-info](format#package-info-java) file.

:::tip
Every Java file with executable code contains at least one class.  
It cannot be private or protected.
:::

Classes that are not wrapped inside other classes within the file are called **top-level** classes.

Therefore, **every** variable and **every** function in Java is associated with either a class or an object.
That's why it's common practice to refer to all functions as **methods** in the context of Java.

:::tip
The term **method** does *not* emphasize any special relation to objects or classes in Java.
:::

We will delve into objects and object-related methods later on.

## Types

:::tip
Java is *strongly typed*. It expects you to define data types for variables and returns and enforces them in many cases.
:::

```java
int count = 0; // minimal initialization

void greet() { // minimal initialization
    System.out.println("Hello!");
}
```

Let's delve into our essential data types then!
