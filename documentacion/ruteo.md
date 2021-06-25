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






