## Cambios en localETH debido a Cambios en la Version del Compilador

Originalmente localETH fue compilado con solidity 0.4.24.

Al hacer el cambio con el compilador version:0.5.16+commit.9c3226ce se observó:

N° 1 Los parametros de funciones en forma de arreglos deben ir indicados en la memoria, no es posible colocar este tipo de datos en la pila o stack.

N° 2 Los tipos de variable de contrato, tambien deben ir en "memory" o en "storage", no pueden ir en la pila.

N° 3 Las addresses a las que se le envian pagos en ETH, obligatoriamente deben ir declaradas como "*address payable*". Recuerdense las reglas de [sintaxis](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

N° 4 Cuando se trata de arreglos de addresses: *address[ ]* el cambio a indicar es: **address payable[ ]**

N° 5 Cuando se requeria detener la ejecución de una función en las versiones ^0.4.xx podía utilizarse sin argumentos el comando `return` dentro de un bloque `if`:

```solidity
        if(A) {
            return;
        }
``` 

No obstante en las versiones posteriores esto no es valido y se debe uilizar el comando `require` con el negado del argumento A:

```solidity
        require(!A);
``` 

Al subsanar estas diferencias en las versiones, ya el contrato LocalETH puede desplegarse con el compilador moderno 0.5.16.