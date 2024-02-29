//所有变量
var devEnvironmentInfo = document.getElementById('devEnvironmentInfo');
var sourcetext=document.getElementById('introduce_web');
var table1=document.getElementById('table1');
var sometable=document.getElementById('sometable');
var htmlgramma=document.getElementById('htmlgramma');
var css=document.getElementById('css');
var css1=document.getElementById('css1');
var csspb=document.getElementById('csspbid');
var csslayout=document.getElementById('csslayoutid');
var hover=document.getElementById('hovermesgid');
var hoverele=document.getElementById('hovereleid');
var test=document.getElementById('test');
var js=document.getElementById('js');
var jsfuncid=document.getElementById('jsfuncid');
var thing=document.getElementById('jsthingid');
var dom=document.getElementById('domid');
var box=document.getElementById('box');
var float=document.getElementById('float');
var posit=document.getElementById('posit');
var flex=document.getElementById('flex');
var grid=document.getElementById('grid');
var boot=document.getElementById('boot');
var jquery=document.getElementById('jquery');
var charts=document.getElementById('charts');
var html5app=document.getElementById('html5app');
var wex=document.getElementById('wex');
var dcloud=document.getElementById('dcloud');
var someonetable=null;

function showDevEnvironment(a) {
    if(a==1||a==2){
        hinteveryone();
        if(a==1){
            // 显示web开发环境
            devEnvironmentInfo.style.display = 'block';
        }else if(a==2){
        //显示html标签
            sometable.style.display='block';
            table1.style.display='block';
        }
    }else if(a == 'html' ||
             a == 'head' ||
             a == 'title' || 
             a == 'a' || 
             a == 'body' || 
             a == 'h1' ||
             a == 'p' ||
             a == 'img' || 
             a == 'ul' || 
             a == 'ol' || 
             a == 'li' || 
             a == 'div' || 
             a == 'span' || 
             a == 'table' || 
             a == 'tr' || 
             a == 'td' || 
             a == 'form' || 
             a == 'input' || 
             a == 'textarea') {
        someonetable = document.getElementById(a);
        hinteveryone();
        someonetable.style.display='block';       
    }else if(a==3){
        hinteveryone();
        htmlgramma.style.display='block';
    }else if(a==4){
        hinteveryone();
        css.style.display='block';
    }else if(a==5){
        hinteveryone();
        css1.style.display='block';
    }else if(a==6){
        hinteveryone();
        test.style.display='block';
    }else if(a==7){
        hinteveryone();
        csspb.style.display='block';
    } else if(a==8){
        hinteveryone();
        csslayout.style.display='block';
    } else if(a==9){
        hinteveryone();
        box.style.display='block';
    } else if(a==10){
        hinteveryone();
        float.style.display='block';
    } else if(a==11){
        hinteveryone();
        posit.style.display='block';
    } else if(a==12){
        hinteveryone();
        flex.style.display='block';
    } else if(a==13){
        hinteveryone();
        grid.style.display='block';
    } else if(a==14){
        hinteveryone();
        js.style.display='block';
    } else if(a==15){
        hinteveryone();
        jsfuncid.style.display='block';
    } else if(a==16){
        hinteveryone();
        thing.style.display='block';
    }  else if(a==17){
        hinteveryone();
        dom.style.display='block';
    } else if(a==18){
        hinteveryone();
        boot.style.display='block';
    } else if(a==19){
        hinteveryone();
        jquery.style.display='block';
    } else if(a==20){
        hinteveryone();
        charts.style.display='block';
    } else if(a==21){
        hinteveryone();
        html5app.style.display='block';
    } else if(a==22){
        hinteveryone();
        wex.style.display='block';
    }  else if(a==23){
        hinteveryone();
        dcloud.style.display='block';
    } 
}
var flag=1;
function showCode(a){
    if(a==1){
        if(flag){
            flag=0;
            hover.style.display = 'block';
        }else{
            flag=1;
            hover.style.display = 'none';
        }
    }else if(a==2){
        if(flag){
            flag=0;
            hoverele.style.display = 'block';
        }else{
            flag=1;
            hoverele.style.display = 'none';
        }
    }
}

//隐藏所有数据
function hinteveryone(){
    sourcetext.style.display='none';
    devEnvironmentInfo.style.display = 'none';
    table1.style.display = 'none';
    sometable.style.display = 'none';
    htmlgramma.style.display = 'none';
    css.style.display = 'none';
    css1.style.display = 'none';
    csspb.style.display = 'none';
    hover.style.display = 'none';
    test.style.display = 'none';
    csslayout.style.display = 'none';
    box.style.display='none';
    float.style.display='none';
    posit.style.display='none';
    flex.style.display='none';
    grid.style.display='none';
    js.style.display='none';
    jsfuncid.style.display='none';
    thing.style.display='none';
    dom.style.display='none';
    boot.style.display='none';
    jquery.style.display='none';
    charts.style.display='none'
    html5app.style.display='none'
    wex.style.display='none'
    dcloud.style.display='none'
    if(someonetable!=null){
       someonetable.style.display='none'; 
    }  
}
//显示首页
function main() {
    hinteveryone();
    sourcetext.style.display='block';
}