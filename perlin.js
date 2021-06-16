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


for(i = 1 ; i != height*width;++i){
    let y = randint(0,height-1);
    let x = randint(0,width-1);
    let n1 = randint(0,10);
    let n2 = randint(0,10);
    let n3 = randint(0,10);
    let n4 = randint(0,10);
    map[y][x] = (n1+n2+n3+n4)/4;
}

for(let y = 0; y != height;y++){
    let str = "";
    for(let x = 0;x != width;x++){
        if (map[y][x] <= 2)
            str += "░";
        else if (map[y][x] >= 4 && map[y][x] <= 6)
            str += "#";
        else if (map[y][x] >= 7)
            str += "█";
        else 
            str += " "
    }
    console.log(str);
}