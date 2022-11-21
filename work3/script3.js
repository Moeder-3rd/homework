var show = "";
for(var i=1;i<=9;i++) { 
    for(var j=1;j<=i;j++) { 
        show =show+ j+"x"+i+"="+i*j+'\t'
    }
    show=show+'\n'
}
console.log(show);