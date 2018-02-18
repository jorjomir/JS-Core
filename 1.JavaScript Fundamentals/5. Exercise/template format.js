function templateFormat(arr) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    console.log("<quiz>");
    for (let i = 0; i < arr.length; i++) {
        if(i%2===0) {
            console.log("<question>");
            console.log(arr[i]);
            console.log("</question>");
        }
        else {
            console.log("<answer>");
            console.log(arr[i]);
            console.log("</answer>");
        }
    }
    console.log("</quiz>")
}
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);