function get_para1(){
    var inputs=[];

    for ( var i = 1; i<=6;i++) {
        inputs.push(document.getElementById("para_1_txt_"+i).value); 
        console.log(inputs);       
    }
    document.getElementById("para_1").innerHTML=inputs.join(".");
        
}

function get_para2(){
    var inputs_2=[];

    for ( var i = 1; i<=6;i++) {
        inputs_2.push(document.getElementById("para_2_txt_"+i).value);
        console.log(inputs_2);
    }
    document.getElementById("para_2").innerHTML=inputs_2.join(".");
}