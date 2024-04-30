# Intro: background and bascis

## Day 1 prep

We installed JRE and JDK Version 8u411, added them to our path and compiled a .java file via javac in our shell.

## Packages and File Structure

We talked about  packages and folders and took  a look at the prebuilts in the jdk.
Note: OCA will ask about rules for imports/when you need to import.
Your projects file structure should match the package syntax.


```path
./com/mycompany/utils/CustomUtility.java 
```

Would be the correct structure for the import statement here:

```java
package com.mycompany.application;

import com.mycompany.utils.CustomUtility;

public class MyApp {
    CustomUtility utility = new CustomUtility();
}

```

- Fully qualified name Syntax can be used without importing elsewhere. Probably not good to use because it causes readability and maintainability issues.

```java
public class MyApp {
    com.mycompany.utils.CustomUtility utility = new com.mycompany.utils.CustomUtility();
}
```

## Classpath (cp)

We also used the (terrible) cp options for the java and javac commands... You will hopefully never ever do this and just use maven or gradle instead!

```cmd
javac -cp ".;../../importTest" Main.java
java -cp ".;../../importTest" Main

```

works if your main method uses

```java
fun.printFun();

```

and the directorty two above your src containing the Main.java contains a compiled (class) file named fun and containing a printFun() function.

Also take note of these two details if you actually care:

- the cp path is actually a list of the current root and the external code.
- we wrapped the path list with "" because otherwise cmd will interpret the ; as end of command.
