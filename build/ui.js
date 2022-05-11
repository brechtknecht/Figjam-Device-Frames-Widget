(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (r3 in l3.defaultProps)
        f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
    return y(l3, f3, t3, o3, null);
  }
  function y(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
    return r3 == null && l.vnode != null && l.vnode(f3), f3;
  }
  function p() {
    return { current: null };
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? k(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, f3, s3, a3) {
    var h3, v3, p3, _3, b3, m3, g4, w4 = i3 && i3.__k || c, A4 = w4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if ((_3 = u3.__k[h3] = (_3 = l3[h3]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, (p3 = w4[h3]) === null || p3 && _3.key == p3.key && _3.type === p3.type)
          w4[h3] = void 0;
        else
          for (v3 = 0; v3 < A4; v3++) {
            if ((p3 = w4[v3]) && _3.key == p3.key && _3.type === p3.type) {
              w4[v3] = void 0;
              break;
            }
            p3 = null;
          }
        j(n2, _3, p3 = p3 || e, t3, o3, r3, f3, s3, a3), b3 = _3.__e, (v3 = _3.ref) && p3.ref != v3 && (g4 || (g4 = []), p3.ref && g4.push(p3.ref, null, _3), g4.push(v3, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k === p3.__k ? _3.__d = s3 = x(_3, s3, n2) : s3 = P(n2, _3, p3, w4, b3, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p3.__e == s3 && s3.parentNode != n2 && (s3 = k(p3));
      }
    for (u3.__e = m3, h3 = A4; h3--; )
      w4[h3] != null && (typeof u3.type == "function" && w4[h3].__e != null && w4[h3].__e == u3.__d && (u3.__d = k(i3, h3 + 1)), N(w4[h3], w4[h3]));
    if (g4)
      for (h3 = 0; h3 < g4.length; h3++)
        M(g4[h3], g4[++h3], g4[++h3]);
  }
  function x(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function A(n2, l3) {
    return l3 = l3 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
      A(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function P(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (l3.__d !== void 0)
      r3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != o3 || t3.parentNode == null)
      n:
        if (o3 == null || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return r3 !== void 0 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      o3 === "children" || o3 === "key" || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if (l3 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if (l3[0] === "o" && l3[1] === "n")
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var s3, h3, v3, y3, p3, k4, b3, m3, g4, x4, A4, P3 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P3 == "function") {
          if (m3 = u3.props, g4 = (s3 = P3.contextType) && t3[s3.__c], x4 = s3 ? g4 ? g4.props.value : s3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = h3 = new P3(m3, x4) : (u3.__c = h3 = new _(m3, x4), h3.constructor = P3, h3.render = O), g4 && g4.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x4, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P3.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P3.getDerivedStateFromProps(m3, h3.__s))), y3 = h3.props, p3 = h3.state, v3)
            P3.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
          else {
            if (P3.getDerivedStateFromProps == null && m3 !== y3 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m3, x4), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m3, h3.__s, x4) === false || u3.__v === i3.__v) {
              h3.props = m3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h3.__h.length && f3.push(h3);
              break n;
            }
            h3.componentWillUpdate != null && h3.componentWillUpdate(m3, h3.__s, x4), h3.componentDidUpdate != null && h3.__h.push(function() {
              h3.componentDidUpdate(y3, p3, k4);
            });
          }
          h3.context = x4, h3.props = m3, h3.state = h3.__s, (s3 = l.__r) && s3(u3), h3.__d = false, h3.__v = u3, h3.__P = n2, s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t3 = a(a({}, t3), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k4 = h3.getSnapshotBeforeUpdate(y3, p3)), A4 = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A4) ? A4 : [A4], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || r3 != null) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o3, r3, f3, c3) {
    var s3, a3, v3, y3 = i3.props, p3 = u3.props, d3 = u3.type, _3 = 0;
    if (d3 === "svg" && (o3 = true), r3 != null) {
      for (; _3 < r3.length; _3++)
        if ((s3 = r3[_3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : s3.nodeType === 3)) {
          l3 = s3, r3[_3] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d3 === null)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (d3 === null)
      y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (r3 != null)
          for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y3[l3.attributes[_3].name] = l3.attributes[_3].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y3, o3, c3), v3)
        u3.__k = [];
      else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, o3 && d3 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
        for (_3 = r3.length; _3--; )
          r3[_3] != null && h(r3[_3]);
      c3 || ("value" in p3 && (_3 = p3.value) !== void 0 && (_3 !== l3.value || d3 === "progress" && !_3 || d3 === "option" && _3 !== y3.value) && H(l3, "value", _3, y3.value, false), "checked" in p3 && (_3 = p3.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = v(d, null, [u3]), r3 || e, e, i3.ownerSVGElement !== void 0, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(f3, u3);
  }
  function q(n2, l3) {
    S(n2, l3, q);
  }
  function B(l3, u3, i3) {
    var t3, o3, r3, f3 = a({}, l3.props);
    for (r3 in u3)
      r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), y(l3.type, f3, t3 || l3.key, o3 || l3.ref, null);
  }
  function D(n2, l3) {
    var u3 = { __c: l3 = "__cC" + f++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(m);
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, i, t, o, r, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = c.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o3, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o3 = t3.constructor) && o3.getDerivedStateFromError != null && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), t3.componentDidCatch != null && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return n2 != null && n2.constructor === void 0;
      }, _.prototype.setState = function(n2, l3) {
        var u3;
        u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
      }, _.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function l2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function m2(n2) {
    return o2 = 1, p2(w2, n2);
  }
  function p2(n2, r3, o3) {
    var i3 = l2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function y2(r3, o3) {
    var i3 = l2(t2++, 3);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function d2(r3, o3) {
    var i3 = l2(t2++, 4);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__h.push(i3));
  }
  function h2(n2) {
    return o2 = 5, _2(function() {
      return { current: n2 };
    }, []);
  }
  function s2(n2, t3, u3) {
    o2 = 6, d2(function() {
      return typeof n2 == "function" ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, u3 == null ? u3 : u3.concat(n2));
  }
  function _2(n2, u3) {
    var r3 = l2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function A2(n2, t3) {
    return o2 = 8, _2(function() {
      return n2;
    }, t3);
  }
  function F(n2) {
    var r3 = u2.context[n2.__c], o3 = l2(t2++, 9);
    return o3.c = n2, r3 ? (o3.__ == null && (o3.__ = true, r3.sub(u2)), r3.props.value) : n2.__;
  }
  function T2(t3, u3) {
    l.useDebugValue && l.useDebugValue(u3 ? u3(t3) : t3);
  }
  function q2(n2) {
    var r3 = l2(t2++, 10), o3 = m2();
    return r3.__ = n2, u2.componentDidCatch || (u2.componentDidCatch = function(n3) {
      r3.__ && r3.__(n3), o3[1](n3);
    }), [o3[0], function() {
      o3[1](void 0);
    }];
  }
  function x2() {
    for (var t3; t3 = i2.shift(); )
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
  }
  function g2(n2) {
    var t3 = u2, r3 = n2.__c;
    typeof r3 == "function" && (n2.__c = void 0, r3()), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }
  var t2, u2, r2, o2, i2, c2, f2, e2, a2, v2, b2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      i2 = [];
      c2 = l.__b;
      f2 = l.__r;
      e2 = l.diffed;
      a2 = l.__c;
      v2 = l.unmount;
      l.__b = function(n2) {
        u2 = null, c2 && c2(n2);
      }, l.__r = function(n2) {
        f2 && f2(n2), t2 = 0;
        var r3 = (u2 = n2.__c).__H;
        r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
      }, l.diffed = function(t3) {
        e2 && e2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
          var t4, u3 = function() {
            clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
          }, r3 = setTimeout(u3, 100);
          b2 && (t4 = requestAnimationFrame(u3));
        })(x2)), u2 = null;
      }, l.__c = function(t3, u3) {
        u3.some(function(t4) {
          try {
            t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || j2(n2);
            });
          } catch (r3) {
            u3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), u3 = [], l.__e(r3, t4.__v);
          }
        }), a2 && a2(t3, u3);
      }, l.unmount = function(t3) {
        v2 && v2(t3);
        var u3, r3 = t3.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n2) {
          try {
            g2(n2);
          } catch (n3) {
            u3 = n3;
          }
        }), u3 && l.__e(u3, r3.__v));
      };
      b2 = typeof requestAnimationFrame == "function";
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/924109c6-8307-4751-af7c-c94c84b8b95c/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/924109c6-8307-4751-af7c-c94c84b8b95c/loading-indicator.js"() {
      if (document.getElementById("95dd1d81f7") === null) {
        const element = document.createElement("style");
        element.id = "95dd1d81f7";
        element.textContent = `._loadingIndicator_12ibq_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_12ibq_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_12ibq_1 0.5s linear infinite;
  fill: currentColor;
}
._accent_12ibq_17 {
  fill: var(--color-accent);
}
._black-30_12ibq_20 {
  fill: var(--color-black-30);
}
._black-80_12ibq_23 {
  fill: var(--color-black-80);
}
._blue_12ibq_26 {
  fill: var(--color-blue);
}
._white_12ibq_29 {
  fill: var(--color-white);
}
._white-20_12ibq_32 {
  fill: var(--color-white-20-translucent);
}
._white-40_12ibq_35 {
  fill: var(--color-white-40-translucent);
}

@keyframes _rotating_12ibq_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpREFBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xvYWRpbmctaW5kaWNhdG9yL2xvYWRpbmctaW5kaWNhdG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4uYWNjZW50IHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cbi5ibGFjay0zMCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5ibGFjay04MCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbn1cbi5ibHVlIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG4ud2hpdGUge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4ud2hpdGUtMjAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS0yMC10cmFuc2x1Y2VudCk7XG59XG4ud2hpdGUtNDAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS00MC10cmFuc2x1Y2VudCk7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_default = { "loadingIndicator": "_loadingIndicator_12ibq_1", "svg": "_svg_12ibq_8", "rotating": "_rotating_12ibq_1", "accent": "_accent_12ibq_17", "black-30": "_black-30_12ibq_20", "black-80": "_black-80_12ibq_23", "blue": "_blue_12ibq_26", "white": "_white_12ibq_29", "white-20": "_white-20_12ibq_32", "white-40": "_white-40_12ibq_35" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_default.loadingIndicator }), v("svg", { class: createClassName([
      loading_indicator_default.svg,
      typeof color === "undefined" ? null : loading_indicator_default[color]
    ]) }, v("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_class_name();
      init_loading_indicator();
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/69a78589-3c54-47c1-a88b-ebd562cc881d/button.js
  var button_default;
  var init_button = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/69a78589-3c54-47c1-a88b-ebd562cc881d/button.js"() {
      if (document.getElementById("7f57db472a") === null) {
        const element = document.createElement("style");
        element.id = "7f57db472a";
        element.textContent = `._button_1j1gr_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}
._button_1j1gr_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
  color: currentColor;
}

._disabled_1j1gr_13 {
  opacity: var(--opacity-30);
}
._disabled_1j1gr_13 button {
  cursor: not-allowed;
}

._primary_1j1gr_20 {
  color: var(
    --color-white
  ); /* Set the color of the \`button\` element and \`LoadingIndicator\` */
}
._primary_1j1gr_20 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--color-accent);
  line-height: 28px;
}
._primary_1j1gr_20:not(._disabled_1j1gr_13) button:focus {
  border-color: var(--color-black-30-translucent);
}
._primary_1j1gr_20._destructive_1j1gr_34 {
  color: var(--color-white);
}
._primary_1j1gr_20._destructive_1j1gr_34 button {
  background-color: var(--color-red);
}
._primary_1j1gr_20._disabled_1j1gr_13 button {
  background-color: var(--color-black);
}

._secondary_1j1gr_44 {
  color: var(--color-black-80);
}
._secondary_1j1gr_44 button {
  padding: 0 15px;
  border: 1px solid var(--color-black-80);
  background-color: transparent;
  line-height: 30px;
}
._secondary_1j1gr_44:not(._disabled_1j1gr_13) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--color-accent);
  line-height: 28px;
}
._secondary_1j1gr_44._destructive_1j1gr_34 {
  color: var(--color-red);
}
._secondary_1j1gr_44._destructive_1j1gr_34 button {
  border-color: var(--color-red);
}
._secondary_1j1gr_44._destructive_1j1gr_34:not(._disabled_1j1gr_13) button:focus {
  border-color: var(--color-red);
}

._fullWidth_1j1gr_69 {
  display: block;
}
._fullWidth_1j1gr_69 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._loading_1j1gr_80 button {
  color: rgba(0, 0, 0, 0); /* Hide the button text */
}
._loadingIndicator_1j1gr_83 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOztHQUVDLEVBQUUsaUVBQWlFO0FBQ3RFO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCLEVBQUUseUJBQXlCO0FBQ3BEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5idXR0b24gYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtNik7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xufVxuLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5wcmltYXJ5IHtcbiAgY29sb3I6IHZhcihcbiAgICAtLWNvbG9yLXdoaXRlXG4gICk7IC8qIFNldCB0aGUgY29sb3Igb2YgdGhlIGBidXR0b25gIGVsZW1lbnQgYW5kIGBMb2FkaW5nSW5kaWNhdG9yYCAqL1xufVxuLnByaW1hcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4ucHJpbWFyeTpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTMwLXRyYW5zbHVjZW50KTtcbn1cbi5wcmltYXJ5LmRlc3RydWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi5wcmltYXJ5LmRlc3RydWN0aXZlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4ucHJpbWFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG59XG5cbi5zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2stODApO1xufVxuLnNlY29uZGFyeSBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnNlY29uZGFyeTpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kZXN0cnVjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xufVxuLnNlY29uZGFyeS5kZXN0cnVjdGl2ZSBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4uc2Vjb25kYXJ5LmRlc3RydWN0aXZlOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubG9hZGluZyBidXR0b24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgLyogSGlkZSB0aGUgYnV0dG9uIHRleHQgKi9cbn1cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_default = { "button": "_button_1j1gr_1", "disabled": "_disabled_1j1gr_13", "primary": "_primary_1j1gr_20", "destructive": "_destructive_1j1gr_34", "secondary": "_secondary_1j1gr_44", "fullWidth": "_fullWidth_1j1gr_69", "loading": "_loading_1j1gr_80", "loadingIndicator": "_loadingIndicator_1j1gr_83" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, destructive = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "destructive", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = A2(function(event) {
      if (event.key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        event.currentTarget.blur();
        return;
      }
      if (event.key === "Enter") {
        event.stopPropagation();
      }
    }, [propagateEscapeKeyDown]);
    return v("div", { class: createClassName([
      button_default.button,
      secondary === true ? button_default.secondary : button_default.primary,
      destructive === true ? button_default.destructive : null,
      fullWidth === true ? button_default.fullWidth : null,
      disabled === true ? button_default.disabled : null,
      loading === true ? button_default.loading : null
    ]) }, loading === true ? v("div", { class: button_default.loadingIndicator }, v(LoadingIndicator, null)) : null, v("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), children));
  }
  var init_button2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator2();
      init_button();
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/c02d39aa-a38c-428c-ac8c-f715dd391fc5/icon.js
  var icon_default;
  var init_icon = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/c02d39aa-a38c-428c-ac8c-f715dd391fc5/icon.js"() {
      if (document.getElementById("642172eea4") === null) {
        const element = document.createElement("style");
        element.id = "642172eea4";
        element.textContent = `._currentColor_1k010_1 {
  fill: currentColor;
}

._black-30_1k010_5 {
  fill: var(--color-black-30);
}
._black-80_1k010_8 {
  fill: var(--color-black-80);
}
._blue_1k010_11 {
  fill: var(--color-accent);
}
._green_1k010_14 {
  fill: var(--color-green);
}
._purple_1k010_17 {
  fill: var(--color-purple);
}
._red_1k010_20 {
  fill: var(--color-red);
}
._white_1k010_23 {
  fill: var(--color-white);
}
._white-20_1k010_26 {
  fill: var(--color-white-20-translucent);
}
._white-40_1k010_29 {
  fill: var(--color-white-40-translucent);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHVDQUF1QztBQUN6QyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50Q29sb3Ige1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5ibGFjay0zMCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5ibGFjay04MCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbn1cbi5ibHVlIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cbi5ncmVlbiB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWdyZWVuKTtcbn1cbi5wdXJwbGUge1xuICBmaWxsOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xufVxuLnJlZCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4ud2hpdGUge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4ud2hpdGUtMjAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS0yMC10cmFuc2x1Y2VudCk7XG59XG4ud2hpdGUtNDAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS00MC10cmFuc2x1Y2VudCk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_default = { "currentColor": "_currentColor_1k010_1", "black-30": "_black-30_1k010_5", "black-80": "_black-80_1k010_8", "blue": "_blue_1k010_11", "green": "_green_1k010_14", "purple": "_purple_1k010_17", "red": "_red_1k010_20", "white": "_white_1k010_23", "white-20": "_white-20_1k010_26", "white-40": "_white-40_1k010_29" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/icon/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return v("svg", __spreadProps(__spreadValues({}, rest), { class: typeof color === "undefined" ? icon_default.currentColor : icon_default[color], height, width, xmlns: "http://www.w3.org/2000/svg" }), v("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" }));
    };
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/icon/create-icon.js"() {
      init_preact_module();
      init_icon();
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/76c42b3d-be5c-4de2-9b1a-52861ac91bd9/divider.js
  var divider_default;
  var init_divider = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/76c42b3d-be5c-4de2-9b1a-52861ac91bd9/divider.js"() {
      if (document.getElementById("61fb75b14e") === null) {
        const element = document.createElement("style");
        element.id = "61fb75b14e";
        element.textContent = `._divider_b3ns9_1 {
  width: 100%;
  height: 1px;
  background-color: var(--color-silver);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kaXZpZGVyL2RpdmlkZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxxQ0FBcUM7QUFDdkMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2RpdmlkZXIvZGl2aWRlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2lsdmVyKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      divider_default = { "divider": "_divider_b3ns9_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/divider/divider.js
  function Divider(props) {
    return v("hr", __spreadProps(__spreadValues({}, props), { class: divider_default.divider }));
  }
  var init_divider2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/divider/divider.js"() {
      init_preact_module();
      init_divider();
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/4a8fcf90-a948-41db-82a6-d5bf7a278236/menu.js
  var menu_default;
  var init_menu = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/4a8fcf90-a948-41db-82a6-d5bf7a278236/menu.js"() {
      if (document.getElementById("d755597c2f") === null) {
        const element = document.createElement("style");
        element.id = "d755597c2f";
        element.textContent = `._menu_1c077_1 {
  position: absolute;
  left: 0;
  min-width: 100%;
  padding: var(--space-extra-small) 0;
  background-color: var(--color-hud);
  border-radius: var(--border-radius-2);
  box-shadow: var(--box-shadow-menu);
  color: var(--color-white);
  font-size: var(--font-size-12);
  overflow-y: auto;
}
._menu_1c077_1::-webkit-scrollbar {
  display: none;
}

._hidden_1c077_17 {
  pointer-events: none;
  visibility: hidden;
}

@media screen and (-webkit-min-device-pixel-ratio: 1.5),
  screen and (min-resolution: 1.5dppx) {
  ._menu_1c077_1 {
    -webkit-font-smoothing: antialiased;
  }
}

._optionHeader_1c077_29,
._optionValue_1c077_30 {
  padding: 4px var(--space-medium) 4px 32px;
  white-space: nowrap;
}

._optionHeader_1c077_29 {
  color: var(--color-white-40-translucent);
  font-size: var(--font-size-12);
}

._optionValue_1c077_30 {
  position: relative;
}
._optionValueSelected_1c077_43 {
  background-color: var(--color-accent);
}
._optionValueDisabled_1c077_46 {
  color: var(--color-white-40-translucent);
}

._optionSeparator_1c077_50 {
  width: 100%;
  height: 1px;
  margin: var(--space-extra-small) 0;
  background-color: var(--color-white-20-translucent);
}

._input_1c077_57 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

._checkIcon_1c077_68 {
  position: absolute;
  top: 5px;
  left: var(--space-extra-small);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY3NzL21lbnUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFO0lBQ0UsbUNBQW1DO0VBQ3JDO0FBQ0Y7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY3NzL21lbnUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWh1ZCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctbWVudSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTEyKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLFxuICBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMS41ZHBweCkge1xuICAubWVudSB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cbn1cblxuLm9wdGlvbkhlYWRlcixcbi5vcHRpb25WYWx1ZSB7XG4gIHBhZGRpbmc6IDRweCB2YXIoLS1zcGFjZS1tZWRpdW0pIDRweCAzMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ub3B0aW9uSGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLTQwLXRyYW5zbHVjZW50KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMTIpO1xufVxuXG4ub3B0aW9uVmFsdWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3B0aW9uVmFsdWVTZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG59XG4ub3B0aW9uVmFsdWVEaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS00MC10cmFuc2x1Y2VudCk7XG59XG5cbi5vcHRpb25TZXBhcmF0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlLTIwLXRyYW5zbHVjZW50KTtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hlY2tJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      menu_default = { "menu": "_menu_1c077_1", "hidden": "_hidden_1c077_17", "optionHeader": "_optionHeader_1c077_29", "optionValue": "_optionValue_1c077_30", "optionValueSelected": "_optionValueSelected_1c077_43", "optionValueDisabled": "_optionValueDisabled_1c077_46", "optionSeparator": "_optionSeparator_1c077_50", "input": "_input_1c077_57", "checkIcon": "_checkIcon_1c077_68" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js
  function useMouseDownOutside(options) {
    const { ref, onMouseDownOutside } = options;
    y2(function() {
      function handleBlur() {
        onMouseDownOutside();
      }
      function handleMouseDown(event) {
        const element = getCurrentFromRef(ref);
        if (element === event.target || element.contains(event.target)) {
          return;
        }
        onMouseDownOutside();
      }
      window.addEventListener("blur", handleBlur);
      window.addEventListener("mousedown", handleMouseDown);
      return function() {
        window.removeEventListener("blur", handleBlur);
        window.removeEventListener("mousedown", handleMouseDown);
      };
    }, [ref, onMouseDownOutside]);
  }
  var init_use_mouse_down_outside = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-mouse-down-outside.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js
  function useScrollableMenu(options) {
    const { itemIdDataAttributeName, menuElementRef, selectedId, setSelectedId } = options;
    const getItemElements = A2(function() {
      return Array.from(getCurrentFromRef(menuElementRef).querySelectorAll(`[${itemIdDataAttributeName}]`)).filter(function(element) {
        return element.hasAttribute("disabled") === false;
      });
    }, [itemIdDataAttributeName, menuElementRef]);
    const findIndexByItemId = A2(function(id) {
      if (id === null) {
        return -1;
      }
      const index = getItemElements().findIndex(function(element) {
        return element.getAttribute(itemIdDataAttributeName) === id;
      });
      if (index === -1) {
        throw new Error("Invariant violation");
      }
      return index;
    }, [getItemElements, itemIdDataAttributeName]);
    const updateScrollPosition = A2(function(id) {
      const itemElements = getItemElements();
      const index = findIndexByItemId(id);
      const selectedElement = itemElements[index];
      const menuElement = getCurrentFromRef(menuElementRef);
      const scrollTop = menuElement.scrollTop;
      const offsetTop = computeRelativeOffsetTop(selectedElement, menuElement);
      if (offsetTop < scrollTop) {
        menuElement.scrollTop = offsetTop;
        return;
      }
      const offsetBottom = offsetTop + selectedElement.offsetHeight;
      if (offsetBottom > menuElement.scrollTop + menuElement.offsetHeight) {
        menuElement.scrollTop = offsetBottom - menuElement.offsetHeight;
      }
    }, [findIndexByItemId, getItemElements, menuElementRef]);
    const handleScrollableMenuKeyDown = A2(function(event) {
      const key = event.key;
      if (key === "ArrowDown" || key === "ArrowUp") {
        const itemElements = getItemElements();
        const index = findIndexByItemId(selectedId);
        let newIndex;
        if (key === "ArrowDown") {
          newIndex = index === -1 || index === itemElements.length - 1 ? 0 : index + 1;
        } else {
          newIndex = index === -1 || index === 0 ? itemElements.length - 1 : index - 1;
        }
        const selectedElement = itemElements[newIndex];
        const newSelectedId = selectedElement.getAttribute(itemIdDataAttributeName);
        setSelectedId(newSelectedId);
        updateScrollPosition(newSelectedId);
      }
    }, [
      getItemElements,
      findIndexByItemId,
      itemIdDataAttributeName,
      setSelectedId,
      selectedId,
      updateScrollPosition
    ]);
    const handleScrollableMenuItemMouseMove = A2(function(event) {
      const id = event.currentTarget.getAttribute(itemIdDataAttributeName);
      if (id !== selectedId) {
        setSelectedId(id);
      }
    }, [itemIdDataAttributeName, selectedId, setSelectedId]);
    return {
      handleScrollableMenuItemMouseMove,
      handleScrollableMenuKeyDown
    };
  }
  function computeRelativeOffsetTop(targetElement, parentElement) {
    let element = targetElement;
    let offsetTop = 0;
    while (element !== parentElement) {
      offsetTop += element.offsetTop;
      if (element.parentElement === null) {
        throw new Error("`element.parentElement` is `null`");
      }
      element = element.parentElement;
    }
    return offsetTop;
  }
  var init_use_scrollable_menu = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-scrollable-menu.js"() {
      init_hooks_module();
      init_get_current_from_ref();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/icon/icon-8/icon-control-chevron-down-8.js
  var IconControlChevronDown8;
  var init_icon_control_chevron_down_8 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/icon/icon-8/icon-control-chevron-down-8.js"() {
      init_create_icon();
      IconControlChevronDown8 = createIcon("m3.64641 6.35352-3-3 .70711-.70711 2.64644 2.64645 2.64645-2.64645.70711.70711-3 3-.35356.35355-.35355-.35355Z", { height: 8, width: 8 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/icon/icon-16/icon-menu-checkmark-checked-16.js
  var IconMenuCheckmarkChecked16;
  var init_icon_menu_checkmark_checked_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/icon/icon-16/icon-menu-checkmark-checked-16.js"() {
      init_create_icon();
      IconMenuCheckmarkChecked16 = createIcon("M13.2069 5.20724 7.70688 10.7072l-.70711.7072-.70711-.7072-3-2.99996 1.41422-1.41421 2.29289 2.29289 4.79293-4.79289 1.4142 1.41421Z", { height: 16, width: 16 });
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/4d09c877-808e-4659-8636-e3b6e0e6d373/dropdown.js
  var dropdown_default;
  var init_dropdown = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/4d09c877-808e-4659-8636-e3b6e0e6d373/dropdown.js"() {
      if (document.getElementById("83a6ef4e2a") === null) {
        const element = document.createElement("style");
        element.id = "83a6ef4e2a";
        element.textContent = `._dropdown_1cl7e_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  height: 28px;
  align-items: center;
  padding-left: var(--space-extra-small);
  color: var(--color-black-80);
}
._dropdown_1cl7e_1:not(._disabled_1cl7e_10):focus-within {
  z-index: var(--z-index-2); /* stack \`.dropdown\` over its sibling elements */
  outline: 0;
}
._disabled_1cl7e_10 {
  opacity: var(--opacity-30);
}

._disabled_1cl7e_10,
._disabled_1cl7e_10 > * {
  cursor: not-allowed;
}

._icon_1cl7e_23 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--color-black-30);
  pointer-events: none; /* so that clicking the icon focuses the dropdown */
  text-align: center;
  transform: translate(-50%, -50%);
}

._value_1cl7e_33 {
  overflow: hidden;
  margin-right: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._dropdown_1cl7e_1:not(._disabled_1cl7e_10):hover ._value_1cl7e_33,
._dropdown_1cl7e_1:not(._disabled_1cl7e_10):focus ._value_1cl7e_33,
._dropdown_1cl7e_1:not(._disabled_1cl7e_10):focus-within ._value_1cl7e_33 {
  flex-grow: 1;
}
._placeholder_1cl7e_44 {
  color: var(--color-black-30);
}
._hasIcon_1cl7e_47 ._value_1cl7e_33 {
  padding-left: var(--space-extra-large);
}

._chevronIcon_1cl7e_51 {
  margin-right: var(--space-extra-small);
  color: var(--color-black-30);
}
._dropdown_1cl7e_1:not(._disabled_1cl7e_10):hover ._chevronIcon_1cl7e_51 {
  color: var(--color-black-80);
}

._border_1cl7e_59 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-width: 1px;
  border-color: var(--color-silver);
  border-radius: var(--border-radius-2);
}
._noBorder_1cl7e_69 ._border_1cl7e_59 {
  border-color: transparent;
}
._noBorder_1cl7e_69:not(._disabled_1cl7e_10):hover ._border_1cl7e_59 {
  border-color: var(--color-silver);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0Qyw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHlCQUF5QixFQUFFLGdEQUFnRDtFQUMzRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsb0JBQW9CLEVBQUUsbURBQW1EO0VBQ3pFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay04MCk7XG59XG4uZHJvcGRvd246bm90KC5kaXNhYmxlZCk6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTsgLyogc3RhY2sgYC5kcm9wZG93bmAgb3ZlciBpdHMgc2libGluZyBlbGVtZW50cyAqL1xuICBvdXRsaW5lOiAwO1xufVxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XG59XG5cbi5kaXNhYmxlZCxcbi5kaXNhYmxlZCA+ICoge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICBsZWZ0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMzApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogc28gdGhhdCBjbGlja2luZyB0aGUgaWNvbiBmb2N1c2VzIHRoZSBkcm9wZG93biAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udmFsdWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZHJvcGRvd246bm90KC5kaXNhYmxlZCk6aG92ZXIgLnZhbHVlLFxuLmRyb3Bkb3duOm5vdCguZGlzYWJsZWQpOmZvY3VzIC52YWx1ZSxcbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpmb2N1cy13aXRoaW4gLnZhbHVlIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5oYXNJY29uIC52YWx1ZSB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuXG4uY2hldnJvbkljb24ge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5kcm9wZG93bjpub3QoLmRpc2FibGVkKTpob3ZlciAuY2hldnJvbkljb24ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2stODApO1xufVxuXG4uYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXNpbHZlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG59XG4ubm9Cb3JkZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubm9Cb3JkZXI6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itc2lsdmVyKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      dropdown_default = { "dropdown": "_dropdown_1cl7e_1", "disabled": "_disabled_1cl7e_10", "icon": "_icon_1cl7e_23", "value": "_value_1cl7e_33", "placeholder": "_placeholder_1cl7e_44", "hasIcon": "_hasIcon_1cl7e_47", "chevronIcon": "_chevronIcon_1cl7e_51", "border": "_border_1cl7e_59", "noBorder": "_noBorder_1cl7e_69" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js
  function Dropdown(_a) {
    var _b = _a, { disabled = false, icon, name, noBorder, options, onChange = function() {
    }, onValueChange = function() {
    }, placeholder, value } = _b, rest = __objRest(_b, ["disabled", "icon", "name", "noBorder", "options", "onChange", "onValueChange", "placeholder", "value"]);
    if (typeof icon === "string" && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`);
    }
    const rootElementRef = h2(null);
    const menuElementRef = h2(null);
    const [isMenuVisible, setIsMenuVisible] = m2(false);
    const index = findOptionIndexByValue(options, value);
    if (value !== null && index === -1) {
      throw new Error(`Invalid \`value\`: ${value}`);
    }
    const [selectedId, setSelectedId] = m2(index === -1 ? null : `${index}`);
    const children = typeof options[index] === "undefined" ? "" : getDropdownOptionValue(options[index]);
    const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } = useScrollableMenu({
      itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
      menuElementRef,
      selectedId,
      setSelectedId
    });
    const triggerBlur = A2(function() {
      setIsMenuVisible(false);
      setSelectedId(INVALID_ID);
      getCurrentFromRef(rootElementRef).blur();
      const menuElement = getCurrentFromRef(menuElementRef);
      menuElement.removeAttribute("style");
    }, []);
    const handleRootFocus = A2(function() {
      setIsMenuVisible(true);
      const rootElement = getCurrentFromRef(rootElementRef);
      const menuElement = getCurrentFromRef(menuElementRef);
      if (value === null) {
        updateMenuElementLayout(rootElement, menuElement, INVALID_ID);
        return;
      }
      const index2 = findOptionIndexByValue(options, value);
      if (index2 === -1) {
        throw new Error(`Invalid \`value\`: ${value}`);
      }
      const newSelectedId = `${index2}`;
      setSelectedId(newSelectedId);
      updateMenuElementLayout(rootElement, menuElement, newSelectedId);
    }, [options, value]);
    const handleRootKeyDown = A2(function(event) {
      if (event.key === "Escape" || event.key === "Tab") {
        triggerBlur();
        return;
      }
      if (event.key === "Enter") {
        if (selectedId !== INVALID_ID) {
          const selectedElement = getCurrentFromRef(menuElementRef).querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
          if (selectedElement === null) {
            throw new Error("Invariant violation");
          }
          selectedElement.checked = true;
          const changeEvent = document.createEvent("Event");
          changeEvent.initEvent("change", true, true);
          selectedElement.dispatchEvent(changeEvent);
        }
        triggerBlur();
        return;
      }
      handleScrollableMenuKeyDown(event);
    }, [handleScrollableMenuKeyDown, selectedId, triggerBlur]);
    const handleRootMouseDown = A2(function(event) {
      if (isMenuVisible === false) {
        return;
      }
      event.preventDefault();
      triggerBlur();
    }, [isMenuVisible, triggerBlur]);
    const handleMenuMouseDown = A2(function(event) {
      event.stopPropagation();
    }, []);
    const handleOptionChange = A2(function(event) {
      const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      const optionValue = options[parseInt(id, 10)];
      const newValue = optionValue.value;
      onValueChange(newValue, name);
      onChange(event);
      triggerBlur();
    }, [name, onChange, onValueChange, options, triggerBlur]);
    const handleMouseDownOutside = A2(function() {
      if (isMenuVisible === false) {
        return;
      }
      triggerBlur();
    }, [isMenuVisible, triggerBlur]);
    useMouseDownOutside({
      onMouseDownOutside: handleMouseDownOutside,
      ref: rootElementRef
    });
    return v("div", __spreadProps(__spreadValues({}, rest), { ref: rootElementRef, class: createClassName([
      dropdown_default.dropdown,
      noBorder === true ? dropdown_default.noBorder : null,
      typeof icon === "undefined" ? null : dropdown_default.hasIcon,
      disabled === true ? dropdown_default.disabled : null
    ]), onFocus: handleRootFocus, onKeyDown: disabled === true ? void 0 : handleRootKeyDown, onMouseDown: handleRootMouseDown, tabIndex: disabled === true ? -1 : 0 }), typeof icon === "undefined" ? null : v("div", { class: dropdown_default.icon }, icon), value === null ? typeof placeholder === "undefined" ? null : v("div", { class: createClassName([
      dropdown_default.value,
      dropdown_default.placeholder
    ]) }, placeholder) : v("div", { class: dropdown_default.value }, children), v("div", { class: dropdown_default.chevronIcon }, v(IconControlChevronDown8, null)), v("div", { class: dropdown_default.border }), v("div", { ref: menuElementRef, class: createClassName([
      menu_default.menu,
      disabled === true || isMenuVisible === false ? menu_default.hidden : null
    ]), onMouseDown: handleMenuMouseDown }, options.map(function(option, index2) {
      if ("separator" in option) {
        return v("hr", { key: index2, class: menu_default.optionSeparator });
      }
      if ("header" in option) {
        return v("h1", { key: index2, class: menu_default.optionHeader }, option.header);
      }
      return v("label", { key: index2, class: createClassName([
        menu_default.optionValue,
        option.disabled === true ? menu_default.optionValueDisabled : null,
        option.disabled !== true && `${index2}` === selectedId ? menu_default.optionValueSelected : null
      ]) }, v("input", __spreadValues({ checked: value === option.value, class: menu_default.input, disabled: option.disabled === true, name, onChange: value === option.value ? void 0 : handleOptionChange, onClick: value === option.value ? triggerBlur : void 0, onMouseMove: handleScrollableMenuItemMouseMove, tabIndex: -1, type: "radio", value: `${option.value}` }, { [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index2}` })), option.value === value ? v("div", { class: menu_default.checkIcon }, v(IconMenuCheckmarkChecked16, null)) : null, typeof option.children === "undefined" ? option.value : option.children);
    })));
  }
  function getDropdownOptionValue(option) {
    if ("children" in option) {
      return option.children;
    }
    if ("value" in option) {
      return option.value;
    }
    throw new Error("Invariant violation");
  }
  function findOptionIndexByValue(options, value) {
    if (value === null) {
      return -1;
    }
    let index = 0;
    for (const option of options) {
      if ("value" in option && option.value === value) {
        return index;
      }
      index += 1;
    }
    return -1;
  }
  function updateMenuElementLayout(rootElement, menuElement, selectedId) {
    const menuElementBoundingClientRect = menuElement.getBoundingClientRect();
    const leftOffset = window.innerWidth - VIEWPORT_MARGIN - (menuElementBoundingClientRect.left + menuElement.offsetWidth);
    if (leftOffset < 0) {
      const maximumLeftOffset = VIEWPORT_MARGIN - menuElementBoundingClientRect.left;
      menuElement.style.left = `${Math.max(maximumLeftOffset, leftOffset)}px`;
    }
    const maxHeight = window.innerHeight - 2 * VIEWPORT_MARGIN;
    menuElement.style.maxHeight = `${maxHeight}px`;
    const topOffset = Math.min(0, window.innerHeight - VIEWPORT_MARGIN - (rootElement.getBoundingClientRect().top + menuElement.offsetHeight));
    if (selectedId === INVALID_ID || topOffset !== 0) {
      menuElement.style.top = `${topOffset}px`;
      return;
    }
    const selectedElement = menuElement.querySelector(`[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`);
    if (selectedElement === null) {
      throw new Error("Invariant violation");
    }
    const selectedElementTop = selectedElement.getBoundingClientRect().top - menuElementBoundingClientRect.top;
    const maximumTopOffset = Math.max(0, rootElement.getBoundingClientRect().top - VIEWPORT_MARGIN);
    menuElement.style.top = `${-1 * Math.min(selectedElementTop, maximumTopOffset)}px`;
  }
  var INVALID_ID, ITEM_ID_DATA_ATTRIBUTE_NAME, VIEWPORT_MARGIN;
  var init_dropdown2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/dropdown/dropdown.js"() {
      init_preact_module();
      init_hooks_module();
      init_menu();
      init_use_mouse_down_outside();
      init_use_scrollable_menu();
      init_create_class_name();
      init_get_current_from_ref();
      init_icon_control_chevron_down_8();
      init_icon_menu_checkmark_checked_16();
      init_dropdown();
      INVALID_ID = null;
      ITEM_ID_DATA_ATTRIBUTE_NAME = "data-dropdown-item-id";
      VIEWPORT_MARGIN = 16;
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/ba341d7d-a213-43de-8aea-da2087d4e743/container.js
  var container_default;
  var init_container = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/ba341d7d-a213-43de-8aea-da2087d4e743/container.js"() {
      if (document.getElementById("951d27024c") === null) {
        const element = document.createElement("style");
        element.id = "951d27024c";
        element.textContent = `._extraSmall_kslv9_1 {
  padding: 0 var(--space-extra-small);
}

._small_kslv9_5 {
  padding: 0 var(--space-small);
}

._medium_kslv9_9 {
  padding: 0 var(--space-medium);
}

._large_kslv9_13 {
  padding: 0 var(--space-large);
}

._extraLarge_kslv9_17 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvY29udGFpbmVyL2NvbnRhaW5lci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xheW91dC9jb250YWluZXIvY29udGFpbmVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG5cbi5zbWFsbCB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4ubWVkaXVtIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1tZWRpdW0pO1xufVxuXG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cblxuLmV4dHJhTGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      container_default = { "extraSmall": "_extraSmall_kslv9_1", "small": "_small_kslv9_5", "medium": "_medium_kslv9_9", "large": "_large_kslv9_13", "extraLarge": "_extraLarge_kslv9_17" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: container_default[space] }));
  }
  var init_container2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js"() {
      init_preact_module();
      init_container();
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/912b4652-c6dc-4827-a806-469abc24c5ac/vertical-space.js
  var vertical_space_default;
  var init_vertical_space = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/912b4652-c6dc-4827-a806-469abc24c5ac/vertical-space.js"() {
      if (document.getElementById("a043008ed2") === null) {
        const element = document.createElement("style");
        element.id = "a043008ed2";
        element.textContent = `._extraSmall_1f9m3_1 {
  height: var(--space-extra-small);
}

._small_1f9m3_5 {
  height: var(--space-small);
}

._medium_1f9m3_9 {
  height: var(--space-medium);
}

._large_1f9m3_13 {
  height: var(--space-large);
}

._extraLarge_1f9m3_17 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvdmVydGljYWwtc3BhY2UvdmVydGljYWwtc3BhY2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvdmVydGljYWwtc3BhY2UvdmVydGljYWwtc3BhY2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cblxuLnNtYWxsIHtcbiAgaGVpZ2h0OiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbi5tZWRpdW0ge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG5cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuXG4uZXh0cmFMYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      vertical_space_default = { "extraSmall": "_extraSmall_1f9m3_1", "small": "_small_1f9m3_5", "medium": "_medium_1f9m3_9", "large": "_large_1f9m3_13", "extraLarge": "_extraLarge_1f9m3_17" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_default[space] }));
  }
  var init_vertical_space2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space();
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/fa37df11-a41a-4001-87f1-34404178f141/text.js
  var text_default;
  var init_text = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/fa37df11-a41a-4001-87f1-34404178f141/text.js"() {
      if (document.getElementById("b4d79e7dc0") === null) {
        const element = document.createElement("style");
        element.id = "b4d79e7dc0";
        element.textContent = `._text_wg7jj_1 {
  padding-top: 1px;
  color: var(--color-black-80);
  pointer-events: none;
  transform: translateY(4px);
}
._text_wg7jj_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}
._text_wg7jj_1 strong {
  font-weight: var(--font-weight-bold);
}
._text_wg7jj_1 a {
  color: var(--color-accent);
  pointer-events: all;
  text-decoration: none;
}
._text_wg7jj_1 a:hover {
  text-decoration: underline;
}
._text_wg7jj_1 a:focus {
  background-color: var(--color-blue-30-translucent);
  border-radius: var(--border-radius-2);
  outline: 0;
}
._text_wg7jj_1 code {
  font-family: var(--font-family-code);
}

._bold_wg7jj_34 {
  font-weight: var(--font-weight-bold);
}

._muted_wg7jj_38 {
  color: var(--color-black-30);
}

._numeric_wg7jj_42 {
  font-variant-numeric: tabular-nums;
}

._left_wg7jj_46 {
  text-align: left;
}

._center_wg7jj_50 {
  text-align: center;
}

._right_wg7jj_54 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtEQUFrRDtFQUNsRCxxQ0FBcUM7RUFDckMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay04MCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50ZXh0IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbn1cbi50ZXh0IGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRleHQgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnRleHQgYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtMzAtdHJhbnNsdWNlbnQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xuICBvdXRsaW5lOiAwO1xufVxuLnRleHQgY29kZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1jb2RlKTtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG59XG5cbi5tdXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay0zMCk7XG59XG5cbi5udW1lcmljIHtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      text_default = { "text": "_text_wg7jj_1", "bold": "_bold_wg7jj_34", "muted": "_muted_wg7jj_38", "numeric": "_numeric_wg7jj_42", "left": "_left_wg7jj_46", "center": "_center_wg7jj_50", "right": "_right_wg7jj_54" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", bold = false, children, muted = false, numeric = false } = _b, rest = __objRest(_b, ["align", "bold", "children", "muted", "numeric"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_default.text,
      text_default[align],
      bold === true ? text_default.bold : null,
      muted === true ? text_default.muted : null,
      numeric === true ? text_default.numeric : null
    ]) }), children);
  }
  var init_text2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text();
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/c4e18e99-896d-4629-af4f-7fadf151f259/segmented-control.js
  var segmented_control_default;
  var init_segmented_control = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/c4e18e99-896d-4629-af4f-7fadf151f259/segmented-control.js"() {
      if (document.getElementById("3f14776336") === null) {
        const element = document.createElement("style");
        element.id = "3f14776336";
        element.textContent = `._segmentedControl_1mr04_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
  border-radius: var(--border-radius-2);
}
._disabled_1mr04_7 {
  opacity: var(--opacity-30);
}

._labels_1mr04_11 {
  display: flex;
}

._label_1mr04_11 {
  position: relative;
  display: block;
}

._input_1mr04_20 {
  /* These rules are needed to ensure that focus remains within \`.segmentedControl\` */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
._disabled_1mr04_7 ._input_1mr04_20 {
  cursor: not-allowed;
}

._children_1mr04_35 {
  display: flex;
  min-width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  color: var(--color-black-80);
  cursor: not-allowed;
}
._input_1mr04_20:checked ~ ._children_1mr04_35 {
  background-color: var(--color-silver);
  border-radius: var(--border-radius-2);
}
._input_1mr04_20:disabled ~ ._children_1mr04_35 {
  opacity: var(--opacity-30);
}
._segmentedControl_1mr04_1:not(._disabled_1mr04_7):hover ._input_1mr04_20:checked ~ ._children_1mr04_35,
._segmentedControl_1mr04_1:not(._disabled_1mr04_7):focus-within ._input_1mr04_20:checked ~ ._children_1mr04_35 {
  border-radius: 0;
}
._segmentedControl_1mr04_1:not(._disabled_1mr04_7):hover
  ._label_1mr04_11:first-child
  ._input_1mr04_20:checked
  ~ ._children_1mr04_35 {
  border-bottom-left-radius: var(--border-radius-2);
  border-top-left-radius: var(--border-radius-2);
}
._segmentedControl_1mr04_1:not(._disabled_1mr04_7):hover
  ._label_1mr04_11:last-child
  ._input_1mr04_20:checked
  ~ ._children_1mr04_35 {
  border-bottom-right-radius: var(--border-radius-2);
  border-top-right-radius: var(--border-radius-2);
}

._text_1mr04_70 {
  padding: 4px 10px;
}

._border_1mr04_74 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._segmentedControl_1mr04_1:not(._disabled_1mr04_7):hover ._border_1mr04_74 {
  border: 1px solid var(--color-silver);
}
._segmentedControl_1mr04_1:not(._disabled_1mr04_7):focus-within ._border_1mr04_74 {
  top: -1px;
  bottom: -1px;
  border: 2px solid var(--color-accent);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUZBQW1GO0VBQ25GLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7Ozs7RUFJRSxpREFBaUQ7RUFDakQsOENBQThDO0FBQ2hEO0FBQ0E7Ozs7RUFJRSxrREFBa0Q7RUFDbEQsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VnbWVudGVkQ29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XG59XG5cbi5sYWJlbHMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5wdXQge1xuICAvKiBUaGVzZSBydWxlcyBhcmUgbmVlZGVkIHRvIGVuc3VyZSB0aGF0IGZvY3VzIHJlbWFpbnMgd2l0aGluIGAuc2VnbWVudGVkQ29udHJvbGAgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRpc2FibGVkIC5pbnB1dCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5jaGlsZHJlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5pbnB1dDpjaGVja2VkIH4gLmNoaWxkcmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2lsdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbn1cbi5pbnB1dDpkaXNhYmxlZCB+IC5jaGlsZHJlbiB7XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xufVxuLnNlZ21lbnRlZENvbnRyb2w6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmlucHV0OmNoZWNrZWQgfiAuY2hpbGRyZW4sXG4uc2VnbWVudGVkQ29udHJvbDpub3QoLmRpc2FibGVkKTpmb2N1cy13aXRoaW4gLmlucHV0OmNoZWNrZWQgfiAuY2hpbGRyZW4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnNlZ21lbnRlZENvbnRyb2w6bm90KC5kaXNhYmxlZCk6aG92ZXJcbiAgLmxhYmVsOmZpcnN0LWNoaWxkXG4gIC5pbnB1dDpjaGVja2VkXG4gIH4gLmNoaWxkcmVuIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbn1cbi5zZWdtZW50ZWRDb250cm9sOm5vdCguZGlzYWJsZWQpOmhvdmVyXG4gIC5sYWJlbDpsYXN0LWNoaWxkXG4gIC5pbnB1dDpjaGVja2VkXG4gIH4gLmNoaWxkcmVuIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuXG4udGV4dCB7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xufVxuXG4uYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnNlZ21lbnRlZENvbnRyb2w6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNpbHZlcik7XG59XG4uc2VnbWVudGVkQ29udHJvbDpub3QoLmRpc2FibGVkKTpmb2N1cy13aXRoaW4gLmJvcmRlciB7XG4gIHRvcDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      segmented_control_default = { "segmentedControl": "_segmentedControl_1mr04_1", "disabled": "_disabled_1mr04_7", "labels": "_labels_1mr04_11", "label": "_label_1mr04_11", "input": "_input_1mr04_20", "children": "_children_1mr04_35", "text": "_text_1mr04_70", "border": "_border_1mr04_74" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/segmented-control/segmented-control.js
  function SegmentedControl(_a) {
    var _b = _a, { disabled = false, name, onChange = function() {
    }, onValueChange = function() {
    }, options, propagateEscapeKeyDown = true, value } = _b, rest = __objRest(_b, ["disabled", "name", "onChange", "onValueChange", "options", "propagateEscapeKeyDown", "value"]);
    const handleChange = A2(function(event) {
      const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME2);
      const newValue = options[parseInt(id, 10)].value;
      onValueChange(newValue, name);
      onChange(event);
    }, [name, onChange, onValueChange, options]);
    const handleKeyDown = A2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return v("div", { class: createClassName([
      segmented_control_default.segmentedControl,
      disabled === true ? segmented_control_default.disabled : null
    ]) }, v("div", { class: segmented_control_default.labels }, options.map(function(option, index) {
      const children = typeof option.children === "undefined" ? `${option.value}` : option.children;
      const isOptionDisabled = disabled === true || option.disabled === true;
      return v("label", { key: index, class: segmented_control_default.label }, v("input", __spreadValues(__spreadProps(__spreadValues({}, rest), { checked: value === option.value, class: segmented_control_default.input, disabled: isOptionDisabled === true, name, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: isOptionDisabled === true ? -1 : 0, type: "radio", value: `${option.value}` }), { [ITEM_ID_DATA_ATTRIBUTE_NAME2]: `${index}` })), v("div", { class: segmented_control_default.children }, v("div", { class: typeof children === "string" ? segmented_control_default.text : void 0 }, children)));
    })), v("div", { class: segmented_control_default.border }));
  }
  var ITEM_ID_DATA_ATTRIBUTE_NAME2;
  var init_segmented_control2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/segmented-control/segmented-control.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_segmented_control();
      ITEM_ID_DATA_ATTRIBUTE_NAME2 = "data-segmented-control-item-id";
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/67bc70db-ebf0-4033-9c9d-71a3b75ae0a5/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/67bc70db-ebf0-4033-9c9d-71a3b75ae0a5/base.js"() {
      if (document.getElementById("75f5aa611d") === null) {
        const element = document.createElement("style");
        element.id = "75f5aa611d";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* color */
  --color-black: #000000;
  --color-black-3-translucent: rgba(0, 0, 0, 0.03);
  --color-black-6-translucent: rgba(0, 0, 0, 0.06);
  --color-black-30: #b3b3b3;
  --color-black-30-translucent: rgba(0, 0, 0, 0.3);
  --color-black-80: #333333;
  --color-black-80-translucent: rgba(0, 0, 0, 0.8);
  --color-blue: #18a0fb;
  --color-blue-30-translucent: rgba(24, 160, 251, 0.3);
  --color-figjam-purple: #974bff;
  --color-figjam-purple-20-translucent: rgba(151, 71, 255, 0.2);
  --color-green: #1bc47d;
  --color-hud: #222222;
  --color-purple: #7b61ff;
  --color-red: #f24822;
  --color-selection-a: #daebf7;
  --color-selection-b: #edf5fa;
  --color-silver: #e5e5e5;
  --color-white: #ffffff;
  --color-white-20-translucent: rgba(255, 255, 255, 0.2);
  --color-white-40-translucent: rgba(255, 255, 255, 0.4);
  --color-yellow: #ffeb00;
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

.theme-figjam {
  --color-accent: var(--color-figjam-purple);
}
.theme-figjam ::selection {
  background-color: var(--color-figjam-purple-20-translucent);
}

.theme-figma {
  --color-accent: var(--color-blue);
}
.theme-figma ::selection {
  background-color: var(--color-blue-30-translucent);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      S(v(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button2();
      init_divider2();
      init_dropdown2();
      init_container2();
      init_vertical_space2();
      init_segmented_control2();
      init_text2();
      init_render();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // src/components/icons/DeviceMobile16.tsx
  function DeviceMobile16(props) {
    if (props.background) {
      return /* @__PURE__ */ v("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ v("rect", {
        x: "2.5",
        y: "4.5",
        width: "11",
        height: "6.87645",
        rx: "1",
        fill: "#ACACAC",
        stroke: "#2C3A42",
        "stroke-width": "0.85"
      }));
    } else {
      return /* @__PURE__ */ v("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ v("rect", {
        x: "2.5",
        y: "4.5",
        width: "11",
        height: "6.87645",
        rx: "1",
        stroke: "#2C3A42",
        "stroke-width": "0.85"
      }));
    }
  }
  var init_DeviceMobile16 = __esm({
    "src/components/icons/DeviceMobile16.tsx"() {
      init_preact_module();
    }
  });

  // src/components/icons/DeviceMobile32.tsx
  function DeviceMobile32(props) {
    if (props.background) {
      return /* @__PURE__ */ v("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ v("path", {
        d: "M14.6914 10.325C14.7685 10.3789 14.8637 10.3844 14.9564 10.3844H16.2801C16.3879 10.3836 16.5029 10.3668 16.5777 10.2862C16.6182 10.2424 16.6422 10.1871 16.6547 10.1303C16.6625 10.0953 16.6607 10.0533 16.6868 10.0248C16.7052 10.0046 16.7306 10.0018 16.7568 10.0018H16.9875H17.6645C17.7113 10.0018 17.7576 10.0026 17.8038 10.0113C17.9322 10.0357 18.0485 10.1071 18.1252 10.2089C18.1898 10.2946 18.224 10.3981 18.2244 10.5037V10.5612V10.7035V10.9249V11.2153V11.5686V11.9798V12.4368V12.9346V13.4688V14.026V14.6034V15.1922V15.7831V16.3738V16.9503V17.5086V18.0441V18.5435V19.0038V19.416V19.772V20.0669V20.2901V20.436V20.4975C18.2241 20.5973 18.1938 20.6955 18.1357 20.7785C18.0622 20.8836 17.9475 20.9592 17.819 20.9874C17.7631 20.9997 17.7072 21 17.6504 21H17.4014H16.9876H16.4611H15.8676H15.2509H14.6656H14.1557H13.7668H13.5509C13.4797 21 13.4102 20.9933 13.3426 20.9695C13.218 20.9257 13.1137 20.8361 13.0546 20.722C13.0178 20.6507 13.0002 20.5727 13.0001 20.4933V20.4165V20.2565V20.0206V19.7143V19.3482V18.9271V18.4592V17.9535V17.413V16.851V16.2721V15.6803V15.0894V14.5021V13.9274V13.3741V12.8453V12.3541V11.9048V11.5028V11.16V10.8812V10.6729V10.5449C13.0001 10.5262 12.9998 10.5076 13.0003 10.489C13.0039 10.3662 13.0554 10.2469 13.1435 10.1579C13.232 10.0683 13.3542 10.0126 13.4823 10.0033C13.5327 9.99959 13.584 10.0018 13.6345 10.0018H14.3389C14.3886 10.0018 14.4407 9.99742 14.4903 10.0023C14.5206 10.0053 14.5425 10.0235 14.5533 10.0504C14.5612 10.0698 14.5623 10.0907 14.566 10.1111C14.5707 10.1377 14.5776 10.164 14.5875 10.1893C14.6083 10.243 14.643 10.2911 14.6914 10.325Z",
        fill: "#ACACAC",
        stroke: "#313131",
        "stroke-width": "0.85",
        "stroke-miterlimit": "10",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }));
    } else {
      return /* @__PURE__ */ v("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ v("path", {
        d: "M14.6914 10.325C14.7685 10.3789 14.8637 10.3844 14.9564 10.3844H16.2801C16.3879 10.3836 16.5029 10.3668 16.5777 10.2862C16.6182 10.2424 16.6422 10.1871 16.6547 10.1303C16.6625 10.0953 16.6607 10.0533 16.6868 10.0248C16.7052 10.0046 16.7306 10.0018 16.7568 10.0018H16.9875H17.6645C17.7113 10.0018 17.7576 10.0026 17.8038 10.0113C17.9322 10.0357 18.0485 10.1071 18.1252 10.2089C18.1898 10.2946 18.224 10.3981 18.2244 10.5037V10.5612V10.7035V10.9249V11.2153V11.5686V11.9798V12.4368V12.9346V13.4688V14.026V14.6034V15.1922V15.7831V16.3738V16.9503V17.5086V18.0441V18.5435V19.0038V19.416V19.772V20.0669V20.2901V20.436V20.4975C18.2241 20.5973 18.1938 20.6955 18.1357 20.7785C18.0622 20.8836 17.9475 20.9592 17.819 20.9874C17.7631 20.9997 17.7072 21 17.6504 21H17.4014H16.9876H16.4611H15.8676H15.2509H14.6656H14.1557H13.7668H13.5509C13.4797 21 13.4102 20.9933 13.3426 20.9695C13.218 20.9257 13.1137 20.8361 13.0546 20.722C13.0178 20.6507 13.0002 20.5727 13.0001 20.4933V20.4165V20.2565V20.0206V19.7143V19.3482V18.9271V18.4592V17.9535V17.413V16.851V16.2721V15.6803V15.0894V14.5021V13.9274V13.3741V12.8453V12.3541V11.9048V11.5028V11.16V10.8812V10.6729V10.5449C13.0001 10.5262 12.9998 10.5076 13.0003 10.489C13.0039 10.3662 13.0554 10.2469 13.1435 10.1579C13.232 10.0683 13.3542 10.0126 13.4823 10.0033C13.5327 9.99959 13.584 10.0018 13.6345 10.0018H14.3389C14.3886 10.0018 14.4407 9.99742 14.4903 10.0023C14.5206 10.0053 14.5425 10.0235 14.5533 10.0504C14.5612 10.0698 14.5623 10.0907 14.566 10.1111C14.5707 10.1377 14.5776 10.164 14.5875 10.1893C14.6083 10.243 14.643 10.2911 14.6914 10.325Z",
        stroke: "#313131",
        "stroke-width": "0.85",
        "stroke-miterlimit": "10",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }));
    }
  }
  var init_DeviceMobile32 = __esm({
    "src/components/icons/DeviceMobile32.tsx"() {
      init_preact_module();
    }
  });

  // src/components/icons/DeviceTablet32.tsx
  function DeviceTablet32(props) {
    if (props.background) {
      return /* @__PURE__ */ v("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ v("path", {
        d: "M7.94352 10.094C7.94393 10.025 8.00878 10.0001 8.07263 10.0001C8.13244 10.0001 8.19222 10.0001 8.25203 10.0001C8.36403 10.0001 8.47599 10.0001 8.58798 10.0001C8.74687 10.0001 8.90579 10.0001 9.06467 10.0001C9.26522 10.0001 9.46581 10.0001 9.66636 10.0001C9.90331 10.0001 10.1403 10.0001 10.3773 10.0001C10.6454 10.0001 10.9135 10.0001 11.1816 10.0001C11.4756 10.0001 11.7696 10.0001 12.0635 10.0001C12.3782 10.0001 12.6928 10.0001 13.0074 10.0001C13.3374 10.0001 13.6674 10.0001 13.9973 10.0001C14.3374 10.0001 14.6775 10.0001 15.0176 10.0001C15.3625 10.0001 15.7075 10.0001 16.0524 10.0001C16.3969 10.0001 16.7414 10.0001 17.0859 10.0001C17.4248 10.0001 17.7636 10.0001 18.1025 10.0001C18.4304 10.0001 18.7583 10.0001 19.0862 10.0001C19.3979 10.0001 19.7097 10.0001 20.0214 10.0001C20.3117 10.0001 20.6019 10.0001 20.8922 10.0001C21.1557 10.0001 21.4193 10.0001 21.6829 10.0001C21.9145 10.0001 22.1461 10.0001 22.3777 10.0001C22.572 10.0001 22.7664 10.0001 22.9608 10.0001C23.1127 10.0001 23.2645 10.0001 23.4164 10.0001C23.5205 10.0001 23.6246 10.0001 23.7288 10.0001C23.7799 10.0001 23.831 9.99992 23.8821 10.0001C23.946 10.0002 23.9962 10.0352 23.9983 10.0968C23.9999 10.1432 23.9983 10.1899 23.9983 10.2364C23.9983 10.3466 23.9983 10.4569 23.9983 10.5672C23.9983 10.7326 23.9983 10.898 23.9983 11.0634C23.9983 11.2753 23.9983 11.4872 23.9983 11.6992C23.9983 11.9491 23.9983 12.1989 23.9983 12.4488C23.9983 12.7279 23.9983 13.007 23.9983 13.2862C23.9983 13.586 23.9983 13.8859 23.9983 14.1857C23.9983 14.4976 23.9983 14.8095 23.9983 15.1214C23.9983 15.4367 23.9983 15.752 23.9983 16.0674C23.9983 16.3775 23.9983 16.6877 23.9983 16.9979C23.9983 17.2942 23.9983 17.5906 23.9983 17.887C23.9983 18.161 23.9983 18.4349 23.9983 18.7089C23.9983 18.9519 23.9983 19.1948 23.9983 19.4378C23.9983 19.6411 23.9983 19.8444 23.9983 20.0477C23.9983 20.2028 23.9983 20.3579 23.9983 20.5129C23.9983 20.6111 23.9983 20.7093 23.9983 20.8075C23.9983 20.8434 24.0026 20.8818 23.9975 20.9175C23.9883 20.983 23.9259 20.9998 23.8653 20.9998C23.8033 20.9998 23.7414 20.9998 23.6794 20.9998C23.5655 20.9998 23.4516 20.9998 23.3377 20.9998C23.1771 20.9998 23.0164 20.9998 22.8558 20.9998C22.6537 20.9998 22.4516 20.9998 22.2495 20.9998C22.0112 20.9998 21.7729 20.9998 21.5346 20.9998C21.2654 20.9998 20.9962 20.9998 20.7269 20.9998C20.432 20.9998 20.1371 20.9998 19.8422 20.9998C19.5269 20.9998 19.2116 20.9998 18.8963 20.9998C18.5658 20.9998 18.2353 20.9998 17.9048 20.9998C17.5645 20.9998 17.2241 20.9998 16.8837 20.9998C16.5387 20.9998 16.1937 20.9998 15.8487 20.9998C15.5043 20.9998 15.1599 20.9998 14.8155 20.9998C14.477 20.9998 14.1385 20.9998 13.7999 20.9998C13.4726 20.9998 13.1452 20.9998 12.8178 20.9998C12.5068 20.9998 12.1959 20.9998 11.8849 20.9998C11.5956 20.9998 11.3062 20.9998 11.0169 20.9998C10.7545 20.9998 10.4921 20.9998 10.2297 20.9998C9.99946 20.9998 9.76921 20.9998 9.53899 20.9998C9.34618 20.9998 9.15341 20.9998 8.9606 20.9998C8.81049 20.9998 8.66039 20.9998 8.51032 20.9998C8.40817 20.9998 8.30603 20.9998 8.20388 20.9998C8.15496 20.9998 8.106 21.0002 8.05707 20.9998C7.99289 20.9993 7.94511 20.9622 7.94345 20.9016C7.94211 20.8528 7.94345 20.8037 7.94345 20.7549C7.94345 20.6425 7.94345 20.5301 7.94345 20.4177C7.94345 20.2505 7.94345 20.0833 7.94345 19.9161C7.94345 19.7026 7.94345 19.4892 7.94345 19.2758C7.94345 19.0247 7.94345 18.7737 7.94345 18.5226C7.94345 18.2426 7.94345 17.9626 7.94345 17.6825C7.94345 17.3821 7.94345 17.0817 7.94345 16.7813C7.94345 16.4692 7.94345 16.157 7.94345 15.8448C7.94345 15.5284 7.94345 15.212 7.94345 14.8956C7.94345 14.5858 7.94345 14.276 7.94345 13.9662C7.94345 13.6706 7.94345 13.3749 7.94345 13.0792C7.94345 12.8063 7.94345 12.5334 7.94345 12.2605C7.94345 12.0189 7.94345 11.7774 7.94345 11.5358C7.94345 11.3342 7.94345 11.1326 7.94345 10.931C7.94345 10.778 7.94345 10.6251 7.94345 10.4721C7.94345 10.3763 7.94345 10.2805 7.94345 10.1847C7.94352 10.1544 7.94352 10.1242 7.94352 10.094Z",
        fill: "#ACACAC",
        stroke: "#2C3A42",
        "stroke-width": "0.85",
        "stroke-miterlimit": "10",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), /* @__PURE__ */ v("line", {
        x1: "14.35",
        y1: "19.65",
        x2: "17.65",
        y2: "19.65",
        stroke: "#2C3A42",
        "stroke-width": "0.7",
        "stroke-linecap": "round"
      }));
    } else {
      return /* @__PURE__ */ v("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ v("path", {
        d: "M7.94352 10.094C7.94393 10.025 8.00878 10.0001 8.07263 10.0001C8.13244 10.0001 8.19222 10.0001 8.25203 10.0001C8.36403 10.0001 8.47599 10.0001 8.58798 10.0001C8.74687 10.0001 8.90579 10.0001 9.06467 10.0001C9.26522 10.0001 9.46581 10.0001 9.66636 10.0001C9.90331 10.0001 10.1403 10.0001 10.3773 10.0001C10.6454 10.0001 10.9135 10.0001 11.1816 10.0001C11.4756 10.0001 11.7696 10.0001 12.0635 10.0001C12.3782 10.0001 12.6928 10.0001 13.0074 10.0001C13.3374 10.0001 13.6674 10.0001 13.9973 10.0001C14.3374 10.0001 14.6775 10.0001 15.0176 10.0001C15.3625 10.0001 15.7075 10.0001 16.0524 10.0001C16.3969 10.0001 16.7414 10.0001 17.0859 10.0001C17.4248 10.0001 17.7636 10.0001 18.1025 10.0001C18.4304 10.0001 18.7583 10.0001 19.0862 10.0001C19.3979 10.0001 19.7097 10.0001 20.0214 10.0001C20.3117 10.0001 20.6019 10.0001 20.8922 10.0001C21.1557 10.0001 21.4193 10.0001 21.6829 10.0001C21.9145 10.0001 22.1461 10.0001 22.3777 10.0001C22.572 10.0001 22.7664 10.0001 22.9608 10.0001C23.1127 10.0001 23.2645 10.0001 23.4164 10.0001C23.5205 10.0001 23.6246 10.0001 23.7288 10.0001C23.7799 10.0001 23.831 9.99992 23.8821 10.0001C23.946 10.0002 23.9962 10.0352 23.9983 10.0968C23.9999 10.1432 23.9983 10.1899 23.9983 10.2364C23.9983 10.3466 23.9983 10.4569 23.9983 10.5672C23.9983 10.7326 23.9983 10.898 23.9983 11.0634C23.9983 11.2753 23.9983 11.4872 23.9983 11.6992C23.9983 11.9491 23.9983 12.1989 23.9983 12.4488C23.9983 12.7279 23.9983 13.007 23.9983 13.2862C23.9983 13.586 23.9983 13.8859 23.9983 14.1857C23.9983 14.4976 23.9983 14.8095 23.9983 15.1214C23.9983 15.4367 23.9983 15.752 23.9983 16.0674C23.9983 16.3775 23.9983 16.6877 23.9983 16.9979C23.9983 17.2942 23.9983 17.5906 23.9983 17.887C23.9983 18.161 23.9983 18.4349 23.9983 18.7089C23.9983 18.9519 23.9983 19.1948 23.9983 19.4378C23.9983 19.6411 23.9983 19.8444 23.9983 20.0477C23.9983 20.2028 23.9983 20.3579 23.9983 20.5129C23.9983 20.6111 23.9983 20.7093 23.9983 20.8075C23.9983 20.8434 24.0026 20.8818 23.9975 20.9175C23.9883 20.983 23.9259 20.9998 23.8653 20.9998C23.8033 20.9998 23.7414 20.9998 23.6794 20.9998C23.5655 20.9998 23.4516 20.9998 23.3377 20.9998C23.1771 20.9998 23.0164 20.9998 22.8558 20.9998C22.6537 20.9998 22.4516 20.9998 22.2495 20.9998C22.0112 20.9998 21.7729 20.9998 21.5346 20.9998C21.2654 20.9998 20.9962 20.9998 20.7269 20.9998C20.432 20.9998 20.1371 20.9998 19.8422 20.9998C19.5269 20.9998 19.2116 20.9998 18.8963 20.9998C18.5658 20.9998 18.2353 20.9998 17.9048 20.9998C17.5645 20.9998 17.2241 20.9998 16.8837 20.9998C16.5387 20.9998 16.1937 20.9998 15.8487 20.9998C15.5043 20.9998 15.1599 20.9998 14.8155 20.9998C14.477 20.9998 14.1385 20.9998 13.7999 20.9998C13.4726 20.9998 13.1452 20.9998 12.8178 20.9998C12.5068 20.9998 12.1959 20.9998 11.8849 20.9998C11.5956 20.9998 11.3062 20.9998 11.0169 20.9998C10.7545 20.9998 10.4921 20.9998 10.2297 20.9998C9.99946 20.9998 9.76921 20.9998 9.53899 20.9998C9.34618 20.9998 9.15341 20.9998 8.9606 20.9998C8.81049 20.9998 8.66039 20.9998 8.51032 20.9998C8.40817 20.9998 8.30603 20.9998 8.20388 20.9998C8.15496 20.9998 8.106 21.0002 8.05707 20.9998C7.99289 20.9993 7.94511 20.9622 7.94345 20.9016C7.94211 20.8528 7.94345 20.8037 7.94345 20.7549C7.94345 20.6425 7.94345 20.5301 7.94345 20.4177C7.94345 20.2505 7.94345 20.0833 7.94345 19.9161C7.94345 19.7026 7.94345 19.4892 7.94345 19.2758C7.94345 19.0247 7.94345 18.7737 7.94345 18.5226C7.94345 18.2426 7.94345 17.9626 7.94345 17.6825C7.94345 17.3821 7.94345 17.0817 7.94345 16.7813C7.94345 16.4692 7.94345 16.157 7.94345 15.8448C7.94345 15.5284 7.94345 15.212 7.94345 14.8956C7.94345 14.5858 7.94345 14.276 7.94345 13.9662C7.94345 13.6706 7.94345 13.3749 7.94345 13.0792C7.94345 12.8063 7.94345 12.5334 7.94345 12.2605C7.94345 12.0189 7.94345 11.7774 7.94345 11.5358C7.94345 11.3342 7.94345 11.1326 7.94345 10.931C7.94345 10.778 7.94345 10.6251 7.94345 10.4721C7.94345 10.3763 7.94345 10.2805 7.94345 10.1847C7.94352 10.1544 7.94352 10.1242 7.94352 10.094Z",
        stroke: "#2C3A42",
        "stroke-width": "0.85",
        "stroke-miterlimit": "10",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), /* @__PURE__ */ v("line", {
        x1: "14.35",
        y1: "19.65",
        x2: "17.65",
        y2: "19.65",
        stroke: "#2C3A42",
        "stroke-width": "0.7",
        "stroke-linecap": "round"
      }));
    }
  }
  var init_DeviceTablet32 = __esm({
    "src/components/icons/DeviceTablet32.tsx"() {
      init_preact_module();
    }
  });

  // src/components/icons/DeviceDesktop32.tsx
  function DeviceDesktop32(props) {
    if (props.background) {
      return /* @__PURE__ */ v("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ v("rect", {
        x: "7",
        y: "10",
        width: "17.5963",
        height: "11",
        rx: "1",
        fill: "#ACACAC",
        stroke: "#2C3A42",
        "stroke-width": "0.85"
      }));
    } else {
      return /* @__PURE__ */ v("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /* @__PURE__ */ v("rect", {
        x: "7",
        y: "10",
        width: "17.5963",
        height: "11",
        rx: "1",
        stroke: "#2C3A42",
        "stroke-width": "0.85"
      }), /* @__PURE__ */ v("path", {
        d: "M16.9312 17.9206L16.0906 15.7259L15.9809 15.9404L17.1437 16.0137C17.1951 16.0171 17.2363 16.0023 17.2674 15.9692C17.2986 15.936 17.3149 15.8951 17.3165 15.8462C17.318 15.7974 17.3001 15.7512 17.2628 15.7076L14.9512 13.0603C14.917 13.0202 14.8788 13.0001 14.8368 13.0001C14.7963 12.9984 14.7613 13.0132 14.7317 13.0446C14.7037 13.076 14.6889 13.1187 14.6874 13.1728L14.65 16.856C14.6485 16.917 14.664 16.9641 14.6967 16.9972C14.7294 17.0304 14.7683 17.0469 14.8135 17.0469C14.8586 17.0452 14.8983 17.0216 14.9325 16.9763L15.682 16.045L15.4649 15.9823L16.2774 18.2267C16.293 18.2703 16.3187 18.3008 16.3545 18.3183C16.3903 18.3374 16.4261 18.3383 16.4619 18.3209L16.8658 18.1351C16.9032 18.1195 16.9273 18.0907 16.9382 18.0488C16.9507 18.007 16.9483 17.9642 16.9312 17.9206Z",
        fill: "#2C3A42"
      }));
    }
  }
  var init_DeviceDesktop32 = __esm({
    "src/components/icons/DeviceDesktop32.tsx"() {
      init_preact_module();
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  var compat_module_exports = {};
  __export(compat_module_exports, {
    Children: () => k3,
    Component: () => _,
    Fragment: () => d,
    PureComponent: () => E,
    StrictMode: () => cn,
    Suspense: () => L2,
    SuspenseList: () => M2,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => X,
    cloneElement: () => rn,
    createContext: () => D,
    createElement: () => v,
    createFactory: () => tn,
    createPortal: () => W,
    createRef: () => p,
    default: () => compat_module_default,
    findDOMNode: () => on2,
    flushSync: () => fn,
    forwardRef: () => x3,
    hydrate: () => $2,
    isValidElement: () => en,
    lazy: () => F2,
    memo: () => g3,
    render: () => B2,
    unmountComponentAtNode: () => un,
    unstable_batchedUpdates: () => ln,
    useCallback: () => A2,
    useContext: () => F,
    useDebugValue: () => T2,
    useEffect: () => y2,
    useErrorBoundary: () => q2,
    useImperativeHandle: () => s2,
    useLayoutEffect: () => d2,
    useMemo: () => _2,
    useReducer: () => p2,
    useRef: () => h2,
    useState: () => m2,
    version: () => nn
  });
  function C2(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function S2(n2, t3) {
    for (var e3 in n2)
      if (e3 !== "__source" && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if (r3 !== "__source" && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  function g3(n2, t3) {
    function e3(n3) {
      var e4 = this.props.ref, r4 = e4 == n3.ref;
      return !r4 && e4 && (e4.call ? e4(null) : e4.current = null), t3 ? !t3(this.props, n3) || !r4 : S2(this.props, n3);
    }
    function r3(t4) {
      return this.shouldComponentUpdate = e3, v(n2, t4);
    }
    return r3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r3.prototype.isReactComponent = true, r3.__f = true, r3;
  }
  function x3(n2) {
    function t3(t4) {
      var e3 = C2({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = R, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__e && t3.__e(n2);
  }
  function F2(n2) {
    var t3, e3, r3;
    function u3(u4) {
      if (t3 || (t3 = n2()).then(function(n3) {
        e3 = n3.default || n3;
      }, function(n3) {
        r3 = n3;
      }), r3)
        throw r3;
      if (!e3)
        throw t3;
      return v(e3, u4);
    }
    return u3.displayName = "Lazy", u3.__f = true, u3;
  }
  function M2() {
    this.u = null, this.o = null;
  }
  function D2(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function I2(n2) {
    var t3 = this, e3 = n2.i;
    t3.componentWillUnmount = function() {
      S(null, t3.l), t3.l = null, t3.i = null;
    }, t3.i && t3.i !== e3 && t3.componentWillUnmount(), n2.__v ? (t3.l || (t3.i = e3, t3.l = { nodeType: 1, parentNode: e3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), t3.i.appendChild(n3);
    }, insertBefore: function(n3, e4) {
      this.childNodes.push(n3), t3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t3.i.removeChild(n3);
    } }), S(v(D2, { context: t3.context }, n2.__v), t3.l)) : t3.l && t3.componentWillUnmount();
  }
  function W(n2, t3) {
    return v(I2, { __v: n2, i: t3 });
  }
  function B2(n2, t3, e3) {
    return t3.__k == null && (t3.textContent = ""), S(n2, t3), typeof e3 == "function" && e3(), n2 ? n2.__c : null;
  }
  function $2(n2, t3, e3) {
    return q(n2, t3), typeof e3 == "function" && e3(), n2 ? n2.__c : null;
  }
  function Z() {
  }
  function Y() {
    return this.cancelBubble;
  }
  function q3() {
    return this.defaultPrevented;
  }
  function tn(n2) {
    return v.bind(null, n2);
  }
  function en(n2) {
    return !!n2 && n2.$$typeof === P2;
  }
  function rn(n2) {
    return en(n2) ? B.apply(null, arguments) : n2;
  }
  function un(n2) {
    return !!n2.__k && (S(null, n2), true);
  }
  function on2(n2) {
    return n2 && (n2.base || n2.nodeType === 1 && n2) || null;
  }
  var w3, R, N2, k3, A3, O2, T3, P2, V, j3, z2, H2, G, J, K, Q, X, nn, ln, fn, cn, compat_module_default;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_hooks_module();
      init_hooks_module();
      init_preact_module();
      init_preact_module();
      (E.prototype = new _()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t3) {
        return S2(this.props, n2) || S2(this.state, t3);
      };
      w3 = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w3 && w3(n2);
      };
      R = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      N2 = function(n2, t3) {
        return n2 == null ? null : A(A(n2).map(t3));
      };
      k3 = { map: N2, forEach: N2, count: function(n2) {
        return n2 ? A(n2).length : 0;
      }, only: function(n2) {
        var t3 = A(n2);
        if (t3.length !== 1)
          throw "Children.only";
        return t3[0];
      }, toArray: A };
      A3 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; )
            if ((u3 = o3.__c) && u3.__c)
              return t3.__e == null && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        A3(n2, t3, e3, r3);
      };
      O2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && n2.__h === true && (n2.type = null), O2 && O2(n2);
      }, (L2.prototype = new _()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        r3.t == null && (r3.t = []), r3.t.push(e3);
        var u3 = U(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__e) {
              var n3 = r3.state.__e;
              r3.__v.__k[0] = function n4(t5, e4, r4) {
                return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
                  return n4(t6, e4, r4);
                }), t5.__c && t5.__c.__P === e4 && (t5.__e && r4.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r4)), t5;
              }(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __e: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        }, f3 = t3.__h === true;
        r3.__u++ || f3 || r3.setState({ __e: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, L2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, L2.prototype.render = function(n2, t3) {
        if (this.__b) {
          if (this.__v.__k) {
            var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
            this.__v.__k[0] = function n3(t4, e4, r4) {
              return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
                typeof n4.__c == "function" && n4.__c();
              }), t4.__c.__H = null), (t4 = C2({}, t4)).__c != null && (t4.__c.__P === r4 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
                return n3(t5, e4, r4);
              })), t4;
            }(this.__b, e3, r3.__O = r3.__P);
          }
          this.__b = null;
        }
        var u3 = t3.__e && v(d, null, n2.fallback);
        return u3 && (u3.__h = null), [v(d, null, t3.__e ? null : n2.children), u3];
      };
      T3 = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (M2.prototype = new _()).__e = function(n2) {
        var t3 = this, e3 = U(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), T3(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, M2.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = A(n2.children);
        n2.revealOrder && n2.revealOrder[0] === "b" && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          T3(n2, e3, t3);
        });
      };
      P2 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
      V = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      j3 = typeof document != "undefined";
      z2 = function(n2) {
        return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
      };
      _.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
        Object.defineProperty(_.prototype, n2, { configurable: true, get: function() {
          return this["UNSAFE_" + n2];
        }, set: function(t3) {
          Object.defineProperty(this, n2, { configurable: true, writable: true, value: t3 });
        } });
      });
      H2 = l.event;
      l.event = function(n2) {
        return H2 && (n2 = H2(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = q3, n2.nativeEvent = n2;
      };
      J = { configurable: true, get: function() {
        return this.class;
      } };
      K = l.vnode;
      l.vnode = function(n2) {
        var t3 = n2.type, e3 = n2.props, r3 = e3;
        if (typeof t3 == "string") {
          var u3 = t3.indexOf("-") === -1;
          for (var o3 in r3 = {}, e3) {
            var i3 = e3[o3];
            j3 && o3 === "children" && t3 === "noscript" || o3 === "value" && "defaultValue" in e3 && i3 == null || (o3 === "defaultValue" && "value" in e3 && e3.value == null ? o3 = "value" : o3 === "download" && i3 === true ? i3 = "" : /ondoubleclick/i.test(o3) ? o3 = "ondblclick" : /^onchange(textarea|input)/i.test(o3 + t3) && !z2(e3.type) ? o3 = "oninput" : /^onfocus$/i.test(o3) ? o3 = "onfocusin" : /^onblur$/i.test(o3) ? o3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o3) ? o3 = o3.toLowerCase() : u3 && V.test(o3) ? o3 = o3.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i3 === null && (i3 = void 0), r3[o3] = i3);
          }
          t3 == "select" && r3.multiple && Array.isArray(r3.value) && (r3.value = A(e3.children).forEach(function(n3) {
            n3.props.selected = r3.value.indexOf(n3.props.value) != -1;
          })), t3 == "select" && r3.defaultValue != null && (r3.value = A(e3.children).forEach(function(n3) {
            n3.props.selected = r3.multiple ? r3.defaultValue.indexOf(n3.props.value) != -1 : r3.defaultValue == n3.props.value;
          })), n2.props = r3, e3.class != e3.className && (J.enumerable = "className" in e3, e3.className != null && (r3.class = e3.className), Object.defineProperty(r3, "className", J));
        }
        n2.$$typeof = P2, K && K(n2);
      };
      Q = l.__r;
      l.__r = function(n2) {
        Q && Q(n2), G = n2.__c;
      };
      X = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return G.__n[n2.__c].props.value;
      } } } };
      nn = "17.0.2";
      ln = function(n2, t3) {
        return n2(t3);
      };
      fn = function(n2, t3) {
        return n2(t3);
      };
      cn = d;
      compat_module_default = { useState: m2, useReducer: p2, useEffect: y2, useLayoutEffect: d2, useRef: h2, useImperativeHandle: s2, useMemo: _2, useCallback: A2, useContext: F, useDebugValue: T2, version: "17.0.2", Children: k3, render: B2, hydrate: $2, unmountComponentAtNode: un, createPortal: W, createElement: v, createContext: D, createFactory: tn, cloneElement: rn, createRef: p, Fragment: d, isValidElement: en, findDOMNode: on2, Component: _, PureComponent: E, memo: g3, forwardRef: x3, flushSync: fn, unstable_batchedUpdates: ln, StrictMode: d, Suspense: L2, SuspenseList: M2, lazy: F2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X };
    }
  });

  // node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i3 = 0; i3 < 10; i3++) {
            test2["_" + String.fromCharCode(i3)] = i3;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
            return test2[n2];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s3 = 1; s3 < arguments.length; s3++) {
          from = Object(arguments[s3]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i3 = 0; i3 < symbols.length; i3++) {
              if (propIsEnumerable.call(from, symbols[i3])) {
                to[symbols[i3]] = from[symbols[i3]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x4) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x4) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x4, y3) {
          if (x4 === y3) {
            return x4 !== 0 || 1 / x4 === 1 / y3;
          } else {
            return x4 !== x4 && y3 !== y3;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                  printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i3 = 0; i3 < propValue.length; i3++) {
              var error = typeChecker(propValue, i3, componentName, location, propFullName + "[" + i3 + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i3 = 0; i3 < expectedValues.length; i3++) {
              if (is(propValue, expectedValues[i3])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker = arrayOfTypeCheckers[i3];
            if (typeof checker !== "function") {
              printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i3 + ".");
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i4 = 0; i4 < arrayOfTypeCheckers.length; i4++) {
              var checker2 = arrayOfTypeCheckers[i4];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          var classes = [];
          for (var i3 = 0; i3 < arguments.length; i3++) {
            var arg = arguments[i3];
            if (!arg)
              continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              if (arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              }
            } else if (argType === "object") {
              if (arg.toString === Object.prototype.toString) {
                for (var key in arg) {
                  if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                  }
                }
              } else {
                classes.push(arg.toString());
              }
            }
          }
          return classes.join(" ");
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames;
          });
        } else {
          window.classNames = classNames;
        }
      })();
    }
  });

  // node_modules/react-svg-inline/lib/index.js
  var require_lib = __commonJS({
    "node_modules/react-svg-inline/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function(target) {
        for (var i3 = 1; i3 < arguments.length; i3++) {
          var source = arguments[i3];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i3 = 0; i3 < props.length; i3++) {
            var descriptor = props[i3];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = (init_compat_module(), __toCommonJS(compat_module_exports));
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _classnames = require_classnames();
      var _classnames2 = _interopRequireDefault(_classnames);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i3 in obj) {
          if (keys.indexOf(i3) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i3))
            continue;
          target[i3] = obj[i3];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var cleanups = {
        title: /<title>.*<\/title>/gi,
        desc: /<desc>.*<\/desc>/gi,
        comment: /<!--.*-->/gi,
        defs: /<defs>.*<\/defs>/gi,
        width: / +width="\d+(\.\d+)?(px)?"/gi,
        height: / +height="\d+(\.\d+)?(px)?"/gi,
        fill: / +fill="(none|#[0-9a-f]+)"/gi,
        sketchMSShapeGroup: / +sketch:type="MSShapeGroup"/gi,
        sketchMSPage: / +sketch:type="MSPage"/gi,
        sketchMSLayerGroup: / +sketch:type="MSLayerGroup"/gi
      };
      var SVGInline2 = function(_Component) {
        _inherits(SVGInline3, _Component);
        function SVGInline3() {
          _classCallCheck(this, SVGInline3);
          return _possibleConstructorReturn(this, (SVGInline3.__proto__ || Object.getPrototypeOf(SVGInline3)).apply(this, arguments));
        }
        _createClass(SVGInline3, [{
          key: "render",
          value: function render2() {
            var _props = this.props, className = _props.className, component = _props.component, svg = _props.svg, fill = _props.fill, width = _props.width, accessibilityLabel = _props.accessibilityLabel, accessibilityDesc = _props.accessibilityDesc, classSuffix = _props.classSuffix, cleanupExceptions = _props.cleanupExceptions, componentProps = _objectWithoutProperties(_props, ["className", "component", "svg", "fill", "width", "accessibilityLabel", "accessibilityDesc", "classSuffix", "cleanupExceptions"]);
            var _props2 = this.props, cleanup = _props2.cleanup, height = _props2.height;
            if (cleanup === true || cleanup.length === 0 && cleanupExceptions.length > 0) {
              cleanup = Object.keys(cleanups);
            }
            cleanup = cleanup.filter(function(key) {
              return !(cleanupExceptions.indexOf(key) > -1);
            });
            if (width && height === void 0) {
              height = width;
            }
            delete componentProps.cleanup;
            delete componentProps.height;
            var classes = (0, _classnames2.default)(_defineProperty({
              SVGInline: true,
              "SVGInline--cleaned": cleanup.length
            }, className, className));
            var svgClasses = classes.split(" ").join(classSuffix + " ") + classSuffix;
            var svgStr = SVGInline3.cleanupSvg(svg, cleanup).replace(/<svg/, '<svg class="' + svgClasses + '"' + (fill ? ' fill="' + fill + '"' : "") + (width || height ? ' style="' + (width ? "width: " + width + ";" : "") + (height ? "height: " + height + ";" : "") + '"' : ""));
            var match = void 0;
            if (accessibilityDesc) {
              match = /<svg(.|\n|\r\n)*?>/.exec(svgStr);
              var pos = match.index + match[0].length;
              svgStr = svgStr.substr(0, pos) + ("<desc>" + accessibilityDesc + "</desc>") + svgStr.substr(pos);
            }
            if (accessibilityLabel) {
              match = match || /<svg(.|\n|\r\n)*?>/.exec(svgStr);
              var _pos = match.index + match[0].length - 1;
              var id = "SVGInline-" + SVGInline3.idCount++ + "-title";
              svgStr = svgStr.substr(0, _pos) + (' role="img" aria-labelledby="' + id + '"') + svgStr.substr(_pos, 1) + ('<title id="' + id + '">' + accessibilityLabel + "</title>") + svgStr.substr(_pos + 1);
            }
            return _react2.default.createElement(component, _extends({}, componentProps, {
              className: classes,
              dangerouslySetInnerHTML: {
                __html: svgStr
              }
            }));
          }
        }]);
        return SVGInline3;
      }(_react.Component);
      SVGInline2.propTypes = {
        className: _propTypes2.default.string,
        classSuffix: _propTypes2.default.string,
        component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
        svg: _propTypes2.default.string.isRequired,
        fill: _propTypes2.default.string,
        cleanup: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.array]),
        cleanupExceptions: _propTypes2.default.array,
        width: _propTypes2.default.string,
        height: _propTypes2.default.string,
        accessibilityLabel: _propTypes2.default.string,
        accessibilityDesc: _propTypes2.default.string
      };
      SVGInline2.defaultProps = {
        component: "span",
        classSuffix: "-svg",
        cleanup: [],
        cleanupExceptions: []
      };
      SVGInline2.idCount = 0;
      SVGInline2.cleanupSvg = function(svg) {
        var cleanup = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return Object.keys(cleanups).filter(function(key) {
          return cleanup.indexOf(key) > -1;
        }).reduce(function(acc, key) {
          return acc.replace(cleanups[key], "");
        }, svg).trim();
      };
      exports.default = SVGInline2;
    }
  });

  // src/components/devices/devices.json
  var devices_default;
  var init_devices = __esm({
    "src/components/devices/devices.json"() {
      devices_default = [
        {
          name: "iPhone 8",
          deviceWidth: 179,
          deviceHeight: 361,
          borderlessWidth: 159,
          borderlessHeight: 281,
          cornerRadius: 24,
          cornerRadiusBorderless: 0,
          deviceSVG: "<svg width='179' height='361' viewBox='0 0 179 361' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M23.6632 1C19.9489 1.00562 16.2564 1.92316 12.9808 3.67548C9.90924 5.31853 7.23702 7.66861 5.21238 10.504C3.17809 13.3522 1.8203 16.6752 1.27718 20.1325C1.05142 21.5674 1 23.008 1 24.4566C1 25.6859 1 26.9144 1 28.1436C1 30.2945 1 32.4445 1 34.5953C1 37.5665 1 40.5384 1 43.5096C1 47.2343 1 50.9591 1 54.6847C1 59.0651 1 63.4455 1 67.8259C1 72.755 1 77.6842 1 82.6125C1 88.0165 1 93.4205 1 98.8245C1 104.637 1 110.448 1 116.26C1 122.373 1 128.486 1 134.599C1 140.901 1 147.204 1 153.506C1 159.955 1 166.402 1 172.851C1 179.311 1 185.772 1 192.232C1 198.661 1 205.091 1 211.52C1 217.785 1 224.05 1 230.316C1 236.373 1 242.429 1 248.486C1 254.224 1 259.96 1 265.698C1 271.009 1 276.319 1 281.63C1 286.448 1 291.265 1 296.083C1 300.332 1 304.582 1 308.832C1 312.407 1 315.983 1 319.559C1 322.363 1 325.167 1 327.971C1 329.934 1 331.899 1 333.862C1 334.886 1 335.909 1 336.933C1 339.101 1.23539 341.246 1.81226 343.341C2.71612 346.623 4.36476 349.685 6.60553 352.249C8.86478 354.835 11.7186 356.892 14.8849 358.222C17.721 359.413 20.7588 359.987 23.8311 359.992C25.4886 359.994 27.1453 359.992 28.8028 359.992C32.3933 359.992 35.9838 359.992 39.5735 359.992C44.6191 359.992 49.6646 359.992 54.7102 359.992C60.6982 359.992 66.6861 359.992 72.6741 359.992C79.0791 359.992 85.4832 359.992 91.8882 359.992C98.2529 359.992 104.619 359.992 110.983 359.992C116.783 359.992 122.584 359.992 128.384 359.992C133.103 359.992 137.82 359.992 142.539 359.992C145.699 359.992 148.86 359.992 152.019 359.992C153.282 359.992 154.545 360.013 155.808 359.987C159.5 359.91 163.153 358.919 166.378 357.12C169.398 355.436 172.017 353.057 173.982 350.213C176.003 347.289 177.318 343.893 177.795 340.371C177.972 339.064 178 337.756 178 336.441C178 335.178 178 333.914 178 332.651C178 330.476 178 328.301 178 326.125C178 323.115 178 320.103 178 317.092C178 313.34 178 309.589 178 305.836C178 301.449 178 297.061 178 292.674C178 287.727 178 282.779 178 277.832C178 272.394 178 266.954 178 261.516C178 255.691 178 249.866 178 244.04C178 237.94 178 231.838 178 225.738C178 219.407 178 213.076 178 206.745C178 200.294 178 193.842 178 187.392C178 180.932 178 174.471 178 168.012C178 161.608 178 155.205 178 148.802C178 142.521 178 136.241 178 129.96C178 123.914 178 117.868 178 111.822C178 106.118 178 100.414 178 94.7108C178 89.4161 178 84.1206 178 78.8259C178 74.0116 178 69.1974 178 64.3831C178 60.1578 178 55.9324 178 51.7071C178 48.1703 178 44.6336 178 41.0976C178 38.3137 178 35.5289 178 32.745C178 30.8159 178 28.8868 178 26.957C178 25.9735 178 24.9893 178 24.0059C178 21.7321 177.727 19.4833 177.086 17.2971C176.131 14.0335 174.435 10.9965 172.154 8.47366C169.835 5.90745 166.933 3.89 163.72 2.60931C160.976 1.51582 158.059 1.00482 155.109 1.00161C153.366 0.999999 151.623 1.00161 149.879 1.00161C146.208 1.00161 142.537 1.00161 138.866 1.00161C133.791 1.00161 128.715 1.00161 123.64 1.00161C117.648 1.00161 111.656 1.00161 105.663 1.00161C99.2291 1.00161 92.7953 1.00161 86.3614 1.00161C80.0087 1.00161 73.6559 1.00161 67.304 1.00161C61.5546 1.00161 55.8045 1.00161 50.0551 1.00161C45.3832 1.00161 40.7112 1.00161 36.0393 1.00161C32.9356 1.00161 29.832 1.00161 26.7283 1.00161C25.7063 0.999999 24.6852 1 23.6632 1Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/><path d='M101 337.999C100.994 335.534 100.229 333.104 98.8097 331.087C97.3941 329.076 95.3594 327.529 93.0435 326.7C90.7277 325.871 88.1744 325.775 85.8034 326.431C83.4309 327.088 81.2876 328.48 79.7253 330.383C78.1687 332.279 77.2206 334.642 77.0343 337.088C76.8463 339.55 77.4362 342.047 78.7043 344.166C79.9676 346.276 81.8807 347.971 84.1293 348.969C86.3715 349.964 88.8996 350.25 91.307 349.778C93.7226 349.304 95.9647 348.078 97.6672 346.299C99.3631 344.528 100.487 342.243 100.86 339.819C100.953 339.216 100.998 338.607 101 337.999Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/><path d='M74.1043 20.0138C72.6551 20.0412 72.6284 23.6364 74.0469 23.8835C75 23.9989 78.5 23.9989 78.5 23.9989C78.5 23.9989 92.1137 23.9989 99 23.9989C100.843 23.9989 102.944 24.0193 104.785 23.8862C105.95 23.8011 106.543 21.1202 105.337 20.1881C104.999 19.9273 104.582 20.0138 104.221 20.0138C103.292 20.0138 102.364 20.0138 101.435 20.0138C98.18 20.0138 94.9247 20.0138 91.6694 20.0138C85.9188 20.0138 80.1682 20.0138 74.4169 20.0138C74.3127 20.0138 74.2085 20.0138 74.1043 20.0138Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/>            <path d='M92 11.9911C91.9839 10.1713 89.6562 9.28941 88.4663 10.6896C87.284 12.0813 88.5146 14.2666 90.3161 13.9732C91.2804 13.8166 91.9915 12.9641 92 11.9911Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/><path d='M62 21.9834C61.9989 19.1337 58.2545 17.9029 56.5705 20.1934C55.0102 22.316 56.8723 25.3839 59.4745 24.9604C60.909 24.7273 61.9989 23.4388 62 21.9834Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/><path d='M168 41H11V320H168V41Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/></svg>",
          borderlessSVG: "<svg width='159' height='281' viewBox='0 0 159 281' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M158 1H1V280H158V1Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/></svg>",
          deviceSVGWhite: "<svg width='179' height='361' viewBox='0 0 179 361' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M23.6632 1C19.9489 1.00562 16.2564 1.92316 12.9808 3.67548C9.90924 5.31853 7.23702 7.66861 5.21238 10.504C3.17809 13.3522 1.8203 16.6752 1.27718 20.1325C1.05142 21.5674 1 23.008 1 24.4566C1 25.6859 1 26.9144 1 28.1436C1 30.2945 1 32.4445 1 34.5953C1 37.5665 1 40.5384 1 43.5096C1 47.2343 1 50.9591 1 54.6847C1 59.0651 1 63.4455 1 67.8259C1 72.755 1 77.6842 1 82.6125C1 88.0165 1 93.4205 1 98.8245C1 104.637 1 110.448 1 116.26C1 122.373 1 128.486 1 134.599C1 140.901 1 147.204 1 153.506C1 159.955 1 166.402 1 172.851C1 179.311 1 185.772 1 192.232C1 198.661 1 205.091 1 211.52C1 217.785 1 224.05 1 230.316C1 236.373 1 242.429 1 248.486C1 254.224 1 259.96 1 265.698C1 271.009 1 276.319 1 281.63C1 286.448 1 291.265 1 296.083C1 300.332 1 304.582 1 308.832C1 312.407 1 315.983 1 319.559C1 322.363 1 325.167 1 327.971C1 329.934 1 331.899 1 333.862C1 334.886 1 335.909 1 336.933C1 339.101 1.23539 341.246 1.81226 343.341C2.71612 346.623 4.36476 349.685 6.60553 352.249C8.86478 354.835 11.7186 356.892 14.8849 358.222C17.721 359.413 20.7588 359.987 23.8311 359.992C25.4886 359.994 27.1453 359.992 28.8028 359.992C32.3933 359.992 35.9838 359.992 39.5735 359.992C44.6191 359.992 49.6646 359.992 54.7102 359.992C60.6982 359.992 66.6861 359.992 72.6741 359.992C79.0791 359.992 85.4832 359.992 91.8882 359.992C98.2529 359.992 104.619 359.992 110.983 359.992C116.783 359.992 122.584 359.992 128.384 359.992C133.103 359.992 137.82 359.992 142.539 359.992C145.699 359.992 148.86 359.992 152.019 359.992C153.282 359.992 154.545 360.013 155.808 359.987C159.5 359.91 163.153 358.919 166.378 357.12C169.398 355.436 172.017 353.057 173.982 350.213C176.003 347.289 177.318 343.893 177.795 340.371C177.972 339.064 178 337.756 178 336.441C178 335.178 178 333.914 178 332.651C178 330.476 178 328.301 178 326.125C178 323.115 178 320.103 178 317.092C178 313.34 178 309.589 178 305.836C178 301.449 178 297.061 178 292.674C178 287.727 178 282.779 178 277.832C178 272.394 178 266.954 178 261.516C178 255.691 178 249.866 178 244.04C178 237.94 178 231.838 178 225.738C178 219.407 178 213.076 178 206.745C178 200.294 178 193.842 178 187.392C178 180.932 178 174.471 178 168.012C178 161.608 178 155.205 178 148.802C178 142.521 178 136.241 178 129.96C178 123.914 178 117.868 178 111.822C178 106.118 178 100.414 178 94.7108C178 89.4161 178 84.1206 178 78.8259C178 74.0116 178 69.1974 178 64.3831C178 60.1578 178 55.9324 178 51.7071C178 48.1703 178 44.6336 178 41.0976C178 38.3137 178 35.5289 178 32.745C178 30.8159 178 28.8868 178 26.957C178 25.9735 178 24.9893 178 24.0059C178 21.7321 177.727 19.4833 177.086 17.2971C176.131 14.0335 174.435 10.9965 172.154 8.47366C169.835 5.90745 166.933 3.89 163.72 2.60931C160.976 1.51582 158.059 1.00482 155.109 1.00161C153.366 0.999999 151.623 1.00161 149.879 1.00161C146.208 1.00161 142.537 1.00161 138.866 1.00161C133.791 1.00161 128.715 1.00161 123.64 1.00161C117.648 1.00161 111.656 1.00161 105.663 1.00161C99.2291 1.00161 92.7953 1.00161 86.3614 1.00161C80.0087 1.00161 73.6559 1.00161 67.304 1.00161C61.5546 1.00161 55.8045 1.00161 50.0551 1.00161C45.3832 1.00161 40.7112 1.00161 36.0393 1.00161C32.9356 1.00161 29.832 1.00161 26.7283 1.00161C25.7063 0.999999 24.6852 1 23.6632 1Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/><path d='M101 337.999C100.994 335.534 100.229 333.104 98.8097 331.087C97.3941 329.076 95.3594 327.529 93.0435 326.7C90.7277 325.871 88.1744 325.775 85.8034 326.431C83.4309 327.088 81.2876 328.48 79.7253 330.383C78.1687 332.279 77.2206 334.642 77.0343 337.088C76.8463 339.55 77.4362 342.047 78.7043 344.166C79.9676 346.276 81.8807 347.971 84.1293 348.969C86.3715 349.964 88.8996 350.25 91.307 349.778C93.7226 349.304 95.9647 348.078 97.6672 346.299C99.3631 344.528 100.487 342.243 100.86 339.819C100.953 339.216 100.998 338.607 101 337.999Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/><path d='M74.1043 20.0138C72.6551 20.0412 72.6284 23.6364 74.0469 23.8835C75 23.9989 78.5 23.9989 78.5 23.9989C78.5 23.9989 92.1137 23.9989 99 23.9989C100.843 23.9989 102.944 24.0193 104.785 23.8862C105.95 23.8011 106.543 21.1202 105.337 20.1881C104.999 19.9273 104.582 20.0138 104.221 20.0138C103.292 20.0138 102.364 20.0138 101.435 20.0138C98.18 20.0138 94.9247 20.0138 91.6694 20.0138C85.9188 20.0138 80.1682 20.0138 74.4169 20.0138C74.3127 20.0138 74.2085 20.0138 74.1043 20.0138Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/>            <path d='M92 11.9911C91.9839 10.1713 89.6562 9.28941 88.4663 10.6896C87.284 12.0813 88.5146 14.2666 90.3161 13.9732C91.2804 13.8166 91.9915 12.9641 92 11.9911Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/><path d='M62 21.9834C61.9989 19.1337 58.2545 17.9029 56.5705 20.1934C55.0102 22.316 56.8723 25.3839 59.4745 24.9604C60.909 24.7273 61.9989 23.4388 62 21.9834Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/><path d='M168 41H11V320H168V41Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/></svg>",
          borderlessSVGWhite: "<svg width='159' height='281' viewBox='0 0 159 281' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M158 1H1V280H158V1Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        },
        {
          name: "iPhone 11 Pro",
          deviceWidth: 211,
          deviceHeight: 421,
          borderlessWidth: 182,
          borderlessHeight: 392,
          cornerRadius: 35,
          cornerRadiusBorderless: 19,
          deviceSVG: "<svg width='212' height='422' viewBox='0 0 212 422' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M177.71 420.999C182.161 420.961 186.557 420.108 190.664 418.366C194.785 416.618 198.541 414.034 201.65 410.805C204.759 407.576 207.204 403.721 208.803 399.528C210.256 395.716 210.982 391.665 210.999 387.587C211.002 386.868 210.999 386.15 210.999 385.431C210.999 383.551 210.999 381.672 210.999 379.792C210.999 376.86 210.999 373.929 210.999 370.997C210.999 367.123 210.999 363.249 210.999 359.374C210.999 354.665 210.999 349.956 210.999 345.248C210.999 339.829 210.999 334.41 210.999 328.991C210.999 322.959 210.999 316.926 210.999 310.893C210.999 304.336 210.999 297.779 210.999 291.222C210.999 284.265 210.999 277.308 210.999 270.351C210.999 263.103 210.999 255.854 210.999 248.606C210.999 241.195 210.999 233.784 210.999 226.373C210.999 218.889 210.999 211.403 210.999 203.919C210.999 196.448 210.999 188.977 210.999 181.506C210.999 174.179 210.999 166.851 210.999 159.523C210.999 152.447 210.999 145.371 210.999 138.295C210.999 131.597 210.999 124.898 210.999 118.199C210.999 111.967 210.999 105.735 210.999 99.5026C210.999 93.8299 210.999 88.1578 210.999 82.4851C210.999 77.4981 210.999 72.5118 210.999 67.5248C210.999 63.3327 210.999 59.1406 210.999 54.9485C210.999 51.6675 210.999 48.3858 210.999 45.1048C210.999 42.8301 210.999 40.5547 210.999 38.2799C210.999 37.1174 210.999 35.9555 210.999 34.7929C210.999 32.1904 210.755 29.6049 210.184 27.0629C209.208 22.72 207.36 18.5824 204.776 14.9627C202.193 11.3431 198.884 8.25349 195.1 5.92844C191.313 3.60156 187.071 2.05072 182.681 1.38373C180.439 1.04327 178.195 1.00814 175.936 1.00814C172.851 1.00814 169.766 1.00814 166.681 1.00814C161.533 1.00814 156.386 1.00814 151.238 1.00814C144.68 1.00814 138.122 1.00814 131.565 1.00814C124.29 1.00814 117.015 1.00814 109.741 1.00814C102.319 1.00814 94.8978 1.00814 87.4765 1.00814C80.5985 1.00814 73.7206 1.00814 66.8433 1.00814C61.1614 1.00814 55.4796 1.00814 49.7978 1.00814C45.9643 1.00814 42.1307 1.00814 38.2972 1.00814C36.7786 1.00814 35.2588 0.986933 33.7403 1.01298C29.3144 1.08871 24.9193 2.05556 20.8677 3.84388C16.7848 5.64613 13.0799 8.28317 10.0258 11.5436C6.95909 14.8167 4.565 18.7144 3.02831 22.9338C1.68606 26.6207 1.01583 30.5142 1.00134 34.4367C0.998323 35.2006 1.00134 35.9646 1.00134 36.7285C1.00134 38.6495 1.00134 40.571 1.00134 42.492C1.00134 45.4611 1.00134 48.4295 1.00134 51.3985C1.00134 55.3065 1.00134 59.2139 1.00134 63.1219C1.00134 67.8599 1.00134 72.5978 1.00134 77.3358C1.00134 82.7643 1.00134 88.1929 1.00134 93.6209C1.00134 99.6904 1.00134 105.76 1.00134 111.829C1.00134 118.403 1.00134 124.977 1.00134 131.551C1.00134 138.521 1.00134 145.491 1.00134 152.461C1.00134 159.719 1.00134 166.976 1.00134 174.233C1.00134 181.629 1.00134 189.024 1.00134 196.42C1.00134 203.926 1.00134 211.431 1.00134 218.937C1.00134 226.404 1.00134 233.872 1.00134 241.339C1.00134 248.659 1.00134 255.98 1.00134 263.3C1.00134 270.364 1.00134 277.429 1.00134 284.494C1.00134 291.176 1.00134 297.859 1.00134 304.542C1.00134 310.754 1.00134 316.967 1.00134 323.179C1.00134 328.828 1.00134 334.477 1.00134 340.125C1.00134 345.084 1.00134 350.043 1.00134 355.001C1.00134 359.161 1.00134 363.321 1.00134 367.481C1.00134 370.727 1.00134 373.972 1.00134 377.217C1.00134 379.452 1.00134 381.687 1.00134 383.921C1.00134 385.04 1.00134 386.157 1.00134 387.276C1.00134 390.019 1.28513 392.746 1.92698 395.416C2.97216 399.766 4.89045 403.897 7.549 407.491C10.1846 411.053 13.523 414.073 17.3264 416.337C21.1376 418.606 25.4065 420.094 29.7974 420.693C31.9536 420.988 34.1086 421 36.2774 421C39.4522 421 42.6271 421 45.8013 421C51.0139 421 56.2259 421 61.4386 421C68.0364 421 74.6342 421 81.2319 421C88.5223 421 95.8132 421 103.104 421C110.516 421 117.929 421 125.342 421C132.187 421 139.032 421 145.876 421C151.5 421 157.125 421 162.749 421C166.5 421 170.251 421 174.002 421C174.185 420.999 177.71 420.999 177.71 420.999Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M116.496 19.0155C116.495 18.124 115.837 17.3252 114.926 17.1119C114.564 17.0271 114.177 17.055 113.806 17.055C112.818 17.055 111.829 17.055 110.84 17.055C107.911 17.055 104.981 17.055 102.051 17.055C100.505 17.055 98.8907 16.9264 97.3481 17.0624C95.2688 17.2456 94.7793 20.0287 96.7113 20.8167C97.0534 20.9561 97.402 20.9754 97.7681 20.976C98.5828 20.9777 99.3981 20.976 100.213 20.976C103.075 20.976 105.938 20.976 108.8 20.976C110.665 20.976 112.54 21.03 114.404 20.976C115.294 20.9504 116.092 20.4679 116.385 19.647C116.459 19.4445 116.496 19.23 116.496 19.0155Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M129 18.9985C128.999 17.7443 128.191 16.5947 127.009 16.172C125.828 15.7493 124.472 16.1242 123.676 17.0936C122.88 18.063 122.776 19.4657 123.421 20.5414C124.066 21.617 125.351 22.1882 126.582 21.9441C127.807 21.701 128.776 20.6893 128.966 19.4546C128.988 19.3033 129 19.1509 129 18.9985Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M143.204 29.9576C139.256 29.9576 135.309 29.9576 131.361 29.9576C124.808 29.9576 118.254 29.9576 111.7 29.9576C109.242 29.9576 106.785 29.9576 104.328 29.9576C98.6237 29.9576 92.9204 29.9576 87.2165 29.9576C81.5811 29.9576 75.9451 29.9576 70.3098 29.9576C67.0766 29.9576 63.7847 29.8367 60.9191 28.1366C59.2046 27.1196 57.8649 25.6065 56.9982 23.8153C56.5258 22.8378 56.1904 21.7977 55.9575 20.7387C55.7852 19.953 55.7355 19.143 55.5505 18.3622C55.3195 17.3865 54.7888 16.4745 53.7893 16.1496C53.4042 16.0246 53.0076 16.0106 52.6067 16.01C51.6988 16.0088 50.7909 16.01 49.883 16.01C44.5812 16.01 39.2788 15.9875 33.977 16.01C29.5157 16.0288 25.1612 17.6961 21.8608 20.7102C18.5476 23.7364 16.454 27.9782 16.0677 32.4519C15.9865 33.3906 16.001 34.3317 16.001 35.2729C16.001 36.7192 16.001 38.1655 16.001 39.6118C16.001 42.001 16.001 44.3903 16.001 46.7796C16.001 50.0237 16.001 53.2685 16.001 56.5127C16.001 60.5371 16.001 64.5615 16.001 68.5865C16.001 73.2946 16.001 78.0027 16.001 82.7108C16.001 87.9982 16.001 93.2849 16.001 98.5722C16.001 104.364 16.001 110.154 16.001 115.946C16.001 122.153 16.001 128.361 16.001 134.568C16.001 141.104 16.001 147.64 16.001 154.176C16.001 160.953 16.001 167.73 16.001 174.507C16.001 181.458 16.001 188.408 16.001 195.358C16.001 202.374 16.001 209.391 16.001 216.407C16.001 223.38 16.001 230.354 16.001 237.327C16.001 244.19 16.001 251.054 16.001 257.917C16.001 264.583 16.001 271.248 16.001 277.913C16.001 284.293 16.001 290.673 16.001 297.053C16.001 303.06 16.001 309.066 16.001 315.073C16.001 320.618 16.001 326.164 16.001 331.71C16.001 336.72 16.001 341.731 16.001 346.742C16.001 351.112 16.001 355.483 16.001 359.853C16.001 363.485 16.001 367.118 16.001 370.75C16.001 373.571 16.001 376.391 16.001 379.211C16.001 381.132 16.001 383.052 16.001 384.973C16.001 385.906 15.9998 386.839 16.001 387.772C16.0047 390.662 16.6166 393.5 17.9181 396.09C19.9413 400.117 23.4764 403.29 27.6957 404.864C30.0834 405.754 32.5402 405.998 35.062 405.998C37.5485 405.998 40.0351 405.998 42.5216 405.998C46.9192 405.998 51.3161 405.998 55.7137 405.998C61.4946 405.998 67.2755 405.998 73.0565 405.998C79.6938 405.998 86.331 405.998 92.9683 405.998C99.9349 405.998 106.901 405.998 113.868 405.998C120.636 405.998 127.405 405.998 134.174 405.998C140.232 405.998 146.292 405.998 152.35 405.998C157.148 405.998 161.945 405.998 166.743 405.998C169.742 405.998 172.741 405.998 175.74 405.998C177.539 405.998 179.331 406.042 181.114 405.731C185.532 404.96 189.573 402.506 192.299 398.941C194.699 395.8 195.984 391.927 195.999 387.979C196.001 387.305 195.999 386.631 195.999 385.957C195.999 384.267 195.999 382.578 195.999 380.888C195.999 378.272 195.999 375.656 195.999 373.039C195.999 369.596 195.999 366.153 195.999 362.709C195.999 358.52 195.999 354.331 195.999 350.142C195.999 345.295 195.999 340.448 195.999 335.601C195.999 330.183 195.999 324.765 195.999 319.348C195.999 313.448 195.999 307.547 195.999 301.648C195.999 295.352 195.999 289.057 195.999 282.762C195.999 276.14 195.999 269.518 195.999 262.895C195.999 256.052 195.999 249.21 195.999 242.367C195.999 235.412 195.999 228.458 195.999 221.502C195.999 214.504 195.999 207.505 195.999 200.507C195.999 193.552 195.999 186.597 195.999 179.642C195.999 172.819 195.999 165.996 195.999 159.172C195.999 152.568 195.999 145.964 195.999 139.36C195.999 133.045 195.999 126.73 195.999 120.415C195.999 114.497 195.999 108.579 195.999 102.662C195.999 97.2443 195.999 91.8264 195.999 86.4092C195.999 81.562 195.999 76.7149 195.999 71.8677C195.999 67.6788 195.999 63.4898 195.999 59.3003C195.999 55.8569 195.999 52.4136 195.999 48.9703C195.999 46.3606 195.999 43.7503 195.999 41.1407C195.999 39.4521 195.999 37.7629 195.999 36.0743C195.999 35.3937 196.001 34.713 195.999 34.033C195.984 30.0839 194.699 26.2107 192.299 23.0697C189.573 19.5037 185.532 17.0507 181.114 16.2796C179.458 15.9906 177.8 16.0124 176.128 16.0124C172.978 16.0124 169.827 16.0124 166.677 16.0124C164.244 16.0124 161.812 16.0069 159.379 16.0124C158.494 16.0142 157.664 16.2067 157.089 16.9341C156.239 18.0107 156.311 19.5438 156.024 20.8195C155.571 22.8347 154.726 24.7856 153.322 26.3218C152.068 27.694 150.439 28.6436 148.676 29.2041C147.79 29.4858 146.876 29.6746 145.954 29.793C145.715 29.8216 143.204 30.0232 143.204 29.9576Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='182' height='392' viewBox='0 0 182 392' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M128.204 14.9576C124.256 14.9576 120.309 14.9576 116.361 14.9576C109.808 14.9576 103.254 14.9576 96.6999 14.9576C94.2425 14.9576 91.785 14.9576 89.3276 14.9576C83.6237 14.9576 77.9204 14.9576 72.2165 14.9576C66.5811 14.9576 60.9451 14.9576 55.3098 14.9576C52.0766 14.9576 48.7847 14.8367 45.9191 13.1366C44.2046 12.1196 42.8649 10.6065 41.9982 8.81532C41.5258 7.83775 41.1904 6.79765 40.9575 5.73872C40.7852 4.95303 40.7355 4.14305 40.5505 3.36221C40.3195 2.38647 39.7888 1.47448 38.7893 1.14964C38.4042 1.02456 38.0076 1.01059 37.6067 1.00998C36.6988 1.00877 35.7909 1.00998 34.883 1.00998C29.5812 1.00998 24.2788 0.987519 18.977 1.00998C14.5157 1.02881 10.1612 2.69613 6.86078 5.71018C3.5476 8.73638 1.45405 12.9782 1.06772 17.4519C0.986453 18.3906 1.00101 19.3317 1.00101 20.2729C1.00101 21.7192 1.00101 23.1655 1.00101 24.6118C1.00101 27.001 1.00101 29.3903 1.00101 31.7796C1.00101 35.0237 1.00101 38.2685 1.00101 41.5127C1.00101 45.5371 1.00101 49.5615 1.00101 53.5865C1.00101 58.2946 1.00101 63.0027 1.00101 67.7108C1.00101 72.9982 1.00101 78.2849 1.00101 83.5722C1.00101 89.3635 1.00101 95.1542 1.00101 100.946C1.00101 107.153 1.00101 113.361 1.00101 119.568C1.00101 126.104 1.00101 132.64 1.00101 139.176C1.00101 145.953 1.00101 152.73 1.00101 159.507C1.00101 166.458 1.00101 173.408 1.00101 180.358C1.00101 187.374 1.00101 194.391 1.00101 201.407C1.00101 208.38 1.00101 215.354 1.00101 222.327C1.00101 229.19 1.00101 236.054 1.00101 242.917C1.00101 249.583 1.00101 256.248 1.00101 262.913C1.00101 269.293 1.00101 275.673 1.00101 282.053C1.00101 288.06 1.00101 294.066 1.00101 300.073C1.00101 305.618 1.00101 311.164 1.00101 316.71C1.00101 321.72 1.00101 326.731 1.00101 331.742C1.00101 336.112 1.00101 340.483 1.00101 344.853C1.00101 348.485 1.00101 352.118 1.00101 355.75C1.00101 358.571 1.00101 361.391 1.00101 364.211C1.00101 366.132 1.00101 368.052 1.00101 369.973C1.00101 370.906 0.9998 371.839 1.00101 372.772C1.00465 375.662 1.61658 378.5 2.91808 381.09C4.94129 385.117 8.47644 388.29 12.6957 389.864C15.0834 390.754 17.5402 390.998 20.062 390.998C22.5485 390.998 25.0351 390.998 27.5216 390.998C31.9192 390.998 36.3161 390.998 40.7137 390.998C46.4946 390.998 52.2755 390.998 58.0565 390.998C64.6938 390.998 71.331 390.998 77.9683 390.998C84.9349 390.998 91.9015 390.998 98.8681 390.998C105.636 390.998 112.405 390.998 119.174 390.998C125.232 390.998 131.292 390.998 137.35 390.998C142.148 390.998 146.945 390.998 151.743 390.998C154.742 390.998 157.741 390.998 160.74 390.998C162.539 390.998 164.331 391.042 166.114 390.731C170.532 389.96 174.573 387.506 177.299 383.941C179.699 380.8 180.984 376.927 180.999 372.979C181.001 372.305 180.999 371.631 180.999 370.957C180.999 369.267 180.999 367.578 180.999 365.888C180.999 363.272 180.999 360.656 180.999 358.039C180.999 354.596 180.999 351.153 180.999 347.709C180.999 343.52 180.999 339.331 180.999 335.142C180.999 330.295 180.999 325.448 180.999 320.601C180.999 315.183 180.999 309.765 180.999 304.348C180.999 298.448 180.999 292.547 180.999 286.648C180.999 280.352 180.999 274.057 180.999 267.762C180.999 261.14 180.999 254.518 180.999 247.895C180.999 241.052 180.999 234.21 180.999 227.367C180.999 220.412 180.999 213.458 180.999 206.502C180.999 199.504 180.999 192.505 180.999 185.507C180.999 178.552 180.999 171.597 180.999 164.642C180.999 157.819 180.999 150.996 180.999 144.172C180.999 137.568 180.999 130.964 180.999 124.36C180.999 118.045 180.999 111.73 180.999 105.415C180.999 99.4974 180.999 93.5792 180.999 87.6616C180.999 82.2443 180.999 76.8264 180.999 71.4092C180.999 66.562 180.999 61.7149 180.999 56.8677C180.999 52.6788 180.999 48.4898 180.999 44.3003C180.999 40.8569 180.999 37.4136 180.999 33.9703C180.999 31.3606 180.999 28.7503 180.999 26.1407C180.999 24.4521 180.999 22.7629 180.999 21.0743C180.999 20.3937 181.001 19.713 180.999 19.033C180.984 15.0839 179.699 11.2107 177.299 8.0697C174.573 4.50371 170.532 2.0507 166.114 1.27957C164.458 0.990555 162.8 1.01241 161.128 1.01241C157.978 1.01241 154.827 1.01241 151.677 1.01241C149.244 1.01241 146.812 1.00695 144.379 1.01241C143.494 1.01423 142.664 1.20671 142.089 1.93412C141.239 3.01065 141.311 4.54379 141.024 5.81948C140.571 7.83472 139.726 9.7856 138.322 11.3218C137.068 12.694 135.439 13.6436 133.676 14.2041C132.79 14.4858 131.876 14.6746 130.954 14.793C130.715 14.8216 128.204 15.0232 128.204 14.9576Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='212' height='422' viewBox='0 0 212 422' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M177.71 420.999C182.161 420.961 186.557 420.108 190.664 418.366C194.785 416.618 198.541 414.034 201.65 410.805C204.759 407.576 207.204 403.721 208.803 399.528C210.256 395.716 210.982 391.665 210.999 387.587C211.002 386.868 210.999 386.15 210.999 385.431C210.999 383.551 210.999 381.672 210.999 379.792C210.999 376.86 210.999 373.929 210.999 370.997C210.999 367.123 210.999 363.249 210.999 359.374C210.999 354.665 210.999 349.956 210.999 345.248C210.999 339.829 210.999 334.41 210.999 328.991C210.999 322.959 210.999 316.926 210.999 310.893C210.999 304.336 210.999 297.779 210.999 291.222C210.999 284.265 210.999 277.308 210.999 270.351C210.999 263.103 210.999 255.854 210.999 248.606C210.999 241.195 210.999 233.784 210.999 226.373C210.999 218.889 210.999 211.403 210.999 203.919C210.999 196.448 210.999 188.977 210.999 181.506C210.999 174.179 210.999 166.851 210.999 159.523C210.999 152.447 210.999 145.371 210.999 138.295C210.999 131.597 210.999 124.898 210.999 118.199C210.999 111.967 210.999 105.735 210.999 99.5026C210.999 93.8299 210.999 88.1578 210.999 82.4851C210.999 77.4981 210.999 72.5118 210.999 67.5248C210.999 63.3327 210.999 59.1406 210.999 54.9485C210.999 51.6675 210.999 48.3858 210.999 45.1048C210.999 42.8301 210.999 40.5547 210.999 38.2799C210.999 37.1174 210.999 35.9555 210.999 34.7929C210.999 32.1904 210.755 29.6049 210.184 27.0629C209.208 22.72 207.36 18.5824 204.776 14.9627C202.193 11.3431 198.884 8.25349 195.1 5.92844C191.313 3.60156 187.071 2.05072 182.681 1.38373C180.439 1.04327 178.195 1.00814 175.936 1.00814C172.851 1.00814 169.766 1.00814 166.681 1.00814C161.533 1.00814 156.386 1.00814 151.238 1.00814C144.68 1.00814 138.122 1.00814 131.565 1.00814C124.29 1.00814 117.015 1.00814 109.741 1.00814C102.319 1.00814 94.8978 1.00814 87.4765 1.00814C80.5985 1.00814 73.7206 1.00814 66.8433 1.00814C61.1614 1.00814 55.4796 1.00814 49.7978 1.00814C45.9643 1.00814 42.1307 1.00814 38.2972 1.00814C36.7786 1.00814 35.2588 0.986933 33.7403 1.01298C29.3144 1.08871 24.9193 2.05556 20.8677 3.84388C16.7848 5.64613 13.0799 8.28317 10.0258 11.5436C6.95909 14.8167 4.565 18.7144 3.02831 22.9338C1.68606 26.6207 1.01583 30.5142 1.00134 34.4367C0.998323 35.2006 1.00134 35.9646 1.00134 36.7285C1.00134 38.6495 1.00134 40.571 1.00134 42.492C1.00134 45.4611 1.00134 48.4295 1.00134 51.3985C1.00134 55.3065 1.00134 59.2139 1.00134 63.1219C1.00134 67.8599 1.00134 72.5978 1.00134 77.3358C1.00134 82.7643 1.00134 88.1929 1.00134 93.6209C1.00134 99.6904 1.00134 105.76 1.00134 111.829C1.00134 118.403 1.00134 124.977 1.00134 131.551C1.00134 138.521 1.00134 145.491 1.00134 152.461C1.00134 159.719 1.00134 166.976 1.00134 174.233C1.00134 181.629 1.00134 189.024 1.00134 196.42C1.00134 203.926 1.00134 211.431 1.00134 218.937C1.00134 226.404 1.00134 233.872 1.00134 241.339C1.00134 248.659 1.00134 255.98 1.00134 263.3C1.00134 270.364 1.00134 277.429 1.00134 284.494C1.00134 291.176 1.00134 297.859 1.00134 304.542C1.00134 310.754 1.00134 316.967 1.00134 323.179C1.00134 328.828 1.00134 334.477 1.00134 340.125C1.00134 345.084 1.00134 350.043 1.00134 355.001C1.00134 359.161 1.00134 363.321 1.00134 367.481C1.00134 370.727 1.00134 373.972 1.00134 377.217C1.00134 379.452 1.00134 381.687 1.00134 383.921C1.00134 385.04 1.00134 386.157 1.00134 387.276C1.00134 390.019 1.28513 392.746 1.92698 395.416C2.97216 399.766 4.89045 403.897 7.549 407.491C10.1846 411.053 13.523 414.073 17.3264 416.337C21.1376 418.606 25.4065 420.094 29.7974 420.693C31.9536 420.988 34.1086 421 36.2774 421C39.4522 421 42.6271 421 45.8013 421C51.0139 421 56.2259 421 61.4386 421C68.0364 421 74.6342 421 81.2319 421C88.5223 421 95.8132 421 103.104 421C110.516 421 117.929 421 125.342 421C132.187 421 139.032 421 145.876 421C151.5 421 157.125 421 162.749 421C166.5 421 170.251 421 174.002 421C174.185 420.999 177.71 420.999 177.71 420.999Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M116.496 19.0155C116.495 18.124 115.837 17.3252 114.926 17.1119C114.564 17.0271 114.177 17.055 113.806 17.055C112.818 17.055 111.829 17.055 110.84 17.055C107.911 17.055 104.981 17.055 102.051 17.055C100.505 17.055 98.8907 16.9264 97.3481 17.0624C95.2688 17.2456 94.7793 20.0287 96.7113 20.8167C97.0534 20.9561 97.402 20.9754 97.7681 20.976C98.5828 20.9777 99.3981 20.976 100.213 20.976C103.075 20.976 105.938 20.976 108.8 20.976C110.665 20.976 112.54 21.03 114.404 20.976C115.294 20.9504 116.092 20.4679 116.385 19.647C116.459 19.4445 116.496 19.23 116.496 19.0155Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M129 18.9985C128.999 17.7443 128.191 16.5947 127.009 16.172C125.828 15.7493 124.472 16.1242 123.676 17.0936C122.88 18.063 122.776 19.4657 123.421 20.5414C124.066 21.617 125.351 22.1882 126.582 21.9441C127.807 21.701 128.776 20.6893 128.966 19.4546C128.988 19.3033 129 19.1509 129 18.9985Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M143.204 29.9576C139.256 29.9576 135.309 29.9576 131.361 29.9576C124.808 29.9576 118.254 29.9576 111.7 29.9576C109.242 29.9576 106.785 29.9576 104.328 29.9576C98.6237 29.9576 92.9204 29.9576 87.2165 29.9576C81.5811 29.9576 75.9451 29.9576 70.3098 29.9576C67.0766 29.9576 63.7847 29.8367 60.9191 28.1366C59.2046 27.1196 57.8649 25.6065 56.9982 23.8153C56.5258 22.8378 56.1904 21.7977 55.9575 20.7387C55.7852 19.953 55.7355 19.143 55.5505 18.3622C55.3195 17.3865 54.7888 16.4745 53.7893 16.1496C53.4042 16.0246 53.0076 16.0106 52.6067 16.01C51.6988 16.0088 50.7909 16.01 49.883 16.01C44.5812 16.01 39.2788 15.9875 33.977 16.01C29.5157 16.0288 25.1612 17.6961 21.8608 20.7102C18.5476 23.7364 16.454 27.9782 16.0677 32.4519C15.9865 33.3906 16.001 34.3317 16.001 35.2729C16.001 36.7192 16.001 38.1655 16.001 39.6118C16.001 42.001 16.001 44.3903 16.001 46.7796C16.001 50.0237 16.001 53.2685 16.001 56.5127C16.001 60.5371 16.001 64.5615 16.001 68.5865C16.001 73.2946 16.001 78.0027 16.001 82.7108C16.001 87.9982 16.001 93.2849 16.001 98.5722C16.001 104.364 16.001 110.154 16.001 115.946C16.001 122.153 16.001 128.361 16.001 134.568C16.001 141.104 16.001 147.64 16.001 154.176C16.001 160.953 16.001 167.73 16.001 174.507C16.001 181.458 16.001 188.408 16.001 195.358C16.001 202.374 16.001 209.391 16.001 216.407C16.001 223.38 16.001 230.354 16.001 237.327C16.001 244.19 16.001 251.054 16.001 257.917C16.001 264.583 16.001 271.248 16.001 277.913C16.001 284.293 16.001 290.673 16.001 297.053C16.001 303.06 16.001 309.066 16.001 315.073C16.001 320.618 16.001 326.164 16.001 331.71C16.001 336.72 16.001 341.731 16.001 346.742C16.001 351.112 16.001 355.483 16.001 359.853C16.001 363.485 16.001 367.118 16.001 370.75C16.001 373.571 16.001 376.391 16.001 379.211C16.001 381.132 16.001 383.052 16.001 384.973C16.001 385.906 15.9998 386.839 16.001 387.772C16.0047 390.662 16.6166 393.5 17.9181 396.09C19.9413 400.117 23.4764 403.29 27.6957 404.864C30.0834 405.754 32.5402 405.998 35.062 405.998C37.5485 405.998 40.0351 405.998 42.5216 405.998C46.9192 405.998 51.3161 405.998 55.7137 405.998C61.4946 405.998 67.2755 405.998 73.0565 405.998C79.6938 405.998 86.331 405.998 92.9683 405.998C99.9349 405.998 106.901 405.998 113.868 405.998C120.636 405.998 127.405 405.998 134.174 405.998C140.232 405.998 146.292 405.998 152.35 405.998C157.148 405.998 161.945 405.998 166.743 405.998C169.742 405.998 172.741 405.998 175.74 405.998C177.539 405.998 179.331 406.042 181.114 405.731C185.532 404.96 189.573 402.506 192.299 398.941C194.699 395.8 195.984 391.927 195.999 387.979C196.001 387.305 195.999 386.631 195.999 385.957C195.999 384.267 195.999 382.578 195.999 380.888C195.999 378.272 195.999 375.656 195.999 373.039C195.999 369.596 195.999 366.153 195.999 362.709C195.999 358.52 195.999 354.331 195.999 350.142C195.999 345.295 195.999 340.448 195.999 335.601C195.999 330.183 195.999 324.765 195.999 319.348C195.999 313.448 195.999 307.547 195.999 301.648C195.999 295.352 195.999 289.057 195.999 282.762C195.999 276.14 195.999 269.518 195.999 262.895C195.999 256.052 195.999 249.21 195.999 242.367C195.999 235.412 195.999 228.458 195.999 221.502C195.999 214.504 195.999 207.505 195.999 200.507C195.999 193.552 195.999 186.597 195.999 179.642C195.999 172.819 195.999 165.996 195.999 159.172C195.999 152.568 195.999 145.964 195.999 139.36C195.999 133.045 195.999 126.73 195.999 120.415C195.999 114.497 195.999 108.579 195.999 102.662C195.999 97.2443 195.999 91.8264 195.999 86.4092C195.999 81.562 195.999 76.7149 195.999 71.8677C195.999 67.6788 195.999 63.4898 195.999 59.3003C195.999 55.8569 195.999 52.4136 195.999 48.9703C195.999 46.3606 195.999 43.7503 195.999 41.1407C195.999 39.4521 195.999 37.7629 195.999 36.0743C195.999 35.3937 196.001 34.713 195.999 34.033C195.984 30.0839 194.699 26.2107 192.299 23.0697C189.573 19.5037 185.532 17.0507 181.114 16.2796C179.458 15.9906 177.8 16.0124 176.128 16.0124C172.978 16.0124 169.827 16.0124 166.677 16.0124C164.244 16.0124 161.812 16.0069 159.379 16.0124C158.494 16.0142 157.664 16.2067 157.089 16.9341C156.239 18.0107 156.311 19.5438 156.024 20.8195C155.571 22.8347 154.726 24.7856 153.322 26.3218C152.068 27.694 150.439 28.6436 148.676 29.2041C147.79 29.4858 146.876 29.6746 145.954 29.793C145.715 29.8216 143.204 30.0232 143.204 29.9576Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='182' height='392' viewBox='0 0 182 392' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M128.204 14.9576C124.256 14.9576 120.309 14.9576 116.361 14.9576C109.808 14.9576 103.254 14.9576 96.6999 14.9576C94.2425 14.9576 91.785 14.9576 89.3276 14.9576C83.6237 14.9576 77.9204 14.9576 72.2165 14.9576C66.5811 14.9576 60.9451 14.9576 55.3098 14.9576C52.0766 14.9576 48.7847 14.8367 45.9191 13.1366C44.2046 12.1196 42.8649 10.6065 41.9982 8.81532C41.5258 7.83775 41.1904 6.79765 40.9575 5.73872C40.7852 4.95303 40.7355 4.14305 40.5505 3.36221C40.3195 2.38647 39.7888 1.47448 38.7893 1.14964C38.4042 1.02456 38.0076 1.01059 37.6067 1.00998C36.6988 1.00877 35.7909 1.00998 34.883 1.00998C29.5812 1.00998 24.2788 0.987519 18.977 1.00998C14.5157 1.02881 10.1612 2.69613 6.86078 5.71018C3.5476 8.73638 1.45405 12.9782 1.06772 17.4519C0.986453 18.3906 1.00101 19.3317 1.00101 20.2729C1.00101 21.7192 1.00101 23.1655 1.00101 24.6118C1.00101 27.001 1.00101 29.3903 1.00101 31.7796C1.00101 35.0237 1.00101 38.2685 1.00101 41.5127C1.00101 45.5371 1.00101 49.5615 1.00101 53.5865C1.00101 58.2946 1.00101 63.0027 1.00101 67.7108C1.00101 72.9982 1.00101 78.2849 1.00101 83.5722C1.00101 89.3635 1.00101 95.1542 1.00101 100.946C1.00101 107.153 1.00101 113.361 1.00101 119.568C1.00101 126.104 1.00101 132.64 1.00101 139.176C1.00101 145.953 1.00101 152.73 1.00101 159.507C1.00101 166.458 1.00101 173.408 1.00101 180.358C1.00101 187.374 1.00101 194.391 1.00101 201.407C1.00101 208.38 1.00101 215.354 1.00101 222.327C1.00101 229.19 1.00101 236.054 1.00101 242.917C1.00101 249.583 1.00101 256.248 1.00101 262.913C1.00101 269.293 1.00101 275.673 1.00101 282.053C1.00101 288.06 1.00101 294.066 1.00101 300.073C1.00101 305.618 1.00101 311.164 1.00101 316.71C1.00101 321.72 1.00101 326.731 1.00101 331.742C1.00101 336.112 1.00101 340.483 1.00101 344.853C1.00101 348.485 1.00101 352.118 1.00101 355.75C1.00101 358.571 1.00101 361.391 1.00101 364.211C1.00101 366.132 1.00101 368.052 1.00101 369.973C1.00101 370.906 0.9998 371.839 1.00101 372.772C1.00465 375.662 1.61658 378.5 2.91808 381.09C4.94129 385.117 8.47644 388.29 12.6957 389.864C15.0834 390.754 17.5402 390.998 20.062 390.998C22.5485 390.998 25.0351 390.998 27.5216 390.998C31.9192 390.998 36.3161 390.998 40.7137 390.998C46.4946 390.998 52.2755 390.998 58.0565 390.998C64.6938 390.998 71.331 390.998 77.9683 390.998C84.9349 390.998 91.9015 390.998 98.8681 390.998C105.636 390.998 112.405 390.998 119.174 390.998C125.232 390.998 131.292 390.998 137.35 390.998C142.148 390.998 146.945 390.998 151.743 390.998C154.742 390.998 157.741 390.998 160.74 390.998C162.539 390.998 164.331 391.042 166.114 390.731C170.532 389.96 174.573 387.506 177.299 383.941C179.699 380.8 180.984 376.927 180.999 372.979C181.001 372.305 180.999 371.631 180.999 370.957C180.999 369.267 180.999 367.578 180.999 365.888C180.999 363.272 180.999 360.656 180.999 358.039C180.999 354.596 180.999 351.153 180.999 347.709C180.999 343.52 180.999 339.331 180.999 335.142C180.999 330.295 180.999 325.448 180.999 320.601C180.999 315.183 180.999 309.765 180.999 304.348C180.999 298.448 180.999 292.547 180.999 286.648C180.999 280.352 180.999 274.057 180.999 267.762C180.999 261.14 180.999 254.518 180.999 247.895C180.999 241.052 180.999 234.21 180.999 227.367C180.999 220.412 180.999 213.458 180.999 206.502C180.999 199.504 180.999 192.505 180.999 185.507C180.999 178.552 180.999 171.597 180.999 164.642C180.999 157.819 180.999 150.996 180.999 144.172C180.999 137.568 180.999 130.964 180.999 124.36C180.999 118.045 180.999 111.73 180.999 105.415C180.999 99.4974 180.999 93.5792 180.999 87.6616C180.999 82.2443 180.999 76.8264 180.999 71.4092C180.999 66.562 180.999 61.7149 180.999 56.8677C180.999 52.6788 180.999 48.4898 180.999 44.3003C180.999 40.8569 180.999 37.4136 180.999 33.9703C180.999 31.3606 180.999 28.7503 180.999 26.1407C180.999 24.4521 180.999 22.7629 180.999 21.0743C180.999 20.3937 181.001 19.713 180.999 19.033C180.984 15.0839 179.699 11.2107 177.299 8.0697C174.573 4.50371 170.532 2.0507 166.114 1.27957C164.458 0.990555 162.8 1.01241 161.128 1.01241C157.978 1.01241 154.827 1.01241 151.677 1.01241C149.244 1.01241 146.812 1.00695 144.379 1.01241C143.494 1.01423 142.664 1.20671 142.089 1.93412C141.239 3.01065 141.311 4.54379 141.024 5.81948C140.571 7.83472 139.726 9.7856 138.322 11.3218C137.068 12.694 135.439 13.6436 133.676 14.2041C132.79 14.4858 131.876 14.6746 130.954 14.793C130.715 14.8216 128.204 15.0232 128.204 14.9576Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "iPhone 11",
          deviceWidth: 199,
          deviceHeight: 402,
          borderlessWidth: 171,
          borderlessHeight: 374,
          cornerRadius: 33,
          cornerRadiusBorderless: 18,
          deviceSVG: "<svg width='201' height='404' viewBox='0 0 201 404' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M168.454 403C172.812 402.976 177.133 402.095 181.127 400.338C185.023 398.624 188.559 396.12 191.469 393.011C194.361 389.921 196.616 386.251 198.073 382.276C199.352 378.783 199.991 375.08 199.999 371.361C200.001 370.597 199.999 369.832 199.999 369.067C199.999 367.22 199.999 365.373 199.999 363.526C199.999 360.696 199.999 357.866 199.999 355.037C199.999 351.326 199.999 347.615 199.999 343.904C199.999 339.413 199.999 334.922 199.999 330.431C199.999 325.231 199.999 320.032 199.999 314.833C199.999 309.081 199.999 303.33 199.999 297.579C199.999 291.351 199.999 285.123 199.999 278.895C199.999 272.292 199.999 265.688 199.999 259.085C199.999 252.17 199.999 245.255 199.999 238.341C199.999 231.288 199.999 224.236 199.999 217.184C199.999 210.061 199.999 202.937 199.999 195.813C199.999 188.719 199.999 181.624 199.999 174.53C199.999 167.566 199.999 160.602 199.999 153.637C199.999 146.87 199.999 140.102 199.999 133.335C199.999 126.936 199.999 120.538 199.999 114.139C199.999 108.175 199.999 102.211 199.999 96.2461C199.999 90.8171 199.999 85.3875 199.999 79.9584C199.999 75.1419 199.999 70.3253 199.999 65.5087C199.999 61.4572 199.999 57.4051 199.999 53.3536C199.999 50.1408 199.999 46.9276 199.999 43.7148C199.999 41.4416 199.999 39.1685 199.999 36.8953C199.999 35.663 199.999 34.4307 199.999 33.1984C199.999 31.0564 199.857 28.9268 199.465 26.8169C198.705 22.7164 197.121 18.7786 194.841 15.2894C192.475 11.668 189.357 8.54476 185.741 6.17476C182.257 3.89145 178.326 2.3045 174.232 1.54284C171.839 1.09755 169.438 1.00804 167.015 1.00804C164.187 1.00804 161.359 1.00804 158.532 1.00804C153.708 1.00804 148.885 1.00804 144.061 1.00804C137.867 1.00804 131.672 1.00804 125.478 1.00804C118.537 1.00804 111.596 1.00804 104.656 1.00804C97.5566 1.00804 90.4581 1.00804 83.359 1.00804C76.8039 1.00804 70.2489 1.00804 63.6938 1.00804C58.2696 1.00804 52.8454 1.00804 47.4217 1.00804C43.7533 1.00804 40.0849 1.00804 36.4164 1.00804C34.9349 1.00804 33.4511 0.986644 31.9696 1.01367C27.6711 1.09248 23.3996 2.06018 19.4862 3.84303C15.5901 5.618 12.0617 8.19292 9.18739 11.3702C6.35641 14.499 4.16896 18.183 2.77229 22.1664C1.58977 25.5384 1.00806 29.0968 1.00075 32.6687C0.999063 33.4754 1.00075 34.2821 1.00075 35.0888C1.00075 36.9741 1.00075 38.8588 1.00075 40.7442C1.00075 43.6079 1.00075 46.4716 1.00075 49.3358C1.00075 53.0772 1.00075 56.8185 1.00075 60.5604C1.00075 65.104 1.00075 69.6481 1.00075 74.1916C1.00075 79.3882 1.00075 84.5853 1.00075 89.7818C1.00075 95.5526 1.00075 101.323 1.00075 107.094C1.00075 113.338 1.00075 119.581 1.00075 125.825C1.00075 132.458 1.00075 139.091 1.00075 145.725C1.00075 152.63 1.00075 159.535 1.00075 166.44C1.00075 173.496 1.00075 180.553 1.00075 187.609C1.00075 194.734 1.00075 201.858 1.00075 208.982C1.00075 216.074 1.00075 223.165 1.00075 230.257C1.00075 237.251 1.00075 244.244 1.00075 251.238C1.00075 257.959 1.00075 264.68 1.00075 271.4C1.00075 277.784 1.00075 284.168 1.00075 290.553C1.00075 296.499 1.00075 302.445 1.00075 308.392C1.00075 313.813 1.00075 319.234 1.00075 324.655C1.00075 329.433 1.00075 334.21 1.00075 338.987C1.00075 343.01 1.00075 347.033 1.00075 351.055C1.00075 354.235 1.00075 357.415 1.00075 360.596C1.00075 362.832 1.00075 365.069 1.00075 367.305C1.00075 368.5 1.00075 369.696 1.00075 370.891C1.00075 373.199 1.1806 375.493 1.64597 377.757C2.47947 381.812 4.11051 385.686 6.42554 389.117C8.83724 392.69 11.9897 395.754 15.6238 398.067C19.1568 400.317 23.1299 401.844 27.2558 402.551C29.5511 402.944 31.8516 402.999 34.17 402.999C37.0825 402.999 39.9949 402.999 42.9074 402.999C47.7927 402.999 52.6773 402.999 57.5626 402.999C63.7956 402.999 70.0286 402.999 76.2616 402.999C83.2556 402.999 90.249 402.999 97.243 402.999C104.297 402.999 111.351 402.999 118.405 402.999C124.93 402.999 131.454 402.999 137.978 402.999C143.349 402.999 148.719 402.999 154.09 402.999C157.688 402.999 161.287 402.999 164.885 402.999C166.074 403 167.264 403 168.454 403Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M111.099 17.9015C111.098 16.9919 110.452 16.1801 109.565 15.9776C109.214 15.8977 108.836 15.9281 108.48 15.9281C107.541 15.9281 106.602 15.9281 105.663 15.9281C102.893 15.9281 100.125 15.9281 97.3552 15.9281C95.861 15.9281 94.3191 15.8161 92.8283 15.9326C90.8144 16.0901 90.3205 18.9327 92.2016 19.7214C92.5313 19.8597 92.8671 19.8749 93.2176 19.8749C94.0035 19.8755 94.7888 19.8749 95.5747 19.8749C98.2991 19.8749 101.024 19.8749 103.748 19.8749C105.526 19.8749 107.312 19.9222 109.089 19.8749C109.944 19.8524 110.712 19.3675 110.994 18.5372C111.063 18.3324 111.099 18.117 111.099 17.9015Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M135.391 29C133.166 29 130.941 29 128.717 29C123.376 29 118.036 29 112.696 29C106.137 29 99.5787 29 93.0197 29C87.1861 29 81.3525 29 75.5195 29C72.3465 29 69.1735 29 66 29C63.0004 29 59.9225 28.8131 57.4285 26.9898C55.8602 25.8434 54.7394 24.2184 54.0654 22.403C53.7477 21.547 53.5234 20.6572 53.3702 19.7574C53.2522 19.0676 53.2152 18.3621 52.9613 17.7033C52.6112 16.7933 51.9014 16.18 50.9226 16.0783C49.318 15.9126 47.6322 16.0614 46.0231 16.0614C42.8568 16.0614 39.69 16.0614 36.5238 16.0614C34.8906 16.0614 33.2328 15.9862 31.6018 16.1103C27.4562 16.4254 23.5036 18.311 20.6405 21.3391C17.793 24.3509 16.1246 28.3856 16.0099 32.5366C15.9926 33.1657 16.0032 33.7964 16.0032 34.4261C16.0032 35.8697 16.0032 37.3132 16.0032 38.7573C16.0032 41.1052 16.0032 43.4531 16.0032 45.801C16.0032 48.9437 16.0032 52.0858 16.0032 55.2285C16.0032 59.0936 16.0032 62.9586 16.0032 66.8236C16.0032 71.3548 16.0032 75.8866 16.0032 80.4178C16.0032 85.4821 16.0032 90.5458 16.0032 95.61C16.0032 101.147 16.0032 106.684 16.0032 112.222C16.0032 118.183 16.0032 124.145 16.0032 130.107C16.0032 136.344 16.0032 142.58 16.0032 148.817C16.0032 155.296 16.0032 161.774 16.0032 168.254C16.0032 174.874 16.0032 181.495 16.0032 188.116C16.0032 194.776 16.0032 201.436 16.0032 208.096C16.0032 214.768 16.0032 221.44 16.0032 228.111C16.0032 234.637 16.0032 241.164 16.0032 247.689C16.0032 254.024 16.0032 260.358 16.0032 266.693C16.0032 272.786 16.0032 278.879 16.0032 284.973C16.0032 290.673 16.0032 296.374 16.0032 302.074C16.0032 307.349 16.0032 312.623 16.0032 317.897C16.0032 322.644 16.0032 327.392 16.0032 332.139C16.0032 336.266 16.0032 340.392 16.0032 344.519C16.0032 347.972 16.0032 351.426 16.0032 354.88C16.0032 357.539 16.0032 360.198 16.0032 362.857C16.0032 364.66 16.0032 366.463 16.0032 368.266C16.0032 369.133 16.0027 369.999 16.0032 370.865C16.006 373.549 16.5748 376.188 17.7673 378.597C19.6773 382.457 23.0511 385.489 27.0815 386.969C29.2678 387.772 31.5157 388 33.8217 388C36.1496 388 38.4769 388 40.8047 388C44.9979 388 49.191 388 53.3841 388C58.8822 388 64.3802 388 69.8788 388C76.1895 388 82.5002 388 88.8114 388C95.4605 388 102.11 388 108.759 388C115.159 388 121.56 388 127.959 388C133.636 388 139.312 388 144.989 388C149.451 388 153.913 388 158.375 388C161.06 388 163.744 388 166.429 388C168.266 388 170.074 387.989 171.883 387.574C176.041 386.62 179.75 384.063 182.129 380.508C184.007 377.702 184.988 374.382 184.999 371.007C185.001 370.314 184.999 369.621 184.999 368.928C184.999 367.282 184.999 365.637 184.999 363.991C184.999 361.475 184.999 358.959 184.999 356.443C184.999 353.119 184.999 349.794 184.999 346.47C184.999 342.458 184.999 338.445 184.999 334.433C184.999 329.786 184.999 325.138 184.999 320.491C184.999 315.303 184.999 310.114 184.999 304.926C184.999 299.296 184.999 293.666 184.999 288.036C184.999 281.999 184.999 275.963 184.999 269.926C184.999 263.633 184.999 257.34 184.999 251.048C184.999 244.549 184.999 238.051 184.999 231.552C184.999 224.893 184.999 218.234 184.999 211.575C184.999 204.913 184.999 198.252 184.999 191.59C184.999 184.953 184.999 178.317 184.999 171.68C184.999 165.171 184.999 158.661 184.999 152.152C184.999 145.87 184.999 139.589 184.999 133.307C184.999 127.286 184.999 121.264 184.999 115.242C184.999 109.631 184.999 104.02 184.999 98.4089C184.999 93.2565 184.999 88.1041 184.999 82.9516C184.999 78.3165 184.999 73.6819 184.999 69.0468C184.999 65.0644 184.999 61.082 184.999 57.1001C184.999 53.826 184.999 50.5513 184.999 47.2772C184.999 44.7821 184.999 42.287 184.999 39.792C184.999 38.1878 184.999 36.583 184.999 34.9788C184.999 34.3312 185.002 33.6835 184.999 33.0359C184.984 29.4646 183.877 25.963 181.789 23.0658C179.307 19.622 175.544 17.2062 171.392 16.3833C169.897 16.0873 168.401 16.0626 166.886 16.0626C164.014 16.0626 161.143 16.0626 158.272 16.0626C155.785 16.0626 153.298 16.0626 150.811 16.0626C149.961 16.0626 149.141 16.1541 148.545 16.8371C147.702 17.8021 147.759 19.2221 147.508 20.4056C147.102 22.3283 146.327 24.1976 145.015 25.6782C142.597 28.4053 138.877 28.9742 135.391 29Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='171' height='374' viewBox='0 0 171 374' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M120.391 14C118.166 14 115.941 14 113.717 14C108.376 14 103.036 14 97.6957 14C91.1372 14 84.5787 14 78.0197 14C72.1861 14 66.3525 14 60.5195 14C57.3465 14 54.1735 14 51 14C48.0004 14 44.9225 13.8131 42.4285 11.9898C40.8602 10.8434 39.7394 9.21839 39.0654 7.40298C38.7477 6.54696 38.5234 5.65723 38.3702 4.75739C38.2522 4.06763 38.2152 3.36214 37.9613 2.70327C37.6112 1.79332 36.9014 1.17995 35.9226 1.07828C34.318 0.912583 32.6322 1.06143 31.0231 1.06143C27.8568 1.06143 24.69 1.06143 21.5238 1.06143C19.8906 1.06143 18.2328 0.986165 16.6018 1.1103C12.4562 1.42541 8.50357 3.31103 5.64046 6.33913C2.79302 9.35095 1.12459 13.3856 1.00994 17.5366C0.992596 18.1657 1.00322 18.7964 1.00322 19.4261C1.00322 20.8697 1.00322 22.3132 1.00322 23.7573C1.00322 26.1052 1.00322 28.4531 1.00322 30.801C1.00322 33.9437 1.00322 37.0858 1.00322 40.2285C1.00322 44.0936 1.00322 47.9586 1.00322 51.8236C1.00322 56.3548 1.00322 60.8866 1.00322 65.4178C1.00322 70.4821 1.00322 75.5458 1.00322 80.61C1.00322 86.1472 1.00322 91.6844 1.00322 97.2216C1.00322 103.183 1.00322 109.145 1.00322 115.107C1.00322 121.344 1.00322 127.58 1.00322 133.817C1.00322 140.296 1.00322 146.774 1.00322 153.254C1.00322 159.874 1.00322 166.495 1.00322 173.116C1.00322 179.776 1.00322 186.436 1.00322 193.096C1.00322 199.768 1.00322 206.44 1.00322 213.111C1.00322 219.637 1.00322 226.164 1.00322 232.689C1.00322 239.024 1.00322 245.358 1.00322 251.693C1.00322 257.786 1.00322 263.879 1.00322 269.973C1.00322 275.673 1.00322 281.374 1.00322 287.074C1.00322 292.349 1.00322 297.623 1.00322 302.897C1.00322 307.644 1.00322 312.392 1.00322 317.139C1.00322 321.266 1.00322 325.392 1.00322 329.519C1.00322 332.972 1.00322 336.426 1.00322 339.88C1.00322 342.539 1.00322 345.198 1.00322 347.857C1.00322 349.66 1.00322 351.463 1.00322 353.266C1.00322 354.133 1.00266 354.999 1.00322 355.865C1.00602 358.549 1.57484 361.188 2.76729 363.597C4.67733 367.457 8.05109 370.489 12.0815 371.969C14.2678 372.772 16.5157 373 18.8217 373C21.1496 373 23.4769 373 25.8047 373C29.9979 373 34.191 373 38.3841 373C43.8822 373 49.3802 373 54.8788 373C61.1895 373 67.5002 373 73.8114 373C80.4605 373 87.1101 373 93.7592 373C100.159 373 106.56 373 112.959 373C118.636 373 124.312 373 129.989 373C134.451 373 138.913 373 143.375 373C146.06 373 148.744 373 151.429 373C153.266 373 155.074 372.989 156.883 372.574C161.041 371.62 164.75 369.063 167.129 365.508C169.007 362.702 169.988 359.382 169.999 356.007C170.001 355.314 169.999 354.621 169.999 353.928C169.999 352.282 169.999 350.637 169.999 348.991C169.999 346.475 169.999 343.959 169.999 341.443C169.999 338.119 169.999 334.794 169.999 331.47C169.999 327.458 169.999 323.445 169.999 319.433C169.999 314.786 169.999 310.138 169.999 305.491C169.999 300.303 169.999 295.114 169.999 289.926C169.999 284.296 169.999 278.666 169.999 273.036C169.999 266.999 169.999 260.963 169.999 254.926C169.999 248.633 169.999 242.34 169.999 236.048C169.999 229.549 169.999 223.051 169.999 216.552C169.999 209.893 169.999 203.234 169.999 196.575C169.999 189.913 169.999 183.252 169.999 176.59C169.999 169.953 169.999 163.317 169.999 156.68C169.999 150.171 169.999 143.661 169.999 137.152C169.999 130.87 169.999 124.589 169.999 118.307C169.999 112.286 169.999 106.264 169.999 100.242C169.999 94.6311 169.999 89.0197 169.999 83.4089C169.999 78.2565 169.999 73.1041 169.999 67.9516C169.999 63.3165 169.999 58.6819 169.999 54.0468C169.999 50.0644 169.999 46.082 169.999 42.1001C169.999 38.826 169.999 35.5513 169.999 32.2772C169.999 29.7821 169.999 27.287 169.999 24.792C169.999 23.1878 169.999 21.583 169.999 19.9788C169.999 19.3312 170.002 18.6835 169.999 18.0359C169.984 14.4646 168.877 10.963 166.789 8.06579C164.307 4.62202 160.544 2.20617 156.392 1.38328C154.897 1.08727 153.401 1.06256 151.886 1.06256C149.014 1.06256 146.143 1.06256 143.272 1.06256C140.785 1.06256 138.298 1.06256 135.811 1.06256C134.961 1.06256 134.141 1.15411 133.545 1.83713C132.702 2.80213 132.759 4.2221 132.508 5.40559C132.102 7.32828 131.327 9.19761 130.015 10.6782C127.597 13.4053 123.877 13.9742 120.391 14Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='201' height='404' viewBox='0 0 201 404' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M168.454 403C172.812 402.976 177.133 402.095 181.127 400.338C185.023 398.624 188.559 396.12 191.469 393.011C194.361 389.921 196.616 386.251 198.073 382.276C199.352 378.783 199.991 375.08 199.999 371.361C200.001 370.597 199.999 369.832 199.999 369.067C199.999 367.22 199.999 365.373 199.999 363.526C199.999 360.696 199.999 357.866 199.999 355.037C199.999 351.326 199.999 347.615 199.999 343.904C199.999 339.413 199.999 334.922 199.999 330.431C199.999 325.231 199.999 320.032 199.999 314.833C199.999 309.081 199.999 303.33 199.999 297.579C199.999 291.351 199.999 285.123 199.999 278.895C199.999 272.292 199.999 265.688 199.999 259.085C199.999 252.17 199.999 245.255 199.999 238.341C199.999 231.288 199.999 224.236 199.999 217.184C199.999 210.061 199.999 202.937 199.999 195.813C199.999 188.719 199.999 181.624 199.999 174.53C199.999 167.566 199.999 160.602 199.999 153.637C199.999 146.87 199.999 140.102 199.999 133.335C199.999 126.936 199.999 120.538 199.999 114.139C199.999 108.175 199.999 102.211 199.999 96.2461C199.999 90.8171 199.999 85.3875 199.999 79.9584C199.999 75.1419 199.999 70.3253 199.999 65.5087C199.999 61.4572 199.999 57.4051 199.999 53.3536C199.999 50.1408 199.999 46.9276 199.999 43.7148C199.999 41.4416 199.999 39.1685 199.999 36.8953C199.999 35.663 199.999 34.4307 199.999 33.1984C199.999 31.0564 199.857 28.9268 199.465 26.8169C198.705 22.7164 197.121 18.7786 194.841 15.2894C192.475 11.668 189.357 8.54476 185.741 6.17476C182.257 3.89145 178.326 2.3045 174.232 1.54284C171.839 1.09755 169.438 1.00804 167.015 1.00804C164.187 1.00804 161.359 1.00804 158.532 1.00804C153.708 1.00804 148.885 1.00804 144.061 1.00804C137.867 1.00804 131.672 1.00804 125.478 1.00804C118.537 1.00804 111.596 1.00804 104.656 1.00804C97.5566 1.00804 90.4581 1.00804 83.359 1.00804C76.8039 1.00804 70.2489 1.00804 63.6938 1.00804C58.2696 1.00804 52.8454 1.00804 47.4217 1.00804C43.7533 1.00804 40.0849 1.00804 36.4164 1.00804C34.9349 1.00804 33.4511 0.986644 31.9696 1.01367C27.6711 1.09248 23.3996 2.06018 19.4862 3.84303C15.5901 5.618 12.0617 8.19292 9.18739 11.3702C6.35641 14.499 4.16896 18.183 2.77229 22.1664C1.58977 25.5384 1.00806 29.0968 1.00075 32.6687C0.999063 33.4754 1.00075 34.2821 1.00075 35.0888C1.00075 36.9741 1.00075 38.8588 1.00075 40.7442C1.00075 43.6079 1.00075 46.4716 1.00075 49.3358C1.00075 53.0772 1.00075 56.8185 1.00075 60.5604C1.00075 65.104 1.00075 69.6481 1.00075 74.1916C1.00075 79.3882 1.00075 84.5853 1.00075 89.7818C1.00075 95.5526 1.00075 101.323 1.00075 107.094C1.00075 113.338 1.00075 119.581 1.00075 125.825C1.00075 132.458 1.00075 139.091 1.00075 145.725C1.00075 152.63 1.00075 159.535 1.00075 166.44C1.00075 173.496 1.00075 180.553 1.00075 187.609C1.00075 194.734 1.00075 201.858 1.00075 208.982C1.00075 216.074 1.00075 223.165 1.00075 230.257C1.00075 237.251 1.00075 244.244 1.00075 251.238C1.00075 257.959 1.00075 264.68 1.00075 271.4C1.00075 277.784 1.00075 284.168 1.00075 290.553C1.00075 296.499 1.00075 302.445 1.00075 308.392C1.00075 313.813 1.00075 319.234 1.00075 324.655C1.00075 329.433 1.00075 334.21 1.00075 338.987C1.00075 343.01 1.00075 347.033 1.00075 351.055C1.00075 354.235 1.00075 357.415 1.00075 360.596C1.00075 362.832 1.00075 365.069 1.00075 367.305C1.00075 368.5 1.00075 369.696 1.00075 370.891C1.00075 373.199 1.1806 375.493 1.64597 377.757C2.47947 381.812 4.11051 385.686 6.42554 389.117C8.83724 392.69 11.9897 395.754 15.6238 398.067C19.1568 400.317 23.1299 401.844 27.2558 402.551C29.5511 402.944 31.8516 402.999 34.17 402.999C37.0825 402.999 39.9949 402.999 42.9074 402.999C47.7927 402.999 52.6773 402.999 57.5626 402.999C63.7956 402.999 70.0286 402.999 76.2616 402.999C83.2556 402.999 90.249 402.999 97.243 402.999C104.297 402.999 111.351 402.999 118.405 402.999C124.93 402.999 131.454 402.999 137.978 402.999C143.349 402.999 148.719 402.999 154.09 402.999C157.688 402.999 161.287 402.999 164.885 402.999C166.074 403 167.264 403 168.454 403Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M111.099 17.9015C111.098 16.9919 110.452 16.1801 109.565 15.9776C109.214 15.8977 108.836 15.9281 108.48 15.9281C107.541 15.9281 106.602 15.9281 105.663 15.9281C102.893 15.9281 100.125 15.9281 97.3552 15.9281C95.861 15.9281 94.3191 15.8161 92.8283 15.9326C90.8144 16.0901 90.3205 18.9327 92.2016 19.7214C92.5313 19.8597 92.8671 19.8749 93.2176 19.8749C94.0035 19.8755 94.7888 19.8749 95.5747 19.8749C98.2991 19.8749 101.024 19.8749 103.748 19.8749C105.526 19.8749 107.312 19.9222 109.089 19.8749C109.944 19.8524 110.712 19.3675 110.994 18.5372C111.063 18.3324 111.099 18.117 111.099 17.9015Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M135.391 29C133.166 29 130.941 29 128.717 29C123.376 29 118.036 29 112.696 29C106.137 29 99.5787 29 93.0197 29C87.1861 29 81.3525 29 75.5195 29C72.3465 29 69.1735 29 66 29C63.0004 29 59.9225 28.8131 57.4285 26.9898C55.8602 25.8434 54.7394 24.2184 54.0654 22.403C53.7477 21.547 53.5234 20.6572 53.3702 19.7574C53.2522 19.0676 53.2152 18.3621 52.9613 17.7033C52.6112 16.7933 51.9014 16.18 50.9226 16.0783C49.318 15.9126 47.6322 16.0614 46.0231 16.0614C42.8568 16.0614 39.69 16.0614 36.5238 16.0614C34.8906 16.0614 33.2328 15.9862 31.6018 16.1103C27.4562 16.4254 23.5036 18.311 20.6405 21.3391C17.793 24.3509 16.1246 28.3856 16.0099 32.5366C15.9926 33.1657 16.0032 33.7964 16.0032 34.4261C16.0032 35.8697 16.0032 37.3132 16.0032 38.7573C16.0032 41.1052 16.0032 43.4531 16.0032 45.801C16.0032 48.9437 16.0032 52.0858 16.0032 55.2285C16.0032 59.0936 16.0032 62.9586 16.0032 66.8236C16.0032 71.3548 16.0032 75.8866 16.0032 80.4178C16.0032 85.4821 16.0032 90.5458 16.0032 95.61C16.0032 101.147 16.0032 106.684 16.0032 112.222C16.0032 118.183 16.0032 124.145 16.0032 130.107C16.0032 136.344 16.0032 142.58 16.0032 148.817C16.0032 155.296 16.0032 161.774 16.0032 168.254C16.0032 174.874 16.0032 181.495 16.0032 188.116C16.0032 194.776 16.0032 201.436 16.0032 208.096C16.0032 214.768 16.0032 221.44 16.0032 228.111C16.0032 234.637 16.0032 241.164 16.0032 247.689C16.0032 254.024 16.0032 260.358 16.0032 266.693C16.0032 272.786 16.0032 278.879 16.0032 284.973C16.0032 290.673 16.0032 296.374 16.0032 302.074C16.0032 307.349 16.0032 312.623 16.0032 317.897C16.0032 322.644 16.0032 327.392 16.0032 332.139C16.0032 336.266 16.0032 340.392 16.0032 344.519C16.0032 347.972 16.0032 351.426 16.0032 354.88C16.0032 357.539 16.0032 360.198 16.0032 362.857C16.0032 364.66 16.0032 366.463 16.0032 368.266C16.0032 369.133 16.0027 369.999 16.0032 370.865C16.006 373.549 16.5748 376.188 17.7673 378.597C19.6773 382.457 23.0511 385.489 27.0815 386.969C29.2678 387.772 31.5157 388 33.8217 388C36.1496 388 38.4769 388 40.8047 388C44.9979 388 49.191 388 53.3841 388C58.8822 388 64.3802 388 69.8788 388C76.1895 388 82.5002 388 88.8114 388C95.4605 388 102.11 388 108.759 388C115.159 388 121.56 388 127.959 388C133.636 388 139.312 388 144.989 388C149.451 388 153.913 388 158.375 388C161.06 388 163.744 388 166.429 388C168.266 388 170.074 387.989 171.883 387.574C176.041 386.62 179.75 384.063 182.129 380.508C184.007 377.702 184.988 374.382 184.999 371.007C185.001 370.314 184.999 369.621 184.999 368.928C184.999 367.282 184.999 365.637 184.999 363.991C184.999 361.475 184.999 358.959 184.999 356.443C184.999 353.119 184.999 349.794 184.999 346.47C184.999 342.458 184.999 338.445 184.999 334.433C184.999 329.786 184.999 325.138 184.999 320.491C184.999 315.303 184.999 310.114 184.999 304.926C184.999 299.296 184.999 293.666 184.999 288.036C184.999 281.999 184.999 275.963 184.999 269.926C184.999 263.633 184.999 257.34 184.999 251.048C184.999 244.549 184.999 238.051 184.999 231.552C184.999 224.893 184.999 218.234 184.999 211.575C184.999 204.913 184.999 198.252 184.999 191.59C184.999 184.953 184.999 178.317 184.999 171.68C184.999 165.171 184.999 158.661 184.999 152.152C184.999 145.87 184.999 139.589 184.999 133.307C184.999 127.286 184.999 121.264 184.999 115.242C184.999 109.631 184.999 104.02 184.999 98.4089C184.999 93.2565 184.999 88.1041 184.999 82.9516C184.999 78.3165 184.999 73.6819 184.999 69.0468C184.999 65.0644 184.999 61.082 184.999 57.1001C184.999 53.826 184.999 50.5513 184.999 47.2772C184.999 44.7821 184.999 42.287 184.999 39.792C184.999 38.1878 184.999 36.583 184.999 34.9788C184.999 34.3312 185.002 33.6835 184.999 33.0359C184.984 29.4646 183.877 25.963 181.789 23.0658C179.307 19.622 175.544 17.2062 171.392 16.3833C169.897 16.0873 168.401 16.0626 166.886 16.0626C164.014 16.0626 161.143 16.0626 158.272 16.0626C155.785 16.0626 153.298 16.0626 150.811 16.0626C149.961 16.0626 149.141 16.1541 148.545 16.8371C147.702 17.8021 147.759 19.2221 147.508 20.4056C147.102 22.3283 146.327 24.1976 145.015 25.6782C142.597 28.4053 138.877 28.9742 135.391 29Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='171' height='374' viewBox='0 0 171 374' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M120.391 14C118.166 14 115.941 14 113.717 14C108.376 14 103.036 14 97.6957 14C91.1372 14 84.5787 14 78.0197 14C72.1861 14 66.3525 14 60.5195 14C57.3465 14 54.1735 14 51 14C48.0004 14 44.9225 13.8131 42.4285 11.9898C40.8602 10.8434 39.7394 9.21839 39.0654 7.40298C38.7477 6.54696 38.5234 5.65723 38.3702 4.75739C38.2522 4.06763 38.2152 3.36214 37.9613 2.70327C37.6112 1.79332 36.9014 1.17995 35.9226 1.07828C34.318 0.912583 32.6322 1.06143 31.0231 1.06143C27.8568 1.06143 24.69 1.06143 21.5238 1.06143C19.8906 1.06143 18.2328 0.986165 16.6018 1.1103C12.4562 1.42541 8.50357 3.31103 5.64046 6.33913C2.79302 9.35095 1.12459 13.3856 1.00994 17.5366C0.992596 18.1657 1.00322 18.7964 1.00322 19.4261C1.00322 20.8697 1.00322 22.3132 1.00322 23.7573C1.00322 26.1052 1.00322 28.4531 1.00322 30.801C1.00322 33.9437 1.00322 37.0858 1.00322 40.2285C1.00322 44.0936 1.00322 47.9586 1.00322 51.8236C1.00322 56.3548 1.00322 60.8866 1.00322 65.4178C1.00322 70.4821 1.00322 75.5458 1.00322 80.61C1.00322 86.1472 1.00322 91.6844 1.00322 97.2216C1.00322 103.183 1.00322 109.145 1.00322 115.107C1.00322 121.344 1.00322 127.58 1.00322 133.817C1.00322 140.296 1.00322 146.774 1.00322 153.254C1.00322 159.874 1.00322 166.495 1.00322 173.116C1.00322 179.776 1.00322 186.436 1.00322 193.096C1.00322 199.768 1.00322 206.44 1.00322 213.111C1.00322 219.637 1.00322 226.164 1.00322 232.689C1.00322 239.024 1.00322 245.358 1.00322 251.693C1.00322 257.786 1.00322 263.879 1.00322 269.973C1.00322 275.673 1.00322 281.374 1.00322 287.074C1.00322 292.349 1.00322 297.623 1.00322 302.897C1.00322 307.644 1.00322 312.392 1.00322 317.139C1.00322 321.266 1.00322 325.392 1.00322 329.519C1.00322 332.972 1.00322 336.426 1.00322 339.88C1.00322 342.539 1.00322 345.198 1.00322 347.857C1.00322 349.66 1.00322 351.463 1.00322 353.266C1.00322 354.133 1.00266 354.999 1.00322 355.865C1.00602 358.549 1.57484 361.188 2.76729 363.597C4.67733 367.457 8.05109 370.489 12.0815 371.969C14.2678 372.772 16.5157 373 18.8217 373C21.1496 373 23.4769 373 25.8047 373C29.9979 373 34.191 373 38.3841 373C43.8822 373 49.3802 373 54.8788 373C61.1895 373 67.5002 373 73.8114 373C80.4605 373 87.1101 373 93.7592 373C100.159 373 106.56 373 112.959 373C118.636 373 124.312 373 129.989 373C134.451 373 138.913 373 143.375 373C146.06 373 148.744 373 151.429 373C153.266 373 155.074 372.989 156.883 372.574C161.041 371.62 164.75 369.063 167.129 365.508C169.007 362.702 169.988 359.382 169.999 356.007C170.001 355.314 169.999 354.621 169.999 353.928C169.999 352.282 169.999 350.637 169.999 348.991C169.999 346.475 169.999 343.959 169.999 341.443C169.999 338.119 169.999 334.794 169.999 331.47C169.999 327.458 169.999 323.445 169.999 319.433C169.999 314.786 169.999 310.138 169.999 305.491C169.999 300.303 169.999 295.114 169.999 289.926C169.999 284.296 169.999 278.666 169.999 273.036C169.999 266.999 169.999 260.963 169.999 254.926C169.999 248.633 169.999 242.34 169.999 236.048C169.999 229.549 169.999 223.051 169.999 216.552C169.999 209.893 169.999 203.234 169.999 196.575C169.999 189.913 169.999 183.252 169.999 176.59C169.999 169.953 169.999 163.317 169.999 156.68C169.999 150.171 169.999 143.661 169.999 137.152C169.999 130.87 169.999 124.589 169.999 118.307C169.999 112.286 169.999 106.264 169.999 100.242C169.999 94.6311 169.999 89.0197 169.999 83.4089C169.999 78.2565 169.999 73.1041 169.999 67.9516C169.999 63.3165 169.999 58.6819 169.999 54.0468C169.999 50.0644 169.999 46.082 169.999 42.1001C169.999 38.826 169.999 35.5513 169.999 32.2772C169.999 29.7821 169.999 27.287 169.999 24.792C169.999 23.1878 169.999 21.583 169.999 19.9788C169.999 19.3312 170.002 18.6835 169.999 18.0359C169.984 14.4646 168.877 10.963 166.789 8.06579C164.307 4.62202 160.544 2.20617 156.392 1.38328C154.897 1.08727 153.401 1.06256 151.886 1.06256C149.014 1.06256 146.143 1.06256 143.272 1.06256C140.785 1.06256 138.298 1.06256 135.811 1.06256C134.961 1.06256 134.141 1.15411 133.545 1.83713C132.702 2.80213 132.759 4.2221 132.508 5.40559C132.102 7.32828 131.327 9.19761 130.015 10.6782C127.597 13.4053 123.877 13.9742 120.391 14Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "iPhone 11 Pro Max",
          deviceWidth: 220.17,
          deviceHeight: 441,
          borderlessWidth: 195,
          borderlessHeight: 418,
          cornerRadius: 35,
          cornerRadiusBorderless: 21,
          deviceSVG: "<svg width='221' height='443' viewBox='0 0 221 443' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M2.00149 409.902C2.02709 414.57 3.02101 419.19 4.98902 423.427C7.10102 427.976 10.2831 431.999 14.2166 435.107C18.077 438.157 22.6428 440.294 27.4556 441.308C30.0214 441.849 32.607 442 35.2188 442C38.047 442 40.8752 442 43.704 442C48.7453 442 53.7866 442 58.8278 442C65.4115 442 71.9952 442 78.5789 442C86.0701 442 93.562 442 101.053 442C108.827 442 116.601 442 124.376 442C131.762 442 139.149 442 146.536 442C152.852 442 159.169 442 165.486 442C170.154 442 174.823 442 179.491 442C181.822 442 184.153 442 186.484 442C189.799 442 193.076 441.578 196.253 440.611C200.993 439.169 205.381 436.619 208.977 433.208C212.588 429.781 215.378 425.525 217.076 420.843C218.356 417.314 218.99 413.583 218.998 409.831C219 408.969 218.998 408.107 218.998 407.246C218.998 405.223 218.998 403.199 218.998 401.175C218.998 398.087 218.998 394.998 218.998 391.91C218.998 387.868 218.998 383.826 218.998 379.784C218.998 374.925 218.998 370.066 218.998 365.207C218.998 359.584 218.998 353.961 218.998 348.339C218.998 342.084 218.998 335.83 218.998 329.575C218.998 322.797 218.998 316.018 218.998 309.239C218.998 302.084 218.998 294.929 218.998 287.774C218.998 280.271 218.998 272.767 218.998 265.265C218.998 257.559 218.998 249.853 218.998 242.148C218.998 234.369 218.998 226.59 218.998 218.811C218.998 211.044 218.998 203.277 218.998 195.511C218.998 187.842 218.998 180.174 218.998 172.505C218.998 165.063 218.998 157.622 218.998 150.18C218.998 143.111 218.998 136.041 218.998 128.972C218.998 122.304 218.998 115.636 218.998 108.969C218.998 102.85 218.998 96.7307 218.998 90.6118C218.998 85.1494 218.998 79.6863 218.998 74.2239C218.998 69.5485 218.998 64.8732 218.998 60.1973C218.998 56.3648 218.998 52.5323 218.998 48.6992C218.998 45.8447 218.998 42.9901 218.998 40.1356C218.998 38.3699 218.998 36.6048 218.998 34.8391C218.998 34.0987 219.005 33.3577 218.994 32.6173C218.924 27.9388 217.82 23.2898 215.777 19.08C213.576 14.5424 210.298 10.546 206.277 7.50318C202.41 4.57694 197.889 2.5467 193.131 1.60715C190.639 1.11464 188.132 1 185.601 1C182.676 1 179.752 1 176.826 1C171.713 1 166.6 1 161.487 1C154.876 1 148.265 1 141.654 1C134.121 1 126.588 1 119.055 1C111.284 1 103.512 1 95.7412 1C88.3825 1 81.0237 1 73.665 1C67.4007 1 61.1357 1 54.8714 1C50.2806 1 45.6893 1 41.0985 1C38.8701 1 36.6416 1 34.4131 1C30.9488 1 27.5158 1.4861 24.2147 2.55502C19.5151 4.07674 15.1958 6.68724 11.6604 10.1393C8.07575 13.64 5.3359 17.9874 3.71989 22.7313C2.57109 26.1033 2.00725 29.6392 2.00085 33.1995C1.99893 34.1038 2.00085 35.0075 2.00085 35.9118C2.00085 37.9818 2.00085 40.0517 2.00085 42.1217C2.00085 45.2484 2.00085 48.3757 2.00085 51.5024C2.00085 55.5789 2.00085 59.6548 2.00085 63.7313C2.00085 68.6205 2.00085 73.5097 2.00085 78.399C2.00085 84.0478 2.00085 89.6966 2.00085 95.3461C2.00085 101.623 2.00085 107.899 2.00085 114.175C2.00085 120.953 2.00085 127.73 2.00085 134.507C2.00085 141.695 2.00085 148.884 2.00085 156.071C2.00085 163.585 2.00085 171.097 2.00085 178.61C2.00085 186.321 2.00085 194.032 2.00085 201.744C2.00085 209.503 2.00085 217.262 2.00085 225.021C2.00085 232.806 2.00085 240.592 2.00085 248.378C2.00085 256.039 2.00085 263.701 2.00085 271.364C2.00085 278.794 2.00085 286.225 2.00085 293.656C2.00085 300.71 2.00085 307.765 2.00085 314.82C2.00085 321.468 2.00085 328.118 2.00085 334.766C2.00085 340.862 2.00085 346.958 2.00085 353.054C2.00085 358.475 2.00085 363.897 2.00085 369.319C2.00085 373.977 2.00085 378.635 2.00085 383.293C2.00085 387.091 2.00085 390.888 2.00085 394.685C2.00085 397.5 2.00085 400.315 2.00085 403.13C2.00085 404.849 2.00085 406.567 2.00085 408.286C2.00149 408.824 2.00149 409.363 2.00149 409.902Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M120.609 18.4856C120.609 17.373 119.938 16.3712 119.001 16.0868C118.623 15.9723 118.226 16.004 117.839 16.004C116.806 16.004 115.773 16.004 114.739 16.004C111.64 16.004 108.541 16.004 105.442 16.004C103.827 16.004 102 16.0041 100.513 16.0173C98.3625 16.2811 97.8797 19.7556 99.8656 20.7573C100.222 20.9369 100.586 20.9657 100.968 20.9672C101.805 20.9709 102.643 20.9672 103.48 20.9672C106.525 20.9672 109.571 20.9672 112.616 20.9672C114.551 20.9672 116.497 21.041 118.431 20.9672C119.358 20.9317 120.188 20.3156 120.494 19.285C120.571 19.0279 120.609 18.7567 120.609 18.4856Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M58.5162 13.0113C52.9232 13.0113 47.3302 13.0113 41.7371 13.0113C39.2505 13.0113 36.7638 13.01 34.2772 13.0113C32.548 13.012 30.8375 13.1833 29.1571 13.5989C25.1439 14.5911 21.4844 16.848 18.7965 19.9814C16.1086 23.1154 14.4397 27.071 14.0783 31.18C13.9872 32.2106 14.0007 33.2419 14.0007 34.275C14.0007 35.8619 14.0007 37.448 14.0007 39.0349C14.0007 41.6721 14.0007 44.31 14.0007 46.9473C14.0007 50.5468 14.0007 54.1463 14.0007 57.7451C14.0007 62.1987 14.0007 66.653 14.0007 71.1066C14.0007 76.2986 14.0007 81.4901 14.0007 86.6821C14.0007 92.5224 14.0007 98.3634 14.0007 104.204C14.0007 110.611 14.0007 117.019 14.0007 123.426C14.0007 130.284 14.0007 137.141 14.0007 143.999C14.0007 151.185 14.0007 158.37 14.0007 165.556C14.0007 172.989 14.0007 180.422 14.0007 187.854C14.0007 195.475 14.0007 203.096 14.0007 210.717C14.0007 218.341 14.0007 225.966 14.0007 233.59C14.0007 241.159 14.0007 248.728 14.0007 256.298C14.0007 263.711 14.0007 271.124 14.0007 278.538C14.0007 285.734 14.0007 292.93 14.0007 300.127C14.0007 306.925 14.0007 313.724 14.0007 320.522C14.0007 326.863 14.0007 333.204 14.0007 339.546C14.0007 345.329 14.0007 351.112 14.0007 356.895C14.0007 362.047 14.0007 367.198 14.0007 372.35C14.0007 376.712 14.0007 381.074 14.0007 385.435C14.0007 388.938 14.0007 392.44 14.0007 395.941C14.0007 398.489 14.0007 401.037 14.0007 403.585C14.0007 405.066 14.0007 406.547 14.0007 408.028C14.0007 409.372 14.0225 410.706 14.2237 412.041C14.8358 416.099 16.7226 419.923 19.5732 422.882C22.4367 425.855 26.2167 427.896 30.2793 428.656C32.2244 429.019 34.1689 429 36.1345 429C39.344 429 42.5536 429 45.7632 429C50.9871 429 56.2116 429 61.4355 429C68.0841 429 74.7327 429 81.3813 429C88.8265 429 96.2723 429 103.718 429C111.324 429 118.93 429 126.536 429C133.713 429 140.89 429 148.066 429C154.234 429 160.401 429 166.568 429C171.044 429 175.521 429 179.997 429C182.21 429 184.422 429 186.635 429C189.674 429 192.646 428.434 195.414 427.158C199.181 425.423 202.35 422.506 204.398 418.908C206.112 415.898 206.987 412.483 206.999 409.026C207.001 408.226 206.999 407.427 206.999 406.627C206.999 404.707 206.999 402.786 206.999 400.866C206.999 397.907 206.999 394.947 206.999 391.988C206.999 388.123 206.999 384.258 206.999 380.393C206.999 375.71 206.999 371.027 206.999 366.343C206.999 360.925 206.999 355.507 206.999 350.09C206.999 344.051 206.999 338.012 206.999 331.973C206.999 325.433 206.999 318.893 206.999 312.353C206.999 305.397 206.999 298.441 206.999 291.485C206.999 284.192 206.999 276.899 206.999 269.605C206.999 262.096 206.999 254.586 206.999 247.076C206.999 239.473 206.999 231.869 206.999 224.265C206.999 216.648 206.999 209.029 206.999 201.412C206.999 193.838 206.999 186.265 206.999 178.691C206.999 171.347 206.999 164.003 206.999 156.659C206.999 149.602 206.999 142.545 206.999 135.489C206.999 128.82 206.999 122.152 206.999 115.483C206.999 109.27 206.999 103.056 206.999 96.8431C206.999 91.2553 206.999 85.6668 206.999 80.079C206.999 75.1804 206.999 70.2825 206.999 65.3839C206.999 61.2755 206.999 57.1671 206.999 53.0587C206.999 49.8256 206.999 46.5925 206.999 43.3594C206.999 41.1383 206.999 38.9172 206.999 36.6962C206.999 35.5671 206.999 34.4381 206.999 33.3083C206.999 30.9185 206.66 28.5651 205.861 26.305C204.48 22.4019 201.872 18.9789 198.472 16.6069C195.123 14.2708 191.107 13.0286 187.026 13.0107C181.394 12.9864 175.762 13.0107 170.13 13.0107C167.664 13.0107 165.197 13.0081 162.73 13.0107C161.801 13.012 160.929 13.2025 160.329 13.9703C159.349 15.2234 159.467 17.1344 159.121 18.6074C158.65 20.613 157.861 22.602 156.5 24.1786C154.247 26.7877 150.925 26.9999 147.647 26.9999C141.667 26.9999 135.688 26.9999 129.708 26.9999C123.638 26.9999 117.569 26.9999 111.5 26.9999C108.419 26.9999 105.337 26.9999 102.255 26.9999C95.0208 26.9999 87.7864 26.9999 80.5514 26.9999C78.0994 26.9999 75.648 26.9999 73.196 26.9999C71.8385 26.9999 70.638 27.3305 69.305 27.0237C65.2161 26.0819 62.8852 22.7005 61.9271 18.8101C61.3964 16.6511 61.629 13.0075 58.5162 13.0113Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='195' height='418' viewBox='0 0 195 418' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M45.5162 1.01144C39.9232 1.01144 34.3302 1.01144 28.7371 1.01144C26.2505 1.01144 23.7638 1.01016 21.2772 1.01144C19.548 1.01208 17.8375 1.18342 16.1571 1.59899C12.1439 2.59124 8.48437 4.8481 5.79648 7.98149C3.10859 11.1155 1.43971 15.0711 1.07825 19.1801C0.987244 20.2107 1.0007 21.242 1.0007 22.2751C1.0007 23.862 1.0007 25.4482 1.0007 27.035C1.0007 29.6723 1.0007 32.3102 1.0007 34.9474C1.0007 38.5469 1.0007 42.1464 1.0007 45.7452C1.0007 50.1988 1.0007 54.6531 1.0007 59.1067C1.0007 64.2988 1.0007 69.4902 1.0007 74.6822C1.0007 80.5226 1.0007 86.3635 1.0007 92.2039C1.0007 98.6113 1.0007 105.019 1.0007 111.426C1.0007 118.284 1.0007 125.141 1.0007 131.999C1.0007 139.185 1.0007 146.37 1.0007 153.557C1.0007 160.989 1.0007 168.422 1.0007 175.854C1.0007 183.475 1.0007 191.097 1.0007 198.717C1.0007 206.341 1.0007 213.966 1.0007 221.59C1.0007 229.159 1.0007 236.729 1.0007 244.298C1.0007 251.711 1.0007 259.125 1.0007 266.538C1.0007 273.734 1.0007 280.93 1.0007 288.127C1.0007 294.925 1.0007 301.724 1.0007 308.522C1.0007 314.863 1.0007 321.204 1.0007 327.546C1.0007 333.329 1.0007 339.112 1.0007 344.895C1.0007 350.047 1.0007 355.198 1.0007 360.35C1.0007 364.712 1.0007 369.074 1.0007 373.435C1.0007 376.938 1.0007 380.44 1.0007 383.942C1.0007 386.489 1.0007 389.037 1.0007 391.585C1.0007 393.066 1.0007 394.547 1.0007 396.028C1.0007 397.372 1.02249 398.706 1.22373 400.041C1.83578 404.099 3.72256 407.923 6.57324 410.883C9.43673 413.855 13.2167 415.896 17.2793 416.656C19.2244 417.02 21.1689 417 23.1345 417C26.344 417 29.5536 417 32.7632 417C37.9871 417 43.2116 417 48.4355 417C55.0841 417 61.7327 417 68.3813 417C75.8265 417 83.2723 417 90.7176 417C98.3236 417 105.93 417 113.536 417C120.713 417 127.89 417 135.066 417C141.234 417 147.401 417 153.568 417C158.044 417 162.521 417 166.997 417C169.21 417 171.422 417 173.635 417C176.674 417 179.646 416.434 182.414 415.159C186.181 413.423 189.35 410.506 191.398 406.908C193.112 403.898 193.987 400.483 193.999 397.026C194.001 396.226 193.999 395.427 193.999 394.627C193.999 392.707 193.999 390.786 193.999 388.866C193.999 385.907 193.999 382.947 193.999 379.988C193.999 376.123 193.999 372.258 193.999 368.394C193.999 363.71 193.999 359.027 193.999 354.343C193.999 348.925 193.999 343.507 193.999 338.09C193.999 332.051 193.999 326.012 193.999 319.973C193.999 313.433 193.999 306.893 193.999 300.353C193.999 293.397 193.999 286.441 193.999 279.485C193.999 272.192 193.999 264.899 193.999 257.605C193.999 250.096 193.999 242.586 193.999 235.077C193.999 227.473 193.999 219.869 193.999 212.266C193.999 204.648 193.999 197.03 193.999 189.412C193.999 181.838 193.999 174.265 193.999 166.691C193.999 159.347 193.999 152.003 193.999 144.659C193.999 137.603 193.999 130.546 193.999 123.489C193.999 116.82 193.999 110.152 193.999 103.483C193.999 97.27 193.999 91.0563 193.999 84.8432C193.999 79.2554 193.999 73.667 193.999 68.0792C193.999 63.1806 193.999 58.2826 193.999 53.384C193.999 49.2756 193.999 45.1672 193.999 41.0589C193.999 37.8257 193.999 34.5926 193.999 31.3595C193.999 29.1384 193.999 26.9174 193.999 24.6963C193.999 23.5672 193.999 22.4382 193.999 21.3085C193.999 18.9186 193.66 16.5652 192.861 14.3052C191.48 10.402 188.872 6.97901 185.472 4.60707C182.123 2.27093 178.107 1.0287 174.026 1.0108C168.394 0.986503 162.762 1.0108 157.13 1.0108C154.664 1.0108 152.197 1.00824 149.73 1.0108C148.801 1.01208 147.929 1.2026 147.329 1.97044C146.349 3.22354 146.467 5.13452 146.121 6.60755C145.65 8.61315 144.861 10.6021 143.5 12.1787C141.247 14.7879 137.925 15 134.647 15C128.667 15 122.688 15 116.708 15C110.638 15 104.569 15 98.5 15C95.4186 15 92.3366 15 89.2552 15C82.0208 15 74.7864 15 67.5514 15C65.0994 15 62.648 15 60.196 15C58.8385 15 57.638 15.3307 56.305 15.0238C52.2161 14.082 49.8852 10.7006 48.9271 6.81022C48.3964 4.65118 48.629 1.0076 45.5162 1.01144Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='221' height='443' viewBox='0 0 221 443' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M2.00149 409.902C2.02709 414.57 3.02101 419.19 4.98902 423.427C7.10102 427.976 10.2831 431.999 14.2166 435.107C18.077 438.157 22.6428 440.294 27.4556 441.308C30.0214 441.849 32.607 442 35.2188 442C38.047 442 40.8752 442 43.704 442C48.7453 442 53.7866 442 58.8278 442C65.4115 442 71.9952 442 78.5789 442C86.0701 442 93.562 442 101.053 442C108.827 442 116.601 442 124.376 442C131.762 442 139.149 442 146.536 442C152.852 442 159.169 442 165.486 442C170.154 442 174.823 442 179.491 442C181.822 442 184.153 442 186.484 442C189.799 442 193.076 441.578 196.253 440.611C200.993 439.169 205.381 436.619 208.977 433.208C212.588 429.781 215.378 425.525 217.076 420.843C218.356 417.314 218.99 413.583 218.998 409.831C219 408.969 218.998 408.107 218.998 407.246C218.998 405.223 218.998 403.199 218.998 401.175C218.998 398.087 218.998 394.998 218.998 391.91C218.998 387.868 218.998 383.826 218.998 379.784C218.998 374.925 218.998 370.066 218.998 365.207C218.998 359.584 218.998 353.961 218.998 348.339C218.998 342.084 218.998 335.83 218.998 329.575C218.998 322.797 218.998 316.018 218.998 309.239C218.998 302.084 218.998 294.929 218.998 287.774C218.998 280.271 218.998 272.767 218.998 265.265C218.998 257.559 218.998 249.853 218.998 242.148C218.998 234.369 218.998 226.59 218.998 218.811C218.998 211.044 218.998 203.277 218.998 195.511C218.998 187.842 218.998 180.174 218.998 172.505C218.998 165.063 218.998 157.622 218.998 150.18C218.998 143.111 218.998 136.041 218.998 128.972C218.998 122.304 218.998 115.636 218.998 108.969C218.998 102.85 218.998 96.7307 218.998 90.6118C218.998 85.1494 218.998 79.6863 218.998 74.2239C218.998 69.5485 218.998 64.8732 218.998 60.1973C218.998 56.3648 218.998 52.5323 218.998 48.6992C218.998 45.8447 218.998 42.9901 218.998 40.1356C218.998 38.3699 218.998 36.6048 218.998 34.8391C218.998 34.0987 219.005 33.3577 218.994 32.6173C218.924 27.9388 217.82 23.2898 215.777 19.08C213.576 14.5424 210.298 10.546 206.277 7.50318C202.41 4.57694 197.889 2.5467 193.131 1.60715C190.639 1.11464 188.132 1 185.601 1C182.676 1 179.752 1 176.826 1C171.713 1 166.6 1 161.487 1C154.876 1 148.265 1 141.654 1C134.121 1 126.588 1 119.055 1C111.284 1 103.512 1 95.7412 1C88.3825 1 81.0237 1 73.665 1C67.4007 1 61.1357 1 54.8714 1C50.2806 1 45.6893 1 41.0985 1C38.8701 1 36.6416 1 34.4131 1C30.9488 1 27.5158 1.4861 24.2147 2.55502C19.5151 4.07674 15.1958 6.68724 11.6604 10.1393C8.07575 13.64 5.3359 17.9874 3.71989 22.7313C2.57109 26.1033 2.00725 29.6392 2.00085 33.1995C1.99893 34.1038 2.00085 35.0075 2.00085 35.9118C2.00085 37.9818 2.00085 40.0517 2.00085 42.1217C2.00085 45.2484 2.00085 48.3757 2.00085 51.5024C2.00085 55.5789 2.00085 59.6548 2.00085 63.7313C2.00085 68.6205 2.00085 73.5097 2.00085 78.399C2.00085 84.0478 2.00085 89.6966 2.00085 95.3461C2.00085 101.623 2.00085 107.899 2.00085 114.175C2.00085 120.953 2.00085 127.73 2.00085 134.507C2.00085 141.695 2.00085 148.884 2.00085 156.071C2.00085 163.585 2.00085 171.097 2.00085 178.61C2.00085 186.321 2.00085 194.032 2.00085 201.744C2.00085 209.503 2.00085 217.262 2.00085 225.021C2.00085 232.806 2.00085 240.592 2.00085 248.378C2.00085 256.039 2.00085 263.701 2.00085 271.364C2.00085 278.794 2.00085 286.225 2.00085 293.656C2.00085 300.71 2.00085 307.765 2.00085 314.82C2.00085 321.468 2.00085 328.118 2.00085 334.766C2.00085 340.862 2.00085 346.958 2.00085 353.054C2.00085 358.475 2.00085 363.897 2.00085 369.319C2.00085 373.977 2.00085 378.635 2.00085 383.293C2.00085 387.091 2.00085 390.888 2.00085 394.685C2.00085 397.5 2.00085 400.315 2.00085 403.13C2.00085 404.849 2.00085 406.567 2.00085 408.286C2.00149 408.824 2.00149 409.363 2.00149 409.902Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M120.609 18.4856C120.609 17.373 119.938 16.3712 119.001 16.0868C118.623 15.9723 118.226 16.004 117.839 16.004C116.806 16.004 115.773 16.004 114.739 16.004C111.64 16.004 108.541 16.004 105.442 16.004C103.827 16.004 102 16.0041 100.513 16.0173C98.3625 16.2811 97.8797 19.7556 99.8656 20.7573C100.222 20.9369 100.586 20.9657 100.968 20.9672C101.805 20.9709 102.643 20.9672 103.48 20.9672C106.525 20.9672 109.571 20.9672 112.616 20.9672C114.551 20.9672 116.497 21.041 118.431 20.9672C119.358 20.9317 120.188 20.3156 120.494 19.285C120.571 19.0279 120.609 18.7567 120.609 18.4856Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M58.5162 13.0113C52.9232 13.0113 47.3302 13.0113 41.7371 13.0113C39.2505 13.0113 36.7638 13.01 34.2772 13.0113C32.548 13.012 30.8375 13.1833 29.1571 13.5989C25.1439 14.5911 21.4844 16.848 18.7965 19.9814C16.1086 23.1154 14.4397 27.071 14.0783 31.18C13.9872 32.2106 14.0007 33.2419 14.0007 34.275C14.0007 35.8619 14.0007 37.448 14.0007 39.0349C14.0007 41.6721 14.0007 44.31 14.0007 46.9473C14.0007 50.5468 14.0007 54.1463 14.0007 57.7451C14.0007 62.1987 14.0007 66.653 14.0007 71.1066C14.0007 76.2986 14.0007 81.4901 14.0007 86.6821C14.0007 92.5224 14.0007 98.3634 14.0007 104.204C14.0007 110.611 14.0007 117.019 14.0007 123.426C14.0007 130.284 14.0007 137.141 14.0007 143.999C14.0007 151.185 14.0007 158.37 14.0007 165.556C14.0007 172.989 14.0007 180.422 14.0007 187.854C14.0007 195.475 14.0007 203.096 14.0007 210.717C14.0007 218.341 14.0007 225.966 14.0007 233.59C14.0007 241.159 14.0007 248.728 14.0007 256.298C14.0007 263.711 14.0007 271.124 14.0007 278.538C14.0007 285.734 14.0007 292.93 14.0007 300.127C14.0007 306.925 14.0007 313.724 14.0007 320.522C14.0007 326.863 14.0007 333.204 14.0007 339.546C14.0007 345.329 14.0007 351.112 14.0007 356.895C14.0007 362.047 14.0007 367.198 14.0007 372.35C14.0007 376.712 14.0007 381.074 14.0007 385.435C14.0007 388.938 14.0007 392.44 14.0007 395.941C14.0007 398.489 14.0007 401.037 14.0007 403.585C14.0007 405.066 14.0007 406.547 14.0007 408.028C14.0007 409.372 14.0225 410.706 14.2237 412.041C14.8358 416.099 16.7226 419.923 19.5732 422.882C22.4367 425.855 26.2167 427.896 30.2793 428.656C32.2244 429.019 34.1689 429 36.1345 429C39.344 429 42.5536 429 45.7632 429C50.9871 429 56.2116 429 61.4355 429C68.0841 429 74.7327 429 81.3813 429C88.8265 429 96.2723 429 103.718 429C111.324 429 118.93 429 126.536 429C133.713 429 140.89 429 148.066 429C154.234 429 160.401 429 166.568 429C171.044 429 175.521 429 179.997 429C182.21 429 184.422 429 186.635 429C189.674 429 192.646 428.434 195.414 427.158C199.181 425.423 202.35 422.506 204.398 418.908C206.112 415.898 206.987 412.483 206.999 409.026C207.001 408.226 206.999 407.427 206.999 406.627C206.999 404.707 206.999 402.786 206.999 400.866C206.999 397.907 206.999 394.947 206.999 391.988C206.999 388.123 206.999 384.258 206.999 380.393C206.999 375.71 206.999 371.027 206.999 366.343C206.999 360.925 206.999 355.507 206.999 350.09C206.999 344.051 206.999 338.012 206.999 331.973C206.999 325.433 206.999 318.893 206.999 312.353C206.999 305.397 206.999 298.441 206.999 291.485C206.999 284.192 206.999 276.899 206.999 269.605C206.999 262.096 206.999 254.586 206.999 247.076C206.999 239.473 206.999 231.869 206.999 224.265C206.999 216.648 206.999 209.029 206.999 201.412C206.999 193.838 206.999 186.265 206.999 178.691C206.999 171.347 206.999 164.003 206.999 156.659C206.999 149.602 206.999 142.545 206.999 135.489C206.999 128.82 206.999 122.152 206.999 115.483C206.999 109.27 206.999 103.056 206.999 96.8431C206.999 91.2553 206.999 85.6668 206.999 80.079C206.999 75.1804 206.999 70.2825 206.999 65.3839C206.999 61.2755 206.999 57.1671 206.999 53.0587C206.999 49.8256 206.999 46.5925 206.999 43.3594C206.999 41.1383 206.999 38.9172 206.999 36.6962C206.999 35.5671 206.999 34.4381 206.999 33.3083C206.999 30.9185 206.66 28.5651 205.861 26.305C204.48 22.4019 201.872 18.9789 198.472 16.6069C195.123 14.2708 191.107 13.0286 187.026 13.0107C181.394 12.9864 175.762 13.0107 170.13 13.0107C167.664 13.0107 165.197 13.0081 162.73 13.0107C161.801 13.012 160.929 13.2025 160.329 13.9703C159.349 15.2234 159.467 17.1344 159.121 18.6074C158.65 20.613 157.861 22.602 156.5 24.1786C154.247 26.7877 150.925 26.9999 147.647 26.9999C141.667 26.9999 135.688 26.9999 129.708 26.9999C123.638 26.9999 117.569 26.9999 111.5 26.9999C108.419 26.9999 105.337 26.9999 102.255 26.9999C95.0208 26.9999 87.7864 26.9999 80.5514 26.9999C78.0994 26.9999 75.648 26.9999 73.196 26.9999C71.8385 26.9999 70.638 27.3305 69.305 27.0237C65.2161 26.0819 62.8852 22.7005 61.9271 18.8101C61.3964 16.6511 61.629 13.0075 58.5162 13.0113Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='195' height='418' viewBox='0 0 195 418' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M45.5162 1.01144C39.9232 1.01144 34.3302 1.01144 28.7371 1.01144C26.2505 1.01144 23.7638 1.01016 21.2772 1.01144C19.548 1.01208 17.8375 1.18342 16.1571 1.59899C12.1439 2.59124 8.48437 4.8481 5.79648 7.98149C3.10859 11.1155 1.43971 15.0711 1.07825 19.1801C0.987244 20.2107 1.0007 21.242 1.0007 22.2751C1.0007 23.862 1.0007 25.4482 1.0007 27.035C1.0007 29.6723 1.0007 32.3102 1.0007 34.9474C1.0007 38.5469 1.0007 42.1464 1.0007 45.7452C1.0007 50.1988 1.0007 54.6531 1.0007 59.1067C1.0007 64.2988 1.0007 69.4902 1.0007 74.6822C1.0007 80.5226 1.0007 86.3635 1.0007 92.2039C1.0007 98.6113 1.0007 105.019 1.0007 111.426C1.0007 118.284 1.0007 125.141 1.0007 131.999C1.0007 139.185 1.0007 146.37 1.0007 153.557C1.0007 160.989 1.0007 168.422 1.0007 175.854C1.0007 183.475 1.0007 191.097 1.0007 198.717C1.0007 206.341 1.0007 213.966 1.0007 221.59C1.0007 229.159 1.0007 236.729 1.0007 244.298C1.0007 251.711 1.0007 259.125 1.0007 266.538C1.0007 273.734 1.0007 280.93 1.0007 288.127C1.0007 294.925 1.0007 301.724 1.0007 308.522C1.0007 314.863 1.0007 321.204 1.0007 327.546C1.0007 333.329 1.0007 339.112 1.0007 344.895C1.0007 350.047 1.0007 355.198 1.0007 360.35C1.0007 364.712 1.0007 369.074 1.0007 373.435C1.0007 376.938 1.0007 380.44 1.0007 383.942C1.0007 386.489 1.0007 389.037 1.0007 391.585C1.0007 393.066 1.0007 394.547 1.0007 396.028C1.0007 397.372 1.02249 398.706 1.22373 400.041C1.83578 404.099 3.72256 407.923 6.57324 410.883C9.43673 413.855 13.2167 415.896 17.2793 416.656C19.2244 417.02 21.1689 417 23.1345 417C26.344 417 29.5536 417 32.7632 417C37.9871 417 43.2116 417 48.4355 417C55.0841 417 61.7327 417 68.3813 417C75.8265 417 83.2723 417 90.7176 417C98.3236 417 105.93 417 113.536 417C120.713 417 127.89 417 135.066 417C141.234 417 147.401 417 153.568 417C158.044 417 162.521 417 166.997 417C169.21 417 171.422 417 173.635 417C176.674 417 179.646 416.434 182.414 415.159C186.181 413.423 189.35 410.506 191.398 406.908C193.112 403.898 193.987 400.483 193.999 397.026C194.001 396.226 193.999 395.427 193.999 394.627C193.999 392.707 193.999 390.786 193.999 388.866C193.999 385.907 193.999 382.947 193.999 379.988C193.999 376.123 193.999 372.258 193.999 368.394C193.999 363.71 193.999 359.027 193.999 354.343C193.999 348.925 193.999 343.507 193.999 338.09C193.999 332.051 193.999 326.012 193.999 319.973C193.999 313.433 193.999 306.893 193.999 300.353C193.999 293.397 193.999 286.441 193.999 279.485C193.999 272.192 193.999 264.899 193.999 257.605C193.999 250.096 193.999 242.586 193.999 235.077C193.999 227.473 193.999 219.869 193.999 212.266C193.999 204.648 193.999 197.03 193.999 189.412C193.999 181.838 193.999 174.265 193.999 166.691C193.999 159.347 193.999 152.003 193.999 144.659C193.999 137.603 193.999 130.546 193.999 123.489C193.999 116.82 193.999 110.152 193.999 103.483C193.999 97.27 193.999 91.0563 193.999 84.8432C193.999 79.2554 193.999 73.667 193.999 68.0792C193.999 63.1806 193.999 58.2826 193.999 53.384C193.999 49.2756 193.999 45.1672 193.999 41.0589C193.999 37.8257 193.999 34.5926 193.999 31.3595C193.999 29.1384 193.999 26.9174 193.999 24.6963C193.999 23.5672 193.999 22.4382 193.999 21.3085C193.999 18.9186 193.66 16.5652 192.861 14.3052C191.48 10.402 188.872 6.97901 185.472 4.60707C182.123 2.27093 178.107 1.0287 174.026 1.0108C168.394 0.986503 162.762 1.0108 157.13 1.0108C154.664 1.0108 152.197 1.00824 149.73 1.0108C148.801 1.01208 147.929 1.2026 147.329 1.97044C146.349 3.22354 146.467 5.13452 146.121 6.60755C145.65 8.61315 144.861 10.6021 143.5 12.1787C141.247 14.7879 137.925 15 134.647 15C128.667 15 122.688 15 116.708 15C110.638 15 104.569 15 98.5 15C95.4186 15 92.3366 15 89.2552 15C82.0208 15 74.7864 15 67.5514 15C65.0994 15 62.648 15 60.196 15C58.8385 15 57.638 15.3307 56.305 15.0238C52.2161 14.082 49.8852 10.7006 48.9271 6.81022C48.3964 4.65118 48.629 1.0076 45.5162 1.01144Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "Pixel 3",
          deviceWidth: 190,
          deviceHeight: 405,
          borderlessWidth: 176,
          borderlessHeight: 350,
          cornerRadius: 26,
          cornerRadiusBorderless: 10,
          deviceSVG: "<svg width='192' height='407' viewBox='0 0 192 407' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M166.061 405.998C170.541 405.959 174.937 404.793 178.797 402.506C182.628 400.236 185.815 396.933 187.949 393.029C189.949 389.373 190.982 385.253 190.999 381.09C191.002 380.47 190.999 379.849 190.999 379.229C190.999 377.585 190.999 375.941 190.999 374.297C190.999 371.718 190.999 369.139 190.999 366.56C190.999 363.136 190.999 359.71 190.999 356.286C190.999 352.089 190.999 347.892 190.999 343.696C190.999 338.843 190.999 333.991 190.999 329.138C190.999 323.687 190.999 318.237 190.999 312.787C190.999 306.863 190.999 300.939 190.999 295.015C190.999 288.689 190.999 282.364 190.999 276.039C190.999 269.4 190.999 262.762 190.999 256.124C190.999 249.262 190.999 242.399 190.999 235.537C190.999 228.517 190.999 221.497 190.999 214.477C190.999 207.433 190.999 200.39 190.999 193.346C190.999 186.323 190.999 179.299 190.999 172.276C190.999 165.407 190.999 158.538 190.999 151.669C190.999 145.02 190.999 138.372 190.999 131.723C190.999 125.384 190.999 119.045 190.999 112.705C190.999 106.764 190.999 100.823 190.999 94.8816C190.999 89.4108 190.999 83.9393 190.999 78.4685C190.999 73.5918 190.999 68.715 190.999 63.8383C190.999 59.6143 190.999 55.3896 190.999 51.1656C190.999 47.7096 190.999 44.2536 190.999 40.7982C190.999 38.1853 190.999 35.5716 190.999 32.9586C190.999 31.2767 190.999 29.5947 190.999 27.9127C190.999 27.2511 191.002 26.5889 190.999 25.9273C190.983 21.9324 190.039 17.9696 188.187 14.4229C186.127 10.4792 183.017 7.10849 179.229 4.76288C175.425 2.40772 171.012 1.09748 166.536 1.0129C165.15 0.986984 163.762 1.00813 162.375 1.00813C158.857 1.00813 155.338 1.00813 151.819 1.00813C146.581 1.00813 141.342 1.00813 136.104 1.00813C129.719 1.00813 123.334 1.00813 116.948 1.00813C109.988 1.00813 103.028 1.00813 96.0683 1.00813C89.0846 1.00813 82.1009 1.00813 75.1179 1.00813C68.7108 1.00813 62.3037 1.00813 55.8959 1.00813C50.6576 1.00813 45.4193 1.00813 40.1811 1.00813C36.6622 1.00813 33.1434 1.00813 29.6246 1.00813C28.2378 1.00813 26.8497 0.986984 25.4636 1.0129C21.0082 1.09611 16.6054 2.39544 12.816 4.73491C9.02668 7.07438 5.90066 10.4342 3.83691 14.3759C1.97263 17.9369 1.01624 21.912 1.00121 25.9259C0.998482 26.5882 1.00121 27.2505 1.00121 27.9127C1.00121 29.5947 1.00121 31.2767 1.00121 32.9586C1.00121 35.5716 1.00121 38.1853 1.00121 40.7982C1.00121 44.2542 1.00121 47.7103 1.00121 51.1656C1.00121 55.3753 1.00121 59.5849 1.00121 63.7946C1.00121 68.6693 1.00121 73.544 1.00121 78.4187C1.00121 83.8882 1.00121 89.3569 1.00121 94.8264C1.00121 100.786 1.00121 106.745 1.00121 112.705C1.00121 119.044 1.00121 125.383 1.00121 131.723C1.00121 138.372 1.00121 145.02 1.00121 151.669C1.00121 158.538 1.00121 165.407 1.00121 172.276C1.00121 179.277 1.00121 186.277 1.00121 193.279C1.00121 200.322 1.00121 207.366 1.00121 214.41C1.00121 221.43 1.00121 228.45 1.00121 235.47C1.00121 242.355 1.00121 249.24 1.00121 256.124C1.00121 262.762 1.00121 269.4 1.00121 276.039C1.00121 282.364 1.00121 288.689 1.00121 295.015C1.00121 300.939 1.00121 306.863 1.00121 312.787C1.00121 318.22 1.00121 323.654 1.00121 329.088C1.00121 333.942 1.00121 338.797 1.00121 343.651C1.00121 347.85 1.00121 352.05 1.00121 356.248C1.00121 359.685 1.00121 363.123 1.00121 366.56C1.00121 369.139 1.00121 371.718 1.00121 374.296C1.00121 375.94 1.00121 377.585 1.00121 379.228C1.00121 379.849 0.998482 380.47 1.00121 381.09C1.01761 385.244 2.04709 389.357 4.0398 393.009C6.17186 396.915 9.35527 400.219 13.1842 402.493C17.0289 404.778 21.4468 405.977 25.9165 405.997C27.25 406.003 28.5835 405.997 29.9163 405.997C33.5123 405.997 37.1083 405.997 40.7043 405.997C45.9979 405.997 51.2909 405.997 56.5845 405.997C63.0025 405.997 69.4213 405.997 75.8393 405.997C82.81 405.997 89.7807 405.997 96.7508 405.997C103.701 405.997 110.651 405.997 117.601 405.997C123.978 405.997 130.354 405.997 136.73 405.997C141.931 405.997 147.133 405.997 152.334 405.997C155.775 405.997 159.215 405.997 162.656 405.997C163.792 405.998 164.926 405.998 166.061 405.998Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M115.766 396.941C117.06 396.94 118.108 395.677 117.991 394.258C117.877 392.872 116.811 392.033 115.613 392.019C112.028 391.977 108.44 392.019 104.853 392.019C98.9511 392.019 93.0484 392.019 87.1463 392.019C83.5634 392.019 79.9784 391.982 76.3961 392.019C75.1995 392.031 74.1308 392.859 74.0104 394.245C73.8839 395.7 74.9317 396.884 76.2218 396.941C79.2024 397.073 82.212 396.941 85.194 396.941C91.0624 396.941 96.9308 396.941 102.799 396.941C106.91 396.941 111.022 396.941 115.135 396.941C115.346 396.941 115.556 396.941 115.766 396.941Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M9.00212 369.864C9.00892 373.62 11.3831 377.074 14.8983 378.407C16.4301 378.988 17.974 379 19.5725 379C21.788 379 24.0036 379 26.2192 379C29.9182 379 33.6172 379 37.3162 379C42.1693 379 47.0231 379 51.8761 379C57.5499 379 63.2229 379 68.8966 379C75.0562 379 81.2157 379 87.3753 379C93.6873 379 99.9986 379 106.311 379C112.44 379 118.57 379 124.699 379C130.313 379 135.926 379 141.54 379C146.304 379 151.067 379 155.831 379C159.42 379 163.01 379 166.6 379C168.651 379 170.702 379 172.753 379C174.591 379 176.354 378.853 178.035 377.989C181.077 376.427 182.963 373.255 182.995 369.853C183 369.297 182.995 368.74 182.995 368.183C182.995 366.736 182.995 365.289 182.995 363.843C182.995 361.581 182.995 359.319 182.995 357.057C182.995 354.054 182.995 351.051 182.995 348.048C182.995 344.379 182.995 340.71 182.995 337.04C182.995 332.779 182.995 328.518 182.995 324.256C182.995 319.478 182.995 314.699 182.995 309.921C182.995 304.681 182.995 299.44 182.995 294.199C182.995 288.629 182.995 283.059 182.995 277.489C182.995 271.584 182.995 265.679 182.995 259.775C182.995 253.694 182.995 247.614 182.995 241.533C182.995 235.263 182.995 228.994 182.995 222.725C182.995 216.408 182.995 210.092 182.995 203.775C182.995 197.463 182.995 191.151 182.995 184.839C182.995 178.606 182.995 172.373 182.995 166.141C182.995 160.062 182.995 153.983 182.995 147.904C182.995 142.054 182.995 136.204 182.995 130.354C182.995 124.806 182.995 119.259 182.995 113.712C182.995 108.542 182.995 103.372 182.995 98.2024C182.995 93.4845 182.995 88.7673 182.995 84.0495C182.995 79.8447 182.995 75.6392 182.995 71.4345C182.995 67.8585 182.995 64.2825 182.995 60.7072C182.995 57.7838 182.995 54.8604 182.995 51.9376C182.995 49.7832 182.995 47.6281 182.995 45.4736C182.995 44.1317 182.995 42.7891 182.995 41.4471C182.995 40.8667 183.012 40.2828 182.984 39.7024C182.808 35.9664 180.277 32.6361 176.727 31.4623C175.256 30.9757 173.779 31.0002 172.261 31.0002C169.991 31.0002 167.72 31.0002 165.451 31.0002C161.705 31.0002 157.959 31.0002 154.213 31.0002C149.324 31.0002 144.436 31.0002 139.547 31.0002C133.829 31.0002 128.111 31.0002 122.393 31.0002C116.243 31.0002 110.094 31.0002 103.945 31.0002C97.6115 31.0002 91.2778 31.0002 84.9447 31.0002C78.8504 31.0002 72.7555 31.0002 66.6613 31.0002C61.0536 31.0002 55.4459 31.0002 49.8382 31.0002C45.1151 31.0002 40.3919 31.0002 35.6688 31.0002C32.1434 31.0002 28.6172 31.0002 25.0917 31.0002C23.0973 31.0002 21.1028 31.0002 19.1084 31.0002C17.1806 31.0002 15.3352 31.218 13.6157 32.1979C10.7618 33.8236 9.02797 36.8906 9.00212 40.159C8.99735 40.749 9.00212 41.3383 9.00212 41.9283C9.00212 43.4056 9.00212 44.8823 9.00212 46.3596C9.00212 48.6495 9.00212 50.9394 9.00212 53.2292C9.00212 56.2697 9.00212 59.3094 9.00212 62.3499C9.00212 66.03 9.00212 69.7094 9.00212 73.3895C9.00212 77.6868 9.00212 81.9842 9.00212 86.2815C9.00212 91.079 9.00212 95.8765 9.00212 100.673C9.00212 105.91 9.00212 111.147 9.00212 116.384C9.00212 121.987 9.00212 127.59 9.00212 133.192C9.00212 139.085 9.00212 144.978 9.00212 150.871C9.00212 156.981 9.00212 163.09 9.00212 169.199C9.00212 175.45 9.00212 181.701 9.00212 187.951C9.00212 194.269 9.00212 200.587 9.00212 206.905C9.00212 213.215 9.00212 219.526 9.00212 225.836C9.00212 232.087 9.00212 238.338 9.00212 244.588C9.00212 250.638 9.00212 256.688 9.00212 262.738C9.00212 268.599 9.00212 274.46 9.00212 280.321C9.00212 285.836 9.00212 291.35 9.00212 296.865C9.00212 302.038 9.00212 307.21 9.00212 312.382C9.00212 317.081 9.00212 321.779 9.00212 326.477C9.00212 330.646 9.00212 334.815 9.00212 338.984C9.00212 342.548 9.00212 346.113 9.00212 349.678C9.00212 352.564 9.00212 355.449 9.00212 358.335C9.00212 360.468 9.00212 362.601 9.00212 364.733C9.00212 366.039 9.00212 367.343 9.00212 368.648C9.00212 369.054 9.00212 369.459 9.00212 369.864Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M115.766 17.9406C117.06 17.9399 118.108 16.6773 117.991 15.2584C117.877 13.8721 116.811 13.0329 115.613 13.0188C112.028 12.9765 108.44 13.0188 104.853 13.0188C98.9511 13.0188 93.0484 13.0188 87.1463 13.0188C83.5634 13.0188 79.9784 12.9825 76.3961 13.0188C75.1995 13.0306 74.1308 13.8587 74.0104 15.2451C73.8839 16.6996 74.9317 17.8843 76.2218 17.9414C79.2024 18.0733 82.212 17.9414 85.194 17.9414C91.0624 17.9414 96.9308 17.9414 102.799 17.9414C106.91 17.9414 111.022 17.9414 115.135 17.9414C115.346 17.9406 115.556 17.9406 115.766 17.9406Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='176' height='350' viewBox='0 0 176 350' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1.00212 339.864C1.00892 343.62 3.38306 347.074 6.89834 348.407C8.43006 348.988 9.97404 349 11.5725 349C13.788 349 16.0036 349 18.2192 349C21.9182 349 25.6172 349 29.3162 349C34.1693 349 39.0231 349 43.8761 349C49.5499 349 55.2229 349 60.8966 349C67.0562 349 73.2157 349 79.3753 349C85.6873 349 91.9986 349 98.3106 349C104.44 349 110.57 349 116.699 349C122.313 349 127.926 349 133.54 349C138.304 349 143.067 349 147.831 349C151.42 349 155.01 349 158.6 349C160.651 349 162.702 349 164.753 349C166.591 349 168.354 348.853 170.035 347.989C173.077 346.427 174.963 343.255 174.995 339.853C175 339.297 174.995 338.74 174.995 338.183C174.995 336.736 174.995 335.289 174.995 333.843C174.995 331.581 174.995 329.319 174.995 327.057C174.995 324.054 174.995 321.051 174.995 318.048C174.995 314.379 174.995 310.71 174.995 307.04C174.995 302.779 174.995 298.518 174.995 294.256C174.995 289.478 174.995 284.699 174.995 279.921C174.995 274.681 174.995 269.44 174.995 264.199C174.995 258.629 174.995 253.059 174.995 247.489C174.995 241.584 174.995 235.679 174.995 229.775C174.995 223.694 174.995 217.614 174.995 211.533C174.995 205.263 174.995 198.994 174.995 192.725C174.995 186.408 174.995 180.092 174.995 173.775C174.995 167.463 174.995 161.151 174.995 154.839C174.995 148.606 174.995 142.373 174.995 136.141C174.995 130.062 174.995 123.983 174.995 117.904C174.995 112.054 174.995 106.204 174.995 100.354C174.995 94.8063 174.995 89.2589 174.995 83.7115C174.995 78.5418 174.995 73.3721 174.995 68.2024C174.995 63.4845 174.995 58.7673 174.995 54.0495C174.995 49.8447 174.995 45.6392 174.995 41.4345C174.995 37.8585 174.995 34.2825 174.995 30.7072C174.995 27.7838 174.995 24.8604 174.995 21.9376C174.995 19.7832 174.995 17.6281 174.995 15.4736C174.995 14.1317 174.995 12.7891 174.995 11.4471C174.995 10.8667 175.012 10.2828 174.984 9.70236C174.808 5.96645 172.277 2.63611 168.727 1.46226C167.256 0.975703 165.779 1.00021 164.261 1.00021C161.991 1.00021 159.72 1.00021 157.451 1.00021C153.705 1.00021 149.959 1.00021 146.213 1.00021C141.324 1.00021 136.436 1.00021 131.547 1.00021C125.829 1.00021 120.111 1.00021 114.393 1.00021C108.243 1.00021 102.094 1.00021 95.9446 1.00021C89.6115 1.00021 83.2778 1.00021 76.9447 1.00021C70.8504 1.00021 64.7555 1.00021 58.6613 1.00021C53.0536 1.00021 47.4459 1.00021 41.8382 1.00021C37.1151 1.00021 32.3919 1.00021 27.6688 1.00021C24.1434 1.00021 20.6172 1.00021 17.0917 1.00021C15.0973 1.00021 13.1028 1.00021 11.1084 1.00021C9.18062 1.00021 7.3352 1.21796 5.61567 2.19787C2.7618 3.82357 1.02797 6.89056 1.00212 10.159C0.997354 10.749 1.00212 11.3383 1.00212 11.9283C1.00212 13.4056 1.00212 14.8823 1.00212 16.3596C1.00212 18.6495 1.00212 20.9394 1.00212 23.2292C1.00212 26.2697 1.00212 29.3094 1.00212 32.3499C1.00212 36.03 1.00212 39.7094 1.00212 43.3895C1.00212 47.6868 1.00212 51.9842 1.00212 56.2815C1.00212 61.079 1.00212 65.8765 1.00212 70.6733C1.00212 75.9103 1.00212 81.1474 1.00212 86.3845C1.00212 91.987 1.00212 97.5895 1.00212 103.192C1.00212 109.085 1.00212 114.978 1.00212 120.871C1.00212 126.981 1.00212 133.09 1.00212 139.199C1.00212 145.45 1.00212 151.701 1.00212 157.951C1.00212 164.269 1.00212 170.587 1.00212 176.905C1.00212 183.215 1.00212 189.526 1.00212 195.836C1.00212 202.087 1.00212 208.338 1.00212 214.588C1.00212 220.638 1.00212 226.688 1.00212 232.738C1.00212 238.599 1.00212 244.46 1.00212 250.321C1.00212 255.836 1.00212 261.35 1.00212 266.865C1.00212 272.038 1.00212 277.21 1.00212 282.382C1.00212 287.081 1.00212 291.779 1.00212 296.477C1.00212 300.646 1.00212 304.815 1.00212 308.984C1.00212 312.548 1.00212 316.113 1.00212 319.678C1.00212 322.564 1.00212 325.449 1.00212 328.335C1.00212 330.468 1.00212 332.601 1.00212 334.733C1.00212 336.039 1.00212 337.343 1.00212 338.648C1.00212 339.054 1.00212 339.459 1.00212 339.864Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='192' height='407' viewBox='0 0 192 407' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M166.061 405.998C170.541 405.959 174.937 404.793 178.797 402.506C182.628 400.236 185.815 396.933 187.949 393.029C189.949 389.373 190.982 385.253 190.999 381.09C191.002 380.47 190.999 379.849 190.999 379.229C190.999 377.585 190.999 375.941 190.999 374.297C190.999 371.718 190.999 369.139 190.999 366.56C190.999 363.136 190.999 359.71 190.999 356.286C190.999 352.089 190.999 347.892 190.999 343.696C190.999 338.843 190.999 333.991 190.999 329.138C190.999 323.687 190.999 318.237 190.999 312.787C190.999 306.863 190.999 300.939 190.999 295.015C190.999 288.689 190.999 282.364 190.999 276.039C190.999 269.4 190.999 262.762 190.999 256.124C190.999 249.262 190.999 242.399 190.999 235.537C190.999 228.517 190.999 221.497 190.999 214.477C190.999 207.433 190.999 200.39 190.999 193.346C190.999 186.323 190.999 179.299 190.999 172.276C190.999 165.407 190.999 158.538 190.999 151.669C190.999 145.02 190.999 138.372 190.999 131.723C190.999 125.384 190.999 119.045 190.999 112.705C190.999 106.764 190.999 100.823 190.999 94.8816C190.999 89.4108 190.999 83.9393 190.999 78.4685C190.999 73.5918 190.999 68.715 190.999 63.8383C190.999 59.6143 190.999 55.3896 190.999 51.1656C190.999 47.7096 190.999 44.2536 190.999 40.7982C190.999 38.1853 190.999 35.5716 190.999 32.9586C190.999 31.2767 190.999 29.5947 190.999 27.9127C190.999 27.2511 191.002 26.5889 190.999 25.9273C190.983 21.9324 190.039 17.9696 188.187 14.4229C186.127 10.4792 183.017 7.10849 179.229 4.76288C175.425 2.40772 171.012 1.09748 166.536 1.0129C165.15 0.986984 163.762 1.00813 162.375 1.00813C158.857 1.00813 155.338 1.00813 151.819 1.00813C146.581 1.00813 141.342 1.00813 136.104 1.00813C129.719 1.00813 123.334 1.00813 116.948 1.00813C109.988 1.00813 103.028 1.00813 96.0683 1.00813C89.0846 1.00813 82.1009 1.00813 75.1179 1.00813C68.7108 1.00813 62.3037 1.00813 55.8959 1.00813C50.6576 1.00813 45.4193 1.00813 40.1811 1.00813C36.6622 1.00813 33.1434 1.00813 29.6246 1.00813C28.2378 1.00813 26.8497 0.986984 25.4636 1.0129C21.0082 1.09611 16.6054 2.39544 12.816 4.73491C9.02668 7.07438 5.90066 10.4342 3.83691 14.3759C1.97263 17.9369 1.01624 21.912 1.00121 25.9259C0.998482 26.5882 1.00121 27.2505 1.00121 27.9127C1.00121 29.5947 1.00121 31.2767 1.00121 32.9586C1.00121 35.5716 1.00121 38.1853 1.00121 40.7982C1.00121 44.2542 1.00121 47.7103 1.00121 51.1656C1.00121 55.3753 1.00121 59.5849 1.00121 63.7946C1.00121 68.6693 1.00121 73.544 1.00121 78.4187C1.00121 83.8882 1.00121 89.3569 1.00121 94.8264C1.00121 100.786 1.00121 106.745 1.00121 112.705C1.00121 119.044 1.00121 125.383 1.00121 131.723C1.00121 138.372 1.00121 145.02 1.00121 151.669C1.00121 158.538 1.00121 165.407 1.00121 172.276C1.00121 179.277 1.00121 186.277 1.00121 193.279C1.00121 200.322 1.00121 207.366 1.00121 214.41C1.00121 221.43 1.00121 228.45 1.00121 235.47C1.00121 242.355 1.00121 249.24 1.00121 256.124C1.00121 262.762 1.00121 269.4 1.00121 276.039C1.00121 282.364 1.00121 288.689 1.00121 295.015C1.00121 300.939 1.00121 306.863 1.00121 312.787C1.00121 318.22 1.00121 323.654 1.00121 329.088C1.00121 333.942 1.00121 338.797 1.00121 343.651C1.00121 347.85 1.00121 352.05 1.00121 356.248C1.00121 359.685 1.00121 363.123 1.00121 366.56C1.00121 369.139 1.00121 371.718 1.00121 374.296C1.00121 375.94 1.00121 377.585 1.00121 379.228C1.00121 379.849 0.998482 380.47 1.00121 381.09C1.01761 385.244 2.04709 389.357 4.0398 393.009C6.17186 396.915 9.35527 400.219 13.1842 402.493C17.0289 404.778 21.4468 405.977 25.9165 405.997C27.25 406.003 28.5835 405.997 29.9163 405.997C33.5123 405.997 37.1083 405.997 40.7043 405.997C45.9979 405.997 51.2909 405.997 56.5845 405.997C63.0025 405.997 69.4213 405.997 75.8393 405.997C82.81 405.997 89.7807 405.997 96.7508 405.997C103.701 405.997 110.651 405.997 117.601 405.997C123.978 405.997 130.354 405.997 136.73 405.997C141.931 405.997 147.133 405.997 152.334 405.997C155.775 405.997 159.215 405.997 162.656 405.997C163.792 405.998 164.926 405.998 166.061 405.998Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M115.766 396.941C117.06 396.94 118.108 395.677 117.991 394.258C117.877 392.872 116.811 392.033 115.613 392.019C112.028 391.977 108.44 392.019 104.853 392.019C98.9511 392.019 93.0484 392.019 87.1463 392.019C83.5634 392.019 79.9784 391.982 76.3961 392.019C75.1995 392.031 74.1308 392.859 74.0104 394.245C73.8839 395.7 74.9317 396.884 76.2218 396.941C79.2024 397.073 82.212 396.941 85.194 396.941C91.0624 396.941 96.9308 396.941 102.799 396.941C106.91 396.941 111.022 396.941 115.135 396.941C115.346 396.941 115.556 396.941 115.766 396.941Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M9.00212 369.864C9.00892 373.62 11.3831 377.074 14.8983 378.407C16.4301 378.988 17.974 379 19.5725 379C21.788 379 24.0036 379 26.2192 379C29.9182 379 33.6172 379 37.3162 379C42.1693 379 47.0231 379 51.8761 379C57.5499 379 63.2229 379 68.8966 379C75.0562 379 81.2157 379 87.3753 379C93.6873 379 99.9986 379 106.311 379C112.44 379 118.57 379 124.699 379C130.313 379 135.926 379 141.54 379C146.304 379 151.067 379 155.831 379C159.42 379 163.01 379 166.6 379C168.651 379 170.702 379 172.753 379C174.591 379 176.354 378.853 178.035 377.989C181.077 376.427 182.963 373.255 182.995 369.853C183 369.297 182.995 368.74 182.995 368.183C182.995 366.736 182.995 365.289 182.995 363.843C182.995 361.581 182.995 359.319 182.995 357.057C182.995 354.054 182.995 351.051 182.995 348.048C182.995 344.379 182.995 340.71 182.995 337.04C182.995 332.779 182.995 328.518 182.995 324.256C182.995 319.478 182.995 314.699 182.995 309.921C182.995 304.681 182.995 299.44 182.995 294.199C182.995 288.629 182.995 283.059 182.995 277.489C182.995 271.584 182.995 265.679 182.995 259.775C182.995 253.694 182.995 247.614 182.995 241.533C182.995 235.263 182.995 228.994 182.995 222.725C182.995 216.408 182.995 210.092 182.995 203.775C182.995 197.463 182.995 191.151 182.995 184.839C182.995 178.606 182.995 172.373 182.995 166.141C182.995 160.062 182.995 153.983 182.995 147.904C182.995 142.054 182.995 136.204 182.995 130.354C182.995 124.806 182.995 119.259 182.995 113.712C182.995 108.542 182.995 103.372 182.995 98.2024C182.995 93.4845 182.995 88.7673 182.995 84.0495C182.995 79.8447 182.995 75.6392 182.995 71.4345C182.995 67.8585 182.995 64.2825 182.995 60.7072C182.995 57.7838 182.995 54.8604 182.995 51.9376C182.995 49.7832 182.995 47.6281 182.995 45.4736C182.995 44.1317 182.995 42.7891 182.995 41.4471C182.995 40.8667 183.012 40.2828 182.984 39.7024C182.808 35.9664 180.277 32.6361 176.727 31.4623C175.256 30.9757 173.779 31.0002 172.261 31.0002C169.991 31.0002 167.72 31.0002 165.451 31.0002C161.705 31.0002 157.959 31.0002 154.213 31.0002C149.324 31.0002 144.436 31.0002 139.547 31.0002C133.829 31.0002 128.111 31.0002 122.393 31.0002C116.243 31.0002 110.094 31.0002 103.945 31.0002C97.6115 31.0002 91.2778 31.0002 84.9447 31.0002C78.8504 31.0002 72.7555 31.0002 66.6613 31.0002C61.0536 31.0002 55.4459 31.0002 49.8382 31.0002C45.1151 31.0002 40.3919 31.0002 35.6688 31.0002C32.1434 31.0002 28.6172 31.0002 25.0917 31.0002C23.0973 31.0002 21.1028 31.0002 19.1084 31.0002C17.1806 31.0002 15.3352 31.218 13.6157 32.1979C10.7618 33.8236 9.02797 36.8906 9.00212 40.159C8.99735 40.749 9.00212 41.3383 9.00212 41.9283C9.00212 43.4056 9.00212 44.8823 9.00212 46.3596C9.00212 48.6495 9.00212 50.9394 9.00212 53.2292C9.00212 56.2697 9.00212 59.3094 9.00212 62.3499C9.00212 66.03 9.00212 69.7094 9.00212 73.3895C9.00212 77.6868 9.00212 81.9842 9.00212 86.2815C9.00212 91.079 9.00212 95.8765 9.00212 100.673C9.00212 105.91 9.00212 111.147 9.00212 116.384C9.00212 121.987 9.00212 127.59 9.00212 133.192C9.00212 139.085 9.00212 144.978 9.00212 150.871C9.00212 156.981 9.00212 163.09 9.00212 169.199C9.00212 175.45 9.00212 181.701 9.00212 187.951C9.00212 194.269 9.00212 200.587 9.00212 206.905C9.00212 213.215 9.00212 219.526 9.00212 225.836C9.00212 232.087 9.00212 238.338 9.00212 244.588C9.00212 250.638 9.00212 256.688 9.00212 262.738C9.00212 268.599 9.00212 274.46 9.00212 280.321C9.00212 285.836 9.00212 291.35 9.00212 296.865C9.00212 302.038 9.00212 307.21 9.00212 312.382C9.00212 317.081 9.00212 321.779 9.00212 326.477C9.00212 330.646 9.00212 334.815 9.00212 338.984C9.00212 342.548 9.00212 346.113 9.00212 349.678C9.00212 352.564 9.00212 355.449 9.00212 358.335C9.00212 360.468 9.00212 362.601 9.00212 364.733C9.00212 366.039 9.00212 367.343 9.00212 368.648C9.00212 369.054 9.00212 369.459 9.00212 369.864Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M115.766 17.9406C117.06 17.9399 118.108 16.6773 117.991 15.2584C117.877 13.8721 116.811 13.0329 115.613 13.0188C112.028 12.9765 108.44 13.0188 104.853 13.0188C98.9511 13.0188 93.0484 13.0188 87.1463 13.0188C83.5634 13.0188 79.9784 12.9825 76.3961 13.0188C75.1995 13.0306 74.1308 13.8587 74.0104 15.2451C73.8839 16.6996 74.9317 17.8843 76.2218 17.9414C79.2024 18.0733 82.212 17.9414 85.194 17.9414C91.0624 17.9414 96.9308 17.9414 102.799 17.9414C106.91 17.9414 111.022 17.9414 115.135 17.9414C115.346 17.9406 115.556 17.9406 115.766 17.9406Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='176' height='350' viewBox='0 0 176 350' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1.00212 339.864C1.00892 343.62 3.38306 347.074 6.89834 348.407C8.43006 348.988 9.97404 349 11.5725 349C13.788 349 16.0036 349 18.2192 349C21.9182 349 25.6172 349 29.3162 349C34.1693 349 39.0231 349 43.8761 349C49.5499 349 55.2229 349 60.8966 349C67.0562 349 73.2157 349 79.3753 349C85.6873 349 91.9986 349 98.3106 349C104.44 349 110.57 349 116.699 349C122.313 349 127.926 349 133.54 349C138.304 349 143.067 349 147.831 349C151.42 349 155.01 349 158.6 349C160.651 349 162.702 349 164.753 349C166.591 349 168.354 348.853 170.035 347.989C173.077 346.427 174.963 343.255 174.995 339.853C175 339.297 174.995 338.74 174.995 338.183C174.995 336.736 174.995 335.289 174.995 333.843C174.995 331.581 174.995 329.319 174.995 327.057C174.995 324.054 174.995 321.051 174.995 318.048C174.995 314.379 174.995 310.71 174.995 307.04C174.995 302.779 174.995 298.518 174.995 294.256C174.995 289.478 174.995 284.699 174.995 279.921C174.995 274.681 174.995 269.44 174.995 264.199C174.995 258.629 174.995 253.059 174.995 247.489C174.995 241.584 174.995 235.679 174.995 229.775C174.995 223.694 174.995 217.614 174.995 211.533C174.995 205.263 174.995 198.994 174.995 192.725C174.995 186.408 174.995 180.092 174.995 173.775C174.995 167.463 174.995 161.151 174.995 154.839C174.995 148.606 174.995 142.373 174.995 136.141C174.995 130.062 174.995 123.983 174.995 117.904C174.995 112.054 174.995 106.204 174.995 100.354C174.995 94.8063 174.995 89.2589 174.995 83.7115C174.995 78.5418 174.995 73.3721 174.995 68.2024C174.995 63.4845 174.995 58.7673 174.995 54.0495C174.995 49.8447 174.995 45.6392 174.995 41.4345C174.995 37.8585 174.995 34.2825 174.995 30.7072C174.995 27.7838 174.995 24.8604 174.995 21.9376C174.995 19.7832 174.995 17.6281 174.995 15.4736C174.995 14.1317 174.995 12.7891 174.995 11.4471C174.995 10.8667 175.012 10.2828 174.984 9.70236C174.808 5.96645 172.277 2.63611 168.727 1.46226C167.256 0.975703 165.779 1.00021 164.261 1.00021C161.991 1.00021 159.72 1.00021 157.451 1.00021C153.705 1.00021 149.959 1.00021 146.213 1.00021C141.324 1.00021 136.436 1.00021 131.547 1.00021C125.829 1.00021 120.111 1.00021 114.393 1.00021C108.243 1.00021 102.094 1.00021 95.9446 1.00021C89.6115 1.00021 83.2778 1.00021 76.9447 1.00021C70.8504 1.00021 64.7555 1.00021 58.6613 1.00021C53.0536 1.00021 47.4459 1.00021 41.8382 1.00021C37.1151 1.00021 32.3919 1.00021 27.6688 1.00021C24.1434 1.00021 20.6172 1.00021 17.0917 1.00021C15.0973 1.00021 13.1028 1.00021 11.1084 1.00021C9.18062 1.00021 7.3352 1.21796 5.61567 2.19787C2.7618 3.82357 1.02797 6.89056 1.00212 10.159C0.997354 10.749 1.00212 11.3383 1.00212 11.9283C1.00212 13.4056 1.00212 14.8823 1.00212 16.3596C1.00212 18.6495 1.00212 20.9394 1.00212 23.2292C1.00212 26.2697 1.00212 29.3094 1.00212 32.3499C1.00212 36.03 1.00212 39.7094 1.00212 43.3895C1.00212 47.6868 1.00212 51.9842 1.00212 56.2815C1.00212 61.079 1.00212 65.8765 1.00212 70.6733C1.00212 75.9103 1.00212 81.1474 1.00212 86.3845C1.00212 91.987 1.00212 97.5895 1.00212 103.192C1.00212 109.085 1.00212 114.978 1.00212 120.871C1.00212 126.981 1.00212 133.09 1.00212 139.199C1.00212 145.45 1.00212 151.701 1.00212 157.951C1.00212 164.269 1.00212 170.587 1.00212 176.905C1.00212 183.215 1.00212 189.526 1.00212 195.836C1.00212 202.087 1.00212 208.338 1.00212 214.588C1.00212 220.638 1.00212 226.688 1.00212 232.738C1.00212 238.599 1.00212 244.46 1.00212 250.321C1.00212 255.836 1.00212 261.35 1.00212 266.865C1.00212 272.038 1.00212 277.21 1.00212 282.382C1.00212 287.081 1.00212 291.779 1.00212 296.477C1.00212 300.646 1.00212 304.815 1.00212 308.984C1.00212 312.548 1.00212 316.113 1.00212 319.678C1.00212 322.564 1.00212 325.449 1.00212 328.335C1.00212 330.468 1.00212 332.601 1.00212 334.733C1.00212 336.039 1.00212 337.343 1.00212 338.648C1.00212 339.054 1.00212 339.459 1.00212 339.864Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "Pixel 3 XL",
          deviceWidth: 215,
          deviceHeight: 441,
          borderlessWidth: 201,
          borderlessHeight: 407,
          cornerRadius: 26,
          cornerRadiusBorderless: 18,
          deviceSVG: "<svg width='217' height='443' viewBox='0 0 217 443' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M190.909 441.998C195.368 441.993 199.796 440.794 203.639 438.531C207.371 436.334 210.504 433.173 212.663 429.421C214.846 425.624 215.98 421.305 216 416.93C216.003 416.282 216 415.634 216 414.985C216 413.143 216 411.301 216 409.458C216 406.55 216 403.642 216 400.733C216 396.854 216 392.976 216 389.098C216 384.337 216 379.578 216 374.817C216 369.291 216 363.765 216 358.239C216 352.072 216 345.905 216 339.739C216 333.02 216 326.301 216 319.581C216 312.391 216 305.201 216 298.01C216 290.475 216 282.939 216 275.403C216 267.651 216 259.899 216 252.146C216 244.26 216 236.373 216 228.486C216 220.544 216 212.602 216 204.659C216 196.791 216 188.923 216 181.056C216 173.392 216 165.727 216 158.062C216 150.658 216 143.253 216 135.849C216 128.834 216 121.819 216 114.804C216 108.304 216 101.804 216 95.3026C216 89.3981 216 83.4936 216 77.5891C216 72.3696 216 67.1507 216 61.9312C216 57.5221 216 53.1123 216 48.7032C216 45.2183 216 41.7334 216 38.2485C216 35.7769 216 33.3053 216 30.8344C216 29.4787 216 28.1222 216 26.7664C216 24.5882 215.829 22.4294 215.324 20.3032C214.353 16.2069 212.34 12.3751 209.51 9.25566C206.644 6.09614 202.979 3.6914 198.935 2.32819C196.078 1.36541 193.129 1.0103 190.126 1.0103C187.595 1.0103 185.065 1.0103 182.533 1.0103C177.784 1.0103 173.035 1.0103 168.285 1.0103C161.883 1.0103 155.481 1.0103 149.078 1.0103C141.627 1.0103 134.176 1.0103 126.725 1.0103C118.843 1.0103 110.961 1.0103 103.078 1.0103C95.3298 1.0103 87.5819 1.0103 79.8332 1.0103C72.7858 1.0103 65.7384 1.0103 58.691 1.0103C52.9621 1.0103 47.2324 1.0103 41.5035 1.0103C37.6931 1.0103 33.8835 1.0103 30.0731 1.0103C28.562 1.0103 27.0487 0.98356 25.5377 1.01625C21.096 1.11431 16.7093 2.41065 12.9272 4.73888C9.24918 7.00321 6.18541 10.2214 4.10473 14.0035C2.0709 17.7001 1.02089 21.8677 1.0023 26.0829C0.999324 26.7775 1.0023 27.4721 1.0023 28.166C1.0023 30.0507 1.0023 31.9354 1.0023 33.8201C1.0023 36.7672 1.0023 39.7135 1.0023 42.6605C1.0023 46.5734 1.0023 50.4862 1.0023 54.399C1.0023 59.1899 1.0023 63.9808 1.0023 68.7717C1.0023 74.3248 1.0023 79.8772 1.0023 85.4303C1.0023 91.6194 1.0023 97.8091 1.0023 103.998C1.0023 110.736 1.0023 117.474 1.0023 124.212C1.0023 131.417 1.0023 138.621 1.0023 145.827C1.0023 153.374 1.0023 160.921 1.0023 168.467C1.0023 176.226 1.0023 183.985 1.0023 191.744C1.0023 199.634 1.0023 207.524 1.0023 215.414C1.0023 223.38 1.0023 231.346 1.0023 239.312C1.0023 247.151 1.0023 254.989 1.0023 262.827C1.0023 270.483 1.0023 278.139 1.0023 285.795C1.0023 293.187 1.0023 300.579 1.0023 307.97C1.0023 314.968 1.0023 321.966 1.0023 328.965C1.0023 335.446 1.0023 341.925 1.0023 348.405C1.0023 354.285 1.0023 360.165 1.0023 366.045C1.0023 371.236 1.0023 376.427 1.0023 381.618C1.0023 385.995 1.0023 390.372 1.0023 394.749C1.0023 398.198 1.0023 401.647 1.0023 405.095C1.0023 407.527 1.0023 409.958 1.0023 412.39C1.0023 413.702 1.0023 415.014 1.0023 416.326C1.0023 418.647 1.21721 420.945 1.79947 423.2C2.85543 427.291 4.96065 431.085 7.86379 434.156C10.787 437.248 14.5 439.565 18.5594 440.843C21.3153 441.71 24.1441 442 27.019 442C29.644 442 32.269 442 34.8933 442C39.7143 442 44.5353 442 49.3562 442C55.8087 442 62.2605 442 68.713 442C76.1917 442 83.6704 442 91.1491 442C99.0368 442 106.924 442 114.813 442C122.544 442 130.277 442 138.008 442C145.017 442 152.026 442 159.035 442C164.704 442 170.372 442 176.041 442C179.768 442 183.496 442 187.223 442C188.453 441.998 189.68 441.998 190.909 441.998Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M139.842 30.3968C138.294 32.1698 136.177 33.3917 133.863 33.8232C132.618 34.055 131.347 34 130.087 34C124.097 34 118.106 34 112.116 34C105.048 34 97.98 34 90.9115 34C86 33.8232 83.7526 34.4761 80.6325 33.0188C76.9119 31.2814 74.6511 27.4673 74.2492 23.4556C74.0238 21.2042 74.3842 18.5245 73.6798 16.3266C72.9598 14.0812 71.4754 12.1144 69.5157 10.8086C66.2251 8.6159 62.3131 9.05637 58.562 9.05637C51.392 9.05637 44.222 9.05637 37.0512 9.05637C34.2144 9.05637 31.3783 9.05637 28.5414 9.05637C27.1645 9.05637 25.7765 9.01032 24.4055 9.16407C20.6722 9.58374 17.1235 11.2364 14.3986 13.8279C11.6589 16.4343 9.8208 19.9254 9.22021 23.6623C9.0126 24.9554 9 26.2486 9 27.5514C9 29.0793 9 30.6079 9 32.1358C9 34.7615 9 37.3872 9 40.013C9 43.5998 9 47.1859 9 50.7728C9 55.2614 9 59.7507 9 64.2393C9 69.4699 9 74.6997 9 79.9304C9 85.8451 9 91.7598 9 97.6745C9 104.154 9 110.634 9 117.113C9 124.053 9 130.993 9 137.934C9 145.231 9 152.528 9 159.825C9 167.374 9 174.924 9 182.474C9 190.173 9 197.872 9 205.57C9 213.289 9 221.008 9 228.727C9 236.436 9 244.145 9 251.854C9 259.352 9 266.849 9 274.347C9 281.625 9 288.902 9 296.181C9 303.043 9 309.904 9 316.766C9 323.195 9 329.625 9 336.054C9 341.866 9 347.677 9 353.489C9 358.637 9 363.785 9 368.934C9 373.296 9 377.657 9 382.019C9 385.49 9 388.961 9 392.432C9 394.908 9 397.384 9 399.861C9 401.236 9 402.611 9 403.986C9 405.262 9.0734 406.506 9.48937 407.731C10.4763 410.641 12.9157 412.912 15.8838 413.686C17.2948 414.054 18.7444 413.983 20.188 413.983C23.0568 413.983 25.9248 413.983 28.7935 413.983C33.5552 413.983 38.3169 413.983 43.0786 413.983C49.221 413.983 55.3626 413.983 61.5049 413.983C68.6504 413.983 75.7952 413.983 82.9407 413.983C90.546 413.983 98.1512 413.983 105.757 413.983C113.44 413.983 121.123 413.983 128.806 413.983C136.088 413.983 143.37 413.983 150.653 413.983C157.081 413.983 163.509 413.983 169.937 413.983C175.057 413.983 180.177 413.983 185.296 413.983C188.646 413.983 191.995 413.983 195.345 413.983C196.613 413.983 197.888 414.026 199.156 413.976C202.167 413.858 204.993 412.219 206.593 409.66C207.582 408.08 207.998 406.299 207.998 404.451C207.999 403.35 207.998 402.248 207.998 401.147C207.998 398.912 207.998 396.678 207.998 394.443C207.998 391.207 207.998 387.971 207.998 384.734C207.998 380.573 207.998 376.412 207.998 372.252C207.998 367.281 207.998 362.308 207.998 357.337C207.998 351.658 207.998 345.979 207.998 340.3C207.998 334.018 207.998 327.735 207.998 321.453C207.998 314.671 207.998 307.89 207.998 301.108C207.998 293.932 207.998 286.754 207.998 279.578C207.998 272.133 207.998 264.689 207.998 257.245C207.998 249.566 207.998 241.886 207.998 234.206C207.998 226.492 207.998 218.777 207.998 211.063C207.998 203.32 207.998 195.577 207.998 187.834C207.998 180.264 207.998 172.694 207.998 165.124C207.998 157.735 207.998 150.346 207.998 142.956C207.998 135.945 207.998 128.934 207.998 121.923C207.998 115.325 207.998 108.728 207.998 102.13C207.998 96.0723 207.998 90.0143 207.998 83.9569C207.998 78.5436 207.998 73.1303 207.998 67.7162C207.998 63.0508 207.998 58.3855 207.998 53.7201C207.998 49.9067 207.998 46.094 207.998 42.2806C207.998 39.4232 207.998 36.5665 207.998 33.709C207.998 31.916 207.998 30.1229 207.998 28.3299C207.998 27.6933 208.002 27.056 207.998 26.4194C207.978 22.6202 206.742 18.8959 204.434 15.8728C202.097 12.8118 198.753 10.5857 195.03 9.61568C191.662 8.73772 188.014 9.05637 184.571 9.05637C177.311 9.05637 170.051 9.05637 162.792 9.05637C160.146 9.05637 157.501 9.05637 154.855 9.05637C153.385 9.05637 151.944 9.03557 150.509 9.42924C145.798 10.7232 142.823 15.5109 142.818 20.3122C142.817 22.1981 142.82 24.0238 142.286 25.851C141.802 27.5163 140.979 29.0843 139.842 30.3968Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M117.905 26.9779C119.522 26.9772 120.543 25.2638 119.694 23.9804C119.294 23.377 118.621 23.0753 117.88 23.0486C114.913 22.9392 111.919 23.0486 108.95 23.0486C105.723 23.0486 102.492 23.0073 99.2648 23.0486C98.5245 23.0578 97.8502 23.2746 97.3967 23.8556C96.4319 25.0912 97.3351 26.8404 98.9419 26.9737C99.617 27.0298 100.317 26.9786 100.994 26.9786C102.801 26.9786 104.608 26.9786 106.414 26.9786C110.027 26.9786 113.641 26.9786 117.254 26.9786C117.471 26.9779 117.688 26.9779 117.905 26.9779Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M137.73 430C139.381 430 140.497 428.059 139.777 426.447C138.942 424.578 136.69 425.054 135.145 425.054C128.977 425.054 122.809 425.054 116.641 425.054C108.72 425.054 100.798 425.054 92.8759 425.054C88.4096 425.054 83.9418 425.014 79.4755 425.054C78.0023 425.068 76.7316 426.328 77.0491 428.02C77.4281 430.042 79.2114 430 80.7039 430C86.3185 430 91.9331 430 97.5477 430C105.513 430 113.478 430 121.443 430C126.616 430 131.79 430 136.963 430C137.219 430 137.474 430 137.73 430Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='201' height='407' viewBox='0 0 201 407' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M131.842 22.3968C130.294 24.1698 128.177 25.3917 125.863 25.8232C124.618 26.055 123.347 26 122.087 26C116.097 26 110.106 26 104.116 26C97.0476 26 89.98 26 82.9115 26C78 25.8232 75.7526 26.4761 72.6325 25.0188C68.9119 23.2814 66.6511 19.4673 66.2492 15.4556C66.0238 13.2042 66.3842 10.5245 65.6798 8.32664C64.9598 6.08123 63.4754 4.11437 61.5157 2.80857C58.2251 0.615904 54.3131 1.05637 50.562 1.05637C43.392 1.05637 36.222 1.05637 29.0512 1.05637C26.2144 1.05637 23.3783 1.05637 20.5414 1.05637C19.1645 1.05637 17.7765 1.01032 16.4055 1.16407C12.6722 1.58374 9.12353 3.23641 6.39863 5.82794C3.65891 8.43434 1.8208 11.9254 1.22021 15.6623C1.0126 16.9554 1 18.2486 1 19.5514C1 21.0793 1 22.6079 1 24.1358C1 26.7615 1 29.3872 1 32.013C1 35.5998 1 39.1859 1 42.7728C1 47.2614 1 51.7507 1 56.2393C1 61.4699 1 66.6997 1 71.9304C1 77.8451 1 83.7598 1 89.6745C1 96.1537 1 102.634 1 109.113C1 116.053 1 122.993 1 129.934C1 137.231 1 144.528 1 151.825C1 159.374 1 166.924 1 174.474C1 182.173 1 189.872 1 197.57C1 205.289 1 213.008 1 220.727C1 228.436 1 236.145 1 243.854C1 251.352 1 258.849 1 266.347C1 273.625 1 280.902 1 288.181C1 295.043 1 301.904 1 308.766C1 315.195 1 321.625 1 328.054C1 333.866 1 339.677 1 345.489C1 350.637 1 355.785 1 360.934C1 365.296 1 369.657 1 374.019C1 377.49 1 380.961 1 384.432C1 386.908 1 389.384 1 391.861C1 393.236 1 394.611 1 395.986C1 397.262 1.0734 398.506 1.48937 399.731C2.47626 402.641 4.91569 404.912 7.88379 405.686C9.29481 406.054 10.7444 405.983 12.188 405.983C15.0568 405.983 17.9248 405.983 20.7935 405.983C25.5552 405.983 30.3169 405.983 35.0786 405.983C41.221 405.983 47.3626 405.983 53.5049 405.983C60.6504 405.983 67.7952 405.983 74.9407 405.983C82.546 405.983 90.1512 405.983 97.7572 405.983C105.44 405.983 113.123 405.983 120.806 405.983C128.088 405.983 135.37 405.983 142.653 405.983C149.081 405.983 155.509 405.983 161.937 405.983C167.057 405.983 172.177 405.983 177.296 405.983C180.646 405.983 183.995 405.983 187.345 405.983C188.613 405.983 189.888 406.026 191.156 405.976C194.167 405.858 196.993 404.219 198.593 401.66C199.582 400.08 199.998 398.299 199.998 396.451C199.999 395.35 199.998 394.248 199.998 393.147C199.998 390.912 199.998 388.678 199.998 386.443C199.998 383.207 199.998 379.971 199.998 376.734C199.998 372.573 199.998 368.412 199.998 364.252C199.998 359.281 199.998 354.308 199.998 349.337C199.998 343.658 199.998 337.979 199.998 332.3C199.998 326.018 199.998 319.735 199.998 313.453C199.998 306.671 199.998 299.89 199.998 293.108C199.998 285.932 199.998 278.754 199.998 271.578C199.998 264.133 199.998 256.689 199.998 249.245C199.998 241.566 199.998 233.886 199.998 226.206C199.998 218.492 199.998 210.777 199.998 203.063C199.998 195.32 199.998 187.577 199.998 179.834C199.998 172.264 199.998 164.694 199.998 157.124C199.998 149.735 199.998 142.346 199.998 134.956C199.998 127.945 199.998 120.934 199.998 113.923C199.998 107.325 199.998 100.728 199.998 94.1296C199.998 88.0723 199.998 82.0143 199.998 75.9569C199.998 70.5436 199.998 65.1303 199.998 59.7162C199.998 55.0508 199.998 50.3855 199.998 45.7201C199.998 41.9067 199.998 38.094 199.998 34.2806C199.998 31.4232 199.998 28.5665 199.998 25.709C199.998 23.916 199.998 22.1229 199.998 20.3299C199.998 19.6933 200.002 19.056 199.998 18.4194C199.978 14.6202 198.742 10.8959 196.434 7.87281C194.097 4.81183 190.753 2.58574 187.03 1.61568C183.662 0.737717 180.014 1.05637 176.571 1.05637C169.311 1.05637 162.051 1.05637 154.792 1.05637C152.146 1.05637 149.501 1.05637 146.855 1.05637C145.385 1.05637 143.944 1.03557 142.509 1.42924C137.798 2.72315 134.823 7.51087 134.818 12.3122C134.817 14.1981 134.82 16.0238 134.286 17.851C133.802 19.5163 132.979 21.0843 131.842 22.3968Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='217' height='443' viewBox='0 0 217 443' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M190.909 441.998C195.368 441.993 199.796 440.794 203.639 438.531C207.371 436.334 210.504 433.173 212.663 429.421C214.846 425.624 215.98 421.305 216 416.93C216.003 416.282 216 415.634 216 414.985C216 413.143 216 411.301 216 409.458C216 406.55 216 403.642 216 400.733C216 396.854 216 392.976 216 389.098C216 384.337 216 379.578 216 374.817C216 369.291 216 363.765 216 358.239C216 352.072 216 345.905 216 339.739C216 333.02 216 326.301 216 319.581C216 312.391 216 305.201 216 298.01C216 290.475 216 282.939 216 275.403C216 267.651 216 259.899 216 252.146C216 244.26 216 236.373 216 228.486C216 220.544 216 212.602 216 204.659C216 196.791 216 188.923 216 181.056C216 173.392 216 165.727 216 158.062C216 150.658 216 143.253 216 135.849C216 128.834 216 121.819 216 114.804C216 108.304 216 101.804 216 95.3026C216 89.3981 216 83.4936 216 77.5891C216 72.3696 216 67.1507 216 61.9312C216 57.5221 216 53.1123 216 48.7032C216 45.2183 216 41.7334 216 38.2485C216 35.7769 216 33.3053 216 30.8344C216 29.4787 216 28.1222 216 26.7664C216 24.5882 215.829 22.4294 215.324 20.3032C214.353 16.2069 212.34 12.3751 209.51 9.25566C206.644 6.09614 202.979 3.6914 198.935 2.32819C196.078 1.36541 193.129 1.0103 190.126 1.0103C187.595 1.0103 185.065 1.0103 182.533 1.0103C177.784 1.0103 173.035 1.0103 168.285 1.0103C161.883 1.0103 155.481 1.0103 149.078 1.0103C141.627 1.0103 134.176 1.0103 126.725 1.0103C118.843 1.0103 110.961 1.0103 103.078 1.0103C95.3298 1.0103 87.5819 1.0103 79.8332 1.0103C72.7858 1.0103 65.7384 1.0103 58.691 1.0103C52.9621 1.0103 47.2324 1.0103 41.5035 1.0103C37.6931 1.0103 33.8835 1.0103 30.0731 1.0103C28.562 1.0103 27.0487 0.98356 25.5377 1.01625C21.096 1.11431 16.7093 2.41065 12.9272 4.73888C9.24918 7.00321 6.18541 10.2214 4.10473 14.0035C2.0709 17.7001 1.02089 21.8677 1.0023 26.0829C0.999324 26.7775 1.0023 27.4721 1.0023 28.166C1.0023 30.0507 1.0023 31.9354 1.0023 33.8201C1.0023 36.7672 1.0023 39.7135 1.0023 42.6605C1.0023 46.5734 1.0023 50.4862 1.0023 54.399C1.0023 59.1899 1.0023 63.9808 1.0023 68.7717C1.0023 74.3248 1.0023 79.8772 1.0023 85.4303C1.0023 91.6194 1.0023 97.8091 1.0023 103.998C1.0023 110.736 1.0023 117.474 1.0023 124.212C1.0023 131.417 1.0023 138.621 1.0023 145.827C1.0023 153.374 1.0023 160.921 1.0023 168.467C1.0023 176.226 1.0023 183.985 1.0023 191.744C1.0023 199.634 1.0023 207.524 1.0023 215.414C1.0023 223.38 1.0023 231.346 1.0023 239.312C1.0023 247.151 1.0023 254.989 1.0023 262.827C1.0023 270.483 1.0023 278.139 1.0023 285.795C1.0023 293.187 1.0023 300.579 1.0023 307.97C1.0023 314.968 1.0023 321.966 1.0023 328.965C1.0023 335.446 1.0023 341.925 1.0023 348.405C1.0023 354.285 1.0023 360.165 1.0023 366.045C1.0023 371.236 1.0023 376.427 1.0023 381.618C1.0023 385.995 1.0023 390.372 1.0023 394.749C1.0023 398.198 1.0023 401.647 1.0023 405.095C1.0023 407.527 1.0023 409.958 1.0023 412.39C1.0023 413.702 1.0023 415.014 1.0023 416.326C1.0023 418.647 1.21721 420.945 1.79947 423.2C2.85543 427.291 4.96065 431.085 7.86379 434.156C10.787 437.248 14.5 439.565 18.5594 440.843C21.3153 441.71 24.1441 442 27.019 442C29.644 442 32.269 442 34.8933 442C39.7143 442 44.5353 442 49.3562 442C55.8087 442 62.2605 442 68.713 442C76.1917 442 83.6704 442 91.1491 442C99.0368 442 106.924 442 114.813 442C122.544 442 130.277 442 138.008 442C145.017 442 152.026 442 159.035 442C164.704 442 170.372 442 176.041 442C179.768 442 183.496 442 187.223 442C188.453 441.998 189.68 441.998 190.909 441.998Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M139.842 30.3968C138.294 32.1698 136.177 33.3917 133.863 33.8232C132.618 34.055 131.347 34 130.087 34C124.097 34 118.106 34 112.116 34C105.048 34 97.98 34 90.9115 34C86 33.8232 83.7526 34.4761 80.6325 33.0188C76.9119 31.2814 74.6511 27.4673 74.2492 23.4556C74.0238 21.2042 74.3842 18.5245 73.6798 16.3266C72.9598 14.0812 71.4754 12.1144 69.5157 10.8086C66.2251 8.6159 62.3131 9.05637 58.562 9.05637C51.392 9.05637 44.222 9.05637 37.0512 9.05637C34.2144 9.05637 31.3783 9.05637 28.5414 9.05637C27.1645 9.05637 25.7765 9.01032 24.4055 9.16407C20.6722 9.58374 17.1235 11.2364 14.3986 13.8279C11.6589 16.4343 9.8208 19.9254 9.22021 23.6623C9.0126 24.9554 9 26.2486 9 27.5514C9 29.0793 9 30.6079 9 32.1358C9 34.7615 9 37.3872 9 40.013C9 43.5998 9 47.1859 9 50.7728C9 55.2614 9 59.7507 9 64.2393C9 69.4699 9 74.6997 9 79.9304C9 85.8451 9 91.7598 9 97.6745C9 104.154 9 110.634 9 117.113C9 124.053 9 130.993 9 137.934C9 145.231 9 152.528 9 159.825C9 167.374 9 174.924 9 182.474C9 190.173 9 197.872 9 205.57C9 213.289 9 221.008 9 228.727C9 236.436 9 244.145 9 251.854C9 259.352 9 266.849 9 274.347C9 281.625 9 288.902 9 296.181C9 303.043 9 309.904 9 316.766C9 323.195 9 329.625 9 336.054C9 341.866 9 347.677 9 353.489C9 358.637 9 363.785 9 368.934C9 373.296 9 377.657 9 382.019C9 385.49 9 388.961 9 392.432C9 394.908 9 397.384 9 399.861C9 401.236 9 402.611 9 403.986C9 405.262 9.0734 406.506 9.48937 407.731C10.4763 410.641 12.9157 412.912 15.8838 413.686C17.2948 414.054 18.7444 413.983 20.188 413.983C23.0568 413.983 25.9248 413.983 28.7935 413.983C33.5552 413.983 38.3169 413.983 43.0786 413.983C49.221 413.983 55.3626 413.983 61.5049 413.983C68.6504 413.983 75.7952 413.983 82.9407 413.983C90.546 413.983 98.1512 413.983 105.757 413.983C113.44 413.983 121.123 413.983 128.806 413.983C136.088 413.983 143.37 413.983 150.653 413.983C157.081 413.983 163.509 413.983 169.937 413.983C175.057 413.983 180.177 413.983 185.296 413.983C188.646 413.983 191.995 413.983 195.345 413.983C196.613 413.983 197.888 414.026 199.156 413.976C202.167 413.858 204.993 412.219 206.593 409.66C207.582 408.08 207.998 406.299 207.998 404.451C207.999 403.35 207.998 402.248 207.998 401.147C207.998 398.912 207.998 396.678 207.998 394.443C207.998 391.207 207.998 387.971 207.998 384.734C207.998 380.573 207.998 376.412 207.998 372.252C207.998 367.281 207.998 362.308 207.998 357.337C207.998 351.658 207.998 345.979 207.998 340.3C207.998 334.018 207.998 327.735 207.998 321.453C207.998 314.671 207.998 307.89 207.998 301.108C207.998 293.932 207.998 286.754 207.998 279.578C207.998 272.133 207.998 264.689 207.998 257.245C207.998 249.566 207.998 241.886 207.998 234.206C207.998 226.492 207.998 218.777 207.998 211.063C207.998 203.32 207.998 195.577 207.998 187.834C207.998 180.264 207.998 172.694 207.998 165.124C207.998 157.735 207.998 150.346 207.998 142.956C207.998 135.945 207.998 128.934 207.998 121.923C207.998 115.325 207.998 108.728 207.998 102.13C207.998 96.0723 207.998 90.0143 207.998 83.9569C207.998 78.5436 207.998 73.1303 207.998 67.7162C207.998 63.0508 207.998 58.3855 207.998 53.7201C207.998 49.9067 207.998 46.094 207.998 42.2806C207.998 39.4232 207.998 36.5665 207.998 33.709C207.998 31.916 207.998 30.1229 207.998 28.3299C207.998 27.6933 208.002 27.056 207.998 26.4194C207.978 22.6202 206.742 18.8959 204.434 15.8728C202.097 12.8118 198.753 10.5857 195.03 9.61568C191.662 8.73772 188.014 9.05637 184.571 9.05637C177.311 9.05637 170.051 9.05637 162.792 9.05637C160.146 9.05637 157.501 9.05637 154.855 9.05637C153.385 9.05637 151.944 9.03557 150.509 9.42924C145.798 10.7232 142.823 15.5109 142.818 20.3122C142.817 22.1981 142.82 24.0238 142.286 25.851C141.802 27.5163 140.979 29.0843 139.842 30.3968Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M117.905 26.9779C119.522 26.9772 120.543 25.2638 119.694 23.9804C119.294 23.377 118.621 23.0753 117.88 23.0486C114.913 22.9392 111.919 23.0486 108.95 23.0486C105.723 23.0486 102.492 23.0073 99.2648 23.0486C98.5245 23.0578 97.8502 23.2746 97.3967 23.8556C96.4319 25.0912 97.3351 26.8404 98.9419 26.9737C99.617 27.0298 100.317 26.9786 100.994 26.9786C102.801 26.9786 104.608 26.9786 106.414 26.9786C110.027 26.9786 113.641 26.9786 117.254 26.9786C117.471 26.9779 117.688 26.9779 117.905 26.9779Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M137.73 430C139.381 430 140.497 428.059 139.777 426.447C138.942 424.578 136.69 425.054 135.145 425.054C128.977 425.054 122.809 425.054 116.641 425.054C108.72 425.054 100.798 425.054 92.8759 425.054C88.4096 425.054 83.9418 425.014 79.4755 425.054C78.0023 425.068 76.7316 426.328 77.0491 428.02C77.4281 430.042 79.2114 430 80.7039 430C86.3185 430 91.9331 430 97.5477 430C105.513 430 113.478 430 121.443 430C126.616 430 131.79 430 136.963 430C137.219 430 137.474 430 137.73 430Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='201' height='407' viewBox='0 0 201 407' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M131.842 22.3968C130.294 24.1698 128.177 25.3917 125.863 25.8232C124.618 26.055 123.347 26 122.087 26C116.097 26 110.106 26 104.116 26C97.0476 26 89.98 26 82.9115 26C78 25.8232 75.7526 26.4761 72.6325 25.0188C68.9119 23.2814 66.6511 19.4673 66.2492 15.4556C66.0238 13.2042 66.3842 10.5245 65.6798 8.32664C64.9598 6.08123 63.4754 4.11437 61.5157 2.80857C58.2251 0.615904 54.3131 1.05637 50.562 1.05637C43.392 1.05637 36.222 1.05637 29.0512 1.05637C26.2144 1.05637 23.3783 1.05637 20.5414 1.05637C19.1645 1.05637 17.7765 1.01032 16.4055 1.16407C12.6722 1.58374 9.12353 3.23641 6.39863 5.82794C3.65891 8.43434 1.8208 11.9254 1.22021 15.6623C1.0126 16.9554 1 18.2486 1 19.5514C1 21.0793 1 22.6079 1 24.1358C1 26.7615 1 29.3872 1 32.013C1 35.5998 1 39.1859 1 42.7728C1 47.2614 1 51.7507 1 56.2393C1 61.4699 1 66.6997 1 71.9304C1 77.8451 1 83.7598 1 89.6745C1 96.1537 1 102.634 1 109.113C1 116.053 1 122.993 1 129.934C1 137.231 1 144.528 1 151.825C1 159.374 1 166.924 1 174.474C1 182.173 1 189.872 1 197.57C1 205.289 1 213.008 1 220.727C1 228.436 1 236.145 1 243.854C1 251.352 1 258.849 1 266.347C1 273.625 1 280.902 1 288.181C1 295.043 1 301.904 1 308.766C1 315.195 1 321.625 1 328.054C1 333.866 1 339.677 1 345.489C1 350.637 1 355.785 1 360.934C1 365.296 1 369.657 1 374.019C1 377.49 1 380.961 1 384.432C1 386.908 1 389.384 1 391.861C1 393.236 1 394.611 1 395.986C1 397.262 1.0734 398.506 1.48937 399.731C2.47626 402.641 4.91569 404.912 7.88379 405.686C9.29481 406.054 10.7444 405.983 12.188 405.983C15.0568 405.983 17.9248 405.983 20.7935 405.983C25.5552 405.983 30.3169 405.983 35.0786 405.983C41.221 405.983 47.3626 405.983 53.5049 405.983C60.6504 405.983 67.7952 405.983 74.9407 405.983C82.546 405.983 90.1512 405.983 97.7572 405.983C105.44 405.983 113.123 405.983 120.806 405.983C128.088 405.983 135.37 405.983 142.653 405.983C149.081 405.983 155.509 405.983 161.937 405.983C167.057 405.983 172.177 405.983 177.296 405.983C180.646 405.983 183.995 405.983 187.345 405.983C188.613 405.983 189.888 406.026 191.156 405.976C194.167 405.858 196.993 404.219 198.593 401.66C199.582 400.08 199.998 398.299 199.998 396.451C199.999 395.35 199.998 394.248 199.998 393.147C199.998 390.912 199.998 388.678 199.998 386.443C199.998 383.207 199.998 379.971 199.998 376.734C199.998 372.573 199.998 368.412 199.998 364.252C199.998 359.281 199.998 354.308 199.998 349.337C199.998 343.658 199.998 337.979 199.998 332.3C199.998 326.018 199.998 319.735 199.998 313.453C199.998 306.671 199.998 299.89 199.998 293.108C199.998 285.932 199.998 278.754 199.998 271.578C199.998 264.133 199.998 256.689 199.998 249.245C199.998 241.566 199.998 233.886 199.998 226.206C199.998 218.492 199.998 210.777 199.998 203.063C199.998 195.32 199.998 187.577 199.998 179.834C199.998 172.264 199.998 164.694 199.998 157.124C199.998 149.735 199.998 142.346 199.998 134.956C199.998 127.945 199.998 120.934 199.998 113.923C199.998 107.325 199.998 100.728 199.998 94.1296C199.998 88.0723 199.998 82.0143 199.998 75.9569C199.998 70.5436 199.998 65.1303 199.998 59.7162C199.998 55.0508 199.998 50.3855 199.998 45.7201C199.998 41.9067 199.998 38.094 199.998 34.2806C199.998 31.4232 199.998 28.5665 199.998 25.709C199.998 23.916 199.998 22.1229 199.998 20.3299C199.998 19.6933 200.002 19.056 199.998 18.4194C199.978 14.6202 198.742 10.8959 196.434 7.87281C194.097 4.81183 190.753 2.58574 187.03 1.61568C183.662 0.737717 180.014 1.05637 176.571 1.05637C169.311 1.05637 162.051 1.05637 154.792 1.05637C152.146 1.05637 149.501 1.05637 146.855 1.05637C145.385 1.05637 143.944 1.03557 142.509 1.42924C137.798 2.72315 134.823 7.51087 134.818 12.3122C134.817 14.1981 134.82 16.0238 134.286 17.851C133.802 19.5163 132.979 21.0843 131.842 22.3968Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "Pixel 4",
          deviceWidth: 193,
          deviceHeight: 412,
          borderlessWidth: 179,
          borderlessHeight: 407,
          cornerRadius: 27,
          cornerRadiusBorderless: 17,
          deviceSVG: "<svg width='195' height='413' viewBox='0 0 195 413' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1 385.457L1.0042 385.915L1.0162 386.373L1.03599 386.831L1.06358 387.288L1.09897 387.745L1.14276 388.201L1.19434 388.656L1.25372 389.11L1.3209 389.564L1.39588 390.016L1.47925 390.467L1.56983 390.915L1.6682 391.363L1.77437 391.809L1.88833 392.253L2.0101 392.694L2.13906 393.134L2.27582 393.572L2.42037 394.007L2.57273 394.439L2.73168 394.869L2.89843 395.296L3.07297 395.72L3.25412 396.141L3.44306 396.559L3.6392 396.973L3.84254 397.384L4.05248 397.792L4.26961 398.195L4.49394 398.596L4.72547 398.992L4.963 399.384L5.20773 399.772L5.45965 400.155L5.71757 400.535L5.98209 400.909L6.25321 401.28L6.53033 401.645L6.81404 402.006L7.10435 402.362L7.40006 402.712L7.70237 403.058L8.01008 403.398L8.32379 403.733L8.64349 404.063L8.96919 404.386L9.29969 404.705L9.63619 405.018L9.97748 405.324L10.3248 405.625L10.6769 405.92L11.0338 406.209L11.3961 406.492L11.7631 406.768L12.1344 407.038L12.5111 407.301L12.892 407.558L13.2771 407.808L13.6664 408.052L14.0604 408.289L14.4581 408.519L14.8594 408.743L15.2649 408.959L15.674 409.169L16.0866 409.371L16.5029 409.567L16.9228 409.754L17.3451 409.935L17.7709 410.109L18.1998 410.275L18.6311 410.434L19.0653 410.585L19.502 410.729L19.9411 410.865L20.3825 410.994L20.8264 411.115L21.2721 411.229L21.7195 411.334L22.1688 411.432L22.6199 411.523L23.0727 411.605L23.5262 411.68L23.9814 411.747L24.4373 411.806L24.8944 411.858L25.3526 411.901L25.8109 411.937L26.2704 411.964L26.7298 411.984L27.1899 411.996L27.6499 412H167.35L167.81 411.996L168.27 411.984L168.73 411.964L169.189 411.937L169.647 411.901L170.106 411.858L170.563 411.806L171.019 411.747L171.474 411.68L171.928 411.605L172.38 411.523L172.831 411.432L173.28 411.334L173.728 411.229L174.174 411.115L174.617 410.994L175.059 410.865L175.498 410.729L175.935 410.585L176.369 410.434L176.8 410.275L177.229 410.109L177.655 409.935L178.078 409.754L178.497 409.567L178.913 409.371L179.326 409.169L179.735 408.959L180.141 408.743L180.542 408.519L180.94 408.289L181.334 408.052L181.723 407.808L182.108 407.558L182.489 407.301L182.866 407.038L183.237 406.768L183.604 406.492L183.966 406.209L184.323 405.92L184.675 405.625L185.023 405.324L185.364 405.018L185.7 404.705L186.031 404.386L186.357 404.063L186.676 403.733L186.99 403.398L187.298 403.058L187.6 402.712L187.896 402.362L188.186 402.006L188.47 401.645L188.747 401.28L189.018 400.909L189.282 400.535L189.54 400.155L189.792 399.772L190.037 399.384L190.275 398.992L190.506 398.596L190.73 398.195L190.948 397.792L191.157 397.384L191.361 396.973L191.557 396.559L191.746 396.141L191.927 395.72L192.102 395.296L192.268 394.869L192.428 394.439L192.58 394.007L192.724 393.572L192.861 393.134L192.99 392.694L193.112 392.253L193.226 391.809L193.332 391.363L193.43 390.915L193.521 390.467L193.604 390.016L193.679 389.564L193.746 389.11L193.806 388.656L193.857 388.201L193.901 387.745L193.936 387.288L193.965 386.831L193.984 386.373L193.996 385.915L194 385.457V27.5434L193.996 27.0852L193.984 26.6269L193.965 26.1693L193.936 25.7117L193.901 25.2553L193.857 24.7988L193.806 24.3436L193.746 23.8896L193.679 23.4361L193.604 22.9845L193.521 22.5334L193.43 22.0842L193.332 21.6367L193.226 21.191L193.112 20.7471L192.99 20.305L192.861 19.8653L192.724 19.428L192.58 18.9931L192.428 18.5606L192.268 18.131L192.102 17.7039L191.927 17.2797L191.746 16.8591L191.557 16.4409L191.361 16.0263L191.157 15.6153L190.948 15.2078L190.73 14.804L190.506 14.4043L190.275 14.0082L190.037 13.6157L189.792 13.228L189.54 12.8445L189.282 12.4651L189.018 12.0899L188.747 11.7201L188.47 11.3545L188.186 10.9936L187.896 10.6382L187.6 10.2875L187.298 9.94159L186.99 9.60166L186.676 9.2665L186.357 8.93733L186.031 8.61293L185.7 8.2945L185.364 7.98205L185.023 7.67557L184.675 7.37447L184.323 7.07995L183.966 6.79079L183.604 6.50821L183.237 6.23221L182.866 5.96217L182.489 5.69871L182.108 5.44182L181.723 5.1909L181.334 4.94716L180.94 4.71058L180.542 4.47997L180.141 4.25654L179.735 4.04027L179.326 3.83118L178.913 3.62865L178.497 3.43329L178.078 3.24511L177.655 3.06468L177.229 2.89084L176.8 2.72475L176.369 2.56644L175.935 2.41469L175.498 2.27071L175.059 2.1345L174.617 2.00606L174.174 1.88478L173.728 1.77127L173.28 1.66553L172.831 1.56755L172.38 1.47734L171.928 1.3943L171.474 1.31962L171.019 1.25271L170.563 1.19356L170.106 1.14219L169.647 1.09857L169.189 1.06333L168.73 1.03585L168.27 1.01613L167.81 1.00418L167.35 1H27.6499L27.1899 1.00418L26.7298 1.01613L26.2704 1.03585L25.8109 1.06333L25.3526 1.09857L24.8944 1.14219L24.4373 1.19356L23.9814 1.25271L23.5262 1.31962L23.0727 1.3943L22.6199 1.47734L22.1688 1.56755L21.7195 1.66553L21.2721 1.77127L20.8264 1.88478L20.3825 2.00606L19.9411 2.1345L19.502 2.27071L19.0653 2.41469L18.6311 2.56644L18.1998 2.72475L17.7709 2.89084L17.3451 3.06468L16.9228 3.24511L16.5029 3.43329L16.0866 3.62865L15.674 3.83118L15.2649 4.04027L14.8594 4.25654L14.4581 4.47997L14.0604 4.71058L13.6664 4.94716L13.2771 5.1909L12.892 5.44182L12.5111 5.69871L12.1344 5.96217L11.7631 6.23221L11.3961 6.50821L11.0338 6.79079L10.6769 7.07995L10.3248 7.37447L9.97748 7.67557L9.63619 7.98205L9.29969 8.2945L8.96919 8.61293L8.64349 8.93733L8.32379 9.2665L8.01008 9.60166L7.70237 9.94159L7.40006 10.2875L7.10435 10.6382L6.81404 10.9936L6.53033 11.3545L6.25321 11.7201L5.98209 12.0899L5.71757 12.4651L5.45965 12.8445L5.20773 13.228L4.963 13.6157L4.72547 14.0082L4.49394 14.4043L4.26961 14.804L4.05248 15.2078L3.84254 15.6153L3.6392 16.0263L3.44306 16.4409L3.25412 16.8591L3.07297 17.2797L2.89843 17.7039L2.73168 18.131L2.57273 18.5606L2.42037 18.9931L2.27582 19.428L2.13906 19.8653L2.0101 20.305L1.88833 20.7471L1.77437 21.191L1.6682 21.6367L1.56983 22.0842L1.47925 22.5334L1.39588 22.9845L1.3209 23.4361L1.25372 23.8896L1.19434 24.3436L1.14276 24.7988L1.09897 25.2553L1.06358 25.7117L1.03599 26.1693L1.0162 26.6269L1.0042 27.0852L1 27.5434V385.457Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M24.2976 401L24.1287 400.999L23.9586 400.996L23.7873 400.991L23.616 400.984L23.4436 400.976L23.2711 400.965L23.0974 400.952L22.9232 400.938L22.7489 400.921L22.5735 400.902L22.398 400.881L22.222 400.858L22.0454 400.832L21.8687 400.805L21.6915 400.776L21.5143 400.743L21.3364 400.709L21.1586 400.673L20.9808 400.635L20.8024 400.594L20.624 400.551L20.4455 400.505L20.2671 400.457L20.0887 400.407L19.9103 400.355L19.7319 400.3L19.554 400.243L19.3756 400.184L19.1984 400.121L19.0206 400.058L18.8433 399.991L18.6667 399.922L18.4907 399.85L18.3146 399.777L18.1392 399.701L17.9643 399.622L17.7901 399.541L17.6164 399.458L17.4439 399.372L17.2715 399.285L17.1002 399.195L16.9295 399.102L16.76 399.007L16.5917 398.909L16.4234 398.81L16.2569 398.708L16.0915 398.604L15.9268 398.497L15.7632 398.389L15.6009 398.278L15.4403 398.164L15.2803 398.049L15.1221 397.932L14.9651 397.812L14.8099 397.69L14.6559 397.566L14.503 397.44L14.352 397.312L14.2027 397.183L14.0546 397.05L13.9089 396.916L13.7644 396.78L13.6216 396.643L13.4807 396.503L13.3415 396.362L13.2041 396.219L13.0691 396.074L12.9353 395.927L12.8039 395.779L12.6742 395.628L12.547 395.477L12.4215 395.324L12.2978 395.169L12.1764 395.013L12.0575 394.856L11.9403 394.697L11.8256 394.537L11.7126 394.375L11.6019 394.213L11.4937 394.048L11.3878 393.883L11.2838 393.717L11.1821 393.55L11.0827 393.381L10.9858 393.212L10.8912 393.042L10.7991 392.871L10.7092 392.698L10.6212 392.526L10.5362 392.352L10.4529 392.178L10.3726 392.004L10.2947 391.828L10.2186 391.652L10.1454 391.475L10.0741 391.299L10.0057 391.121L9.93908 390.944L9.87485 390.765L9.81359 390.587L9.75412 390.408L9.69762 390.23L9.6429 390.051L9.59057 389.872L9.54061 389.693L9.49303 389.514L9.44783 389.335L9.40501 389.156L9.36397 388.976L9.32532 388.798L9.28963 388.62L9.25514 388.441L9.22362 388.263L9.19388 388.085L9.16653 387.908L9.14155 387.731L9.11835 387.554L9.09754 387.378L9.0785 387.202L9.06185 387.027L9.04698 386.852L9.0345 386.678L9.02379 386.504L9.01546 386.332L9.00833 386.159L9.00357 385.988L9.00119 385.817L9 385.647V41.3522L9.00119 41.1821L9.00357 41.0114L9.00833 40.8401L9.01546 40.6682L9.02379 40.4951L9.0345 40.3214L9.04698 40.1477L9.06185 39.9728L9.0785 39.7974L9.09754 39.6219L9.11835 39.4458L9.14155 39.2692L9.16653 39.0919L9.19388 38.9146L9.22362 38.7368L9.25514 38.5589L9.28963 38.3804L9.32532 38.202L9.36397 38.0229L9.40501 37.8445L9.44783 37.6654L9.49303 37.4864L9.54061 37.3073L9.59057 37.1283L9.6429 36.9492L9.69762 36.7701L9.75412 36.5911L9.81359 36.4126L9.87485 36.2342L9.93908 36.0563L10.0057 35.8785L10.0741 35.7012L10.1454 35.5245L10.2186 35.3479L10.2947 35.1718L10.3726 34.9963L10.4529 34.8214L10.5362 34.6472L10.6212 34.4741L10.7092 34.301L10.7991 34.1291L10.8912 33.9578L10.9858 33.7877L11.0827 33.6182L11.1821 33.4499L11.2838 33.2828L11.3878 33.1162L11.4937 32.9515L11.6019 32.7874L11.7126 32.6244L11.8256 32.4633L11.9403 32.3027L12.0575 32.144L12.1764 31.9864L12.2978 31.8306L12.4215 31.676L12.547 31.5226L12.6742 31.371L12.8039 31.2212L12.9353 31.0726L13.0691 30.9264L13.2041 30.7814L13.3415 30.6381L13.4807 30.4967L13.6216 30.357L13.7644 30.2191L13.9089 30.083L14.0546 29.9494L14.2027 29.8174L14.352 29.6873L14.503 29.5596L14.6559 29.4337L14.8099 29.3095L14.9651 29.1878L15.1221 29.0684L15.2803 28.9508L15.4403 28.835L15.6009 28.7222L15.7632 28.6112L15.9268 28.5026L16.0915 28.3958L16.2569 28.2919L16.4234 28.1898L16.5917 28.0902L16.76 27.9929L16.9295 27.898L17.1002 27.8055L17.2715 27.7147L17.4439 27.627L17.6164 27.5417L17.7901 27.4581L17.9643 27.3775L18.1392 27.2987L18.3146 27.2229L18.4907 27.1489L18.6667 27.0779L18.8433 27.0087L19.0206 26.9424L19.1984 26.878L19.3756 26.8165L19.554 26.7568L19.7319 26.6995L19.9103 26.6452L20.0887 26.5927L20.2671 26.5425L20.4455 26.4948L20.624 26.4494L20.8024 26.4059L20.9808 26.3653L21.1586 26.3265L21.3364 26.2901L21.5143 26.256L21.6915 26.2244L21.8687 26.1946L22.0454 26.1671L22.222 26.142L22.398 26.1188L22.5735 26.0979L22.7489 26.0788L22.9232 26.0621L23.0974 26.0472L23.2711 26.0346L23.4436 26.0239L23.616 26.0149L23.7873 26.0084L23.9586 26.0036L24.1287 26.0006L24.2976 26H170.702L170.872 26.0006L171.042 26.0036L171.213 26.0084L171.385 26.0149L171.556 26.0239L171.73 26.0346L171.903 26.0472L172.077 26.0621L172.252 26.0788L172.427 26.0979L172.602 26.1188L172.778 26.142L172.955 26.1671L173.131 26.1946L173.309 26.2244L173.486 26.256L173.664 26.2901L173.841 26.3265L174.02 26.3653L174.198 26.4059L174.376 26.4494L174.554 26.4948L174.733 26.5425L174.912 26.5927L175.09 26.6452L175.268 26.6995L175.447 26.7568L175.624 26.8165L175.802 26.878L175.979 26.9424L176.157 27.0087L176.333 27.0779L176.51 27.1489L176.685 27.2229L176.861 27.2987L177.036 27.3775L177.21 27.4581L177.384 27.5417L177.557 27.627L177.729 27.7147L177.9 27.8055L178.07 27.898L178.24 27.9929L178.409 28.0902L178.577 28.1898L178.743 28.2919L178.909 28.3958L179.073 28.5026L179.237 28.6112L179.399 28.7222L179.56 28.835L179.72 28.9508L179.878 29.0684L180.035 29.1878L180.191 29.3095L180.345 29.4337L180.497 29.5596L180.648 29.6873L180.797 29.8174L180.945 29.9494L181.092 30.083L181.236 30.2191L181.378 30.357L181.519 30.4967L181.658 30.6381L181.796 30.7814L181.931 30.9264L182.065 31.0726L182.196 31.2212L182.326 31.371L182.454 31.5226L182.579 31.676L182.702 31.8306L182.824 31.9864L182.943 32.144L183.06 32.3027L183.175 32.4633L183.287 32.6244L183.398 32.7874L183.506 32.9515L183.613 33.1162L183.716 33.2828L183.818 33.4499L183.917 33.6182L184.014 33.7877L184.109 33.9578L184.201 34.1291L184.291 34.301L184.379 34.4741L184.464 34.6472L184.547 34.8214L184.627 34.9963L184.706 35.1718L184.781 35.3479L184.855 35.5245L184.926 35.7012L184.995 35.8785L185.061 36.0563L185.125 36.2342L185.186 36.4126L185.246 36.5911L185.303 36.7701L185.358 36.9492L185.409 37.1283L185.459 37.3073L185.507 37.4864L185.552 37.6654L185.596 37.8445L185.636 38.0229L185.675 38.202L185.711 38.3804L185.745 38.5589L185.776 38.7368L185.806 38.9146L185.833 39.0919L185.858 39.2692L185.882 39.4458L185.902 39.6219L185.921 39.7974L185.938 39.9728L185.953 40.1477L185.966 40.3214L185.976 40.4951L185.985 40.6682L185.992 40.8401L185.996 41.0114L185.999 41.1821L186 41.3522V385.647L185.999 385.817L185.996 385.988L185.992 386.159L185.985 386.332L185.976 386.504L185.966 386.678L185.953 386.852L185.938 387.027L185.921 387.202L185.902 387.378L185.882 387.554L185.858 387.731L185.833 387.908L185.806 388.085L185.776 388.263L185.745 388.441L185.711 388.62L185.675 388.798L185.636 388.976L185.596 389.156L185.552 389.335L185.507 389.514L185.459 389.693L185.409 389.872L185.358 390.051L185.303 390.23L185.246 390.408L185.186 390.587L185.125 390.765L185.061 390.944L184.995 391.121L184.926 391.299L184.855 391.475L184.781 391.652L184.706 391.828L184.627 392.004L184.547 392.178L184.464 392.352L184.379 392.526L184.291 392.698L184.201 392.871L184.109 393.042L184.014 393.212L183.917 393.381L183.818 393.55L183.716 393.717L183.613 393.883L183.506 394.048L183.398 394.213L183.287 394.375L183.175 394.537L183.06 394.697L182.943 394.856L182.824 395.013L182.702 395.169L182.579 395.324L182.454 395.477L182.326 395.628L182.196 395.779L182.065 395.927L181.931 396.074L181.796 396.219L181.658 396.362L181.519 396.503L181.378 396.643L181.236 396.78L181.092 396.916L180.945 397.05L180.797 397.183L180.648 397.312L180.497 397.44L180.345 397.566L180.191 397.69L180.035 397.812L179.878 397.932L179.72 398.049L179.56 398.164L179.399 398.278L179.237 398.389L179.073 398.497L178.909 398.604L178.743 398.708L178.577 398.81L178.409 398.909L178.24 399.007L178.07 399.102L177.9 399.195L177.729 399.285L177.557 399.372L177.384 399.458L177.21 399.541L177.036 399.622L176.861 399.701L176.685 399.777L176.51 399.85L176.333 399.922L176.157 399.991L175.979 400.058L175.802 400.121L175.624 400.184L175.447 400.243L175.268 400.3L175.09 400.355L174.912 400.407L174.733 400.457L174.554 400.505L174.376 400.551L174.198 400.594L174.02 400.635L173.841 400.673L173.664 400.709L173.486 400.743L173.309 400.776L173.131 400.805L172.955 400.832L172.778 400.858L172.602 400.881L172.427 400.902L172.252 400.921L172.077 400.938L171.903 400.952L171.73 400.965L171.556 400.976L171.385 400.984L171.213 400.991L171.042 400.996L170.872 400.999L170.702 401H24.2976Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M88.3436 20H88.3205L88.2974 19.9991L88.2742 19.9973L88.2511 19.9956L88.228 19.9929L88.2048 19.9894L88.1817 19.9859L88.1592 19.9815L88.136 19.9762L88.1129 19.9709L88.0903 19.9647L88.0672 19.9576L88.0447 19.9506L88.0221 19.9426L87.9996 19.9338L87.9776 19.925L87.9551 19.9152L87.9331 19.9047L87.9112 19.8941L87.8892 19.8826L87.8673 19.8702L87.8459 19.8579L87.824 19.8446L87.8026 19.8314L87.7819 19.8173L87.7605 19.8022L87.7398 19.7872L87.7196 19.7714L87.6988 19.7546L87.6787 19.7378L87.6585 19.721L87.6389 19.7025L87.6193 19.6848L87.5997 19.6654L87.5802 19.646L87.5612 19.6266L87.5428 19.6063L87.5244 19.5851L87.506 19.5639L87.4882 19.5418L87.4704 19.5197L87.4526 19.4977L87.4354 19.4738L87.4182 19.4509L87.4016 19.4271L87.3856 19.4023L87.369 19.3776L87.3536 19.352L87.3381 19.3264L87.3227 19.3008L87.3079 19.2743L87.2931 19.247L87.2788 19.2205L87.2646 19.1922L87.2509 19.1649L87.2379 19.1366L87.2248 19.1075L87.2124 19.0792L87.1999 19.0501L87.1881 19.0201L87.1762 18.9901L87.1649 18.9601L87.1536 18.93L87.143 18.8991L87.1329 18.8682L87.1234 18.8365L87.1139 18.8056L87.1044 18.7738L87.0955 18.742L87.0872 18.7093L87.0795 18.6776L87.0718 18.6449L87.0641 18.6122L87.0575 18.5787L87.051 18.546L87.0445 18.5125L87.0392 18.4789L87.0338 18.4454L87.0285 18.4118L87.0243 18.3774L87.0202 18.3438L87.016 18.3094L87.0125 18.2759L87.0095 18.2414L87.0071 18.207L87.0048 18.1726L87.003 18.1382L87.0018 18.1037L87.0006 18.0693L87 18.0349V18.0004V17.966L87.0006 17.9316L87.0018 17.8972L87.003 17.8627L87.0048 17.8283L87.0071 17.7939L87.0095 17.7594L87.0125 17.725L87.016 17.6906L87.0202 17.657L87.0243 17.6226L87.0285 17.5891L87.0338 17.5555L87.0392 17.522L87.0445 17.4884L87.051 17.4549L87.0575 17.4222L87.0641 17.3887L87.0718 17.356L87.0795 17.3233L87.0872 17.2915L87.0955 17.2589L87.1044 17.2271L87.1139 17.1953L87.1234 17.1635L87.1329 17.1326L87.143 17.1017L87.1536 17.0708L87.1649 17.0408L87.1762 17.0099L87.1881 16.9808L87.1999 16.9508L87.2124 16.9216L87.2248 16.8925L87.2379 16.8643L87.2509 16.836L87.2646 16.8078L87.2788 16.7804L87.2931 16.753L87.3079 16.7266L87.3227 16.7001L87.3381 16.6745L87.3536 16.6489L87.369 16.6233L87.3856 16.5985L87.4016 16.5738L87.4182 16.55L87.4354 16.5262L87.4526 16.5032L87.4704 16.4802L87.4882 16.4582L87.506 16.437L87.5244 16.4149L87.5428 16.3946L87.5612 16.3743L87.5802 16.354L87.5997 16.3346L87.6193 16.316L87.6389 16.2975L87.6585 16.2799L87.6787 16.2622L87.6988 16.2454L87.7196 16.2295L87.7398 16.2136L87.7605 16.1986L87.7819 16.1836L87.8026 16.1695L87.824 16.1563L87.8459 16.143L87.8673 16.1307L87.8892 16.1183L87.9112 16.1068L87.9331 16.0962L87.9551 16.0856L87.9776 16.0759L87.9996 16.0671L88.0221 16.0583L88.0447 16.0503L88.0672 16.0433L88.0903 16.0362L88.1129 16.03L88.136 16.0247L88.1592 16.0194L88.1817 16.015L88.2048 16.0106L88.228 16.0079L88.2511 16.0053L88.2742 16.0027L88.2974 16.0018L88.3205 16.0009L88.3436 16H106.656L106.679 16.0009L106.703 16.0018L106.726 16.0027L106.749 16.0053L106.772 16.0079L106.795 16.0106L106.818 16.015L106.841 16.0194L106.864 16.0247L106.887 16.03L106.91 16.0362L106.933 16.0433L106.955 16.0503L106.978 16.0583L107 16.0671L107.023 16.0759L107.045 16.0856L107.067 16.0962L107.089 16.1068L107.111 16.1183L107.133 16.1307L107.155 16.143L107.176 16.1563L107.197 16.1695L107.218 16.1836L107.239 16.1986L107.26 16.2136L107.281 16.2295L107.301 16.2454L107.321 16.2622L107.342 16.2799L107.361 16.2975L107.381 16.316L107.4 16.3346L107.42 16.354L107.439 16.3743L107.457 16.3946L107.476 16.4149L107.494 16.437L107.512 16.4582L107.53 16.4802L107.547 16.5032L107.565 16.5262L107.582 16.55L107.598 16.5738L107.614 16.5985L107.631 16.6233L107.646 16.6489L107.662 16.6745L107.677 16.7001L107.692 16.7266L107.707 16.753L107.721 16.7804L107.735 16.8078L107.749 16.836L107.762 16.8643L107.775 16.8925L107.788 16.9216L107.8 16.9508L107.813 16.9808L107.824 17.0099L107.835 17.0408L107.846 17.0708L107.857 17.1017L107.867 17.1326L107.877 17.1635L107.887 17.1953L107.896 17.2271L107.904 17.2589L107.913 17.2915L107.921 17.3233L107.929 17.356L107.936 17.3887L107.942 17.4222L107.949 17.4549L107.956 17.4884L107.961 17.522L107.966 17.5555L107.972 17.5891L107.976 17.6226L107.98 17.657L107.984 17.6906L107.988 17.725L107.991 17.7594L107.993 17.7939L107.995 17.8283L107.997 17.8627L107.998 17.8972L107.999 17.9316L108 17.966V18.0004V18.0349L107.999 18.0693L107.998 18.1037L107.997 18.1382L107.995 18.1726L107.993 18.207L107.991 18.2414L107.988 18.2759L107.984 18.3094L107.98 18.3438L107.976 18.3774L107.972 18.4118L107.966 18.4454L107.961 18.4789L107.956 18.5125L107.949 18.546L107.942 18.5787L107.936 18.6122L107.929 18.6449L107.921 18.6776L107.913 18.7093L107.904 18.742L107.896 18.7738L107.887 18.8056L107.877 18.8365L107.867 18.8682L107.857 18.8991L107.846 18.93L107.835 18.9601L107.824 18.9901L107.813 19.0201L107.8 19.0501L107.788 19.0792L107.775 19.1075L107.762 19.1366L107.749 19.1649L107.735 19.1922L107.721 19.2205L107.707 19.247L107.692 19.2743L107.677 19.3008L107.662 19.3264L107.646 19.352L107.631 19.3776L107.614 19.4023L107.598 19.4271L107.582 19.4509L107.565 19.4738L107.547 19.4977L107.53 19.5197L107.512 19.5418L107.494 19.5639L107.476 19.5851L107.457 19.6063L107.439 19.6266L107.42 19.646L107.4 19.6654L107.381 19.6848L107.361 19.7025L107.342 19.721L107.321 19.7378L107.301 19.7546L107.281 19.7714L107.26 19.7872L107.239 19.8022L107.218 19.8173L107.197 19.8314L107.176 19.8446L107.155 19.8579L107.133 19.8702L107.111 19.8826L107.089 19.8941L107.067 19.9047L107.045 19.9152L107.023 19.925L107 19.9338L106.978 19.9426L106.955 19.9506L106.933 19.9576L106.91 19.9647L106.887 19.9709L106.864 19.9762L106.841 19.9815L106.818 19.9859L106.795 19.9894L106.772 19.9929L106.749 19.9956L106.726 19.9973L106.703 19.9991L106.679 20H106.656H88.3436Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='179' height='377' viewBox='0 0 179 377' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M16.2976 376L16.1287 375.999L15.9586 375.996L15.7873 375.991L15.616 375.984L15.4436 375.976L15.2711 375.965L15.0974 375.952L14.9232 375.938L14.7489 375.921L14.5735 375.902L14.398 375.881L14.222 375.858L14.0454 375.832L13.8687 375.805L13.6915 375.776L13.5143 375.743L13.3364 375.709L13.1586 375.673L12.9808 375.635L12.8024 375.594L12.624 375.551L12.4455 375.505L12.2671 375.457L12.0887 375.407L11.9103 375.355L11.7319 375.3L11.554 375.243L11.3756 375.184L11.1984 375.121L11.0206 375.058L10.8433 374.991L10.6667 374.922L10.4907 374.85L10.3146 374.777L10.1392 374.701L9.96434 374.622L9.79008 374.541L9.61642 374.458L9.44395 374.372L9.27148 374.285L9.1002 374.195L8.92951 374.102L8.76001 374.007L8.5917 373.909L8.4234 373.81L8.25687 373.708L8.09154 373.604L7.9268 373.497L7.76325 373.389L7.60089 373.278L7.44031 373.164L7.28033 373.049L7.12213 372.932L6.96512 372.812L6.8099 372.69L6.65587 372.566L6.50302 372.44L6.35196 372.312L6.20268 372.183L6.05459 372.05L5.90888 371.916L5.76437 371.78L5.62163 371.643L5.48068 371.503L5.34152 371.362L5.20413 371.219L5.06913 371.074L4.93532 370.927L4.80388 370.779L4.67423 370.628L4.54696 370.477L4.42147 370.324L4.29777 370.169L4.17644 370.013L4.0575 369.856L3.94034 369.697L3.82555 369.537L3.71256 369.375L3.60194 369.213L3.4937 369.048L3.38784 368.883L3.28376 368.717L3.18206 368.55L3.08274 368.381L2.9858 368.212L2.89124 368.042L2.79905 367.871L2.70925 367.698L2.62123 367.526L2.53618 367.352L2.45292 367.178L2.37263 367.004L2.29472 366.828L2.2186 366.652L2.14545 366.475L2.07408 366.299L2.00569 366.121L1.93908 365.944L1.87485 365.765L1.81359 365.587L1.75412 365.408L1.69762 365.23L1.6429 365.051L1.59057 364.872L1.54061 364.693L1.49303 364.514L1.44783 364.335L1.40501 364.156L1.36397 363.976L1.32532 363.798L1.28963 363.62L1.25514 363.441L1.22362 363.263L1.19388 363.085L1.16653 362.908L1.14155 362.731L1.11835 362.554L1.09754 362.378L1.0785 362.202L1.06185 362.027L1.04698 361.852L1.0345 361.678L1.02379 361.504L1.01546 361.332L1.00833 361.159L1.00357 360.988L1.00119 360.817L1 360.647V16.3522L1.00119 16.1821L1.00357 16.0114L1.00833 15.8401L1.01546 15.6682L1.02379 15.4951L1.0345 15.3214L1.04698 15.1477L1.06185 14.9728L1.0785 14.7974L1.09754 14.6219L1.11835 14.4458L1.14155 14.2692L1.16653 14.0919L1.19388 13.9146L1.22362 13.7368L1.25514 13.5589L1.28963 13.3804L1.32532 13.202L1.36397 13.0229L1.40501 12.8445L1.44783 12.6654L1.49303 12.4864L1.54061 12.3073L1.59057 12.1283L1.6429 11.9492L1.69762 11.7701L1.75412 11.5911L1.81359 11.4126L1.87485 11.2342L1.93908 11.0563L2.00569 10.8785L2.07408 10.7012L2.14545 10.5245L2.2186 10.3479L2.29472 10.1718L2.37263 9.99631L2.45292 9.82144L2.53618 9.64716L2.62123 9.47407L2.70925 9.30098L2.79905 9.12909L2.89124 8.9578L2.9858 8.78769L3.08274 8.61819L3.18206 8.44988L3.28376 8.28276L3.38784 8.11624L3.4937 7.95151L3.60194 7.78737L3.71256 7.62443L3.82555 7.46329L3.94034 7.30273L4.0575 7.14397L4.17644 6.9864L4.29777 6.83062L4.42147 6.67604L4.54696 6.52265L4.67423 6.37105L4.80388 6.22124L4.93532 6.07262L5.06913 5.92639L5.20413 5.78136L5.34152 5.63812L5.48068 5.49666L5.62163 5.357L5.76437 5.21913L5.90888 5.08305L6.05459 4.94935L6.20268 4.81745L6.35196 4.68734L6.50302 4.55961L6.65587 4.43367L6.8099 4.30953L6.96512 4.18777L7.12213 4.0684L7.28033 3.95082L7.44031 3.83504L7.60089 3.72223L7.76325 3.61122L7.9268 3.50259L8.09154 3.39575L8.25687 3.2919L8.4234 3.18984L8.5917 3.09017L8.76001 2.99288L8.92951 2.89798L9.1002 2.80547L9.27148 2.71475L9.44395 2.62701L9.61642 2.54166L9.79008 2.4581L9.96434 2.37753L10.1392 2.29875L10.3146 2.22294L10.4907 2.14894L10.6667 2.07791L10.8433 2.00868L11.0206 1.94243L11.1984 1.87797L11.3756 1.81649L11.554 1.7568L11.7319 1.69951L11.9103 1.6452L12.0887 1.59267L12.2671 1.54253L12.4455 1.49479L12.624 1.44943L12.8024 1.40586L12.9808 1.36527L13.1586 1.32647L13.3364 1.29007L13.5143 1.25605L13.6915 1.22442L13.8687 1.19457L14.0454 1.16712L14.222 1.14205L14.398 1.11877L14.5735 1.09788L14.7489 1.07878L14.9232 1.06207L15.0974 1.04715L15.2711 1.03462L15.4436 1.02387L15.616 1.01492L15.7873 1.00836L15.9586 1.00358L16.1287 1.0006L16.2976 1H162.702L162.872 1.0006L163.042 1.00358L163.213 1.00836L163.385 1.01492L163.556 1.02387L163.73 1.03462L163.903 1.04715L164.077 1.06207L164.252 1.07878L164.427 1.09788L164.602 1.11877L164.778 1.14205L164.955 1.16712L165.131 1.19457L165.309 1.22442L165.486 1.25605L165.664 1.29007L165.841 1.32647L166.02 1.36527L166.198 1.40586L166.376 1.44943L166.554 1.49479L166.733 1.54253L166.912 1.59267L167.09 1.6452L167.268 1.69951L167.447 1.7568L167.624 1.81649L167.802 1.87797L167.979 1.94243L168.157 2.00868L168.333 2.07791L168.51 2.14894L168.685 2.22294L168.861 2.29875L169.036 2.37753L169.21 2.4581L169.384 2.54166L169.557 2.62701L169.729 2.71475L169.9 2.80547L170.07 2.89798L170.24 2.99288L170.409 3.09017L170.577 3.18984L170.743 3.2919L170.909 3.39575L171.073 3.50259L171.237 3.61122L171.399 3.72223L171.56 3.83504L171.72 3.95082L171.878 4.0684L172.035 4.18777L172.191 4.30953L172.345 4.43367L172.497 4.55961L172.648 4.68734L172.797 4.81745L172.945 4.94935L173.092 5.08305L173.236 5.21913L173.378 5.357L173.519 5.49666L173.658 5.63812L173.796 5.78136L173.931 5.92639L174.065 6.07262L174.196 6.22124L174.326 6.37105L174.454 6.52265L174.579 6.67604L174.702 6.83062L174.824 6.9864L174.943 7.14397L175.06 7.30273L175.175 7.46329L175.287 7.62443L175.398 7.78737L175.506 7.95151L175.613 8.11624L175.716 8.28276L175.818 8.44988L175.917 8.61819L176.014 8.78769L176.109 8.9578L176.201 9.12909L176.291 9.30098L176.379 9.47407L176.464 9.64716L176.547 9.82144L176.627 9.99631L176.706 10.1718L176.781 10.3479L176.855 10.5245L176.926 10.7012L176.995 10.8785L177.061 11.0563L177.125 11.2342L177.186 11.4126L177.246 11.5911L177.303 11.7701L177.358 11.9492L177.409 12.1283L177.459 12.3073L177.507 12.4864L177.552 12.6654L177.596 12.8445L177.636 13.0229L177.675 13.202L177.711 13.3804L177.745 13.5589L177.776 13.7368L177.806 13.9146L177.833 14.0919L177.858 14.2692L177.882 14.4458L177.902 14.6219L177.921 14.7974L177.938 14.9728L177.953 15.1477L177.966 15.3214L177.976 15.4951L177.985 15.6682L177.992 15.8401L177.996 16.0114L177.999 16.1821L178 16.3522V360.647L177.999 360.817L177.996 360.988L177.992 361.159L177.985 361.332L177.976 361.504L177.966 361.678L177.953 361.852L177.938 362.027L177.921 362.202L177.902 362.378L177.882 362.554L177.858 362.731L177.833 362.908L177.806 363.085L177.776 363.263L177.745 363.441L177.711 363.62L177.675 363.798L177.636 363.976L177.596 364.156L177.552 364.335L177.507 364.514L177.459 364.693L177.409 364.872L177.358 365.051L177.303 365.23L177.246 365.408L177.186 365.587L177.125 365.765L177.061 365.944L176.995 366.121L176.926 366.299L176.855 366.475L176.781 366.652L176.706 366.828L176.627 367.004L176.547 367.178L176.464 367.352L176.379 367.526L176.291 367.698L176.201 367.871L176.109 368.042L176.014 368.212L175.917 368.381L175.818 368.55L175.716 368.717L175.613 368.883L175.506 369.048L175.398 369.213L175.287 369.375L175.175 369.537L175.06 369.697L174.943 369.856L174.824 370.013L174.702 370.169L174.579 370.324L174.454 370.477L174.326 370.628L174.196 370.779L174.065 370.927L173.931 371.074L173.796 371.219L173.658 371.362L173.519 371.503L173.378 371.643L173.236 371.78L173.092 371.916L172.945 372.05L172.797 372.183L172.648 372.312L172.497 372.44L172.345 372.566L172.191 372.69L172.035 372.812L171.878 372.932L171.72 373.049L171.56 373.164L171.399 373.278L171.237 373.389L171.073 373.497L170.909 373.604L170.743 373.708L170.577 373.81L170.409 373.909L170.24 374.007L170.07 374.102L169.9 374.195L169.729 374.285L169.557 374.372L169.384 374.458L169.21 374.541L169.036 374.622L168.861 374.701L168.685 374.777L168.51 374.85L168.333 374.922L168.157 374.991L167.979 375.058L167.802 375.121L167.624 375.184L167.447 375.243L167.268 375.3L167.09 375.355L166.912 375.407L166.733 375.457L166.554 375.505L166.376 375.551L166.198 375.594L166.02 375.635L165.841 375.673L165.664 375.709L165.486 375.743L165.309 375.776L165.131 375.805L164.955 375.832L164.778 375.858L164.602 375.881L164.427 375.902L164.252 375.921L164.077 375.938L163.903 375.952L163.73 375.965L163.556 375.976L163.385 375.984L163.213 375.991L163.042 375.996L162.872 375.999L162.702 376H16.2976Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='195' height='413' viewBox='0 0 195 413' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1 385.457L1.0042 385.915L1.0162 386.373L1.03599 386.831L1.06358 387.288L1.09897 387.745L1.14276 388.201L1.19434 388.656L1.25372 389.11L1.3209 389.564L1.39588 390.016L1.47925 390.467L1.56983 390.915L1.6682 391.363L1.77437 391.809L1.88833 392.253L2.0101 392.694L2.13906 393.134L2.27582 393.572L2.42037 394.007L2.57273 394.439L2.73168 394.869L2.89843 395.296L3.07297 395.72L3.25412 396.141L3.44306 396.559L3.6392 396.973L3.84254 397.384L4.05248 397.792L4.26961 398.195L4.49394 398.596L4.72547 398.992L4.963 399.384L5.20773 399.772L5.45965 400.155L5.71757 400.535L5.98209 400.909L6.25321 401.28L6.53033 401.645L6.81404 402.006L7.10435 402.362L7.40006 402.712L7.70237 403.058L8.01008 403.398L8.32379 403.733L8.64349 404.063L8.96919 404.386L9.29969 404.705L9.63619 405.018L9.97748 405.324L10.3248 405.625L10.6769 405.92L11.0338 406.209L11.3961 406.492L11.7631 406.768L12.1344 407.038L12.5111 407.301L12.892 407.558L13.2771 407.808L13.6664 408.052L14.0604 408.289L14.4581 408.519L14.8594 408.743L15.2649 408.959L15.674 409.169L16.0866 409.371L16.5029 409.567L16.9228 409.754L17.3451 409.935L17.7709 410.109L18.1998 410.275L18.6311 410.434L19.0653 410.585L19.502 410.729L19.9411 410.865L20.3825 410.994L20.8264 411.115L21.2721 411.229L21.7195 411.334L22.1688 411.432L22.6199 411.523L23.0727 411.605L23.5262 411.68L23.9814 411.747L24.4373 411.806L24.8944 411.858L25.3526 411.901L25.8109 411.937L26.2704 411.964L26.7298 411.984L27.1899 411.996L27.6499 412H167.35L167.81 411.996L168.27 411.984L168.73 411.964L169.189 411.937L169.647 411.901L170.106 411.858L170.563 411.806L171.019 411.747L171.474 411.68L171.928 411.605L172.38 411.523L172.831 411.432L173.28 411.334L173.728 411.229L174.174 411.115L174.617 410.994L175.059 410.865L175.498 410.729L175.935 410.585L176.369 410.434L176.8 410.275L177.229 410.109L177.655 409.935L178.078 409.754L178.497 409.567L178.913 409.371L179.326 409.169L179.735 408.959L180.141 408.743L180.542 408.519L180.94 408.289L181.334 408.052L181.723 407.808L182.108 407.558L182.489 407.301L182.866 407.038L183.237 406.768L183.604 406.492L183.966 406.209L184.323 405.92L184.675 405.625L185.023 405.324L185.364 405.018L185.7 404.705L186.031 404.386L186.357 404.063L186.676 403.733L186.99 403.398L187.298 403.058L187.6 402.712L187.896 402.362L188.186 402.006L188.47 401.645L188.747 401.28L189.018 400.909L189.282 400.535L189.54 400.155L189.792 399.772L190.037 399.384L190.275 398.992L190.506 398.596L190.73 398.195L190.948 397.792L191.157 397.384L191.361 396.973L191.557 396.559L191.746 396.141L191.927 395.72L192.102 395.296L192.268 394.869L192.428 394.439L192.58 394.007L192.724 393.572L192.861 393.134L192.99 392.694L193.112 392.253L193.226 391.809L193.332 391.363L193.43 390.915L193.521 390.467L193.604 390.016L193.679 389.564L193.746 389.11L193.806 388.656L193.857 388.201L193.901 387.745L193.936 387.288L193.965 386.831L193.984 386.373L193.996 385.915L194 385.457V27.5434L193.996 27.0852L193.984 26.6269L193.965 26.1693L193.936 25.7117L193.901 25.2553L193.857 24.7988L193.806 24.3436L193.746 23.8896L193.679 23.4361L193.604 22.9845L193.521 22.5334L193.43 22.0842L193.332 21.6367L193.226 21.191L193.112 20.7471L192.99 20.305L192.861 19.8653L192.724 19.428L192.58 18.9931L192.428 18.5606L192.268 18.131L192.102 17.7039L191.927 17.2797L191.746 16.8591L191.557 16.4409L191.361 16.0263L191.157 15.6153L190.948 15.2078L190.73 14.804L190.506 14.4043L190.275 14.0082L190.037 13.6157L189.792 13.228L189.54 12.8445L189.282 12.4651L189.018 12.0899L188.747 11.7201L188.47 11.3545L188.186 10.9936L187.896 10.6382L187.6 10.2875L187.298 9.94159L186.99 9.60166L186.676 9.2665L186.357 8.93733L186.031 8.61293L185.7 8.2945L185.364 7.98205L185.023 7.67557L184.675 7.37447L184.323 7.07995L183.966 6.79079L183.604 6.50821L183.237 6.23221L182.866 5.96217L182.489 5.69871L182.108 5.44182L181.723 5.1909L181.334 4.94716L180.94 4.71058L180.542 4.47997L180.141 4.25654L179.735 4.04027L179.326 3.83118L178.913 3.62865L178.497 3.43329L178.078 3.24511L177.655 3.06468L177.229 2.89084L176.8 2.72475L176.369 2.56644L175.935 2.41469L175.498 2.27071L175.059 2.1345L174.617 2.00606L174.174 1.88478L173.728 1.77127L173.28 1.66553L172.831 1.56755L172.38 1.47734L171.928 1.3943L171.474 1.31962L171.019 1.25271L170.563 1.19356L170.106 1.14219L169.647 1.09857L169.189 1.06333L168.73 1.03585L168.27 1.01613L167.81 1.00418L167.35 1H27.6499L27.1899 1.00418L26.7298 1.01613L26.2704 1.03585L25.8109 1.06333L25.3526 1.09857L24.8944 1.14219L24.4373 1.19356L23.9814 1.25271L23.5262 1.31962L23.0727 1.3943L22.6199 1.47734L22.1688 1.56755L21.7195 1.66553L21.2721 1.77127L20.8264 1.88478L20.3825 2.00606L19.9411 2.1345L19.502 2.27071L19.0653 2.41469L18.6311 2.56644L18.1998 2.72475L17.7709 2.89084L17.3451 3.06468L16.9228 3.24511L16.5029 3.43329L16.0866 3.62865L15.674 3.83118L15.2649 4.04027L14.8594 4.25654L14.4581 4.47997L14.0604 4.71058L13.6664 4.94716L13.2771 5.1909L12.892 5.44182L12.5111 5.69871L12.1344 5.96217L11.7631 6.23221L11.3961 6.50821L11.0338 6.79079L10.6769 7.07995L10.3248 7.37447L9.97748 7.67557L9.63619 7.98205L9.29969 8.2945L8.96919 8.61293L8.64349 8.93733L8.32379 9.2665L8.01008 9.60166L7.70237 9.94159L7.40006 10.2875L7.10435 10.6382L6.81404 10.9936L6.53033 11.3545L6.25321 11.7201L5.98209 12.0899L5.71757 12.4651L5.45965 12.8445L5.20773 13.228L4.963 13.6157L4.72547 14.0082L4.49394 14.4043L4.26961 14.804L4.05248 15.2078L3.84254 15.6153L3.6392 16.0263L3.44306 16.4409L3.25412 16.8591L3.07297 17.2797L2.89843 17.7039L2.73168 18.131L2.57273 18.5606L2.42037 18.9931L2.27582 19.428L2.13906 19.8653L2.0101 20.305L1.88833 20.7471L1.77437 21.191L1.6682 21.6367L1.56983 22.0842L1.47925 22.5334L1.39588 22.9845L1.3209 23.4361L1.25372 23.8896L1.19434 24.3436L1.14276 24.7988L1.09897 25.2553L1.06358 25.7117L1.03599 26.1693L1.0162 26.6269L1.0042 27.0852L1 27.5434V385.457Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M24.2976 401L24.1287 400.999L23.9586 400.996L23.7873 400.991L23.616 400.984L23.4436 400.976L23.2711 400.965L23.0974 400.952L22.9232 400.938L22.7489 400.921L22.5735 400.902L22.398 400.881L22.222 400.858L22.0454 400.832L21.8687 400.805L21.6915 400.776L21.5143 400.743L21.3364 400.709L21.1586 400.673L20.9808 400.635L20.8024 400.594L20.624 400.551L20.4455 400.505L20.2671 400.457L20.0887 400.407L19.9103 400.355L19.7319 400.3L19.554 400.243L19.3756 400.184L19.1984 400.121L19.0206 400.058L18.8433 399.991L18.6667 399.922L18.4907 399.85L18.3146 399.777L18.1392 399.701L17.9643 399.622L17.7901 399.541L17.6164 399.458L17.4439 399.372L17.2715 399.285L17.1002 399.195L16.9295 399.102L16.76 399.007L16.5917 398.909L16.4234 398.81L16.2569 398.708L16.0915 398.604L15.9268 398.497L15.7632 398.389L15.6009 398.278L15.4403 398.164L15.2803 398.049L15.1221 397.932L14.9651 397.812L14.8099 397.69L14.6559 397.566L14.503 397.44L14.352 397.312L14.2027 397.183L14.0546 397.05L13.9089 396.916L13.7644 396.78L13.6216 396.643L13.4807 396.503L13.3415 396.362L13.2041 396.219L13.0691 396.074L12.9353 395.927L12.8039 395.779L12.6742 395.628L12.547 395.477L12.4215 395.324L12.2978 395.169L12.1764 395.013L12.0575 394.856L11.9403 394.697L11.8256 394.537L11.7126 394.375L11.6019 394.213L11.4937 394.048L11.3878 393.883L11.2838 393.717L11.1821 393.55L11.0827 393.381L10.9858 393.212L10.8912 393.042L10.7991 392.871L10.7092 392.698L10.6212 392.526L10.5362 392.352L10.4529 392.178L10.3726 392.004L10.2947 391.828L10.2186 391.652L10.1454 391.475L10.0741 391.299L10.0057 391.121L9.93908 390.944L9.87485 390.765L9.81359 390.587L9.75412 390.408L9.69762 390.23L9.6429 390.051L9.59057 389.872L9.54061 389.693L9.49303 389.514L9.44783 389.335L9.40501 389.156L9.36397 388.976L9.32532 388.798L9.28963 388.62L9.25514 388.441L9.22362 388.263L9.19388 388.085L9.16653 387.908L9.14155 387.731L9.11835 387.554L9.09754 387.378L9.0785 387.202L9.06185 387.027L9.04698 386.852L9.0345 386.678L9.02379 386.504L9.01546 386.332L9.00833 386.159L9.00357 385.988L9.00119 385.817L9 385.647V41.3522L9.00119 41.1821L9.00357 41.0114L9.00833 40.8401L9.01546 40.6682L9.02379 40.4951L9.0345 40.3214L9.04698 40.1477L9.06185 39.9728L9.0785 39.7974L9.09754 39.6219L9.11835 39.4458L9.14155 39.2692L9.16653 39.0919L9.19388 38.9146L9.22362 38.7368L9.25514 38.5589L9.28963 38.3804L9.32532 38.202L9.36397 38.0229L9.40501 37.8445L9.44783 37.6654L9.49303 37.4864L9.54061 37.3073L9.59057 37.1283L9.6429 36.9492L9.69762 36.7701L9.75412 36.5911L9.81359 36.4126L9.87485 36.2342L9.93908 36.0563L10.0057 35.8785L10.0741 35.7012L10.1454 35.5245L10.2186 35.3479L10.2947 35.1718L10.3726 34.9963L10.4529 34.8214L10.5362 34.6472L10.6212 34.4741L10.7092 34.301L10.7991 34.1291L10.8912 33.9578L10.9858 33.7877L11.0827 33.6182L11.1821 33.4499L11.2838 33.2828L11.3878 33.1162L11.4937 32.9515L11.6019 32.7874L11.7126 32.6244L11.8256 32.4633L11.9403 32.3027L12.0575 32.144L12.1764 31.9864L12.2978 31.8306L12.4215 31.676L12.547 31.5226L12.6742 31.371L12.8039 31.2212L12.9353 31.0726L13.0691 30.9264L13.2041 30.7814L13.3415 30.6381L13.4807 30.4967L13.6216 30.357L13.7644 30.2191L13.9089 30.083L14.0546 29.9494L14.2027 29.8174L14.352 29.6873L14.503 29.5596L14.6559 29.4337L14.8099 29.3095L14.9651 29.1878L15.1221 29.0684L15.2803 28.9508L15.4403 28.835L15.6009 28.7222L15.7632 28.6112L15.9268 28.5026L16.0915 28.3958L16.2569 28.2919L16.4234 28.1898L16.5917 28.0902L16.76 27.9929L16.9295 27.898L17.1002 27.8055L17.2715 27.7147L17.4439 27.627L17.6164 27.5417L17.7901 27.4581L17.9643 27.3775L18.1392 27.2987L18.3146 27.2229L18.4907 27.1489L18.6667 27.0779L18.8433 27.0087L19.0206 26.9424L19.1984 26.878L19.3756 26.8165L19.554 26.7568L19.7319 26.6995L19.9103 26.6452L20.0887 26.5927L20.2671 26.5425L20.4455 26.4948L20.624 26.4494L20.8024 26.4059L20.9808 26.3653L21.1586 26.3265L21.3364 26.2901L21.5143 26.256L21.6915 26.2244L21.8687 26.1946L22.0454 26.1671L22.222 26.142L22.398 26.1188L22.5735 26.0979L22.7489 26.0788L22.9232 26.0621L23.0974 26.0472L23.2711 26.0346L23.4436 26.0239L23.616 26.0149L23.7873 26.0084L23.9586 26.0036L24.1287 26.0006L24.2976 26H170.702L170.872 26.0006L171.042 26.0036L171.213 26.0084L171.385 26.0149L171.556 26.0239L171.73 26.0346L171.903 26.0472L172.077 26.0621L172.252 26.0788L172.427 26.0979L172.602 26.1188L172.778 26.142L172.955 26.1671L173.131 26.1946L173.309 26.2244L173.486 26.256L173.664 26.2901L173.841 26.3265L174.02 26.3653L174.198 26.4059L174.376 26.4494L174.554 26.4948L174.733 26.5425L174.912 26.5927L175.09 26.6452L175.268 26.6995L175.447 26.7568L175.624 26.8165L175.802 26.878L175.979 26.9424L176.157 27.0087L176.333 27.0779L176.51 27.1489L176.685 27.2229L176.861 27.2987L177.036 27.3775L177.21 27.4581L177.384 27.5417L177.557 27.627L177.729 27.7147L177.9 27.8055L178.07 27.898L178.24 27.9929L178.409 28.0902L178.577 28.1898L178.743 28.2919L178.909 28.3958L179.073 28.5026L179.237 28.6112L179.399 28.7222L179.56 28.835L179.72 28.9508L179.878 29.0684L180.035 29.1878L180.191 29.3095L180.345 29.4337L180.497 29.5596L180.648 29.6873L180.797 29.8174L180.945 29.9494L181.092 30.083L181.236 30.2191L181.378 30.357L181.519 30.4967L181.658 30.6381L181.796 30.7814L181.931 30.9264L182.065 31.0726L182.196 31.2212L182.326 31.371L182.454 31.5226L182.579 31.676L182.702 31.8306L182.824 31.9864L182.943 32.144L183.06 32.3027L183.175 32.4633L183.287 32.6244L183.398 32.7874L183.506 32.9515L183.613 33.1162L183.716 33.2828L183.818 33.4499L183.917 33.6182L184.014 33.7877L184.109 33.9578L184.201 34.1291L184.291 34.301L184.379 34.4741L184.464 34.6472L184.547 34.8214L184.627 34.9963L184.706 35.1718L184.781 35.3479L184.855 35.5245L184.926 35.7012L184.995 35.8785L185.061 36.0563L185.125 36.2342L185.186 36.4126L185.246 36.5911L185.303 36.7701L185.358 36.9492L185.409 37.1283L185.459 37.3073L185.507 37.4864L185.552 37.6654L185.596 37.8445L185.636 38.0229L185.675 38.202L185.711 38.3804L185.745 38.5589L185.776 38.7368L185.806 38.9146L185.833 39.0919L185.858 39.2692L185.882 39.4458L185.902 39.6219L185.921 39.7974L185.938 39.9728L185.953 40.1477L185.966 40.3214L185.976 40.4951L185.985 40.6682L185.992 40.8401L185.996 41.0114L185.999 41.1821L186 41.3522V385.647L185.999 385.817L185.996 385.988L185.992 386.159L185.985 386.332L185.976 386.504L185.966 386.678L185.953 386.852L185.938 387.027L185.921 387.202L185.902 387.378L185.882 387.554L185.858 387.731L185.833 387.908L185.806 388.085L185.776 388.263L185.745 388.441L185.711 388.62L185.675 388.798L185.636 388.976L185.596 389.156L185.552 389.335L185.507 389.514L185.459 389.693L185.409 389.872L185.358 390.051L185.303 390.23L185.246 390.408L185.186 390.587L185.125 390.765L185.061 390.944L184.995 391.121L184.926 391.299L184.855 391.475L184.781 391.652L184.706 391.828L184.627 392.004L184.547 392.178L184.464 392.352L184.379 392.526L184.291 392.698L184.201 392.871L184.109 393.042L184.014 393.212L183.917 393.381L183.818 393.55L183.716 393.717L183.613 393.883L183.506 394.048L183.398 394.213L183.287 394.375L183.175 394.537L183.06 394.697L182.943 394.856L182.824 395.013L182.702 395.169L182.579 395.324L182.454 395.477L182.326 395.628L182.196 395.779L182.065 395.927L181.931 396.074L181.796 396.219L181.658 396.362L181.519 396.503L181.378 396.643L181.236 396.78L181.092 396.916L180.945 397.05L180.797 397.183L180.648 397.312L180.497 397.44L180.345 397.566L180.191 397.69L180.035 397.812L179.878 397.932L179.72 398.049L179.56 398.164L179.399 398.278L179.237 398.389L179.073 398.497L178.909 398.604L178.743 398.708L178.577 398.81L178.409 398.909L178.24 399.007L178.07 399.102L177.9 399.195L177.729 399.285L177.557 399.372L177.384 399.458L177.21 399.541L177.036 399.622L176.861 399.701L176.685 399.777L176.51 399.85L176.333 399.922L176.157 399.991L175.979 400.058L175.802 400.121L175.624 400.184L175.447 400.243L175.268 400.3L175.09 400.355L174.912 400.407L174.733 400.457L174.554 400.505L174.376 400.551L174.198 400.594L174.02 400.635L173.841 400.673L173.664 400.709L173.486 400.743L173.309 400.776L173.131 400.805L172.955 400.832L172.778 400.858L172.602 400.881L172.427 400.902L172.252 400.921L172.077 400.938L171.903 400.952L171.73 400.965L171.556 400.976L171.385 400.984L171.213 400.991L171.042 400.996L170.872 400.999L170.702 401H24.2976Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M88.3436 20H88.3205L88.2974 19.9991L88.2742 19.9973L88.2511 19.9956L88.228 19.9929L88.2048 19.9894L88.1817 19.9859L88.1592 19.9815L88.136 19.9762L88.1129 19.9709L88.0903 19.9647L88.0672 19.9576L88.0447 19.9506L88.0221 19.9426L87.9996 19.9338L87.9776 19.925L87.9551 19.9152L87.9331 19.9047L87.9112 19.8941L87.8892 19.8826L87.8673 19.8702L87.8459 19.8579L87.824 19.8446L87.8026 19.8314L87.7819 19.8173L87.7605 19.8022L87.7398 19.7872L87.7196 19.7714L87.6988 19.7546L87.6787 19.7378L87.6585 19.721L87.6389 19.7025L87.6193 19.6848L87.5997 19.6654L87.5802 19.646L87.5612 19.6266L87.5428 19.6063L87.5244 19.5851L87.506 19.5639L87.4882 19.5418L87.4704 19.5197L87.4526 19.4977L87.4354 19.4738L87.4182 19.4509L87.4016 19.4271L87.3856 19.4023L87.369 19.3776L87.3536 19.352L87.3381 19.3264L87.3227 19.3008L87.3079 19.2743L87.2931 19.247L87.2788 19.2205L87.2646 19.1922L87.2509 19.1649L87.2379 19.1366L87.2248 19.1075L87.2124 19.0792L87.1999 19.0501L87.1881 19.0201L87.1762 18.9901L87.1649 18.9601L87.1536 18.93L87.143 18.8991L87.1329 18.8682L87.1234 18.8365L87.1139 18.8056L87.1044 18.7738L87.0955 18.742L87.0872 18.7093L87.0795 18.6776L87.0718 18.6449L87.0641 18.6122L87.0575 18.5787L87.051 18.546L87.0445 18.5125L87.0392 18.4789L87.0338 18.4454L87.0285 18.4118L87.0243 18.3774L87.0202 18.3438L87.016 18.3094L87.0125 18.2759L87.0095 18.2414L87.0071 18.207L87.0048 18.1726L87.003 18.1382L87.0018 18.1037L87.0006 18.0693L87 18.0349V18.0004V17.966L87.0006 17.9316L87.0018 17.8972L87.003 17.8627L87.0048 17.8283L87.0071 17.7939L87.0095 17.7594L87.0125 17.725L87.016 17.6906L87.0202 17.657L87.0243 17.6226L87.0285 17.5891L87.0338 17.5555L87.0392 17.522L87.0445 17.4884L87.051 17.4549L87.0575 17.4222L87.0641 17.3887L87.0718 17.356L87.0795 17.3233L87.0872 17.2915L87.0955 17.2589L87.1044 17.2271L87.1139 17.1953L87.1234 17.1635L87.1329 17.1326L87.143 17.1017L87.1536 17.0708L87.1649 17.0408L87.1762 17.0099L87.1881 16.9808L87.1999 16.9508L87.2124 16.9216L87.2248 16.8925L87.2379 16.8643L87.2509 16.836L87.2646 16.8078L87.2788 16.7804L87.2931 16.753L87.3079 16.7266L87.3227 16.7001L87.3381 16.6745L87.3536 16.6489L87.369 16.6233L87.3856 16.5985L87.4016 16.5738L87.4182 16.55L87.4354 16.5262L87.4526 16.5032L87.4704 16.4802L87.4882 16.4582L87.506 16.437L87.5244 16.4149L87.5428 16.3946L87.5612 16.3743L87.5802 16.354L87.5997 16.3346L87.6193 16.316L87.6389 16.2975L87.6585 16.2799L87.6787 16.2622L87.6988 16.2454L87.7196 16.2295L87.7398 16.2136L87.7605 16.1986L87.7819 16.1836L87.8026 16.1695L87.824 16.1563L87.8459 16.143L87.8673 16.1307L87.8892 16.1183L87.9112 16.1068L87.9331 16.0962L87.9551 16.0856L87.9776 16.0759L87.9996 16.0671L88.0221 16.0583L88.0447 16.0503L88.0672 16.0433L88.0903 16.0362L88.1129 16.03L88.136 16.0247L88.1592 16.0194L88.1817 16.015L88.2048 16.0106L88.228 16.0079L88.2511 16.0053L88.2742 16.0027L88.2974 16.0018L88.3205 16.0009L88.3436 16H106.656L106.679 16.0009L106.703 16.0018L106.726 16.0027L106.749 16.0053L106.772 16.0079L106.795 16.0106L106.818 16.015L106.841 16.0194L106.864 16.0247L106.887 16.03L106.91 16.0362L106.933 16.0433L106.955 16.0503L106.978 16.0583L107 16.0671L107.023 16.0759L107.045 16.0856L107.067 16.0962L107.089 16.1068L107.111 16.1183L107.133 16.1307L107.155 16.143L107.176 16.1563L107.197 16.1695L107.218 16.1836L107.239 16.1986L107.26 16.2136L107.281 16.2295L107.301 16.2454L107.321 16.2622L107.342 16.2799L107.361 16.2975L107.381 16.316L107.4 16.3346L107.42 16.354L107.439 16.3743L107.457 16.3946L107.476 16.4149L107.494 16.437L107.512 16.4582L107.53 16.4802L107.547 16.5032L107.565 16.5262L107.582 16.55L107.598 16.5738L107.614 16.5985L107.631 16.6233L107.646 16.6489L107.662 16.6745L107.677 16.7001L107.692 16.7266L107.707 16.753L107.721 16.7804L107.735 16.8078L107.749 16.836L107.762 16.8643L107.775 16.8925L107.788 16.9216L107.8 16.9508L107.813 16.9808L107.824 17.0099L107.835 17.0408L107.846 17.0708L107.857 17.1017L107.867 17.1326L107.877 17.1635L107.887 17.1953L107.896 17.2271L107.904 17.2589L107.913 17.2915L107.921 17.3233L107.929 17.356L107.936 17.3887L107.942 17.4222L107.949 17.4549L107.956 17.4884L107.961 17.522L107.966 17.5555L107.972 17.5891L107.976 17.6226L107.98 17.657L107.984 17.6906L107.988 17.725L107.991 17.7594L107.993 17.7939L107.995 17.8283L107.997 17.8627L107.998 17.8972L107.999 17.9316L108 17.966V18.0004V18.0349L107.999 18.0693L107.998 18.1037L107.997 18.1382L107.995 18.1726L107.993 18.207L107.991 18.2414L107.988 18.2759L107.984 18.3094L107.98 18.3438L107.976 18.3774L107.972 18.4118L107.966 18.4454L107.961 18.4789L107.956 18.5125L107.949 18.546L107.942 18.5787L107.936 18.6122L107.929 18.6449L107.921 18.6776L107.913 18.7093L107.904 18.742L107.896 18.7738L107.887 18.8056L107.877 18.8365L107.867 18.8682L107.857 18.8991L107.846 18.93L107.835 18.9601L107.824 18.9901L107.813 19.0201L107.8 19.0501L107.788 19.0792L107.775 19.1075L107.762 19.1366L107.749 19.1649L107.735 19.1922L107.721 19.2205L107.707 19.247L107.692 19.2743L107.677 19.3008L107.662 19.3264L107.646 19.352L107.631 19.3776L107.614 19.4023L107.598 19.4271L107.582 19.4509L107.565 19.4738L107.547 19.4977L107.53 19.5197L107.512 19.5418L107.494 19.5639L107.476 19.5851L107.457 19.6063L107.439 19.6266L107.42 19.646L107.4 19.6654L107.381 19.6848L107.361 19.7025L107.342 19.721L107.321 19.7378L107.301 19.7546L107.281 19.7714L107.26 19.7872L107.239 19.8022L107.218 19.8173L107.197 19.8314L107.176 19.8446L107.155 19.8579L107.133 19.8702L107.111 19.8826L107.089 19.8941L107.067 19.9047L107.045 19.9152L107.023 19.925L107 19.9338L106.978 19.9426L106.955 19.9506L106.933 19.9576L106.91 19.9647L106.887 19.9709L106.864 19.9762L106.841 19.9815L106.818 19.9859L106.795 19.9894L106.772 19.9929L106.749 19.9956L106.726 19.9973L106.703 19.9991L106.679 20H106.656H88.3436Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='179' height='377' viewBox='0 0 179 377' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M16.2976 376L16.1287 375.999L15.9586 375.996L15.7873 375.991L15.616 375.984L15.4436 375.976L15.2711 375.965L15.0974 375.952L14.9232 375.938L14.7489 375.921L14.5735 375.902L14.398 375.881L14.222 375.858L14.0454 375.832L13.8687 375.805L13.6915 375.776L13.5143 375.743L13.3364 375.709L13.1586 375.673L12.9808 375.635L12.8024 375.594L12.624 375.551L12.4455 375.505L12.2671 375.457L12.0887 375.407L11.9103 375.355L11.7319 375.3L11.554 375.243L11.3756 375.184L11.1984 375.121L11.0206 375.058L10.8433 374.991L10.6667 374.922L10.4907 374.85L10.3146 374.777L10.1392 374.701L9.96434 374.622L9.79008 374.541L9.61642 374.458L9.44395 374.372L9.27148 374.285L9.1002 374.195L8.92951 374.102L8.76001 374.007L8.5917 373.909L8.4234 373.81L8.25687 373.708L8.09154 373.604L7.9268 373.497L7.76325 373.389L7.60089 373.278L7.44031 373.164L7.28033 373.049L7.12213 372.932L6.96512 372.812L6.8099 372.69L6.65587 372.566L6.50302 372.44L6.35196 372.312L6.20268 372.183L6.05459 372.05L5.90888 371.916L5.76437 371.78L5.62163 371.643L5.48068 371.503L5.34152 371.362L5.20413 371.219L5.06913 371.074L4.93532 370.927L4.80388 370.779L4.67423 370.628L4.54696 370.477L4.42147 370.324L4.29777 370.169L4.17644 370.013L4.0575 369.856L3.94034 369.697L3.82555 369.537L3.71256 369.375L3.60194 369.213L3.4937 369.048L3.38784 368.883L3.28376 368.717L3.18206 368.55L3.08274 368.381L2.9858 368.212L2.89124 368.042L2.79905 367.871L2.70925 367.698L2.62123 367.526L2.53618 367.352L2.45292 367.178L2.37263 367.004L2.29472 366.828L2.2186 366.652L2.14545 366.475L2.07408 366.299L2.00569 366.121L1.93908 365.944L1.87485 365.765L1.81359 365.587L1.75412 365.408L1.69762 365.23L1.6429 365.051L1.59057 364.872L1.54061 364.693L1.49303 364.514L1.44783 364.335L1.40501 364.156L1.36397 363.976L1.32532 363.798L1.28963 363.62L1.25514 363.441L1.22362 363.263L1.19388 363.085L1.16653 362.908L1.14155 362.731L1.11835 362.554L1.09754 362.378L1.0785 362.202L1.06185 362.027L1.04698 361.852L1.0345 361.678L1.02379 361.504L1.01546 361.332L1.00833 361.159L1.00357 360.988L1.00119 360.817L1 360.647V16.3522L1.00119 16.1821L1.00357 16.0114L1.00833 15.8401L1.01546 15.6682L1.02379 15.4951L1.0345 15.3214L1.04698 15.1477L1.06185 14.9728L1.0785 14.7974L1.09754 14.6219L1.11835 14.4458L1.14155 14.2692L1.16653 14.0919L1.19388 13.9146L1.22362 13.7368L1.25514 13.5589L1.28963 13.3804L1.32532 13.202L1.36397 13.0229L1.40501 12.8445L1.44783 12.6654L1.49303 12.4864L1.54061 12.3073L1.59057 12.1283L1.6429 11.9492L1.69762 11.7701L1.75412 11.5911L1.81359 11.4126L1.87485 11.2342L1.93908 11.0563L2.00569 10.8785L2.07408 10.7012L2.14545 10.5245L2.2186 10.3479L2.29472 10.1718L2.37263 9.99631L2.45292 9.82144L2.53618 9.64716L2.62123 9.47407L2.70925 9.30098L2.79905 9.12909L2.89124 8.9578L2.9858 8.78769L3.08274 8.61819L3.18206 8.44988L3.28376 8.28276L3.38784 8.11624L3.4937 7.95151L3.60194 7.78737L3.71256 7.62443L3.82555 7.46329L3.94034 7.30273L4.0575 7.14397L4.17644 6.9864L4.29777 6.83062L4.42147 6.67604L4.54696 6.52265L4.67423 6.37105L4.80388 6.22124L4.93532 6.07262L5.06913 5.92639L5.20413 5.78136L5.34152 5.63812L5.48068 5.49666L5.62163 5.357L5.76437 5.21913L5.90888 5.08305L6.05459 4.94935L6.20268 4.81745L6.35196 4.68734L6.50302 4.55961L6.65587 4.43367L6.8099 4.30953L6.96512 4.18777L7.12213 4.0684L7.28033 3.95082L7.44031 3.83504L7.60089 3.72223L7.76325 3.61122L7.9268 3.50259L8.09154 3.39575L8.25687 3.2919L8.4234 3.18984L8.5917 3.09017L8.76001 2.99288L8.92951 2.89798L9.1002 2.80547L9.27148 2.71475L9.44395 2.62701L9.61642 2.54166L9.79008 2.4581L9.96434 2.37753L10.1392 2.29875L10.3146 2.22294L10.4907 2.14894L10.6667 2.07791L10.8433 2.00868L11.0206 1.94243L11.1984 1.87797L11.3756 1.81649L11.554 1.7568L11.7319 1.69951L11.9103 1.6452L12.0887 1.59267L12.2671 1.54253L12.4455 1.49479L12.624 1.44943L12.8024 1.40586L12.9808 1.36527L13.1586 1.32647L13.3364 1.29007L13.5143 1.25605L13.6915 1.22442L13.8687 1.19457L14.0454 1.16712L14.222 1.14205L14.398 1.11877L14.5735 1.09788L14.7489 1.07878L14.9232 1.06207L15.0974 1.04715L15.2711 1.03462L15.4436 1.02387L15.616 1.01492L15.7873 1.00836L15.9586 1.00358L16.1287 1.0006L16.2976 1H162.702L162.872 1.0006L163.042 1.00358L163.213 1.00836L163.385 1.01492L163.556 1.02387L163.73 1.03462L163.903 1.04715L164.077 1.06207L164.252 1.07878L164.427 1.09788L164.602 1.11877L164.778 1.14205L164.955 1.16712L165.131 1.19457L165.309 1.22442L165.486 1.25605L165.664 1.29007L165.841 1.32647L166.02 1.36527L166.198 1.40586L166.376 1.44943L166.554 1.49479L166.733 1.54253L166.912 1.59267L167.09 1.6452L167.268 1.69951L167.447 1.7568L167.624 1.81649L167.802 1.87797L167.979 1.94243L168.157 2.00868L168.333 2.07791L168.51 2.14894L168.685 2.22294L168.861 2.29875L169.036 2.37753L169.21 2.4581L169.384 2.54166L169.557 2.62701L169.729 2.71475L169.9 2.80547L170.07 2.89798L170.24 2.99288L170.409 3.09017L170.577 3.18984L170.743 3.2919L170.909 3.39575L171.073 3.50259L171.237 3.61122L171.399 3.72223L171.56 3.83504L171.72 3.95082L171.878 4.0684L172.035 4.18777L172.191 4.30953L172.345 4.43367L172.497 4.55961L172.648 4.68734L172.797 4.81745L172.945 4.94935L173.092 5.08305L173.236 5.21913L173.378 5.357L173.519 5.49666L173.658 5.63812L173.796 5.78136L173.931 5.92639L174.065 6.07262L174.196 6.22124L174.326 6.37105L174.454 6.52265L174.579 6.67604L174.702 6.83062L174.824 6.9864L174.943 7.14397L175.06 7.30273L175.175 7.46329L175.287 7.62443L175.398 7.78737L175.506 7.95151L175.613 8.11624L175.716 8.28276L175.818 8.44988L175.917 8.61819L176.014 8.78769L176.109 8.9578L176.201 9.12909L176.291 9.30098L176.379 9.47407L176.464 9.64716L176.547 9.82144L176.627 9.99631L176.706 10.1718L176.781 10.3479L176.855 10.5245L176.926 10.7012L176.995 10.8785L177.061 11.0563L177.125 11.2342L177.186 11.4126L177.246 11.5911L177.303 11.7701L177.358 11.9492L177.409 12.1283L177.459 12.3073L177.507 12.4864L177.552 12.6654L177.596 12.8445L177.636 13.0229L177.675 13.202L177.711 13.3804L177.745 13.5589L177.776 13.7368L177.806 13.9146L177.833 14.0919L177.858 14.2692L177.882 14.4458L177.902 14.6219L177.921 14.7974L177.938 14.9728L177.953 15.1477L177.966 15.3214L177.976 15.4951L177.985 15.6682L177.992 15.8401L177.996 16.0114L177.999 16.1821L178 16.3522V360.647L177.999 360.817L177.996 360.988L177.992 361.159L177.985 361.332L177.976 361.504L177.966 361.678L177.953 361.852L177.938 362.027L177.921 362.202L177.902 362.378L177.882 362.554L177.858 362.731L177.833 362.908L177.806 363.085L177.776 363.263L177.745 363.441L177.711 363.62L177.675 363.798L177.636 363.976L177.596 364.156L177.552 364.335L177.507 364.514L177.459 364.693L177.409 364.872L177.358 365.051L177.303 365.23L177.246 365.408L177.186 365.587L177.125 365.765L177.061 365.944L176.995 366.121L176.926 366.299L176.855 366.475L176.781 366.652L176.706 366.828L176.627 367.004L176.547 367.178L176.464 367.352L176.379 367.526L176.291 367.698L176.201 367.871L176.109 368.042L176.014 368.212L175.917 368.381L175.818 368.55L175.716 368.717L175.613 368.883L175.506 369.048L175.398 369.213L175.287 369.375L175.175 369.537L175.06 369.697L174.943 369.856L174.824 370.013L174.702 370.169L174.579 370.324L174.454 370.477L174.326 370.628L174.196 370.779L174.065 370.927L173.931 371.074L173.796 371.219L173.658 371.362L173.519 371.503L173.378 371.643L173.236 371.78L173.092 371.916L172.945 372.05L172.797 372.183L172.648 372.312L172.497 372.44L172.345 372.566L172.191 372.69L172.035 372.812L171.878 372.932L171.72 373.049L171.56 373.164L171.399 373.278L171.237 373.389L171.073 373.497L170.909 373.604L170.743 373.708L170.577 373.81L170.409 373.909L170.24 374.007L170.07 374.102L169.9 374.195L169.729 374.285L169.557 374.372L169.384 374.458L169.21 374.541L169.036 374.622L168.861 374.701L168.685 374.777L168.51 374.85L168.333 374.922L168.157 374.991L167.979 375.058L167.802 375.121L167.624 375.184L167.447 375.243L167.268 375.3L167.09 375.355L166.912 375.407L166.733 375.457L166.554 375.505L166.376 375.551L166.198 375.594L166.02 375.635L165.841 375.673L165.664 375.709L165.486 375.743L165.309 375.776L165.131 375.805L164.955 375.832L164.778 375.858L164.602 375.881L164.427 375.902L164.252 375.921L164.077 375.938L163.903 375.952L163.73 375.965L163.556 375.976L163.385 375.984L163.213 375.991L163.042 375.996L162.872 375.999L162.702 376H16.2976Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "Pixel 4 XL",
          deviceWidth: 210,
          deviceHeight: 449,
          borderlessWidth: 201,
          borderlessHeight: 407,
          cornerRadius: 27,
          cornerRadiusBorderless: 17,
          deviceSVG: "<svg width='212' height='451' viewBox='0 0 212 451' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1 423.407L1.0019 423.702L1.00633 423.997L1.01457 424.295L1.0266 424.592L1.04117 424.892L1.06017 425.192L1.0817 425.494L1.10767 425.796L1.1368 426.1L1.16911 426.405L1.20584 426.71L1.24574 427.016L1.28944 427.322L1.33695 427.63L1.38825 427.938L1.44335 428.246L1.50225 428.555L1.56559 428.864L1.63209 429.174L1.70303 429.483L1.77776 429.793L1.8563 430.103L1.93864 430.414L2.0254 430.724L2.11597 431.034L2.21098 431.344L2.30978 431.654L2.41238 431.963L2.51942 432.272L2.63089 432.581L2.74553 432.888L2.86523 433.196L2.98874 433.502L3.11604 433.808L3.24778 434.112L3.38332 434.417L3.52329 434.719L3.6677 435.021L3.81527 435.322L3.96791 435.621L4.12371 435.919L4.28395 436.215L4.44862 436.51L4.6171 436.803L4.78937 437.095L4.96544 437.385L5.14595 437.673L5.33026 437.959L5.51836 438.243L5.71027 438.525L5.90598 438.805L6.10548 439.082L6.30879 439.357L6.5159 439.63L6.72681 439.9L6.94088 440.168L7.15876 440.434L7.38043 440.696L7.60527 440.956L7.83391 441.213L8.06572 441.467L8.3007 441.718L8.53884 441.966L8.78078 442.211L9.02526 442.452L9.2729 442.692L9.52371 442.927L9.77768 443.159L10.0342 443.387L10.2939 443.613L10.5561 443.834L10.8208 444.052L11.0887 444.267L11.3585 444.478L11.6309 444.685L11.9058 444.889L12.1832 445.089L12.4625 445.285L12.7443 445.477L13.0281 445.665L13.3137 445.85L13.6019 446.03L13.8913 446.207L14.1827 446.379L14.4753 446.548L14.7698 446.712L15.0662 446.872L15.3639 447.029L15.6628 447.181L15.9624 447.329L16.2639 447.473L16.5666 447.614L16.87 447.75L17.1746 447.882L17.4799 448.009L17.7865 448.133L18.093 448.252L18.4008 448.367L18.7086 448.479L19.0177 448.585L19.3262 448.689L19.6359 448.788L19.9456 448.883L20.2553 448.974L20.565 449.06L20.8747 449.143L21.1844 449.221L21.4941 449.296L21.8039 449.367L22.1136 449.434L22.422 449.497L22.7311 449.556L23.0389 449.611L23.3467 449.663L23.6532 449.71L23.9598 449.754L24.2657 449.794L24.5703 449.83L24.8744 449.863L25.1777 449.892L25.4798 449.918L25.7813 449.94L26.0815 449.958L26.3805 449.973L26.6782 449.985L26.9752 449.993L27.2703 449.998L27.5649 450H184.436L184.73 449.998L185.025 449.993L185.322 449.985L185.62 449.973L185.919 449.958L186.219 449.94L186.52 449.918L186.822 449.892L187.126 449.863L187.43 449.83L187.735 449.794L188.04 449.754L188.347 449.71L188.654 449.663L188.961 449.611L189.27 449.556L189.578 449.497L189.887 449.434L190.196 449.367L190.506 449.296L190.816 449.221L191.125 449.143L191.435 449.06L191.745 448.974L192.055 448.883L192.364 448.788L192.674 448.689L192.983 448.585L193.291 448.479L193.599 448.367L193.907 448.252L194.214 448.133L194.52 448.009L194.825 447.882L195.13 447.75L195.433 447.614L195.736 447.473L196.038 447.329L196.338 447.181L196.637 447.029L196.934 446.872L197.23 446.712L197.525 446.548L197.818 446.379L198.109 446.207L198.399 446.03L198.686 445.85L198.972 445.665L199.256 445.477L199.538 445.285L199.817 445.089L200.094 444.889L200.369 444.685L200.641 444.478L200.912 444.267L201.179 444.052L201.444 443.834L201.706 443.613L201.966 443.387L202.222 443.159L202.476 442.927L202.727 442.692L202.975 442.452L203.22 442.211L203.461 441.966L203.699 441.718L203.934 441.467L204.166 441.213L204.395 440.956L204.62 440.696L204.841 440.434L205.059 440.168L205.273 439.9L205.484 439.63L205.691 439.357L205.895 439.082L206.094 438.805L206.29 438.525L206.482 438.243L206.67 437.959L206.854 437.673L207.035 437.385L207.211 437.095L207.384 436.803L207.551 436.51L207.716 436.215L207.876 435.919L208.033 435.621L208.185 435.322L208.333 435.021L208.477 434.719L208.617 434.417L208.752 434.112L208.884 433.808L209.012 433.502L209.135 433.196L209.254 432.888L209.37 432.581L209.481 432.272L209.588 431.963L209.69 431.654L209.789 431.344L209.884 431.034L209.975 430.724L210.061 430.414L210.144 430.103L210.223 429.793L210.298 429.483L210.368 429.174L210.435 428.864L210.498 428.555L210.557 428.246L210.612 427.938L210.663 427.63L210.711 427.322L210.754 427.016L210.795 426.71L210.831 426.405L210.864 426.1L210.893 425.796L210.918 425.494L210.94 425.192L210.959 424.892L210.974 424.592L210.985 424.295L210.994 423.997L210.999 423.702L211 423.407V27.5931L210.999 27.2983L210.994 27.0028L210.985 26.7055L210.974 26.4075L210.959 26.1082L210.94 25.8077L210.918 25.5059L210.893 25.2035L210.864 24.8998L210.831 24.5954L210.795 24.2905L210.754 23.9842L210.711 23.6774L210.663 23.3705L210.612 23.0624L210.557 22.7542L210.498 22.4448L210.435 22.136L210.368 21.826L210.298 21.516L210.223 21.2059L210.144 20.8959L210.061 20.5858L209.975 20.2758L209.884 19.9657L209.789 19.6557L209.69 19.3457L209.588 19.0369L209.481 18.7275L209.37 18.4194L209.254 18.1112L209.135 17.8043L209.012 17.4975L208.884 17.1919L208.752 16.8869L208.617 16.5832L208.477 16.2801L208.333 15.9783L208.185 15.6784L208.033 15.3792L207.876 15.0812L207.716 14.7845L207.551 14.4896L207.384 14.1967L207.211 13.9051L207.035 13.6153L206.854 13.3268L206.67 13.0409L206.482 12.7568L206.29 12.4747L206.094 12.1951L205.895 11.9174L205.691 11.6422L205.484 11.3696L205.273 11.0995L205.059 10.8313L204.841 10.5662L204.62 10.3038L204.395 10.0438L204.166 9.78703L203.934 9.53278L203.699 9.2817L203.461 9.0338L203.22 8.78906L202.975 8.54686L202.727 8.30847L202.476 8.07324L202.222 7.84119L201.966 7.6123L201.706 7.38722L201.444 7.16531L201.179 6.9472L200.912 6.7329L200.641 6.52177L200.369 6.31444L200.094 6.11092L199.817 5.9112L199.538 5.71528L199.256 5.52317L198.972 5.33487L198.686 5.15036L198.399 4.96966L198.109 4.7934L197.818 4.62095L197.525 4.45229L197.23 4.28745L196.934 4.12704L196.637 3.97107L196.338 3.81826L196.038 3.67054L195.736 3.52598L195.433 3.38586L195.13 3.25017L194.825 3.11829L194.52 2.99085L194.214 2.86722L193.907 2.74739L193.599 2.63263L193.291 2.52104L192.983 2.41389L192.674 2.31117L192.364 2.21227L192.055 2.11716L191.745 2.02649L191.435 1.93963L191.125 1.85721L190.816 1.77859L190.506 1.70377L190.196 1.63276L189.887 1.56619L189.578 1.50279L189.27 1.44382L188.961 1.38866L188.654 1.3373L188.347 1.28975L188.04 1.246L187.735 1.20606L187.43 1.16929L187.126 1.13695L186.822 1.10778L186.52 1.08179L186.219 1.06023L185.919 1.04121L185.62 1.02663L185.322 1.01458L185.025 1.00634L184.73 1.0019L184.436 1H27.5649L27.2703 1.0019L26.9752 1.00634L26.6782 1.01458L26.3805 1.02663L26.0815 1.04121L25.7813 1.06023L25.4798 1.08179L25.1777 1.10778L24.8744 1.13695L24.5703 1.16929L24.2657 1.20606L23.9598 1.246L23.6532 1.28975L23.3467 1.3373L23.0389 1.38866L22.7311 1.44382L22.422 1.50279L22.1136 1.56619L21.8039 1.63276L21.4941 1.70377L21.1844 1.77859L20.8747 1.85721L20.565 1.93963L20.2553 2.02649L19.9456 2.11716L19.6359 2.21227L19.3262 2.31117L19.0177 2.41389L18.7086 2.52104L18.4008 2.63263L18.093 2.74739L17.7865 2.86722L17.4799 2.99085L17.1746 3.11829L16.87 3.25017L16.5666 3.38586L16.2639 3.52598L15.9624 3.67054L15.6628 3.81826L15.3639 3.97107L15.0662 4.12704L14.7698 4.28745L14.4753 4.45229L14.1827 4.62095L13.8913 4.7934L13.6019 4.96966L13.3137 5.15036L13.0281 5.33487L12.7443 5.52317L12.4625 5.71528L12.1832 5.9112L11.9058 6.11092L11.6309 6.31444L11.3585 6.52177L11.0887 6.7329L10.8208 6.9472L10.5561 7.16531L10.2939 7.38722L10.0342 7.6123L9.77768 7.84119L9.52371 8.07324L9.2729 8.30847L9.02526 8.54686L8.78078 8.78906L8.53884 9.0338L8.3007 9.2817L8.06572 9.53278L7.83391 9.78703L7.60527 10.0438L7.38043 10.3038L7.15876 10.5662L6.94088 10.8313L6.72681 11.0995L6.5159 11.3696L6.30879 11.6422L6.10548 11.9174L5.90598 12.1951L5.71027 12.4747L5.51836 12.7568L5.33026 13.0409L5.14595 13.3268L4.96544 13.6153L4.78937 13.9051L4.6171 14.1967L4.44862 14.4896L4.28395 14.7845L4.12371 15.0812L3.96791 15.3792L3.81527 15.6784L3.6677 15.9783L3.52329 16.2801L3.38332 16.5832L3.24778 16.8869L3.11604 17.1919L2.98874 17.4975L2.86523 17.8043L2.74553 18.1112L2.63089 18.4194L2.51942 18.7275L2.41238 19.0369L2.30978 19.3457L2.21098 19.6557L2.11597 19.9657L2.0254 20.2758L1.93864 20.5858L1.8563 20.8959L1.77776 21.2059L1.70303 21.516L1.63209 21.826L1.56559 22.136L1.50225 22.4448L1.44335 22.7542L1.38825 23.0624L1.33695 23.3705L1.28944 23.6774L1.24574 23.9842L1.20584 24.2905L1.16911 24.5954L1.1368 24.8998L1.10767 25.2035L1.0817 25.5059L1.06017 25.8077L1.04117 26.1082L1.0266 26.4075L1.01457 26.7055L1.00633 27.0028L1.0019 27.2983L1 27.5931V423.407Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M97.3441 23H97.3209L97.2976 22.9991L97.2744 22.9972L97.2511 22.9953L97.2285 22.9925L97.2053 22.9897L97.182 22.985L97.1594 22.9813L97.1361 22.9757L97.1135 22.9701L97.0902 22.9645L97.0676 22.957L97.045 22.9495L97.0224 22.942L96.9998 22.9336L96.9778 22.9242L96.9551 22.9149L96.9332 22.9046L96.9112 22.8934L96.8892 22.8822L96.8678 22.87L96.8458 22.8578L96.8244 22.8448L96.8031 22.8307L96.7817 22.8167L96.761 22.8017L96.7402 22.7868L96.7195 22.7709L96.6988 22.755L96.6787 22.7381L96.6586 22.7204L96.6391 22.7026L96.619 22.6839L96.6001 22.6652L96.5806 22.6455L96.5618 22.6259L96.5429 22.6063L96.5247 22.5848L96.5059 22.5632L96.4883 22.5417L96.4707 22.5193L96.4531 22.4968L96.4355 22.4735L96.4185 22.4501L96.4022 22.4267L96.3858 22.4024L96.3695 22.3771L96.3538 22.3519L96.3381 22.3266L96.323 22.3004L96.3079 22.2733L96.2935 22.2471L96.279 22.22L96.2652 22.192L96.2514 22.1639L96.2382 22.1358L96.225 22.1078L96.2124 22.0788L96.1998 22.0498L96.1879 22.0199L96.1766 21.9899L96.1653 21.96L96.154 21.9292L96.1433 21.8983L96.1332 21.8674L96.1232 21.8366L96.1137 21.8048L96.1049 21.773L96.0961 21.7412L96.0874 21.7094L96.0792 21.6766L96.0716 21.6439L96.0647 21.6112L96.0578 21.5784L96.0509 21.5457L96.0452 21.512L96.039 21.4784L96.0339 21.4447L96.0289 21.411L96.0245 21.3774L96.0201 21.3437L96.0163 21.3091L96.0132 21.2754L96.0101 21.2408L96.0075 21.2062L96.005 21.1726L96.0031 21.1379L96.0019 21.1033L96.0006 21.0687V21.0341L96 20.9995L96.0006 20.9649V20.9313L96.0019 20.8967L96.0031 20.8621L96.005 20.8274L96.0075 20.7928L96.0101 20.7592L96.0132 20.7246L96.0163 20.69L96.0201 20.6563L96.0245 20.6226L96.0289 20.589L96.0339 20.5544L96.039 20.5216L96.0452 20.488L96.0509 20.4543L96.0578 20.4216L96.0647 20.3879L96.0716 20.3552L96.0792 20.3234L96.0874 20.2906L96.0961 20.2588L96.1049 20.2261L96.1137 20.1943L96.1232 20.1634L96.1332 20.1316L96.1433 20.1008L96.154 20.0699L96.1653 20.04L96.1766 20.0101L96.1879 19.9801L96.1998 19.9502L96.2124 19.9212L96.225 19.8922L96.2382 19.8632L96.2514 19.8352L96.2652 19.8071L96.279 19.78L96.2935 19.7529L96.3079 19.7257L96.323 19.6996L96.3381 19.6734L96.3538 19.6481L96.3695 19.6229L96.3858 19.5976L96.4022 19.5733L96.4185 19.549L96.4355 19.5256L96.4531 19.5032L96.4707 19.4798L96.4883 19.4583L96.5059 19.4358L96.5247 19.4143L96.5429 19.3937L96.5618 19.3732L96.5806 19.3535L96.6001 19.3348L96.619 19.3152L96.6391 19.2974L96.6586 19.2796L96.6787 19.2619L96.6988 19.245L96.7195 19.2291L96.7402 19.2132L96.761 19.1973L96.7817 19.1833L96.8031 19.1693L96.8244 19.1552L96.8458 19.1422L96.8678 19.13L96.8892 19.1178L96.9112 19.1066L96.9332 19.0954L96.9551 19.0851L96.9778 19.0758L96.9998 19.0664L97.0224 19.058L97.045 19.0496L97.0676 19.0421L97.0902 19.0355L97.1135 19.029L97.1361 19.0234L97.1594 19.0187L97.182 19.014L97.2053 19.0103L97.2285 19.0075L97.2511 19.0047L97.2744 19.0028L97.2976 19.0009L97.3209 19H97.3441H115.656H115.679L115.702 19.0009L115.726 19.0028L115.749 19.0047L115.772 19.0075L115.795 19.0103L115.818 19.014L115.841 19.0187L115.864 19.0234L115.887 19.029L115.91 19.0355L115.932 19.0421L115.955 19.0496L115.978 19.058L116 19.0664L116.023 19.0758L116.045 19.0851L116.067 19.0954L116.089 19.1066L116.111 19.1178L116.133 19.13L116.154 19.1422L116.176 19.1552L116.197 19.1693L116.218 19.1833L116.239 19.1973L116.26 19.2132L116.28 19.2291L116.301 19.245L116.321 19.2619L116.341 19.2796L116.362 19.2974L116.381 19.3152L116.401 19.3348L116.419 19.3535L116.438 19.3732L116.457 19.3937L116.476 19.4143L116.494 19.4358L116.512 19.4583L116.53 19.4798L116.548 19.5032L116.565 19.5256L116.581 19.549L116.598 19.5733L116.615 19.5976L116.631 19.6229L116.646 19.6481L116.662 19.6734L116.677 19.6996L116.692 19.7257L116.707 19.7529L116.721 19.78L116.735 19.8071L116.749 19.8352L116.762 19.8632L116.775 19.8922L116.788 19.9212L116.8 19.9502L116.812 19.9801L116.824 20.0101L116.835 20.04L116.846 20.0699L116.857 20.1008L116.867 20.1316L116.877 20.1634L116.886 20.1943L116.896 20.2261L116.904 20.2588L116.913 20.2906L116.921 20.3234L116.928 20.3552L116.936 20.3879L116.943 20.4216L116.949 20.4543L116.955 20.488L116.961 20.5216L116.966 20.5544L116.971 20.589L116.976 20.6226L116.98 20.6563L116.984 20.69L116.987 20.7246L116.99 20.7592L116.993 20.7928L116.995 20.8274L116.997 20.8621L116.998 20.8967L116.999 20.9313L117 20.9649V20.9995V21.0341L116.999 21.0687L116.998 21.1033L116.997 21.1379L116.995 21.1726L116.993 21.2062L116.99 21.2408L116.987 21.2754L116.984 21.3091L116.98 21.3437L116.976 21.3774L116.971 21.411L116.966 21.4447L116.961 21.4784L116.955 21.512L116.949 21.5457L116.943 21.5784L116.936 21.6112L116.928 21.6439L116.921 21.6766L116.913 21.7094L116.904 21.7412L116.896 21.773L116.886 21.8048L116.877 21.8366L116.867 21.8674L116.857 21.8983L116.846 21.9292L116.835 21.96L116.824 21.9899L116.812 22.0199L116.8 22.0498L116.788 22.0788L116.775 22.1078L116.762 22.1358L116.749 22.1639L116.735 22.192L116.721 22.22L116.707 22.2471L116.692 22.2733L116.677 22.3004L116.662 22.3266L116.646 22.3519L116.631 22.3771L116.615 22.4024L116.598 22.4267L116.581 22.4501L116.565 22.4735L116.548 22.4968L116.53 22.5193L116.512 22.5417L116.494 22.5632L116.476 22.5848L116.457 22.6063L116.438 22.6259L116.419 22.6455L116.401 22.6652L116.381 22.6839L116.362 22.7026L116.341 22.7204L116.321 22.7381L116.301 22.755L116.28 22.7709L116.26 22.7868L116.239 22.8017L116.218 22.8167L116.197 22.8307L116.176 22.8448L116.154 22.8578L116.133 22.87L116.111 22.8822L116.089 22.8934L116.067 22.9046L116.045 22.9149L116.023 22.9242L116 22.9336L115.978 22.942L115.955 22.9495L115.932 22.957L115.91 22.9645L115.887 22.9701L115.864 22.9757L115.841 22.9813L115.818 22.985L115.795 22.9897L115.772 22.9925L115.749 22.9953L115.726 22.9972L115.702 22.9991L115.679 23H115.656H97.3441Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M24.3657 434L24.1955 433.999L24.0247 433.996L23.8532 433.992L23.6804 433.985L23.5077 433.976L23.3337 433.965L23.1597 433.952L22.985 433.938L22.8097 433.92L22.6338 433.901L22.4573 433.88L22.2807 433.857L22.1035 433.831L21.9257 433.804L21.7479 433.774L21.5695 433.742L21.391 433.708L21.2126 433.671L21.0335 433.632L20.8544 433.591L20.6754 433.548L20.4963 433.502L20.3166 433.454L20.1375 433.404L19.9584 433.351L19.7794 433.295L19.6003 433.238L19.4218 433.178L19.2434 433.116L19.065 433.052L18.8871 432.984L18.7093 432.915L18.5328 432.843L18.3556 432.769L18.1797 432.692L18.0044 432.613L17.8291 432.532L17.6551 432.448L17.4811 432.362L17.3084 432.273L17.1362 432.183L16.9648 432.089L16.7945 431.994L16.625 431.896L16.4566 431.795L16.289 431.693L16.1225 431.588L15.9574 431.481L15.7935 431.372L15.6302 431.26L15.4689 431.146L15.3082 431.03L15.1493 430.911L14.9918 430.791L14.8355 430.668L14.6811 430.544L14.5273 430.417L14.3761 430.288L14.2255 430.157L14.0774 430.024L13.9306 429.889L13.7857 429.753L13.6421 429.614L13.5003 429.474L13.3611 429.331L13.2232 429.187L13.0871 429.041L12.953 428.893L12.8207 428.744L12.691 428.594L12.5625 428.441L12.4366 428.287L12.3126 428.131L12.1905 427.974L12.0709 427.815L11.9532 427.656L11.838 427.494L11.7247 427.332L11.6134 427.168L11.5045 427.003L11.3982 426.836L11.2938 426.669L11.1919 426.5L11.092 426.331L10.9951 426.161L10.8996 425.989L10.8072 425.817L10.7167 425.644L10.6288 425.47L10.5433 425.296L10.4598 425.12L10.3788 424.944L10.3004 424.767L10.2244 424.591L10.1504 424.413L10.0789 424.235L10.0099 424.056L9.94347 423.877L9.87893 423.698L9.81692 423.518L9.75743 423.339L9.70048 423.159L9.64543 422.979L9.59354 422.798L9.54292 422.618L9.49547 422.438L9.4499 422.257L9.40688 422.077L9.36574 421.897L9.32714 421.718L9.29108 421.538L9.25691 421.358L9.22464 421.179L9.19489 421L9.16769 420.822L9.14237 420.643L9.11896 420.465L9.09808 420.288L9.0791 420.111L9.06201 419.934L9.04746 419.759L9.0348 419.584L9.02404 419.409L9.01519 419.235L9.00886 419.062L9.0038 418.889L9.00126 418.717L9 418.546V47.4542L9.00126 47.283L9.0038 47.1111L9.00886 46.938L9.01519 46.7649L9.02404 46.5912L9.0348 46.4162L9.04746 46.2412L9.06201 46.0655L9.0791 45.8892L9.09808 45.7123L9.11896 45.5347L9.14237 45.3572L9.16769 45.179L9.19489 45.0001L9.22464 44.8213L9.25691 44.6418L9.29108 44.4624L9.32714 44.2829L9.36574 44.1028L9.40688 43.9227L9.4499 43.7426L9.49547 43.5625L9.54292 43.3817L9.59354 43.2016L9.64543 43.0215L9.70048 42.8414L9.75743 42.6613L9.81692 42.4818L9.87893 42.3024L9.94347 42.1229L10.0099 41.9441L10.0789 41.7652L10.1504 41.587L10.2244 41.4095L10.3004 41.2325L10.3788 41.0556L10.4598 40.88L10.5433 40.7043L10.6288 40.5299L10.7167 40.3562L10.8072 40.1831L10.8996 40.0106L10.9951 39.8394L11.092 39.6689L11.1919 39.4996L11.2938 39.3309L11.3982 39.1635L11.5045 38.9974L11.6134 38.8326L11.7247 38.6684L11.838 38.5061L11.9532 38.3445L12.0709 38.1847L12.1905 38.0263L12.3126 37.8691L12.4366 37.7131L12.5625 37.5591L12.691 37.4064L12.8207 37.2555L12.953 37.1066L13.0871 36.959L13.2232 36.8126L13.3611 36.6688L13.5003 36.5262L13.6421 36.3856L13.7857 36.2475L13.9306 36.1106L14.0774 35.9757L14.2255 35.8427L14.3761 35.7116L14.5273 35.583L14.6811 35.4564L14.8355 35.3317L14.9918 35.2088L15.1493 35.0885L15.3082 34.9702L15.4689 34.8543L15.6302 34.7404L15.7935 34.6284L15.9574 34.5189L16.1225 34.412L16.289 34.307L16.4566 34.2046L16.625 34.104L16.7945 34.006L16.9648 33.9105L17.1362 33.8176L17.3084 33.7266L17.4811 33.6381L17.6551 33.5516L17.8291 33.4682L18.0044 33.3868L18.1797 33.3078L18.3556 33.2308L18.5328 33.157L18.7093 33.0851L18.8871 33.0157L19.065 32.9489L19.2434 32.884L19.4218 32.8216L19.6003 32.7618L19.7794 32.7045L19.9584 32.6491L20.1375 32.5963L20.3166 32.546L20.4963 32.4983L20.6754 32.4525L20.8544 32.4086L21.0335 32.3678L21.2126 32.329L21.391 32.2921L21.5695 32.2577L21.7479 32.2259L21.9257 32.196L22.1035 32.1687L22.2807 32.1432L22.4573 32.1196L22.6338 32.0986L22.8097 32.0796L22.985 32.0624L23.1597 32.0477L23.3337 32.035L23.5077 32.0242L23.6804 32.0153L23.8532 32.0089L24.0247 32.0038L24.1955 32.0013L24.3657 32H187.634L187.804 32.0013L187.975 32.0038L188.147 32.0089L188.32 32.0153L188.492 32.0242L188.666 32.035L188.84 32.0477L189.015 32.0624L189.19 32.0796L189.366 32.0986L189.543 32.1196L189.719 32.1432L189.897 32.1687L190.074 32.196L190.252 32.2259L190.431 32.2577L190.609 32.2921L190.787 32.329L190.966 32.3678L191.146 32.4086L191.325 32.4525L191.504 32.4983L191.683 32.546L191.862 32.5963L192.042 32.6491L192.221 32.7045L192.4 32.7618L192.578 32.8216L192.757 32.884L192.935 32.9489L193.113 33.0157L193.291 33.0851L193.468 33.157L193.644 33.2308L193.82 33.3078L193.996 33.3868L194.171 33.4682L194.346 33.5516L194.519 33.6381L194.692 33.7266L194.864 33.8176L195.035 33.9105L195.205 34.006L195.375 34.104L195.543 34.2046L195.711 34.307L195.877 34.412L196.043 34.5189L196.206 34.6284L196.37 34.7404L196.531 34.8543L196.692 34.9702L196.851 35.0885L197.008 35.2088L197.164 35.3317L197.32 35.4564L197.473 35.583L197.625 35.7116L197.775 35.8427L197.923 35.9757L198.069 36.1106L198.215 36.2475L198.358 36.3856L198.5 36.5262L198.639 36.6688L198.777 36.8126L198.913 36.959L199.047 37.1066L199.179 37.2555L199.31 37.4064L199.437 37.5591L199.563 37.7131L199.687 37.8691L199.81 38.0263L199.929 38.1847L200.047 38.3445L200.162 38.5061L200.275 38.6684L200.387 38.8326L200.495 38.9974L200.602 39.1635L200.706 39.3309L200.808 39.4996L200.908 39.6689L201.005 39.8394L201.1 40.0106L201.193 40.1831L201.283 40.3562L201.371 40.5299L201.457 40.7043L201.54 40.88L201.621 41.0556L201.7 41.2325L201.776 41.4095L201.85 41.587L201.921 41.7652L201.99 41.9441L202.057 42.1229L202.121 42.3024L202.183 42.4818L202.243 42.6613L202.3 42.8414L202.355 43.0215L202.407 43.2016L202.457 43.3817L202.505 43.5625L202.55 43.7426L202.594 43.9227L202.634 44.1028L202.673 44.2829L202.71 44.4624L202.744 44.6418L202.775 44.8213L202.805 45.0001L202.832 45.179L202.858 45.3572L202.881 45.5347L202.902 45.7123L202.921 45.8892L202.938 46.0655L202.953 46.2412L202.965 46.4162L202.976 46.5912L202.985 46.7649L202.992 46.938L202.996 47.1111L202.999 47.283L203 47.4542V418.546L202.999 418.717L202.996 418.889L202.992 419.062L202.985 419.235L202.976 419.409L202.965 419.584L202.953 419.759L202.938 419.934L202.921 420.111L202.902 420.288L202.881 420.465L202.858 420.643L202.832 420.822L202.805 421L202.775 421.179L202.744 421.358L202.71 421.538L202.673 421.718L202.634 421.897L202.594 422.077L202.55 422.257L202.505 422.438L202.457 422.618L202.407 422.798L202.355 422.979L202.3 423.159L202.243 423.339L202.183 423.518L202.121 423.698L202.057 423.877L201.99 424.056L201.921 424.235L201.85 424.413L201.776 424.591L201.7 424.767L201.621 424.944L201.54 425.12L201.457 425.296L201.371 425.47L201.283 425.644L201.193 425.817L201.1 425.989L201.005 426.161L200.908 426.331L200.808 426.5L200.706 426.669L200.602 426.836L200.495 427.003L200.387 427.168L200.275 427.332L200.162 427.494L200.047 427.656L199.929 427.815L199.81 427.974L199.687 428.131L199.563 428.287L199.437 428.441L199.31 428.594L199.179 428.744L199.047 428.893L198.913 429.041L198.777 429.187L198.639 429.331L198.5 429.474L198.358 429.614L198.215 429.753L198.069 429.889L197.923 430.024L197.775 430.157L197.625 430.288L197.473 430.417L197.32 430.544L197.164 430.668L197.008 430.791L196.851 430.911L196.692 431.03L196.531 431.146L196.37 431.26L196.206 431.372L196.043 431.481L195.877 431.588L195.711 431.693L195.543 431.795L195.375 431.896L195.205 431.994L195.035 432.089L194.864 432.183L194.692 432.273L194.519 432.362L194.346 432.448L194.171 432.532L193.996 432.613L193.82 432.692L193.644 432.769L193.468 432.843L193.291 432.915L193.113 432.984L192.935 433.052L192.757 433.116L192.578 433.178L192.4 433.238L192.221 433.295L192.042 433.351L191.862 433.404L191.683 433.454L191.504 433.502L191.325 433.548L191.146 433.591L190.966 433.632L190.787 433.671L190.609 433.708L190.431 433.742L190.252 433.774L190.074 433.804L189.897 433.831L189.719 433.857L189.543 433.88L189.366 433.901L189.19 433.92L189.015 433.938L188.84 433.952L188.666 433.965L188.492 433.976L188.32 433.985L188.147 433.992L187.975 433.996L187.804 433.999L187.634 434H24.3657Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='196' height='404' viewBox='0 0 196 404' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M16.3657 403L16.1955 402.999L16.0247 402.996L15.8532 402.992L15.6804 402.985L15.5077 402.976L15.3337 402.965L15.1597 402.952L14.985 402.938L14.8097 402.92L14.6338 402.901L14.4573 402.88L14.2807 402.857L14.1035 402.831L13.9257 402.804L13.7479 402.774L13.5695 402.742L13.391 402.708L13.2126 402.671L13.0335 402.632L12.8544 402.591L12.6754 402.548L12.4963 402.502L12.3166 402.454L12.1375 402.404L11.9584 402.351L11.7794 402.295L11.6003 402.238L11.4218 402.178L11.2434 402.116L11.065 402.052L10.8871 401.984L10.7093 401.915L10.5328 401.843L10.3556 401.769L10.1797 401.692L10.0044 401.613L9.82914 401.532L9.65513 401.448L9.48111 401.362L9.30836 401.273L9.13625 401.183L8.96476 401.089L8.79455 400.994L8.62496 400.896L8.45665 400.795L8.28896 400.693L8.12254 400.588L7.95738 400.481L7.7935 400.372L7.63024 400.26L7.46888 400.146L7.30816 400.03L7.14933 399.911L6.99177 399.791L6.83547 399.668L6.68107 399.544L6.52731 399.417L6.37607 399.288L6.22547 399.157L6.0774 399.024L5.9306 398.889L5.78569 398.753L5.64205 398.614L5.50031 398.474L5.3611 398.331L5.22315 398.187L5.08711 398.041L4.95296 397.893L4.82071 397.744L4.69099 397.594L4.56254 397.441L4.43661 397.287L4.31259 397.131L4.19046 396.974L4.07087 396.815L3.95317 396.656L3.83801 396.494L3.72474 396.332L3.61337 396.168L3.50453 396.003L3.39823 395.836L3.29382 395.669L3.19194 395.5L3.09196 395.331L2.99515 395.161L2.8996 394.989L2.80721 394.817L2.71673 394.644L2.62877 394.47L2.54334 394.296L2.45982 394.12L2.37882 393.944L2.30036 393.767L2.22442 393.591L2.15039 393.413L2.07888 393.235L2.00991 393.056L1.94347 392.877L1.87893 392.698L1.81692 392.518L1.75743 392.339L1.70048 392.159L1.64543 391.979L1.59354 391.798L1.54292 391.618L1.49547 391.438L1.4499 391.257L1.40688 391.077L1.36574 390.897L1.32714 390.718L1.29108 390.538L1.25691 390.358L1.22464 390.179L1.19489 390L1.16769 389.822L1.14237 389.643L1.11896 389.465L1.09808 389.288L1.0791 389.111L1.06201 388.934L1.04746 388.759L1.0348 388.584L1.02404 388.409L1.01519 388.235L1.00886 388.062L1.0038 387.889L1.00126 387.717L1 387.546V16.4542L1.00126 16.283L1.0038 16.1111L1.00886 15.938L1.01519 15.7649L1.02404 15.5912L1.0348 15.4162L1.04746 15.2412L1.06201 15.0655L1.0791 14.8892L1.09808 14.7123L1.11896 14.5347L1.14237 14.3572L1.16769 14.179L1.19489 14.0001L1.22464 13.8213L1.25691 13.6418L1.29108 13.4624L1.32714 13.2829L1.36574 13.1028L1.40688 12.9227L1.4499 12.7426L1.49547 12.5625L1.54292 12.3817L1.59354 12.2016L1.64543 12.0215L1.70048 11.8414L1.75743 11.6613L1.81692 11.4818L1.87893 11.3024L1.94347 11.1229L2.00991 10.9441L2.07888 10.7652L2.15039 10.587L2.22442 10.4095L2.30036 10.2325L2.37882 10.0556L2.45982 9.87996L2.54334 9.7043L2.62877 9.52993L2.71673 9.35618L2.80721 9.18308L2.8996 9.01061L2.99515 8.83941L3.09196 8.66885L3.19194 8.49956L3.29382 8.33091L3.39823 8.16353L3.50453 7.99743L3.61337 7.8326L3.72474 7.6684L3.83801 7.50611L3.95317 7.34446L4.07087 7.18472L4.19046 7.02625L4.31259 6.86906L4.43661 6.71313L4.56254 6.55912L4.69099 6.40638L4.82071 6.25555L4.95296 6.10663L5.08711 5.95898L5.22315 5.8126L5.3611 5.66877L5.50031 5.52621L5.64205 5.38557L5.78569 5.24746L5.9306 5.11063L6.0774 4.97571L6.22547 4.8427L6.37607 4.71159L6.52731 4.58304L6.68107 4.45639L6.83547 4.33165L6.99177 4.20883L7.14933 4.08854L7.30816 3.97017L7.46888 3.85434L7.63024 3.74042L7.7935 3.62841L7.95738 3.51895L8.12254 3.41203L8.28896 3.30702L8.45665 3.20455L8.62496 3.104L8.79455 3.00599L8.96476 2.91053L9.13625 2.81761L9.30836 2.7266L9.48111 2.63814L9.65513 2.55159L9.82914 2.46822L10.0044 2.38675L10.1797 2.30784L10.3556 2.23083L10.5328 2.15701L10.7093 2.08509L10.8871 2.01572L11.065 1.9489L11.2434 1.88399L11.4218 1.82162L11.6003 1.76179L11.7794 1.70451L11.9584 1.64915L12.1375 1.59632L12.3166 1.54604L12.4963 1.49831L12.6754 1.45249L12.8544 1.40858L13.0335 1.36785L13.2126 1.32903L13.391 1.29212L13.5695 1.25775L13.7479 1.22593L13.9257 1.19602L14.1035 1.16865L14.2807 1.14319L14.4573 1.11964L14.6338 1.09864L14.8097 1.07955L14.985 1.06237L15.1597 1.04773L15.3337 1.035L15.5077 1.02418L15.6804 1.01527L15.8532 1.00891L16.0247 1.00382L16.1955 1.00127L16.3657 1H179.634L179.804 1.00127L179.975 1.00382L180.147 1.00891L180.32 1.01527L180.492 1.02418L180.666 1.035L180.84 1.04773L181.015 1.06237L181.19 1.07955L181.366 1.09864L181.543 1.11964L181.719 1.14319L181.897 1.16865L182.074 1.19602L182.252 1.22593L182.431 1.25775L182.609 1.29212L182.787 1.32903L182.966 1.36785L183.146 1.40858L183.325 1.45249L183.504 1.49831L183.683 1.54604L183.862 1.59632L184.042 1.64915L184.221 1.70451L184.4 1.76179L184.578 1.82162L184.757 1.88399L184.935 1.9489L185.113 2.01572L185.291 2.08509L185.468 2.15701L185.644 2.23083L185.82 2.30784L185.996 2.38675L186.171 2.46822L186.346 2.55159L186.519 2.63814L186.692 2.7266L186.864 2.81761L187.035 2.91053L187.205 3.00599L187.375 3.104L187.543 3.20455L187.711 3.30702L187.877 3.41203L188.043 3.51895L188.206 3.62841L188.37 3.74042L188.531 3.85434L188.692 3.97017L188.851 4.08854L189.008 4.20883L189.164 4.33165L189.32 4.45639L189.473 4.58304L189.625 4.71159L189.775 4.8427L189.923 4.97571L190.069 5.11063L190.215 5.24746L190.358 5.38557L190.5 5.52621L190.639 5.66877L190.777 5.8126L190.913 5.95898L191.047 6.10663L191.179 6.25555L191.31 6.40638L191.437 6.55912L191.563 6.71313L191.687 6.86906L191.81 7.02625L191.929 7.18472L192.047 7.34446L192.162 7.50611L192.275 7.6684L192.387 7.8326L192.495 7.99743L192.602 8.16353L192.706 8.33091L192.808 8.49956L192.908 8.66885L193.005 8.83941L193.1 9.01061L193.193 9.18308L193.283 9.35618L193.371 9.52993L193.457 9.7043L193.54 9.87996L193.621 10.0556L193.7 10.2325L193.776 10.4095L193.85 10.587L193.921 10.7652L193.99 10.9441L194.057 11.1229L194.121 11.3024L194.183 11.4818L194.243 11.6613L194.3 11.8414L194.355 12.0215L194.407 12.2016L194.457 12.3817L194.505 12.5625L194.55 12.7426L194.594 12.9227L194.634 13.1028L194.673 13.2829L194.71 13.4624L194.744 13.6418L194.775 13.8213L194.805 14.0001L194.832 14.179L194.858 14.3572L194.881 14.5347L194.902 14.7123L194.921 14.8892L194.938 15.0655L194.953 15.2412L194.965 15.4162L194.976 15.5912L194.985 15.7649L194.992 15.938L194.996 16.1111L194.999 16.283L195 16.4542V387.546L194.999 387.717L194.996 387.889L194.992 388.062L194.985 388.235L194.976 388.409L194.965 388.584L194.953 388.759L194.938 388.934L194.921 389.111L194.902 389.288L194.881 389.465L194.858 389.643L194.832 389.822L194.805 390L194.775 390.179L194.744 390.358L194.71 390.538L194.673 390.718L194.634 390.897L194.594 391.077L194.55 391.257L194.505 391.438L194.457 391.618L194.407 391.798L194.355 391.979L194.3 392.159L194.243 392.339L194.183 392.518L194.121 392.698L194.057 392.877L193.99 393.056L193.921 393.235L193.85 393.413L193.776 393.591L193.7 393.767L193.621 393.944L193.54 394.12L193.457 394.296L193.371 394.47L193.283 394.644L193.193 394.817L193.1 394.989L193.005 395.161L192.908 395.331L192.808 395.5L192.706 395.669L192.602 395.836L192.495 396.003L192.387 396.168L192.275 396.332L192.162 396.494L192.047 396.656L191.929 396.815L191.81 396.974L191.687 397.131L191.563 397.287L191.437 397.441L191.31 397.594L191.179 397.744L191.047 397.893L190.913 398.041L190.777 398.187L190.639 398.331L190.5 398.474L190.358 398.614L190.215 398.753L190.069 398.889L189.923 399.024L189.775 399.157L189.625 399.288L189.473 399.417L189.32 399.544L189.164 399.668L189.008 399.791L188.851 399.911L188.692 400.03L188.531 400.146L188.37 400.26L188.206 400.372L188.043 400.481L187.877 400.588L187.711 400.693L187.543 400.795L187.375 400.896L187.205 400.994L187.035 401.089L186.864 401.183L186.692 401.273L186.519 401.362L186.346 401.448L186.171 401.532L185.996 401.613L185.82 401.692L185.644 401.769L185.468 401.843L185.291 401.915L185.113 401.984L184.935 402.052L184.757 402.116L184.578 402.178L184.4 402.238L184.221 402.295L184.042 402.351L183.862 402.404L183.683 402.454L183.504 402.502L183.325 402.548L183.146 402.591L182.966 402.632L182.787 402.671L182.609 402.708L182.431 402.742L182.252 402.774L182.074 402.804L181.897 402.831L181.719 402.857L181.543 402.88L181.366 402.901L181.19 402.92L181.015 402.938L180.84 402.952L180.666 402.965L180.492 402.976L180.32 402.985L180.147 402.992L179.975 402.996L179.804 402.999L179.634 403H16.3657Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='212' height='451' viewBox='0 0 212 451' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1 423.407L1.0019 423.702L1.00633 423.997L1.01457 424.295L1.0266 424.592L1.04117 424.892L1.06017 425.192L1.0817 425.494L1.10767 425.796L1.1368 426.1L1.16911 426.405L1.20584 426.71L1.24574 427.016L1.28944 427.322L1.33695 427.63L1.38825 427.938L1.44335 428.246L1.50225 428.555L1.56559 428.864L1.63209 429.174L1.70303 429.483L1.77776 429.793L1.8563 430.103L1.93864 430.414L2.0254 430.724L2.11597 431.034L2.21098 431.344L2.30978 431.654L2.41238 431.963L2.51942 432.272L2.63089 432.581L2.74553 432.888L2.86523 433.196L2.98874 433.502L3.11604 433.808L3.24778 434.112L3.38332 434.417L3.52329 434.719L3.6677 435.021L3.81527 435.322L3.96791 435.621L4.12371 435.919L4.28395 436.215L4.44862 436.51L4.6171 436.803L4.78937 437.095L4.96544 437.385L5.14595 437.673L5.33026 437.959L5.51836 438.243L5.71027 438.525L5.90598 438.805L6.10548 439.082L6.30879 439.357L6.5159 439.63L6.72681 439.9L6.94088 440.168L7.15876 440.434L7.38043 440.696L7.60527 440.956L7.83391 441.213L8.06572 441.467L8.3007 441.718L8.53884 441.966L8.78078 442.211L9.02526 442.452L9.2729 442.692L9.52371 442.927L9.77768 443.159L10.0342 443.387L10.2939 443.613L10.5561 443.834L10.8208 444.052L11.0887 444.267L11.3585 444.478L11.6309 444.685L11.9058 444.889L12.1832 445.089L12.4625 445.285L12.7443 445.477L13.0281 445.665L13.3137 445.85L13.6019 446.03L13.8913 446.207L14.1827 446.379L14.4753 446.548L14.7698 446.712L15.0662 446.872L15.3639 447.029L15.6628 447.181L15.9624 447.329L16.2639 447.473L16.5666 447.614L16.87 447.75L17.1746 447.882L17.4799 448.009L17.7865 448.133L18.093 448.252L18.4008 448.367L18.7086 448.479L19.0177 448.585L19.3262 448.689L19.6359 448.788L19.9456 448.883L20.2553 448.974L20.565 449.06L20.8747 449.143L21.1844 449.221L21.4941 449.296L21.8039 449.367L22.1136 449.434L22.422 449.497L22.7311 449.556L23.0389 449.611L23.3467 449.663L23.6532 449.71L23.9598 449.754L24.2657 449.794L24.5703 449.83L24.8744 449.863L25.1777 449.892L25.4798 449.918L25.7813 449.94L26.0815 449.958L26.3805 449.973L26.6782 449.985L26.9752 449.993L27.2703 449.998L27.5649 450H184.436L184.73 449.998L185.025 449.993L185.322 449.985L185.62 449.973L185.919 449.958L186.219 449.94L186.52 449.918L186.822 449.892L187.126 449.863L187.43 449.83L187.735 449.794L188.04 449.754L188.347 449.71L188.654 449.663L188.961 449.611L189.27 449.556L189.578 449.497L189.887 449.434L190.196 449.367L190.506 449.296L190.816 449.221L191.125 449.143L191.435 449.06L191.745 448.974L192.055 448.883L192.364 448.788L192.674 448.689L192.983 448.585L193.291 448.479L193.599 448.367L193.907 448.252L194.214 448.133L194.52 448.009L194.825 447.882L195.13 447.75L195.433 447.614L195.736 447.473L196.038 447.329L196.338 447.181L196.637 447.029L196.934 446.872L197.23 446.712L197.525 446.548L197.818 446.379L198.109 446.207L198.399 446.03L198.686 445.85L198.972 445.665L199.256 445.477L199.538 445.285L199.817 445.089L200.094 444.889L200.369 444.685L200.641 444.478L200.912 444.267L201.179 444.052L201.444 443.834L201.706 443.613L201.966 443.387L202.222 443.159L202.476 442.927L202.727 442.692L202.975 442.452L203.22 442.211L203.461 441.966L203.699 441.718L203.934 441.467L204.166 441.213L204.395 440.956L204.62 440.696L204.841 440.434L205.059 440.168L205.273 439.9L205.484 439.63L205.691 439.357L205.895 439.082L206.094 438.805L206.29 438.525L206.482 438.243L206.67 437.959L206.854 437.673L207.035 437.385L207.211 437.095L207.384 436.803L207.551 436.51L207.716 436.215L207.876 435.919L208.033 435.621L208.185 435.322L208.333 435.021L208.477 434.719L208.617 434.417L208.752 434.112L208.884 433.808L209.012 433.502L209.135 433.196L209.254 432.888L209.37 432.581L209.481 432.272L209.588 431.963L209.69 431.654L209.789 431.344L209.884 431.034L209.975 430.724L210.061 430.414L210.144 430.103L210.223 429.793L210.298 429.483L210.368 429.174L210.435 428.864L210.498 428.555L210.557 428.246L210.612 427.938L210.663 427.63L210.711 427.322L210.754 427.016L210.795 426.71L210.831 426.405L210.864 426.1L210.893 425.796L210.918 425.494L210.94 425.192L210.959 424.892L210.974 424.592L210.985 424.295L210.994 423.997L210.999 423.702L211 423.407V27.5931L210.999 27.2983L210.994 27.0028L210.985 26.7055L210.974 26.4075L210.959 26.1082L210.94 25.8077L210.918 25.5059L210.893 25.2035L210.864 24.8998L210.831 24.5954L210.795 24.2905L210.754 23.9842L210.711 23.6774L210.663 23.3705L210.612 23.0624L210.557 22.7542L210.498 22.4448L210.435 22.136L210.368 21.826L210.298 21.516L210.223 21.2059L210.144 20.8959L210.061 20.5858L209.975 20.2758L209.884 19.9657L209.789 19.6557L209.69 19.3457L209.588 19.0369L209.481 18.7275L209.37 18.4194L209.254 18.1112L209.135 17.8043L209.012 17.4975L208.884 17.1919L208.752 16.8869L208.617 16.5832L208.477 16.2801L208.333 15.9783L208.185 15.6784L208.033 15.3792L207.876 15.0812L207.716 14.7845L207.551 14.4896L207.384 14.1967L207.211 13.9051L207.035 13.6153L206.854 13.3268L206.67 13.0409L206.482 12.7568L206.29 12.4747L206.094 12.1951L205.895 11.9174L205.691 11.6422L205.484 11.3696L205.273 11.0995L205.059 10.8313L204.841 10.5662L204.62 10.3038L204.395 10.0438L204.166 9.78703L203.934 9.53278L203.699 9.2817L203.461 9.0338L203.22 8.78906L202.975 8.54686L202.727 8.30847L202.476 8.07324L202.222 7.84119L201.966 7.6123L201.706 7.38722L201.444 7.16531L201.179 6.9472L200.912 6.7329L200.641 6.52177L200.369 6.31444L200.094 6.11092L199.817 5.9112L199.538 5.71528L199.256 5.52317L198.972 5.33487L198.686 5.15036L198.399 4.96966L198.109 4.7934L197.818 4.62095L197.525 4.45229L197.23 4.28745L196.934 4.12704L196.637 3.97107L196.338 3.81826L196.038 3.67054L195.736 3.52598L195.433 3.38586L195.13 3.25017L194.825 3.11829L194.52 2.99085L194.214 2.86722L193.907 2.74739L193.599 2.63263L193.291 2.52104L192.983 2.41389L192.674 2.31117L192.364 2.21227L192.055 2.11716L191.745 2.02649L191.435 1.93963L191.125 1.85721L190.816 1.77859L190.506 1.70377L190.196 1.63276L189.887 1.56619L189.578 1.50279L189.27 1.44382L188.961 1.38866L188.654 1.3373L188.347 1.28975L188.04 1.246L187.735 1.20606L187.43 1.16929L187.126 1.13695L186.822 1.10778L186.52 1.08179L186.219 1.06023L185.919 1.04121L185.62 1.02663L185.322 1.01458L185.025 1.00634L184.73 1.0019L184.436 1H27.5649L27.2703 1.0019L26.9752 1.00634L26.6782 1.01458L26.3805 1.02663L26.0815 1.04121L25.7813 1.06023L25.4798 1.08179L25.1777 1.10778L24.8744 1.13695L24.5703 1.16929L24.2657 1.20606L23.9598 1.246L23.6532 1.28975L23.3467 1.3373L23.0389 1.38866L22.7311 1.44382L22.422 1.50279L22.1136 1.56619L21.8039 1.63276L21.4941 1.70377L21.1844 1.77859L20.8747 1.85721L20.565 1.93963L20.2553 2.02649L19.9456 2.11716L19.6359 2.21227L19.3262 2.31117L19.0177 2.41389L18.7086 2.52104L18.4008 2.63263L18.093 2.74739L17.7865 2.86722L17.4799 2.99085L17.1746 3.11829L16.87 3.25017L16.5666 3.38586L16.2639 3.52598L15.9624 3.67054L15.6628 3.81826L15.3639 3.97107L15.0662 4.12704L14.7698 4.28745L14.4753 4.45229L14.1827 4.62095L13.8913 4.7934L13.6019 4.96966L13.3137 5.15036L13.0281 5.33487L12.7443 5.52317L12.4625 5.71528L12.1832 5.9112L11.9058 6.11092L11.6309 6.31444L11.3585 6.52177L11.0887 6.7329L10.8208 6.9472L10.5561 7.16531L10.2939 7.38722L10.0342 7.6123L9.77768 7.84119L9.52371 8.07324L9.2729 8.30847L9.02526 8.54686L8.78078 8.78906L8.53884 9.0338L8.3007 9.2817L8.06572 9.53278L7.83391 9.78703L7.60527 10.0438L7.38043 10.3038L7.15876 10.5662L6.94088 10.8313L6.72681 11.0995L6.5159 11.3696L6.30879 11.6422L6.10548 11.9174L5.90598 12.1951L5.71027 12.4747L5.51836 12.7568L5.33026 13.0409L5.14595 13.3268L4.96544 13.6153L4.78937 13.9051L4.6171 14.1967L4.44862 14.4896L4.28395 14.7845L4.12371 15.0812L3.96791 15.3792L3.81527 15.6784L3.6677 15.9783L3.52329 16.2801L3.38332 16.5832L3.24778 16.8869L3.11604 17.1919L2.98874 17.4975L2.86523 17.8043L2.74553 18.1112L2.63089 18.4194L2.51942 18.7275L2.41238 19.0369L2.30978 19.3457L2.21098 19.6557L2.11597 19.9657L2.0254 20.2758L1.93864 20.5858L1.8563 20.8959L1.77776 21.2059L1.70303 21.516L1.63209 21.826L1.56559 22.136L1.50225 22.4448L1.44335 22.7542L1.38825 23.0624L1.33695 23.3705L1.28944 23.6774L1.24574 23.9842L1.20584 24.2905L1.16911 24.5954L1.1368 24.8998L1.10767 25.2035L1.0817 25.5059L1.06017 25.8077L1.04117 26.1082L1.0266 26.4075L1.01457 26.7055L1.00633 27.0028L1.0019 27.2983L1 27.5931V423.407Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M97.3441 23H97.3209L97.2976 22.9991L97.2744 22.9972L97.2511 22.9953L97.2285 22.9925L97.2053 22.9897L97.182 22.985L97.1594 22.9813L97.1361 22.9757L97.1135 22.9701L97.0902 22.9645L97.0676 22.957L97.045 22.9495L97.0224 22.942L96.9998 22.9336L96.9778 22.9242L96.9551 22.9149L96.9332 22.9046L96.9112 22.8934L96.8892 22.8822L96.8678 22.87L96.8458 22.8578L96.8244 22.8448L96.8031 22.8307L96.7817 22.8167L96.761 22.8017L96.7402 22.7868L96.7195 22.7709L96.6988 22.755L96.6787 22.7381L96.6586 22.7204L96.6391 22.7026L96.619 22.6839L96.6001 22.6652L96.5806 22.6455L96.5618 22.6259L96.5429 22.6063L96.5247 22.5848L96.5059 22.5632L96.4883 22.5417L96.4707 22.5193L96.4531 22.4968L96.4355 22.4735L96.4185 22.4501L96.4022 22.4267L96.3858 22.4024L96.3695 22.3771L96.3538 22.3519L96.3381 22.3266L96.323 22.3004L96.3079 22.2733L96.2935 22.2471L96.279 22.22L96.2652 22.192L96.2514 22.1639L96.2382 22.1358L96.225 22.1078L96.2124 22.0788L96.1998 22.0498L96.1879 22.0199L96.1766 21.9899L96.1653 21.96L96.154 21.9292L96.1433 21.8983L96.1332 21.8674L96.1232 21.8366L96.1137 21.8048L96.1049 21.773L96.0961 21.7412L96.0874 21.7094L96.0792 21.6766L96.0716 21.6439L96.0647 21.6112L96.0578 21.5784L96.0509 21.5457L96.0452 21.512L96.039 21.4784L96.0339 21.4447L96.0289 21.411L96.0245 21.3774L96.0201 21.3437L96.0163 21.3091L96.0132 21.2754L96.0101 21.2408L96.0075 21.2062L96.005 21.1726L96.0031 21.1379L96.0019 21.1033L96.0006 21.0687V21.0341L96 20.9995L96.0006 20.9649V20.9313L96.0019 20.8967L96.0031 20.8621L96.005 20.8274L96.0075 20.7928L96.0101 20.7592L96.0132 20.7246L96.0163 20.69L96.0201 20.6563L96.0245 20.6226L96.0289 20.589L96.0339 20.5544L96.039 20.5216L96.0452 20.488L96.0509 20.4543L96.0578 20.4216L96.0647 20.3879L96.0716 20.3552L96.0792 20.3234L96.0874 20.2906L96.0961 20.2588L96.1049 20.2261L96.1137 20.1943L96.1232 20.1634L96.1332 20.1316L96.1433 20.1008L96.154 20.0699L96.1653 20.04L96.1766 20.0101L96.1879 19.9801L96.1998 19.9502L96.2124 19.9212L96.225 19.8922L96.2382 19.8632L96.2514 19.8352L96.2652 19.8071L96.279 19.78L96.2935 19.7529L96.3079 19.7257L96.323 19.6996L96.3381 19.6734L96.3538 19.6481L96.3695 19.6229L96.3858 19.5976L96.4022 19.5733L96.4185 19.549L96.4355 19.5256L96.4531 19.5032L96.4707 19.4798L96.4883 19.4583L96.5059 19.4358L96.5247 19.4143L96.5429 19.3937L96.5618 19.3732L96.5806 19.3535L96.6001 19.3348L96.619 19.3152L96.6391 19.2974L96.6586 19.2796L96.6787 19.2619L96.6988 19.245L96.7195 19.2291L96.7402 19.2132L96.761 19.1973L96.7817 19.1833L96.8031 19.1693L96.8244 19.1552L96.8458 19.1422L96.8678 19.13L96.8892 19.1178L96.9112 19.1066L96.9332 19.0954L96.9551 19.0851L96.9778 19.0758L96.9998 19.0664L97.0224 19.058L97.045 19.0496L97.0676 19.0421L97.0902 19.0355L97.1135 19.029L97.1361 19.0234L97.1594 19.0187L97.182 19.014L97.2053 19.0103L97.2285 19.0075L97.2511 19.0047L97.2744 19.0028L97.2976 19.0009L97.3209 19H97.3441H115.656H115.679L115.702 19.0009L115.726 19.0028L115.749 19.0047L115.772 19.0075L115.795 19.0103L115.818 19.014L115.841 19.0187L115.864 19.0234L115.887 19.029L115.91 19.0355L115.932 19.0421L115.955 19.0496L115.978 19.058L116 19.0664L116.023 19.0758L116.045 19.0851L116.067 19.0954L116.089 19.1066L116.111 19.1178L116.133 19.13L116.154 19.1422L116.176 19.1552L116.197 19.1693L116.218 19.1833L116.239 19.1973L116.26 19.2132L116.28 19.2291L116.301 19.245L116.321 19.2619L116.341 19.2796L116.362 19.2974L116.381 19.3152L116.401 19.3348L116.419 19.3535L116.438 19.3732L116.457 19.3937L116.476 19.4143L116.494 19.4358L116.512 19.4583L116.53 19.4798L116.548 19.5032L116.565 19.5256L116.581 19.549L116.598 19.5733L116.615 19.5976L116.631 19.6229L116.646 19.6481L116.662 19.6734L116.677 19.6996L116.692 19.7257L116.707 19.7529L116.721 19.78L116.735 19.8071L116.749 19.8352L116.762 19.8632L116.775 19.8922L116.788 19.9212L116.8 19.9502L116.812 19.9801L116.824 20.0101L116.835 20.04L116.846 20.0699L116.857 20.1008L116.867 20.1316L116.877 20.1634L116.886 20.1943L116.896 20.2261L116.904 20.2588L116.913 20.2906L116.921 20.3234L116.928 20.3552L116.936 20.3879L116.943 20.4216L116.949 20.4543L116.955 20.488L116.961 20.5216L116.966 20.5544L116.971 20.589L116.976 20.6226L116.98 20.6563L116.984 20.69L116.987 20.7246L116.99 20.7592L116.993 20.7928L116.995 20.8274L116.997 20.8621L116.998 20.8967L116.999 20.9313L117 20.9649V20.9995V21.0341L116.999 21.0687L116.998 21.1033L116.997 21.1379L116.995 21.1726L116.993 21.2062L116.99 21.2408L116.987 21.2754L116.984 21.3091L116.98 21.3437L116.976 21.3774L116.971 21.411L116.966 21.4447L116.961 21.4784L116.955 21.512L116.949 21.5457L116.943 21.5784L116.936 21.6112L116.928 21.6439L116.921 21.6766L116.913 21.7094L116.904 21.7412L116.896 21.773L116.886 21.8048L116.877 21.8366L116.867 21.8674L116.857 21.8983L116.846 21.9292L116.835 21.96L116.824 21.9899L116.812 22.0199L116.8 22.0498L116.788 22.0788L116.775 22.1078L116.762 22.1358L116.749 22.1639L116.735 22.192L116.721 22.22L116.707 22.2471L116.692 22.2733L116.677 22.3004L116.662 22.3266L116.646 22.3519L116.631 22.3771L116.615 22.4024L116.598 22.4267L116.581 22.4501L116.565 22.4735L116.548 22.4968L116.53 22.5193L116.512 22.5417L116.494 22.5632L116.476 22.5848L116.457 22.6063L116.438 22.6259L116.419 22.6455L116.401 22.6652L116.381 22.6839L116.362 22.7026L116.341 22.7204L116.321 22.7381L116.301 22.755L116.28 22.7709L116.26 22.7868L116.239 22.8017L116.218 22.8167L116.197 22.8307L116.176 22.8448L116.154 22.8578L116.133 22.87L116.111 22.8822L116.089 22.8934L116.067 22.9046L116.045 22.9149L116.023 22.9242L116 22.9336L115.978 22.942L115.955 22.9495L115.932 22.957L115.91 22.9645L115.887 22.9701L115.864 22.9757L115.841 22.9813L115.818 22.985L115.795 22.9897L115.772 22.9925L115.749 22.9953L115.726 22.9972L115.702 22.9991L115.679 23H115.656H97.3441Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M24.3657 434L24.1955 433.999L24.0247 433.996L23.8532 433.992L23.6804 433.985L23.5077 433.976L23.3337 433.965L23.1597 433.952L22.985 433.938L22.8097 433.92L22.6338 433.901L22.4573 433.88L22.2807 433.857L22.1035 433.831L21.9257 433.804L21.7479 433.774L21.5695 433.742L21.391 433.708L21.2126 433.671L21.0335 433.632L20.8544 433.591L20.6754 433.548L20.4963 433.502L20.3166 433.454L20.1375 433.404L19.9584 433.351L19.7794 433.295L19.6003 433.238L19.4218 433.178L19.2434 433.116L19.065 433.052L18.8871 432.984L18.7093 432.915L18.5328 432.843L18.3556 432.769L18.1797 432.692L18.0044 432.613L17.8291 432.532L17.6551 432.448L17.4811 432.362L17.3084 432.273L17.1362 432.183L16.9648 432.089L16.7945 431.994L16.625 431.896L16.4566 431.795L16.289 431.693L16.1225 431.588L15.9574 431.481L15.7935 431.372L15.6302 431.26L15.4689 431.146L15.3082 431.03L15.1493 430.911L14.9918 430.791L14.8355 430.668L14.6811 430.544L14.5273 430.417L14.3761 430.288L14.2255 430.157L14.0774 430.024L13.9306 429.889L13.7857 429.753L13.6421 429.614L13.5003 429.474L13.3611 429.331L13.2232 429.187L13.0871 429.041L12.953 428.893L12.8207 428.744L12.691 428.594L12.5625 428.441L12.4366 428.287L12.3126 428.131L12.1905 427.974L12.0709 427.815L11.9532 427.656L11.838 427.494L11.7247 427.332L11.6134 427.168L11.5045 427.003L11.3982 426.836L11.2938 426.669L11.1919 426.5L11.092 426.331L10.9951 426.161L10.8996 425.989L10.8072 425.817L10.7167 425.644L10.6288 425.47L10.5433 425.296L10.4598 425.12L10.3788 424.944L10.3004 424.767L10.2244 424.591L10.1504 424.413L10.0789 424.235L10.0099 424.056L9.94347 423.877L9.87893 423.698L9.81692 423.518L9.75743 423.339L9.70048 423.159L9.64543 422.979L9.59354 422.798L9.54292 422.618L9.49547 422.438L9.4499 422.257L9.40688 422.077L9.36574 421.897L9.32714 421.718L9.29108 421.538L9.25691 421.358L9.22464 421.179L9.19489 421L9.16769 420.822L9.14237 420.643L9.11896 420.465L9.09808 420.288L9.0791 420.111L9.06201 419.934L9.04746 419.759L9.0348 419.584L9.02404 419.409L9.01519 419.235L9.00886 419.062L9.0038 418.889L9.00126 418.717L9 418.546V47.4542L9.00126 47.283L9.0038 47.1111L9.00886 46.938L9.01519 46.7649L9.02404 46.5912L9.0348 46.4162L9.04746 46.2412L9.06201 46.0655L9.0791 45.8892L9.09808 45.7123L9.11896 45.5347L9.14237 45.3572L9.16769 45.179L9.19489 45.0001L9.22464 44.8213L9.25691 44.6418L9.29108 44.4624L9.32714 44.2829L9.36574 44.1028L9.40688 43.9227L9.4499 43.7426L9.49547 43.5625L9.54292 43.3817L9.59354 43.2016L9.64543 43.0215L9.70048 42.8414L9.75743 42.6613L9.81692 42.4818L9.87893 42.3024L9.94347 42.1229L10.0099 41.9441L10.0789 41.7652L10.1504 41.587L10.2244 41.4095L10.3004 41.2325L10.3788 41.0556L10.4598 40.88L10.5433 40.7043L10.6288 40.5299L10.7167 40.3562L10.8072 40.1831L10.8996 40.0106L10.9951 39.8394L11.092 39.6689L11.1919 39.4996L11.2938 39.3309L11.3982 39.1635L11.5045 38.9974L11.6134 38.8326L11.7247 38.6684L11.838 38.5061L11.9532 38.3445L12.0709 38.1847L12.1905 38.0263L12.3126 37.8691L12.4366 37.7131L12.5625 37.5591L12.691 37.4064L12.8207 37.2555L12.953 37.1066L13.0871 36.959L13.2232 36.8126L13.3611 36.6688L13.5003 36.5262L13.6421 36.3856L13.7857 36.2475L13.9306 36.1106L14.0774 35.9757L14.2255 35.8427L14.3761 35.7116L14.5273 35.583L14.6811 35.4564L14.8355 35.3317L14.9918 35.2088L15.1493 35.0885L15.3082 34.9702L15.4689 34.8543L15.6302 34.7404L15.7935 34.6284L15.9574 34.5189L16.1225 34.412L16.289 34.307L16.4566 34.2046L16.625 34.104L16.7945 34.006L16.9648 33.9105L17.1362 33.8176L17.3084 33.7266L17.4811 33.6381L17.6551 33.5516L17.8291 33.4682L18.0044 33.3868L18.1797 33.3078L18.3556 33.2308L18.5328 33.157L18.7093 33.0851L18.8871 33.0157L19.065 32.9489L19.2434 32.884L19.4218 32.8216L19.6003 32.7618L19.7794 32.7045L19.9584 32.6491L20.1375 32.5963L20.3166 32.546L20.4963 32.4983L20.6754 32.4525L20.8544 32.4086L21.0335 32.3678L21.2126 32.329L21.391 32.2921L21.5695 32.2577L21.7479 32.2259L21.9257 32.196L22.1035 32.1687L22.2807 32.1432L22.4573 32.1196L22.6338 32.0986L22.8097 32.0796L22.985 32.0624L23.1597 32.0477L23.3337 32.035L23.5077 32.0242L23.6804 32.0153L23.8532 32.0089L24.0247 32.0038L24.1955 32.0013L24.3657 32H187.634L187.804 32.0013L187.975 32.0038L188.147 32.0089L188.32 32.0153L188.492 32.0242L188.666 32.035L188.84 32.0477L189.015 32.0624L189.19 32.0796L189.366 32.0986L189.543 32.1196L189.719 32.1432L189.897 32.1687L190.074 32.196L190.252 32.2259L190.431 32.2577L190.609 32.2921L190.787 32.329L190.966 32.3678L191.146 32.4086L191.325 32.4525L191.504 32.4983L191.683 32.546L191.862 32.5963L192.042 32.6491L192.221 32.7045L192.4 32.7618L192.578 32.8216L192.757 32.884L192.935 32.9489L193.113 33.0157L193.291 33.0851L193.468 33.157L193.644 33.2308L193.82 33.3078L193.996 33.3868L194.171 33.4682L194.346 33.5516L194.519 33.6381L194.692 33.7266L194.864 33.8176L195.035 33.9105L195.205 34.006L195.375 34.104L195.543 34.2046L195.711 34.307L195.877 34.412L196.043 34.5189L196.206 34.6284L196.37 34.7404L196.531 34.8543L196.692 34.9702L196.851 35.0885L197.008 35.2088L197.164 35.3317L197.32 35.4564L197.473 35.583L197.625 35.7116L197.775 35.8427L197.923 35.9757L198.069 36.1106L198.215 36.2475L198.358 36.3856L198.5 36.5262L198.639 36.6688L198.777 36.8126L198.913 36.959L199.047 37.1066L199.179 37.2555L199.31 37.4064L199.437 37.5591L199.563 37.7131L199.687 37.8691L199.81 38.0263L199.929 38.1847L200.047 38.3445L200.162 38.5061L200.275 38.6684L200.387 38.8326L200.495 38.9974L200.602 39.1635L200.706 39.3309L200.808 39.4996L200.908 39.6689L201.005 39.8394L201.1 40.0106L201.193 40.1831L201.283 40.3562L201.371 40.5299L201.457 40.7043L201.54 40.88L201.621 41.0556L201.7 41.2325L201.776 41.4095L201.85 41.587L201.921 41.7652L201.99 41.9441L202.057 42.1229L202.121 42.3024L202.183 42.4818L202.243 42.6613L202.3 42.8414L202.355 43.0215L202.407 43.2016L202.457 43.3817L202.505 43.5625L202.55 43.7426L202.594 43.9227L202.634 44.1028L202.673 44.2829L202.71 44.4624L202.744 44.6418L202.775 44.8213L202.805 45.0001L202.832 45.179L202.858 45.3572L202.881 45.5347L202.902 45.7123L202.921 45.8892L202.938 46.0655L202.953 46.2412L202.965 46.4162L202.976 46.5912L202.985 46.7649L202.992 46.938L202.996 47.1111L202.999 47.283L203 47.4542V418.546L202.999 418.717L202.996 418.889L202.992 419.062L202.985 419.235L202.976 419.409L202.965 419.584L202.953 419.759L202.938 419.934L202.921 420.111L202.902 420.288L202.881 420.465L202.858 420.643L202.832 420.822L202.805 421L202.775 421.179L202.744 421.358L202.71 421.538L202.673 421.718L202.634 421.897L202.594 422.077L202.55 422.257L202.505 422.438L202.457 422.618L202.407 422.798L202.355 422.979L202.3 423.159L202.243 423.339L202.183 423.518L202.121 423.698L202.057 423.877L201.99 424.056L201.921 424.235L201.85 424.413L201.776 424.591L201.7 424.767L201.621 424.944L201.54 425.12L201.457 425.296L201.371 425.47L201.283 425.644L201.193 425.817L201.1 425.989L201.005 426.161L200.908 426.331L200.808 426.5L200.706 426.669L200.602 426.836L200.495 427.003L200.387 427.168L200.275 427.332L200.162 427.494L200.047 427.656L199.929 427.815L199.81 427.974L199.687 428.131L199.563 428.287L199.437 428.441L199.31 428.594L199.179 428.744L199.047 428.893L198.913 429.041L198.777 429.187L198.639 429.331L198.5 429.474L198.358 429.614L198.215 429.753L198.069 429.889L197.923 430.024L197.775 430.157L197.625 430.288L197.473 430.417L197.32 430.544L197.164 430.668L197.008 430.791L196.851 430.911L196.692 431.03L196.531 431.146L196.37 431.26L196.206 431.372L196.043 431.481L195.877 431.588L195.711 431.693L195.543 431.795L195.375 431.896L195.205 431.994L195.035 432.089L194.864 432.183L194.692 432.273L194.519 432.362L194.346 432.448L194.171 432.532L193.996 432.613L193.82 432.692L193.644 432.769L193.468 432.843L193.291 432.915L193.113 432.984L192.935 433.052L192.757 433.116L192.578 433.178L192.4 433.238L192.221 433.295L192.042 433.351L191.862 433.404L191.683 433.454L191.504 433.502L191.325 433.548L191.146 433.591L190.966 433.632L190.787 433.671L190.609 433.708L190.431 433.742L190.252 433.774L190.074 433.804L189.897 433.831L189.719 433.857L189.543 433.88L189.366 433.901L189.19 433.92L189.015 433.938L188.84 433.952L188.666 433.965L188.492 433.976L188.32 433.985L188.147 433.992L187.975 433.996L187.804 433.999L187.634 434H24.3657Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='196' height='404' viewBox='0 0 196 404' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M16.3657 403L16.1955 402.999L16.0247 402.996L15.8532 402.992L15.6804 402.985L15.5077 402.976L15.3337 402.965L15.1597 402.952L14.985 402.938L14.8097 402.92L14.6338 402.901L14.4573 402.88L14.2807 402.857L14.1035 402.831L13.9257 402.804L13.7479 402.774L13.5695 402.742L13.391 402.708L13.2126 402.671L13.0335 402.632L12.8544 402.591L12.6754 402.548L12.4963 402.502L12.3166 402.454L12.1375 402.404L11.9584 402.351L11.7794 402.295L11.6003 402.238L11.4218 402.178L11.2434 402.116L11.065 402.052L10.8871 401.984L10.7093 401.915L10.5328 401.843L10.3556 401.769L10.1797 401.692L10.0044 401.613L9.82914 401.532L9.65513 401.448L9.48111 401.362L9.30836 401.273L9.13625 401.183L8.96476 401.089L8.79455 400.994L8.62496 400.896L8.45665 400.795L8.28896 400.693L8.12254 400.588L7.95738 400.481L7.7935 400.372L7.63024 400.26L7.46888 400.146L7.30816 400.03L7.14933 399.911L6.99177 399.791L6.83547 399.668L6.68107 399.544L6.52731 399.417L6.37607 399.288L6.22547 399.157L6.0774 399.024L5.9306 398.889L5.78569 398.753L5.64205 398.614L5.50031 398.474L5.3611 398.331L5.22315 398.187L5.08711 398.041L4.95296 397.893L4.82071 397.744L4.69099 397.594L4.56254 397.441L4.43661 397.287L4.31259 397.131L4.19046 396.974L4.07087 396.815L3.95317 396.656L3.83801 396.494L3.72474 396.332L3.61337 396.168L3.50453 396.003L3.39823 395.836L3.29382 395.669L3.19194 395.5L3.09196 395.331L2.99515 395.161L2.8996 394.989L2.80721 394.817L2.71673 394.644L2.62877 394.47L2.54334 394.296L2.45982 394.12L2.37882 393.944L2.30036 393.767L2.22442 393.591L2.15039 393.413L2.07888 393.235L2.00991 393.056L1.94347 392.877L1.87893 392.698L1.81692 392.518L1.75743 392.339L1.70048 392.159L1.64543 391.979L1.59354 391.798L1.54292 391.618L1.49547 391.438L1.4499 391.257L1.40688 391.077L1.36574 390.897L1.32714 390.718L1.29108 390.538L1.25691 390.358L1.22464 390.179L1.19489 390L1.16769 389.822L1.14237 389.643L1.11896 389.465L1.09808 389.288L1.0791 389.111L1.06201 388.934L1.04746 388.759L1.0348 388.584L1.02404 388.409L1.01519 388.235L1.00886 388.062L1.0038 387.889L1.00126 387.717L1 387.546V16.4542L1.00126 16.283L1.0038 16.1111L1.00886 15.938L1.01519 15.7649L1.02404 15.5912L1.0348 15.4162L1.04746 15.2412L1.06201 15.0655L1.0791 14.8892L1.09808 14.7123L1.11896 14.5347L1.14237 14.3572L1.16769 14.179L1.19489 14.0001L1.22464 13.8213L1.25691 13.6418L1.29108 13.4624L1.32714 13.2829L1.36574 13.1028L1.40688 12.9227L1.4499 12.7426L1.49547 12.5625L1.54292 12.3817L1.59354 12.2016L1.64543 12.0215L1.70048 11.8414L1.75743 11.6613L1.81692 11.4818L1.87893 11.3024L1.94347 11.1229L2.00991 10.9441L2.07888 10.7652L2.15039 10.587L2.22442 10.4095L2.30036 10.2325L2.37882 10.0556L2.45982 9.87996L2.54334 9.7043L2.62877 9.52993L2.71673 9.35618L2.80721 9.18308L2.8996 9.01061L2.99515 8.83941L3.09196 8.66885L3.19194 8.49956L3.29382 8.33091L3.39823 8.16353L3.50453 7.99743L3.61337 7.8326L3.72474 7.6684L3.83801 7.50611L3.95317 7.34446L4.07087 7.18472L4.19046 7.02625L4.31259 6.86906L4.43661 6.71313L4.56254 6.55912L4.69099 6.40638L4.82071 6.25555L4.95296 6.10663L5.08711 5.95898L5.22315 5.8126L5.3611 5.66877L5.50031 5.52621L5.64205 5.38557L5.78569 5.24746L5.9306 5.11063L6.0774 4.97571L6.22547 4.8427L6.37607 4.71159L6.52731 4.58304L6.68107 4.45639L6.83547 4.33165L6.99177 4.20883L7.14933 4.08854L7.30816 3.97017L7.46888 3.85434L7.63024 3.74042L7.7935 3.62841L7.95738 3.51895L8.12254 3.41203L8.28896 3.30702L8.45665 3.20455L8.62496 3.104L8.79455 3.00599L8.96476 2.91053L9.13625 2.81761L9.30836 2.7266L9.48111 2.63814L9.65513 2.55159L9.82914 2.46822L10.0044 2.38675L10.1797 2.30784L10.3556 2.23083L10.5328 2.15701L10.7093 2.08509L10.8871 2.01572L11.065 1.9489L11.2434 1.88399L11.4218 1.82162L11.6003 1.76179L11.7794 1.70451L11.9584 1.64915L12.1375 1.59632L12.3166 1.54604L12.4963 1.49831L12.6754 1.45249L12.8544 1.40858L13.0335 1.36785L13.2126 1.32903L13.391 1.29212L13.5695 1.25775L13.7479 1.22593L13.9257 1.19602L14.1035 1.16865L14.2807 1.14319L14.4573 1.11964L14.6338 1.09864L14.8097 1.07955L14.985 1.06237L15.1597 1.04773L15.3337 1.035L15.5077 1.02418L15.6804 1.01527L15.8532 1.00891L16.0247 1.00382L16.1955 1.00127L16.3657 1H179.634L179.804 1.00127L179.975 1.00382L180.147 1.00891L180.32 1.01527L180.492 1.02418L180.666 1.035L180.84 1.04773L181.015 1.06237L181.19 1.07955L181.366 1.09864L181.543 1.11964L181.719 1.14319L181.897 1.16865L182.074 1.19602L182.252 1.22593L182.431 1.25775L182.609 1.29212L182.787 1.32903L182.966 1.36785L183.146 1.40858L183.325 1.45249L183.504 1.49831L183.683 1.54604L183.862 1.59632L184.042 1.64915L184.221 1.70451L184.4 1.76179L184.578 1.82162L184.757 1.88399L184.935 1.9489L185.113 2.01572L185.291 2.08509L185.468 2.15701L185.644 2.23083L185.82 2.30784L185.996 2.38675L186.171 2.46822L186.346 2.55159L186.519 2.63814L186.692 2.7266L186.864 2.81761L187.035 2.91053L187.205 3.00599L187.375 3.104L187.543 3.20455L187.711 3.30702L187.877 3.41203L188.043 3.51895L188.206 3.62841L188.37 3.74042L188.531 3.85434L188.692 3.97017L188.851 4.08854L189.008 4.20883L189.164 4.33165L189.32 4.45639L189.473 4.58304L189.625 4.71159L189.775 4.8427L189.923 4.97571L190.069 5.11063L190.215 5.24746L190.358 5.38557L190.5 5.52621L190.639 5.66877L190.777 5.8126L190.913 5.95898L191.047 6.10663L191.179 6.25555L191.31 6.40638L191.437 6.55912L191.563 6.71313L191.687 6.86906L191.81 7.02625L191.929 7.18472L192.047 7.34446L192.162 7.50611L192.275 7.6684L192.387 7.8326L192.495 7.99743L192.602 8.16353L192.706 8.33091L192.808 8.49956L192.908 8.66885L193.005 8.83941L193.1 9.01061L193.193 9.18308L193.283 9.35618L193.371 9.52993L193.457 9.7043L193.54 9.87996L193.621 10.0556L193.7 10.2325L193.776 10.4095L193.85 10.587L193.921 10.7652L193.99 10.9441L194.057 11.1229L194.121 11.3024L194.183 11.4818L194.243 11.6613L194.3 11.8414L194.355 12.0215L194.407 12.2016L194.457 12.3817L194.505 12.5625L194.55 12.7426L194.594 12.9227L194.634 13.1028L194.673 13.2829L194.71 13.4624L194.744 13.6418L194.775 13.8213L194.805 14.0001L194.832 14.179L194.858 14.3572L194.881 14.5347L194.902 14.7123L194.921 14.8892L194.938 15.0655L194.953 15.2412L194.965 15.4162L194.976 15.5912L194.985 15.7649L194.992 15.938L194.996 16.1111L194.999 16.283L195 16.4542V387.546L194.999 387.717L194.996 387.889L194.992 388.062L194.985 388.235L194.976 388.409L194.965 388.584L194.953 388.759L194.938 388.934L194.921 389.111L194.902 389.288L194.881 389.465L194.858 389.643L194.832 389.822L194.805 390L194.775 390.179L194.744 390.358L194.71 390.538L194.673 390.718L194.634 390.897L194.594 391.077L194.55 391.257L194.505 391.438L194.457 391.618L194.407 391.798L194.355 391.979L194.3 392.159L194.243 392.339L194.183 392.518L194.121 392.698L194.057 392.877L193.99 393.056L193.921 393.235L193.85 393.413L193.776 393.591L193.7 393.767L193.621 393.944L193.54 394.12L193.457 394.296L193.371 394.47L193.283 394.644L193.193 394.817L193.1 394.989L193.005 395.161L192.908 395.331L192.808 395.5L192.706 395.669L192.602 395.836L192.495 396.003L192.387 396.168L192.275 396.332L192.162 396.494L192.047 396.656L191.929 396.815L191.81 396.974L191.687 397.131L191.563 397.287L191.437 397.441L191.31 397.594L191.179 397.744L191.047 397.893L190.913 398.041L190.777 398.187L190.639 398.331L190.5 398.474L190.358 398.614L190.215 398.753L190.069 398.889L189.923 399.024L189.775 399.157L189.625 399.288L189.473 399.417L189.32 399.544L189.164 399.668L189.008 399.791L188.851 399.911L188.692 400.03L188.531 400.146L188.37 400.26L188.206 400.372L188.043 400.481L187.877 400.588L187.711 400.693L187.543 400.795L187.375 400.896L187.205 400.994L187.035 401.089L186.864 401.183L186.692 401.273L186.519 401.362L186.346 401.448L186.171 401.532L185.996 401.613L185.82 401.692L185.644 401.769L185.468 401.843L185.291 401.915L185.113 401.984L184.935 402.052L184.757 402.116L184.578 402.178L184.4 402.238L184.221 402.295L184.042 402.351L183.862 402.404L183.683 402.454L183.504 402.502L183.325 402.548L183.146 402.591L182.966 402.632L182.787 402.671L182.609 402.708L182.431 402.742L182.252 402.774L182.074 402.804L181.897 402.831L181.719 402.857L181.543 402.88L181.366 402.901L181.19 402.92L181.015 402.938L180.84 402.952L180.666 402.965L180.492 402.976L180.32 402.985L180.147 402.992L179.975 402.996L179.804 402.999L179.634 403H16.3657Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "Apple Watch Series 3 38mm",
          deviceWidth: 128,
          deviceHeight: 242,
          borderlessWidth: 118,
          borderlessHeight: 139,
          cornerRadius: 32,
          cornerRadiusBorderless: 24,
          deviceSVG: "<svg width='137' height='244' viewBox='0 0 137 244' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M15.6268 193.376C15.2171 193.172 14.8138 192.959 14.4171 192.737H14.0635L20.7485 199.277C21.6692 200.62 22.4579 202.056 23.1072 203.565C24.473 206.738 25.1552 210.264 25.4681 213.692L26.8987 229.372C27.169 232.337 27.4502 235.42 29.8779 237.477C31.2784 238.663 33.0481 239.307 34.7947 239.787C36.6638 240.302 38.587 240.637 40.5042 240.913C44.6769 241.513 48.8671 241.879 53.0657 242.239C57.0706 242.582 61.1126 242.651 65.13 242.693L68.0501 242.663C72.1008 242.621 76.1561 242.327 80.1901 241.982C84.201 241.639 88.236 241.253 92.196 240.511C95.6103 239.871 99.6863 239.053 101.747 235.947C102.682 234.537 103.048 232.794 103.2 231.131L103.666 226.026C103.935 223.075 104.204 220.125 104.473 217.174C104.514 216.722 104.549 216.269 104.584 215.815L104.591 215.722C104.669 214.691 104.748 213.658 104.895 212.64C105.469 208.674 106.311 204.754 108.295 201.228C108.667 200.565 109.067 199.919 109.494 199.293L116.195 192.737H115.627C113.336 194.006 110.841 194.924 108.291 195.454M15.6268 193.376C19.1658 195.134 23.0661 195.934 26.9989 195.998L103.002 195.999C104.782 195.969 106.545 195.817 108.291 195.454M15.6268 193.376C12.0208 191.585 8.91091 189.057 6.42523 185.89C4.00935 182.811 2.33898 179.117 1.544 175.29C1.18118 173.544 1.03097 171.78 1 170V73C1.06794 69.0668 1.86292 65.1674 3.62249 61.6279C5.41534 58.0219 7.9403 54.9137 11.1086 52.4266C14.1869 50.0098 17.8832 48.341 21.7097 47.5456M108.291 195.454C112.116 194.659 115.816 192.991 118.892 190.574C122.058 188.084 124.586 184.979 126.378 181.373C128.137 177.832 128.932 173.933 129 170L129 165.078L129.259 165.077M21.7097 47.5456C19.4761 48.0099 17.2868 48.7719 15.239 49.8065L20.7498 44.4156C21.6699 43.0725 22.458 41.6356 23.1074 40.1276C24.4732 36.9555 25.1554 33.4295 25.4683 30.0018L26.899 14.3192C27.1693 11.3553 27.4505 8.27218 29.8781 6.21686C31.2794 5.02995 33.0478 4.38889 34.7949 3.9059C36.6626 3.39009 38.5872 3.05454 40.5044 2.78C44.678 2.18284 48.8673 1.81355 53.0659 1.45396C57.0708 1.11055 61.113 1.04301 65.1299 1.00049C65.7821 1.00699 66.4344 1.01391 67.0866 1.02083L68.05 1.03099C72.1007 1.07352 76.156 1.36516 80.19 1.71088C84.2014 2.05475 88.235 2.443 92.196 3.18297C95.6088 3.82033 99.6881 4.64073 101.747 7.74621C102.682 9.1559 103.048 10.8993 103.2 12.5623L103.804 19.1847M21.7097 47.5456C23.4559 47.1828 25.2187 47.0326 26.9995 47.0016L103.002 47.0015C106.936 47.0699 110.833 47.8658 114.374 49.6244M114.374 49.6244C114.707 49.7898 115.035 49.9615 115.36 50.1394L109.494 44.4008C109.067 43.7746 108.667 43.1289 108.295 42.4657C106.313 38.936 105.469 35.0212 104.895 31.0537C104.748 30.0362 104.669 29.0025 104.591 27.9718C104.554 27.4865 104.517 27.002 104.473 26.5201M114.374 49.6244C117.98 51.4154 121.087 53.9429 123.575 57.1094C125.992 60.1867 127.661 63.8838 128.456 67.7103C128.818 69.4564 128.969 71.2193 129 73.0001L129 80.683L129.259 80.6831M104.473 26.5201C104.308 24.7069 104.142 22.8936 103.977 21.0807L103.804 19.1847M104.473 26.5201L103.804 19.1847M129.259 80.6831C126.94 83.7914 125.813 87.5575 125.521 91.3951C125.452 92.3181 125.421 93.2374 125.407 94.1627C125.465 98.077 126 102.005 127.875 105.499C128.278 106.251 128.749 106.96 129.259 107.645M129.259 80.6831L132.726 80.6833M129.259 80.6831L132 80.6833M129.259 107.645L129 107.645V122.71L129.259 122.709M129.259 107.645L132.726 107.645M129.259 107.645L132 107.645M129.259 122.709C128.425 124.456 128.215 126.524 127.983 128.423C127.742 130.396 127.626 132.386 127.535 134.371C127.389 137.542 127.383 140.719 127.334 143.893C127.397 147.967 127.392 152.042 127.692 156.106C127.809 157.686 127.946 159.259 128.178 160.826C128.367 162.109 128.586 163.454 129.08 164.668C129.135 164.803 129.193 164.936 129.255 165.068M129.259 122.709L129.652 122.7C130.212 122.703 130.723 123.057 130.917 123.584C131.125 124.15 131 124.917 131 125.5M129.259 165.077C129.258 165.074 129.256 165.071 129.255 165.068M129.259 165.077L129.255 165.068M129.255 165.068C129.937 165.058 130.586 164.969 130.893 164.248C131.119 163.713 131 162.975 131 162.417M132 107.645V80.6833M132 107.645L132.726 107.645M132 80.6833L132.726 80.6833M132.726 80.6833C134.523 80.6917 135.98 82.1693 136 83.9575V104.371C135.98 106.159 134.523 107.637 132.726 107.645M131 162.417C131 157.827 131 153.238 131 148.648M131 162.417V148.648M131 148.648C131 142.823 131 136.997 131 131.172M131 148.648V131.172M131 131.172C131 129.282 131 127.39 131 125.5M131 131.172V125.5' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M27.221 189.943C23.3122 189.876 19.5934 188.818 16.2822 186.727C13.0903 184.71 10.448 181.681 8.88621 178.244C7.65677 175.538 7.05084 172.689 7 169.722' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M7 73.2214C7.06656 69.3127 8.1256 65.5939 10.217 62.2822C12.234 59.0894 15.2619 56.4498 18.6997 54.8862C21.4044 53.6559 24.2548 53.0499 27.2216 53' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M102.779 53.2781C106.687 53.3447 110.407 54.4035 113.718 56.495C116.91 58.5124 119.552 61.5394 121.114 64.9781C122.344 67.6833 122.95 70.5327 123 73.5' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M123 170C122.933 173.908 121.876 177.629 119.783 180.939C117.764 184.131 114.739 186.772 111.3 188.335C108.595 189.566 105.702 189.893 102.736 189.943' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='118' height='139' viewBox='0 0 118 139' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M21.221 137.943C17.3122 137.876 13.5934 136.818 10.2822 134.727C7.09033 132.71 4.44796 129.681 2.88621 126.244C1.65677 123.538 1.05084 120.689 1 117.722' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M1 21.2214C1.06656 17.3127 2.1256 13.5939 4.21702 10.2822C6.23404 7.0894 9.26186 4.44981 12.6997 2.88621C15.4044 1.65585 18.2548 1.04992 21.2216 1' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M96.7788 1.2781C100.687 1.34466 104.407 2.40354 107.718 4.49497C110.91 6.51244 113.552 9.53935 115.114 12.9781C116.344 15.6833 116.95 18.5327 117 21.5' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M117 118C116.933 121.908 115.876 125.629 113.783 128.939C111.764 132.131 108.739 134.772 105.3 136.335C102.595 137.566 99.7023 137.893 96.7359 137.943' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='137' height='244' viewBox='0 0 137 244' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M15.6268 193.376C15.2171 193.172 14.8138 192.959 14.4171 192.737H14.0635L20.7485 199.277C21.6692 200.62 22.4579 202.056 23.1072 203.565C24.473 206.738 25.1552 210.264 25.4681 213.692L26.8987 229.372C27.169 232.337 27.4502 235.42 29.8779 237.477C31.2784 238.663 33.0481 239.307 34.7947 239.787C36.6638 240.302 38.587 240.637 40.5042 240.913C44.6769 241.513 48.8671 241.879 53.0657 242.239C57.0706 242.582 61.1126 242.651 65.13 242.693L68.0501 242.663C72.1008 242.621 76.1561 242.327 80.1901 241.982C84.201 241.639 88.236 241.253 92.196 240.511C95.6103 239.871 99.6863 239.053 101.747 235.947C102.682 234.537 103.048 232.794 103.2 231.131L103.666 226.026C103.935 223.075 104.204 220.125 104.473 217.174C104.514 216.722 104.549 216.269 104.584 215.815L104.591 215.722C104.669 214.691 104.748 213.658 104.895 212.64C105.469 208.674 106.311 204.754 108.295 201.228C108.667 200.565 109.067 199.919 109.494 199.293L116.195 192.737H115.627C113.336 194.006 110.841 194.924 108.291 195.454M15.6268 193.376C19.1658 195.134 23.0661 195.934 26.9989 195.998L103.002 195.999C104.782 195.969 106.545 195.817 108.291 195.454M15.6268 193.376C12.0208 191.585 8.91091 189.057 6.42523 185.89C4.00935 182.811 2.33898 179.117 1.544 175.29C1.18118 173.544 1.03097 171.78 1 170V73C1.06794 69.0668 1.86292 65.1674 3.62249 61.6279C5.41534 58.0219 7.9403 54.9137 11.1086 52.4266C14.1869 50.0098 17.8832 48.341 21.7097 47.5456M108.291 195.454C112.116 194.659 115.816 192.991 118.892 190.574C122.058 188.084 124.586 184.979 126.378 181.373C128.137 177.832 128.932 173.933 129 170L129 165.078L129.259 165.077M21.7097 47.5456C19.4761 48.0099 17.2868 48.7719 15.239 49.8065L20.7498 44.4156C21.6699 43.0725 22.458 41.6356 23.1074 40.1276C24.4732 36.9555 25.1554 33.4295 25.4683 30.0018L26.899 14.3192C27.1693 11.3553 27.4505 8.27218 29.8781 6.21686C31.2794 5.02995 33.0478 4.38889 34.7949 3.9059C36.6626 3.39009 38.5872 3.05454 40.5044 2.78C44.678 2.18284 48.8673 1.81355 53.0659 1.45396C57.0708 1.11055 61.113 1.04301 65.1299 1.00049C65.7821 1.00699 66.4344 1.01391 67.0866 1.02083L68.05 1.03099C72.1007 1.07352 76.156 1.36516 80.19 1.71088C84.2014 2.05475 88.235 2.443 92.196 3.18297C95.6088 3.82033 99.6881 4.64073 101.747 7.74621C102.682 9.1559 103.048 10.8993 103.2 12.5623L103.804 19.1847M21.7097 47.5456C23.4559 47.1828 25.2187 47.0326 26.9995 47.0016L103.002 47.0015C106.936 47.0699 110.833 47.8658 114.374 49.6244M114.374 49.6244C114.707 49.7898 115.035 49.9615 115.36 50.1394L109.494 44.4008C109.067 43.7746 108.667 43.1289 108.295 42.4657C106.313 38.936 105.469 35.0212 104.895 31.0537C104.748 30.0362 104.669 29.0025 104.591 27.9718C104.554 27.4865 104.517 27.002 104.473 26.5201M114.374 49.6244C117.98 51.4154 121.087 53.9429 123.575 57.1094C125.992 60.1867 127.661 63.8838 128.456 67.7103C128.818 69.4564 128.969 71.2193 129 73.0001L129 80.683L129.259 80.6831M104.473 26.5201C104.308 24.7069 104.142 22.8936 103.977 21.0807L103.804 19.1847M104.473 26.5201L103.804 19.1847M129.259 80.6831C126.94 83.7914 125.813 87.5575 125.521 91.3951C125.452 92.3181 125.421 93.2374 125.407 94.1627C125.465 98.077 126 102.005 127.875 105.499C128.278 106.251 128.749 106.96 129.259 107.645M129.259 80.6831L132.726 80.6833M129.259 80.6831L132 80.6833M129.259 107.645L129 107.645V122.71L129.259 122.709M129.259 107.645L132.726 107.645M129.259 107.645L132 107.645M129.259 122.709C128.425 124.456 128.215 126.524 127.983 128.423C127.742 130.396 127.626 132.386 127.535 134.371C127.389 137.542 127.383 140.719 127.334 143.893C127.397 147.967 127.392 152.042 127.692 156.106C127.809 157.686 127.946 159.259 128.178 160.826C128.367 162.109 128.586 163.454 129.08 164.668C129.135 164.803 129.193 164.936 129.255 165.068M129.259 122.709L129.652 122.7C130.212 122.703 130.723 123.057 130.917 123.584C131.125 124.15 131 124.917 131 125.5M129.259 165.077C129.258 165.074 129.256 165.071 129.255 165.068M129.259 165.077L129.255 165.068M129.255 165.068C129.937 165.058 130.586 164.969 130.893 164.248C131.119 163.713 131 162.975 131 162.417M132 107.645V80.6833M132 107.645L132.726 107.645M132 80.6833L132.726 80.6833M132.726 80.6833C134.523 80.6917 135.98 82.1693 136 83.9575V104.371C135.98 106.159 134.523 107.637 132.726 107.645M131 162.417C131 157.827 131 153.238 131 148.648M131 162.417V148.648M131 148.648C131 142.823 131 136.997 131 131.172M131 148.648V131.172M131 131.172C131 129.282 131 127.39 131 125.5M131 131.172V125.5' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M27.221 189.943C23.3122 189.876 19.5934 188.818 16.2822 186.727C13.0903 184.71 10.448 181.681 8.88621 178.244C7.65677 175.538 7.05084 172.689 7 169.722' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M7 73.2214C7.06656 69.3127 8.1256 65.5939 10.217 62.2822C12.234 59.0894 15.2619 56.4498 18.6997 54.8862C21.4044 53.6559 24.2548 53.0499 27.2216 53' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M102.779 53.2781C106.687 53.3447 110.407 54.4035 113.718 56.495C116.91 58.5124 119.552 61.5394 121.114 64.9781C122.344 67.6833 122.95 70.5327 123 73.5' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M123 170C122.933 173.908 121.876 177.629 119.783 180.939C117.764 184.131 114.739 186.772 111.3 188.335C108.595 189.566 105.702 189.893 102.736 189.943' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='118' height='139' viewBox='0 0 118 139' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M21.221 137.943C17.3122 137.876 13.5934 136.818 10.2822 134.727C7.09033 132.71 4.44796 129.681 2.88621 126.244C1.65677 123.538 1.05084 120.689 1 117.722' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M1 21.2214C1.06656 17.3127 2.1256 13.5939 4.21702 10.2822C6.23404 7.0894 9.26186 4.44981 12.6997 2.88621C15.4044 1.65585 18.2548 1.04992 21.2216 1' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M96.7788 1.2781C100.687 1.34466 104.407 2.40354 107.718 4.49497C110.91 6.51244 113.552 9.53935 115.114 12.9781C116.344 15.6833 116.95 18.5327 117 21.5' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M117 118C116.933 121.908 115.876 125.629 113.783 128.939C111.764 132.131 108.739 134.772 105.3 136.335C102.595 137.566 99.7023 137.893 96.7359 137.943' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "iPad Pro 11",
          deviceWidth: 505,
          deviceHeight: 699,
          borderlessWidth: 456,
          borderlessHeight: 652,
          cornerRadius: 33,
          cornerRadiusBorderless: 11.5,
          deviceSVG: "<svg width='506' height='702' viewBox='0 0 506 702' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M33.2756 700.999C24.6923 700.963 16.366 697.512 10.3215 691.398C4.36787 685.376 1.04861 677.141 1.00319 668.685C0.996016 667.384 1.00319 666.083 1.00319 664.782C1.00319 661.045 1.00319 657.306 1.00319 653.569C1.00319 647.678 1.00319 641.787 1.00319 635.898C1.00319 628.084 1.00319 620.269 1.00319 612.455C1.00319 602.903 1.00319 593.351 1.00319 583.799C1.00319 572.858 1.00319 561.917 1.00319 550.974C1.00319 538.839 1.00319 526.702 1.00319 514.567C1.00319 501.441 1.00319 488.316 1.00319 475.192C1.00319 461.355 1.00319 447.517 1.00319 433.68C1.00319 419.414 1.00319 405.148 1.00319 390.883C1.00319 376.355 1.00319 361.826 1.00319 347.298C1.00319 332.79 1.00319 318.283 1.00319 303.775C1.00319 289.571 1.00319 275.368 1.00319 261.164C1.00319 247.467 1.00319 233.771 1.00319 220.074C1.00319 207.057 1.00319 194.041 1.00319 181.024C1.00319 169.074 1.00319 157.126 1.00319 145.176C1.00319 134.462 1.00319 123.748 1.00319 113.034C1.00319 103.753 1.00319 94.4722 1.00319 85.1898C1.00319 77.6859 1.00319 70.182 1.00319 62.6781C1.00319 57.1393 1.00319 51.6006 1.00319 46.063C1.00319 42.7203 1.00319 39.3777 1.00319 36.0362C1.00319 33.736 0.975684 31.4489 1.2745 29.1582C2.37535 20.7184 6.85524 12.9141 13.593 7.72244C19.2789 3.34097 26.2832 1.03833 33.4417 1.01679C35.8729 1.00961 38.3041 1.01679 40.7353 1.01679C46.4021 1.01679 52.0701 1.01679 57.7369 1.01679C66.1612 1.01679 74.5855 1.01679 83.011 1.01679C93.6717 1.01679 104.333 1.01679 114.994 1.01679C127.347 1.01679 139.699 1.01679 152.052 1.01679C165.618 1.01679 179.184 1.01679 192.749 1.01679C207.102 1.01679 221.455 1.01679 235.808 1.01679C250.284 1.01679 264.76 1.01679 279.234 1.01679C293.404 1.01679 307.576 1.01679 321.746 1.01679C335.176 1.01679 348.606 1.01679 362.036 1.01679C374.072 1.01679 386.108 1.01679 398.144 1.01679C408.356 1.01679 418.569 1.01679 428.781 1.01679C436.701 1.01679 444.621 1.01679 452.541 1.01679C457.574 1.01679 462.608 1.01679 467.641 1.01679C469.675 1.01679 471.717 0.970117 473.751 1.03355C482.273 1.29804 490.502 5.04401 496.318 11.2841C501.881 17.2525 504.955 25.1873 504.997 33.3375C505.004 34.7353 504.997 36.1332 504.997 37.531C504.997 41.344 504.997 45.1558 504.997 48.9688C504.997 54.9516 504.997 60.9332 504.997 66.916C504.997 74.7993 504.997 82.6825 504.997 90.5658C504.997 100.121 504.997 109.676 504.997 119.232C504.997 130.28 504.997 141.328 504.997 152.377C504.997 164.554 504.997 176.732 504.997 188.908C504.997 202.027 504.997 215.148 504.997 228.267C504.997 242.164 504.997 256.061 504.997 269.958C504.997 284.237 504.997 298.516 504.997 312.795C504.997 327.287 504.997 341.779 504.997 356.271C504.997 370.814 504.997 385.355 504.997 399.897C504.997 414.086 504.997 428.274 504.997 442.463C504.997 456.135 504.997 469.809 504.997 483.481C504.997 496.464 504.997 509.446 504.997 522.428C504.997 534.335 504.997 546.242 504.997 558.148C504.997 568.809 504.997 579.47 504.997 590.132C504.997 599.329 504.997 608.525 504.997 617.721C504.997 625.177 504.997 632.632 504.997 640.088C504.997 645.546 504.997 651.004 504.997 656.462C504.997 659.703 504.997 662.944 504.997 666.185C504.997 668.727 504.998 671.245 504.594 673.77C503.242 682.216 498.511 689.902 491.583 694.906C486.024 698.921 479.325 700.981 472.489 700.998C469.92 701.004 467.35 700.998 464.782 700.998C459 700.998 453.219 700.998 447.437 700.998C438.943 700.998 430.451 700.998 421.957 700.998C411.194 700.998 400.431 700.998 389.667 700.998C377.258 700.998 364.85 700.998 352.44 700.998C338.838 700.998 325.236 700.998 311.634 700.998C297.264 700.998 282.893 700.998 268.524 700.998C254.05 700.998 239.576 700.998 225.104 700.998C210.956 700.998 196.807 700.998 182.659 700.998C169.305 700.998 155.951 700.998 142.598 700.998C130.588 700.998 118.578 700.998 106.567 700.998C96.4351 700.998 86.3028 700.998 76.1704 700.998C68.3689 700.998 60.5661 700.998 52.7646 700.998C47.8329 700.998 42.9012 700.998 37.9695 700.998C36.4048 700.999 34.8402 700.999 33.2756 700.999Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M240.003 13.4849C239.979 10.7557 236.487 9.43535 234.7 11.5338C232.925 13.6202 234.773 16.8953 237.476 16.456C238.923 16.2214 239.99 14.9429 240.003 13.4849Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M36.4127 675.997C32.5852 675.995 28.984 673.821 27.2031 670.431C26.2235 668.565 26.0103 666.596 26.0103 664.537C26.0103 662.09 26.0103 659.643 26.0103 657.196C26.0103 652.605 26.0103 648.016 26.0103 643.425C26.0103 636.912 26.0103 630.399 26.0103 623.885C26.0103 615.668 26.0103 607.453 26.0103 599.237C26.0103 589.54 26.0103 579.842 26.0103 570.144C26.0103 559.185 26.0103 548.226 26.0103 537.267C26.0103 525.268 26.0103 513.268 26.0103 501.268C26.0103 488.485 26.0103 475.704 26.0103 462.921C26.0103 449.502 26.0103 436.083 26.0103 422.665C26.0103 408.906 26.0103 395.147 26.0103 381.389C26.0103 367.431 26.0103 353.473 26.0103 339.515C26.0103 325.618 26.0103 311.72 26.0103 297.823C26.0103 284.207 26.0103 270.59 26.0103 256.975C26.0103 243.86 26.0103 230.745 26.0103 217.63C26.0103 205.238 26.0103 192.845 26.0103 180.452C26.0103 169.002 26.0103 157.552 26.0103 146.101C26.0103 135.814 26.0103 125.527 26.0103 115.24C26.0103 106.336 26.0103 97.4323 26.0103 88.5287C26.0103 81.2299 26.0103 73.93 26.0103 66.6312C26.0103 61.1698 26.0103 55.7071 26.0103 50.2456C26.0103 46.8094 26.0103 43.3744 26.0103 39.9382C26.0103 38.7298 25.9863 37.5189 26.0115 36.3104C26.0881 32.4694 28.2546 28.9063 31.6941 27.1553C33.7133 26.1276 35.8043 26.0222 38.0019 26.0222C41.5061 26.0222 45.0115 26.0222 48.5157 26.0222C54.9049 26.0222 61.2941 26.0222 67.6833 26.0222C76.4917 26.0222 85.3001 26.0222 94.1096 26.0222C104.872 26.0222 115.635 26.0222 126.398 26.0222C138.651 26.0222 150.904 26.0222 163.155 26.0222C176.432 26.0222 189.708 26.0222 202.986 26.0222C216.822 26.0222 230.658 26.0222 244.495 26.0222C258.386 26.0222 272.277 26.0222 286.168 26.0222C299.73 26.0222 313.291 26.0222 326.853 26.0222C339.545 26.0222 352.238 26.0222 364.931 26.0222C376.363 26.0222 387.796 26.0222 399.228 26.0222C408.897 26.0222 418.566 26.0222 428.235 26.0222C435.676 26.0222 443.116 26.0222 450.557 26.0222C455.304 26.0222 460.053 26.0222 464.8 26.0222C466.524 26.0222 468.26 25.9612 469.983 26.0306C473.828 26.1863 477.355 28.5146 478.993 31.9999C479.845 33.8132 479.981 35.69 479.981 37.6447C479.981 40.1814 479.981 42.7181 479.981 45.2548C479.981 49.9258 479.981 54.598 479.981 59.269C479.981 65.8336 479.981 72.3981 479.981 78.9615C479.981 87.21 479.981 95.4597 479.981 103.708C479.981 113.453 479.981 123.197 479.981 132.942C479.981 143.94 479.981 154.938 479.981 165.937C479.981 177.969 479.981 190 479.981 202.032C479.981 214.876 479.981 227.721 479.981 240.565C479.981 254.002 479.981 267.439 479.981 280.875C479.981 294.683 479.981 308.491 479.981 322.301C479.981 336.26 479.981 350.22 479.981 364.179C479.981 378.07 479.981 391.96 479.981 405.85C479.981 419.451 479.981 433.051 479.981 446.652C479.981 459.742 479.981 472.833 479.981 485.922C479.981 498.248 479.981 510.573 479.981 522.897C479.981 534.278 479.981 545.657 479.981 557.038C479.981 567.282 479.981 577.524 479.981 587.768C479.981 596.62 479.981 605.472 479.981 614.325C479.981 621.565 479.981 628.806 479.981 636.046C479.981 641.455 479.981 646.862 479.981 652.271C479.981 655.627 479.981 658.982 479.981 662.338C479.981 663.594 480.031 664.861 479.968 666.116C479.774 669.962 477.392 673.469 473.885 675.064C471.9 675.967 469.872 675.997 467.752 675.997C464.124 675.997 460.495 675.997 456.865 675.997C450.37 675.997 443.876 675.997 437.38 675.997C428.513 675.997 419.646 675.997 410.778 675.997C399.984 675.997 389.191 675.997 378.397 675.997C366.101 675.997 353.806 675.997 341.511 675.997C328.206 675.997 314.903 675.997 301.599 675.997C287.753 675.997 273.905 675.997 260.058 675.997C246.132 675.997 232.207 675.997 218.282 675.997C204.743 675.997 191.204 675.997 177.665 675.997C164.978 675.997 152.29 675.997 139.603 675.997C128.233 675.997 116.862 675.997 105.492 675.997C95.9025 675.997 86.3144 675.997 76.7252 675.997C69.3827 675.997 62.0414 675.997 54.6989 675.997C50.069 675.997 45.4378 675.997 40.8079 675.997C39.3432 675.997 37.8774 675.997 36.4127 675.997Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='456' height='652' viewBox='0 0 456 652' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M11.4127 651C7.58516 650.998 3.98396 648.824 2.20312 645.433C1.22348 643.567 1.01031 641.598 1.01031 639.539C1.01031 637.092 1.01031 634.646 1.01031 632.199C1.01031 627.608 1.01031 623.018 1.01031 618.428C1.01031 611.914 1.01031 605.401 1.01031 598.887C1.01031 590.671 1.01031 582.456 1.01031 574.24C1.01031 564.542 1.01031 554.844 1.01031 545.147C1.01031 534.188 1.01031 523.229 1.01031 512.27C1.01031 500.27 1.01031 488.271 1.01031 476.271C1.01031 463.488 1.01031 450.706 1.01031 437.923C1.01031 424.504 1.01031 411.085 1.01031 397.667C1.01031 383.908 1.01031 370.149 1.01031 356.391C1.01031 342.433 1.01031 328.475 1.01031 314.518C1.01031 300.621 1.01031 286.723 1.01031 272.826C1.01031 259.209 1.01031 245.593 1.01031 231.977C1.01031 218.863 1.01031 205.748 1.01031 192.633C1.01031 180.241 1.01031 167.848 1.01031 155.454C1.01031 144.004 1.01031 132.554 1.01031 121.103C1.01031 110.816 1.01031 100.529 1.01031 90.2422C1.01031 81.3386 1.01031 72.4349 1.01031 63.5313C1.01031 56.2325 1.01031 48.9326 1.01031 41.6338C1.01031 36.1724 1.01031 30.7097 1.01031 25.2482C1.01031 21.812 1.01031 18.377 1.01031 14.9408C1.01031 13.7324 0.986344 12.5215 1.01149 11.313C1.08814 7.47201 3.25462 3.90887 6.69414 2.15784C8.7133 1.13022 10.8043 1.02483 13.0019 1.02483C16.5061 1.02483 20.0115 1.02483 23.5157 1.02483C29.9049 1.02483 36.2941 1.02483 42.6833 1.02483C51.4917 1.02483 60.3001 1.02483 69.1096 1.02483C79.8725 1.02483 90.6354 1.02483 101.398 1.02483C113.651 1.02483 125.904 1.02483 138.155 1.02483C151.432 1.02483 164.708 1.02483 177.986 1.02483C191.822 1.02483 205.658 1.02483 219.495 1.02483C233.386 1.02483 247.277 1.02483 261.168 1.02483C274.73 1.02483 288.291 1.02483 301.853 1.02483C314.545 1.02483 327.238 1.02483 339.931 1.02483C351.363 1.02483 362.796 1.02483 374.228 1.02483C383.897 1.02483 393.566 1.02483 403.235 1.02483C410.676 1.02483 418.116 1.02483 425.557 1.02483C430.304 1.02483 435.053 1.02483 439.8 1.02483C441.524 1.02483 443.26 0.963741 444.983 1.03321C448.828 1.18891 452.355 3.51722 453.993 7.00251C454.845 8.81582 454.981 10.6926 454.981 12.6472C454.981 15.184 454.981 17.7207 454.981 20.2574C454.981 24.9284 454.981 29.6006 454.981 34.2716C454.981 40.8362 454.981 47.4007 454.981 53.9641C454.981 62.2126 454.981 70.4623 454.981 78.7108C454.981 88.4553 454.981 98.1997 454.981 107.944C454.981 118.943 454.981 129.941 454.981 140.939C454.981 152.971 454.981 165.002 454.981 177.034C454.981 189.878 454.981 202.724 454.981 215.568C454.981 229.005 454.981 242.442 454.981 255.877C454.981 269.686 454.981 283.494 454.981 297.303C454.981 311.262 454.981 325.223 454.981 339.182C454.981 353.073 454.981 366.962 454.981 380.853C454.981 394.454 454.981 408.054 454.981 421.655C454.981 434.744 454.981 447.835 454.981 460.925C454.981 473.25 454.981 485.576 454.981 497.9C454.981 509.281 454.981 520.66 454.981 532.04C454.981 542.284 454.981 552.527 454.981 562.771C454.981 571.623 454.981 580.475 454.981 589.327C454.981 596.567 454.981 603.808 454.981 611.049C454.981 616.457 454.981 621.865 454.981 627.274C454.981 630.63 454.981 633.984 454.981 637.34C454.981 638.597 455.031 639.864 454.968 641.119C454.774 644.965 452.392 648.472 448.885 650.067C446.9 650.97 444.872 651 442.752 651C439.124 651 435.495 651 431.865 651C425.37 651 418.876 651 412.38 651C403.513 651 394.646 651 385.778 651C374.984 651 364.191 651 353.397 651C341.101 651 328.806 651 316.511 651C303.206 651 289.903 651 276.599 651C262.753 651 248.905 651 235.058 651C221.132 651 207.207 651 193.282 651C179.743 651 166.204 651 152.665 651C139.978 651 127.29 651 114.603 651C103.233 651 91.8617 651 80.4917 651C70.9025 651 61.3144 651 51.7252 651C44.3827 651 37.0414 651 29.6989 651C25.069 651 20.4378 651 15.8079 651C14.3432 651 12.8774 651 11.4127 651Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='506' height='702' viewBox='0 0 506 702' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M33.2756 700.999C24.6923 700.963 16.366 697.512 10.3215 691.398C4.36787 685.376 1.04861 677.141 1.00319 668.685C0.996016 667.384 1.00319 666.083 1.00319 664.782C1.00319 661.045 1.00319 657.306 1.00319 653.569C1.00319 647.678 1.00319 641.787 1.00319 635.898C1.00319 628.084 1.00319 620.269 1.00319 612.455C1.00319 602.903 1.00319 593.351 1.00319 583.799C1.00319 572.858 1.00319 561.917 1.00319 550.974C1.00319 538.839 1.00319 526.702 1.00319 514.567C1.00319 501.441 1.00319 488.316 1.00319 475.192C1.00319 461.355 1.00319 447.517 1.00319 433.68C1.00319 419.414 1.00319 405.148 1.00319 390.883C1.00319 376.355 1.00319 361.826 1.00319 347.298C1.00319 332.79 1.00319 318.283 1.00319 303.775C1.00319 289.571 1.00319 275.368 1.00319 261.164C1.00319 247.467 1.00319 233.771 1.00319 220.074C1.00319 207.057 1.00319 194.041 1.00319 181.024C1.00319 169.074 1.00319 157.126 1.00319 145.176C1.00319 134.462 1.00319 123.748 1.00319 113.034C1.00319 103.753 1.00319 94.4722 1.00319 85.1898C1.00319 77.6859 1.00319 70.182 1.00319 62.6781C1.00319 57.1393 1.00319 51.6006 1.00319 46.063C1.00319 42.7203 1.00319 39.3777 1.00319 36.0362C1.00319 33.736 0.975684 31.4489 1.2745 29.1582C2.37535 20.7184 6.85524 12.9141 13.593 7.72244C19.2789 3.34097 26.2832 1.03833 33.4417 1.01679C35.8729 1.00961 38.3041 1.01679 40.7353 1.01679C46.4021 1.01679 52.0701 1.01679 57.7369 1.01679C66.1612 1.01679 74.5855 1.01679 83.011 1.01679C93.6717 1.01679 104.333 1.01679 114.994 1.01679C127.347 1.01679 139.699 1.01679 152.052 1.01679C165.618 1.01679 179.184 1.01679 192.749 1.01679C207.102 1.01679 221.455 1.01679 235.808 1.01679C250.284 1.01679 264.76 1.01679 279.234 1.01679C293.404 1.01679 307.576 1.01679 321.746 1.01679C335.176 1.01679 348.606 1.01679 362.036 1.01679C374.072 1.01679 386.108 1.01679 398.144 1.01679C408.356 1.01679 418.569 1.01679 428.781 1.01679C436.701 1.01679 444.621 1.01679 452.541 1.01679C457.574 1.01679 462.608 1.01679 467.641 1.01679C469.675 1.01679 471.717 0.970117 473.751 1.03355C482.273 1.29804 490.502 5.04401 496.318 11.2841C501.881 17.2525 504.955 25.1873 504.997 33.3375C505.004 34.7353 504.997 36.1332 504.997 37.531C504.997 41.344 504.997 45.1558 504.997 48.9688C504.997 54.9516 504.997 60.9332 504.997 66.916C504.997 74.7993 504.997 82.6825 504.997 90.5658C504.997 100.121 504.997 109.676 504.997 119.232C504.997 130.28 504.997 141.328 504.997 152.377C504.997 164.554 504.997 176.732 504.997 188.908C504.997 202.027 504.997 215.148 504.997 228.267C504.997 242.164 504.997 256.061 504.997 269.958C504.997 284.237 504.997 298.516 504.997 312.795C504.997 327.287 504.997 341.779 504.997 356.271C504.997 370.814 504.997 385.355 504.997 399.897C504.997 414.086 504.997 428.274 504.997 442.463C504.997 456.135 504.997 469.809 504.997 483.481C504.997 496.464 504.997 509.446 504.997 522.428C504.997 534.335 504.997 546.242 504.997 558.148C504.997 568.809 504.997 579.47 504.997 590.132C504.997 599.329 504.997 608.525 504.997 617.721C504.997 625.177 504.997 632.632 504.997 640.088C504.997 645.546 504.997 651.004 504.997 656.462C504.997 659.703 504.997 662.944 504.997 666.185C504.997 668.727 504.998 671.245 504.594 673.77C503.242 682.216 498.511 689.902 491.583 694.906C486.024 698.921 479.325 700.981 472.489 700.998C469.92 701.004 467.35 700.998 464.782 700.998C459 700.998 453.219 700.998 447.437 700.998C438.943 700.998 430.451 700.998 421.957 700.998C411.194 700.998 400.431 700.998 389.667 700.998C377.258 700.998 364.85 700.998 352.44 700.998C338.838 700.998 325.236 700.998 311.634 700.998C297.264 700.998 282.893 700.998 268.524 700.998C254.05 700.998 239.576 700.998 225.104 700.998C210.956 700.998 196.807 700.998 182.659 700.998C169.305 700.998 155.951 700.998 142.598 700.998C130.588 700.998 118.578 700.998 106.567 700.998C96.4351 700.998 86.3028 700.998 76.1704 700.998C68.3689 700.998 60.5661 700.998 52.7646 700.998C47.8329 700.998 42.9012 700.998 37.9695 700.998C36.4048 700.999 34.8402 700.999 33.2756 700.999Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M240.003 13.4849C239.979 10.7557 236.487 9.43535 234.7 11.5338C232.925 13.6202 234.773 16.8953 237.476 16.456C238.923 16.2214 239.99 14.9429 240.003 13.4849Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M36.4127 675.997C32.5852 675.995 28.984 673.821 27.2031 670.431C26.2235 668.565 26.0103 666.596 26.0103 664.537C26.0103 662.09 26.0103 659.643 26.0103 657.196C26.0103 652.605 26.0103 648.016 26.0103 643.425C26.0103 636.912 26.0103 630.399 26.0103 623.885C26.0103 615.668 26.0103 607.453 26.0103 599.237C26.0103 589.54 26.0103 579.842 26.0103 570.144C26.0103 559.185 26.0103 548.226 26.0103 537.267C26.0103 525.268 26.0103 513.268 26.0103 501.268C26.0103 488.485 26.0103 475.704 26.0103 462.921C26.0103 449.502 26.0103 436.083 26.0103 422.665C26.0103 408.906 26.0103 395.147 26.0103 381.389C26.0103 367.431 26.0103 353.473 26.0103 339.515C26.0103 325.618 26.0103 311.72 26.0103 297.823C26.0103 284.207 26.0103 270.59 26.0103 256.975C26.0103 243.86 26.0103 230.745 26.0103 217.63C26.0103 205.238 26.0103 192.845 26.0103 180.452C26.0103 169.002 26.0103 157.552 26.0103 146.101C26.0103 135.814 26.0103 125.527 26.0103 115.24C26.0103 106.336 26.0103 97.4323 26.0103 88.5287C26.0103 81.2299 26.0103 73.93 26.0103 66.6312C26.0103 61.1698 26.0103 55.7071 26.0103 50.2456C26.0103 46.8094 26.0103 43.3744 26.0103 39.9382C26.0103 38.7298 25.9863 37.5189 26.0115 36.3104C26.0881 32.4694 28.2546 28.9063 31.6941 27.1553C33.7133 26.1276 35.8043 26.0222 38.0019 26.0222C41.5061 26.0222 45.0115 26.0222 48.5157 26.0222C54.9049 26.0222 61.2941 26.0222 67.6833 26.0222C76.4917 26.0222 85.3001 26.0222 94.1096 26.0222C104.872 26.0222 115.635 26.0222 126.398 26.0222C138.651 26.0222 150.904 26.0222 163.155 26.0222C176.432 26.0222 189.708 26.0222 202.986 26.0222C216.822 26.0222 230.658 26.0222 244.495 26.0222C258.386 26.0222 272.277 26.0222 286.168 26.0222C299.73 26.0222 313.291 26.0222 326.853 26.0222C339.545 26.0222 352.238 26.0222 364.931 26.0222C376.363 26.0222 387.796 26.0222 399.228 26.0222C408.897 26.0222 418.566 26.0222 428.235 26.0222C435.676 26.0222 443.116 26.0222 450.557 26.0222C455.304 26.0222 460.053 26.0222 464.8 26.0222C466.524 26.0222 468.26 25.9612 469.983 26.0306C473.828 26.1863 477.355 28.5146 478.993 31.9999C479.845 33.8132 479.981 35.69 479.981 37.6447C479.981 40.1814 479.981 42.7181 479.981 45.2548C479.981 49.9258 479.981 54.598 479.981 59.269C479.981 65.8336 479.981 72.3981 479.981 78.9615C479.981 87.21 479.981 95.4597 479.981 103.708C479.981 113.453 479.981 123.197 479.981 132.942C479.981 143.94 479.981 154.938 479.981 165.937C479.981 177.969 479.981 190 479.981 202.032C479.981 214.876 479.981 227.721 479.981 240.565C479.981 254.002 479.981 267.439 479.981 280.875C479.981 294.683 479.981 308.491 479.981 322.301C479.981 336.26 479.981 350.22 479.981 364.179C479.981 378.07 479.981 391.96 479.981 405.85C479.981 419.451 479.981 433.051 479.981 446.652C479.981 459.742 479.981 472.833 479.981 485.922C479.981 498.248 479.981 510.573 479.981 522.897C479.981 534.278 479.981 545.657 479.981 557.038C479.981 567.282 479.981 577.524 479.981 587.768C479.981 596.62 479.981 605.472 479.981 614.325C479.981 621.565 479.981 628.806 479.981 636.046C479.981 641.455 479.981 646.862 479.981 652.271C479.981 655.627 479.981 658.982 479.981 662.338C479.981 663.594 480.031 664.861 479.968 666.116C479.774 669.962 477.392 673.469 473.885 675.064C471.9 675.967 469.872 675.997 467.752 675.997C464.124 675.997 460.495 675.997 456.865 675.997C450.37 675.997 443.876 675.997 437.38 675.997C428.513 675.997 419.646 675.997 410.778 675.997C399.984 675.997 389.191 675.997 378.397 675.997C366.101 675.997 353.806 675.997 341.511 675.997C328.206 675.997 314.903 675.997 301.599 675.997C287.753 675.997 273.905 675.997 260.058 675.997C246.132 675.997 232.207 675.997 218.282 675.997C204.743 675.997 191.204 675.997 177.665 675.997C164.978 675.997 152.29 675.997 139.603 675.997C128.233 675.997 116.862 675.997 105.492 675.997C95.9025 675.997 86.3144 675.997 76.7252 675.997C69.3827 675.997 62.0414 675.997 54.6989 675.997C50.069 675.997 45.4378 675.997 40.8079 675.997C39.3432 675.997 37.8774 675.997 36.4127 675.997Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='456' height='652' viewBox='0 0 456 652' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M11.4127 651C7.58516 650.998 3.98396 648.824 2.20312 645.433C1.22348 643.567 1.01031 641.598 1.01031 639.539C1.01031 637.092 1.01031 634.646 1.01031 632.199C1.01031 627.608 1.01031 623.018 1.01031 618.428C1.01031 611.914 1.01031 605.401 1.01031 598.887C1.01031 590.671 1.01031 582.456 1.01031 574.24C1.01031 564.542 1.01031 554.844 1.01031 545.147C1.01031 534.188 1.01031 523.229 1.01031 512.27C1.01031 500.27 1.01031 488.271 1.01031 476.271C1.01031 463.488 1.01031 450.706 1.01031 437.923C1.01031 424.504 1.01031 411.085 1.01031 397.667C1.01031 383.908 1.01031 370.149 1.01031 356.391C1.01031 342.433 1.01031 328.475 1.01031 314.518C1.01031 300.621 1.01031 286.723 1.01031 272.826C1.01031 259.209 1.01031 245.593 1.01031 231.977C1.01031 218.863 1.01031 205.748 1.01031 192.633C1.01031 180.241 1.01031 167.848 1.01031 155.454C1.01031 144.004 1.01031 132.554 1.01031 121.103C1.01031 110.816 1.01031 100.529 1.01031 90.2422C1.01031 81.3386 1.01031 72.4349 1.01031 63.5313C1.01031 56.2325 1.01031 48.9326 1.01031 41.6338C1.01031 36.1724 1.01031 30.7097 1.01031 25.2482C1.01031 21.812 1.01031 18.377 1.01031 14.9408C1.01031 13.7324 0.986344 12.5215 1.01149 11.313C1.08814 7.47201 3.25462 3.90887 6.69414 2.15784C8.7133 1.13022 10.8043 1.02483 13.0019 1.02483C16.5061 1.02483 20.0115 1.02483 23.5157 1.02483C29.9049 1.02483 36.2941 1.02483 42.6833 1.02483C51.4917 1.02483 60.3001 1.02483 69.1096 1.02483C79.8725 1.02483 90.6354 1.02483 101.398 1.02483C113.651 1.02483 125.904 1.02483 138.155 1.02483C151.432 1.02483 164.708 1.02483 177.986 1.02483C191.822 1.02483 205.658 1.02483 219.495 1.02483C233.386 1.02483 247.277 1.02483 261.168 1.02483C274.73 1.02483 288.291 1.02483 301.853 1.02483C314.545 1.02483 327.238 1.02483 339.931 1.02483C351.363 1.02483 362.796 1.02483 374.228 1.02483C383.897 1.02483 393.566 1.02483 403.235 1.02483C410.676 1.02483 418.116 1.02483 425.557 1.02483C430.304 1.02483 435.053 1.02483 439.8 1.02483C441.524 1.02483 443.26 0.963741 444.983 1.03321C448.828 1.18891 452.355 3.51722 453.993 7.00251C454.845 8.81582 454.981 10.6926 454.981 12.6472C454.981 15.184 454.981 17.7207 454.981 20.2574C454.981 24.9284 454.981 29.6006 454.981 34.2716C454.981 40.8362 454.981 47.4007 454.981 53.9641C454.981 62.2126 454.981 70.4623 454.981 78.7108C454.981 88.4553 454.981 98.1997 454.981 107.944C454.981 118.943 454.981 129.941 454.981 140.939C454.981 152.971 454.981 165.002 454.981 177.034C454.981 189.878 454.981 202.724 454.981 215.568C454.981 229.005 454.981 242.442 454.981 255.877C454.981 269.686 454.981 283.494 454.981 297.303C454.981 311.262 454.981 325.223 454.981 339.182C454.981 353.073 454.981 366.962 454.981 380.853C454.981 394.454 454.981 408.054 454.981 421.655C454.981 434.744 454.981 447.835 454.981 460.925C454.981 473.25 454.981 485.576 454.981 497.9C454.981 509.281 454.981 520.66 454.981 532.04C454.981 542.284 454.981 552.527 454.981 562.771C454.981 571.623 454.981 580.475 454.981 589.327C454.981 596.567 454.981 603.808 454.981 611.049C454.981 616.457 454.981 621.865 454.981 627.274C454.981 630.63 454.981 633.984 454.981 637.34C454.981 638.597 455.031 639.864 454.968 641.119C454.774 644.965 452.392 648.472 448.885 650.067C446.9 650.97 444.872 651 442.752 651C439.124 651 435.495 651 431.865 651C425.37 651 418.876 651 412.38 651C403.513 651 394.646 651 385.778 651C374.984 651 364.191 651 353.397 651C341.101 651 328.806 651 316.511 651C303.206 651 289.903 651 276.599 651C262.753 651 248.905 651 235.058 651C221.132 651 207.207 651 193.282 651C179.743 651 166.204 651 152.665 651C139.978 651 127.29 651 114.603 651C103.233 651 91.8617 651 80.4917 651C70.9025 651 61.3144 651 51.7252 651C44.3827 651 37.0414 651 29.6989 651C25.069 651 20.4378 651 15.8079 651C14.3432 651 12.8774 651 11.4127 651Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "iPad 9.7\u2033",
          deviceWidth: 480,
          deviceHeight: 680,
          borderlessWidth: 422,
          borderlessHeight: 564,
          cornerRadius: 27,
          cornerRadiusBorderless: 5,
          deviceSVG: "<svg width='482' height='682' viewBox='0 0 482 682' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M26.1793 680.999C18.2001 680.987 10.5433 677.106 5.8384 670.651C2.59779 666.204 1.01309 660.886 1.00403 655.408C1.00014 653.4 1.00403 651.393 1.00403 649.386C1.00403 645.165 1.00403 640.942 1.00403 636.72C1.00403 630.506 1.00403 624.291 1.00403 618.077C1.00403 610.095 1.00403 602.114 1.00403 594.132C1.00403 584.609 1.00403 575.085 1.00403 565.562C1.00403 554.721 1.00403 543.881 1.00403 533.04C1.00403 521.107 1.00403 509.174 1.00403 497.243C1.00403 484.443 1.00403 471.644 1.00403 458.844C1.00403 445.361 1.00403 431.877 1.00403 418.394C1.00403 404.535 1.00403 390.676 1.00403 376.815C1.00403 362.722 1.00403 348.628 1.00403 334.535C1.00403 320.519 1.00403 306.502 1.00403 292.486C1.00403 278.729 1.00403 264.972 1.00403 251.215C1.00403 237.943 1.00403 224.671 1.00403 211.398C1.00403 198.836 1.00403 186.273 1.00403 173.711C1.00403 162.082 1.00403 150.455 1.00403 138.827C1.00403 128.359 1.00403 117.89 1.00403 107.422C1.00403 98.3388 1.00403 89.2544 1.00403 80.1713C1.00403 72.6776 1.00403 65.1827 1.00403 57.689C1.00403 52.0554 1.00403 46.4232 1.00403 40.7896C1.00403 37.2092 1.00403 33.6288 1.00403 30.0485C1.00403 28.7686 0.994965 27.4888 1.00403 26.209C1.06099 18.4368 4.64987 11.0014 10.8243 6.24611C15.3945 2.7279 20.9384 1.02578 26.6713 1.01931C29.4471 1.01542 32.2229 1.01931 34.9975 1.01931C40.8301 1.01931 46.664 1.01931 52.4965 1.01931C60.9043 1.01931 69.312 1.01931 77.7197 1.01931C88.2197 1.01931 98.7197 1.01931 109.22 1.01931C121.368 1.01931 133.516 1.01931 145.665 1.01931C158.903 1.01931 172.143 1.01931 185.381 1.01931C199.306 1.01931 213.23 1.01931 227.154 1.01931C241.195 1.01931 255.236 1.01931 269.277 1.01931C282.995 1.01931 296.711 1.01931 310.428 1.01931C323.337 1.01931 336.248 1.01931 349.157 1.01931C360.777 1.01931 372.397 1.01931 384.018 1.01931C393.866 1.01931 403.714 1.01931 413.562 1.01931C421.155 1.01931 428.747 1.01931 436.341 1.01931C441.196 1.01931 446.051 1.01931 450.906 1.01931C452.849 1.01931 454.802 0.966198 456.744 1.03615C464.693 1.3276 472.197 5.48962 476.659 12.0778C479.603 16.4251 480.987 21.49 480.993 26.7116C480.996 28.8023 480.993 30.893 480.993 32.9838C480.993 37.2831 480.993 41.5824 480.993 45.8817C480.993 52.1655 480.993 58.448 480.993 64.7319C480.993 72.7735 480.993 80.8164 480.993 88.8581C480.993 98.4347 480.993 108.01 480.993 117.587C480.993 128.472 480.993 139.357 480.993 150.242C480.993 162.209 480.993 174.179 480.993 186.147C480.993 199.015 480.993 211.882 480.993 224.75C480.993 238.212 480.993 251.675 480.993 265.137C480.993 279.05 480.993 292.964 480.993 306.877C480.993 320.931 480.993 334.984 480.993 349.037C480.993 363.048 480.993 377.059 480.993 391.069C480.993 404.812 480.993 418.556 480.993 432.298C480.993 445.549 480.993 458.799 480.993 472.049C480.993 484.582 480.993 497.113 480.993 509.646C480.993 521.236 480.993 532.824 480.993 544.414C480.993 554.835 480.993 565.256 480.993 575.677C480.993 584.73 480.993 593.785 480.993 602.838C480.993 610.244 480.993 617.648 480.993 625.054C480.993 630.629 480.993 636.204 480.993 641.78C480.993 645.266 480.993 648.751 480.993 652.237C480.993 653.535 481.01 654.836 480.991 656.134C480.872 664.081 476.94 671.659 470.475 676.291C465.985 679.507 460.685 680.998 455.199 680.999C452.303 681.001 449.405 680.999 446.509 680.999C440.573 680.999 434.637 680.999 428.701 680.999C420.207 680.999 411.714 680.999 403.221 680.999C392.619 680.999 382.015 680.999 371.413 680.999C359.249 680.999 347.086 680.999 334.923 680.999C321.61 680.999 308.298 680.999 294.985 680.999C281.087 680.999 267.192 680.999 253.294 680.999C239.257 680.999 225.219 680.999 211.182 680.999C197.487 680.999 183.791 680.999 170.095 680.999C157.224 680.999 144.354 680.999 131.482 680.999C119.919 680.999 108.355 680.999 96.7919 680.999C87.0182 680.999 77.2446 680.999 67.4722 680.999C59.9721 680.999 52.4707 680.999 44.9705 680.999C40.2151 680.999 35.4597 680.999 30.7056 680.999C29.1947 680.999 27.6863 680.999 26.1793 680.999Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M34.5909 622.977C31.9544 622.962 31.0023 620.693 31.0023 618.458C31.0023 616.365 31.0023 614.272 31.0023 612.179C31.0023 608.259 31.0023 604.34 31.0023 600.42C31.0023 594.86 31.0023 589.297 31.0023 583.736C31.0023 576.717 31.0023 569.697 31.0023 562.677C31.0023 554.384 31.0023 546.089 31.0023 537.796C31.0023 528.412 31.0023 519.029 31.0023 509.645C31.0023 499.355 31.0023 489.066 31.0023 478.776C31.0023 467.764 31.0023 456.753 31.0023 445.741C31.0023 434.191 31.0023 422.642 31.0023 411.093C31.0023 399.19 31.0023 387.287 31.0023 375.384C31.0023 363.312 31.0023 351.239 31.0023 339.166C31.0023 327.109 31.0023 315.05 31.0023 302.992C31.0023 291.132 31.0023 279.273 31.0023 267.414C31.0023 255.936 31.0023 244.459 31.0023 232.982C31.0023 222.072 31.0023 211.161 31.0023 200.252C31.0023 190.092 31.0023 179.933 31.0023 169.773C31.0023 160.549 31.0023 151.323 31.0023 142.099C31.0023 133.994 31.0023 125.888 31.0023 117.781C31.0023 110.979 31.0023 104.176 31.0023 97.3732C31.0023 92.0572 31.0023 86.7413 31.0023 81.4266C31.0023 77.7815 31.0023 74.1378 31.0023 70.4927C31.0023 68.7039 30.9971 66.9137 31.0023 65.1249C31.0088 62.8902 32.3445 61.1324 34.6943 61.0585C36.4679 61.0028 38.2519 61.0585 40.0255 61.0585C44.2355 61.0585 48.4454 61.0585 52.6554 61.0585C58.971 61.0585 65.2866 61.0585 71.6022 61.0585C79.694 61.0585 87.7858 61.0585 95.8789 61.0585C105.419 61.0585 114.959 61.0585 124.499 61.0585C135.157 61.0585 145.815 61.0585 156.473 61.0585C167.921 61.0585 179.369 61.0585 190.817 61.0585C202.726 61.0585 214.634 61.0585 226.543 61.0585C238.582 61.0585 250.623 61.0585 262.663 61.0585C274.506 61.0585 286.348 61.0585 298.191 61.0585C309.507 61.0585 320.823 61.0585 332.139 61.0585C342.6 61.0585 353.061 61.0585 363.522 61.0585C372.799 61.0585 382.075 61.0585 391.351 61.0585C399.115 61.0585 406.878 61.0585 414.641 61.0585C420.562 61.0585 426.483 61.0585 432.403 61.0585C436.152 61.0585 439.902 61.0585 443.651 61.0585C445.022 61.0585 446.485 60.9095 447.851 61.0871C450.35 61.4098 450.994 63.5927 450.994 65.7147C450.994 67.8833 450.994 70.0507 450.994 72.2193C450.994 76.2066 450.994 80.1939 450.994 84.1812C450.994 89.803 450.994 95.4262 450.994 101.048C450.994 108.122 450.994 115.194 450.994 122.268C450.994 130.608 450.994 138.948 450.994 147.288C450.994 156.711 450.994 166.134 450.994 175.557C450.994 185.879 450.994 196.2 450.994 206.522C450.994 217.558 450.994 228.595 450.994 239.631C450.994 251.197 450.994 262.764 450.994 274.33C450.994 286.243 450.994 298.157 450.994 310.069C450.994 322.145 450.994 334.22 450.994 346.296C450.994 358.35 450.994 370.404 450.994 382.458C450.994 394.305 450.994 406.153 450.994 418.002C450.994 429.46 450.994 440.919 450.994 452.376C450.994 463.261 450.994 474.144 450.994 485.029C450.994 495.155 450.994 505.282 450.994 515.408C450.994 524.592 450.994 533.776 450.994 542.961C450.994 551.019 450.994 559.078 450.994 567.135C450.994 573.884 450.994 580.631 450.994 587.379C450.994 592.633 450.994 597.886 450.994 603.139C450.994 606.714 450.994 610.289 450.994 613.864C450.994 615.576 451.008 617.29 450.994 619.002C450.974 621.249 449.556 622.921 447.244 622.979C445.378 623.026 443.505 622.979 441.64 622.979C437.349 622.979 433.058 622.979 428.767 622.979C422.383 622.979 415.998 622.979 409.614 622.979C401.464 622.979 393.315 622.979 385.165 622.979C375.58 622.979 365.995 622.979 356.41 622.979C345.717 622.979 335.025 622.979 324.333 622.979C312.863 622.979 301.393 622.979 289.924 622.979C278.004 622.979 266.086 622.979 254.167 622.979C242.086 622.979 230.004 622.979 217.923 622.979C206.095 622.979 194.266 622.979 182.438 622.979C171.149 622.979 159.86 622.979 148.571 622.979C138.15 622.979 127.731 622.979 117.31 622.979C108.086 622.979 98.863 622.979 89.6395 622.979C81.943 622.979 74.2452 622.979 66.5487 622.979C60.7072 622.979 54.8657 622.979 49.0242 622.979C45.3671 622.979 41.71 622.979 38.0516 622.979C36.8955 622.977 35.7432 622.977 34.5909 622.977Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M255 651.995C254.987 646.14 251.229 640.778 245.709 638.803C240.2 636.831 233.87 638.578 230.156 643.102C226.442 647.627 225.956 654.171 228.963 659.193C231.971 664.215 237.971 666.878 243.713 665.739C249.434 664.604 253.951 659.884 254.838 654.12C254.945 653.417 254.999 652.707 255 651.995Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVG: "<svg width='422' height='564' viewBox='0 0 422 564' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M4.59091 562.977C1.95435 562.962 1.0023 560.693 1.0023 558.458C1.0023 556.365 1.0023 554.272 1.0023 552.179C1.0023 548.259 1.0023 544.34 1.0023 540.42C1.0023 534.86 1.0023 529.297 1.0023 523.736C1.0023 516.717 1.0023 509.697 1.0023 502.677C1.0023 494.384 1.0023 486.089 1.0023 477.796C1.0023 468.412 1.0023 459.029 1.0023 449.645C1.0023 439.355 1.0023 429.066 1.0023 418.776C1.0023 407.764 1.0023 396.753 1.0023 385.741C1.0023 374.191 1.0023 362.642 1.0023 351.093C1.0023 339.19 1.0023 327.287 1.0023 315.384C1.0023 303.312 1.0023 291.239 1.0023 279.166C1.0023 267.109 1.0023 255.05 1.0023 242.992C1.0023 231.132 1.0023 219.273 1.0023 207.414C1.0023 195.936 1.0023 184.459 1.0023 172.982C1.0023 162.072 1.0023 151.161 1.0023 140.252C1.0023 130.092 1.0023 119.933 1.0023 109.773C1.0023 100.549 1.0023 91.3234 1.0023 82.0992C1.0023 73.9937 1.0023 65.8882 1.0023 57.7814C1.0023 50.9787 1.0023 44.1759 1.0023 37.3732C1.0023 32.0572 1.0023 26.7413 1.0023 21.4266C1.0023 17.7815 1.0023 14.1378 1.0023 10.4927C1.0023 8.70387 0.997129 6.91375 1.0023 5.12491C1.00876 2.89017 2.34448 1.13243 4.69425 1.05855C6.46789 1.00281 8.25186 1.05855 10.0255 1.05855C14.2355 1.05855 18.4454 1.05855 22.6554 1.05855C28.971 1.05855 35.2866 1.05855 41.6022 1.05855C49.694 1.05855 57.7858 1.05855 65.8789 1.05855C75.4188 1.05855 84.9587 1.05855 94.4986 1.05855C105.157 1.05855 115.815 1.05855 126.473 1.05855C137.921 1.05855 149.369 1.05855 160.817 1.05855C172.726 1.05855 184.634 1.05855 196.543 1.05855C208.582 1.05855 220.623 1.05855 232.663 1.05855C244.506 1.05855 256.348 1.05855 268.191 1.05855C279.507 1.05855 290.823 1.05855 302.139 1.05855C312.6 1.05855 323.061 1.05855 333.522 1.05855C342.799 1.05855 352.075 1.05855 361.351 1.05855C369.115 1.05855 376.878 1.05855 384.641 1.05855C390.562 1.05855 396.483 1.05855 402.403 1.05855C406.152 1.05855 409.902 1.05855 413.651 1.05855C415.022 1.05855 416.485 0.90948 417.851 1.08707C420.35 1.40983 420.994 3.59274 420.994 5.71471C420.994 7.88335 420.994 10.0507 420.994 12.2193C420.994 16.2066 420.994 20.1939 420.994 24.1812C420.994 29.803 420.994 35.4262 420.994 41.0481C420.994 48.1217 420.994 55.1941 420.994 62.2678C420.994 70.6079 420.994 78.948 420.994 87.2881C420.994 96.7106 420.994 106.134 420.994 115.557C420.994 125.879 420.994 136.2 420.994 146.522C420.994 157.558 420.994 168.595 420.994 179.631C420.994 191.197 420.994 202.764 420.994 214.33C420.994 226.243 420.994 238.157 420.994 250.069C420.994 262.145 420.994 274.22 420.994 286.296C420.994 298.35 420.994 310.404 420.994 322.458C420.994 334.305 420.994 346.153 420.994 358.002C420.994 369.46 420.994 380.919 420.994 392.376C420.994 403.261 420.994 414.144 420.994 425.029C420.994 435.155 420.994 445.282 420.994 455.408C420.994 464.592 420.994 473.776 420.994 482.961C420.994 491.019 420.994 499.078 420.994 507.135C420.994 513.884 420.994 520.631 420.994 527.379C420.994 532.633 420.994 537.886 420.994 543.139C420.994 546.714 420.994 550.289 420.994 553.864C420.994 555.576 421.008 557.29 420.994 559.002C420.974 561.249 419.556 562.921 417.244 562.979C415.378 563.026 413.505 562.979 411.64 562.979C407.349 562.979 403.058 562.979 398.767 562.979C392.383 562.979 385.998 562.979 379.614 562.979C371.464 562.979 363.315 562.979 355.165 562.979C345.58 562.979 335.995 562.979 326.41 562.979C315.717 562.979 305.025 562.979 294.333 562.979C282.863 562.979 271.393 562.979 259.924 562.979C248.004 562.979 236.086 562.979 224.167 562.979C212.086 562.979 200.004 562.979 187.923 562.979C176.095 562.979 164.266 562.979 152.438 562.979C141.149 562.979 129.86 562.979 118.571 562.979C108.15 562.979 97.7307 562.979 87.3098 562.979C78.0864 562.979 68.863 562.979 59.6395 562.979C51.943 562.979 44.2452 562.979 36.5487 562.979C30.7072 562.979 24.8657 562.979 19.0242 562.979C15.3671 562.979 11.71 562.979 8.05163 562.979C6.89547 562.977 5.74319 562.977 4.59091 562.977Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          deviceSVGWhite: "<svg width='482' height='682' viewBox='0 0 482 682' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M26.1793 680.999C18.2001 680.987 10.5433 677.106 5.8384 670.651C2.59779 666.204 1.01309 660.886 1.00403 655.408C1.00014 653.4 1.00403 651.393 1.00403 649.386C1.00403 645.165 1.00403 640.942 1.00403 636.72C1.00403 630.506 1.00403 624.291 1.00403 618.077C1.00403 610.095 1.00403 602.114 1.00403 594.132C1.00403 584.609 1.00403 575.085 1.00403 565.562C1.00403 554.721 1.00403 543.881 1.00403 533.04C1.00403 521.107 1.00403 509.174 1.00403 497.243C1.00403 484.443 1.00403 471.644 1.00403 458.844C1.00403 445.361 1.00403 431.877 1.00403 418.394C1.00403 404.535 1.00403 390.676 1.00403 376.815C1.00403 362.722 1.00403 348.628 1.00403 334.535C1.00403 320.519 1.00403 306.502 1.00403 292.486C1.00403 278.729 1.00403 264.972 1.00403 251.215C1.00403 237.943 1.00403 224.671 1.00403 211.398C1.00403 198.836 1.00403 186.273 1.00403 173.711C1.00403 162.082 1.00403 150.455 1.00403 138.827C1.00403 128.359 1.00403 117.89 1.00403 107.422C1.00403 98.3388 1.00403 89.2544 1.00403 80.1713C1.00403 72.6776 1.00403 65.1827 1.00403 57.689C1.00403 52.0554 1.00403 46.4232 1.00403 40.7896C1.00403 37.2092 1.00403 33.6288 1.00403 30.0485C1.00403 28.7686 0.994965 27.4888 1.00403 26.209C1.06099 18.4368 4.64987 11.0014 10.8243 6.24611C15.3945 2.7279 20.9384 1.02578 26.6713 1.01931C29.4471 1.01542 32.2229 1.01931 34.9975 1.01931C40.8301 1.01931 46.664 1.01931 52.4965 1.01931C60.9043 1.01931 69.312 1.01931 77.7197 1.01931C88.2197 1.01931 98.7197 1.01931 109.22 1.01931C121.368 1.01931 133.516 1.01931 145.665 1.01931C158.903 1.01931 172.143 1.01931 185.381 1.01931C199.306 1.01931 213.23 1.01931 227.154 1.01931C241.195 1.01931 255.236 1.01931 269.277 1.01931C282.995 1.01931 296.711 1.01931 310.428 1.01931C323.337 1.01931 336.248 1.01931 349.157 1.01931C360.777 1.01931 372.397 1.01931 384.018 1.01931C393.866 1.01931 403.714 1.01931 413.562 1.01931C421.155 1.01931 428.747 1.01931 436.341 1.01931C441.196 1.01931 446.051 1.01931 450.906 1.01931C452.849 1.01931 454.802 0.966198 456.744 1.03615C464.693 1.3276 472.197 5.48962 476.659 12.0778C479.603 16.4251 480.987 21.49 480.993 26.7116C480.996 28.8023 480.993 30.893 480.993 32.9838C480.993 37.2831 480.993 41.5824 480.993 45.8817C480.993 52.1655 480.993 58.448 480.993 64.7319C480.993 72.7735 480.993 80.8164 480.993 88.8581C480.993 98.4347 480.993 108.01 480.993 117.587C480.993 128.472 480.993 139.357 480.993 150.242C480.993 162.209 480.993 174.179 480.993 186.147C480.993 199.015 480.993 211.882 480.993 224.75C480.993 238.212 480.993 251.675 480.993 265.137C480.993 279.05 480.993 292.964 480.993 306.877C480.993 320.931 480.993 334.984 480.993 349.037C480.993 363.048 480.993 377.059 480.993 391.069C480.993 404.812 480.993 418.556 480.993 432.298C480.993 445.549 480.993 458.799 480.993 472.049C480.993 484.582 480.993 497.113 480.993 509.646C480.993 521.236 480.993 532.824 480.993 544.414C480.993 554.835 480.993 565.256 480.993 575.677C480.993 584.73 480.993 593.785 480.993 602.838C480.993 610.244 480.993 617.648 480.993 625.054C480.993 630.629 480.993 636.204 480.993 641.78C480.993 645.266 480.993 648.751 480.993 652.237C480.993 653.535 481.01 654.836 480.991 656.134C480.872 664.081 476.94 671.659 470.475 676.291C465.985 679.507 460.685 680.998 455.199 680.999C452.303 681.001 449.405 680.999 446.509 680.999C440.573 680.999 434.637 680.999 428.701 680.999C420.207 680.999 411.714 680.999 403.221 680.999C392.619 680.999 382.015 680.999 371.413 680.999C359.249 680.999 347.086 680.999 334.923 680.999C321.61 680.999 308.298 680.999 294.985 680.999C281.087 680.999 267.192 680.999 253.294 680.999C239.257 680.999 225.219 680.999 211.182 680.999C197.487 680.999 183.791 680.999 170.095 680.999C157.224 680.999 144.354 680.999 131.482 680.999C119.919 680.999 108.355 680.999 96.7919 680.999C87.0182 680.999 77.2446 680.999 67.4722 680.999C59.9721 680.999 52.4707 680.999 44.9705 680.999C40.2151 680.999 35.4597 680.999 30.7056 680.999C29.1947 680.999 27.6863 680.999 26.1793 680.999Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M34.5909 622.977C31.9544 622.962 31.0023 620.693 31.0023 618.458C31.0023 616.365 31.0023 614.272 31.0023 612.179C31.0023 608.259 31.0023 604.34 31.0023 600.42C31.0023 594.86 31.0023 589.297 31.0023 583.736C31.0023 576.717 31.0023 569.697 31.0023 562.677C31.0023 554.384 31.0023 546.089 31.0023 537.796C31.0023 528.412 31.0023 519.029 31.0023 509.645C31.0023 499.355 31.0023 489.066 31.0023 478.776C31.0023 467.764 31.0023 456.753 31.0023 445.741C31.0023 434.191 31.0023 422.642 31.0023 411.093C31.0023 399.19 31.0023 387.287 31.0023 375.384C31.0023 363.312 31.0023 351.239 31.0023 339.166C31.0023 327.109 31.0023 315.05 31.0023 302.992C31.0023 291.132 31.0023 279.273 31.0023 267.414C31.0023 255.936 31.0023 244.459 31.0023 232.982C31.0023 222.072 31.0023 211.161 31.0023 200.252C31.0023 190.092 31.0023 179.933 31.0023 169.773C31.0023 160.549 31.0023 151.323 31.0023 142.099C31.0023 133.994 31.0023 125.888 31.0023 117.781C31.0023 110.979 31.0023 104.176 31.0023 97.3732C31.0023 92.0572 31.0023 86.7413 31.0023 81.4266C31.0023 77.7815 31.0023 74.1378 31.0023 70.4927C31.0023 68.7039 30.9971 66.9137 31.0023 65.1249C31.0088 62.8902 32.3445 61.1324 34.6943 61.0585C36.4679 61.0028 38.2519 61.0585 40.0255 61.0585C44.2355 61.0585 48.4454 61.0585 52.6554 61.0585C58.971 61.0585 65.2866 61.0585 71.6022 61.0585C79.694 61.0585 87.7858 61.0585 95.8789 61.0585C105.419 61.0585 114.959 61.0585 124.499 61.0585C135.157 61.0585 145.815 61.0585 156.473 61.0585C167.921 61.0585 179.369 61.0585 190.817 61.0585C202.726 61.0585 214.634 61.0585 226.543 61.0585C238.582 61.0585 250.623 61.0585 262.663 61.0585C274.506 61.0585 286.348 61.0585 298.191 61.0585C309.507 61.0585 320.823 61.0585 332.139 61.0585C342.6 61.0585 353.061 61.0585 363.522 61.0585C372.799 61.0585 382.075 61.0585 391.351 61.0585C399.115 61.0585 406.878 61.0585 414.641 61.0585C420.562 61.0585 426.483 61.0585 432.403 61.0585C436.152 61.0585 439.902 61.0585 443.651 61.0585C445.022 61.0585 446.485 60.9095 447.851 61.0871C450.35 61.4098 450.994 63.5927 450.994 65.7147C450.994 67.8833 450.994 70.0507 450.994 72.2193C450.994 76.2066 450.994 80.1939 450.994 84.1812C450.994 89.803 450.994 95.4262 450.994 101.048C450.994 108.122 450.994 115.194 450.994 122.268C450.994 130.608 450.994 138.948 450.994 147.288C450.994 156.711 450.994 166.134 450.994 175.557C450.994 185.879 450.994 196.2 450.994 206.522C450.994 217.558 450.994 228.595 450.994 239.631C450.994 251.197 450.994 262.764 450.994 274.33C450.994 286.243 450.994 298.157 450.994 310.069C450.994 322.145 450.994 334.22 450.994 346.296C450.994 358.35 450.994 370.404 450.994 382.458C450.994 394.305 450.994 406.153 450.994 418.002C450.994 429.46 450.994 440.919 450.994 452.376C450.994 463.261 450.994 474.144 450.994 485.029C450.994 495.155 450.994 505.282 450.994 515.408C450.994 524.592 450.994 533.776 450.994 542.961C450.994 551.019 450.994 559.078 450.994 567.135C450.994 573.884 450.994 580.631 450.994 587.379C450.994 592.633 450.994 597.886 450.994 603.139C450.994 606.714 450.994 610.289 450.994 613.864C450.994 615.576 451.008 617.29 450.994 619.002C450.974 621.249 449.556 622.921 447.244 622.979C445.378 623.026 443.505 622.979 441.64 622.979C437.349 622.979 433.058 622.979 428.767 622.979C422.383 622.979 415.998 622.979 409.614 622.979C401.464 622.979 393.315 622.979 385.165 622.979C375.58 622.979 365.995 622.979 356.41 622.979C345.717 622.979 335.025 622.979 324.333 622.979C312.863 622.979 301.393 622.979 289.924 622.979C278.004 622.979 266.086 622.979 254.167 622.979C242.086 622.979 230.004 622.979 217.923 622.979C206.095 622.979 194.266 622.979 182.438 622.979C171.149 622.979 159.86 622.979 148.571 622.979C138.15 622.979 127.731 622.979 117.31 622.979C108.086 622.979 98.863 622.979 89.6395 622.979C81.943 622.979 74.2452 622.979 66.5487 622.979C60.7072 622.979 54.8657 622.979 49.0242 622.979C45.3671 622.979 41.71 622.979 38.0516 622.979C36.8955 622.977 35.7432 622.977 34.5909 622.977Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M255 651.995C254.987 646.14 251.229 640.778 245.709 638.803C240.2 636.831 233.87 638.578 230.156 643.102C226.442 647.627 225.956 654.171 228.963 659.193C231.971 664.215 237.971 666.878 243.713 665.739C249.434 664.604 253.951 659.884 254.838 654.12C254.945 653.417 254.999 652.707 255 651.995Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
          borderlessSVGWhite: "<svg width='422' height='564' viewBox='0 0 422 564' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M4.59091 562.977C1.95435 562.962 1.0023 560.693 1.0023 558.458C1.0023 556.365 1.0023 554.272 1.0023 552.179C1.0023 548.259 1.0023 544.34 1.0023 540.42C1.0023 534.86 1.0023 529.297 1.0023 523.736C1.0023 516.717 1.0023 509.697 1.0023 502.677C1.0023 494.384 1.0023 486.089 1.0023 477.796C1.0023 468.412 1.0023 459.029 1.0023 449.645C1.0023 439.355 1.0023 429.066 1.0023 418.776C1.0023 407.764 1.0023 396.753 1.0023 385.741C1.0023 374.191 1.0023 362.642 1.0023 351.093C1.0023 339.19 1.0023 327.287 1.0023 315.384C1.0023 303.312 1.0023 291.239 1.0023 279.166C1.0023 267.109 1.0023 255.05 1.0023 242.992C1.0023 231.132 1.0023 219.273 1.0023 207.414C1.0023 195.936 1.0023 184.459 1.0023 172.982C1.0023 162.072 1.0023 151.161 1.0023 140.252C1.0023 130.092 1.0023 119.933 1.0023 109.773C1.0023 100.549 1.0023 91.3234 1.0023 82.0992C1.0023 73.9937 1.0023 65.8882 1.0023 57.7814C1.0023 50.9787 1.0023 44.1759 1.0023 37.3732C1.0023 32.0572 1.0023 26.7413 1.0023 21.4266C1.0023 17.7815 1.0023 14.1378 1.0023 10.4927C1.0023 8.70387 0.997129 6.91375 1.0023 5.12491C1.00876 2.89017 2.34448 1.13243 4.69425 1.05855C6.46789 1.00281 8.25186 1.05855 10.0255 1.05855C14.2355 1.05855 18.4454 1.05855 22.6554 1.05855C28.971 1.05855 35.2866 1.05855 41.6022 1.05855C49.694 1.05855 57.7858 1.05855 65.8789 1.05855C75.4188 1.05855 84.9587 1.05855 94.4986 1.05855C105.157 1.05855 115.815 1.05855 126.473 1.05855C137.921 1.05855 149.369 1.05855 160.817 1.05855C172.726 1.05855 184.634 1.05855 196.543 1.05855C208.582 1.05855 220.623 1.05855 232.663 1.05855C244.506 1.05855 256.348 1.05855 268.191 1.05855C279.507 1.05855 290.823 1.05855 302.139 1.05855C312.6 1.05855 323.061 1.05855 333.522 1.05855C342.799 1.05855 352.075 1.05855 361.351 1.05855C369.115 1.05855 376.878 1.05855 384.641 1.05855C390.562 1.05855 396.483 1.05855 402.403 1.05855C406.152 1.05855 409.902 1.05855 413.651 1.05855C415.022 1.05855 416.485 0.90948 417.851 1.08707C420.35 1.40983 420.994 3.59274 420.994 5.71471C420.994 7.88335 420.994 10.0507 420.994 12.2193C420.994 16.2066 420.994 20.1939 420.994 24.1812C420.994 29.803 420.994 35.4262 420.994 41.0481C420.994 48.1217 420.994 55.1941 420.994 62.2678C420.994 70.6079 420.994 78.948 420.994 87.2881C420.994 96.7106 420.994 106.134 420.994 115.557C420.994 125.879 420.994 136.2 420.994 146.522C420.994 157.558 420.994 168.595 420.994 179.631C420.994 191.197 420.994 202.764 420.994 214.33C420.994 226.243 420.994 238.157 420.994 250.069C420.994 262.145 420.994 274.22 420.994 286.296C420.994 298.35 420.994 310.404 420.994 322.458C420.994 334.305 420.994 346.153 420.994 358.002C420.994 369.46 420.994 380.919 420.994 392.376C420.994 403.261 420.994 414.144 420.994 425.029C420.994 435.155 420.994 445.282 420.994 455.408C420.994 464.592 420.994 473.776 420.994 482.961C420.994 491.019 420.994 499.078 420.994 507.135C420.994 513.884 420.994 520.631 420.994 527.379C420.994 532.633 420.994 537.886 420.994 543.139C420.994 546.714 420.994 550.289 420.994 553.864C420.994 555.576 421.008 557.29 420.994 559.002C420.974 561.249 419.556 562.921 417.244 562.979C415.378 563.026 413.505 562.979 411.64 562.979C407.349 562.979 403.058 562.979 398.767 562.979C392.383 562.979 385.998 562.979 379.614 562.979C371.464 562.979 363.315 562.979 355.165 562.979C345.58 562.979 335.995 562.979 326.41 562.979C315.717 562.979 305.025 562.979 294.333 562.979C282.863 562.979 271.393 562.979 259.924 562.979C248.004 562.979 236.086 562.979 224.167 562.979C212.086 562.979 200.004 562.979 187.923 562.979C176.095 562.979 164.266 562.979 152.438 562.979C141.149 562.979 129.86 562.979 118.571 562.979C108.15 562.979 97.7307 562.979 87.3098 562.979C78.0864 562.979 68.863 562.979 59.6395 562.979C51.943 562.979 44.2452 562.979 36.5487 562.979C30.7072 562.979 24.8657 562.979 19.0242 562.979C15.3671 562.979 11.71 562.979 8.05163 562.979C6.89547 562.977 5.74319 562.977 4.59091 562.977Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
        },
        {
          name: "Laptop",
          deviceWidth: 989,
          deviceHeight: 691,
          borderlessWidth: 949,
          borderlessHeight: 594,
          cornerRadius: 31,
          cornerRadiusBorderless: 2,
          deviceSVG: "<svg width='991' height='693' viewBox='0 0 991 693' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M2.74977 661.998C1.47971 658.416 1.00221 654.713 1.00221 650.933C1.00221 648.47 1.00221 646.006 1.00221 643.543C1.00221 638.84 1.00221 634.135 1.00221 629.432C1.00221 622.725 1.00221 616.018 1.00221 609.309C1.00221 600.837 1.00221 592.363 1.00221 583.89C1.00221 573.843 1.00221 563.797 1.00221 553.75C1.00221 542.453 1.00221 531.155 1.00221 519.859C1.00221 507.51 1.00221 495.161 1.00221 482.81C1.00221 469.588 1.00221 456.367 1.00221 443.145C1.00221 429.402 1.00221 415.658 1.00221 401.915C1.00221 387.831 1.00221 373.75 1.00221 359.667C1.00221 345.483 1.00221 331.3 1.00221 317.116C1.00221 303.01 1.00221 288.905 1.00221 274.799C1.00221 261.128 1.00221 247.456 1.00221 233.785C1.00221 220.725 1.00221 207.667 1.00221 194.608C1.00221 182.399 1.00221 170.189 1.00221 157.981C1.00221 146.814 1.00221 135.649 1.00221 124.482C1.00221 114.691 1.00221 104.901 1.00221 95.1101C1.00221 86.8828 1.00221 78.6555 1.00221 70.4282C1.00221 63.9795 1.00221 57.5292 1.00221 51.0805C1.00221 46.7019 1.00221 42.3232 1.00221 37.9446C1.00221 35.8431 0.997237 33.7415 1.00221 31.6383C1.01216 26.9616 1.93568 22.3793 3.96512 18.1464C6.93632 11.9528 12.0215 6.89022 18.2259 3.93416C22.3992 1.94689 26.9273 1.02116 31.5366 1.00294C32.9808 0.997976 34.4233 1.00294 35.8674 1.00294C38.9066 1.00294 41.9475 1.00294 44.9866 1.00294C49.538 1.00294 54.0893 1.00294 58.6406 1.00294C64.5581 1.00294 70.4757 1.00294 76.3932 1.00294C83.5874 1.00294 90.78 1.00294 97.9742 1.00294C106.375 1.00294 114.775 1.00294 123.176 1.00294C132.607 1.00294 142.037 1.00294 151.467 1.00294C161.853 1.00294 172.239 1.00294 182.625 1.00294C193.86 1.00294 205.095 1.00294 216.332 1.00294C228.309 1.00294 240.287 1.00294 252.266 1.00294C264.935 1.00294 277.603 1.00294 290.272 1.00294C303.417 1.00294 316.563 1.00294 329.71 1.00294C343.278 1.00294 356.847 1.00294 370.415 1.00294C384.359 1.00294 398.301 1.00294 412.245 1.00294C426.34 1.00294 440.435 1.00294 454.529 1.00294C468.726 1.00294 482.923 1.00294 497.12 1.00294C511.313 1.00294 525.506 1.00294 539.699 1.00294C553.84 1.00294 567.982 1.00294 582.123 1.00294C595.987 1.00294 609.852 1.00294 623.715 1.00294C637.254 1.00294 650.795 1.00294 664.335 1.00294C677.445 1.00294 690.554 1.00294 703.664 1.00294C716.288 1.00294 728.911 1.00294 741.535 1.00294C753.46 1.00294 765.386 1.00294 777.31 1.00294C788.486 1.00294 799.659 1.00294 810.834 1.00294C821.194 1.00294 831.551 1.00294 841.911 1.00294C851.261 1.00294 860.609 1.00294 869.958 1.00294C878.237 1.00294 886.514 1.00294 894.792 1.00294C901.892 1.00294 908.993 1.00294 916.093 1.00294C921.91 1.00294 927.726 1.00294 933.542 1.00294C937.984 1.00294 942.426 1.00294 946.866 1.00294C949.788 1.00294 952.711 1.00294 955.632 1.00294C956.95 1.00294 958.269 0.99632 959.587 1.00294C964.679 1.0311 969.678 2.21186 974.168 4.6413C980.213 7.91367 985.026 13.2329 987.674 19.5723C989.31 23.4922 989.994 27.6324 989.998 31.8619C990 34.1456 989.998 36.4277 989.998 38.7114C989.998 43.2771 989.998 47.8429 989.998 52.4086C989.998 58.9798 989.998 65.5511 989.998 72.124C989.998 80.4788 989.998 88.8336 989.998 97.1867C989.998 107.087 989.998 116.987 989.998 126.886C989.998 138.144 989.998 149.401 989.998 160.658C989.998 172.94 989.998 185.223 989.998 197.504C989.998 210.618 989.998 223.731 989.998 236.845C989.998 250.612 989.998 264.379 989.998 278.146C989.998 292.212 989.998 306.277 989.998 320.344C989.998 334.528 989.998 348.712 989.998 362.896C989.998 376.961 989.998 391.026 989.998 405.091C989.998 418.8 989.998 432.507 989.998 446.216C989.998 459.383 989.998 472.55 989.998 485.719C989.998 497.997 989.998 510.275 989.998 522.553C989.998 533.762 989.998 544.968 989.998 556.176C989.998 566.114 989.998 576.054 989.998 585.992C989.998 594.338 989.998 602.687 989.998 611.035C989.998 617.598 989.998 624.162 989.998 630.725C989.998 635.281 989.998 639.839 989.998 644.394C989.998 646.668 990.002 648.94 989.998 651.214C989.994 654.901 989.484 658.511 988.251 662' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M495.48 692C494.046 692 492.612 692 491.179 692C487.118 692 483.056 692 478.996 692C472.666 692 466.337 692 460.009 692C451.772 692 443.535 692 435.298 692C425.461 692 415.627 692 405.79 692C394.812 692 383.832 692 372.854 692C361.047 692 349.242 692 337.435 692C325.16 692 312.888 692 300.613 692C288.231 692 275.851 692 263.469 692C251.339 692 239.21 692 227.08 692C215.563 692 204.045 692 192.528 692C181.982 692 171.435 692 160.889 692C151.633 692 142.378 692 133.122 692C125.607 692 118.091 692 110.577 692C105.114 692 99.6515 692 94.1889 692C91.1377 692 88.0865 692 85.037 692C81.4704 692 77.9038 692 74.3388 691.934C66.0057 691.78 57.6775 691.542 49.3625 690.972C41.5382 690.437 33.7155 689.64 25.989 688.287C18.8856 687.042 11.3811 685.398 5.08315 681.769C3.92466 681.101 2.80596 680.35 1.79 679.48C0.938123 678.751 1.11712 678.312 1.11712 677.166C1.11712 674.399 1.11712 671.632 1.11712 668.865C1.11712 667.488 1.11712 666.114 1.11712 664.738C1.11712 664.183 0.853601 662.831 1.11712 662.33C1.37567 661.839 2.06678 662.041 2.78275 662.041C4.52297 662.041 6.26153 662.041 8.00175 662.041C10.8656 662.041 13.7279 662.041 16.5918 662.041C20.5164 662.041 24.4393 662.041 28.3639 662.041C33.2863 662.041 38.2086 662.041 43.1309 662.041C48.9896 662.041 54.8484 662.041 60.7071 662.041C67.4392 662.041 74.1714 662.041 80.9036 662.041C88.4462 662.041 95.9888 662.041 103.531 662.041C111.865 662.041 120.198 662.041 128.531 662.041C137.51 662.041 146.491 662.041 155.471 662.041C165.074 662.041 174.678 662.041 184.281 662.041C194.445 662.041 204.608 662.041 214.773 662.041C225.434 662.041 236.096 662.041 246.758 662.041C257.855 662.041 268.953 662.041 280.051 662.041C291.521 662.041 302.992 662.041 314.462 662.041C326.243 662.041 338.025 662.041 349.805 662.041C361.834 662.041 373.863 662.041 385.892 662.041C398.167 662.041 410.439 662.041 422.714 662.041C435.051 662.041 447.388 662.041 459.727 662.041C472.124 662.041 484.523 662.041 496.92 662.041C509.315 662.041 521.71 662.041 534.106 662.041C546.436 662.041 558.767 662.041 571.098 662.041C583.301 662.041 595.504 662.041 607.707 662.041C619.719 662.041 631.733 662.041 643.746 662.041C655.507 662.041 667.267 662.041 679.028 662.041C690.473 662.041 701.919 662.041 713.365 662.041C724.485 662.041 735.606 662.041 746.725 662.041C757.351 662.041 767.976 662.041 778.603 662.041C788.726 662.041 798.849 662.041 808.972 662.041C818.53 662.041 828.086 662.041 837.644 662.041C846.574 662.041 855.504 662.041 864.434 662.041C872.672 662.041 880.913 662.041 889.151 662.041C896.638 662.041 904.124 662.041 911.61 662.041C918.281 662.041 924.952 662.041 931.622 662.041C937.441 662.041 943.259 662.041 949.078 662.041C953.925 662.041 958.773 662.041 963.621 662.041C967.466 662.041 971.309 662.041 975.154 662.041C977.934 662.041 980.711 662.041 983.489 662.041C985.14 662.041 986.789 662.041 988.44 662.041C989.961 662.041 989.847 661.759 989.847 663.527C989.847 666.25 989.847 668.973 989.847 671.696C989.847 673.097 989.847 674.497 989.847 675.9C989.847 676.681 990.047 677.772 989.847 678.531C989.398 680.232 986.138 681.671 984.654 682.436C978.041 685.85 970.462 687.376 963.168 688.591C955.314 689.9 947.364 690.601 939.422 691.113C931.566 691.621 923.685 691.851 915.815 691.949C912.377 691.992 908.94 692 905.503 692C902.253 692 899.003 692 895.752 692C890.117 692 884.484 692 878.849 692C871.191 692 863.532 692 855.873 692C846.549 692 837.227 692 827.902 692C817.274 692 806.645 692 796.017 692C784.443 692 772.868 692 761.295 692C749.075 692 736.856 692 724.638 692C712.253 692 699.865 692 687.48 692C675.231 692 662.979 692 650.73 692C638.974 692 627.221 692 615.465 692C604.565 692 593.664 692 582.765 692C573.08 692 563.394 692 553.709 692C545.598 692 537.487 692 529.376 692C523.199 692 517.022 692 510.845 692C506.962 692 503.078 692 499.195 692C497.954 692 496.718 692 495.48 692Z' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M427 662C427.356 664.878 428.778 667.569 431.678 668.9C433.61 669.787 435.762 669.966 437.883 669.975C451.828 670.031 465.775 669.975 479.721 669.975C488.413 669.975 497.106 669.975 505.799 669.975C520.922 669.975 536.044 669.975 551.168 669.975C556.74 669.975 562.485 669.254 563.819 663.082C563.897 662.724 563.955 662.363 564 662' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M989 679H2' stroke='#2C3A42' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <rect x='22' y='32' width='947' height='592' rx='1' stroke='#2C3A42' stroke-width='1.5'/> </svg>",
          borderlessSVG: "<svg width='949' height='594' viewBox='0 0 949 594' fill='none' xmlns='http://www.w3.org/2000/svg'> <rect x='1' y='1' width='947' height='592' rx='1' stroke='#2C3A42' stroke-width='1.5'/> </svg>",
          deviceSVGWhite: "<svg width='991' height='693' viewBox='0 0 991 693' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M2.74977 661.998C1.47971 658.416 1.00221 654.713 1.00221 650.933C1.00221 648.47 1.00221 646.006 1.00221 643.543C1.00221 638.84 1.00221 634.135 1.00221 629.432C1.00221 622.725 1.00221 616.018 1.00221 609.309C1.00221 600.837 1.00221 592.363 1.00221 583.89C1.00221 573.843 1.00221 563.797 1.00221 553.75C1.00221 542.453 1.00221 531.155 1.00221 519.859C1.00221 507.51 1.00221 495.161 1.00221 482.81C1.00221 469.588 1.00221 456.367 1.00221 443.145C1.00221 429.402 1.00221 415.658 1.00221 401.915C1.00221 387.831 1.00221 373.75 1.00221 359.667C1.00221 345.483 1.00221 331.3 1.00221 317.116C1.00221 303.01 1.00221 288.905 1.00221 274.799C1.00221 261.128 1.00221 247.456 1.00221 233.785C1.00221 220.725 1.00221 207.667 1.00221 194.608C1.00221 182.399 1.00221 170.189 1.00221 157.981C1.00221 146.814 1.00221 135.649 1.00221 124.482C1.00221 114.691 1.00221 104.901 1.00221 95.1101C1.00221 86.8828 1.00221 78.6555 1.00221 70.4282C1.00221 63.9795 1.00221 57.5292 1.00221 51.0805C1.00221 46.7019 1.00221 42.3232 1.00221 37.9446C1.00221 35.8431 0.997237 33.7415 1.00221 31.6383C1.01216 26.9616 1.93568 22.3793 3.96512 18.1464C6.93632 11.9528 12.0215 6.89022 18.2259 3.93416C22.3992 1.94689 26.9273 1.02116 31.5366 1.00294C32.9808 0.997976 34.4233 1.00294 35.8674 1.00294C38.9066 1.00294 41.9475 1.00294 44.9866 1.00294C49.538 1.00294 54.0893 1.00294 58.6406 1.00294C64.5581 1.00294 70.4757 1.00294 76.3932 1.00294C83.5874 1.00294 90.78 1.00294 97.9742 1.00294C106.375 1.00294 114.775 1.00294 123.176 1.00294C132.607 1.00294 142.037 1.00294 151.467 1.00294C161.853 1.00294 172.239 1.00294 182.625 1.00294C193.86 1.00294 205.095 1.00294 216.332 1.00294C228.309 1.00294 240.287 1.00294 252.266 1.00294C264.935 1.00294 277.603 1.00294 290.272 1.00294C303.417 1.00294 316.563 1.00294 329.71 1.00294C343.278 1.00294 356.847 1.00294 370.415 1.00294C384.359 1.00294 398.301 1.00294 412.245 1.00294C426.34 1.00294 440.435 1.00294 454.529 1.00294C468.726 1.00294 482.923 1.00294 497.12 1.00294C511.313 1.00294 525.506 1.00294 539.699 1.00294C553.84 1.00294 567.982 1.00294 582.123 1.00294C595.987 1.00294 609.852 1.00294 623.715 1.00294C637.254 1.00294 650.795 1.00294 664.335 1.00294C677.445 1.00294 690.554 1.00294 703.664 1.00294C716.288 1.00294 728.911 1.00294 741.535 1.00294C753.46 1.00294 765.386 1.00294 777.31 1.00294C788.486 1.00294 799.659 1.00294 810.834 1.00294C821.194 1.00294 831.551 1.00294 841.911 1.00294C851.261 1.00294 860.609 1.00294 869.958 1.00294C878.237 1.00294 886.514 1.00294 894.792 1.00294C901.892 1.00294 908.993 1.00294 916.093 1.00294C921.91 1.00294 927.726 1.00294 933.542 1.00294C937.984 1.00294 942.426 1.00294 946.866 1.00294C949.788 1.00294 952.711 1.00294 955.632 1.00294C956.95 1.00294 958.269 0.99632 959.587 1.00294C964.679 1.0311 969.678 2.21186 974.168 4.6413C980.213 7.91367 985.026 13.2329 987.674 19.5723C989.31 23.4922 989.994 27.6324 989.998 31.8619C990 34.1456 989.998 36.4277 989.998 38.7114C989.998 43.2771 989.998 47.8429 989.998 52.4086C989.998 58.9798 989.998 65.5511 989.998 72.124C989.998 80.4788 989.998 88.8336 989.998 97.1867C989.998 107.087 989.998 116.987 989.998 126.886C989.998 138.144 989.998 149.401 989.998 160.658C989.998 172.94 989.998 185.223 989.998 197.504C989.998 210.618 989.998 223.731 989.998 236.845C989.998 250.612 989.998 264.379 989.998 278.146C989.998 292.212 989.998 306.277 989.998 320.344C989.998 334.528 989.998 348.712 989.998 362.896C989.998 376.961 989.998 391.026 989.998 405.091C989.998 418.8 989.998 432.507 989.998 446.216C989.998 459.383 989.998 472.55 989.998 485.719C989.998 497.997 989.998 510.275 989.998 522.553C989.998 533.762 989.998 544.968 989.998 556.176C989.998 566.114 989.998 576.054 989.998 585.992C989.998 594.338 989.998 602.687 989.998 611.035C989.998 617.598 989.998 624.162 989.998 630.725C989.998 635.281 989.998 639.839 989.998 644.394C989.998 646.668 990.002 648.94 989.998 651.214C989.994 654.901 989.484 658.511 988.251 662' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M495.48 692C494.046 692 492.612 692 491.179 692C487.118 692 483.056 692 478.996 692C472.666 692 466.337 692 460.009 692C451.772 692 443.535 692 435.298 692C425.461 692 415.627 692 405.79 692C394.812 692 383.832 692 372.854 692C361.047 692 349.242 692 337.435 692C325.16 692 312.888 692 300.613 692C288.231 692 275.851 692 263.469 692C251.339 692 239.21 692 227.08 692C215.563 692 204.045 692 192.528 692C181.982 692 171.435 692 160.889 692C151.633 692 142.378 692 133.122 692C125.607 692 118.091 692 110.577 692C105.114 692 99.6515 692 94.1889 692C91.1377 692 88.0865 692 85.037 692C81.4704 692 77.9038 692 74.3388 691.934C66.0057 691.78 57.6775 691.542 49.3625 690.972C41.5382 690.437 33.7155 689.64 25.989 688.287C18.8856 687.042 11.3811 685.398 5.08315 681.769C3.92466 681.101 2.80596 680.35 1.79 679.48C0.938123 678.751 1.11712 678.312 1.11712 677.166C1.11712 674.399 1.11712 671.632 1.11712 668.865C1.11712 667.488 1.11712 666.114 1.11712 664.738C1.11712 664.183 0.853601 662.831 1.11712 662.33C1.37567 661.839 2.06678 662.041 2.78275 662.041C4.52297 662.041 6.26153 662.041 8.00175 662.041C10.8656 662.041 13.7279 662.041 16.5918 662.041C20.5164 662.041 24.4393 662.041 28.3639 662.041C33.2863 662.041 38.2086 662.041 43.1309 662.041C48.9896 662.041 54.8484 662.041 60.7071 662.041C67.4392 662.041 74.1714 662.041 80.9036 662.041C88.4462 662.041 95.9888 662.041 103.531 662.041C111.865 662.041 120.198 662.041 128.531 662.041C137.51 662.041 146.491 662.041 155.471 662.041C165.074 662.041 174.678 662.041 184.281 662.041C194.445 662.041 204.608 662.041 214.773 662.041C225.434 662.041 236.096 662.041 246.758 662.041C257.855 662.041 268.953 662.041 280.051 662.041C291.521 662.041 302.992 662.041 314.462 662.041C326.243 662.041 338.025 662.041 349.805 662.041C361.834 662.041 373.863 662.041 385.892 662.041C398.167 662.041 410.439 662.041 422.714 662.041C435.051 662.041 447.388 662.041 459.727 662.041C472.124 662.041 484.523 662.041 496.92 662.041C509.315 662.041 521.71 662.041 534.106 662.041C546.436 662.041 558.767 662.041 571.098 662.041C583.301 662.041 595.504 662.041 607.707 662.041C619.719 662.041 631.733 662.041 643.746 662.041C655.507 662.041 667.267 662.041 679.028 662.041C690.473 662.041 701.919 662.041 713.365 662.041C724.485 662.041 735.606 662.041 746.725 662.041C757.351 662.041 767.976 662.041 778.603 662.041C788.726 662.041 798.849 662.041 808.972 662.041C818.53 662.041 828.086 662.041 837.644 662.041C846.574 662.041 855.504 662.041 864.434 662.041C872.672 662.041 880.913 662.041 889.151 662.041C896.638 662.041 904.124 662.041 911.61 662.041C918.281 662.041 924.952 662.041 931.622 662.041C937.441 662.041 943.259 662.041 949.078 662.041C953.925 662.041 958.773 662.041 963.621 662.041C967.466 662.041 971.309 662.041 975.154 662.041C977.934 662.041 980.711 662.041 983.489 662.041C985.14 662.041 986.789 662.041 988.44 662.041C989.961 662.041 989.847 661.759 989.847 663.527C989.847 666.25 989.847 668.973 989.847 671.696C989.847 673.097 989.847 674.497 989.847 675.9C989.847 676.681 990.047 677.772 989.847 678.531C989.398 680.232 986.138 681.671 984.654 682.436C978.041 685.85 970.462 687.376 963.168 688.591C955.314 689.9 947.364 690.601 939.422 691.113C931.566 691.621 923.685 691.851 915.815 691.949C912.377 691.992 908.94 692 905.503 692C902.253 692 899.003 692 895.752 692C890.117 692 884.484 692 878.849 692C871.191 692 863.532 692 855.873 692C846.549 692 837.227 692 827.902 692C817.274 692 806.645 692 796.017 692C784.443 692 772.868 692 761.295 692C749.075 692 736.856 692 724.638 692C712.253 692 699.865 692 687.48 692C675.231 692 662.979 692 650.73 692C638.974 692 627.221 692 615.465 692C604.565 692 593.664 692 582.765 692C573.08 692 563.394 692 553.709 692C545.598 692 537.487 692 529.376 692C523.199 692 517.022 692 510.845 692C506.962 692 503.078 692 499.195 692C497.954 692 496.718 692 495.48 692Z' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M427 662C427.356 664.878 428.778 667.569 431.678 668.9C433.61 669.787 435.762 669.966 437.883 669.975C451.828 670.031 465.775 669.975 479.721 669.975C488.413 669.975 497.106 669.975 505.799 669.975C520.922 669.975 536.044 669.975 551.168 669.975C556.74 669.975 562.485 669.254 563.819 663.082C563.897 662.724 563.955 662.363 564 662' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <path d='M989 679H2' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/> <rect x='22' y='32' width='947' height='592' rx='1' stroke='#FFFFFF' stroke-width='1.5'/> </svg>",
          borderlessSVGWhite: "<svg width='949' height='594' viewBox='0 0 949 594' fill='none' xmlns='http://www.w3.org/2000/svg'> <rect x='1' y='1' width='947' height='592' rx='1' stroke='#FFFFFF' stroke-width='1.5'/> </svg>"
        },
        {
          name: "Browser",
          deviceWidth: 948,
          deviceHeight: 698,
          borderlessWidth: 948,
          borderlessHeight: 672,
          cornerRadius: 6,
          cornerRadiusBorderless: 5,
          deviceSVG: "<svg width='949' height='700' viewBox='0 0 949 700' fill='none' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' clip-rule='evenodd' d='M5.60347 0.25C2.64684 0.25 0.25 2.6468 0.25 5.60345V694.397C0.25 697.353 2.64684 699.75 5.60348 699.75H943.397C946.353 699.75 948.75 697.353 948.75 694.397V5.60347C948.75 2.64683 946.353 0.25 943.397 0.25H5.60347ZM1.75 5.60345C1.75 3.47524 3.47525 1.75 5.60347 1.75H943.397C945.525 1.75 947.25 3.47526 947.25 5.60347V26.25H1.75V5.60345ZM1.75 27.75V694.397C1.75 696.525 3.47526 698.25 5.60348 698.25H943.397C945.525 698.25 947.25 696.525 947.25 694.397V27.75H1.75Z' fill='#2C3A42'/> <rect x='302' y='7' width='347' height='14' rx='1.8' stroke='#2C3A42' stroke-width='1.5'/> <path d='M63.1763 10.5L59.5762 14.1L63.1763 17.7' stroke='#2C3A42' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> <path d='M75.7056 17.5L79.3056 13.9L75.7056 10.3' stroke='#2C3A42' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M55.8 6.25C54.3917 6.25 53.25 7.39167 53.25 8.8V19.2C53.25 20.6083 54.3917 21.75 55.8 21.75H83.2C84.6083 21.75 85.75 20.6083 85.75 19.2V8.8C85.75 7.39167 84.6083 6.25 83.2 6.25H55.8ZM54.75 8.8C54.75 8.2201 55.2201 7.75 55.8 7.75H68.75L68.75 20.25H55.8C55.2201 20.25 54.75 19.7799 54.75 19.2V8.8ZM70.25 20.25H83.2C83.7799 20.25 84.25 19.7799 84.25 19.2V8.8C84.25 8.2201 83.7799 7.75 83.2 7.75H70.25V20.25Z' fill='#2C3A42'/> <circle cx='14.4818' cy='14.4816' r='3.61701' stroke='#2C3A42' stroke-width='1.5'/> <circle cx='27.6346' cy='14.4816' r='3.61701' stroke='#2C3A42' stroke-width='1.5'/> <circle cx='40.7874' cy='14.4816' r='3.61701' stroke='#2C3A42' stroke-width='1.5'/> </svg>",
          borderlessSVG: "<svg width='949' height='674' viewBox='0 0 949 674' fill='none' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' clip-rule='evenodd' d='M0.25 5.60344C0.25 2.6468 2.64684 0.25 5.60347 0.25H943.397C946.353 0.25 948.75 2.64683 948.75 5.60347V668.397C948.75 671.353 946.353 673.75 943.397 673.75H5.60348C2.64684 673.75 0.25 671.353 0.25 668.397V5.60344ZM5.60347 1.75C3.47525 1.75 1.75 3.47524 1.75 5.60344V668.397C1.75 670.525 3.47526 672.25 5.60348 672.25H943.397C945.525 672.25 947.25 670.525 947.25 668.397V5.60347C947.25 3.47526 945.525 1.75 943.397 1.75H5.60347Z' fill='#2C3A42'/> </svg>",
          deviceSVGWhite: "<svg width='949' height='700' viewBox='0 0 949 700' fill='none' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' clip-rule='evenodd' d='M5.60347 0.25C2.64684 0.25 0.25 2.6468 0.25 5.60345V694.397C0.25 697.353 2.64684 699.75 5.60348 699.75H943.397C946.353 699.75 948.75 697.353 948.75 694.397V5.60347C948.75 2.64683 946.353 0.25 943.397 0.25H5.60347ZM1.75 5.60345C1.75 3.47524 3.47525 1.75 5.60347 1.75H943.397C945.525 1.75 947.25 3.47526 947.25 5.60347V26.25H1.75V5.60345ZM1.75 27.75V694.397C1.75 696.525 3.47526 698.25 5.60348 698.25H943.397C945.525 698.25 947.25 696.525 947.25 694.397V27.75H1.75Z' fill='#2C3A42'/> <rect x='302' y='7' width='347' height='14' rx='1.8' stroke='#FFFFFF' stroke-width='1.5'/> <path d='M63.1763 10.5L59.5762 14.1L63.1763 17.7' stroke='#FFFFFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> <path d='M75.7056 17.5L79.3056 13.9L75.7056 10.3' stroke='#FFFFFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M55.8 6.25C54.3917 6.25 53.25 7.39167 53.25 8.8V19.2C53.25 20.6083 54.3917 21.75 55.8 21.75H83.2C84.6083 21.75 85.75 20.6083 85.75 19.2V8.8C85.75 7.39167 84.6083 6.25 83.2 6.25H55.8ZM54.75 8.8C54.75 8.2201 55.2201 7.75 55.8 7.75H68.75L68.75 20.25H55.8C55.2201 20.25 54.75 19.7799 54.75 19.2V8.8ZM70.25 20.25H83.2C83.7799 20.25 84.25 19.7799 84.25 19.2V8.8C84.25 8.2201 83.7799 7.75 83.2 7.75H70.25V20.25Z' fill='#2C3A42'/> <circle cx='14.4818' cy='14.4816' r='3.61701' stroke='#FFFFFF' stroke-width='1.5'/> <circle cx='27.6346' cy='14.4816' r='3.61701' stroke='#FFFFFF' stroke-width='1.5'/> <circle cx='40.7874' cy='14.4816' r='3.61701' stroke='#FFFFFF' stroke-width='1.5'/> </svg>",
          borderlessSVGWhite: "<svg width='949' height='674' viewBox='0 0 949 674' fill='none' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' clip-rule='evenodd' d='M0.25 5.60344C0.25 2.6468 2.64684 0.25 5.60347 0.25H943.397C946.353 0.25 948.75 2.64683 948.75 5.60347V668.397C948.75 671.353 946.353 673.75 943.397 673.75H5.60348C2.64684 673.75 0.25 671.353 0.25 668.397V5.60344ZM5.60347 1.75C3.47525 1.75 1.75 3.47524 1.75 5.60344V668.397C1.75 670.525 3.47526 672.25 5.60348 672.25H943.397C945.525 672.25 947.25 670.525 947.25 668.397V5.60347C947.25 3.47526 945.525 1.75 943.397 1.75H5.60347Z' fill='#2C3A42'/> </svg>"
        }
      ];
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/1ce322cc-5512-4a4c-b375-f833a9912869/DevicePreview.js
  var init_DevicePreview = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/1ce322cc-5512-4a4c-b375-f833a9912869/DevicePreview.js"() {
      if (document.getElementById("911e19db51") === null) {
        const element = document.createElement("style");
        element.id = "911e19db51";
        element.textContent = `._tastytest_1pz60_1 {
    background: red
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZS9EZXZpY2VQcmV2aWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL3N0eWxlL0RldmljZVByZXZpZXcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc3R5dGVzdCB7XG4gICAgYmFja2dyb3VuZDogcmVkXG59Il19 */`;
        document.head.append(element);
      }
    }
  });

  // src/components/devices/DevicePreview.tsx
  function DevicePreview(props) {
    return /* @__PURE__ */ v("div", {
      className: "tastytest",
      style: "max-height: 200px; display: flex; margin: 0.75rem 0 0.5rem 0;"
    }, /* @__PURE__ */ v(import_react_svg_inline.default, {
      svg: resolveDevice(props.device, props.border),
      height: "200",
      width: "215",
      fill: props.fill ? "#F5F5F6" : "#FFF",
      accessibilityLabel: "Device Preview"
    }));
  }
  function resolveDevice(device, border) {
    const found = devices_default.find((element) => element.name == device);
    if (border) {
      return found.deviceSVG;
    } else {
      return found.borderlessSVG;
    }
  }
  var import_react_svg_inline;
  var init_DevicePreview2 = __esm({
    "src/components/devices/DevicePreview.tsx"() {
      init_preact_module();
      import_react_svg_inline = __toESM(require_lib());
      init_devices();
      init_DevicePreview();
    }
  });

  // src/components/icons/None16.tsx
  function None16() {
    return /* @__PURE__ */ v("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ v("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 9H6V8H10V9Z",
      fill: "black",
      "fill-opacity": "0.8"
    }));
  }
  var init_None16 = __esm({
    "src/components/icons/None16.tsx"() {
      init_preact_module();
    }
  });

  // src/components/icons/Check16.tsx
  function Check16() {
    return /* @__PURE__ */ v("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ v("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12.654 5.4072L7 11.0612L3.646 7.7072L4.354 7.0002L7 9.6462L11.947 4.7002L12.654 5.4072Z",
      fill: "black",
      "fill-opacity": "0.8"
    }));
  }
  var init_Check16 = __esm({
    "src/components/icons/Check16.tsx"() {
      init_preact_module();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin(props) {
    const [type, setType] = m2(props.type);
    const [title, setTitle] = m2(props.title);
    const [deviceType, setDeviceType] = m2(props.deviceType);
    const [device, setCurrentDevice] = m2(props.device);
    const [backgroundEnabled, setBackgroundEnabled] = m2(props.backgroundEnabled);
    const [deviceBorderEnabled, setDeviceBorderEnabled] = m2(props.deviceBorderEnabled);
    const [scale, setScale] = m2(props.scale);
    const [isLocked, setLockedState] = m2("isLocked");
    const deviceOptions = [
      { value: "Mobile" },
      { value: "Tablet" },
      { value: "Desktop" }
    ];
    const backgroundOptions = [
      { children: /* @__PURE__ */ v(None16, null), value: "noBackground" },
      { children: /* @__PURE__ */ v(DeviceMobile16, {
        background: true
      }), value: "background" }
    ];
    const deviceBorderOptions = [
      { children: /* @__PURE__ */ v(None16, null), value: "noBorder" },
      { children: /* @__PURE__ */ v(Check16, null), value: "border" }
    ];
    function handleBackgroundEnabledChange(event) {
      const newValue = event.currentTarget.value;
      console.log(newValue);
      setBackgroundEnabled(newValue);
    }
    function handleDeviceBorderEnabledChange(event) {
      const newValue = event.currentTarget.value;
      console.log(newValue);
      setDeviceBorderEnabled(newValue);
    }
    function handleDeviceTypeChange(event) {
      const newValue = event.currentTarget.value;
      console.log(newValue);
      if (newValue == "Mobile") {
        setCurrentDevice("iPhone 11");
      }
      if (newValue == "Tablet") {
        setCurrentDevice("iPad Pro 11");
      }
      if (newValue == "Desktop") {
        setCurrentDevice("Laptop");
      }
      setDeviceType(newValue);
    }
    const mobileOptions = [
      { header: "Apple" },
      { value: "iPhone 8" },
      { value: "iPhone 11" },
      { value: "iPhone 11 Pro" },
      { value: "iPhone 11 Pro Max" },
      { separator: true },
      { header: "Google" },
      { value: "Pixel 3" },
      { value: "Pixel 3 XL" },
      { value: "Pixel 4" },
      { value: "Pixel 4 XL" }
    ];
    const tabletOptions = [
      { value: "iPad Pro 11" },
      { value: "iPad 9.7\u2033" }
    ];
    const desktopOptions = [
      { value: "Laptop" },
      { value: "Browser" }
    ];
    function handleMobileChange(event) {
      const newValue = event.currentTarget.value;
      console.log(newValue);
      setCurrentDevice(newValue);
    }
    const handleUpdateButtonClick = A2(function() {
      emit("UPDATE_TYPE", type);
      emit("UPDATE_TITLE", title);
      emit("UPDATE_DEVICETYPE", deviceType);
      emit("UPDATE_DEVICE", device);
      emit("UPDATE_BACKGROUND_ENABLED", backgroundEnabled);
      emit("UPDATE_DEVICEBORDER_ENABLED", deviceBorderEnabled);
    }, [type, title, deviceType, device, backgroundEnabled, deviceBorderEnabled, scale]);
    function getCurrentDeviceIcon(background) {
      if (deviceType == "Mobile") {
        return /* @__PURE__ */ v(DeviceMobile32, {
          background
        });
      }
      if (deviceType == "Tablet") {
        return /* @__PURE__ */ v(DeviceTablet32, {
          background
        });
      }
      if (deviceType == "Desktop") {
        return /* @__PURE__ */ v(DeviceDesktop32, {
          background
        });
      }
    }
    function resolveBorderEnabled(border) {
      if (border == "noBorder") {
        return false;
      } else {
        return true;
      }
    }
    function resolveBackgroundEnabled(fill) {
      if (fill == "noBackground") {
        return false;
      } else {
        return true;
      }
    }
    return /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Container, null, /* @__PURE__ */ v(DevicePreview, {
      scale,
      border: resolveBorderEnabled(deviceBorderEnabled),
      fill: resolveBackgroundEnabled(backgroundEnabled),
      deviceType,
      device,
      locked: false
    }), /* @__PURE__ */ v(VerticalSpace, {
      space: "medium"
    }), /* @__PURE__ */ v(Text, {
      bold: true
    }, "Device Type"), /* @__PURE__ */ v(VerticalSpace, {
      space: "large"
    }), /* @__PURE__ */ v("div", {
      style: "display: flex; justify-content: space-between; align-items: center;"
    }, /* @__PURE__ */ v(Dropdown, {
      noBorder: true,
      icon: getCurrentDeviceIcon(false),
      onChange: handleDeviceTypeChange,
      options: deviceOptions,
      value: deviceType
    }), /* @__PURE__ */ v(SegmentedControl, {
      onChange: handleBackgroundEnabledChange,
      options: backgroundOptions,
      value: backgroundEnabled
    })), /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    }), /* @__PURE__ */ v("div", null, deviceType === "Mobile" && /* @__PURE__ */ v(Dropdown, {
      onChange: handleMobileChange,
      options: mobileOptions,
      value: device
    }), deviceType === "Tablet" && /* @__PURE__ */ v(Dropdown, {
      onChange: handleMobileChange,
      options: tabletOptions,
      value: device
    }), deviceType === "Desktop" && /* @__PURE__ */ v(Dropdown, {
      onChange: handleMobileChange,
      options: desktopOptions,
      value: device
    })), /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    })), /* @__PURE__ */ v(Divider, null), /* @__PURE__ */ v(Container, null, /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    }), /* @__PURE__ */ v("div", {
      style: "display: flex; justify-content: space-between; align-items: center;"
    }, /* @__PURE__ */ v(Text, null, "Enable Device Border"), /* @__PURE__ */ v(SegmentedControl, {
      onChange: handleDeviceBorderEnabledChange,
      options: deviceBorderOptions,
      value: deviceBorderEnabled
    })), /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    })), /* @__PURE__ */ v(Divider, null), /* @__PURE__ */ v(Container, null, /* @__PURE__ */ v(VerticalSpace, {
      space: "medium"
    }), /* @__PURE__ */ v(Button, {
      fullWidth: true,
      onClick: handleUpdateButtonClick
    }, "Update Values"), /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    })));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      init_lib();
      init_lib2();
      init_preact_module();
      init_hooks_module();
      init_DeviceMobile16();
      init_DeviceMobile32();
      init_DeviceTablet32();
      init_DeviceDesktop32();
      init_DevicePreview2();
      init_None16();
      init_Check16();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.tsx--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.tsx--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error("No UI defined for command `" + commandId + "`");
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
