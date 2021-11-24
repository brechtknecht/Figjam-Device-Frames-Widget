(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

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
    var t3, r3, o3, f3 = {};
    for (o3 in u3)
      o3 == "key" ? t3 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (o3 in l3.defaultProps)
        f3[o3] === void 0 && (f3[o3] = l3.defaultProps[o3]);
    return y(l3, f3, t3, r3, null);
  }
  function y(n2, i3, t3, r3, o3) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o3 == null ? ++u : o3 };
    return o3 == null && l.vnode != null && l.vnode(f3), f3;
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
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, r3, o3;
        n3.__d && (r3 = (t3 = (l3 = n3).__v).__e, (o3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(o3, t3, i3, l3.__n, o3.ownerSVGElement !== void 0, t3.__h != null ? [r3] : null, u3, r3 == null ? k(t3) : r3, t3.__h), z(u3, t3), t3.__e != r3 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, r3, o3, f3, s3, a3) {
    var h2, v3, p2, _2, b3, m3, g3, w3 = i3 && i3.__k || c, A2 = w3.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if ((_2 = u3.__k[h2] = (_2 = l3[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
        if (_2.__ = u3, _2.__b = u3.__b + 1, (p2 = w3[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
          w3[h2] = void 0;
        else
          for (v3 = 0; v3 < A2; v3++) {
            if ((p2 = w3[v3]) && _2.key == p2.key && _2.type === p2.type) {
              w3[v3] = void 0;
              break;
            }
            p2 = null;
          }
        j(n2, _2, p2 = p2 || e, t3, r3, o3, f3, s3, a3), b3 = _2.__e, (v3 = _2.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), b3 != null ? (m3 == null && (m3 = b3), typeof _2.type == "function" && _2.__k === p2.__k ? _2.__d = s3 = x(_2, s3, n2) : s3 = P(n2, _2, p2, w3, b3, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p2.__e == s3 && s3.parentNode != n2 && (s3 = k(p2));
      }
    for (u3.__e = m3, h2 = A2; h2--; )
      w3[h2] != null && (typeof u3.type == "function" && w3[h2].__e != null && w3[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w3[h2], w3[h2]));
    if (g3)
      for (h2 = 0; h2 < g3.length; h2++)
        M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function P(n2, l3, u3, i3, t3, r3) {
    var o3, f3, e3;
    if (l3.__d !== void 0)
      o3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != r3 || t3.parentNode == null)
      n:
        if (r3 == null || r3.parentNode !== n2)
          n2.appendChild(t3), o3 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o3 = r3;
        }
    return o3 !== void 0 ? o3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      r3 === "children" || r3 === "key" || r3 in l3 || H(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && typeof l3[r3] != "function" || r3 === "children" || r3 === "key" || r3 === "value" || r3 === "checked" || u3[r3] === l3[r3] || H(n2, r3, l3[r3], u3[r3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var r3;
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
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? T : I, r3) : n2.removeEventListener(l3, r3 ? T : I, r3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
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
  function j(n2, u3, i3, t3, r3, o3, f3, e3, c3) {
    var s3, h2, v3, y3, p2, k3, b3, m3, g3, x3, A2, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (m3 = u3.props, g3 = (s3 = P2.contextType) && t3[s3.__c], x3 = s3 ? g3 ? g3.props.value : s3.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h2 = new P2(m3, x3) : (u3.__c = h2 = new _(m3, x3), h2.constructor = P2, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))), y3 = h2.props, p2 = h2.state, v3)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m3 !== y3 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x3), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x3) === false || u3.__v === i3.__v) {
              h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x3), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y3, p2, k3);
            });
          }
          h2.context = x3, h2.props = m3, h2.state = h2.__s, (s3 = l.__r) && s3(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t3 = a(a({}, t3), h2.getChildContext())), v3 || h2.getSnapshotBeforeUpdate == null || (k3 = h2.getSnapshotBeforeUpdate(y3, p2)), A2 = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, r3, o3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          o3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, r3, o3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || o3 != null) && (u3.__e = e3, u3.__h = !!c3, o3[o3.indexOf(e3)] = null), l.__e(n3, u3, i3);
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
  function L(l3, u3, i3, t3, r3, o3, f3, c3) {
    var s3, a3, v3, y3 = i3.props, p2 = u3.props, d2 = u3.type, _2 = 0;
    if (d2 === "svg" && (r3 = true), o3 != null) {
      for (; _2 < o3.length; _2++)
        if ((s3 = o3[_2]) && (s3 === l3 || (d2 ? s3.localName == d2 : s3.nodeType == 3))) {
          l3 = s3, o3[_2] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d2 === null)
        return document.createTextNode(p2);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o3 = null, c3 = false;
    }
    if (d2 === null)
      y3 === p2 || c3 && l3.data === p2 || (l3.data = p2);
    else {
      if (o3 = o3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (y3 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
            y3[l3.attributes[_2].name] = l3.attributes[_2].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p2, y3, r3, c3), v3)
        u3.__k = [];
      else if (_2 = u3.props.children, w(l3, Array.isArray(_2) ? _2 : [_2], u3, i3, t3, r3 && d2 !== "foreignObject", o3, f3, o3 ? o3[0] : i3.__k && k(i3, 0), c3), o3 != null)
        for (_2 = o3.length; _2--; )
          o3[_2] != null && h(o3[_2]);
      c3 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== l3.value || d2 === "progress" && !_2) && H(l3, "value", _2, y3.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l3.checked && H(l3, "checked", _2, y3.checked, false));
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
    var t3, r3;
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
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && N(t3[r3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var r3, o3, f3;
    l.__ && l.__(u3, i3), o3 = (r3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!r3 && t3 || i3).__k = v(d, null, [u3]), o3 || e, e, i3.ownerSVGElement !== void 0, !r3 && t3 ? [t3] : o3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o3 ? o3.__e : i3.firstChild, r3), z(f3, u3);
  }
  var n, l, u, i, t, r, o, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = c.slice, l = { __e: function(n2, l3) {
        for (var u3, i3, t3; l3 = l3.__; )
          if ((u3 = l3.__c) && !u3.__)
            try {
              if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
                return u3.__E = u3;
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
      }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
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
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function l2(n2) {
    return o2 = 1, p(w2, n2);
  }
  function p(n2, r3, o3) {
    var i3 = m2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function y2(r3, o3) {
    var i3 = m2(t2++, 3);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function s2(n2) {
    return o2 = 5, A(function() {
      return { current: n2 };
    }, []);
  }
  function A(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function F(n2, t3) {
    return o2 = 8, A(function() {
      return n2;
    }, t3);
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
    }), i2 = [];
  }
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
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
        var u3 = t3.__c;
        if (u3 && u3.__H)
          try {
            u3.__H.__.forEach(g2);
          } catch (t4) {
            l.__e(t4, u3.__v);
          }
      };
      b2 = typeof requestAnimationFrame == "function";
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/c7586166-6743-4642-bcea-f5cf16f894c9/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/c7586166-6743-4642-bcea-f5cf16f894c9/loading-indicator.js"() {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/77aac714-6511-483d-9dfc-7143ebc00470/button.js
  var button_default;
  var init_button = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/77aac714-6511-483d-9dfc-7143ebc00470/button.js"() {
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
    const handleKeyDown = F(function(event) {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/3aaad404-7b78-4079-9eb2-d170a8798398/icon.js
  var icon_default;
  var init_icon = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/3aaad404-7b78-4079-9eb2-d170a8798398/icon.js"() {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/3c937787-6cd3-4aaf-943f-aa49db6afac2/divider.js
  var divider_default;
  var init_divider = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/3c937787-6cd3-4aaf-943f-aa49db6afac2/divider.js"() {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/8019d3ee-7839-4c0d-8846-32d7b6750f9d/menu.js
  var menu_default;
  var init_menu = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/8019d3ee-7839-4c0d-8846-32d7b6750f9d/menu.js"() {
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
    const getItemElements = F(function() {
      return Array.from(getCurrentFromRef(menuElementRef).querySelectorAll(`[${itemIdDataAttributeName}]`)).filter(function(element) {
        return element.hasAttribute("disabled") === false;
      });
    }, [itemIdDataAttributeName, menuElementRef]);
    const findIndexByItemId = F(function(id) {
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
    const updateScrollPosition = F(function(id) {
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
    const handleScrollableMenuKeyDown = F(function(event) {
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
    const handleScrollableMenuItemMouseMove = F(function(event) {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/e514298e-f4e5-4da0-968b-22d2f4b5cdcb/dropdown.js
  var dropdown_default;
  var init_dropdown = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/e514298e-f4e5-4da0-968b-22d2f4b5cdcb/dropdown.js"() {
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
    const rootElementRef = s2(null);
    const menuElementRef = s2(null);
    const [isMenuVisible, setIsMenuVisible] = l2(false);
    const index = findOptionIndexByValue(options, value);
    if (value !== null && index === -1) {
      throw new Error(`Invalid \`value\`: ${value}`);
    }
    const [selectedId, setSelectedId] = l2(index === -1 ? null : `${index}`);
    const children = typeof options[index] === "undefined" ? "" : getDropdownOptionValue(options[index]);
    const { handleScrollableMenuKeyDown, handleScrollableMenuItemMouseMove } = useScrollableMenu({
      itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
      menuElementRef,
      selectedId,
      setSelectedId
    });
    const triggerBlur = F(function() {
      setIsMenuVisible(false);
      setSelectedId(INVALID_ID);
      getCurrentFromRef(rootElementRef).blur();
      const menuElement = getCurrentFromRef(menuElementRef);
      menuElement.removeAttribute("style");
    }, []);
    const handleRootFocus = F(function() {
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
    const handleRootKeyDown = F(function(event) {
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
    const handleRootMouseDown = F(function(event) {
      if (isMenuVisible === false) {
        return;
      }
      event.preventDefault();
      triggerBlur();
    }, [isMenuVisible, triggerBlur]);
    const handleMenuMouseDown = F(function(event) {
      event.stopPropagation();
    }, []);
    const handleOptionChange = F(function(event) {
      const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      const optionValue = options[parseInt(id, 10)];
      const newValue = optionValue.value;
      onValueChange(newValue, name);
      onChange(event);
      triggerBlur();
    }, [name, onChange, onValueChange, options, triggerBlur]);
    const handleMouseDownOutside = F(function() {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/2ff20a5d-3ba0-4702-99ea-c1403e3ff563/container.js
  var container_default;
  var init_container = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/2ff20a5d-3ba0-4702-99ea-c1403e3ff563/container.js"() {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/49c86f54-1c37-4eb5-860e-f9a635e440d7/vertical-space.js
  var vertical_space_default;
  var init_vertical_space = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/49c86f54-1c37-4eb5-860e-f9a635e440d7/vertical-space.js"() {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/51956351-8fd5-4caa-a8c6-640a7e705b39/text.js
  var text_default;
  var init_text = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/51956351-8fd5-4caa-a8c6-640a7e705b39/text.js"() {
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

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/9d4d8a68-c906-4a3c-a8e4-aef79ca60d9c/segmented-control.js
  var segmented_control_default;
  var init_segmented_control = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/9d4d8a68-c906-4a3c-a8e4-aef79ca60d9c/segmented-control.js"() {
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
    const handleChange = F(function(event) {
      const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME2);
      const newValue = options[parseInt(id, 10)].value;
      onValueChange(newValue, name);
      onChange(event);
    }, [name, onChange, onValueChange, options]);
    const handleKeyDown = F(function(event) {
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
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // ../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/1fdbc7f6-5f92-4b5a-abc1-90150b158a59/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/br/8v45chv1577b5gwh46m3b6nw0000gn/T/1fdbc7f6-5f92-4b5a-abc1-90150b158a59/base.js"() {
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
  var init_lib2 = __esm({
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
    const [type, setType] = l2(props.type);
    const [title, setTitle] = l2(props.title);
    const [deviceType, setDeviceType] = l2(props.deviceType);
    const [device, setCurrentDevice] = l2(props.device);
    const [backgroundEnabled, setBackgroundEnabled] = l2(props.backgroundEnabled);
    const [deviceBorderEnabled, setDeviceBorderEnabled] = l2(props.deviceBorderEnabled);
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
        setCurrentDevice("iPhone 8");
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
      { value: 'iPad 9.7"' }
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
    const handleUpdateButtonClick = F(function() {
      emit("UPDATE_TYPE", type);
      emit("UPDATE_TITLE", title);
      emit("UPDATE_DEVICETYPE", deviceType);
      emit("UPDATE_DEVICE", device);
      emit("UPDATE_BACKGROUND_ENABLED", backgroundEnabled);
      emit("UPDATE_DEVICEBORDER_ENABLED", deviceBorderEnabled);
    }, [type, title, deviceType, device, backgroundEnabled, deviceBorderEnabled]);
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
    return /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Container, null, /* @__PURE__ */ v(VerticalSpace, {
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
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_DeviceMobile16();
      init_DeviceMobile32();
      init_DeviceTablet32();
      init_DeviceDesktop32();
      init_None16();
      init_Check16();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.tsx--default": (init_ui(), ui_exports)["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.tsx--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error("No UI defined for command `" + commandId + "`");
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
