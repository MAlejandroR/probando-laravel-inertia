<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About this project

Para probar Inertia, voy a hacer un proyecto ejemplo.


Inertia consiste en crar una aplicación tipo SPA usando Laravel como framework en back.

Voy a usar Vue en front (se puede usar React o Stelve (no lo conocía))..

Inertia va a hacer que las páginas que se renderizan sean páginas js, no plantillas blade.

Funciona con XHR o sea con ajax en todoas las solicitudes, menos la primera carga..

Es muy interesante la lectura de la página oficial, la cual sigo y voy documentando
 https://inertiajs.com/

## Proceso de instalación

* [Creación del ecosistema o instalación](./documentacion/instalacion.md)

* [Concepto de portal-vue](./documentacion/portal-vue.md)


## Rutas usando inertia
Usando inertia, estamos desarrollando una SPA pero con laravel, por lo que el routeo será el que hagamos habitualmente con laravel no usando rutas con vue.
Por lo tanto las rutas las especificaremos en *****web.php*****
Pero va a cambiar los métodos de la facade *****Route*****

 Por ejemplo si queremos referenciar directamente a páginas lo expresaremos











