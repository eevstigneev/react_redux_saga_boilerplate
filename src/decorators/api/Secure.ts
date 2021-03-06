import {getToken, isExpiredToken} from 'src/utils/storage/storage.token';
import type {Token} from 'src/store/auth/auth.interfaces';

export function Secure(): MethodDecorator {
  return (target, _key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const {value: originalMethod, ...restDescriptorProps} = descriptor;
    const secureDecorator = (...args: Parameters<typeof originalMethod>): ReturnType<typeof originalMethod> => {
      const token = getToken<Token>();
      if (token && !isExpiredToken(token)) {
        return originalMethod.apply(target, args);
      }
      throw Error('INVALID_CREDENTIALS'); // @todo add message
    };

    return {
      value: secureDecorator,
      ...restDescriptorProps,
    } as PropertyDescriptor & {value: typeof secureDecorator};
  };
}
