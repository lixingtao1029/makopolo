function TabCard(){
    this.oLi = document.querySelectorAll('.caseTop ul li');
    this.oDiv = document.querySelectorAll('.caseTop > div');
    this.init();
    //console.log(this.oDiv);
}
TabCard.prototype = {
    init : function(){
        this.addClass();
    },
    addClass : function(){
        var _this = this;
        for(let i = 0, k = this.oLi.length; i < k; i++){
            this.oLi[i].index = i;
            this.oLi[i].onclick = function(){
                _this.cleanText();
                this.classList.add('caseOn');
                _this.cleanClass();
                _this.addContent(this.index);
            }
        }
    },
    addContent : function(index){
        for(let m = 0, n = this.oDiv.length; m < n; m++){
            this.oDiv[index].classList.add('active');
        }
    },
    cleanClass : function(){
        for(let l = 0, p = this.oDiv.length; l < p; l ++){
            this.oDiv[l].classList.remove('active');
        }
    },
    cleanText : function(){
        for(let i = 0, k = this.oLi.length; i < k ;i++){
            this.oLi[i].classList.remove('caseOn');
        }
    }
}
new TabCard();