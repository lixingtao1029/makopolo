//随机数，m - n   m < n;
function randomNum(m,n){
    var num = parseInt(Math.random() * (n - m + 1) + m);
    return num;
}


//获取数组中的最大值  arr传递的数组
function getMax(arr){
    var maxNum = arr[0];
    for(var i = 1 ; i < arr.length ; i++){
        if(maxNum < arr[i]){
            maxNum = arr[i];
        }
    }
    return maxNum;
}

//获取数组中的最小值  arr传递的数组
function getMin(arr){
    var minNum = arr[0];
    for(var i = 1 ; i < arr.length ; i++){
        if(minNum > arr[i]){
            minNum = arr[i];
        }
    }
    return minNum;
}

//冒泡排序  arr 传递的数组.
function arrOrder(arr){
    //几轮
    for(var i = 0 ; i < arr.length - 1 ; i++){
        //每一轮进来之后开始比较
        for(var k = 0 ; k < arr.length - 1 - i ; k++){
            if(arr[k] > arr[k + 1]){
                var temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    }
    return arr;
}

//选择排序
function choiceOrder(arr){
    for(var i = 0 ; i < arr.length - 1 ; i++){
        for(var k = i + 1 ; k < arr.length ; k++){
            if(arr[i] > arr[k]){
                var temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
}

//随机颜色
function randomColor(){
		var
			r = randomNum(0,255),
			g = randomNum(0,255),
			b = randomNum(0,255);
			return "#" + systemChange(r,g,b);
	}
//转成16进制颜色
function systemChange(r,g,b){
		r = r.toString(16) < 2 ? '0' + r.toString(16):r.toString(16);
		g = g.toString(16) < 2 ? '0' + g.toString(16):g.toString(16);
		b = b.toString(16) < 2 ? '0' + b.toString(16):b.toString(16);
		return '' + r + g + b;
	}
	
//监听事件
 function addEventListener(ele,eventType,fn){
        return ele.addEventListener ? ele.addEventListener(eventType,fn) : ele.attchEvent('on' + eventType,fn);
    }
//阻止浏览器默认行为
function preventDefult(e){
		return e.preventDefult ? e.preventDefult() : e.returnValue = false;
	}
//时间转成字符串格式
function dateStr(d,sign){
    //如果没有传递符号，给一个默认的符号
    if(!sign){
        sign = "-";
    }else{
        sign = sign;
    }

    //获取d里面年月日时分秒
    var
        year = d.getFullYear(),
        month = d.getMonth() + 1,
        sun = d.getDate(),
        hours = d.getHours(),
        minutes = d.getMinutes(),
        seconds = d.getSeconds();
    return year + sign + mendZero(month) + sign + mendZero(sun) + ' ' + mendZero(hours) + ":" + mendZero(minutes) + ":" + mendZero(seconds);
}

//字符串补零
function mendZero(num){
    return num = num < 10 ? '0' + num : num;
}
//阻止事件冒泡
 function stopPropagation(e){
    return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}