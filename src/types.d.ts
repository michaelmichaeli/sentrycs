/// <reference types="@testing-library/jest-dom" />
/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveClass(className: string): R;
    toHaveLength(length: number): R;
    toHaveTextContent(text: string): R;
    toHaveBeenCalled(): R;
    toHaveBeenCalledWith(...args: any[]): R;
    toBe(expected: any): R;
    toEqual(expected: any): R;
    toBeDefined(): R;
    toBeUndefined(): R;
    toThrow(message?: string | Error | RegExp): R;
    not: jest.Matchers<R>;
  }

  interface Mock<T = any, Y extends any[] = any> {
    (...args: Y): T;
    mockImplementation(fn: (...args: Y) => T): this;
    mockReturnValue(value: T): this;
    mockResolvedValue(value: Awaited<T>): this;
    mockRejectedValue(value: any): this;
  }

  function mock(moduleName: string, factory?: () => any): typeof jest;
  function fn<T = any>(): Mock<T>;
  function clearAllMocks(): typeof jest;

  type MockedFunction<T extends (...args: any[]) => any> = {
    (...args: Parameters<T>): ReturnType<T>;
  } & {
    [K in keyof Mock<ReturnType<T>, Parameters<T>>]: Mock<ReturnType<T>, Parameters<T>>[K];
  };

  type Mocked<T> = {
    [P in keyof T]: T[P] extends (...args: any[]) => any
      ? MockedFunction<T[P]>
      : T[P] extends object
      ? Mocked<T[P]>
      : T[P];
  } & T;
}

declare function describe(name: string, fn: () => void): void;
declare function test(name: string, fn: () => void | Promise<void>): void;
declare function beforeAll(fn: () => void | Promise<void>): void;
declare function beforeEach(fn: () => void | Promise<void>): void;
declare function expect<T = any>(actual: T): jest.Matchers<T>;

declare module '@testing-library/react' {
  export interface RenderResult {
    container: HTMLElement;
    getByText: (text: string) => HTMLElement;
    getByTestId: (id: string) => HTMLElement;
    getAllByTestId: (id: string) => HTMLElement[];
    getByRole: (role: string, options?: { name?: string | RegExp }) => HTMLElement;
  }

  export function render(component: React.ReactElement): RenderResult;
  
  export const screen: {
    getByText: (text: string) => HTMLElement;
    getByTestId: (id: string) => HTMLElement;
    getAllByTestId: (id: string) => HTMLElement[];
    getByRole: (role: string, options?: { name?: string | RegExp }) => HTMLElement;
  };

  export const fireEvent: {
    click: (element: HTMLElement) => void;
    change: (element: HTMLElement, options: { target: { value: string } }) => void;
    keyDown: (element: HTMLElement, options: { key: string }) => void;
    keyUp: (element: HTMLElement, options: { key: string }) => void;
  };
}

declare module '@testing-library/react-hooks' {
  export interface RenderHookResult<TProps, TResult> {
    result: {
      current: TResult;
    };
    rerender: (props?: TProps) => void;
    unmount: () => void;
    waitForNextUpdate: () => Promise<void>;
  }

  export function renderHook<TProps, TResult>(
    callback: (props: TProps) => TResult,
    options?: {
      initialProps?: TProps;
      wrapper?: React.ComponentType;
    }
  ): RenderHookResult<TProps, TResult>;

  export function act(callback: () => void | Promise<void>): Promise<void>;
}

declare module 'axios' {
  interface AxiosInstance {
    get<T = any>(url: string, config?: any): Promise<T>;
    post<T = any>(url: string, data?: any, config?: any): Promise<T>;
    put<T = any>(url: string, data?: any, config?: any): Promise<T>;
    delete<T = any>(url: string, config?: any): Promise<T>;
  }

  interface AxiosStatic extends AxiosInstance {
    create(config?: any): AxiosInstance;
  }

  const axios: AxiosStatic;
  export default axios;
} 