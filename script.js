$( document ).ready(function() {
    mueveReloj()
    comprobarCheckBox()
})

function comprobarCheckBox(){
    $('#darkMode').change(function() {
        console.log($('#darkMode').prop('checked'))
      })
}

function valorConCero(valor){
    if(valor<10)
        valor = "0" + valor
    return valor
}

function setDocumentTime(diferencia){
   var Horas = diferencia.getHours()+3;
   var Dias = diferencia.getDate() - 1;
    if((diferencia.getHours()+3) >= 24 ){
        Horas = 0;
        Dias = Dias+1;
    }

    /* var tiempo =  valorConCero(Dias) + " : " + valorConCero(Horas) + " : " + valorConCero(diferencia.getMinutes()) + " : " + valorConCero(diferencia.getSeconds());
    $("#tiempo").empty()
    $("#tiempo").append(tiempo) */
    var dia = valorConCero(Dias);
    $("#dia").empty()
    $("#dia").append(dia)

    var hora = valorConCero(Horas);
    $("#hora").empty()
    $("#hora").append(hora)

    var min = valorConCero(diferencia.getMinutes());
    $("#min").empty()
    $("#min").append(min)

    var seg = valorConCero(diferencia.getSeconds());
    $("#seg").empty()
    $("#seg").append(seg)
}

function mueveReloj(){
    //console.clear()
    
    let momentoActual = new Date()
    let momentoDeSalida = new Date('2023/02/18')

    let diferencia = momentoDeSalida - momentoActual
    diferencia = new Date(diferencia)
   
    console.log("dias: " + (diferencia.getDate()-1) + " horas: " + (diferencia.getHours()+3) + " min: " + diferencia.getMinutes() + " seg:  " + diferencia.getSeconds())

    setDocumentTime(diferencia)
    setTimeout("mueveReloj()", 1000)
}