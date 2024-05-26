function getResultBySamagraId(samagraId, identifier){
    $.ajax({
        url:'http://localhost/getResultForSSP',
        type:'Get',
        data:{
            SSSM:samagraId,
            SchoolCode:'SVVN'
        },
        success:function(data){
            if(Number(data.student.ResultPercentage) >= 33){
                document.getElementById(identifier+'rbtPass').checked = true
            }else if(Number(data.student.ResultPercentage) < 33){
                document.getElementById(identifier+'rbtFail').checked = true
            }else{
                document.getElementById(identifier+'rbtNoResult').checked = true
            }
            document.getElementById(identifier+'txtPercent').removeAttribute('disabled', true)
            document.getElementById(identifier+'txtPercent').value = data.student.ResultPercentage
        },
        error:function(err){console.log(err.responseText)}
    })
}

function getResultFromServer(){
    let elements = document.getElementsByClassName('ui-widget');
    let count = 0
    for(let i=0;i<elements.length;i++){
        if(elements[i].innerText.length == 9){
            let len = elements[i].id.length
            let identifier  = elements[i].id.slice(0, len-6)
            getResultBySamagraId(elements[i].innerText, identifier)
        }
    }
    /*
    for(let i=0;i<elements.length;i++){
        if(elements[i].innerText.length == 9){
            getResultBySamagraId(elements[i].innerText)
        }
    }
    */
}
getResultFromServer()
