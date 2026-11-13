function greet(name) {
    return `Hello, ${name}!`;
}

if (require.main === module) {
    console.log(greet("DevOps"));
}

module.exports = { greet };
