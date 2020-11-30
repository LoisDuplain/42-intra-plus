var app = function() {
    "use strict";

    function t(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = e, t
    }

    function e(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            n && (o = o.filter((function(n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable
            }))), e.push.apply(e, o)
        }
        return e
    }

    function o(t) {
        for (var o = 1; o < arguments.length; o++) {
            var r = null != arguments[o] ? arguments[o] : {};
            o % 2 ? e(Object(r), !0).forEach((function(e) {
                n(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
            }))
        }
        return t
    }

    function r(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), n && a(t, n)
    }

    function i(t) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function a(t, n) {
        return (a = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n, t
        })(t, n)
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function s(t, n) {
        return !n || "object" != typeof n && "function" != typeof n ? l(t) : n
    }

    function c(t) {
        var n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var e, o = i(t);
            if (n) {
                var r = i(this).constructor;
                e = Reflect.construct(o, arguments, r)
            } else e = o.apply(this, arguments);
            return s(this, e)
        }
    }

    function u(t, n) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, n) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var e = [],
                o = !0,
                r = !1,
                i = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(o = (a = l.next()).done) && (e.push(a.value), !n || e.length !== n); o = !0);
            } catch (t) {
                r = !0, i = t
            } finally {
                try {
                    o || null == l.return || l.return()
                } finally {
                    if (r) throw i
                }
            }
            return e
        }(t, n) || f(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t) {
        return function(t) {
            if (Array.isArray(t)) return v(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || f(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(t, n) {
        if (t) {
            if ("string" == typeof t) return v(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? v(t, n) : void 0
        }
    }

    function v(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e];
        return o
    }

    function h(t, n) {
        var e;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (e = f(t)) || n && t && "number" == typeof t.length) {
                e && (t = e);
                var o = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function() {
                        return o >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[o++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            l = !1;
        return {
            s: function() {
                e = t[Symbol.iterator]()
            },
            n: function() {
                var t = e.next();
                return a = t.done, t
            },
            e: function(t) {
                l = !0, i = t
            },
            f: function() {
                try {
                    a || null == e.return || e.return()
                } finally {
                    if (l) throw i
                }
            }
        }
    }

    function p() {}

    function m(t, n) {
        for (const e in n) t[e] = n[e];
        return t
    }

    function g(t) {
        return t()
    }

    function y() {
        return Object.create(null)
    }

    function b(t) {
        t.forEach(g)
    }

    function w(t) {
        return "function" == typeof t
    }

    function $(t, n) {
        return t != t ? n == n : t !== n || t && "object" == typeof t || "function" == typeof t
    }

    function _(t, ...n) {
        if (null == t) return p;
        const e = t.subscribe(...n);
        return e.unsubscribe ? () => e.unsubscribe() : e
    }

    function x(t, n, e) {
        t.$$.on_destroy.push(_(n, e))
    }

    function k(t) {
        return null == t ? "" : t
    }

    function M(t) {
        return t && w(t.destroy) ? t.destroy : p
    }

    function D(t, n) {
        t.appendChild(n)
    }

    function S(t, n, e) {
        t.insertBefore(n, e || null)
    }

    function C(t) {
        t.parentNode.removeChild(t)
    }

    function O(t, n) {
        for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n)
    }

    function j(t) {
        return document.createElement(t)
    }

    function E(t) {
        return document.createTextNode(t)
    }

    function A() {
        return E(" ")
    }

    function z() {
        return E("")
    }

    function H(t, n, e, o) {
        return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o)
    }

    function Y(t, n, e) {
        null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e)
    }

    function L(t, n) {
        n = "" + n, t.wholeText !== n && (t.data = n)
    }

    function T(t, n) {
        t.value = null == n ? "" : n
    }

    function I(t, n, e, o) {
        t.style.setProperty(n, e, o ? "important" : "")
    }

    function P(t, n, e) {
        t.classList[e ? "add" : "remove"](n)
    }
    let F;

    function R(t) {
        F = t
    }

    function q() {
        if (!F) throw new Error("Function called outside component initialization");
        return F
    }

    function B(t) {
        q().$$.on_mount.push(t)
    }

    function N(t) {
        q().$$.on_destroy.push(t)
    }

    function W() {
        const t = q();
        return (n, e) => {
            const o = t.$$.callbacks[n];
            if (o) {
                const r = function(t, n) {
                    const e = document.createEvent("CustomEvent");
                    return e.initCustomEvent(t, !1, !1, n), e
                }(n, e);
                o.slice().forEach((n => {
                    n.call(t, r)
                }))
            }
        }
    }

    function X(t, n) {
        const e = t.$$.callbacks[n.type];
        e && e.slice().forEach((t => t(n)))
    }
    const U = [],
        J = [],
        V = [],
        Z = [],
        G = Promise.resolve();
    let Q = !1;

    function K() {
        Q || (Q = !0, G.then(rt))
    }

    function tt() {
        return K(), G
    }

    function nt(t) {
        V.push(t)
    }
    let et = !1;
    const ot = new Set;

    function rt() {
        if (!et) {
            et = !0;
            do {
                for (let t = 0; t < U.length; t += 1) {
                    const n = U[t];
                    R(n), it(n.$$)
                }
                for (R(null), U.length = 0; J.length;) J.pop()();
                for (let t = 0; t < V.length; t += 1) {
                    const n = V[t];
                    ot.has(n) || (ot.add(n), n())
                }
                V.length = 0
            } while (U.length);
            for (; Z.length;) Z.pop()();
            Q = !1, et = !1, ot.clear()
        }
    }

    function it(t) {
        if (null !== t.fragment) {
            t.update(), b(t.before_update);
            const n = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(nt)
        }
    }
    const at = new Set;
    let lt;

    function st() {
        lt = {
            r: 0,
            c: [],
            p: lt
        }
    }

    function ct() {
        lt.r || b(lt.c), lt = lt.p
    }

    function ut(t, n) {
        t && t.i && (at.delete(t), t.i(n))
    }

    function dt(t, n, e, o) {
        if (t && t.o) {
            if (at.has(t)) return;
            at.add(t), lt.c.push((() => {
                at.delete(t), o && (e && t.d(1), o())
            })), t.o(n)
        }
    }
    const ft = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;

    function vt(t, n) {
        const e = {},
            o = {},
            r = {
                $$scope: 1
            };
        let i = t.length;
        for (; i--;) {
            const a = t[i],
                l = n[i];
            if (l) {
                for (const t in a) t in l || (o[t] = 1);
                for (const t in l) r[t] || (e[t] = l[t], r[t] = 1);
                t[i] = l
            } else
                for (const t in a) r[t] = 1
        }
        for (const t in o) t in e || (e[t] = void 0);
        return e
    }

    function ht(t) {
        return "object" == typeof t && null !== t ? t : {}
    }

    function pt(t) {
        t && t.c()
    }

    function mt(t, n, e) {
        const {
            fragment: o,
            on_mount: r,
            on_destroy: i,
            after_update: a
        } = t.$$;
        o && o.m(n, e), nt((() => {
            const n = r.map(g).filter(w);
            i ? i.push(...n) : b(n), t.$$.on_mount = []
        })), a.forEach(nt)
    }

    function gt(t, n) {
        const e = t.$$;
        null !== e.fragment && (b(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx = [])
    }

    function yt(t, n, e, o, r, i, a = [-1]) {
        const l = F;
        R(t);
        const s = n.props || {},
            c = t.$$ = {
                fragment: null,
                ctx: null,
                props: i,
                update: p,
                not_equal: r,
                bound: y(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(l ? l.$$.context : []),
                callbacks: y(),
                dirty: a,
                skip_bound: !1
            };
        let u = !1;
        if (c.ctx = e ? e(t, s, ((n, e, ...o) => {
                const i = o.length ? o[0] : e;
                return c.ctx && r(c.ctx[n], c.ctx[n] = i) && (!c.skip_bound && c.bound[n] && c.bound[n](i), u && function(t, n) {
                    -1 === t.$$.dirty[0] && (U.push(t), K(), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31
                }(t, n)), e
            })) : [], c.update(), u = !0, b(c.before_update), c.fragment = !!o && o(c.ctx), n.target) {
            if (n.hydrate) {
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(n.target);
                c.fragment && c.fragment.l(t), t.forEach(C)
            } else c.fragment && c.fragment.c();
            n.intro && ut(t.$$.fragment), mt(t, n.target, n.anchor), rt()
        }
        R(l)
    }
    class bt {
        $destroy() {
            gt(this, 1), this.$destroy = p
        }
        $on(t, n) {
            const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return e.push(n), () => {
                const t = e.indexOf(n); - 1 !== t && e.splice(t, 1)
            }
        }
        $set(t) {
            var n;
            this.$$set && (n = t, 0 !== Object.keys(n).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
        }
    }
    const wt = [];

    function $t(t, n) {
        return {
            subscribe: _t(t, n).subscribe
        }
    }

    function _t(t, n = p) {
        let e;
        const o = [];

        function r(n) {
            if ($(t, n) && (t = n, e)) {
                const n = !wt.length;
                for (let n = 0; n < o.length; n += 1) {
                    const e = o[n];
                    e[1](), wt.push(e, t)
                }
                if (n) {
                    for (let t = 0; t < wt.length; t += 2) wt[t][0](wt[t + 1]);
                    wt.length = 0
                }
            }
        }
        return {
            set: r,
            update: function(n) {
                r(n(t))
            },
            subscribe: function(i, a = p) {
                const l = [i, a];
                return o.push(l), 1 === o.length && (e = n(r) || p), i(t), () => {
                    const t = o.indexOf(l); - 1 !== t && o.splice(t, 1), 0 === o.length && (e(), e = null)
                }
            }
        }
    }

    function xt(t, n, e) {
        const o = !Array.isArray(t),
            r = o ? [t] : t,
            i = n.length < 2;
        return $t(e, (t => {
            let e = !1;
            const a = [];
            let l = 0,
                s = p;
            const c = () => {
                    if (l) return;
                    s();
                    const e = n(o ? a[0] : a, t);
                    i ? t(e) : s = w(e) ? e : p
                },
                u = r.map(((t, n) => _(t, (t => {
                    a[n] = t, l &= ~(1 << n), e && c()
                }), (() => {
                    l |= 1 << n
                }))));
            return e = !0, c(),
                function() {
                    b(u), s()
                }
        }))
    }
    var kt = _t({
            type: null
        }),
        Mt = _t({
            type: null
        }),
        Dt = _t({
            logged: !1,
            state: !1
        }),
        St = _t({
            login: null,
            image: null
        }),
        Ct = io("localhost" === window.location.hostname ? "localhost:5666" : "/");

    function Ot(t) {
        if (!t) throw Error("Parameter args is required");
        if (!t.component == !t.asyncComponent) throw Error("One and only one of component and asyncComponent is required");
        if (t.component && (t.asyncComponent = () => Promise.resolve(t.component)), "function" != typeof t.asyncComponent) throw Error("Parameter asyncComponent must be a function");
        if (t.conditions) {
            Array.isArray(t.conditions) || (t.conditions = [t.conditions]);
            for (let n = 0; n < t.conditions.length; n++)
                if (!t.conditions[n] || "function" != typeof t.conditions[n]) throw Error("Invalid parameter conditions[" + n + "]")
        }
        t.loadingComponent && (t.asyncComponent.loading = t.loadingComponent, t.asyncComponent.loadingParams = t.loadingParams || void 0);
        return {
            component: t.asyncComponent,
            userData: t.userData,
            conditions: t.conditions && t.conditions.length ? t.conditions : void 0,
            props: t.props && Object.keys(t.props).length ? t.props : {},
            _sveltesparouter: !0
        }
    }

    function jt(t, n) {
        if (t instanceof RegExp) return {
            keys: !1,
            pattern: t
        };
        var e, o, r, i, a = [],
            l = "",
            s = t.split("/");
        for (s[0] || s.shift(); r = s.shift();) "*" === (e = r[0]) ? (a.push("wild"), l += "/(.*)") : ":" === e ? (o = r.indexOf("?", 1), i = r.indexOf(".", 1), a.push(r.substring(1, ~o ? o : ~i ? i : r.length)), l += ~o && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)", ~i && (l += (~o ? "?" : "") + "\\" + r.substring(i))) : l += "/" + r;
        return {
            keys: a,
            pattern: new RegExp("^" + l + (n ? "(?=$|/)" : "/?$"), "i")
        }
    }

    function Et(t) {
        let n, e, o;
        const r = [t[2]];
        var i = t[0];

        function a(t) {
            let n = {};
            for (let t = 0; t < r.length; t += 1) n = m(n, r[t]);
            return {
                props: n
            }
        }
        return i && (n = new i(a()), n.$on("routeEvent", t[7])), {
            c() {
                n && pt(n.$$.fragment), e = z()
            },
            m(t, r) {
                n && mt(n, t, r), S(t, e, r), o = !0
            },
            p(t, o) {
                const l = 4 & o ? vt(r, [ht(t[2])]) : {};
                if (i !== (i = t[0])) {
                    if (n) {
                        st();
                        const t = n;
                        dt(t.$$.fragment, 1, 0, (() => {
                            gt(t, 1)
                        })), ct()
                    }
                    i ? (n = new i(a()), n.$on("routeEvent", t[7]), pt(n.$$.fragment), ut(n.$$.fragment, 1), mt(n, e.parentNode, e)) : n = null
                } else i && n.$set(l)
            },
            i(t) {
                o || (n && ut(n.$$.fragment, t), o = !0)
            },
            o(t) {
                n && dt(n.$$.fragment, t), o = !1
            },
            d(t) {
                t && C(e), n && gt(n, t)
            }
        }
    }

    function At(t) {
        let n, e, o;
        const r = [{
            params: t[1]
        }, t[2]];
        var i = t[0];

        function a(t) {
            let n = {};
            for (let t = 0; t < r.length; t += 1) n = m(n, r[t]);
            return {
                props: n
            }
        }
        return i && (n = new i(a()), n.$on("routeEvent", t[6])), {
            c() {
                n && pt(n.$$.fragment), e = z()
            },
            m(t, r) {
                n && mt(n, t, r), S(t, e, r), o = !0
            },
            p(t, o) {
                const l = 6 & o ? vt(r, [2 & o && {
                    params: t[1]
                }, 4 & o && ht(t[2])]) : {};
                if (i !== (i = t[0])) {
                    if (n) {
                        st();
                        const t = n;
                        dt(t.$$.fragment, 1, 0, (() => {
                            gt(t, 1)
                        })), ct()
                    }
                    i ? (n = new i(a()), n.$on("routeEvent", t[6]), pt(n.$$.fragment), ut(n.$$.fragment, 1), mt(n, e.parentNode, e)) : n = null
                } else i && n.$set(l)
            },
            i(t) {
                o || (n && ut(n.$$.fragment, t), o = !0)
            },
            o(t) {
                n && dt(n.$$.fragment, t), o = !1
            },
            d(t) {
                t && C(e), n && gt(n, t)
            }
        }
    }

    function zt(t) {
        let n, e, o, r;
        const i = [At, Et],
            a = [];

        function l(t, n) {
            return t[1] ? 0 : 1
        }
        return n = l(t), e = a[n] = i[n](t), {
            c() {
                e.c(), o = z()
            },
            m(t, e) {
                a[n].m(t, e), S(t, o, e), r = !0
            },
            p(t, [r]) {
                let s = n;
                n = l(t), n === s ? a[n].p(t, r) : (st(), dt(a[s], 1, 1, (() => {
                    a[s] = null
                })), ct(), e = a[n], e ? e.p(t, r) : (e = a[n] = i[n](t), e.c()), ut(e, 1), e.m(o.parentNode, o))
            },
            i(t) {
                r || (ut(e), r = !0)
            },
            o(t) {
                dt(e), r = !1
            },
            d(t) {
                a[n].d(t), t && C(o)
            }
        }
    }

    function Ht() {
        const t = window.location.href.indexOf("#/");
        let n = t > -1 ? window.location.href.substr(t + 1) : "/";
        const e = n.indexOf("?");
        let o = "";
        return e > -1 && (o = n.substr(e + 1), n = n.substr(0, e)), {
            location: n,
            querystring: o
        }
    }
    const Yt = $t(null, (function(t) {
        t(Ht());
        const n = () => {
            t(Ht())
        };
        return window.addEventListener("hashchange", n, !1),
            function() {
                window.removeEventListener("hashchange", n, !1)
            }
    }));
    xt(Yt, (t => t.location)), xt(Yt, (t => t.querystring));
    async function Lt(t) {
        if (!t || t.length < 1 || "/" != t.charAt(0) && 0 !== t.indexOf("#/")) throw Error("Invalid parameter location");
        await tt(), history.replaceState({
            scrollX: window.scrollX,
            scrollY: window.scrollY
        }, void 0, void 0), window.location.hash = ("#" == t.charAt(0) ? "" : "#") + t
    }

    function Tt(t, n) {
        if (!t || !t.tagName || "a" != t.tagName.toLowerCase()) throw Error('Action "link" can only be used with <a> tags');
        return It(t, n || t.getAttribute("href")), {
            update(n) {
                It(t, n)
            }
        }
    }

    function It(t, n) {
        if (!n || n.length < 1 || "/" != n.charAt(0)) throw Error('Invalid value for "href" attribute: ' + n);
        t.setAttribute("href", "#" + n), t.addEventListener("click", Pt)
    }

    function Pt(t) {
        t.preventDefault();
        const n = t.currentTarget.getAttribute("href");
        history.replaceState({
            scrollX: window.scrollX,
            scrollY: window.scrollY
        }, void 0, void 0), window.location.hash = n
    }

    function Ft(t, n, e) {
        let {
            routes: o = {}
        } = n, {
            prefix: r = ""
        } = n, {
            restoreScrollState: i = !1
        } = n;
        class a {
            constructor(t, n) {
                if (!n || "function" != typeof n && ("object" != typeof n || !0 !== n._sveltesparouter)) throw Error("Invalid component object");
                if (!t || "string" == typeof t && (t.length < 1 || "/" != t.charAt(0) && "*" != t.charAt(0)) || "object" == typeof t && !(t instanceof RegExp)) throw Error('Invalid value for "path" argument');
                const {
                    pattern: e,
                    keys: o
                } = jt(t);
                this.path = t, "object" == typeof n && !0 === n._sveltesparouter ? (this.component = n.component, this.conditions = n.conditions || [], this.userData = n.userData, this.props = n.props || {}) : (this.component = () => Promise.resolve(n), this.conditions = [], this.props = {}), this._pattern = e, this._keys = o
            }
            match(t) {
                if (r)
                    if ("string" == typeof r && t.startsWith(r)) t = t.substr(r.length) || "/";
                    else if (r instanceof RegExp) {
                    const n = t.match(r);
                    n && n[0] && (t = t.substr(n[0].length) || "/")
                }
                const n = this._pattern.exec(t);
                if (null === n) return null;
                if (!1 === this._keys) return n;
                const e = {};
                let o = 0;
                for (; o < this._keys.length;) {
                    try {
                        e[this._keys[o]] = decodeURIComponent(n[o + 1] || "") || null
                    } catch (t) {
                        e[this._keys[o]] = null
                    }
                    o++
                }
                return e
            }
            async checkConditions(t) {
                for (let n = 0; n < this.conditions.length; n++)
                    if (!await this.conditions[n](t)) return !1;
                return !0
            }
        }
        const l = [];
        o instanceof Map ? o.forEach(((t, n) => {
            l.push(new a(n, t))
        })) : Object.keys(o).forEach((t => {
            l.push(new a(t, o[t]))
        }));
        let s = null,
            c = null,
            u = {};
        const d = W();
        async function f(t, n) {
            await tt(), d(t, n)
        }
        let v = null;
        var h;
        i && (window.addEventListener("popstate", (t => {
            v = t.state && t.state.scrollY ? t.state : null
        })), h = () => {
            v ? window.scrollTo(v.scrollX, v.scrollY) : window.scrollTo(0, 0)
        }, q().$$.after_update.push(h));
        let p = null,
            m = null;
        return Yt.subscribe((async t => {
            p = t;
            let n = 0;
            for (; n < l.length;) {
                const o = l[n].match(t.location);
                if (!o) {
                    n++;
                    continue
                }
                const r = {
                    route: l[n].path,
                    location: t.location,
                    querystring: t.querystring,
                    userData: l[n].userData
                };
                if (!await l[n].checkConditions(r)) return e(0, s = null), m = null, void f("conditionsFailed", r);
                f("routeLoading", Object.assign({}, r));
                const i = l[n].component;
                if (m != i) {
                    i.loading ? (e(0, s = i.loading), m = i, e(1, c = i.loadingParams), e(2, u = {}), f("routeLoaded", Object.assign({}, r, {
                        component: s,
                        name: s.name
                    }))) : (e(0, s = null), m = null);
                    const n = await i();
                    if (t != p) return;
                    e(0, s = n && n.default || n), m = i
                }
                return o && "object" == typeof o && Object.keys(o).length ? e(1, c = o) : e(1, c = null), e(2, u = l[n].props), void f("routeLoaded", Object.assign({}, r, {
                    component: s,
                    name: s.name
                }))
            }
            e(0, s = null), m = null
        })), t.$$set = t => {
            "routes" in t && e(3, o = t.routes), "prefix" in t && e(4, r = t.prefix), "restoreScrollState" in t && e(5, i = t.restoreScrollState)
        }, t.$$.update = () => {
            32 & t.$$.dirty && (history.scrollRestoration = i ? "manual" : "auto")
        }, [s, c, u, o, r, i, function(n) {
            X(t, n)
        }, function(n) {
            X(t, n)
        }]
    }
    class Rt extends bt {
        constructor(t) {
            super(), yt(this, t, Ft, zt, $, {
                routes: 3,
                prefix: 4,
                restoreScrollState: 5
            })
        }
    }
    var qt = "a7e0b684ba0ecc7ebf9612cce059142b1fe5aac4ac82d7d3092ce475f08c2e75",
        Bt = "https://matrix-charbo.42lyon.fr",
        Nt = ft.window;

    function Wt(t) {
        var n, e, o, r, i, a, l;

        function s(t, n) {
            return t[2] ? Jt : Ut
        }
        var c = s(t),
            u = c(t);
        return {
            c: function() {
                n = j("div"), e = j("div"), (o = j("div")).innerHTML = '<img src="assets/42_Logo.svg" alt=""/>', r = A(), i = j("button"), u.c(), Y(o, "class", "logo svelte-1a2w5x3"), Y(i, "type", "button"), Y(i, "class", "login svelte-1a2w5x3"), i.disabled = t[2], Y(e, "class", "container svelte-1a2w5x3"), P(e, "disapear", t[4]), Y(n, "class", "background-login svelte-1a2w5x3")
            },
            m: function(s, c) {
                S(s, n, c), D(n, e), D(e, o), D(e, r), D(e, i), u.m(i, null), a || (l = H(i, "click", t[6]), a = !0)
            },
            p: function(t, n) {
                c === (c = s(t)) && u ? u.p(t, n) : (u.d(1), (u = c(t)) && (u.c(), u.m(i, null))), 4 & n && (i.disabled = t[2]), 16 & n && P(e, "disapear", t[4])
            },
            d: function(t) {
                t && C(n), u.d(), a = !1, l()
            }
        }
    }

    function Xt(t) {
        var n, e, o, r, i, a, l, s, c;
        return {
            c: function() {
                n = j("div"), e = j("div"), (o = j("div")).innerHTML = '<img src="assets/42_Logo.svg" alt=""/>', r = A(), i = j("div"), a = A(), (l = j("button")).textContent = "close", Y(o, "class", "logo svelte-1a2w5x3"), Y(i, "class", "loader svelte-1a2w5x3"), Y(l, "class", "close-btn svelte-1a2w5x3"), Y(l, "type", "button"), Y(e, "class", "container svelte-1a2w5x3"), Y(n, "class", "background-login svelte-1a2w5x3")
            },
            m: function(u, d) {
                S(u, n, d), D(n, e), D(e, o), D(e, r), D(e, i), D(e, a), D(e, l), t[8](l), s || (c = H(l, "click", t[9]), s = !0)
            },
            p: p,
            d: function(e) {
                e && C(n), t[8](null), s = !1, c()
            }
        }
    }

    function Ut(t) {
        var n;
        return {
            c: function() {
                n = E("login")
            },
            m: function(t, e) {
                S(t, n, e)
            },
            p: p,
            d: function(t) {
                t && C(n)
            }
        }
    }

    function Jt(t) {
        var n, e;
        return {
            c: function() {
                n = j("div"), Y(e = j("div"), "class", "bar svelte-1a2w5x3"), I(e, "width", t[1] + "%"), Y(n, "class", "bar-login svelte-1a2w5x3")
            },
            m: function(t, o) {
                S(t, n, o), D(n, e)
            },
            p: function(t, n) {
                2 & n && I(e, "width", t[1] + "%")
            },
            d: function(t) {
                t && C(n)
            }
        }
    }

    function Vt(t) {
        var n, e, o;
        var r = function(t, n) {
            return t[3] ? Xt : Wt
        }(t)(t);
        return {
            c: function() {
                r.c(), n = z()
            },
            m: function(i, a) {
                r.m(i, a), S(i, n, a), e || (o = H(Nt, "keydown", t[5]), e = !0)
            },
            p: function(t, n) {
                var e = u(n, 1)[0];
                r.p(t, e)
            },
            i: p,
            o: p,
            d: function(t) {
                r.d(t), t && C(n), e = !1, o()
            }
        }
    }

    function Zt(t, n, e) {
        var r, i = window.location.href,
            a = i.includes("?code="),
            l = 0,
            s = !1;

        function c() {
            a || (e(1, l = 100), setTimeout((function() {
                document.querySelector(".container").style.opacity = "0", document.querySelector(".container").style.transform = "scale(.8)", setTimeout((function() {
                    Dt.update((function(t) {
                        return o(o({}, t), {}, {
                            logged: !0
                        })
                    }))
                }), 350)
            }), 500))
        }

        function u(t) {
            e(2, s = !1), document.cookies = "", window.localStorage.clear(), window.location.reload(!0)
        }
        window.localStorage.getItem("jwt") && (s = !0), kt.subscribe((function(t) {
            switch (t.type) {
                case "auth_success":
                    n = t, window.localStorage.setItem("jwt", n.jwt), a ? (window.close(), setTimeout((function() {
                        e(0, r.style.opacity = "1", r)
                    }), 200)) : c(), e(2, s = !0);
                    break;
                case "jwt_success":
                    ! function(t) {
                        try {
                            console.log("âœ… JWT Success"), console.log("Welcome back, ".concat(t.data.login, "."))
                        } catch (t) {
                            console.error(t), u()
                        }
                        c()
                    }(t), e(2, s = !0);
                    break;
                case "jwt_error":
                    u();
                    break;
                case "queued":
                    ! function(t) {
                        e(1, l = t.step / 3 * 100), e(2, s = !0), console.log("Your authentification is in progress...", t.step + "/2")
                    }(t), e(2, s = !0);
                    break;
                case "error":
                    u()
            }
            var n
        }));
        var d = !1;

        function f() {
            var t = Bt,
                n = "https://api.intra.42.fr/oauth/authorize?client_id=".concat(qt, "&redirect_uri=").concat(t, "&response_type=code\n\t\t");
            window.open(n, "42 Authentication", "status=no, scrollbars=no, menubar=no, height=500, width=400")
        }
        B((function() {
            if (e(7, d = !0), a) {
                var t = Object.fromEntries(i.split("?")[1].split("?").map((function(t) {
                    return t.split("=")
                })));
                console.log(t), t.code && Ct.emit("authentication", {
                    type: "code",
                    code: t.code
                })
            }
            window.localStorage.getItem("jwt")
        }));
        return t.$$.update = function() {
            t.$$.dirty
        }, [r, l, s, a, undefined, function(t) {
            "Enter" === (null == t ? void 0 : t.key) && f()
        }, f, d, function(t) {
            J[t ? "unshift" : "push"]((function() {
                e(0, r = t)
            }))
        }, function() {
            return window.close()
        }]
    }
    var Gt = function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, Zt, Vt, $, {}), r
        }
        return o
    }(bt);
    const Qt = [];
    let Kt;

    function tn(t) {
        (t.className || "").split(" ").forEach((n => {
            n && (t.node.classList.remove(n), t.pattern.test(Kt) && t.node.classList.add(n))
        }))
    }

    function nn(t, n) {
        if (!(n = n && ("string" == typeof n || "object" == typeof n && n instanceof RegExp) ? {
                path: n
            } : n || {}).path && t.hasAttribute("href") && (n.path = t.getAttribute("href"), n.path && n.path.length > 1 && "#" == n.path.charAt(0) && (n.path = n.path.substring(1))), n.className || (n.className = "active"), !n.path || "string" == typeof n.path && (n.path.length < 1 || "/" != n.path.charAt(0) && "*" != n.path.charAt(0))) throw Error('Invalid value for "path" argument');
        const {
            pattern: e
        } = "string" == typeof n.path ? jt(n.path) : {
            pattern: n.path
        }, o = {
            node: t,
            className: n.className,
            pattern: e
        };
        return Qt.push(o), tn(o), {
            destroy() {
                Qt.splice(Qt.indexOf(o), 1)
            }
        }
    }

    function en(t) {
        var n, e, o, r, i, a, l, s, c, d, f, v, h, m, g, y, w;
        return {
            c: function() {
                n = j("div"), e = j("div"), (o = j("a")).innerHTML = '<div class="icon svelte-g273cx"><i class="fas fa-users svelte-g273cx"></i></div>', r = A(), (i = j("a")).innerHTML = '<div class="icon svelte-g273cx"><i class="fas fa-sort-numeric-up svelte-g273cx"></i></div>', a = A(), (l = j("a")).innerHTML = '<div class="icon svelte-g273cx"><i class="fas fa-chart-area svelte-g273cx"></i></div>', s = A(), (c = j("div")).innerHTML = '<div class="icon svelte-g273cx"></div>', d = A(), (f = j("div")).innerHTML = '<div class="icon svelte-g273cx"></div>', v = A(), h = j("div"), m = j("a"), g = E("Â "), Y(o, "href", "/"), Y(o, "class", "item svelte-g273cx"), Y(i, "href", "/ranking"), Y(i, "class", "item svelte-g273cx"), Y(l, "class", "item svelte-g273cx"), Y(l, "href", "/online-stats"), Y(c, "class", "item svelte-g273cx"), Y(f, "class", "item svelte-g273cx"), Y(e, "class", "menu svelte-g273cx"), Y(m, "class", "avatar svelte-g273cx"), I(m, "background-image", "url('" + t[0].image_url + "')"), Y(m, "href", "/profile"), Y(h, "class", "account svelte-g273cx"), Y(n, "class", "appbar svelte-g273cx")
            },
            m: function(t, u) {
                S(t, n, u), D(n, e), D(e, o), D(e, r), D(e, i), D(e, a), D(e, l), D(e, s), D(e, c), D(e, d), D(e, f), D(n, v), D(n, h), D(h, m), D(m, g), y || (w = [M(Tt.call(null, o)), M(nn.call(null, o)), M(Tt.call(null, i)), M(nn.call(null, i, {
                    path: /ranking\/?.*/
                })), M(Tt.call(null, l)), M(nn.call(null, l)), M(Tt.call(null, m)), M(nn.call(null, m))], y = !0)
            },
            p: function(t, n) {
                1 & u(n, 1)[0] && I(m, "background-image", "url('" + t[0].image_url + "')")
            },
            i: p,
            o: p,
            d: function(t) {
                t && C(n), y = !1, b(w)
            }
        }
    }

    function on(t, n, e) {
        var o;
        return x(t, St, (function(t) {
            return e(0, o = t)
        })), [o]
    }
    Yt.subscribe((t => {
        Kt = t.location + (t.querystring ? "?" + t.querystring : ""), Qt.map(tn)
    }));
    var rn = function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, on, en, $, {}), r
        }
        return o
    }(bt);
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function an(t, n, e) {
        return t(e = {
            path: n,
            exports: {},
            require: function(t, n) {
                return function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == n && e.path)
            }
        }, e.exports), e.exports
    }
    var ln = an((function(t, n) {
            t.exports = function() {
                var t = "millisecond",
                    n = "second",
                    e = "minute",
                    o = "hour",
                    r = "day",
                    i = "week",
                    a = "month",
                    l = "quarter",
                    s = "year",
                    c = "date",
                    u = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
                    d = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    f = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                    },
                    v = function(t, n, e) {
                        var o = String(t);
                        return !o || o.length >= n ? t : "" + Array(n + 1 - o.length).join(e) + t
                    },
                    h = {
                        s: v,
                        z: function(t) {
                            var n = -t.utcOffset(),
                                e = Math.abs(n),
                                o = Math.floor(e / 60),
                                r = e % 60;
                            return (n <= 0 ? "+" : "-") + v(o, 2, "0") + ":" + v(r, 2, "0")
                        },
                        m: function t(n, e) {
                            if (n.date() < e.date()) return -t(e, n);
                            var o = 12 * (e.year() - n.year()) + (e.month() - n.month()),
                                r = n.clone().add(o, a),
                                i = e - r < 0,
                                l = n.clone().add(o + (i ? -1 : 1), a);
                            return +(-(o + (e - r) / (i ? r - l : l - r)) || 0)
                        },
                        a: function(t) {
                            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                        },
                        p: function(u) {
                            return {
                                M: a,
                                y: s,
                                w: i,
                                d: r,
                                D: c,
                                h: o,
                                m: e,
                                s: n,
                                ms: t,
                                Q: l
                            } [u] || String(u || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(t) {
                            return void 0 === t
                        }
                    },
                    p = "en",
                    m = {};
                m[p] = f;
                var g = function(t) {
                        return t instanceof $
                    },
                    y = function(t, n, e) {
                        var o;
                        if (!t) return p;
                        if ("string" == typeof t) m[t] && (o = t), n && (m[t] = n, o = t);
                        else {
                            var r = t.name;
                            m[r] = t, o = r
                        }
                        return !e && o && (p = o), o || !e && p
                    },
                    b = function(t, n) {
                        if (g(t)) return t.clone();
                        var e = "object" == typeof n ? n : {};
                        return e.date = t, e.args = arguments, new $(e)
                    },
                    w = h;
                w.l = y, w.i = g, w.w = function(t, n) {
                    return b(t, {
                        locale: n.$L,
                        utc: n.$u,
                        x: n.$x,
                        $offset: n.$offset
                    })
                };
                var $ = function() {
                        function f(t) {
                            this.$L = y(t.locale, null, !0), this.parse(t)
                        }
                        var v = f.prototype;
                        return v.parse = function(t) {
                            this.$d = function(t) {
                                var n = t.date,
                                    e = t.utc;
                                if (null === n) return new Date(NaN);
                                if (w.u(n)) return new Date;
                                if (n instanceof Date) return new Date(n);
                                if ("string" == typeof n && !/Z$/i.test(n)) {
                                    var o = n.match(u);
                                    if (o) {
                                        var r = o[2] - 1 || 0,
                                            i = (o[7] || "0").substring(0, 3);
                                        return e ? new Date(Date.UTC(o[1], r, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i)) : new Date(o[1], r, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i)
                                    }
                                }
                                return new Date(n)
                            }(t), this.$x = t.x || {}, this.init()
                        }, v.init = function() {
                            var t = this.$d;
                            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                        }, v.$utils = function() {
                            return w
                        }, v.isValid = function() {
                            return !("Invalid Date" === this.$d.toString())
                        }, v.isSame = function(t, n) {
                            var e = b(t);
                            return this.startOf(n) <= e && e <= this.endOf(n)
                        }, v.isAfter = function(t, n) {
                            return b(t) < this.startOf(n)
                        }, v.isBefore = function(t, n) {
                            return this.endOf(n) < b(t)
                        }, v.$g = function(t, n, e) {
                            return w.u(t) ? this[n] : this.set(e, t)
                        }, v.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, v.valueOf = function() {
                            return this.$d.getTime()
                        }, v.startOf = function(t, l) {
                            var u = this,
                                d = !!w.u(l) || l,
                                f = w.p(t),
                                v = function(t, n) {
                                    var e = w.w(u.$u ? Date.UTC(u.$y, n, t) : new Date(u.$y, n, t), u);
                                    return d ? e : e.endOf(r)
                                },
                                h = function(t, n) {
                                    return w.w(u.toDate()[t].apply(u.toDate("s"), (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), u)
                                },
                                p = this.$W,
                                m = this.$M,
                                g = this.$D,
                                y = "set" + (this.$u ? "UTC" : "");
                            switch (f) {
                                case s:
                                    return d ? v(1, 0) : v(31, 11);
                                case a:
                                    return d ? v(1, m) : v(0, m + 1);
                                case i:
                                    var b = this.$locale().weekStart || 0,
                                        $ = (p < b ? p + 7 : p) - b;
                                    return v(d ? g - $ : g + (6 - $), m);
                                case r:
                                case c:
                                    return h(y + "Hours", 0);
                                case o:
                                    return h(y + "Minutes", 1);
                                case e:
                                    return h(y + "Seconds", 2);
                                case n:
                                    return h(y + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, v.endOf = function(t) {
                            return this.startOf(t, !1)
                        }, v.$set = function(i, l) {
                            var u, d = w.p(i),
                                f = "set" + (this.$u ? "UTC" : ""),
                                v = (u = {}, u[r] = f + "Date", u[c] = f + "Date", u[a] = f + "Month", u[s] = f + "FullYear", u[o] = f + "Hours", u[e] = f + "Minutes", u[n] = f + "Seconds", u[t] = f + "Milliseconds", u)[d],
                                h = d === r ? this.$D + (l - this.$W) : l;
                            if (d === a || d === s) {
                                var p = this.clone().set(c, 1);
                                p.$d[v](h), p.init(), this.$d = p.set(c, Math.min(this.$D, p.daysInMonth())).$d
                            } else v && this.$d[v](h);
                            return this.init(), this
                        }, v.set = function(t, n) {
                            return this.clone().$set(t, n)
                        }, v.get = function(t) {
                            return this[w.p(t)]()
                        }, v.add = function(t, l) {
                            var c, u = this;
                            t = Number(t);
                            var d = w.p(l),
                                f = function(n) {
                                    var e = b(u);
                                    return w.w(e.date(e.date() + Math.round(n * t)), u)
                                };
                            if (d === a) return this.set(a, this.$M + t);
                            if (d === s) return this.set(s, this.$y + t);
                            if (d === r) return f(1);
                            if (d === i) return f(7);
                            var v = (c = {}, c[e] = 6e4, c[o] = 36e5, c[n] = 1e3, c)[d] || 1,
                                h = this.$d.getTime() + t * v;
                            return w.w(h, this)
                        }, v.subtract = function(t, n) {
                            return this.add(-1 * t, n)
                        }, v.format = function(t) {
                            var n = this;
                            if (!this.isValid()) return "Invalid Date";
                            var e = t || "YYYY-MM-DDTHH:mm:ssZ",
                                o = w.z(this),
                                r = this.$locale(),
                                i = this.$H,
                                a = this.$m,
                                l = this.$M,
                                s = r.weekdays,
                                c = r.months,
                                u = function(t, o, r, i) {
                                    return t && (t[o] || t(n, e)) || r[o].substr(0, i)
                                },
                                f = function(t) {
                                    return w.s(i % 12 || 12, t, "0")
                                },
                                v = r.meridiem || function(t, n, e) {
                                    var o = t < 12 ? "AM" : "PM";
                                    return e ? o.toLowerCase() : o
                                },
                                h = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: l + 1,
                                    MM: w.s(l + 1, 2, "0"),
                                    MMM: u(r.monthsShort, l, c, 3),
                                    MMMM: u(c, l),
                                    D: this.$D,
                                    DD: w.s(this.$D, 2, "0"),
                                    d: String(this.$W),
                                    dd: u(r.weekdaysMin, this.$W, s, 2),
                                    ddd: u(r.weekdaysShort, this.$W, s, 3),
                                    dddd: s[this.$W],
                                    H: String(i),
                                    HH: w.s(i, 2, "0"),
                                    h: f(1),
                                    hh: f(2),
                                    a: v(i, a, !0),
                                    A: v(i, a, !1),
                                    m: String(a),
                                    mm: w.s(a, 2, "0"),
                                    s: String(this.$s),
                                    ss: w.s(this.$s, 2, "0"),
                                    SSS: w.s(this.$ms, 3, "0"),
                                    Z: o
                                };
                            return e.replace(d, (function(t, n) {
                                return n || h[t] || o.replace(":", "")
                            }))
                        }, v.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, v.diff = function(t, c, u) {
                            var d, f = w.p(c),
                                v = b(t),
                                h = 6e4 * (v.utcOffset() - this.utcOffset()),
                                p = this - v,
                                m = w.m(this, v);
                            return m = (d = {}, d[s] = m / 12, d[a] = m, d[l] = m / 3, d[i] = (p - h) / 6048e5, d[r] = (p - h) / 864e5, d[o] = p / 36e5, d[e] = p / 6e4, d[n] = p / 1e3, d)[f] || p, u ? m : w.a(m)
                        }, v.daysInMonth = function() {
                            return this.endOf(a).$D
                        }, v.$locale = function() {
                            return m[this.$L]
                        }, v.locale = function(t, n) {
                            if (!t) return this.$L;
                            var e = this.clone(),
                                o = y(t, n, !0);
                            return o && (e.$L = o), e
                        }, v.clone = function() {
                            return w.w(this.$d, this)
                        }, v.toDate = function() {
                            return new Date(this.valueOf())
                        }, v.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, v.toISOString = function() {
                            return this.$d.toISOString()
                        }, v.toString = function() {
                            return this.$d.toUTCString()
                        }, f
                    }(),
                    _ = $.prototype;
                return b.prototype = _, [
                    ["$ms", t],
                    ["$s", n],
                    ["$m", e],
                    ["$H", o],
                    ["$W", r],
                    ["$M", a],
                    ["$y", s],
                    ["$D", c]
                ].forEach((function(t) {
                    _[t[1]] = function(n) {
                        return this.$g(n, t[0], t[1])
                    }
                })), b.extend = function(t, n) {
                    return t(n, $, b), b
                }, b.locale = y, b.isDayjs = g, b.unix = function(t) {
                    return b(1e3 * t)
                }, b.en = m[p], b.Ls = m, b.p = {}, b
            }()
        })),
        sn = {
            cpieri: "lpieri"
        };

    function cn(t, n, e) {
        var o = t.slice();
        return o[19] = n[e], o[21] = e, o
    }

    function un(t) {
        var n;
        return {
            c: function() {
                n = E("Loading...")
            },
            m: function(t, e) {
                S(t, n, e)
            },
            d: function(t) {
                t && C(n)
            }
        }
    }

    function dn(t) {
        var n, e, o, r, i, a, l, s, c, u, d, f, v, h, p, m, g, y, b, w, $, _, x = (null !== (n = null == sn ? void 0 : sn[t[19].login]) && void 0 !== n ? n : t[19].login) + "",
            k = t[19].pool_year + "",
            M = (t[19].last_update ? "last update : ".concat(ln(t[19].last_update).format("ddd DD MMM YYYY, HH[:]mm")) : "") + "",
            O = t[21] + 1 + "",
            z = t[19].value + "";
        return {
            c: function() {
                e = j("div"), o = j("div"), r = E(x), i = A(), a = j("div"), l = E(k), s = A(), c = j("div"), u = E(M), d = A(), f = j("div"), v = j("div"), h = E(O), p = A(), m = j("div"), g = j("div"), y = j("div"), b = A(), w = j("div"), $ = E(z), _ = A(), Y(o, "class", "login svelte-2v6xzh"), Y(a, "class", "pool_year svelte-2v6xzh"), Y(c, "class", "last_update svelte-2v6xzh"), Y(v, "class", "pos svelte-2v6xzh"), Y(f, "class", "image svelte-2v6xzh"), I(f, "background-image", "url('" + (t[19].image_url.includes("3b3") ? "" : t[19].image_url) + "')"), Y(y, "class", "bar svelte-2v6xzh"), I(g, "width", t[19].value / t[4] * 100 + "%"), Y(m, "class", "bar-container svelte-2v6xzh"), Y(w, "class", "value svelte-2v6xzh"), Y(e, "class", "reg svelte-2v6xzh"), P(e, "first", 0 === t[21])
            },
            m: function(t, n) {
                S(t, e, n), D(e, o), D(o, r), D(e, i), D(e, a), D(a, l), D(e, s), D(e, c), D(c, u), D(e, d), D(e, f), D(f, v), D(v, h), D(e, p), D(e, m), D(m, g), D(g, y), D(e, b), D(e, w), D(w, $), D(e, _)
            },
            p: function(t, n) {
                var e;
                4 & n && x !== (x = (null !== (e = null == sn ? void 0 : sn[t[19].login]) && void 0 !== e ? e : t[19].login) + "") && L(r, x), 4 & n && k !== (k = t[19].pool_year + "") && L(l, k), 4 & n && M !== (M = (t[19].last_update ? "last update : ".concat(ln(t[19].last_update).format("ddd DD MMM YYYY, HH[:]mm")) : "") + "") && L(u, M), 4 & n && I(f, "background-image", "url('" + (t[19].image_url.includes("3b3") ? "" : t[19].image_url) + "')"), 20 & n && I(g, "width", t[19].value / t[4] * 100 + "%"), 4 & n && z !== (z = t[19].value + "") && L($, z)
            },
            d: function(t) {
                t && C(e)
            }
        }
    }

    function fn(t) {
        for (var n, e, o, r, i, a, l, s, c, d, f, v, h, m, g, y, w, $, _, x, k, M, E, z, L, T, I = !t[3] && un(), F = t[2].data, R = [], q = 0; q < F.length; q += 1) R[q] = dn(cn(t, F, q));
        return {
            c: function() {
                n = j("div"), e = j("div"), (o = j("span")).textContent = "level", r = A(), (i = j("span")).textContent = "correction point", a = A(), (l = j("span")).textContent = "wallet", s = A(), c = j("div"), (d = j("span")).textContent = "all", f = A(), (v = j("span")).textContent = "2017", h = A(), (m = j("span")).textContent = "2018", g = A(), (y = j("span")).textContent = "2019", w = A(), ($ = j("span")).textContent = "2020", _ = A(), (x = j("div")).textContent = "Ranking are updated for students that have logged in school in the last 6 months (starting from 24 november 2020)", k = A(), I && I.c(), M = A(), E = j("br"), z = A();
                for (var u = 0; u < R.length; u += 1) R[u].c();
                Y(o, "class", "item svelte-2v6xzh"), P(o, "selected", "level" === t[0]), Y(i, "class", "item svelte-2v6xzh"), P(i, "selected", "correction_point" === t[0]), Y(l, "class", "item svelte-2v6xzh"), P(l, "selected", "wallet" === t[0]), Y(e, "class", "tab svelte-2v6xzh"), Y(d, "class", "item svelte-2v6xzh"), P(d, "selected", 0 === t[1]), Y(v, "class", "item svelte-2v6xzh"), P(v, "selected", 2017 === t[1]), Y(m, "class", "item svelte-2v6xzh"), P(m, "selected", 2018 === t[1]), Y(y, "class", "item svelte-2v6xzh"), P(y, "selected", 2019 === t[1]), Y($, "class", "item svelte-2v6xzh"), P($, "selected", 2020 === t[1]), Y(c, "class", "tab svelte-2v6xzh"), Y(x, "class", "alert info svelte-2v6xzh"), Y(n, "class", "content svelte-2v6xzh")
            },
            m: function(u, p) {
                S(u, n, p), D(n, e), D(e, o), D(e, r), D(e, i), D(e, a), D(e, l), D(n, s), D(n, c), D(c, d), D(c, f), D(c, v), D(c, h), D(c, m), D(c, g), D(c, y), D(c, w), D(c, $), D(n, _), D(n, x), D(n, k), I && I.m(n, null), D(n, M), D(n, E), D(n, z);
                for (var b = 0; b < R.length; b += 1) R[b].m(n, null);
                L || (T = [H(o, "click", t[8]), H(i, "click", t[9]), H(l, "click", t[10]), H(d, "click", t[11]), H(v, "click", t[12]), H(m, "click", t[13]), H(y, "click", t[14]), H($, "click", t[15])], L = !0)
            },
            p: function(t, e) {
                var r = u(e, 1)[0];
                if (1 & r && P(o, "selected", "level" === t[0]), 1 & r && P(i, "selected", "correction_point" === t[0]), 1 & r && P(l, "selected", "wallet" === t[0]), 2 & r && P(d, "selected", 0 === t[1]), 2 & r && P(v, "selected", 2017 === t[1]), 2 & r && P(m, "selected", 2018 === t[1]), 2 & r && P(y, "selected", 2019 === t[1]), 2 & r && P($, "selected", 2020 === t[1]), t[3] ? I && (I.d(1), I = null) : I || ((I = un()).c(), I.m(n, M)), 20 & r) {
                    var a;
                    for (F = t[2].data, a = 0; a < F.length; a += 1) {
                        var s = cn(t, F, a);
                        R[a] ? R[a].p(s, r) : (R[a] = dn(s), R[a].c(), R[a].m(n, null))
                    }
                    for (; a < R.length; a += 1) R[a].d(1);
                    R.length = F.length
                }
            },
            i: p,
            o: p,
            d: function(t) {
                t && C(n), I && I.d(), O(R, t), L = !1, b(T)
            }
        }
    }

    function vn(t, n, e) {
        var o = n.params,
            r = void 0 === o ? {} : o,
            i = {
                data: [],
                time: -1
            },
            a = 0,
            l = 0,
            s = 0,
            c = "level",
            u = 0;

        function f() {
            e(3, a = 0), e(7, s = 0), e(2, i.data = [], i)
        }
        var v = Mt.subscribe((function(t) {
            "ranking-level" !== t.type && "ranking-correction_point" !== t.type && "ranking-wallet" !== t.type || (e(2, i.time = t.time, i), e(4, l = t.max), e(2, i.data = [].concat(d(i.data), d(t.data)), i), e(3, a = 1))
        }));

        function h() {
            window.innerHeight + window.pageYOffset >= document.querySelector(".content").offsetHeight && a && (e(3, a = 0), e(7, s++, s))
        }
        N((function() {
            v && (v(), v = null)
        })), B((function() {
            var t = window.location.hash.split("-");
            return t.length >= 2 && ["level", "correction_point", "pool", "wallet"].includes(t[1]) && e(0, c = t[1]), window.addEventListener("scroll", h),
                function() {
                    window.removeEventListener("scroll", h)
                }
        }));
        return t.$$set = function(t) {
            "params" in t && e(6, r = t.params)
        }, t.$$.update = function() {
            64 & t.$$.dirty && r.type && e(0, c = r.type), 1 & t.$$.dirty && c && f(), 131 & t.$$.dirty && (e(3, a = 0), Ct.emit("get", {
                data: c,
                page: s,
                year: u >= 2017 ? u : null
            }))
        }, [c, u, i, a, l, f, r, s, function() {
            return Lt("/ranking/level")
        }, function() {
            return Lt("/ranking/correction_point")
        }, function() {
            return Lt("/ranking/wallet")
        }, function() {
            f(), e(1, u = 0)
        }, function() {
            f(), e(1, u = 2017)
        }, function() {
            f(), e(1, u = 2018)
        }, function() {
            f(), e(1, u = 2019)
        }, function() {
            f(), e(1, u = 2020)
        }]
    }
    var hn = function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, vn, fn, $, {
                params: 6
            }), r
        }
        return o
    }(bt);
    an((function(t, n) {
        t.exports = function(t) {
            t = t && t.hasOwnProperty("default") ? t.default : t;
            var n = {
                name: "fr",
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
                monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinal: function(t) {
                    return t + (1 === t ? "er" : "")
                }
            };
            return t.locale(n, null, !0), n
        }(ln)
    }));
    var pn = {
        clusterfuck: function(t, n, e, o, r) {
            for (var i = [], a = n.length, l = function(t) {
                    return !!o && (1 === o ? t % 2 == 0 : 2 === o && t % 2 != 0)
                }, s = 0; s < a; s++) {
                i[s] = [];
                for (var c = 0; c < n[s]; c++) e.includes("z".concat(t, "r").concat(s + 1, "p").concat(c + 1)) ? i[s][c] = {
                    active: 0
                } : l(c) ? i[s][c] = {
                    reversed: r,
                    active: -1
                } : i[s][c] = {
                    active: 1,
                    reversed: r,
                    location: "z".concat(t, "r").concat(s + 1, "p").concat(c + 1)
                }
            }
            return i
        },
        bottomcluster: function(t, n, e, o) {
            for (var r = [], i = 0, a = 0; a < n; a++) {
                r[a] = [];
                for (var l = 0; l < e; l++) r[a][l] = {
                    active: 1,
                    location: "z".concat(t, "r").concat(a + 1, "p").concat(l + 1)
                }, o.includes(i) && (r[a][l] = {
                    active: 0
                }), i++
            }
            return r
        },
        randomTest: function(t, n) {
            var e, o = h(t);
            try {
                for (o.s(); !(e = o.n()).done;) {
                    var r = e.value,
                        i = Math.floor(13 * Math.random()) + 1,
                        a = Math.floor(4 * Math.random()) + 1;
                    n["z".concat(3, "r").concat(i, "p").concat(a)] = r
                }
            } catch (t) {
                o.e(t)
            } finally {
                o.f()
            }
        },
        clusterfakfak: function(t, n, e, o, r) {
            for (var i = [], a = 0; a < e; a++) {
                i[a] = [];
                for (var l = 0; l < n; l++) {
                    var s = "z".concat(t, "r").concat(a + 1, "p").concat(n - l);
                    o.includes(s) ? i[a][l] = {
                        active: !1,
                        reverse: r
                    } : i[a][l] = {
                        active: !0,
                        location: s,
                        reverse: r
                    }
                }
            }
            return i
        }
    };

    function mn(t, n, e) {
        var o = t.slice();
        return o[21] = n[e], o
    }

    function gn(t, n, e) {
        var o = t.slice();
        return o[24] = n[e], o
    }

    function yn(t, n, e) {
        var o = t.slice();
        return o[21] = n[e], o
    }

    function bn(t, n, e) {
        var o = t.slice();
        return o[24] = n[e], o
    }

    function wn(t) {
        var n, e, o, r, i, a, l, s, c = (null === (n = t[24]) || void 0 === n ? void 0 : n.location) + "";
        return {
            c: function() {
                var n, l, s, u;
                e = j("div"), o = j("div"), r = E(c), Y(o, "class", "inside svelte-1hs3g0o"), Y(o, "style", i = t[3](t[24]) ? "background-image: url(".concat(t[5](t[24]), ")") : ""), P(o, "active", t[3](t[24])), P(o, "search", t[4](t[24])), I(e, "width", t[2] + "px"), I(e, "height", t[2] + "px"), Y(e, "class", a = k("row " + (null === (n = t[24]) || void 0 === n ? void 0 : n.location)) + " svelte-1hs3g0o"), P(e, "temp", -1 === (null === (l = t[24]) || void 0 === l ? void 0 : l.active)), P(e, "disabled", !(null !== (s = t[24]) && void 0 !== s && s.active)), P(e, "reversed", null === (u = t[24]) || void 0 === u ? void 0 : u.reverse)
            },
            m: function(n, i) {
                S(n, e, i), D(e, o), D(o, r), l || (s = H(o, "click", (function() {
                    w(t[6](t[3](t[24]))) && t[6](t[3](t[24])).apply(this, arguments)
                })), l = !0)
            },
            p: function(n, l) {
                var s, u, d, f, v;
                (t = n, 1 & l && c !== (c = (null === (s = t[24]) || void 0 === s ? void 0 : s.location) + "") && L(r, c), 1 & l && i !== (i = t[3](t[24]) ? "background-image: url(".concat(t[5](t[24]), ")") : "") && Y(o, "style", i), 9 & l && P(o, "active", t[3](t[24])), 17 & l && P(o, "search", t[4](t[24])), 4 & l && I(e, "width", t[2] + "px"), 4 & l && I(e, "height", t[2] + "px"), 1 & l && a !== (a = k("row " + (null === (u = t[24]) || void 0 === u ? void 0 : u.location)) + " svelte-1hs3g0o") && Y(e, "class", a), 1 & l) && P(e, "temp", -1 === (null === (d = t[24]) || void 0 === d ? void 0 : d.active));
                1 & l && P(e, "disabled", !(null !== (f = t[24]) && void 0 !== f && f.active));
                1 & l && P(e, "reversed", null === (v = t[24]) || void 0 === v ? void 0 : v.reverse)
            },
            d: function(t) {
                t && C(e), l = !1, s()
            }
        }
    }

    function $n(t) {
        for (var n, e, o = t[21], r = [], i = 0; i < o.length; i += 1) r[i] = wn(bn(t, o, i));
        return {
            c: function() {
                n = j("div");
                for (var t = 0; t < r.length; t += 1) r[t].c();
                e = A(), Y(n, "class", "column svelte-1hs3g0o")
            },
            m: function(t, o) {
                S(t, n, o);
                for (var i = 0; i < r.length; i += 1) r[i].m(n, null);
                D(n, e)
            },
            p: function(t, i) {
                if (125 & i) {
                    var a;
                    for (o = t[21], a = 0; a < o.length; a += 1) {
                        var l = bn(t, o, a);
                        r[a] ? r[a].p(l, i) : (r[a] = wn(l), r[a].c(), r[a].m(n, e))
                    }
                    for (; a < r.length; a += 1) r[a].d(1);
                    r.length = o.length
                }
            },
            d: function(t) {
                t && C(n), O(r, t)
            }
        }
    }

    function _n(t) {
        var n, e, o, r, i, a, l, s, c = (null === (n = t[24]) || void 0 === n ? void 0 : n.location) + "";
        return {
            c: function() {
                var n, l, s, u;
                e = j("div"), o = j("div"), r = E(c), Y(o, "class", "inside svelte-1hs3g0o"), Y(o, "style", i = t[3](t[24]) ? "background-image: url(".concat(t[5](t[24]), ")") : ""), P(o, "active", t[3](t[24])), P(o, "search", t[4](t[24])), I(e, "width", t[2] + "px"), I(e, "height", t[2] + "px"), Y(e, "class", a = k("row " + (null === (n = t[24]) || void 0 === n ? void 0 : n.location)) + " svelte-1hs3g0o"), P(e, "temp", -1 === (null === (l = t[24]) || void 0 === l ? void 0 : l.active)), P(e, "reversed", null === (s = t[24]) || void 0 === s ? void 0 : s.reverse), P(e, "disabled", !(null !== (u = t[24]) && void 0 !== u && u.active))
            },
            m: function(n, i) {
                S(n, e, i), D(e, o), D(o, r), l || (s = H(o, "click", (function() {
                    w(t[6](t[3](t[24]))) && t[6](t[3](t[24])).apply(this, arguments)
                })), l = !0)
            },
            p: function(n, l) {
                var s, u, d, f, v;
                (t = n, 1 & l && c !== (c = (null === (s = t[24]) || void 0 === s ? void 0 : s.location) + "") && L(r, c), 1 & l && i !== (i = t[3](t[24]) ? "background-image: url(".concat(t[5](t[24]), ")") : "") && Y(o, "style", i), 9 & l && P(o, "active", t[3](t[24])), 17 & l && P(o, "search", t[4](t[24])), 4 & l && I(e, "width", t[2] + "px"), 4 & l && I(e, "height", t[2] + "px"), 1 & l && a !== (a = k("row " + (null === (u = t[24]) || void 0 === u ? void 0 : u.location)) + " svelte-1hs3g0o") && Y(e, "class", a), 1 & l) && P(e, "temp", -1 === (null === (d = t[24]) || void 0 === d ? void 0 : d.active));
                1 & l && P(e, "reversed", null === (f = t[24]) || void 0 === f ? void 0 : f.reverse);
                1 & l && P(e, "disabled", !(null !== (v = t[24]) && void 0 !== v && v.active))
            },
            d: function(t) {
                t && C(e), l = !1, s()
            }
        }
    }

    function xn(t) {
        for (var n, e, o = t[21], r = [], i = 0; i < o.length; i += 1) r[i] = _n(gn(t, o, i));
        return {
            c: function() {
                n = j("div");
                for (var t = 0; t < r.length; t += 1) r[t].c();
                e = A(), Y(n, "class", "column svelte-1hs3g0o")
            },
            m: function(t, o) {
                S(t, n, o);
                for (var i = 0; i < r.length; i += 1) r[i].m(n, null);
                D(n, e)
            },
            p: function(t, i) {
                if (125 & i) {
                    var a;
                    for (o = t[21], a = 0; a < o.length; a += 1) {
                        var l = gn(t, o, a);
                        r[a] ? r[a].p(l, i) : (r[a] = _n(l), r[a].c(), r[a].m(n, e))
                    }
                    for (; a < r.length; a += 1) r[a].d(1);
                    r.length = o.length
                }
            },
            d: function(t) {
                t && C(n), O(r, t)
            }
        }
    }

    function kn(t) {
        for (var n, e, o, r, i, a = t[0][0], l = [], s = 0; s < a.length; s += 1) l[s] = $n(yn(t, a, s));
        for (var c = t[0][1], d = [], f = 0; f < c.length; f += 1) d[f] = xn(mn(t, c, f));
        return {
            c: function() {
                n = j("div"), e = j("div"), o = j("div");
                for (var t = 0; t < l.length; t += 1) l[t].c();
                r = A(), i = j("div");
                for (var a = 0; a < d.length; a += 1) d[a].c();
                Y(o, "class", "map-container svelte-1hs3g0o"), Y(i, "class", "map-container svelte-1hs3g0o"), Y(e, "class", "fixed-map-container svelte-1hs3g0o"), Y(n, "class", "container-cm svelte-1hs3g0o")
            },
            m: function(a, s) {
                S(a, n, s), D(n, e), D(e, o);
                for (var c = 0; c < l.length; c += 1) l[c].m(o, null);
                D(e, r), D(e, i);
                for (var u = 0; u < d.length; u += 1) d[u].m(i, null);
                t[12](e)
            },
            p: function(t, n) {
                var e = u(n, 1)[0];
                if (125 & e) {
                    var r;
                    for (a = t[0][0], r = 0; r < a.length; r += 1) {
                        var s = yn(t, a, r);
                        l[r] ? l[r].p(s, e) : (l[r] = $n(s), l[r].c(), l[r].m(o, null))
                    }
                    for (; r < l.length; r += 1) l[r].d(1);
                    l.length = a.length
                }
                if (125 & e) {
                    var f;
                    for (c = t[0][1], f = 0; f < c.length; f += 1) {
                        var v = mn(t, c, f);
                        d[f] ? d[f].p(v, e) : (d[f] = xn(v), d[f].c(), d[f].m(i, null))
                    }
                    for (; f < d.length; f += 1) d[f].d(1);
                    d.length = c.length
                }
            },
            i: p,
            o: p,
            d: function(e) {
                e && C(n), O(l, e), O(d, e), t[12](null)
            }
        }
    }

    function Mn(t, n, e) {
        var r, i = n.data,
            a = n.clusters,
            l = n.show_popbox,
            s = n.student_selected,
            c = [
                [],
                []
            ],
            u = [],
            d = {},
            f = 0,
            v = [0, 0],
            p = 0,
            m = 0,
            g = null,
            y = function() {
                clearTimeout(g), g = setTimeout((function() {
                    d.x = r.offsetWidth, d.y = r.offsetHeight, f = d.x > d.y ? d.y : d.x, e(2, m = f / 12 - 16)
                }), 500)
            };

        function b(t) {
            var n;
            return null !== (n = u.find((function(n) {
                return n.location === (null == t ? void 0 : t.location)
            }))) && void 0 !== n ? n : null
        }
        return B((function() {
            d.x = r.offsetWidth, d.y = r.offsetHeight, p = d.y, e(2, m = p / 12 - 16), y(), window.addEventListener("resize", y)
        })), t.$$set = function(t) {
            "data" in t && e(8, i = t.data), "clusters" in t && e(9, a = t.clusters), "show_popbox" in t && e(7, l = t.show_popbox), "student_selected" in t && e(10, s = t.student_selected)
        }, t.$$.update = function() {
            if (3841 & t.$$.dirty) {
                e(0, c[0] = a[0], c), e(0, c[1] = a[1], c);
                var n, o = h(c[0]);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var r = n.value;
                        (null == r ? void 0 : r.length) > v[0] && e(11, v[0] = null == r ? void 0 : r.length, v)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                var l, s = h(c[1]);
                try {
                    for (s.s(); !(l = s.n()).done;) {
                        var d = l.value;
                        (null == d ? void 0 : d.length) > v[1] && e(11, v[1] = null == d ? void 0 : d.length, v)
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                u = i
            }
        }, [c, r, m, b, function(t) {
            var n = b(t);
            return (null == n ? void 0 : n.login) === s
        }, function(t) {
            var n, e = b(t);
            return null !== (n = null == e ? void 0 : e.image_url) && void 0 !== n ? n : "https://cdn.intra.42.fr/users/large_".concat(null == e ? void 0 : e.login, ".jpg")
        }, function(t) {
            var n;
            null !== (n = l) && void 0 !== n && n.show && l.login === (null == t ? void 0 : t.login) ? e(7, l = o(o({}, l), {}, {
                show: !1
            })) : e(7, l = o({
                show: !0
            }, t))
        }, l, i, a, s, v, function(t) {
            J[t ? "unshift" : "push"]((function() {
                e(1, r = t)
            }))
        }]
    }
    var Dn = function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, Mn, kn, $, {
                data: 8,
                clusters: 9,
                show_popbox: 7,
                student_selected: 10
            }), r
        }
        return o
    }(bt);

    function Sn(t, n, e) {
        var o = t.slice();
        return o[25] = n[e], o
    }

    function Cn(t, n, e) {
        var o = t.slice();
        return o[28] = n[e], o
    }

    function On(t) {
        for (var n, e, o, r, i, a, l, s, c, u, d, f, v, h, p, m, g, y, w, $, _, x = t[10], k = [], M = 0; M < x.length; M += 1) k[M] = jn(Cn(t, x, M));

        function z(n) {
            t[22].call(null, n)
        }
        var I = {
            data: t[0],
            clusters: 1 === t[1] ? [t[5], t[6]] : [t[3], t[4]],
            student_selected: t[12]
        };
        return void 0 !== t[9] && (I.show_popbox = t[9]), g = new Dn({
            props: I
        }), J.push((function() {
            return function(t, n, e) {
                const o = t.$$.props[n];
                void 0 !== o && (t.$$.bound[o] = e, e(t.$$.ctx[o]))
            }(g, "show_popbox", z)
        })), {
            c: function() {
                n = j("div"), e = j("input"), o = A(), r = j("div");
                for (var y = 0; y < k.length; y += 1) k[y].c();
                i = A(), a = j("div"), l = j("span"), s = E("top ("), c = E(t[7]), u = E(")"), d = A(), f = j("span"), v = E("bottom ("), h = E(t[8]), p = E(")"), m = A(), pt(g.$$.fragment), Y(e, "type", "text"), Y(e, "placeholder", "Find a student..."), Y(e, "class", "svelte-o0b4yf"), Y(r, "class", "autocomplete svelte-o0b4yf"), P(r, "show", t[10].length), Y(n, "class", "cluster-search svelte-o0b4yf"), Y(l, "class", "item svelte-o0b4yf"), P(l, "selected", 2 === t[1]), Y(f, "class", "item svelte-o0b4yf"), P(f, "selected", 1 === t[1]), Y(a, "class", "tab svelte-o0b4yf")
            },
            m: function(y, b) {
                S(y, n, b), D(n, e), T(e, t[11]), D(n, o), D(n, r);
                for (var x = 0; x < k.length; x += 1) k[x].m(r, null);
                S(y, i, b), S(y, a, b), D(a, l), D(l, s), D(l, c), D(l, u), D(a, d), D(a, f), D(f, v), D(f, h), D(f, p), S(y, m, b), mt(g, y, b), w = !0, $ || (_ = [H(e, "input", t[18]), H(e, "input", t[15]), H(l, "click", t[20]), H(f, "click", t[21])], $ = !0)
            },
            p: function(t, n) {
                if (2048 & n && e.value !== t[11] && T(e, t[11]), 17408 & n) {
                    var o;
                    for (x = t[10], o = 0; o < x.length; o += 1) {
                        var i = Cn(t, x, o);
                        k[o] ? k[o].p(i, n) : (k[o] = jn(i), k[o].c(), k[o].m(r, null))
                    }
                    for (; o < k.length; o += 1) k[o].d(1);
                    k.length = x.length
                }
                1024 & n && P(r, "show", t[10].length), (!w || 128 & n) && L(c, t[7]), 2 & n && P(l, "selected", 2 === t[1]), (!w || 256 & n) && L(h, t[8]), 2 & n && P(f, "selected", 1 === t[1]);
                var a, s = {};
                1 & n && (s.data = t[0]), 122 & n && (s.clusters = 1 === t[1] ? [t[5], t[6]] : [t[3], t[4]]), 4096 & n && (s.student_selected = t[12]), !y && 512 & n && (y = !0, s.show_popbox = t[9], a = function() {
                    return y = !1
                }, Z.push(a)), g.$set(s)
            },
            i: function(t) {
                w || (ut(g.$$.fragment, t), w = !0)
            },
            o: function(t) {
                dt(g.$$.fragment, t), w = !1
            },
            d: function(t) {
                t && C(n), O(k, t), t && C(i), t && C(a), t && C(m), gt(g, t), $ = !1, b(_)
            }
        }
    }

    function jn(t) {
        var n, e, o, r, i, a, l, s, c = t[28].login + "";

        function u() {
            return t[19](t[28])
        }
        return {
            c: function() {
                var l, s;
                n = j("div"), e = j("div"), o = A(), r = j("div"), i = E(c), a = A(), Y(e, "class", "avatar svelte-o0b4yf"), I(e, "background-image", "url(" + (null !== (l = t[28].image_url) && void 0 !== l ? l : "https://cdn.intra.42.fr/users/large_".concat(null === (s = t[28]) || void 0 === s ? void 0 : s.login, ".jpg")) + ")"), Y(r, "class", "login svelte-o0b4yf"), Y(n, "class", "item svelte-o0b4yf")
            },
            m: function(t, c) {
                S(t, n, c), D(n, e), D(n, o), D(n, r), D(r, i), D(n, a), l || (s = H(n, "click", u), l = !0)
            },
            p: function(n, o) {
                var r, a;
                (t = n, 1024 & o) && I(e, "background-image", "url(" + (null !== (r = t[28].image_url) && void 0 !== r ? r : "https://cdn.intra.42.fr/users/large_".concat(null === (a = t[28]) || void 0 === a ? void 0 : a.login, ".jpg")) + ")");
                1024 & o && c !== (c = t[28].login + "") && L(i, c)
            },
            d: function(t) {
                t && C(n), l = !1, s()
            }
        }
    }

    function En(t) {
        for (var n, e = t[0], o = [], r = 0; r < e.length; r += 1) o[r] = An(Sn(t, e, r));
        return {
            c: function() {
                n = j("div");
                for (var t = 0; t < o.length; t += 1) o[t].c();
                Y(n, "class", "container svelte-o0b4yf")
            },
            m: function(t, e) {
                S(t, n, e);
                for (var r = 0; r < o.length; r += 1) o[r].m(n, null)
            },
            p: function(t, r) {
                if (1 & r) {
                    var i;
                    for (e = t[0], i = 0; i < e.length; i += 1) {
                        var a = Sn(t, e, i);
                        o[i] ? o[i].p(a, r) : (o[i] = An(a), o[i].c(), o[i].m(n, null))
                    }
                    for (; i < o.length; i += 1) o[i].d(1);
                    o.length = e.length
                }
            },
            d: function(t) {
                t && C(n), O(o, t)
            }
        }
    }

    function An(t) {
        var n, e, o, r, i, a, l, s, c, u, d, f = t[25].login + "",
            v = "".concat(Math.floor(t[25].uptime / 60), "h").concat((t[25].uptime % 60 < 10 ? "0" : "") + t[25].uptime % 60) + "",
            h = (t[25].location && t[25].location.split(".")[0]) + "";
        return {
            c: function() {
                var p;
                n = j("div"), e = j("div"), o = E(f), r = A(), i = j("div"), a = j("div"), l = E(v), s = A(), c = j("div"), u = E(h), d = A(), Y(e, "class", "login svelte-o0b4yf"), Y(a, "class", "logtime svelte-o0b4yf"), Y(c, "class", "host svelte-o0b4yf"), Y(i, "class", "infos svelte-o0b4yf"), Y(n, "class", "stud svelte-o0b4yf"), I(n, "background-image", "url('" + (null !== (p = t[25].image_url) && void 0 !== p ? p : "https://cdn.intra.42.fr/users/large_".concat(t[25].login, ".jpg")) + "')")
            },
            m: function(t, f) {
                S(t, n, f), D(n, e), D(e, o), D(n, r), D(n, i), D(i, a), D(a, l), D(i, s), D(i, c), D(c, u), D(n, d)
            },
            p: function(t, e) {
                var r;
                (1 & e && f !== (f = t[25].login + "") && L(o, f), 1 & e && v !== (v = "".concat(Math.floor(t[25].uptime / 60), "h").concat((t[25].uptime % 60 < 10 ? "0" : "") + t[25].uptime % 60) + "") && L(l, v), 1 & e && h !== (h = (t[25].location && t[25].location.split(".")[0]) + "") && L(u, h), 1 & e) && I(n, "background-image", "url('" + (null !== (r = t[25].image_url) && void 0 !== r ? r : "https://cdn.intra.42.fr/users/large_".concat(t[25].login, ".jpg")) + "')")
            },
            d: function(t) {
                t && C(n)
            }
        }
    }

    function zn(t) {
        var n, e, o, r, i, a, l, s, c, d, f, v, h, p, m, g, y, w, $, _, x, M, O, z, T, I, F, R, q, B, N, W, X, U, J, V, Z, G, Q, K, tt, nt, et, ot, rt, it = (null === (n = t[9]) || void 0 === n ? void 0 : n.login) + "",
            at = (null === (e = t[9]) || void 0 === e ? void 0 : e.first_name) + "",
            lt = (null === (o = t[9]) || void 0 === o ? void 0 : o.last_name) + "",
            ft = (null === (r = t[9]) || void 0 === r ? void 0 : r.location) + "",
            vt = (null === (i = t[9]) || void 0 === i ? void 0 : i.level) + "",
            ht = (null === (a = t[9]) || void 0 === a ? void 0 : a.correction_point) + "",
            pt = "FIXED-MAP" === t[2] && On(t),
            mt = "CARD" === t[2] && En(t);
        return {
            c: function() {
                var n, e;
                l = j("div"), s = j("div"), d = A(), f = j("div"), v = j("div"), h = E(it), p = A(), m = j("div"), g = E(at), y = A(), w = E(lt), $ = A(), _ = j("div"), x = E(ft), M = A(), O = j("div"), z = E("level: "), T = E(vt), I = j("br"), F = E("corrections points: "), R = E(ht), q = A(), B = j("div"), N = j("div"), W = j("b"), X = E(t[13]), U = E(" / 154 online"), V = A(), Z = j("div"), (G = j("span")).textContent = "map", Q = A(), (K = j("span")).textContent = "card", tt = A(), pt && pt.c(), nt = A(), mt && mt.c(), Y(s, "class", "image svelte-o0b4yf"), Y(s, "style", c = "background-image: url(".concat(null === (n = t[9]) || void 0 === n ? void 0 : n.image_url, ")")), Y(v, "class", "login svelte-o0b4yf"), Y(m, "class", "name svelte-o0b4yf"), Y(_, "class", "location svelte-o0b4yf"), Y(O, "class", "level svelte-o0b4yf"), Y(f, "class", "infos svelte-o0b4yf"), Y(l, "class", "profile-popbox svelte-o0b4yf"), P(l, "show", null === (e = t[9]) || void 0 === e ? void 0 : e.show), Y(W, "class", "svelte-o0b4yf"), Y(N, "class", J = k("online" + (t[13] >= 154 ? " FULL" : "")) + " svelte-o0b4yf"), Y(G, "class", "item svelte-o0b4yf"), P(G, "selected", "FIXED-MAP" === t[2]), Y(K, "class", "item svelte-o0b4yf"), P(K, "selected", "CARD" === t[2]), Y(Z, "class", "tab svelte-o0b4yf"), Y(B, "class", "content svelte-o0b4yf")
            },
            m: function(n, e) {
                S(n, l, e), D(l, s), D(l, d), D(l, f), D(f, v), D(v, h), D(f, p), D(f, m), D(m, g), D(m, y), D(m, w), D(f, $), D(f, _), D(_, x), D(f, M), D(f, O), D(O, z), D(O, T), D(O, I), D(O, F), D(O, R), S(n, q, e), S(n, B, e), D(B, N), D(N, W), D(W, X), D(N, U), D(B, V), D(B, Z), D(Z, G), D(Z, Q), D(Z, K), D(B, tt), pt && pt.m(B, null), D(B, nt), mt && mt.m(B, null), et = !0, ot || (rt = [H(G, "click", t[16]), H(K, "click", t[17])], ot = !0)
            },
            p: function(t, n) {
                var e, o, r, i, a, d, f, v, p = u(n, 1)[0];
                ((!et || 512 & p && c !== (c = "background-image: url(".concat(null === (e = t[9]) || void 0 === e ? void 0 : e.image_url, ")"))) && Y(s, "style", c), (!et || 512 & p) && it !== (it = (null === (o = t[9]) || void 0 === o ? void 0 : o.login) + "") && L(h, it), (!et || 512 & p) && at !== (at = (null === (r = t[9]) || void 0 === r ? void 0 : r.first_name) + "") && L(g, at), (!et || 512 & p) && lt !== (lt = (null === (i = t[9]) || void 0 === i ? void 0 : i.last_name) + "") && L(w, lt), (!et || 512 & p) && ft !== (ft = (null === (a = t[9]) || void 0 === a ? void 0 : a.location) + "") && L(x, ft), (!et || 512 & p) && vt !== (vt = (null === (d = t[9]) || void 0 === d ? void 0 : d.level) + "") && L(T, vt), (!et || 512 & p) && ht !== (ht = (null === (f = t[9]) || void 0 === f ? void 0 : f.correction_point) + "") && L(R, ht), 512 & p) && P(l, "show", null === (v = t[9]) || void 0 === v ? void 0 : v.show);
                (!et || 8192 & p) && L(X, t[13]), (!et || 8192 & p && J !== (J = k("online" + (t[13] >= 154 ? " FULL" : "")) + " svelte-o0b4yf")) && Y(N, "class", J), 4 & p && P(G, "selected", "FIXED-MAP" === t[2]), 4 & p && P(K, "selected", "CARD" === t[2]), "FIXED-MAP" === t[2] ? pt ? (pt.p(t, p), 4 & p && ut(pt, 1)) : ((pt = On(t)).c(), ut(pt, 1), pt.m(B, nt)) : pt && (st(), dt(pt, 1, 1, (function() {
                    pt = null
                })), ct()), "CARD" === t[2] ? mt ? mt.p(t, p) : ((mt = En(t)).c(), mt.m(B, null)) : mt && (mt.d(1), mt = null)
            },
            i: function(t) {
                et || (ut(pt), et = !0)
            },
            o: function(t) {
                dt(pt), et = !1
            },
            d: function(t) {
                t && C(l), t && C(q), t && C(B), pt && pt.d(), mt && mt.d(), ot = !1, b(rt)
            }
        }
    }

    function Hn(t, n, e) {
        var o = [],
            r = [],
            i = [],
            a = [],
            l = [],
            s = 0,
            c = 0,
            u = 2,
            d = "FIXED-MAP";
        B((function() {
            e(3, o = pn.clusterfakfak(1, 5, 12, ["z1r1p3", "z1r5p3", "z1r9p3"], 0)), e(4, r = pn.clusterfakfak(2, 8, 12, ["z2r1p4", "z2r5p4", "z2r9p4"], 0)), e(5, i = pn.clusterfakfak(3, 6, 13, ["z3r1p3", "z3r5p3", "z3r9p3", "z3r13p4", "z3r13p5", "z3r13p6"], 0)), e(6, a = pn.clusterfakfak(4, 7, 13, ["z4r1p3", "z4r5p3", "z4r9p3", "z4r13p2", "z4r13p1", "z4r13p3", "z4r13p4", , "z4r13p5", , "z4r13p6", "z4r13p7"], 1)), Ct.on("get-coalitions", (function(t) {})), Ct.emit("get-coalitions"), Ct.emit("getOnline", {}), Ct.on("getOnline", (function(t) {
                e(0, l = t), l.sort((function(t, n) {
                    return t.uptime > n.uptime ? -1 : 1
                })), e(0, l = l.map((function(t) {
                    return t.location = null == t ? void 0 : t.location.split(".")[0], t
                })))
            }))
        })), N((function() {
            Ct.off("get-coalitions"), Ct.off("getOnline")
        }));
        var f = !1,
            v = [],
            p = "",
            m = "",
            g = function(t) {
                e(10, v = []), ["1", "2"].includes(null == t ? void 0 : t.location[1]) ? e(1, u = 2) : e(1, u = 1), e(12, m = null == t ? void 0 : t.login), e(11, p = null == t ? void 0 : t.login)
            };
        var y;
        return t.$$.update = function() {
            7 & t.$$.dirty && function(t) {
                e(7, s = 0), e(8, c = 0);
                var n, o = h(t);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var r, i, a, l, u = n.value;
                        (null != u && null !== (r = u.location) && void 0 !== r && r.includes("z1") || null != u && null !== (i = u.location) && void 0 !== i && i.includes("z2")) && e(7, s++, s), (null != u && null !== (a = u.location) && void 0 !== a && a.includes("z3") || null != u && null !== (l = u.location) && void 0 !== l && l.includes("z4")) && e(8, c++, c)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            }(l), 1 & t.$$.dirty && e(13, y = function() {
                console.log(l);
                var t, n = 0,
                    e = h(l);
                try {
                    for (e.s(); !(t = e.n()).done;) {
                        t.value;
                        n++
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
                return n
            }())
        }, [l, u, d, o, r, i, a, s, c, f, v, p, m, y, g, function(t) {
            var n, o = null == t || null === (n = t.target) || void 0 === n ? void 0 : n.value;
            o ? e(10, v = l.filter((function(t) {
                return null == t ? void 0 : t.login.includes(o)
            }))) : (e(10, v = []), e(12, m = ""))
        }, function() {
            e(2, d = "FIXED-MAP")
        }, function() {
            e(2, d = "CARD")
        }, function() {
            p = this.value, e(11, p)
        }, function(t) {
            return g(t)
        }, function() {
            e(1, u = 2)
        }, function() {
            e(1, u = 1)
        }, function(t) {
            e(9, f = t)
        }]
    }
    var Yn = function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, Hn, zn, $, {}), r
        }
        return o
    }(bt);

    function Ln(t) {
        var n, e, o, r, i, a, l, s, c, d, f, v, h, m, g, y, b = "".concat(parseInt((t[0] + t[2]) / 60), "h ").concat((t[0] + t[2]) % 60, "m") + "",
            w = (t[1] ? ln(t[1]).format("DD/MM, HH[h]mm") : "unknown") + "";
        return {
            c: function() {
                n = j("div"), e = j("div"), o = E("Current month logtime : "), r = j("b"), i = E(b), a = A(), l = j("div"), s = j("canvas"), c = A(), d = j("div"), f = E("last update : "), v = E(w), h = A(), (m = j("button")).textContent = "logout", Y(r, "class", "svelte-15kewu7"), Y(e, "class", "month-logtime svelte-15kewu7"), Y(s, "id", "myChart"), Y(l, "class", "chart-container first-chart"), I(l, "transition", "all .3s linear"), I(l, "position", "relative"), I(l, "height", "100%"), I(l, "width", "100%"), Y(d, "class", "last-update svelte-15kewu7"), Y(m, "type", "button"), Y(m, "class", "btn btn-full svelte-15kewu7"), I(m, "margin-top", "42px"), Y(n, "class", "content svelte-15kewu7")
            },
            m: function(u, p) {
                S(u, n, p), D(n, e), D(e, o), D(e, r), D(r, i), D(n, a), D(n, l), D(l, s), t[5](s), D(n, c), D(n, d), D(d, f), D(d, v), D(n, h), D(n, m), g || (y = H(m, "click", t[4]), g = !0)
            },
            p: function(t, n) {
                var e = u(n, 1)[0];
                5 & e && b !== (b = "".concat(parseInt((t[0] + t[2]) / 60), "h ").concat((t[0] + t[2]) % 60, "m") + "") && L(i, b), 2 & e && w !== (w = (t[1] ? ln(t[1]).format("DD/MM, HH[h]mm") : "unknown") + "") && L(v, w)
            },
            i: p,
            o: p,
            d: function(e) {
                e && C(n), t[5](null), g = !1, y()
            }
        }
    }

    function Tn(t, n, e) {
        var r = 0,
            i = 0,
            a = 0,
            l = {
                days: {
                    labels: [],
                    value: []
                }
            },
            s = {
                days: null
            },
            c = {
                days: null
            };
        return B((function() {
            c.days = function(t, n) {
                return new Chart(t, {
                    type: "bar",
                    data: {
                        labels: n.labels,
                        datasets: []
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            xAxes: [{
                                stacked: !0
                            }]
                        },
                        onClick: function() {
                            var t;
                            (t = console).log.apply(t, arguments)
                        }
                    }
                })
            }(s.days, l.days);
            for (var t = new Date(2020, 11, 0).getDate(), n = 0; n < t; n++) l.days.labels.push("".concat(n + 1)), l.days.value.push(0);
            Ct.emit("get_logtime", {}), Ct.on("get_logtime", (function(t) {
                e(1, i = null == t ? void 0 : t.last_update);
                for (var n = 0, s = Object.keys(t.result); n < s.length; n++) {
                    var u = s[n],
                        d = ln(u).format("DD");
                    l.days.value[parseInt(d) - 1] = t.result[u], l.days.labels[parseInt(d) - 1] = "".concat(parseInt(d), " (").concat(parseInt(t.result[u] / 60), "h ").concat(t.result[u] % 60, "m)"), e(0, r += t.result[u])
                }
                if (e(2, a = null == t ? void 0 : t.current), a) {
                    var f = parseInt(ln().format("DD"));
                    l.days.value[f - 1] += a, l.days.labels[f - 1] = "".concat(parseInt(f), " (").concat(parseInt(l.days.value[f - 1] / 60), "h ").concat(l.days.value[f - 1] % 60, "m)")
                }
                var v, h;
                h = "#BB86FC", c[v = "days"].data.datasets = [], c[v].data.labels = l[v].labels, c[v].data.datasets.push(o({
                    label: "Logtime of the day (in minutes)",
                    data: l[v].value,
                    backgroundColor: "#BB86FC77",
                    borderColor: h
                }, {
                    fill: "origin",
                    lineTension: .3,
                    borderWidth: 1,
                    pointRadius: 1,
                    pointHoverRadius: 3,
                    pointHitRadius: 6
                })), c[v].update()
            }))
        })), N((function() {
            Ct.off("get_logtime")
        })), [r, i, a, s, function() {
            Dt.update((function(t) {
                return o(o({}, t), {}, {
                    logged: !1
                })
            })), document.cookies = "", window.localStorage.clear(), window.location.reload(!0)
        }, function(t) {
            J[t ? "unshift" : "push"]((function() {
                s.days = t, e(3, s)
            }))
        }]
    }
    var In = function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, Tn, Ln, $, {}), r
        }
        return o
    }(bt);

    function Pn(t, n, e) {
        var o = t.slice();
        return o[2] = n[e], o
    }

    function Fn(t, n, e) {
        var o = t.slice();
        return o[2] = n[e], o
    }

    function Rn(t) {
        var n, e, o, r, i, a, l, s, c, u, d, f, v, h, p, m, g, y, b, w, $, _, x = (null !== (n = t[2]) && void 0 !== n && n.date ? ln(t[2].date).format("YY/MM/DD HH[:]mm") : "") + "",
            M = (null === (e = t[2]) || void 0 === e ? void 0 : e.priority) + "",
            O = (null === (o = t[2]) || void 0 === o ? void 0 : o.tries) + "",
            z = (null === (r = t[2]) || void 0 === r ? void 0 : r.state) + "",
            H = (null === (i = t[2]) || void 0 === i ? void 0 : i.name) + "";
        return {
            c: function() {
                var n;
                a = j("div"), l = j("div"), s = E(x), c = A(), u = j("div"), d = E(M), f = A(), v = j("div"), h = E(O), p = A(), m = j("div"), g = E(z), y = A(), b = j("div"), w = E(H), $ = A(), Y(l, "class", "date svelte-193p695"), Y(u, "class", "prority svelte-193p695"), Y(v, "class", "tries svelte-193p695"), Y(m, "class", "state svelte-193p695"), Y(b, "class", "name svelte-193p695"), Y(a, "class", _ = k("log " + (null === (n = t[2]) || void 0 === n ? void 0 : n.state)) + " svelte-193p695")
            },
            m: function(t, n) {
                S(t, a, n), D(a, l), D(l, s), D(a, c), D(a, u), D(u, d), D(a, f), D(a, v), D(v, h), D(a, p), D(a, m), D(m, g), D(a, y), D(a, b), D(b, w), D(a, $)
            },
            p: function(t, n) {
                var e, o, r, i, l, c;
                2 & n && x !== (x = (null !== (e = t[2]) && void 0 !== e && e.date ? ln(t[2].date).format("YY/MM/DD HH[:]mm") : "") + "") && L(s, x), 2 & n && M !== (M = (null === (o = t[2]) || void 0 === o ? void 0 : o.priority) + "") && L(d, M), 2 & n && O !== (O = (null === (r = t[2]) || void 0 === r ? void 0 : r.tries) + "") && L(h, O), 2 & n && z !== (z = (null === (i = t[2]) || void 0 === i ? void 0 : i.state) + "") && L(g, z), 2 & n && H !== (H = (null === (l = t[2]) || void 0 === l ? void 0 : l.name) + "") && L(w, H), 2 & n && _ !== (_ = k("log " + (null === (c = t[2]) || void 0 === c ? void 0 : c.state)) + " svelte-193p695") && Y(a, "class", _)
            },
            d: function(t) {
                t && C(a)
            }
        }
    }

    function qn(t) {
        var n, e, o, r, i, a, l, s, c, u, d, f, v, h, p, m, g, y, b = (null !== (n = t[2]) && void 0 !== n && n.date ? ln(t[2].date).format("YY/MM/DD HH[:]mm") : "") + "",
            w = (null === (e = t[2]) || void 0 === e ? void 0 : e.type) + "",
            $ = (null === (o = t[2]) || void 0 === o ? void 0 : o.component) + "",
            _ = (null === (r = t[2]) || void 0 === r ? void 0 : r.message) + "";
        return {
            c: function() {
                var n;
                i = j("div"), a = j("div"), l = E(b), s = A(), c = j("div"), u = E(w), d = A(), f = j("div"), v = E($), h = A(), p = j("div"), m = E(_), g = A(), Y(a, "class", "date svelte-193p695"), Y(c, "class", "type svelte-193p695"), Y(f, "class", "component svelte-193p695"), Y(p, "class", "message svelte-193p695"), Y(i, "class", y = k("log " + (null === (n = t[2]) || void 0 === n ? void 0 : n.type)) + " svelte-193p695")
            },
            m: function(t, n) {
                S(t, i, n), D(i, a), D(a, l), D(i, s), D(i, c), D(c, u), D(i, d), D(i, f), D(f, v), D(i, h), D(i, p), D(p, m), D(i, g)
            },
            p: function(t, n) {
                var e, o, r, a, s;
                1 & n && b !== (b = (null !== (e = t[2]) && void 0 !== e && e.date ? ln(t[2].date).format("YY/MM/DD HH[:]mm") : "") + "") && L(l, b), 1 & n && w !== (w = (null === (o = t[2]) || void 0 === o ? void 0 : o.type) + "") && L(u, w), 1 & n && $ !== ($ = (null === (r = t[2]) || void 0 === r ? void 0 : r.component) + "") && L(v, $), 1 & n && _ !== (_ = (null === (a = t[2]) || void 0 === a ? void 0 : a.message) + "") && L(m, _), 1 & n && y !== (y = k("log " + (null === (s = t[2]) || void 0 === s ? void 0 : s.type)) + " svelte-193p695") && Y(i, "class", y)
            },
            d: function(t) {
                t && C(i)
            }
        }
    }

    function Bn(t) {
        for (var n, e, o, r, i = t[1], a = [], l = 0; l < i.length; l += 1) a[l] = Rn(Fn(t, i, l));
        for (var s = t[0], c = [], d = 0; d < s.length; d += 1) c[d] = qn(Pn(t, s, d));
        return {
            c: function() {
                n = j("div"), e = j("div"), o = j("div");
                for (var t = 0; t < a.length; t += 1) a[t].c();
                r = A();
                for (var i = 0; i < c.length; i += 1) c[i].c();
                Y(o, "class", "logs svelte-193p695"), Y(e, "class", "logs svelte-193p695"), Y(n, "class", "content svelte-193p695")
            },
            m: function(t, i) {
                S(t, n, i), D(n, e), D(e, o);
                for (var l = 0; l < a.length; l += 1) a[l].m(o, null);
                D(e, r);
                for (var s = 0; s < c.length; s += 1) c[s].m(e, null)
            },
            p: function(t, n) {
                var r = u(n, 1)[0];
                if (2 & r) {
                    var l;
                    for (i = t[1], l = 0; l < i.length; l += 1) {
                        var d = Fn(t, i, l);
                        a[l] ? a[l].p(d, r) : (a[l] = Rn(d), a[l].c(), a[l].m(o, null))
                    }
                    for (; l < a.length; l += 1) a[l].d(1);
                    a.length = i.length
                }
                if (1 & r) {
                    var f;
                    for (s = t[0], f = 0; f < s.length; f += 1) {
                        var v = Pn(t, s, f);
                        c[f] ? c[f].p(v, r) : (c[f] = qn(v), c[f].c(), c[f].m(e, null))
                    }
                    for (; f < c.length; f += 1) c[f].d(1);
                    c.length = s.length
                }
            },
            i: p,
            o: p,
            d: function(t) {
                t && C(n), O(a, t), O(c, t)
            }
        }
    }

    function Nn(t, n, e) {
        var o = [],
            r = [];
        return B((function() {
            Ct.emit("server-logs"), Ct.on("server-logs", (function(t) {
                e(0, o = null == t ? void 0 : t.logs)
            })), Ct.on("server-queue", (function(t) {
                e(1, r = t)
            }))
        })), N((function() {
            Ct.off("server-logs")
        })), [o, r]
    }
    var Wn = function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, Nn, Bn, $, {}), r
        }
        return o
    }(bt);

    function Xn(t) {
        var n;
        return {
            c: function() {
                (n = j("div")).innerHTML = '<div class="alert info svelte-j9f6yx">Server migration is still in progress, stats before <i>24 november 2020</i> are coming back. Soonâ„¢.</div> \n\t<div class="chart-container first-chart" style="transition: all .3s linear; position: relative; height:100%; width:100%"><canvas id="myChart"></canvas></div> \n\t<div class="chart-container second-chart" style="transition: all .3s linear;position: relative; margin-top: 64px;height:100%; width:100%"><canvas id="chart-days"></canvas></div> \n\t<div class="chart-container third-chart" style="transition: all .3s linear;position: relative; margin-top: 64px;height:100%; width:100%"><canvas id="chart-months"></canvas></div>', Y(n, "class", "content svelte-j9f6yx")
            },
            m: function(t, e) {
                S(t, n, e)
            },
            p: p,
            i: p,
            o: p,
            d: function(t) {
                t && C(n)
            }
        }
    }

    function Un(t, n) {
        return new Chart(t, {
            type: "line",
            data: {
                labels: n.labels,
                datasets: []
            },
            options: {
                responsive: !0,
                maintainAspectRatio: !1,
                scales: {
                    xAxes: [{
                        stacked: !0
                    }]
                },
                onClick: function() {
                    var t;
                    (t = console).log.apply(t, arguments)
                }
            }
        })
    }

    function Jn(t) {
        ln.locale("fr");
        var n = {
                hours: {
                    labels: [],
                    min: [],
                    max: [],
                    avg_min: [],
                    avg_max: []
                },
                days: {
                    labels: [],
                    min: [],
                    max: [],
                    avg_min: [],
                    avg_max: []
                },
                months: {
                    labels: [],
                    min: [],
                    max: [],
                    avg_min: [],
                    avg_max: []
                }
            },
            e = {
                hours: null,
                days: null,
                months: null
            },
            r = {
                hours: null,
                days: null,
                months: null
            };

        function i(t) {
            var i = e[t].createLinearGradient(0, 0, 0, 450),
                a = e[t].createLinearGradient(0, 0, 0, 450);
            i.addColorStop(0, "#FCD59F77"), i.addColorStop(.5, "#FCD59F44"), i.addColorStop(1, "#FCD59F00"), a.addColorStop(0, "#BB86FC77"), a.addColorStop(.5, "#BB86FC44"), a.addColorStop(1, "#BB86FC00");
            var l = {
                fill: "origin",
                lineTension: .3,
                borderWidth: 1,
                pointRadius: 1,
                pointHoverRadius: 3,
                pointHitRadius: 6
            };
            r[t].data.datasets = [], "months" !== t && "days" !== t || (r[t].options.legend.display = !1), n[t].avg_max && r[t].data.datasets.push(o({
                label: "Average max logged students",
                data: n[t].avg_max,
                backgroundColor: a,
                borderColor: "rgba(24, 80, 150, .8)cc"
            }, l)), n[t].avg_min && r[t].data.datasets.push(o({
                label: "Average min logged students",
                data: n[t].avg_min,
                backgroundColor: i,
                borderColor: "rgba(54, 162, 235, .8)cc"
            }, l)), r[t].data.labels = n[t].labels, r[t].data.datasets = [].concat(d(r[t].data.datasets), [o({
                label: "Min logged students",
                data: n[t].min,
                backgroundColor: i,
                borderColor: "#FCD59Fcc"
            }, l), o({
                label: "Max logged students",
                data: n[t].max,
                backgroundColor: a,
                borderColor: "#BB86FCcc"
            }, l)]), r[t].update()
        }
        return B((function() {
            e.hours = document.getElementById("myChart").getContext("2d"), e.days = document.getElementById("chart-days").getContext("2d"), e.months = document.getElementById("chart-months").getContext("2d"), Ct.emit("online-stats", {}), r.hours = Un(e.hours, n.hours), r.days = Un(e.days, n.days), r.months = Un(e.months, n.months), Ct.on("online-stats", (function(t) {
                if (n = {
                        hours: {
                            labels: [],
                            min: [],
                            max: [],
                            avg_min: [],
                            avg_max: []
                        },
                        days: {
                            labels: [],
                            min: [],
                            max: [],
                            avg_min: [],
                            avg_max: []
                        },
                        months: {
                            labels: [],
                            min: [],
                            max: [],
                            avg_min: [],
                            avg_max: []
                        }
                    }, console.warn(t), t) {
                    var e, o = h(t.hours);
                    try {
                        for (o.s(); !(e = o.n()).done;) {
                            var r = e.value;
                            n.hours.min = [].concat(d(n.hours.min), [r.min]), n.hours.max = [].concat(d(n.hours.max), [r.max]);
                            var a = ln(new Date(r._id.year, r._id.month - 1, r._id.dayOfMonth, r._id.hour, 0, 0)),
                                l = ln(new Date(r._id.year, r._id.month - 1, r._id.dayOfMonth, 0, 0, 0, 0)).format("DD MMM HH[h]"),
                                s = a.format("DD MMM").toString() === ln().format("DD MMM").toString();
                            n.hours.labels = [].concat(d(n.hours.labels), [s ? a.format("HH[h]") : l])
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    var c, u = h(t.lastdays);
                    try {
                        for (u.s(); !(c = u.n()).done;) {
                            var f = c.value;
                            n.days.min = [].concat(d(n.days.min), [f.min]), n.days.max = [].concat(d(n.days.max), [f.max]), n.days.avg_min = [].concat(d(n.days.avg_min), [f.avg_min]), n.days.avg_max = [].concat(d(n.days.avg_max), [f.avg_max]);
                            var v = ln(new Date(f._id.year, f._id.month - 1, f._id.dayOfMonth, 0, 0, 0, 0)).format("DD MMM");
                            n.days.labels = [].concat(d(n.days.labels), [v])
                        }
                    } catch (t) {
                        u.e(t)
                    } finally {
                        u.f()
                    }
                    var p, m = h(t.lastmonths);
                    try {
                        for (m.s(); !(p = m.n()).done;) {
                            var g = p.value;
                            n.months.min = [].concat(d(n.months.min), [g.min]), n.months.max = [].concat(d(n.months.max), [g.max]), n.months.avg_min = [].concat(d(n.months.avg_min), [g.avg_min]), n.months.avg_max = [].concat(d(n.months.avg_max), [g.avg_max]);
                            var y = ln(new Date(g._id.year, g._id.month, 0, 0, 0, 0, 0)).format("MMM YYYY");
                            n.months.labels = [].concat(d(n.months.labels), [y])
                        }
                    } catch (t) {
                        m.e(t)
                    } finally {
                        m.f()
                    }
                    i("hours"), i("days"), i("months")
                }
            }))
        })), N((function() {
            Ct.off("online-stats")
        })), []
    }
    var Vn = function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, Jn, Xn, $, {}), r
        }
        return o
    }(bt);

    function Zn(t) {
        var n, e, o, r;
        return n = new rn({}), o = new Rt({
            props: {
                routes: t[2]
            }
        }), {
            c: function() {
                pt(n.$$.fragment), e = A(), pt(o.$$.fragment)
            },
            m: function(t, i) {
                mt(n, t, i), S(t, e, i), mt(o, t, i), r = !0
            },
            p: p,
            i: function(t) {
                r || (ut(n.$$.fragment, t), ut(o.$$.fragment, t), r = !0)
            },
            o: function(t) {
                dt(n.$$.fragment, t), dt(o.$$.fragment, t), r = !1
            },
            d: function(t) {
                gt(n, t), t && C(e), gt(o, t)
            }
        }
    }

    function Gn(t) {
        var n, e;
        return n = new Gt({}), {
            c: function() {
                pt(n.$$.fragment)
            },
            m: function(t, o) {
                mt(n, t, o), e = !0
            },
            p: p,
            i: function(t) {
                e || (ut(n.$$.fragment, t), e = !0)
            },
            o: function(t) {
                dt(n.$$.fragment, t), e = !1
            },
            d: function(t) {
                gt(n, t)
            }
        }
    }

    function Qn(t) {
        var n, e, o, r, i, a, l = [Gn, Zn],
            s = [];

        function c(t, n) {
            return t[0].logged ? 1 : 0
        }
        return r = c(t), i = s[r] = l[r](t), {
            c: function() {
                (n = j("div")).textContent = "connexion lost", e = A(), o = j("div"), i.c(), Y(n, "class", "lost svelte-1q132aw"), P(n, "active", t[1]), Y(o, "class", "body-container svelte-1q132aw"), P(o, "blurred", t[1])
            },
            m: function(t, i) {
                S(t, n, i), S(t, e, i), S(t, o, i), s[r].m(o, null), a = !0
            },
            p: function(t, e) {
                var a = u(e, 1)[0];
                2 & a && P(n, "active", t[1]);
                var d = r;
                (r = c(t)) === d ? s[r].p(t, a) : (st(), dt(s[d], 1, 1, (function() {
                    s[d] = null
                })), ct(), (i = s[r]) ? i.p(t, a) : (i = s[r] = l[r](t)).c(), ut(i, 1), i.m(o, null)), 2 & a && P(o, "blurred", t[1])
            },
            i: function(t) {
                a || (ut(i), a = !0)
            },
            o: function(t) {
                dt(i), a = !1
            },
            d: function(t) {
                t && C(n), t && C(e), t && C(o), s[r].d()
            }
        }
    }

    function Kn(t, n, e) {
        var o;

        function r() {
            var t, n = Object.fromEntries(document.cookie.split("; ").map((function(t) {
                    return t.split("=")
                }))),
                e = "".concat(btoa(Math.random().toString(36).substr(2, 9))).concat(btoa(Date.now())).replace(/=/g, "");
            "undefined" === n.handshake && (n.handshake = null), console.log("â„¹ï¸ Handshake", null !== (t = n.handshake) && void 0 !== t ? t : e), n.handshake ? Ct.emit("handshake", n.handshake) : (Ct.emit("handshake", e), document.cookie = "handshake=".concat(e))
        }
        x(t, Dt, (function(t) {
            return e(0, o = t)
        }));
        var i = !1;
        B((function() {
            Ct.on("connect", (function(t) {
                r();
                var n = window.localStorage.getItem("jwt");
                n && (console.log("âŒ› Waiting for JWT Authentication"), Ct.emit("authentication", {
                    type: "jwt",
                    jwt: n
                }))
            })), Ct.on("reconnect", (function() {
                window.location.reload(!0)
            })), Ct.on("disconnect", (function() {
                e(1, i = !0)
            })), Ct.on("server", (function(t) {
                console.log("[SERVER]", t)
            })), Ct.on("authentication", (function(t) {
                try {
                    "student_data" === t.type && St.set(t.data), kt.set(t)
                } catch (t) {
                    console.error(t), document.cookies = "", window.localStorage.clear(), window.location.reload(!0)
                }
            })), Ct.on("data", (function(t) {
                Mt.set(t)
            }));
            var t = Date.now();
            Ct.on("its-a-ping", (function() {
                t = Date.now(), Ct.emit("its-a-ping")
            })), setInterval((function() {
                Math.abs(t - Date.now()) >= 6e4 && o.logged && window.location.reload(!0)
            }), 6e4)
        }));
        var a = {
            "/": Ot({
                component: Yn
            }),
            "/ranking/:type?": Ot({
                component: hn
            }),
            "/online-stats": Ot({
                component: Vn
            }),
            "/profile": Ot({
                component: In
            }),
            "/324B21": Ot({
                component: Wn
            })
        };
        return t.$$.update = function() {
            1 & t.$$.dirty && console.log("[ctx] [logged]", o)
        }, [o, i, a]
    }
    return new(function(n) {
        r(o, n);
        var e = c(o);

        function o(n) {
            var r;
            return t(this, o), yt(l(r = e.call(this)), n, Kn, Qn, $, {}), r
        }
        return o
    }(bt))({
        target: document.body,
        props: {}
    })
}();
//# sourceMappingURL=bundle.js.map