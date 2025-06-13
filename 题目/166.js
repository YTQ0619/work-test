/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    // 1.可以整除
    if(numerator%denominator==0){
        return new String(numerator/denominator);
    }else{
        //补零竖式计算
        let result='';
        // 先判断结果是否为负 |a+b|<|a|+|b|即两数异号
        let sunAbs=Math.abs(numerator+denominator);
        numerator=Math.abs(numerator);
        denominator=Math.abs(denominator);
        if(sunAbs<numerator+denominator){
            result+='-'
        }
        //1.先算整数部分
        result+=(Math.floor(numerator/denominator)+'.') //此处取整不要用parseInt,会出现科学计数法取整后结果有异
        //余数不为0时补零（乘10）再除 除数
        let remainder=numerator%denominator;
        let remainderArr=[remainder]
        while(remainder){
            result+=Math.floor(remainder*10/denominator);
            remainder=remainder*10%denominator;
            // 判断是否出现过当前余数，有则为有限循环小数
           let index= remainderArr.indexOf(remainder);
           if(index!=-1){
               let decimalPointIndex=result.indexOf('.');
               result=result.slice(0,index+decimalPointIndex+1)+'('+result.slice(index+decimalPointIndex+1,)+')';
               break;
           }else{
               remainderArr.push(remainder)
           }
        }
        return result;
    }
};
