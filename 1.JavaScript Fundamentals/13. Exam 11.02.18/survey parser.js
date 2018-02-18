function surveyParser(str) {
    let patternforText=/<text[^?]*>([\s\S]*?)(\[...+\])<\/text>/ig;
    let valRegex=/<val>(\d+)<\/val>(\d+)/igm;
    let svgRegex=/<svg[^?]*>([\s\S]*?)<\/svg>/igm;
    if(!str.match(svgRegex)) {
        console.log("Invalid format");
        return;
    }
    let match;
    let votes=[];
    let umnojeniq=[];
    while(match=valRegex.exec(str)) {
        votes.push(Number(match[1]));
        umnojeniq.push(Number(match[2]));
    }
    let ratings=[];
    for (let i = 0; i < votes.length; i++) {
        ratings.push(votes[i]*umnojeniq[i]);
    }
    let sumofRatings=0;
    //ratings sum
    for (let i = 0; i < ratings.length; i++) {
        sumofRatings+=ratings[i];
    }
    //votes sum
    let votesSum=0;
    for (let i = 0; i < votes.length; i++) {
        votesSum+=umnojeniq[i];
    }
    let average=sumofRatings/votesSum;
    //console.log(average.toFixed(2));
    let m;
    let text="";
    while (m=patternforText.exec(str)) {
        text=m[2];
    }
    let resulttext = text.substring(1, text.length-1);
    //console.log(resulttext);
    let finalresult=resulttext+": "+average.toFixed(2);
    if(finalresult===": NaN") {
        console.log("No survey found")
    } else {
        if(finalresult.endsWith("0")) {
            console.log(resulttext+": "+average.toFixed(1));
        } else {
            console.log(finalresult);
        }

    }



}
surveyParser("<p>Our guests may enjoy a special menu of freshly caught seafood.</p><br><svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat><cat><g><val>1</val>5</g><g><val>5</val>13</g>");
