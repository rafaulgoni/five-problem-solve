const sumofDigit=(num)=>{
    let sum=0;
    while(num>0)
    {
        sum+=num%10;
        num=Math.floor(num/10);
    }
    return sum;
}
const result=sumofDigit(123456789);
console.log(result);