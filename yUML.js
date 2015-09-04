/** @see https://github.com/jyrheikk/yuml-js/ */
(function (outerTag, diagramClassSuffix) {
  var UML = {
    diagramNames: [ 'activity', 'class', 'usecase' ],
    baseURL: 'http://yuml.me/diagram/',

    getDiagramURL: function(html, diagramName) {
      var data = this.getData(html);
      var params = this.decodeHTML(data);
      return this.getURL(diagramName, params);
    },

    getData: function(str) {
      return str.replace(/[\r\n]+/g, ',').replace(/(^,|,$)/g, '');
    },

    decodeHTML: function(html) {
      return html.replace(/&lt;/g, '<').
        replace(/&gt;/g, '>').
        replace(/&amp;/g, '&').
        replace(/&#([0-9]+);/g, "$1");
    },

    getURL: function(diagramName, data) {
      return this.baseURL + diagramName + '/' + encodeURI(data);
    }
  };

  var tags = document.getElementsByTagName(outerTag);
  tags.forEach(function (tag) {
    var diagramName = getValue(tag.className, UML.diagramNames, diagramClassSuffix);
    if (diagramName) {
      var url = UML.getDiagramURL(tag.innerHTML, diagramName);
      tag.innerHTML = getImageTag(url);
    }
  });

  function getValue(needle, haystack, suffix) {
    var value;
    haystack.some(function (hay) {
      if (needle === hay + suffix) {
        value = hay;
        return true;
      }
    }
    return value;
  }

  function getImageTag(url) {
    return '<img src="' + url + '" />';
  }
})('pre', 'diagram');
