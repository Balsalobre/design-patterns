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

## Decorator
Decorator es un patrón de diseño estructural que te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.

Capas --> decoradores.

*BasePrice* --> Es la clase base, el comportamiento va a ser agregado por los decoradores.

*SpecialPriceDecorator* & *VipCustomerDecorator* pueden asignarse a la variable discount porque implementan la misma interfaz

## Dependency Injection

Tratamos de obtener la instancia de la clase que necesitemos de forma dinámica, sin acoplar el código a una implementación o a una instancia en particular.

Para poder flexibilizar esto podemos unsar el constructor de la clase **PersonDAOImpl** o en su defecto algún método capaz de configurar la futura instancia que necesitemos.

```ts
    private _conexion: IConnection;
    
    // constructor(private _conexion: IConnection) {}

    get connection(): IConnection {
        return this._conexion
    };
```

Existen diferentes variantes, dependiendo del framework que se use: anotaciones, decoradores *(@Inject)*...

Normalmente un framwork que soporta inyección de dependecias, posee un contenedor que es capaz de manejar las instancias de las clases que queremos usar.