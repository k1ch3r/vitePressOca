# Code Style and Formatting Conventions

There is an official Code Convention guide from oracle [here](https://www.oracle.com/technetwork/java/codeconventions-150003.pdf).

## Comments

We can do single line and multi line comments in Java with the same Syntax as in JS. As in other languages we should primarily describe why we are doing something and not what we are doing.

```java
// This is a single line comment.

/*
This is a multi line comment.

Hi!
*/
```

## Javadocs and Beginning Comments

We also have docstrings. They can be used to generate **Javadocs**. If we do them we **need to** keep them up to date when we make changes! Otherwise they are probably doing more harm than good.

```java
public class Person {    
    private String name;

    /**
     * Checks if the name of the person is empty.
     *
     * @return true if the name is empty, false otherwise.
     */
    public boolean isNameEmpty() {
        if(name == null || name.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }
}
```

:::details
isEmpty() is a prebuilt String method that checks if a String has a length of 0.
We see the docstring as additional description for the method when we use it in most IDEs independently of using Javadocs to create external docs just like in most other languages.
:::

It is good practice to make a multi line **Beginning Comment** for our source file. It should contain a copyright notice, a brief description of the program and a list of the programmers:

```java
/*
 * HelloApp
 * 
 * This is our App to welcome any new Users to our community. It is executed upon registration and can be repeated manually at any point later on.
 * 
 * Version 1.02
 * 
 * by John, Joe and Max
 * 
 * Copyright (c) 2022, John, Joe and Max. All rights reserved.
 */

```

## Naming Conventions

todo.

## Annotation

todo.
