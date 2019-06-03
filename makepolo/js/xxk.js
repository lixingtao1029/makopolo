function TabCard(){
    this.omjmj = document.querySelectorAll('.xxk .mjmj li');
    this.omj = document.querySelectorAll('.xxk div');
    //console.log(this.omj);
    //console.log(1);
    this.init();
}
TabCard.prototype = {
    init : function(){
        this.addChoose();
    },
    addChoose : function(){
        for(let i = 0, k = this.omjmj.length; i < k; i++){
            this.omjmj[i].index = i;
            var _this = this;
            this.omjmj[i].onclick = function(){
                _this.cleanCont();
                _this.addContent(this.index);
            }
        }
    },
    addContent : function(index){
        for(let m = 0, n = this.omj.length; m < n; m++){
            this.omj[index].classList.add('active');
        }
    },
    cleanCont : function(){
        for(let l = 0, j = this.omj.length; l < j; l ++){
            this.omj[l].classList.remove('active');
        }
    }

}
new TabCard();