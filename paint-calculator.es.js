import xe from "react";
import pr from "react-dom";
var te = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function hr() {
  if (we) return I;
  we = 1;
  var R = xe, y = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, b = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(T, f, S) {
    var p, g = {}, O = null, N = null;
    S !== void 0 && (O = "" + S), f.key !== void 0 && (O = "" + f.key), f.ref !== void 0 && (N = f.ref);
    for (p in f) m.call(f, p) && !L.hasOwnProperty(p) && (g[p] = f[p]);
    if (T && T.defaultProps) for (p in f = T.defaultProps, f) g[p] === void 0 && (g[p] = f[p]);
    return { $$typeof: y, type: T, key: O, ref: N, props: g, _owner: b.current };
  }
  return I.Fragment = _, I.jsx = k, I.jsxs = k, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function yr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var R = xe, y = Symbol.for("react.element"), _ = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ne = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var w = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ae = !1, Ie = !1, $e = !1, We = !1, Ye = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === L || Ye || e === b || e === S || e === p || We || e === N || Ae || Ie || $e || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === g || e.$$typeof === k || e.$$typeof === T || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case _:
          return "Portal";
        case L:
          return "Profiler";
        case b:
          return "StrictMode";
        case S:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return oe(r) + ".Consumer";
          case k:
            var t = e;
            return oe(t._context) + ".Provider";
          case f:
            return Ne(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case O: {
            var i = e, u = i._payload, o = i._init;
            try {
              return E(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, D = 0, ie, ue, se, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ue() {
      {
        if (D === 0) {
          ie = console.log, ue = console.info, se = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ve() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ie
            }),
            info: C({}, e, {
              value: ue
            }),
            warn: C({}, e, {
              value: se
            }),
            error: C({}, e, {
              value: le
            }),
            group: C({}, e, {
              value: ce
            }),
            groupCollapsed: C({}, e, {
              value: fe
            }),
            groupEnd: C({}, e, {
              value: de
            })
          });
        }
        D < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = w.ReactCurrentDispatcher, G;
    function U(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var z = !1, V;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Me();
    }
    function pe(e, r) {
      if (!e || z)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (v) {
              n = v;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        z = !1, K.current = u, Ve(), Error.prepareStackTrace = i;
      }
      var x = e ? e.displayName || e.name : "", P = x ? U(x) : "";
      return typeof e == "function" && V.set(e, P), P;
    }
    function Be(e, r, t) {
      return pe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, qe(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case S:
          return U("Suspense");
        case p:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Be(e.render);
          case g:
            return M(e.type, r, t);
          case O: {
            var n = e, i = n._payload, u = n._init;
            try {
              return M(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, he = {}, ye = w.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var u = Function.call.bind(F);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (B(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), B(null)), a instanceof Error && !(a.message in he) && (he[a.message] = !0, B(i), c("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Ke = Array.isArray;
    function H(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (ze(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Ee(e);
    }
    var A = w.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, _e, X;
    X = {};
    function Xe(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = E(A.current.type);
        X[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(A.current.type), e.ref), X[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (Re(t), a = "" + t), Ze(r) && (Re(r.key), a = "" + r.key), Xe(r) && (d = r.ref, Qe(r, i));
        for (u in r)
          F.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, l), d && rr(o, l);
        }
        return tr(e, a, d, i, n, A.current, o);
      }
    }
    var Z = w.ReactCurrentOwner, me = w.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function be() {
      {
        if (Z.current) {
          var e = E(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Te = {};
    function or(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + E(e._owner.type) + "."), j(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && Oe(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = De(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ee(o.value) && Oe(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var i = E(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    var Pe = {};
    function Se(e, r, t, n, i, u) {
      {
        var o = Le(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = ar();
          d ? a += d : a += be();
          var s;
          e === null ? s = "null" : H(e) ? s = "array" : e !== void 0 && e.$$typeof === y ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = nr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (H(h)) {
                for (var x = 0; x < h.length; x++)
                  Ce(h[x], e);
                Object.freeze && Object.freeze(h);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(h, e);
        }
        if (F.call(r, "key")) {
          var P = E(e), v = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), re = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[P + re]) {
            var dr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, P, dr, P), Pe[P + re] = !0;
          }
        }
        return e === m ? ur(l) : ir(l), l;
      }
    }
    function sr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var cr = lr, fr = sr;
    $.Fragment = m, $.jsx = cr, $.jsxs = fr;
  }()), $;
}
process.env.NODE_ENV === "production" ? te.exports = hr() : te.exports = yr();
var J = te.exports, Y = {}, W = pr;
if (process.env.NODE_ENV === "production")
  Y.createRoot = W.createRoot, Y.hydrateRoot = W.hydrateRoot;
else {
  var q = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Y.createRoot = function(R, y) {
    q.usingClientEntryPoint = !0;
    try {
      return W.createRoot(R, y);
    } finally {
      q.usingClientEntryPoint = !1;
    }
  }, Y.hydrateRoot = function(R, y, _) {
    q.usingClientEntryPoint = !0;
    try {
      return W.hydrateRoot(R, y, _);
    } finally {
      q.usingClientEntryPoint = !1;
    }
  };
}
function Er() {
  return /* @__PURE__ */ J.jsx(J.Fragment, { children: /* @__PURE__ */ J.jsx("h1", { children: "Hey, this is the paint calculator" }) });
}
function Rr(R, y) {
  class _ extends HTMLElement {
    constructor() {
      super(), this.root = null, this.mountPoint = document.createElement("div");
    }
    connectedCallback() {
      var b;
      this.attachShadow({ mode: "open" }), (b = this.shadowRoot) == null || b.appendChild(this.mountPoint), this.root = Y.createRoot(this.mountPoint), this.root.render(/* @__PURE__ */ J.jsx(R, {}));
    }
    disconnectedCallback() {
      this.root && this.root.unmount();
    }
  }
  window.customElements.define(y, _);
}
Rr(Er, "paint-calculator");
