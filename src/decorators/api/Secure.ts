export function Secure() {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const {value: originalMethod, ...restDescriptorProps} = descriptor;
    const secureDecorator = (...args: Parameters<typeof originalMethod>): ReturnType<typeof originalMethod> => {
      return originalMethod.apply(target, args);
    };
    //
    return {
      value: secureDecorator,
      ...restDescriptorProps,
    } as PropertyDescriptor & {value: typeof secureDecorator};
  };
}
