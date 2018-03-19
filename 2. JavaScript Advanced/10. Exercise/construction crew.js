function solution(obj) {
    if(obj.handsShaking) {
        obj.bloodAlcoholLevel+=(obj.weight*obj.experience)/10;
        obj.handsShaking=false;
    } return obj;
}
console.log(solution({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: false }
));