# Primitive Data Types in Java

## boolean

Our standard logical type. Can only be true or false.

```java
boolean isSet = false;
isSet = !isSet;
```

## int, short, long & byte

Our integer number types. They are all two's complement and only differ in size.

:::details
| Type          | Size          | min Value | max Value   |
| ------------- | ------------- | --------- | ----------- |
| byte          | 8-bit         | -128      | 127         |
| short         | 16-bit        | -32768    | 32,767      |
| int           | 32-bit        | -2^31     | (2^31)-1    |
| long          | 64-bit        | -2^63     | (2^63)-1    |
:::

## float & double

These are our floating point number types. They represent 32 and 64-bit IEEE 754 values respectively.

## char

Represents a single 16-bit Unicode character. Minimum value '\u0000' (or 0) and maximum value '\uffff' (or 65,535 inclusive).
