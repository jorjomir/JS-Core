function pointInRectangle([x,y,xmin,xmax,ymin,ymax]) {
    if(x>=xmin && x<=xmax && y>=ymin && y<=ymax) {
        console.log("inside");
    }
    else {
        console.log("outside");
    }
}