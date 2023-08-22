/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<FirstObjectType extends object, SecondObjectType extends object>(
	objA: FirstObjectType,
	objB: SecondObjectType,
) {
	return Object.assign(objA, objB);
}
merge({ name: "Barbara" }, { age: 17 });
export {};
