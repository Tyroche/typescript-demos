function CacheResponse<T extends TypedPropertyDescriptor<(...args: any[]) => any>>(): (...args: any[]) => T {
  let cache: { [key: string]: { value: any } } = {};

  return function (target: any, propertyKey: string, descriptor: T): T {
    const originalMethod: () => any = descriptor.value;

    descriptor.value = function (...args: any[]): any {
        let key: string = args.join('_');

        if (!cache[key]) {
            const result = originalMethod.apply(this, args);

            cache[key] = {
                value: result
            };

            console.log("Caching:", result);
        }

      console.log("Cached value:", cache[key].value);
      return cache[key].value;
    };

    return descriptor;
  };
}

class Summer {
    @CacheResponse()
    public sum(x: number, y: number) {
        return x + y;
    }
}

var newSummer = new Summer();

newSummer.sum(3, 4);
newSummer.sum(3, 4);
newSummer.sum(3, 5);
newSummer.sum(4, 4);

