function matemaatilisedArvutused(a, b) {
    let summa = a + b;
    let vahe = a - b;  
    let jagatis = Math.floor(a / b);
    let korrutis = a * b;

    return { summa, vahe, jagatis, korrutis };
}

function testMatemaatilisedArvutused() {
    // Test cases
    const testCases = [
        { a: 10, b: 5 },
        { a: 8, b: 2 },
        { a: 15, b: 3 }
    ];

    for (const testCase of testCases) {
        const { a, b } = testCase;
        const result = matemaatilisedArvutused(a, b);
        console.log(`Input: a=${a}, b=${b}`);
        console.log('Result:', result);
        console.log('---');
    }
}

// Run the test
testMatemaatilisedArvutused();