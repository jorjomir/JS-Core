function moviePrices([demomovie,demoday]) {
    let movie=demomovie.toLowerCase();
    let day=demoday.toLowerCase();
    if(movie==="the godfather") {
        if(day==="monday") {
            console.log("12");
        }
        if(day==="tuesday") {
            console.log("10");
        }
        if(day==="wednesday") {
            console.log("15");
        }
        if(day==="thursday") {
            console.log("12.50");
        }
        if(day==="friday") {
            console.log("15");
        }
        if(day==="saturday") {
            console.log("25");
        }
        if(day==="sunday") {
            console.log("30");
        }
        else {
            console.log("error");
        }
    }
    if(movie==="schindler's list") {
        if(day==="monday") {
            console.log("8.50");
        }
        if(day==="tuesday") {
            console.log("8.50");
        }
        if(day==="wednesday") {
            console.log("8.50");
        }
        if(day==="thursday") {
            console.log("8.50");
        }
        if(day==="friday") {
            console.log("8.50");
        }
        if(day==="saturday") {
            console.log("15");
        }
        if(day==="sunday") {
            console.log("15");
        }
        else {
            console.log("error");
        }
    }
    if(movie==="casablanca") {
        if(day==="monday") {
            console.log("8");
        }
        if(day==="tuesday") {
            console.log("8");
        }
        if(day==="wednesday") {
            console.log("8");
        }
        if(day==="thursday") {
            console.log("8");
        }
        if(day==="friday") {
            console.log("8");
        }
        if(day==="saturday") {
            console.log("10");
        }
        if(day==="sunday") {
            console.log("10");
        }
        else {
            console.log("error");
        }
    }
    if(movie==="the wizard of oz") {
        if(day==="monday") {
            console.log("10");
        }
        if(day==="tuesday") {
            console.log("10");
        }
        if(day==="wednesday") {
            console.log("10");
        }
        if(day==="thursday") {
            console.log("10");
        }
        if(day==="friday") {
            console.log("10");
        }
        if(day==="saturday") {
            console.log("15");
        }
        if(day==="sunday") {
            console.log("15");
        }
        else {
            console.log("error");
        }
    }
    else {
        console.log("error");
    }
}
moviePrices("the Godfather", "Monday");