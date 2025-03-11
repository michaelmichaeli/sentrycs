import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
    }
    
    interface Expect {
      toBeInTheDocument(): void;
      toHaveClass(className: string): void;
    }
    
    interface InverseAsymmetricMatchers {
      toBeInTheDocument(): void;
      toHaveClass(className: string): void;
    }
    
    type Mock<T = any> = jest.Mock<T>;
    
    interface MockedFunction<T extends (...args: any[]) => any> {
      (...args: Parameters<T>): ReturnType<T>;
      mockImplementation: (implementation?: (...args: Parameters<T>) => ReturnType<T>) => MockedFunction<T>;
      mockReturnValue: (value: ReturnType<T>) => MockedFunction<T>;
      mockResolvedValue: (value: Awaited<ReturnType<T>>) => MockedFunction<T>;
      mockRejectedValue: (value: any) => MockedFunction<T>;
      mockReturnThis: () => MockedFunction<T>;
      mockName: (name: string) => MockedFunction<T>;
      getMockName: () => string;
      mock: {
        calls: Parameters<T>[];
        instances: any[];
        invocationCallOrder: number[];
        results: any[];
      };
      mockClear: () => MockedFunction<T>;
      mockReset: () => MockedFunction<T>;
      mockRestore: () => MockedFunction<T>;
      mockReturnValueOnce: (value: ReturnType<T>) => MockedFunction<T>;
      mockResolvedValueOnce: (value: Awaited<ReturnType<T>>) => MockedFunction<T>;
      mockRejectedValueOnce: (value: any) => MockedFunction<T>;
      mockImplementationOnce: (implementation?: (...args: Parameters<T>) => ReturnType<T>) => MockedFunction<T>;
    }
    
    interface Mocked<T> {
      [K in keyof T]: T[K] extends (...args: any[]) => any
        ? MockedFunction<T[K]>
        : T[K] extends object
        ? Mocked<T[K]>
        : T[K];
    }
  }
} 