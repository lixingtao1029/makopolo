function ZY() {
    this.osImgBox = document.querySelector('.sImgBox');
    this.osImgBoxLi = document.querySelectorAll('.sImgBox li');
    this.aSpan = document.querySelectorAll('.btnBox span');
    this.oShowImg = document.querySelector('.show>img');
    this.oGlass = document.querySelector('.glass');
    this.oGlassImg = this.oGlass.querySelector('img');
    this.thisoShow = document.querySelector('.show');
    this.oShade = document.querySelector('.shade');
    this.oShow = document.querySelector('.show');
    this.distance = this.osImgBoxLi[0].offsetWidth;
    this.osImgBox.style.width = this.distance * this.osImgBoxLi.length + 'px';
    this.count = 0;
    this.init();
}
ZY.prototype = {
    init: function () {
       this.changeImgEvent();
    },
    toImg: function () {
        move(this.osImgBox, { 'left': -this.distance * this.count });
    },
    nextImg: function () {        
        if (this.count >= this.osImgBoxLi.length - 4) {
            this.count = this.osImgBoxLi.length - 4
            } else {
            this.count++;
        }   
    },
    preLi: function () {
            if (this.count <= 0) {
                this.count = 0;
            } else {
                this.count--;
            }    
    },
    moveSmallImg : function(samllImg){
        this.oGlassImg.src = samllImg;
        this.oShowImg.src = samllImg;
    },
    noneImg : function(){
        this.oShade.style.display = 'none';
        this.oGlass.style.display = 'none';
    },
    blockImg : function(){
        this.oShade.style.display = 'block';
        this.oGlass.style.display = 'block';
    },
    moveImg : function(e , left, top){
        e = e || window.event;
        var
            l = e.pageX - left - this.oShade.offsetWidth / 2,
            t = e.pageY - top - this.oShade.offsetHeight / 2;
        l = l < 0 ? 0 : (l > 200 ? 200 : l);
        t = t < 0 ? 0 : (t > 200 ? 200 : t);
        this.oShade.style.left = l + 'px';
        this.oShade.style.top = t + 'px';
        this.moveGlassImg(l,t);
    },
    moveGlassImg : function(l,t){
        this.oGlassImg.style.left = -2 * l + 'px'; 
        this.oGlassImg.style.top = -2 * t + 'px';
    },
    changeImgEvent : function(){
        var _this = this;
        this.aSpan[0].onclick = function(){
            _this.preLi();
            _this.toImg();   
        },
        this.aSpan[1].onclick = function(){
            _this.nextImg();
            _this.toImg();
        }
        for(let i = 0, k = this.osImgBoxLi.length; i < k ;i ++){
            var _this = this;
            this.osImgBoxLi[i].onmouseover = function(){
                _this.moveSmallImg(this.firstElementChild.src);
            }
        }
        this.oShow.onmouseover = function(e){
            _this.blockImg();
        }
        this.oShow.onmouseout = function(e){
            _this.noneImg();
        }
        this.oShow.onmousemove = function(e){
            _this.moveImg(e,this.offsetLeft,this.offsetTop);
        }
    }
    
}
new ZY();