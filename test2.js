const car1 = {
    id: 1,
    brand: 'Лада',
    year: 1993
};

const car2 = {
    id: 2,
    brand: 'Бэха',
    year: 2002,
    owner: {
        name: 'Мефистофель',
        id: 666
    }
};

const carsArr = [car1.owner.name, car2.owner.name];

//console.log(carsArr);

let car3;

printOwner(car1);
printOwner(car2);
printOwner(car3);

function printOwner(entity) {
    if (entity && entity.owner) {
        console.log(entity.owner.name)
    } else {
        console.log('А нету(')
    }
}

let mark1 = getMark(15);

console.log(mark1);

function getMark(raiting) {
    if (rating >= 0 && rating < 20) {
        return 'F';
    } else if (rating >= 20 && rating < 40) {
        return 'E';
    } else if (rating >= 40 && rating < 60) {
        return 'D';
    } else if (rating >= 40 && rating < 60) {
        return 'C';
    } else if (rating >= 75 && rating < 90) {
        return '??????';
    } else if (rating >= 40 && rating < 60) {
        return 'B';
    }
}

function getMark2(rating) {
    switch (true) {
        case rating >= 0 && rating < 20:
            return 'F';
        case rating >= 20 && rating < 40:
            return 'E';
        case rating >= 40 && rating < 60:
            return 'D';
        case rating >= 60 && rating < 75:
            return 'C';
        case rating >= 75 && rating < 90:
            return 'B';
        case rating >= 90 && rating < 100:
            return 'A';
    }
}

let b = 568054; // 28
console.log(calcDigitsSum(b));

function calcDigitsSum(a) {
    let result = 0;

    while (a !== 0){
        result += a % 10;
        a = Math.floor(a / 10)
    }

    return result;
}

const a = 10;
let b;

a > 0 ? console.log(11111) : console.log (22222);
b = a > 0 ?100 : -100;

console.log(b);

//if (a > 0) {
//    console.log(11111);
//} else {
//    console.log(22222);
//}