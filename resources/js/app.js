
import {createApp, h} from 'vue'
 /*import route from 'ziggy';
 import { Ziggy } from 'ziggyRoutes'*/

import {createInertiaApp} from "@inertiajs/inertia-vue3/src";
// import AboutComponent from "resources/js/Pages/AboutComponent";
createApp.prototype.$route=route;
createInertiaApp({

    id:'app', //Es el valor por defecto, no haría falta ponerlo
    resolve: name => import(`./Pages/${name}`),
    setup({el, app, props, plugin}) {
        createApp({render: () => h(app, props)})
            .use(plugin)
            .mount(el)
    },
})
