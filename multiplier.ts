interface MultiplyValues {
    value1: number,
    value2: number,
}

const parseArguments = (args: Array<String>): MultiplyValues => {
    if (args.length < 4) throw new Error("Not enough arguments");
    if (args.length > 4) throw new Error("Too many arguments");

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    } else {
        throw new Error('Provided vales were not numbers');
    }
}

const multiplicator = (a: number, b: number, print_text: String) => {
    console.log(print_text, a * b);
}

try {
    const { value1, value2 } = parseArguments(process.argv);
    multiplicator(value1, value2, `multiplied ${value1} and ${value2} and the result is `);
} catch (err) {
    console.log(err.message);
}