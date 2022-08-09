# Patrones de diseño en Deno & TS:

1.  Patrones creacionales (Problemas de instancia o de creación de objetos)
    - [Singleton](#Singleton)
    - [Factory](#Factory)
    - [Abstract Factory](#Abstract-Factory)

2.  Patrones estructurales (Relación entre clases)
    - [Adapter](#Adapter)
    - [Decorator](#Decorator)
    - [Proxy](#Proxy)

3.  Patrones de comportamiento (Interacción y responsabilidades entre clases)
    - [Command](#Command)
    - [Observer](#Observer)
    - [Strategy](#Strategy)


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


 - Pasaríamos de un código con esta dependencia a la clase Connection:

```ts
    private _conexion: Connection;

    constructor(conexion = new MySQLConnection()) {
        this._conexion = conexion;
    }
```
- a este otro:
    
    mediante este código esta clase ya no es responsable de la instanciación de la clase **Connection**
```ts
    private _conexion: IConnection;

    // constructor(private _conexion: IConnection) {}

    get connection(): IConnection {
        return this._conexion
    };

    set connection(conexion: IConnection) {
        this._conexion = conexion;
    };
```

Existen diferentes variantes, dependiendo del framework que se use: anotaciones, decoradores *(@Inject)*...

Normalmente un framwork que soporta inyección de dependecias, posee un contenedor que es capaz de manejar las instancias de las clases que queremos usar.

### Dependency inversion (Mejora) SOLID

Mediante el uso de una interfaz *IConnection* dejamos fuera la implementación de esta clase, por el método o por el constructor.
De esta forma es posible pasar por parámetro del constructor o mediante el set, cualquier clase concreta que implemente la interfaz.

No se depende de una implementación concreta si no de una interfaz.

## Proxy

Proxy es un patrón de diseño estructural que te permite proporcionar un sustituto o marcador de posición para otro objeto. Un proxy controla el acceso al objeto original, permitiéndote hacer algo antes o después de que la solicitud llegue al objeto original.

La clase *"proxy"* va a ser como un intermediario, un wrapper de la clase original, la cual tendrá un compotamiento adicional, para solucionar por ejemplo problemas de concurrencia.

## Command
Command es un patrón de diseño de comportamiento que convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud. Esta transformación te permite parametrizar los métodos con diferentes solicitudes, retrasar o poner en cola la ejecución de una solicitud y soportar operaciones que no se pueden realizar.

Como por ejemplo, el procesamiento de un pago en diferentes plataformas, clientes como puede ser (Stripe, Redsys);

## Observer

También llamado: Observador, Publicación-Suscripción, Modelo-patrón, Event-Subscriber, Listener

Observer es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando.

## Strategy

Strategy es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.

- En primer lugar definimos una interfaz base *PaymentStrategy* que va a implementar el método execute.

- En segundo lugar heredando de esta, definimos la interfaz *PaymentCardStrategy* añadiendo las propiedades necesarias para incluir una tarjeta de crédito

- En tercer lugar mediante la clase *MastercardStrategy* implementamos esta interfaz ya con las propiedades y métodos propios de una tarjeta de crédito.

Para poder hacer uso de todas las implementaciones que tengamos de *PaymentCardStrategy* en la clase Checkout, mediante el método setStrategy definimos la estrategia primero para usar luego el método *execute* que es el que ejecuta finalmente la lógica del algoritmo que se le pase --> llama al contexto que es el que sabe como hacer el pago.

```ts
  public setStrategy(context: PaymentStrategy) {
    this.context = context;
  }
```
