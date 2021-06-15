function randint(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
var map = [];

var width   = 100;
var height  = 100;

for(let y = 0; y != height ; ++y){
    let ar = [];
    for(let x = 0; x != width; ++x){
        ar.push(" ");
    }
    map.push(ar);
}


for(let y = 0; y != height;y++){
    for(let x = 0; x != width;x++){
        map[y][x] = randint(0,10);
    }
}

for(let y = 0; y != height;y++){
    let str = "";
    for(let x = 0;x != width;x++){
        if (map[y][x] <= 2)
            str += " ";
        else if (map[y][x] >= 4 && map[y][x] <= 6)
            str += "░";
        else if (map[y][x] >= 7)
            str += "▓";
        
    }
    console.log(str);
}