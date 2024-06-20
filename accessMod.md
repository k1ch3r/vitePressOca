# Access Modifiers

## Attribute access

| Access allowed from           | Public | Protected | Default / Package Private | Private |
|-------------------------------|--------|-----------|---------------------------|---------|
| Class itself                  | +      | +         | +                         | +       |
| Different class & package     | +      | x         | x                         | x       |
| Child class, same package     | +      | +         | +                         | x       |
| Different class, same package | +      | +         | +                         | x       |
| Child in different package    | +      | +         | x                         | x       |
