webpackJsonp([1],{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(190);

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {
window._ = __webpack_require__(104);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(10);
  __webpack_require__(105);

  __webpack_require__(103);
  window.WS = __webpack_require__(191);

  console.log(window.WS);
} catch (e) {}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

var WS = function () {
    var GosSocket = function GosSocket(uri, config) {

        /**
         * Holds the uri to connect to
         * @type {String}
         * @private
         */
        this._uri = uri;

        /**
         * Hold autobahn session reference
         * @type {Mixed}
         * @private
         */
        this._session = false;

        /**
         * Hold event callbacks
         * @type {Object}
         * @private
         */
        this._listeners = {};

        //calls the Gos Socket connect function.
        this.connect();
    };

    GosSocket.prototype.connect = function () {
        var that = this;

        ab.connect(this._uri,

        //Function on connect
        function (session) {
            that.fire({ type: "socket/connect", data: session });
        },

        //Function on disconnect / error
        function (code, reason) {
            that._session = false;

            that.fire({ type: "socket/disconnect", data: { code: code, reason: reason } });
        });
    };

    /**
     * Adds a listener for an event type
     *
     * @param {String} type
     * @param {function} listener
     */
    GosSocket.prototype.on = function (type, listener) {
        if (typeof this._listeners[type] == "undefined") {
            this._listeners[type] = [];
        }

        this._listeners[type].push(listener);
    };

    /**
     * Fires an event for all listeners.
     * @param {String} event
     */
    GosSocket.prototype.fire = function (event) {
        if (typeof event == "string") {
            event = { type: event };
        }
        if (!event.target) {
            event.target = this;
        }

        if (!event.type) {
            //falsy
            throw new Error("Event object missing 'type' property.");
        }

        if (this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event.data);
            }
        }
    };

    /**
     * Removes a listener from an event
     *
     * @param {String} type
     * @param {function} listener
     */
    GosSocket.prototype.off = function (type, listener) {
        if (this._listeners[type] instanceof Array) {
            var listeners = this._listeners[type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    };

    return {
        connect: function connect(uri) {
            return new GosSocket(uri);
        }
    };
}();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(171);
module.exports = __webpack_require__(173);


/***/ })

},[415]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvUmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzcz9iYzNmIiwid2VicGFjazovLy8uL2FwcC9SZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZ29zL3dlYi1zb2NrZXQtYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvZ29zX3dlYl9zb2NrZXRfY2xpZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJfIiwiJCIsIldTIiwiY29uc29sZSIsImxvZyIsImUiLCJHb3NTb2NrZXQiLCJ1cmkiLCJjb25maWciLCJfdXJpIiwiX3Nlc3Npb24iLCJfbGlzdGVuZXJzIiwiY29ubmVjdCIsInByb3RvdHlwZSIsInRoYXQiLCJhYiIsInNlc3Npb24iLCJmaXJlIiwidHlwZSIsImRhdGEiLCJjb2RlIiwicmVhc29uIiwib24iLCJsaXN0ZW5lciIsInB1c2giLCJldmVudCIsInRhcmdldCIsIkVycm9yIiwiQXJyYXkiLCJsaXN0ZW5lcnMiLCJpIiwibGVuIiwibGVuZ3RoIiwiY2FsbCIsIm9mZiIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7OztBQU1BLG1CQUFBQSxDQUFRLEdBQVIsRTs7Ozs7OztBQ1BBLHlDOzs7Ozs7OztBQ0NBQyxPQUFPQyxDQUFQLEdBQVcsbUJBQUFGLENBQVEsR0FBUixDQUFYOztBQUVBOzs7Ozs7QUFNQSxJQUFJO0FBQ0FDLFNBQU9FLENBQVAsR0FBVyx1Q0FBZ0IsbUJBQUFILENBQVEsRUFBUixDQUEzQjtBQUNBQSxFQUFBLG1CQUFBQSxDQUFRLEdBQVI7O0FBRUFBLEVBQUEsbUJBQUFBLENBQVEsR0FBUjtBQUNBQyxTQUFPRyxFQUFQLEdBQVksbUJBQUFKLENBQVEsR0FBUixDQUFaOztBQUVBSyxVQUFRQyxHQUFSLENBQVlMLE9BQU9HLEVB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QTdDLEVBQWlEO0FBQzdDLG9CQUFJRCxVQUFVQyxDQUFWLE1BQWlCUCxRQUFyQixFQUE4QjtBQUMxQk0sOEJBQVVNLE1BQVYsQ0FBaUJMLENBQWpCLEVBQW9CLENBQXBCO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFDSixLQVZEOztBQVlBLFdBQU87QUFDSGxCLGlCQUFTLGlCQUFTTCxHQUFULEVBQ1Q7QUFDSSxtQkFBTyxJQUFJRCxTQUFKLENBQWNDLEdBQWQsQ0FBUDtBQUNIO0FBSkUsS0FBUDtBQU9ILENBL0dRLEVBQVQsQyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvUmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL1Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxud2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbnRyeSB7XG4gICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4gICAgcmVxdWlyZSgnbWF0ZXJpYWxpemUtY3NzJyk7XG5cbiAgICByZXF1aXJlKCdhdXRvYmFobicpO1xuICAgIHdpbmRvdy5XUyA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vLi4vdmVuZG9yL2dvcy93ZWItc29ja2V0LWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2dvc193ZWJfc29ja2V0X2NsaWVudC5qcycpO1xuXG4gICAgY29uc29sZS5sb2cod2luZG93LldTKTtcbn0gY2F0Y2ggKGUpIHt9XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL1Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwidmFyIFdTID0gKGZ1bmN0aW9uKClcbntcbiAgICB2YXIgR29zU29ja2V0ID0gZnVuY3Rpb24odXJpLCBjb25maWcpe1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkcyB0aGUgdXJpIHRvIGNvbm5lY3QgdG9cbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3VyaSA9IHVyaTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSG9sZCBhdXRvYmFobiBzZXNzaW9uIHJlZmVyZW5jZVxuICAgICAgICAgKiBAdHlwZSB7TWl4ZWR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zZXNzaW9uID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvbGQgZXZlbnQgY2FsbGJhY2tzXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcblxuICAgICAgICAvL2NhbGxzIHRoZSBHb3MgU29ja2V0IGNvbm5lY3QgZnVuY3Rpb24uXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH07XG5cbiAgICBHb3NTb2NrZXQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgICBhYi5jb25uZWN0KHRoaXMuX3VyaSxcblxuICAgICAgICAgICAgLy9GdW5jdGlvbiBvbiBjb25uZWN0XG4gICAgICAgICAgICBmdW5jdGlvbihzZXNzaW9uKXtcbiAgICAgICAgICAgICAgICB0aGF0LmZpcmUoe3R5cGU6IFwic29ja2V0L2Nvbm5lY3RcIiwgZGF0YTogc2Vzc2lvbiB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vRnVuY3Rpb24gb24gZGlzY29ubmVjdCAvIGVycm9yXG4gICAgICAgICAgICBmdW5jdGlvbihjb2RlLCByZWFzb24pe1xuICAgICAgICAgICAgICAgIHRoYXQuX3Nlc3Npb24gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoYXQuZmlyZSh7dHlwZTogXCJzb2NrZXQvZGlzY29ubmVjdFwiLCBkYXRhOiB7Y29kZTogY29kZSwgcmVhc29uOiByZWFzb259fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciBmb3IgYW4gZXZlbnQgdHlwZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAqL1xuICAgIEdvc1NvY2tldC5wcm90b3R5cGUub24gPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcil7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFuIGV2ZW50IGZvciBhbGwgbGlzdGVuZXJzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAqL1xuICAgIEdvc1NvY2tldC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgIGV2ZW50ID0geyB0eXBlOiBldmVudCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0KXtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWV2ZW50LnR5cGUpeyAgLy9mYWxzeVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXZlbnQgb2JqZWN0IG1pc3NpbmcgJ3R5cGUnIHByb3BlcnR5LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV0gaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wLCBsZW49bGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBldmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnJvbSBhbiBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAqL1xuICAgIEdvc1NvY2tldC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpe1xuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MCwgbGVuPWxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpe1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29ubmVjdDogZnVuY3Rpb24odXJpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdvc1NvY2tldCh1cmkpO1xuICAgICAgICB9XG4gICAgfVxuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9nb3Mvd2ViLXNvY2tldC1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9nb3Nfd2ViX3NvY2tldF9jbGllbnQuanMiXSwic291cmNlUm9vdCI6IiJ9