
let perimeterConversion = () => {
    let length = parseInt(prompt("what is the length of the parallelogram in cm: "));
    let breadth = parseInt(prompt("what is the breath of the parallelogram in cm: "));
    let formular = (length + breadth) * 2;
    alert("the perimeter of the parallelogram is = "+ formular+"cm");
}
perimeterConversion();