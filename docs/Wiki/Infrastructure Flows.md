<a id="top"></a>
![logo](http://TIOF.Click/PLDWikiHeader)
***


```uml
Bob->Alice : foo
Bob<--Alice : foo
```


function makeUml() {
    window.RawDeflate && _.each(previewContentsElt.querySelectorAll('.prettyprint > .language-uml'), function(elt) {
        try {
            var preElt = elt.parentNode;
            var imgElt = $('<img>').attr({
                src: 'http://www.plantuml.com/plantuml/img/' + encode64(window.RawDeflate.deflate(elt.textContent))
            });
            preElt.parentNode.replaceChild(imgElt[0], preElt);
        }
        catch(e) {
        }
    });
}
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTM2NDIzNzMzLC0xNDg1OTUwODQzLDIwND
AyOTc2MjJdfQ==
-->