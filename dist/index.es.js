var li = Object.defineProperty;
var fi = (e, r, t) => r in e ? li(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var xr = (e, r, t) => fi(e, typeof r != "symbol" ? r + "" : r, t);
import * as W from "react";
import nr, { forwardRef as di, useContext as pi, Children as mi, isValidElement as qr, cloneElement as Gr } from "react";
function hi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nt = { exports: {} }, Tr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function yi() {
  if (vn) return Tr;
  vn = 1;
  var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, f, d) {
    var p, m = {}, y = null, x = null;
    d !== void 0 && (y = "" + d), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (p in f) n.call(f, p) && !i.hasOwnProperty(p) && (m[p] = f[p]);
    if (c && c.defaultProps) for (p in f = c.defaultProps, f) m[p] === void 0 && (m[p] = f[p]);
    return { $$typeof: r, type: c, key: y, ref: x, props: m, _owner: o.current };
  }
  return Tr.Fragment = t, Tr.jsx = a, Tr.jsxs = a, Tr;
}
var wr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function gi() {
  return Sn || (Sn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, g = "@@iterator";
    function h(u) {
      if (u === null || typeof u != "object")
        return null;
      var R = S && u[S] || u[g];
      return typeof R == "function" ? R : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(u) {
      {
        for (var R = arguments.length, A = new Array(R > 1 ? R - 1 : 0), V = 1; V < R; V++)
          A[V - 1] = arguments[V];
        T("error", u, A);
      }
    }
    function T(u, R, A) {
      {
        var V = _.ReactDebugCurrentFrame, oe = V.getStackAddendum();
        oe !== "" && (R += "%s", A = A.concat([oe]));
        var fe = A.map(function(Z) {
          return String(Z);
        });
        fe.unshift("Warning: " + R), Function.prototype.apply.call(console[u], console, fe);
      }
    }
    var E = !1, l = !1, k = !1, M = !1, Q = !1, X;
    X = Symbol.for("react.module.reference");
    function s(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || Q || u === o || u === d || u === p || M || u === x || E || l || k || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === m || u.$$typeof === a || u.$$typeof === c || u.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === X || u.getModuleId !== void 0));
    }
    function O(u, R, A) {
      var V = u.displayName;
      if (V)
        return V;
      var oe = R.displayName || R.name || "";
      return oe !== "" ? A + "(" + oe + ")" : A;
    }
    function N(u) {
      return u.displayName || "Context";
    }
    function j(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case c:
            var R = u;
            return N(R) + ".Consumer";
          case a:
            var A = u;
            return N(A._context) + ".Provider";
          case f:
            return O(u, u.render, "ForwardRef");
          case m:
            var V = u.displayName || null;
            return V !== null ? V : j(u.type) || "Memo";
          case y: {
            var oe = u, fe = oe._payload, Z = oe._init;
            try {
              return j(Z(fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, ne = 0, ee, he, ye, Se, w, $, B;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function D() {
      {
        if (ne === 0) {
          ee = console.log, he = console.info, ye = console.warn, Se = console.error, w = console.group, $ = console.groupCollapsed, B = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        ne++;
      }
    }
    function K() {
      {
        if (ne--, ne === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, u, {
              value: ee
            }),
            info: Y({}, u, {
              value: he
            }),
            warn: Y({}, u, {
              value: ye
            }),
            error: Y({}, u, {
              value: Se
            }),
            group: Y({}, u, {
              value: w
            }),
            groupCollapsed: Y({}, u, {
              value: $
            }),
            groupEnd: Y({}, u, {
              value: B
            })
          });
        }
        ne < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = _.ReactCurrentDispatcher, L;
    function U(u, R, A) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (oe) {
            var V = oe.stack.trim().match(/\n( *(at )?)/);
            L = V && V[1] || "";
          }
        return `
` + L + u;
      }
    }
    var H = !1, q;
    {
      var ge = typeof WeakMap == "function" ? WeakMap : Map;
      q = new ge();
    }
    function b(u, R) {
      if (!u || H)
        return "";
      {
        var A = q.get(u);
        if (A !== void 0)
          return A;
      }
      var V;
      H = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var fe;
      fe = F.current, F.current = null, D();
      try {
        if (R) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Pe) {
              V = Pe;
            }
            Reflect.construct(u, [], Z);
          } else {
            try {
              Z.call();
            } catch (Pe) {
              V = Pe;
            }
            u.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pe) {
            V = Pe;
          }
          u();
        }
      } catch (Pe) {
        if (Pe && V && typeof Pe.stack == "string") {
          for (var J = Pe.stack.split(`
`), Oe = V.stack.split(`
`), Ee = J.length - 1, Te = Oe.length - 1; Ee >= 1 && Te >= 0 && J[Ee] !== Oe[Te]; )
            Te--;
          for (; Ee >= 1 && Te >= 0; Ee--, Te--)
            if (J[Ee] !== Oe[Te]) {
              if (Ee !== 1 || Te !== 1)
                do
                  if (Ee--, Te--, Te < 0 || J[Ee] !== Oe[Te]) {
                    var je = `
` + J[Ee].replace(" at new ", " at ");
                    return u.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", u.displayName)), typeof u == "function" && q.set(u, je), je;
                  }
                while (Ee >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        H = !1, F.current = fe, K(), Error.prepareStackTrace = oe;
      }
      var sr = u ? u.displayName || u.name : "", tr = sr ? U(sr) : "";
      return typeof u == "function" && q.set(u, tr), tr;
    }
    function xe(u, R, A) {
      return b(u, !1);
    }
    function I(u) {
      var R = u.prototype;
      return !!(R && R.isReactComponent);
    }
    function Re(u, R, A) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return b(u, I(u));
      if (typeof u == "string")
        return U(u);
      switch (u) {
        case d:
          return U("Suspense");
        case p:
          return U("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case f:
            return xe(u.render);
          case m:
            return Re(u.type, R, A);
          case y: {
            var V = u, oe = V._payload, fe = V._init;
            try {
              return Re(fe(oe), R, A);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, er = {}, rr = _.ReactDebugCurrentFrame;
    function We(u) {
      if (u) {
        var R = u._owner, A = Re(u.type, u._source, R ? R.type : null);
        rr.setExtraStackFrame(A);
      } else
        rr.setExtraStackFrame(null);
    }
    function bt(u, R, A, V, oe) {
      {
        var fe = Function.call.bind(De);
        for (var Z in u)
          if (fe(u, Z)) {
            var J = void 0;
            try {
              if (typeof u[Z] != "function") {
                var Oe = Error((V || "React class") + ": " + A + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              J = u[Z](R, Z, V, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              J = Ee;
            }
            J && !(J instanceof Error) && (We(oe), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", A, Z, typeof J), We(null)), J instanceof Error && !(J.message in er) && (er[J.message] = !0, We(oe), P("Failed %s type: %s", A, J.message), We(null));
          }
      }
    }
    var Br = Array.isArray;
    function Er(u) {
      return Br(u);
    }
    function G(u) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, A = R && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return A;
      }
    }
    function Fr(u) {
      try {
        return Lr(u), !1;
      } catch {
        return !0;
      }
    }
    function Lr(u) {
      return "" + u;
    }
    function Cr(u) {
      if (Fr(u))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", G(u)), Lr(u);
    }
    var ir = _.ReactCurrentOwner, qo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ln, fn, vt;
    vt = {};
    function Go(u) {
      if (De.call(u, "ref")) {
        var R = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Ko(u) {
      if (De.call(u, "key")) {
        var R = Object.getOwnPropertyDescriptor(u, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Ho(u, R) {
      if (typeof u.ref == "string" && ir.current && R && ir.current.stateNode !== R) {
        var A = j(ir.current.type);
        vt[A] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(ir.current.type), u.ref), vt[A] = !0);
      }
    }
    function Xo(u, R) {
      {
        var A = function() {
          ln || (ln = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        A.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function Jo(u, R) {
      {
        var A = function() {
          fn || (fn = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        A.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var Qo = function(u, R, A, V, oe, fe, Z) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: u,
        key: R,
        ref: A,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: fe
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function Zo(u, R, A, V, oe) {
      {
        var fe, Z = {}, J = null, Oe = null;
        A !== void 0 && (Cr(A), J = "" + A), Ko(R) && (Cr(R.key), J = "" + R.key), Go(R) && (Oe = R.ref, Ho(R, oe));
        for (fe in R)
          De.call(R, fe) && !qo.hasOwnProperty(fe) && (Z[fe] = R[fe]);
        if (u && u.defaultProps) {
          var Ee = u.defaultProps;
          for (fe in Ee)
            Z[fe] === void 0 && (Z[fe] = Ee[fe]);
        }
        if (J || Oe) {
          var Te = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          J && Xo(Z, Te), Oe && Jo(Z, Te);
        }
        return Qo(u, J, Oe, oe, V, ir.current, Z);
      }
    }
    var St = _.ReactCurrentOwner, dn = _.ReactDebugCurrentFrame;
    function ar(u) {
      if (u) {
        var R = u._owner, A = Re(u.type, u._source, R ? R.type : null);
        dn.setExtraStackFrame(A);
      } else
        dn.setExtraStackFrame(null);
    }
    var Et;
    Et = !1;
    function Ct(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function pn() {
      {
        if (St.current) {
          var u = j(St.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function ei(u) {
      return "";
    }
    var mn = {};
    function ri(u) {
      {
        var R = pn();
        if (!R) {
          var A = typeof u == "string" ? u : u.displayName || u.name;
          A && (R = `

Check the top-level render call using <` + A + ">.");
        }
        return R;
      }
    }
    function hn(u, R) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var A = ri(R);
        if (mn[A])
          return;
        mn[A] = !0;
        var V = "";
        u && u._owner && u._owner !== St.current && (V = " It was passed a child from " + j(u._owner.type) + "."), ar(u), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, V), ar(null);
      }
    }
    function yn(u, R) {
      {
        if (typeof u != "object")
          return;
        if (Er(u))
          for (var A = 0; A < u.length; A++) {
            var V = u[A];
            Ct(V) && hn(V, R);
          }
        else if (Ct(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var oe = h(u);
          if (typeof oe == "function" && oe !== u.entries)
            for (var fe = oe.call(u), Z; !(Z = fe.next()).done; )
              Ct(Z.value) && hn(Z.value, R);
        }
      }
    }
    function ti(u) {
      {
        var R = u.type;
        if (R == null || typeof R == "string")
          return;
        var A;
        if (typeof R == "function")
          A = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === m))
          A = R.propTypes;
        else
          return;
        if (A) {
          var V = j(R);
          bt(A, u.props, "prop", V, u);
        } else if (R.PropTypes !== void 0 && !Et) {
          Et = !0;
          var oe = j(R);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ni(u) {
      {
        for (var R = Object.keys(u.props), A = 0; A < R.length; A++) {
          var V = R[A];
          if (V !== "children" && V !== "key") {
            ar(u), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), ar(null);
            break;
          }
        }
        u.ref !== null && (ar(u), P("Invalid attribute `ref` supplied to `React.Fragment`."), ar(null));
      }
    }
    var gn = {};
    function bn(u, R, A, V, oe, fe) {
      {
        var Z = s(u);
        if (!Z) {
          var J = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = ei();
          Oe ? J += Oe : J += pn();
          var Ee;
          u === null ? Ee = "null" : Er(u) ? Ee = "array" : u !== void 0 && u.$$typeof === r ? (Ee = "<" + (j(u.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof u, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, J);
        }
        var Te = Zo(u, R, A, oe, fe);
        if (Te == null)
          return Te;
        if (Z) {
          var je = R.children;
          if (je !== void 0)
            if (V)
              if (Er(je)) {
                for (var sr = 0; sr < je.length; sr++)
                  yn(je[sr], u);
                Object.freeze && Object.freeze(je);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yn(je, u);
        }
        if (De.call(R, "key")) {
          var tr = j(u), Pe = Object.keys(R).filter(function(ui) {
            return ui !== "key";
          }), xt = Pe.length > 0 ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gn[tr + xt]) {
            var ci = Pe.length > 0 ? "{" + Pe.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xt, tr, ci, tr), gn[tr + xt] = !0;
          }
        }
        return u === n ? ni(Te) : ti(Te), Te;
      }
    }
    function oi(u, R, A) {
      return bn(u, R, A, !0);
    }
    function ii(u, R, A) {
      return bn(u, R, A, !1);
    }
    var ai = ii, si = oi;
    wr.Fragment = n, wr.jsx = ai, wr.jsxs = si;
  }()), wr;
}
process.env.NODE_ENV === "production" ? Nt.exports = yi() : Nt.exports = gi();
var ze = Nt.exports, Dt = { exports: {} }, Vr = { exports: {} }, ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function bi() {
  if (En) return ie;
  En = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function T(l) {
    if (typeof l == "object" && l !== null) {
      var k = l.$$typeof;
      switch (k) {
        case r:
          switch (l = l.type, l) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case p:
                case S:
                case x:
                case a:
                  return l;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  function E(l) {
    return T(l) === d;
  }
  return ie.AsyncMode = f, ie.ConcurrentMode = d, ie.ContextConsumer = c, ie.ContextProvider = a, ie.Element = r, ie.ForwardRef = p, ie.Fragment = n, ie.Lazy = S, ie.Memo = x, ie.Portal = t, ie.Profiler = i, ie.StrictMode = o, ie.Suspense = m, ie.isAsyncMode = function(l) {
    return E(l) || T(l) === f;
  }, ie.isConcurrentMode = E, ie.isContextConsumer = function(l) {
    return T(l) === c;
  }, ie.isContextProvider = function(l) {
    return T(l) === a;
  }, ie.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, ie.isForwardRef = function(l) {
    return T(l) === p;
  }, ie.isFragment = function(l) {
    return T(l) === n;
  }, ie.isLazy = function(l) {
    return T(l) === S;
  }, ie.isMemo = function(l) {
    return T(l) === x;
  }, ie.isPortal = function(l) {
    return T(l) === t;
  }, ie.isProfiler = function(l) {
    return T(l) === i;
  }, ie.isStrictMode = function(l) {
    return T(l) === o;
  }, ie.isSuspense = function(l) {
    return T(l) === m;
  }, ie.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === d || l === i || l === o || l === m || l === y || typeof l == "object" && l !== null && (l.$$typeof === S || l.$$typeof === x || l.$$typeof === a || l.$$typeof === c || l.$$typeof === p || l.$$typeof === h || l.$$typeof === _ || l.$$typeof === P || l.$$typeof === g);
  }, ie.typeOf = T, ie;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function vi() {
  return Cn || (Cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function T(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === n || b === d || b === i || b === o || b === m || b === y || typeof b == "object" && b !== null && (b.$$typeof === S || b.$$typeof === x || b.$$typeof === a || b.$$typeof === c || b.$$typeof === p || b.$$typeof === h || b.$$typeof === _ || b.$$typeof === P || b.$$typeof === g);
    }
    function E(b) {
      if (typeof b == "object" && b !== null) {
        var xe = b.$$typeof;
        switch (xe) {
          case r:
            var I = b.type;
            switch (I) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case m:
                return I;
              default:
                var Re = I && I.$$typeof;
                switch (Re) {
                  case c:
                  case p:
                  case S:
                  case x:
                  case a:
                    return Re;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var l = f, k = d, M = c, Q = a, X = r, s = p, O = n, N = S, j = x, Y = t, ne = i, ee = o, he = m, ye = !1;
    function Se(b) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(b) || E(b) === f;
    }
    function w(b) {
      return E(b) === d;
    }
    function $(b) {
      return E(b) === c;
    }
    function B(b) {
      return E(b) === a;
    }
    function z(b) {
      return typeof b == "object" && b !== null && b.$$typeof === r;
    }
    function D(b) {
      return E(b) === p;
    }
    function K(b) {
      return E(b) === n;
    }
    function F(b) {
      return E(b) === S;
    }
    function L(b) {
      return E(b) === x;
    }
    function U(b) {
      return E(b) === t;
    }
    function H(b) {
      return E(b) === i;
    }
    function q(b) {
      return E(b) === o;
    }
    function ge(b) {
      return E(b) === m;
    }
    ae.AsyncMode = l, ae.ConcurrentMode = k, ae.ContextConsumer = M, ae.ContextProvider = Q, ae.Element = X, ae.ForwardRef = s, ae.Fragment = O, ae.Lazy = N, ae.Memo = j, ae.Portal = Y, ae.Profiler = ne, ae.StrictMode = ee, ae.Suspense = he, ae.isAsyncMode = Se, ae.isConcurrentMode = w, ae.isContextConsumer = $, ae.isContextProvider = B, ae.isElement = z, ae.isForwardRef = D, ae.isFragment = K, ae.isLazy = F, ae.isMemo = L, ae.isPortal = U, ae.isProfiler = H, ae.isStrictMode = q, ae.isSuspense = ge, ae.isValidElementType = T, ae.typeOf = E;
  }()), ae;
}
var xn;
function co() {
  return xn || (xn = 1, process.env.NODE_ENV === "production" ? Vr.exports = bi() : Vr.exports = vi()), Vr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tt, Tn;
function Si() {
  if (Tn) return Tt;
  Tn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
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
      var f = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Tt = o() ? Object.assign : function(i, a) {
    for (var c, f = n(i), d, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var m in c)
        r.call(c, m) && (f[m] = c[m]);
      if (e) {
        d = e(c);
        for (var y = 0; y < d.length; y++)
          t.call(c, d[y]) && (f[d[y]] = c[d[y]]);
      }
    }
    return f;
  }, Tt;
}
var wt, wn;
function qt() {
  if (wn) return wt;
  wn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wt = e, wt;
}
var Rt, Rn;
function uo() {
  return Rn || (Rn = 1, Rt = Function.call.bind(Object.prototype.hasOwnProperty)), Rt;
}
var _t, _n;
function Ei() {
  if (_n) return _t;
  _n = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = qt(), t = {}, n = uo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var m;
          try {
            if (typeof i[p] != "function") {
              var y = Error(
                (f || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            m = i[p](a, p, f, c, null, r);
          } catch (S) {
            m = S;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var x = d ? d() : "";
            e(
              "Failed " + c + " type: " + m.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, _t = o, _t;
}
var $t, $n;
function Ci() {
  if ($n) return $t;
  $n = 1;
  var e = co(), r = Si(), t = qt(), n = uo(), o = Ei(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return $t = function(c, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(w) {
      var $ = w && (d && w[d] || w[p]);
      if (typeof $ == "function")
        return $;
    }
    var y = "<<anonymous>>", x = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: P(),
      arrayOf: T,
      element: E(),
      elementType: l(),
      instanceOf: k,
      node: s(),
      objectOf: Q,
      oneOf: M,
      oneOfType: X,
      shape: N,
      exact: j
    };
    function S(w, $) {
      return w === $ ? w !== 0 || 1 / w === 1 / $ : w !== w && $ !== $;
    }
    function g(w, $) {
      this.message = w, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function h(w) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, B = 0;
      function z(K, F, L, U, H, q, ge) {
        if (U = U || y, q = q || L, ge !== t) {
          if (f) {
            var b = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw b.name = "Invariant Violation", b;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = U + ":" + L;
            !$[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[xe] = !0, B++);
          }
        }
        return F[L] == null ? K ? F[L] === null ? new g("The " + H + " `" + q + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new g("The " + H + " `" + q + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : w(F, L, U, H, q);
      }
      var D = z.bind(null, !1);
      return D.isRequired = z.bind(null, !0), D;
    }
    function _(w) {
      function $(B, z, D, K, F, L) {
        var U = B[z], H = ee(U);
        if (H !== w) {
          var q = he(U);
          return new g(
            "Invalid " + K + " `" + F + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return h($);
    }
    function P() {
      return h(a);
    }
    function T(w) {
      function $(B, z, D, K, F) {
        if (typeof w != "function")
          return new g("Property `" + F + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var L = B[z];
        if (!Array.isArray(L)) {
          var U = ee(L);
          return new g("Invalid " + K + " `" + F + "` of type " + ("`" + U + "` supplied to `" + D + "`, expected an array."));
        }
        for (var H = 0; H < L.length; H++) {
          var q = w(L, H, D, K, F + "[" + H + "]", t);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return h($);
    }
    function E() {
      function w($, B, z, D, K) {
        var F = $[B];
        if (!c(F)) {
          var L = ee(F);
          return new g("Invalid " + D + " `" + K + "` of type " + ("`" + L + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(w);
    }
    function l() {
      function w($, B, z, D, K) {
        var F = $[B];
        if (!e.isValidElementType(F)) {
          var L = ee(F);
          return new g("Invalid " + D + " `" + K + "` of type " + ("`" + L + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(w);
    }
    function k(w) {
      function $(B, z, D, K, F) {
        if (!(B[z] instanceof w)) {
          var L = w.name || y, U = Se(B[z]);
          return new g("Invalid " + K + " `" + F + "` of type " + ("`" + U + "` supplied to `" + D + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return h($);
    }
    function M(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(B, z, D, K, F) {
        for (var L = B[z], U = 0; U < w.length; U++)
          if (S(L, w[U]))
            return null;
        var H = JSON.stringify(w, function(ge, b) {
          var xe = he(b);
          return xe === "symbol" ? String(b) : b;
        });
        return new g("Invalid " + K + " `" + F + "` of value `" + String(L) + "` " + ("supplied to `" + D + "`, expected one of " + H + "."));
      }
      return h($);
    }
    function Q(w) {
      function $(B, z, D, K, F) {
        if (typeof w != "function")
          return new g("Property `" + F + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var L = B[z], U = ee(L);
        if (U !== "object")
          return new g("Invalid " + K + " `" + F + "` of type " + ("`" + U + "` supplied to `" + D + "`, expected an object."));
        for (var H in L)
          if (n(L, H)) {
            var q = w(L, H, D, K, F + "." + H, t);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return h($);
    }
    function X(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < w.length; $++) {
        var B = w[$];
        if (typeof B != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(B) + " at index " + $ + "."
          ), a;
      }
      function z(D, K, F, L, U) {
        for (var H = [], q = 0; q < w.length; q++) {
          var ge = w[q], b = ge(D, K, F, L, U, t);
          if (b == null)
            return null;
          b.data && n(b.data, "expectedType") && H.push(b.data.expectedType);
        }
        var xe = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new g("Invalid " + L + " `" + U + "` supplied to " + ("`" + F + "`" + xe + "."));
      }
      return h(z);
    }
    function s() {
      function w($, B, z, D, K) {
        return Y($[B]) ? null : new g("Invalid " + D + " `" + K + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return h(w);
    }
    function O(w, $, B, z, D) {
      return new g(
        (w || "React class") + ": " + $ + " type `" + B + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function N(w) {
      function $(B, z, D, K, F) {
        var L = B[z], U = ee(L);
        if (U !== "object")
          return new g("Invalid " + K + " `" + F + "` of type `" + U + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var H in w) {
          var q = w[H];
          if (typeof q != "function")
            return O(D, K, F, H, he(q));
          var ge = q(L, H, D, K, F + "." + H, t);
          if (ge)
            return ge;
        }
        return null;
      }
      return h($);
    }
    function j(w) {
      function $(B, z, D, K, F) {
        var L = B[z], U = ee(L);
        if (U !== "object")
          return new g("Invalid " + K + " `" + F + "` of type `" + U + "` " + ("supplied to `" + D + "`, expected `object`."));
        var H = r({}, B[z], w);
        for (var q in H) {
          var ge = w[q];
          if (n(w, q) && typeof ge != "function")
            return O(D, K, F, q, he(ge));
          if (!ge)
            return new g(
              "Invalid " + K + " `" + F + "` key `" + q + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(B[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var b = ge(L, q, D, K, F + "." + q, t);
          if (b)
            return b;
        }
        return null;
      }
      return h($);
    }
    function Y(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(Y);
          if (w === null || c(w))
            return !0;
          var $ = m(w);
          if ($) {
            var B = $.call(w), z;
            if ($ !== w.entries) {
              for (; !(z = B.next()).done; )
                if (!Y(z.value))
                  return !1;
            } else
              for (; !(z = B.next()).done; ) {
                var D = z.value;
                if (D && !Y(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(w, $) {
      return w === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function ee(w) {
      var $ = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : ne($, w) ? "symbol" : $;
    }
    function he(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var $ = ee(w);
      if ($ === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function ye(w) {
      var $ = he(w);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function Se(w) {
      return !w.constructor || !w.constructor.name ? y : w.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, $t;
}
var Ot, On;
function xi() {
  if (On) return Ot;
  On = 1;
  var e = qt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Ot = function() {
    function n(a, c, f, d, p, m) {
      if (m !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
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
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Ot;
}
if (process.env.NODE_ENV !== "production") {
  var Ti = co(), wi = !0;
  Dt.exports = Ci()(Ti.isElement, wi);
} else
  Dt.exports = xi()();
var Ri = Dt.exports;
const C = /* @__PURE__ */ hi(Ri);
function lo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = lo(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Be() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = lo(e)) && (n && (n += " "), n += r);
  return n;
}
function Qr(e, r) {
  const t = {
    ...r
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        t[o] = {
          ...e[o],
          ...t[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = r[o];
        if (!a)
          t[o] = i || {};
        else if (!i)
          t[o] = a;
        else {
          t[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const f = c;
              t[o][f] = Qr(i[f], a[f]);
            }
        }
      } else t[o] === void 0 && (t[o] = e[o]);
    }
  return t;
}
function fo(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (a += (c === !0 ? "" : " ") + r(d), c = !1, t && t[d] && (a += " " + t[d]));
    }
    n[o] = a;
  }
  return n;
}
function Je(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function _i(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function Gt(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), _i(e, r, t);
}
function $i(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Qe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Qe($i(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Je(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Je(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Oi = (e) => {
  const r = Qe(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, $r = (e, r) => {
  try {
    return Oi(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function nt(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function po(e) {
  e = Qe(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (d, p = (d + t / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const f = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", f.push(r[3])), nt({
    type: c,
    values: f
  });
}
function jt(e) {
  e = Qe(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Qe(po(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Pn(e, r) {
  const t = jt(e), n = jt(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function mr(e, r) {
  return e = Qe(e), r = Gt(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, nt(e);
}
function zr(e, r, t) {
  try {
    return mr(e, r);
  } catch {
    return e;
  }
}
function Kt(e, r) {
  if (e = Qe(e), r = Gt(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return nt(e);
}
function de(e, r, t) {
  try {
    return Kt(e, r);
  } catch {
    return e;
  }
}
function Ht(e, r) {
  if (e = Qe(e), r = Gt(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return nt(e);
}
function pe(e, r, t) {
  try {
    return Ht(e, r);
  } catch {
    return e;
  }
}
function Pi(e, r = 0.15) {
  return jt(e) > 0.5 ? Kt(e, r) : Ht(e, r);
}
function Wr(e, r, t) {
  try {
    return Pi(e, r);
  } catch {
    return e;
  }
}
function Ai(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const mo = (e) => Ai(e) && e !== "classes";
function Ae(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Je(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function He(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ho(e) {
  if (!He(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = ho(e[t]);
  }), r;
}
function Ie(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return He(e) && He(r) && Object.keys(r).forEach((o) => {
    He(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && He(e[o]) ? n[o] = Ie(e[o], r[o], t) : t.clone ? n[o] = He(r[o]) ? ho(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function Pr(e, r) {
  return r ? Ie(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ze = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.string, C.object, C.array]) : {};
function ki(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function Mi(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function Ii(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Je(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Ni(e) {
  const r = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function t(i, a) {
    i.up = (...c) => r(e.breakpoints.up(...c), a), i.down = (...c) => r(e.breakpoints.down(...c), a), i.between = (...c) => r(e.breakpoints.between(...c), a), i.only = (...c) => r(e.breakpoints.only(...c), a), i.not = (...c) => {
      const f = r(e.breakpoints.not(...c), a);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const ot = {
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
}, An = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ot[e]}px)`
}, Di = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : ot[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function Xe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || An;
    return r.reduce((a, c, f) => (a[i.up(i.keys[f])] = t(r[f]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || An;
    return Object.keys(r).reduce((a, c) => {
      if (Mi(i.keys, c)) {
        const f = Ii(n.containerQueries ? n : Di, c);
        f && (a[f] = t(r[c], c));
      } else if (Object.keys(i.values || ot).includes(c)) {
        const f = i.up(c);
        a[f] = t(r[c], c);
      } else {
        const f = c;
        a[f] = r[f];
      }
      return a;
    }, {});
  }
  return t(r);
}
function ji(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Bi(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function it(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Zr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = it(e, t) || n, r && (o = r(o, n, e)), o;
}
function Ce(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const c = a[r], f = a.theme, d = it(f, n) || {};
    return Xe(a, c, (m) => {
      let y = Zr(d, o, m);
      return m === y && typeof m == "string" && (y = Zr(d, o, `${r}${m === "default" ? "" : Ae(m)}`, m)), t === !1 ? y : {
        [t]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Ze
  } : {}, i.filterProps = [r], i;
}
function Fi(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Li = {
  m: "margin",
  p: "padding"
}, Vi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, zi = Fi((e) => {
  if (e.length > 2)
    if (kn[e])
      e = kn[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Li[r], o = Vi[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), at = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], st = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Wi = [...at, ...st];
function Nr(e, r, t, n) {
  const o = it(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Xt(e) {
  return Nr(e, "spacing", 8, "spacing");
}
function Dr(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function Yi(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Dr(r, t), n), {});
}
function Ui(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = zi(t), i = Yi(o, n), a = e[t];
  return Xe(e, a, i);
}
function yo(e, r) {
  const t = Xt(e.theme);
  return Object.keys(e).map((n) => Ui(e, r, n, t)).reduce(Pr, {});
}
function be(e) {
  return yo(e, at);
}
be.propTypes = process.env.NODE_ENV !== "production" ? at.reduce((e, r) => (e[r] = Ze, e), {}) : {};
be.filterProps = at;
function ve(e) {
  return yo(e, st);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? st.reduce((e, r) => (e[r] = Ze, e), {}) : {};
ve.filterProps = st;
process.env.NODE_ENV !== "production" && Wi.reduce((e, r) => (e[r] = Ze, e), {});
function ct(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Pr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Le(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, r) {
  return Ce({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const qi = Ve("border", Le), Gi = Ve("borderTop", Le), Ki = Ve("borderRight", Le), Hi = Ve("borderBottom", Le), Xi = Ve("borderLeft", Le), Ji = Ve("borderColor"), Qi = Ve("borderTopColor"), Zi = Ve("borderRightColor"), ea = Ve("borderBottomColor"), ra = Ve("borderLeftColor"), ta = Ve("outline", Le), na = Ve("outlineColor"), ut = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Nr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Dr(r, n)
    });
    return Xe(e, e.borderRadius, t);
  }
  return null;
};
ut.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ze
} : {};
ut.filterProps = ["borderRadius"];
ct(qi, Gi, Ki, Hi, Xi, Ji, Qi, Zi, ea, ra, ut, ta, na);
const lt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Nr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Dr(r, n)
    });
    return Xe(e, e.gap, t);
  }
  return null;
};
lt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ze
} : {};
lt.filterProps = ["gap"];
const ft = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Nr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Dr(r, n)
    });
    return Xe(e, e.columnGap, t);
  }
  return null;
};
ft.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ze
} : {};
ft.filterProps = ["columnGap"];
const dt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Nr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Dr(r, n)
    });
    return Xe(e, e.rowGap, t);
  }
  return null;
};
dt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ze
} : {};
dt.filterProps = ["rowGap"];
const oa = Ce({
  prop: "gridColumn"
}), ia = Ce({
  prop: "gridRow"
}), aa = Ce({
  prop: "gridAutoFlow"
}), sa = Ce({
  prop: "gridAutoColumns"
}), ca = Ce({
  prop: "gridAutoRows"
}), ua = Ce({
  prop: "gridTemplateColumns"
}), la = Ce({
  prop: "gridTemplateRows"
}), fa = Ce({
  prop: "gridTemplateAreas"
}), da = Ce({
  prop: "gridArea"
});
ct(lt, ft, dt, oa, ia, aa, sa, ca, ua, la, fa, da);
function hr(e, r) {
  return r === "grey" ? r : e;
}
const pa = Ce({
  prop: "color",
  themeKey: "palette",
  transform: hr
}), ma = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: hr
}), ha = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: hr
});
ct(pa, ma, ha);
function Me(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ya = Ce({
  prop: "width",
  transform: Me
}), Jt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var o, i, a, c, f;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[t]) || ot[t];
      return n ? ((f = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Me(t)
      };
    };
    return Xe(e, e.maxWidth, r);
  }
  return null;
};
Jt.filterProps = ["maxWidth"];
const ga = Ce({
  prop: "minWidth",
  transform: Me
}), ba = Ce({
  prop: "height",
  transform: Me
}), va = Ce({
  prop: "maxHeight",
  transform: Me
}), Sa = Ce({
  prop: "minHeight",
  transform: Me
});
Ce({
  prop: "size",
  cssProperty: "width",
  transform: Me
});
Ce({
  prop: "size",
  cssProperty: "height",
  transform: Me
});
const Ea = Ce({
  prop: "boxSizing"
});
ct(ya, Jt, ga, ba, va, Sa, Ea);
const pt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Le
  },
  borderTop: {
    themeKey: "borders",
    transform: Le
  },
  borderRight: {
    themeKey: "borders",
    transform: Le
  },
  borderBottom: {
    themeKey: "borders",
    transform: Le
  },
  borderLeft: {
    themeKey: "borders",
    transform: Le
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
    transform: Le
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ut
  },
  // palette
  color: {
    themeKey: "palette",
    transform: hr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: hr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: hr
  },
  // spacing
  p: {
    style: ve
  },
  pt: {
    style: ve
  },
  pr: {
    style: ve
  },
  pb: {
    style: ve
  },
  pl: {
    style: ve
  },
  px: {
    style: ve
  },
  py: {
    style: ve
  },
  padding: {
    style: ve
  },
  paddingTop: {
    style: ve
  },
  paddingRight: {
    style: ve
  },
  paddingBottom: {
    style: ve
  },
  paddingLeft: {
    style: ve
  },
  paddingX: {
    style: ve
  },
  paddingY: {
    style: ve
  },
  paddingInline: {
    style: ve
  },
  paddingInlineStart: {
    style: ve
  },
  paddingInlineEnd: {
    style: ve
  },
  paddingBlock: {
    style: ve
  },
  paddingBlockStart: {
    style: ve
  },
  paddingBlockEnd: {
    style: ve
  },
  m: {
    style: be
  },
  mt: {
    style: be
  },
  mr: {
    style: be
  },
  mb: {
    style: be
  },
  ml: {
    style: be
  },
  mx: {
    style: be
  },
  my: {
    style: be
  },
  margin: {
    style: be
  },
  marginTop: {
    style: be
  },
  marginRight: {
    style: be
  },
  marginBottom: {
    style: be
  },
  marginLeft: {
    style: be
  },
  marginX: {
    style: be
  },
  marginY: {
    style: be
  },
  marginInline: {
    style: be
  },
  marginInlineStart: {
    style: be
  },
  marginInlineEnd: {
    style: be
  },
  marginBlock: {
    style: be
  },
  marginBlockStart: {
    style: be
  },
  marginBlockEnd: {
    style: be
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
    style: lt
  },
  rowGap: {
    style: dt
  },
  columnGap: {
    style: ft
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
    transform: Me
  },
  maxWidth: {
    style: Jt
  },
  minWidth: {
    transform: Me
  },
  height: {
    transform: Me
  },
  maxHeight: {
    transform: Me
  },
  minHeight: {
    transform: Me
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
function Ca(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function xa(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Ta() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: f = t,
      themeKey: d,
      transform: p,
      style: m
    } = c;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const y = it(o, d) || {};
    return m ? m(a) : Xe(a, n, (S) => {
      let g = Zr(y, p, S);
      return S === g && typeof S == "string" && (g = Zr(y, p, `${t}${S === "default" ? "" : Ae(S)}`, S)), f === !1 ? g : {
        [f]: g
      };
    });
  }
  function r(t) {
    const {
      sx: n,
      theme: o = {}
    } = t || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? pt;
    function a(c) {
      let f = c;
      if (typeof c == "function")
        f = c(o);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const d = ji(o.breakpoints), p = Object.keys(d);
      let m = d;
      return Object.keys(f).forEach((y) => {
        const x = xa(f[y], o);
        if (x != null)
          if (typeof x == "object")
            if (i[y])
              m = Pr(m, e(y, x, o, i));
            else {
              const S = Xe({
                theme: o
              }, x, (g) => ({
                [y]: g
              }));
              Ca(S, x) ? m[y] = r({
                sx: x,
                theme: o
              }) : m = Pr(m, S);
            }
          else
            m = Pr(m, e(y, x, o, i));
      }), ki(o, Bi(p, m));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return r;
}
const gr = Ta();
gr.filterProps = ["sx"];
function et() {
  return et = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, et.apply(null, arguments);
}
function go(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var wa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ra = /* @__PURE__ */ go(
  function(e) {
    return wa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _a = !1;
function $a(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Oa(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Pa = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !_a : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Oa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = $a(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), $e = "-ms-", rt = "-moz-", re = "-webkit-", bo = "comm", Qt = "rule", Zt = "decl", Aa = "@import", vo = "@keyframes", ka = "@layer", Ma = Math.abs, mt = String.fromCharCode, Ia = Object.assign;
function Na(e, r) {
  return _e(e, 0) ^ 45 ? (((r << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function So(e) {
  return e.trim();
}
function Da(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function te(e, r, t) {
  return e.replace(r, t);
}
function Bt(e, r) {
  return e.indexOf(r);
}
function _e(e, r) {
  return e.charCodeAt(r) | 0;
}
function Ar(e, r, t) {
  return e.slice(r, t);
}
function Ue(e) {
  return e.length;
}
function en(e) {
  return e.length;
}
function Yr(e, r) {
  return r.push(e), e;
}
function ja(e, r) {
  return e.map(r).join("");
}
var ht = 1, br = 1, Eo = 0, ke = 0, we = 0, vr = "";
function yt(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: ht, column: br, length: a, return: "" };
}
function Rr(e, r) {
  return Ia(yt("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Ba() {
  return we;
}
function Fa() {
  return we = ke > 0 ? _e(vr, --ke) : 0, br--, we === 10 && (br = 1, ht--), we;
}
function Ne() {
  return we = ke < Eo ? _e(vr, ke++) : 0, br++, we === 10 && (br = 1, ht++), we;
}
function Ge() {
  return _e(vr, ke);
}
function Kr() {
  return ke;
}
function jr(e, r) {
  return Ar(vr, e, r);
}
function kr(e) {
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
function Co(e) {
  return ht = br = 1, Eo = Ue(vr = e), ke = 0, [];
}
function xo(e) {
  return vr = "", e;
}
function Hr(e) {
  return So(jr(ke - 1, Ft(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function La(e) {
  for (; (we = Ge()) && we < 33; )
    Ne();
  return kr(e) > 2 || kr(we) > 3 ? "" : " ";
}
function Va(e, r) {
  for (; --r && Ne() && !(we < 48 || we > 102 || we > 57 && we < 65 || we > 70 && we < 97); )
    ;
  return jr(e, Kr() + (r < 6 && Ge() == 32 && Ne() == 32));
}
function Ft(e) {
  for (; Ne(); )
    switch (we) {
      case e:
        return ke;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ft(we);
        break;
      case 40:
        e === 41 && Ft(e);
        break;
      case 92:
        Ne();
        break;
    }
  return ke;
}
function za(e, r) {
  for (; Ne() && e + we !== 57; )
    if (e + we === 84 && Ge() === 47)
      break;
  return "/*" + jr(r, ke - 1) + "*" + mt(e === 47 ? e : Ne());
}
function Wa(e) {
  for (; !kr(Ge()); )
    Ne();
  return jr(e, ke);
}
function Ya(e) {
  return xo(Xr("", null, null, null, [""], e = Co(e), 0, [0], e));
}
function Xr(e, r, t, n, o, i, a, c, f) {
  for (var d = 0, p = 0, m = a, y = 0, x = 0, S = 0, g = 1, h = 1, _ = 1, P = 0, T = "", E = o, l = i, k = n, M = T; h; )
    switch (S = P, P = Ne()) {
      case 40:
        if (S != 108 && _e(M, m - 1) == 58) {
          Bt(M += te(Hr(P), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += Hr(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += La(S);
        break;
      case 92:
        M += Va(Kr() - 1, 7);
        continue;
      case 47:
        switch (Ge()) {
          case 42:
          case 47:
            Yr(Ua(za(Ne(), Kr()), r, t), f);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * g:
        c[d++] = Ue(M) * _;
      case 125 * g:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            h = 0;
          case 59 + p:
            _ == -1 && (M = te(M, /\f/g, "")), x > 0 && Ue(M) - m && Yr(x > 32 ? In(M + ";", n, t, m - 1) : In(te(M, " ", "") + ";", n, t, m - 2), f);
            break;
          case 59:
            M += ";";
          default:
            if (Yr(k = Mn(M, r, t, d, p, o, c, T, E = [], l = [], m), i), P === 123)
              if (p === 0)
                Xr(M, r, k, k, E, i, m, c, l);
              else
                switch (y === 99 && _e(M, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xr(e, k, k, n && Yr(Mn(e, k, k, 0, 0, o, c, T, o, E = [], m), l), o, l, m, c, n ? E : l);
                    break;
                  default:
                    Xr(M, k, k, k, [""], l, 0, c, l);
                }
        }
        d = p = x = 0, g = _ = 1, T = M = "", m = a;
        break;
      case 58:
        m = 1 + Ue(M), x = S;
      default:
        if (g < 1) {
          if (P == 123)
            --g;
          else if (P == 125 && g++ == 0 && Fa() == 125)
            continue;
        }
        switch (M += mt(P), P * g) {
          case 38:
            _ = p > 0 ? 1 : (M += "\f", -1);
            break;
          case 44:
            c[d++] = (Ue(M) - 1) * _, _ = 1;
            break;
          case 64:
            Ge() === 45 && (M += Hr(Ne())), y = Ge(), p = m = Ue(T = M += Wa(Kr())), P++;
            break;
          case 45:
            S === 45 && Ue(M) == 2 && (g = 0);
        }
    }
  return i;
}
function Mn(e, r, t, n, o, i, a, c, f, d, p) {
  for (var m = o - 1, y = o === 0 ? i : [""], x = en(y), S = 0, g = 0, h = 0; S < n; ++S)
    for (var _ = 0, P = Ar(e, m + 1, m = Ma(g = a[S])), T = e; _ < x; ++_)
      (T = So(g > 0 ? y[_] + " " + P : te(P, /&\f/g, y[_]))) && (f[h++] = T);
  return yt(e, r, t, o === 0 ? Qt : c, f, d, p);
}
function Ua(e, r, t) {
  return yt(e, r, t, bo, mt(Ba()), Ar(e, 2, -2), 0);
}
function In(e, r, t, n) {
  return yt(e, r, t, Zt, Ar(e, 0, n), Ar(e, n + 1, -1), n);
}
function yr(e, r) {
  for (var t = "", n = en(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function qa(e, r, t, n) {
  switch (e.type) {
    case ka:
      if (e.children.length) break;
    case Aa:
    case Zt:
      return e.return = e.return || e.value;
    case bo:
      return "";
    case vo:
      return e.return = e.value + "{" + yr(e.children, n) + "}";
    case Qt:
      e.value = e.props.join(",");
  }
  return Ue(t = yr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ga(e) {
  var r = en(e);
  return function(t, n, o, i) {
    for (var a = "", c = 0; c < r; c++)
      a += e[c](t, n, o, i) || "";
    return a;
  };
}
function Ka(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var Ha = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Ge(), o === 38 && i === 12 && (t[n] = 1), !kr(i); )
    Ne();
  return jr(r, ke);
}, Xa = function(r, t) {
  var n = -1, o = 44;
  do
    switch (kr(o)) {
      case 0:
        o === 38 && Ge() === 12 && (t[n] = 1), r[n] += Ha(ke - 1, t, n);
        break;
      case 2:
        r[n] += Hr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Ge() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += mt(o);
    }
  while (o = Ne());
  return r;
}, Ja = function(r, t) {
  return xo(Xa(Co(r), t));
}, Nn = /* @__PURE__ */ new WeakMap(), Qa = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Nn.get(n)) && !o) {
      Nn.set(r, !0);
      for (var i = [], a = Ja(t, i), c = n.props, f = 0, d = 0; f < a.length; f++)
        for (var p = 0; p < c.length; p++, d++)
          r.props[d] = i[f] ? a[f].replace(/&\f/g, c[p]) : c[p] + " " + a[f];
    }
  }
}, Za = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function To(e, r) {
  switch (Na(e, r)) {
    case 5103:
      return re + "print-" + e + e;
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
      return re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + rt + e + $e + e + e;
    case 6828:
    case 4268:
      return re + e + $e + e + e;
    case 6165:
      return re + e + $e + "flex-" + e + e;
    case 5187:
      return re + e + te(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + $e + "flex-$1$2") + e;
    case 5443:
      return re + e + $e + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return re + e + $e + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return re + e + $e + te(e, "shrink", "negative") + e;
    case 5292:
      return re + e + $e + te(e, "basis", "preferred-size") + e;
    case 6060:
      return re + "box-" + te(e, "-grow", "") + re + e + $e + te(e, "grow", "positive") + e;
    case 4554:
      return re + te(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + $e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + re + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, re + "$1$2") + e;
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
      if (Ue(e) - 1 - r > 6) switch (_e(e, r + 1)) {
        case 109:
          if (_e(e, r + 4) !== 45) break;
        case 102:
          return te(e, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + rt + (_e(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Bt(e, "stretch") ? To(te(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (_e(e, r + 1) !== 115) break;
    case 6444:
      switch (_e(e, Ue(e) - 3 - (~Bt(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + re) + e;
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + re + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + re + "$2$3$1" + $e + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_e(e, r + 11)) {
        case 114:
          return re + e + $e + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + $e + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + $e + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + $e + e + e;
  }
  return e;
}
var es = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Zt:
      r.return = To(r.value, r.length);
      break;
    case vo:
      return yr([Rr(r, {
        value: te(r.value, "@", "@" + re)
      })], o);
    case Qt:
      if (r.length) return ja(r.props, function(i) {
        switch (Da(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return yr([Rr(r, {
              props: [te(i, /:(read-\w+)/, ":" + rt + "$1")]
            })], o);
          case "::placeholder":
            return yr([Rr(r, {
              props: [te(i, /:(plac\w+)/, ":" + re + "input-$1")]
            }), Rr(r, {
              props: [te(i, /:(plac\w+)/, ":" + rt + "$1")]
            }), Rr(r, {
              props: [te(i, /:(plac\w+)/, $e + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, rs = [es], ts = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var h = g.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || rs, i = {}, a, c = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(g) {
      for (var h = g.getAttribute("data-emotion").split(" "), _ = 1; _ < h.length; _++)
        i[h[_]] = !0;
      c.push(g);
    }
  );
  var f, d = [Qa, Za];
  {
    var p, m = [qa, Ka(function(g) {
      p.insert(g);
    })], y = Ga(d.concat(o, m)), x = function(h) {
      return yr(Ya(h), y);
    };
    f = function(h, _, P, T) {
      p = P, x(h ? h + "{" + _.styles + "}" : _.styles), T && (S.inserted[_.name] = !0);
    };
  }
  var S = {
    key: t,
    sheet: new Pa({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return S.sheet.hydrate(c), S;
}, Lt = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function ns() {
  if (Dn) return se;
  Dn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function T(l) {
    if (typeof l == "object" && l !== null) {
      var k = l.$$typeof;
      switch (k) {
        case r:
          switch (l = l.type, l) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case p:
                case S:
                case x:
                case a:
                  return l;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  function E(l) {
    return T(l) === d;
  }
  return se.AsyncMode = f, se.ConcurrentMode = d, se.ContextConsumer = c, se.ContextProvider = a, se.Element = r, se.ForwardRef = p, se.Fragment = n, se.Lazy = S, se.Memo = x, se.Portal = t, se.Profiler = i, se.StrictMode = o, se.Suspense = m, se.isAsyncMode = function(l) {
    return E(l) || T(l) === f;
  }, se.isConcurrentMode = E, se.isContextConsumer = function(l) {
    return T(l) === c;
  }, se.isContextProvider = function(l) {
    return T(l) === a;
  }, se.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, se.isForwardRef = function(l) {
    return T(l) === p;
  }, se.isFragment = function(l) {
    return T(l) === n;
  }, se.isLazy = function(l) {
    return T(l) === S;
  }, se.isMemo = function(l) {
    return T(l) === x;
  }, se.isPortal = function(l) {
    return T(l) === t;
  }, se.isProfiler = function(l) {
    return T(l) === i;
  }, se.isStrictMode = function(l) {
    return T(l) === o;
  }, se.isSuspense = function(l) {
    return T(l) === m;
  }, se.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === d || l === i || l === o || l === m || l === y || typeof l == "object" && l !== null && (l.$$typeof === S || l.$$typeof === x || l.$$typeof === a || l.$$typeof === c || l.$$typeof === p || l.$$typeof === h || l.$$typeof === _ || l.$$typeof === P || l.$$typeof === g);
  }, se.typeOf = T, se;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function os() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function T(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === n || b === d || b === i || b === o || b === m || b === y || typeof b == "object" && b !== null && (b.$$typeof === S || b.$$typeof === x || b.$$typeof === a || b.$$typeof === c || b.$$typeof === p || b.$$typeof === h || b.$$typeof === _ || b.$$typeof === P || b.$$typeof === g);
    }
    function E(b) {
      if (typeof b == "object" && b !== null) {
        var xe = b.$$typeof;
        switch (xe) {
          case r:
            var I = b.type;
            switch (I) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case m:
                return I;
              default:
                var Re = I && I.$$typeof;
                switch (Re) {
                  case c:
                  case p:
                  case S:
                  case x:
                  case a:
                    return Re;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var l = f, k = d, M = c, Q = a, X = r, s = p, O = n, N = S, j = x, Y = t, ne = i, ee = o, he = m, ye = !1;
    function Se(b) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(b) || E(b) === f;
    }
    function w(b) {
      return E(b) === d;
    }
    function $(b) {
      return E(b) === c;
    }
    function B(b) {
      return E(b) === a;
    }
    function z(b) {
      return typeof b == "object" && b !== null && b.$$typeof === r;
    }
    function D(b) {
      return E(b) === p;
    }
    function K(b) {
      return E(b) === n;
    }
    function F(b) {
      return E(b) === S;
    }
    function L(b) {
      return E(b) === x;
    }
    function U(b) {
      return E(b) === t;
    }
    function H(b) {
      return E(b) === i;
    }
    function q(b) {
      return E(b) === o;
    }
    function ge(b) {
      return E(b) === m;
    }
    ce.AsyncMode = l, ce.ConcurrentMode = k, ce.ContextConsumer = M, ce.ContextProvider = Q, ce.Element = X, ce.ForwardRef = s, ce.Fragment = O, ce.Lazy = N, ce.Memo = j, ce.Portal = Y, ce.Profiler = ne, ce.StrictMode = ee, ce.Suspense = he, ce.isAsyncMode = Se, ce.isConcurrentMode = w, ce.isContextConsumer = $, ce.isContextProvider = B, ce.isElement = z, ce.isForwardRef = D, ce.isFragment = K, ce.isLazy = F, ce.isMemo = L, ce.isPortal = U, ce.isProfiler = H, ce.isStrictMode = q, ce.isSuspense = ge, ce.isValidElementType = T, ce.typeOf = E;
  }()), ce;
}
process.env.NODE_ENV === "production" ? Lt.exports = ns() : Lt.exports = os();
var is = Lt.exports, wo = is, as = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ss = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ro = {};
Ro[wo.ForwardRef] = as;
Ro[wo.Memo] = ss;
var cs = !0;
function us(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var _o = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  cs === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, ls = function(r, t, n) {
  _o(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function fs(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var ds = {
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
}, ps = !1, ms = /[A-Z]|^ms/g, hs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $o = function(r) {
  return r.charCodeAt(1) === 45;
}, Bn = function(r) {
  return r != null && typeof r != "boolean";
}, Pt = /* @__PURE__ */ go(function(e) {
  return $o(e) ? e : e.replace(ms, "-$&").toLowerCase();
}), Fn = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(hs, function(n, o, i) {
          return qe = {
            name: o,
            styles: i,
            next: qe
          }, o;
        });
  }
  return ds[r] !== 1 && !$o(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, ys = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Mr(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return qe = {
          name: o.name,
          styles: o.styles,
          next: qe
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            qe = {
              name: a.name,
              styles: a.styles,
              next: qe
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return gs(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var f = qe, d = t(e);
        return qe = f, Mr(e, r, d);
      }
      break;
    }
  }
  var p = t;
  if (r == null)
    return p;
  var m = r[p];
  return m !== void 0 ? m : p;
}
function gs(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Mr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object") {
        var c = a;
        r != null && r[c] !== void 0 ? n += i + "{" + r[c] + "}" : Bn(c) && (n += Pt(i) + ":" + Fn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && ps)
          throw new Error(ys);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var f = 0; f < a.length; f++)
            Bn(a[f]) && (n += Pt(i) + ":" + Fn(i, a[f]) + ";");
        else {
          var d = Mr(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Pt(i) + ":" + d + ";";
              break;
            }
            default:
              n += i + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var Ln = /label:\s*([^\s;{]+)\s*(;|$)/g, qe;
function rn(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  qe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Mr(t, r, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Mr(t, r, e[c]), n) {
      var f = i;
      o += f[c];
    }
  Ln.lastIndex = 0;
  for (var d = "", p; (p = Ln.exec(o)) !== null; )
    d += "-" + p[1];
  var m = fs(o) + d;
  return {
    name: m,
    styles: o,
    next: qe
  };
}
var bs = function(r) {
  return r();
}, vs = W.useInsertionEffect ? W.useInsertionEffect : !1, Ss = vs || bs, Oo = /* @__PURE__ */ W.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ts({
    key: "css"
  }) : null
);
Oo.Provider;
var Es = function(r) {
  return /* @__PURE__ */ di(function(t, n) {
    var o = pi(Oo);
    return r(t, o, n);
  });
}, Cs = /* @__PURE__ */ W.createContext({});
function xs() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return rn(r);
}
var tn = function() {
  var r = xs.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Ts = Ra, ws = function(r) {
  return r !== "theme";
}, Vn = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ts : ws;
}, zn = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Rs = !1, _s = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return _o(t, n, o), Ss(function() {
    return ls(t, n, o);
  }), null;
}, $s = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var c = zn(r, t, n), f = c || Vn(o), d = !f("as");
  return function() {
    var p = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      m.push(p[0][0]);
      for (var y = p.length, x = 1; x < y; x++)
        m.push(p[x], p[0][x]);
    }
    var S = Es(function(g, h, _) {
      var P = d && g.as || o, T = "", E = [], l = g;
      if (g.theme == null) {
        l = {};
        for (var k in g)
          l[k] = g[k];
        l.theme = W.useContext(Cs);
      }
      typeof g.className == "string" ? T = us(h.registered, E, g.className) : g.className != null && (T = g.className + " ");
      var M = rn(m.concat(E), h.registered, l);
      T += h.key + "-" + M.name, a !== void 0 && (T += " " + a);
      var Q = d && c === void 0 ? Vn(P) : f, X = {};
      for (var s in g)
        d && s === "as" || Q(s) && (X[s] = g[s]);
      return X.className = T, _ && (X.ref = _), /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(_s, {
        cache: h,
        serialized: M,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ W.createElement(P, X));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = r.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = m, S.__emotion_forwardProp = c, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && Rs ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function(g, h) {
      return e(g, et({}, t, h, {
        shouldForwardProp: zn(S, h, !0)
      })).apply(void 0, m);
    }, S;
  };
}, Os = [
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
], Vt = $s.bind();
Os.forEach(function(e) {
  Vt[e] = Vt(e);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ps(e, r) {
  const t = Vt(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function As(e, r) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}
const Wn = [];
function Yn(e) {
  return Wn[0] = e, rn(Wn);
}
const ks = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function Ms(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
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
    unit: t = "px",
    step: n = 5,
    ...o
  } = e, i = ks(r), a = Object.keys(i);
  function c(y) {
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t})`;
  }
  function f(y) {
    return `@media (max-width:${(typeof r[y] == "number" ? r[y] : y) - n / 100}${t})`;
  }
  function d(y, x) {
    const S = a.indexOf(x);
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t}) and (max-width:${(S !== -1 && typeof r[a[S]] == "number" ? r[a[S]] : x) - n / 100}${t})`;
  }
  function p(y) {
    return a.indexOf(y) + 1 < a.length ? d(y, a[a.indexOf(y) + 1]) : c(y);
  }
  function m(y) {
    const x = a.indexOf(y);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? f(a[x]) : d(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: f,
    between: d,
    only: p,
    not: m,
    unit: t,
    ...o
  };
}
const Is = {
  borderRadius: 4
};
function Po(e = 8, r = Xt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function Ns(e, r) {
  var n;
  const t = this;
  if (t.vars) {
    if (!((n = t.colorSchemes) != null && n[e]) || typeof t.getColorSchemeSelector != "function")
      return {};
    let o = t.getColorSchemeSelector(e);
    return o === "&" ? r : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: r
    });
  }
  return t.palette.mode === e ? r : {};
}
function Ao(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = Ms(t), f = Po(o);
  let d = Ie({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Is,
      ...i
    }
  }, a);
  return d = Ni(d), d.applyStyles = Ns, d = r.reduce((p, m) => Ie(p, m), d), d.unstable_sxConfig = {
    ...pt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(m) {
    return gr({
      sx: m,
      theme: this
    });
  }, d;
}
const Un = (e) => e, Ds = () => {
  let e = Un;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Un;
    }
  };
}, js = Ds(), Bs = {
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
function gt(e, r, t = "Mui") {
  const n = Bs[r];
  return n ? `${t}-${n}` : `${js.generate(e)}-${r}`;
}
function nn(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = gt(e, o, t);
  }), n;
}
var zt = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function Fs() {
  if (qn) return ue;
  qn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var _ = h.$$typeof;
      switch (_) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case n:
            case d:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case a:
                case f:
                case y:
                case m:
                case i:
                  return h;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  return ue.ContextConsumer = a, ue.ContextProvider = i, ue.Element = e, ue.ForwardRef = f, ue.Fragment = t, ue.Lazy = y, ue.Memo = m, ue.Portal = r, ue.Profiler = o, ue.StrictMode = n, ue.Suspense = d, ue.SuspenseList = p, ue.isAsyncMode = function() {
    return !1;
  }, ue.isConcurrentMode = function() {
    return !1;
  }, ue.isContextConsumer = function(h) {
    return g(h) === a;
  }, ue.isContextProvider = function(h) {
    return g(h) === i;
  }, ue.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ue.isForwardRef = function(h) {
    return g(h) === f;
  }, ue.isFragment = function(h) {
    return g(h) === t;
  }, ue.isLazy = function(h) {
    return g(h) === y;
  }, ue.isMemo = function(h) {
    return g(h) === m;
  }, ue.isPortal = function(h) {
    return g(h) === r;
  }, ue.isProfiler = function(h) {
    return g(h) === o;
  }, ue.isStrictMode = function(h) {
    return g(h) === n;
  }, ue.isSuspense = function(h) {
    return g(h) === d;
  }, ue.isSuspenseList = function(h) {
    return g(h) === p;
  }, ue.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === n || h === d || h === p || h === x || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === m || h.$$typeof === i || h.$$typeof === a || h.$$typeof === f || h.$$typeof === S || h.getModuleId !== void 0);
  }, ue.typeOf = g, ue;
}
var le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Ls() {
  return Gn || (Gn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = !1, g = !1, h = !1, _ = !1, P = !1, T;
    T = Symbol.for("react.module.reference");
    function E(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === t || I === o || P || I === n || I === d || I === p || _ || I === x || S || g || h || typeof I == "object" && I !== null && (I.$$typeof === y || I.$$typeof === m || I.$$typeof === i || I.$$typeof === a || I.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === T || I.getModuleId !== void 0));
    }
    function l(I) {
      if (typeof I == "object" && I !== null) {
        var Re = I.$$typeof;
        switch (Re) {
          case e:
            var De = I.type;
            switch (De) {
              case t:
              case o:
              case n:
              case d:
              case p:
                return De;
              default:
                var er = De && De.$$typeof;
                switch (er) {
                  case c:
                  case a:
                  case f:
                  case y:
                  case m:
                  case i:
                    return er;
                  default:
                    return Re;
                }
            }
          case r:
            return Re;
        }
      }
    }
    var k = a, M = i, Q = e, X = f, s = t, O = y, N = m, j = r, Y = o, ne = n, ee = d, he = p, ye = !1, Se = !1;
    function w(I) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(I) {
      return Se || (Se = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(I) {
      return l(I) === a;
    }
    function z(I) {
      return l(I) === i;
    }
    function D(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function K(I) {
      return l(I) === f;
    }
    function F(I) {
      return l(I) === t;
    }
    function L(I) {
      return l(I) === y;
    }
    function U(I) {
      return l(I) === m;
    }
    function H(I) {
      return l(I) === r;
    }
    function q(I) {
      return l(I) === o;
    }
    function ge(I) {
      return l(I) === n;
    }
    function b(I) {
      return l(I) === d;
    }
    function xe(I) {
      return l(I) === p;
    }
    le.ContextConsumer = k, le.ContextProvider = M, le.Element = Q, le.ForwardRef = X, le.Fragment = s, le.Lazy = O, le.Memo = N, le.Portal = j, le.Profiler = Y, le.StrictMode = ne, le.Suspense = ee, le.SuspenseList = he, le.isAsyncMode = w, le.isConcurrentMode = $, le.isContextConsumer = B, le.isContextProvider = z, le.isElement = D, le.isForwardRef = K, le.isFragment = F, le.isLazy = L, le.isMemo = U, le.isPortal = H, le.isProfiler = q, le.isStrictMode = ge, le.isSuspense = b, le.isSuspenseList = xe, le.isValidElementType = E, le.typeOf = l;
  }()), le;
}
process.env.NODE_ENV === "production" ? zt.exports = Fs() : zt.exports = Ls();
var Kn = zt.exports;
function ko(e, r = "") {
  return e.displayName || e.name || r;
}
function Hn(e, r, t) {
  const n = ko(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Vs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ko(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Kn.ForwardRef:
          return Hn(e, e.render, "ForwardRef");
        case Kn.Memo:
          return Hn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Mo(e) {
  const {
    variants: r,
    ...t
  } = e, n = {
    variants: r,
    style: Yn(t),
    isProcessed: !0
  };
  return n.style === t || r && r.forEach((o) => {
    typeof o.style != "function" && (o.style = Yn(o.style));
  }), n;
}
const zs = Ao();
function At(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ws(e) {
  return e ? (r, t) => t[e] : null;
}
function Ys(e, r, t) {
  e.theme = Ks(e.theme) ? t : e.theme[r] || e.theme;
}
function Jr(e, r) {
  const t = typeof r == "function" ? r(e) : r;
  if (Array.isArray(t))
    return t.flatMap((n) => Jr(e, n));
  if (Array.isArray(t == null ? void 0 : t.variants)) {
    let n;
    if (t.isProcessed)
      n = t.style;
    else {
      const {
        variants: o,
        ...i
      } = t;
      n = i;
    }
    return Io(e, t.variants, [n]);
  }
  return t != null && t.isProcessed ? t.style : t;
}
function Io(e, r, t = []) {
  var o;
  let n;
  e: for (let i = 0; i < r.length; i += 1) {
    const a = r[i];
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
    }), t.push(a.style(n))) : t.push(a.style);
  }
  return t;
}
function Us(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = zs,
    rootShouldForwardProp: n = At,
    slotShouldForwardProp: o = At
  } = e;
  function i(c) {
    Ys(c, r, t);
  }
  return (c, f = {}) => {
    As(c, (l) => l.filter((k) => k !== gr));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: m,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Ws(No(p)),
      ...S
    } = f, g = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), h = y || !1;
    let _ = At;
    p === "Root" || p === "root" ? _ = n : p ? _ = o : Hs(c) && (_ = void 0);
    const P = Ps(c, {
      shouldForwardProp: _,
      label: Gs(d, p),
      ...S
    }), T = (l) => {
      if (typeof l == "function" && l.__emotion_real !== l)
        return function(M) {
          return Jr(M, l);
        };
      if (He(l)) {
        const k = Mo(l);
        return k.variants ? function(Q) {
          return Jr(Q, k);
        } : k.style;
      }
      return l;
    }, E = (...l) => {
      const k = [], M = l.map(T), Q = [];
      if (k.push(i), d && x && Q.push(function(N) {
        var ee, he;
        const Y = (he = (ee = N.theme.components) == null ? void 0 : ee[d]) == null ? void 0 : he.styleOverrides;
        if (!Y)
          return null;
        const ne = {};
        for (const ye in Y)
          ne[ye] = Jr(N, Y[ye]);
        return x(N, ne);
      }), d && !g && Q.push(function(N) {
        var ne, ee;
        const j = N.theme, Y = (ee = (ne = j == null ? void 0 : j.components) == null ? void 0 : ne[d]) == null ? void 0 : ee.variants;
        return Y ? Io(N, Y) : null;
      }), h || Q.push(gr), Array.isArray(M[0])) {
        const O = M.shift(), N = new Array(k.length).fill(""), j = new Array(Q.length).fill("");
        let Y;
        Y = [...N, ...O, ...j], Y.raw = [...N, ...O.raw, ...j], k.unshift(Y);
      }
      const X = [...k, ...M, ...Q], s = P(...X);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = qs(d, p, c)), s;
    };
    return P.withConfig && (E.withConfig = P.withConfig), E;
  };
}
function qs(e, r, t) {
  return e ? `${e}${Ae(r || "")}` : `Styled(${Vs(t)})`;
}
function Gs(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${No(r || "Root")}`), t;
}
function Ks(e) {
  for (const r in e)
    return !1;
  return !0;
}
function Hs(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function No(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Xs = typeof window < "u" ? W.useLayoutEffect : W.useEffect;
function Js(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function Qs(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function Zs(e, r, t, n, o) {
  const i = e[r], a = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Qs(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ec = Js(C.elementType, Zs), rc = C.oneOfType([C.func, C.object]);
function tc(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
function Ur(e) {
  const r = W.useRef(e);
  return Xs(() => {
    r.current = e;
  }), W.useRef((...t) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...t)
  )).current;
}
function Xn(...e) {
  return W.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      tc(t, r);
    });
  }, e);
}
const Jn = {};
function Do(e, r) {
  const t = W.useRef(Jn);
  return t.current === Jn && (t.current = e(r)), t;
}
const nc = [];
function oc(e) {
  W.useEffect(e, nc);
}
class on {
  constructor() {
    xr(this, "currentId", null);
    xr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    xr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new on();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, t) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, t();
    }, r);
  }
}
function ic() {
  const e = Do(on.create).current;
  return oc(e.disposeEffect), e;
}
function Qn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const ac = /* @__PURE__ */ W.createContext(void 0);
process.env.NODE_ENV !== "production" && (C.node, C.object);
function sc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? Qr(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Qr(o, n) : n;
}
function cc({
  props: e,
  name: r
}) {
  const t = W.useContext(ac);
  return sc({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
const Zn = {
  theme: void 0
};
function uc(e) {
  let r, t;
  return function(o) {
    let i = r;
    return (i === void 0 || o.theme !== t) && (Zn.theme = o.theme, i = Mo(e(Zn)), r = i, t = o.theme), i;
  };
}
function lc(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const eo = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, a) => {
    a === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, fc = (e, r, t) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, f]) => {
      (!t || t && !t([...i, c])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, c], Array.isArray(f) ? [...a, c] : a) : r([...i, c], f, a));
    });
  }
  n(e);
}, dc = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function kt(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, a = {};
  return fc(
    e,
    (c, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(c, f))) {
        const p = `--${t ? `${t}-` : ""}${c.join("-")}`, m = dc(c, f);
        Object.assign(o, {
          [p]: m
        }), eo(i, c, `var(${p})`, d), eo(a, c, `var(${p}, ${m})`, d);
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
function pc(e, r = {}) {
  const {
    getSelector: t = h,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = r, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...f
  } = e, {
    vars: d,
    css: p,
    varsWithDefaults: m
  } = kt(f, r);
  let y = m;
  const x = {}, {
    [c]: S,
    ...g
  } = i;
  if (Object.entries(g || {}).forEach(([T, E]) => {
    const {
      vars: l,
      css: k,
      varsWithDefaults: M
    } = kt(E, r);
    y = Ie(y, M), x[T] = {
      css: k,
      vars: l
    };
  }), S) {
    const {
      css: T,
      vars: E,
      varsWithDefaults: l
    } = kt(S, r);
    y = Ie(y, l), x[c] = {
      css: T,
      vars: E
    };
  }
  function h(T, E) {
    var k, M;
    let l = o;
    if (o === "class" && (l = ".%s"), o === "data" && (l = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (l = `[${o}="%s"]`), T) {
      if (l === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((M = (k = i[T]) == null ? void 0 : k.palette) == null ? void 0 : M.mode) || T})`]: {
            ":root": E
          }
        };
      if (l)
        return e.defaultColorScheme === T ? `:root, ${l.replace("%s", String(T))}` : l.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let T = {
        ...d
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        T = Ie(T, E);
      }), T;
    },
    generateStyleSheets: () => {
      var Q, X;
      const T = [], E = e.defaultColorScheme || "light";
      function l(s, O) {
        Object.keys(O).length && T.push(typeof s == "string" ? {
          [s]: {
            ...O
          }
        } : s);
      }
      l(t(void 0, {
        ...p
      }), p);
      const {
        [E]: k,
        ...M
      } = x;
      if (k) {
        const {
          css: s
        } = k, O = (X = (Q = i[E]) == null ? void 0 : Q.palette) == null ? void 0 : X.mode, N = !n && O ? {
          colorScheme: O,
          ...s
        } : {
          ...s
        };
        l(t(E, {
          ...N
        }), N);
      }
      return Object.entries(M).forEach(([s, {
        css: O
      }]) => {
        var Y, ne;
        const N = (ne = (Y = i[s]) == null ? void 0 : Y.palette) == null ? void 0 : ne.mode, j = !n && N ? {
          colorScheme: N,
          ...O
        } : {
          ...O
        };
        l(t(s, {
          ...j
        }), j);
      }), T;
    }
  };
}
function mc(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const Ir = {
  black: "#000",
  white: "#fff"
}, hc = {
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
}, cr = {
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
}, ur = {
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
}, _r = {
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
}, lr = {
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
}, fr = {
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
}, dr = {
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
}, ro = {
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
    paper: Ir.white,
    default: Ir.white
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
}, Mt = {
  text: {
    primary: Ir.white,
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
    active: Ir.white,
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
function to(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Ht(e.main, o) : r === "dark" && (e.dark = Kt(e.main, i)));
}
function yc(e = "light") {
  return e === "dark" ? {
    main: lr[200],
    light: lr[50],
    dark: lr[400]
  } : {
    main: lr[700],
    light: lr[400],
    dark: lr[800]
  };
}
function gc(e = "light") {
  return e === "dark" ? {
    main: cr[200],
    light: cr[50],
    dark: cr[400]
  } : {
    main: cr[500],
    light: cr[300],
    dark: cr[700]
  };
}
function bc(e = "light") {
  return e === "dark" ? {
    main: ur[500],
    light: ur[300],
    dark: ur[700]
  } : {
    main: ur[700],
    light: ur[400],
    dark: ur[800]
  };
}
function vc(e = "light") {
  return e === "dark" ? {
    main: fr[400],
    light: fr[300],
    dark: fr[700]
  } : {
    main: fr[700],
    light: fr[500],
    dark: fr[900]
  };
}
function Sc(e = "light") {
  return e === "dark" ? {
    main: dr[400],
    light: dr[300],
    dark: dr[700]
  } : {
    main: dr[800],
    light: dr[500],
    dark: dr[900]
  };
}
function Ec(e = "light") {
  return e === "dark" ? {
    main: _r[400],
    light: _r[300],
    dark: _r[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _r[500],
    dark: _r[900]
  };
}
function an(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || yc(r), a = e.secondary || gc(r), c = e.error || bc(r), f = e.info || vc(r), d = e.success || Sc(r), p = e.warning || Ec(r);
  function m(g) {
    const h = Pn(g, Mt.text.primary) >= t ? Mt.text.primary : ro.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const _ = Pn(g, h);
      _ < 3 && console.error([`MUI: The contrast ratio of ${_}:1 for ${h} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const y = ({
    color: g,
    name: h,
    mainShade: _ = 500,
    lightShade: P = 300,
    darkShade: T = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[_] && (g.main = g[_]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.` : Je(11, h ? ` (${h})` : "", _));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Je(12, h ? ` (${h})` : "", JSON.stringify(g.main)));
    return to(g, "light", P, n), to(g, "dark", T, n), g.contrastText || (g.contrastText = m(g.main)), g;
  }, x = {
    dark: Mt,
    light: ro
  };
  return process.env.NODE_ENV !== "production" && (x[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Ie({
    // A collection of common colors.
    common: {
      ...Ir
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: hc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x[r]
  }, o);
}
function Cc(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function xc(e, r) {
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
    ...r
  };
}
function Tc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const no = {
  textTransform: "uppercase"
}, oo = '"Roboto", "Helvetica", "Arial", sans-serif';
function wc(e, r) {
  const {
    fontFamily: t = oo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...m
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, x = p || ((h) => `${h / f * y}rem`), S = (h, _, P, T, E) => ({
    fontFamily: t,
    fontWeight: h,
    fontSize: x(_),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === oo ? {
      letterSpacing: `${Tc(T / _)}em`
    } : {},
    ...E,
    ...d
  }), g = {
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
    button: S(a, 14, 1.75, 0.4, no),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, no),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ie({
    htmlFontSize: f,
    pxToRem: x,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...g
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Rc = 0.2, _c = 0.14, $c = 0.12;
function me(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Rc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${_c})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${$c})`].join(",");
}
const Oc = ["none", me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Pc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ac = {
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
function io(e) {
  return `${Math.round(e)}ms`;
}
function kc(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function Mc(e) {
  const r = {
    ...Pc,
    ...e.easing
  }, t = {
    ...Ac,
    ...e.duration
  };
  return {
    getAutoHeightDuration: kc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: c = r.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (y) => typeof y == "string", m = (y) => !Number.isNaN(parseFloat(y));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !m(f) && !p(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : io(a)} ${c} ${typeof f == "string" ? f : io(f)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const Ic = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Wt(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: f,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Je(20));
  const p = an(i), m = Ao(e);
  let y = Ie(m, {
    mixins: xc(m.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Oc.slice(),
    typography: wc(p, c),
    transitions: Mc(a),
    zIndex: {
      ...Ic
    }
  });
  if (y = Ie(y, d), y = r.reduce((x, S) => Ie(x, S), y), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (g, h) => {
      let _;
      for (_ in g) {
        const P = g[_];
        if (x.includes(_) && Object.keys(P).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = gt("", _);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${_}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: P
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[_] = {};
        }
      }
    };
    Object.keys(y.components).forEach((g) => {
      const h = y.components[g].styleOverrides;
      h && g.startsWith("Mui") && S(h, g);
    });
  }
  return y.unstable_sxConfig = {
    ...pt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(S) {
    return gr({
      sx: S,
      theme: this
    });
  }, y;
}
function Nc(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const Dc = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = Nc(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function jo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Bo(e) {
  return e === "dark" ? Dc : [];
}
function jc(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    ...o
  } = e, i = an(r);
  return {
    palette: i,
    opacity: {
      ...jo(i.mode),
      ...t
    },
    overlays: n || Bo(i.mode),
    ...o
  };
}
function Bc(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Fc = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Lc = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const a = {};
      return Fc(e.cssVarPrefix).forEach((c) => {
        a[c] = t[c], delete t[c];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", r)]: a,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(r))}`;
  } else if (r) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [n]: t
        }
      };
    if (i)
      return i.replace("%s", String(r));
  }
  return n;
};
function Vc(e) {
  return He(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function zc(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Vc(c) || a.startsWith("unstable_") ? delete n[a] : He(c) && (n[a] = {
        ...c
      }, t(n[a]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Wc(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function v(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function Or(e) {
  return !e || !e.startsWith("hsl") ? e : po(e);
}
function Ke(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = $r(Or(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Yc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ye = (e) => {
  try {
    return e();
  } catch {
  }
}, Uc = (e = "mui") => lc(e);
function It(e, r, t, n) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const o = n === "dark" ? "dark" : "light";
  if (!t) {
    e[n] = jc({
      ...r,
      palette: {
        mode: o,
        ...r == null ? void 0 : r.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Wt({
    ...t,
    palette: {
      mode: o,
      ...r == null ? void 0 : r.palette
    }
  });
  return e[n] = {
    ...r,
    palette: i,
    opacity: {
      ...jo(o),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Bo(o)
  }, a;
}
function qc(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Bc,
    colorSchemeSelector: c = t.light && t.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, p = Object.keys(t)[0], m = n || (t.light && p !== "light" ? "light" : p), y = Uc(i), {
    [m]: x,
    light: S,
    dark: g,
    ...h
  } = t, _ = {
    ...h
  };
  let P = x;
  if ((m === "dark" && !("dark" in t) || m === "light" && !("light" in t)) && (P = !0), !P)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : Je(21, m));
  const T = It(_, P, d, m);
  S && !_.light && It(_, S, void 0, "light"), g && !_.dark && It(_, g, void 0, "dark");
  let E = {
    defaultColorScheme: m,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: f,
    getCssVar: y,
    colorSchemes: _,
    font: {
      ...Cc(T.typography),
      ...T.font
    },
    spacing: Yc(d.spacing)
  };
  Object.keys(E.colorSchemes).forEach((X) => {
    const s = E.colorSchemes[X].palette, O = (N) => {
      const j = N.split("-"), Y = j[1], ne = j[2];
      return y(N, s[Y][ne]);
    };
    if (s.mode === "light" && (v(s.common, "background", "#fff"), v(s.common, "onBackground", "#000")), s.mode === "dark" && (v(s.common, "background", "#000"), v(s.common, "onBackground", "#fff")), Wc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      v(s.Alert, "errorColor", de(s.error.light, 0.6)), v(s.Alert, "infoColor", de(s.info.light, 0.6)), v(s.Alert, "successColor", de(s.success.light, 0.6)), v(s.Alert, "warningColor", de(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", O("palette-error-main")), v(s.Alert, "infoFilledBg", O("palette-info-main")), v(s.Alert, "successFilledBg", O("palette-success-main")), v(s.Alert, "warningFilledBg", O("palette-warning-main")), v(s.Alert, "errorFilledColor", Ye(() => s.getContrastText(s.error.main))), v(s.Alert, "infoFilledColor", Ye(() => s.getContrastText(s.info.main))), v(s.Alert, "successFilledColor", Ye(() => s.getContrastText(s.success.main))), v(s.Alert, "warningFilledColor", Ye(() => s.getContrastText(s.warning.main))), v(s.Alert, "errorStandardBg", pe(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", pe(s.info.light, 0.9)), v(s.Alert, "successStandardBg", pe(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", pe(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", O("palette-error-main")), v(s.Alert, "infoIconColor", O("palette-info-main")), v(s.Alert, "successIconColor", O("palette-success-main")), v(s.Alert, "warningIconColor", O("palette-warning-main")), v(s.AppBar, "defaultBg", O("palette-grey-100")), v(s.Avatar, "defaultBg", O("palette-grey-400")), v(s.Button, "inheritContainedBg", O("palette-grey-300")), v(s.Button, "inheritContainedHoverBg", O("palette-grey-A100")), v(s.Chip, "defaultBorder", O("palette-grey-400")), v(s.Chip, "defaultAvatarColor", O("palette-grey-700")), v(s.Chip, "defaultIconColor", O("palette-grey-700")), v(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(s.LinearProgress, "primaryBg", pe(s.primary.main, 0.62)), v(s.LinearProgress, "secondaryBg", pe(s.secondary.main, 0.62)), v(s.LinearProgress, "errorBg", pe(s.error.main, 0.62)), v(s.LinearProgress, "infoBg", pe(s.info.main, 0.62)), v(s.LinearProgress, "successBg", pe(s.success.main, 0.62)), v(s.LinearProgress, "warningBg", pe(s.warning.main, 0.62)), v(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), v(s.Slider, "primaryTrack", pe(s.primary.main, 0.62)), v(s.Slider, "secondaryTrack", pe(s.secondary.main, 0.62)), v(s.Slider, "errorTrack", pe(s.error.main, 0.62)), v(s.Slider, "infoTrack", pe(s.info.main, 0.62)), v(s.Slider, "successTrack", pe(s.success.main, 0.62)), v(s.Slider, "warningTrack", pe(s.warning.main, 0.62));
      const N = Wr(s.background.default, 0.8);
      v(s.SnackbarContent, "bg", N), v(s.SnackbarContent, "color", Ye(() => s.getContrastText(N))), v(s.SpeedDialAction, "fabHoverBg", Wr(s.background.paper, 0.15)), v(s.StepConnector, "border", O("palette-grey-400")), v(s.StepContent, "border", O("palette-grey-400")), v(s.Switch, "defaultColor", O("palette-common-white")), v(s.Switch, "defaultDisabledColor", O("palette-grey-100")), v(s.Switch, "primaryDisabledColor", pe(s.primary.main, 0.62)), v(s.Switch, "secondaryDisabledColor", pe(s.secondary.main, 0.62)), v(s.Switch, "errorDisabledColor", pe(s.error.main, 0.62)), v(s.Switch, "infoDisabledColor", pe(s.info.main, 0.62)), v(s.Switch, "successDisabledColor", pe(s.success.main, 0.62)), v(s.Switch, "warningDisabledColor", pe(s.warning.main, 0.62)), v(s.TableCell, "border", pe(zr(s.divider, 1), 0.88)), v(s.Tooltip, "bg", zr(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      v(s.Alert, "errorColor", pe(s.error.light, 0.6)), v(s.Alert, "infoColor", pe(s.info.light, 0.6)), v(s.Alert, "successColor", pe(s.success.light, 0.6)), v(s.Alert, "warningColor", pe(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", O("palette-error-dark")), v(s.Alert, "infoFilledBg", O("palette-info-dark")), v(s.Alert, "successFilledBg", O("palette-success-dark")), v(s.Alert, "warningFilledBg", O("palette-warning-dark")), v(s.Alert, "errorFilledColor", Ye(() => s.getContrastText(s.error.dark))), v(s.Alert, "infoFilledColor", Ye(() => s.getContrastText(s.info.dark))), v(s.Alert, "successFilledColor", Ye(() => s.getContrastText(s.success.dark))), v(s.Alert, "warningFilledColor", Ye(() => s.getContrastText(s.warning.dark))), v(s.Alert, "errorStandardBg", de(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", de(s.info.light, 0.9)), v(s.Alert, "successStandardBg", de(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", de(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", O("palette-error-main")), v(s.Alert, "infoIconColor", O("palette-info-main")), v(s.Alert, "successIconColor", O("palette-success-main")), v(s.Alert, "warningIconColor", O("palette-warning-main")), v(s.AppBar, "defaultBg", O("palette-grey-900")), v(s.AppBar, "darkBg", O("palette-background-paper")), v(s.AppBar, "darkColor", O("palette-text-primary")), v(s.Avatar, "defaultBg", O("palette-grey-600")), v(s.Button, "inheritContainedBg", O("palette-grey-800")), v(s.Button, "inheritContainedHoverBg", O("palette-grey-700")), v(s.Chip, "defaultBorder", O("palette-grey-700")), v(s.Chip, "defaultAvatarColor", O("palette-grey-300")), v(s.Chip, "defaultIconColor", O("palette-grey-300")), v(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(s.LinearProgress, "primaryBg", de(s.primary.main, 0.5)), v(s.LinearProgress, "secondaryBg", de(s.secondary.main, 0.5)), v(s.LinearProgress, "errorBg", de(s.error.main, 0.5)), v(s.LinearProgress, "infoBg", de(s.info.main, 0.5)), v(s.LinearProgress, "successBg", de(s.success.main, 0.5)), v(s.LinearProgress, "warningBg", de(s.warning.main, 0.5)), v(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), v(s.Slider, "primaryTrack", de(s.primary.main, 0.5)), v(s.Slider, "secondaryTrack", de(s.secondary.main, 0.5)), v(s.Slider, "errorTrack", de(s.error.main, 0.5)), v(s.Slider, "infoTrack", de(s.info.main, 0.5)), v(s.Slider, "successTrack", de(s.success.main, 0.5)), v(s.Slider, "warningTrack", de(s.warning.main, 0.5));
      const N = Wr(s.background.default, 0.98);
      v(s.SnackbarContent, "bg", N), v(s.SnackbarContent, "color", Ye(() => s.getContrastText(N))), v(s.SpeedDialAction, "fabHoverBg", Wr(s.background.paper, 0.15)), v(s.StepConnector, "border", O("palette-grey-600")), v(s.StepContent, "border", O("palette-grey-600")), v(s.Switch, "defaultColor", O("palette-grey-300")), v(s.Switch, "defaultDisabledColor", O("palette-grey-600")), v(s.Switch, "primaryDisabledColor", de(s.primary.main, 0.55)), v(s.Switch, "secondaryDisabledColor", de(s.secondary.main, 0.55)), v(s.Switch, "errorDisabledColor", de(s.error.main, 0.55)), v(s.Switch, "infoDisabledColor", de(s.info.main, 0.55)), v(s.Switch, "successDisabledColor", de(s.success.main, 0.55)), v(s.Switch, "warningDisabledColor", de(s.warning.main, 0.55)), v(s.TableCell, "border", de(zr(s.divider, 1), 0.68)), v(s.Tooltip, "bg", zr(s.grey[700], 0.92));
    }
    Ke(s.background, "default"), Ke(s.background, "paper"), Ke(s.common, "background"), Ke(s.common, "onBackground"), Ke(s, "divider"), Object.keys(s).forEach((N) => {
      const j = s[N];
      j && typeof j == "object" && (j.main && v(s[N], "mainChannel", $r(Or(j.main))), j.light && v(s[N], "lightChannel", $r(Or(j.light))), j.dark && v(s[N], "darkChannel", $r(Or(j.dark))), j.contrastText && v(s[N], "contrastTextChannel", $r(Or(j.contrastText))), N === "text" && (Ke(s[N], "primary"), Ke(s[N], "secondary")), N === "action" && (j.active && Ke(s[N], "active"), j.selected && Ke(s[N], "selected")));
    });
  }), E = r.reduce((X, s) => Ie(X, s), E);
  const l = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Lc(E)
  }, {
    vars: k,
    generateThemeVars: M,
    generateStyleSheets: Q
  } = pc(E, l);
  return E.vars = k, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([X, s]) => {
    E[X] = s;
  }), E.generateThemeVars = M, E.generateStyleSheets = Q, E.generateSpacing = function() {
    return Po(d.spacing, Xt(this));
  }, E.getColorSchemeSelector = mc(c), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = a, E.unstable_sxConfig = {
    ...pt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, E.unstable_sx = function(s) {
    return gr({
      sx: s,
      theme: this
    });
  }, E.toRuntimeSource = zc, E;
}
function ao(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: an({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function Gc(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t == null ? void 0 : t.mode,
    ...a
  } = e, c = i || "light", f = o == null ? void 0 : o[c], d = {
    ...o,
    ...t ? {
      [c]: {
        ...typeof f != "boolean" && f,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Wt(e, ...r);
    let p = t;
    "palette" in e || d[c] && (d[c] !== !0 ? p = d[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const m = Wt({
      ...e,
      palette: p
    }, ...r);
    return m.defaultColorScheme = c, m.colorSchemes = d, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: m.palette
    }, ao(m, "dark", d.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: m.palette
    }, ao(m, "light", d.light)), m;
  }
  return !t && !("light" in d) && c === "light" && (d.light = !0), qc({
    ...a,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...r);
}
const Kc = Gc(), Hc = "$$material", Sr = Us({
  themeId: Hc,
  defaultTheme: Kc,
  rootShouldForwardProp: mo
}), Xc = uc;
process.env.NODE_ENV !== "production" && (C.node, C.object.isRequired);
function sn(e) {
  return cc(e);
}
class tt {
  constructor() {
    xr(this, "mountEffect", () => {
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
    return new tt();
  }
  static use() {
    const r = Do(tt.create).current, [t, n] = W.useState(!1);
    return r.shouldMount = t, r.setShouldMount = n, W.useEffect(r.mountEffect, [t]), r;
  }
  mount() {
    return this.mounted || (this.mounted = Qc(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.pulsate(...r);
    });
  }
}
function Jc() {
  return tt.use();
}
function Qc() {
  let e, r;
  const t = new Promise((n, o) => {
    e = n, r = o;
  });
  return t.resolve = e, t.reject = r, t;
}
function Zc(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function Yt(e, r) {
  return Yt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Yt(e, r);
}
function eu(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Yt(e, r);
}
const so = nr.createContext(null);
function ru(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cn(e, r) {
  var t = function(i) {
    return r && qr(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && mi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function tu(e, r) {
  e = e || {}, r = r || {};
  function t(p) {
    return p in r ? r[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var f in r) {
    if (n[f])
      for (a = 0; a < n[f].length; a++) {
        var d = n[f][a];
        c[n[f][a]] = t(d);
      }
    c[f] = t(f);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = t(o[a]);
  return c;
}
function or(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function nu(e, r) {
  return cn(e.children, function(t) {
    return Gr(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: or(t, "appear", e),
      enter: or(t, "enter", e),
      exit: or(t, "exit", e)
    });
  });
}
function ou(e, r, t) {
  var n = cn(e.children), o = tu(r, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (qr(a)) {
      var c = i in r, f = i in n, d = r[i], p = qr(d) && !d.props.in;
      f && (!c || p) ? o[i] = Gr(a, {
        onExited: t.bind(null, a),
        in: !0,
        exit: or(a, "exit", e),
        enter: or(a, "enter", e)
      }) : !f && c && !p ? o[i] = Gr(a, {
        in: !1
      }) : f && c && qr(d) && (o[i] = Gr(a, {
        onExited: t.bind(null, a),
        in: d.props.in,
        exit: or(a, "exit", e),
        enter: or(a, "enter", e)
      }));
    }
  }), o;
}
var iu = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, au = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, un = /* @__PURE__ */ function(e) {
  eu(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(ru(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, f = i.firstRender;
    return {
      children: f ? nu(o, c) : ou(o, a, c),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var a = cn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var f = et({}, c.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = Zc(o, ["component", "childFactory"]), f = this.state.contextValue, d = iu(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ nr.createElement(so.Provider, {
      value: f
    }, d) : /* @__PURE__ */ nr.createElement(so.Provider, {
      value: f
    }, /* @__PURE__ */ nr.createElement(i, c, d));
  }, r;
}(nr.Component);
un.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: C.any,
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
  children: C.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: C.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: C.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: C.bool,
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
  childFactory: C.func
} : {};
un.defaultProps = au;
function Fo(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: f,
    timeout: d
  } = e, [p, m] = W.useState(!1), y = Be(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, S = Be(t.child, p && t.childLeaving, n && t.childPulsate);
  return !c && !p && m(!0), W.useEffect(() => {
    if (!c && f != null) {
      const g = setTimeout(f, d);
      return () => {
        clearTimeout(g);
      };
    }
  }, [f, c, d]), /* @__PURE__ */ ze.jsx("span", {
    className: y,
    style: x,
    children: /* @__PURE__ */ ze.jsx("span", {
      className: S
    })
  });
}
process.env.NODE_ENV !== "production" && (Fo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object.isRequired,
  className: C.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: C.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: C.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: C.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: C.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: C.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: C.number,
  /**
   * exit delay
   */
  timeout: C.number.isRequired
});
const Fe = nn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ut = 550, su = 80, cu = tn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, uu = tn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, lu = tn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, fu = Sr("span", {
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
}), du = Sr(Fo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Fe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${cu};
    animation-duration: ${Ut}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Fe.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Fe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Fe.childLeaving} {
    opacity: 0;
    animation-name: ${uu};
    animation-duration: ${Ut}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Fe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${lu};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Lo = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = sn({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [f, d] = W.useState([]), p = W.useRef(0), m = W.useRef(null);
  W.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [f]);
  const y = W.useRef(!1), x = ic(), S = W.useRef(null), g = W.useRef(null), h = W.useCallback((E) => {
    const {
      pulsate: l,
      rippleX: k,
      rippleY: M,
      rippleSize: Q,
      cb: X
    } = E;
    d((s) => [...s, /* @__PURE__ */ ze.jsx(du, {
      classes: {
        ripple: Be(i.ripple, Fe.ripple),
        rippleVisible: Be(i.rippleVisible, Fe.rippleVisible),
        ripplePulsate: Be(i.ripplePulsate, Fe.ripplePulsate),
        child: Be(i.child, Fe.child),
        childLeaving: Be(i.childLeaving, Fe.childLeaving),
        childPulsate: Be(i.childPulsate, Fe.childPulsate)
      },
      timeout: Ut,
      pulsate: l,
      rippleX: k,
      rippleY: M,
      rippleSize: Q
    }, p.current)]), p.current += 1, m.current = X;
  }, [i]), _ = W.useCallback((E = {}, l = {}, k = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: Q = o || l.pulsate,
      fakeElement: X = !1
      // For test purposes
    } = l;
    if ((E == null ? void 0 : E.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (y.current = !0);
    const s = X ? null : g.current, O = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, j, Y;
    if (Q || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      N = Math.round(O.width / 2), j = Math.round(O.height / 2);
    else {
      const {
        clientX: ne,
        clientY: ee
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      N = Math.round(ne - O.left), j = Math.round(ee - O.top);
    }
    if (Q)
      Y = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), Y % 2 === 0 && (Y += 1);
    else {
      const ne = Math.max(Math.abs((s ? s.clientWidth : 0) - N), N) * 2 + 2, ee = Math.max(Math.abs((s ? s.clientHeight : 0) - j), j) * 2 + 2;
      Y = Math.sqrt(ne ** 2 + ee ** 2);
    }
    E != null && E.touches ? S.current === null && (S.current = () => {
      h({
        pulsate: M,
        rippleX: N,
        rippleY: j,
        rippleSize: Y,
        cb: k
      });
    }, x.start(su, () => {
      S.current && (S.current(), S.current = null);
    })) : h({
      pulsate: M,
      rippleX: N,
      rippleY: j,
      rippleSize: Y,
      cb: k
    });
  }, [o, h, x]), P = W.useCallback(() => {
    _({}, {
      pulsate: !0
    });
  }, [_]), T = W.useCallback((E, l) => {
    if (x.clear(), (E == null ? void 0 : E.type) === "touchend" && S.current) {
      S.current(), S.current = null, x.start(0, () => {
        T(E, l);
      });
      return;
    }
    S.current = null, d((k) => k.length > 0 ? k.slice(1) : k), m.current = l;
  }, [x]);
  return W.useImperativeHandle(t, () => ({
    pulsate: P,
    start: _,
    stop: T
  }), [P, _, T]), /* @__PURE__ */ ze.jsx(fu, {
    className: Be(Fe.root, i.root, a),
    ref: g,
    ...c,
    children: /* @__PURE__ */ ze.jsx(un, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
process.env.NODE_ENV !== "production" && (Lo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: C.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string
});
function pu(e) {
  return gt("MuiButtonBase", e);
}
const mu = nn("MuiButtonBase", ["root", "disabled", "focusVisible"]), hu = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, a = fo({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, pu, o);
  return t && n && (a.root += ` ${n}`), a;
}, yu = Sr("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
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
  [`&.${mu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Vo = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = sn({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: f = "button",
    disabled: d = !1,
    disableRipple: p = !1,
    disableTouchRipple: m = !1,
    focusRipple: y = !1,
    focusVisibleClassName: x,
    LinkComponent: S = "a",
    onBlur: g,
    onClick: h,
    onContextMenu: _,
    onDragLeave: P,
    onFocus: T,
    onFocusVisible: E,
    onKeyDown: l,
    onKeyUp: k,
    onMouseDown: M,
    onMouseLeave: Q,
    onMouseUp: X,
    onTouchEnd: s,
    onTouchMove: O,
    onTouchStart: N,
    tabIndex: j = 0,
    TouchRippleProps: Y,
    touchRippleRef: ne,
    type: ee,
    ...he
  } = n, ye = W.useRef(null), Se = Jc(), w = Xn(Se.ref, ne), [$, B] = W.useState(!1);
  d && $ && B(!1), W.useImperativeHandle(o, () => ({
    focusVisible: () => {
      B(!0), ye.current.focus();
    }
  }), []);
  const z = Se.shouldMount && !p && !d;
  W.useEffect(() => {
    $ && y && !p && Se.pulsate();
  }, [p, y, $, Se]);
  function D(G, Fr, Lr = m) {
    return Ur((Cr) => (Fr && Fr(Cr), Lr || Se[G](Cr), !0));
  }
  const K = D("start", M), F = D("stop", _), L = D("stop", P), U = D("stop", X), H = D("stop", (G) => {
    $ && G.preventDefault(), Q && Q(G);
  }), q = D("start", N), ge = D("stop", s), b = D("stop", O), xe = D("stop", (G) => {
    Qn(G.target) || B(!1), g && g(G);
  }, !1), I = Ur((G) => {
    ye.current || (ye.current = G.currentTarget), Qn(G.target) && (B(!0), E && E(G)), T && T(G);
  }), Re = () => {
    const G = ye.current;
    return f && f !== "button" && !(G.tagName === "A" && G.href);
  }, De = Ur((G) => {
    y && !G.repeat && $ && G.key === " " && Se.stop(G, () => {
      Se.start(G);
    }), G.target === G.currentTarget && Re() && G.key === " " && G.preventDefault(), l && l(G), G.target === G.currentTarget && Re() && G.key === "Enter" && !d && (G.preventDefault(), h && h(G));
  }), er = Ur((G) => {
    y && G.key === " " && $ && !G.defaultPrevented && Se.stop(G, () => {
      Se.pulsate(G);
    }), k && k(G), h && G.target === G.currentTarget && Re() && G.key === " " && !G.defaultPrevented && h(G);
  });
  let rr = f;
  rr === "button" && (he.href || he.to) && (rr = S);
  const We = {};
  rr === "button" ? (We.type = ee === void 0 ? "button" : ee, We.disabled = d) : (!he.href && !he.to && (We.role = "button"), d && (We["aria-disabled"] = d));
  const bt = Xn(t, ye), Br = {
    ...n,
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: y,
    tabIndex: j,
    focusVisible: $
  }, Er = hu(Br);
  return /* @__PURE__ */ ze.jsxs(yu, {
    as: rr,
    className: Be(Er.root, c),
    ownerState: Br,
    onBlur: xe,
    onClick: h,
    onContextMenu: F,
    onFocus: I,
    onKeyDown: De,
    onKeyUp: er,
    onMouseDown: K,
    onMouseLeave: H,
    onMouseUp: U,
    onDragLeave: L,
    onTouchEnd: ge,
    onTouchMove: b,
    onTouchStart: q,
    ref: bt,
    tabIndex: d ? -1 : j,
    type: ee,
    ...We,
    ...he,
    children: [a, z ? /* @__PURE__ */ ze.jsx(Lo, {
      ref: w,
      center: i,
      ...Y
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Vo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: rc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: C.bool,
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ec,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: C.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: C.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: C.string,
  /**
   * @ignore
   */
  href: C.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: C.elementType,
  /**
   * @ignore
   */
  onBlur: C.func,
  /**
   * @ignore
   */
  onClick: C.func,
  /**
   * @ignore
   */
  onContextMenu: C.func,
  /**
   * @ignore
   */
  onDragLeave: C.func,
  /**
   * @ignore
   */
  onFocus: C.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: C.func,
  /**
   * @ignore
   */
  onKeyDown: C.func,
  /**
   * @ignore
   */
  onKeyUp: C.func,
  /**
   * @ignore
   */
  onMouseDown: C.func,
  /**
   * @ignore
   */
  onMouseLeave: C.func,
  /**
   * @ignore
   */
  onMouseUp: C.func,
  /**
   * @ignore
   */
  onTouchEnd: C.func,
  /**
   * @ignore
   */
  onTouchMove: C.func,
  /**
   * @ignore
   */
  onTouchStart: C.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @default 0
   */
  tabIndex: C.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: C.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: C.oneOfType([C.func, C.shape({
    current: C.shape({
      pulsate: C.func.isRequired,
      start: C.func.isRequired,
      stop: C.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string])
});
function gu(e) {
  return typeof e.main == "string";
}
function bu(e, r = []) {
  if (!gu(e))
    return !1;
  for (const t of r)
    if (!e.hasOwnProperty(t) || typeof e[t] != "string")
      return !1;
  return !0;
}
function vu(e = []) {
  return ([, r]) => r && bu(r, e);
}
function Su(e) {
  return gt("MuiButton", e);
}
const pr = nn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), zo = /* @__PURE__ */ W.createContext({});
process.env.NODE_ENV !== "production" && (zo.displayName = "ButtonGroupContext");
const Wo = /* @__PURE__ */ W.createContext(void 0);
process.env.NODE_ENV !== "production" && (Wo.displayName = "ButtonGroupButtonContext");
const Eu = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${Ae(r)}`, `size${Ae(o)}`, `${i}Size${Ae(o)}`, `color${Ae(r)}`, t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Ae(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Ae(o)}`]
  }, f = fo(c, Su, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Yo = [{
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
}], Cu = Sr(Vo, {
  shouldForwardProp: (e) => mo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${Ae(t.color)}`], r[`size${Ae(t.size)}`], r[`${t.variant}Size${Ae(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(Xc(({
  theme: e
}) => {
  const r = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], t = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${pr.disabled}`]: {
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
        [`&.${pr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${pr.disabled}`]: {
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
        [`&.${pr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(vu()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : mr(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : mr(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : mr(e.palette[n].main, e.palette.action.hoverOpacity)
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
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : r,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : t,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : mr(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : mr(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${pr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${pr.disabled}`]: {
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
})), xu = Sr("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${Ae(t.size)}`]];
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
  }, ...Yo]
}), Tu = Sr("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${Ae(t.size)}`]];
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
  }, ...Yo]
}), Uo = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = W.useContext(zo), o = W.useContext(Wo), i = Qr(n, r), a = sn({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: f = "primary",
    component: d = "button",
    className: p,
    disabled: m = !1,
    disableElevation: y = !1,
    disableFocusRipple: x = !1,
    endIcon: S,
    focusVisibleClassName: g,
    fullWidth: h = !1,
    size: _ = "medium",
    startIcon: P,
    type: T,
    variant: E = "text",
    ...l
  } = a, k = {
    ...a,
    color: f,
    component: d,
    disabled: m,
    disableElevation: y,
    disableFocusRipple: x,
    fullWidth: h,
    size: _,
    type: T,
    variant: E
  }, M = Eu(k), Q = P && /* @__PURE__ */ ze.jsx(xu, {
    className: M.startIcon,
    ownerState: k,
    children: P
  }), X = S && /* @__PURE__ */ ze.jsx(Tu, {
    className: M.endIcon,
    ownerState: k,
    children: S
  }), s = o || "";
  return /* @__PURE__ */ ze.jsxs(Cu, {
    ownerState: k,
    className: Be(n.className, M.root, p, s),
    component: d,
    disabled: m,
    focusRipple: !x,
    focusVisibleClassName: Be(M.focusVisible, g),
    ref: t,
    type: T,
    ...l,
    classes: M,
    children: [Q, c, X]
  });
});
process.env.NODE_ENV !== "production" && (Uo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: C.oneOfType([C.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: C.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * Element placed after the children.
   */
  endIcon: C.node,
  /**
   * @ignore
   */
  focusVisibleClassName: C.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: C.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: C.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: C.oneOfType([C.oneOf(["small", "medium", "large"]), C.string]),
  /**
   * Element placed before the children.
   */
  startIcon: C.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: C.oneOfType([C.oneOf(["contained", "outlined", "text"]), C.string])
});
function _u(e) {
  const { bgcolor: r, text: t, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ ze.jsx(
      Uo,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: r, color: n },
        children: t
      }
    )
  );
}
export {
  _u as CustomButton
};
//# sourceMappingURL=index.es.js.map
