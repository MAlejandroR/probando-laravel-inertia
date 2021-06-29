const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"ruta_ej1":{"uri":"ej1","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
