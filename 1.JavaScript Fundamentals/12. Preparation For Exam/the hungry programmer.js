function theHungryProgrammer(meals,cmds) {
    let eaten=0;
    for (let obj of cmds) {
        let line=obj.split(" ");
        if(line[0]==="Serve") {
            let tail=meals.pop();
            console.log(`${tail} served!`);
        } else if(line[0]==="Eat") {
            let head=meals.shift();
            eaten+=1;
            console.log(`${head} eaten`);
        } else if(line[0]==="Add") {
            meals.unshift(line[1]);
        } else if(line[0]==="Consume") {
            if(Number(line[1]>=0) && Number(line[2]<meals.length)) {
                meals.splice(Number(line[1]),Number(line[2])+1);
                eaten+=Number(line[2])-Number(line[1])+1;
                console.log("Burp!")
            }

        } else if(line[0]==="Shift") {
            if(Number(line[1]>=0) && Number(line[2]<meals.length)) {
                let temp=meals[Number(line[1])];
                meals[Number(line[1])]=meals[Number(line[2])];
                meals[Number(line[2])]=temp;
            }
        } else if(line[0]==="End") {
            if(meals.length===0) {
                console.log("The food is gone")
            } else {
                console.log("Meals left: " + meals.join(", "));
            }
            break;
        }
    }
    console.log("Meals eaten: "+eaten);
    //console.log(meals.join(" "));
}
theHungryProgrammer(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']
);