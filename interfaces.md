# Interfaces

The idea of interfaces is to define *"contracts"* that tell classes what they need to do.

```java
interface Animal {
    void eat();
    void sleep();
}
```

This example tells any class trying to implement it that it needs to have methods called `eat()` and `sleep()`.

Interfaces can be implemented by any class in any inheritance tree and thereby let you define common behaviors for classes that are not directly related.

## Special Rules
- An interface can extend one ore more other interfaces.
- It **cannot** extend anything else (classes).
- It **cannot** implement anything.
- A class can implement multiple interfaces.

### Methods
- Interface methods are **always public**.
- Interface methods are **abstract** by default. They can be declared as default or static methods as well.
- Interface methods **cannot be final, strictfp, or native.

::: tip
Watch out for questions trying to trick you with implicit or illegal method declarations!

```java
void eat();
public void eat();
abstract void eat();
public abstract void eat();
abstract public void eat();
// is all legal and interpreted as:
public abstract void eat();

final void eat(); // illegal because final and abstract are mutually exclusive
private void eat(); // illegal because interface methods are always public
protected void eat(); // illegal because interface methods are always public
```
:::

### Variables
- Interface variables are **always public, static, and final**. So they are non-instance constants.

::: tip
Watch out for questions trying to trick you with implicit constant declarations!

```java
public int x = 1;
int x = 1;
static int x = 1;
final int x = 1;
public static int x = 1;
public final int x = 1;
static final int x = 1;
// is all legal and interpreted as:
public static final int x = 1;
```
Any attempt to change the value of x after initialization will result in a compile-time error.
:::

### Default and static Interface Methods
The keywords `default` and `static` can be used to define "concrete" methods in interfaces. They share some common characteristics:
- They are public by default ( => the public modifier is optional).
- They cannot be marked as `private` or `protected` (because they are interface methods).
- They cannot be marked as `abstract` (because they are not) or `final`.
- They **must** have a body.

`static` methods can only be called on the interface itself. `default` methods can be overridden by implementing classes.

```java
interface Animal {
    default void eat() {} // can be called on instance Objects. Can be overridden.
    static void sleep() {} // can be called with Animal.sleep()
    
    // illegal examples:
    final static void drink() {} // final is illegal
    private void walk() {} // private is illegal
    protected void run() {} // protected is illegal
    abstract void fly() {} // abstract is illegal
    static void jump(); // no body is illegal
}
```
