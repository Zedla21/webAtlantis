$( document ).ready(function() {
    mueveReloj()
})

function valorConCero(valor){
    if(valor<10)
        valor = "0" + valor
    return valor
}

function setDocumentTime(diferencia){
    /* 
    $("#dia").empty()
    $("#dia").append(valorConCero(diferencia.getDate()-1))

    $("#hora").empty()
    $("#hora").append(valorConCero(diferencia.getHours()+3))

    $("#min").empty()
    $("#min").append(valorConCero(diferencia.getMinutes()))

    $("#seg").empty()
    $("#seg").append(valorConCero(diferencia.getSeconds()))
    */
   var Horas = diferencia.getHours()+3;
   var Dias = diferencia.getDate() - 1;
    if((diferencia.getHours()+3) >= 24 ){
        Horas = 0;
        Dias = Dias+1;
    }

    var tiempo =  valorConCero(Dias) + " : " + valorConCero(Horas) + " : " + valorConCero(diferencia.getMinutes()) + " : " + valorConCero(diferencia.getSeconds());
    $("#tiempo").empty()
    $("#tiempo").append(tiempo)


}

function mueveReloj(){
    console.clear()
    let momentoActual = new Date()
    let momentoDeSalida = new Date('2023/02/18')

    let diferencia = momentoDeSalida - momentoActual
    diferencia = new Date(diferencia)
   
    console.log("dias: " + (diferencia.getDate()-1) + " horas: " + (diferencia.getHours()+3) + " min: " + diferencia.getMinutes() + " seg:  " + diferencia.getSeconds())

    setDocumentTime(diferencia)
    setTimeout("mueveReloj()", 1000)
}