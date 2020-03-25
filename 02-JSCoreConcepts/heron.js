// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

p = 0.5 * (b + c + h);

S = Math.sqrt(p * (p - b) * (p - c) * (p - h));

let a = () => ( `Pole trókąta o bokach ${b}, ${c} oraz ${h} wynosi ${S}.`);

console.log(a)