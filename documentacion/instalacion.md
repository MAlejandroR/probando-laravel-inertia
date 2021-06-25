## Introducción

Este fichero explicará de forma concreta todas las acciones realizadas para crear el ecosistema de desarrollo de este proyecto

Es la primera vez que uso ***intertia*** y quiero dejar documentado cómo lo he usado describiendo problemas encontrados


## Instalación

Se puede instalar de dos formas:
'''''bash
````shell
laravel new incidencias --jet
````
Realizan preguntas, seleccionarmos *****inertia*****
![Imagen de instalación con --jet](./documentacion/imagenes/instalacion/instalacion_jet.png)

Voy  a instalarlo siguiendo la página oficial, instalando primero al parte del servidor y a continuación la parte del cliente

### Instalación al lado del servidor
 
Pero instalo agregando el paquete ***inertiajs*** via composer siguiendo la web de inertia
 
 https://inertiajs.com/server-side-setup

````shell
laravel new incidencias 
composer require inertiajs/inertia-laravel
````

Modifico la página inicial *****app.blade.php***** 

Instalamos el ***middleware*** de ***inertia***
````shell
php artisan inertia:middleware
`````

Ahora registramos el middleware (HandleInertiaRequests) en  App\Http\Kernel.php, en el item ***middlewaregroups***

````shell
  protected $middlewareGroups = [
        'web' => [
          \App\Http\Middleware\HandleInertiaRequests::class,
`````
### Instalación al lado del cliente

*Instalamos las dependencias. En el cliente vamos a usar Vue en su versión 3. Otras versiones o usar React, ver la página oficial
````shell
npm install @inertiajs/inertia @inertiajs/inertia-vue3
`````
*Ahora escribimos el ficheor ***app.js***

* Indicador de progreso
Como es una llamada XHR (ajax), para que el usuario ve que la página está cambiando podemos agregar un indicador de progreso
  Para ello lo instamos vía npm
````shell
npm install @inertiajs/progress
`````

Ahora habría que agregar este indicar en la página
````javascript
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()
````
* División de paquetes (MRM ????)
Con la intención de dividir las distintas páginas en pequeños paquetes que se cargarán según se necesite
Con esto se consigue  reducir significativamente el tamaño del paquete de JavaScript inicial, mejorando el tiempo hasta la primera renderización.
  *Para ello instalamos vía npm el siguiente  paquete
````shell
npm install @babel/plugin-syntax-dynamic-import

`````
Y para que tenga efecto, creamos un fichero *****.babelrc***** con el contenido

* Modificar el fichero app.js (MRM ????)
En el fichero app.js, modificamos el *****require***** por un *****import*****
````javascript

  resolve: name => import(`./Pages/${name}`),
  `````

* Ahora para hacer que la cache fuerce la carga de asset (css y js) cuando cambie escrimos en el webpack

`````javascript
output: {
`````
  chunkFilename: 'js/[name].js?id=[chunkhash]',
}
`````

*((MRM ????))Para ello creo un fichero de configuración webpack.config.js 










