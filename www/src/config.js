require.config({
    baseUrl: "./src",
    paths: {
        jquery: "./lib/jquery.min",
        vue: "./lib/vue",
        bootstrap: "./assets/js/bootstrap/js/bootstrap.min",
        material: "./assets/js/bootstrap-material-design/js/material.min",
        html: "./lib/html",
        text: "./lib/text",
        http: "./service/httpservice",
        jsSHA: "./lib/sha"
    },
    shim: {
        bootstrap: ['jquery'],
        material: ['jquery'],
    },
    packages: [
        {
            name: 'components',
            location: 'component',
            main: 'components'
        }
    ]
})
require(["./main"])
