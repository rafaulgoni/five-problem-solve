const Largest=(num)=>{
    let largest=num[0];
    for(let n of num)
    {
        if(n>largest)
        {
            largest=n;
        }
    }
    return largest;
    
}
console.log(Largest([1,5,3]))