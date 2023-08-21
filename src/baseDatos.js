const productos = [
    {
        id: 1,
        nombreProducto: 'Buso Gucci Para hombre',
        precio: 250000,
        imagen: '../imagenes/busoGucci.WEBP',
        talla: ['S','M','L','X'],
        color: ['negro','azul'],
        inventario : 10,
        cantidad: 1,
        descripcion: 'La exclusiva combinación de elementos clásicos de Gucci se actualiza en clave contemporánea para conferir un aire sofisticado y actual a diseños atemporales. Esta chaqueta con cremallera se ha confeccionado en lona de algodón con GG en beige y azul. El diseño se completa con un ribete de piel en contraste y rayas horizontales.' 
    },
    {
        id: 2,
        nombreProducto: 'Tenis Dsquarded para Hombre',
        precio: 350000,
        imagen: '../imagenes/Dsquarde.WEBP',
        talla: ['7 us', '8 us','10 us'],
        color: ['Negro','blanco'],
        Inventario: 15,
        cantidad: 1,
        descripcion:'tenis bajos Speedster Logo en relieve en el lateral, cierre con agujetas en la parte delantera, puntera redonda y suela plana.'

    },
    {
        id: 3,
        nombreProducto: 'Tenis Jordan para niño',
        precio: 150000,
        imagen: '../imagenes/jordan.WEBP',
        talla: [35,37,38],
        color: ['Azul','verde'],
        cantidad: 1,
        descripcion:'Air Jordan 1 Mid Semens Shoesget que Jordan Energy on Your Feet This Holiday Season. El rico cuero de grano con detalles brillantes hace que este par brille como luz navideña. La tecnología de aire no absorbe el impacto para la amortiguación con cada paso. Genuina y cuero sintético y superior textil para la durabilidad. Más detalles . Logotipo de alas en el talón. Jumpman Air Longue Etiqueta. Dedo del pie perforado. Cupsole de goma.'
    },
    {
        id: 4,
        nombreProducto: 'Tenis Kyrie Irving',
        precio: 350000,
        imagen: '../imagenes/kyrieIrvin.WEBP',
        talla: ['8 us','9 us'],
        color: ['Rojo','azul/blanco'],
        cantidad: 1,
        descripcion: 'Kyrie corta con tanta fuerza y rapidez que hace que los demás parezcan estar quietos. El Kyrie Flytrap 5 brinda una excelente tracción no solo debajo de los pies, sino también en los costados, para que puedas empujar los bordes al cambiar de dirección. Infundido con el ADN del diseño Kyrie con fallas, el último Flytrap cuenta con correas de contención y una unidad Zoom Air cargada en la parte delantera del pie.'

    },
    {
        id: 5,
        nombreProducto: 'Sudadera Nike Para hombre',
        precio: 150000,
        imagen: '..//imagenes/sudaderaNike.WEBP',
        talla: ['S','M','L'],
        color: ['Negro','verde'],
        cantidad: 1,
        descripcion:'Los pantalones Nike Therma-FIT retienen el calor corporal y absorben el sudor al mismo tiempo, ayudándote a mantenerte abrigado y seco antes, durante y después del entrenamiento. La tela suave (hecha con al menos un 50 % de fibras de poliéster reciclado) se siente cómoda contra la piel.'
    },
    {
        id: 6,
        nombreProducto: 'Sueter Balenciaga BB',
        precio: 250000,
        imagen: '../imagenes/sueterBB.WEBP',
        talla: ['S','M','L'],
        color: ['Negro','verde'],
        cantidad: 1,
        descripcion:'Beige, mezcla de lana y algodón, logo tejido de intarsia, cuello redondo, hombros caídos, manga larga y ribete de canalé. POSITIVELY CONSCIOUS: nos unimos con la agencia ética Good On You, la cual valora el desempeño sostenible de las marcas teniendo en cuenta tres criterios: el bienestar de las personas, del planeta y animal. Este producto proviene de una marca que tiene buen desempeño en relación con su impacto en el planeta como, por ejemplo, garantiza el uso de materiales que limitan la cantidad de químicos, agua y aguas residuales usados en su producción..'
    },
    {
        id: 7,
        nombreProducto: 'Sueter FB',
        precio: 150000,
        imagen: '../imagenes/sueterGB.WEBP',
        talla: ['S','M','L'],
        color: ['Blanco','verde'],
        cantidad: 1,
        descripcion:'Camiseta Manga corta clásica, cuello redondo con estampado de logo DC en el frente'
    },
    {
        id: 8,
        nombreProducto: 'Tenis Bota Armani',
        precio: 550000,
        imagen: '../imagenes/TenisArmani.WEBP',
        talla: ['7 us', '8 us'],
        color: ['Azul','verde'],
        cantidad: 1,
        descripcion: 'Gris, gamuza de becerro, logo estampado en el lateral, logo bordado en el lateral, parche del logo en la lengüeta, cierre con agujetas en la parte delantera, plantilla con logo, logo en el contrafuerte y suela plana de goma.'
    },
    {
        id: 9,
        nombreProducto: 'Tenis balmain para hombre',
        precio: 950000,
        imagen: '../imagenes/tenisBalmain.WEBP',
        talla: ['7 us', '8 us','9 us'],
        color: ['Azul','verde','blanco'],
        cantidad: 1,
        descripcion:'Negro, piel de becerro, logo estampado en el lateral, logo en relieve en el lateral, cierre con agujetas en la parte delantera, plantilla con logo, suela gruesa de goma y puntera redonda.'
    },
    {
        id: 10,
        nombreProducto: 'Tenis Gucci para dama',
        precio: 550000,
        imagen: '../imagenes/TenisGucci.WEBP',
        talla: ['7 us', '8 us','9 us'],
        color: ['Azul','verde'],
        cantidad: 1,
        descripcion:'Las clásicas zapatillas de caña baja de la Firma se decoran con el motivo de abeja bordado con hilo dorado sobre la tribana Web verde y roja. La abeja es un código de los archivos de la Firma que se presentó por primera vez en una colección de ready-to-wear de Gucci de los años 70.'
    },
    {
        id: 11,
        nombreProducto: 'Tenis Gucci Blancos',
        precio: 150000,
        imagen: '../imagenes/TenisGucciA.WEBP',
        talla: ['7 us', '8 us','9 us'],
        color: ['Azul','verde'],
        cantidad: 1,
        descripcion:'En esta colección se utilizan nuevas combinaciones de materiales y colores que confieren un toque exquisito a los diseños más emblemáticos de la Firma. Estas zapatillas Screener son un regalo cargado de simbolismo ideal para demostrar amor, ya que se han fabricado en piel con estampado floral, la tribanda Web y un sinfín de detalles como el emblema de Doble G, un logotipo vintage, una suela con plataforma plana de dos colores y unos cordones gruesos.'
    },
]