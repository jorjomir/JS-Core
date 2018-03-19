function carFactory(obj) {
    let powerFunc=function () {
        if(obj.power<=90) {
            return 90;
        } else if(obj.power>90 && obj.power<=120) {
            return 120;
        } else {
            return 200;
        }
    };
    let volumeFunc=function () {
        if(obj.power<=90) {
            return 1800;
        } else if(obj.power>90 && obj.power<=120) {
            return 2400;
        } else {
            return 3500;
        }
    };
    let wheelsFunc=function () {
        if(obj.wheelsize%2===0) {
            return [obj.wheelsize-1, obj.wheelsize-1, obj.wheelsize-1, obj.wheelsize-1]
        } else return [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];
    };
    let car={
        model:obj.model,
        engine: {
            power: powerFunc(),
            volume: volumeFunc()
        },
        carriage: {
            type:obj.carriage,
            color: obj.color
        },
        wheels: wheelsFunc()
    };
    return car;
}
carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

);