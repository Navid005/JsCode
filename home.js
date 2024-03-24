
const navid= [50,107, 'jack', 83, 'killer', 'son', true];
const string=[]
navid.forEach(x => {
    if (typeof(x)=='string'){
        string.push(x);
    }
}
);
console.log(string);



const navid= [50,107, 'jack', 83, 'killer', 'son', true];
const number=[]
navid.forEach(x => {
    if (typeof(x)=='number'){
        number.push(x);
    }
});
function y(a,b){
    return a-b
}
number.sort(y);
console.log(number);



const navid= [50,107, 'jack', 83, 'killer', 'son', true];
const string=[]
navid.forEach(x => {
    if (typeof(x)=='string'){
        string.push(x);
    }
}
);
const rev=string.toReversed();
    console.log(rev);



const string=['jack', 'killer', 'son'];
const number=[50, 107, 83];
const combine = string.concat(number);
console.log(combine);


const combine=['jack', 'killer', 'son', 50, 107, 83 ];
combine.splice(3,3);
console.log(combine);

