# Error Handling

## Terminology

Java error handling is based on a class hierarchy. The superclass of all the error and exception classes is

### Throwable

The [Throwable](https://docs.oracle.com/javase%2F8%2Fdocs%2Fapi%2F%2F/java/lang/Throwable.html) class implements shared functionalities for the error and exception classes that inherit from it.   
It is also the minimum requirement for an object to be accepted to be thrown.

```java
// throws java: incompatible types: java.lang.Object cannot be converted to java.lang.Throwable
public void method() throws Object { }
// works
public void method2() throws Throwable { }
// -> all classes inherting from throwable work as well
```

The next level under Throwable are the subclasses Error and Exception.

### Error

The Error class is intended for representing serious, often irrecoverable problems. The idea is that they *should not* be caught and handled because reliable results cannot be guaranteed after their occurrence.
```java
try { } catch(OutOfMemoryError) { } // should probably not be done.
```
:::warning
Like most rules this cannot be followed blindly. You might find yourself in a Situation where catching an Error is the best solution. It can be impossible to draw a hard line between an error being fatal or easily fixable when deciding that it should be thrown. You need to judge that.
:::

### Exception

Exceptions are the counterpart to errors: They represent foreseeable problems that can typically be managed within the program.

## try, catch, finally

Java provides *try*, *catch* and *finally* blocks to handle Throwables:

- You can (and in some cases must) wrap code that may result in throws in a **try block**.  
- As the name suggest the JVM will **attempt** to execute any code inside a try block.  
- *If* a Throwable matching the definition in our **catch block** occurs we can define the resulting behaviour there.  
- This overwrites the "default handling" of the Throwable completely. -> The JVM will not exit the program manually as a result of the throw anymore unless we tell it to.  

```java 
try {
    // this could trigger a NullPointerException and will trigger an ArithmeticException
    Scanner s = new Scanner(System.in);
    int scannedInt = s.nextInt();
    Integer result = outsideReference * scannedInt/ 0;
} catch (NullPointerException e) {
    System.out.println("NullPointerException occurred: ");
    e.printStackTrace();
} catch (ArithmeticException e) {
    System.out.println("ArithmeticException occurred: " + e.getMessage());
} catch (Exception e) {
    // semi catch all for other exceptions
    System.out.println("Exception occurred: " + e.getMessage());
}
```

- Any code in a **finally block** will always executed after other block(s) - regardless of whether an exception occurred. Finally blocks are *optional* but can be useful for cleanup tasks such as closing resources.

```java
BufferedReader reader = null;
try {
    reader = new BufferedReader(new FileReader("file.txt"));
    String line;
    while ((line = reader.readLine()) != null) {
        // Process each line
    }
} catch (IOException e) {
    System.out.println("IOException occurred: " + e.getMessage());
} finally {
    // Ensure the reader is closed regardless of exceptions
    try {
        if (reader != null) {
            reader.close();
        }
    } catch (IOException e) {
        System.out.println("Error closing BufferedReader: " + e.getMessage());
    }
}
```

:::details
The example above is probably handled better with *try-with* Syntax like this:

```java 
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        // Process each line
    }
} catch (IOException e) {
    System.out.println("IOException occurred: " + e.getMessage());
}

```

But this is beyond the knowledge needed in context of the OCA certification.
:::
