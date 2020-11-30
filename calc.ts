type Operation = 'add' | 'multiply' | 'divide';

type Result = number;

const calculator = (a: number, b: number, op: Operation): Result => {
    switch (op) {
        case 'add':
            return a + b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error("Can't divide by zero");
            return a / b;
        default:
            throw new Error("operation is not add, mutliply or divide ");
    }
}

try {
    console.log(calculator(2, 4, "add"));
} catch (err) {
    console.log("Something went wrong", err.message)
}

export { calculator };