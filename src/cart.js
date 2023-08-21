
let carrito=[]

const sectionProductos = document.querySelector('#app')

sectionProductos.addEventListener('click', (e) => {
    if(e.target.classList.contains('agregar')){
        productoRepetido(e.target.id)
    }
  
})

const productoRepetido = (id) => {
    const repetido = carrito.some(producto => producto.id == id)

    if(!repetido){
        const product = productos.find(producto => producto.id == id)
        carrito.push(product)
        especificarProductoCarrito(product)
        actualizarTotal(carrito)
    } else{
        const productoR = carrito.find(producto => producto.id == id)
        const cantidad = document.getElementById(`cantidad-${productoR.id}`)
        productoR.cantidad++
        cantidad.innerText = `Cantidad:${productoR.cantidad}`
        actualizarTotal(carrito)
    }
}

const especificarProductoCarrito=(product)=> {
    const contenedorT = document.querySelector('#carrito-contenedor')
    const divCarrito = document.createElement('div')

    
    divCarrito.classList.add('productoCarrito','flex','items-center','gap-x-5','my-2.5')

    divCarrito.innerHTML =`
        <img class='w-28' src='${product.imagen}' alt='${product.nombreProducto}'>
        <span>${product.nombreProducto}</span>
        <span>${formatPrice(product.precio)}</span>
        <span id='cantidad-${product.id}'>Cantidad:${product.cantidad}</span>
        <button class='' value='${product.id}'>X</button>

    `
    contenedorT.appendChild(divCarrito)
}

const pintarCarrito = (carrito) => {
    const carritoDiv = document.getElementById('carrito-contenedor')

    carritoDiv.innerHTML=''

    carrito.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('productoCarrito')

        div.innerHTML= `
            <img src='${producto.imagen}'>
            <span>${producto.nombreProducto}</span>
            <span>${formatPrice(producto.precio)}</span>
            <span id='cantidad-${producto.id}'>Cantidad:${producto.cantidad}</span>
            <button class='' value='${producto.id}'>X</button>

        `
        carritoDiv.appendChild(div)
    })
}

const eliminarProduct = (id) => {
    const productoIndex = carrito.findIndex(producto => producto.id == id)
    carrito.splice(productoIndex, 1)
    pintarCarrito(carrito)
    actualizarTotal(carrito)
}

const actualizarTotal = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const totalCompra = formatPrice(carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0))

    pintarTotales(totalCantidad, totalCompra)
    carritoStorage(carrito) 
}

const pintarTotales = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contadorCarrito')
    const precioTotal = document.getElementById('preciTotal')
    console.log(contadorCarrito.innerText=totalCantidad)
    
    contadorCarrito.innerText = totalCantidad
    precioTotal.innerText = totalCompra
}

const carritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const obtenerCarritoStorage = () => {
    const carritStorage = JSON.parse(localStorage.getItem('carrito'))
    return carritStorage
}
  
  const cargarCarrito = () => {
    if (localStorage.getItem('carrito')) {
      carrito = obtenerCarritoStorage()
      pintarCarrito(carrito)
      actualizarTotal(carrito)
    }
}


