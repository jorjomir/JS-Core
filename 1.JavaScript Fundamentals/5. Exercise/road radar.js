function roadRadar(arr) {
    let km=Number(arr[0]);
    let place=arr[1];
    if(place==="motorway") {
        if(km>130) {
            if(km-130<=20) {
                console.log("speeding");
            }
            else if(km-130>20 && km-130<=40) {
                console.log("excessive speeding");
            }
            else {
                console.log("reckless driving")
            }
        }
        else {
            return false;
        }
    }
    if(place==="interstate") {
        if(km>90) {
            if(km-90<=20) {
                console.log("speeding");
            }
            else if(km-90>20 && km-90<=40) {
                console.log("excessive speeding");
            }
            else {
                console.log("reckless driving")
            }
        }
        else {
            return false;
        }
    }
    if(place==="city") {
        if(km>50) {
            if(km-50<=20) {
                console.log("speeding");
            }
            else if(km-50>20 && km-50<=40) {
                console.log("excessive speeding");
            }
            else {
                console.log("reckless driving")
            }
        }
    }
    else if(place==="residential") {
        if(km>20) {
            if(km-20<=20) {
                console.log("speeding");
            }
            else if(km-20>20 && km-20<=40) {
                console.log("excessive speeding");
            }
            else {
                console.log("reckless driving")
            }
        }
        else {
            return false;
        }
    }
}
roadRadar([40, "city"]);