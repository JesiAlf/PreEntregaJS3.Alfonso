console.table(artesanias);
let contenedorArtesanias = document.getElementById('misArtesanias');
let tablaBody = document.getElementById('tablabody');
let listaProds=[];
const carrito=[];

renderizarArtesanias(artesanias);

function filtrarporPrecio(precioMax){
    const filtros=artesanias.filter((producto)=>producto.precio<=precioMax);
    return filtros;
}

function renderizarArtesanias(Artesanias){
    contenedorArtesanias.innerHTML = '';
    for(const prod of Artesanias){
        contenedorArtesanias.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${prod.foto} alt="Card image cap">
        <div class="card-body">
        <h6 class="card-title">${prod.nombre}</h6>
        <p class="card-text"> $ ${prod.precio}</p>
        <button id =${prod.id} class="btn btn-primary compra">Compra</button>
        </div>
    </div>
        `;
    }
    let buttons=document.getElementsByClassName('compra');
    for (const boton of buttons){
    boton.addEventListener('click',()=>{
    console.log('Hiciste click en el boton id: '+boton.id);
    const prodCarrito=artesanias.find((miArtesania)=>miArtesania.id==boton.id);
    console.log(prodCarrito);
    agregarACarrito(prodCarrito);
    })
    
    //boton.onmouseover=()=>boton.classList.replace('btn-primary', 'btn-warning');
    //boton.onmouseout=()=>boton.classList.replace('btn-warning', 'btn-primary');
    }
}
    renderizarArtesanias(artesanias);

//Funcion para agregar Carito
function agregarACarrito(miArtesania){
    carrito.push(miArtesania);
    //cantidad.innerText=`${carrito.length}`;
console.table(carrito);
alert('Agregaste '+ miArtesania.nombre+' al carrito !!! ');
tablaBody.innerHTML+=`
    <tr style="color:rgb(204, 54, 74)">
    <td>${miArtesania.id}</td>
    <td>${miArtesania.nombre}</td>
    <td>${miArtesania.precio}</td>
</tr>`;    
   //const item = artesanias.find(element => element.prodNuevo === id);
    //addCarrito += item.precio
    
    //mosttrar total de lo que lleva en el carrito
    //let contenedorArtesanias = document.getElementById('total')
    //contenedorArtesanias.innerHTML = `<span> total: ${carrito}  </span>`
//renderizarArtesanias(artesanias);

} 
//incrementar el total
/*let totalCarrito = listaArtesanias.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
localStorage.setItem('carrito', JSON.stringify(listaArtesanias));

let totalArtesanias=listaArtesanias.reduce((acumular,artesania)=>acumular+artesania.precio,0);
    document.getElementById('total').innerText='Total a pagar$: '+totalArtesanias;
*/

//Funcion para ordenar de A a Z
function ordenarDeAaZ(){
    //Limpio 
contenedorArtesanias.innerHTML=""
artesanias.sort(function(a,b){
    if(a.nombre<b.nombre){return -1;}
    if(a.nombre>b.nombre){return 1;}
    return 0;
//con sort lo estoy filtrando
})

}

function ordenarDePrecioMasBajo(){
contenedorArtesanias.innerHTML=""
artesanias.sort(function(a,b){
if(a.precio<b.precio){return -1;}
if (a.precio>b.precio){return 1;}
return 0;
})
renderizarArtesanias(artesanias);
}

function ordenarDePrecioMasAlto(){
contenedorArtesanias.innerHTML=""
artesanias.sort(function(a,b){
if(a.precio>a.precio){return -1;}
if (a.precio<b.precio){return 1;}
return 0;

})
renderizarArtesanias(artesanias);
}

//localstorage
let carro = JSON.parse(localStorage.getItem('carrito')) || [];
let cantidad=document.getElementById('cantidad');
let listaArtesanias = JSON.parse(localStorage.getItem('listaArtesanias')) || [];

//Evento
listaArtesanias.forEach((miArtesania) => {
    document.getElementById(`btn ${miArtesania.id}`).addEventListener('click',()=>{
    agregarCarrito(miArtesania);
    });
});


 //incrementar precio

if(listaArtesanias.length!=0){
    for(const prod of listaArtesanias){
        document.getElementById('tablabody').innerHTML+=`
        <tr style="color:rgb(204, 54, 74)">
                <td>${prod.id}</td>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
                <td><button class='btn btn-light'>❌<button></td>
            </tr>`;       
    }
}


let precioMaxUsu= parseFloat(prompt('Ingrese el precio máximo que desea abonar(0-salir)'));
while(precioMaxUsu!==0){
    if(isNaN(precioMaxUsu)||precioMaxUsu<0){
        alert('Error, ingrese un precio válido🤷‍♀️');  
    }else{
        const artesFiltrados = filtrarporPrecio(precioMaxUsu);
        console.table(artesFiltrados);
    }
    precioMaxUsu=parseFloat(prompt('Ingrese el precio máximo que desea abonar(0-salir)'));
} 

/*let opcion=prompt('quieres agregar nueva artesania al carrito?(s/n)🤔');
while(opcion!='n'){
    let prodNuevo=prompt('ingrese nueva artesania al carrito');
listaProds.push(prodNuevo);
opcion=prompt('Quisieras agregar una nueva artesania al carrito?🤔(s/n)');
}*/

//function incrementarGastoTotal(monto){
  //  totalGastos+=monto;
//}

class Artesanias{
    arteNew(id,foto,nombre,precio){
        this.id=id;
        this.foto=foto;
        this.nombre=nombre;
        this.precio=precio;
    }
    mostrarArtesania(){
        alert(this.id+'9'+this.foto+`"./assets/img/1.jpg"`+this.nombre+'Cuadro tridimensional'+this.precio+'5000');
    }
}
const artesania1=new Artesanias(9,`"./assets/img/1.jpg"`, "Cuadro tridimensional", 5000);

artesania1.mostrarArtesania();


localStorage.setItem('usuarioActivo','Jesica');
localStorage.setItem('cantregistros',6);
localStorage.setItem('comprarArtesanias',true);

//recupero datos
console.log(localStorage.getItem('UsuarioActivo'));
console.log(localStorage.getItem('cantregistros'));
console.log(localStorage.getItem('comprarArtesanias'));
const usuario=localStorage.getItem('usuarioActivo');
if(usuario !=null){
    alert(`Bienvenida ${usuario}`);
}else{
    const usuarioNuevo='jesica';
    localStorage.setItem('usuarioActivo',usuarioNuevo);
}
//no queda guardado si cierro
sessionStorage.setItem('Descuento','Jesica');
sessionStorage.setItem('cantidades',[7,8,5,1,4]);
const AccedeAdescuentos=sessionStorage.getItem('cantidades').split(',').map((codigo)=>parseInt(codigo));
console.log(AccedeAdescuentos);



const DateTime=luxon.DateTime;
const inicio=DateTime.now();
console.log(inicio.toLocaleString());
console.log(inicio.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS));

let finalizarButton=document.getElementById('finalizar');
finalizarButton.onclick=()=>{
    Toastify({
        text: "Gracias por tu compra!",
        duration: 2000,
        gravity: 'botton',
        position: 'left',
        close: true,
        style: {
            background: "linear-gradient(to left, #00b09b, #96c93d)",
        },
    offset: {
            x: 250, // horizontal - 
            y: 160 // vertical - 
        },
    }).showToast();
    //listaArtesanias=[];
document.getElementById('tablabody').innerHTML+=''
cantidad.innerText=`${listaArtesanias.length}`;
document.getElementById('total').innerText = 'Total a pagar $';
localStorage.removeItem('listaArtesanias');
const fin=DateTime.now();
}
