let n = 4;
for (let i = 1; i <= n; i++) {
    let str = " ";
    for(let j=0;j<=n-1-i;j++){
        str +=" "
    }
    for(let j=0;j<i;j++){
        str +="* "
    }
    console.log(str);
} 