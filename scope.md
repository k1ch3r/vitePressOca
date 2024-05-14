# Scope, Garbage Collection, and Access Modifiers

<!-- Garbage collection is a key part of how Java manages object lifetimes -->

## Introduction

In Java, the accessibility and lifetime of variables and methods are determined by their scope and access modifiers. Here are some basic concepts:

- **Block**: A block is a group of zero or more statements between balanced braces and can be used anywhere a single statement is allowed.

- **Scope**: The scope of a variable is the region of the code within its block where it can be accessed.

```java
package package.path.Stuff;
// The package is the largest scope in a Java program. It can include multiple classes.

public class Classname {
    // This is a class block, the largest block typically written in a single Java file.
}
```

- **Garbage Collection**: Java automatically manages the memory used by objects. When an object is no longer reachable, the garbage collector can automatically reclaim the memory.

- **Access Modifiers**: These are keywords that set the accessibility of classes, interfaces, and other members. The four types of Java access modifiers are: private, protected, default (no keyword), and public.

In the following sections, we will delve deeper into each of these topics.

## Blocks and Scope

In Java, the scope of a variable is determined by the block in which it is declared by default. Here are some basic rules and exceptions:

- **Local Variables**: These are declared within a method or a block. They are only accessible within the block they are declared.

- **Instance Variables**: These are declared within a class but outside a method. They are accessible to all methods within the class.

- **Class Variables (Static Variables)**: These are declared within a class with the `static` keyword. They are accessible even before an instance of the class is created.

- **Shadowing**: If a variable is declared in a local scope with the same name as a variable in a larger scope, the local variable will shadow the larger scoped variable.

- **Exception to Scope**: Class variables can be accessed directly using the class name, even from outside the class.

```java
package com.example; // The package is the largest scope in a Java program.

public class MyClass { // This is a class block, the largest block typically written in a single Java file.
    // Instance variable
    private int instanceVar = 1;

    // Class variable (static variable)
    private static int classVar = 2;

    public void myMethod() {
        // Local variable
        int localVar = 3;

        System.out.println("Instance variable: " + instanceVar); // Accessible within class
        System.out.println("Class variable: " + classVar); // Accessible even before an instance of the class is created
        System.out.println("Local variable: " + localVar); // Only accessible within this method
    }

    public void anotherMethod() {
        int instanceVar = 4; // This local variable shadows the instance variable

        System.out.println("Shadowed instance variable: " + instanceVar); // Prints 4, not 1
    }
}

public class AnotherClass {
    public void anotherClassMethod() {
        System.out.println("Access class variable from another class: " + MyClass.classVar); // Accessible using class name
    }
}
```

In the following sections, we will discuss each of these in more detail.
