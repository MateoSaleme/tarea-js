alert("Bienvenido a LOPEZ ELECTRONICA")

var note = 95000;
var cel = 180000;
var tab = 210000;

const product = (`
            NOTEBOOK = LENOVO I3
            CELULAR = IPHONE 12
            TABLET = IPAD AIR 4`);

const option = (`Elija una opcion de pago:
            6 = cuotas sin interes
            8 = cuotas sin interes
            12 = cuotas sin interes`);

alert("Escoja el producto que desee")

let elegirProd = prompt(`${product}`).toUpperCase(); 

if (elegirProd == `NOTEBOOK`)
{
    alert(`LENOVO I3 AGREGADA AL CARRITO
        Total a pagar: ${note}`)
}
else if (elegirProd == `CELULAR`)
{
    alert(`IPHONE 12 AGREGADO AL CARRITO
        Total a pagar: ${cel}`)
}
else if (elegirProd == `TABLET`)
{
    alert(`IPAD AIR 4 AGREGADO AL CARRITO
        Total a pagar: ${tab}`)
}
else
{
    alert(`LO SENTIMOS: No contamos con el producto ingresado`)
}

alert("Escoja su opcion de pago")

let elegirPago = prompt(`${option}`)

if (elegirProd == `NOTEBOOK`, elegirPago == `6`)
{
    alert(`${note}` / 6);
}
else if (elegirProd == `NOTEBOOK`, elegirPago == `8`)
{
    alert(`${note}` / 8);
}
else if (elegirProd == `NOTEBOOK`, elegirPago == `12`)
{
    alert(`${note}` / 12)
}

if (elegirProd == `CELULAR`, elegirPago == `6`)
{
    alert(`${cel}` / 6);
}
else if (elegirProd == `CELULAR`, elegirPago == `8`)
{
    alert(`${cel}` / 8);
}
else if (elegirProd == `CELULAR`, elegirPago == `12`)
{
    alert(`${cel}` / 12);
}

if (elegirProd == `TABLET`, elegirPago == `6`)
{
    alert(`${tab}` / 6);
}
else if (elegirProd == `TABLET`, elegirPago == `8`)
{
    alert(`${tab}` / 8);
}
else if (elegirProd == `TABLET`, elegirPago == `12`)
{
    alert(`${tab}` / 12);
}
else
{
    alert(`LO SENTIMOS: Metodo de pago no valido`);
}
    
        
