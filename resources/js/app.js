import {createApp, h} from 'vue';


import {createInertiaApp} from "@inertiajs/inertia-vue3/src";

createInertiaApp({

    id: 'app', //Ese el valor por defecto, no haría falta ponerlo
    resolve: name => import(`./Pages/${name}`),//Hubicación de los componenetes
    setup({el, app, props, plugin}) {
        createApp({render: () => h(app, props)}) //createApp típico de vue
            .mixin({ methods: { route: window.route } }) //método route de ziggu
            .use(plugin,ZiggyVue, Ziggy)// la libraría ziggi
            .mount(el)// el id del
    },
})
