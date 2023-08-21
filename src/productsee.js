
const nodeAppProductos = document.querySelector('#app') 

nodeAppProductos.addEventListener('click',(e)=>{

    if(e.target.classList.contains('verCarrito')){

        productoEspecificado(e.target.id)

    } 
    
})

const productoEspecificado =(id) => {
    const nodoFeatureProduct = document.querySelector('.carritoProducto')
    const nodoVerProducto = document.createElement('div')
    const overlay = document.createElement('div')
    const optionProducto = productos.find(item => item.id == id)
    overlay.classList = 'fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10'
    nodoVerProducto.classList='carrtoSub w-[87%] z-20 m-2 flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg'
    nodoVerProducto.innerHTML=`
        <div class='z-20'>
            <img src='${optionProducto.imagen}' class='ImagennFuture w-[520px] !max-w-none' alt='${optionProducto.nombreProducto}'>
        </div>
        <div class='m-3 z-20 w-full'>
            <div class='text-end relative text-4xl h-0 mb-4'>
                <button><i class="btnCerrar fa-solid fa-xmark cursor-pointer relative top-[-43px] left-[36px] bg-[#273fb4] text-white"></i></button>
            </div>
            <h2 class='text-4xl mb-4'>${optionProducto.nombreProducto}</h2>
            <span class='text-2xl mb-4'>${formatPrice(optionProducto.precio)}</span>
            <div class='mt-4'>
                <p>${optionProducto.descripcion}</p>
            </div>
        </div>

    `
    nodoFeatureProduct.appendChild(nodoVerProducto)  
    nodoFeatureProduct.appendChild(overlay)
    nodoVerProducto.addEventListener('click', (e) => {
        if (e.target.classList.contains('btnCerrar')) {
            nodoFeatureProduct.removeChild(nodoVerProducto)
            nodoFeatureProduct.removeChild(overlay)
        }
    })


}

