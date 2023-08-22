/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
	key: T;
	value: U;
}

const stringNumberPair: KeyValuePair<string, number> = {
	key: "age",
	value: 25,
};

const booleanStringPair: KeyValuePair<boolean, string> = {
	key: true,
	value: "enabled",
};

const numberBooleanPair: KeyValuePair<number, boolean> = {
	key: 5,
	value: false,
};
export {};
