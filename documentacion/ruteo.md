## Rutas
Para establecer las rutas lo hacemos en el fichero de rutas *****web.php*****

Podemos referenciar una página estática directamente.
Usamos el método *****inertia***** de la facade *****Route*****
`````php
Route::inertia('/about', 'AboutComponent');
`````
Donde *****AboutComponent***** es un fichero *****vue***** ubicado en la carpeta

*****resources/js/Pages/***** donde ***Pages*** es el directorio que se ha establecido en el fichero *****app.js*****
Para nombrar las rutas y poderlas referenciar en el lado del cliente, de las diferentes opciones que tenemos, vamos a utilizar Ziggy, que es una librería que nos permite usar el método *****route()***** en la parte del cliente
### Instalando y usando Ziggy
`````bash
composer require tightenco/ziggy
`````
Una vez instalado, mi intención es tener rutas nominadas y poderlas invocar desde js como si lo estuviera haciendo en el back.

Hay diferentes formas de hacer el funcionamiento de ziggy. A mí me ha costado un poco.
Acciones:
Incluir la directiva *****@route***** en el fichero *****app.blade.php***** antes de cargar el fichero *****app.js*****
En el fichero *****app.js***** hacer pública la función *****route()***** para poderla utilizar, a través del método *****mixin*****, así como especificar el uso de la librería ziggy
```javascript
     createApp({render: () => h(app, props)})
             .mixin({ methods: { route: window.route } })
             .use(plugin,ZiggyVue, Ziggy)
```
A partir de ahora ya puedo usar la función de route(), parar referenciar a rutas creadas en el fichero *****web.php*****
## Modelo vista-conterolador con inertia.
Esto cambia con la forma de trabajar más tradicional de laravel. Como hemos comentado no hay páginas blade, solo ficheros vue que se renderizan

















