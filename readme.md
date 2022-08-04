# Patrones de diseño en Deno & TS:

1.  Patrones creacionales (Problemas de instancia o de creación de objetos)
    - Singleton
    - Factory
    - Abstract Factory
    - Factory Method

2.  Patrones estructurales (Relación entre clases)
    - Adapter
    - Decorator
    - Proxy

3.  Patrones de comportamiento (Interacción y responsabilidades entre clases)
    - Command
    - Observer
    - Strategy


## Singleton
Singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

## Factory
Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.

## Abstract Factory
Permite agrupar familias de objetos para su creación.
Es una fábrica de fábricas.

## Adapter
Adapter es un patrón de diseño estructural que permite la colaboración entre objetos con interfaces incompatibles.

Puede darse el caso de tener una una clase que no sea compatile y no pueda trabajarse de manera polimorfica con ella, debido a que no puede implementar la interfaz de otra distinta.

*ejemplo: SlackNotification* no puede usar la interfaz *notification.interface.ts* puesto que no tiene el método post usa por la razón que sea el método send.

Se puede crear un adaptador. Se trata de un objeto especial que convierte la interfaz de un objeto, de forma que otro objeto pueda comprenderla.

