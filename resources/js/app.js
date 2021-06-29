import {createApp, h} from 'vue';


import {createInertiaApp} from "@inertiajs/inertia-vue3/src";

createInertiaApp({

    id: 'app', //Ese el valor por defecto, no haría falta ponerlo
    resolve: name => import(`./Pages/${name}`),
    setup({el, app, props, plugin}) {
        createApp({render: () => h(app, props)})
            .mixin({ methods: { route: window.route } })
            .use(plugin,ZiggyVue, Ziggy)
            .mount(el)
    },
})
