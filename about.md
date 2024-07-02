# Contents & About

This site is focused on the [topics required for the OCA exam](https://education.oracle.com/java-se-8-programmer-i-also-available-in-chs-for-taiwan/pexam_1Z0-808).  
The summary of exam topics reads as follows:

## Basics

- (Variable) scope
- Class structure
- Main method
- Running with CLI & console outputs
- Packages
- Java characteristics (platform, oop, independence, encapsulation, ...)

## Data Types

- Declaring and initializing variables
- Casting primitives
- Primitives vs reference variables
- Fields
- Object lifecycles (this seems to be a big deal in OCA from what I've seen)
- Wrapper classes

## Operators and "Decision Constructs"

- Java operators, order of operations, parentheses
- Equality of objects using == vs equals()
- if, else and ternary
- Switch statements

## Arrays

- Declaration, Instantiation and initialization of one- and multi-dimensional arrays

## Loops

- while loops
- for/enhanced for loops
- do/while loops
- "comparing" loop constructs
- break and continue

## Methods & Encapsulation

- Arguments
- Return values
- Overloading
- static methods and fields
- overloading constructors, default vs user constructors
- access modifiers
- (applying) encapsulation principals
- behaviour of reference & primitive values/variables when passing them to methods that change values

## Inheritance

- Describing inheritance & its "benefits"
- polymorphism, method overriding
- reference vs object types
- casting & when it is necessary
- super & this usage with objects and constructors
- abstract classes & interfaces

## Exception handling

- checked vs unchecked exceptions vs errors
- try-catch blocks and their effects on program flow
- advantages of exception handling
- throwing
- common exception classes (NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException, ClassCastException)

## "Selected classes from the Java API"

- StringBuilder & methods
- Strings
- calendar data -> java.time.LocalDateTime,  java.time.LocalDate, java.time.LocalTime, java.time.format.DateTimeFormatter, java.time.Period
- ArrayList
- simple Lambda expressions & "consuming a Lambda Predicate expression"

:::info

Learn the rules mentioned below the topics:  


- Missing package and import statements: If sample code do not include package or import statements, and the question does not explicitly refer to these missing statements, then assume that all sample code is in the same package, or import statements exist to support them.
- No file or directory path names for classes: If a question does not state the file names or directory locations of classes, then assume one of the following, whichever will enable the code to compile and run:
    - a) All classes are in one file
    - b) Each class is contained in a separate file, and all files are in one directory
- Unintended line breaks: Sample code might have unintended line breaks. If you see a line of code that looks like it has wrapped, and this creates a situation where the wrapping is significant (for example, a quoted String literal has wrapped), assume that the wrapping is an extension of the same line, and the line does not contain a hard carriage return that would cause a compilation failure.
- Code fragments: A code fragment is a small section of source code that is presented without its context. Assume that all necessary supporting code exists and that the supporting environment fully supports the correct compilation and execution of the code shown and its omitted environment.
- Descriptive comments: Take descriptive comments, such as "setter and getters go here," at face value. Assume that correct code exists, compiles, and runs successfully to create the described effect.
:::