const products = {
    one: "один",
    two: "два",
    three: "три",
};
for (const propName in products) {
    console.log(propName + ' = ' + products[propName]);
}


/*
Задание.
Используя цикл for in переберите объект products, ведите в консоль
имя свойства, значение свойства.
*/