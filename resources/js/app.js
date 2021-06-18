import {createApp, h} from 'vue';
import {createInertiaApp} from "@inertiajs/inertia-vue3/src";

createInertiaApp({
    id:'app', //Es el valor por defecto, no haría falta ponerlo
    resolve: name => import(`./Pages/${name}`),
    setup({el, app, props, plugin}) {
        createApp({render: () => h(app, props)})
            .use(plugin)
            .mount(el)
    },
})
