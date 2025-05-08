
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase()
    }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const topRating = items.filter((val, index) => val.rating >= 4)
    return topRating
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}


class Vehicle {
    private make: string;
    private year: number
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}
class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }
    getModel() {
        return `Model ${this.model}`
    }
}


function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    return value * 2
}


interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null
    }

    const heighest = products.reduce((max, product) => {
        return product.price >= max.price ? product : max;
    });
    return heighest

}

const products: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    }
    return "Weekday";
}


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                resolved(n * n)
            }
        }, 1000);
    })
}

