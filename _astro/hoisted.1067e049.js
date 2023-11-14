var sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function an(ie) {
    return ie && ie.__esModule && Object.prototype.hasOwnProperty.call(ie, "default") ? ie.default : ie
}
var Bt = {},
    cr = {
        get exports() {
            return Bt
        },
        set exports(ie) {
            Bt = ie
        }
    };
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */
var rn;

function ln() {
    return rn || (rn = 1, function(ie) {
        (function(B, k) {
            ie.exports = B.document ? k(B, !0) : function(T) {
                if (!T.document) throw new Error("jQuery requires a window with a document");
                return k(T)
            }
        })(typeof window < "u" ? window : sn, function(B, k) {
            var T = [],
                i = Object.getPrototypeOf,
                r = T.slice,
                c = T.flat ? function(e) {
                    return T.flat.call(e)
                } : function(e) {
                    return T.concat.apply([], e)
                },
                d = T.push,
                g = T.indexOf,
                x = {},
                P = x.toString,
                q = x.hasOwnProperty,
                O = q.toString,
                V = O.call(Object),
                N = {},
                C = function(t) {
                    return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function"
                },
                M = function(t) {
                    return t != null && t === t.window
                },
                L = B.document,
                ee = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function le(e, t, n) {
                n = n || L;
                var o, a, l = n.createElement("script");
                if (l.text = e, t)
                    for (o in ee) a = t[o] || t.getAttribute && t.getAttribute(o), a && l.setAttribute(o, a);
                n.head.appendChild(l).parentNode.removeChild(l)
            }

            function ve(e) {
                return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? x[P.call(e)] || "object" : typeof e
            }
            var Le = "3.6.4",
                s = function(e, t) {
                    return new s.fn.init(e, t)
                };
            s.fn = s.prototype = {
                jquery: Le,
                constructor: s,
                length: 0,
                toArray: function() {
                    return r.call(this)
                },
                get: function(e) {
                    return e == null ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = s.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return s.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(s.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(r.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(s.grep(this, function(e, t) {
                        return (t + 1) % 2
                    }))
                },
                odd: function() {
                    return this.pushStack(s.grep(this, function(e, t) {
                        return t % 2
                    }))
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: d,
                sort: T.sort,
                splice: T.splice
            }, s.extend = s.fn.extend = function() {
                var e, t, n, o, a, l, u = arguments[0] || {},
                    v = 1,
                    p = arguments.length,
                    b = !1;
                for (typeof u == "boolean" && (b = u, u = arguments[v] || {}, v++), typeof u != "object" && !C(u) && (u = {}), v === p && (u = this, v--); v < p; v++)
                    if ((e = arguments[v]) != null)
                        for (t in e) o = e[t], !(t === "__proto__" || u === o) && (b && o && (s.isPlainObject(o) || (a = Array.isArray(o))) ? (n = u[t], a && !Array.isArray(n) ? l = [] : !a && !s.isPlainObject(n) ? l = {} : l = n, a = !1, u[t] = s.extend(b, l, o)) : o !== void 0 && (u[t] = o));
                return u
            }, s.extend({
                expando: "jQuery" + (Le + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !e || P.call(e) !== "[object Object]" ? !1 : (t = i(e), t ? (n = q.call(t, "constructor") && t.constructor, typeof n == "function" && O.call(n) === V) : !0)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e, t, n) {
                    le(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, o = 0;
                    if (We(e))
                        for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++);
                    else
                        for (o in e)
                            if (t.call(e[o], o, e[o]) === !1) break;
                    return e
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return e != null && (We(Object(e)) ? s.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return t == null ? -1 : g.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, o = 0, a = e.length; o < n; o++) e[a++] = t[o];
                    return e.length = a, e
                },
                grep: function(e, t, n) {
                    for (var o, a = [], l = 0, u = e.length, v = !n; l < u; l++) o = !t(e[l], l), o !== v && a.push(e[l]);
                    return a
                },
                map: function(e, t, n) {
                    var o, a, l = 0,
                        u = [];
                    if (We(e))
                        for (o = e.length; l < o; l++) a = t(e[l], l, n), a != null && u.push(a);
                    else
                        for (l in e) a = t(e[l], l, n), a != null && u.push(a);
                    return c(u)
                },
                guid: 1,
                support: N
            }), typeof Symbol == "function" && (s.fn[Symbol.iterator] = T[Symbol.iterator]), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                x["[object " + t + "]"] = t.toLowerCase()
            });

            function We(e) {
                var t = !!e && "length" in e && e.length,
                    n = ve(e);
                return C(e) || M(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
            }
            var oe = function(e) {
                var t, n, o, a, l, u, v, p, b, S, D, w, A, F, K, R, Oe, Ae, Fe, de = "sizzle" + 1 * new Date,
                    J = e.document,
                    ze = 0,
                    se = 0,
                    Te = It(),
                    Ot = It(),
                    _t = It(),
                    Be = It(),
                    ct = function(f, h) {
                        return f === h && (D = !0), 0
                    },
                    dt = {}.hasOwnProperty,
                    Ie = [],
                    st = Ie.pop,
                    Qe = Ie.push,
                    at = Ie.push,
                    Yi = Ie.slice,
                    pt = function(f, h) {
                        for (var y = 0, E = f.length; y < E; y++)
                            if (f[y] === h) return y;
                        return -1
                    },
                    oi = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ue = "[\\x20\\t\\r\\n\\f]",
                    ht = "(?:\\\\[\\da-fA-F]{1,6}" + ue + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    Gi = "\\[" + ue + "*(" + ht + ")(?:" + ue + "*([*^$|!~]?=)" + ue + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + ht + "))|)" + ue + "*\\]",
                    si = ":(" + ht + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Gi + ")*)|.*)\\)|)",
                    Jn = new RegExp(ue + "+", "g"),
                    Mt = new RegExp("^" + ue + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ue + "+$", "g"),
                    Kn = new RegExp("^" + ue + "*," + ue + "*"),
                    Qi = new RegExp("^" + ue + "*([>+~]|" + ue + ")" + ue + "*"),
                    Zn = new RegExp(ue + "|>"),
                    er = new RegExp(si),
                    tr = new RegExp("^" + ht + "$"),
                    zt = {
                        ID: new RegExp("^#(" + ht + ")"),
                        CLASS: new RegExp("^\\.(" + ht + ")"),
                        TAG: new RegExp("^(" + ht + "|[*])"),
                        ATTR: new RegExp("^" + Gi),
                        PSEUDO: new RegExp("^" + si),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ue + "*(even|odd|(([+-]|)(\\d*)n|)" + ue + "*(?:([+-]|)" + ue + "*(\\d+)|))" + ue + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + oi + ")$", "i"),
                        needsContext: new RegExp("^" + ue + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ue + "*((?:-\\d)?\\d*)" + ue + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ir = /HTML$/i,
                    nr = /^(?:input|select|textarea|button)$/i,
                    rr = /^h\d$/i,
                    jt = /^[^{]+\{\s*\[native \w/,
                    or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ai = /[+~]/,
                    rt = new RegExp("\\\\[\\da-fA-F]{1,6}" + ue + "?|\\\\([^\\r\\n\\f])", "g"),
                    ot = function(f, h) {
                        var y = "0x" + f.slice(1) - 65536;
                        return h || (y < 0 ? String.fromCharCode(y + 65536) : String.fromCharCode(y >> 10 | 55296, y & 1023 | 56320))
                    },
                    Ji = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Ki = function(f, h) {
                        return h ? f === "\0" ? "�" : f.slice(0, -1) + "\\" + f.charCodeAt(f.length - 1).toString(16) + " " : "\\" + f
                    },
                    Zi = function() {
                        w()
                    },
                    sr = Rt(function(f) {
                        return f.disabled === !0 && f.nodeName.toLowerCase() === "fieldset"
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    at.apply(Ie = Yi.call(J.childNodes), J.childNodes), Ie[J.childNodes.length].nodeType
                } catch {
                    at = {
                        apply: Ie.length ? function(h, y) {
                            Qe.apply(h, Yi.call(y))
                        } : function(h, y) {
                            for (var E = h.length, m = 0; h[E++] = y[m++];);
                            h.length = E - 1
                        }
                    }
                }

                function pe(f, h, y, E) {
                    var m, j, $, _, z, Y, X, Q = h && h.ownerDocument,
                        te = h ? h.nodeType : 9;
                    if (y = y || [], typeof f != "string" || !f || te !== 1 && te !== 9 && te !== 11) return y;
                    if (!E && (w(h), h = h || A, K)) {
                        if (te !== 11 && (z = or.exec(f)))
                            if (m = z[1]) {
                                if (te === 9)
                                    if ($ = h.getElementById(m)) {
                                        if ($.id === m) return y.push($), y
                                    } else return y;
                                else if (Q && ($ = Q.getElementById(m)) && Fe(h, $) && $.id === m) return y.push($), y
                            } else {
                                if (z[2]) return at.apply(y, h.getElementsByTagName(f)), y;
                                if ((m = z[3]) && n.getElementsByClassName && h.getElementsByClassName) return at.apply(y, h.getElementsByClassName(m)), y
                            } if (n.qsa && !Be[f + " "] && (!R || !R.test(f)) && (te !== 1 || h.nodeName.toLowerCase() !== "object")) {
                            if (X = f, Q = h, te === 1 && (Zn.test(f) || Qi.test(f))) {
                                for (Q = ai.test(f) && ui(h.parentNode) || h, (Q !== h || !n.scope) && ((_ = h.getAttribute("id")) ? _ = _.replace(Ji, Ki) : h.setAttribute("id", _ = de)), Y = u(f), j = Y.length; j--;) Y[j] = (_ ? "#" + _ : ":scope") + " " + Wt(Y[j]);
                                X = Y.join(",")
                            }
                            try {
                                return at.apply(y, Q.querySelectorAll(X)), y
                            } catch {
                                Be(f, !0)
                            } finally {
                                _ === de && h.removeAttribute("id")
                            }
                        }
                    }
                    return p(f.replace(Mt, "$1"), h, y, E)
                }

                function It() {
                    var f = [];

                    function h(y, E) {
                        return f.push(y + " ") > o.cacheLength && delete h[f.shift()], h[y + " "] = E
                    }
                    return h
                }

                function et(f) {
                    return f[de] = !0, f
                }

                function Je(f) {
                    var h = A.createElement("fieldset");
                    try {
                        return !!f(h)
                    } catch {
                        return !1
                    } finally {
                        h.parentNode && h.parentNode.removeChild(h), h = null
                    }
                }

                function li(f, h) {
                    for (var y = f.split("|"), E = y.length; E--;) o.attrHandle[y[E]] = h
                }

                function en(f, h) {
                    var y = h && f,
                        E = y && f.nodeType === 1 && h.nodeType === 1 && f.sourceIndex - h.sourceIndex;
                    if (E) return E;
                    if (y) {
                        for (; y = y.nextSibling;)
                            if (y === h) return -1
                    }
                    return f ? 1 : -1
                }

                function ar(f) {
                    return function(h) {
                        var y = h.nodeName.toLowerCase();
                        return y === "input" && h.type === f
                    }
                }

                function lr(f) {
                    return function(h) {
                        var y = h.nodeName.toLowerCase();
                        return (y === "input" || y === "button") && h.type === f
                    }
                }

                function tn(f) {
                    return function(h) {
                        return "form" in h ? h.parentNode && h.disabled === !1 ? "label" in h ? "label" in h.parentNode ? h.parentNode.disabled === f : h.disabled === f : h.isDisabled === f || h.isDisabled !== !f && sr(h) === f : h.disabled === f : "label" in h ? h.disabled === f : !1
                    }
                }

                function gt(f) {
                    return et(function(h) {
                        return h = +h, et(function(y, E) {
                            for (var m, j = f([], y.length, h), $ = j.length; $--;) y[m = j[$]] && (y[m] = !(E[m] = y[m]))
                        })
                    })
                }

                function ui(f) {
                    return f && typeof f.getElementsByTagName < "u" && f
                }
                n = pe.support = {}, l = pe.isXML = function(f) {
                    var h = f && f.namespaceURI,
                        y = f && (f.ownerDocument || f).documentElement;
                    return !ir.test(h || y && y.nodeName || "HTML")
                }, w = pe.setDocument = function(f) {
                    var h, y, E = f ? f.ownerDocument || f : J;
                    return E == A || E.nodeType !== 9 || !E.documentElement || (A = E, F = A.documentElement, K = !l(A), J != A && (y = A.defaultView) && y.top !== y && (y.addEventListener ? y.addEventListener("unload", Zi, !1) : y.attachEvent && y.attachEvent("onunload", Zi)), n.scope = Je(function(m) {
                        return F.appendChild(m).appendChild(A.createElement("div")), typeof m.querySelectorAll < "u" && !m.querySelectorAll(":scope fieldset div").length
                    }), n.cssHas = Je(function() {
                        try {
                            return A.querySelector(":has(*,:jqfake)"), !1
                        } catch {
                            return !0
                        }
                    }), n.attributes = Je(function(m) {
                        return m.className = "i", !m.getAttribute("className")
                    }), n.getElementsByTagName = Je(function(m) {
                        return m.appendChild(A.createComment("")), !m.getElementsByTagName("*").length
                    }), n.getElementsByClassName = jt.test(A.getElementsByClassName), n.getById = Je(function(m) {
                        return F.appendChild(m).id = de, !A.getElementsByName || !A.getElementsByName(de).length
                    }), n.getById ? (o.filter.ID = function(m) {
                        var j = m.replace(rt, ot);
                        return function($) {
                            return $.getAttribute("id") === j
                        }
                    }, o.find.ID = function(m, j) {
                        if (typeof j.getElementById < "u" && K) {
                            var $ = j.getElementById(m);
                            return $ ? [$] : []
                        }
                    }) : (o.filter.ID = function(m) {
                        var j = m.replace(rt, ot);
                        return function($) {
                            var _ = typeof $.getAttributeNode < "u" && $.getAttributeNode("id");
                            return _ && _.value === j
                        }
                    }, o.find.ID = function(m, j) {
                        if (typeof j.getElementById < "u" && K) {
                            var $, _, z, Y = j.getElementById(m);
                            if (Y) {
                                if ($ = Y.getAttributeNode("id"), $ && $.value === m) return [Y];
                                for (z = j.getElementsByName(m), _ = 0; Y = z[_++];)
                                    if ($ = Y.getAttributeNode("id"), $ && $.value === m) return [Y]
                            }
                            return []
                        }
                    }), o.find.TAG = n.getElementsByTagName ? function(m, j) {
                        if (typeof j.getElementsByTagName < "u") return j.getElementsByTagName(m);
                        if (n.qsa) return j.querySelectorAll(m)
                    } : function(m, j) {
                        var $, _ = [],
                            z = 0,
                            Y = j.getElementsByTagName(m);
                        if (m === "*") {
                            for (; $ = Y[z++];) $.nodeType === 1 && _.push($);
                            return _
                        }
                        return Y
                    }, o.find.CLASS = n.getElementsByClassName && function(m, j) {
                        if (typeof j.getElementsByClassName < "u" && K) return j.getElementsByClassName(m)
                    }, Oe = [], R = [], (n.qsa = jt.test(A.querySelectorAll)) && (Je(function(m) {
                        var j;
                        F.appendChild(m).innerHTML = "<a id='" + de + "'></a><select id='" + de + "-\r\\' msallowcapture=''><option selected=''></option></select>", m.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ue + `*(?:''|"")`), m.querySelectorAll("[selected]").length || R.push("\\[" + ue + "*(?:value|" + oi + ")"), m.querySelectorAll("[id~=" + de + "-]").length || R.push("~="), j = A.createElement("input"), j.setAttribute("name", ""), m.appendChild(j), m.querySelectorAll("[name='']").length || R.push("\\[" + ue + "*name" + ue + "*=" + ue + `*(?:''|"")`), m.querySelectorAll(":checked").length || R.push(":checked"), m.querySelectorAll("a#" + de + "+*").length || R.push(".#.+[+~]"), m.querySelectorAll("\\\f"), R.push("[\\r\\n\\f]")
                    }), Je(function(m) {
                        m.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var j = A.createElement("input");
                        j.setAttribute("type", "hidden"), m.appendChild(j).setAttribute("name", "D"), m.querySelectorAll("[name=d]").length && R.push("name" + ue + "*[*^$|!~]?="), m.querySelectorAll(":enabled").length !== 2 && R.push(":enabled", ":disabled"), F.appendChild(m).disabled = !0, m.querySelectorAll(":disabled").length !== 2 && R.push(":enabled", ":disabled"), m.querySelectorAll("*,:x"), R.push(",.*:")
                    })), (n.matchesSelector = jt.test(Ae = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && Je(function(m) {
                        n.disconnectedMatch = Ae.call(m, "*"), Ae.call(m, "[s!='']:x"), Oe.push("!=", si)
                    }), n.cssHas || R.push(":has"), R = R.length && new RegExp(R.join("|")), Oe = Oe.length && new RegExp(Oe.join("|")), h = jt.test(F.compareDocumentPosition), Fe = h || jt.test(F.contains) ? function(m, j) {
                        var $ = m.nodeType === 9 && m.documentElement || m,
                            _ = j && j.parentNode;
                        return m === _ || !!(_ && _.nodeType === 1 && ($.contains ? $.contains(_) : m.compareDocumentPosition && m.compareDocumentPosition(_) & 16))
                    } : function(m, j) {
                        if (j) {
                            for (; j = j.parentNode;)
                                if (j === m) return !0
                        }
                        return !1
                    }, ct = h ? function(m, j) {
                        if (m === j) return D = !0, 0;
                        var $ = !m.compareDocumentPosition - !j.compareDocumentPosition;
                        return $ || ($ = (m.ownerDocument || m) == (j.ownerDocument || j) ? m.compareDocumentPosition(j) : 1, $ & 1 || !n.sortDetached && j.compareDocumentPosition(m) === $ ? m == A || m.ownerDocument == J && Fe(J, m) ? -1 : j == A || j.ownerDocument == J && Fe(J, j) ? 1 : S ? pt(S, m) - pt(S, j) : 0 : $ & 4 ? -1 : 1)
                    } : function(m, j) {
                        if (m === j) return D = !0, 0;
                        var $, _ = 0,
                            z = m.parentNode,
                            Y = j.parentNode,
                            X = [m],
                            Q = [j];
                        if (!z || !Y) return m == A ? -1 : j == A ? 1 : z ? -1 : Y ? 1 : S ? pt(S, m) - pt(S, j) : 0;
                        if (z === Y) return en(m, j);
                        for ($ = m; $ = $.parentNode;) X.unshift($);
                        for ($ = j; $ = $.parentNode;) Q.unshift($);
                        for (; X[_] === Q[_];) _++;
                        return _ ? en(X[_], Q[_]) : X[_] == J ? -1 : Q[_] == J ? 1 : 0
                    }), A
                }, pe.matches = function(f, h) {
                    return pe(f, null, null, h)
                }, pe.matchesSelector = function(f, h) {
                    if (w(f), n.matchesSelector && K && !Be[h + " "] && (!Oe || !Oe.test(h)) && (!R || !R.test(h))) try {
                        var y = Ae.call(f, h);
                        if (y || n.disconnectedMatch || f.document && f.document.nodeType !== 11) return y
                    } catch {
                        Be(h, !0)
                    }
                    return pe(h, A, null, [f]).length > 0
                }, pe.contains = function(f, h) {
                    return (f.ownerDocument || f) != A && w(f), Fe(f, h)
                }, pe.attr = function(f, h) {
                    (f.ownerDocument || f) != A && w(f);
                    var y = o.attrHandle[h.toLowerCase()],
                        E = y && dt.call(o.attrHandle, h.toLowerCase()) ? y(f, h, !K) : void 0;
                    return E !== void 0 ? E : n.attributes || !K ? f.getAttribute(h) : (E = f.getAttributeNode(h)) && E.specified ? E.value : null
                }, pe.escape = function(f) {
                    return (f + "").replace(Ji, Ki)
                }, pe.error = function(f) {
                    throw new Error("Syntax error, unrecognized expression: " + f)
                }, pe.uniqueSort = function(f) {
                    var h, y = [],
                        E = 0,
                        m = 0;
                    if (D = !n.detectDuplicates, S = !n.sortStable && f.slice(0), f.sort(ct), D) {
                        for (; h = f[m++];) h === f[m] && (E = y.push(m));
                        for (; E--;) f.splice(y[E], 1)
                    }
                    return S = null, f
                }, a = pe.getText = function(f) {
                    var h, y = "",
                        E = 0,
                        m = f.nodeType;
                    if (m) {
                        if (m === 1 || m === 9 || m === 11) {
                            if (typeof f.textContent == "string") return f.textContent;
                            for (f = f.firstChild; f; f = f.nextSibling) y += a(f)
                        } else if (m === 3 || m === 4) return f.nodeValue
                    } else
                        for (; h = f[E++];) y += a(h);
                    return y
                }, o = pe.selectors = {
                    cacheLength: 50,
                    createPseudo: et,
                    match: zt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(f) {
                            return f[1] = f[1].replace(rt, ot), f[3] = (f[3] || f[4] || f[5] || "").replace(rt, ot), f[2] === "~=" && (f[3] = " " + f[3] + " "), f.slice(0, 4)
                        },
                        CHILD: function(f) {
                            return f[1] = f[1].toLowerCase(), f[1].slice(0, 3) === "nth" ? (f[3] || pe.error(f[0]), f[4] = +(f[4] ? f[5] + (f[6] || 1) : 2 * (f[3] === "even" || f[3] === "odd")), f[5] = +(f[7] + f[8] || f[3] === "odd")) : f[3] && pe.error(f[0]), f
                        },
                        PSEUDO: function(f) {
                            var h, y = !f[6] && f[2];
                            return zt.CHILD.test(f[0]) ? null : (f[3] ? f[2] = f[4] || f[5] || "" : y && er.test(y) && (h = u(y, !0)) && (h = y.indexOf(")", y.length - h) - y.length) && (f[0] = f[0].slice(0, h), f[2] = y.slice(0, h)), f.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(f) {
                            var h = f.replace(rt, ot).toLowerCase();
                            return f === "*" ? function() {
                                return !0
                            } : function(y) {
                                return y.nodeName && y.nodeName.toLowerCase() === h
                            }
                        },
                        CLASS: function(f) {
                            var h = Te[f + " "];
                            return h || (h = new RegExp("(^|" + ue + ")" + f + "(" + ue + "|$)")) && Te(f, function(y) {
                                return h.test(typeof y.className == "string" && y.className || typeof y.getAttribute < "u" && y.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(f, h, y) {
                            return function(E) {
                                var m = pe.attr(E, f);
                                return m == null ? h === "!=" : h ? (m += "", h === "=" ? m === y : h === "!=" ? m !== y : h === "^=" ? y && m.indexOf(y) === 0 : h === "*=" ? y && m.indexOf(y) > -1 : h === "$=" ? y && m.slice(-y.length) === y : h === "~=" ? (" " + m.replace(Jn, " ") + " ").indexOf(y) > -1 : h === "|=" ? m === y || m.slice(0, y.length + 1) === y + "-" : !1) : !0
                            }
                        },
                        CHILD: function(f, h, y, E, m) {
                            var j = f.slice(0, 3) !== "nth",
                                $ = f.slice(-4) !== "last",
                                _ = h === "of-type";
                            return E === 1 && m === 0 ? function(z) {
                                return !!z.parentNode
                            } : function(z, Y, X) {
                                var Q, te, he, G, je, Pe, Ue = j !== $ ? "nextSibling" : "previousSibling",
                                    me = z.parentNode,
                                    Nt = _ && z.nodeName.toLowerCase(),
                                    Dt = !X && !_,
                                    Xe = !1;
                                if (me) {
                                    if (j) {
                                        for (; Ue;) {
                                            for (G = z; G = G[Ue];)
                                                if (_ ? G.nodeName.toLowerCase() === Nt : G.nodeType === 1) return !1;
                                            Pe = Ue = f === "only" && !Pe && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (Pe = [$ ? me.firstChild : me.lastChild], $ && Dt) {
                                        for (G = me, he = G[de] || (G[de] = {}), te = he[G.uniqueID] || (he[G.uniqueID] = {}), Q = te[f] || [], je = Q[0] === ze && Q[1], Xe = je && Q[2], G = je && me.childNodes[je]; G = ++je && G && G[Ue] || (Xe = je = 0) || Pe.pop();)
                                            if (G.nodeType === 1 && ++Xe && G === z) {
                                                te[f] = [ze, je, Xe];
                                                break
                                            }
                                    } else if (Dt && (G = z, he = G[de] || (G[de] = {}), te = he[G.uniqueID] || (he[G.uniqueID] = {}), Q = te[f] || [], je = Q[0] === ze && Q[1], Xe = je), Xe === !1)
                                        for (;
                                            (G = ++je && G && G[Ue] || (Xe = je = 0) || Pe.pop()) && !((_ ? G.nodeName.toLowerCase() === Nt : G.nodeType === 1) && ++Xe && (Dt && (he = G[de] || (G[de] = {}), te = he[G.uniqueID] || (he[G.uniqueID] = {}), te[f] = [ze, Xe]), G === z)););
                                    return Xe -= m, Xe === E || Xe % E === 0 && Xe / E >= 0
                                }
                            }
                        },
                        PSEUDO: function(f, h) {
                            var y, E = o.pseudos[f] || o.setFilters[f.toLowerCase()] || pe.error("unsupported pseudo: " + f);
                            return E[de] ? E(h) : E.length > 1 ? (y = [f, f, "", h], o.setFilters.hasOwnProperty(f.toLowerCase()) ? et(function(m, j) {
                                for (var $, _ = E(m, h), z = _.length; z--;) $ = pt(m, _[z]), m[$] = !(j[$] = _[z])
                            }) : function(m) {
                                return E(m, 0, y)
                            }) : E
                        }
                    },
                    pseudos: {
                        not: et(function(f) {
                            var h = [],
                                y = [],
                                E = v(f.replace(Mt, "$1"));
                            return E[de] ? et(function(m, j, $, _) {
                                for (var z, Y = E(m, null, _, []), X = m.length; X--;)(z = Y[X]) && (m[X] = !(j[X] = z))
                            }) : function(m, j, $) {
                                return h[0] = m, E(h, null, $, y), h[0] = null, !y.pop()
                            }
                        }),
                        has: et(function(f) {
                            return function(h) {
                                return pe(f, h).length > 0
                            }
                        }),
                        contains: et(function(f) {
                            return f = f.replace(rt, ot),
                                function(h) {
                                    return (h.textContent || a(h)).indexOf(f) > -1
                                }
                        }),
                        lang: et(function(f) {
                            return tr.test(f || "") || pe.error("unsupported lang: " + f), f = f.replace(rt, ot).toLowerCase(),
                                function(h) {
                                    var y;
                                    do
                                        if (y = K ? h.lang : h.getAttribute("xml:lang") || h.getAttribute("lang")) return y = y.toLowerCase(), y === f || y.indexOf(f + "-") === 0; while ((h = h.parentNode) && h.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(f) {
                            var h = e.location && e.location.hash;
                            return h && h.slice(1) === f.id
                        },
                        root: function(f) {
                            return f === F
                        },
                        focus: function(f) {
                            return f === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(f.type || f.href || ~f.tabIndex)
                        },
                        enabled: tn(!1),
                        disabled: tn(!0),
                        checked: function(f) {
                            var h = f.nodeName.toLowerCase();
                            return h === "input" && !!f.checked || h === "option" && !!f.selected
                        },
                        selected: function(f) {
                            return f.parentNode && f.parentNode.selectedIndex, f.selected === !0
                        },
                        empty: function(f) {
                            for (f = f.firstChild; f; f = f.nextSibling)
                                if (f.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(f) {
                            return !o.pseudos.empty(f)
                        },
                        header: function(f) {
                            return rr.test(f.nodeName)
                        },
                        input: function(f) {
                            return nr.test(f.nodeName)
                        },
                        button: function(f) {
                            var h = f.nodeName.toLowerCase();
                            return h === "input" && f.type === "button" || h === "button"
                        },
                        text: function(f) {
                            var h;
                            return f.nodeName.toLowerCase() === "input" && f.type === "text" && ((h = f.getAttribute("type")) == null || h.toLowerCase() === "text")
                        },
                        first: gt(function() {
                            return [0]
                        }),
                        last: gt(function(f, h) {
                            return [h - 1]
                        }),
                        eq: gt(function(f, h, y) {
                            return [y < 0 ? y + h : y]
                        }),
                        even: gt(function(f, h) {
                            for (var y = 0; y < h; y += 2) f.push(y);
                            return f
                        }),
                        odd: gt(function(f, h) {
                            for (var y = 1; y < h; y += 2) f.push(y);
                            return f
                        }),
                        lt: gt(function(f, h, y) {
                            for (var E = y < 0 ? y + h : y > h ? h : y; --E >= 0;) f.push(E);
                            return f
                        }),
                        gt: gt(function(f, h, y) {
                            for (var E = y < 0 ? y + h : y; ++E < h;) f.push(E);
                            return f
                        })
                    }
                }, o.pseudos.nth = o.pseudos.eq;
                for (t in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) o.pseudos[t] = ar(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) o.pseudos[t] = lr(t);

                function nn() {}
                nn.prototype = o.filters = o.pseudos, o.setFilters = new nn, u = pe.tokenize = function(f, h) {
                    var y, E, m, j, $, _, z, Y = Ot[f + " "];
                    if (Y) return h ? 0 : Y.slice(0);
                    for ($ = f, _ = [], z = o.preFilter; $;) {
                        (!y || (E = Kn.exec($))) && (E && ($ = $.slice(E[0].length) || $), _.push(m = [])), y = !1, (E = Qi.exec($)) && (y = E.shift(), m.push({
                            value: y,
                            type: E[0].replace(Mt, " ")
                        }), $ = $.slice(y.length));
                        for (j in o.filter)(E = zt[j].exec($)) && (!z[j] || (E = z[j](E))) && (y = E.shift(), m.push({
                            value: y,
                            type: j,
                            matches: E
                        }), $ = $.slice(y.length));
                        if (!y) break
                    }
                    return h ? $.length : $ ? pe.error(f) : Ot(f, _).slice(0)
                };

                function Wt(f) {
                    for (var h = 0, y = f.length, E = ""; h < y; h++) E += f[h].value;
                    return E
                }

                function Rt(f, h, y) {
                    var E = h.dir,
                        m = h.next,
                        j = m || E,
                        $ = y && j === "parentNode",
                        _ = se++;
                    return h.first ? function(z, Y, X) {
                        for (; z = z[E];)
                            if (z.nodeType === 1 || $) return f(z, Y, X);
                        return !1
                    } : function(z, Y, X) {
                        var Q, te, he, G = [ze, _];
                        if (X) {
                            for (; z = z[E];)
                                if ((z.nodeType === 1 || $) && f(z, Y, X)) return !0
                        } else
                            for (; z = z[E];)
                                if (z.nodeType === 1 || $)
                                    if (he = z[de] || (z[de] = {}), te = he[z.uniqueID] || (he[z.uniqueID] = {}), m && m === z.nodeName.toLowerCase()) z = z[E] || z;
                                    else {
                                        if ((Q = te[j]) && Q[0] === ze && Q[1] === _) return G[2] = Q[2];
                                        if (te[j] = G, G[2] = f(z, Y, X)) return !0
                                    } return !1
                    }
                }

                function fi(f) {
                    return f.length > 1 ? function(h, y, E) {
                        for (var m = f.length; m--;)
                            if (!f[m](h, y, E)) return !1;
                        return !0
                    } : f[0]
                }

                function ur(f, h, y) {
                    for (var E = 0, m = h.length; E < m; E++) pe(f, h[E], y);
                    return y
                }

                function Ft(f, h, y, E, m) {
                    for (var j, $ = [], _ = 0, z = f.length, Y = h != null; _ < z; _++)(j = f[_]) && (!y || y(j, E, m)) && ($.push(j), Y && h.push(_));
                    return $
                }

                function ci(f, h, y, E, m, j) {
                    return E && !E[de] && (E = ci(E)), m && !m[de] && (m = ci(m, j)), et(function($, _, z, Y) {
                        var X, Q, te, he = [],
                            G = [],
                            je = _.length,
                            Pe = $ || ur(h || "*", z.nodeType ? [z] : z, []),
                            Ue = f && ($ || !h) ? Ft(Pe, he, f, z, Y) : Pe,
                            me = y ? m || ($ ? f : je || E) ? [] : _ : Ue;
                        if (y && y(Ue, me, z, Y), E)
                            for (X = Ft(me, G), E(X, [], z, Y), Q = X.length; Q--;)(te = X[Q]) && (me[G[Q]] = !(Ue[G[Q]] = te));
                        if ($) {
                            if (m || f) {
                                if (m) {
                                    for (X = [], Q = me.length; Q--;)(te = me[Q]) && X.push(Ue[Q] = te);
                                    m(null, me = [], X, Y)
                                }
                                for (Q = me.length; Q--;)(te = me[Q]) && (X = m ? pt($, te) : he[Q]) > -1 && ($[X] = !(_[X] = te))
                            }
                        } else me = Ft(me === _ ? me.splice(je, me.length) : me), m ? m(null, _, me, Y) : at.apply(_, me)
                    })
                }

                function di(f) {
                    for (var h, y, E, m = f.length, j = o.relative[f[0].type], $ = j || o.relative[" "], _ = j ? 1 : 0, z = Rt(function(Q) {
                            return Q === h
                        }, $, !0), Y = Rt(function(Q) {
                            return pt(h, Q) > -1
                        }, $, !0), X = [function(Q, te, he) {
                            var G = !j && (he || te !== b) || ((h = te).nodeType ? z(Q, te, he) : Y(Q, te, he));
                            return h = null, G
                        }]; _ < m; _++)
                        if (y = o.relative[f[_].type]) X = [Rt(fi(X), y)];
                        else {
                            if (y = o.filter[f[_].type].apply(null, f[_].matches), y[de]) {
                                for (E = ++_; E < m && !o.relative[f[E].type]; E++);
                                return ci(_ > 1 && fi(X), _ > 1 && Wt(f.slice(0, _ - 1).concat({
                                    value: f[_ - 2].type === " " ? "*" : ""
                                })).replace(Mt, "$1"), y, _ < E && di(f.slice(_, E)), E < m && di(f = f.slice(E)), E < m && Wt(f))
                            }
                            X.push(y)
                        } return fi(X)
                }

                function fr(f, h) {
                    var y = h.length > 0,
                        E = f.length > 0,
                        m = function(j, $, _, z, Y) {
                            var X, Q, te, he = 0,
                                G = "0",
                                je = j && [],
                                Pe = [],
                                Ue = b,
                                me = j || E && o.find.TAG("*", Y),
                                Nt = ze += Ue == null ? 1 : Math.random() || .1,
                                Dt = me.length;
                            for (Y && (b = $ == A || $ || Y); G !== Dt && (X = me[G]) != null; G++) {
                                if (E && X) {
                                    for (Q = 0, !$ && X.ownerDocument != A && (w(X), _ = !K); te = f[Q++];)
                                        if (te(X, $ || A, _)) {
                                            z.push(X);
                                            break
                                        } Y && (ze = Nt)
                                }
                                y && ((X = !te && X) && he--, j && je.push(X))
                            }
                            if (he += G, y && G !== he) {
                                for (Q = 0; te = h[Q++];) te(je, Pe, $, _);
                                if (j) {
                                    if (he > 0)
                                        for (; G--;) je[G] || Pe[G] || (Pe[G] = st.call(z));
                                    Pe = Ft(Pe)
                                }
                                at.apply(z, Pe), Y && !j && Pe.length > 0 && he + h.length > 1 && pe.uniqueSort(z)
                            }
                            return Y && (ze = Nt, b = Ue), je
                        };
                    return y ? et(m) : m
                }
                return v = pe.compile = function(f, h) {
                    var y, E = [],
                        m = [],
                        j = _t[f + " "];
                    if (!j) {
                        for (h || (h = u(f)), y = h.length; y--;) j = di(h[y]), j[de] ? E.push(j) : m.push(j);
                        j = _t(f, fr(m, E)), j.selector = f
                    }
                    return j
                }, p = pe.select = function(f, h, y, E) {
                    var m, j, $, _, z, Y = typeof f == "function" && f,
                        X = !E && u(f = Y.selector || f);
                    if (y = y || [], X.length === 1) {
                        if (j = X[0] = X[0].slice(0), j.length > 2 && ($ = j[0]).type === "ID" && h.nodeType === 9 && K && o.relative[j[1].type]) {
                            if (h = (o.find.ID($.matches[0].replace(rt, ot), h) || [])[0], h) Y && (h = h.parentNode);
                            else return y;
                            f = f.slice(j.shift().value.length)
                        }
                        for (m = zt.needsContext.test(f) ? 0 : j.length; m-- && ($ = j[m], !o.relative[_ = $.type]);)
                            if ((z = o.find[_]) && (E = z($.matches[0].replace(rt, ot), ai.test(j[0].type) && ui(h.parentNode) || h))) {
                                if (j.splice(m, 1), f = E.length && Wt(j), !f) return at.apply(y, E), y;
                                break
                            }
                    }
                    return (Y || v(f, X))(E, h, !K, y, !h || ai.test(f) && ui(h.parentNode) || h), y
                }, n.sortStable = de.split("").sort(ct).join("") === de, n.detectDuplicates = !!D, w(), n.sortDetached = Je(function(f) {
                    return f.compareDocumentPosition(A.createElement("fieldset")) & 1
                }), Je(function(f) {
                    return f.innerHTML = "<a href='#'></a>", f.firstChild.getAttribute("href") === "#"
                }) || li("type|href|height|width", function(f, h, y) {
                    if (!y) return f.getAttribute(h, h.toLowerCase() === "type" ? 1 : 2)
                }), (!n.attributes || !Je(function(f) {
                    return f.innerHTML = "<input/>", f.firstChild.setAttribute("value", ""), f.firstChild.getAttribute("value") === ""
                })) && li("value", function(f, h, y) {
                    if (!y && f.nodeName.toLowerCase() === "input") return f.defaultValue
                }), Je(function(f) {
                    return f.getAttribute("disabled") == null
                }) || li(oi, function(f, h, y) {
                    var E;
                    if (!y) return f[h] === !0 ? h.toLowerCase() : (E = f.getAttributeNode(h)) && E.specified ? E.value : null
                }), pe
            }(B);
            s.find = oe, s.expr = oe.selectors, s.expr[":"] = s.expr.pseudos, s.uniqueSort = s.unique = oe.uniqueSort, s.text = oe.getText, s.isXMLDoc = oe.isXML, s.contains = oe.contains, s.escapeSelector = oe.escape;
            var Se = function(e, t, n) {
                    for (var o = [], a = n !== void 0;
                        (e = e[t]) && e.nodeType !== 9;)
                        if (e.nodeType === 1) {
                            if (a && s(e).is(n)) break;
                            o.push(e)
                        } return o
                },
                Ee = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                    return n
                },
                W = s.expr.match.needsContext;

            function H(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var Z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function U(e, t, n) {
                return C(t) ? s.grep(e, function(o, a) {
                    return !!t.call(o, a, o) !== n
                }) : t.nodeType ? s.grep(e, function(o) {
                    return o === t !== n
                }) : typeof t != "string" ? s.grep(e, function(o) {
                    return g.call(t, o) > -1 !== n
                }) : s.filter(t, e, n)
            }
            s.filter = function(e, t, n) {
                var o = t[0];
                return n && (e = ":not(" + e + ")"), t.length === 1 && o.nodeType === 1 ? s.find.matchesSelector(o, e) ? [o] : [] : s.find.matches(e, s.grep(t, function(a) {
                    return a.nodeType === 1
                }))
            }, s.fn.extend({
                find: function(e) {
                    var t, n, o = this.length,
                        a = this;
                    if (typeof e != "string") return this.pushStack(s(e).filter(function() {
                        for (t = 0; t < o; t++)
                            if (s.contains(a[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < o; t++) s.find(e, a[t], n);
                    return o > 1 ? s.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(U(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(U(this, e || [], !0))
                },
                is: function(e) {
                    return !!U(this, typeof e == "string" && W.test(e) ? s(e) : e || [], !1).length
                }
            });
            var fe, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                xe = s.fn.init = function(e, t, n) {
                    var o, a;
                    if (!e) return this;
                    if (n = n || fe, typeof e == "string")
                        if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? o = [null, e, null] : o = be.exec(e), o && (o[1] || !t))
                            if (o[1]) {
                                if (t = t instanceof s ? t[0] : t, s.merge(this, s.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : L, !0)), Z.test(o[1]) && s.isPlainObject(t))
                                    for (o in t) C(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                                return this
                            } else return a = L.getElementById(o[2]), a && (this[0] = a, this.length = 1), this;
                    else return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    else {
                        if (e.nodeType) return this[0] = e, this.length = 1, this;
                        if (C(e)) return n.ready !== void 0 ? n.ready(e) : e(s)
                    }
                    return s.makeArray(e, this)
                };
            xe.prototype = s.fn, fe = s(L);
            var He = /^(?:parents|prev(?:Until|All))/,
                qe = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            s.fn.extend({
                has: function(e) {
                    var t = s(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var o = 0; o < n; o++)
                            if (s.contains(this, t[o])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, o = 0,
                        a = this.length,
                        l = [],
                        u = typeof e != "string" && s(e);
                    if (!W.test(e)) {
                        for (; o < a; o++)
                            for (n = this[o]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (u ? u.index(n) > -1 : n.nodeType === 1 && s.find.matchesSelector(n, e))) {
                                    l.push(n);
                                    break
                                }
                    }
                    return this.pushStack(l.length > 1 ? s.uniqueSort(l) : l)
                },
                index: function(e) {
                    return e ? typeof e == "string" ? g.call(s(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(s.uniqueSort(s.merge(this.get(), s(e, t))))
                },
                addBack: function(e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
                }
            });

            function Ve(e, t) {
                for (;
                    (e = e[t]) && e.nodeType !== 1;);
                return e
            }
            s.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== 11 ? t : null
                },
                parents: function(e) {
                    return Se(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return Se(e, "parentNode", n)
                },
                next: function(e) {
                    return Ve(e, "nextSibling")
                },
                prev: function(e) {
                    return Ve(e, "previousSibling")
                },
                nextAll: function(e) {
                    return Se(e, "nextSibling")
                },
                prevAll: function(e) {
                    return Se(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return Se(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return Se(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return Ee((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return Ee(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument != null && i(e.contentDocument) ? e.contentDocument : (H(e, "template") && (e = e.content || e), s.merge([], e.childNodes))
                }
            }, function(e, t) {
                s.fn[e] = function(n, o) {
                    var a = s.map(this, t, n);
                    return e.slice(-5) !== "Until" && (o = n), o && typeof o == "string" && (a = s.filter(o, a)), this.length > 1 && (qe[e] || s.uniqueSort(a), He.test(e) && a.reverse()), this.pushStack(a)
                }
            });
            var ge = /[^\x20\t\r\n\f]+/g;

            function ce(e) {
                var t = {};
                return s.each(e.match(ge) || [], function(n, o) {
                    t[o] = !0
                }), t
            }
            s.Callbacks = function(e) {
                e = typeof e == "string" ? ce(e) : s.extend({}, e);
                var t, n, o, a, l = [],
                    u = [],
                    v = -1,
                    p = function() {
                        for (a = a || e.once, o = t = !0; u.length; v = -1)
                            for (n = u.shift(); ++v < l.length;) l[v].apply(n[0], n[1]) === !1 && e.stopOnFalse && (v = l.length, n = !1);
                        e.memory || (n = !1), t = !1, a && (n ? l = [] : l = "")
                    },
                    b = {
                        add: function() {
                            return l && (n && !t && (v = l.length - 1, u.push(n)), function S(D) {
                                s.each(D, function(w, A) {
                                    C(A) ? (!e.unique || !b.has(A)) && l.push(A) : A && A.length && ve(A) !== "string" && S(A)
                                })
                            }(arguments), n && !t && p()), this
                        },
                        remove: function() {
                            return s.each(arguments, function(S, D) {
                                for (var w;
                                    (w = s.inArray(D, l, w)) > -1;) l.splice(w, 1), w <= v && v--
                            }), this
                        },
                        has: function(S) {
                            return S ? s.inArray(S, l) > -1 : l.length > 0
                        },
                        empty: function() {
                            return l && (l = []), this
                        },
                        disable: function() {
                            return a = u = [], l = n = "", this
                        },
                        disabled: function() {
                            return !l
                        },
                        lock: function() {
                            return a = u = [], !n && !t && (l = n = ""), this
                        },
                        locked: function() {
                            return !!a
                        },
                        fireWith: function(S, D) {
                            return a || (D = D || [], D = [S, D.slice ? D.slice() : D], u.push(D), t || p()), this
                        },
                        fire: function() {
                            return b.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!o
                        }
                    };
                return b
            };

            function Ne(e) {
                return e
            }

            function De(e) {
                throw e
            }

            function Re(e, t, n, o) {
                var a;
                try {
                    e && C(a = e.promise) ? a.call(e).done(t).fail(n) : e && C(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(o))
                } catch (l) {
                    n.apply(void 0, [l])
                }
            }
            s.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory"), 2],
                            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), 1, "rejected"]
                        ],
                        n = "pending",
                        o = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function(l) {
                                return o.then(null, l)
                            },
                            pipe: function() {
                                var l = arguments;
                                return s.Deferred(function(u) {
                                    s.each(t, function(v, p) {
                                        var b = C(l[p[4]]) && l[p[4]];
                                        a[p[1]](function() {
                                            var S = b && b.apply(this, arguments);
                                            S && C(S.promise) ? S.promise().progress(u.notify).done(u.resolve).fail(u.reject) : u[p[0] + "With"](this, b ? [S] : arguments)
                                        })
                                    }), l = null
                                }).promise()
                            },
                            then: function(l, u, v) {
                                var p = 0;

                                function b(S, D, w, A) {
                                    return function() {
                                        var F = this,
                                            K = arguments,
                                            R = function() {
                                                var Ae, Fe;
                                                if (!(S < p)) {
                                                    if (Ae = w.apply(F, K), Ae === D.promise()) throw new TypeError("Thenable self-resolution");
                                                    Fe = Ae && (typeof Ae == "object" || typeof Ae == "function") && Ae.then, C(Fe) ? A ? Fe.call(Ae, b(p, D, Ne, A), b(p, D, De, A)) : (p++, Fe.call(Ae, b(p, D, Ne, A), b(p, D, De, A), b(p, D, Ne, D.notifyWith))) : (w !== Ne && (F = void 0, K = [Ae]), (A || D.resolveWith)(F, K))
                                                }
                                            },
                                            Oe = A ? R : function() {
                                                try {
                                                    R()
                                                } catch (Ae) {
                                                    s.Deferred.exceptionHook && s.Deferred.exceptionHook(Ae, Oe.stackTrace), S + 1 >= p && (w !== De && (F = void 0, K = [Ae]), D.rejectWith(F, K))
                                                }
                                            };
                                        S ? Oe() : (s.Deferred.getStackHook && (Oe.stackTrace = s.Deferred.getStackHook()), B.setTimeout(Oe))
                                    }
                                }
                                return s.Deferred(function(S) {
                                    t[0][3].add(b(0, S, C(v) ? v : Ne, S.notifyWith)), t[1][3].add(b(0, S, C(l) ? l : Ne)), t[2][3].add(b(0, S, C(u) ? u : De))
                                }).promise()
                            },
                            promise: function(l) {
                                return l != null ? s.extend(l, o) : o
                            }
                        },
                        a = {};
                    return s.each(t, function(l, u) {
                        var v = u[2],
                            p = u[5];
                        o[u[1]] = v.add, p && v.add(function() {
                            n = p
                        }, t[3 - l][2].disable, t[3 - l][3].disable, t[0][2].lock, t[0][3].lock), v.add(u[3].fire), a[u[0]] = function() {
                            return a[u[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[u[0] + "With"] = v.fireWith
                    }), o.promise(a), e && e.call(a, a), a
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        o = Array(n),
                        a = r.call(arguments),
                        l = s.Deferred(),
                        u = function(v) {
                            return function(p) {
                                o[v] = this, a[v] = arguments.length > 1 ? r.call(arguments) : p, --t || l.resolveWith(o, a)
                            }
                        };
                    if (t <= 1 && (Re(e, l.done(u(n)).resolve, l.reject, !t), l.state() === "pending" || C(a[n] && a[n].then))) return l.then();
                    for (; n--;) Re(a[n], u(n), l.reject);
                    return l.promise()
                }
            });
            var Ye = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            s.Deferred.exceptionHook = function(e, t) {
                B.console && B.console.warn && e && Ye.test(e.name) && B.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, s.readyException = function(e) {
                B.setTimeout(function() {
                    throw e
                })
            };
            var ke = s.Deferred();
            s.fn.ready = function(e) {
                return ke.then(e).catch(function(t) {
                    s.readyException(t)
                }), this
            }, s.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (e === !0 ? --s.readyWait : s.isReady) || (s.isReady = !0, !(e !== !0 && --s.readyWait > 0) && ke.resolveWith(L, [s]))
                }
            }), s.ready.then = ke.then;

            function ye() {
                L.removeEventListener("DOMContentLoaded", ye), B.removeEventListener("load", ye), s.ready()
            }
            L.readyState === "complete" || L.readyState !== "loading" && !L.documentElement.doScroll ? B.setTimeout(s.ready) : (L.addEventListener("DOMContentLoaded", ye), B.addEventListener("load", ye));
            var we = function(e, t, n, o, a, l, u) {
                    var v = 0,
                        p = e.length,
                        b = n == null;
                    if (ve(n) === "object") {
                        a = !0;
                        for (v in n) we(e, t, v, n[v], !0, l, u)
                    } else if (o !== void 0 && (a = !0, C(o) || (u = !0), b && (u ? (t.call(e, o), t = null) : (b = t, t = function(S, D, w) {
                            return b.call(s(S), w)
                        })), t))
                        for (; v < p; v++) t(e[v], n, u ? o : o.call(e[v], v, t(e[v], n)));
                    return a ? e : b ? t.call(e) : p ? t(e[0], n) : l
                },
                tt = /^-ms-/,
                it = /-([a-z])/g;

            function Ke(e, t) {
                return t.toUpperCase()
            }

            function ne(e) {
                return e.replace(tt, "ms-").replace(it, Ke)
            }
            var re = function(e) {
                return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
            };

            function Ce() {
                this.expando = s.expando + Ce.uid++
            }
            Ce.uid = 1, Ce.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, re(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var o, a = this.cache(e);
                    if (typeof t == "string") a[ne(t)] = n;
                    else
                        for (o in t) a[ne(o)] = t[o];
                    return a
                },
                get: function(e, t) {
                    return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][ne(t)]
                },
                access: function(e, t, n) {
                    return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t)
                },
                remove: function(e, t) {
                    var n, o = e[this.expando];
                    if (o !== void 0) {
                        if (t !== void 0)
                            for (Array.isArray(t) ? t = t.map(ne) : (t = ne(t), t = t in o ? [t] : t.match(ge) || []), n = t.length; n--;) delete o[t[n]];
                        (t === void 0 || s.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return t !== void 0 && !s.isEmptyObject(t)
                }
            };
            var I = new Ce,
                $e = new Ce,
                un = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                fn = /[A-Z]/g;

            function cn(e) {
                return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : un.test(e) ? JSON.parse(e) : e
            }

            function vi(e, t, n) {
                var o;
                if (n === void 0 && e.nodeType === 1)
                    if (o = "data-" + t.replace(fn, "-$&").toLowerCase(), n = e.getAttribute(o), typeof n == "string") {
                        try {
                            n = cn(n)
                        } catch {}
                        $e.set(e, t, n)
                    } else n = void 0;
                return n
            }
            s.extend({
                hasData: function(e) {
                    return $e.hasData(e) || I.hasData(e)
                },
                data: function(e, t, n) {
                    return $e.access(e, t, n)
                },
                removeData: function(e, t) {
                    $e.remove(e, t)
                },
                _data: function(e, t, n) {
                    return I.access(e, t, n)
                },
                _removeData: function(e, t) {
                    I.remove(e, t)
                }
            }), s.fn.extend({
                data: function(e, t) {
                    var n, o, a, l = this[0],
                        u = l && l.attributes;
                    if (e === void 0) {
                        if (this.length && (a = $e.get(l), l.nodeType === 1 && !I.get(l, "hasDataAttrs"))) {
                            for (n = u.length; n--;) u[n] && (o = u[n].name, o.indexOf("data-") === 0 && (o = ne(o.slice(5)), vi(l, o, a[o])));
                            I.set(l, "hasDataAttrs", !0)
                        }
                        return a
                    }
                    return typeof e == "object" ? this.each(function() {
                        $e.set(this, e)
                    }) : we(this, function(v) {
                        var p;
                        if (l && v === void 0) return p = $e.get(l, e), p !== void 0 || (p = vi(l, e), p !== void 0) ? p : void 0;
                        this.each(function() {
                            $e.set(this, e, v)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        $e.remove(this, e)
                    })
                }
            }), s.extend({
                queue: function(e, t, n) {
                    var o;
                    if (e) return t = (t || "fx") + "queue", o = I.get(e, t), n && (!o || Array.isArray(n) ? o = I.access(e, t, s.makeArray(n)) : o.push(n)), o || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = s.queue(e, t),
                        o = n.length,
                        a = n.shift(),
                        l = s._queueHooks(e, t),
                        u = function() {
                            s.dequeue(e, t)
                        };
                    a === "inprogress" && (a = n.shift(), o--), a && (t === "fx" && n.unshift("inprogress"), delete l.stop, a.call(e, u, l)), !o && l && l.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return I.get(e, n) || I.access(e, n, {
                        empty: s.Callbacks("once memory").add(function() {
                            I.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), s.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? s.queue(this[0], e) : t === void 0 ? this : this.each(function() {
                        var o = s.queue(this, e, t);
                        s._queueHooks(this, e), e === "fx" && o[0] !== "inprogress" && s.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        s.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, o = 1,
                        a = s.Deferred(),
                        l = this,
                        u = this.length,
                        v = function() {
                            --o || a.resolveWith(l, [l])
                        };
                    for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; u--;) n = I.get(l[u], e + "queueHooks"), n && n.empty && (o++, n.empty.add(v));
                    return v(), a.promise(t)
                }
            });
            var yi = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                kt = new RegExp("^(?:([+-])=|)(" + yi + ")([a-z%]*)$", "i"),
                nt = ["Top", "Right", "Bottom", "Left"],
                lt = L.documentElement,
                vt = function(e) {
                    return s.contains(e.ownerDocument, e)
                },
                dn = {
                    composed: !0
                };
            lt.getRootNode && (vt = function(e) {
                return s.contains(e.ownerDocument, e) || e.getRootNode(dn) === e.ownerDocument
            });
            var $t = function(e, t) {
                return e = t || e, e.style.display === "none" || e.style.display === "" && vt(e) && s.css(e, "display") === "none"
            };

            function mi(e, t, n, o) {
                var a, l, u = 20,
                    v = o ? function() {
                        return o.cur()
                    } : function() {
                        return s.css(e, t, "")
                    },
                    p = v(),
                    b = n && n[3] || (s.cssNumber[t] ? "" : "px"),
                    S = e.nodeType && (s.cssNumber[t] || b !== "px" && +p) && kt.exec(s.css(e, t));
                if (S && S[3] !== b) {
                    for (p = p / 2, b = b || S[3], S = +p || 1; u--;) s.style(e, t, S + b), (1 - l) * (1 - (l = v() / p || .5)) <= 0 && (u = 0), S = S / l;
                    S = S * 2, s.style(e, t, S + b), n = n || []
                }
                return n && (S = +S || +p || 0, a = n[1] ? S + (n[1] + 1) * n[2] : +n[2], o && (o.unit = b, o.start = S, o.end = a)), a
            }
            var bi = {};

            function pn(e) {
                var t, n = e.ownerDocument,
                    o = e.nodeName,
                    a = bi[o];
                return a || (t = n.body.appendChild(n.createElement(o)), a = s.css(t, "display"), t.parentNode.removeChild(t), a === "none" && (a = "block"), bi[o] = a, a)
            }

            function yt(e, t) {
                for (var n, o, a = [], l = 0, u = e.length; l < u; l++) o = e[l], o.style && (n = o.style.display, t ? (n === "none" && (a[l] = I.get(o, "display") || null, a[l] || (o.style.display = "")), o.style.display === "" && $t(o) && (a[l] = pn(o))) : n !== "none" && (a[l] = "none", I.set(o, "display", n)));
                for (l = 0; l < u; l++) a[l] != null && (e[l].style.display = a[l]);
                return e
            }
            s.fn.extend({
                show: function() {
                    return yt(this, !0)
                },
                hide: function() {
                    return yt(this)
                },
                toggle: function(e) {
                    return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                        $t(this) ? s(this).show() : s(this).hide()
                    })
                }
            });
            var St = /^(?:checkbox|radio)$/i,
                wi = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                Ti = /^$|^module$|\/(?:java|ecma)script/i;
            (function() {
                var e = L.createDocumentFragment(),
                    t = e.appendChild(L.createElement("div")),
                    n = L.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), N.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", N.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", N.option = !!t.lastChild
            })();
            var Ge = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, N.option || (Ge.optgroup = Ge.option = [1, "<select multiple='multiple'>", "</select>"]);

            function _e(e, t) {
                var n;
                return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && H(e, t) ? s.merge([e], n) : n
            }

            function Ut(e, t) {
                for (var n = 0, o = e.length; n < o; n++) I.set(e[n], "globalEval", !t || I.get(t[n], "globalEval"))
            }
            var hn = /<|&#?\w+;/;

            function ki(e, t, n, o, a) {
                for (var l, u, v, p, b, S, D = t.createDocumentFragment(), w = [], A = 0, F = e.length; A < F; A++)
                    if (l = e[A], l || l === 0)
                        if (ve(l) === "object") s.merge(w, l.nodeType ? [l] : l);
                        else if (!hn.test(l)) w.push(t.createTextNode(l));
                else {
                    for (u = u || D.appendChild(t.createElement("div")), v = (wi.exec(l) || ["", ""])[1].toLowerCase(), p = Ge[v] || Ge._default, u.innerHTML = p[1] + s.htmlPrefilter(l) + p[2], S = p[0]; S--;) u = u.lastChild;
                    s.merge(w, u.childNodes), u = D.firstChild, u.textContent = ""
                }
                for (D.textContent = "", A = 0; l = w[A++];) {
                    if (o && s.inArray(l, o) > -1) {
                        a && a.push(l);
                        continue
                    }
                    if (b = vt(l), u = _e(D.appendChild(l), "script"), b && Ut(u), n)
                        for (S = 0; l = u[S++];) Ti.test(l.type || "") && n.push(l)
                }
                return D
            }
            var Si = /^([^.]*)(?:\.(.+)|)/;

            function mt() {
                return !0
            }

            function bt() {
                return !1
            }

            function gn(e, t) {
                return e === vn() == (t === "focus")
            }

            function vn() {
                try {
                    return L.activeElement
                } catch {}
            }

            function Xt(e, t, n, o, a, l) {
                var u, v;
                if (typeof t == "object") {
                    typeof n != "string" && (o = o || n, n = void 0);
                    for (v in t) Xt(e, v, n, o, t[v], l);
                    return e
                }
                if (o == null && a == null ? (a = n, o = n = void 0) : a == null && (typeof n == "string" ? (a = o, o = void 0) : (a = o, o = n, n = void 0)), a === !1) a = bt;
                else if (!a) return e;
                return l === 1 && (u = a, a = function(p) {
                    return s().off(p), u.apply(this, arguments)
                }, a.guid = u.guid || (u.guid = s.guid++)), e.each(function() {
                    s.event.add(this, t, a, o, n)
                })
            }
            s.event = {
                global: {},
                add: function(e, t, n, o, a) {
                    var l, u, v, p, b, S, D, w, A, F, K, R = I.get(e);
                    if (re(e))
                        for (n.handler && (l = n, n = l.handler, a = l.selector), a && s.find.matchesSelector(lt, a), n.guid || (n.guid = s.guid++), (p = R.events) || (p = R.events = Object.create(null)), (u = R.handle) || (u = R.handle = function(Oe) {
                                return typeof s < "u" && s.event.triggered !== Oe.type ? s.event.dispatch.apply(e, arguments) : void 0
                            }), t = (t || "").match(ge) || [""], b = t.length; b--;) v = Si.exec(t[b]) || [], A = K = v[1], F = (v[2] || "").split(".").sort(), A && (D = s.event.special[A] || {}, A = (a ? D.delegateType : D.bindType) || A, D = s.event.special[A] || {}, S = s.extend({
                            type: A,
                            origType: K,
                            data: o,
                            handler: n,
                            guid: n.guid,
                            selector: a,
                            needsContext: a && s.expr.match.needsContext.test(a),
                            namespace: F.join(".")
                        }, l), (w = p[A]) || (w = p[A] = [], w.delegateCount = 0, (!D.setup || D.setup.call(e, o, F, u) === !1) && e.addEventListener && e.addEventListener(A, u)), D.add && (D.add.call(e, S), S.handler.guid || (S.handler.guid = n.guid)), a ? w.splice(w.delegateCount++, 0, S) : w.push(S), s.event.global[A] = !0)
                },
                remove: function(e, t, n, o, a) {
                    var l, u, v, p, b, S, D, w, A, F, K, R = I.hasData(e) && I.get(e);
                    if (!(!R || !(p = R.events))) {
                        for (t = (t || "").match(ge) || [""], b = t.length; b--;) {
                            if (v = Si.exec(t[b]) || [], A = K = v[1], F = (v[2] || "").split(".").sort(), !A) {
                                for (A in p) s.event.remove(e, A + t[b], n, o, !0);
                                continue
                            }
                            for (D = s.event.special[A] || {}, A = (o ? D.delegateType : D.bindType) || A, w = p[A] || [], v = v[2] && new RegExp("(^|\\.)" + F.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = l = w.length; l--;) S = w[l], (a || K === S.origType) && (!n || n.guid === S.guid) && (!v || v.test(S.namespace)) && (!o || o === S.selector || o === "**" && S.selector) && (w.splice(l, 1), S.selector && w.delegateCount--, D.remove && D.remove.call(e, S));
                            u && !w.length && ((!D.teardown || D.teardown.call(e, F, R.handle) === !1) && s.removeEvent(e, A, R.handle), delete p[A])
                        }
                        s.isEmptyObject(p) && I.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, o, a, l, u, v = new Array(arguments.length),
                        p = s.event.fix(e),
                        b = (I.get(this, "events") || Object.create(null))[p.type] || [],
                        S = s.event.special[p.type] || {};
                    for (v[0] = p, t = 1; t < arguments.length; t++) v[t] = arguments[t];
                    if (p.delegateTarget = this, !(S.preDispatch && S.preDispatch.call(this, p) === !1)) {
                        for (u = s.event.handlers.call(this, p, b), t = 0;
                            (a = u[t++]) && !p.isPropagationStopped();)
                            for (p.currentTarget = a.elem, n = 0;
                                (l = a.handlers[n++]) && !p.isImmediatePropagationStopped();)(!p.rnamespace || l.namespace === !1 || p.rnamespace.test(l.namespace)) && (p.handleObj = l, p.data = l.data, o = ((s.event.special[l.origType] || {}).handle || l.handler).apply(a.elem, v), o !== void 0 && (p.result = o) === !1 && (p.preventDefault(), p.stopPropagation()));
                        return S.postDispatch && S.postDispatch.call(this, p), p.result
                    }
                },
                handlers: function(e, t) {
                    var n, o, a, l, u, v = [],
                        p = t.delegateCount,
                        b = e.target;
                    if (p && b.nodeType && !(e.type === "click" && e.button >= 1)) {
                        for (; b !== this; b = b.parentNode || this)
                            if (b.nodeType === 1 && !(e.type === "click" && b.disabled === !0)) {
                                for (l = [], u = {}, n = 0; n < p; n++) o = t[n], a = o.selector + " ", u[a] === void 0 && (u[a] = o.needsContext ? s(a, this).index(b) > -1 : s.find(a, this, null, [b]).length), u[a] && l.push(o);
                                l.length && v.push({
                                    elem: b,
                                    handlers: l
                                })
                            }
                    }
                    return b = this, p < t.length && v.push({
                        elem: b,
                        handlers: t.slice(p)
                    }), v
                },
                addProp: function(e, t) {
                    Object.defineProperty(s.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: C(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(n) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: n
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[s.expando] ? e : new s.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return St.test(t.type) && t.click && H(t, "input") && Pt(t, "click", mt), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return St.test(t.type) && t.click && H(t, "input") && Pt(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return St.test(t.type) && t.click && H(t, "input") && I.get(t, "click") || H(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            };

            function Pt(e, t, n) {
                if (!n) {
                    I.get(e, t) === void 0 && s.event.add(e, t, mt);
                    return
                }
                I.set(e, t, !1), s.event.add(e, t, {
                    namespace: !1,
                    handler: function(o) {
                        var a, l, u = I.get(this, t);
                        if (o.isTrigger & 1 && this[t]) {
                            if (u.length)(s.event.special[t] || {}).delegateType && o.stopPropagation();
                            else if (u = r.call(arguments), I.set(this, t, u), a = n(this, t), this[t](), l = I.get(this, t), u !== l || a ? I.set(this, t, !1) : l = {}, u !== l) return o.stopImmediatePropagation(), o.preventDefault(), l && l.value
                        } else u.length && (I.set(this, t, {
                            value: s.event.trigger(s.extend(u[0], s.Event.prototype), u.slice(1), this)
                        }), o.stopImmediatePropagation())
                    }
                })
            }
            s.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, s.Event = function(e, t) {
                if (!(this instanceof s.Event)) return new s.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? mt : bt, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && s.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[s.expando] = !0
            }, s.Event.prototype = {
                constructor: s.Event,
                isDefaultPrevented: bt,
                isPropagationStopped: bt,
                isImmediatePropagationStopped: bt,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = mt, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = mt, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = mt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, s.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, s.event.addProp), s.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                s.event.special[e] = {
                    setup: function() {
                        return Pt(this, e, gn), !1
                    },
                    trigger: function() {
                        return Pt(this, e), !0
                    },
                    _default: function(n) {
                        return I.get(n.target, e)
                    },
                    delegateType: t
                }
            }), s.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                s.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(n) {
                        var o, a = this,
                            l = n.relatedTarget,
                            u = n.handleObj;
                        return (!l || l !== a && !s.contains(a, l)) && (n.type = u.origType, o = u.handler.apply(this, arguments), n.type = t), o
                    }
                }
            }), s.fn.extend({
                on: function(e, t, n, o) {
                    return Xt(this, e, t, n, o)
                },
                one: function(e, t, n, o) {
                    return Xt(this, e, t, n, o, 1)
                },
                off: function(e, t, n) {
                    var o, a;
                    if (e && e.preventDefault && e.handleObj) return o = e.handleObj, s(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                    if (typeof e == "object") {
                        for (a in e) this.off(a, t, e[a]);
                        return this
                    }
                    return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = bt), this.each(function() {
                        s.event.remove(this, e, n, t)
                    })
                }
            });
            var yn = /<script|<style|<link/i,
                mn = /checked\s*(?:[^=]|=\s*.checked.)/i,
                bn = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

            function xi(e, t) {
                return H(e, "table") && H(t.nodeType !== 11 ? t : t.firstChild, "tr") && s(e).children("tbody")[0] || e
            }

            function wn(e) {
                return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
            }

            function Tn(e) {
                return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Ci(e, t) {
                var n, o, a, l, u, v, p;
                if (t.nodeType === 1) {
                    if (I.hasData(e) && (l = I.get(e), p = l.events, p)) {
                        I.remove(t, "handle events");
                        for (a in p)
                            for (n = 0, o = p[a].length; n < o; n++) s.event.add(t, a, p[a][n])
                    }
                    $e.hasData(e) && (u = $e.access(e), v = s.extend({}, u), $e.set(t, v))
                }
            }

            function kn(e, t) {
                var n = t.nodeName.toLowerCase();
                n === "input" && St.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue)
            }

            function wt(e, t, n, o) {
                t = c(t);
                var a, l, u, v, p, b, S = 0,
                    D = e.length,
                    w = D - 1,
                    A = t[0],
                    F = C(A);
                if (F || D > 1 && typeof A == "string" && !N.checkClone && mn.test(A)) return e.each(function(K) {
                    var R = e.eq(K);
                    F && (t[0] = A.call(this, K, R.html())), wt(R, t, n, o)
                });
                if (D && (a = ki(t, e[0].ownerDocument, !1, e, o), l = a.firstChild, a.childNodes.length === 1 && (a = l), l || o)) {
                    for (u = s.map(_e(a, "script"), wn), v = u.length; S < D; S++) p = a, S !== w && (p = s.clone(p, !0, !0), v && s.merge(u, _e(p, "script"))), n.call(e[S], p, S);
                    if (v)
                        for (b = u[u.length - 1].ownerDocument, s.map(u, Tn), S = 0; S < v; S++) p = u[S], Ti.test(p.type || "") && !I.access(p, "globalEval") && s.contains(b, p) && (p.src && (p.type || "").toLowerCase() !== "module" ? s._evalUrl && !p.noModule && s._evalUrl(p.src, {
                            nonce: p.nonce || p.getAttribute("nonce")
                        }, b) : le(p.textContent.replace(bn, ""), p, b))
                }
                return e
            }

            function Ai(e, t, n) {
                for (var o, a = t ? s.filter(t, e) : e, l = 0;
                    (o = a[l]) != null; l++) !n && o.nodeType === 1 && s.cleanData(_e(o)), o.parentNode && (n && vt(o) && Ut(_e(o, "script")), o.parentNode.removeChild(o));
                return e
            }
            s.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var o, a, l, u, v = e.cloneNode(!0),
                        p = vt(e);
                    if (!N.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !s.isXMLDoc(e))
                        for (u = _e(v), l = _e(e), o = 0, a = l.length; o < a; o++) kn(l[o], u[o]);
                    if (t)
                        if (n)
                            for (l = l || _e(e), u = u || _e(v), o = 0, a = l.length; o < a; o++) Ci(l[o], u[o]);
                        else Ci(e, v);
                    return u = _e(v, "script"), u.length > 0 && Ut(u, !p && _e(e, "script")), v
                },
                cleanData: function(e) {
                    for (var t, n, o, a = s.event.special, l = 0;
                        (n = e[l]) !== void 0; l++)
                        if (re(n)) {
                            if (t = n[I.expando]) {
                                if (t.events)
                                    for (o in t.events) a[o] ? s.event.remove(n, o) : s.removeEvent(n, o, t.handle);
                                n[I.expando] = void 0
                            }
                            n[$e.expando] && (n[$e.expando] = void 0)
                        }
                }
            }), s.fn.extend({
                detach: function(e) {
                    return Ai(this, e, !0)
                },
                remove: function(e) {
                    return Ai(this, e)
                },
                text: function(e) {
                    return we(this, function(t) {
                        return t === void 0 ? s.text(this) : this.empty().each(function() {
                            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return wt(this, arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = xi(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return wt(this, arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = xi(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return wt(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return wt(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0;
                        (e = this[t]) != null; t++) e.nodeType === 1 && (s.cleanData(_e(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = e ?? !1, t = t ?? e, this.map(function() {
                        return s.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return we(this, function(t) {
                        var n = this[0] || {},
                            o = 0,
                            a = this.length;
                        if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                        if (typeof t == "string" && !yn.test(t) && !Ge[(wi.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = s.htmlPrefilter(t);
                            try {
                                for (; o < a; o++) n = this[o] || {}, n.nodeType === 1 && (s.cleanData(_e(n, !1)), n.innerHTML = t);
                                n = 0
                            } catch {}
                        }
                        n && this.empty().append(t)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return wt(this, arguments, function(t) {
                        var n = this.parentNode;
                        s.inArray(this, e) < 0 && (s.cleanData(_e(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), s.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                s.fn[e] = function(n) {
                    for (var o, a = [], l = s(n), u = l.length - 1, v = 0; v <= u; v++) o = v === u ? this : this.clone(!0), s(l[v])[t](o), d.apply(a, o.get());
                    return this.pushStack(a)
                }
            });
            var Vt = new RegExp("^(" + yi + ")(?!px)[a-z%]+$", "i"),
                Yt = /^--/,
                Lt = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return (!t || !t.opener) && (t = B), t.getComputedStyle(e)
                },
                Ei = function(e, t, n) {
                    var o, a, l = {};
                    for (a in t) l[a] = e.style[a], e.style[a] = t[a];
                    o = n.call(e);
                    for (a in t) e.style[a] = l[a];
                    return o
                },
                Sn = new RegExp(nt.join("|"), "i"),
                Oi = "[\\x20\\t\\r\\n\\f]",
                xn = new RegExp("^" + Oi + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Oi + "+$", "g");
            (function() {
                function e() {
                    if (b) {
                        p.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", b.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", lt.appendChild(p).appendChild(b);
                        var S = B.getComputedStyle(b);
                        n = S.top !== "1%", v = t(S.marginLeft) === 12, b.style.right = "60%", l = t(S.right) === 36, o = t(S.width) === 36, b.style.position = "absolute", a = t(b.offsetWidth / 3) === 12, lt.removeChild(p), b = null
                    }
                }

                function t(S) {
                    return Math.round(parseFloat(S))
                }
                var n, o, a, l, u, v, p = L.createElement("div"),
                    b = L.createElement("div");
                b.style && (b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", N.clearCloneStyle = b.style.backgroundClip === "content-box", s.extend(N, {
                    boxSizingReliable: function() {
                        return e(), o
                    },
                    pixelBoxStyles: function() {
                        return e(), l
                    },
                    pixelPosition: function() {
                        return e(), n
                    },
                    reliableMarginLeft: function() {
                        return e(), v
                    },
                    scrollboxSize: function() {
                        return e(), a
                    },
                    reliableTrDimensions: function() {
                        var S, D, w, A;
                        return u == null && (S = L.createElement("table"), D = L.createElement("tr"), w = L.createElement("div"), S.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", D.style.cssText = "border:1px solid", D.style.height = "1px", w.style.height = "9px", w.style.display = "block", lt.appendChild(S).appendChild(D).appendChild(w), A = B.getComputedStyle(D), u = parseInt(A.height, 10) + parseInt(A.borderTopWidth, 10) + parseInt(A.borderBottomWidth, 10) === D.offsetHeight, lt.removeChild(S)), u
                    }
                }))
            })();

            function xt(e, t, n) {
                var o, a, l, u, v = Yt.test(t),
                    p = e.style;
                return n = n || Lt(e), n && (u = n.getPropertyValue(t) || n[t], v && u && (u = u.replace(xn, "$1") || void 0), u === "" && !vt(e) && (u = s.style(e, t)), !N.pixelBoxStyles() && Vt.test(u) && Sn.test(t) && (o = p.width, a = p.minWidth, l = p.maxWidth, p.minWidth = p.maxWidth = p.width = u, u = n.width, p.width = o, p.minWidth = a, p.maxWidth = l)), u !== void 0 ? u + "" : u
            }

            function ji(e, t) {
                return {
                    get: function() {
                        if (e()) {
                            delete this.get;
                            return
                        }
                        return (this.get = t).apply(this, arguments)
                    }
                }
            }
            var Ni = ["Webkit", "Moz", "ms"],
                Di = L.createElement("div").style,
                $i = {};

            function Cn(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ni.length; n--;)
                    if (e = Ni[n] + t, e in Di) return e
            }

            function Gt(e) {
                var t = s.cssProps[e] || $i[e];
                return t || (e in Di ? e : $i[e] = Cn(e) || e)
            }
            var An = /^(none|table(?!-c[ea]).+)/,
                En = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Pi = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Li(e, t, n) {
                var o = kt.exec(t);
                return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
            }

            function Qt(e, t, n, o, a, l) {
                var u = t === "width" ? 1 : 0,
                    v = 0,
                    p = 0;
                if (n === (o ? "border" : "content")) return 0;
                for (; u < 4; u += 2) n === "margin" && (p += s.css(e, n + nt[u], !0, a)), o ? (n === "content" && (p -= s.css(e, "padding" + nt[u], !0, a)), n !== "margin" && (p -= s.css(e, "border" + nt[u] + "Width", !0, a))) : (p += s.css(e, "padding" + nt[u], !0, a), n !== "padding" ? p += s.css(e, "border" + nt[u] + "Width", !0, a) : v += s.css(e, "border" + nt[u] + "Width", !0, a));
                return !o && l >= 0 && (p += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - l - p - v - .5)) || 0), p
            }

            function Hi(e, t, n) {
                var o = Lt(e),
                    a = !N.boxSizingReliable() || n,
                    l = a && s.css(e, "boxSizing", !1, o) === "border-box",
                    u = l,
                    v = xt(e, t, o),
                    p = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Vt.test(v)) {
                    if (!n) return v;
                    v = "auto"
                }
                return (!N.boxSizingReliable() && l || !N.reliableTrDimensions() && H(e, "tr") || v === "auto" || !parseFloat(v) && s.css(e, "display", !1, o) === "inline") && e.getClientRects().length && (l = s.css(e, "boxSizing", !1, o) === "border-box", u = p in e, u && (v = e[p])), v = parseFloat(v) || 0, v + Qt(e, t, n || (l ? "border" : "content"), u, o, v) + "px"
            }
            s.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = xt(e, "opacity");
                                return n === "" ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, o) {
                    if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                        var a, l, u, v = ne(t),
                            p = Yt.test(t),
                            b = e.style;
                        if (p || (t = Gt(v)), u = s.cssHooks[t] || s.cssHooks[v], n !== void 0) {
                            if (l = typeof n, l === "string" && (a = kt.exec(n)) && a[1] && (n = mi(e, t, a), l = "number"), n == null || n !== n) return;
                            l === "number" && !p && (n += a && a[3] || (s.cssNumber[v] ? "" : "px")), !N.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (b[t] = "inherit"), (!u || !("set" in u) || (n = u.set(e, n, o)) !== void 0) && (p ? b.setProperty(t, n) : b[t] = n)
                        } else return u && "get" in u && (a = u.get(e, !1, o)) !== void 0 ? a : b[t]
                    }
                },
                css: function(e, t, n, o) {
                    var a, l, u, v = ne(t),
                        p = Yt.test(t);
                    return p || (t = Gt(v)), u = s.cssHooks[t] || s.cssHooks[v], u && "get" in u && (a = u.get(e, !0, n)), a === void 0 && (a = xt(e, t, o)), a === "normal" && t in Pi && (a = Pi[t]), n === "" || n ? (l = parseFloat(a), n === !0 || isFinite(l) ? l || 0 : a) : a
                }
            }), s.each(["height", "width"], function(e, t) {
                s.cssHooks[t] = {
                    get: function(n, o, a) {
                        if (o) return An.test(s.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? Ei(n, En, function() {
                            return Hi(n, t, a)
                        }) : Hi(n, t, a)
                    },
                    set: function(n, o, a) {
                        var l, u = Lt(n),
                            v = !N.scrollboxSize() && u.position === "absolute",
                            p = v || a,
                            b = p && s.css(n, "boxSizing", !1, u) === "border-box",
                            S = a ? Qt(n, t, a, b, u) : 0;
                        return b && v && (S -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(u[t]) - Qt(n, t, "border", !1, u) - .5)), S && (l = kt.exec(o)) && (l[3] || "px") !== "px" && (n.style[t] = o, o = s.css(n, t)), Li(n, o, S)
                    }
                }
            }), s.cssHooks.marginLeft = ji(N.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(xt(e, "marginLeft")) || e.getBoundingClientRect().left - Ei(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), s.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                s.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var o = 0, a = {}, l = typeof n == "string" ? n.split(" ") : [n]; o < 4; o++) a[e + nt[o] + t] = l[o] || l[o - 2] || l[0];
                        return a
                    }
                }, e !== "margin" && (s.cssHooks[e + t].set = Li)
            }), s.fn.extend({
                css: function(e, t) {
                    return we(this, function(n, o, a) {
                        var l, u, v = {},
                            p = 0;
                        if (Array.isArray(o)) {
                            for (l = Lt(n), u = o.length; p < u; p++) v[o[p]] = s.css(n, o[p], !1, l);
                            return v
                        }
                        return a !== void 0 ? s.style(n, o, a) : s.css(n, o)
                    }, e, t, arguments.length > 1)
                }
            });

            function Me(e, t, n, o, a) {
                return new Me.prototype.init(e, t, n, o, a)
            }
            s.Tween = Me, Me.prototype = {
                constructor: Me,
                init: function(e, t, n, o, a, l) {
                    this.elem = e, this.prop = n, this.easing = a || s.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = l || (s.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = Me.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Me.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = Me.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = s.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Me.propHooks._default.set(this), this
                }
            }, Me.prototype.init.prototype = Me.prototype, Me.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = s.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t)
                    },
                    set: function(e) {
                        s.fx.step[e.prop] ? s.fx.step[e.prop](e) : e.elem.nodeType === 1 && (s.cssHooks[e.prop] || e.elem.style[Gt(e.prop)] != null) ? s.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, Me.propHooks.scrollTop = Me.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, s.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, s.fx = Me.prototype.init, s.fx.step = {};
            var Tt, Ht, On = /^(?:toggle|show|hide)$/,
                jn = /queueHooks$/;

            function Jt() {
                Ht && (L.hidden === !1 && B.requestAnimationFrame ? B.requestAnimationFrame(Jt) : B.setTimeout(Jt, s.fx.interval), s.fx.tick())
            }

            function qi() {
                return B.setTimeout(function() {
                    Tt = void 0
                }), Tt = Date.now()
            }

            function qt(e, t) {
                var n, o = 0,
                    a = {
                        height: e
                    };
                for (t = t ? 1 : 0; o < 4; o += 2 - t) n = nt[o], a["margin" + n] = a["padding" + n] = e;
                return t && (a.opacity = a.width = e), a
            }

            function _i(e, t, n) {
                for (var o, a = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), l = 0, u = a.length; l < u; l++)
                    if (o = a[l].call(n, t, e)) return o
            }

            function Nn(e, t, n) {
                var o, a, l, u, v, p, b, S, D = "width" in t || "height" in t,
                    w = this,
                    A = {},
                    F = e.style,
                    K = e.nodeType && $t(e),
                    R = I.get(e, "fxshow");
                n.queue || (u = s._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, v = u.empty.fire, u.empty.fire = function() {
                    u.unqueued || v()
                }), u.unqueued++, w.always(function() {
                    w.always(function() {
                        u.unqueued--, s.queue(e, "fx").length || u.empty.fire()
                    })
                }));
                for (o in t)
                    if (a = t[o], On.test(a)) {
                        if (delete t[o], l = l || a === "toggle", a === (K ? "hide" : "show"))
                            if (a === "show" && R && R[o] !== void 0) K = !0;
                            else continue;
                        A[o] = R && R[o] || s.style(e, o)
                    } if (p = !s.isEmptyObject(t), !(!p && s.isEmptyObject(A))) {
                    D && e.nodeType === 1 && (n.overflow = [F.overflow, F.overflowX, F.overflowY], b = R && R.display, b == null && (b = I.get(e, "display")), S = s.css(e, "display"), S === "none" && (b ? S = b : (yt([e], !0), b = e.style.display || b, S = s.css(e, "display"), yt([e]))), (S === "inline" || S === "inline-block" && b != null) && s.css(e, "float") === "none" && (p || (w.done(function() {
                        F.display = b
                    }), b == null && (S = F.display, b = S === "none" ? "" : S)), F.display = "inline-block")), n.overflow && (F.overflow = "hidden", w.always(function() {
                        F.overflow = n.overflow[0], F.overflowX = n.overflow[1], F.overflowY = n.overflow[2]
                    })), p = !1;
                    for (o in A) p || (R ? "hidden" in R && (K = R.hidden) : R = I.access(e, "fxshow", {
                        display: b
                    }), l && (R.hidden = !K), K && yt([e], !0), w.done(function() {
                        K || yt([e]), I.remove(e, "fxshow");
                        for (o in A) s.style(e, o, A[o])
                    })), p = _i(K ? R[o] : 0, o, w), o in R || (R[o] = p.start, K && (p.end = p.start, p.start = 0))
                }
            }

            function Dn(e, t) {
                var n, o, a, l, u;
                for (n in e)
                    if (o = ne(n), a = t[o], l = e[n], Array.isArray(l) && (a = l[1], l = e[n] = l[0]), n !== o && (e[o] = l, delete e[n]), u = s.cssHooks[o], u && "expand" in u) {
                        l = u.expand(l), delete e[o];
                        for (n in l) n in e || (e[n] = l[n], t[n] = a)
                    } else t[o] = a
            }

            function Ze(e, t, n) {
                var o, a, l = 0,
                    u = Ze.prefilters.length,
                    v = s.Deferred().always(function() {
                        delete p.elem
                    }),
                    p = function() {
                        if (a) return !1;
                        for (var D = Tt || qi(), w = Math.max(0, b.startTime + b.duration - D), A = w / b.duration || 0, F = 1 - A, K = 0, R = b.tweens.length; K < R; K++) b.tweens[K].run(F);
                        return v.notifyWith(e, [b, F, w]), F < 1 && R ? w : (R || v.notifyWith(e, [b, 1, 0]), v.resolveWith(e, [b]), !1)
                    },
                    b = v.promise({
                        elem: e,
                        props: s.extend({}, t),
                        opts: s.extend(!0, {
                            specialEasing: {},
                            easing: s.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Tt || qi(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(D, w) {
                            var A = s.Tween(e, b.opts, D, w, b.opts.specialEasing[D] || b.opts.easing);
                            return b.tweens.push(A), A
                        },
                        stop: function(D) {
                            var w = 0,
                                A = D ? b.tweens.length : 0;
                            if (a) return this;
                            for (a = !0; w < A; w++) b.tweens[w].run(1);
                            return D ? (v.notifyWith(e, [b, 1, 0]), v.resolveWith(e, [b, D])) : v.rejectWith(e, [b, D]), this
                        }
                    }),
                    S = b.props;
                for (Dn(S, b.opts.specialEasing); l < u; l++)
                    if (o = Ze.prefilters[l].call(b, e, S, b.opts), o) return C(o.stop) && (s._queueHooks(b.elem, b.opts.queue).stop = o.stop.bind(o)), o;
                return s.map(S, _i, b), C(b.opts.start) && b.opts.start.call(e, b), b.progress(b.opts.progress).done(b.opts.done, b.opts.complete).fail(b.opts.fail).always(b.opts.always), s.fx.timer(s.extend(p, {
                    elem: e,
                    anim: b,
                    queue: b.opts.queue
                })), b
            }
            s.Animation = s.extend(Ze, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return mi(n.elem, e, kt.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        C(e) ? (t = e, e = ["*"]) : e = e.match(ge);
                        for (var n, o = 0, a = e.length; o < a; o++) n = e[o], Ze.tweeners[n] = Ze.tweeners[n] || [], Ze.tweeners[n].unshift(t)
                    },
                    prefilters: [Nn],
                    prefilter: function(e, t) {
                        t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
                    }
                }), s.speed = function(e, t, n) {
                    var o = e && typeof e == "object" ? s.extend({}, e) : {
                        complete: n || !n && t || C(e) && e,
                        duration: e,
                        easing: n && t || t && !C(t) && t
                    };
                    return s.fx.off ? o.duration = 0 : typeof o.duration != "number" && (o.duration in s.fx.speeds ? o.duration = s.fx.speeds[o.duration] : o.duration = s.fx.speeds._default), (o.queue == null || o.queue === !0) && (o.queue = "fx"), o.old = o.complete, o.complete = function() {
                        C(o.old) && o.old.call(this), o.queue && s.dequeue(this, o.queue)
                    }, o
                }, s.fn.extend({
                    fadeTo: function(e, t, n, o) {
                        return this.filter($t).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, o)
                    },
                    animate: function(e, t, n, o) {
                        var a = s.isEmptyObject(e),
                            l = s.speed(t, n, o),
                            u = function() {
                                var v = Ze(this, s.extend({}, e), l);
                                (a || I.get(this, "finish")) && v.stop(!0)
                            };
                        return u.finish = u, a || l.queue === !1 ? this.each(u) : this.queue(l.queue, u)
                    },
                    stop: function(e, t, n) {
                        var o = function(a) {
                            var l = a.stop;
                            delete a.stop, l(n)
                        };
                        return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                            var a = !0,
                                l = e != null && e + "queueHooks",
                                u = s.timers,
                                v = I.get(this);
                            if (l) v[l] && v[l].stop && o(v[l]);
                            else
                                for (l in v) v[l] && v[l].stop && jn.test(l) && o(v[l]);
                            for (l = u.length; l--;) u[l].elem === this && (e == null || u[l].queue === e) && (u[l].anim.stop(n), a = !1, u.splice(l, 1));
                            (a || !n) && s.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = I.get(this),
                                o = n[e + "queue"],
                                a = n[e + "queueHooks"],
                                l = s.timers,
                                u = o ? o.length : 0;
                            for (n.finish = !0, s.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = l.length; t--;) l[t].elem === this && l[t].queue === e && (l[t].anim.stop(!0), l.splice(t, 1));
                            for (t = 0; t < u; t++) o[t] && o[t].finish && o[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), s.each(["toggle", "show", "hide"], function(e, t) {
                    var n = s.fn[t];
                    s.fn[t] = function(o, a, l) {
                        return o == null || typeof o == "boolean" ? n.apply(this, arguments) : this.animate(qt(t, !0), o, a, l)
                    }
                }), s.each({
                    slideDown: qt("show"),
                    slideUp: qt("hide"),
                    slideToggle: qt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    s.fn[e] = function(n, o, a) {
                        return this.animate(t, n, o, a)
                    }
                }), s.timers = [], s.fx.tick = function() {
                    var e, t = 0,
                        n = s.timers;
                    for (Tt = Date.now(); t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
                    n.length || s.fx.stop(), Tt = void 0
                }, s.fx.timer = function(e) {
                    s.timers.push(e), s.fx.start()
                }, s.fx.interval = 13, s.fx.start = function() {
                    Ht || (Ht = !0, Jt())
                }, s.fx.stop = function() {
                    Ht = null
                }, s.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, s.fn.delay = function(e, t) {
                    return e = s.fx && s.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, o) {
                        var a = B.setTimeout(n, e);
                        o.stop = function() {
                            B.clearTimeout(a)
                        }
                    })
                },
                function() {
                    var e = L.createElement("input"),
                        t = L.createElement("select"),
                        n = t.appendChild(L.createElement("option"));
                    e.type = "checkbox", N.checkOn = e.value !== "", N.optSelected = n.selected, e = L.createElement("input"), e.value = "t", e.type = "radio", N.radioValue = e.value === "t"
                }();
            var Mi, Ct = s.expr.attrHandle;
            s.fn.extend({
                attr: function(e, t) {
                    return we(this, s.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        s.removeAttr(this, e)
                    })
                }
            }), s.extend({
                attr: function(e, t, n) {
                    var o, a, l = e.nodeType;
                    if (!(l === 3 || l === 8 || l === 2)) {
                        if (typeof e.getAttribute > "u") return s.prop(e, t, n);
                        if ((l !== 1 || !s.isXMLDoc(e)) && (a = s.attrHooks[t.toLowerCase()] || (s.expr.match.bool.test(t) ? Mi : void 0)), n !== void 0) {
                            if (n === null) {
                                s.removeAttr(e, t);
                                return
                            }
                            return a && "set" in a && (o = a.set(e, n, t)) !== void 0 ? o : (e.setAttribute(t, n + ""), n)
                        }
                        return a && "get" in a && (o = a.get(e, t)) !== null ? o : (o = s.find.attr(e, t), o ?? void 0)
                    }
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!N.radioValue && t === "radio" && H(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, o = 0,
                        a = t && t.match(ge);
                    if (a && e.nodeType === 1)
                        for (; n = a[o++];) e.removeAttribute(n)
                }
            }), Mi = {
                set: function(e, t, n) {
                    return t === !1 ? s.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, s.each(s.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = Ct[t] || s.find.attr;
                Ct[t] = function(o, a, l) {
                    var u, v, p = a.toLowerCase();
                    return l || (v = Ct[p], Ct[p] = u, u = n(o, a, l) != null ? p : null, Ct[p] = v), u
                }
            });
            var $n = /^(?:input|select|textarea|button)$/i,
                Pn = /^(?:a|area)$/i;
            s.fn.extend({
                prop: function(e, t) {
                    return we(this, s.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[s.propFix[e] || e]
                    })
                }
            }), s.extend({
                prop: function(e, t, n) {
                    var o, a, l = e.nodeType;
                    if (!(l === 3 || l === 8 || l === 2)) return (l !== 1 || !s.isXMLDoc(e)) && (t = s.propFix[t] || t, a = s.propHooks[t]), n !== void 0 ? a && "set" in a && (o = a.set(e, n, t)) !== void 0 ? o : e[t] = n : a && "get" in a && (o = a.get(e, t)) !== null ? o : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = s.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : $n.test(e.nodeName) || Pn.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), N.optSelected || (s.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), s.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                s.propFix[this.toLowerCase()] = this
            });

            function ut(e) {
                var t = e.match(ge) || [];
                return t.join(" ")
            }

            function ft(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function Kt(e) {
                return Array.isArray(e) ? e : typeof e == "string" ? e.match(ge) || [] : []
            }
            s.fn.extend({
                addClass: function(e) {
                    var t, n, o, a, l, u;
                    return C(e) ? this.each(function(v) {
                        s(this).addClass(e.call(this, v, ft(this)))
                    }) : (t = Kt(e), t.length ? this.each(function() {
                        if (o = ft(this), n = this.nodeType === 1 && " " + ut(o) + " ", n) {
                            for (l = 0; l < t.length; l++) a = t[l], n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                            u = ut(n), o !== u && this.setAttribute("class", u)
                        }
                    }) : this)
                },
                removeClass: function(e) {
                    var t, n, o, a, l, u;
                    return C(e) ? this.each(function(v) {
                        s(this).removeClass(e.call(this, v, ft(this)))
                    }) : arguments.length ? (t = Kt(e), t.length ? this.each(function() {
                        if (o = ft(this), n = this.nodeType === 1 && " " + ut(o) + " ", n) {
                            for (l = 0; l < t.length; l++)
                                for (a = t[l]; n.indexOf(" " + a + " ") > -1;) n = n.replace(" " + a + " ", " ");
                            u = ut(n), o !== u && this.setAttribute("class", u)
                        }
                    }) : this) : this.attr("class", "")
                },
                toggleClass: function(e, t) {
                    var n, o, a, l, u = typeof e,
                        v = u === "string" || Array.isArray(e);
                    return C(e) ? this.each(function(p) {
                        s(this).toggleClass(e.call(this, p, ft(this), t), t)
                    }) : typeof t == "boolean" && v ? t ? this.addClass(e) : this.removeClass(e) : (n = Kt(e), this.each(function() {
                        if (v)
                            for (l = s(this), a = 0; a < n.length; a++) o = n[a], l.hasClass(o) ? l.removeClass(o) : l.addClass(o);
                        else(e === void 0 || u === "boolean") && (o = ft(this), o && I.set(this, "__className__", o), this.setAttribute && this.setAttribute("class", o || e === !1 ? "" : I.get(this, "__className__") || ""))
                    }))
                },
                hasClass: function(e) {
                    var t, n, o = 0;
                    for (t = " " + e + " "; n = this[o++];)
                        if (n.nodeType === 1 && (" " + ut(ft(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var Ln = /\r/g;
            s.fn.extend({
                val: function(e) {
                    var t, n, o, a = this[0];
                    return arguments.length ? (o = C(e), this.each(function(l) {
                        var u;
                        this.nodeType === 1 && (o ? u = e.call(this, l, s(this).val()) : u = e, u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = s.map(u, function(v) {
                            return v == null ? "" : v + ""
                        })), t = s.valHooks[this.type] || s.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, u, "value") === void 0) && (this.value = u))
                    })) : a ? (t = s.valHooks[a.type] || s.valHooks[a.nodeName.toLowerCase()], t && "get" in t && (n = t.get(a, "value")) !== void 0 ? n : (n = a.value, typeof n == "string" ? n.replace(Ln, "") : n ?? "")) : void 0
                }
            }), s.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = s.find.attr(e, "value");
                            return t ?? ut(s.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, o, a = e.options,
                                l = e.selectedIndex,
                                u = e.type === "select-one",
                                v = u ? null : [],
                                p = u ? l + 1 : a.length;
                            for (l < 0 ? o = p : o = u ? l : 0; o < p; o++)
                                if (n = a[o], (n.selected || o === l) && !n.disabled && (!n.parentNode.disabled || !H(n.parentNode, "optgroup"))) {
                                    if (t = s(n).val(), u) return t;
                                    v.push(t)
                                } return v
                        },
                        set: function(e, t) {
                            for (var n, o, a = e.options, l = s.makeArray(t), u = a.length; u--;) o = a[u], (o.selected = s.inArray(s.valHooks.option.get(o), l) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), l
                        }
                    }
                }
            }), s.each(["radio", "checkbox"], function() {
                s.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = s.inArray(s(e).val(), t) > -1
                    }
                }, N.checkOn || (s.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                })
            }), N.focusin = "onfocusin" in B;
            var zi = /^(?:focusinfocus|focusoutblur)$/,
                Ii = function(e) {
                    e.stopPropagation()
                };
            s.extend(s.event, {
                trigger: function(e, t, n, o) {
                    var a, l, u, v, p, b, S, D, w = [n || L],
                        A = q.call(e, "type") ? e.type : e,
                        F = q.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (l = D = u = n = n || L, !(n.nodeType === 3 || n.nodeType === 8) && !zi.test(A + s.event.triggered) && (A.indexOf(".") > -1 && (F = A.split("."), A = F.shift(), F.sort()), p = A.indexOf(":") < 0 && "on" + A, e = e[s.expando] ? e : new s.Event(A, typeof e == "object" && e), e.isTrigger = o ? 2 : 3, e.namespace = F.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + F.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : s.makeArray(t, [e]), S = s.event.special[A] || {}, !(!o && S.trigger && S.trigger.apply(n, t) === !1))) {
                        if (!o && !S.noBubble && !M(n)) {
                            for (v = S.delegateType || A, zi.test(v + A) || (l = l.parentNode); l; l = l.parentNode) w.push(l), u = l;
                            u === (n.ownerDocument || L) && w.push(u.defaultView || u.parentWindow || B)
                        }
                        for (a = 0;
                            (l = w[a++]) && !e.isPropagationStopped();) D = l, e.type = a > 1 ? v : S.bindType || A, b = (I.get(l, "events") || Object.create(null))[e.type] && I.get(l, "handle"), b && b.apply(l, t), b = p && l[p], b && b.apply && re(l) && (e.result = b.apply(l, t), e.result === !1 && e.preventDefault());
                        return e.type = A, !o && !e.isDefaultPrevented() && (!S._default || S._default.apply(w.pop(), t) === !1) && re(n) && p && C(n[A]) && !M(n) && (u = n[p], u && (n[p] = null), s.event.triggered = A, e.isPropagationStopped() && D.addEventListener(A, Ii), n[A](), e.isPropagationStopped() && D.removeEventListener(A, Ii), s.event.triggered = void 0, u && (n[p] = u)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var o = s.extend(new s.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    s.event.trigger(o, null, t)
                }
            }), s.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        s.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return s.event.trigger(e, t, n, !0)
                }
            }), N.focusin || s.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(o) {
                    s.event.simulate(t, o.target, s.event.fix(o))
                };
                s.event.special[t] = {
                    setup: function() {
                        var o = this.ownerDocument || this.document || this,
                            a = I.access(o, t);
                        a || o.addEventListener(e, n, !0), I.access(o, t, (a || 0) + 1)
                    },
                    teardown: function() {
                        var o = this.ownerDocument || this.document || this,
                            a = I.access(o, t) - 1;
                        a ? I.access(o, t, a) : (o.removeEventListener(e, n, !0), I.remove(o, t))
                    }
                }
            });
            var At = B.location,
                Wi = {
                    guid: Date.now()
                },
                Zt = /\?/;
            s.parseXML = function(e) {
                var t, n;
                if (!e || typeof e != "string") return null;
                try {
                    t = new B.DOMParser().parseFromString(e, "text/xml")
                } catch {}
                return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && s.error("Invalid XML: " + (n ? s.map(n.childNodes, function(o) {
                    return o.textContent
                }).join(`
`) : e)), t
            };
            var Hn = /\[\]$/,
                Ri = /\r?\n/g,
                qn = /^(?:submit|button|image|reset|file)$/i,
                _n = /^(?:input|select|textarea|keygen)/i;

            function ei(e, t, n, o) {
                var a;
                if (Array.isArray(t)) s.each(t, function(l, u) {
                    n || Hn.test(e) ? o(e, u) : ei(e + "[" + (typeof u == "object" && u != null ? l : "") + "]", u, n, o)
                });
                else if (!n && ve(t) === "object")
                    for (a in t) ei(e + "[" + a + "]", t[a], n, o);
                else o(e, t)
            }
            s.param = function(e, t) {
                var n, o = [],
                    a = function(l, u) {
                        var v = C(u) ? u() : u;
                        o[o.length] = encodeURIComponent(l) + "=" + encodeURIComponent(v ?? "")
                    };
                if (e == null) return "";
                if (Array.isArray(e) || e.jquery && !s.isPlainObject(e)) s.each(e, function() {
                    a(this.name, this.value)
                });
                else
                    for (n in e) ei(n, e[n], t, a);
                return o.join("&")
            }, s.fn.extend({
                serialize: function() {
                    return s.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = s.prop(this, "elements");
                        return e ? s.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !s(this).is(":disabled") && _n.test(this.nodeName) && !qn.test(e) && (this.checked || !St.test(e))
                    }).map(function(e, t) {
                        var n = s(this).val();
                        return n == null ? null : Array.isArray(n) ? s.map(n, function(o) {
                            return {
                                name: t.name,
                                value: o.replace(Ri, `\r
`)
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Ri, `\r
`)
                        }
                    }).get()
                }
            });
            var Mn = /%20/g,
                zn = /#.*$/,
                In = /([?&])_=[^&]*/,
                Wn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
                Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Fn = /^(?:GET|HEAD)$/,
                Bn = /^\/\//,
                Fi = {},
                ti = {},
                Bi = "*/".concat("*"),
                ii = L.createElement("a");
            ii.href = At.href;

            function Ui(e) {
                return function(t, n) {
                    typeof t != "string" && (n = t, t = "*");
                    var o, a = 0,
                        l = t.toLowerCase().match(ge) || [];
                    if (C(n))
                        for (; o = l[a++];) o[0] === "+" ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
                }
            }

            function Xi(e, t, n, o) {
                var a = {},
                    l = e === ti;

                function u(v) {
                    var p;
                    return a[v] = !0, s.each(e[v] || [], function(b, S) {
                        var D = S(t, n, o);
                        if (typeof D == "string" && !l && !a[D]) return t.dataTypes.unshift(D), u(D), !1;
                        if (l) return !(p = D)
                    }), p
                }
                return u(t.dataTypes[0]) || !a["*"] && u("*")
            }

            function ni(e, t) {
                var n, o, a = s.ajaxSettings.flatOptions || {};
                for (n in t) t[n] !== void 0 && ((a[n] ? e : o || (o = {}))[n] = t[n]);
                return o && s.extend(!0, e, o), e
            }

            function Un(e, t, n) {
                for (var o, a, l, u, v = e.contents, p = e.dataTypes; p[0] === "*";) p.shift(), o === void 0 && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                if (o) {
                    for (a in v)
                        if (v[a] && v[a].test(o)) {
                            p.unshift(a);
                            break
                        }
                }
                if (p[0] in n) l = p[0];
                else {
                    for (a in n) {
                        if (!p[0] || e.converters[a + " " + p[0]]) {
                            l = a;
                            break
                        }
                        u || (u = a)
                    }
                    l = l || u
                }
                if (l) return l !== p[0] && p.unshift(l), n[l]
            }

            function Xn(e, t, n, o) {
                var a, l, u, v, p, b = {},
                    S = e.dataTypes.slice();
                if (S[1])
                    for (u in e.converters) b[u.toLowerCase()] = e.converters[u];
                for (l = S.shift(); l;)
                    if (e.responseFields[l] && (n[e.responseFields[l]] = t), !p && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), p = l, l = S.shift(), l) {
                        if (l === "*") l = p;
                        else if (p !== "*" && p !== l) {
                            if (u = b[p + " " + l] || b["* " + l], !u) {
                                for (a in b)
                                    if (v = a.split(" "), v[1] === l && (u = b[p + " " + v[0]] || b["* " + v[0]], u)) {
                                        u === !0 ? u = b[a] : b[a] !== !0 && (l = v[0], S.unshift(v[1]));
                                        break
                                    }
                            }
                            if (u !== !0)
                                if (u && e.throws) t = u(t);
                                else try {
                                    t = u(t)
                                } catch (D) {
                                    return {
                                        state: "parsererror",
                                        error: u ? D : "No conversion from " + p + " to " + l
                                    }
                                }
                        }
                    } return {
                    state: "success",
                    data: t
                }
            }
            s.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: At.href,
                    type: "GET",
                    isLocal: Rn.test(At.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Bi,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": s.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? ni(ni(e, s.ajaxSettings), t) : ni(s.ajaxSettings, e)
                },
                ajaxPrefilter: Ui(Fi),
                ajaxTransport: Ui(ti),
                ajax: function(e, t) {
                    typeof e == "object" && (t = e, e = void 0), t = t || {};
                    var n, o, a, l, u, v, p, b, S, D, w = s.ajaxSetup({}, t),
                        A = w.context || w,
                        F = w.context && (A.nodeType || A.jquery) ? s(A) : s.event,
                        K = s.Deferred(),
                        R = s.Callbacks("once memory"),
                        Oe = w.statusCode || {},
                        Ae = {},
                        Fe = {},
                        de = "canceled",
                        J = {
                            readyState: 0,
                            getResponseHeader: function(se) {
                                var Te;
                                if (p) {
                                    if (!l)
                                        for (l = {}; Te = Wn.exec(a);) l[Te[1].toLowerCase() + " "] = (l[Te[1].toLowerCase() + " "] || []).concat(Te[2]);
                                    Te = l[se.toLowerCase() + " "]
                                }
                                return Te == null ? null : Te.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return p ? a : null
                            },
                            setRequestHeader: function(se, Te) {
                                return p == null && (se = Fe[se.toLowerCase()] = Fe[se.toLowerCase()] || se, Ae[se] = Te), this
                            },
                            overrideMimeType: function(se) {
                                return p == null && (w.mimeType = se), this
                            },
                            statusCode: function(se) {
                                var Te;
                                if (se)
                                    if (p) J.always(se[J.status]);
                                    else
                                        for (Te in se) Oe[Te] = [Oe[Te], se[Te]];
                                return this
                            },
                            abort: function(se) {
                                var Te = se || de;
                                return n && n.abort(Te), ze(0, Te), this
                            }
                        };
                    if (K.promise(J), w.url = ((e || w.url || At.href) + "").replace(Bn, At.protocol + "//"), w.type = t.method || t.type || w.method || w.type, w.dataTypes = (w.dataType || "*").toLowerCase().match(ge) || [""], w.crossDomain == null) {
                        v = L.createElement("a");
                        try {
                            v.href = w.url, v.href = v.href, w.crossDomain = ii.protocol + "//" + ii.host != v.protocol + "//" + v.host
                        } catch {
                            w.crossDomain = !0
                        }
                    }
                    if (w.data && w.processData && typeof w.data != "string" && (w.data = s.param(w.data, w.traditional)), Xi(Fi, w, t, J), p) return J;
                    b = s.event && w.global, b && s.active++ === 0 && s.event.trigger("ajaxStart"), w.type = w.type.toUpperCase(), w.hasContent = !Fn.test(w.type), o = w.url.replace(zn, ""), w.hasContent ? w.data && w.processData && (w.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (w.data = w.data.replace(Mn, "+")) : (D = w.url.slice(o.length), w.data && (w.processData || typeof w.data == "string") && (o += (Zt.test(o) ? "&" : "?") + w.data, delete w.data), w.cache === !1 && (o = o.replace(In, "$1"), D = (Zt.test(o) ? "&" : "?") + "_=" + Wi.guid++ + D), w.url = o + D), w.ifModified && (s.lastModified[o] && J.setRequestHeader("If-Modified-Since", s.lastModified[o]), s.etag[o] && J.setRequestHeader("If-None-Match", s.etag[o])), (w.data && w.hasContent && w.contentType !== !1 || t.contentType) && J.setRequestHeader("Content-Type", w.contentType), J.setRequestHeader("Accept", w.dataTypes[0] && w.accepts[w.dataTypes[0]] ? w.accepts[w.dataTypes[0]] + (w.dataTypes[0] !== "*" ? ", " + Bi + "; q=0.01" : "") : w.accepts["*"]);
                    for (S in w.headers) J.setRequestHeader(S, w.headers[S]);
                    if (w.beforeSend && (w.beforeSend.call(A, J, w) === !1 || p)) return J.abort();
                    if (de = "abort", R.add(w.complete), J.done(w.success), J.fail(w.error), n = Xi(ti, w, t, J), !n) ze(-1, "No Transport");
                    else {
                        if (J.readyState = 1, b && F.trigger("ajaxSend", [J, w]), p) return J;
                        w.async && w.timeout > 0 && (u = B.setTimeout(function() {
                            J.abort("timeout")
                        }, w.timeout));
                        try {
                            p = !1, n.send(Ae, ze)
                        } catch (se) {
                            if (p) throw se;
                            ze(-1, se)
                        }
                    }

                    function ze(se, Te, Ot, _t) {
                        var Be, ct, dt, Ie, st, Qe = Te;
                        p || (p = !0, u && B.clearTimeout(u), n = void 0, a = _t || "", J.readyState = se > 0 ? 4 : 0, Be = se >= 200 && se < 300 || se === 304, Ot && (Ie = Un(w, J, Ot)), !Be && s.inArray("script", w.dataTypes) > -1 && s.inArray("json", w.dataTypes) < 0 && (w.converters["text script"] = function() {}), Ie = Xn(w, Ie, J, Be), Be ? (w.ifModified && (st = J.getResponseHeader("Last-Modified"), st && (s.lastModified[o] = st), st = J.getResponseHeader("etag"), st && (s.etag[o] = st)), se === 204 || w.type === "HEAD" ? Qe = "nocontent" : se === 304 ? Qe = "notmodified" : (Qe = Ie.state, ct = Ie.data, dt = Ie.error, Be = !dt)) : (dt = Qe, (se || !Qe) && (Qe = "error", se < 0 && (se = 0))), J.status = se, J.statusText = (Te || Qe) + "", Be ? K.resolveWith(A, [ct, Qe, J]) : K.rejectWith(A, [J, Qe, dt]), J.statusCode(Oe), Oe = void 0, b && F.trigger(Be ? "ajaxSuccess" : "ajaxError", [J, w, Be ? ct : dt]), R.fireWith(A, [J, Qe]), b && (F.trigger("ajaxComplete", [J, w]), --s.active || s.event.trigger("ajaxStop")))
                    }
                    return J
                },
                getJSON: function(e, t, n) {
                    return s.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return s.get(e, void 0, t, "script")
                }
            }), s.each(["get", "post"], function(e, t) {
                s[t] = function(n, o, a, l) {
                    return C(o) && (l = l || a, a = o, o = void 0), s.ajax(s.extend({
                        url: n,
                        type: t,
                        dataType: l,
                        data: o,
                        success: a
                    }, s.isPlainObject(n) && n))
                }
            }), s.ajaxPrefilter(function(e) {
                var t;
                for (t in e.headers) t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "")
            }), s._evalUrl = function(e, t, n) {
                return s.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(o) {
                        s.globalEval(o, t, n)
                    }
                })
            }, s.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (C(e) && (e = e.call(this[0])), t = s(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                        return n
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return C(e) ? this.each(function(t) {
                        s(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = s(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = C(e);
                    return this.each(function(n) {
                        s(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        s(this).replaceWith(this.childNodes)
                    }), this
                }
            }), s.expr.pseudos.hidden = function(e) {
                return !s.expr.pseudos.visible(e)
            }, s.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, s.ajaxSettings.xhr = function() {
                try {
                    return new B.XMLHttpRequest
                } catch {}
            };
            var Vn = {
                    0: 200,
                    1223: 204
                },
                Et = s.ajaxSettings.xhr();
            N.cors = !!Et && "withCredentials" in Et, N.ajax = Et = !!Et, s.ajaxTransport(function(e) {
                var t, n;
                if (N.cors || Et && !e.crossDomain) return {
                    send: function(o, a) {
                        var l, u = e.xhr();
                        if (u.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (l in e.xhrFields) u[l] = e.xhrFields[l];
                        e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType), !e.crossDomain && !o["X-Requested-With"] && (o["X-Requested-With"] = "XMLHttpRequest");
                        for (l in o) u.setRequestHeader(l, o[l]);
                        t = function(v) {
                            return function() {
                                t && (t = n = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, v === "abort" ? u.abort() : v === "error" ? typeof u.status != "number" ? a(0, "error") : a(u.status, u.statusText) : a(Vn[u.status] || u.status, u.statusText, (u.responseType || "text") !== "text" || typeof u.responseText != "string" ? {
                                    binary: u.response
                                } : {
                                    text: u.responseText
                                }, u.getAllResponseHeaders()))
                            }
                        }, u.onload = t(), n = u.onerror = u.ontimeout = t("error"), u.onabort !== void 0 ? u.onabort = n : u.onreadystatechange = function() {
                            u.readyState === 4 && B.setTimeout(function() {
                                t && n()
                            })
                        }, t = t("abort");
                        try {
                            u.send(e.hasContent && e.data || null)
                        } catch (v) {
                            if (t) throw v
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }), s.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), s.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return s.globalEval(e), e
                    }
                }
            }), s.ajaxPrefilter("script", function(e) {
                e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), s.ajaxTransport("script", function(e) {
                if (e.crossDomain || e.scriptAttrs) {
                    var t, n;
                    return {
                        send: function(o, a) {
                            t = s("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(l) {
                                t.remove(), n = null, l && a(l.type === "error" ? 404 : 200, l.type)
                            }), L.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Vi = [],
                ri = /(=)\?(?=&|$)|\?\?/;
            s.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Vi.pop() || s.expando + "_" + Wi.guid++;
                    return this[e] = !0, e
                }
            }), s.ajaxPrefilter("json jsonp", function(e, t, n) {
                var o, a, l, u = e.jsonp !== !1 && (ri.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ri.test(e.data) && "data");
                if (u || e.dataTypes[0] === "jsonp") return o = e.jsonpCallback = C(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(ri, "$1" + o) : e.jsonp !== !1 && (e.url += (Zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                    return l || s.error(o + " was not called"), l[0]
                }, e.dataTypes[0] = "json", a = B[o], B[o] = function() {
                    l = arguments
                }, n.always(function() {
                    a === void 0 ? s(B).removeProp(o) : B[o] = a, e[o] && (e.jsonpCallback = t.jsonpCallback, Vi.push(o)), l && C(a) && a(l[0]), l = a = void 0
                }), "script"
            }), N.createHTMLDocument = function() {
                var e = L.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2
            }(), s.parseHTML = function(e, t, n) {
                if (typeof e != "string") return [];
                typeof t == "boolean" && (n = t, t = !1);
                var o, a, l;
                return t || (N.createHTMLDocument ? (t = L.implementation.createHTMLDocument(""), o = t.createElement("base"), o.href = L.location.href, t.head.appendChild(o)) : t = L), a = Z.exec(e), l = !n && [], a ? [t.createElement(a[1])] : (a = ki([e], t, l), l && l.length && s(l).remove(), s.merge([], a.childNodes))
            }, s.fn.load = function(e, t, n) {
                var o, a, l, u = this,
                    v = e.indexOf(" ");
                return v > -1 && (o = ut(e.slice(v)), e = e.slice(0, v)), C(t) ? (n = t, t = void 0) : t && typeof t == "object" && (a = "POST"), u.length > 0 && s.ajax({
                    url: e,
                    type: a || "GET",
                    dataType: "html",
                    data: t
                }).done(function(p) {
                    l = arguments, u.html(o ? s("<div>").append(s.parseHTML(p)).find(o) : p)
                }).always(n && function(p, b) {
                    u.each(function() {
                        n.apply(this, l || [p.responseText, b, p])
                    })
                }), this
            }, s.expr.pseudos.animated = function(e) {
                return s.grep(s.timers, function(t) {
                    return e === t.elem
                }).length
            }, s.offset = {
                setOffset: function(e, t, n) {
                    var o, a, l, u, v, p, b, S = s.css(e, "position"),
                        D = s(e),
                        w = {};
                    S === "static" && (e.style.position = "relative"), v = D.offset(), l = s.css(e, "top"), p = s.css(e, "left"), b = (S === "absolute" || S === "fixed") && (l + p).indexOf("auto") > -1, b ? (o = D.position(), u = o.top, a = o.left) : (u = parseFloat(l) || 0, a = parseFloat(p) || 0), C(t) && (t = t.call(e, n, s.extend({}, v))), t.top != null && (w.top = t.top - v.top + u), t.left != null && (w.left = t.left - v.left + a), "using" in t ? t.using.call(e, w) : D.css(w)
                }
            }, s.fn.extend({
                offset: function(e) {
                    if (arguments.length) return e === void 0 ? this : this.each(function(a) {
                        s.offset.setOffset(this, e, a)
                    });
                    var t, n, o = this[0];
                    if (o) return o.getClientRects().length ? (t = o.getBoundingClientRect(), n = o.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, o = this[0],
                            a = {
                                top: 0,
                                left: 0
                            };
                        if (s.css(o, "position") === "fixed") t = o.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && s.css(e, "position") === "static";) e = e.parentNode;
                            e && e !== o && e.nodeType === 1 && (a = s(e).offset(), a.top += s.css(e, "borderTopWidth", !0), a.left += s.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - a.top - s.css(o, "marginTop", !0),
                            left: t.left - a.left - s.css(o, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && s.css(e, "position") === "static";) e = e.offsetParent;
                        return e || lt
                    })
                }
            }), s.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = t === "pageYOffset";
                s.fn[e] = function(o) {
                    return we(this, function(a, l, u) {
                        var v;
                        if (M(a) ? v = a : a.nodeType === 9 && (v = a.defaultView), u === void 0) return v ? v[t] : a[l];
                        v ? v.scrollTo(n ? v.pageXOffset : u, n ? u : v.pageYOffset) : a[l] = u
                    }, e, o, arguments.length)
                }
            }), s.each(["top", "left"], function(e, t) {
                s.cssHooks[t] = ji(N.pixelPosition, function(n, o) {
                    if (o) return o = xt(n, t), Vt.test(o) ? s(n).position()[t] + "px" : o
                })
            }), s.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                s.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, o) {
                    s.fn[o] = function(a, l) {
                        var u = arguments.length && (n || typeof a != "boolean"),
                            v = n || (a === !0 || l === !0 ? "margin" : "border");
                        return we(this, function(p, b, S) {
                            var D;
                            return M(p) ? o.indexOf("outer") === 0 ? p["inner" + e] : p.document.documentElement["client" + e] : p.nodeType === 9 ? (D = p.documentElement, Math.max(p.body["scroll" + e], D["scroll" + e], p.body["offset" + e], D["offset" + e], D["client" + e])) : S === void 0 ? s.css(p, b, v) : s.style(p, b, S, v)
                        }, t, u ? a : void 0, u)
                    }
                })
            }), s.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                s.fn[t] = function(n) {
                    return this.on(t, n)
                }
            }), s.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, o) {
                    return this.on(t, e, n, o)
                },
                undelegate: function(e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                s.fn[t] = function(n, o) {
                    return arguments.length > 0 ? this.on(t, null, n, o) : this.trigger(t)
                }
            });
            var Yn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            s.proxy = function(e, t) {
                var n, o, a;
                if (typeof t == "string" && (n = e[t], t = e, e = n), !!C(e)) return o = r.call(arguments, 2), a = function() {
                    return e.apply(t || this, o.concat(r.call(arguments)))
                }, a.guid = e.guid = e.guid || s.guid++, a
            }, s.holdReady = function(e) {
                e ? s.readyWait++ : s.ready(!0)
            }, s.isArray = Array.isArray, s.parseJSON = JSON.parse, s.nodeName = H, s.isFunction = C, s.isWindow = M, s.camelCase = ne, s.type = ve, s.now = Date.now, s.isNumeric = function(e) {
                var t = s.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
            }, s.trim = function(e) {
                return e == null ? "" : (e + "").replace(Yn, "$1")
            };
            var Gn = B.jQuery,
                Qn = B.$;
            return s.noConflict = function(e) {
                return B.$ === s && (B.$ = Qn), e && B.jQuery === s && (B.jQuery = Gn), s
            }, typeof k > "u" && (B.jQuery = B.$ = s), s
        })
    }(cr)), Bt
}
var dr = ln();
const ae = an(dr);
var on = {},
    pr = {
        get exports() {
            return on
        },
        set exports(ie) {
            on = ie
        }
    };
(function(ie, B) {
    (function(k) {
        ie.exports = k(ln())
    })(function(k) {
        var T = window.Slick || {};
        T = function() {
            var i = 0;

            function r(c, d) {
                var g = this,
                    x;
                g.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: k(c),
                    appendDots: k(c),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(P, q) {
                        return k('<button type="button" />').text(q + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, g.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, k.extend(g, g.initials), g.activeBreakpoint = null, g.animType = null, g.animProp = null, g.breakpoints = [], g.breakpointSettings = [], g.cssTransitions = !1, g.focussed = !1, g.interrupted = !1, g.hidden = "hidden", g.paused = !0, g.positionProp = null, g.respondTo = null, g.rowCount = 1, g.shouldClick = !0, g.$slider = k(c), g.$slidesCache = null, g.transformType = null, g.transitionType = null, g.visibilityChange = "visibilitychange", g.windowWidth = 0, g.windowTimer = null, x = k(c).data("slick") || {}, g.options = k.extend({}, g.defaults, d, x), g.currentSlide = g.options.initialSlide, g.originalSettings = g.options, typeof document.mozHidden < "u" ? (g.hidden = "mozHidden", g.visibilityChange = "mozvisibilitychange") : typeof document.webkitHidden < "u" && (g.hidden = "webkitHidden", g.visibilityChange = "webkitvisibilitychange"), g.autoPlay = k.proxy(g.autoPlay, g), g.autoPlayClear = k.proxy(g.autoPlayClear, g), g.autoPlayIterator = k.proxy(g.autoPlayIterator, g), g.changeSlide = k.proxy(g.changeSlide, g), g.clickHandler = k.proxy(g.clickHandler, g), g.selectHandler = k.proxy(g.selectHandler, g), g.setPosition = k.proxy(g.setPosition, g), g.swipeHandler = k.proxy(g.swipeHandler, g), g.dragHandler = k.proxy(g.dragHandler, g), g.keyHandler = k.proxy(g.keyHandler, g), g.instanceUid = i++, g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, g.registerBreakpoints(), g.init(!0)
            }
            return r
        }(), T.prototype.activateADA = function() {
            var i = this;
            i.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, T.prototype.addSlide = T.prototype.slickAdd = function(i, r, c) {
            var d = this;
            if (typeof r == "boolean") c = r, r = null;
            else if (r < 0 || r >= d.slideCount) return !1;
            d.unload(), typeof r == "number" ? r === 0 && d.$slides.length === 0 ? k(i).appendTo(d.$slideTrack) : c ? k(i).insertBefore(d.$slides.eq(r)) : k(i).insertAfter(d.$slides.eq(r)) : c === !0 ? k(i).prependTo(d.$slideTrack) : k(i).appendTo(d.$slideTrack), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slides.each(function(g, x) {
                k(x).attr("data-slick-index", g)
            }), d.$slidesCache = d.$slides, d.reinit()
        }, T.prototype.animateHeight = function() {
            var i = this;
            if (i.options.slidesToShow === 1 && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
                var r = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({
                    height: r
                }, i.options.speed)
            }
        }, T.prototype.animateSlide = function(i, r) {
            var c = {},
                d = this;
            d.animateHeight(), d.options.rtl === !0 && d.options.vertical === !1 && (i = -i), d.transformsEnabled === !1 ? d.options.vertical === !1 ? d.$slideTrack.animate({
                left: i
            }, d.options.speed, d.options.easing, r) : d.$slideTrack.animate({
                top: i
            }, d.options.speed, d.options.easing, r) : d.cssTransitions === !1 ? (d.options.rtl === !0 && (d.currentLeft = -d.currentLeft), k({
                animStart: d.currentLeft
            }).animate({
                animStart: i
            }, {
                duration: d.options.speed,
                easing: d.options.easing,
                step: function(g) {
                    g = Math.ceil(g), d.options.vertical === !1 ? (c[d.animType] = "translate(" + g + "px, 0px)", d.$slideTrack.css(c)) : (c[d.animType] = "translate(0px," + g + "px)", d.$slideTrack.css(c))
                },
                complete: function() {
                    r && r.call()
                }
            })) : (d.applyTransition(), i = Math.ceil(i), d.options.vertical === !1 ? c[d.animType] = "translate3d(" + i + "px, 0px, 0px)" : c[d.animType] = "translate3d(0px," + i + "px, 0px)", d.$slideTrack.css(c), r && setTimeout(function() {
                d.disableTransition(), r.call()
            }, d.options.speed))
        }, T.prototype.getNavTarget = function() {
            var i = this,
                r = i.options.asNavFor;
            return r && r !== null && (r = k(r).not(i.$slider)), r
        }, T.prototype.asNavFor = function(i) {
            var r = this,
                c = r.getNavTarget();
            c !== null && typeof c == "object" && c.each(function() {
                var d = k(this).slick("getSlick");
                d.unslicked || d.slideHandler(i, !0)
            })
        }, T.prototype.applyTransition = function(i) {
            var r = this,
                c = {};
            r.options.fade === !1 ? c[r.transitionType] = r.transformType + " " + r.options.speed + "ms " + r.options.cssEase : c[r.transitionType] = "opacity " + r.options.speed + "ms " + r.options.cssEase, r.options.fade === !1 ? r.$slideTrack.css(c) : r.$slides.eq(i).css(c)
        }, T.prototype.autoPlay = function() {
            var i = this;
            i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
        }, T.prototype.autoPlayClear = function() {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer)
        }, T.prototype.autoPlayIterator = function() {
            var i = this,
                r = i.currentSlide + i.options.slidesToScroll;
            !i.paused && !i.interrupted && !i.focussed && (i.options.infinite === !1 && (i.direction === 1 && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : i.direction === 0 && (r = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(r))
        }, T.prototype.buildArrows = function() {
            var i = this;
            i.options.arrows === !0 && (i.$prevArrow = k(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = k(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), i.options.infinite !== !0 && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, T.prototype.buildDots = function() {
            var i = this,
                r, c;
            if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), c = k("<ul />").addClass(i.options.dotsClass), r = 0; r <= i.getDotCount(); r += 1) c.append(k("<li />").append(i.options.customPaging.call(this, i, r)));
                i.$dots = c.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, T.prototype.buildOut = function() {
            var i = this;
            i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(r, c) {
                k(c).attr("data-slick-index", r).data("originalStyling", k(c).attr("style") || "")
            }), i.$slider.addClass("slick-slider"), i.$slideTrack = i.slideCount === 0 ? k('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), (i.options.centerMode === !0 || i.options.swipeToSlide === !0) && (i.options.slidesToScroll = 1), k("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses(typeof i.currentSlide == "number" ? i.currentSlide : 0), i.options.draggable === !0 && i.$list.addClass("draggable")
        }, T.prototype.buildRows = function() {
            var i = this,
                r, c, d, g, x, P, q;
            if (g = document.createDocumentFragment(), P = i.$slider.children(), i.options.rows > 0) {
                for (q = i.options.slidesPerRow * i.options.rows, x = Math.ceil(P.length / q), r = 0; r < x; r++) {
                    var O = document.createElement("div");
                    for (c = 0; c < i.options.rows; c++) {
                        var V = document.createElement("div");
                        for (d = 0; d < i.options.slidesPerRow; d++) {
                            var N = r * q + (c * i.options.slidesPerRow + d);
                            P.get(N) && V.appendChild(P.get(N))
                        }
                        O.appendChild(V)
                    }
                    g.appendChild(O)
                }
                i.$slider.empty().append(g), i.$slider.children().children().children().css({
                    width: 100 / i.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, T.prototype.checkResponsive = function(i, r) {
            var c = this,
                d, g, x, P = !1,
                q = c.$slider.width(),
                O = window.innerWidth || k(window).width();
            if (c.respondTo === "window" ? x = O : c.respondTo === "slider" ? x = q : c.respondTo === "min" && (x = Math.min(O, q)), c.options.responsive && c.options.responsive.length && c.options.responsive !== null) {
                g = null;
                for (d in c.breakpoints) c.breakpoints.hasOwnProperty(d) && (c.originalSettings.mobileFirst === !1 ? x < c.breakpoints[d] && (g = c.breakpoints[d]) : x > c.breakpoints[d] && (g = c.breakpoints[d]));
                g !== null ? c.activeBreakpoint !== null ? (g !== c.activeBreakpoint || r) && (c.activeBreakpoint = g, c.breakpointSettings[g] === "unslick" ? c.unslick(g) : (c.options = k.extend({}, c.originalSettings, c.breakpointSettings[g]), i === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(i)), P = g) : (c.activeBreakpoint = g, c.breakpointSettings[g] === "unslick" ? c.unslick(g) : (c.options = k.extend({}, c.originalSettings, c.breakpointSettings[g]), i === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(i)), P = g) : c.activeBreakpoint !== null && (c.activeBreakpoint = null, c.options = c.originalSettings, i === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(i), P = g), !i && P !== !1 && c.$slider.trigger("breakpoint", [c, P])
            }
        }, T.prototype.changeSlide = function(i, r) {
            var c = this,
                d = k(i.currentTarget),
                g, x, P;
            switch (d.is("a") && i.preventDefault(), d.is("li") || (d = d.closest("li")), P = c.slideCount % c.options.slidesToScroll !== 0, g = P ? 0 : (c.slideCount - c.currentSlide) % c.options.slidesToScroll, i.data.message) {
                case "previous":
                    x = g === 0 ? c.options.slidesToScroll : c.options.slidesToShow - g, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide - x, !1, r);
                    break;
                case "next":
                    x = g === 0 ? c.options.slidesToScroll : g, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide + x, !1, r);
                    break;
                case "index":
                    var q = i.data.index === 0 ? 0 : i.data.index || d.index() * c.options.slidesToScroll;
                    c.slideHandler(c.checkNavigable(q), !1, r), d.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, T.prototype.checkNavigable = function(i) {
            var r = this,
                c, d;
            if (c = r.getNavigableIndexes(), d = 0, i > c[c.length - 1]) i = c[c.length - 1];
            else
                for (var g in c) {
                    if (i < c[g]) {
                        i = d;
                        break
                    }
                    d = c[g]
                }
            return i
        }, T.prototype.cleanUpEvents = function() {
            var i = this;
            i.options.dots && i.$dots !== null && (k("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", k.proxy(i.interrupt, i, !0)).off("mouseleave.slick", k.proxy(i.interrupt, i, !1)), i.options.accessibility === !0 && i.$dots.off("keydown.slick", i.keyHandler)), i.$slider.off("focus.slick blur.slick"), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), k(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), i.options.accessibility === !0 && i.$list.off("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && k(i.$slideTrack).children().off("click.slick", i.selectHandler), k(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), k(window).off("resize.slick.slick-" + i.instanceUid, i.resize), k("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), k(window).off("load.slick.slick-" + i.instanceUid, i.setPosition)
        }, T.prototype.cleanUpSlideEvents = function() {
            var i = this;
            i.$list.off("mouseenter.slick", k.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", k.proxy(i.interrupt, i, !1))
        }, T.prototype.cleanUpRows = function() {
            var i = this,
                r;
            i.options.rows > 0 && (r = i.$slides.children().children(), r.removeAttr("style"), i.$slider.empty().append(r))
        }, T.prototype.clickHandler = function(i) {
            var r = this;
            r.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
        }, T.prototype.destroy = function(i) {
            var r = this;
            r.autoPlayClear(), r.touchObject = {}, r.cleanUpEvents(), k(".slick-cloned", r.$slider).detach(), r.$dots && r.$dots.remove(), r.$prevArrow && r.$prevArrow.length && (r.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), r.htmlExpr.test(r.options.prevArrow) && r.$prevArrow.remove()), r.$nextArrow && r.$nextArrow.length && (r.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), r.htmlExpr.test(r.options.nextArrow) && r.$nextArrow.remove()), r.$slides && (r.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                k(this).attr("style", k(this).data("originalStyling"))
            }), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.detach(), r.$list.detach(), r.$slider.append(r.$slides)), r.cleanUpRows(), r.$slider.removeClass("slick-slider"), r.$slider.removeClass("slick-initialized"), r.$slider.removeClass("slick-dotted"), r.unslicked = !0, i || r.$slider.trigger("destroy", [r])
        }, T.prototype.disableTransition = function(i) {
            var r = this,
                c = {};
            c[r.transitionType] = "", r.options.fade === !1 ? r.$slideTrack.css(c) : r.$slides.eq(i).css(c)
        }, T.prototype.fadeSlide = function(i, r) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(i).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(i).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, r)) : (c.applyTransition(i), c.$slides.eq(i).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), r && setTimeout(function() {
                c.disableTransition(i), r.call()
            }, c.options.speed))
        }, T.prototype.fadeSlideOut = function(i) {
            var r = this;
            r.cssTransitions === !1 ? r.$slides.eq(i).animate({
                opacity: 0,
                zIndex: r.options.zIndex - 2
            }, r.options.speed, r.options.easing) : (r.applyTransition(i), r.$slides.eq(i).css({
                opacity: 0,
                zIndex: r.options.zIndex - 2
            }))
        }, T.prototype.filterSlides = T.prototype.slickFilter = function(i) {
            var r = this;
            i !== null && (r.$slidesCache = r.$slides, r.unload(), r.$slideTrack.children(this.options.slide).detach(), r.$slidesCache.filter(i).appendTo(r.$slideTrack), r.reinit())
        }, T.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(r) {
                r.stopImmediatePropagation();
                var c = k(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = c.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, T.prototype.getCurrent = T.prototype.slickCurrentSlide = function() {
            var i = this;
            return i.currentSlide
        }, T.prototype.getDotCount = function() {
            var i = this,
                r = 0,
                c = 0,
                d = 0;
            if (i.options.infinite === !0)
                if (i.slideCount <= i.options.slidesToShow) ++d;
                else
                    for (; r < i.slideCount;) ++d, r = c + i.options.slidesToScroll, c += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else if (i.options.centerMode === !0) d = i.slideCount;
            else if (!i.options.asNavFor) d = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            else
                for (; r < i.slideCount;) ++d, r = c + i.options.slidesToScroll, c += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            return d - 1
        }, T.prototype.getLeft = function(i) {
            var r = this,
                c, d, g = 0,
                x, P;
            return r.slideOffset = 0, d = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, P = -1, r.options.vertical === !0 && r.options.centerMode === !0 && (r.options.slidesToShow === 2 ? P = -1.5 : r.options.slidesToShow === 1 && (P = -2)), g = d * r.options.slidesToShow * P), r.slideCount % r.options.slidesToScroll !== 0 && i + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (i > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (i - r.slideCount)) * r.slideWidth * -1, g = (r.options.slidesToShow - (i - r.slideCount)) * d * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, g = r.slideCount % r.options.slidesToScroll * d * -1))) : i + r.options.slidesToShow > r.slideCount && (r.slideOffset = (i + r.options.slidesToShow - r.slideCount) * r.slideWidth, g = (i + r.options.slidesToShow - r.slideCount) * d), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, g = 0), r.options.centerMode === !0 && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), r.options.vertical === !1 ? c = i * r.slideWidth * -1 + r.slideOffset : c = i * d * -1 + g, r.options.variableWidth === !0 && (r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? x = r.$slideTrack.children(".slick-slide").eq(i) : x = r.$slideTrack.children(".slick-slide").eq(i + r.options.slidesToShow), r.options.rtl === !0 ? x[0] ? c = (r.$slideTrack.width() - x[0].offsetLeft - x.width()) * -1 : c = 0 : c = x[0] ? x[0].offsetLeft * -1 : 0, r.options.centerMode === !0 && (r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? x = r.$slideTrack.children(".slick-slide").eq(i) : x = r.$slideTrack.children(".slick-slide").eq(i + r.options.slidesToShow + 1), r.options.rtl === !0 ? x[0] ? c = (r.$slideTrack.width() - x[0].offsetLeft - x.width()) * -1 : c = 0 : c = x[0] ? x[0].offsetLeft * -1 : 0, c += (r.$list.width() - x.outerWidth()) / 2)), c
        }, T.prototype.getOption = T.prototype.slickGetOption = function(i) {
            var r = this;
            return r.options[i]
        }, T.prototype.getNavigableIndexes = function() {
            var i = this,
                r = 0,
                c = 0,
                d = [],
                g;
            for (i.options.infinite === !1 ? g = i.slideCount : (r = i.options.slidesToScroll * -1, c = i.options.slidesToScroll * -1, g = i.slideCount * 2); r < g;) d.push(r), r = c + i.options.slidesToScroll, c += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            return d
        }, T.prototype.getSlick = function() {
            return this
        }, T.prototype.getSlideCount = function() {
            var i = this,
                r, c, d;
            return d = i.options.centerMode === !0 ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, i.options.swipeToSlide === !0 ? (i.$slideTrack.find(".slick-slide").each(function(g, x) {
                if (x.offsetLeft - d + k(x).outerWidth() / 2 > i.swipeLeft * -1) return c = x, !1
            }), r = Math.abs(k(c).attr("data-slick-index") - i.currentSlide) || 1, r) : i.options.slidesToScroll
        }, T.prototype.goTo = T.prototype.slickGoTo = function(i, r) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(i)
                }
            }, r)
        }, T.prototype.init = function(i) {
            var r = this;
            k(r.$slider).hasClass("slick-initialized") || (k(r.$slider).addClass("slick-initialized"), r.buildRows(), r.buildOut(), r.setProps(), r.startLoad(), r.loadSlider(), r.initializeEvents(), r.updateArrows(), r.updateDots(), r.checkResponsive(!0), r.focusHandler()), i && r.$slider.trigger("init", [r]), r.options.accessibility === !0 && r.initADA(), r.options.autoplay && (r.paused = !1, r.autoPlay())
        }, T.prototype.initADA = function() {
            var i = this,
                r = Math.ceil(i.slideCount / i.options.slidesToShow),
                c = i.getNavigableIndexes().filter(function(x) {
                    return x >= 0 && x < i.slideCount
                });
            i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), i.$dots !== null && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(x) {
                var P = c.indexOf(x);
                if (k(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + i.instanceUid + x,
                        tabindex: -1
                    }), P !== -1) {
                    var q = "slick-slide-control" + i.instanceUid + P;
                    k("#" + q).length && k(this).attr({
                        "aria-describedby": q
                    })
                }
            }), i.$dots.attr("role", "tablist").find("li").each(function(x) {
                var P = c[x];
                k(this).attr({
                    role: "presentation"
                }), k(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + i.instanceUid + x,
                    "aria-controls": "slick-slide" + i.instanceUid + P,
                    "aria-label": x + 1 + " of " + r,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(i.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var d = i.currentSlide, g = d + i.options.slidesToShow; d < g; d++) i.options.focusOnChange ? i.$slides.eq(d).attr({
                tabindex: "0"
            }) : i.$slides.eq(d).removeAttr("tabindex");
            i.activateADA()
        }, T.prototype.initArrowEvents = function() {
            var i = this;
            i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
        }, T.prototype.initDotEvents = function() {
            var i = this;
            i.options.dots === !0 && i.slideCount > i.options.slidesToShow && (k("li", i.$dots).on("click.slick", {
                message: "index"
            }, i.changeSlide), i.options.accessibility === !0 && i.$dots.on("keydown.slick", i.keyHandler)), i.options.dots === !0 && i.options.pauseOnDotsHover === !0 && i.slideCount > i.options.slidesToShow && k("li", i.$dots).on("mouseenter.slick", k.proxy(i.interrupt, i, !0)).on("mouseleave.slick", k.proxy(i.interrupt, i, !1))
        }, T.prototype.initSlideEvents = function() {
            var i = this;
            i.options.pauseOnHover && (i.$list.on("mouseenter.slick", k.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", k.proxy(i.interrupt, i, !1)))
        }, T.prototype.initializeEvents = function() {
            var i = this;
            i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), k(document).on(i.visibilityChange, k.proxy(i.visibility, i)), i.options.accessibility === !0 && i.$list.on("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && k(i.$slideTrack).children().on("click.slick", i.selectHandler), k(window).on("orientationchange.slick.slick-" + i.instanceUid, k.proxy(i.orientationChange, i)), k(window).on("resize.slick.slick-" + i.instanceUid, k.proxy(i.resize, i)), k("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), k(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), k(i.setPosition)
        }, T.prototype.initUI = function() {
            var i = this;
            i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
        }, T.prototype.keyHandler = function(i) {
            var r = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (i.keyCode === 37 && r.options.accessibility === !0 ? r.changeSlide({
                data: {
                    message: r.options.rtl === !0 ? "next" : "previous"
                }
            }) : i.keyCode === 39 && r.options.accessibility === !0 && r.changeSlide({
                data: {
                    message: r.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, T.prototype.lazyLoad = function() {
            var i = this,
                r, c, d, g;

            function x(N) {
                k("img[data-lazy]", N).each(function() {
                    var C = k(this),
                        M = k(this).attr("data-lazy"),
                        L = k(this).attr("data-srcset"),
                        ee = k(this).attr("data-sizes") || i.$slider.attr("data-sizes"),
                        le = document.createElement("img");
                    le.onload = function() {
                        C.animate({
                            opacity: 0
                        }, 100, function() {
                            L && (C.attr("srcset", L), ee && C.attr("sizes", ee)), C.attr("src", M).animate({
                                opacity: 1
                            }, 200, function() {
                                C.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), i.$slider.trigger("lazyLoaded", [i, C, M])
                        })
                    }, le.onerror = function() {
                        C.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, C, M])
                    }, le.src = M
                })
            }
            if (i.options.centerMode === !0 ? i.options.infinite === !0 ? (d = i.currentSlide + (i.options.slidesToShow / 2 + 1), g = d + i.options.slidesToShow + 2) : (d = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), g = 2 + (i.options.slidesToShow / 2 + 1) + i.currentSlide) : (d = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide, g = Math.ceil(d + i.options.slidesToShow), i.options.fade === !0 && (d > 0 && d--, g <= i.slideCount && g++)), r = i.$slider.find(".slick-slide").slice(d, g), i.options.lazyLoad === "anticipated")
                for (var P = d - 1, q = g, O = i.$slider.find(".slick-slide"), V = 0; V < i.options.slidesToScroll; V++) P < 0 && (P = i.slideCount - 1), r = r.add(O.eq(P)), r = r.add(O.eq(q)), P--, q++;
            x(r), i.slideCount <= i.options.slidesToShow ? (c = i.$slider.find(".slick-slide"), x(c)) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? (c = i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow), x(c)) : i.currentSlide === 0 && (c = i.$slider.find(".slick-cloned").slice(i.options.slidesToShow * -1), x(c))
        }, T.prototype.loadSlider = function() {
            var i = this;
            i.setPosition(), i.$slideTrack.css({
                opacity: 1
            }), i.$slider.removeClass("slick-loading"), i.initUI(), i.options.lazyLoad === "progressive" && i.progressiveLazyLoad()
        }, T.prototype.next = T.prototype.slickNext = function() {
            var i = this;
            i.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, T.prototype.orientationChange = function() {
            var i = this;
            i.checkResponsive(), i.setPosition()
        }, T.prototype.pause = T.prototype.slickPause = function() {
            var i = this;
            i.autoPlayClear(), i.paused = !0
        }, T.prototype.play = T.prototype.slickPlay = function() {
            var i = this;
            i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
        }, T.prototype.postSlide = function(i) {
            var r = this;
            if (!r.unslicked && (r.$slider.trigger("afterChange", [r, i]), r.animating = !1, r.slideCount > r.options.slidesToShow && r.setPosition(), r.swipeLeft = null, r.options.autoplay && r.autoPlay(), r.options.accessibility === !0 && (r.initADA(), r.options.focusOnChange))) {
                var c = k(r.$slides.get(r.currentSlide));
                c.attr("tabindex", 0).focus()
            }
        }, T.prototype.prev = T.prototype.slickPrev = function() {
            var i = this;
            i.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, T.prototype.preventDefault = function(i) {
            i.preventDefault()
        }, T.prototype.progressiveLazyLoad = function(i) {
            i = i || 1;
            var r = this,
                c = k("img[data-lazy]", r.$slider),
                d, g, x, P, q;
            c.length ? (d = c.first(), g = d.attr("data-lazy"), x = d.attr("data-srcset"), P = d.attr("data-sizes") || r.$slider.attr("data-sizes"), q = document.createElement("img"), q.onload = function() {
                x && (d.attr("srcset", x), P && d.attr("sizes", P)), d.attr("src", g).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, d, g]), r.progressiveLazyLoad()
            }, q.onerror = function() {
                i < 3 ? setTimeout(function() {
                    r.progressiveLazyLoad(i + 1)
                }, 500) : (d.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, d, g]), r.progressiveLazyLoad())
            }, q.src = g) : r.$slider.trigger("allImagesLoaded", [r])
        }, T.prototype.refresh = function(i) {
            var r = this,
                c, d;
            d = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > d && (r.currentSlide = d), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), c = r.currentSlide, r.destroy(!0), k.extend(r, r.initials, {
                currentSlide: c
            }), r.init(), i || r.changeSlide({
                data: {
                    message: "index",
                    index: c
                }
            }, !1)
        }, T.prototype.registerBreakpoints = function() {
            var i = this,
                r, c, d, g = i.options.responsive || null;
            if (k.type(g) === "array" && g.length) {
                i.respondTo = i.options.respondTo || "window";
                for (r in g)
                    if (d = i.breakpoints.length - 1, g.hasOwnProperty(r)) {
                        for (c = g[r].breakpoint; d >= 0;) i.breakpoints[d] && i.breakpoints[d] === c && i.breakpoints.splice(d, 1), d--;
                        i.breakpoints.push(c), i.breakpointSettings[c] = g[r].settings
                    } i.breakpoints.sort(function(x, P) {
                    return i.options.mobileFirst ? x - P : P - x
                })
            }
        }, T.prototype.reinit = function() {
            var i = this;
            i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && i.currentSlide !== 0 && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), i.options.focusOnSelect === !0 && k(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses(typeof i.currentSlide == "number" ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
        }, T.prototype.resize = function() {
            var i = this;
            k(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
                i.windowWidth = k(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
            }, 50))
        }, T.prototype.removeSlide = T.prototype.slickRemove = function(i, r, c) {
            var d = this;
            if (typeof i == "boolean" ? (r = i, i = r === !0 ? 0 : d.slideCount - 1) : i = r === !0 ? --i : i, d.slideCount < 1 || i < 0 || i > d.slideCount - 1) return !1;
            d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(i).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit()
        }, T.prototype.setCSS = function(i) {
            var r = this,
                c = {},
                d, g;
            r.options.rtl === !0 && (i = -i), d = r.positionProp == "left" ? Math.ceil(i) + "px" : "0px", g = r.positionProp == "top" ? Math.ceil(i) + "px" : "0px", c[r.positionProp] = i, r.transformsEnabled === !1 ? r.$slideTrack.css(c) : (c = {}, r.cssTransitions === !1 ? (c[r.animType] = "translate(" + d + ", " + g + ")", r.$slideTrack.css(c)) : (c[r.animType] = "translate3d(" + d + ", " + g + ", 0px)", r.$slideTrack.css(c)))
        }, T.prototype.setDimensions = function() {
            var i = this;
            i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
                padding: "0px " + i.options.centerPadding
            }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
                padding: i.options.centerPadding + " 0px"
            })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
            var r = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - r)
        }, T.prototype.setFade = function() {
            var i = this,
                r;
            i.$slides.each(function(c, d) {
                r = i.slideWidth * c * -1, i.options.rtl === !0 ? k(d).css({
                    position: "relative",
                    right: r,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : k(d).css({
                    position: "relative",
                    left: r,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, T.prototype.setHeight = function() {
            var i = this;
            if (i.options.slidesToShow === 1 && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
                var r = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", r)
            }
        }, T.prototype.setOption = T.prototype.slickSetOption = function() {
            var i = this,
                r, c, d, g, x = !1,
                P;
            if (k.type(arguments[0]) === "object" ? (d = arguments[0], x = arguments[1], P = "multiple") : k.type(arguments[0]) === "string" && (d = arguments[0], g = arguments[1], x = arguments[2], arguments[0] === "responsive" && k.type(arguments[1]) === "array" ? P = "responsive" : typeof arguments[1] < "u" && (P = "single")), P === "single") i.options[d] = g;
            else if (P === "multiple") k.each(d, function(q, O) {
                i.options[q] = O
            });
            else if (P === "responsive")
                for (c in g)
                    if (k.type(i.options.responsive) !== "array") i.options.responsive = [g[c]];
                    else {
                        for (r = i.options.responsive.length - 1; r >= 0;) i.options.responsive[r].breakpoint === g[c].breakpoint && i.options.responsive.splice(r, 1), r--;
                        i.options.responsive.push(g[c])
                    } x && (i.unload(), i.reinit())
        }, T.prototype.setPosition = function() {
            var i = this;
            i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
        }, T.prototype.setProps = function() {
            var i = this,
                r = document.body.style;
            i.positionProp = i.options.vertical === !0 ? "top" : "left", i.positionProp === "top" ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), (r.WebkitTransition !== void 0 || r.MozTransition !== void 0 || r.msTransition !== void 0) && i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && (typeof i.options.zIndex == "number" ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), r.OTransform !== void 0 && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", r.perspectiveProperty === void 0 && r.webkitPerspective === void 0 && (i.animType = !1)), r.MozTransform !== void 0 && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", r.perspectiveProperty === void 0 && r.MozPerspective === void 0 && (i.animType = !1)), r.webkitTransform !== void 0 && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", r.perspectiveProperty === void 0 && r.webkitPerspective === void 0 && (i.animType = !1)), r.msTransform !== void 0 && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", r.msTransform === void 0 && (i.animType = !1)), r.transform !== void 0 && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && i.animType !== null && i.animType !== !1
        }, T.prototype.setSlideClasses = function(i) {
            var r = this,
                c, d, g, x;
            if (d = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(i).addClass("slick-current"), r.options.centerMode === !0) {
                var P = r.options.slidesToShow % 2 === 0 ? 1 : 0;
                c = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (i >= c && i <= r.slideCount - 1 - c ? r.$slides.slice(i - c + P, i + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (g = r.options.slidesToShow + i, d.slice(g - c + 1 + P, g + c + 2).addClass("slick-active").attr("aria-hidden", "false")), i === 0 ? d.eq(d.length - 1 - r.options.slidesToShow).addClass("slick-center") : i === r.slideCount - 1 && d.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(i).addClass("slick-center")
            } else i >= 0 && i <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= r.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (x = r.slideCount % r.options.slidesToShow, g = r.options.infinite === !0 ? r.options.slidesToShow + i : i, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - i < r.options.slidesToShow ? d.slice(g - (r.options.slidesToShow - x), g + x).addClass("slick-active").attr("aria-hidden", "false") : d.slice(g, g + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            (r.options.lazyLoad === "ondemand" || r.options.lazyLoad === "anticipated") && r.lazyLoad()
        }, T.prototype.setupInfinite = function() {
            var i = this,
                r, c, d;
            if (i.options.fade === !0 && (i.options.centerMode = !1), i.options.infinite === !0 && i.options.fade === !1 && (c = null, i.slideCount > i.options.slidesToShow)) {
                for (i.options.centerMode === !0 ? d = i.options.slidesToShow + 1 : d = i.options.slidesToShow, r = i.slideCount; r > i.slideCount - d; r -= 1) c = r - 1, k(i.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
                for (r = 0; r < d + i.slideCount; r += 1) c = r, k(i.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
                i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    k(this).attr("id", "")
                })
            }
        }, T.prototype.interrupt = function(i) {
            var r = this;
            i || r.autoPlay(), r.interrupted = i
        }, T.prototype.selectHandler = function(i) {
            var r = this,
                c = k(i.target).is(".slick-slide") ? k(i.target) : k(i.target).parents(".slick-slide"),
                d = parseInt(c.attr("data-slick-index"));
            if (d || (d = 0), r.slideCount <= r.options.slidesToShow) {
                r.slideHandler(d, !1, !0);
                return
            }
            r.slideHandler(d)
        }, T.prototype.slideHandler = function(i, r, c) {
            var d, g, x, P, q = null,
                O = this,
                V;
            if (r = r || !1, !(O.animating === !0 && O.options.waitForAnimate === !0) && !(O.options.fade === !0 && O.currentSlide === i)) {
                if (r === !1 && O.asNavFor(i), d = i, q = O.getLeft(d), P = O.getLeft(O.currentSlide), O.currentLeft = O.swipeLeft === null ? P : O.swipeLeft, O.options.infinite === !1 && O.options.centerMode === !1 && (i < 0 || i > O.getDotCount() * O.options.slidesToScroll)) {
                    O.options.fade === !1 && (d = O.currentSlide, c !== !0 && O.slideCount > O.options.slidesToShow ? O.animateSlide(P, function() {
                        O.postSlide(d)
                    }) : O.postSlide(d));
                    return
                } else if (O.options.infinite === !1 && O.options.centerMode === !0 && (i < 0 || i > O.slideCount - O.options.slidesToScroll)) {
                    O.options.fade === !1 && (d = O.currentSlide, c !== !0 && O.slideCount > O.options.slidesToShow ? O.animateSlide(P, function() {
                        O.postSlide(d)
                    }) : O.postSlide(d));
                    return
                }
                if (O.options.autoplay && clearInterval(O.autoPlayTimer), d < 0 ? O.slideCount % O.options.slidesToScroll !== 0 ? g = O.slideCount - O.slideCount % O.options.slidesToScroll : g = O.slideCount + d : d >= O.slideCount ? O.slideCount % O.options.slidesToScroll !== 0 ? g = 0 : g = d - O.slideCount : g = d, O.animating = !0, O.$slider.trigger("beforeChange", [O, O.currentSlide, g]), x = O.currentSlide, O.currentSlide = g, O.setSlideClasses(O.currentSlide), O.options.asNavFor && (V = O.getNavTarget(), V = V.slick("getSlick"), V.slideCount <= V.options.slidesToShow && V.setSlideClasses(O.currentSlide)), O.updateDots(), O.updateArrows(), O.options.fade === !0) {
                    c !== !0 ? (O.fadeSlideOut(x), O.fadeSlide(g, function() {
                        O.postSlide(g)
                    })) : O.postSlide(g), O.animateHeight();
                    return
                }
                c !== !0 && O.slideCount > O.options.slidesToShow ? O.animateSlide(q, function() {
                    O.postSlide(g)
                }) : O.postSlide(g)
            }
        }, T.prototype.startLoad = function() {
            var i = this;
            i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
        }, T.prototype.swipeDirection = function() {
            var i, r, c, d, g = this;
            return i = g.touchObject.startX - g.touchObject.curX, r = g.touchObject.startY - g.touchObject.curY, c = Math.atan2(r, i), d = Math.round(c * 180 / Math.PI), d < 0 && (d = 360 - Math.abs(d)), d <= 45 && d >= 0 || d <= 360 && d >= 315 ? g.options.rtl === !1 ? "left" : "right" : d >= 135 && d <= 225 ? g.options.rtl === !1 ? "right" : "left" : g.options.verticalSwiping === !0 ? d >= 35 && d <= 135 ? "down" : "up" : "vertical"
        }, T.prototype.swipeEnd = function(i) {
            var r = this,
                c, d;
            if (r.dragging = !1, r.swiping = !1, r.scrolling) return r.scrolling = !1, !1;
            if (r.interrupted = !1, r.shouldClick = !(r.touchObject.swipeLength > 10), r.touchObject.curX === void 0) return !1;
            if (r.touchObject.edgeHit === !0 && r.$slider.trigger("edge", [r, r.swipeDirection()]), r.touchObject.swipeLength >= r.touchObject.minSwipe) {
                switch (d = r.swipeDirection(), d) {
                    case "left":
                    case "down":
                        c = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide + r.getSlideCount()) : r.currentSlide + r.getSlideCount(), r.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        c = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide - r.getSlideCount()) : r.currentSlide - r.getSlideCount(), r.currentDirection = 1;
                        break
                }
                d != "vertical" && (r.slideHandler(c), r.touchObject = {}, r.$slider.trigger("swipe", [r, d]))
            } else r.touchObject.startX !== r.touchObject.curX && (r.slideHandler(r.currentSlide), r.touchObject = {})
        }, T.prototype.swipeHandler = function(i) {
            var r = this;
            if (!(r.options.swipe === !1 || "ontouchend" in document && r.options.swipe === !1) && !(r.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (r.touchObject.fingerCount = i.originalEvent && i.originalEvent.touches !== void 0 ? i.originalEvent.touches.length : 1, r.touchObject.minSwipe = r.listWidth / r.options.touchThreshold, r.options.verticalSwiping === !0 && (r.touchObject.minSwipe = r.listHeight / r.options.touchThreshold), i.data.action) {
                case "start":
                    r.swipeStart(i);
                    break;
                case "move":
                    r.swipeMove(i);
                    break;
                case "end":
                    r.swipeEnd(i);
                    break
            }
        }, T.prototype.swipeMove = function(i) {
            var r = this,
                c, d, g, x, P, q;
            if (P = i.originalEvent !== void 0 ? i.originalEvent.touches : null, !r.dragging || r.scrolling || P && P.length !== 1) return !1;
            if (c = r.getLeft(r.currentSlide), r.touchObject.curX = P !== void 0 ? P[0].pageX : i.clientX, r.touchObject.curY = P !== void 0 ? P[0].pageY : i.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), q = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && q > 4) return r.scrolling = !0, !1;
            if (r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = q), d = r.swipeDirection(), i.originalEvent !== void 0 && r.touchObject.swipeLength > 4 && (r.swiping = !0, i.preventDefault()), x = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (x = r.touchObject.curY > r.touchObject.startY ? 1 : -1), g = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (r.currentSlide === 0 && d === "right" || r.currentSlide >= r.getDotCount() && d === "left") && (g = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = c + g * x : r.swipeLeft = c + g * (r.$list.height() / r.listWidth) * x, r.options.verticalSwiping === !0 && (r.swipeLeft = c + g * x), r.options.fade === !0 || r.options.touchMove === !1) return !1;
            if (r.animating === !0) return r.swipeLeft = null, !1;
            r.setCSS(r.swipeLeft)
        }, T.prototype.swipeStart = function(i) {
            var r = this,
                c;
            if (r.interrupted = !0, r.touchObject.fingerCount !== 1 || r.slideCount <= r.options.slidesToShow) return r.touchObject = {}, !1;
            i.originalEvent !== void 0 && i.originalEvent.touches !== void 0 && (c = i.originalEvent.touches[0]), r.touchObject.startX = r.touchObject.curX = c !== void 0 ? c.pageX : i.clientX, r.touchObject.startY = r.touchObject.curY = c !== void 0 ? c.pageY : i.clientY, r.dragging = !0
        }, T.prototype.unfilterSlides = T.prototype.slickUnfilter = function() {
            var i = this;
            i.$slidesCache !== null && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
        }, T.prototype.unload = function() {
            var i = this;
            k(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, T.prototype.unslick = function(i) {
            var r = this;
            r.$slider.trigger("unslick", [r, i]), r.destroy()
        }, T.prototype.updateArrows = function() {
            var i = this;
            Math.floor(i.options.slidesToShow / 2), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.currentSlide === 0 ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && i.options.centerMode === !1 || i.currentSlide >= i.slideCount - 1 && i.options.centerMode === !0) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, T.prototype.updateDots = function() {
            var i = this;
            i.$dots !== null && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
        }, T.prototype.visibility = function() {
            var i = this;
            i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
        }, k.fn.slick = function() {
            var i = this,
                r = arguments[0],
                c = Array.prototype.slice.call(arguments, 1),
                d = i.length,
                g, x;
            for (g = 0; g < d; g++)
                if (typeof r == "object" || typeof r > "u" ? i[g].slick = new T(i[g], r) : x = i[g].slick[r].apply(i[g].slick, c), typeof x < "u") return x;
            return i
        }
    })
})(pr);
var hi = {},
    hr = {
        get exports() {
            return hi
        },
        set exports(ie) {
            hi = ie
        }
    };
(function(ie, B) {
    (function(k, T) {
        ie.exports = T()
    })(sn, function() {
        return function(k) {
            function T(r) {
                if (i[r]) return i[r].exports;
                var c = i[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return k[r].call(c.exports, c, c.exports, T), c.loaded = !0, c.exports
            }
            var i = {};
            return T.m = k, T.c = i, T.p = "dist/", T(0)
        }([function(k, T, i) {
            function r(U) {
                return U && U.__esModule ? U : {
                    default: U
                }
            }
            var c = Object.assign || function(U) {
                    for (var fe = 1; fe < arguments.length; fe++) {
                        var be = arguments[fe];
                        for (var xe in be) Object.prototype.hasOwnProperty.call(be, xe) && (U[xe] = be[xe])
                    }
                    return U
                },
                d = i(1),
                g = (r(d), i(6)),
                x = r(g),
                P = i(7),
                q = r(P),
                O = i(8),
                V = r(O),
                N = i(9),
                C = r(N),
                M = i(10),
                L = r(M),
                ee = i(11),
                le = r(ee),
                ve = i(14),
                Le = r(ve),
                s = [],
                We = !1,
                oe = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                Se = function() {
                    var U = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (U && (We = !0), We) return s = (0, le.default)(s, oe), (0, L.default)(s, oe.once), s
                },
                Ee = function() {
                    s = (0, Le.default)(), Se()
                },
                W = function() {
                    s.forEach(function(U, fe) {
                        U.node.removeAttribute("data-aos"), U.node.removeAttribute("data-aos-easing"), U.node.removeAttribute("data-aos-duration"), U.node.removeAttribute("data-aos-delay")
                    })
                },
                H = function(U) {
                    return U === !0 || U === "mobile" && C.default.mobile() || U === "phone" && C.default.phone() || U === "tablet" && C.default.tablet() || typeof U == "function" && U() === !0
                },
                Z = function(U) {
                    oe = c(oe, U), s = (0, Le.default)();
                    var fe = document.all && !window.atob;
                    return H(oe.disable) || fe ? W() : (oe.disableMutationObserver || V.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), oe.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", oe.easing), document.querySelector("body").setAttribute("data-aos-duration", oe.duration), document.querySelector("body").setAttribute("data-aos-delay", oe.delay), oe.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? Se(!0) : oe.startEvent === "load" ? window.addEventListener(oe.startEvent, function() {
                        Se(!0)
                    }) : document.addEventListener(oe.startEvent, function() {
                        Se(!0)
                    }), window.addEventListener("resize", (0, q.default)(Se, oe.debounceDelay, !0)), window.addEventListener("orientationchange", (0, q.default)(Se, oe.debounceDelay, !0)), window.addEventListener("scroll", (0, x.default)(function() {
                        (0, L.default)(s, oe.once)
                    }, oe.throttleDelay)), oe.disableMutationObserver || V.default.ready("[data-aos]", Ee), s)
                };
            k.exports = {
                init: Z,
                refresh: Se,
                refreshHard: Ee
            }
        }, function(k, T) {}, , , , , function(k, T) {
            (function(i) {
                function r(H, Z, U) {
                    function fe(re) {
                        var Ce = De,
                            I = Re;
                        return De = Re = void 0, tt = re, ke = H.apply(I, Ce)
                    }

                    function be(re) {
                        return tt = re, ye = setTimeout(qe, Z), it ? fe(re) : ke
                    }

                    function xe(re) {
                        var Ce = re - we,
                            I = re - tt,
                            $e = Z - Ce;
                        return Ke ? Ee($e, Ye - I) : $e
                    }

                    function He(re) {
                        var Ce = re - we,
                            I = re - tt;
                        return we === void 0 || Ce >= Z || Ce < 0 || Ke && I >= Ye
                    }

                    function qe() {
                        var re = W();
                        return He(re) ? Ve(re) : void(ye = setTimeout(qe, xe(re)))
                    }

                    function Ve(re) {
                        return ye = void 0, ne && De ? fe(re) : (De = Re = void 0, ke)
                    }

                    function ge() {
                        ye !== void 0 && clearTimeout(ye), tt = 0, De = we = Re = ye = void 0
                    }

                    function ce() {
                        return ye === void 0 ? ke : Ve(W())
                    }

                    function Ne() {
                        var re = W(),
                            Ce = He(re);
                        if (De = arguments, Re = this, we = re, Ce) {
                            if (ye === void 0) return be(we);
                            if (Ke) return ye = setTimeout(qe, Z), fe(we)
                        }
                        return ye === void 0 && (ye = setTimeout(qe, Z)), ke
                    }
                    var De, Re, Ye, ke, ye, we, tt = 0,
                        it = !1,
                        Ke = !1,
                        ne = !0;
                    if (typeof H != "function") throw new TypeError(O);
                    return Z = P(Z) || 0, d(U) && (it = !!U.leading, Ke = "maxWait" in U, Ye = Ke ? Se(P(U.maxWait) || 0, Z) : Ye, ne = "trailing" in U ? !!U.trailing : ne), Ne.cancel = ge, Ne.flush = ce, Ne
                }

                function c(H, Z, U) {
                    var fe = !0,
                        be = !0;
                    if (typeof H != "function") throw new TypeError(O);
                    return d(U) && (fe = "leading" in U ? !!U.leading : fe, be = "trailing" in U ? !!U.trailing : be), r(H, Z, {
                        leading: fe,
                        maxWait: Z,
                        trailing: be
                    })
                }

                function d(H) {
                    var Z = typeof H > "u" ? "undefined" : q(H);
                    return !!H && (Z == "object" || Z == "function")
                }

                function g(H) {
                    return !!H && (typeof H > "u" ? "undefined" : q(H)) == "object"
                }

                function x(H) {
                    return (typeof H > "u" ? "undefined" : q(H)) == "symbol" || g(H) && oe.call(H) == N
                }

                function P(H) {
                    if (typeof H == "number") return H;
                    if (x(H)) return V;
                    if (d(H)) {
                        var Z = typeof H.valueOf == "function" ? H.valueOf() : H;
                        H = d(Z) ? Z + "" : Z
                    }
                    if (typeof H != "string") return H === 0 ? H : +H;
                    H = H.replace(C, "");
                    var U = L.test(H);
                    return U || ee.test(H) ? le(H.slice(2), U ? 2 : 8) : M.test(H) ? V : +H
                }
                var q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(H) {
                        return typeof H
                    } : function(H) {
                        return H && typeof Symbol == "function" && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H
                    },
                    O = "Expected a function",
                    V = NaN,
                    N = "[object Symbol]",
                    C = /^\s+|\s+$/g,
                    M = /^[-+]0x[0-9a-f]+$/i,
                    L = /^0b[01]+$/i,
                    ee = /^0o[0-7]+$/i,
                    le = parseInt,
                    ve = (typeof i > "u" ? "undefined" : q(i)) == "object" && i && i.Object === Object && i,
                    Le = (typeof self > "u" ? "undefined" : q(self)) == "object" && self && self.Object === Object && self,
                    s = ve || Le || Function("return this")(),
                    We = Object.prototype,
                    oe = We.toString,
                    Se = Math.max,
                    Ee = Math.min,
                    W = function() {
                        return s.Date.now()
                    };
                k.exports = c
            }).call(T, function() {
                return this
            }())
        }, function(k, T) {
            (function(i) {
                function r(W, H, Z) {
                    function U(ne) {
                        var re = Ne,
                            Ce = De;
                        return Ne = De = void 0, we = ne, Ye = W.apply(Ce, re)
                    }

                    function fe(ne) {
                        return we = ne, ke = setTimeout(He, H), tt ? U(ne) : Ye
                    }

                    function be(ne) {
                        var re = ne - ye,
                            Ce = ne - we,
                            I = H - re;
                        return it ? Se(I, Re - Ce) : I
                    }

                    function xe(ne) {
                        var re = ne - ye,
                            Ce = ne - we;
                        return ye === void 0 || re >= H || re < 0 || it && Ce >= Re
                    }

                    function He() {
                        var ne = Ee();
                        return xe(ne) ? qe(ne) : void(ke = setTimeout(He, be(ne)))
                    }

                    function qe(ne) {
                        return ke = void 0, Ke && Ne ? U(ne) : (Ne = De = void 0, Ye)
                    }

                    function Ve() {
                        ke !== void 0 && clearTimeout(ke), we = 0, Ne = ye = De = ke = void 0
                    }

                    function ge() {
                        return ke === void 0 ? Ye : qe(Ee())
                    }

                    function ce() {
                        var ne = Ee(),
                            re = xe(ne);
                        if (Ne = arguments, De = this, ye = ne, re) {
                            if (ke === void 0) return fe(ye);
                            if (it) return ke = setTimeout(He, H), U(ye)
                        }
                        return ke === void 0 && (ke = setTimeout(He, H)), Ye
                    }
                    var Ne, De, Re, Ye, ke, ye, we = 0,
                        tt = !1,
                        it = !1,
                        Ke = !0;
                    if (typeof W != "function") throw new TypeError(q);
                    return H = x(H) || 0, c(Z) && (tt = !!Z.leading, it = "maxWait" in Z, Re = it ? oe(x(Z.maxWait) || 0, H) : Re, Ke = "trailing" in Z ? !!Z.trailing : Ke), ce.cancel = Ve, ce.flush = ge, ce
                }

                function c(W) {
                    var H = typeof W > "u" ? "undefined" : P(W);
                    return !!W && (H == "object" || H == "function")
                }

                function d(W) {
                    return !!W && (typeof W > "u" ? "undefined" : P(W)) == "object"
                }

                function g(W) {
                    return (typeof W > "u" ? "undefined" : P(W)) == "symbol" || d(W) && We.call(W) == V
                }

                function x(W) {
                    if (typeof W == "number") return W;
                    if (g(W)) return O;
                    if (c(W)) {
                        var H = typeof W.valueOf == "function" ? W.valueOf() : W;
                        W = c(H) ? H + "" : H
                    }
                    if (typeof W != "string") return W === 0 ? W : +W;
                    W = W.replace(N, "");
                    var Z = M.test(W);
                    return Z || L.test(W) ? ee(W.slice(2), Z ? 2 : 8) : C.test(W) ? O : +W
                }
                var P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(W) {
                        return typeof W
                    } : function(W) {
                        return W && typeof Symbol == "function" && W.constructor === Symbol && W !== Symbol.prototype ? "symbol" : typeof W
                    },
                    q = "Expected a function",
                    O = NaN,
                    V = "[object Symbol]",
                    N = /^\s+|\s+$/g,
                    C = /^[-+]0x[0-9a-f]+$/i,
                    M = /^0b[01]+$/i,
                    L = /^0o[0-7]+$/i,
                    ee = parseInt,
                    le = (typeof i > "u" ? "undefined" : P(i)) == "object" && i && i.Object === Object && i,
                    ve = (typeof self > "u" ? "undefined" : P(self)) == "object" && self && self.Object === Object && self,
                    Le = le || ve || Function("return this")(),
                    s = Object.prototype,
                    We = s.toString,
                    oe = Math.max,
                    Se = Math.min,
                    Ee = function() {
                        return Le.Date.now()
                    };
                k.exports = r
            }).call(T, function() {
                return this
            }())
        }, function(k, T) {
            function i(P) {
                var q = void 0,
                    O = void 0;
                for (q = 0; q < P.length; q += 1)
                    if (O = P[q], O.dataset && O.dataset.aos || O.children && i(O.children)) return !0;
                return !1
            }

            function r() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function c() {
                return !!r()
            }

            function d(P, q) {
                var O = window.document,
                    V = r(),
                    N = new V(g);
                x = q, N.observe(O.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }

            function g(P) {
                P && P.forEach(function(q) {
                    var O = Array.prototype.slice.call(q.addedNodes),
                        V = Array.prototype.slice.call(q.removedNodes),
                        N = O.concat(V);
                    if (i(N)) return x()
                })
            }
            Object.defineProperty(T, "__esModule", {
                value: !0
            });
            var x = function() {};
            T.default = {
                isSupported: c,
                ready: d
            }
        }, function(k, T) {
            function i(O, V) {
                if (!(O instanceof V)) throw new TypeError("Cannot call a class as a function")
            }

            function r() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(T, "__esModule", {
                value: !0
            });
            var c = function() {
                    function O(V, N) {
                        for (var C = 0; C < N.length; C++) {
                            var M = N[C];
                            M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(V, M.key, M)
                        }
                    }
                    return function(V, N, C) {
                        return N && O(V.prototype, N), C && O(V, C), V
                    }
                }(),
                d = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                g = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                x = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                P = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                q = function() {
                    function O() {
                        i(this, O)
                    }
                    return c(O, [{
                        key: "phone",
                        value: function() {
                            var V = r();
                            return !(!d.test(V) && !g.test(V.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var V = r();
                            return !(!x.test(V) && !P.test(V.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), O
                }();
            T.default = new q
        }, function(k, T) {
            Object.defineProperty(T, "__esModule", {
                value: !0
            });
            var i = function(c, d, g) {
                    var x = c.node.getAttribute("data-aos-once");
                    d > c.position ? c.node.classList.add("aos-animate") : typeof x < "u" && (x === "false" || !g && x !== "true") && c.node.classList.remove("aos-animate")
                },
                r = function(c, d) {
                    var g = window.pageYOffset,
                        x = window.innerHeight;
                    c.forEach(function(P, q) {
                        i(P, x + g, d)
                    })
                };
            T.default = r
        }, function(k, T, i) {
            function r(x) {
                return x && x.__esModule ? x : {
                    default: x
                }
            }
            Object.defineProperty(T, "__esModule", {
                value: !0
            });
            var c = i(12),
                d = r(c),
                g = function(x, P) {
                    return x.forEach(function(q, O) {
                        q.node.classList.add("aos-init"), q.position = (0, d.default)(q.node, P.offset)
                    }), x
                };
            T.default = g
        }, function(k, T, i) {
            function r(x) {
                return x && x.__esModule ? x : {
                    default: x
                }
            }
            Object.defineProperty(T, "__esModule", {
                value: !0
            });
            var c = i(13),
                d = r(c),
                g = function(x, P) {
                    var q = 0,
                        O = 0,
                        V = window.innerHeight,
                        N = {
                            offset: x.getAttribute("data-aos-offset"),
                            anchor: x.getAttribute("data-aos-anchor"),
                            anchorPlacement: x.getAttribute("data-aos-anchor-placement")
                        };
                    switch (N.offset && !isNaN(N.offset) && (O = parseInt(N.offset)), N.anchor && document.querySelectorAll(N.anchor) && (x = document.querySelectorAll(N.anchor)[0]), q = (0, d.default)(x).top, N.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            q += x.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            q += x.offsetHeight;
                            break;
                        case "top-center":
                            q += V / 2;
                            break;
                        case "bottom-center":
                            q += V / 2 + x.offsetHeight;
                            break;
                        case "center-center":
                            q += V / 2 + x.offsetHeight / 2;
                            break;
                        case "top-top":
                            q += V;
                            break;
                        case "bottom-top":
                            q += x.offsetHeight + V;
                            break;
                        case "center-top":
                            q += x.offsetHeight / 2 + V
                    }
                    return N.anchorPlacement || N.offset || isNaN(P) || (O = P), q + O
                };
            T.default = g
        }, function(k, T) {
            Object.defineProperty(T, "__esModule", {
                value: !0
            });
            var i = function(r) {
                for (var c = 0, d = 0; r && !isNaN(r.offsetLeft) && !isNaN(r.offsetTop);) c += r.offsetLeft - (r.tagName != "BODY" ? r.scrollLeft : 0), d += r.offsetTop - (r.tagName != "BODY" ? r.scrollTop : 0), r = r.offsetParent;
                return {
                    top: d,
                    left: c
                }
            };
            T.default = i
        }, function(k, T) {
            Object.defineProperty(T, "__esModule", {
                value: !0
            });
            var i = function(r) {
                return r = r || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(r, function(c) {
                    return {
                        node: c
                    }
                })
            };
            T.default = i
        }])
    })
})(hr);
const gr = an(hi);
var gi = {},
    vr = {
        get exports() {
            return gi
        },
        set exports(ie) {
            gi = ie
        }
    };
(function(ie) {
    (function() {
        var B, k = [];

        function T(N) {
            k.push(N), k.length == 1 && B()
        }

        function i() {
            for (; k.length;) k[0](), k.shift()
        }
        B = function() {
            setTimeout(i)
        };

        function r(N) {
            this.a = c, this.b = void 0, this.f = [];
            var C = this;
            try {
                N(function(M) {
                    x(C, M)
                }, function(M) {
                    P(C, M)
                })
            } catch (M) {
                P(C, M)
            }
        }
        var c = 2;

        function d(N) {
            return new r(function(C, M) {
                M(N)
            })
        }

        function g(N) {
            return new r(function(C) {
                C(N)
            })
        }

        function x(N, C) {
            if (N.a == c) {
                if (C == N) throw new TypeError;
                var M = !1;
                try {
                    var L = C && C.then;
                    if (C != null && typeof C == "object" && typeof L == "function") {
                        L.call(C, function(ee) {
                            M || x(N, ee), M = !0
                        }, function(ee) {
                            M || P(N, ee), M = !0
                        });
                        return
                    }
                } catch (ee) {
                    M || P(N, ee);
                    return
                }
                N.a = 0, N.b = C, q(N)
            }
        }

        function P(N, C) {
            if (N.a == c) {
                if (C == N) throw new TypeError;
                N.a = 1, N.b = C, q(N)
            }
        }

        function q(N) {
            T(function() {
                if (N.a != c)
                    for (; N.f.length;) {
                        var ee = N.f.shift(),
                            C = ee[0],
                            M = ee[1],
                            L = ee[2],
                            ee = ee[3];
                        try {
                            N.a == 0 ? L(typeof C == "function" ? C.call(void 0, N.b) : N.b) : N.a == 1 && (typeof M == "function" ? L(M.call(void 0, N.b)) : ee(N.b))
                        } catch (le) {
                            ee(le)
                        }
                    }
            })
        }
        r.prototype.g = function(N) {
            return this.c(void 0, N)
        }, r.prototype.c = function(N, C) {
            var M = this;
            return new r(function(L, ee) {
                M.f.push([N, C, L, ee]), q(M)
            })
        };

        function O(N) {
            return new r(function(C, M) {
                function L(Le) {
                    return function(s) {
                        le[Le] = s, ee += 1, ee == N.length && C(le)
                    }
                }
                var ee = 0,
                    le = [];
                N.length == 0 && C(le);
                for (var ve = 0; ve < N.length; ve += 1) g(N[ve]).c(L(ve), M)
            })
        }

        function V(N) {
            return new r(function(C, M) {
                for (var L = 0; L < N.length; L += 1) g(N[L]).c(C, M)
            })
        }
        window.Promise || (window.Promise = r, window.Promise.resolve = g, window.Promise.reject = d, window.Promise.race = V, window.Promise.all = O, window.Promise.prototype.then = r.prototype.c, window.Promise.prototype.catch = r.prototype.g)
    })(),
    function() {
        function B(C, M) {
            document.addEventListener ? C.addEventListener("scroll", M, !1) : C.attachEvent("scroll", M)
        }

        function k(C) {
            document.body ? C() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function M() {
                document.removeEventListener("DOMContentLoaded", M), C()
            }) : document.attachEvent("onreadystatechange", function M() {
                (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", M), C())
            })
        }

        function T(C) {
            this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(C)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
        }

        function i(C, M) {
            C.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + M + ";"
        }

        function r(C) {
            var M = C.g.offsetWidth,
                L = M + 100;
            return C.j.style.width = L + "px", C.i.scrollLeft = L, C.h.scrollLeft = C.h.scrollWidth + 100, C.l !== M ? (C.l = M, !0) : !1
        }

        function c(C, M) {
            function L() {
                var le = ee;
                r(le) && le.g.parentNode !== null && M(le.l)
            }
            var ee = C;
            B(C.h, L), B(C.i, L), r(C)
        }

        function d(C, M, L) {
            M = M || {}, L = L || window, this.family = C, this.style = M.style || "normal", this.weight = M.weight || "normal", this.stretch = M.stretch || "normal", this.context = L
        }
        var g = null,
            x = null,
            P = null,
            q = null;

        function O(C) {
            return x === null && (V(C) && /Apple/.test(window.navigator.vendor) ? (C = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), x = !!C && 603 > parseInt(C[1], 10)) : x = !1), x
        }

        function V(C) {
            return q === null && (q = !!C.document.fonts), q
        }

        function N(C, M) {
            var L = C.style,
                ee = C.weight;
            if (P === null) {
                var le = document.createElement("div");
                try {
                    le.style.font = "condensed 100px sans-serif"
                } catch {}
                P = le.style.font !== ""
            }
            return [L, ee, P ? C.stretch : "", "100px", M].join(" ")
        }
        d.prototype.load = function(C, M) {
            var L = this,
                ee = C || "BESbswy",
                le = 0,
                ve = M || 3e3,
                Le = new Date().getTime();
            return new Promise(function(s, We) {
                if (V(L.context) && !O(L.context)) {
                    var oe = new Promise(function(Ee, W) {
                            function H() {
                                new Date().getTime() - Le >= ve ? W(Error("" + ve + "ms timeout exceeded")) : L.context.document.fonts.load(N(L, '"' + L.family + '"'), ee).then(function(Z) {
                                    1 <= Z.length ? Ee() : setTimeout(H, 25)
                                }, W)
                            }
                            H()
                        }),
                        Se = new Promise(function(Ee, W) {
                            le = setTimeout(function() {
                                W(Error("" + ve + "ms timeout exceeded"))
                            }, ve)
                        });
                    Promise.race([Se, oe]).then(function() {
                        clearTimeout(le), s(L)
                    }, We)
                } else k(function() {
                    function Ee() {
                        var ce;
                        (ce = fe != -1 && be != -1 || fe != -1 && xe != -1 || be != -1 && xe != -1) && ((ce = fe != be && fe != xe && be != xe) || (g === null && (ce = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), g = !!ce && (536 > parseInt(ce[1], 10) || parseInt(ce[1], 10) === 536 && 11 >= parseInt(ce[2], 10))), ce = g && (fe == He && be == He && xe == He || fe == qe && be == qe && xe == qe || fe == Ve && be == Ve && xe == Ve)), ce = !ce), ce && (ge.parentNode !== null && ge.parentNode.removeChild(ge), clearTimeout(le), s(L))
                    }

                    function W() {
                        if (new Date().getTime() - Le >= ve) ge.parentNode !== null && ge.parentNode.removeChild(ge), We(Error("" + ve + "ms timeout exceeded"));
                        else {
                            var ce = L.context.document.hidden;
                            (ce === !0 || ce === void 0) && (fe = H.g.offsetWidth, be = Z.g.offsetWidth, xe = U.g.offsetWidth, Ee()), le = setTimeout(W, 50)
                        }
                    }
                    var H = new T(ee),
                        Z = new T(ee),
                        U = new T(ee),
                        fe = -1,
                        be = -1,
                        xe = -1,
                        He = -1,
                        qe = -1,
                        Ve = -1,
                        ge = document.createElement("div");
                    ge.dir = "ltr", i(H, N(L, "sans-serif")), i(Z, N(L, "serif")), i(U, N(L, "monospace")), ge.appendChild(H.g), ge.appendChild(Z.g), ge.appendChild(U.g), L.context.document.body.appendChild(ge), He = H.g.offsetWidth, qe = Z.g.offsetWidth, Ve = U.g.offsetWidth, W(), c(H, function(ce) {
                        fe = ce, Ee()
                    }), i(H, N(L, '"' + L.family + '",sans-serif')), c(Z, function(ce) {
                        be = ce, Ee()
                    }), i(Z, N(L, '"' + L.family + '",serif')), c(U, function(ce) {
                        xe = ce, Ee()
                    }), i(U, N(L, '"' + L.family + '",monospace'))
                })
            })
        }, ie.exports = d
    }()
})(vr);
const yr = gi;
gr.init();
const mr = new yr("Poppins");
Promise.all([mr.load()]).then(function() {
    console.log("Family A have loaded")
});
ae(".slider").slick({
    dots: !1,
    autoplay: !0,
    infinite: !0,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".slide-prev",
    nextArrow: ".slide-next",
    adaptiveHeight: !0,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: !0,
            dots: !0
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
ae(".packages").slick({
    dots: !1,
    autoplay: !0,
    infinite: !0,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".slide-prev3",
    nextArrow: ".slide-next3",
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: !0,
            dots: !0
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2
        }
    }]
});
// ae(".slider2").slick({
//     infinite: !0,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: !0,
//     prevArrow: ".slide-prev2",
//     nextArrow: ".slide-next2"
// });



ae(".testimonials").slick({
  dots: !0,
  infinite: !0,
  speed: 900,
  arrows: !1,
  autoplay: !1,
  autoplaySpeed: 1e3,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider2',
  adaptiveHeight: !0

});
ae(".slider2").slick({
  dots: !1,
  infinite: !0,
  speed: 900,
  arrows: !1,
  autoplay: !1,
  fade: !0,
  autoplaySpeed: 1e3,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.testimonials',
  adaptiveHeight: !0

});

ae(".step-slide").slick({
    dots: !0,
    infinite: !0,
    speed: 900,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 9e3,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: !0,
    responsive: [{
        breakpoint: 6e3,
        settings: "unslick"
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 580,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
ae(".cards-list").slick({
    dots: !0,
    infinite: !0,
    speed: 900,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 9e3,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 6e3,
        settings: "unslick"
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
ae(".popupToggler").click(function(ie) {
    ie.preventDefault(), ae(".popup-wrap").toggleClass("active")
});
ae(".faq-btn").click(function() {
    ae(this).parents(".faq").hasClass("active") ? (ae(this).parents(".faq").removeClass("active"), ae(".faq-content").slideUp()) : (ae(".faq-content").slideUp(), ae(".faq").removeClass("active"), ae(this).parents(".faq").addClass("active"), ae(this).parents(".faq").find(".faq-content").slideDown())
});
ae(".packs-area .popupToggler").click(function() {
    let ie = ae(this).data("value");
    console.log(ie), ae("#packageName").val(ie)
});
ae(".confirmToggler").click(function() {
    ae(".confirm-pop").removeClass("active")
});
const br = new Proxy(new URLSearchParams(window.location.search), {
    get: (ie, B) => ie.get(B)
});
let pi = br.status;
if (pi) {
    if (ae(".confirm-pop").addClass("active"), pi == "success") {
        ae("#confirmation").addClass("active"), ae(".checked-confirm").show();
        let ie = ae("#confirmText").data("succes");
        ae("#confirmText").html(ie)
    } else if (pi == "error") {
        ae(".cancel-confirm").show();
        let ie = ae("#confirmText").data("cancel");
        ae("#confirmText").html(ie)
    }
}
let wr = window.location.host + window.location.pathname;
ae(".url").val(wr);
ae(".packages .popupToggler").click(function(ie) {
    ie.preventDefault();
    let B = ae(this).closest(".package-box").find(".title").text(),
        k = ae("#packageName").val(B);
    console.log(k.val())
});