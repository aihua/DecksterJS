this["Deckster"] = this["Deckster"] || {};
this["Deckster"]["Templates"] = this["Deckster"]["Templates"] || {};

this["Deckster"]["Templates"]["card/card"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) { if (card.isPopout) { ;__p += '\n<div class="deckster-card is-popout" id="' +((__t = ( card.id )) == null ? '' : __t) +'">\n'; } else { ;__p += '\n<div class="deckster-card" id="' +((__t = ( card.id )) == null ? '' : __t) +'">\n'; } ;__p += '\n    <div class="deckster-card-inner">\n        <div class="deckster-card-header">\n            <div class="card-icon"><i class="' +((__t = ( card.icon )) == null ? '' : __t) +'"></i></div>\n            <div class="deckster-card-functions">\n                <span class="deckster-card-function deckster-card-menu glyphicon glyphicon-menu-hamburger"></span>\n            </div>\n            <div class="deckster-card-controls">\n                <span class="deckster-card-control deckster-card-reload glyphicon glyphicon-refresh"></span>\n                <span class="deckster-card-control deckster-card-toggle glyphicon glyphicon-resize-full"></span>\n                <a href="deckster/card/' +((__t = ( card.id )) == null ? '' : __t) +'" class="deckster-card-control deckster-card-popout glyphicon glyphicon-new-window thin"></a>\n            </div>\n            <div class="deckster-card-title drag-handle">' +((__t = ( card.title )) == null ? '' : __t) +'</div>\n        </div>\n        <div class="deckster-card-content">\n            <div class="deckster-card-loading"></div>\n            <div class="deckster-summary"></div>\n            <div class="deckster-details" style="display: none;"></div>\n        </div>\n    </div>\n</div>';}return __p};