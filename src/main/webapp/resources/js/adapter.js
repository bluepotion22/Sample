!function () {
    var t = {
        6394: function () {
            "use strict";
            !function () {
                var t = window.crypto || window.msCrypto;
                t || (t = window.crypto = {}), t.getRandomValues || (t.getRandomValues = function (t) {
                    for (var n = 0, e = t.length; n < e; n++) t[n] = Math.floor(256 * Math.random());
                    return t
                })
            }()
        }, 3099: function (t) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
                return t
            }
        }, 6077: function (t, n, e) {
            var r = e(111);
            t.exports = function (t) {
                if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                return t
            }
        }, 1223: function (t, n, e) {
            var r = e(5112), o = e(30), i = e(3070), c = r("unscopables"), u = Array.prototype;
            null == u[c] && i.f(u, c, {configurable: !0, value: o(null)}), t.exports = function (t) {
                u[c][t] = !0
            }
        }, 5787: function (t) {
            t.exports = function (t, n, e) {
                if (!(t instanceof n)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
                return t
            }
        }, 9670: function (t, n, e) {
            var r = e(111);
            t.exports = function (t) {
                if (!r(t)) throw TypeError(String(t) + " is not an object");
                return t
            }
        }, 8533: function (t, n, e) {
            "use strict";
            var r = e(2092).forEach, o = e(9341), i = e(9207), c = o("forEach"), u = i("forEach");
            t.exports = c && u ? [].forEach : function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }, 1318: function (t, n, e) {
            var r = e(5656), o = e(7466), i = e(1400), c = function (t) {
                return function (n, e, c) {
                    var u, a = r(n), s = o(a.length), f = i(c, s);
                    if (t && e != e) {
                        for (; s > f;) if ((u = a[f++]) != u) return !0
                    } else for (; s > f; f++) if ((t || f in a) && a[f] === e) return t || f || 0;
                    return !t && -1
                }
            };
            t.exports = {includes: c(!0), indexOf: c(!1)}
        }, 2092: function (t, n, e) {
            var r = e(9974), o = e(8361), i = e(7908), c = e(7466), u = e(5417), a = [].push, s = function (t) {
                var n = 1 == t, e = 2 == t, s = 3 == t, f = 4 == t, p = 6 == t, l = 7 == t, h = 5 == t || p;
                return function (y, d, v, b) {
                    for (var g, m, E = i(y), O = o(E), S = r(d, v, 3), w = c(O.length), _ = 0, T = b || u, x = n ? T(y, w) : e || l ? T(y, 0) : void 0; w > _; _++) if ((h || _ in O) && (m = S(g = O[_], _, E), t)) if (n) x[_] = m; else if (m) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return g;
                        case 6:
                            return _;
                        case 2:
                            a.call(x, g)
                    } else switch (t) {
                        case 4:
                            return !1;
                        case 7:
                            a.call(x, g)
                    }
                    return p ? -1 : s || f ? f : x
                }
            };
            t.exports = {
                forEach: s(0),
                map: s(1),
                filter: s(2),
                some: s(3),
                every: s(4),
                find: s(5),
                findIndex: s(6),
                filterOut: s(7)
            }
        }, 1194: function (t, n, e) {
            var r = e(7293), o = e(5112), i = e(7392), c = o("species");
            t.exports = function (t) {
                return i >= 51 || !r((function () {
                    var n = [];
                    return (n.constructor = {})[c] = function () {
                        return {foo: 1}
                    }, 1 !== n[t](Boolean).foo
                }))
            }
        }, 9341: function (t, n, e) {
            "use strict";
            var r = e(7293);
            t.exports = function (t, n) {
                var e = [][t];
                return !!e && r((function () {
                    e.call(null, n || function () {
                        throw 1
                    }, 1)
                }))
            }
        }, 9207: function (t, n, e) {
            var r = e(9781), o = e(7293), i = e(6656), c = Object.defineProperty, u = {}, a = function (t) {
                throw t
            };
            t.exports = function (t, n) {
                if (i(u, t)) return u[t];
                n || (n = {});
                var e = [][t], s = !!i(n, "ACCESSORS") && n.ACCESSORS, f = i(n, 0) ? n[0] : a,
                    p = i(n, 1) ? n[1] : void 0;
                return u[t] = !!e && !o((function () {
                    if (s && !r) return !0;
                    var t = {length: -1};
                    s ? c(t, 1, {enumerable: !0, get: a}) : t[1] = 1, e.call(t, f, p)
                }))
            }
        }, 5417: function (t, n, e) {
            var r = e(111), o = e(3157), i = e(5112)("species");
            t.exports = function (t, n) {
                var e;
                return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) ? r(e) && null === (e = e[i]) && (e = void 0) : e = void 0), new (void 0 === e ? Array : e)(0 === n ? 0 : n)
            }
        }, 7072: function (t, n, e) {
            var r = e(5112)("iterator"), o = !1;
            try {
                var i = 0, c = {
                    next: function () {
                        return {done: !!i++}
                    }, return: function () {
                        o = !0
                    }
                };
                c[r] = function () {
                    return this
                }, Array.from(c, (function () {
                    throw 2
                }))
            } catch (t) {
            }
            t.exports = function (t, n) {
                if (!n && !o) return !1;
                var e = !1;
                try {
                    var i = {};
                    i[r] = function () {
                        return {
                            next: function () {
                                return {done: e = !0}
                            }
                        }
                    }, t(i)
                } catch (t) {
                }
                return e
            }
        }, 4326: function (t) {
            var n = {}.toString;
            t.exports = function (t) {
                return n.call(t).slice(8, -1)
            }
        }, 648: function (t, n, e) {
            var r = e(1694), o = e(4326), i = e(5112)("toStringTag"), c = "Arguments" == o(function () {
                return arguments
            }());
            t.exports = r ? o : function (t) {
                var n, e, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
                    try {
                        return t[n]
                    } catch (t) {
                    }
                }(n = Object(t), i)) ? e : c ? o(n) : "Object" == (r = o(n)) && "function" == typeof n.callee ? "Arguments" : r
            }
        }, 5631: function (t, n, e) {
            "use strict";
            var r = e(3070).f, o = e(30), i = e(2248), c = e(9974), u = e(5787), a = e(408), s = e(654), f = e(6340),
                p = e(9781), l = e(2423).fastKey, h = e(9909), y = h.set, d = h.getterFor;
            t.exports = {
                getConstructor: function (t, n, e, s) {
                    var f = t((function (t, r) {
                        u(t, f, n), y(t, {
                            type: n,
                            index: o(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), p || (t.size = 0), null != r && a(r, t[s], {that: t, AS_ENTRIES: e})
                    })), h = d(n), v = function (t, n, e) {
                        var r, o, i = h(t), c = b(t, n);
                        return c ? c.value = e : (i.last = c = {
                            index: o = l(n, !0),
                            key: n,
                            value: e,
                            previous: r = i.last,
                            next: void 0,
                            removed: !1
                        }, i.first || (i.first = c), r && (r.next = c), p ? i.size++ : t.size++, "F" !== o && (i.index[o] = c)), t
                    }, b = function (t, n) {
                        var e, r = h(t), o = l(n);
                        if ("F" !== o) return r.index[o];
                        for (e = r.first; e; e = e.next) if (e.key == n) return e
                    };
                    return i(f.prototype, {
                        clear: function () {
                            for (var t = h(this), n = t.index, e = t.first; e;) e.removed = !0, e.previous && (e.previous = e.previous.next = void 0), delete n[e.index], e = e.next;
                            t.first = t.last = void 0, p ? t.size = 0 : this.size = 0
                        }, delete: function (t) {
                            var n = this, e = h(n), r = b(n, t);
                            if (r) {
                                var o = r.next, i = r.previous;
                                delete e.index[r.index], r.removed = !0, i && (i.next = o), o && (o.previous = i), e.first == r && (e.first = o), e.last == r && (e.last = i), p ? e.size-- : n.size--
                            }
                            return !!r
                        }, forEach: function (t) {
                            for (var n, e = h(this), r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.next : e.first;) for (r(n.value, n.key, this); n && n.removed;) n = n.previous
                        }, has: function (t) {
                            return !!b(this, t)
                        }
                    }), i(f.prototype, e ? {
                        get: function (t) {
                            var n = b(this, t);
                            return n && n.value
                        }, set: function (t, n) {
                            return v(this, 0 === t ? 0 : t, n)
                        }
                    } : {
                        add: function (t) {
                            return v(this, t = 0 === t ? 0 : t, t)
                        }
                    }), p && r(f.prototype, "size", {
                        get: function () {
                            return h(this).size
                        }
                    }), f
                }, setStrong: function (t, n, e) {
                    var r = n + " Iterator", o = d(n), i = d(r);
                    s(t, n, (function (t, n) {
                        y(this, {type: r, target: t, state: o(t), kind: n, last: void 0})
                    }), (function () {
                        for (var t = i(this), n = t.kind, e = t.last; e && e.removed;) e = e.previous;
                        return t.target && (t.last = e = e ? e.next : t.state.first) ? "keys" == n ? {
                            value: e.key,
                            done: !1
                        } : "values" == n ? {value: e.value, done: !1} : {
                            value: [e.key, e.value],
                            done: !1
                        } : (t.target = void 0, {value: void 0, done: !0})
                    }), e ? "entries" : "values", !e, !0), f(n)
                }
            }
        }, 7710: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(7854), i = e(4705), c = e(1320), u = e(2423), a = e(408), s = e(5787), f = e(111),
                p = e(7293), l = e(7072), h = e(8003), y = e(9587);
            t.exports = function (t, n, e) {
                var d = -1 !== t.indexOf("Map"), v = -1 !== t.indexOf("Weak"), b = d ? "set" : "add", g = o[t],
                    m = g && g.prototype, E = g, O = {}, S = function (t) {
                        var n = m[t];
                        c(m, t, "add" == t ? function (t) {
                            return n.call(this, 0 === t ? 0 : t), this
                        } : "delete" == t ? function (t) {
                            return !(v && !f(t)) && n.call(this, 0 === t ? 0 : t)
                        } : "get" == t ? function (t) {
                            return v && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
                        } : "has" == t ? function (t) {
                            return !(v && !f(t)) && n.call(this, 0 === t ? 0 : t)
                        } : function (t, e) {
                            return n.call(this, 0 === t ? 0 : t, e), this
                        })
                    };
                if (i(t, "function" != typeof g || !(v || m.forEach && !p((function () {
                    (new g).entries().next()
                }))))) E = e.getConstructor(n, t, d, b), u.REQUIRED = !0; else if (i(t, !0)) {
                    var w = new E, _ = w[b](v ? {} : -0, 1) != w, T = p((function () {
                        w.has(1)
                    })), x = l((function (t) {
                        new g(t)
                    })), A = !v && p((function () {
                        for (var t = new g, n = 5; n--;) t[b](n, n);
                        return !t.has(-0)
                    }));
                    x || ((E = n((function (n, e) {
                        s(n, E, t);
                        var r = y(new g, n, E);
                        return null != e && a(e, r[b], {that: r, AS_ENTRIES: d}), r
                    }))).prototype = m, m.constructor = E), (T || A) && (S("delete"), S("has"), d && S("get")), (A || _) && S(b), v && m.clear && delete m.clear
                }
                return O[t] = E, r({global: !0, forced: E != g}, O), h(E, t), v || e.setStrong(E, t, d), E
            }
        }, 9920: function (t, n, e) {
            var r = e(6656), o = e(3887), i = e(1236), c = e(3070);
            t.exports = function (t, n) {
                for (var e = o(n), u = c.f, a = i.f, s = 0; s < e.length; s++) {
                    var f = e[s];
                    r(t, f) || u(t, f, a(n, f))
                }
            }
        }, 8544: function (t, n, e) {
            var r = e(7293);
            t.exports = !r((function () {
                function t() {
                }

                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            }))
        }, 4994: function (t, n, e) {
            "use strict";
            var r = e(3383).IteratorPrototype, o = e(30), i = e(9114), c = e(8003), u = e(7497), a = function () {
                return this
            };
            t.exports = function (t, n, e) {
                var s = n + " Iterator";
                return t.prototype = o(r, {next: i(1, e)}), c(t, s, !1, !0), u[s] = a, t
            }
        }, 8880: function (t, n, e) {
            var r = e(9781), o = e(3070), i = e(9114);
            t.exports = r ? function (t, n, e) {
                return o.f(t, n, i(1, e))
            } : function (t, n, e) {
                return t[n] = e, t
            }
        }, 9114: function (t) {
            t.exports = function (t, n) {
                return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
            }
        }, 6135: function (t, n, e) {
            "use strict";
            var r = e(7593), o = e(3070), i = e(9114);
            t.exports = function (t, n, e) {
                var c = r(n);
                c in t ? o.f(t, c, i(0, e)) : t[c] = e
            }
        }, 654: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(4994), i = e(9518), c = e(7674), u = e(8003), a = e(8880), s = e(1320), f = e(5112),
                p = e(1913), l = e(7497), h = e(3383), y = h.IteratorPrototype, d = h.BUGGY_SAFARI_ITERATORS,
                v = f("iterator"), b = "keys", g = "values", m = "entries", E = function () {
                    return this
                };
            t.exports = function (t, n, e, f, h, O, S) {
                o(e, n, f);
                var w, _, T, x = function (t) {
                        if (t === h && C) return C;
                        if (!d && t in N) return N[t];
                        switch (t) {
                            case b:
                            case g:
                            case m:
                                return function () {
                                    return new e(this, t)
                                }
                        }
                        return function () {
                            return new e(this)
                        }
                    }, A = n + " Iterator", I = !1, N = t.prototype, R = N[v] || N["@@iterator"] || h && N[h],
                    C = !d && R || x(h), j = "Array" == n && N.entries || R;
                if (j && (w = i(j.call(new t)), y !== Object.prototype && w.next && (p || i(w) === y || (c ? c(w, y) : "function" != typeof w[v] && a(w, v, E)), u(w, A, !0, !0), p && (l[A] = E))), h == g && R && R.name !== g && (I = !0, C = function () {
                    return R.call(this)
                }), p && !S || N[v] === C || a(N, v, C), l[n] = C, h) if (_ = {
                    values: x(g),
                    keys: O ? C : x(b),
                    entries: x(m)
                }, S) for (T in _) (d || I || !(T in N)) && s(N, T, _[T]); else r({
                    target: n,
                    proto: !0,
                    forced: d || I
                }, _);
                return _
            }
        }, 7235: function (t, n, e) {
            var r = e(857), o = e(6656), i = e(6061), c = e(3070).f;
            t.exports = function (t) {
                var n = r.Symbol || (r.Symbol = {});
                o(n, t) || c(n, t, {value: i.f(t)})
            }
        }, 9781: function (t, n, e) {
            var r = e(7293);
            t.exports = !r((function () {
                return 7 != Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    }
                })[1]
            }))
        }, 317: function (t, n, e) {
            var r = e(7854), o = e(111), i = r.document, c = o(i) && o(i.createElement);
            t.exports = function (t) {
                return c ? i.createElement(t) : {}
            }
        }, 8324: function (t) {
            t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }, 6833: function (t, n, e) {
            var r = e(8113);
            t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
        }, 5268: function (t, n, e) {
            var r = e(4326), o = e(7854);
            t.exports = "process" == r(o.process)
        }, 1036: function (t, n, e) {
            var r = e(8113);
            t.exports = /web0s(?!.*chrome)/i.test(r)
        }, 8113: function (t, n, e) {
            var r = e(5005);
            t.exports = r("navigator", "userAgent") || ""
        }, 7392: function (t, n, e) {
            var r, o, i = e(7854), c = e(8113), u = i.process, a = u && u.versions, s = a && a.v8;
            s ? o = (r = s.split("."))[0] + r[1] : c && (!(r = c.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = c.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o
        }, 748: function (t) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, 2109: function (t, n, e) {
            var r = e(7854), o = e(1236).f, i = e(8880), c = e(1320), u = e(3505), a = e(9920), s = e(4705);
            t.exports = function (t, n) {
                var e, f, p, l, h, y = t.target, d = t.global, v = t.stat;
                if (e = d ? r : v ? r[y] || u(y, {}) : (r[y] || {}).prototype) for (f in n) {
                    if (l = n[f], p = t.noTargetGet ? (h = o(e, f)) && h.value : e[f], !s(d ? f : y + (v ? "." : "#") + f, t.forced) && void 0 !== p) {
                        if (typeof l == typeof p) continue;
                        a(l, p)
                    }
                    (t.sham || p && p.sham) && i(l, "sham", !0), c(e, f, l, t)
                }
            }
        }, 7293: function (t) {
            t.exports = function (t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }, 6677: function (t, n, e) {
            var r = e(7293);
            t.exports = !r((function () {
                return Object.isExtensible(Object.preventExtensions({}))
            }))
        }, 9974: function (t, n, e) {
            var r = e(3099);
            t.exports = function (t, n, e) {
                if (r(t), void 0 === n) return t;
                switch (e) {
                    case 0:
                        return function () {
                            return t.call(n)
                        };
                    case 1:
                        return function (e) {
                            return t.call(n, e)
                        };
                    case 2:
                        return function (e, r) {
                            return t.call(n, e, r)
                        };
                    case 3:
                        return function (e, r, o) {
                            return t.call(n, e, r, o)
                        }
                }
                return function () {
                    return t.apply(n, arguments)
                }
            }
        }, 5005: function (t, n, e) {
            var r = e(857), o = e(7854), i = function (t) {
                return "function" == typeof t ? t : void 0
            };
            t.exports = function (t, n) {
                return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][n] || o[t] && o[t][n]
            }
        }, 1246: function (t, n, e) {
            var r = e(648), o = e(7497), i = e(5112)("iterator");
            t.exports = function (t) {
                if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
            }
        }, 7854: function (t, n, e) {
            var r = function (t) {
                return t && t.Math == Math && t
            };
            t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e.g && e.g) || function () {
                return this
            }() || Function("return this")()
        }, 6656: function (t) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
                return n.call(t, e)
            }
        }, 3501: function (t) {
            t.exports = {}
        }, 842: function (t, n, e) {
            var r = e(7854);
            t.exports = function (t, n) {
                var e = r.console;
                e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n))
            }
        }, 490: function (t, n, e) {
            var r = e(5005);
            t.exports = r("document", "documentElement")
        }, 4664: function (t, n, e) {
            var r = e(9781), o = e(7293), i = e(317);
            t.exports = !r && !o((function () {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 8361: function (t, n, e) {
            var r = e(7293), o = e(4326), i = "".split;
            t.exports = r((function () {
                return !Object("z").propertyIsEnumerable(0)
            })) ? function (t) {
                return "String" == o(t) ? i.call(t, "") : Object(t)
            } : Object
        }, 9587: function (t, n, e) {
            var r = e(111), o = e(7674);
            t.exports = function (t, n, e) {
                var i, c;
                return o && "function" == typeof (i = n.constructor) && i !== e && r(c = i.prototype) && c !== e.prototype && o(t, c), t
            }
        }, 2788: function (t, n, e) {
            var r = e(5465), o = Function.toString;
            "function" != typeof r.inspectSource && (r.inspectSource = function (t) {
                return o.call(t)
            }), t.exports = r.inspectSource
        }, 2423: function (t, n, e) {
            var r = e(3501), o = e(111), i = e(6656), c = e(3070).f, u = e(9711), a = e(6677), s = u("meta"), f = 0,
                p = Object.isExtensible || function () {
                    return !0
                }, l = function (t) {
                    c(t, s, {value: {objectID: "O" + ++f, weakData: {}}})
                }, h = t.exports = {
                    REQUIRED: !1, fastKey: function (t, n) {
                        if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!i(t, s)) {
                            if (!p(t)) return "F";
                            if (!n) return "E";
                            l(t)
                        }
                        return t[s].objectID
                    }, getWeakData: function (t, n) {
                        if (!i(t, s)) {
                            if (!p(t)) return !0;
                            if (!n) return !1;
                            l(t)
                        }
                        return t[s].weakData
                    }, onFreeze: function (t) {
                        return a && h.REQUIRED && p(t) && !i(t, s) && l(t), t
                    }
                };
            r[s] = !0
        }, 9909: function (t, n, e) {
            var r, o, i, c = e(8536), u = e(7854), a = e(111), s = e(8880), f = e(6656), p = e(5465), l = e(6200),
                h = e(3501), y = u.WeakMap;
            if (c) {
                var d = p.state || (p.state = new y), v = d.get, b = d.has, g = d.set;
                r = function (t, n) {
                    return n.facade = t, g.call(d, t, n), n
                }, o = function (t) {
                    return v.call(d, t) || {}
                }, i = function (t) {
                    return b.call(d, t)
                }
            } else {
                var m = l("state");
                h[m] = !0, r = function (t, n) {
                    return n.facade = t, s(t, m, n), n
                }, o = function (t) {
                    return f(t, m) ? t[m] : {}
                }, i = function (t) {
                    return f(t, m)
                }
            }
            t.exports = {
                set: r, get: o, has: i, enforce: function (t) {
                    return i(t) ? o(t) : r(t, {})
                }, getterFor: function (t) {
                    return function (n) {
                        var e;
                        if (!a(n) || (e = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                        return e
                    }
                }
            }
        }, 7659: function (t, n, e) {
            var r = e(5112), o = e(7497), i = r("iterator"), c = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (o.Array === t || c[i] === t)
            }
        }, 3157: function (t, n, e) {
            var r = e(4326);
            t.exports = Array.isArray || function (t) {
                return "Array" == r(t)
            }
        }, 4705: function (t, n, e) {
            var r = e(7293), o = /#|\.prototype\./, i = function (t, n) {
                var e = u[c(t)];
                return e == s || e != a && ("function" == typeof n ? r(n) : !!n)
            }, c = i.normalize = function (t) {
                return String(t).replace(o, ".").toLowerCase()
            }, u = i.data = {}, a = i.NATIVE = "N", s = i.POLYFILL = "P";
            t.exports = i
        }, 111: function (t) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }, 1913: function (t) {
            t.exports = !1
        }, 408: function (t, n, e) {
            var r = e(9670), o = e(7659), i = e(7466), c = e(9974), u = e(1246), a = e(9212), s = function (t, n) {
                this.stopped = t, this.result = n
            };
            t.exports = function (t, n, e) {
                var f, p, l, h, y, d, v, b = e && e.that, g = !(!e || !e.AS_ENTRIES), m = !(!e || !e.IS_ITERATOR),
                    E = !(!e || !e.INTERRUPTED), O = c(n, b, 1 + g + E), S = function (t) {
                        return f && a(f), new s(!0, t)
                    }, w = function (t) {
                        return g ? (r(t), E ? O(t[0], t[1], S) : O(t[0], t[1])) : E ? O(t, S) : O(t)
                    };
                if (m) f = t; else {
                    if ("function" != typeof (p = u(t))) throw TypeError("Target is not iterable");
                    if (o(p)) {
                        for (l = 0, h = i(t.length); h > l; l++) if ((y = w(t[l])) && y instanceof s) return y;
                        return new s(!1)
                    }
                    f = p.call(t)
                }
                for (d = f.next; !(v = d.call(f)).done;) {
                    try {
                        y = w(v.value)
                    } catch (t) {
                        throw a(f), t
                    }
                    if ("object" == typeof y && y && y instanceof s) return y
                }
                return new s(!1)
            }
        }, 9212: function (t, n, e) {
            var r = e(9670);
            t.exports = function (t) {
                var n = t.return;
                if (void 0 !== n) return r(n.call(t)).value
            }
        }, 3383: function (t, n, e) {
            "use strict";
            var r, o, i, c = e(9518), u = e(8880), a = e(6656), s = e(5112), f = e(1913), p = s("iterator"), l = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (r = o) : l = !0), null == r && (r = {}), f || a(r, p) || u(r, p, (function () {
                return this
            })), t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: l}
        }, 7497: function (t) {
            t.exports = {}
        }, 5948: function (t, n, e) {
            var r, o, i, c, u, a, s, f, p = e(7854), l = e(1236).f, h = e(261).set, y = e(6833), d = e(1036),
                v = e(5268), b = p.MutationObserver || p.WebKitMutationObserver, g = p.document, m = p.process,
                E = p.Promise, O = l(p, "queueMicrotask"), S = O && O.value;
            S || (r = function () {
                var t, n;
                for (v && (t = m.domain) && t.exit(); o;) {
                    n = o.fn, o = o.next;
                    try {
                        n()
                    } catch (t) {
                        throw o ? c() : i = void 0, t
                    }
                }
                i = void 0, t && t.enter()
            }, y || v || d || !b || !g ? E && E.resolve ? (s = E.resolve(void 0), f = s.then, c = function () {
                f.call(s, r)
            }) : c = v ? function () {
                m.nextTick(r)
            } : function () {
                h.call(p, r)
            } : (u = !0, a = g.createTextNode(""), new b(r).observe(a, {characterData: !0}), c = function () {
                a.data = u = !u
            })), t.exports = S || function (t) {
                var n = {fn: t, next: void 0};
                i && (i.next = n), o || (o = n, c()), i = n
            }
        }, 3366: function (t, n, e) {
            var r = e(7854);
            t.exports = r.Promise
        }, 133: function (t, n, e) {
            var r = e(7293);
            t.exports = !!Object.getOwnPropertySymbols && !r((function () {
                return !String(Symbol())
            }))
        }, 8536: function (t, n, e) {
            var r = e(7854), o = e(2788), i = r.WeakMap;
            t.exports = "function" == typeof i && /native code/.test(o(i))
        }, 8523: function (t, n, e) {
            "use strict";
            var r = e(3099), o = function (t) {
                var n, e;
                this.promise = new t((function (t, r) {
                    if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                    n = t, e = r
                })), this.resolve = r(n), this.reject = r(e)
            };
            t.exports.f = function (t) {
                return new o(t)
            }
        }, 1574: function (t, n, e) {
            "use strict";
            var r = e(9781), o = e(7293), i = e(1956), c = e(5181), u = e(5296), a = e(7908), s = e(8361),
                f = Object.assign, p = Object.defineProperty;
            t.exports = !f || o((function () {
                if (r && 1 !== f({b: 1}, f(p({}, "a", {
                    enumerable: !0, get: function () {
                        p(this, "b", {value: 3, enumerable: !1})
                    }
                }), {b: 2})).b) return !0;
                var t = {}, n = {}, e = Symbol(), o = "abcdefghijklmnopqrst";
                return t[e] = 7, o.split("").forEach((function (t) {
                    n[t] = t
                })), 7 != f({}, t)[e] || i(f({}, n)).join("") != o
            })) ? function (t, n) {
                for (var e = a(t), o = arguments.length, f = 1, p = c.f, l = u.f; o > f;) for (var h, y = s(arguments[f++]), d = p ? i(y).concat(p(y)) : i(y), v = d.length, b = 0; v > b;) h = d[b++], r && !l.call(y, h) || (e[h] = y[h]);
                return e
            } : f
        }, 30: function (t, n, e) {
            var r, o = e(9670), i = e(6048), c = e(748), u = e(3501), a = e(490), s = e(317), f = e(6200)("IE_PROTO"),
                p = function () {
                }, l = function (t) {
                    return "<script>" + t + "<\/script>"
                }, h = function () {
                    try {
                        r = document.domain && new ActiveXObject("htmlfile")
                    } catch (t) {
                    }
                    var t, n;
                    h = r ? function (t) {
                        t.write(l("")), t.close();
                        var n = t.parentWindow.Object;
                        return t = null, n
                    }(r) : ((n = s("iframe")).style.display = "none", a.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write(l("document.F=Object")), t.close(), t.F);
                    for (var e = c.length; e--;) delete h.prototype[c[e]];
                    return h()
                };
            u[f] = !0, t.exports = Object.create || function (t, n) {
                var e;
                return null !== t ? (p.prototype = o(t), e = new p, p.prototype = null, e[f] = t) : e = h(), void 0 === n ? e : i(e, n)
            }
        }, 6048: function (t, n, e) {
            var r = e(9781), o = e(3070), i = e(9670), c = e(1956);
            t.exports = r ? Object.defineProperties : function (t, n) {
                i(t);
                for (var e, r = c(n), u = r.length, a = 0; u > a;) o.f(t, e = r[a++], n[e]);
                return t
            }
        }, 3070: function (t, n, e) {
            var r = e(9781), o = e(4664), i = e(9670), c = e(7593), u = Object.defineProperty;
            n.f = r ? u : function (t, n, e) {
                if (i(t), n = c(n, !0), i(e), o) try {
                    return u(t, n, e)
                } catch (t) {
                }
                if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
                return "value" in e && (t[n] = e.value), t
            }
        }, 1236: function (t, n, e) {
            var r = e(9781), o = e(5296), i = e(9114), c = e(5656), u = e(7593), a = e(6656), s = e(4664),
                f = Object.getOwnPropertyDescriptor;
            n.f = r ? f : function (t, n) {
                if (t = c(t), n = u(n, !0), s) try {
                    return f(t, n)
                } catch (t) {
                }
                if (a(t, n)) return i(!o.f.call(t, n), t[n])
            }
        }, 1156: function (t, n, e) {
            var r = e(5656), o = e(8006).f, i = {}.toString,
                c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function (t) {
                return c && "[object Window]" == i.call(t) ? function (t) {
                    try {
                        return o(t)
                    } catch (t) {
                        return c.slice()
                    }
                }(t) : o(r(t))
            }
        }, 8006: function (t, n, e) {
            var r = e(6324), o = e(748).concat("length", "prototype");
            n.f = Object.getOwnPropertyNames || function (t) {
                return r(t, o)
            }
        }, 5181: function (t, n) {
            n.f = Object.getOwnPropertySymbols
        }, 9518: function (t, n, e) {
            var r = e(6656), o = e(7908), i = e(6200), c = e(8544), u = i("IE_PROTO"), a = Object.prototype;
            t.exports = c ? Object.getPrototypeOf : function (t) {
                return t = o(t), r(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
            }
        }, 6324: function (t, n, e) {
            var r = e(6656), o = e(5656), i = e(1318).indexOf, c = e(3501);
            t.exports = function (t, n) {
                var e, u = o(t), a = 0, s = [];
                for (e in u) !r(c, e) && r(u, e) && s.push(e);
                for (; n.length > a;) r(u, e = n[a++]) && (~i(s, e) || s.push(e));
                return s
            }
        }, 1956: function (t, n, e) {
            var r = e(6324), o = e(748);
            t.exports = Object.keys || function (t) {
                return r(t, o)
            }
        }, 5296: function (t, n) {
            "use strict";
            var e = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !e.call({1: 2}, 1);
            n.f = o ? function (t) {
                var n = r(this, t);
                return !!n && n.enumerable
            } : e
        }, 7674: function (t, n, e) {
            var r = e(9670), o = e(6077);
            t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var t, n = !1, e = {};
                try {
                    (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), n = e instanceof Array
                } catch (t) {
                }
                return function (e, i) {
                    return r(e), o(i), n ? t.call(e, i) : e.__proto__ = i, e
                }
            }() : void 0)
        }, 288: function (t, n, e) {
            "use strict";
            var r = e(1694), o = e(648);
            t.exports = r ? {}.toString : function () {
                return "[object " + o(this) + "]"
            }
        }, 3887: function (t, n, e) {
            var r = e(5005), o = e(8006), i = e(5181), c = e(9670);
            t.exports = r("Reflect", "ownKeys") || function (t) {
                var n = o.f(c(t)), e = i.f;
                return e ? n.concat(e(t)) : n
            }
        }, 857: function (t, n, e) {
            var r = e(7854);
            t.exports = r
        }, 2534: function (t) {
            t.exports = function (t) {
                try {
                    return {error: !1, value: t()}
                } catch (t) {
                    return {error: !0, value: t}
                }
            }
        }, 9478: function (t, n, e) {
            var r = e(9670), o = e(111), i = e(8523);
            t.exports = function (t, n) {
                if (r(t), o(n) && n.constructor === t) return n;
                var e = i.f(t);
                return (0, e.resolve)(n), e.promise
            }
        }, 2248: function (t, n, e) {
            var r = e(1320);
            t.exports = function (t, n, e) {
                for (var o in n) r(t, o, n[o], e);
                return t
            }
        }, 1320: function (t, n, e) {
            var r = e(7854), o = e(8880), i = e(6656), c = e(3505), u = e(2788), a = e(9909), s = a.get, f = a.enforce,
                p = String(String).split("String");
            (t.exports = function (t, n, e, u) {
                var a, s = !!u && !!u.unsafe, l = !!u && !!u.enumerable, h = !!u && !!u.noTargetGet;
                "function" == typeof e && ("string" != typeof n || i(e, "name") || o(e, "name", n), (a = f(e)).source || (a.source = p.join("string" == typeof n ? n : ""))), t !== r ? (s ? !h && t[n] && (l = !0) : delete t[n], l ? t[n] = e : o(t, n, e)) : l ? t[n] = e : c(n, e)
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && s(this).source || u(this)
            }))
        }, 7066: function (t, n, e) {
            "use strict";
            var r = e(9670);
            t.exports = function () {
                var t = r(this), n = "";
                return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
            }
        }, 4488: function (t) {
            t.exports = function (t) {
                if (null == t) throw TypeError("Can't call method on " + t);
                return t
            }
        }, 3505: function (t, n, e) {
            var r = e(7854), o = e(8880);
            t.exports = function (t, n) {
                try {
                    o(r, t, n)
                } catch (e) {
                    r[t] = n
                }
                return n
            }
        }, 6340: function (t, n, e) {
            "use strict";
            var r = e(5005), o = e(3070), i = e(5112), c = e(9781), u = i("species");
            t.exports = function (t) {
                var n = r(t), e = o.f;
                c && n && !n[u] && e(n, u, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }
        }, 8003: function (t, n, e) {
            var r = e(3070).f, o = e(6656), i = e(5112)("toStringTag");
            t.exports = function (t, n, e) {
                t && !o(t = e ? t : t.prototype, i) && r(t, i, {configurable: !0, value: n})
            }
        }, 6200: function (t, n, e) {
            var r = e(2309), o = e(9711), i = r("keys");
            t.exports = function (t) {
                return i[t] || (i[t] = o(t))
            }
        }, 5465: function (t, n, e) {
            var r = e(7854), o = e(3505), i = "__core-js_shared__", c = r[i] || o(i, {});
            t.exports = c
        }, 2309: function (t, n, e) {
            var r = e(1913), o = e(5465);
            (t.exports = function (t, n) {
                return o[t] || (o[t] = void 0 !== n ? n : {})
            })("versions", []).push({
                version: "3.8.2",
                mode: r ? "pure" : "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }, 6707: function (t, n, e) {
            var r = e(9670), o = e(3099), i = e(5112)("species");
            t.exports = function (t, n) {
                var e, c = r(t).constructor;
                return void 0 === c || null == (e = r(c)[i]) ? n : o(e)
            }
        }, 8710: function (t, n, e) {
            var r = e(9958), o = e(4488), i = function (t) {
                return function (n, e) {
                    var i, c, u = String(o(n)), a = r(e), s = u.length;
                    return a < 0 || a >= s ? t ? "" : void 0 : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536
                }
            };
            t.exports = {codeAt: i(!1), charAt: i(!0)}
        }, 261: function (t, n, e) {
            var r, o, i, c = e(7854), u = e(7293), a = e(9974), s = e(490), f = e(317), p = e(6833), l = e(5268),
                h = c.location, y = c.setImmediate, d = c.clearImmediate, v = c.process, b = c.MessageChannel,
                g = c.Dispatch, m = 0, E = {}, O = function (t) {
                    if (E.hasOwnProperty(t)) {
                        var n = E[t];
                        delete E[t], n()
                    }
                }, S = function (t) {
                    return function () {
                        O(t)
                    }
                }, w = function (t) {
                    O(t.data)
                }, _ = function (t) {
                    c.postMessage(t + "", h.protocol + "//" + h.host)
                };
            y && d || (y = function (t) {
                for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
                return E[++m] = function () {
                    ("function" == typeof t ? t : Function(t)).apply(void 0, n)
                }, r(m), m
            }, d = function (t) {
                delete E[t]
            }, l ? r = function (t) {
                v.nextTick(S(t))
            } : g && g.now ? r = function (t) {
                g.now(S(t))
            } : b && !p ? (i = (o = new b).port2, o.port1.onmessage = w, r = a(i.postMessage, i, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts && h && "file:" !== h.protocol && !u(_) ? (r = _, c.addEventListener("message", w, !1)) : r = "onreadystatechange" in f("script") ? function (t) {
                s.appendChild(f("script")).onreadystatechange = function () {
                    s.removeChild(this), O(t)
                }
            } : function (t) {
                setTimeout(S(t), 0)
            }), t.exports = {set: y, clear: d}
        }, 1400: function (t, n, e) {
            var r = e(9958), o = Math.max, i = Math.min;
            t.exports = function (t, n) {
                var e = r(t);
                return e < 0 ? o(e + n, 0) : i(e, n)
            }
        }, 5656: function (t, n, e) {
            var r = e(8361), o = e(4488);
            t.exports = function (t) {
                return r(o(t))
            }
        }, 9958: function (t) {
            var n = Math.ceil, e = Math.floor;
            t.exports = function (t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? e : n)(t)
            }
        }, 7466: function (t, n, e) {
            var r = e(9958), o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0
            }
        }, 7908: function (t, n, e) {
            var r = e(4488);
            t.exports = function (t) {
                return Object(r(t))
            }
        }, 7593: function (t, n, e) {
            var r = e(111);
            t.exports = function (t, n) {
                if (!r(t)) return t;
                var e, o;
                if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
                if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
                if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }, 1694: function (t, n, e) {
            var r = {};
            r[e(5112)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
        }, 9711: function (t) {
            var n = 0, e = Math.random();
            t.exports = function (t) {
                return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + e).toString(36)
            }
        }, 3307: function (t, n, e) {
            var r = e(133);
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }, 6061: function (t, n, e) {
            var r = e(5112);
            n.f = r
        }, 5112: function (t, n, e) {
            var r = e(7854), o = e(2309), i = e(6656), c = e(9711), u = e(133), a = e(3307), s = o("wks"), f = r.Symbol,
                p = a ? f : f && f.withoutSetter || c;
            t.exports = function (t) {
                return i(s, t) || (u && i(f, t) ? s[t] = f[t] : s[t] = p("Symbol." + t)), s[t]
            }
        }, 2222: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(7293), i = e(3157), c = e(111), u = e(7908), a = e(7466), s = e(6135), f = e(5417),
                p = e(1194), l = e(5112), h = e(7392), y = l("isConcatSpreadable"), d = 9007199254740991,
                v = "Maximum allowed index exceeded", b = h >= 51 || !o((function () {
                    var t = [];
                    return t[y] = !1, t.concat()[0] !== t
                })), g = p("concat"), m = function (t) {
                    if (!c(t)) return !1;
                    var n = t[y];
                    return void 0 !== n ? !!n : i(t)
                };
            r({target: "Array", proto: !0, forced: !b || !g}, {
                concat: function (t) {
                    var n, e, r, o, i, c = u(this), p = f(c, 0), l = 0;
                    for (n = -1, r = arguments.length; n < r; n++) if (m(i = -1 === n ? c : arguments[n])) {
                        if (l + (o = a(i.length)) > d) throw TypeError(v);
                        for (e = 0; e < o; e++, l++) e in i && s(p, l, i[e])
                    } else {
                        if (l >= d) throw TypeError(v);
                        s(p, l++, i)
                    }
                    return p.length = l, p
                }
            })
        }, 4553: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(2092).findIndex, i = e(1223), c = e(9207), u = "findIndex", a = !0, s = c(u);
            u in [] && Array(1).findIndex((function () {
                a = !1
            })), r({target: "Array", proto: !0, forced: a || !s}, {
                findIndex: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), i(u)
        }, 9826: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(2092).find, i = e(1223), c = e(9207), u = "find", a = !0, s = c(u);
            u in [] && Array(1).find((function () {
                a = !1
            })), r({target: "Array", proto: !0, forced: a || !s}, {
                find: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), i(u)
        }, 9554: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(8533);
            r({target: "Array", proto: !0, forced: [].forEach != o}, {forEach: o})
        }, 6992: function (t, n, e) {
            "use strict";
            var r = e(5656), o = e(1223), i = e(7497), c = e(9909), u = e(654), a = "Array Iterator", s = c.set,
                f = c.getterFor(a);
            t.exports = u(Array, "Array", (function (t, n) {
                s(this, {type: a, target: r(t), index: 0, kind: n})
            }), (function () {
                var t = f(this), n = t.target, e = t.kind, r = t.index++;
                return !n || r >= n.length ? (t.target = void 0, {value: void 0, done: !0}) : "keys" == e ? {
                    value: r,
                    done: !1
                } : "values" == e ? {value: n[r], done: !1} : {value: [r, n[r]], done: !1}
            }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
        }, 9600: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(8361), i = e(5656), c = e(9341), u = [].join, a = o != Object, s = c("join", ",");
            r({target: "Array", proto: !0, forced: a || !s}, {
                join: function (t) {
                    return u.call(i(this), void 0 === t ? "," : t)
                }
            })
        }, 1249: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(2092).map, i = e(1194), c = e(9207), u = i("map"), a = c("map");
            r({target: "Array", proto: !0, forced: !u || !a}, {
                map: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, 5212: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(2092).some, i = e(9341), c = e(9207), u = i("some"), a = c("some");
            r({target: "Array", proto: !0, forced: !u || !a}, {
                some: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, 561: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(1400), i = e(9958), c = e(7466), u = e(7908), a = e(5417), s = e(6135), f = e(1194),
                p = e(9207), l = f("splice"), h = p("splice", {ACCESSORS: !0, 0: 0, 1: 2}), y = Math.max, d = Math.min,
                v = 9007199254740991, b = "Maximum allowed length exceeded";
            r({target: "Array", proto: !0, forced: !l || !h}, {
                splice: function (t, n) {
                    var e, r, f, p, l, h, g = u(this), m = c(g.length), E = o(t, m), O = arguments.length;
                    if (0 === O ? e = r = 0 : 1 === O ? (e = 0, r = m - E) : (e = O - 2, r = d(y(i(n), 0), m - E)), m + e - r > v) throw TypeError(b);
                    for (f = a(g, r), p = 0; p < r; p++) (l = E + p) in g && s(f, p, g[l]);
                    if (f.length = r, e < r) {
                        for (p = E; p < m - r; p++) h = p + e, (l = p + r) in g ? g[h] = g[l] : delete g[h];
                        for (p = m; p > m - r + e; p--) delete g[p - 1]
                    } else if (e > r) for (p = m - r; p > E; p--) h = p + e - 1, (l = p + r - 1) in g ? g[h] = g[l] : delete g[h];
                    for (p = 0; p < e; p++) g[p + E] = arguments[p + 2];
                    return g.length = m - r + e, f
                }
            })
        }, 1532: function (t, n, e) {
            "use strict";
            var r = e(7710), o = e(5631);
            t.exports = r("Map", (function (t) {
                return function () {
                    return t(this, arguments.length ? arguments[0] : void 0)
                }
            }), o)
        }, 9601: function (t, n, e) {
            var r = e(2109), o = e(1574);
            r({target: "Object", stat: !0, forced: Object.assign !== o}, {assign: o})
        }, 489: function (t, n, e) {
            var r = e(2109), o = e(7293), i = e(7908), c = e(9518), u = e(8544);
            r({
                target: "Object", stat: !0, forced: o((function () {
                    c(1)
                })), sham: !u
            }, {
                getPrototypeOf: function (t) {
                    return c(i(t))
                }
            })
        }, 7941: function (t, n, e) {
            var r = e(2109), o = e(7908), i = e(1956);
            r({
                target: "Object", stat: !0, forced: e(7293)((function () {
                    i(1)
                }))
            }, {
                keys: function (t) {
                    return i(o(t))
                }
            })
        }, 8304: function (t, n, e) {
            e(2109)({target: "Object", stat: !0}, {setPrototypeOf: e(7674)})
        }, 1539: function (t, n, e) {
            var r = e(1694), o = e(1320), i = e(288);
            r || o(Object.prototype, "toString", i, {unsafe: !0})
        }, 8674: function (t, n, e) {
            "use strict";
            var r, o, i, c, u = e(2109), a = e(1913), s = e(7854), f = e(5005), p = e(3366), l = e(1320), h = e(2248),
                y = e(8003), d = e(6340), v = e(111), b = e(3099), g = e(5787), m = e(2788), E = e(408), O = e(7072),
                S = e(6707), w = e(261).set, _ = e(5948), T = e(9478), x = e(842), A = e(8523), I = e(2534),
                N = e(9909), R = e(4705), C = e(5112), j = e(5268), P = e(7392), L = C("species"), D = "Promise",
                k = N.get, M = N.set, F = N.getterFor(D), H = p, V = s.TypeError, U = s.document, G = s.process,
                W = f("fetch"), B = A.f, K = B, Y = !!(U && U.createEvent && s.dispatchEvent),
                X = "function" == typeof PromiseRejectionEvent, z = "unhandledrejection", Q = R(D, (function () {
                    if (m(H) === String(H)) {
                        if (66 === P) return !0;
                        if (!j && !X) return !0
                    }
                    if (a && !H.prototype.finally) return !0;
                    if (P >= 51 && /native code/.test(H)) return !1;
                    var t = H.resolve(1), n = function (t) {
                        t((function () {
                        }), (function () {
                        }))
                    };
                    return (t.constructor = {})[L] = n, !(t.then((function () {
                    })) instanceof n)
                })), q = Q || !O((function (t) {
                    H.all(t).catch((function () {
                    }))
                })), $ = function (t) {
                    var n;
                    return !(!v(t) || "function" != typeof (n = t.then)) && n
                }, Z = function (t, n) {
                    if (!t.notified) {
                        t.notified = !0;
                        var e = t.reactions;
                        _((function () {
                            for (var r = t.value, o = 1 == t.state, i = 0; e.length > i;) {
                                var c, u, a, s = e[i++], f = o ? s.ok : s.fail, p = s.resolve, l = s.reject, h = s.domain;
                                try {
                                    f ? (o || (2 === t.rejection && et(t), t.rejection = 1), !0 === f ? c = r : (h && h.enter(), c = f(r), h && (h.exit(), a = !0)), c === s.promise ? l(V("Promise-chain cycle")) : (u = $(c)) ? u.call(c, p, l) : p(c)) : l(r)
                                } catch (t) {
                                    h && !a && h.exit(), l(t)
                                }
                            }
                            t.reactions = [], t.notified = !1, n && !t.rejection && tt(t)
                        }))
                    }
                }, J = function (t, n, e) {
                    var r, o;
                    Y ? ((r = U.createEvent("Event")).promise = n, r.reason = e, r.initEvent(t, !1, !0), s.dispatchEvent(r)) : r = {
                        promise: n,
                        reason: e
                    }, !X && (o = s["on" + t]) ? o(r) : t === z && x("Unhandled promise rejection", e)
                }, tt = function (t) {
                    w.call(s, (function () {
                        var n, e = t.facade, r = t.value;
                        if (nt(t) && (n = I((function () {
                            j ? G.emit("unhandledRejection", r, e) : J(z, e, r)
                        })), t.rejection = j || nt(t) ? 2 : 1, n.error)) throw n.value
                    }))
                }, nt = function (t) {
                    return 1 !== t.rejection && !t.parent
                }, et = function (t) {
                    w.call(s, (function () {
                        var n = t.facade;
                        j ? G.emit("rejectionHandled", n) : J("rejectionhandled", n, t.value)
                    }))
                }, rt = function (t, n, e) {
                    return function (r) {
                        t(n, r, e)
                    }
                }, ot = function (t, n, e) {
                    t.done || (t.done = !0, e && (t = e), t.value = n, t.state = 2, Z(t, !0))
                }, it = function (t, n, e) {
                    if (!t.done) {
                        t.done = !0, e && (t = e);
                        try {
                            if (t.facade === n) throw V("Promise can't be resolved itself");
                            var r = $(n);
                            r ? _((function () {
                                var e = {done: !1};
                                try {
                                    r.call(n, rt(it, e, t), rt(ot, e, t))
                                } catch (n) {
                                    ot(e, n, t)
                                }
                            })) : (t.value = n, t.state = 1, Z(t, !1))
                        } catch (n) {
                            ot({done: !1}, n, t)
                        }
                    }
                };
            Q && (H = function (t) {
                g(this, H, D), b(t), r.call(this);
                var n = k(this);
                try {
                    t(rt(it, n), rt(ot, n))
                } catch (t) {
                    ot(n, t)
                }
            }, (r = function (t) {
                M(this, {
                    type: D,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: [],
                    rejection: !1,
                    state: 0,
                    value: void 0
                })
            }).prototype = h(H.prototype, {
                then: function (t, n) {
                    var e = F(this), r = B(S(this, H));
                    return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = j ? G.domain : void 0, e.parent = !0, e.reactions.push(r), 0 != e.state && Z(e, !1), r.promise
                }, catch: function (t) {
                    return this.then(void 0, t)
                }
            }), o = function () {
                var t = new r, n = k(t);
                this.promise = t, this.resolve = rt(it, n), this.reject = rt(ot, n)
            }, A.f = B = function (t) {
                return t === H || t === i ? new o(t) : K(t)
            }, a || "function" != typeof p || (c = p.prototype.then, l(p.prototype, "then", (function (t, n) {
                var e = this;
                return new H((function (t, n) {
                    c.call(e, t, n)
                })).then(t, n)
            }), {unsafe: !0}), "function" == typeof W && u({
                global: !0,
                enumerable: !0,
                forced: !0
            }, {
                fetch: function (t) {
                    return T(H, W.apply(s, arguments))
                }
            }))), u({global: !0, wrap: !0, forced: Q}, {Promise: H}), y(H, D, !1, !0), d(D), i = f(D), u({
                target: D,
                stat: !0,
                forced: Q
            }, {
                reject: function (t) {
                    var n = B(this);
                    return n.reject.call(void 0, t), n.promise
                }
            }), u({target: D, stat: !0, forced: a || Q}, {
                resolve: function (t) {
                    return T(a && this === i ? H : this, t)
                }
            }), u({target: D, stat: !0, forced: q}, {
                all: function (t) {
                    var n = this, e = B(n), r = e.resolve, o = e.reject, i = I((function () {
                        var e = b(n.resolve), i = [], c = 0, u = 1;
                        E(t, (function (t) {
                            var a = c++, s = !1;
                            i.push(void 0), u++, e.call(n, t).then((function (t) {
                                s || (s = !0, i[a] = t, --u || r(i))
                            }), o)
                        })), --u || r(i)
                    }));
                    return i.error && o(i.value), e.promise
                }, race: function (t) {
                    var n = this, e = B(n), r = e.reject, o = I((function () {
                        var o = b(n.resolve);
                        E(t, (function (t) {
                            o.call(n, t).then(e.resolve, r)
                        }))
                    }));
                    return o.error && r(o.value), e.promise
                }
            })
        }, 9714: function (t, n, e) {
            "use strict";
            var r = e(1320), o = e(9670), i = e(7293), c = e(7066), u = "toString", a = RegExp.prototype,
                s = a.toString, f = i((function () {
                    return "/a/b" != s.call({source: "a", flags: "b"})
                })), p = s.name != u;
            (f || p) && r(RegExp.prototype, u, (function () {
                var t = o(this), n = String(t.source), e = t.flags;
                return "/" + n + "/" + String(void 0 === e && t instanceof RegExp && !("flags" in a) ? c.call(t) : e)
            }), {unsafe: !0})
        }, 8783: function (t, n, e) {
            "use strict";
            var r = e(8710).charAt, o = e(9909), i = e(654), c = "String Iterator", u = o.set, a = o.getterFor(c);
            i(String, "String", (function (t) {
                u(this, {type: c, string: String(t), index: 0})
            }), (function () {
                var t, n = a(this), e = n.string, o = n.index;
                return o >= e.length ? {value: void 0, done: !0} : (t = r(e, o), n.index += t.length, {
                    value: t,
                    done: !1
                })
            }))
        }, 1817: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(9781), i = e(7854), c = e(6656), u = e(111), a = e(3070).f, s = e(9920),
                f = i.Symbol;
            if (o && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
                var p = {}, l = function () {
                    var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                        n = this instanceof l ? new f(t) : void 0 === t ? f() : f(t);
                    return "" === t && (p[n] = !0), n
                };
                s(l, f);
                var h = l.prototype = f.prototype;
                h.constructor = l;
                var y = h.toString, d = "Symbol(test)" == String(f("test")), v = /^Symbol\((.*)\)[^)]+$/;
                a(h, "description", {
                    configurable: !0, get: function () {
                        var t = u(this) ? this.valueOf() : this, n = y.call(t);
                        if (c(p, t)) return "";
                        var e = d ? n.slice(7, -1) : n.replace(v, "$1");
                        return "" === e ? void 0 : e
                    }
                }), r({global: !0, forced: !0}, {Symbol: l})
            }
        }, 2165: function (t, n, e) {
            e(7235)("iterator")
        }, 2526: function (t, n, e) {
            "use strict";
            var r = e(2109), o = e(7854), i = e(5005), c = e(1913), u = e(9781), a = e(133), s = e(3307), f = e(7293),
                p = e(6656), l = e(3157), h = e(111), y = e(9670), d = e(7908), v = e(5656), b = e(7593), g = e(9114),
                m = e(30), E = e(1956), O = e(8006), S = e(1156), w = e(5181), _ = e(1236), T = e(3070), x = e(5296),
                A = e(8880), I = e(1320), N = e(2309), R = e(6200), C = e(3501), j = e(9711), P = e(5112), L = e(6061),
                D = e(7235), k = e(8003), M = e(9909), F = e(2092).forEach, H = R("hidden"), V = "Symbol",
                U = P("toPrimitive"), G = M.set, W = M.getterFor(V), B = Object.prototype, K = o.Symbol,
                Y = i("JSON", "stringify"), X = _.f, z = T.f, Q = S.f, q = x.f, $ = N("symbols"), Z = N("op-symbols"),
                J = N("string-to-symbol-registry"), tt = N("symbol-to-string-registry"), nt = N("wks"), et = o.QObject,
                rt = !et || !et.prototype || !et.prototype.findChild, ot = u && f((function () {
                    return 7 != m(z({}, "a", {
                        get: function () {
                            return z(this, "a", {value: 7}).a
                        }
                    })).a
                })) ? function (t, n, e) {
                    var r = X(B, n);
                    r && delete B[n], z(t, n, e), r && t !== B && z(B, n, r)
                } : z, it = function (t, n) {
                    var e = $[t] = m(K.prototype);
                    return G(e, {type: V, tag: t, description: n}), u || (e.description = n), e
                }, ct = s ? function (t) {
                    return "symbol" == typeof t
                } : function (t) {
                    return Object(t) instanceof K
                }, ut = function (t, n, e) {
                    t === B && ut(Z, n, e), y(t);
                    var r = b(n, !0);
                    return y(e), p($, r) ? (e.enumerable ? (p(t, H) && t[H][r] && (t[H][r] = !1), e = m(e, {enumerable: g(0, !1)})) : (p(t, H) || z(t, H, g(1, {})), t[H][r] = !0), ot(t, r, e)) : z(t, r, e)
                }, at = function (t, n) {
                    y(t);
                    var e = v(n), r = E(e).concat(lt(e));
                    return F(r, (function (n) {
                        u && !st.call(e, n) || ut(t, n, e[n])
                    })), t
                }, st = function (t) {
                    var n = b(t, !0), e = q.call(this, n);
                    return !(this === B && p($, n) && !p(Z, n)) && (!(e || !p(this, n) || !p($, n) || p(this, H) && this[H][n]) || e)
                }, ft = function (t, n) {
                    var e = v(t), r = b(n, !0);
                    if (e !== B || !p($, r) || p(Z, r)) {
                        var o = X(e, r);
                        return !o || !p($, r) || p(e, H) && e[H][r] || (o.enumerable = !0), o
                    }
                }, pt = function (t) {
                    var n = Q(v(t)), e = [];
                    return F(n, (function (t) {
                        p($, t) || p(C, t) || e.push(t)
                    })), e
                }, lt = function (t) {
                    var n = t === B, e = Q(n ? Z : v(t)), r = [];
                    return F(e, (function (t) {
                        !p($, t) || n && !p(B, t) || r.push($[t])
                    })), r
                };
            a || (I((K = function () {
                if (this instanceof K) throw TypeError("Symbol is not a constructor");
                var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, n = j(t),
                    e = function (t) {
                        this === B && e.call(Z, t), p(this, H) && p(this[H], n) && (this[H][n] = !1), ot(this, n, g(1, t))
                    };
                return u && rt && ot(B, n, {configurable: !0, set: e}), it(n, t)
            }).prototype, "toString", (function () {
                return W(this).tag
            })), I(K, "withoutSetter", (function (t) {
                return it(j(t), t)
            })), x.f = st, T.f = ut, _.f = ft, O.f = S.f = pt, w.f = lt, L.f = function (t) {
                return it(P(t), t)
            }, u && (z(K.prototype, "description", {
                configurable: !0, get: function () {
                    return W(this).description
                }
            }), c || I(B, "propertyIsEnumerable", st, {unsafe: !0}))), r({
                global: !0,
                wrap: !0,
                forced: !a,
                sham: !a
            }, {Symbol: K}), F(E(nt), (function (t) {
                D(t)
            })), r({target: V, stat: !0, forced: !a}, {
                for: function (t) {
                    var n = String(t);
                    if (p(J, n)) return J[n];
                    var e = K(n);
                    return J[n] = e, tt[e] = n, e
                }, keyFor: function (t) {
                    if (!ct(t)) throw TypeError(t + " is not a symbol");
                    if (p(tt, t)) return tt[t]
                }, useSetter: function () {
                    rt = !0
                }, useSimple: function () {
                    rt = !1
                }
            }), r({target: "Object", stat: !0, forced: !a, sham: !u}, {
                create: function (t, n) {
                    return void 0 === n ? m(t) : at(m(t), n)
                }, defineProperty: ut, defineProperties: at, getOwnPropertyDescriptor: ft
            }), r({target: "Object", stat: !0, forced: !a}, {
                getOwnPropertyNames: pt,
                getOwnPropertySymbols: lt
            }), r({
                target: "Object", stat: !0, forced: f((function () {
                    w.f(1)
                }))
            }, {
                getOwnPropertySymbols: function (t) {
                    return w.f(d(t))
                }
            }), Y && r({
                target: "JSON", stat: !0, forced: !a || f((function () {
                    var t = K();
                    return "[null]" != Y([t]) || "{}" != Y({a: t}) || "{}" != Y(Object(t))
                }))
            }, {
                stringify: function (t, n, e) {
                    for (var r, o = [t], i = 1; arguments.length > i;) o.push(arguments[i++]);
                    if (r = n, (h(n) || void 0 !== t) && !ct(t)) return l(n) || (n = function (t, n) {
                        if ("function" == typeof r && (n = r.call(this, t, n)), !ct(n)) return n
                    }), o[1] = n, Y.apply(null, o)
                }
            }), K.prototype[U] || A(K.prototype, U, K.prototype.valueOf), k(K, V), C[H] = !0
        }, 4747: function (t, n, e) {
            var r = e(7854), o = e(8324), i = e(8533), c = e(8880);
            for (var u in o) {
                var a = r[u], s = a && a.prototype;
                if (s && s.forEach !== i) try {
                    c(s, "forEach", i)
                } catch (t) {
                    s.forEach = i
                }
            }
        }, 3948: function (t, n, e) {
            var r = e(7854), o = e(8324), i = e(6992), c = e(8880), u = e(5112), a = u("iterator"),
                s = u("toStringTag"), f = i.values;
            for (var p in o) {
                var l = r[p], h = l && l.prototype;
                if (h) {
                    if (h[a] !== f) try {
                        c(h, a, f)
                    } catch (t) {
                        h[a] = f
                    }
                    if (h[s] || c(h, s, p), o[p]) for (var y in i) if (h[y] !== i[y]) try {
                        c(h, y, i[y])
                    } catch (t) {
                        h[y] = i[y]
                    }
                }
            }
        }
    }, n = {};

    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {exports: {}};
        return t[r](o, o.exports, e), o.exports
    }

    e.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), function () {
        "use strict";
        e(6394), e(9826), e(9601), e(489), e(8304), e(1539), e(8674);
        var t = [["CENTER", 0], ["TOP_LEFT", 1], ["TOP", 2], ["TOP_RIGHT", 3], ["LEFT", 4], ["RIGHT", 5], ["BOTTOM_LEFT", 6], ["BOTTOM", 7], ["BOTTOM_RIGHT", 8]],
            n = (e(4553), e(6992), e(561), e(1532), e(8783), e(3948), function (t, e) {
                return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, n) {
                    t.__proto__ = n
                } || function (t, n) {
                    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                })(t, e)
            });

        function r(t, e) {
            function r() {
                this.constructor = t
            }

            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }

        function o(t) {
            return "function" == typeof t
        }

        var i = !1, c = {
            Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
                t && (new Error).stack, i = t
            }, get useDeprecatedSynchronousErrorHandling() {
                return i
            }
        };

        function u(t) {
            setTimeout((function () {
                throw t
            }), 0)
        }

        var a = {
            closed: !0, next: function (t) {
            }, error: function (t) {
                if (c.useDeprecatedSynchronousErrorHandling) throw t;
                u(t)
            }, complete: function () {
            }
        }, s = function () {
            return Array.isArray || function (t) {
                return t && "number" == typeof t.length
            }
        }();

        function f(t) {
            return null !== t && "object" == typeof t
        }

        var p = function () {
            function t(t) {
                return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function (t, n) {
                    return n + 1 + ") " + t.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
            }

            return t.prototype = Object.create(Error.prototype), t
        }(), l = function () {
            function t(t) {
                this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
            }

            return t.prototype.unsubscribe = function () {
                var n;
                if (!this.closed) {
                    var e = this, r = e._parentOrParents, i = e._ctorUnsubscribe, c = e._unsubscribe,
                        u = e._subscriptions;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof t) r.remove(this); else if (null !== r) for (var a = 0; a < r.length; ++a) r[a].remove(this);
                    if (o(c)) {
                        i && (this._unsubscribe = void 0);
                        try {
                            c.call(this)
                        } catch (t) {
                            n = t instanceof p ? h(t.errors) : [t]
                        }
                    }
                    if (s(u)) {
                        a = -1;
                        for (var l = u.length; ++a < l;) {
                            var y = u[a];
                            if (f(y)) try {
                                y.unsubscribe()
                            } catch (t) {
                                n = n || [], t instanceof p ? n = n.concat(h(t.errors)) : n.push(t)
                            }
                        }
                    }
                    if (n) throw new p(n)
                }
            }, t.prototype.add = function (n) {
                var e = n;
                if (!n) return t.EMPTY;
                switch (typeof n) {
                    case"function":
                        e = new t(n);
                    case"object":
                        if (e === this || e.closed || "function" != typeof e.unsubscribe) return e;
                        if (this.closed) return e.unsubscribe(), e;
                        if (!(e instanceof t)) {
                            var r = e;
                            (e = new t)._subscriptions = [r]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + n + " added to Subscription.")
                }
                var o = e._parentOrParents;
                if (null === o) e._parentOrParents = this; else if (o instanceof t) {
                    if (o === this) return e;
                    e._parentOrParents = [o, this]
                } else {
                    if (-1 !== o.indexOf(this)) return e;
                    o.push(this)
                }
                var i = this._subscriptions;
                return null === i ? this._subscriptions = [e] : i.push(e), e
            }, t.prototype.remove = function (t) {
                var n = this._subscriptions;
                if (n) {
                    var e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1)
                }
            }, t.EMPTY = function (t) {
                return t.closed = !0, t
            }(new t), t
        }();

        function h(t) {
            return t.reduce((function (t, n) {
                return t.concat(n instanceof p ? n.errors : n)
            }), [])
        }

        var y = function () {
            return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        }(), d = function (t) {
            function n(e, r, o) {
                var i = t.call(this) || this;
                switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                    case 0:
                        i.destination = a;
                        break;
                    case 1:
                        if (!e) {
                            i.destination = a;
                            break
                        }
                        if ("object" == typeof e) {
                            e instanceof n ? (i.syncErrorThrowable = e.syncErrorThrowable, i.destination = e, e.add(i)) : (i.syncErrorThrowable = !0, i.destination = new v(i, e));
                            break
                        }
                    default:
                        i.syncErrorThrowable = !0, i.destination = new v(i, e, r, o)
                }
                return i
            }

            return r(n, t), n.prototype[y] = function () {
                return this
            }, n.create = function (t, e, r) {
                var o = new n(t, e, r);
                return o.syncErrorThrowable = !1, o
            }, n.prototype.next = function (t) {
                this.isStopped || this._next(t)
            }, n.prototype.error = function (t) {
                this.isStopped || (this.isStopped = !0, this._error(t))
            }, n.prototype.complete = function () {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, n.prototype.unsubscribe = function () {
                this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
            }, n.prototype._next = function (t) {
                this.destination.next(t)
            }, n.prototype._error = function (t) {
                this.destination.error(t), this.unsubscribe()
            }, n.prototype._complete = function () {
                this.destination.complete(), this.unsubscribe()
            }, n.prototype._unsubscribeAndRecycle = function () {
                var t = this._parentOrParents;
                return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
            }, n
        }(l), v = function (t) {
            function n(n, e, r, i) {
                var c, u = t.call(this) || this;
                u._parentSubscriber = n;
                var s = u;
                return o(e) ? c = e : e && (c = e.next, r = e.error, i = e.complete, e !== a && (o((s = Object.create(e)).unsubscribe) && u.add(s.unsubscribe.bind(s)), s.unsubscribe = u.unsubscribe.bind(u))), u._context = s, u._next = c, u._error = r, u._complete = i, u
            }

            return r(n, t), n.prototype.next = function (t) {
                if (!this.isStopped && this._next) {
                    var n = this._parentSubscriber;
                    c.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? this.__tryOrSetError(n, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }, n.prototype.error = function (t) {
                if (!this.isStopped) {
                    var n = this._parentSubscriber, e = c.useDeprecatedSynchronousErrorHandling;
                    if (this._error) e && n.syncErrorThrowable ? (this.__tryOrSetError(n, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (n.syncErrorThrowable) e ? (n.syncErrorValue = t, n.syncErrorThrown = !0) : u(t), this.unsubscribe(); else {
                        if (this.unsubscribe(), e) throw t;
                        u(t)
                    }
                }
            }, n.prototype.complete = function () {
                var t = this;
                if (!this.isStopped) {
                    var n = this._parentSubscriber;
                    if (this._complete) {
                        var e = function () {
                            return t._complete.call(t._context)
                        };
                        c.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? (this.__tryOrSetError(n, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, n.prototype.__tryOrUnsub = function (t, n) {
                try {
                    t.call(this._context, n)
                } catch (t) {
                    if (this.unsubscribe(), c.useDeprecatedSynchronousErrorHandling) throw t;
                    u(t)
                }
            }, n.prototype.__tryOrSetError = function (t, n, e) {
                if (!c.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    n.call(this._context, e)
                } catch (n) {
                    return c.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = n, t.syncErrorThrown = !0, !0) : (u(n), !0)
                }
                return !1
            }, n.prototype._unsubscribe = function () {
                var t = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
            }, n
        }(d), b = function () {
            return "function" == typeof Symbol && Symbol.observable || "@@observable"
        }();

        function g(t) {
            return t
        }

        function m(t) {
            return 0 === t.length ? g : 1 === t.length ? t[0] : function (n) {
                return t.reduce((function (t, n) {
                    return n(t)
                }), n)
            }
        }

        var E = function () {
            function t(t) {
                this._isScalar = !1, t && (this._subscribe = t)
            }

            return t.prototype.lift = function (n) {
                var e = new t;
                return e.source = this, e.operator = n, e
            }, t.prototype.subscribe = function (t, n, e) {
                var r = this.operator, o = function (t, n, e) {
                    if (t) {
                        if (t instanceof d) return t;
                        if (t[y]) return t[y]()
                    }
                    return t || n || e ? new d(t, n, e) : new d(a)
                }(t, n, e);
                if (r ? o.add(r.call(o, this.source)) : o.add(this.source || c.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), c.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                return o
            }, t.prototype._trySubscribe = function (t) {
                try {
                    return this._subscribe(t)
                } catch (n) {
                    c.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = n), function (t) {
                        for (; t;) {
                            var n = t, e = n.closed, r = n.destination, o = n.isStopped;
                            if (e || o) return !1;
                            t = r && r instanceof d ? r : null
                        }
                        return !0
                    }(t) ? t.error(n) : console.warn(n)
                }
            }, t.prototype.forEach = function (t, n) {
                var e = this;
                return new (n = O(n))((function (n, r) {
                    var o;
                    o = e.subscribe((function (n) {
                        try {
                            t(n)
                        } catch (t) {
                            r(t), o && o.unsubscribe()
                        }
                    }), r, n)
                }))
            }, t.prototype._subscribe = function (t) {
                var n = this.source;
                return n && n.subscribe(t)
            }, t.prototype[b] = function () {
                return this
            }, t.prototype.pipe = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return 0 === t.length ? this : m(t)(this)
            }, t.prototype.toPromise = function (t) {
                var n = this;
                return new (t = O(t))((function (t, e) {
                    var r;
                    n.subscribe((function (t) {
                        return r = t
                    }), (function (t) {
                        return e(t)
                    }), (function () {
                        return t(r)
                    }))
                }))
            }, t.create = function (n) {
                return new t(n)
            }, t
        }();

        function O(t) {
            if (t || (t = c.Promise || Promise), !t) throw new Error("no Promise impl found");
            return t
        }

        function S(t, n) {
            return function (e) {
                if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return e.lift(new w(t, n))
            }
        }

        var w = function () {
            function t(t, n) {
                this.project = t, this.thisArg = n
            }

            return t.prototype.call = function (t, n) {
                return n.subscribe(new _(t, this.project, this.thisArg))
            }, t
        }(), _ = function (t) {
            function n(n, e, r) {
                var o = t.call(this, n) || this;
                return o.project = e, o.count = 0, o.thisArg = r || o, o
            }

            return r(n, t), n.prototype._next = function (t) {
                var n;
                try {
                    n = this.project.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(n)
            }, n
        }(d);

        function T(t, n, e, r) {
            return o(e) && (r = e, e = void 0), r ? T(t, n, e).pipe(S((function (t) {
                return s(t) ? r.apply(void 0, t) : r(t)
            }))) : new E((function (r) {
                x(t, n, (function (t) {
                    arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(t)
                }), r, e)
            }))
        }

        function x(t, n, e, r, o) {
            var i;
            if (function (t) {
                return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
            }(t)) {
                var c = t;
                t.addEventListener(n, e, o), i = function () {
                    return c.removeEventListener(n, e, o)
                }
            } else if (function (t) {
                return t && "function" == typeof t.on && "function" == typeof t.off
            }(t)) {
                var u = t;
                t.on(n, e), i = function () {
                    return u.off(n, e)
                }
            } else if (function (t) {
                return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
            }(t)) {
                var a = t;
                t.addListener(n, e), i = function () {
                    return a.removeListener(n, e)
                }
            } else {
                if (!t || !t.length) throw new TypeError("Invalid event target");
                for (var s = 0, f = t.length; s < f; s++) x(t[s], n, e, r, o)
            }
            r.add(i)
        }

        var A = function () {
            function t() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }

            return t.prototype = Object.create(Error.prototype), t
        }(), I = function (t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.subject = n, r.subscriber = e, r.closed = !1, r
            }

            return r(n, t), n.prototype.unsubscribe = function () {
                if (!this.closed) {
                    this.closed = !0;
                    var t = this.subject, n = t.observers;
                    if (this.subject = null, n && 0 !== n.length && !t.isStopped && !t.closed) {
                        var e = n.indexOf(this.subscriber);
                        -1 !== e && n.splice(e, 1)
                    }
                }
            }, n
        }(l), N = function (t) {
            function n(n) {
                var e = t.call(this, n) || this;
                return e.destination = n, e
            }

            return r(n, t), n
        }(d), R = function (t) {
            function n() {
                var n = t.call(this) || this;
                return n.observers = [], n.closed = !1, n.isStopped = !1, n.hasError = !1, n.thrownError = null, n
            }

            return r(n, t), n.prototype[y] = function () {
                return new N(this)
            }, n.prototype.lift = function (t) {
                var n = new C(this, this);
                return n.operator = t, n
            }, n.prototype.next = function (t) {
                if (this.closed) throw new A;
                if (!this.isStopped) for (var n = this.observers, e = n.length, r = n.slice(), o = 0; o < e; o++) r[o].next(t)
            }, n.prototype.error = function (t) {
                if (this.closed) throw new A;
                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                for (var n = this.observers, e = n.length, r = n.slice(), o = 0; o < e; o++) r[o].error(t);
                this.observers.length = 0
            }, n.prototype.complete = function () {
                if (this.closed) throw new A;
                this.isStopped = !0;
                for (var t = this.observers, n = t.length, e = t.slice(), r = 0; r < n; r++) e[r].complete();
                this.observers.length = 0
            }, n.prototype.unsubscribe = function () {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, n.prototype._trySubscribe = function (n) {
                if (this.closed) throw new A;
                return t.prototype._trySubscribe.call(this, n)
            }, n.prototype._subscribe = function (t) {
                if (this.closed) throw new A;
                return this.hasError ? (t.error(this.thrownError), l.EMPTY) : this.isStopped ? (t.complete(), l.EMPTY) : (this.observers.push(t), new I(this, t))
            }, n.prototype.asObservable = function () {
                var t = new E;
                return t.source = this, t
            }, n.create = function (t, n) {
                return new C(t, n)
            }, n
        }(E), C = function (t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.destination = n, r.source = e, r
            }

            return r(n, t), n.prototype.next = function (t) {
                var n = this.destination;
                n && n.next && n.next(t)
            }, n.prototype.error = function (t) {
                var n = this.destination;
                n && n.error && this.destination.error(t)
            }, n.prototype.complete = function () {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }, n.prototype._subscribe = function (t) {
                return this.source ? this.source.subscribe(t) : l.EMPTY
            }, n
        }(R), j = function (t) {
            function n(n, e) {
                var r = t.call(this, n, e) || this;
                return r.scheduler = n, r.work = e, r.pending = !1, r
            }

            return r(n, t), n.prototype.schedule = function (t, n) {
                if (void 0 === n && (n = 0), this.closed) return this;
                this.state = t;
                var e = this.id, r = this.scheduler;
                return null != e && (this.id = this.recycleAsyncId(r, e, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(r, this.id, n), this
            }, n.prototype.requestAsyncId = function (t, n, e) {
                return void 0 === e && (e = 0), setInterval(t.flush.bind(t, this), e)
            }, n.prototype.recycleAsyncId = function (t, n, e) {
                if (void 0 === e && (e = 0), null !== e && this.delay === e && !1 === this.pending) return n;
                clearInterval(n)
            }, n.prototype.execute = function (t, n) {
                if (this.closed) return new Error("executing a cancelled action");
                this.pending = !1;
                var e = this._execute(t, n);
                if (e) return e;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }, n.prototype._execute = function (t, n) {
                var e = !1, r = void 0;
                try {
                    this.work(t)
                } catch (t) {
                    e = !0, r = !!t && t || new Error(t)
                }
                if (e) return this.unsubscribe(), r
            }, n.prototype._unsubscribe = function () {
                var t = this.id, n = this.scheduler, e = n.actions, r = e.indexOf(this);
                this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && e.splice(r, 1), null != t && (this.id = this.recycleAsyncId(n, t, null)), this.delay = null
            }, n
        }(function (t) {
            function n(n, e) {
                return t.call(this) || this
            }

            return r(n, t), n.prototype.schedule = function (t, n) {
                return void 0 === n && (n = 0), this
            }, n
        }(l)), P = function (t) {
            function n(n, e) {
                var r = t.call(this, n, e) || this;
                return r.scheduler = n, r.work = e, r
            }

            return r(n, t), n.prototype.schedule = function (n, e) {
                return void 0 === e && (e = 0), e > 0 ? t.prototype.schedule.call(this, n, e) : (this.delay = e, this.state = n, this.scheduler.flush(this), this)
            }, n.prototype.execute = function (n, e) {
                return e > 0 || this.closed ? t.prototype.execute.call(this, n, e) : this._execute(n, e)
            }, n.prototype.requestAsyncId = function (n, e, r) {
                return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.requestAsyncId.call(this, n, e, r) : n.flush(this)
            }, n
        }(j), L = function () {
            function t(n, e) {
                void 0 === e && (e = t.now), this.SchedulerAction = n, this.now = e
            }

            return t.prototype.schedule = function (t, n, e) {
                return void 0 === n && (n = 0), new this.SchedulerAction(this, t).schedule(e, n)
            }, t.now = function () {
                return Date.now()
            }, t
        }(), D = function (t) {
            function n(e, r) {
                void 0 === r && (r = L.now);
                var o = t.call(this, e, (function () {
                    return n.delegate && n.delegate !== o ? n.delegate.now() : r()
                })) || this;
                return o.actions = [], o.active = !1, o.scheduled = void 0, o
            }

            return r(n, t), n.prototype.schedule = function (e, r, o) {
                return void 0 === r && (r = 0), n.delegate && n.delegate !== this ? n.delegate.schedule(e, r, o) : t.prototype.schedule.call(this, e, r, o)
            }, n.prototype.flush = function (t) {
                var n = this.actions;
                if (this.active) n.push(t); else {
                    var e;
                    this.active = !0;
                    do {
                        if (e = t.execute(t.state, t.delay)) break
                    } while (t = n.shift());
                    if (this.active = !1, e) {
                        for (; t = n.shift();) t.unsubscribe();
                        throw e
                    }
                }
            }, n
        }(L), k = new (function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(n, t), n
        }(D))(P), M = new E((function (t) {
            return t.complete()
        }));

        function F(t) {
            return t ? function (t) {
                return new E((function (n) {
                    return t.schedule((function () {
                        return n.complete()
                    }))
                }))
            }(t) : M
        }

        function H(t) {
            return t && "function" == typeof t.schedule
        }

        var V, U = function (t) {
            return function (n) {
                for (var e = 0, r = t.length; e < r && !n.closed; e++) n.next(t[e]);
                n.complete()
            }
        };

        function G(t, n) {
            return new E((function (e) {
                var r = new l, o = 0;
                return r.add(n.schedule((function () {
                    o !== t.length ? (e.next(t[o++]), e.closed || r.add(this.schedule())) : e.complete()
                }))), r
            }))
        }

        function W(t, n) {
            return n ? G(t, n) : new E(U(t))
        }

        function B() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var e = t[t.length - 1];
            return H(e) ? (t.pop(), G(t, e)) : W(t)
        }

        function K(t, n) {
            return new E(n ? function (e) {
                return n.schedule(Y, 0, {error: t, subscriber: e})
            } : function (n) {
                return n.error(t)
            })
        }

        function Y(t) {
            var n = t.error;
            t.subscriber.error(n)
        }

        V || (V = {});
        var X = function () {
            function t(t, n, e) {
                this.kind = t, this.value = n, this.error = e, this.hasValue = "N" === t
            }

            return t.prototype.observe = function (t) {
                switch (this.kind) {
                    case"N":
                        return t.next && t.next(this.value);
                    case"E":
                        return t.error && t.error(this.error);
                    case"C":
                        return t.complete && t.complete()
                }
            }, t.prototype.do = function (t, n, e) {
                switch (this.kind) {
                    case"N":
                        return t && t(this.value);
                    case"E":
                        return n && n(this.error);
                    case"C":
                        return e && e()
                }
            }, t.prototype.accept = function (t, n, e) {
                return t && "function" == typeof t.next ? this.observe(t) : this.do(t, n, e)
            }, t.prototype.toObservable = function () {
                switch (this.kind) {
                    case"N":
                        return B(this.value);
                    case"E":
                        return K(this.error);
                    case"C":
                        return F()
                }
                throw new Error("unexpected notification kind value")
            }, t.createNext = function (n) {
                return void 0 !== n ? new t("N", n) : t.undefinedValueNotification
            }, t.createError = function (n) {
                return new t("E", void 0, n)
            }, t.createComplete = function () {
                return t.completeNotification
            }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
        }(), z = function (t) {
            function n(n, e, r) {
                void 0 === r && (r = 0);
                var o = t.call(this, n) || this;
                return o.scheduler = e, o.delay = r, o
            }

            return r(n, t), n.dispatch = function (t) {
                var n = t.notification, e = t.destination;
                n.observe(e), this.unsubscribe()
            }, n.prototype.scheduleMessage = function (t) {
                this.destination.add(this.scheduler.schedule(n.dispatch, this.delay, new Q(t, this.destination)))
            }, n.prototype._next = function (t) {
                this.scheduleMessage(X.createNext(t))
            }, n.prototype._error = function (t) {
                this.scheduleMessage(X.createError(t)), this.unsubscribe()
            }, n.prototype._complete = function () {
                this.scheduleMessage(X.createComplete()), this.unsubscribe()
            }, n
        }(d), Q = function () {
            return function (t, n) {
                this.notification = t, this.destination = n
            }
        }(), q = function (t) {
            function n(n, e, r) {
                void 0 === n && (n = Number.POSITIVE_INFINITY), void 0 === e && (e = Number.POSITIVE_INFINITY);
                var o = t.call(this) || this;
                return o.scheduler = r, o._events = [], o._infiniteTimeWindow = !1, o._bufferSize = n < 1 ? 1 : n, o._windowTime = e < 1 ? 1 : e, e === Number.POSITIVE_INFINITY ? (o._infiniteTimeWindow = !0, o.next = o.nextInfiniteTimeWindow) : o.next = o.nextTimeWindow, o
            }

            return r(n, t), n.prototype.nextInfiniteTimeWindow = function (n) {
                if (!this.isStopped) {
                    var e = this._events;
                    e.push(n), e.length > this._bufferSize && e.shift()
                }
                t.prototype.next.call(this, n)
            }, n.prototype.nextTimeWindow = function (n) {
                this.isStopped || (this._events.push(new $(this._getNow(), n)), this._trimBufferThenGetEvents()), t.prototype.next.call(this, n)
            }, n.prototype._subscribe = function (t) {
                var n, e = this._infiniteTimeWindow, r = e ? this._events : this._trimBufferThenGetEvents(),
                    o = this.scheduler, i = r.length;
                if (this.closed) throw new A;
                if (this.isStopped || this.hasError ? n = l.EMPTY : (this.observers.push(t), n = new I(this, t)), o && t.add(t = new z(t, o)), e) for (var c = 0; c < i && !t.closed; c++) t.next(r[c]); else for (c = 0; c < i && !t.closed; c++) t.next(r[c].value);
                return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), n
            }, n.prototype._getNow = function () {
                return (this.scheduler || k).now()
            }, n.prototype._trimBufferThenGetEvents = function () {
                for (var t = this._getNow(), n = this._bufferSize, e = this._windowTime, r = this._events, o = r.length, i = 0; i < o && !(t - r[i].time < e);) i++;
                return o > n && (i = Math.max(i, o - n)), i > 0 && r.splice(0, i), r
            }, n
        }(R), $ = function () {
            return function (t, n) {
                this.time = t, this.value = n
            }
        }();

        function Z() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }

        var J = Z();

        function tt(t) {
            return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }

        var nt = function (t) {
            return t && "number" == typeof t.length && "function" != typeof t
        };

        function et(t, n) {
            if (null != t) {
                if (function (t) {
                    return t && "function" == typeof t[b]
                }(t)) return function (t, n) {
                    return new E((function (e) {
                        var r = new l;
                        return r.add(n.schedule((function () {
                            var o = t[b]();
                            r.add(o.subscribe({
                                next: function (t) {
                                    r.add(n.schedule((function () {
                                        return e.next(t)
                                    })))
                                }, error: function (t) {
                                    r.add(n.schedule((function () {
                                        return e.error(t)
                                    })))
                                }, complete: function () {
                                    r.add(n.schedule((function () {
                                        return e.complete()
                                    })))
                                }
                            }))
                        }))), r
                    }))
                }(t, n);
                if (tt(t)) return function (t, n) {
                    return new E((function (e) {
                        var r = new l;
                        return r.add(n.schedule((function () {
                            return t.then((function (t) {
                                r.add(n.schedule((function () {
                                    e.next(t), r.add(n.schedule((function () {
                                        return e.complete()
                                    })))
                                })))
                            }), (function (t) {
                                r.add(n.schedule((function () {
                                    return e.error(t)
                                })))
                            }))
                        }))), r
                    }))
                }(t, n);
                if (nt(t)) return G(t, n);
                if (function (t) {
                    return t && "function" == typeof t[J]
                }(t) || "string" == typeof t) return function (t, n) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new E((function (e) {
                        var r, o = new l;
                        return o.add((function () {
                            r && "function" == typeof r.return && r.return()
                        })), o.add(n.schedule((function () {
                            r = t[J](), o.add(n.schedule((function () {
                                if (!e.closed) {
                                    var t, n;
                                    try {
                                        var o = r.next();
                                        t = o.value, n = o.done
                                    } catch (t) {
                                        return void e.error(t)
                                    }
                                    n ? e.complete() : (e.next(t), this.schedule())
                                }
                            })))
                        }))), o
                    }))
                }(t, n)
            }
            throw new TypeError((null !== t && typeof t || t) + " is not observable")
        }

        var rt = 1, ot = function () {
            return Promise.resolve()
        }(), it = {};

        function ct(t) {
            return t in it && (delete it[t], !0)
        }

        var ut = function (t) {
            function n(n, e) {
                var r = t.call(this, n, e) || this;
                return r.scheduler = n, r.work = e, r
            }

            return r(n, t), n.prototype.requestAsyncId = function (n, e, r) {
                return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, n, e, r) : (n.actions.push(this), n.scheduled || (n.scheduled = (o = n.flush.bind(n, null), i = rt++, it[i] = !0, ot.then((function () {
                    return ct(i) && o()
                })), i)));
                var o, i
            }, n.prototype.recycleAsyncId = function (n, e, r) {
                if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return t.prototype.recycleAsyncId.call(this, n, e, r);
                0 === n.actions.length && (ct(e), n.scheduled = void 0)
            }, n
        }(j), at = new (function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(n, t), n.prototype.flush = function (t) {
                this.active = !0, this.scheduled = void 0;
                var n, e = this.actions, r = -1, o = e.length;
                t = t || e.shift();
                do {
                    if (n = t.execute(t.state, t.delay)) break
                } while (++r < o && (t = e.shift()));
                if (this.active = !1, n) {
                    for (; ++r < o && (t = e.shift());) t.unsubscribe();
                    throw n
                }
            }, n
        }(D))(ut), st = new D(j);

        function ft(t) {
            return !s(t) && t - parseFloat(t) + 1 >= 0
        }

        function pt(t) {
            var n = t.index, e = t.period, r = t.subscriber;
            if (r.next(n), !r.closed) {
                if (-1 === e) return r.complete();
                t.index = n + 1, this.schedule(t, e)
            }
        }

        function lt(t, n) {
            return function (e) {
                return e.lift(new ht(t, n))
            }
        }

        var ht = function () {
            function t(t, n) {
                this.predicate = t, this.thisArg = n
            }

            return t.prototype.call = function (t, n) {
                return n.subscribe(new yt(t, this.predicate, this.thisArg))
            }, t
        }(), yt = function (t) {
            function n(n, e, r) {
                var o = t.call(this, n) || this;
                return o.predicate = e, o.thisArg = r, o.count = 0, o
            }

            return r(n, t), n.prototype._next = function (t) {
                var n;
                try {
                    n = this.predicate.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                n && this.destination.next(t)
            }, n
        }(d);

        function dt() {
            return function (t) {
                return t.lift(new vt(t))
            }
        }

        var vt = function () {
            function t(t) {
                this.connectable = t
            }

            return t.prototype.call = function (t, n) {
                var e = this.connectable;
                e._refCount++;
                var r = new bt(t, e), o = n.subscribe(r);
                return r.closed || (r.connection = e.connect()), o
            }, t
        }(), bt = function (t) {
            function n(n, e) {
                var r = t.call(this, n) || this;
                return r.connectable = e, r
            }

            return r(n, t), n.prototype._unsubscribe = function () {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var n = t._refCount;
                    if (n <= 0) this.connection = null; else if (t._refCount = n - 1, n > 1) this.connection = null; else {
                        var e = this.connection, r = t._connection;
                        this.connection = null, !r || e && r !== e || r.unsubscribe()
                    }
                } else this.connection = null
            }, n
        }(d), gt = function (t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.source = n, r.subjectFactory = e, r._refCount = 0, r._isComplete = !1, r
            }

            return r(n, t), n.prototype._subscribe = function (t) {
                return this.getSubject().subscribe(t)
            }, n.prototype.getSubject = function () {
                var t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, n.prototype.connect = function () {
                var t = this._connection;
                return t || (this._isComplete = !1, (t = this._connection = new l).add(this.source.subscribe(new Et(this.getSubject(), this))), t.closed && (this._connection = null, t = l.EMPTY)), t
            }, n.prototype.refCount = function () {
                return dt()(this)
            }, n
        }(E), mt = function () {
            var t = gt.prototype;
            return {
                operator: {value: null},
                _refCount: {value: 0, writable: !0},
                _subject: {value: null, writable: !0},
                _connection: {value: null, writable: !0},
                _subscribe: {value: t._subscribe},
                _isComplete: {value: t._isComplete, writable: !0},
                getSubject: {value: t.getSubject},
                connect: {value: t.connect},
                refCount: {value: t.refCount}
            }
        }(), Et = function (t) {
            function n(n, e) {
                var r = t.call(this, n) || this;
                return r.connectable = e, r
            }

            return r(n, t), n.prototype._error = function (n) {
                this._unsubscribe(), t.prototype._error.call(this, n)
            }, n.prototype._complete = function () {
                this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
            }, n.prototype._unsubscribe = function () {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var n = t._connection;
                    t._refCount = 0, t._subject = null, t._connection = null, n && n.unsubscribe()
                }
            }, n
        }(N);

        function Ot() {
            return new R
        }

        var St = function (t) {
            if (t && "function" == typeof t[b]) return r = t, function (t) {
                var n = r[b]();
                if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return n.subscribe(t)
            };
            if (nt(t)) return U(t);
            if (tt(t)) return e = t, function (t) {
                return e.then((function (n) {
                    t.closed || (t.next(n), t.complete())
                }), (function (n) {
                    return t.error(n)
                })).then(null, u), t
            };
            if (t && "function" == typeof t[J]) return n = t, function (t) {
                for (var e = n[J](); ;) {
                    var r = void 0;
                    try {
                        r = e.next()
                    } catch (n) {
                        return t.error(n), t
                    }
                    if (r.done) {
                        t.complete();
                        break
                    }
                    if (t.next(r.value), t.closed) break
                }
                return "function" == typeof e.return && t.add((function () {
                    e.return && e.return()
                })), t
            };
            var n, e, r, o = f(t) ? "an invalid object" : "'" + t + "'";
            throw new TypeError("You provided " + o + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
        };

        function wt(t, n) {
            return n ? et(t, n) : t instanceof E ? t : new E(St(t))
        }

        var _t = function (t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.parent = n, e
            }

            return r(n, t), n.prototype._next = function (t) {
                this.parent.notifyNext(t)
            }, n.prototype._error = function (t) {
                this.parent.notifyError(t), this.unsubscribe()
            }, n.prototype._complete = function () {
                this.parent.notifyComplete(), this.unsubscribe()
            }, n
        }(d), Tt = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(n, t), n.prototype.notifyNext = function (t) {
                this.destination.next(t)
            }, n.prototype.notifyError = function (t) {
                this.destination.error(t)
            }, n.prototype.notifyComplete = function () {
                this.destination.complete()
            }, n
        }(d);

        function xt(t, n) {
            if (!n.closed) return t instanceof E ? t.subscribe(n) : St(t)(n)
        }

        function At(t, n, e) {
            return void 0 === e && (e = Number.POSITIVE_INFINITY), "function" == typeof n ? function (r) {
                return r.pipe(At((function (e, r) {
                    return wt(t(e, r)).pipe(S((function (t, o) {
                        return n(e, t, r, o)
                    })))
                }), e))
            } : ("number" == typeof n && (e = n), function (n) {
                return n.lift(new It(t, e))
            })
        }

        var It = function () {
            function t(t, n) {
                void 0 === n && (n = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = n
            }

            return t.prototype.call = function (t, n) {
                return n.subscribe(new Nt(t, this.project, this.concurrent))
            }, t
        }(), Nt = function (t) {
            function n(n, e, r) {
                void 0 === r && (r = Number.POSITIVE_INFINITY);
                var o = t.call(this, n) || this;
                return o.project = e, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
            }

            return r(n, t), n.prototype._next = function (t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }, n.prototype._tryNext = function (t) {
                var n, e = this.index++;
                try {
                    n = this.project(t, e)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.active++, this._innerSub(n)
            }, n.prototype._innerSub = function (t) {
                var n = new _t(this), e = this.destination;
                e.add(n);
                var r = xt(t, n);
                r !== n && e.add(r)
            }, n.prototype._complete = function () {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }, n.prototype.notifyNext = function (t) {
                this.destination.next(t)
            }, n.prototype.notifyComplete = function () {
                var t = this.buffer;
                this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, n
        }(Tt);

        function Rt() {
            return void 0 === (t = 1) && (t = Number.POSITIVE_INFINITY), At(g, t);
            var t
        }

        var Ct = function () {
            function t() {
                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
            }

            return t.prototype = Object.create(Error.prototype), t
        }();

        function jt(t) {
            return function (n) {
                return 0 === t ? F() : n.lift(new Pt(t))
            }
        }

        var Pt = function () {
            function t(t) {
                if (this.total = t, this.total < 0) throw new Ct
            }

            return t.prototype.call = function (t, n) {
                return n.subscribe(new Lt(t, this.total))
            }, t
        }(), Lt = function (t) {
            function n(n, e) {
                var r = t.call(this, n) || this;
                return r.total = e, r.count = 0, r
            }

            return r(n, t), n.prototype._next = function (t) {
                var n = this.total, e = ++this.count;
                e <= n && (this.destination.next(t), e === n && (this.destination.complete(), this.unsubscribe()))
            }, n
        }(d);

        function Dt(t, n) {
            return "function" == typeof n ? function (e) {
                return e.pipe(Dt((function (e, r) {
                    return wt(t(e, r)).pipe(S((function (t, o) {
                        return n(e, t, r, o)
                    })))
                })))
            } : function (n) {
                return n.lift(new kt(t))
            }
        }

        var kt = function () {
            function t(t) {
                this.project = t
            }

            return t.prototype.call = function (t, n) {
                return n.subscribe(new Mt(t, this.project))
            }, t
        }(), Mt = function (t) {
            function n(n, e) {
                var r = t.call(this, n) || this;
                return r.project = e, r.index = 0, r
            }

            return r(n, t), n.prototype._next = function (t) {
                var n, e = this.index++;
                try {
                    n = this.project(t, e)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this._innerSub(n)
            }, n.prototype._innerSub = function (t) {
                var n = this.innerSubscription;
                n && n.unsubscribe();
                var e = new _t(this), r = this.destination;
                r.add(e), this.innerSubscription = xt(t, e), this.innerSubscription !== e && r.add(this.innerSubscription)
            }, n.prototype._complete = function () {
                var n = this.innerSubscription;
                n && !n.closed || t.prototype._complete.call(this), this.unsubscribe()
            }, n.prototype._unsubscribe = function () {
                this.innerSubscription = void 0
            }, n.prototype.notifyComplete = function () {
                this.innerSubscription = void 0, this.isStopped && t.prototype._complete.call(this)
            }, n.prototype.notifyNext = function (t) {
                this.destination.next(t)
            }, n
        }(Tt), Ft = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return r(n, t), n.prototype.notifyNext = function (t, n, e, r, o) {
                this.destination.next(n)
            }, n.prototype.notifyError = function (t, n) {
                this.destination.error(t)
            }, n.prototype.notifyComplete = function (t) {
                this.destination.complete()
            }, n
        }(d), Ht = function (t) {
            function n(n, e, r) {
                var o = t.call(this) || this;
                return o.parent = n, o.outerValue = e, o.outerIndex = r, o.index = 0, o
            }

            return r(n, t), n.prototype._next = function (t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }, n.prototype._error = function (t) {
                this.parent.notifyError(t, this), this.unsubscribe()
            }, n.prototype._complete = function () {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, n
        }(d), Vt = function () {
            function t(t) {
                this.delayDurationSelector = t
            }

            return t.prototype.call = function (t, n) {
                return n.subscribe(new Ut(t, this.delayDurationSelector))
            }, t
        }(), Ut = function (t) {
            function n(n, e) {
                var r = t.call(this, n) || this;
                return r.delayDurationSelector = e, r.completed = !1, r.delayNotifierSubscriptions = [], r.index = 0, r
            }

            return r(n, t), n.prototype.notifyNext = function (t, n, e, r, o) {
                this.destination.next(t), this.removeSubscription(o), this.tryComplete()
            }, n.prototype.notifyError = function (t, n) {
                this._error(t)
            }, n.prototype.notifyComplete = function (t) {
                var n = this.removeSubscription(t);
                n && this.destination.next(n), this.tryComplete()
            }, n.prototype._next = function (t) {
                var n = this.index++;
                try {
                    var e = this.delayDurationSelector(t, n);
                    e && this.tryDelay(e, t)
                } catch (t) {
                    this.destination.error(t)
                }
            }, n.prototype._complete = function () {
                this.completed = !0, this.tryComplete(), this.unsubscribe()
            }, n.prototype.removeSubscription = function (t) {
                t.unsubscribe();
                var n = this.delayNotifierSubscriptions.indexOf(t);
                return -1 !== n && this.delayNotifierSubscriptions.splice(n, 1), t.outerValue
            }, n.prototype.tryDelay = function (t, n) {
                var e = function (t, n, e, r, o) {
                    if (void 0 === o && (o = new Ht(t, e, void 0)), !o.closed) return n instanceof E ? n.subscribe(o) : St(n)(o)
                }(this, t, n);
                e && !e.closed && (this.destination.add(e), this.delayNotifierSubscriptions.push(e))
            }, n.prototype.tryComplete = function () {
                this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
            }, n
        }(Ft);

        function Gt() {
        }

        var Wt, Bt = function () {
            function t(t, n, e) {
                this.nextOrObserver = t, this.error = n, this.complete = e
            }

            return t.prototype.call = function (t, n) {
                return n.subscribe(new Kt(t, this.nextOrObserver, this.error, this.complete))
            }, t
        }(), Kt = function (t) {
            function n(n, e, r, i) {
                var c = t.call(this, n) || this;
                return c._tapNext = Gt, c._tapError = Gt, c._tapComplete = Gt, c._tapError = r || Gt, c._tapComplete = i || Gt, o(e) ? (c._context = c, c._tapNext = e) : e && (c._context = e, c._tapNext = e.next || Gt, c._tapError = e.error || Gt, c._tapComplete = e.complete || Gt), c
            }

            return r(n, t), n.prototype._next = function (t) {
                try {
                    this._tapNext.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(t)
            }, n.prototype._error = function (t) {
                try {
                    this._tapError.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.error(t)
            }, n.prototype._complete = function () {
                try {
                    this._tapComplete.call(this._context)
                } catch (t) {
                    return void this.destination.error(t)
                }
                return this.destination.complete()
            }, n
        }(d), Yt = new Uint8Array(16);

        function Xt() {
            if (!Wt && !(Wt = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return Wt(Yt)
        }

        for (var zt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Qt = function (t) {
            return "string" == typeof t && zt.test(t)
        }, qt = [], $t = 0; $t < 256; ++$t) qt.push(($t + 256).toString(16).substr(1));
        var Zt = function (t, n, e) {
            var r = (t = t || {}).random || (t.rng || Xt)();
            if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, n) {
                e = e || 0;
                for (var o = 0; o < 16; ++o) n[e + o] = r[o];
                return n
            }
            return function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    e = (qt[t[n + 0]] + qt[t[n + 1]] + qt[t[n + 2]] + qt[t[n + 3]] + "-" + qt[t[n + 4]] + qt[t[n + 5]] + "-" + qt[t[n + 6]] + qt[t[n + 7]] + "-" + qt[t[n + 8]] + qt[t[n + 9]] + "-" + qt[t[n + 10]] + qt[t[n + 11]] + qt[t[n + 12]] + qt[t[n + 13]] + qt[t[n + 14]] + qt[t[n + 15]]).toLowerCase();
                if (!Qt(e)) throw TypeError("Stringified UUID is invalid");
                return e
            }(r)
        };

        function Jt(t) {
            return function (t) {
                if (Array.isArray(t)) return tn(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(t) || function (t, n) {
                if (t) {
                    if ("string" == typeof t) return tn(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? tn(t, n) : void 0
                }
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function tn(t, n) {
            (null == n || n > t.length) && (n = t.length);
            for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
            return r
        }

        function nn(t) {
            return (nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        e(2526), e(1817), e(2165), e(2222), e(9554), e(9600), e(1249), e(5212), e(7941), e(9714), e(4747);
        var en = {
            Boolean: function (t, n) {
                return cn(t, n, "boolean", (function () {
                    return "boolean" == typeof n
                }))
            }, OptionalBoolean: function (t, n) {
                return cn(t, n, "boolean or undefined", (function () {
                    return "boolean" == typeof n || void 0 === n
                }))
            }, Function: function (t, n) {
                return cn(t, n, "function", (function () {
                    return "function" == typeof n
                }))
            }, Number: function (t, n) {
                return cn(t, n, "number", (function () {
                    return "number" == typeof n
                }))
            }, Object: function (t, n) {
                return cn(t, n, "object", (function () {
                    return "object" === nn(n)
                }))
            }, OptionalObject: function (t, n) {
                return cn(t, n, "object or undefined", (function () {
                    return "object" === nn(n) && null !== n || void 0 === n
                }))
            }, Array: function (t) {
                function n(n, e) {
                    return t.apply(this, arguments)
                }

                return n.toString = function () {
                    return t.toString()
                }, n
            }((function (t, n) {
                return cn(t, n, "array", (function () {
                    return Array.isArray(n)
                }))
            })), OptionalArray: function (t, n) {
                return cn(t, n, "array or undefined", (function () {
                    return Array.isArray(n) || void 0 === n
                }))
            }, String: function (t, n) {
                return cn(t, n, "string", (function () {
                    return "string" == typeof n
                }))
            }, OptionalString: function (t, n) {
                return cn(t, n, "string or undefined", (function () {
                    return "string" == typeof n || void 0 === n
                }))
            }, Undefined: function (t, n) {
                return cn(t, n, "undefined", (function () {
                    return void 0 === n
                }))
            }, ExportableEventType: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["scaleChange", "annotationToolChange", "dragToolChange", "acroFieldChange", "widgetMousedown", "currentPageIndexChange", "sideViewOpen", "sideViewClose", "keydown", "keyup", "documentDownload", "scrollPositionChange", "currentReadingPageChange"]))))
            }, HTMLIFrameElement: function (t) {
                function n(n, e) {
                    return t.apply(this, arguments)
                }

                return n.toString = function () {
                    return t.toString()
                }, n
            }((function (t, n) {
                return cn(t, n, "iframe element", (function () {
                    return n instanceof HTMLIFrameElement
                }))
            })), DialogType: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["DOCUMENT_INFO", "PREFERENCES", "PRINT", "SEARCH_TOOL"]))))
            }, PositiveNumber: function (t, n) {
                return cn(t, n, "positive number", (function () {
                    return "number" == typeof n && 0 < n
                }))
            }, Degree: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, [0, 90, 180, 270]))))
            }, ViewMode: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["SINGLE", "DOUBLE", "SINGLE_SCROLL", "DOUBLE_SCROLL", "EBOOK"]))))
            }, FitMode: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["WIDTH", "HEIGHT", "PAGE"]))))
            }, ScrollType: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["PAGE", "ANNOTATION"]))))
            }, DragTool: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["MAGNIFY", "PAN", "SELECT_ANNOTATION", "SELECT_TEXT"]))))
            }, OpenableSideView: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["THUMBNAIL", "BOOKMARK", "ANNOTATION", "REDACTION", "ATTACHMENT", "FORM", "DAP", "TEXT_SEARCH", "ANNOTATION_PROPERTY"]))))
            }, ClosableSideView: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["LEFT", "RIGHT"]))))
            }, WatermarkType: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["Text", "Image"]))))
            }, WatermarkAlignment: function (n, e) {
                return cn.apply(void 0, [n, e].concat(Jt(un(e, t.map((function (t) {
                    return t[0]
                }))))))
            }, HidableView: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["TOOLBAR.DRAG_MODE.SELECT_ANNOTATION", "TOOLBAR.ANNOTATION", "TOOLBAR.FORM", "SIDE_VIEW.ANNOTATION", "SIDE_VIEW.FORM", "SIDE_VIEW.SIGNATURE", "TOOLBAR.SAVE", "TOOLBAR.PRINT", "TOOLBAR.DOWNLOAD"]))))
            }, ButtonPosition: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["TOOLBAR.LEFT_SECTION.FIRST", "TOOLBAR.LEFT_SECTION.LAST"]))))
            }, PapyConName: function (t, n) {
                return cn.apply(void 0, [t, n].concat(Jt(un(n, ["SHARE", "PENCIL", "MAIL", "PHONE", "COMMENT", "PRINT", "MINUS", "PLUS", "CHECK_MARK", "SAVE", "DOWNLOAD", "SEARCH", "FILLED_STAMP", "PAGE", "TRASH_CAN", "SIGN_OUT", "BOOKMARK", "LEFT_CHEVRON", "DOWN_CHEVRON", "UP_CHEVRON", "RIGHT_CHEVRON", "CROSS", "CIRCLE_CHECK_MARK", "REFRESH", "NOTE", "SQUARE", "CIRCLE", "POLYGON", "TEXT_BOX", "TEXT_HIGHLIGHT", "TEXT_STRIKEOUT", "TEXT_UNDERLINE", "STAMP", "TEXT_CURSOR", "HAND", "EDIT", "PAGE_SEARCH", "CLIP", "PAGE_WIDTH", "PAGE_HEIGHT", "ENTER_FULLSCREEN", "EXIT_FULLSCREEN", "HORIZONTAL_3DOT", "FIRST", "LAST", "SQUARE_PREVIOUS", "SQUARE_NEXT", "CASE_SENSITIVE", "GRID", "LIST", "SQUARE_CHECK_MARK", "MEMO", "GEAR", "LIST2", "ROUND_SQUARE_CHECK_MARK", "FILLED_ROUND_SQUARE_CHECK_MARK", "IMAGE", "SIGNATURE", "USER", "MP3_FILE", "OCR_FILE", "TXT_FILE", "HYPERLINK", "COPY", "POINTER", "DOUBLE_DICE", "LEFT_CHEVRON2", "DOWN_CHEVRON2", "UP_CHEVRON2", "RIGHT_CHEVRON2", "LEFT_CHEVRON3", "DOWN_CHEVRON3", "UP_CHEVRON3", "RIGHT_CHEVRON3", "INVISIBLE", "VISIBLE", "COLLAPSE", "EXPAND", "TWO_WAY_VERTICAL_ARROW", "TWO_WAY_HORIZONTAL_ARROW", "PREVIOUS", "NEXT", "CIRCLE_HORIZONTAL_3DOT", "ROTATE_COUNTER_CLOCKWISE", "ROTATE_CLOCKWISE", "BIDIRECTIONAL_HORIZONTAL_ARROW", "MEMO2", "MEDIA_PLAY", "MEDIA_NEXT", "MEDIA_FAST_FORWARD", "MEDIA_REWIND", "MEDIA_PREVIOUS", "MEDIA_PAUSE", "MEDIA_STOP", "FUNNEL", "SEND", "CALENDAR", "UNLOCKED", "LOCKED", "UNDO", "REDO", "MONITOR"]))))
            }
        };

        function rn(t, n, e, r) {
            if (n < e || n > r) throw new RangeError("".concat(t, '(which is "').concat(n, '") must be between ').concat(e, " and ").concat(r, "."))
        }

        function on(t, n) {
            Object.keys(t).forEach((function (t) {
                if (!n.find((function (n) {
                    return n === t
                }))) throw new TypeError("'".concat(t, "' key is not valid."))
            }))
        }

        function cn(t, n, e, r) {
            if (!r()) throw new TypeError("".concat(t, '(which is "').concat(n, '") must be ').concat(e, "."))
        }

        function un(t, n) {
            return ["one of [ ".concat(n.map((function (t) {
                return JSON.stringify(t)
            })).join(", "), " ]"), function () {
                return n.some((function (n) {
                    return t === n
                }))
            }]
        }

        function an(t) {
            return (an = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function sn(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var e = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var c, u = t[Symbol.iterator](); !(r = (c = u.next()).done) && (e.push(c.value), !n || e.length !== n); r = !0) ;
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return e
                }
            }(t, n) || pn(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function fn(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function pn(t, n) {
            if (t) {
                if ("string" == typeof t) return ln(t, n);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ln(t, n) : void 0
            }
        }

        function ln(t, n) {
            (null == n || n > t.length) && (n = t.length);
            for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
            return r
        }

        function hn(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        var yn = function () {
            function t(n) {
                var e = this;
                !function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.exportableMessage$ = T(window, "message").pipe(S((function (t) {
                    var n;
                    try {
                        n = JSON.parse(t.data)
                    } catch (t) {
                        return null
                    }
                    return n
                })), lt((function (n) {
                    return (null == n ? void 0 : n.version) === t.API_VERSION
                })), (function (t) {
                    return dt()((n = Ot, function (t) {
                        var e;
                        e = "function" == typeof n ? n : function () {
                            return n
                        };
                        var r = Object.create(t, mt);
                        return r.source = t, r.subjectFactory = e, r
                    })(t));
                    var n
                })), this.importableMessage$ = new q, this.subs = [], this.eventListeners = [], this.authKey = Zt(), this.callbackFunctions = new Map, en.HTMLIFrameElement("config.element", n.element), this.element = n.element, this.subs.push(et([this.acknowledgeStreamDocs(), this.tryChallengeResponse()], at).pipe(Rt()).subscribe({
                    complete: function () {
                        return e.init()
                    }
                }))
            }

            var n, e;
            return n = t, (e = [{
                key: "addEventListener", value: function (t, n) {
                    var e = this;
                    en.ExportableEventType("type", t), en.Function("callback", n), this.eventListeners.find((function (e) {
                        return e.type === t && e.callback === n
                    })) || this.eventListeners.push({
                        type: t,
                        callback: n,
                        subscription: this.exportableMessage$.pipe(lt((function (t) {
                            return "EVENT" === t.messageType
                        })), lt((function (t) {
                            return t.authKey === e.authKey
                        })), lt((function (n) {
                            return n.args.type === t
                        })), S((function (t) {
                            return t.args
                        }))).subscribe({next: n})
                    })
                }
            }, {
                key: "removeEventListener", value: function (t, n) {
                    en.ExportableEventType("type", t), en.Function("callback", n);
                    var e = this.eventListeners.findIndex((function (e) {
                        return e.type === t && e.callback === n
                    }));
                    e < 0 || this.eventListeners.splice(e, 1)[0].subscription.unsubscribe()
                }
            }, {
                key: "callFunction", value: function (t) {
                    for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
                    var o = this.createMessage("CALL_FUNCTION", {functionName: t, functionParams: e});
                    return this.importableMessage$.next(o), this.exportableMessage$.pipe(lt((function (t) {
                        return t.id === o.id
                    })), jt(1), Dt((function (t) {
                        return "FUNCTION_SUCCESS" === t.messageType ? B(t.args) : K(t.args)
                    }))).toPromise()
                }
            }, {
                key: "registerCallbackFunction", value: function (t) {
                    var n, e, r = null, o = function (t, n) {
                        var e;
                        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                            if (Array.isArray(t) || (e = pn(t))) {
                                e && (t = e);
                                var r = 0, o = function () {
                                };
                                return {
                                    s: o, n: function () {
                                        return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                                    }, e: function (t) {
                                        throw t
                                    }, f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var i, c = !0, u = !1;
                        return {
                            s: function () {
                                e = t[Symbol.iterator]()
                            }, n: function () {
                                var t = e.next();
                                return c = t.done, t
                            }, e: function (t) {
                                u = !0, i = t
                            }, f: function () {
                                try {
                                    c || null == e.return || e.return()
                                } finally {
                                    if (u) throw i
                                }
                            }
                        }
                    }(this.callbackFunctions);
                    try {
                        for (o.s(); !(e = o.n()).done;) {
                            var i = sn(e.value, 2), c = i[0];
                            if (i[1] === t) {
                                r = c;
                                break
                            }
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    return r || (r = Zt(), this.callbackFunctions.set(r, t)), fn(n = {}, "__sd_symbol__object_type__", "callbackFunction"), fn(n, "__sd_symbol__callback_id__", r), n
                }
            }, {
                key: "acknowledgeStreamDocs", value: function () {
                    var t = this;
                    return new E((function (n) {
                        t.subs.push(t.exportableMessage$.pipe(lt((function (t) {
                            return "INITIATED" === t.messageType || "REJECTED" === t.messageType
                        })), jt(1)).subscribe({
                            next: function (t) {
                                "INITIATED" === t.messageType ? n.complete() : n.error(new Error("StreamDocs adapter initiation rejected. Please check whether FrontEnd API is enabled at admin page. Or you may try to create StreamDocs instance more than twice. StreamDocs instance can be initiated only one time."))
                            }
                        }))
                    }))
                }
            }, {
                key: "tryChallengeResponse", value: function () {
                    var t = this;
                    return new E((function (n) {
                        var e, r, o = 0, i = !1, c = new R;
                        t.subs.push(c.pipe((r = function () {
                            return function (t, n, e) {
                                void 0 === t && (t = 0);
                                var r = -1;
                                return ft(n) ? r = Number(n) < 1 ? 1 : Number(n) : H(n) && (e = n), H(e) || (e = st), new E((function (n) {
                                    var o = ft(t) ? t : +t - e.now();
                                    return e.schedule(pt, o, {index: 0, period: r, subscriber: n})
                                }))
                            }(o)
                        }, function (t) {
                            return t.lift(new Vt(r))
                        }), (e = function () {
                            o > 1e3 && console.warn("Challenge-Response has being delayed")
                        }, function (t) {
                            return t.lift(new Bt(e, undefined, undefined))
                        })).subscribe({
                            next: function () {
                                i ? c.complete() : (t.postMessage(t.element, t.createMessage("REQUEST_CHALLENGE")), o += 200, c.next())
                            }
                        }), t.exportableMessage$.pipe(lt((function (n) {
                            return "RESPONSE_CHALLENGE" === n.messageType && (null == n ? void 0 : n.authKey) === t.authKey
                        })), jt(1)).subscribe({
                            next: function () {
                                i = !0, t.postMessage(t.element, t.createMessage("ACKNOWLEDGED")), n.complete()
                            }
                        })), c.next()
                    }))
                }
            }, {
                key: "init", value: function () {
                    var t = this;
                    this.subs.push(this.importableMessage$.subscribe((function (n) {
                        return t.postMessage(t.element, n)
                    })), this.exportableMessage$.pipe(lt((function (n) {
                        return "CALLBACK_FUNCTION" === n.messageType && (null == n ? void 0 : n.authKey) === t.authKey
                    }))).subscribe({
                        next: function (n) {
                            if ("object" === an(n.args)) {
                                var e = n.args, r = e.functionId, o = e.functionArgs;
                                t.callbackFunctions.has(r) && t.callbackFunctions.get(r).apply(void 0, function (t) {
                                    if (Array.isArray(t)) return ln(t)
                                }(i = null != o ? o : []) || function (t) {
                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                                }(i) || pn(i) || function () {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }())
                            } else console.error("CALLBACK_FUNCTION request has not any arguments");
                            var i
                        }
                    }))
                }
            }, {
                key: "createMessage", value: function (n, e) {
                    return {messageType: n, authKey: this.authKey, id: Zt(), version: t.API_VERSION, args: e}
                }
            }, {
                key: "postMessage", value: function (t, n) {
                    t.contentWindow.postMessage(JSON.stringify(n), "*")
                }
            }]) && hn(n.prototype, e), t
        }();

        function dn(t) {
            return (dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function vn(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function bn(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function gn(t, n) {
            return (gn = Object.setPrototypeOf || function (t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }

        function mn(t, n) {
            return !n || "object" !== dn(n) && "function" != typeof n ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : n
        }

        function En(t) {
            return (En = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        yn.API_VERSION = 2;
        var On = function (n) {
            !function (t, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), n && gn(t, n)
            }(i, n);
            var e, r, o = (e = i, r = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }(), function () {
                var t, n = En(e);
                if (r) {
                    var o = En(this).constructor;
                    t = Reflect.construct(n, arguments, o)
                } else t = n.apply(this, arguments);
                return mn(this, t)
            });

            function i() {
                var n;
                return bn(this, i), (n = o.apply(this, arguments)).version = "5.34.0", n.document = {
                    open: function (t) {
                        try {
                            on(t, ["streamdocsId", "password"]), en.Object("config", t), en.String("config.streamdocsId", t.streamdocsId), en.OptionalString("config.password", t.password)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("openDocument", t.streamdocsId, t.password)
                    }, save: function () {
                        return n.callFunction("saveDocument")
                    }, download: function (t) {
                        try {
                            en.OptionalObject("config", t), t && (en.OptionalBoolean("config.insertTSA", t.insertTSA), en.OptionalString("config.fileName", t.fileName))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("downloadDocument", null != t ? t : {})
                    }, getPageInfos: function (t) {
                        try {
                            en.Object("config", t), en.OptionalString("config.pageRange", t.pageRange)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("getPageInfos", t)
                    }, getPageCount: function () {
                        return n.callFunction("getPageCount")
                    }, close: function () {
                        return n.callFunction("closeDocument")
                    }, importAnnotations: function (t) {
                        try {
                            en.Object("config", t), en.String("config.data", t.data)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("importAnnotations", t)
                    }, exportAnnotations: function () {
                        return n.callFunction("exportAnnotations")
                    }, clearServerCache: function () {
                        return n.callFunction("clearServerCache")
                    }
                }, n.viewer = {
                    toggleDialog: function (t) {
                        try {
                            on(t, ["dialogType", "visibility"]), en.Object("config", t), en.DialogType("config.dialogType", t.dialogType), en.OptionalBoolean("config.visibility", t.visibility)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction({
                            DOCUMENT_INFO: "toggleDialog",
                            PREFERENCES: "toggleDialog",
                            PRINT: "toggleDialog",
                            SEARCH_TOOL: "toggleSearchTool"
                        }[t.dialogType], t)
                    }, getScale: function () {
                        return n.callFunction("getScale")
                    }, setScale: function (t) {
                        try {
                            en.Object("config", t), on(t, ["scale"]), en.PositiveNumber("config.scale", t.scale)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("setScale", t)
                    }, getCurrentPageIndex: function () {
                        return n.callFunction("getCurrentPageIndex")
                    }, getDegree: function () {
                        return n.callFunction("getDegree")
                    }, setDegree: function (t) {
                        try {
                            en.Object("config", t), on(t, ["degree"]), en.Degree("config.degree", t.degree)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("setDegree", t)
                    }, setViewMode: function (t) {
                        try {
                            en.Object("config", t), on(t, ["viewMode"]), en.ViewMode("config.viewMode", t.viewMode)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("changeViewMode", t)
                    }, fit: function (t) {
                        try {
                            en.Object("config", t), on(t, ["fit"]), en.FitMode("config.fit", t.fit)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("fitCurrentPage", t)
                    }, scrollTo: function (t) {
                        try {
                            if (en.Object("config", t), en.ScrollType("config.type", t.type), en.Number("config.value", t.value), en.OptionalObject("config.centerPoint", t.centerPoint), t.centerPoint) {
                                if ("ANNOTATION" === t.type) throw new Error("Unable to set property 'centerPoint' when 'type' is 'ANNOTATION'.");
                                en.Number("config.centerPoint.x", t.centerPoint.x), en.Number("config.centerPoint.y", t.centerPoint.y)
                            }
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        switch (t.type) {
                            case"PAGE":
                                return n.callFunction("scrollToPage", {pageIndex: t.value, centerPoint: t.centerPoint});
                            case"ANNOTATION":
                                return n.callFunction("scrollToAnnotation", {oid: t.value})
                        }
                    }, setAnnotationTool: function (t) {
                        try {
                            en.Object("config", t), on(t, ["tool"]), en.String("config.tool", t.tool)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("activateAnnotationTool", t)
                    }, setDragTool: function (t) {
                        try {
                            en.Object("config", t), on(t, ["tool"]), en.DragTool("config.tool", t.tool)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("activateDragTool", t)
                    }, openSideView: function (t) {
                        try {
                            en.Object("config", t), on(t, ["type"]), en.OpenableSideView("config.type", t.type)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("openSideView", t)
                    }, closeSideView: function (t) {
                        try {
                            en.Object("config", t), on(t, ["type"]), en.ClosableSideView("config.type", t.type)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("closeSideView", t)
                    }, highlight: function (t) {
                        try {
                            en.Object("config", t), on(t, ["rects"]), en.Array("config.rects", t.rects);
                            for (var e = 0; e < t.rects.length; e++) {
                                var r = t.rects[e];
                                en.Object("config.rects[".concat(e, "]"), r), on(r, ["color", "pageIndex", "rect"]), en.String("config.rects[".concat(e, "].color"), r.color), en.Number("config.rects[".concat(e, "].pageIndex"), r.pageIndex), en.Object("config.rects[".concat(e, "].rect"), r.rect), on(r.rect, ["top", "right", "bottom", "left"]), en.Number("config.rects[".concat(e, "].rect.top"), r.rect.top), en.Number("config.rects[".concat(e, "].rect.right"), r.rect.right), en.Number("config.rects[".concat(e, "].rect.bottom"), r.rect.bottom), en.Number("config.rects[".concat(e, "].rect.left"), r.rect.left)
                            }
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("highlightRects", t)
                    }, unhighlight: function (t) {
                        try {
                            en.Object("config", t), on(t, ["rects"]), en.Array("config.rects", t.rects);
                            for (var e = 0; e < t.rects.length; e++) {
                                var r = t.rects[e];
                                en.Object("config.rects[".concat(e, "]"), r), on(r, ["id"]), en.Number("config.rects[".concat(e, "].id"), r.id)
                            }
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("unhighlightRects", t)
                    }, searchText: function (t) {
                        try {
                            en.Object("config", t), en.String("config.keyword", t.keyword), en.OptionalBoolean("config.caseSensitive", t.caseSensitive), en.OptionalBoolean("config.useRegex", t.useRegex)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("searchTextWithView", t)
                    }, setViewVisibility: function (t) {
                        try {
                            en.Object("config", t), en.HidableView("config.view", t.view), en.Boolean("config.visibility", t.visibility)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("setViewVisibility", t)
                    }, addButton: function (t) {
                        var e,
                            r = (vn(e = {}, "SHARE", "papycon papycon-share"), vn(e, "PENCIL", "papycon papycon-pencil"), vn(e, "MAIL", "papycon papycon-mail"), vn(e, "PHONE", "papycon papycon-mobile"), vn(e, "COMMENT", "papycon papycon-memo3-1"), vn(e, "PRINT", "papycon papycon-print"), vn(e, "MINUS", "papycon papycon-minus"), vn(e, "PLUS", "papycon papycon-plus2"), vn(e, "CHECK_MARK", "papycon papycon-check-mark5"), vn(e, "SAVE", "papycon papycon-save"), vn(e, "DOWNLOAD", "papycon papycon-download"), vn(e, "SEARCH", "papycon papycon-search"), vn(e, "FILLED_STAMP", "papycon papycon-stamp"), vn(e, "PAGE", "papycon papycon-one-page"), vn(e, "TRASH_CAN", "papycon papycon-trash-can"), vn(e, "SIGN_OUT", "papycon papycon-sign-out"), vn(e, "BOOKMARK", "papycon papycon-bookmark"), vn(e, "LEFT_CHEVRON", "papycon papycon-chevron-left"), vn(e, "DOWN_CHEVRON", "papycon papycon-chevron-down"), vn(e, "UP_CHEVRON", "papycon papycon-chevron-up"), vn(e, "RIGHT_CHEVRON", "papycon papycon-chevron-right"), vn(e, "CROSS", "papycon papycon-cross"), vn(e, "CIRCLE_CHECK_MARK", "papycon papycon-check-mark2"), vn(e, "REFRESH", "papycon papycon-refresh2"), vn(e, "NOTE", "papycon papycon-note"), vn(e, "SQUARE", "papycon papycon-square"), vn(e, "CIRCLE", "papycon papycon-circle"), vn(e, "POLYGON", "papycon papycon-polygon"), vn(e, "TEXT_BOX", "papycon papycon-textbox"), vn(e, "TEXT_HIGHLIGHT", "papycon papycon-text-highlight"), vn(e, "TEXT_STRIKEOUT", "papycon papycon-text-strikeout"), vn(e, "TEXT_UNDERLINE", "papycon papycon-text-underline"), vn(e, "STAMP", "papycon papycon-stamp2"), vn(e, "TEXT_CURSOR", "papycon papycon-text-cursor"), vn(e, "HAND", "papycon papycon-hand"), vn(e, "EDIT", "papycon papycon-edit"), vn(e, "PAGE_SEARCH", "papycon papycon-text-search"), vn(e, "CLIP", "papycon papycon-clip"), vn(e, "PAGE_WIDTH", "papycon papycon-fit-width"), vn(e, "PAGE_HEIGHT", "papycon papycon-fit-height"), vn(e, "ENTER_FULLSCREEN", "papycon papycon-fullscreen"), vn(e, "EXIT_FULLSCREEN", "papycon papycon-exit-fullscreen"), vn(e, "HORIZONTAL_3DOT", "papycon papycon-more-symbol3"), vn(e, "FIRST", "papycon papycon-first-symbol"), vn(e, "LAST", "papycon papycon-last-symbol"), vn(e, "SQUARE_PREVIOUS", "papycon papycon-previous-symbol"), vn(e, "SQUARE_NEXT", "papycon papycon-next-symbol"), vn(e, "CASE_SENSITIVE", "papycon papycon-case-sensitive"), vn(e, "GRID", "papycon papycon-thumbnail"), vn(e, "LIST", "papycon papycon-list"), vn(e, "SQUARE_CHECK_MARK", "papycon papycon-check-mark3"), vn(e, "MEMO", "papycon papycon-memo2"), vn(e, "GEAR", "papycon papycon-settings"), vn(e, "LIST2", "papycon papycon-list2"), vn(e, "ROUND_SQUARE_CHECK_MARK", "papycon papycon-check-mark4"), vn(e, "FILLED_ROUND_SQUARE_CHECK_MARK", "papycon papycon-check-mark4-filled"), vn(e, "IMAGE", "papycon papycon-image"), vn(e, "SIGNATURE", "papycon papycon-signature2"), vn(e, "USER", "papycon papycon-profile2"), vn(e, "MP3_FILE", "papycon papycon-file-mp3"), vn(e, "OCR_FILE", "papycon papycon-file-ocr"), vn(e, "TXT_FILE", "papycon papycon-file-txt"), vn(e, "HYPERLINK", "papycon papycon-link"), vn(e, "COPY", "papycon papycon-copy"), vn(e, "POINTER", "papycon papycon-pointer"), vn(e, "DOUBLE_DICE", "papycon papycon-double-dice"), vn(e, "LEFT_CHEVRON2", "papycon papycon-chevron2-left"), vn(e, "DOWN_CHEVRON2", "papycon papycon-chevron2-down"), vn(e, "UP_CHEVRON2", "papycon papycon-chevron2-up"), vn(e, "RIGHT_CHEVRON2", "papycon papycon-chevron2-right"), vn(e, "LEFT_CHEVRON3", "papycon papycon-chevron3-left"), vn(e, "DOWN_CHEVRON3", "papycon papycon-chevron3-down"), vn(e, "UP_CHEVRON3", "papycon papycon-chevron3-up"), vn(e, "RIGHT_CHEVRON3", "papycon papycon-chevron3-right"), vn(e, "INVISIBLE", "papycon papycon-area-hide"), vn(e, "VISIBLE", "papycon papycon-area-show"), vn(e, "COLLAPSE", "papycon papycon-collapse"), vn(e, "EXPAND", "papycon papycon-extend"), vn(e, "TWO_WAY_VERTICAL_ARROW", "papycon papycon-fit-height2"), vn(e, "TWO_WAY_HORIZONTAL_ARROW", "papycon papycon-fit-width2"), vn(e, "PREVIOUS", "papycon papycon-previous-symbol2"), vn(e, "NEXT", "papycon papycon-next-symbol2"), vn(e, "CIRCLE_HORIZONTAL_3DOT", "papycon papycon-more-symbol4"), vn(e, "ROTATE_COUNTER_CLOCKWISE", "papycon papycon-rotate-r"), vn(e, "ROTATE_CLOCKWISE", "papycon papycon-rotate-l"), vn(e, "BIDIRECTIONAL_HORIZONTAL_ARROW", "papycon papycon-switch"), vn(e, "MEMO2", "papycon papycon-memo3"), vn(e, "MEDIA_PLAY", "papycon papycon-audio-play"), vn(e, "MEDIA_NEXT", "papycon papycon-audio-next"), vn(e, "MEDIA_FAST_FORWARD", "papycon papycon-audio-fast-forward"), vn(e, "MEDIA_REWIND", "papycon papycon-audio-rewind"), vn(e, "MEDIA_PREVIOUS", "papycon papycon-audio-previous"), vn(e, "MEDIA_PAUSE", "papycon papycon-audio-pause"), vn(e, "MEDIA_STOP", "papycon papycon-audio-stop"), vn(e, "FUNNEL", "papycon papycon-funnel"), vn(e, "SEND", "papycon papycon-send"), vn(e, "CALENDAR", "papycon papycon-calendar"), vn(e, "UNLOCKED", "papycon papycon-unlocked"), vn(e, "LOCKED", "papycon papycon-locked"), vn(e, "UNDO", "papycon papycon-undo"), vn(e, "REDO", "papycon papycon-redo"),vn(e, "MONITOR", "papycon papycon-pc"),e);
                        try {
                            en.Object("config", t), en.Array("config.buttons", t.buttons);
                            for (var o = 0; o < t.buttons.length; o++) {
                                var i = t.buttons[o];
                                en.Object("config.buttons[".concat(o, "]"), i), en.ButtonPosition("config.buttons[".concat(o, "].position"), i.position), en.PapyConName("config.buttons[".concat(o, "].icon"), i.icon), en.String("config.buttons[".concat(o, "].label"), i.label), en.Function("config.buttons[".concat(o, "].onclick"), i.onclick), i.icon = r[i.icon], i.onclick = n.registerCallbackFunction(i.onclick)
                            }
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("addButton", t)
                    }
                }, n.watermark = {
                    create: function (e) {
                        try {
                            en.Object("config", e), on(e, ["watermarks", "temp"]), en.Array("config.watermarks", e.watermarks);
                            for (var r = function (n) {
                                var r = e.watermarks[n];
                                en.Object("config.watermarks[".concat(n, "]"), r), on(r, ["type", "opacity", "align", "rotate", "x", "y", "text", "size", "color", "fontName", "scale", "imagePath"]), en.WatermarkType("config.watermarks[".concat(n, "].type"), r.type), en.Number("config.watermarks[".concat(n, "].opacity"), r.opacity), rn("config.watermarks[".concat(n, "].opacity"), r.opacity, 0, 1), en.WatermarkAlignment("config.watermarks[".concat(n, "].align"), r.align), en.Number("config.watermarks[".concat(n, "].rotate"), r.rotate), rn("config.watermarks[".concat(n, "].rotate"), r.rotate, 0, 360), en.Number("config.watermarks[".concat(n, "].x"), r.x), en.Number("config.watermarks[".concat(n, "].y"), r.y), "Text" === r.type ? (en.String("config.watermarks[".concat(n, "].text"), r.text), en.Number("config.watermarks[".concat(n, "].size"), r.size), en.String("config.watermarks[".concat(n, "].color"), r.color), en.String("config.watermarks[".concat(n, "].fontName"), r.fontName)) : (en.Number("config.watermarks[".concat(n, "].scale"), r.scale), en.String("config.watermarks[".concat(n, "].imagePath"), r.imagePath)), e.watermarks[n] = Object.assign(Object.assign({}, r), {
                                    align: t.find((function (t) {
                                        return t[0] === r.align
                                    }))[1],
                                    textAlignment: "center",
                                    bold: !1,
                                    italic: !1,
                                    _repeat: !1,
                                    _repeatHeight: 0,
                                    _repeatWidth: 0,
                                    allowView: !0,
                                    allowPrint: !0,
                                    range: "all",
                                    placeOverContent: !0
                                })
                            }, o = 0; o < e.watermarks.length; o++) r(o);
                            en.Boolean("config.temp", e.temp)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("createWatermark", e)
                    }
                }, n.text = {
                    search: function (t) {
                        try {
                            en.Object("config", t), on(t, ["keyword", "caseSensitive", "useRegex", "pageRange"]), en.String("config.keyword", t.keyword), en.OptionalBoolean("config.caseSensitive", t.caseSensitive), en.OptionalBoolean("config.useRegex", t.useRegex), en.OptionalString("config.pageRange", t.pageRange)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("searchText", t)
                    }
                }, n.preference = {
                    set: function (t) {
                        try {
                            en.Object("config", t), on(t, ["annotationAuthor"]), en.String("config.annotationAuthor", t.annotationAuthor)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("setPreference", t)
                    }
                }, n.acroForm = {
                    list: function () {
                        return n.callFunction("getAcroFields", {})
                    }, setAttributes: function (t) {
                        try {
                            en.Object("config", t), en.String("config.title", t.title), en.OptionalBoolean("config.required", t.required), en.OptionalBoolean("config.readOnly", t.readOnly), en.OptionalString("config.value", t.value)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("setAcroFieldAttributes", t)
                    }
                }, n.annotation = {
                    list: function (t) {
                        try {
                            en.Object("config", t), en.Number("config.pageIndex", t.pageIndex)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("listAnnotations", t)
                    }, setAttributes: function (t) {
                        try {
                            en.Object("config", t), en.Number("config.pageIndex", t.pageIndex), en.Number("config.oid", t.oid), en.OptionalBoolean("config.locked", t.locked)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("setAnnotationAttributes", t)
                    }
                }, n.signature = {
                    create: function (t) {
                        if (t) try {
                            en.Object("config", t), on(t, ["serverSide", "certificate", "identificationNumber"]), en.OptionalBoolean("config.serverSide", t.serverSide), en.OptionalString("config.certificate", t.certificate), en.OptionalString("config.identificationNumber", t.identificationNumber)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("createSignature", t || {})
                    }, verify: function (t) {
                        try {
                            en.Object("config", t), on(t, ["signatures"]), en.Array("config.signatures", t.signatures);
                            for (var e = 0; e < t.signatures.length; e++) {
                                var r = t.signatures[e];
                                en.Object("config.signatures[".concat(e, "]"), r), on(r, ["title"]), en.String("config.signatures[".concat(e, "].title"), r.title)
                            }
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("verifySignature", t)
                    }, setOptions: function (t) {
                        if (t) try {
                            if (en.Object("config", t), on(t, ["language", "allowOID"]), en.OptionalBoolean("config.language", t.language), en.OptionalArray("config.allowOID", t.allowOID), t.allowOID) for (var e = 0; e < t.allowOID.length; e++) {
                                var r = t.allowOID[e];
                                en.String("config.allowOID[".concat(e, "]"), r)
                            }
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("setSignatureOptions", t || {})
                    }, getImage: function (t) {
                        if (t) try {
                            en.Object("config", t), en.String("config.title", t.title)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("getSignatureImage", t)
                    }, setImage: function (t) {
                        if (t) try {
                            en.Object("config", t), en.String("config.title", t.title), en.String("config.url", t.url)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                        return n.callFunction("setSignatureImage", t)
                    }
                }, n
            }

            return i
        }(yn);
        window.StreamDocs = On
    }()
}();