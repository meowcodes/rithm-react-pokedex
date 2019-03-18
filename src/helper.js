function pickRandom (items, num){
    const returnArr = [];

    for(let i = 0; i < num; i++){
        const index = Math.floor(Math.random()*items.length);
        returnArr.push(items[index]);
    }

    return returnArr;
}

export default pickRandom;