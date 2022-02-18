function showValoration() {
    let valoration = document.getElementById("points").value;
    alert("Has valorado con " + valoration + " puntos" );
  }

function showAccount() {
    let account = document.getElementsByClassName("accountdata");
    alert("Le informamos que su cuenta bancaria es: " + account[0].value + account[1].value + "-" + account[2].value + "-" + account[3].value + "-" + account[4].value + "-" + account[5].value);
}
function showDayOfWeek() {
    const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let wday = new Date;
    alert("La fecha seleccionada en el elemento de fecha es un " + weekDays[wday.getDay()]);
}

const provinces = [
    "alava", "albacete", "alicante", "almeria", "avila", "badajoz", "islas baleares", "barcelona", "burgos", "caceres", "cadiz", "castellon", "ciudad real", "cordoba",
    "la coruna", "cuenca", "gerona", "granada", "guadalajara", "guipuzcoa", "huelva", "huesca", "jaen", "leon", "lerida", "la rioja", "lugo", "madrid", "malaga",
    "murcia", "navarra", "orense", "asturias", "palencia", "las palmas", "pontevedra", "salamanca", "santa cruz de tenerife", "cantabria", "segovia", "sevilla", "soria", "tarragona",
    "teruel", "toledo", "valencia", "valladolid", "vizcaya", "zamora", "ceuta", "melilla",
];

function postalCodeValidation() {
   
    let postalCodeValue = document.getElementById("postalcode").value;

    if (postalCodeValue.length !== 5 || parseInt(postalCodeValue)< 1000 || parseInt(postalCodeValue)> 52999){
        window.alert("Código postal incorrecto. Vuelva a insertar los datos");
        return;
    }
    if (!verifyProvince()){
        return;
    }
    verifyProvincePostalCode()
}

function verifyProvince(){
    let provinceValue = document.getElementById("province").value;
    
    if (!provinces.includes(provinceValue)){
        window.alert("Esa provincia no existe, por favor, verifica la provincia");
        return false;
    }   
    return true;
}

function verifyProvincePostalCode(){
    let postalCodeValue = document.getElementById("postalcode").value;
    let pcbase = parseInt(postalCodeValue.substring(0,2));
    let provinceValue = document.getElementById("province").value;
    let validationContainer = document.getElementById("validation");
    
    if (provinceValue === provinces[pcbase-1])
    {
        validationContainer.innerHTML = "El código postal y la provincia coinciden.";
        validationContainer.style.color = "green";
        validationContainer.style.display = "block";
    }
    else
    {
        validationContainer.innerHTML = "El código postal y provincia NO coinciden. Por favor, revise los datos.";
        validationContainer.style.color = "red";
        validationContainer.style.display = "block";
    }
    return true;
}