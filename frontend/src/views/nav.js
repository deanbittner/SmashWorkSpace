let m = require('mithril');
let smBlockly = require('../smBlockly');
let button = require('../components/button');


let nav = {
    view: function() {
        return m('nav', {
            class: 'navbar navbar-inverse bg-inverse navbar-toggleable-sm'
        }, [
            m('a', {
                class: 'navbar-brand',
                href: '/'
            }, [
                m('img', {
                    class: 'd-inline-block align-top',
                    src: '../assets/logo_text.png',
                    height: '30px',
                    alt: 'Run-WithIt'
                })
            ]),
            m('div', {
                class: 'collapse navbar-collapse'
            }, [
                m('form', {
                    class: 'form-inline'
                }, [
                    m(button, {
                        text: 'save blocks',
                        onclick: smBlockly.saveBlocks
                    }),
                    m(button, {
                        text: 'save scripts',
                        onclick: smBlockly.saveScripts
                    }),
                    m(button, {
                        text: 'import blocks',
                        onclick: smBlockly.importBlocks
                    }),
                    m(button, {
                        text: 'export blocks',
                        id: 'export-blocks',
                        onclick: smBlockly.exportBlocks
                    }),
                    m(button, {
                        text: 'export scripts',
                        onclick: smBlockly.exportScripts
                    })
                ])
            ])
        ]);
    }
}


module.exports = nav;
