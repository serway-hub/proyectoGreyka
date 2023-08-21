const nodeApp = document.querySelector('#app')


const header = document.createElement('header')
header.id = 'header__home'
header.classList='items-center'
nodeApp.append(header)

//creacion del header

const headerBlock = () => {
    const divHeader = document.createElement('div')
    divHeader.classList= 'grid grid-cols-[1fr,4fr,1fr,1fr]  items-center justify-items-center mx-14'
    divHeader.innerHTML = `
        <div class='items-center'>
            <img src='../imagenes/greyka_store_logo.webp'>
        </div>
        <div class='place-content-center flex'>
            <form class='flex gap-x-1'>
                <input type= 'text' class='w-[40rem] border-solid border-2 border-[#ebeced] rounded' placeholder='Busca los mejores productos '>
                <button type='submit' class='bg-[#273fb4] border-solid border-2 rounded-lg '><img src='../imagenes/iconos/search (2).svg' class='h-9 rounded fill-[#243c5a]'></button>
            </form>
        </div>
        <div class='flex gap-x-8 ml-7'>
            <nav class='flex gap-x-8'>
                <a class='inline-block ml-1 '><img class='h-9 items-center' src='../imagenes/iconos/user-circle.svg'>Ingresar</a>
                <a class='inline-block'><img class='h-9' src='../imagenes/iconos/heart (2).svg'>favoritos</a>
            </nav class='gap-x-8'>
            <button id='cesta_carrito' class='w-8 flex cestaCarrito'>
                <img class='h-9 w-8 iconoCesta' src='../imagenes/iconos/cart (1).svg'>
                <spam id='contadorCarrito claseO' class='contador'>
                    0
                </spam>
            </button>
        </div>
    `
    header.appendChild(divHeader)

    divHeader.addEventListener('click',(e)=> {
        if(e.target.classList.contains('cestaCarrito')|e.target.classList.contains('iconoCesta')|e.target.classList.contains('contador')){

        }
        

    })
}

headerBlock()



// seccion del header


const tittlePage = document.createElement('h1')
tittlePage.innerText = 'Tienda de productos greyka store'
tittlePage.classList = 'text-4xl text-center bg-[#ededed] pt-4'
nodeApp.append(tittlePage)

//creacion de la tienda de productos

const listaproductos =document.createElement('section')
listaproductos.id = 'tiendaOnline'
listaproductos.classList= 'grid grid-cols-3 justify-items-center gap-7 bg-[#ededed]  pt-4'
nodeApp.append(listaproductos)

const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD'
    }).format(price)

    return newPrice
}

const especificarTalla = (tallaP) => {
    if (typeof tallaP !== 'string') {
        // Convertir a cadena si no es una cadena
        tallaP = String(tallaP);
    }
    const tallaList = tallaP.split(',');
    let buttonsHTML = '';

    for (const talla of tallaList) {
        buttonsHTML += `<button>${talla.trim()}</button>`;
    }

    return buttonsHTML;
};
const especificarColor = (colorP) => {
    if (typeof colorP !== 'string') {
        // Convertir a cadena si no es una cadena
        colorP = String(colorP);
    }
    const colorList = colorP.split(',');
    let buttonsHTML = '';

    for (const color of colorList) {
        buttonsHTML += `<button>${color.trim()}</button>`;
    }

    return buttonsHTML;
};


const productosOnline = () => {
    productos.forEach((item) =>{
        const itemDiv =document.createElement('div')
        const tallaP = item.talla
        const colorP = item.color
        itemDiv.classList ='bg-[#f9f9fa] itemDivProducto'            
        itemDiv.innerHTML +=`
            <div id='divBox' class='relative divBoxII'>
                <img id='imageItemId' src='${item.imagen}' alt='${item.nombreProducto}' class='w-80 imageItem z-0'>
                <a id='${item.id}' class='verCarrito absolute p-0 bottom-10 h-10 bg-[#273fb4] border-solid border-2] text-[#f9f9fa] w-auto left-[100px] block m-2 hidden z-40 cursor-pointer'><span id='${item.id}'class='block m-2 cursor-pointer' >Ver Producto</span></a>
                <div id='btnFavorito' class='boxFavorite z-10 cursor-pointer hover:bg-black'><button class='favorite left-[280px] top-[20px] z-40 absolute hidden '><i class="fa-regular fa-heart text-3xl cursor-pointer"></i></button></div>
                <button type='submit' id=${item.id} class='agregar absolute left-[85px] h-10 bottom-0.5 bg-[#273fb4] border-solid border-2 rounded-lg] text-[#f9f9fa] rounded-full hidden z-40 cursor-pointer'><i class="fa-sharp fa-solid fa-cart-shopping cursor-pointer"></i> Agregar al Carrito</button>
            </div>
            
            <div class='my-4 px-4 flex flex-col '>
                <h2 class='w-72'>${item.nombreProducto}</h2>
                <span class='my-2'>${formatPrice(item.precio)}</span>
                <div>
                    <div>
                        <span>Talla</span>
                        ${especificarTalla(tallaP)}
                    </div>
                    <div>
                        <span>Color</span>
                        ${especificarColor(colorP)}
                    </div>
                </div>
                
            </div>
        `
        listaproductos.appendChild(itemDiv)
    

    }
)};

productosOnline()

const nodoImage= document.querySelectorAll('.itemDivProducto')

nodoImage.forEach((item) =>{
    const nodoFavorite =item.querySelectorAll('.favorite, .verCarrito,.agregar')
    item.addEventListener('mouseover',(e)=>{
        if (e.target.classList.contains('imageItem') || e.target.classList.contains('favorite') ||e.target.classList.contains('verCarrito') ){
            nodoFavorite.forEach((item)=>{
                item.classList.remove('hidden')
            })
        }
        e.target.classList.add('cursor-pointer');
    })
    item.addEventListener('mouseout', () => {
        nodoFavorite.forEach((item)=>{
            item.classList.add('hidden')
        })
    });
})







