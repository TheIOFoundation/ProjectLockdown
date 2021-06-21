<a id="top"></a>
![logo](http://TIOF.Click/PLDWikiHeader)
***


```uml
Bob->Alice : foo
Bob<--Alice : foo
```
	


define([
    'jquery',
    'underscore',
    'utils',
    'logger',
    'pako',
    'classes/Extension'
], function($, _, utils, logger, pako, Extension) {

    /* PlantUML web service endpoint.
 * See http://plantuml.sourceforge.net/server.html
 */
    var plantumlServer = 'http://www.plantuml.com:80/plantuml/img/';

    /* PlantUML encoded input is very weird
 * This is just a pseudo copy paste of the reference Javascript
 * implementation available at:
 *
 *     http://plantuml.sourceforge.net/codejavascript2.html
 *
 * Expect instead of the rawdeflate library, pako was used so it can be
 * included as a requirejs dependency:
 *
 *     https://github.com/nodeca/pako
 */
    function encode64(data) {
        var r, i;
        r = '';
        for (i = 0; i < data.length; i += 3) {
            if (i + 2 == data.length) {
                r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), 0);
            } else if (i + 1 == data.length) {
                r += append3bytes(data.charCodeAt(i), 0, 0);
            } else {
                r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), data.charCodeAt(i + 2));
            }
        }
        return r;
    }

    function append3bytes(b1, b2, b3) {
        var r, c1, c2, c3, c4;
        c1 = b1 >> 2;
        c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
        c3 = ((b2 & 0xF) << 2) | (b3 >> 6);
        c4 = b3 & 0x3F;
        r = '';
        r += encode6bit(c1 & 0x3F);
        r += encode6bit(c2 & 0x3F);
        r += encode6bit(c3 & 0x3F);
        r += encode6bit(c4 & 0x3F);
        return r;
    }

    function encode6bit(b) {
        if (b < 10) {
            return String.fromCharCode(48 + b);
        }
        b -= 10;
        if (b < 26) {
            return String.fromCharCode(65 + b);
        }
        b -= 26;
        if (b < 26) {
            return String.fromCharCode(97 + b);
        }
        b -= 26;
        if (b === 0) {
            return '-';
        }
        if (b === 1) {
            return '_';
        }
        return '?';
    }

    function plantumlConvert(text) {
        var converted = encode64(pako.deflate(text, { to: 'string' }));
        return converted;
    }

    /*
 * StackEdit extension implementation
 */

    var umlDiagrams = new Extension('umlDiagrams', 'UML Diagrams', true);

    umlDiagrams.onPagedownConfigure = function(editor) {

        var previewContentsElt = document.getElementById('preview-contents');

        editor.hooks.chain('onPreviewRefresh', function() {

            _.each(previewContentsElt.querySelectorAll('.prettyprint > .language-uml'), function(elt) {
                try {
                    var preElt = elt.parentNode;
                    var imgElt = $('<img>').attr({
                        src: plantumlServer + plantumlConvert(elt.textContent)
                    });
                    preElt.parentNode.replaceChild(imgElt[0], preElt);
                }
                catch(e) {
                    console.error(e);
                }
            });

        });
    };

    return umlDiagrams;
});
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIxMDkzMjc3NV19
-->