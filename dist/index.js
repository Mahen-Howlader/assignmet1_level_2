"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
function filterByRating(items) {
    const topRating = items.filter((val, index) => val.rating >= 4);
    return topRating;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
function concatenateArrays(...arrays) {
    return arrays.flat();
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model ${this.model}`;
    }
}
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    return value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    const heighest = products.reduce((max, product) => {
        return product.price >= max.price ? product : max;
    });
    return heighest;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
async function squareAsync(n) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                resolved(n * n);
            }
        }, 1000);
    });
}
