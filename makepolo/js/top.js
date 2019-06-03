function Top(){
    this.oP = document.querySelectorAll('.topLeft p span a');
    this.oPa = document.querySelectorAll('.topRight p a'); 
    this.oInput = document.querySelectorAll('.topLeft p input')
    this.oP1 = document.querySelector('.topRight .p1');
    this.oP2 = document.querySelector('.topRight .p2');
    this.oP3 = document.querySelector('.topRight .p3');
    this.oP4 = document.querySelector('.topRight .p4');
    this.oP5 = document.querySelector('.topRight .p5');
    this.oT1 = document.querySelector('.topRight .t1');
    this.oT2 = document.querySelector('.topRight .t2');
    this.oT3 = document.querySelector('.topRight .t3');
    this.oT4 = document.querySelector('.topRight .t4');
    this.oT5 = document.querySelector('.topRight .t5');
    this.oDiv = document.querySelector('.side_l1');
    this.oLi1 = document.querySelector('.navLeft')
    //console.log(this.oInput)
    this.oLi = document.querySelectorAll('.search ul li')
    this.ap = document.querySelector('.p3');
    console.log(1)
    
    //console.log(this.oLi)
    this.init();
}
Top.prototype = {
    init : function(){
        this.eventBind();
        this.change();
        //console.log(this.oP);
    },
    change : function(){
        if(sessionStorage.getItem('uname')){
            this.ap.style.display = "none";
            
        }
    },    
    eventBind : function(){
        let _this = this;
        for(let i = 0, k = this.oP.length - 1; i < k; i++){
            this.oP[i].addEventListener('mouseover',()=>{
                _this.oP[i].style.color = "#3863c9";
            });
            this.oP[i].addEventListener('mouseout',()=>{
                _this.oP[i].style.color = '#000'
            })  
        }
        for(let m = 1, n = this.oPa.length; m < n; m++){
            this.oPa[m].addEventListener('mouseover',()=>{
                _this.oPa[m].style.color = "#3863c9";
            })
            this.oPa[m].addEventListener('mouseout',()=>{
                _this.oPa[m].style.color = '#000'
            })
        }
        this.oP1.onmouseover = function(){
            //console.log(1);
            _this.oT1.style.display = "block"
        }
        this.oP1.onmouseout = function(){
            _this.oT1.style.display = "none"
        }
        this.oT1.onmouseover = function(){
            
            _this.oT1.style.display = "block"
        }
        this.oT1.onmouseout = function(){
            _this.oT1.style.display = "none"
        }
        this.oP2.onmouseover = function(){
            //console.log(1);
            _this.oT2.style.display = "block"
        }
        this.oP2.onmouseout = function(){
            _this.oT2.style.display = "none"
        }
        this.oT2.onmouseover = function(){
            _this.oT2.style.display = "block"
        }
        this.oT2.onmouseout = function(){
            _this.oT2.style.display = "none"
        }
        this.oP3.onmouseover = function(){
            //console.log(1);
            _this.oT3.style.display = "block"
        }
        this.oP3.onmouseout = function(){
            _this.oT3.style.display = "none"
        }
        this.oT3.onmouseover = function(){
            _this.oT3.style.display = "block"
        }
        this.oT3.onmouseout = function(){
            _this.oT3.style.display = "none"
        }
        this.oP4.onmouseover = function(){
            //console.log(1);
            _this.oT4.style.display = "block"
        }
        this.oP4.onmouseout = function(){
            _this.oT4.style.display = "none"
        }
        this.oT4.onmouseover = function(){
            _this.oT4.style.display = "block"
        }
        this.oT4.onmouseout = function(){
            _this.oT4.style.display = "none"
        }
        this.oP5.onmouseover = function(){
            //console.log(1);
            _this.oT5.style.display = "block"
        }
        this.oP5.onmouseout = function(){
            _this.oT5.style.display = "none"
        }
        this.oT5.onmouseover = function(){
            _this.oT5.style.display = "block"
        }
        this.oT5.onmouseout = function(){
            _this.oT5.style.display = "none"
        }
        // for(let i = 0, k = this.oLi.length; i < k; i++){
        //     this.oLi[i].onclick = function(){
        //         //console.log(1);
        //         _this.oLi[i].style.color = "#3863c9"
        //         //let aLi = _this.oLi[i].siblings();
        //         let aLi = $(_this.oLi[i]).siblings();
        //         //aLi.style.color = "#333333"
        //         //console.log(aLi.index())
        //         console.log($('.search ul li').index(''))
        //     }
        // }
        $(document).ready(function(){
            $(".search ul li").click(function(){
              //console.log($(this).index());
              _this.oLi[$(this).index()].style.color = "#3863c9";
           $(_this.oLi[$(this).index()]).siblings().css('color','#333');
            });
          });
        // for(let i = 0, k = this.oLi.length; i < k; i++){
        //     this.oLi[i].onmouseout = function(){
        //         //console.log(1);
        //         _this.oLi[i].style.color = "#333333"
        //     }
        // }
        this.oLi1.onmouseover = function(){
            //console.log(1);
            _this.oDiv.style.display = "block";
        }
        this.oLi1.onmouseout = function(){
            _this.oDiv.style.display = "none";
        }
        this.oDiv.onmouseover = function(){
            _this.oDiv.style.display = "block";
        }
        this.oDiv.onmouseout = function(){
            _this.oDiv.style.display = "none";
        }
    }
}
new Top();