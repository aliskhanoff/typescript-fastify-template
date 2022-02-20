
declare type Post = <T>(
        target: Object, 
        propertyKey: string | symbol, 
        descriptor: TypedPropertyDescriptor<T>) 
=> TypedPropertyDescriptor<T> | void;


declare type Get = <T>(
    target: Object, 
    propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<T>) 
=> TypedPropertyDescriptor<T> | void;