
function resgin(){
    this.oBtn = document.querySelector('.btn');
    this.oform = document.querySelector('form');
    this.uname = document.querySelector('.uname');
    this.upwd = document.querySelector('.upwd');
    this.men = false;
    this.init();
}
resgin.prototype = {
    init : function(){
        this.EventBind();
    },
    change : function(){
        var _this = this;
        //console.log(uname.value)
        ajax({
            method : 'get',
            url : 'http://localhost/makepolo/php/resgin.php',
            data : {
                uname : _this.uname.value,
                upwd : _this.upwd.value
            }
        }).then(function(data){
            //console.log(data);
            if(data.method == '0'){
                alert(data.info);
            }else{
                alert(data.info);
                location.href = "../html/login.html";
            }
        }).catch(function(info){
            console.log(info);
        })
    },
    yz : function(){
        if(/^1[34578]\d{9}$/.test(this.uname.value) && /^[\w]{6,12}$/.test(this.upwd.value)){ 
            this.men = true;
            this.ll();
        }else{
            alert('请输入正确格式')
        }
        
    },
    ll : function(){
        if(this.men){
            this.oBtn.addEventListener('click',this.change.bind(this));
        }
    },
    EventBind : function(){
        this.oBtn.addEventListener('click',this.yz.bind(this));

    },
}
new resgin();