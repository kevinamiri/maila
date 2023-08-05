// Use TypeScript's Discriminated Unions for better type safety
type Result<T, E> = Success<T> | Failure<E>;

interface Success<T> {
  type: "success";
  value: T;
}

interface Failure<E> {
  type: "failure";
  value: E;
}

const Success = <T>(value: T): Success<T> => ({
  type: "success",
  value,
});

const Failure = <E>(value: E): Failure<E> => ({
  type: "failure",
  value,
});


const isNil = (x: any): boolean => x === null || typeof x === 'undefined';

const getPagesPaths = (options: { pagesPaths?: string[] }): Result<string[], string> => {
  if (isNil(options)) {
    return Failure("Null plugin options"); // Use your custom Failure type here
  }

  const { pagesPaths } = options;

  if (isNil(pagesPaths)) {
    return Failure("Null pluginOptions.pagesPaths"); // And here
  }

  return Success(pagesPaths);
};


const isEmpty = <T>(array: T[]): boolean => array.length === 0;

const not = (value: boolean): boolean => !value;

export const isInPagesPaths = (options: { pagesPaths?: string[] }, path: string): boolean | void => {
  const result = getPagesPaths(options);

  switch (result.type) {
    case "success":
      const filteredPaths = result.value.filter(pagePath => pagePath.includes(path));
      return not(isEmpty(filteredPaths));
    case "failure": // Use "failure" instead of "error"
      console.error(result.value);
      return;
  }
};
