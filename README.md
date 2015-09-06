# UML Diagram Creator in JavaScript

> Keep Knowledge in Plain Text. ([_The Pragmatic Programmer_](https://en.wikipedia.org/wiki/The_Pragmatic_Programmer))

On your web page,

1. Create and maintain UML diagrams in simple [yUML text notation](http://yuml.me/).
1. Include [`yUML.js`](yUML.js) (from your web server) to generate UML diagram images on-the-fly.

**Ease of maintenance** is the main benefit: when UML diagrams are generated from text, no proprietary drawing tool is needed.

## Known issues and warnings

* IE browsers may give a security warning (_"Do you want to view only the webpage content that was delivered securely?"_) if the web page is accessed over HTTPS because the UML diagrams come over HTTP and the yUML site does not have a valid SSL certificate.
* In the intranet, do **not include confidential information in UML diagrams** (as they are generated by a public service on-the-fly) or in the web page URL (because the HTTP request header `Referer` is leaked).

In any case, it's a good practice to use well-known acronyms (CDN, CMS) and generic names (Web Server, Database) in UML diagrams.

## Example HTML

Use case diagrams clarify requirements:

    <pre class="usecasediagram">
    [Software Developer]-(Create HTML page)
    (Create HTML page)>(Create yUML notation)
    (Create yUML notation)<(Create class diagram)
    (Create yUML notation)<(Create use case diagram)
    (Create HTML page)>(Include yUML.js)
    </pre>

Class diagrams describe systems/components and their relations/dependencies:

    <pre class="classdiagram">
    [HTML]<>-1[yUML.js]
    [HTML]<>-1..*[yUML notation]
    [yUML notation]^-[Use case diagram]
    [yUML notation]^-[Class diagram]
    </pre>

    <script src="yUML.js"></script>

See the [example HTML page](https://googledrive.com/host/0B_SyvfG74aYYdDBOY3VSSG14QjA/example-yuml-js.html) that contains the UML diagrams above. (Note that `yUML.js` cannot be included on GitHub pages because they strip away the `script` tags.)

## Sequence diagrams

The yUML site does not support sequence diagrams, but they can be created in a similar fashion elsewhere:

1. Create a sequence diagram using the [WebSequenceDiagrams.com](https://www.websequencediagrams.com/) notation.
1. [Embed the diagram code](http://www.websequencediagrams.com/embedding.html) on your web page.
