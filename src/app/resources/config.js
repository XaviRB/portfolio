const baseURL = 'nextjs-portfolio.up.railway.app'

const routes = {
    '/':     true,
    '/about': true,
    '/work': true,
    '/blog': false,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
}

const effects = {
    gradient: true,
    dots:     true,
    lines:    true,
}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'cyan',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'aqua',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'color',        // color | contrast
    solidStyle:  'plastic',      // flat | plastic
    border:      'rounded',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
    location: true,
    time:     true
}

export { routes, protectedRoutes, effects, style, display, baseURL };
