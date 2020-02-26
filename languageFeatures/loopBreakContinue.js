let i = 0;
for (; i<12; i++) { //i is initialized before the loop is declared
    if (i==8) {
        break; //loop is broken out of entirely
    }
}

console.log(i) // 8


for (let i=0; i<4; i++) {
    if (i==2) {
        continue //loop is restarted at next iteration
    }
    console.log(i) // 2 never gets logged
}