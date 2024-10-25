var _i = Object.defineProperty;
var Ai = (e, t, r) => t in e ? _i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var $t = (e, t, r) => Ai(e, typeof t != "symbol" ? t + "" : t, r);
import * as N from "react";
import it, { forwardRef as Pi, useContext as ki, Children as Mi, isValidElement as Zt, cloneElement as er } from "react";
function Ii(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ur = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Ni() {
  if (Mn) return Ot;
  Mn = 1;
  var e = it, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, p) {
    var h, m = {}, b = null, x = null;
    p !== void 0 && (b = "" + p), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (h in u) n.call(u, h) && !i.hasOwnProperty(h) && (m[h] = u[h]);
    if (c && c.defaultProps) for (h in u = c.defaultProps, u) m[h] === void 0 && (m[h] = u[h]);
    return { $$typeof: t, type: c, key: b, ref: x, props: m, _owner: o.current };
  }
  return Ot.Fragment = r, Ot.jsx = a, Ot.jsxs = a, Ot;
}
var _t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function ji() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = it, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, y = "@@iterator";
    function g(l) {
      if (l === null || typeof l != "object")
        return null;
      var $ = S && l[S] || l[y];
      return typeof $ == "function" ? $ : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(l) {
      {
        for (var $ = arguments.length, M = new Array($ > 1 ? $ - 1 : 0), q = 1; q < $; q++)
          M[q - 1] = arguments[q];
        T("error", l, M);
      }
    }
    function T(l, $, M) {
      {
        var q = w.ReactDebugCurrentFrame, se = q.getStackAddendum();
        se !== "" && ($ += "%s", M = M.concat([se]));
        var me = M.map(function(ne) {
          return String(ne);
        });
        me.unshift("Warning: " + $), Function.prototype.apply.call(console[l], console, me);
      }
    }
    var C = !1, d = !1, P = !1, k = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function s(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || J || l === o || l === p || l === h || k || l === x || C || d || P || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === m || l.$$typeof === a || l.$$typeof === c || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Z || l.getModuleId !== void 0));
    }
    function O(l, $, M) {
      var q = l.displayName;
      if (q)
        return q;
      var se = $.displayName || $.name || "";
      return se !== "" ? M + "(" + se + ")" : M;
    }
    function F(l) {
      return l.displayName || "Context";
    }
    function j(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            var $ = l;
            return F($) + ".Consumer";
          case a:
            var M = l;
            return F(M._context) + ".Provider";
          case u:
            return O(l, l.render, "ForwardRef");
          case m:
            var q = l.displayName || null;
            return q !== null ? q : j(l.type) || "Memo";
          case b: {
            var se = l, me = se._payload, ne = se._init;
            try {
              return j(ne(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, te = 0, ee, ve, ye, Ce, R, _, z;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function D() {
      {
        if (te === 0) {
          ee = console.log, ve = console.info, ye = console.warn, Ce = console.error, R = console.group, _ = console.groupCollapsed, z = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        te++;
      }
    }
    function Q() {
      {
        if (te--, te === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, l, {
              value: ee
            }),
            info: L({}, l, {
              value: ve
            }),
            warn: L({}, l, {
              value: ye
            }),
            error: L({}, l, {
              value: Ce
            }),
            group: L({}, l, {
              value: R
            }),
            groupCollapsed: L({}, l, {
              value: _
            }),
            groupEnd: L({}, l, {
              value: z
            })
          });
        }
        te < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = w.ReactCurrentDispatcher, U;
    function Y(l, $, M) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (se) {
            var q = se.stack.trim().match(/\n( *(at )?)/);
            U = q && q[1] || "";
          }
        return `
` + U + l;
      }
    }
    var H = !1, B;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      B = new G();
    }
    function v(l, $) {
      if (!l || H)
        return "";
      {
        var M = B.get(l);
        if (M !== void 0)
          return M;
      }
      var q;
      H = !0;
      var se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = V.current, V.current = null, D();
      try {
        if ($) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (Fe) {
              q = Fe;
            }
            Reflect.construct(l, [], ne);
          } else {
            try {
              ne.call();
            } catch (Fe) {
              q = Fe;
            }
            l.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            q = Fe;
          }
          l();
        }
      } catch (Fe) {
        if (Fe && q && typeof Fe.stack == "string") {
          for (var re = Fe.stack.split(`
`), Ne = q.stack.split(`
`), we = re.length - 1, $e = Ne.length - 1; we >= 1 && $e >= 0 && re[we] !== Ne[$e]; )
            $e--;
          for (; we >= 1 && $e >= 0; we--, $e--)
            if (re[we] !== Ne[$e]) {
              if (we !== 1 || $e !== 1)
                do
                  if (we--, $e--, $e < 0 || re[we] !== Ne[$e]) {
                    var Le = `
` + re[we].replace(" at new ", " at ");
                    return l.displayName && Le.includes("<anonymous>") && (Le = Le.replace("<anonymous>", l.displayName)), typeof l == "function" && B.set(l, Le), Le;
                  }
                while (we >= 1 && $e >= 0);
              break;
            }
        }
      } finally {
        H = !1, V.current = me, Q(), Error.prepareStackTrace = se;
      }
      var ut = l ? l.displayName || l.name : "", ot = ut ? Y(ut) : "";
      return typeof l == "function" && B.set(l, ot), ot;
    }
    function oe(l, $, M) {
      return v(l, !1);
    }
    function I(l) {
      var $ = l.prototype;
      return !!($ && $.isReactComponent);
    }
    function Se(l, $, M) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return v(l, I(l));
      if (typeof l == "string")
        return Y(l);
      switch (l) {
        case p:
          return Y("Suspense");
        case h:
          return Y("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return oe(l.render);
          case m:
            return Se(l.type, $, M);
          case b: {
            var q = l, se = q._payload, me = q._init;
            try {
              return Se(me(se), $, M);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Pe = {}, Ie = w.ReactDebugCurrentFrame;
    function je(l) {
      if (l) {
        var $ = l._owner, M = Se(l.type, l._source, $ ? $.type : null);
        Ie.setExtraStackFrame(M);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Rr(l, $, M, q, se) {
      {
        var me = Function.call.bind(_e);
        for (var ne in l)
          if (me(l, ne)) {
            var re = void 0;
            try {
              if (typeof l[ne] != "function") {
                var Ne = Error((q || "React class") + ": " + M + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              re = l[ne]($, ne, q, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              re = we;
            }
            re && !(re instanceof Error) && (je(se), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", M, ne, typeof re), je(null)), re instanceof Error && !(re.message in Pe) && (Pe[re.message] = !0, je(se), A("Failed %s type: %s", M, re.message), je(null));
          }
      }
    }
    var Yt = Array.isArray;
    function wt(l) {
      return Yt(l);
    }
    function K(l) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, M = $ && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return M;
      }
    }
    function qt(l) {
      try {
        return Ht(l), !1;
      } catch {
        return !0;
      }
    }
    function Ht(l) {
      return "" + l;
    }
    function Rt(l) {
      if (qt(l))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", K(l)), Ht(l);
    }
    var ct = w.ReactCurrentOwner, fi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Tn, wn, $r;
    $r = {};
    function di(l) {
      if (_e.call(l, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(l, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function pi(l) {
      if (_e.call(l, "key")) {
        var $ = Object.getOwnPropertyDescriptor(l, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function mi(l, $) {
      if (typeof l.ref == "string" && ct.current && $ && ct.current.stateNode !== $) {
        var M = j(ct.current.type);
        $r[M] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(ct.current.type), l.ref), $r[M] = !0);
      }
    }
    function hi(l, $) {
      {
        var M = function() {
          Tn || (Tn = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        M.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function gi(l, $) {
      {
        var M = function() {
          wn || (wn = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        M.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var yi = function(l, $, M, q, se, me, ne) {
      var re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: $,
        ref: M,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: me
      };
      return re._store = {}, Object.defineProperty(re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.freeze && (Object.freeze(re.props), Object.freeze(re)), re;
    };
    function bi(l, $, M, q, se) {
      {
        var me, ne = {}, re = null, Ne = null;
        M !== void 0 && (Rt(M), re = "" + M), pi($) && (Rt($.key), re = "" + $.key), di($) && (Ne = $.ref, mi($, se));
        for (me in $)
          _e.call($, me) && !fi.hasOwnProperty(me) && (ne[me] = $[me]);
        if (l && l.defaultProps) {
          var we = l.defaultProps;
          for (me in we)
            ne[me] === void 0 && (ne[me] = we[me]);
        }
        if (re || Ne) {
          var $e = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          re && hi(ne, $e), Ne && gi(ne, $e);
        }
        return yi(l, re, Ne, se, q, ct.current, ne);
      }
    }
    var Or = w.ReactCurrentOwner, Rn = w.ReactDebugCurrentFrame;
    function lt(l) {
      if (l) {
        var $ = l._owner, M = Se(l.type, l._source, $ ? $.type : null);
        Rn.setExtraStackFrame(M);
      } else
        Rn.setExtraStackFrame(null);
    }
    var _r;
    _r = !1;
    function Ar(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function $n() {
      {
        if (Or.current) {
          var l = j(Or.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function vi(l) {
      return "";
    }
    var On = {};
    function Si(l) {
      {
        var $ = $n();
        if (!$) {
          var M = typeof l == "string" ? l : l.displayName || l.name;
          M && ($ = `

Check the top-level render call using <` + M + ">.");
        }
        return $;
      }
    }
    function _n(l, $) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var M = Si($);
        if (On[M])
          return;
        On[M] = !0;
        var q = "";
        l && l._owner && l._owner !== Or.current && (q = " It was passed a child from " + j(l._owner.type) + "."), lt(l), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, q), lt(null);
      }
    }
    function An(l, $) {
      {
        if (typeof l != "object")
          return;
        if (wt(l))
          for (var M = 0; M < l.length; M++) {
            var q = l[M];
            Ar(q) && _n(q, $);
          }
        else if (Ar(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var se = g(l);
          if (typeof se == "function" && se !== l.entries)
            for (var me = se.call(l), ne; !(ne = me.next()).done; )
              Ar(ne.value) && _n(ne.value, $);
        }
      }
    }
    function Ci(l) {
      {
        var $ = l.type;
        if ($ == null || typeof $ == "string")
          return;
        var M;
        if (typeof $ == "function")
          M = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === m))
          M = $.propTypes;
        else
          return;
        if (M) {
          var q = j($);
          Rr(M, l.props, "prop", q, l);
        } else if ($.PropTypes !== void 0 && !_r) {
          _r = !0;
          var se = j($);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ei(l) {
      {
        for (var $ = Object.keys(l.props), M = 0; M < $.length; M++) {
          var q = $[M];
          if (q !== "children" && q !== "key") {
            lt(l), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), lt(null);
            break;
          }
        }
        l.ref !== null && (lt(l), A("Invalid attribute `ref` supplied to `React.Fragment`."), lt(null));
      }
    }
    var Pn = {};
    function kn(l, $, M, q, se, me) {
      {
        var ne = s(l);
        if (!ne) {
          var re = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = vi();
          Ne ? re += Ne : re += $n();
          var we;
          l === null ? we = "null" : wt(l) ? we = "array" : l !== void 0 && l.$$typeof === t ? (we = "<" + (j(l.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : we = typeof l, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, re);
        }
        var $e = bi(l, $, M, se, me);
        if ($e == null)
          return $e;
        if (ne) {
          var Le = $.children;
          if (Le !== void 0)
            if (q)
              if (wt(Le)) {
                for (var ut = 0; ut < Le.length; ut++)
                  An(Le[ut], l);
                Object.freeze && Object.freeze(Le);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              An(Le, l);
        }
        if (_e.call($, "key")) {
          var ot = j(l), Fe = Object.keys($).filter(function(Oi) {
            return Oi !== "key";
          }), Pr = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pn[ot + Pr]) {
            var $i = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pr, ot, $i, ot), Pn[ot + Pr] = !0;
          }
        }
        return l === n ? Ei($e) : Ci($e), $e;
      }
    }
    function xi(l, $, M) {
      return kn(l, $, M, !0);
    }
    function Ti(l, $, M) {
      return kn(l, $, M, !1);
    }
    var wi = Ti, Ri = xi;
    _t.Fragment = n, _t.jsx = wi, _t.jsxs = Ri;
  }()), _t;
}
process.env.NODE_ENV === "production" ? Ur.exports = Ni() : Ur.exports = ji();
var X = Ur.exports, Yr = { exports: {} }, Gt = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function Fi() {
  if (Nn) return ce;
  Nn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function T(d) {
    if (typeof d == "object" && d !== null) {
      var P = d.$$typeof;
      switch (P) {
        case t:
          switch (d = d.type, d) {
            case u:
            case p:
            case n:
            case i:
            case o:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case h:
                case S:
                case x:
                case a:
                  return d;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function C(d) {
    return T(d) === p;
  }
  return ce.AsyncMode = u, ce.ConcurrentMode = p, ce.ContextConsumer = c, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = h, ce.Fragment = n, ce.Lazy = S, ce.Memo = x, ce.Portal = r, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = m, ce.isAsyncMode = function(d) {
    return C(d) || T(d) === u;
  }, ce.isConcurrentMode = C, ce.isContextConsumer = function(d) {
    return T(d) === c;
  }, ce.isContextProvider = function(d) {
    return T(d) === a;
  }, ce.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, ce.isForwardRef = function(d) {
    return T(d) === h;
  }, ce.isFragment = function(d) {
    return T(d) === n;
  }, ce.isLazy = function(d) {
    return T(d) === S;
  }, ce.isMemo = function(d) {
    return T(d) === x;
  }, ce.isPortal = function(d) {
    return T(d) === r;
  }, ce.isProfiler = function(d) {
    return T(d) === i;
  }, ce.isStrictMode = function(d) {
    return T(d) === o;
  }, ce.isSuspense = function(d) {
    return T(d) === m;
  }, ce.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === p || d === i || d === o || d === m || d === b || typeof d == "object" && d !== null && (d.$$typeof === S || d.$$typeof === x || d.$$typeof === a || d.$$typeof === c || d.$$typeof === h || d.$$typeof === g || d.$$typeof === w || d.$$typeof === A || d.$$typeof === y);
  }, ce.typeOf = T, ce;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function Di() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function T(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === p || v === i || v === o || v === m || v === b || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === x || v.$$typeof === a || v.$$typeof === c || v.$$typeof === h || v.$$typeof === g || v.$$typeof === w || v.$$typeof === A || v.$$typeof === y);
    }
    function C(v) {
      if (typeof v == "object" && v !== null) {
        var oe = v.$$typeof;
        switch (oe) {
          case t:
            var I = v.type;
            switch (I) {
              case u:
              case p:
              case n:
              case i:
              case o:
              case m:
                return I;
              default:
                var Se = I && I.$$typeof;
                switch (Se) {
                  case c:
                  case h:
                  case S:
                  case x:
                  case a:
                    return Se;
                  default:
                    return oe;
                }
            }
          case r:
            return oe;
        }
      }
    }
    var d = u, P = p, k = c, J = a, Z = t, s = h, O = n, F = S, j = x, L = r, te = i, ee = o, ve = m, ye = !1;
    function Ce(v) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(v) || C(v) === u;
    }
    function R(v) {
      return C(v) === p;
    }
    function _(v) {
      return C(v) === c;
    }
    function z(v) {
      return C(v) === a;
    }
    function W(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function D(v) {
      return C(v) === h;
    }
    function Q(v) {
      return C(v) === n;
    }
    function V(v) {
      return C(v) === S;
    }
    function U(v) {
      return C(v) === x;
    }
    function Y(v) {
      return C(v) === r;
    }
    function H(v) {
      return C(v) === i;
    }
    function B(v) {
      return C(v) === o;
    }
    function G(v) {
      return C(v) === m;
    }
    le.AsyncMode = d, le.ConcurrentMode = P, le.ContextConsumer = k, le.ContextProvider = J, le.Element = Z, le.ForwardRef = s, le.Fragment = O, le.Lazy = F, le.Memo = j, le.Portal = L, le.Profiler = te, le.StrictMode = ee, le.Suspense = ve, le.isAsyncMode = Ce, le.isConcurrentMode = R, le.isContextConsumer = _, le.isContextProvider = z, le.isElement = W, le.isForwardRef = D, le.isFragment = Q, le.isLazy = V, le.isMemo = U, le.isPortal = Y, le.isProfiler = H, le.isStrictMode = B, le.isSuspense = G, le.isValidElementType = T, le.typeOf = C;
  }()), le;
}
var Fn;
function xo() {
  return Fn || (Fn = 1, process.env.NODE_ENV === "production" ? Gt.exports = Fi() : Gt.exports = Di()), Gt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var kr, Dn;
function Bi() {
  if (Dn) return kr;
  Dn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(h) {
        return a[h];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return kr = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), p, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var m in c)
        t.call(c, m) && (u[m] = c[m]);
      if (e) {
        p = e(c);
        for (var b = 0; b < p.length; b++)
          r.call(c, p[b]) && (u[p[b]] = c[p[b]]);
      }
    }
    return u;
  }, kr;
}
var Mr, Bn;
function on() {
  if (Bn) return Mr;
  Bn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mr = e, Mr;
}
var Ir, zn;
function To() {
  return zn || (zn = 1, Ir = Function.call.bind(Object.prototype.hasOwnProperty)), Ir;
}
var Nr, Vn;
function zi() {
  if (Vn) return Nr;
  Vn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = on(), r = {}, n = To();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (n(i, h)) {
          var m;
          try {
            if (typeof i[h] != "function") {
              var b = Error(
                (u || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            m = i[h](a, h, u, c, null, t);
          } catch (S) {
            m = S;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var x = p ? p() : "";
            e(
              "Failed " + c + " type: " + m.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Nr = o, Nr;
}
var jr, Ln;
function Vi() {
  if (Ln) return jr;
  Ln = 1;
  var e = xo(), t = Bi(), r = on(), n = To(), o = zi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return jr = function(c, u) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(R) {
      var _ = R && (p && R[p] || R[h]);
      if (typeof _ == "function")
        return _;
    }
    var b = "<<anonymous>>", x = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: A(),
      arrayOf: T,
      element: C(),
      elementType: d(),
      instanceOf: P,
      node: s(),
      objectOf: J,
      oneOf: k,
      oneOfType: Z,
      shape: F,
      exact: j
    };
    function S(R, _) {
      return R === _ ? R !== 0 || 1 / R === 1 / _ : R !== R && _ !== _;
    }
    function y(R, _) {
      this.message = R, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function g(R) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, z = 0;
      function W(Q, V, U, Y, H, B, G) {
        if (Y = Y || b, B = B || U, G !== r) {
          if (u) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = Y + ":" + U;
            !_[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[oe] = !0, z++);
          }
        }
        return V[U] == null ? Q ? V[U] === null ? new y("The " + H + " `" + B + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new y("The " + H + " `" + B + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : R(V, U, Y, H, B);
      }
      var D = W.bind(null, !1);
      return D.isRequired = W.bind(null, !0), D;
    }
    function w(R) {
      function _(z, W, D, Q, V, U) {
        var Y = z[W], H = ee(Y);
        if (H !== R) {
          var B = ve(Y);
          return new y(
            "Invalid " + Q + " `" + V + "` of type " + ("`" + B + "` supplied to `" + D + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return g(_);
    }
    function A() {
      return g(a);
    }
    function T(R) {
      function _(z, W, D, Q, V) {
        if (typeof R != "function")
          return new y("Property `" + V + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var U = z[W];
        if (!Array.isArray(U)) {
          var Y = ee(U);
          return new y("Invalid " + Q + " `" + V + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected an array."));
        }
        for (var H = 0; H < U.length; H++) {
          var B = R(U, H, D, Q, V + "[" + H + "]", r);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return g(_);
    }
    function C() {
      function R(_, z, W, D, Q) {
        var V = _[z];
        if (!c(V)) {
          var U = ee(V);
          return new y("Invalid " + D + " `" + Q + "` of type " + ("`" + U + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(R);
    }
    function d() {
      function R(_, z, W, D, Q) {
        var V = _[z];
        if (!e.isValidElementType(V)) {
          var U = ee(V);
          return new y("Invalid " + D + " `" + Q + "` of type " + ("`" + U + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(R);
    }
    function P(R) {
      function _(z, W, D, Q, V) {
        if (!(z[W] instanceof R)) {
          var U = R.name || b, Y = Ce(z[W]);
          return new y("Invalid " + Q + " `" + V + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return g(_);
    }
    function k(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(z, W, D, Q, V) {
        for (var U = z[W], Y = 0; Y < R.length; Y++)
          if (S(U, R[Y]))
            return null;
        var H = JSON.stringify(R, function(G, v) {
          var oe = ve(v);
          return oe === "symbol" ? String(v) : v;
        });
        return new y("Invalid " + Q + " `" + V + "` of value `" + String(U) + "` " + ("supplied to `" + D + "`, expected one of " + H + "."));
      }
      return g(_);
    }
    function J(R) {
      function _(z, W, D, Q, V) {
        if (typeof R != "function")
          return new y("Property `" + V + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var U = z[W], Y = ee(U);
        if (Y !== "object")
          return new y("Invalid " + Q + " `" + V + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected an object."));
        for (var H in U)
          if (n(U, H)) {
            var B = R(U, H, D, Q, V + "." + H, r);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return g(_);
    }
    function Z(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < R.length; _++) {
        var z = R[_];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(z) + " at index " + _ + "."
          ), a;
      }
      function W(D, Q, V, U, Y) {
        for (var H = [], B = 0; B < R.length; B++) {
          var G = R[B], v = G(D, Q, V, U, Y, r);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && H.push(v.data.expectedType);
        }
        var oe = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new y("Invalid " + U + " `" + Y + "` supplied to " + ("`" + V + "`" + oe + "."));
      }
      return g(W);
    }
    function s() {
      function R(_, z, W, D, Q) {
        return L(_[z]) ? null : new y("Invalid " + D + " `" + Q + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return g(R);
    }
    function O(R, _, z, W, D) {
      return new y(
        (R || "React class") + ": " + _ + " type `" + z + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function F(R) {
      function _(z, W, D, Q, V) {
        var U = z[W], Y = ee(U);
        if (Y !== "object")
          return new y("Invalid " + Q + " `" + V + "` of type `" + Y + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var H in R) {
          var B = R[H];
          if (typeof B != "function")
            return O(D, Q, V, H, ve(B));
          var G = B(U, H, D, Q, V + "." + H, r);
          if (G)
            return G;
        }
        return null;
      }
      return g(_);
    }
    function j(R) {
      function _(z, W, D, Q, V) {
        var U = z[W], Y = ee(U);
        if (Y !== "object")
          return new y("Invalid " + Q + " `" + V + "` of type `" + Y + "` " + ("supplied to `" + D + "`, expected `object`."));
        var H = t({}, z[W], R);
        for (var B in H) {
          var G = R[B];
          if (n(R, B) && typeof G != "function")
            return O(D, Q, V, B, ve(G));
          if (!G)
            return new y(
              "Invalid " + Q + " `" + V + "` key `" + B + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(z[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var v = G(U, B, D, Q, V + "." + B, r);
          if (v)
            return v;
        }
        return null;
      }
      return g(_);
    }
    function L(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(L);
          if (R === null || c(R))
            return !0;
          var _ = m(R);
          if (_) {
            var z = _.call(R), W;
            if (_ !== R.entries) {
              for (; !(W = z.next()).done; )
                if (!L(W.value))
                  return !1;
            } else
              for (; !(W = z.next()).done; ) {
                var D = W.value;
                if (D && !L(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(R, _) {
      return R === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ee(R) {
      var _ = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : te(_, R) ? "symbol" : _;
    }
    function ve(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var _ = ee(R);
      if (_ === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ye(R) {
      var _ = ve(R);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function Ce(R) {
      return !R.constructor || !R.constructor.name ? b : R.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, jr;
}
var Fr, Wn;
function Li() {
  if (Wn) return Fr;
  Wn = 1;
  var e = on();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Fr = function() {
    function n(a, c, u, p, h, m) {
      if (m !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Fr;
}
if (process.env.NODE_ENV !== "production") {
  var Wi = xo(), Ui = !0;
  Yr.exports = Vi()(Wi.isElement, Ui);
} else
  Yr.exports = Li()();
var Yi = Yr.exports;
const f = /* @__PURE__ */ Ii(Yi);
function wo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = wo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ae() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = wo(e)) && (n && (n += " "), n += t);
  return n;
}
function ir(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const u = c;
              r[o][u] = ir(i[u], a[u]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Vt(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let u = 0; u < i.length; u += 1) {
      const p = i[u];
      p && (a += (c === !0 ? "" : " ") + t(p), c = !1, r && r[p] && (a += " " + r[p]));
    }
    n[o] = a;
  }
  return n;
}
function tt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Ro(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function an(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ro(e, t, r);
}
function qi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function rt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return rt(qi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : tt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : tt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Hi = (e) => {
  const t = rt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Mt = (e, t) => {
  try {
    return Hi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function fr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function $o(e) {
  e = rt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (p, h = (p + r / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), fr({
    type: c,
    values: u
  });
}
function qr(e) {
  e = rt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? rt($o(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Un(e, t) {
  const r = qr(e), n = qr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function et(e, t) {
  return e = rt(e), t = an(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, fr(e);
}
function Kt(e, t, r) {
  try {
    return et(e, t);
  } catch {
    return e;
  }
}
function sn(e, t) {
  if (e = rt(e), t = an(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return fr(e);
}
function he(e, t, r) {
  try {
    return sn(e, t);
  } catch {
    return e;
  }
}
function cn(e, t) {
  if (e = rt(e), t = an(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return fr(e);
}
function ge(e, t, r) {
  try {
    return cn(e, t);
  } catch {
    return e;
  }
}
function Gi(e, t = 0.15) {
  return qr(e) > 0.5 ? sn(e, t) : cn(e, t);
}
function Xt(e, t, r) {
  try {
    return Gi(e, t);
  } catch {
    return e;
  }
}
function Oo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const _o = (e) => Oo(e) && e !== "classes";
function be(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : tt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Qe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ao(e) {
  if (!Qe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ao(e[r]);
  }), t;
}
function ze(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Qe(e) && Qe(t) && Object.keys(t).forEach((o) => {
    Qe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Qe(e[o]) ? n[o] = ze(e[o], t[o], r) : r.clone ? n[o] = Qe(t[o]) ? Ao(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Nt(e, t) {
  return t ? ze(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const nt = process.env.NODE_ENV !== "production" ? f.oneOfType([f.number, f.string, f.object, f.array]) : {};
function Ki(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Xi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ji(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : tt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Qi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const u = t(e.breakpoints.not(...c), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const dr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Yn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${dr[e]}px)`
}, Zi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : dr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ze(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Yn;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Yn;
    return Object.keys(t).reduce((a, c) => {
      if (Xi(i.keys, c)) {
        const u = Ji(n.containerQueries ? n : Zi, c);
        u && (a[u] = r(t[c], c));
      } else if (Object.keys(i.values || dr).includes(c)) {
        const u = i.up(c);
        a[u] = r(t[c], c);
      } else {
        const u = c;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function ea(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function ta(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function pr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ar(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = pr(e, r) || n, t && (o = t(o, n, e)), o;
}
function Re(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, p = pr(u, n) || {};
    return Ze(a, c, (m) => {
      let b = ar(p, o, m);
      return m === b && typeof m == "string" && (b = ar(p, o, `${t}${m === "default" ? "" : be(m)}`, m)), r === !1 ? b : {
        [r]: b
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: nt
  } : {}, i.filterProps = [t], i;
}
function ra(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const na = {
  m: "margin",
  p: "padding"
}, oa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, qn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ia = ra((e) => {
  if (e.length > 2)
    if (qn[e])
      e = qn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = na[t], o = oa[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), mr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], hr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], aa = [...mr, ...hr];
function Lt(e, t, r, n) {
  const o = pr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ln(e) {
  return Lt(e, "spacing", 8, "spacing");
}
function Wt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function sa(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Wt(t, r), n), {});
}
function ca(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = ia(r), i = sa(o, n), a = e[r];
  return Ze(e, a, i);
}
function Po(e, t) {
  const r = ln(e.theme);
  return Object.keys(e).map((n) => ca(e, t, n, r)).reduce(Nt, {});
}
function xe(e) {
  return Po(e, mr);
}
xe.propTypes = process.env.NODE_ENV !== "production" ? mr.reduce((e, t) => (e[t] = nt, e), {}) : {};
xe.filterProps = mr;
function Te(e) {
  return Po(e, hr);
}
Te.propTypes = process.env.NODE_ENV !== "production" ? hr.reduce((e, t) => (e[t] = nt, e), {}) : {};
Te.filterProps = hr;
process.env.NODE_ENV !== "production" && aa.reduce((e, t) => (e[t] = nt, e), {});
function gr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Nt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ye(e, t) {
  return Re({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const la = Ye("border", Ue), ua = Ye("borderTop", Ue), fa = Ye("borderRight", Ue), da = Ye("borderBottom", Ue), pa = Ye("borderLeft", Ue), ma = Ye("borderColor"), ha = Ye("borderTopColor"), ga = Ye("borderRightColor"), ya = Ye("borderBottomColor"), ba = Ye("borderLeftColor"), va = Ye("outline", Ue), Sa = Ye("outlineColor"), yr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Lt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Wt(t, n)
    });
    return Ze(e, e.borderRadius, r);
  }
  return null;
};
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: nt
} : {};
yr.filterProps = ["borderRadius"];
gr(la, ua, fa, da, pa, ma, ha, ga, ya, ba, yr, va, Sa);
const br = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Lt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Wt(t, n)
    });
    return Ze(e, e.gap, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: nt
} : {};
br.filterProps = ["gap"];
const vr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Lt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Wt(t, n)
    });
    return Ze(e, e.columnGap, r);
  }
  return null;
};
vr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: nt
} : {};
vr.filterProps = ["columnGap"];
const Sr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Lt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Wt(t, n)
    });
    return Ze(e, e.rowGap, r);
  }
  return null;
};
Sr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: nt
} : {};
Sr.filterProps = ["rowGap"];
const Ca = Re({
  prop: "gridColumn"
}), Ea = Re({
  prop: "gridRow"
}), xa = Re({
  prop: "gridAutoFlow"
}), Ta = Re({
  prop: "gridAutoColumns"
}), wa = Re({
  prop: "gridAutoRows"
}), Ra = Re({
  prop: "gridTemplateColumns"
}), $a = Re({
  prop: "gridTemplateRows"
}), Oa = Re({
  prop: "gridTemplateAreas"
}), _a = Re({
  prop: "gridArea"
});
gr(br, vr, Sr, Ca, Ea, xa, Ta, wa, Ra, $a, Oa, _a);
function yt(e, t) {
  return t === "grey" ? t : e;
}
const Aa = Re({
  prop: "color",
  themeKey: "palette",
  transform: yt
}), Pa = Re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: yt
}), ka = Re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: yt
});
gr(Aa, Pa, ka);
function Be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ma = Re({
  prop: "width",
  transform: Be
}), un = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, u;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || dr[r];
      return n ? ((u = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Be(r)
      };
    };
    return Ze(e, e.maxWidth, t);
  }
  return null;
};
un.filterProps = ["maxWidth"];
const Ia = Re({
  prop: "minWidth",
  transform: Be
}), Na = Re({
  prop: "height",
  transform: Be
}), ja = Re({
  prop: "maxHeight",
  transform: Be
}), Fa = Re({
  prop: "minHeight",
  transform: Be
});
Re({
  prop: "size",
  cssProperty: "width",
  transform: Be
});
Re({
  prop: "size",
  cssProperty: "height",
  transform: Be
});
const Da = Re({
  prop: "boxSizing"
});
gr(Ma, un, Ia, Na, ja, Fa, Da);
const Cr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ue
  },
  borderTop: {
    themeKey: "borders",
    transform: Ue
  },
  borderRight: {
    themeKey: "borders",
    transform: Ue
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ue
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ue
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ue
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: yr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: yt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: yt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: yt
  },
  // spacing
  p: {
    style: Te
  },
  pt: {
    style: Te
  },
  pr: {
    style: Te
  },
  pb: {
    style: Te
  },
  pl: {
    style: Te
  },
  px: {
    style: Te
  },
  py: {
    style: Te
  },
  padding: {
    style: Te
  },
  paddingTop: {
    style: Te
  },
  paddingRight: {
    style: Te
  },
  paddingBottom: {
    style: Te
  },
  paddingLeft: {
    style: Te
  },
  paddingX: {
    style: Te
  },
  paddingY: {
    style: Te
  },
  paddingInline: {
    style: Te
  },
  paddingInlineStart: {
    style: Te
  },
  paddingInlineEnd: {
    style: Te
  },
  paddingBlock: {
    style: Te
  },
  paddingBlockStart: {
    style: Te
  },
  paddingBlockEnd: {
    style: Te
  },
  m: {
    style: xe
  },
  mt: {
    style: xe
  },
  mr: {
    style: xe
  },
  mb: {
    style: xe
  },
  ml: {
    style: xe
  },
  mx: {
    style: xe
  },
  my: {
    style: xe
  },
  margin: {
    style: xe
  },
  marginTop: {
    style: xe
  },
  marginRight: {
    style: xe
  },
  marginBottom: {
    style: xe
  },
  marginLeft: {
    style: xe
  },
  marginX: {
    style: xe
  },
  marginY: {
    style: xe
  },
  marginInline: {
    style: xe
  },
  marginInlineStart: {
    style: xe
  },
  marginInlineEnd: {
    style: xe
  },
  marginBlock: {
    style: xe
  },
  marginBlockStart: {
    style: xe
  },
  marginBlockEnd: {
    style: xe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: br
  },
  rowGap: {
    style: Sr
  },
  columnGap: {
    style: vr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Be
  },
  maxWidth: {
    style: un
  },
  minWidth: {
    transform: Be
  },
  height: {
    transform: Be
  },
  maxHeight: {
    transform: Be
  },
  minHeight: {
    transform: Be
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ba(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function za(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Va() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: p,
      transform: h,
      style: m
    } = c;
    if (n == null)
      return null;
    if (p === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const b = pr(o, p) || {};
    return m ? m(a) : Ze(a, n, (S) => {
      let y = ar(b, h, S);
      return S === y && typeof S == "string" && (y = ar(b, h, `${r}${S === "default" ? "" : be(S)}`, S)), u === !1 ? y : {
        [u]: y
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Cr;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(o);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const p = ea(o.breakpoints), h = Object.keys(p);
      let m = p;
      return Object.keys(u).forEach((b) => {
        const x = za(u[b], o);
        if (x != null)
          if (typeof x == "object")
            if (i[b])
              m = Nt(m, e(b, x, o, i));
            else {
              const S = Ze({
                theme: o
              }, x, (y) => ({
                [b]: y
              }));
              Ba(S, x) ? m[b] = t({
                sx: x,
                theme: o
              }) : m = Nt(m, S);
            }
          else
            m = Nt(m, e(b, x, o, i));
      }), Ki(o, ta(h, m));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const vt = Va();
vt.filterProps = ["sx"];
function sr() {
  return sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sr.apply(null, arguments);
}
function ko(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var La = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wa = /* @__PURE__ */ ko(
  function(e) {
    return La.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ua = !1;
function Ya(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function qa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ha = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Ua : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ya(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Me = "-ms-", cr = "-moz-", ie = "-webkit-", Mo = "comm", fn = "rule", dn = "decl", Ga = "@import", Io = "@keyframes", Ka = "@layer", Xa = Math.abs, Er = String.fromCharCode, Ja = Object.assign;
function Qa(e, t) {
  return ke(e, 0) ^ 45 ? (((t << 2 ^ ke(e, 0)) << 2 ^ ke(e, 1)) << 2 ^ ke(e, 2)) << 2 ^ ke(e, 3) : 0;
}
function No(e) {
  return e.trim();
}
function Za(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ae(e, t, r) {
  return e.replace(t, r);
}
function Hr(e, t) {
  return e.indexOf(t);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function jt(e, t, r) {
  return e.slice(t, r);
}
function Ge(e) {
  return e.length;
}
function pn(e) {
  return e.length;
}
function Jt(e, t) {
  return t.push(e), e;
}
function es(e, t) {
  return e.map(t).join("");
}
var xr = 1, St = 1, jo = 0, De = 0, Oe = 0, Et = "";
function Tr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: xr, column: St, length: a, return: "" };
}
function At(e, t) {
  return Ja(Tr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ts() {
  return Oe;
}
function rs() {
  return Oe = De > 0 ? ke(Et, --De) : 0, St--, Oe === 10 && (St = 1, xr--), Oe;
}
function Ve() {
  return Oe = De < jo ? ke(Et, De++) : 0, St++, Oe === 10 && (St = 1, xr++), Oe;
}
function Xe() {
  return ke(Et, De);
}
function tr() {
  return De;
}
function Ut(e, t) {
  return jt(Et, e, t);
}
function Ft(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Fo(e) {
  return xr = St = 1, jo = Ge(Et = e), De = 0, [];
}
function Do(e) {
  return Et = "", e;
}
function rr(e) {
  return No(Ut(De - 1, Gr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ns(e) {
  for (; (Oe = Xe()) && Oe < 33; )
    Ve();
  return Ft(e) > 2 || Ft(Oe) > 3 ? "" : " ";
}
function os(e, t) {
  for (; --t && Ve() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97); )
    ;
  return Ut(e, tr() + (t < 6 && Xe() == 32 && Ve() == 32));
}
function Gr(e) {
  for (; Ve(); )
    switch (Oe) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gr(Oe);
        break;
      case 40:
        e === 41 && Gr(e);
        break;
      case 92:
        Ve();
        break;
    }
  return De;
}
function is(e, t) {
  for (; Ve() && e + Oe !== 57; )
    if (e + Oe === 84 && Xe() === 47)
      break;
  return "/*" + Ut(t, De - 1) + "*" + Er(e === 47 ? e : Ve());
}
function as(e) {
  for (; !Ft(Xe()); )
    Ve();
  return Ut(e, De);
}
function ss(e) {
  return Do(nr("", null, null, null, [""], e = Fo(e), 0, [0], e));
}
function nr(e, t, r, n, o, i, a, c, u) {
  for (var p = 0, h = 0, m = a, b = 0, x = 0, S = 0, y = 1, g = 1, w = 1, A = 0, T = "", C = o, d = i, P = n, k = T; g; )
    switch (S = A, A = Ve()) {
      case 40:
        if (S != 108 && ke(k, m - 1) == 58) {
          Hr(k += ae(rr(A), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += rr(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += ns(S);
        break;
      case 92:
        k += os(tr() - 1, 7);
        continue;
      case 47:
        switch (Xe()) {
          case 42:
          case 47:
            Jt(cs(is(Ve(), tr()), t, r), u);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        c[p++] = Ge(k) * w;
      case 125 * y:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            g = 0;
          case 59 + h:
            w == -1 && (k = ae(k, /\f/g, "")), x > 0 && Ge(k) - m && Jt(x > 32 ? Gn(k + ";", n, r, m - 1) : Gn(ae(k, " ", "") + ";", n, r, m - 2), u);
            break;
          case 59:
            k += ";";
          default:
            if (Jt(P = Hn(k, t, r, p, h, o, c, T, C = [], d = [], m), i), A === 123)
              if (h === 0)
                nr(k, t, P, P, C, i, m, c, d);
              else
                switch (b === 99 && ke(k, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nr(e, P, P, n && Jt(Hn(e, P, P, 0, 0, o, c, T, o, C = [], m), d), o, d, m, c, n ? C : d);
                    break;
                  default:
                    nr(k, P, P, P, [""], d, 0, c, d);
                }
        }
        p = h = x = 0, y = w = 1, T = k = "", m = a;
        break;
      case 58:
        m = 1 + Ge(k), x = S;
      default:
        if (y < 1) {
          if (A == 123)
            --y;
          else if (A == 125 && y++ == 0 && rs() == 125)
            continue;
        }
        switch (k += Er(A), A * y) {
          case 38:
            w = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            c[p++] = (Ge(k) - 1) * w, w = 1;
            break;
          case 64:
            Xe() === 45 && (k += rr(Ve())), b = Xe(), h = m = Ge(T = k += as(tr())), A++;
            break;
          case 45:
            S === 45 && Ge(k) == 2 && (y = 0);
        }
    }
  return i;
}
function Hn(e, t, r, n, o, i, a, c, u, p, h) {
  for (var m = o - 1, b = o === 0 ? i : [""], x = pn(b), S = 0, y = 0, g = 0; S < n; ++S)
    for (var w = 0, A = jt(e, m + 1, m = Xa(y = a[S])), T = e; w < x; ++w)
      (T = No(y > 0 ? b[w] + " " + A : ae(A, /&\f/g, b[w]))) && (u[g++] = T);
  return Tr(e, t, r, o === 0 ? fn : c, u, p, h);
}
function cs(e, t, r) {
  return Tr(e, t, r, Mo, Er(ts()), jt(e, 2, -2), 0);
}
function Gn(e, t, r, n) {
  return Tr(e, t, r, dn, jt(e, 0, n), jt(e, n + 1, -1), n);
}
function bt(e, t) {
  for (var r = "", n = pn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function ls(e, t, r, n) {
  switch (e.type) {
    case Ka:
      if (e.children.length) break;
    case Ga:
    case dn:
      return e.return = e.return || e.value;
    case Mo:
      return "";
    case Io:
      return e.return = e.value + "{" + bt(e.children, n) + "}";
    case fn:
      e.value = e.props.join(",");
  }
  return Ge(r = bt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function us(e) {
  var t = pn(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function fs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ds = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Xe(), o === 38 && i === 12 && (r[n] = 1), !Ft(i); )
    Ve();
  return Ut(t, De);
}, ps = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Ft(o)) {
      case 0:
        o === 38 && Xe() === 12 && (r[n] = 1), t[n] += ds(De - 1, r, n);
        break;
      case 2:
        t[n] += rr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Xe() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Er(o);
    }
  while (o = Ve());
  return t;
}, ms = function(t, r) {
  return Do(ps(Fo(t), r));
}, Kn = /* @__PURE__ */ new WeakMap(), hs = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Kn.get(n)) && !o) {
      Kn.set(t, !0);
      for (var i = [], a = ms(r, i), c = n.props, u = 0, p = 0; u < a.length; u++)
        for (var h = 0; h < c.length; h++, p++)
          t.props[p] = i[u] ? a[u].replace(/&\f/g, c[h]) : c[h] + " " + a[u];
    }
  }
}, gs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Bo(e, t) {
  switch (Qa(e, t)) {
    case 5103:
      return ie + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + e + cr + e + Me + e + e;
    case 6828:
    case 4268:
      return ie + e + Me + e + e;
    case 6165:
      return ie + e + Me + "flex-" + e + e;
    case 5187:
      return ie + e + ae(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + Me + "flex-$1$2") + e;
    case 5443:
      return ie + e + Me + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    case 4675:
      return ie + e + Me + "flex-line-pack" + ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ie + e + Me + ae(e, "shrink", "negative") + e;
    case 5292:
      return ie + e + Me + ae(e, "basis", "preferred-size") + e;
    case 6060:
      return ie + "box-" + ae(e, "-grow", "") + ie + e + Me + ae(e, "grow", "positive") + e;
    case 4554:
      return ie + ae(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
    case 6187:
      return ae(ae(ae(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return ae(ae(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + Me + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ie + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ge(e) - 1 - t > 6) switch (ke(e, t + 1)) {
        case 109:
          if (ke(e, t + 4) !== 45) break;
        case 102:
          return ae(e, /(.+:)(.+)-([^]+)/, "$1" + ie + "$2-$3$1" + cr + (ke(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Hr(e, "stretch") ? Bo(ae(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (ke(e, t + 1) !== 115) break;
    case 6444:
      switch (ke(e, Ge(e) - 3 - (~Hr(e, "!important") && 10))) {
        case 107:
          return ae(e, ":", ":" + ie) + e;
        case 101:
          return ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ie + (ke(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ie + "$2$3$1" + Me + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ke(e, t + 11)) {
        case 114:
          return ie + e + Me + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ie + e + Me + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ie + e + Me + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ie + e + Me + e + e;
  }
  return e;
}
var ys = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case dn:
      t.return = Bo(t.value, t.length);
      break;
    case Io:
      return bt([At(t, {
        value: ae(t.value, "@", "@" + ie)
      })], o);
    case fn:
      if (t.length) return es(t.props, function(i) {
        switch (Za(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return bt([At(t, {
              props: [ae(i, /:(read-\w+)/, ":" + cr + "$1")]
            })], o);
          case "::placeholder":
            return bt([At(t, {
              props: [ae(i, /:(plac\w+)/, ":" + ie + "input-$1")]
            }), At(t, {
              props: [ae(i, /:(plac\w+)/, ":" + cr + "$1")]
            }), At(t, {
              props: [ae(i, /:(plac\w+)/, Me + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, bs = [ys], vs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var g = y.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || bs, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var g = y.getAttribute("data-emotion").split(" "), w = 1; w < g.length; w++)
        i[g[w]] = !0;
      c.push(y);
    }
  );
  var u, p = [hs, gs];
  {
    var h, m = [ls, fs(function(y) {
      h.insert(y);
    })], b = us(p.concat(o, m)), x = function(g) {
      return bt(ss(g), b);
    };
    u = function(g, w, A, T) {
      h = A, x(g ? g + "{" + w.styles + "}" : w.styles), T && (S.inserted[w.name] = !0);
    };
  }
  var S = {
    key: r,
    sheet: new Ha({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return S.sheet.hydrate(c), S;
}, Kr = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Ss() {
  if (Xn) return ue;
  Xn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function T(d) {
    if (typeof d == "object" && d !== null) {
      var P = d.$$typeof;
      switch (P) {
        case t:
          switch (d = d.type, d) {
            case u:
            case p:
            case n:
            case i:
            case o:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case h:
                case S:
                case x:
                case a:
                  return d;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function C(d) {
    return T(d) === p;
  }
  return ue.AsyncMode = u, ue.ConcurrentMode = p, ue.ContextConsumer = c, ue.ContextProvider = a, ue.Element = t, ue.ForwardRef = h, ue.Fragment = n, ue.Lazy = S, ue.Memo = x, ue.Portal = r, ue.Profiler = i, ue.StrictMode = o, ue.Suspense = m, ue.isAsyncMode = function(d) {
    return C(d) || T(d) === u;
  }, ue.isConcurrentMode = C, ue.isContextConsumer = function(d) {
    return T(d) === c;
  }, ue.isContextProvider = function(d) {
    return T(d) === a;
  }, ue.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, ue.isForwardRef = function(d) {
    return T(d) === h;
  }, ue.isFragment = function(d) {
    return T(d) === n;
  }, ue.isLazy = function(d) {
    return T(d) === S;
  }, ue.isMemo = function(d) {
    return T(d) === x;
  }, ue.isPortal = function(d) {
    return T(d) === r;
  }, ue.isProfiler = function(d) {
    return T(d) === i;
  }, ue.isStrictMode = function(d) {
    return T(d) === o;
  }, ue.isSuspense = function(d) {
    return T(d) === m;
  }, ue.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === p || d === i || d === o || d === m || d === b || typeof d == "object" && d !== null && (d.$$typeof === S || d.$$typeof === x || d.$$typeof === a || d.$$typeof === c || d.$$typeof === h || d.$$typeof === g || d.$$typeof === w || d.$$typeof === A || d.$$typeof === y);
  }, ue.typeOf = T, ue;
}
var fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function Cs() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function T(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === p || v === i || v === o || v === m || v === b || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === x || v.$$typeof === a || v.$$typeof === c || v.$$typeof === h || v.$$typeof === g || v.$$typeof === w || v.$$typeof === A || v.$$typeof === y);
    }
    function C(v) {
      if (typeof v == "object" && v !== null) {
        var oe = v.$$typeof;
        switch (oe) {
          case t:
            var I = v.type;
            switch (I) {
              case u:
              case p:
              case n:
              case i:
              case o:
              case m:
                return I;
              default:
                var Se = I && I.$$typeof;
                switch (Se) {
                  case c:
                  case h:
                  case S:
                  case x:
                  case a:
                    return Se;
                  default:
                    return oe;
                }
            }
          case r:
            return oe;
        }
      }
    }
    var d = u, P = p, k = c, J = a, Z = t, s = h, O = n, F = S, j = x, L = r, te = i, ee = o, ve = m, ye = !1;
    function Ce(v) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(v) || C(v) === u;
    }
    function R(v) {
      return C(v) === p;
    }
    function _(v) {
      return C(v) === c;
    }
    function z(v) {
      return C(v) === a;
    }
    function W(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function D(v) {
      return C(v) === h;
    }
    function Q(v) {
      return C(v) === n;
    }
    function V(v) {
      return C(v) === S;
    }
    function U(v) {
      return C(v) === x;
    }
    function Y(v) {
      return C(v) === r;
    }
    function H(v) {
      return C(v) === i;
    }
    function B(v) {
      return C(v) === o;
    }
    function G(v) {
      return C(v) === m;
    }
    fe.AsyncMode = d, fe.ConcurrentMode = P, fe.ContextConsumer = k, fe.ContextProvider = J, fe.Element = Z, fe.ForwardRef = s, fe.Fragment = O, fe.Lazy = F, fe.Memo = j, fe.Portal = L, fe.Profiler = te, fe.StrictMode = ee, fe.Suspense = ve, fe.isAsyncMode = Ce, fe.isConcurrentMode = R, fe.isContextConsumer = _, fe.isContextProvider = z, fe.isElement = W, fe.isForwardRef = D, fe.isFragment = Q, fe.isLazy = V, fe.isMemo = U, fe.isPortal = Y, fe.isProfiler = H, fe.isStrictMode = B, fe.isSuspense = G, fe.isValidElementType = T, fe.typeOf = C;
  }()), fe;
}
process.env.NODE_ENV === "production" ? Kr.exports = Ss() : Kr.exports = Cs();
var Es = Kr.exports, zo = Es, xs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ts = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Vo = {};
Vo[zo.ForwardRef] = xs;
Vo[zo.Memo] = Ts;
var ws = !0;
function Rs(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Lo = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ws === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, $s = function(t, r, n) {
  Lo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Os(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var _s = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, As = !1, Ps = /[A-Z]|^ms/g, ks = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Wo = function(t) {
  return t.charCodeAt(1) === 45;
}, Qn = function(t) {
  return t != null && typeof t != "boolean";
}, Dr = /* @__PURE__ */ ko(function(e) {
  return Wo(e) ? e : e.replace(Ps, "-$&").toLowerCase();
}), Zn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ks, function(n, o, i) {
          return Ke = {
            name: o,
            styles: i,
            next: Ke
          }, o;
        });
  }
  return _s[t] !== 1 && !Wo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, Ms = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Dt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ke = {
          name: o.name,
          styles: o.styles,
          next: Ke
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ke = {
              name: a.name,
              styles: a.styles,
              next: Ke
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return Is(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Ke, p = r(e);
        return Ke = u, Dt(e, t, p);
      }
      break;
    }
  }
  var h = r;
  if (t == null)
    return h;
  var m = t[h];
  return m !== void 0 ? m : h;
}
function Is(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Dt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : Qn(c) && (n += Dr(i) + ":" + Zn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && As)
          throw new Error(Ms);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var u = 0; u < a.length; u++)
            Qn(a[u]) && (n += Dr(i) + ":" + Zn(i, a[u]) + ";");
        else {
          var p = Dt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Dr(i) + ":" + p + ";";
              break;
            }
            default:
              n += i + "{" + p + "}";
          }
        }
      }
    }
  return n;
}
var eo = /label:\s*([^\s;{]+)\s*(;|$)/g, Ke;
function mn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ke = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Dt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Dt(r, t, e[c]), n) {
      var u = i;
      o += u[c];
    }
  eo.lastIndex = 0;
  for (var p = "", h; (h = eo.exec(o)) !== null; )
    p += "-" + h[1];
  var m = Os(o) + p;
  return {
    name: m,
    styles: o,
    next: Ke
  };
}
var Ns = function(t) {
  return t();
}, js = N.useInsertionEffect ? N.useInsertionEffect : !1, Fs = js || Ns, Uo = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ vs({
    key: "css"
  }) : null
);
Uo.Provider;
var Ds = function(t) {
  return /* @__PURE__ */ Pi(function(r, n) {
    var o = ki(Uo);
    return t(r, o, n);
  });
}, Bs = /* @__PURE__ */ N.createContext({});
function zs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return mn(t);
}
var hn = function() {
  var t = zs.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Vs = Wa, Ls = function(t) {
  return t !== "theme";
}, to = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Vs : Ls;
}, ro = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Ws = !1, Us = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Lo(r, n, o), Fs(function() {
    return $s(r, n, o);
  }), null;
}, Ys = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = ro(t, r, n), u = c || to(o), p = !u("as");
  return function() {
    var h = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), h[0] == null || h[0].raw === void 0)
      m.push.apply(m, h);
    else {
      m.push(h[0][0]);
      for (var b = h.length, x = 1; x < b; x++)
        m.push(h[x], h[0][x]);
    }
    var S = Ds(function(y, g, w) {
      var A = p && y.as || o, T = "", C = [], d = y;
      if (y.theme == null) {
        d = {};
        for (var P in y)
          d[P] = y[P];
        d.theme = N.useContext(Bs);
      }
      typeof y.className == "string" ? T = Rs(g.registered, C, y.className) : y.className != null && (T = y.className + " ");
      var k = mn(m.concat(C), g.registered, d);
      T += g.key + "-" + k.name, a !== void 0 && (T += " " + a);
      var J = p && c === void 0 ? to(A) : u, Z = {};
      for (var s in y)
        p && s === "as" || J(s) && (Z[s] = y[s]);
      return Z.className = T, w && (Z.ref = w), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Us, {
        cache: g,
        serialized: k,
        isStringTag: typeof A == "string"
      }), /* @__PURE__ */ N.createElement(A, Z));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = m, S.__emotion_forwardProp = c, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && Ws ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function(y, g) {
      return e(y, sr({}, r, g, {
        shouldForwardProp: ro(S, g, !0)
      })).apply(void 0, m);
    }, S;
  };
}, qs = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Xr = Ys.bind();
qs.forEach(function(e) {
  Xr[e] = Xr(e);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Hs(e, t) {
  const r = Xr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Gs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const no = [];
function oo(e) {
  return no[0] = e, mn(no);
}
const Ks = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Xs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Ks(t), a = Object.keys(i);
  function c(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r})`;
  }
  function u(b) {
    return `@media (max-width:${(typeof t[b] == "number" ? t[b] : b) - n / 100}${r})`;
  }
  function p(b, x) {
    const S = a.indexOf(x);
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r}) and (max-width:${(S !== -1 && typeof t[a[S]] == "number" ? t[a[S]] : x) - n / 100}${r})`;
  }
  function h(b) {
    return a.indexOf(b) + 1 < a.length ? p(b, a[a.indexOf(b) + 1]) : c(b);
  }
  function m(b) {
    const x = a.indexOf(b);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? u(a[x]) : p(b, a[a.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: u,
    between: p,
    only: h,
    not: m,
    unit: r,
    ...o
  };
}
const Js = {
  borderRadius: 4
};
function Yo(e = 8, t = ln({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Qs(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function qo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = Xs(r), u = Yo(o);
  let p = ze({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Js,
      ...i
    }
  }, a);
  return p = Qi(p), p.applyStyles = Qs, p = t.reduce((h, m) => ze(h, m), p), p.unstable_sxConfig = {
    ...Cr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, p.unstable_sx = function(m) {
    return vt({
      sx: m,
      theme: this
    });
  }, p;
}
const io = (e) => e, Zs = () => {
  let e = io;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = io;
    }
  };
}, ec = Zs(), tc = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function st(e, t, r = "Mui") {
  const n = tc[t];
  return n ? `${r}-${n}` : `${ec.generate(e)}-${t}`;
}
function xt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = st(e, o, r);
  }), n;
}
var Jr = { exports: {} }, de = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function rc() {
  if (ao) return de;
  ao = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function y(g) {
    if (typeof g == "object" && g !== null) {
      var w = g.$$typeof;
      switch (w) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case p:
            case h:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case a:
                case u:
                case b:
                case m:
                case i:
                  return g;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return de.ContextConsumer = a, de.ContextProvider = i, de.Element = e, de.ForwardRef = u, de.Fragment = r, de.Lazy = b, de.Memo = m, de.Portal = t, de.Profiler = o, de.StrictMode = n, de.Suspense = p, de.SuspenseList = h, de.isAsyncMode = function() {
    return !1;
  }, de.isConcurrentMode = function() {
    return !1;
  }, de.isContextConsumer = function(g) {
    return y(g) === a;
  }, de.isContextProvider = function(g) {
    return y(g) === i;
  }, de.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, de.isForwardRef = function(g) {
    return y(g) === u;
  }, de.isFragment = function(g) {
    return y(g) === r;
  }, de.isLazy = function(g) {
    return y(g) === b;
  }, de.isMemo = function(g) {
    return y(g) === m;
  }, de.isPortal = function(g) {
    return y(g) === t;
  }, de.isProfiler = function(g) {
    return y(g) === o;
  }, de.isStrictMode = function(g) {
    return y(g) === n;
  }, de.isSuspense = function(g) {
    return y(g) === p;
  }, de.isSuspenseList = function(g) {
    return y(g) === h;
  }, de.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === p || g === h || g === x || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === m || g.$$typeof === i || g.$$typeof === a || g.$$typeof === u || g.$$typeof === S || g.getModuleId !== void 0);
  }, de.typeOf = y, de;
}
var pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function nc() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = !1, y = !1, g = !1, w = !1, A = !1, T;
    T = Symbol.for("react.module.reference");
    function C(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === r || I === o || A || I === n || I === p || I === h || w || I === x || S || y || g || typeof I == "object" && I !== null && (I.$$typeof === b || I.$$typeof === m || I.$$typeof === i || I.$$typeof === a || I.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === T || I.getModuleId !== void 0));
    }
    function d(I) {
      if (typeof I == "object" && I !== null) {
        var Se = I.$$typeof;
        switch (Se) {
          case e:
            var _e = I.type;
            switch (_e) {
              case r:
              case o:
              case n:
              case p:
              case h:
                return _e;
              default:
                var Pe = _e && _e.$$typeof;
                switch (Pe) {
                  case c:
                  case a:
                  case u:
                  case b:
                  case m:
                  case i:
                    return Pe;
                  default:
                    return Se;
                }
            }
          case t:
            return Se;
        }
      }
    }
    var P = a, k = i, J = e, Z = u, s = r, O = b, F = m, j = t, L = o, te = n, ee = p, ve = h, ye = !1, Ce = !1;
    function R(I) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(I) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(I) {
      return d(I) === a;
    }
    function W(I) {
      return d(I) === i;
    }
    function D(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function Q(I) {
      return d(I) === u;
    }
    function V(I) {
      return d(I) === r;
    }
    function U(I) {
      return d(I) === b;
    }
    function Y(I) {
      return d(I) === m;
    }
    function H(I) {
      return d(I) === t;
    }
    function B(I) {
      return d(I) === o;
    }
    function G(I) {
      return d(I) === n;
    }
    function v(I) {
      return d(I) === p;
    }
    function oe(I) {
      return d(I) === h;
    }
    pe.ContextConsumer = P, pe.ContextProvider = k, pe.Element = J, pe.ForwardRef = Z, pe.Fragment = s, pe.Lazy = O, pe.Memo = F, pe.Portal = j, pe.Profiler = L, pe.StrictMode = te, pe.Suspense = ee, pe.SuspenseList = ve, pe.isAsyncMode = R, pe.isConcurrentMode = _, pe.isContextConsumer = z, pe.isContextProvider = W, pe.isElement = D, pe.isForwardRef = Q, pe.isFragment = V, pe.isLazy = U, pe.isMemo = Y, pe.isPortal = H, pe.isProfiler = B, pe.isStrictMode = G, pe.isSuspense = v, pe.isSuspenseList = oe, pe.isValidElementType = C, pe.typeOf = d;
  }()), pe;
}
process.env.NODE_ENV === "production" ? Jr.exports = rc() : Jr.exports = nc();
var co = Jr.exports;
function Ho(e, t = "") {
  return e.displayName || e.name || t;
}
function lo(e, t, r) {
  const n = Ho(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function oc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ho(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case co.ForwardRef:
          return lo(e, e.render, "ForwardRef");
        case co.Memo:
          return lo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Go(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: oo(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = oo(o.style));
  }), n;
}
const ic = qo();
function Br(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ac(e) {
  return e ? (t, r) => r[e] : null;
}
function sc(e, t, r) {
  e.theme = fc(e.theme) ? r : e.theme[t] || e.theme;
}
function or(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => or(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Ko(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Ko(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== a.props[c])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function cc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ic,
    rootShouldForwardProp: n = Br,
    slotShouldForwardProp: o = Br
  } = e;
  function i(c) {
    sc(c, t, r);
  }
  return (c, u = {}) => {
    Gs(c, (d) => d.filter((P) => P !== vt));
    const {
      name: p,
      slot: h,
      skipVariantsResolver: m,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = ac(Xo(h)),
      ...S
    } = u, y = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), g = b || !1;
    let w = Br;
    h === "Root" || h === "root" ? w = n : h ? w = o : dc(c) && (w = void 0);
    const A = Hs(c, {
      shouldForwardProp: w,
      label: uc(p, h),
      ...S
    }), T = (d) => {
      if (typeof d == "function" && d.__emotion_real !== d)
        return function(k) {
          return or(k, d);
        };
      if (Qe(d)) {
        const P = Go(d);
        return P.variants ? function(J) {
          return or(J, P);
        } : P.style;
      }
      return d;
    }, C = (...d) => {
      const P = [], k = d.map(T), J = [];
      if (P.push(i), p && x && J.push(function(F) {
        var ee, ve;
        const L = (ve = (ee = F.theme.components) == null ? void 0 : ee[p]) == null ? void 0 : ve.styleOverrides;
        if (!L)
          return null;
        const te = {};
        for (const ye in L)
          te[ye] = or(F, L[ye]);
        return x(F, te);
      }), p && !y && J.push(function(F) {
        var te, ee;
        const j = F.theme, L = (ee = (te = j == null ? void 0 : j.components) == null ? void 0 : te[p]) == null ? void 0 : ee.variants;
        return L ? Ko(F, L) : null;
      }), g || J.push(vt), Array.isArray(k[0])) {
        const O = k.shift(), F = new Array(P.length).fill(""), j = new Array(J.length).fill("");
        let L;
        L = [...F, ...O, ...j], L.raw = [...F, ...O.raw, ...j], P.unshift(L);
      }
      const Z = [...P, ...k, ...J], s = A(...Z);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = lc(p, h, c)), s;
    };
    return A.withConfig && (C.withConfig = A.withConfig), C;
  };
}
function lc(e, t, r) {
  return e ? `${e}${be(t || "")}` : `Styled(${oc(r)})`;
}
function uc(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Xo(t || "Root")}`), r;
}
function fc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function dc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Xo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const pc = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function gn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function mc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function hc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !mc(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const gc = gn(f.elementType, hc), yc = f.oneOfType([f.func, f.object]);
function bc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let uo = 0;
function vc(e) {
  const [t, r] = N.useState(e), n = e || t;
  return N.useEffect(() => {
    t == null && (uo += 1, r(`mui-${uo}`));
  }, [t]), n;
}
const Sc = {
  ...N
}, fo = Sc.useId;
function Jo(e) {
  if (fo !== void 0) {
    const t = fo();
    return e ?? t;
  }
  return vc(e);
}
function Cc({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = N.useRef(e !== void 0), [i, a] = N.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    N.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: p
    } = N.useRef(t);
    N.useEffect(() => {
      !o && !Object.is(p, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const u = N.useCallback((p) => {
    o || a(p);
  }, []);
  return [c, u];
}
function Qt(e) {
  const t = N.useRef(e);
  return pc(() => {
    t.current = e;
  }), N.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Qr(...e) {
  return N.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      bc(r, t);
    });
  }, e);
}
const po = {};
function Qo(e, t) {
  const r = N.useRef(po);
  return r.current === po && (r.current = e(t)), r;
}
const Ec = [];
function xc(e) {
  N.useEffect(e, Ec);
}
class yn {
  constructor() {
    $t(this, "currentId", null);
    $t(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    $t(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new yn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Tc() {
  const e = Qo(yn.create).current;
  return xc(e.disposeEffect), e;
}
function lr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const wc = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
}, Rc = /* @__PURE__ */ N.createContext();
process.env.NODE_ENV !== "production" && (f.node, f.bool);
const $c = () => N.useContext(Rc) ?? !1, Oc = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (f.node, f.object);
function _c(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? ir(o.defaultProps, n) : !o.styleOverrides && !o.variants ? ir(o, n) : n;
}
function Ac({
  props: e,
  name: t
}) {
  const r = N.useContext(Oc);
  return _c({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const mo = {
  theme: void 0
};
function Pc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (mo.theme = o.theme, i = Go(e(mo)), t = i, r = o.theme), i;
  };
}
function kc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ho = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Mc = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!r || r && !r([...i, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, c], Array.isArray(u) ? [...a, c] : a) : t([...i, c], u, a));
    });
  }
  n(e);
}, Ic = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function zr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Mc(
    e,
    (c, u, p) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const h = `--${r ? `${r}-` : ""}${c.join("-")}`, m = Ic(c, u);
        Object.assign(o, {
          [h]: m
        }), ho(i, c, `var(${h})`, p), ho(a, c, `var(${h}, ${m})`, p);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Nc(e, t = {}) {
  const {
    getSelector: r = g,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: p,
    css: h,
    varsWithDefaults: m
  } = zr(u, t);
  let b = m;
  const x = {}, {
    [c]: S,
    ...y
  } = i;
  if (Object.entries(y || {}).forEach(([T, C]) => {
    const {
      vars: d,
      css: P,
      varsWithDefaults: k
    } = zr(C, t);
    b = ze(b, k), x[T] = {
      css: P,
      vars: d
    };
  }), S) {
    const {
      css: T,
      vars: C,
      varsWithDefaults: d
    } = zr(S, t);
    b = ze(b, d), x[c] = {
      css: T,
      vars: C
    };
  }
  function g(T, C) {
    var P, k;
    let d = o;
    if (o === "class" && (d = ".%s"), o === "data" && (d = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (d = `[${o}="%s"]`), T) {
      if (d === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((k = (P = i[T]) == null ? void 0 : P.palette) == null ? void 0 : k.mode) || T})`]: {
            ":root": C
          }
        };
      if (d)
        return e.defaultColorScheme === T ? `:root, ${d.replace("%s", String(T))}` : d.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let T = {
        ...p
      };
      return Object.entries(x).forEach(([, {
        vars: C
      }]) => {
        T = ze(T, C);
      }), T;
    },
    generateStyleSheets: () => {
      var J, Z;
      const T = [], C = e.defaultColorScheme || "light";
      function d(s, O) {
        Object.keys(O).length && T.push(typeof s == "string" ? {
          [s]: {
            ...O
          }
        } : s);
      }
      d(r(void 0, {
        ...h
      }), h);
      const {
        [C]: P,
        ...k
      } = x;
      if (P) {
        const {
          css: s
        } = P, O = (Z = (J = i[C]) == null ? void 0 : J.palette) == null ? void 0 : Z.mode, F = !n && O ? {
          colorScheme: O,
          ...s
        } : {
          ...s
        };
        d(r(C, {
          ...F
        }), F);
      }
      return Object.entries(k).forEach(([s, {
        css: O
      }]) => {
        var L, te;
        const F = (te = (L = i[s]) == null ? void 0 : L.palette) == null ? void 0 : te.mode, j = !n && F ? {
          colorScheme: F,
          ...O
        } : {
          ...O
        };
        d(r(s, {
          ...j
        }), j);
      }), T;
    }
  };
}
function jc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Bt = {
  black: "#000",
  white: "#fff"
}, Fc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ft = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, dt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Pt = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, pt = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, mt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ht = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, go = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Bt.white,
    default: Bt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Vr = {
  text: {
    primary: Bt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Bt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function yo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = cn(e.main, o) : t === "dark" && (e.dark = sn(e.main, i)));
}
function Dc(e = "light") {
  return e === "dark" ? {
    main: pt[200],
    light: pt[50],
    dark: pt[400]
  } : {
    main: pt[700],
    light: pt[400],
    dark: pt[800]
  };
}
function Bc(e = "light") {
  return e === "dark" ? {
    main: ft[200],
    light: ft[50],
    dark: ft[400]
  } : {
    main: ft[500],
    light: ft[300],
    dark: ft[700]
  };
}
function zc(e = "light") {
  return e === "dark" ? {
    main: dt[500],
    light: dt[300],
    dark: dt[700]
  } : {
    main: dt[700],
    light: dt[400],
    dark: dt[800]
  };
}
function Vc(e = "light") {
  return e === "dark" ? {
    main: mt[400],
    light: mt[300],
    dark: mt[700]
  } : {
    main: mt[700],
    light: mt[500],
    dark: mt[900]
  };
}
function Lc(e = "light") {
  return e === "dark" ? {
    main: ht[400],
    light: ht[300],
    dark: ht[700]
  } : {
    main: ht[800],
    light: ht[500],
    dark: ht[900]
  };
}
function Wc(e = "light") {
  return e === "dark" ? {
    main: Pt[400],
    light: Pt[300],
    dark: Pt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Pt[500],
    dark: Pt[900]
  };
}
function bn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Dc(t), a = e.secondary || Bc(t), c = e.error || zc(t), u = e.info || Vc(t), p = e.success || Lc(t), h = e.warning || Wc(t);
  function m(y) {
    const g = Un(y, Vr.text.primary) >= r ? Vr.text.primary : go.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Un(y, g);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${g} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const b = ({
    color: y,
    name: g,
    mainShade: w = 500,
    lightShade: A = 300,
    darkShade: T = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[w] && (y.main = y[w]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : tt(11, g ? ` (${g})` : "", w));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : tt(12, g ? ` (${g})` : "", JSON.stringify(y.main)));
    return yo(y, "light", A, n), yo(y, "dark", T, n), y.contrastText || (y.contrastText = m(y.main)), y;
  }, x = {
    dark: Vr,
    light: go
  };
  return process.env.NODE_ENV !== "production" && (x[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ze({
    // A collection of common colors.
    common: {
      ...Bt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Fc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x[t]
  }, o);
}
function Uc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Yc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function qc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const bo = {
  textTransform: "uppercase"
}, vo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Hc(e, t) {
  const {
    fontFamily: r = vo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: h,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = n / 14, x = h || ((g) => `${g / u * b}rem`), S = (g, w, A, T, C) => ({
    fontFamily: r,
    fontWeight: g,
    fontSize: x(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: A,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === vo ? {
      letterSpacing: `${qc(T / w)}em`
    } : {},
    ...C,
    ...p
  }), y = {
    h1: S(o, 96, 1.167, -1.5),
    h2: S(o, 60, 1.2, -0.5),
    h3: S(i, 48, 1.167, 0),
    h4: S(i, 34, 1.235, 0.25),
    h5: S(i, 24, 1.334, 0),
    h6: S(a, 20, 1.6, 0.15),
    subtitle1: S(i, 16, 1.75, 0.15),
    subtitle2: S(a, 14, 1.57, 0.1),
    body1: S(i, 16, 1.5, 0.15),
    body2: S(i, 14, 1.43, 0.15),
    button: S(a, 14, 1.75, 0.4, bo),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, bo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ze({
    htmlFontSize: u,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...y
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Gc = 0.2, Kc = 0.14, Xc = 0.12;
function Ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Gc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Kc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Xc})`].join(",");
}
const Jc = ["none", Ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Qc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Zc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function So(e) {
  return `${Math.round(e)}ms`;
}
function el(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function tl(e) {
  const t = {
    ...Qc,
    ...e.easing
  }, r = {
    ...Zc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: el,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0,
        ...p
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const h = (b) => typeof b == "string", m = (b) => !Number.isNaN(parseFloat(b));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !h(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), h(c) || console.error('MUI: Argument "easing" must be a string.'), !m(u) && !h(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(p).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(p).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof a == "string" ? a : So(a)} ${c} ${typeof u == "string" ? u : So(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const rl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Zr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: u,
    ...p
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : tt(20));
  const h = bn(i), m = qo(e);
  let b = ze(m, {
    mixins: Yc(m.breakpoints, n),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Jc.slice(),
    typography: Hc(h, c),
    transitions: tl(a),
    zIndex: {
      ...rl
    }
  });
  if (b = ze(b, p), b = t.reduce((x, S) => ze(x, S), b), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (y, g) => {
      let w;
      for (w in y) {
        const A = y[w];
        if (x.includes(w) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = st("", w);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[w] = {};
        }
      }
    };
    Object.keys(b.components).forEach((y) => {
      const g = b.components[y].styleOverrides;
      g && y.startsWith("Mui") && S(g, y);
    });
  }
  return b.unstable_sxConfig = {
    ...Cr,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, b.unstable_sx = function(S) {
    return vt({
      sx: S,
      theme: this
    });
  }, b;
}
function nl(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ol = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = nl(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Zo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ei(e) {
  return e === "dark" ? ol : [];
}
function il(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = bn(t);
  return {
    palette: i,
    opacity: {
      ...Zo(i.mode),
      ...r
    },
    overlays: n || ei(i.mode),
    ...o
  };
}
function al(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const sl = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], cl = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return sl(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function ll(e) {
  return Qe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ul(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !ll(c) || a.startsWith("unstable_") ? delete n[a] : Qe(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function fl(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function E(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function It(e) {
  return !e || !e.startsWith("hsl") ? e : $o(e);
}
function Je(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Mt(It(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function dl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const He = (e) => {
  try {
    return e();
  } catch {
  }
}, pl = (e = "mui") => kc(e);
function Lr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = il({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Zr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Zo(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || ei(o)
  }, a;
}
function ml(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = al,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...p
  } = e, h = Object.keys(r)[0], m = n || (r.light && h !== "light" ? "light" : h), b = pl(i), {
    [m]: x,
    light: S,
    dark: y,
    ...g
  } = r, w = {
    ...g
  };
  let A = x;
  if ((m === "dark" && !("dark" in r) || m === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : tt(21, m));
  const T = Lr(w, A, p, m);
  S && !w.light && Lr(w, S, void 0, "light"), y && !w.dark && Lr(w, y, void 0, "dark");
  let C = {
    defaultColorScheme: m,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: b,
    colorSchemes: w,
    font: {
      ...Uc(T.typography),
      ...T.font
    },
    spacing: dl(p.spacing)
  };
  Object.keys(C.colorSchemes).forEach((Z) => {
    const s = C.colorSchemes[Z].palette, O = (F) => {
      const j = F.split("-"), L = j[1], te = j[2];
      return b(F, s[L][te]);
    };
    if (s.mode === "light" && (E(s.common, "background", "#fff"), E(s.common, "onBackground", "#000")), s.mode === "dark" && (E(s.common, "background", "#000"), E(s.common, "onBackground", "#fff")), fl(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      E(s.Alert, "errorColor", he(s.error.light, 0.6)), E(s.Alert, "infoColor", he(s.info.light, 0.6)), E(s.Alert, "successColor", he(s.success.light, 0.6)), E(s.Alert, "warningColor", he(s.warning.light, 0.6)), E(s.Alert, "errorFilledBg", O("palette-error-main")), E(s.Alert, "infoFilledBg", O("palette-info-main")), E(s.Alert, "successFilledBg", O("palette-success-main")), E(s.Alert, "warningFilledBg", O("palette-warning-main")), E(s.Alert, "errorFilledColor", He(() => s.getContrastText(s.error.main))), E(s.Alert, "infoFilledColor", He(() => s.getContrastText(s.info.main))), E(s.Alert, "successFilledColor", He(() => s.getContrastText(s.success.main))), E(s.Alert, "warningFilledColor", He(() => s.getContrastText(s.warning.main))), E(s.Alert, "errorStandardBg", ge(s.error.light, 0.9)), E(s.Alert, "infoStandardBg", ge(s.info.light, 0.9)), E(s.Alert, "successStandardBg", ge(s.success.light, 0.9)), E(s.Alert, "warningStandardBg", ge(s.warning.light, 0.9)), E(s.Alert, "errorIconColor", O("palette-error-main")), E(s.Alert, "infoIconColor", O("palette-info-main")), E(s.Alert, "successIconColor", O("palette-success-main")), E(s.Alert, "warningIconColor", O("palette-warning-main")), E(s.AppBar, "defaultBg", O("palette-grey-100")), E(s.Avatar, "defaultBg", O("palette-grey-400")), E(s.Button, "inheritContainedBg", O("palette-grey-300")), E(s.Button, "inheritContainedHoverBg", O("palette-grey-A100")), E(s.Chip, "defaultBorder", O("palette-grey-400")), E(s.Chip, "defaultAvatarColor", O("palette-grey-700")), E(s.Chip, "defaultIconColor", O("palette-grey-700")), E(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), E(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), E(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), E(s.LinearProgress, "primaryBg", ge(s.primary.main, 0.62)), E(s.LinearProgress, "secondaryBg", ge(s.secondary.main, 0.62)), E(s.LinearProgress, "errorBg", ge(s.error.main, 0.62)), E(s.LinearProgress, "infoBg", ge(s.info.main, 0.62)), E(s.LinearProgress, "successBg", ge(s.success.main, 0.62)), E(s.LinearProgress, "warningBg", ge(s.warning.main, 0.62)), E(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), E(s.Slider, "primaryTrack", ge(s.primary.main, 0.62)), E(s.Slider, "secondaryTrack", ge(s.secondary.main, 0.62)), E(s.Slider, "errorTrack", ge(s.error.main, 0.62)), E(s.Slider, "infoTrack", ge(s.info.main, 0.62)), E(s.Slider, "successTrack", ge(s.success.main, 0.62)), E(s.Slider, "warningTrack", ge(s.warning.main, 0.62));
      const F = Xt(s.background.default, 0.8);
      E(s.SnackbarContent, "bg", F), E(s.SnackbarContent, "color", He(() => s.getContrastText(F))), E(s.SpeedDialAction, "fabHoverBg", Xt(s.background.paper, 0.15)), E(s.StepConnector, "border", O("palette-grey-400")), E(s.StepContent, "border", O("palette-grey-400")), E(s.Switch, "defaultColor", O("palette-common-white")), E(s.Switch, "defaultDisabledColor", O("palette-grey-100")), E(s.Switch, "primaryDisabledColor", ge(s.primary.main, 0.62)), E(s.Switch, "secondaryDisabledColor", ge(s.secondary.main, 0.62)), E(s.Switch, "errorDisabledColor", ge(s.error.main, 0.62)), E(s.Switch, "infoDisabledColor", ge(s.info.main, 0.62)), E(s.Switch, "successDisabledColor", ge(s.success.main, 0.62)), E(s.Switch, "warningDisabledColor", ge(s.warning.main, 0.62)), E(s.TableCell, "border", ge(Kt(s.divider, 1), 0.88)), E(s.Tooltip, "bg", Kt(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      E(s.Alert, "errorColor", ge(s.error.light, 0.6)), E(s.Alert, "infoColor", ge(s.info.light, 0.6)), E(s.Alert, "successColor", ge(s.success.light, 0.6)), E(s.Alert, "warningColor", ge(s.warning.light, 0.6)), E(s.Alert, "errorFilledBg", O("palette-error-dark")), E(s.Alert, "infoFilledBg", O("palette-info-dark")), E(s.Alert, "successFilledBg", O("palette-success-dark")), E(s.Alert, "warningFilledBg", O("palette-warning-dark")), E(s.Alert, "errorFilledColor", He(() => s.getContrastText(s.error.dark))), E(s.Alert, "infoFilledColor", He(() => s.getContrastText(s.info.dark))), E(s.Alert, "successFilledColor", He(() => s.getContrastText(s.success.dark))), E(s.Alert, "warningFilledColor", He(() => s.getContrastText(s.warning.dark))), E(s.Alert, "errorStandardBg", he(s.error.light, 0.9)), E(s.Alert, "infoStandardBg", he(s.info.light, 0.9)), E(s.Alert, "successStandardBg", he(s.success.light, 0.9)), E(s.Alert, "warningStandardBg", he(s.warning.light, 0.9)), E(s.Alert, "errorIconColor", O("palette-error-main")), E(s.Alert, "infoIconColor", O("palette-info-main")), E(s.Alert, "successIconColor", O("palette-success-main")), E(s.Alert, "warningIconColor", O("palette-warning-main")), E(s.AppBar, "defaultBg", O("palette-grey-900")), E(s.AppBar, "darkBg", O("palette-background-paper")), E(s.AppBar, "darkColor", O("palette-text-primary")), E(s.Avatar, "defaultBg", O("palette-grey-600")), E(s.Button, "inheritContainedBg", O("palette-grey-800")), E(s.Button, "inheritContainedHoverBg", O("palette-grey-700")), E(s.Chip, "defaultBorder", O("palette-grey-700")), E(s.Chip, "defaultAvatarColor", O("palette-grey-300")), E(s.Chip, "defaultIconColor", O("palette-grey-300")), E(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), E(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), E(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), E(s.LinearProgress, "primaryBg", he(s.primary.main, 0.5)), E(s.LinearProgress, "secondaryBg", he(s.secondary.main, 0.5)), E(s.LinearProgress, "errorBg", he(s.error.main, 0.5)), E(s.LinearProgress, "infoBg", he(s.info.main, 0.5)), E(s.LinearProgress, "successBg", he(s.success.main, 0.5)), E(s.LinearProgress, "warningBg", he(s.warning.main, 0.5)), E(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), E(s.Slider, "primaryTrack", he(s.primary.main, 0.5)), E(s.Slider, "secondaryTrack", he(s.secondary.main, 0.5)), E(s.Slider, "errorTrack", he(s.error.main, 0.5)), E(s.Slider, "infoTrack", he(s.info.main, 0.5)), E(s.Slider, "successTrack", he(s.success.main, 0.5)), E(s.Slider, "warningTrack", he(s.warning.main, 0.5));
      const F = Xt(s.background.default, 0.98);
      E(s.SnackbarContent, "bg", F), E(s.SnackbarContent, "color", He(() => s.getContrastText(F))), E(s.SpeedDialAction, "fabHoverBg", Xt(s.background.paper, 0.15)), E(s.StepConnector, "border", O("palette-grey-600")), E(s.StepContent, "border", O("palette-grey-600")), E(s.Switch, "defaultColor", O("palette-grey-300")), E(s.Switch, "defaultDisabledColor", O("palette-grey-600")), E(s.Switch, "primaryDisabledColor", he(s.primary.main, 0.55)), E(s.Switch, "secondaryDisabledColor", he(s.secondary.main, 0.55)), E(s.Switch, "errorDisabledColor", he(s.error.main, 0.55)), E(s.Switch, "infoDisabledColor", he(s.info.main, 0.55)), E(s.Switch, "successDisabledColor", he(s.success.main, 0.55)), E(s.Switch, "warningDisabledColor", he(s.warning.main, 0.55)), E(s.TableCell, "border", he(Kt(s.divider, 1), 0.68)), E(s.Tooltip, "bg", Kt(s.grey[700], 0.92));
    }
    Je(s.background, "default"), Je(s.background, "paper"), Je(s.common, "background"), Je(s.common, "onBackground"), Je(s, "divider"), Object.keys(s).forEach((F) => {
      const j = s[F];
      j && typeof j == "object" && (j.main && E(s[F], "mainChannel", Mt(It(j.main))), j.light && E(s[F], "lightChannel", Mt(It(j.light))), j.dark && E(s[F], "darkChannel", Mt(It(j.dark))), j.contrastText && E(s[F], "contrastTextChannel", Mt(It(j.contrastText))), F === "text" && (Je(s[F], "primary"), Je(s[F], "secondary")), F === "action" && (j.active && Je(s[F], "active"), j.selected && Je(s[F], "selected")));
    });
  }), C = t.reduce((Z, s) => ze(Z, s), C);
  const d = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: cl(C)
  }, {
    vars: P,
    generateThemeVars: k,
    generateStyleSheets: J
  } = Nc(C, d);
  return C.vars = P, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([Z, s]) => {
    C[Z] = s;
  }), C.generateThemeVars = k, C.generateStyleSheets = J, C.generateSpacing = function() {
    return Yo(p.spacing, ln(this));
  }, C.getColorSchemeSelector = jc(c), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = a, C.unstable_sxConfig = {
    ...Cr,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, C.unstable_sx = function(s) {
    return vt({
      sx: s,
      theme: this
    });
  }, C.toRuntimeSource = ul, C;
}
function Co(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: bn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function hl(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", u = o == null ? void 0 : o[c], p = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Zr(e, ...t);
    let h = r;
    "palette" in e || p[c] && (p[c] !== !0 ? h = p[c].palette : c === "dark" && (h = {
      mode: "dark"
    }));
    const m = Zr({
      ...e,
      palette: h
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = p, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: m.palette
    }, Co(m, "dark", p.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: m.palette
    }, Co(m, "light", p.light)), m;
  }
  return !r && !("light" in p) && c === "light" && (p.light = !0), ml({
    ...a,
    colorSchemes: p,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const gl = hl(), yl = "$$material", qe = cc({
  themeId: yl,
  defaultTheme: gl,
  rootShouldForwardProp: _o
}), Ct = Pc;
process.env.NODE_ENV !== "production" && (f.node, f.object.isRequired);
function Tt(e) {
  return Ac(e);
}
class ur {
  constructor() {
    $t(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ur();
  }
  static use() {
    const t = Qo(ur.create).current, [r, n] = N.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, N.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = vl(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function bl() {
  return ur.use();
}
function vl() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Sl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function en(e, t) {
  return en = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, en(e, t);
}
function Cl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, en(e, t);
}
const Eo = it.createContext(null);
function El(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vn(e, t) {
  var r = function(i) {
    return t && Zt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Mi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function xl(e, t) {
  e = e || {}, t = t || {};
  function r(h) {
    return h in t ? t[h] : e[h];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var p = n[u][a];
        c[n[u][a]] = r(p);
      }
    c[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function at(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Tl(e, t) {
  return vn(e.children, function(r) {
    return er(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: at(r, "appear", e),
      enter: at(r, "enter", e),
      exit: at(r, "exit", e)
    });
  });
}
function wl(e, t, r) {
  var n = vn(e.children), o = xl(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Zt(a)) {
      var c = i in t, u = i in n, p = t[i], h = Zt(p) && !p.props.in;
      u && (!c || h) ? o[i] = er(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: at(a, "exit", e),
        enter: at(a, "enter", e)
      }) : !u && c && !h ? o[i] = er(a, {
        in: !1
      }) : u && c && Zt(p) && (o[i] = er(a, {
        onExited: r.bind(null, a),
        in: p.props.in,
        exit: at(a, "exit", e),
        enter: at(a, "enter", e)
      }));
    }
  }), o;
}
var Rl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, $l = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Sn = /* @__PURE__ */ function(e) {
  Cl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(El(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? Tl(o, c) : wl(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = vn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = sr({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = Sl(o, ["component", "childFactory"]), u = this.state.contextValue, p = Rl(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ it.createElement(Eo.Provider, {
      value: u
    }, p) : /* @__PURE__ */ it.createElement(Eo.Provider, {
      value: u
    }, /* @__PURE__ */ it.createElement(i, c, p));
  }, t;
}(it.Component);
Sn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: f.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: f.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: f.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: f.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: f.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: f.func
} : {};
Sn.defaultProps = $l;
function ti(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: p
  } = e, [h, m] = N.useState(!1), b = Ae(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, S = Ae(r.child, h && r.childLeaving, n && r.childPulsate);
  return !c && !h && m(!0), N.useEffect(() => {
    if (!c && u != null) {
      const y = setTimeout(u, p);
      return () => {
        clearTimeout(y);
      };
    }
  }, [u, c, p]), /* @__PURE__ */ X.jsx("span", {
    className: b,
    style: x,
    children: /* @__PURE__ */ X.jsx("span", {
      className: S
    })
  });
}
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object.isRequired,
  className: f.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: f.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: f.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: f.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: f.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: f.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: f.number,
  /**
   * exit delay
   */
  timeout: f.number.isRequired
});
const We = xt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), tn = 550, Ol = 80, _l = hn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Al = hn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Pl = hn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, kl = qe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Ml = qe(ti, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${We.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${_l};
    animation-duration: ${tn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${We.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${We.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${We.childLeaving} {
    opacity: 0;
    animation-name: ${Al};
    animation-duration: ${tn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${We.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Pl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ri = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [u, p] = N.useState([]), h = N.useRef(0), m = N.useRef(null);
  N.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [u]);
  const b = N.useRef(!1), x = Tc(), S = N.useRef(null), y = N.useRef(null), g = N.useCallback((C) => {
    const {
      pulsate: d,
      rippleX: P,
      rippleY: k,
      rippleSize: J,
      cb: Z
    } = C;
    p((s) => [...s, /* @__PURE__ */ X.jsx(Ml, {
      classes: {
        ripple: Ae(i.ripple, We.ripple),
        rippleVisible: Ae(i.rippleVisible, We.rippleVisible),
        ripplePulsate: Ae(i.ripplePulsate, We.ripplePulsate),
        child: Ae(i.child, We.child),
        childLeaving: Ae(i.childLeaving, We.childLeaving),
        childPulsate: Ae(i.childPulsate, We.childPulsate)
      },
      timeout: tn,
      pulsate: d,
      rippleX: P,
      rippleY: k,
      rippleSize: J
    }, h.current)]), h.current += 1, m.current = Z;
  }, [i]), w = N.useCallback((C = {}, d = {}, P = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: J = o || d.pulsate,
      fakeElement: Z = !1
      // For test purposes
    } = d;
    if ((C == null ? void 0 : C.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (b.current = !0);
    const s = Z ? null : y.current, O = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, j, L;
    if (J || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      F = Math.round(O.width / 2), j = Math.round(O.height / 2);
    else {
      const {
        clientX: te,
        clientY: ee
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      F = Math.round(te - O.left), j = Math.round(ee - O.top);
    }
    if (J)
      L = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const te = Math.max(Math.abs((s ? s.clientWidth : 0) - F), F) * 2 + 2, ee = Math.max(Math.abs((s ? s.clientHeight : 0) - j), j) * 2 + 2;
      L = Math.sqrt(te ** 2 + ee ** 2);
    }
    C != null && C.touches ? S.current === null && (S.current = () => {
      g({
        pulsate: k,
        rippleX: F,
        rippleY: j,
        rippleSize: L,
        cb: P
      });
    }, x.start(Ol, () => {
      S.current && (S.current(), S.current = null);
    })) : g({
      pulsate: k,
      rippleX: F,
      rippleY: j,
      rippleSize: L,
      cb: P
    });
  }, [o, g, x]), A = N.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), T = N.useCallback((C, d) => {
    if (x.clear(), (C == null ? void 0 : C.type) === "touchend" && S.current) {
      S.current(), S.current = null, x.start(0, () => {
        T(C, d);
      });
      return;
    }
    S.current = null, p((P) => P.length > 0 ? P.slice(1) : P), m.current = d;
  }, [x]);
  return N.useImperativeHandle(r, () => ({
    pulsate: A,
    start: w,
    stop: T
  }), [A, w, T]), /* @__PURE__ */ X.jsx(kl, {
    className: Ae(We.root, i.root, a),
    ref: y,
    ...c,
    children: /* @__PURE__ */ X.jsx(Sn, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: f.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string
});
function Il(e) {
  return st("MuiButtonBase", e);
}
const Nl = xt("MuiButtonBase", ["root", "disabled", "focusVisible"]), jl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Vt({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Il, o);
  return r && n && (a.root += ` ${n}`), a;
}, Fl = qe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Nl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Cn = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: p = !1,
    disableRipple: h = !1,
    disableTouchRipple: m = !1,
    focusRipple: b = !1,
    focusVisibleClassName: x,
    LinkComponent: S = "a",
    onBlur: y,
    onClick: g,
    onContextMenu: w,
    onDragLeave: A,
    onFocus: T,
    onFocusVisible: C,
    onKeyDown: d,
    onKeyUp: P,
    onMouseDown: k,
    onMouseLeave: J,
    onMouseUp: Z,
    onTouchEnd: s,
    onTouchMove: O,
    onTouchStart: F,
    tabIndex: j = 0,
    TouchRippleProps: L,
    touchRippleRef: te,
    type: ee,
    ...ve
  } = n, ye = N.useRef(null), Ce = bl(), R = Qr(Ce.ref, te), [_, z] = N.useState(!1);
  p && _ && z(!1), N.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), ye.current.focus();
    }
  }), []);
  const W = Ce.shouldMount && !h && !p;
  N.useEffect(() => {
    _ && b && !h && Ce.pulsate();
  }, [h, b, _, Ce]);
  function D(K, qt, Ht = m) {
    return Qt((Rt) => (qt && qt(Rt), Ht || Ce[K](Rt), !0));
  }
  const Q = D("start", k), V = D("stop", w), U = D("stop", A), Y = D("stop", Z), H = D("stop", (K) => {
    _ && K.preventDefault(), J && J(K);
  }), B = D("start", F), G = D("stop", s), v = D("stop", O), oe = D("stop", (K) => {
    lr(K.target) || z(!1), y && y(K);
  }, !1), I = Qt((K) => {
    ye.current || (ye.current = K.currentTarget), lr(K.target) && (z(!0), C && C(K)), T && T(K);
  }), Se = () => {
    const K = ye.current;
    return u && u !== "button" && !(K.tagName === "A" && K.href);
  }, _e = Qt((K) => {
    b && !K.repeat && _ && K.key === " " && Ce.stop(K, () => {
      Ce.start(K);
    }), K.target === K.currentTarget && Se() && K.key === " " && K.preventDefault(), d && d(K), K.target === K.currentTarget && Se() && K.key === "Enter" && !p && (K.preventDefault(), g && g(K));
  }), Pe = Qt((K) => {
    b && K.key === " " && _ && !K.defaultPrevented && Ce.stop(K, () => {
      Ce.pulsate(K);
    }), P && P(K), g && K.target === K.currentTarget && Se() && K.key === " " && !K.defaultPrevented && g(K);
  });
  let Ie = u;
  Ie === "button" && (ve.href || ve.to) && (Ie = S);
  const je = {};
  Ie === "button" ? (je.type = ee === void 0 ? "button" : ee, je.disabled = p) : (!ve.href && !ve.to && (je.role = "button"), p && (je["aria-disabled"] = p));
  const Rr = Qr(r, ye), Yt = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: p,
    disableRipple: h,
    disableTouchRipple: m,
    focusRipple: b,
    tabIndex: j,
    focusVisible: _
  }, wt = jl(Yt);
  return /* @__PURE__ */ X.jsxs(Fl, {
    as: Ie,
    className: Ae(wt.root, c),
    ownerState: Yt,
    onBlur: oe,
    onClick: g,
    onContextMenu: V,
    onFocus: I,
    onKeyDown: _e,
    onKeyUp: Pe,
    onMouseDown: Q,
    onMouseLeave: H,
    onMouseUp: Y,
    onDragLeave: U,
    onTouchEnd: G,
    onTouchMove: v,
    onTouchStart: B,
    ref: Rr,
    tabIndex: p ? -1 : j,
    type: ee,
    ...je,
    ...ve,
    children: [a, W ? /* @__PURE__ */ X.jsx(ri, {
      ref: R,
      center: i,
      ...L
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Cn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: yc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: f.bool,
  /**
   * The content of the component.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: gc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: f.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: f.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: f.string,
  /**
   * @ignore
   */
  href: f.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: f.elementType,
  /**
   * @ignore
   */
  onBlur: f.func,
  /**
   * @ignore
   */
  onClick: f.func,
  /**
   * @ignore
   */
  onContextMenu: f.func,
  /**
   * @ignore
   */
  onDragLeave: f.func,
  /**
   * @ignore
   */
  onFocus: f.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: f.func,
  /**
   * @ignore
   */
  onKeyDown: f.func,
  /**
   * @ignore
   */
  onKeyUp: f.func,
  /**
   * @ignore
   */
  onMouseDown: f.func,
  /**
   * @ignore
   */
  onMouseLeave: f.func,
  /**
   * @ignore
   */
  onMouseUp: f.func,
  /**
   * @ignore
   */
  onTouchEnd: f.func,
  /**
   * @ignore
   */
  onTouchMove: f.func,
  /**
   * @ignore
   */
  onTouchStart: f.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * @default 0
   */
  tabIndex: f.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: f.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: f.oneOfType([f.func, f.shape({
    current: f.shape({
      pulsate: f.func.isRequired,
      start: f.func.isRequired,
      stop: f.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: f.oneOfType([f.oneOf(["button", "reset", "submit"]), f.string])
});
function Dl(e) {
  return typeof e.main == "string";
}
function Bl(e, t = []) {
  if (!Dl(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function rn(e = []) {
  return ([, t]) => t && Bl(t, e);
}
function zl(e) {
  return st("MuiButton", e);
}
const gt = xt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ni = /* @__PURE__ */ N.createContext({});
process.env.NODE_ENV !== "production" && (ni.displayName = "ButtonGroupContext");
const oi = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (oi.displayName = "ButtonGroupButtonContext");
const Vl = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${be(t)}`, `size${be(o)}`, `${i}Size${be(o)}`, `color${be(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${be(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${be(o)}`]
  }, u = Vt(c, zl, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, ii = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Ll = qe(Cn, {
  shouldForwardProp: (e) => _o(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${be(r.color)}`], t[`size${be(r.size)}`], t[`${r.variant}Size${be(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Ct(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${gt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${gt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${gt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${gt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(rn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : et(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${gt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${gt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), Wl = qe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${be(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...ii]
}), Ul = qe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${be(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...ii]
}), En = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = N.useContext(ni), o = N.useContext(oi), i = ir(n, t), a = Tt({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: p = "button",
    className: h,
    disabled: m = !1,
    disableElevation: b = !1,
    disableFocusRipple: x = !1,
    endIcon: S,
    focusVisibleClassName: y,
    fullWidth: g = !1,
    size: w = "medium",
    startIcon: A,
    type: T,
    variant: C = "text",
    ...d
  } = a, P = {
    ...a,
    color: u,
    component: p,
    disabled: m,
    disableElevation: b,
    disableFocusRipple: x,
    fullWidth: g,
    size: w,
    type: T,
    variant: C
  }, k = Vl(P), J = A && /* @__PURE__ */ X.jsx(Wl, {
    className: k.startIcon,
    ownerState: P,
    children: A
  }), Z = S && /* @__PURE__ */ X.jsx(Ul, {
    className: k.endIcon,
    ownerState: P,
    children: S
  }), s = o || "";
  return /* @__PURE__ */ X.jsxs(Ll, {
    ownerState: P,
    className: Ae(n.className, k.root, h, s),
    component: p,
    disabled: m,
    focusRipple: !x,
    focusVisibleClassName: Ae(k.focusVisible, y),
    ref: r,
    type: T,
    ...d,
    classes: k,
    children: [J, c, Z]
  });
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: f.oneOfType([f.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), f.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: f.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: f.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * Element placed after the children.
   */
  endIcon: f.node,
  /**
   * @ignore
   */
  focusVisibleClassName: f.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: f.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: f.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["small", "medium", "large"]), f.string]),
  /**
   * Element placed before the children.
   */
  startIcon: f.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * @ignore
   */
  type: f.oneOfType([f.oneOf(["button", "reset", "submit"]), f.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: f.oneOfType([f.oneOf(["contained", "outlined", "text"]), f.string])
});
function fu(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ X.jsx(
      En,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: t, color: n },
        children: r
      }
    )
  );
}
function du(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a, bordercolor: c, borderwidth: u, hover: p } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ X.jsx(
      En,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        "border-color": c,
        "border-width": u,
        sx: { ":hover": { backgroundColor: t, color: p }, color: n },
        children: r
      }
    )
  );
}
function Yl(e) {
  return st("MuiSvgIcon", e);
}
xt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ql = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${be(t)}`, `fontSize${be(r)}`]
  };
  return Vt(o, Yl, n);
}, Hl = qe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${be(r.color)}`], t[`fontSize${be(r.fontSize)}`]];
  }
})(Ct(({
  theme: e
}) => {
  var t, r, n, o, i, a, c, u, p, h, m, b, x, S;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (y) => !y.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((u = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((h = (p = e.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : h.call(p, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var g, w;
        return {
          props: {
            color: y
          },
          style: {
            color: (w = (g = (e.vars ?? e).palette) == null ? void 0 : g[y]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (b = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : b.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (S = (x = (e.vars ?? e).palette) == null ? void 0 : x.action) == null ? void 0 : S.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), zt = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: p,
    inheritViewBox: h = !1,
    titleAccess: m,
    viewBox: b = "0 0 24 24",
    ...x
  } = n, S = /* @__PURE__ */ N.isValidElement(o) && o.type === "svg", y = {
    ...n,
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: h,
    viewBox: b,
    hasSvgAsChild: S
  }, g = {};
  h || (g.viewBox = b);
  const w = ql(y);
  return /* @__PURE__ */ X.jsxs(Hl, {
    as: c,
    className: Ae(w.root, i),
    focusable: "false",
    color: p,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...g,
    ...x,
    ...S && o.props,
    ownerState: y,
    children: [S ? o.props.children : o, m ? /* @__PURE__ */ X.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (zt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: f.oneOfType([f.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), f.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: f.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: f.oneOfType([f.oneOf(["inherit", "large", "medium", "small"]), f.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: f.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: f.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: f.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: f.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: f.string
});
zt && (zt.muiName = "SvgIcon");
function wr(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ X.jsx(zt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = zt.muiName, /* @__PURE__ */ N.memo(/* @__PURE__ */ N.forwardRef(r));
}
const ai = wr(/* @__PURE__ */ X.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function Gl(e) {
  return st("MuiIconButton", e);
}
const Kl = xt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Xl = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${be(n)}`, o && `edge${be(o)}`, `size${be(i)}`]
  };
  return Vt(a, Gl, t);
}, Jl = qe(Cn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${be(r.color)}`], r.edge && t[`edge${be(r.edge)}`], t[`size${be(r.size)}`]];
  }
})(Ct(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : et(e.palette.action.active, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ct(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(rn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(rn()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : et((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Kl.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), xn = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: u = !1,
    disableFocusRipple: p = !1,
    disableRipple: h = !1,
    size: m = "medium",
    ...b
  } = n, x = {
    ...n,
    edge: o,
    color: c,
    disabled: u,
    disableFocusRipple: p,
    disableRipple: h,
    size: m
  }, S = Xl(x);
  return /* @__PURE__ */ X.jsx(Jl, {
    className: Ae(S.root, a),
    centerRipple: !0,
    focusRipple: !p,
    disabled: u,
    disableRipple: h,
    ref: r,
    ...b,
    ownerState: x,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (xn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: gn(f.node, (e) => N.Children.toArray(e.children).some((r) => /* @__PURE__ */ N.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: f.oneOfType([f.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), f.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: f.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["small", "medium", "large"]), f.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object])
});
const Ql = wr(/* @__PURE__ */ X.jsx("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star"), Zl = wr(/* @__PURE__ */ X.jsx("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), "StarBorder");
function eu(e) {
  return st("MuiRating", e);
}
const kt = xt("MuiRating", ["root", "sizeSmall", "sizeMedium", "sizeLarge", "readOnly", "disabled", "focusVisible", "visuallyHidden", "pristine", "label", "labelEmptyValueActive", "icon", "iconEmpty", "iconFilled", "iconHover", "iconFocus", "iconActive", "decimal"]);
function tu(e) {
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function Wr(e, t) {
  if (e == null)
    return e;
  const r = Math.round(e / t) * t;
  return Number(r.toFixed(tu(t)));
}
const ru = (e) => {
  const {
    classes: t,
    size: r,
    readOnly: n,
    disabled: o,
    emptyValueFocused: i,
    focusVisible: a
  } = e, c = {
    root: ["root", `size${be(r)}`, o && "disabled", a && "focusVisible", n && "readOnly"],
    label: ["label", "pristine"],
    labelEmptyValue: [i && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"]
  };
  return Vt(c, eu, t);
}, nu = qe("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${kt.visuallyHidden}`]: t.visuallyHidden
    }, t.root, t[`size${be(r.size)}`], r.readOnly && t.readOnly];
  }
})(Ct(({
  theme: e
}) => ({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: e.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  width: "min-content",
  WebkitTapHighlightColor: "transparent",
  [`&.${kt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity,
    pointerEvents: "none"
  },
  [`&.${kt.focusVisible} .${kt.iconActive}`]: {
    outline: "1px solid #999"
  },
  [`& .${kt.visuallyHidden}`]: wc,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      fontSize: e.typography.pxToRem(30)
    }
  }, {
    // TODO v6: use the .Mui-readOnly global state class
    props: ({
      ownerState: t
    }) => t.readOnly,
    style: {
      pointerEvents: "none"
    }
  }]
}))), si = qe("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: ({
    ownerState: e
  }, t) => [t.label, e.emptyValueFocused && t.labelEmptyValueActive]
})({
  cursor: "inherit",
  variants: [{
    props: ({
      ownerState: e
    }) => e.emptyValueFocused,
    style: {
      top: 0,
      bottom: 0,
      position: "absolute",
      outline: "1px solid #999",
      width: "100%"
    }
  }]
}), ou = qe("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.icon, r.iconEmpty && t.iconEmpty, r.iconFilled && t.iconFilled, r.iconHover && t.iconHover, r.iconFocus && t.iconFocus, r.iconActive && t.iconActive];
  }
})(Ct(({
  theme: e
}) => ({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: e.transitions.create("transform", {
    duration: e.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => t.iconActive,
    style: {
      transform: "scale(1.2)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.iconEmpty,
    style: {
      color: (e.vars || e).palette.action.disabled
    }
  }]
}))), iu = qe("span", {
  name: "MuiRating",
  slot: "Decimal",
  shouldForwardProp: (e) => Oo(e) && e !== "iconActive",
  overridesResolver: (e, t) => {
    const {
      iconActive: r
    } = e;
    return [t.decimal, r && t.iconActive];
  }
})({
  position: "relative",
  variants: [{
    props: ({
      iconActive: e
    }) => e,
    style: {
      transform: "scale(1.2)"
    }
  }]
});
function ci(e) {
  const {
    value: t,
    ...r
  } = e;
  return /* @__PURE__ */ X.jsx("span", {
    ...r
  });
}
process.env.NODE_ENV !== "production" && (ci.propTypes = {
  value: f.number.isRequired
});
function nn(e) {
  const {
    classes: t,
    disabled: r,
    emptyIcon: n,
    focus: o,
    getLabelText: i,
    highlightSelectedOnly: a,
    hover: c,
    icon: u,
    IconContainerComponent: p,
    isActive: h,
    itemValue: m,
    labelProps: b,
    name: x,
    onBlur: S,
    onChange: y,
    onClick: g,
    onFocus: w,
    readOnly: A,
    ownerState: T,
    ratingValue: C,
    ratingValueRounded: d
  } = e, P = a ? m === C : m <= C, k = m <= c, J = m <= o, Z = m === d, s = `${x}-${Jo()}`, O = /* @__PURE__ */ X.jsx(ou, {
    as: p,
    value: m,
    className: Ae(t.icon, P ? t.iconFilled : t.iconEmpty, k && t.iconHover, J && t.iconFocus, h && t.iconActive),
    ownerState: {
      ...T,
      iconEmpty: !P,
      iconFilled: P,
      iconHover: k,
      iconFocus: J,
      iconActive: h
    },
    children: n && !P ? n : u
  });
  return A ? /* @__PURE__ */ X.jsx("span", {
    ...b,
    children: O
  }) : /* @__PURE__ */ X.jsxs(N.Fragment, {
    children: [/* @__PURE__ */ X.jsxs(si, {
      ownerState: {
        ...T,
        emptyValueFocused: void 0
      },
      htmlFor: s,
      ...b,
      children: [O, /* @__PURE__ */ X.jsx("span", {
        className: t.visuallyHidden,
        children: i(m)
      })]
    }), /* @__PURE__ */ X.jsx("input", {
      className: t.visuallyHidden,
      onFocus: w,
      onBlur: S,
      onChange: y,
      onClick: g,
      disabled: r,
      value: m,
      id: s,
      type: "radio",
      name: x,
      checked: Z
    })]
  });
}
process.env.NODE_ENV !== "production" && (nn.propTypes = {
  classes: f.object.isRequired,
  disabled: f.bool.isRequired,
  emptyIcon: f.node,
  focus: f.number.isRequired,
  getLabelText: f.func.isRequired,
  highlightSelectedOnly: f.bool.isRequired,
  hover: f.number.isRequired,
  icon: f.node,
  IconContainerComponent: f.elementType.isRequired,
  isActive: f.bool.isRequired,
  itemValue: f.number.isRequired,
  labelProps: f.object,
  name: f.string,
  onBlur: f.func.isRequired,
  onChange: f.func.isRequired,
  onClick: f.func.isRequired,
  onFocus: f.func.isRequired,
  ownerState: f.object.isRequired,
  ratingValue: f.number,
  ratingValueRounded: f.number,
  readOnly: f.bool.isRequired
});
const au = /* @__PURE__ */ X.jsx(Ql, {
  fontSize: "inherit"
}), su = /* @__PURE__ */ X.jsx(Zl, {
  fontSize: "inherit"
});
function cu(e) {
  return `${e || "0"} Star${e !== 1 ? "s" : ""}`;
}
const li = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Tt({
    name: "MuiRating",
    props: t
  }), {
    className: o,
    defaultValue: i = null,
    disabled: a = !1,
    emptyIcon: c = su,
    emptyLabelText: u = "Empty",
    getLabelText: p = cu,
    highlightSelectedOnly: h = !1,
    icon: m = au,
    IconContainerComponent: b = ci,
    max: x = 5,
    name: S,
    onChange: y,
    onChangeActive: g,
    onMouseLeave: w,
    onMouseMove: A,
    precision: T = 1,
    readOnly: C = !1,
    size: d = "medium",
    value: P,
    ...k
  } = n, J = Jo(S), [Z, s] = Cc({
    controlled: P,
    default: i,
    name: "Rating"
  }), O = Wr(Z, T), F = $c(), [{
    hover: j,
    focus: L
  }, te] = N.useState({
    hover: -1,
    focus: -1
  });
  let ee = O;
  j !== -1 && (ee = j), L !== -1 && (ee = L);
  const [ve, ye] = N.useState(!1), Ce = N.useRef(), R = Qr(Ce, r), _ = (G) => {
    A && A(G);
    const v = Ce.current, {
      right: oe,
      left: I,
      width: Se
    } = v.getBoundingClientRect();
    let _e;
    F ? _e = (oe - G.clientX) / Se : _e = (G.clientX - I) / Se;
    let Pe = Wr(x * _e + T / 2, T);
    Pe = Ro(Pe, T, x), te((Ie) => Ie.hover === Pe && Ie.focus === Pe ? Ie : {
      hover: Pe,
      focus: Pe
    }), ye(!1), g && j !== Pe && g(G, Pe);
  }, z = (G) => {
    w && w(G);
    const v = -1;
    te({
      hover: v,
      focus: v
    }), g && j !== v && g(G, v);
  }, W = (G) => {
    let v = G.target.value === "" ? null : parseFloat(G.target.value);
    j !== -1 && (v = j), s(v), y && y(G, v);
  }, D = (G) => {
    G.clientX === 0 && G.clientY === 0 || (te({
      hover: -1,
      focus: -1
    }), s(null), y && parseFloat(G.target.value) === O && y(G, null));
  }, Q = (G) => {
    lr(G.target) && ye(!0);
    const v = parseFloat(G.target.value);
    te((oe) => ({
      hover: oe.hover,
      focus: v
    }));
  }, V = (G) => {
    if (j !== -1)
      return;
    lr(G.target) || ye(!1);
    const v = -1;
    te((oe) => ({
      hover: oe.hover,
      focus: v
    }));
  }, [U, Y] = N.useState(!1), H = {
    ...n,
    defaultValue: i,
    disabled: a,
    emptyIcon: c,
    emptyLabelText: u,
    emptyValueFocused: U,
    focusVisible: ve,
    getLabelText: p,
    icon: m,
    IconContainerComponent: b,
    max: x,
    precision: T,
    readOnly: C,
    size: d
  }, B = ru(H);
  return /* @__PURE__ */ X.jsxs(nu, {
    ref: R,
    onMouseMove: _,
    onMouseLeave: z,
    className: Ae(B.root, o, C && "MuiRating-readOnly"),
    ownerState: H,
    role: C ? "img" : null,
    "aria-label": C ? p(ee) : null,
    ...k,
    children: [Array.from(new Array(x)).map((G, v) => {
      const oe = v + 1, I = {
        classes: B,
        disabled: a,
        emptyIcon: c,
        focus: L,
        getLabelText: p,
        highlightSelectedOnly: h,
        hover: j,
        icon: m,
        IconContainerComponent: b,
        name: J,
        onBlur: V,
        onChange: W,
        onClick: D,
        onFocus: Q,
        ratingValue: ee,
        ratingValueRounded: O,
        readOnly: C,
        ownerState: H
      }, Se = oe === Math.ceil(ee) && (j !== -1 || L !== -1);
      if (T < 1) {
        const _e = Array.from(new Array(1 / T));
        return /* @__PURE__ */ X.jsx(iu, {
          className: Ae(B.decimal, Se && B.iconActive),
          ownerState: H,
          iconActive: Se,
          children: _e.map((Pe, Ie) => {
            const je = Wr(oe - 1 + (Ie + 1) * T, T);
            return /* @__PURE__ */ X.jsx(nn, {
              ...I,
              // The icon is already displayed as active
              isActive: !1,
              itemValue: je,
              labelProps: {
                style: _e.length - 1 === Ie ? {} : {
                  width: je === ee ? `${(Ie + 1) * T * 100}%` : "0%",
                  overflow: "hidden",
                  position: "absolute"
                }
              }
            }, je);
          })
        }, oe);
      }
      return /* @__PURE__ */ X.jsx(nn, {
        ...I,
        isActive: Se,
        itemValue: oe
      }, oe);
    }), !C && !a && /* @__PURE__ */ X.jsxs(si, {
      className: Ae(B.label, B.labelEmptyValue),
      ownerState: H,
      children: [/* @__PURE__ */ X.jsx("input", {
        className: B.visuallyHidden,
        value: "",
        id: `${J}-empty`,
        type: "radio",
        name: J,
        checked: O == null,
        onFocus: () => Y(!0),
        onBlur: () => Y(!1),
        onChange: W
      }), /* @__PURE__ */ X.jsx("span", {
        className: B.visuallyHidden,
        children: u
      })]
    })]
  });
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The default value. Use when the component is not controlled.
   * @default null
   */
  defaultValue: f.number,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * The icon to display when empty.
   * @default <StarBorder fontSize="inherit" />
   */
  emptyIcon: f.node,
  /**
   * The label read when the rating input is empty.
   * @default 'Empty'
   */
  emptyLabelText: f.node,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @param {number} value The rating label's value to format.
   * @returns {string}
   * @default function defaultLabelText(value) {
   *   return `${value || '0'} Star${value !== 1 ? 's' : ''}`;
   * }
   */
  getLabelText: f.func,
  /**
   * If `true`, only the selected icon will be highlighted.
   * @default false
   */
  highlightSelectedOnly: f.bool,
  /**
   * The icon to display.
   * @default <Star fontSize="inherit" />
   */
  icon: f.node,
  /**
   * The component containing the icon.
   * @default function IconContainer(props) {
   *   const { value, ...other } = props;
   *   return <span {...other} />;
   * }
   */
  IconContainerComponent: f.elementType,
  /**
   * Maximum rating.
   * @default 5
   */
  max: f.number,
  /**
   * The name attribute of the radio `input` elements.
   * This input `name` should be unique within the page.
   * Being unique within a form is insufficient since the `name` is used to generate IDs.
   */
  name: f.string,
  /**
   * Callback fired when the value changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number|null} value The new value.
   */
  onChange: f.func,
  /**
   * Callback function that is fired when the hover state changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number} value The new value.
   */
  onChangeActive: f.func,
  /**
   * @ignore
   */
  onMouseLeave: f.func,
  /**
   * @ignore
   */
  onMouseMove: f.func,
  /**
   * The minimum increment value change allowed.
   * @default 1
   */
  precision: gn(f.number, (e) => e.precision < 0.1 ? new Error(["MUI: The prop `precision` should be above 0.1.", "A value below this limit has an imperceptible impact."].join(`
`)) : null),
  /**
   * Removes all hover effects and pointer events.
   * @default false
   */
  readOnly: f.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["small", "medium", "large"]), f.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * The rating value.
   */
  value: f.number
});
function pu(e) {
  const { disabled: t, onClick: r, color: n } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ X.jsx(
      xn,
      {
        onClick: r,
        disabled: t,
        children: /* @__PURE__ */ X.jsx(
          ai,
          {
            color: n
          }
        )
      }
    )
  );
}
const ui = wr(/* @__PURE__ */ X.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function mu(e) {
  const { disabled: t, onClick: r, color: n } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ X.jsx(
      xn,
      {
        onClick: r,
        disabled: t,
        children: /* @__PURE__ */ X.jsx(
          ui,
          {
            color: n
          }
        )
      }
    )
  );
}
function hu(e) {
  const { defval: t, precision: r, maxrating: n, color: o } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ X.jsx(
      li,
      {
        defaultValue: t,
        precision: r,
        icon: /* @__PURE__ */ X.jsx(ai, { color: o }),
        emptyIcon: /* @__PURE__ */ X.jsx(ui, { color: o }),
        max: n,
        "aria-label": "custom rating"
      }
    )
  );
}
export {
  fu as CustomButton,
  hu as DanielGC,
  pu as MyFavourite,
  du as Mybutton,
  mu as Myfavouriteborder
};
//# sourceMappingURL=index.es.js.map
