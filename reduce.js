function extractValue(arr, key) {
    return arr.reduce(function(acc, next){
        acc.push(next[key]);
        return acc;
    },[]);
}

function vowelCount(str) {
    const vowels = 'aeiou';
    return str.split('').reduce(function(acc, next){
        let lowerCase = next.toLowerCase();
        if(vowels.indexOf(lowerCase) !== -1){
            if(acc[lowerCase]){
                acc[lowerCase]++;
            } else {
                acc[lowerCase] = 1;
            }
        }
        return acc;
    },{});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,i){
        acc[i][key] = value;
        return acc;
    },arr);
}

function partition(arr, func){
    return arr.reduce(function(acc,next){
        if(func(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}