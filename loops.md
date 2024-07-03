# Loops

The next step from conditional blocks are *loops*. They usually also have a condition to run, but they will run *repeatedly* until the condition fails.

## while()

A while loop behaves the same as an if() block, it just repeeats as long as the condition is met.

```java
// good code.
while(true) System.out.println("Hi");

```

## do {} while()

This is the same as while, but it always executes at least once.

```java
// boring code
do System.out.println("Hi");
while(false);

```

## for()

For loops are syntax sugar for while loops. They allow us to do declare, initialize and iterate variables inside the brackets.

```java
// this is while true btw. DID YA KNOW? KekW
for(;;) System.out.println("duuuh");
```

```java
// declaring, initializing and iterating i. prints duuuh no 0 to 9
for(int i = 0; i < 10; i++)  System.out.println("duuuh no " + i);

```

You can declare multiple variables in the first part, but they all *need to share the same type*.  

The second part where you define your condition needs to evaluate to a boolean value. The only exception is leaving it empty. As we saw above it will just be *true* then.  

The third part can change any variables we can access from the loop and will be excecuted after the code inside the loop is finished. (obv you should use this in ways that help readibility and not hurt it)

```java
int i = 10;
for(String fName = "john", sName = "doe"; i > 0; i--, fName += "a")  System.out.println(i + " " + fName);
```

## 'enhanced' for()

We can iterate over Collections and Arrays with even simpler Syntax. We just type the items and rerefence the collection like this:

```java 
int[] ints = { 0, 1, 2, 3 };
for(int o : ints) System.out.println(o);

String noCollection = "Java";
for(char c : noCollection) { } // does NOT work

HashSet<String> strs = new HashSet<>();
strs.add("is");
strs.add("funny");

for(String str : strs) System.out.println(str);
```

This way we can easily get references to all of the items in collections. We can reference non value elements of maps as well. If we are iterating over objects we can use the current reference for methods and fields.

```java 
HashMap<String, String> keyValuePairs = new HashMap<>();
keyValuePairs.put("Java", "mid");
keyValuePairs.put("TypeScript", "top");
keyValuePairs.put("go", "god");

for(String key : keyValuePairs.keySet()) System.out.println(key.charAt(0));
```


## break & continue

These keywords can be used to change our program flow inside loops.  

- **Break** will try to stop the loop surrounding it and jump behind it.  
- **Continue** will try to skip the remaining code in the loop and start the next iteration. So it will jump back up to the condition instead of down below the loop.  

There are things that take precedence over break and continue. Continue will still execute the iteration part of for loops before starting it again. Break will *not*!
Default statements in switches will not be executed if they appear after a case that broke the switch. (more on breaking switches in the next chapter)  
Breaking inside a try or catch block will not stop the finally block from being executed.

Since all the code after a break or continue statement will be *unreachable* they are usually used *conditionally* within a block to control *when* subsequent statements are executed.

:::warning
Java will not compile if it recognizes code ALWAYS being unreachable.
:::
