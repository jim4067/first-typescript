const multiplacator = (a: number, b: number, print_text: string) => {
    console.log(print_text, a * b);
}

const a: number = Number(process.argv[2]);
const b: number = Number(process.argv[3]);

multiplacator(a, b, `multiplied ${a} and ${b} and the result turned out to be`)