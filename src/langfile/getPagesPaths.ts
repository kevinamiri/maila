// Static methods for creating Success and Error instances
class Result<T, E> {
  // Instance method for pattern matching
  matchWith(pattern: { Success: (result: Success<T>) => any; Error: (result: Error<E>) => any }) {
    if (this instanceof Success) {
      return pattern.Success(this);
    } else if (this instanceof Error) {
      return pattern.Error(this);
    }
  }
}

class Success<T> extends Result<T, unknown> {
  value: T;

  constructor(value: T) {
    super();
    this.value = value;
  }
}

class Error<E> extends Result<unknown, E> {
  value: E;

  constructor(value: E) {
    super();
    this.value = value;
  }
}

const isNil = (x) => x === null || typeof x === 'undefined';

/**
 * Get .pagesPaths from pluginOptions
 * @sig Options -> Result String[]
 * @param {{pagesPaths?: string[]}} options plugin options
 * @return {Result<string[], string>} pagesPaths Result
 */
const getPagesPaths = (options: { pagesPaths?: string[] }): Result<string[], string> => {
  // Return an error if plugin options are null or undefined
  if (isNil(options)) {
    return new Error("Null plugin options");
  }

  const { pagesPaths } = options;

  // Return an error if pluginOptions.pagesPaths are null or undefined
  if (isNil(pagesPaths)) {
    return new Error("Null pluginOptions.pagesPaths");
  }

  // Additional validations (e.g., checking if pagesPaths is an array or empty) can be added here if needed

  // Return the pagesPaths as a successful result
  return new Success(pagesPaths);
};

export default getPagesPaths;
