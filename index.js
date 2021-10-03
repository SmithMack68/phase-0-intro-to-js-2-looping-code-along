const names = (['Lisa', 'Kaitlin', 'Jan'], 'surprise');

function writeCards(names, occasion) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    debugger;
    }
    return newArray;
}
writeCards(names, occasion);


function countDown() {
    let x = 10;
    while (0 <= x) {
    console.log(x);
    x--;    
    }
}
countDown();