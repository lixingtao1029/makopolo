function dl(){
    this.op = document.querySelector('.p3');
    this.op1 = document.querySelector('.p4');
    this.odl = document.querySelector('.nav_dl')
    this.ozc = document.querySelector('.nav_zc');
    this.init();
}
dl.prototype = {
    init : function(){
        //console.log(sessionStorage.getItem('uname'));
        this.change();
        this.eventBind();
        //console.log(this.op.innerHTML)
    },
    change : function(){
        if(sessionStorage.getItem('uname')){
            this.op.style.display = "inline-block"; 
           this.op.innerHTML = "欢迎 &nbsp; &nbsp;"+sessionStorage.getItem('uname') + ' &nbsp; &nbsp;!';
        }else{
            this.op1.style.display = 'none';
        }
    },
    tc : function(){
        sessionStorage.removeItem('uname');
        history.go(0);
    },
    adl : function(){
        location.href = "http://localhost/makepolo/html/login.html";
    },
    azc : function(){
        location.href = "http://localhost/makepolo/html/resgin.html";
    },
    eventBind : function(){
        this.op1.addEventListener('click',this.tc.bind(this));
        this.odl.addEventListener('click',this.adl.bind(this));
        this.ozc.addEventListener('click',this.azc.bind(this));
    }
}
new dl();