$(document).ready(function() {
    $(".btn").click(function(){
       ($("#screen").val()+$(this).val())
       console.log($("#screen").val($("#screen").val()+$(this).val()))
    })
    $(".clear").click(function(){
        $("#screen").val("")
    })
    $(".ans").click(function(){
        let exp = $("#screen").val()
        let arr =exp.split("")
        console.log(arr)
        let flag = 0;
        for (i=0;i<arr.length;i++){
            if (arr[i] == "."){
                if (flag ==0){
                    flag++
                }else{
                    delete arr[i]
                    flag++
                }
            }
            if ((arr[i] == "+") || (arr[i]=="-") || (arr[i]=="*") || (arr[i]=="/")){
                flag = 0;
            }
        }
        console.log(arr) 
        let newexp = ""
        for (k=0;k<arr.length;k++){
            if (arr[k] != null ){
                newexp+=arr[k]
            }
        }
        console.log(newexp)   
        $("#screen").val(eval(newexp)) 
        
    })
})