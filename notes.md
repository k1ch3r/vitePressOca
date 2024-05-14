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
