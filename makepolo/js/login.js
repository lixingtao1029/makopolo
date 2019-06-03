function login(){
    this.oBtn = document.querySelector('.btn');
    this.uname = document.querySelector('.uname');
    this.upwd = document.querySelector('.upwd');
    this.men = false;
    this.init();
}
login.prototype = {
    init : function(){
       this.eventBind();
       //this.session(this.uname.value);
    },
    change:function(){
        var _this = this;
        //document.cookie = "uname = " + this.uname.value + "path:/;expires = 1"
        sessionStorage.setItem('uname',this.uname.value);
        ajax({
            method : 'get',
            url : 'http://localhost/makepolo/php/login.php',
            data : {
                uname : _this.uname.value,
                upwd : _this.upwd.value
            }
        }).then(function(data){
            //console.log(data);
            if(data.method == '1'){
                alert(data.info);
                location.href = "../index.html";
            }else{
                alert(data.info);
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
    eventBind : function(){
        this.oBtn.addEventListener('click',this.yz.bind(this));
    },
}
new login();