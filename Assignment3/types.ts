type Merge<T, U> = T & U;

type PartialKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type ReadonlyKeys<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

type Modify<T, U> = Omit<T, keyof U> & U;
