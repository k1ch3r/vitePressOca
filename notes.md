# Strukturen Notizen

- Wir kannten ternary schon und haben if und else inklusive sonderregel mit einem statement ohne block wrapping mit {} eingefuehrt.
- Wir haben Switches angeschaut. Es wurden die erlaubten Datentypen fuer Switches erwaehnt:

## Data types allowed as Swich case

<!-- copilot made this list i should read up on it and see if i agree-->

- byte and Byte
- short and Short
- char and Character
- int and Integer
- Enum types
- String

- Den restlichen Kram zu switches haben wir vermutlich auch angeschaut: break, default, bla

## Kontrollstrukturen

- es gibt neben while, for (& for each/ enhanced for), do-while noch eine schleife fuer referenztypen?!
- labels fuer strukturen:

```java
a: for(int i = 0; i<10; i++) {
    b: for(int j = 0; j<5; j++) {
        if(i == 4) break a;
    }
}
```

- array namenskonvetion is plural substantiv btw
- enhanced for loop aka erweiterte for schleife soll "vierter" loop on java sein is dieser shizm:

for(int zahl : zahlen)

gippity about reference types... i know less than ever right now bruh.

```plaintext
The distinction between reference types and primitive types in Java is essential for understanding how variables behave and how memory management works in the language. While it's true that both types ultimately involve memory management, their behavior and usage patterns differ significantly, and understanding these differences is crucial for writing correct and efficient Java code.

Here's why the distinction matters:

Memory Management and Access Patterns:

Primitive types: Values of primitive types are stored directly in memory, and their access is straightforward. They are typically allocated on the stack, which is faster but limited in size. Primitive types have fixed sizes, allowing the compiler and runtime to efficiently manage their memory.
Reference types: Objects of reference types are stored on the heap, and variables hold references (memory addresses) to these objects. This indirection introduces additional overhead, both in terms of memory usage and access time. Understanding reference types helps developers grasp concepts like object lifecycle, garbage collection, and potential memory leaks.
Behavior and Mutability:

Primitive types: Primitive values are immutable; once assigned, their values cannot be changed. Operations on primitive types involve copying the value itself.
Reference types: Objects are mutable, meaning their state can be modified after creation. Variables holding references to objects allow manipulation of the object's state through method calls and property modifications.
Pass-by-Value vs. Pass-by-Reference:

Primitive types: Java uses pass-by-value semantics for primitive types. When passing a primitive variable to a method, a copy of its value is passed.
Reference types: Java also uses pass-by-value, but it's essential to understand that when passing a reference variable to a method, a copy of the reference (memory address) is passed, not the object itself. This can lead to confusion, especially when modifying objects within methods.
While it's true that Java's memory management system handles both primitive and reference types, understanding the differences between them helps developers write more efficient, bug-free, and maintainable code. It's not about caring which type is used but understanding their respective behaviors and implications for writing robust software.

```

- wat is java reflect?!
- native modifier
- er meint wie verschiedene ref types kopieren/pointer teilen handlen ist unterschiedlich und muss man auswendig lernen... panik xD
- binary search returns be weird?! wieso verschiedene negative zahlen fuer not found kekw.. ok anscheinend ist binary search fuer sortierte sachen und - heisst not found und die zahl wo sie sein muesste wenn sie drin waere?!
- die ... syntax muss bekannt sein fuer oca meint er?! -> nimmt ohne literalschreibtweise wertelisten?!
- bei varargs in methodendeklarationen muss man auf die reihenfolge achten: hinter dem varargs darf kein anderer paramteter mit , getrennt folgen!
- er meint es kommen aufgaben mit objekte zaehlen im kontext string pool new konkatenation bla
- String methoden
- order of operations
- substring ist inklusive startindex exklusive endindex?!
- stringbuilder makes space for 16 chars initially and current lentgh + weird amount calculated in some way by default ?!?!?! idk im confused (cxapacity)
- stringbuilder methoden (konstruktor mit uebergabe, toString, length, append, charAt, insert, bla)
- arraylist
- wrapper klassen?!
- (generics) nicht fuer oca relevant
- arrayname.length vs .length() vs arraylistenname.size()
- LocalTime klasse, LocalDate, ISO_LOCAL_DATE, bla
- LocalDate.of()
- LocalDate hat spezielle konstruktoren und throwt mit new syntax!? -> folien
- hph buch sagt zu attributen "datenlemente" dafuq
- todo switch. Incompatible types. Found: 'boolean', required: 'char, byte, short, int, Character, Byte, Short, Integer, String, or an enum'
  ^ => float double bool nonstring/enum objekte bleh geht nicht
- jede klasse ist per default "extends Object"
- die liefert zb equals getClass toString (vermutlich auch den default kosntruktor?!)
- daher auch @Override bei eigener toString ?!
- parameter koennen mit implizit castbaren argumenten verwendet werden (eg int wird double), dann overload resolution (hph s.  192)
- erbende klassen beschweren sich iwie manchmal drueber dass ihre eltern keinen default konstruktor haben.. ?! dann kann man iwie mit super chainen?! idk man
- iwas mit objekte von klasse zu klasse casten hoide...
- wenn man eine cast funktion machen will: if (superClass instanceof(subClass))
- switch geht wie bereits erwaehnt nicht fuer referenztypen ausser enum und string, also hier nicht.
- '\s' escape sequences are not supported at language level '8' dafuq?

```java
"throwt obv... : \n" +
"C:\\Users\\Student\\Documents\\gfn\\LF-ZQ1a_OCA\\OCA\src\\d2024_06_06\\DrinkTest" +
".java:49:15\n" +
```

zusammenhang zwischen abstrakt und ueberladen?!

- bin leicht unsicher ob ich jemals oberklasse objekt in unterklasse objekt erzeugen kann weil fehlermeldung reason: actual and formal argument lists differ in length
- Geht nicht!

```java
Sub sub = new Super();
// throwt java: incompatible types: Super cannot be converted to Sub
```

- es gibt glaub ich mehr relevante regeln fuer access modifier als wir bisher hatten sowohl in unterricht als auch ich hier auf der seite?! zb muessen private klassen unterklassen sein?!
- https://www.w3schools.com/java/java_inner_classes.asp

- enum
- interface ez lambda wut? xP

- abstract classes: Fields and Constructors: Can have fields and constructors, but constructors are called only through their subclasses. might need to revisit this?!
- lambda jede syntax, predicate
- hinter override bzw zwischen override und der funktion darf kein semikolon sein
- klassen koennen nur public oder package private sein, NICHT private oder protected!
- public void TestClass(long pLong) { l1 = pLong ; }  //(1)  <- ist eine methode, kein konstruktor. wegen void?!
- alle Wrapper objects sind immutable?! :O
- local code blocks (!initializer)
- static vs instance initializer
- "As in C and C++, the Java if statement suffers from the so-called "dangling else problem," The problem is that both the outer if statement and the inner if statement might conceivably own the else clause. In this example, one might be tempted to assume that the programmer intended the else clause to belong to the outer if statement.  The Java language, like C and C++ and many languages before them, arbitrarily decree that an else clause belongs to the innermost if so as the first if() condition fails (args[0] not being "open") there is no else associated to execute. So, the program does nothing. The else actually is associated with the second if. So had the command line been : java Test open, it would have executed the second if and thrown ArrayIndexOutOfBoundsException. If the command line had been: java Test open xyz, it would execute the else part(which is associated with the second if) and would have printed "Go away xyz"."  -> if in doubt else is of the innermost if
- (b2 = b1 == false) does 1. b1 == false evaluation. lets say thats true: it then does b2 = true, setting b2 to true. finally it returns the value of b2 -> returns true
-       int x  = ( x=3 ) * 4;  works, sets x t 12 like this: x = 3 first. then 3*4 = 12. then x = 12.
- default label can be ANYWHERE in a switch, does not have to be last or first or anything.
- stringbuilders are mutable (-> their global value can be changed in a method)
- labels "You can apply a label to any code block or a block level statement (such as a for statement) but not to declarations. For example: loopX : int i = 10;"
- break loop with a label for a block SURROUNDING a try catch inside the try will still exectue the finally before breaking
- if you put a string into an object variable bc of polymorphism will use the overwritten string methods, not the object methods.... -> tostring prints the string, not its address
- you CAN use a constant in a switch switch (1) { default : break; } but you cant use break in an if with no loop around it if (true) { break ; } (When not inside a switch block or a loop)
- ALL INSTANCE VARIABLES ARE INITIALIZED TO DEFAULT VALUES!!!!!!
-  Note that automatic variables (also called as method local variables i.e. variables declared within a method) have to be explicitly initialized. -> method variables are NOT instance variables!
- you cant have a static and non static method with the same name for a class