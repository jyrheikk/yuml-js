(function (outerTag, classSuffix) {
  var UML = {
    diagrams: [ 'activity', 'class', 'usecase' ],

    getDiagramURL: function(html, diagramName) {
      return 'http://yuml.me/diagram/' + diagramName + '/' +
        this.parseDiagram(html);
    },

    parseDiagram: function(html) {
      return [ html ]
        .map(getData)
        .map(decodeHTML)
        .map(encodeURI)
        .shift();

      function getData(str) {
        return str.replace(/[\r\n]+/g, ',')
          .replace(/(^,|,$)/g, '');
      }

      function decodeHTML(html) {
        return html.replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&#([0-9]+);/g, "$1");
      }
    }
  };

  Array.prototype.forEach.call(document.getElementsByTagName(outerTag),
    createImage);

  function createImage(tag) {
    UML.diagrams.filter(findWithSuffix.bind(null, tag))
      .map(UML.getDiagramURL.bind(UML, tag.innerHTML))
      .map(getImageTag)
      .forEach(function (url) {
        tag.innerHTML = url;
      });
  }

  function findWithSuffix(tag, hay) {
    return tag.className === hay + classSuffix;
  }

  function getImageTag(url) {
    return '<img src="' + url + '" />';
  }
})('pre', 'diagram');
