import { watch as Av, unref as xr, defineComponent as Bv, toRefs as Gv, ref as Ri, computed as Bn, onMounted as Fv, openBlock as Gn, createElementBlock as Fn, normalizeStyle as Ge, createElementVNode as ka, createCommentVNode as Nv, Fragment as Lv, renderList as Yv } from "vue";
function zv(n) {
  if (!n || typeof document > "u")
    return;
  let t = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(n));
}
zv(".moveable-control-box{visibility:hidden!important}.vue-color-wheel .aurora-wheel{outline:0;position:relative;-webkit-tap-highlight-color:transparent;cursor:pointer}.vue-color-wheel .aurora-wheel:before{content:'';position:absolute;top:0;left:0;transform:rotate(270deg);width:100%;height:100%;border-radius:100%;background:radial-gradient(circle at 50% 0,red,rgba(242,13,13,.8) 10%,rgba(230,26,26,.6) 20%,rgba(204,51,51,.4) 30%,rgba(166,89,89,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 85.35533905932738% 14.644660940672622%,#ffbf00,rgba(242,185,13,.8) 10%,rgba(230,179,26,.6) 20%,rgba(204,166,51,.4) 30%,rgba(166,147,89,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 100% 50%,#80ff00,rgba(128,242,13,.8) 10%,rgba(128,230,26,.6) 20%,rgba(128,204,51,.4) 30%,rgba(128,166,89,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 85.35533905932738% 85.35533905932738%,#00ff40,rgba(13,242,70,.8) 10%,rgba(26,230,77,.6) 20%,rgba(51,204,89,.4) 30%,rgba(89,166,108,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 50.00000000000001% 100%,#0ff,rgba(13,242,242,.8) 10%,rgba(26,230,230,.6) 20%,rgba(51,204,204,.4) 30%,rgba(89,166,166,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 14.64466094067263% 85.35533905932738%,#0040ff,rgba(13,70,242,.8) 10%,rgba(26,77,230,.6) 20%,rgba(51,89,204,.4) 30%,rgba(89,108,166,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 0 50.00000000000001%,#7f00ff,rgba(128,13,242,.8) 10%,rgba(128,26,230,.6) 20%,rgba(128,51,204,.4) 30%,rgba(128,89,166,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 14.644660940672615% 14.64466094067263%,#ff00bf,rgba(242,13,185,.8) 10%,rgba(230,26,179,.6) 20%,rgba(204,51,166,.4) 30%,rgba(166,89,147,.2) 40%,hsla(0,0%,50%,0) 50%)}");
var Xv = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, be = function(n) {
  return typeof n == "string" ? n.length > 0 : typeof n == "number";
}, ur = function(n, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * n) / r + 0;
}, Kr = function(n, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 1), n > r ? r : n > t ? n : t;
}, yc = function(n) {
  return (n = isFinite(n) ? n % 360 : 0) > 0 ? n : n + 360;
}, Bl = function(n) {
  return { r: Kr(n.r, 0, 255), g: Kr(n.g, 0, 255), b: Kr(n.b, 0, 255), a: Kr(n.a) };
}, jo = function(n) {
  return { r: ur(n.r), g: ur(n.g), b: ur(n.b), a: ur(n.a, 3) };
}, Wv = /^#([0-9a-f]{3,8})$/i, za = function(n) {
  var t = n.toString(16);
  return t.length < 2 ? "0" + t : t;
}, bc = function(n) {
  var t = n.r, r = n.g, e = n.b, i = n.a, a = Math.max(t, r, e), o = a - Math.min(t, r, e), s = o ? a === t ? (r - e) / o : a === r ? 2 + (e - t) / o : 4 + (t - r) / o : 0;
  return { h: 60 * (s < 0 ? s + 6 : s), s: a ? o / a * 100 : 0, v: a / 255 * 100, a: i };
}, Sc = function(n) {
  var t = n.h, r = n.s, e = n.v, i = n.a;
  t = t / 360 * 6, r /= 100, e /= 100;
  var a = Math.floor(t), o = e * (1 - r), s = e * (1 - (t - a) * r), u = e * (1 - (1 - t + a) * r), l = a % 6;
  return { r: 255 * [e, s, o, o, u, e][l], g: 255 * [u, e, e, s, o, o][l], b: 255 * [o, o, u, e, e, s][l], a: i };
}, Gl = function(n) {
  return { h: yc(n.h), s: Kr(n.s, 0, 100), l: Kr(n.l, 0, 100), a: Kr(n.a) };
}, Fl = function(n) {
  return { h: ur(n.h), s: ur(n.s), l: ur(n.l), a: ur(n.a, 3) };
}, Nl = function(n) {
  return Sc((r = (t = n).s, { h: t.h, s: (r *= ((e = t.l) < 50 ? e : 100 - e) / 100) > 0 ? 2 * r / (e + r) * 100 : 0, v: e + r, a: t.a }));
  var t, r, e;
}, Vi = function(n) {
  return { h: (t = bc(n)).h, s: (i = (200 - (r = t.s)) * (e = t.v) / 100) > 0 && i < 200 ? r * e / 100 / (i <= 100 ? i : 200 - i) * 100 : 0, l: i / 2, a: t.a };
  var t, r, e, i;
}, Hv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Vv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, $v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, qv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Rs = { string: [[function(n) {
  var t = Wv.exec(n);
  return t ? (n = t[1]).length <= 4 ? { r: parseInt(n[0] + n[0], 16), g: parseInt(n[1] + n[1], 16), b: parseInt(n[2] + n[2], 16), a: n.length === 4 ? ur(parseInt(n[3] + n[3], 16) / 255, 2) : 1 } : n.length === 6 || n.length === 8 ? { r: parseInt(n.substr(0, 2), 16), g: parseInt(n.substr(2, 2), 16), b: parseInt(n.substr(4, 2), 16), a: n.length === 8 ? ur(parseInt(n.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(n) {
  var t = $v.exec(n) || qv.exec(n);
  return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Bl({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null;
}, "rgb"], [function(n) {
  var t = Hv.exec(n) || Vv.exec(n);
  if (!t)
    return null;
  var r, e, i = Gl({ h: (r = t[1], e = t[2], e === void 0 && (e = "deg"), Number(r) * (Xv[e] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) });
  return Nl(i);
}, "hsl"]], object: [[function(n) {
  var t = n.r, r = n.g, e = n.b, i = n.a, a = i === void 0 ? 1 : i;
  return be(t) && be(r) && be(e) ? Bl({ r: Number(t), g: Number(r), b: Number(e), a: Number(a) }) : null;
}, "rgb"], [function(n) {
  var t = n.h, r = n.s, e = n.l, i = n.a, a = i === void 0 ? 1 : i;
  if (!be(t) || !be(r) || !be(e))
    return null;
  var o = Gl({ h: Number(t), s: Number(r), l: Number(e), a: Number(a) });
  return Nl(o);
}, "hsl"], [function(n) {
  var t = n.h, r = n.s, e = n.v, i = n.a, a = i === void 0 ? 1 : i;
  if (!be(t) || !be(r) || !be(e))
    return null;
  var o = function(s) {
    return { h: yc(s.h), s: Kr(s.s, 0, 100), v: Kr(s.v, 0, 100), a: Kr(s.a) };
  }({ h: Number(t), s: Number(r), v: Number(e), a: Number(a) });
  return Sc(o);
}, "hsv"]] }, Ll = function(n, t) {
  for (var r = 0; r < t.length; r++) {
    var e = t[r][0](n);
    if (e)
      return [e, t[r][1]];
  }
  return [null, void 0];
}, Uv = function(n) {
  return typeof n == "string" ? Ll(n.trim(), Rs.string) : typeof n == "object" && n !== null ? Ll(n, Rs.object) : [null, void 0];
}, Ko = function(n, t) {
  var r = Vi(n);
  return { h: r.h, s: Kr(r.s + 100 * t, 0, 100), l: r.l, a: r.a };
}, Zo = function(n) {
  return (299 * n.r + 587 * n.g + 114 * n.b) / 1e3 / 255;
}, Yl = function(n, t) {
  var r = Vi(n);
  return { h: r.h, s: r.s, l: Kr(r.l + 100 * t, 0, 100), a: r.a };
}, Is = function() {
  function n(t) {
    this.parsed = Uv(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return n.prototype.isValid = function() {
    return this.parsed !== null;
  }, n.prototype.brightness = function() {
    return ur(Zo(this.rgba), 2);
  }, n.prototype.isDark = function() {
    return Zo(this.rgba) < 0.5;
  }, n.prototype.isLight = function() {
    return Zo(this.rgba) >= 0.5;
  }, n.prototype.toHex = function() {
    return t = jo(this.rgba), r = t.r, e = t.g, i = t.b, o = (a = t.a) < 1 ? za(ur(255 * a)) : "", "#" + za(r) + za(e) + za(i) + o;
    var t, r, e, i, a, o;
  }, n.prototype.toRgb = function() {
    return jo(this.rgba);
  }, n.prototype.toRgbString = function() {
    return t = jo(this.rgba), r = t.r, e = t.g, i = t.b, (a = t.a) < 1 ? "rgba(" + r + ", " + e + ", " + i + ", " + a + ")" : "rgb(" + r + ", " + e + ", " + i + ")";
    var t, r, e, i, a;
  }, n.prototype.toHsl = function() {
    return Fl(Vi(this.rgba));
  }, n.prototype.toHslString = function() {
    return t = Fl(Vi(this.rgba)), r = t.h, e = t.s, i = t.l, (a = t.a) < 1 ? "hsla(" + r + ", " + e + "%, " + i + "%, " + a + ")" : "hsl(" + r + ", " + e + "%, " + i + "%)";
    var t, r, e, i, a;
  }, n.prototype.toHsv = function() {
    return t = bc(this.rgba), { h: ur(t.h), s: ur(t.s), v: ur(t.v), a: ur(t.a, 3) };
    var t;
  }, n.prototype.invert = function() {
    return qt({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
    var t;
  }, n.prototype.saturate = function(t) {
    return t === void 0 && (t = 0.1), qt(Ko(this.rgba, t));
  }, n.prototype.desaturate = function(t) {
    return t === void 0 && (t = 0.1), qt(Ko(this.rgba, -t));
  }, n.prototype.grayscale = function() {
    return qt(Ko(this.rgba, -1));
  }, n.prototype.lighten = function(t) {
    return t === void 0 && (t = 0.1), qt(Yl(this.rgba, t));
  }, n.prototype.darken = function(t) {
    return t === void 0 && (t = 0.1), qt(Yl(this.rgba, -t));
  }, n.prototype.rotate = function(t) {
    return t === void 0 && (t = 15), this.hue(this.hue() + t);
  }, n.prototype.alpha = function(t) {
    return typeof t == "number" ? qt({ r: (r = this.rgba).r, g: r.g, b: r.b, a: t }) : ur(this.rgba.a, 3);
    var r;
  }, n.prototype.hue = function(t) {
    var r = Vi(this.rgba);
    return typeof t == "number" ? qt({ h: t, s: r.s, l: r.l, a: r.a }) : ur(r.h);
  }, n.prototype.isEqual = function(t) {
    return this.toHex() === qt(t).toHex();
  }, n;
}(), qt = function(n) {
  return n instanceof Is ? n : new Is(n);
}, Xl = [], wc = function(n) {
  n.forEach(function(t) {
    Xl.indexOf(t) < 0 && (t(Is, Rs), Xl.push(t));
  });
};
function jv(n) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.map(function(e) {
    return e.split(" ").map(function(i) {
      return i ? "" + n + i : "";
    }).join(" ");
  }).join(" ");
}
function Kv(n, t) {
  return t.replace(/([^}{]*){/gm, function(r, e) {
    return e.replace(/\.([^{,\s\d.]+)/g, "." + n + "$1") + "{";
  });
}
function Me(n, t) {
  return function(r) {
    r && (n[t] = r);
  };
}
function Cc(n, t, r) {
  return function(e) {
    e && (n[t][r] = e);
  };
}
function Wl(n, t) {
  return function(r) {
    var e = r.prototype;
    n.forEach(function(i) {
      t(e, i);
    });
  };
}
function Zv(n, t) {
  return t === void 0 && (t = {}), function(r, e) {
    n.forEach(function(i) {
      var a = t[i] || i;
      a in r || (r[a] = function() {
        for (var o, s = [], u = 0; u < arguments.length; u++)
          s[u] = arguments[u];
        var l = (o = this[e])[i].apply(o, s);
        return l === this[e] ? this : l;
      });
    });
  };
}
var Qv = "function", Jv = "object", th = "string", rh = "number", Mu = "undefined", Dc = typeof window !== Mu, eh = typeof document !== Mu && document, nh = [{
  open: "(",
  close: ")"
}, {
  open: '"',
  close: '"'
}, {
  open: "'",
  close: "'"
}, {
  open: '\\"',
  close: '\\"'
}, {
  open: "\\'",
  close: "\\'"
}], tr = 1e-7, Aa = {
  cm: function(n) {
    return n * 96 / 2.54;
  },
  mm: function(n) {
    return n * 96 / 254;
  },
  in: function(n) {
    return n * 96;
  },
  pt: function(n) {
    return n * 96 / 72;
  },
  pc: function(n) {
    return n * 96 / 6;
  },
  "%": function(n, t) {
    return n * t / 100;
  },
  vw: function(n, t) {
    return t === void 0 && (t = window.innerWidth), n / 100 * t;
  },
  vh: function(n, t) {
    return t === void 0 && (t = window.innerHeight), n / 100 * t;
  },
  vmax: function(n, t) {
    return t === void 0 && (t = Math.max(window.innerWidth, window.innerHeight)), n / 100 * t;
  },
  vmin: function(n, t) {
    return t === void 0 && (t = Math.min(window.innerWidth, window.innerHeight)), n / 100 * t;
  }
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ih() {
  for (var n = 0, t = 0, r = arguments.length; t < r; t++)
    n += arguments[t].length;
  for (var e = Array(n), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      e[i] = a[o];
  return e;
}
function so(n, t, r, e) {
  return (n * e + t * r) / (r + e);
}
function Po(n) {
  return typeof n === Mu;
}
function le(n) {
  return n && typeof n === Jv;
}
function rr(n) {
  return Array.isArray(n);
}
function Pr(n) {
  return typeof n === th;
}
function oi(n) {
  return typeof n === rh;
}
function Ou(n) {
  return typeof n === Qv;
}
function ah(n, t) {
  var r = n === "" || n == " ", e = t === "" || t == " ";
  return e && r || n === t;
}
function Ec(n, t, r, e, i) {
  var a = Pu(n, t, r);
  return a ? r : oh(n, t, r + 1, e, i);
}
function Pu(n, t, r) {
  if (!n.ignore)
    return null;
  var e = t.slice(Math.max(r - 3, 0), r + 3).join("");
  return new RegExp(n.ignore).exec(e);
}
function oh(n, t, r, e, i) {
  for (var a = function(l) {
    var f = t[l].trim();
    if (f === n.close && !Pu(n, t, l))
      return {
        value: l
      };
    var d = l, p = Rr(i, function(c) {
      var h = c.open;
      return h === f;
    });
    if (p && (d = Ec(p, t, l, e, i)), d === -1)
      return o = l, "break";
    l = d, o = l;
  }, o, s = r; s < e; ++s) {
    var u = a(s);
    if (s = o, typeof u == "object")
      return u.value;
    if (u === "break")
      break;
  }
  return -1;
}
function Ru(n, t) {
  var r = Pr(t) ? {
    separator: t
  } : t, e = r.separator, i = e === void 0 ? "," : e, a = r.isSeparateFirst, o = r.isSeparateOnlyOpenClose, s = r.isSeparateOpenClose, u = s === void 0 ? o : s, l = r.openCloseCharacters, f = l === void 0 ? nh : l, d = f.map(function(C) {
    var w = C.open, D = C.close;
    return w === D ? w : w + "|" + D;
  }).join("|"), p = "(\\s*" + i + "\\s*|" + d + "|\\s+)", c = new RegExp(p, "g"), h = n.split(c).filter(function(C) {
    return C && C !== "undefined";
  }), v = h.length, g = [], _ = [];
  function m() {
    return _.length ? (g.push(_.join("")), _ = [], !0) : !1;
  }
  for (var y = function(C) {
    var w = h[C].trim(), D = C, T = Rr(f, function(E) {
      var I = E.open;
      return I === w;
    }), O = Rr(f, function(E) {
      var I = E.close;
      return I === w;
    });
    if (T) {
      if (D = Ec(T, h, C, v, f), D !== -1 && u)
        return m() && a || (g.push(h.slice(C, D + 1).join("")), C = D, a) ? (b = C, "break") : (b = C, "continue");
    } else if (O && !Pu(O, h, C)) {
      var M = ih(f);
      return M.splice(f.indexOf(O), 1), {
        value: Ru(n, {
          separator: i,
          isSeparateFirst: a,
          isSeparateOnlyOpenClose: o,
          isSeparateOpenClose: u,
          openCloseCharacters: M
        })
      };
    } else if (ah(w, i) && !o)
      return m(), a ? (b = C, "break") : (b = C, "continue");
    D === -1 && (D = v - 1), _.push(h.slice(C, D + 1).join("")), C = D, b = C;
  }, b, x = 0; x < v; ++x) {
    var S = y(x);
    if (x = b, typeof S == "object")
      return S.value;
    if (S === "break")
      break;
  }
  return _.length && g.push(_.join("")), g;
}
function Ke(n) {
  return Ru(n, "");
}
function mn(n) {
  return Ru(n, ",");
}
function Tc(n) {
  var t = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(n);
  return !t || t.length < 4 ? {} : {
    prefix: t[1],
    value: t[2],
    suffix: t[3]
  };
}
function ya(n) {
  var t = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(n);
  if (!t)
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  var r = t[1], e = t[2], i = t[3];
  return {
    prefix: r,
    unit: i,
    value: parseFloat(e)
  };
}
function sh(n) {
  return n.replace(/[\s-_]+([^\s-_])/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Qa(n, t) {
  return t === void 0 && (t = "-"), n.replace(/([a-z])([A-Z])/g, function(r, e, i) {
    return "" + e + t + i.toLowerCase();
  });
}
function aa() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function Re(n, t, r) {
  r === void 0 && (r = -1);
  for (var e = n.length, i = 0; i < e; ++i)
    if (t(n[i], i, n))
      return i;
  return r;
}
function Rr(n, t, r) {
  var e = Re(n, t);
  return e > -1 ? n[e] : r;
}
var Mc = /* @__PURE__ */ function() {
  var n = aa(), t = Dc && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return t ? t.bind(window) : function(r) {
    var e = aa(), i = setTimeout(function() {
      r(e - n);
    }, 1e3 / 60);
    return i;
  };
}(), uh = /* @__PURE__ */ function() {
  var n = Dc && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return n ? n.bind(window) : function(t) {
    clearTimeout(t);
  };
}();
function Ie(n) {
  return Object.keys(n);
}
function lh(n) {
  var t = Ie(n);
  return t.map(function(r) {
    return n[r];
  });
}
function Ot(n, t) {
  var r = ya(n), e = r.value, i = r.unit;
  if (le(t)) {
    var a = t[i];
    if (a) {
      if (Ou(a))
        return a(e);
      if (Aa[i])
        return Aa[i](e, a);
    }
  } else if (i === "%")
    return e * t / 100;
  return Aa[i] ? Aa[i](e) : e;
}
function ks(n, t, r) {
  return Math.max(t, Math.min(n, r));
}
function Hl(n, t, r, e) {
  return e === void 0 && (e = n[0] / n[1]), [[ct(t[0], tr), ct(t[0] / e, tr)], [ct(t[1] * e, tr), ct(t[1], tr)]].filter(function(i) {
    return i.every(function(a, o) {
      var s = t[o], u = ct(s, tr);
      return r ? a <= s || a <= u : a >= s || a >= u;
    });
  })[0] || n;
}
function Oc(n, t, r, e) {
  if (!e)
    return n.map(function(c, h) {
      return ks(c, t[h], r[h]);
    });
  var i = n[0], a = n[1], o = e === !0 ? i / a : e, s = Hl(n, t, !1, o), u = s[0], l = s[1], f = Hl(n, r, !0, o), d = f[0], p = f[1];
  return i < u || a < l ? (i = u, a = l) : (i > d || a > p) && (i = d, a = p), [i, a];
}
function fh(n) {
  for (var t = n.length, r = 0, e = t - 1; e >= 0; --e)
    r += n[e];
  return r;
}
function zs(n) {
  for (var t = n.length, r = 0, e = t - 1; e >= 0; --e)
    r += n[e];
  return t ? r / t : 0;
}
function jt(n, t) {
  var r = t[0] - n[0], e = t[1] - n[1], i = Math.atan2(e, r);
  return i >= 0 ? i : i + Math.PI * 2;
}
function ch(n) {
  return [0, 1].map(function(t) {
    return zs(n.map(function(r) {
      return r[t];
    }));
  });
}
function Vl(n) {
  var t = ch(n), r = jt(t, n[0]), e = jt(t, n[1]);
  return r < e && e - r < Math.PI || r > e && e - r < -Math.PI ? 1 : -1;
}
function Oe(n, t) {
  return Math.sqrt(Math.pow((t ? t[0] : 0) - n[0], 2) + Math.pow((t ? t[1] : 0) - n[1], 2));
}
function ct(n, t) {
  if (!t)
    return n;
  var r = 1 / t;
  return Math.round(n / t) / r;
}
function $l(n, t) {
  return n.forEach(function(r, e) {
    n[e] = ct(n[e], t);
  }), n;
}
function dh(n) {
  for (var t = [], r = 0; r < n; ++r)
    t.push(r);
  return t;
}
function Pc(n) {
  return n.reduce(function(t, r) {
    return t.concat(r);
  }, []);
}
function Rc(n, t) {
  n.indexOf(t) === -1 && n.push(t);
}
function or(n, t) {
  return n.classList ? n.classList.contains(t) : !!n.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
}
function Ic(n, t) {
  n.classList ? n.classList.add(t) : n.className += " " + t;
}
function kc(n, t) {
  if (n.classList)
    n.classList.remove(t);
  else {
    var r = new RegExp("(\\s|^)" + t + "(\\s|$)");
    n.className = n.className.replace(r, " ");
  }
}
function cr(n, t, r, e) {
  n.addEventListener(t, r, e);
}
function ir(n, t, r, e) {
  n.removeEventListener(t, r, e);
}
function bi(n) {
  return (n == null ? void 0 : n.ownerDocument) || eh;
}
function Iu(n) {
  return bi(n).documentElement;
}
function en(n) {
  return bi(n).body;
}
function qe(n) {
  var t;
  return ((t = n == null ? void 0 : n.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView) || window;
}
function zc(n) {
  return n && "postMessage" in n && "blur" in n && "self" in n;
}
function Si(n) {
  return le(n) && n.nodeName && n.nodeType && "ownerDocument" in n;
}
var ph = /* @__PURE__ */ function() {
  function n() {
    this.keys = [], this.values = [];
  }
  var t = n.prototype;
  return t.get = function(r) {
    return this.values[this.keys.indexOf(r)];
  }, t.set = function(r, e) {
    var i = this.keys, a = this.values, o = i.indexOf(r), s = o === -1 ? i.length : o;
    i[s] = r, a[s] = e;
  }, n;
}(), vh = /* @__PURE__ */ function() {
  function n() {
    this.object = {};
  }
  var t = n.prototype;
  return t.get = function(r) {
    return this.object[r];
  }, t.set = function(r, e) {
    this.object[r] = e;
  }, n;
}(), hh = typeof Map == "function", gh = /* @__PURE__ */ function() {
  function n() {
  }
  var t = n.prototype;
  return t.connect = function(r, e) {
    this.prev = r, this.next = e, r && (r.next = this), e && (e.prev = this);
  }, t.disconnect = function() {
    var r = this.prev, e = this.next;
    r && (r.next = e), e && (e.prev = r);
  }, t.getIndex = function() {
    for (var r = this, e = -1; r; )
      r = r.prev, ++e;
    return e;
  }, n;
}();
function _h(n, t) {
  var r = [], e = [];
  return n.forEach(function(i) {
    var a = i[0], o = i[1], s = new gh();
    r[a] = s, e[o] = s;
  }), r.forEach(function(i, a) {
    i.connect(r[a - 1]);
  }), n.filter(function(i, a) {
    return !t[a];
  }).map(function(i, a) {
    var o = i[0], s = i[1];
    if (o === s)
      return [0, 0];
    var u = r[o], l = e[s - 1], f = u.getIndex();
    u.disconnect(), l ? u.connect(l, l.next) : u.connect(void 0, r[0]);
    var d = u.getIndex();
    return [f, d];
  });
}
var mh = /* @__PURE__ */ function() {
  function n(r, e, i, a, o, s, u, l) {
    this.prevList = r, this.list = e, this.added = i, this.removed = a, this.changed = o, this.maintained = s, this.changedBeforeAdded = u, this.fixed = l;
  }
  var t = n.prototype;
  return Object.defineProperty(t, "ordered", {
    get: function() {
      return this.cacheOrdered || this.caculateOrdered(), this.cacheOrdered;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "pureChanged", {
    get: function() {
      return this.cachePureChanged || this.caculateOrdered(), this.cachePureChanged;
    },
    enumerable: !0,
    configurable: !0
  }), t.caculateOrdered = function() {
    var r = _h(this.changedBeforeAdded, this.fixed), e = this.changed, i = [];
    this.cacheOrdered = r.filter(function(a, o) {
      var s = a[0], u = a[1], l = e[o], f = l[0], d = l[1];
      if (s !== u)
        return i.push([f, d]), !0;
    }), this.cachePureChanged = i;
  }, n;
}();
function ba(n, t, r) {
  var e = hh ? Map : r ? vh : ph, i = r || function(m) {
    return m;
  }, a = [], o = [], s = [], u = n.map(i), l = t.map(i), f = new e(), d = new e(), p = [], c = [], h = {}, v = [], g = 0, _ = 0;
  return u.forEach(function(m, y) {
    f.set(m, y);
  }), l.forEach(function(m, y) {
    d.set(m, y);
  }), u.forEach(function(m, y) {
    var b = d.get(m);
    typeof b > "u" ? (++_, o.push(y)) : h[b] = _;
  }), l.forEach(function(m, y) {
    var b = f.get(m);
    typeof b > "u" ? (a.push(y), ++g) : (s.push([b, y]), _ = h[y] || 0, p.push([b - _, y - g]), c.push(y === b), b !== y && v.push([b, y]));
  }), o.reverse(), new mh(n, t, a, o, v, s, p, c);
}
var xh = /* @__PURE__ */ function() {
  function n(r, e) {
    r === void 0 && (r = []), this.findKeyCallback = e, this.list = [].slice.call(r);
  }
  var t = n.prototype;
  return t.update = function(r) {
    var e = [].slice.call(r), i = ba(this.list, e, this.findKeyCallback);
    return this.list = e, i;
  }, n;
}(), As = function(n, t) {
  return As = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
    r.__proto__ = e;
  } || function(r, e) {
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
  }, As(n, t);
};
function Sa(n, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  As(n, t);
  function r() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var pe = function() {
  return pe = Object.assign || function(t) {
    for (var r, e = 1, i = arguments.length; e < i; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, pe.apply(this, arguments);
};
function Ac(n, t) {
  var r = {};
  for (var e in n)
    Object.prototype.hasOwnProperty.call(n, e) && t.indexOf(e) < 0 && (r[e] = n[e]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, e = Object.getOwnPropertySymbols(n); i < e.length; i++)
      t.indexOf(e[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, e[i]) && (r[e[i]] = n[e[i]]);
  return r;
}
function ql(n, t, r) {
  if (r || arguments.length === 2)
    for (var e = 0, i = t.length, a; e < i; e++)
      (a || !(e in t)) && (a || (a = Array.prototype.slice.call(t, 0, e)), a[e] = t[e]);
  return n.concat(a || Array.prototype.slice.call(t));
}
function Ul(n) {
  var t = 0;
  return n.map(function(r) {
    return r == null ? "$compat".concat(++t) : "".concat(r);
  });
}
function Bc(n) {
  var t = [];
  return n.forEach(function(r) {
    t = t.concat(rr(r) ? Bc(r) : r);
  }), t;
}
function Qo(n, t) {
  if (!t)
    return n;
  for (var r in t)
    Po(n[r]) && (n[r] = t[r]);
  return n;
}
function uo(n, t) {
  if (n === t)
    return !1;
  for (var r in n)
    if (!(r in t))
      return !0;
  for (var r in t)
    if (n[r] !== t[r])
      return !0;
  return !1;
}
function jl(n) {
  var t = n.className, r = Ac(n, ["className"]);
  return t != null && (r.class = t), delete r.style, delete r.children, r;
}
function Kl(n) {
  var t = {}, r = {};
  for (var e in n)
    e.indexOf("on") === 0 ? r[e] = n[e] : t[e] = n[e];
  return [t, r];
}
function Ro(n) {
  if (!n)
    return null;
  var t = n.b;
  return Si(t) ? t : Ro(n.c);
}
function Gc(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function Fc(n) {
  n.forEach(function(t) {
    t();
  });
}
function yh() {
  return this.constructor(this.props, this.context);
}
var ku = 0, Io = /* @__PURE__ */ function() {
  function n(r, e, i, a, o, s, u) {
    u === void 0 && (u = {}), this.t = r, this.d = e, this.k = i, this.i = a, this.c = o, this.ref = s, this.ps = u, this.typ = "prov", this._ps = [], this._cs = {}, this._hyd = null, this._sel = !1;
  }
  var t = n.prototype;
  return t.s = function() {
    return !0;
  }, t.u = function(r, e, i, a, o) {
    var s = this, u = s.d, l = lh(e).filter(function(h) {
      return h.$_req;
    }), f = Bc(l.map(function(h) {
      return h.$_subs;
    })), d = Rr(f, function(h) {
      return h.d === u;
    });
    if (s.b && !Pr(i) && !o && !s.s(i.props, a) && !d) {
      var p = f.reduce(function(h, v) {
        var g = v.d;
        return h[0] ? h[0].d === g && h.push(v) : g > u && h.push(v), h;
      }, []);
      return p.forEach(function(h) {
        wa(h, h._ps, [h.o], r, e, !0);
      }), !1;
    }
    s.o = i, s.ss(a);
    var c = s.ps;
    return Pr(i) || (s.ps = i.props, s.ref = i.ref), zu(this), s.r(r, e, s.b ? c : {}, a), !0;
  }, t.md = function() {
    this.rr();
  }, t.ss = function() {
  }, t.ud = function() {
    this.rr();
  }, t.rr = function() {
    var r = this, e = r.ref, i = r.fr;
    e && e(i ? i.current : r.b);
  }, n;
}();
function Nc() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function bh() {
  return ku;
}
function Sh(n) {
  ku = n;
}
function zu(n) {
  return Object.__CROACT_CURRENT_INSTNACE__ = n, ku = 0, n;
}
var Au = /* @__PURE__ */ function() {
  function n(r, e) {
    r === void 0 && (r = {}), this.props = r, this.context = e, this.state = {}, this.$_timer = 0, this.$_state = {}, this.$_subs = [], this.$_cs = {};
  }
  var t = n.prototype;
  return t.render = function() {
    return null;
  }, t.shouldComponentUpdate = function(r, e) {
    return this.props !== r || this.state !== e;
  }, t.setState = function(r, e, i) {
    var a = this;
    a.$_timer || (a.$_state = {}), clearTimeout(a.$_timer), a.$_timer = 0, a.$_state = pe(pe({}, a.$_state), r), i ? a.$_setState(e, i) : a.$_timer = window.setTimeout(function() {
      a.$_timer = 0, a.$_setState(e, i);
    });
  }, t.forceUpdate = function(r) {
    this.setState({}, r, !0);
  }, t.componentDidMount = function() {
  }, t.componentDidUpdate = function(r, e) {
  }, t.componentWillUnmount = function() {
  }, t.$_setState = function(r, e) {
    var i = [], a = this.$_p, o = wa(a.c, [a], [a.o], i, a._cs, pe(pe({}, this.state), this.$_state), e);
    o && (r && i.push(r), Fc(i), zu(null));
  }, n;
}(), Lc = /* @__PURE__ */ function(n) {
  Sa(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return r.shouldComponentUpdate = function(e, i) {
    return uo(this.props, e) || uo(this.state, i);
  }, t;
}(Au);
function Yc(n) {
  var t = function(r) {
    t.current = r;
  };
  return t.current = n, t;
}
function wh(n) {
  return n._fr = !0, n;
}
function Ch(n, t, r, e) {
  var i, a;
  return !((i = n == null ? void 0 : n.prototype) === null || i === void 0) && i.render ? a = new n(t, r) : (a = new Au(t, r), a.constructor = n, n._fr ? (e.fr = Yc(), a.render = function() {
    return this.constructor(this.props, e.fr);
  }) : a.render = yh), a.$_p = e, a;
}
var Dh = /* @__PURE__ */ function(n) {
  Sa(t, n);
  function t(e, i, a, o, s, u, l) {
    l === void 0 && (l = {});
    var f = n.call(this, e, i, a, o, s, u, Qo(l, e.defaultProps)) || this;
    return f.typ = "comp", f._usefs = [], f._uefs = [], f._defs = [], f;
  }
  var r = t.prototype;
  return r.s = function(e, i) {
    var a = this.b;
    return a.shouldComponentUpdate(Qo(e, this.t.defaultProps), i || a.state) !== !1;
  }, r.r = function(e, i, a) {
    var o, s, u = this, l = u.t;
    u.ps = Qo(u.ps, u.t.defaultProps);
    var f = u.ps, d = !u.b, p = l.contextType, c = u.b, h = p == null ? void 0 : p.get(u);
    u._cs = i, d ? (c = Ch(l, f, h, u), u.b = c) : (c.props = f, c.context = h);
    var v = c.state;
    u._usefs = [], u._uefs = [];
    var g = c.render();
    ((s = (o = g == null ? void 0 : g.props) === null || o === void 0 ? void 0 : o.children) === null || s === void 0 ? void 0 : s.length) === 0 && (g.props.children = u.ps.children);
    var _ = pe(pe({}, i), c.$_cs);
    wa(u, u._ps, g ? [g] : [], e, _), d ? u._uefs.push(function() {
      p == null || p.register(u), c.componentDidMount();
    }) : u._uefs.push(function() {
      c.componentDidUpdate(a, v);
    }), e.push(function() {
      u._usefs.forEach(function(m) {
        m();
      }), d ? u.md() : u.ud(), u._defs = u._uefs.map(function(m) {
        return m();
      });
    });
  }, r.ss = function(e) {
    var i = this.b;
    !i || !e || (i.state = e);
  }, r.un = function() {
    var e, i = this;
    i._ps.forEach(function(o) {
      o.un();
    });
    var a = i.t;
    (e = a.contextType) === null || e === void 0 || e.unregister(i), clearTimeout(i.b.$_timer), i._defs.forEach(function(o) {
      o && o();
    }), i.b.componentWillUnmount();
  }, t;
}(Io);
function Eh(n, t, r) {
  var e = Bu(jl(n), jl(t)), i = e.added, a = e.removed, o = e.changed;
  for (var s in i)
    r.setAttribute(s, i[s]);
  for (var u in o)
    r.setAttribute(u, o[u][1]);
  for (var l in a)
    r.removeAttribute(l);
}
function Th(n, t, r) {
  var e = Bu(n, t), i = e.added, a = e.removed;
  for (var o in a)
    r.e(o, !0);
  for (var s in i)
    r.e(s);
}
function Bu(n, t) {
  var r = Ie(n), e = Ie(t), i = ba(r, e, function(u) {
    return u;
  }), a = {}, o = {}, s = {};
  return i.added.forEach(function(u) {
    var l = e[u];
    a[l] = t[l];
  }), i.removed.forEach(function(u) {
    var l = r[u];
    o[l] = n[l];
  }), i.maintained.forEach(function(u) {
    var l = u[0], f = r[l], d = [n[f], t[f]];
    n[f] !== t[f] && (s[f] = d);
  }), {
    added: a,
    removed: o,
    changed: s
  };
}
function Mh(n, t, r) {
  var e = r.style, i = Bu(n, t), a = i.added, o = i.removed, s = i.changed;
  for (var u in a) {
    var l = Qa(u, "-");
    e.setProperty(l, a[u]);
  }
  for (var u in s) {
    var f = Qa(u, "-");
    e.setProperty(f, s[u][1]);
  }
  for (var u in o) {
    var d = Qa(u, "-");
    e.removeProperty(d);
  }
}
function Oh(n) {
  return n.replace(/^on/g, "").toLowerCase();
}
var Ph = /* @__PURE__ */ function(n) {
  Sa(t, n);
  function t() {
    var e = n !== null && n.apply(this, arguments) || this;
    return e.typ = "elem", e._es = {}, e._svg = !1, e;
  }
  var r = t.prototype;
  return r.e = function(e, i) {
    var a = this, o = a._es, s = a.b, u = Oh(e);
    i ? (ir(s, u, o[e]), delete o[e]) : (o[e] = function(l) {
      var f, d;
      (d = (f = a.ps)[e]) === null || d === void 0 || d.call(f, l);
    }, cr(s, u, o[e]));
  }, r.s = function(e) {
    return uo(this.ps, e);
  }, r.r = function(e, i, a) {
    var o, s = this, u = !s.b, l = s.ps;
    if (u) {
      var f = Ro(s.c), d = !1;
      s._svg || s.t === "svg" ? d = !0 : d = f && f.ownerSVGElement, s._svg = d;
      var p = (o = s._hyd) === null || o === void 0 ? void 0 : o.splice(0, 1)[0], c = s.t;
      if (p)
        s._hyd = [].slice.call(p.children || []);
      else {
        var h = bi(f);
        d ? p = h.createElementNS("http://www.w3.org/2000/svg", c) : p = h.createElement(c);
      }
      s.b = p;
    }
    wa(s, s._ps, l.children, e, i);
    var v = s.b, g = Kl(a), _ = g[0], m = g[1], y = Kl(l), b = y[0], x = y[1];
    return Eh(_, b, v), Th(m, x, s), Mh(a.style || {}, l.style || {}, v), e.push(function() {
      u ? s.md() : s.ud();
    }), !0;
  }, r.un = function() {
    var e = this, i = e._es, a = e.b;
    for (var o in i)
      ir(a, o, i[o]);
    e._ps.forEach(function(s) {
      s.un();
    }), e._es = {}, e._sel || Gc(a);
  }, t;
}(Io);
function oa(n) {
  if (!n || Si(n))
    return n;
  var t = n.$_p._ps;
  return t.length ? oa(t[0].b) : null;
}
function Xc(n) {
  if (n) {
    if (n.b && Si(n.b))
      return n;
    var t = n._ps;
    return t.length ? Xc(t[0]) : null;
  }
}
function oe(n, t) {
  for (var r = [], e = 2; e < arguments.length; e++)
    r[e - 2] = arguments[e];
  var i = t || {}, a = i.key, o = i.ref, s = Ac(i, ["key", "ref"]);
  return {
    type: n,
    key: a,
    ref: o,
    props: pe(pe({}, s), {
      children: Pc(r).filter(function(u) {
        return u != null && u !== !1;
      })
    })
  };
}
var Wc = /* @__PURE__ */ function(n) {
  Sa(t, n);
  function t(e, i) {
    i === void 0 && (i = 0);
    var a = n.call(this, "container", i, "container", 0, null) || this;
    return a.typ = "container", a.b = e, a;
  }
  var r = t.prototype;
  return r.r = function() {
    return !0;
  }, r.un = function() {
  }, t;
}(Io), Rh = /* @__PURE__ */ function(n) {
  Sa(t, n);
  function t() {
    var e = n !== null && n.apply(this, arguments) || this;
    return e.typ = "text", e;
  }
  var r = t.prototype;
  return r.r = function(e) {
    var i, a = this, o = !a.b;
    if (o) {
      var s = Ro(a.c), u = (i = a._hyd) === null || i === void 0 ? void 0 : i.splice(0, 1)[0];
      a.b = u || bi(s).createTextNode(a.t.replace("text_", ""));
    }
    return e.push(function() {
      o ? a.md() : a.ud();
    }), !0;
  }, r.un = function() {
    Gc(this.b);
  }, t;
}(Io);
function Ih(n, t, r) {
  var e = r.map(function(u) {
    return Pr(u) ? null : u.key;
  }), i = Ul(t.map(function(u) {
    return u.k;
  })), a = Ul(e), o = ba(i, a, function(u) {
    return u;
  });
  o.removed.forEach(function(u) {
    t.splice(u, 1)[0].un();
  }), o.ordered.forEach(function(u) {
    var l = u[0], f = u[1], d = t.splice(l, 1)[0];
    t.splice(f, 0, d);
    var p = oa(d.b), c = oa(t[f + 1] && t[f + 1].b);
    p && p.parentNode.insertBefore(p, c);
  }), o.added.forEach(function(u) {
    t.splice(u, 0, Zl(r[u], e[u], u, n));
  });
  var s = o.maintained.filter(function(u) {
    u[0];
    var l = u[1], f = r[l], d = t[l], p = Pr(f) ? "text_".concat(f) : f.type;
    return p !== d.t ? (d.un(), t.splice(l, 1, Zl(f, e[l], l, n)), !0) : (d.i = l, !1);
  });
  return ql(ql([], o.added, !0), s.map(function(u) {
    u[0];
    var l = u[1];
    return l;
  }), !0);
}
function kh(n, t) {
  for (var r = n._ps, e = r.length, i = t.i + 1; i < e; ++i) {
    var a = oa(r[i].b);
    if (a)
      return a;
  }
  return null;
}
function Zl(n, t, r, e) {
  var i = e.d + 1;
  if (Pr(n) || oi(n))
    return new Rh("text_".concat(n), i, t, r, e, null, {});
  var a = n.type, o = typeof a == "string" ? Ph : Dh;
  return new o(a, i, t, r, e, n.ref, n.props);
}
function wa(n, t, r, e, i, a, o) {
  var s = Ih(n, t, r), u = n._hyd, l = t.filter(function(d, p) {
    return d._hyd = u, d.u(e, i, r[p], a, o);
  });
  n.typ === "container" && n._sel && t.forEach(function(d) {
    var p = Xc(d);
    p && (p._sel = !0);
  }), n._hyd = null;
  var f = Ro(n);
  return f && s.reverse().forEach(function(d) {
    var p = t[d], c = oa(p.b);
    if (c && f !== c && !c.parentNode) {
      var h = kh(n, p);
      f.insertBefore(c, h);
    }
  }), l.length > 0;
}
function zh(n, t, r, e) {
  r === void 0 && (r = t.__CROACT__), e === void 0 && (e = {});
  var i = !!r;
  r || (r = new Wc(t));
  var a = [];
  return wa(r, r._ps, n ? [n] : [], a, e, void 0, void 0), Fc(a), zu(null), i || (t.__CROACT__ = r), r;
}
function Ql(n, t, r) {
  return !r && n && (r = new Wc(t.parentElement), r._hyd = [t], r._sel = !0), zh(n, t, r), r;
}
function Hc(n) {
  var t = Nc(), r = t._hs || (t._hs = []), e = bh(), i = r[e];
  if (Sh(e + 1), i) {
    if (!uo(i.deps, n.deps))
      return i.updated = !1, i;
    r[e] = n;
  } else
    r.push(n);
  return n.value = n.func(), n.updated = !0, n;
}
function Ah(n, t) {
  var r = Hc({
    func: n,
    deps: t
  });
  return r.value;
}
function Bh(n) {
  return Ah(function() {
    return Yc(n);
  }, []);
}
function Vc(n, t, r) {
  var e = Nc(), i = Hc({
    func: function() {
      return n;
    },
    deps: t
  }), a = r ? e._usefs : e._uefs;
  i.updated ? a.push(function() {
    return i.effect && i.effect(), i.effect = n(), i.effect;
  }) : a.push(function() {
    return i.effect;
  });
}
function Gh(n, t, r) {
  Vc(function() {
    n == null || n(t());
  }, r, !0);
}
function Gu(n, t) {
  for (var r = n.length, e = 0; e < r; ++e)
    if (t(n[e], e))
      return !0;
  return !1;
}
function $c(n, t) {
  for (var r = n.length, e = 0; e < r; ++e)
    if (t(n[e], e))
      return n[e];
  return null;
}
function qc(n) {
  var t = n;
  if (typeof t > "u") {
    if (typeof navigator > "u" || !navigator)
      return "";
    t = navigator.userAgent || "";
  }
  return t.toLowerCase();
}
function Fu(n, t) {
  try {
    return new RegExp(n, "g").exec(t);
  } catch {
    return null;
  }
}
function Fh() {
  if (typeof navigator > "u" || !navigator || !navigator.userAgentData)
    return !1;
  var n = navigator.userAgentData, t = n.brands || n.uaList;
  return !!(t && t.length);
}
function Nh(n, t) {
  var r = Fu("(" + n + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", t);
  return r ? r[3] : "";
}
function Bs(n) {
  return n.replace(/_/g, ".");
}
function Ai(n, t) {
  var r = null, e = "-1";
  return Gu(n, function(i) {
    var a = Fu("(" + i.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", t);
    return !a || i.brand ? !1 : (r = i, e = a[3] || "-1", i.versionAlias ? e = i.versionAlias : i.versionTest && (e = Nh(i.versionTest.toLowerCase(), t) || e), e = Bs(e), !0);
  }), {
    preset: r,
    version: e
  };
}
function Ii(n, t) {
  var r = {
    brand: "",
    version: "-1"
  };
  return Gu(n, function(e) {
    var i = Uc(t, e);
    return i ? (r.brand = e.id, r.version = e.versionAlias || i.version, r.version !== "-1") : !1;
  }), r;
}
function Uc(n, t) {
  return $c(n, function(r) {
    var e = r.brand;
    return Fu("" + t.test, e.toLowerCase());
  });
}
var Gs = [{
  test: "phantomjs",
  id: "phantomjs"
}, {
  test: "whale",
  id: "whale"
}, {
  test: "edgios|edge|edg",
  id: "edge"
}, {
  test: "msie|trident|windows phone",
  id: "ie",
  versionTest: "iemobile|msie|rv"
}, {
  test: "miuibrowser",
  id: "miui browser"
}, {
  test: "samsungbrowser",
  id: "samsung internet"
}, {
  test: "samsung",
  id: "samsung internet",
  versionTest: "version"
}, {
  test: "chrome|crios",
  id: "chrome"
}, {
  test: "firefox|fxios",
  id: "firefox"
}, {
  test: "android",
  id: "android browser",
  versionTest: "version"
}, {
  test: "safari|iphone|ipad|ipod",
  id: "safari",
  versionTest: "version"
}], jc = [{
  test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
  id: "chrome",
  versionTest: "chrome"
}, {
  test: "chromium",
  id: "chrome"
}, {
  test: "whale",
  id: "chrome",
  versionAlias: "-1",
  brand: !0
}], Fs = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], Kc = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], Zc = [{
  test: "windows phone",
  id: "windows phone"
}, {
  test: "windows 2000",
  id: "window",
  versionAlias: "5.0"
}, {
  test: "windows nt",
  id: "window"
}, {
  test: "win32|windows",
  id: "window"
}, {
  test: "iphone|ipad|ipod",
  id: "ios",
  versionTest: "iphone os|cpu os"
}, {
  test: "macos|macintel|mac os x",
  id: "mac"
}, {
  test: "android|linux armv81",
  id: "android"
}, {
  test: "tizen",
  id: "tizen"
}, {
  test: "webos|web0s",
  id: "webos"
}];
function Qc(n) {
  return !!Ai(Kc, n).preset;
}
function Lh(n) {
  var t = qc(n), r = !!/mobi/g.exec(t), e = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: Qc(t),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, i = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, a = Ai(Gs, t), o = a.preset, s = a.version, u = Ai(Zc, t), l = u.preset, f = u.version, d = Ai(jc, t);
  if (e.chromium = !!d.preset, e.chromiumVersion = d.version, !e.chromium) {
    var p = Ai(Fs, t);
    e.webkit = !!p.preset, e.webkitVersion = p.version;
  }
  return l && (i.name = l.id, i.version = f, i.majorVersion = parseInt(f, 10)), o && (e.name = o.id, e.version = s, e.webview && i.name === "ios" && e.name !== "safari" && (e.webview = !1)), e.majorVersion = parseInt(e.version, 10), {
    browser: e,
    os: i,
    isMobile: r,
    isHints: !1
  };
}
function Yh(n) {
  var t = navigator.userAgentData, r = (t.uaList || t.brands).slice(), e = n && n.fullVersionList, i = t.mobile || !1, a = r[0], o = (n && n.platform || t.platform || navigator.platform).toLowerCase(), s = {
    name: a.brand,
    version: a.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!Ii(Kc, r).brand || Qc(qc())
  }, u = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  s.webkit = !s.chromium && Gu(Fs, function(h) {
    return Uc(r, h);
  });
  var l = Ii(jc, r);
  if (s.chromium = !!l.brand, s.chromiumVersion = l.version || "-1", !s.chromium) {
    var f = Ii(Fs, r);
    s.webkit = !!f.brand, s.webkitVersion = f.version || "-1";
  }
  var d = $c(Zc, function(h) {
    return new RegExp("" + h.test, "g").exec(o);
  });
  if (u.name = d ? d.id : "", n && (u.version = n.platformVersion || "-1"), e && e.length) {
    var p = Ii(Gs, e);
    s.name = p.brand || s.name, s.version = p.version || s.version;
  } else {
    var c = Ii(Gs, r);
    s.name = c.brand || s.name, s.version = c.brand && n ? n.uaFullVersion : c.version;
  }
  return s.webkit && (u.name = i ? "ios" : "mac"), u.name === "ios" && s.webview && (s.version = "-1"), u.version = Bs(u.version), s.version = Bs(s.version), u.majorVersion = parseInt(u.version, 10), s.majorVersion = parseInt(s.version, 10), {
    browser: s,
    os: u,
    isMobile: i,
    isHints: !0
  };
}
function Xh(n) {
  return typeof n > "u" && Fh() ? Yh() : Lh(n);
}
function Wh(n, t, r, e, i, a) {
  for (var o = 0; o < i; ++o) {
    var s = r + o * i, u = e + o * i;
    n[s] += n[u] * a, t[s] += t[u] * a;
  }
}
function Hh(n, t, r, e, i) {
  for (var a = 0; a < i; ++a) {
    var o = r + a * i, s = e + a * i, u = n[o], l = t[o];
    n[o] = n[s], n[s] = u, t[o] = t[s], t[s] = l;
  }
}
function Vh(n, t, r, e, i) {
  for (var a = 0; a < e; ++a) {
    var o = r + a * e;
    n[o] /= i, t[o] /= i;
  }
}
function Jc(n, t, r) {
  r === void 0 && (r = Math.sqrt(n.length));
  for (var e = n.slice(), i = 0; i < r; ++i)
    e[i * r + t - 1] = 0, e[(t - 1) * r + i] = 0;
  return e[(t - 1) * (r + 1)] = 1, e;
}
function _e(n, t) {
  t === void 0 && (t = Math.sqrt(n.length));
  for (var r = n.slice(), e = Bt(t), i = 0; i < t; ++i) {
    var a = t * i + i;
    if (!ct(r[a], tr)) {
      for (var o = i + 1; o < t; ++o)
        if (r[t * i + o]) {
          Hh(r, e, i, o, t);
          break;
        }
    }
    if (!ct(r[a], tr))
      return [];
    Vh(r, e, i, t, r[a]);
    for (var o = 0; o < t; ++o) {
      var s = o, u = o + i * t, l = r[u];
      !ct(l, tr) || i === o || Wh(r, e, s, i, t, -l);
    }
  }
  return e;
}
function $h(n, t) {
  t === void 0 && (t = Math.sqrt(n.length));
  for (var r = [], e = 0; e < t; ++e)
    for (var i = 0; i < t; ++i)
      r[i * t + e] = n[t * e + i];
  return r;
}
function td(n, t) {
  t === void 0 && (t = Math.sqrt(n.length));
  for (var r = [], e = n[t * t - 1], i = 0; i < t - 1; ++i)
    r[i] = n[t * (t - 1) + i] / e;
  return r[t - 1] = 0, r;
}
function qh(n, t) {
  for (var r = Bt(t), e = 0; e < t - 1; ++e)
    r[t * (t - 1) + e] = n[e] || 0;
  return r;
}
function En(n, t) {
  for (var r = n.slice(), e = n.length; e < t - 1; ++e)
    r[e] = 0;
  return r[t - 1] = 1, r;
}
function fe(n, t, r) {
  if (t === void 0 && (t = Math.sqrt(n.length)), t === r)
    return n;
  for (var e = Bt(r), i = Math.min(t, r), a = 0; a < i - 1; ++a) {
    for (var o = 0; o < i - 1; ++o)
      e[a * r + o] = n[a * t + o];
    e[(a + 1) * r - 1] = n[(a + 1) * t - 1], e[(r - 1) * r + a] = n[(t - 1) * t + a];
  }
  return e[r * r - 1] = n[t * t - 1], e;
}
function lo(n) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var e = Bt(n);
  return t.forEach(function(i) {
    e = Pt(e, i, n);
  }), e;
}
function Pt(n, t, r) {
  r === void 0 && (r = Math.sqrt(n.length));
  var e = [], i = n.length / r, a = t.length / i;
  if (i) {
    if (!a)
      return n;
  } else
    return t;
  for (var o = 0; o < r; ++o)
    for (var s = 0; s < a; ++s) {
      e[s * r + o] = 0;
      for (var u = 0; u < i; ++u)
        e[s * r + o] += n[u * r + o] * t[s * i + u];
    }
  return e;
}
function Ct(n, t) {
  for (var r = Math.min(n.length, t.length), e = n.slice(), i = 0; i < r; ++i)
    e[i] = e[i] + t[i];
  return e;
}
function lt(n, t) {
  for (var r = Math.min(n.length, t.length), e = n.slice(), i = 0; i < r; ++i)
    e[i] = e[i] - t[i];
  return e;
}
function Uh(n, t) {
  return t === void 0 && (t = n.length === 6), t ? [n[0], n[1], 0, n[2], n[3], 0, n[4], n[5], 1] : n;
}
function rd(n, t) {
  return t === void 0 && (t = n.length === 9), t ? [n[0], n[1], n[3], n[4], n[6], n[7]] : n;
}
function _r(n, t, r) {
  r === void 0 && (r = t.length);
  var e = Pt(n, t, r), i = e[r - 1];
  return e.map(function(a) {
    return a / i;
  });
}
function jh(n, t) {
  return Pt(n, [1, 0, 0, 0, 0, Math.cos(t), Math.sin(t), 0, 0, -Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1], 4);
}
function Kh(n, t) {
  return Pt(n, [Math.cos(t), 0, -Math.sin(t), 0, 0, 1, 0, 0, Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1], 4);
}
function Zh(n, t) {
  return Pt(n, Da(t, 4));
}
function Ba(n, t) {
  var r = t[0], e = r === void 0 ? 1 : r, i = t[1], a = i === void 0 ? 1 : i, o = t[2], s = o === void 0 ? 1 : o;
  return Pt(n, [e, 0, 0, 0, 0, a, 0, 0, 0, 0, s, 0, 0, 0, 0, 1], 4);
}
function Ca(n, t) {
  return _r(Da(t, 3), En(n, 3));
}
function Jo(n, t) {
  var r = t[0], e = r === void 0 ? 0 : r, i = t[1], a = i === void 0 ? 0 : i, o = t[2], s = o === void 0 ? 0 : o;
  return Pt(n, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, a, s, 1], 4);
}
function Jl(n, t) {
  return Pt(n, t, 4);
}
function Da(n, t) {
  var r = Math.cos(n), e = Math.sin(n), i = Bt(t);
  return i[0] = r, i[1] = e, i[t] = -e, i[t + 1] = r, i;
}
function Bt(n) {
  for (var t = n * n, r = [], e = 0; e < t; ++e)
    r[e] = e % (n + 1) ? 0 : 1;
  return r;
}
function Nu(n, t) {
  for (var r = Bt(t), e = Math.min(n.length, t - 1), i = 0; i < e; ++i)
    r[(t + 1) * i] = n[i];
  return r;
}
function Tn(n, t) {
  for (var r = Bt(t), e = Math.min(n.length, t - 1), i = 0; i < e; ++i)
    r[t * (t - 1) + i] = n[i];
  return r;
}
function Lu(n, t, r, e, i, a, o, s) {
  var u = n[0], l = n[1], f = t[0], d = t[1], p = r[0], c = r[1], h = e[0], v = e[1], g = i[0], _ = i[1], m = a[0], y = a[1], b = o[0], x = o[1], S = s[0], C = s[1], w = [u, 0, f, 0, p, 0, h, 0, l, 0, d, 0, c, 0, v, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, u, 0, f, 0, p, 0, h, 0, l, 0, d, 0, c, 0, v, 0, 1, 0, 1, 0, 1, 0, 1, -g * u, -_ * u, -m * f, -y * f, -b * p, -x * p, -S * h, -C * h, -g * l, -_ * l, -m * d, -y * d, -b * c, -x * c, -S * v, -C * v], D = _e(w, 8);
  if (!D.length)
    return [];
  var T = Pt(D, [g, _, m, y, b, x, S, C], 8);
  return T[8] = 1, fe($h(T), 3, 4);
}
var $i = function() {
  return $i = Object.assign || function(t) {
    for (var r, e = 1, i = arguments.length; e < i; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, $i.apply(this, arguments);
};
function Qh() {
  return [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ];
}
function sa(n, t) {
  return t === void 0 && (t = 0), Wn(si(n, t));
}
function Jh(n, t) {
  var r = _r(n, [t[0], t[1] || 0, t[2] || 0, 1], 4), e = r[3] || 1;
  return [
    r[0] / e,
    r[1] / e,
    r[2] / e
  ];
}
function Wn(n) {
  var t = Qh();
  return n.forEach(function(r) {
    var e = r.matrixFunction, i = r.functionValue;
    e && (t = e(t, i));
  }), t;
}
function si(n, t) {
  t === void 0 && (t = 0);
  var r = rr(n) ? n : Ke(n);
  return r.map(function(e) {
    var i = Tc(e), a = i.prefix, o = i.value, s = null, u = a, l = "";
    if (a === "translate" || a === "translateX" || a === "translate3d") {
      var f = le(t) ? $i($i({}, t), { "o%": t["%"] }) : {
        "%": t,
        "o%": t
      }, d = mn(o).map(function(E, I) {
        return I === 0 && "x%" in f ? f["%"] = t["x%"] : I === 1 && "y%" in f ? f["%"] = t["y%"] : f["%"] = t["o%"], Ot(E, f);
      }), p = d[0], c = d[1], h = c === void 0 ? 0 : c, v = d[2], g = v === void 0 ? 0 : v;
      s = Jo, l = [p, h, g];
    } else if (a === "translateY") {
      var _ = le(t) ? $i({ "%": t["y%"] }, t) : {
        "%": t
      }, h = Ot(o, _);
      s = Jo, l = [0, h, 0];
    } else if (a === "translateZ") {
      var g = parseFloat(o);
      s = Jo, l = [0, 0, g];
    } else if (a === "scale" || a === "scale3d") {
      var m = mn(o).map(function(E) {
        return parseFloat(E);
      }), y = m[0], b = m[1], x = b === void 0 ? y : b, S = m[2], C = S === void 0 ? 1 : S;
      s = Ba, l = [y, x, C];
    } else if (a === "scaleX") {
      var y = parseFloat(o);
      s = Ba, l = [y, 1, 1];
    } else if (a === "scaleY") {
      var x = parseFloat(o);
      s = Ba, l = [1, x, 1];
    } else if (a === "scaleZ") {
      var C = parseFloat(o);
      s = Ba, l = [1, 1, C];
    } else if (a === "rotate" || a === "rotateZ" || a === "rotateX" || a === "rotateY") {
      var w = ya(o), D = w.unit, T = w.value, O = D === "rad" ? T : T * Math.PI / 180;
      a === "rotate" || a === "rotateZ" ? (u = "rotateZ", s = Zh) : a === "rotateX" ? s = jh : a === "rotateY" && (s = Kh), l = O;
    } else if (a === "matrix3d")
      s = Jl, l = mn(o).map(function(E) {
        return parseFloat(E);
      });
    else if (a === "matrix") {
      var M = mn(o).map(function(E) {
        return parseFloat(E);
      });
      s = Jl, l = [
        M[0],
        M[1],
        0,
        0,
        M[2],
        M[3],
        0,
        0,
        0,
        0,
        1,
        0,
        M[4],
        M[5],
        0,
        1
      ];
    } else
      u = "";
    return {
      name: a,
      functionName: u,
      value: o,
      matrixFunction: s,
      functionValue: l
    };
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Ns = function(n, t) {
  return Ns = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, e) {
    r.__proto__ = e;
  } || function(r, e) {
    for (var i in e)
      e.hasOwnProperty(i) && (r[i] = e[i]);
  }, Ns(n, t);
};
function tg(n, t) {
  Ns(n, t);
  function r() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var ed = typeof Map == "function" ? void 0 : function() {
  var n = 0;
  return function(t) {
    return t.__DIFF_KEY__ || (t.__DIFF_KEY__ = ++n);
  };
}(), rg = /* @__PURE__ */ function(n) {
  tg(t, n);
  function t(r) {
    return r === void 0 && (r = []), n.call(this, r, ed) || this;
  }
  return t;
}(xh);
function eg(n, t) {
  return ba(n, t, ed);
}
const nd = rg;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ls = function() {
  return Ls = Object.assign || function(t) {
    for (var r, e = 1, i = arguments.length; e < i; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Ls.apply(this, arguments);
};
function ng() {
  for (var n = 0, t = 0, r = arguments.length; t < r; t++)
    n += arguments[t].length;
  for (var e = Array(n), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      e[i] = a[o];
  return e;
}
var ig = /* @__PURE__ */ function() {
  function n() {
    this._events = {};
  }
  var t = n.prototype;
  return t.on = function(r, e) {
    if (le(r))
      for (var i in r)
        this.on(i, r[i]);
    else
      this._addEvent(r, e, {});
    return this;
  }, t.off = function(r, e) {
    if (!r)
      this._events = {};
    else if (le(r))
      for (var i in r)
        this.off(i);
    else if (!e)
      this._events[r] = [];
    else {
      var a = this._events[r];
      if (a) {
        var o = Re(a, function(s) {
          return s.listener === e;
        });
        o > -1 && a.splice(o, 1);
      }
    }
    return this;
  }, t.once = function(r, e) {
    var i = this;
    return e && this._addEvent(r, e, {
      once: !0
    }), new Promise(function(a) {
      i._addEvent(r, a, {
        once: !0
      });
    });
  }, t.emit = function(r, e) {
    var i = this;
    e === void 0 && (e = {});
    var a = this._events[r];
    if (!r || !a)
      return !0;
    var o = !1;
    return e.eventType = r, e.stop = function() {
      o = !0;
    }, e.currentTarget = this, ng(a).forEach(function(s) {
      s.listener(e), s.once && i.off(r, s.listener);
    }), !o;
  }, t.trigger = function(r, e) {
    return e === void 0 && (e = {}), this.emit(r, e);
  }, t._addEvent = function(r, e, i) {
    var a = this._events;
    a[r] = a[r] || [];
    var o = a[r];
    o.push(Ls({
      listener: e
    }, i));
  }, n;
}();
const ko = ig;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ys = function(n, t) {
  return Ys = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, e) {
    r.__proto__ = e;
  } || function(r, e) {
    for (var i in e)
      e.hasOwnProperty(i) && (r[i] = e[i]);
  }, Ys(n, t);
};
function ag(n, t) {
  Ys(n, t);
  function r() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Vn = function() {
  return Vn = Object.assign || function(t) {
    for (var r, e = 1, i = arguments.length; e < i; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Vn.apply(this, arguments);
};
function og(n) {
  var t = n.container;
  return t === document.body ? [t.scrollLeft || document.documentElement.scrollLeft, t.scrollTop || document.documentElement.scrollTop] : [t.scrollLeft, t.scrollTop];
}
function tf(n, t) {
  return n.addEventListener("scroll", t), function() {
    n.removeEventListener("scroll", t);
  };
}
function Ga(n) {
  if (n) {
    if (Pr(n))
      return document.querySelector(n);
  } else
    return null;
  if (Ou(n))
    return n();
  if (n instanceof Element)
    return n;
  if ("current" in n)
    return n.current;
  if ("value" in n)
    return n.value;
}
var sg = /* @__PURE__ */ function(n) {
  ag(t, n);
  function t() {
    var e = n !== null && n.apply(this, arguments) || this;
    return e._startRect = null, e._startPos = [], e._prevTime = 0, e._timer = 0, e._prevScrollPos = [0, 0], e._isWait = !1, e._flag = !1, e._currentOptions = null, e._lock = !1, e._unregister = null, e._onScroll = function() {
      var i = e._currentOptions;
      e._lock || !i || e.emit("scrollDrag", {
        next: function(a) {
          e.checkScroll({
            container: i.container,
            inputEvent: a
          });
        }
      });
    }, e;
  }
  var r = t.prototype;
  return r.dragStart = function(e, i) {
    var a = Ga(i.container);
    if (!a) {
      this._flag = !1;
      return;
    }
    var o = 0, s = 0, u = 0, l = 0;
    if (a === document.body)
      u = window.innerWidth, l = window.innerHeight;
    else {
      var f = a.getBoundingClientRect();
      o = f.top, s = f.left, u = f.width, l = f.height;
    }
    this._flag = !0, this._startPos = [e.clientX, e.clientY], this._startRect = {
      top: o,
      left: s,
      width: u,
      height: l
    }, this._prevScrollPos = this._getScrollPosition([0, 0], i), this._currentOptions = i, this._registerScrollEvent(i);
  }, r.drag = function(e, i) {
    if (clearTimeout(this._timer), !!this._flag) {
      var a = e.clientX, o = e.clientY, s = i.threshold, u = s === void 0 ? 0 : s, l = this, f = l._startRect, d = l._startPos;
      this._currentOptions = i;
      var p = [0, 0];
      return f.top > o - u ? (d[1] > f.top || o < d[1]) && (p[1] = -1) : f.top + f.height < o + u && (d[1] < f.top + f.height || o > d[1]) && (p[1] = 1), f.left > a - u ? (d[0] > f.left || a < d[0]) && (p[0] = -1) : f.left + f.width < a + u && (d[0] < f.left + f.width || a > d[0]) && (p[0] = 1), !p[0] && !p[1] ? !1 : this._continueDrag(Vn(Vn({}, i), {
        direction: p,
        inputEvent: e,
        isDrag: !0
      }));
    }
  }, r.checkScroll = function(e) {
    var i = this;
    if (this._isWait)
      return !1;
    var a = e.prevScrollPos, o = a === void 0 ? this._prevScrollPos : a, s = e.direction, u = e.throttleTime, l = u === void 0 ? 0 : u, f = e.inputEvent, d = e.isDrag, p = this._getScrollPosition(s || [0, 0], e), c = p[0] - o[0], h = p[1] - o[1], v = s || [c ? Math.abs(c) / c : 0, h ? Math.abs(h) / h : 0];
    return this._prevScrollPos = p, this._lock = !1, !c && !h ? !1 : (this.emit("move", {
      offsetX: v[0] ? c : 0,
      offsetY: v[1] ? h : 0,
      inputEvent: f
    }), l && d && (clearTimeout(this._timer), this._timer = window.setTimeout(function() {
      i._continueDrag(e);
    }, l)), !0);
  }, r.dragEnd = function() {
    this._flag = !1, this._lock = !1, clearTimeout(this._timer), this._unregisterScrollEvent();
  }, r._getScrollPosition = function(e, i) {
    var a = i.container, o = i.getScrollPosition, s = o === void 0 ? og : o;
    return s({
      container: Ga(a),
      direction: e
    });
  }, r._continueDrag = function(e) {
    var i = this, a, o = e.container, s = e.direction, u = e.throttleTime, l = e.useScroll, f = e.isDrag, d = e.inputEvent;
    if (!(!this._flag || f && this._isWait)) {
      var p = aa(), c = Math.max(u + this._prevTime - p, 0);
      if (c > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          i._continueDrag(e);
        }, c), !1;
      this._prevTime = p;
      var h = this._getScrollPosition(s, e);
      this._prevScrollPos = h, f && (this._isWait = !0), l || (this._lock = !0);
      var v = {
        container: Ga(o),
        direction: s,
        inputEvent: d
      };
      return (a = e.requestScroll) === null || a === void 0 || a.call(e, v), this.emit("scroll", v), this._isWait = !1, l || this.checkScroll(Vn(Vn({}, e), {
        prevScrollPos: h,
        direction: s,
        inputEvent: d
      }));
    }
  }, r._registerScrollEvent = function(e) {
    this._unregisterScrollEvent();
    var i = e.checkScrollEvent;
    if (i) {
      var a = i === !0 ? tf : i, o = Ga(e.container);
      i === !0 && (o === document.body || o === document.documentElement) ? this._unregister = tf(window, this._onScroll) : this._unregister = a(o, this._onScroll);
    }
  }, r._unregisterScrollEvent = function() {
    var e;
    (e = this._unregister) === null || e === void 0 || e.call(this), this._unregister = null;
  }, t;
}(ko);
const ug = sg;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function lg() {
  for (var n = 0, t = 0, r = arguments.length; t < r; t++)
    n += arguments[t].length;
  for (var e = Array(n), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      e[i] = a[o];
  return e;
}
function Dr(n) {
  return ct(n, tr);
}
function fg(n, t) {
  return n.every(function(r, e) {
    return Dr(r - t[e]) === 0;
  });
}
function cg(n, t) {
  return !Dr(n[0] - t[0]) && !Dr(n[1] - t[1]);
}
function id(n) {
  return n.length < 3 ? 0 : Math.abs(fh(n.map(function(t, r) {
    var e = n[r + 1] || n[0];
    return t[0] * e[1] - e[0] * t[1];
  }))) / 2;
}
function rf(n, t) {
  var r = t.width, e = t.height, i = t.left, a = t.top, o = Mn(n), s = o.minX, u = o.minY, l = o.maxX, f = o.maxY, d = r / (l - s), p = e / (f - u);
  return n.map(function(c) {
    return [i + (c[0] - s) * d, a + (c[1] - u) * p];
  });
}
function Mn(n) {
  var t = n.map(function(e) {
    return e[0];
  }), r = n.map(function(e) {
    return e[1];
  });
  return {
    minX: Math.min.apply(Math, t),
    minY: Math.min.apply(Math, r),
    maxX: Math.max.apply(Math, t),
    maxY: Math.max.apply(Math, r)
  };
}
function Xs(n, t, r) {
  var e = n[0], i = n[1], a = Mn(t), o = a.minX, s = a.maxX, u = [[o, i], [s, i]], l = fo(u[0], u[1]), f = Ws(t), d = [];
  if (f.forEach(function(h) {
    var v = fo(h[0], h[1]), g = h[0];
    if (fg(l, v))
      d.push({
        pos: n,
        line: h,
        type: "line"
      });
    else {
      var _ = ad(Yu(l, v), [u, h]);
      _.forEach(function(m) {
        h.some(function(y) {
          return cg(y, m);
        }) ? d.push({
          pos: m,
          line: h,
          type: "point"
        }) : Dr(g[1] - i) !== 0 && d.push({
          pos: m,
          line: h,
          type: "intersection"
        });
      });
    }
  }), !r && Rr(d, function(h) {
    return h[0] === e;
  }))
    return !0;
  var p = 0, c = {};
  return d.forEach(function(h) {
    var v = h.pos, g = h.type, _ = h.line;
    if (!(v[0] > e))
      if (g === "intersection")
        ++p;
      else {
        if (g === "line")
          return;
        if (g === "point") {
          var m = Rr(_, function(x) {
            return x[1] !== i;
          }), y = c[v[0]], b = m[1] > i ? 1 : -1;
          y ? y !== b && ++p : c[v[0]] = b;
        }
      }
  }), p % 2 === 1;
}
function fo(n, t) {
  var r = n[0], e = n[1], i = t[0], a = t[1], o = i - r, s = a - e;
  Math.abs(o) < tr && (o = 0), Math.abs(s) < tr && (s = 0);
  var u = 0, l = 0, f = 0;
  return o ? s ? (u = -s / o, l = 1, f = -u * r - e) : (l = 1, f = -e) : s && (u = -1, f = r), [u, l, f];
}
function Yu(n, t) {
  var r = n[0], e = n[1], i = n[2], a = t[0], o = t[1], s = t[2], u = r === 0 && a === 0, l = e === 0 && o === 0, f = [];
  if (u && l)
    return [];
  if (u) {
    var d = -i / e, p = -s / o;
    return d !== p ? [] : [[-1 / 0, d], [1 / 0, d]];
  } else if (l) {
    var c = -i / r, h = -s / a;
    return c !== h ? [] : [[c, -1 / 0], [c, 1 / 0]];
  } else if (r === 0) {
    var v = -i / e, g = -(o * v + s) / a;
    f = [[g, v]];
  } else if (a === 0) {
    var v = -s / o, g = -(e * v + i) / r;
    f = [[g, v]];
  } else if (e === 0) {
    var g = -i / r, v = -(a * g + s) / o;
    f = [[g, v]];
  } else if (o === 0) {
    var g = -s / a, v = -(r * g + i) / e;
    f = [[g, v]];
  } else {
    var g = (e * s - o * i) / (o * r - e * a), v = -(r * g + i) / e;
    f = [[g, v]];
  }
  return f.map(function(_) {
    return [_[0], _[1]];
  });
}
function ad(n, t) {
  var r = t.map(function(d) {
    return [0, 1].map(function(p) {
      return [Math.min(d[0][p], d[1][p]), Math.max(d[0][p], d[1][p])];
    });
  }), e = [];
  if (n.length === 2) {
    var i = n[0], a = i[0], o = i[1];
    if (Dr(a - n[1][0])) {
      if (!Dr(o - n[1][1])) {
        var l = Math.max.apply(Math, r.map(function(d) {
          return d[0][0];
        })), f = Math.min.apply(Math, r.map(function(d) {
          return d[0][1];
        }));
        if (Dr(l - f) > 0)
          return [];
        e = [[l, o], [f, o]];
      }
    } else {
      var s = Math.max.apply(Math, r.map(function(d) {
        return d[1][0];
      })), u = Math.min.apply(Math, r.map(function(d) {
        return d[1][1];
      }));
      if (Dr(s - u) > 0)
        return [];
      e = [[a, s], [a, u]];
    }
  }
  return e.length || (e = n.filter(function(d) {
    var p = d[0], c = d[1];
    return r.every(function(h) {
      return 0 <= Dr(p - h[0][0]) && 0 <= Dr(h[0][1] - p) && 0 <= Dr(c - h[1][0]) && 0 <= Dr(h[1][1] - c);
    });
  })), e.map(function(d) {
    return [Dr(d[0]), Dr(d[1])];
  });
}
function Ws(n) {
  return lg(n.slice(1), [n[0]]).map(function(t, r) {
    return [n[r], t];
  });
}
function dg(n, t) {
  var r = n.slice(), e = t.slice();
  Vl(r) === -1 && r.reverse(), Vl(e) === -1 && e.reverse();
  var i = Ws(r), a = Ws(e), o = i.map(function(f) {
    return fo(f[0], f[1]);
  }), s = a.map(function(f) {
    return fo(f[0], f[1]);
  }), u = [];
  o.forEach(function(f, d) {
    var p = i[d], c = [];
    s.forEach(function(h, v) {
      var g = Yu(f, h), _ = ad(g, [p, a[v]]);
      c.push.apply(c, _.map(function(m) {
        return {
          index1: d,
          index2: v,
          pos: m,
          type: "intersection"
        };
      }));
    }), c.sort(function(h, v) {
      return Oe(p[0], h.pos) - Oe(p[0], v.pos);
    }), u.push.apply(u, c), Xs(p[1], e) && u.push({
      index1: d,
      index2: -1,
      pos: p[1],
      type: "inside"
    });
  }), a.forEach(function(f, d) {
    if (Xs(f[1], r)) {
      var p = !1, c = Re(u, function(h) {
        var v = h.index2;
        return v === d ? (p = !0, !1) : !!p;
      });
      c === -1 && (p = !1, c = Re(u, function(h) {
        var v = h.index1, g = h.index2;
        return v === -1 && g + 1 === d ? (p = !0, !1) : !!p;
      })), c === -1 ? u.push({
        index1: -1,
        index2: d,
        pos: f[1],
        type: "inside"
      }) : u.splice(c, 0, {
        index1: -1,
        index2: d,
        pos: f[1],
        type: "inside"
      });
    }
  });
  var l = {};
  return u.filter(function(f) {
    var d = f.pos, p = d[0] + "x" + d[1];
    return l[p] ? !1 : (l[p] = !0, !0);
  });
}
function pg(n, t) {
  var r = dg(n, t);
  return r.map(function(e) {
    var i = e.pos;
    return i;
  });
}
function vg(n, t) {
  var r = pg(n, t);
  return id(r);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Hs = function(n, t) {
  return Hs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
    r.__proto__ = e;
  } || function(r, e) {
    for (var i in e)
      e.hasOwnProperty(i) && (r[i] = e[i]);
  }, Hs(n, t);
};
function hg(n, t) {
  Hs(n, t);
  function r() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Zt = function() {
  return Zt = Object.assign || function(t) {
    for (var r, e = 1, i = arguments.length; e < i; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Zt.apply(this, arguments);
};
function gg(n, t) {
  var r = t[0] - n[0], e = t[1] - n[1], i = Math.atan2(e, r);
  return i >= 0 ? i : i + Math.PI * 2;
}
function ts(n) {
  return gg([
    n[0].clientX,
    n[0].clientY
  ], [
    n[1].clientX,
    n[1].clientY
  ]) / Math.PI * 180;
}
function _g(n) {
  return n.touches && n.touches.length >= 2;
}
function Fa(n) {
  return n ? n.touches ? xg(n.touches) : [od(n)] : [];
}
function mg(n) {
  return n && (n.type.indexOf("mouse") > -1 || "button" in n);
}
function ef(n, t, r) {
  var e = r.length, i = qi(n, e), a = i.clientX, o = i.clientY, s = i.originalClientX, u = i.originalClientY, l = qi(t, e), f = l.clientX, d = l.clientY, p = qi(r, e), c = p.clientX, h = p.clientY, v = a - f, g = o - d, _ = a - c, m = o - h;
  return {
    clientX: s,
    clientY: u,
    deltaX: v,
    deltaY: g,
    distX: _,
    distY: m
  };
}
function rs(n) {
  return Math.sqrt(Math.pow(n[0].clientX - n[1].clientX, 2) + Math.pow(n[0].clientY - n[1].clientY, 2));
}
function xg(n) {
  for (var t = Math.min(n.length, 2), r = [], e = 0; e < t; ++e)
    r.push(od(n[e]));
  return r;
}
function od(n) {
  return {
    clientX: n.clientX,
    clientY: n.clientY
  };
}
function qi(n, t) {
  t === void 0 && (t = n.length);
  for (var r = {
    clientX: 0,
    clientY: 0,
    originalClientX: 0,
    originalClientY: 0
  }, e = Math.min(n.length, t), i = 0; i < e; ++i) {
    var a = n[i];
    r.originalClientX += "originalClientX" in a ? a.originalClientX : a.clientX, r.originalClientY += "originalClientY" in a ? a.originalClientY : a.clientY, r.clientX += a.clientX, r.clientY += a.clientY;
  }
  return t ? {
    clientX: r.clientX / t,
    clientY: r.clientY / t,
    originalClientX: r.originalClientX / t,
    originalClientY: r.originalClientY / t
  } : r;
}
var es = /* @__PURE__ */ function() {
  function n(t) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = t, this.prevClients = t, this.length = t.length;
  }
  return n.prototype.getAngle = function(t) {
    return t === void 0 && (t = this.prevClients), ts(t);
  }, n.prototype.getRotation = function(t) {
    return t === void 0 && (t = this.prevClients), ts(t) - ts(this.startClients);
  }, n.prototype.getPosition = function(t, r) {
    t === void 0 && (t = this.prevClients);
    var e = ef(t || this.prevClients, this.prevClients, this.startClients), i = e.deltaX, a = e.deltaY;
    return this.movement += Math.sqrt(i * i + a * a), this.prevClients = t, e;
  }, n.prototype.getPositions = function(t) {
    t === void 0 && (t = this.prevClients);
    for (var r = this.prevClients, e = this.startClients, i = Math.min(this.length, r.length), a = [], o = 0; o < i; ++o)
      a[o] = ef([t[o]], [r[o]], [e[o]]);
    return a;
  }, n.prototype.getMovement = function(t) {
    var r = this.movement;
    if (!t)
      return r;
    var e = qi(t, this.length), i = qi(this.prevClients, this.length), a = e.clientX - i.clientX, o = e.clientY - i.clientY;
    return Math.sqrt(a * a + o * o) + r;
  }, n.prototype.getDistance = function(t) {
    return t === void 0 && (t = this.prevClients), rs(t);
  }, n.prototype.getScale = function(t) {
    return t === void 0 && (t = this.prevClients), rs(t) / rs(this.startClients);
  }, n.prototype.move = function(t, r) {
    this.startClients.forEach(function(e) {
      e.clientX -= t, e.clientY -= r;
    }), this.prevClients.forEach(function(e) {
      e.clientX -= t, e.clientY -= r;
    });
  }, n;
}(), nf = ["textarea", "input"], yg = /* @__PURE__ */ function(n) {
  hg(t, n);
  function t(r, e) {
    e === void 0 && (e = {});
    var i = n.call(this) || this;
    i.options = {}, i.flag = !1, i.pinchFlag = !1, i.data = {}, i.isDrag = !1, i.isPinch = !1, i.clientStores = [], i.targets = [], i.prevTime = 0, i.doubleFlag = !1, i._useMouse = !1, i._useTouch = !1, i._useDrag = !1, i._dragFlag = !1, i._isTrusted = !1, i._isMouseEvent = !1, i._isSecondaryButton = !1, i._preventMouseEvent = !1, i._prevInputEvent = null, i._isDragAPI = !1, i._isIdle = !0, i._preventMouseEventId = 0, i._window = window, i.onDragStart = function(p, c) {
      if (c === void 0 && (c = !0), !(!i.flag && p.cancelable === !1)) {
        var h = p.type.indexOf("drag") >= -1;
        if (!(i.flag && h)) {
          i._isDragAPI = !0;
          var v = i.options, g = v.container, _ = v.pinchOutside, m = v.preventWheelClick, y = v.preventRightClick, b = v.preventDefault, x = v.checkInput, S = v.dragFocusedInput, C = v.preventClickEventOnDragStart, w = v.preventClickEventOnDrag, D = v.preventClickEventByCondition, T = i._useTouch, O = !i.flag;
          if (i._isSecondaryButton = p.which === 3 || p.button === 2, m && (p.which === 2 || p.button === 1) || y && (p.which === 3 || p.button === 2))
            return i.stop(), !1;
          if (O) {
            var M = i._window.document.activeElement, E = p.target;
            if (E) {
              var I = E.tagName.toLowerCase(), k = nf.indexOf(I) > -1, B = E.isContentEditable;
              if (k || B) {
                if (x || !S && M === E)
                  return !1;
                if (M && (M === E || B && M.isContentEditable && M.contains(E)))
                  if (S)
                    E.blur();
                  else
                    return !1;
              } else if ((b || p.type === "touchstart") && M) {
                var F = M.tagName.toLowerCase();
                (M.isContentEditable || nf.indexOf(F) > -1) && M.blur();
              }
              (C || w || D) && cr(i._window, "click", i._onClick, !0);
            }
            i.clientStores = [new es(Fa(p))], i._isIdle = !1, i.flag = !0, i.isDrag = !1, i._isTrusted = c, i._dragFlag = !0, i._prevInputEvent = p, i.data = {}, i.doubleFlag = aa() - i.prevTime < 200, i._isMouseEvent = mg(p), !i._isMouseEvent && i._preventMouseEvent && i._allowMouseEvent();
            var G = i._preventMouseEvent || i.emit("dragStart", Zt(Zt({ data: i.data, datas: i.data, inputEvent: p, isMouseEvent: i._isMouseEvent, isSecondaryButton: i._isSecondaryButton, isTrusted: c, isDouble: i.doubleFlag }, i.getCurrentStore().getPosition()), { preventDefault: function() {
              p.preventDefault();
            }, preventDrag: function() {
              i._dragFlag = !1;
            } }));
            G === !1 && i.stop(), i._isMouseEvent && i.flag && b && p.preventDefault();
          }
          if (!i.flag)
            return !1;
          var X = 0;
          if (O ? (i._attchDragEvent(), T && _ && (X = setTimeout(function() {
            cr(g, "touchstart", i.onDragStart, {
              passive: !1
            });
          }))) : T && _ && ir(g, "touchstart", i.onDragStart), i.flag && _g(p)) {
            if (clearTimeout(X), O && p.touches.length !== p.changedTouches.length)
              return;
            i.pinchFlag || i.onPinchStart(p);
          }
        }
      }
    }, i.onDrag = function(p, c) {
      if (i.flag) {
        var h = i.options.preventDefault;
        !i._isMouseEvent && h && p.preventDefault(), i._prevInputEvent = p;
        var v = Fa(p), g = i.moveClients(v, p, !1);
        if (i._dragFlag) {
          if (i.pinchFlag || g.deltaX || g.deltaY) {
            var _ = i._preventMouseEvent || i.emit("drag", Zt(Zt({}, g), { isScroll: !!c, inputEvent: p }));
            if (_ === !1) {
              i.stop();
              return;
            }
          }
          i.pinchFlag && i.onPinch(p, v);
        }
        i.getCurrentStore().getPosition(v, !0);
      }
    }, i.onDragEnd = function(p) {
      if (i.flag) {
        var c = i.options, h = c.pinchOutside, v = c.container, g = c.preventClickEventOnDrag, _ = c.preventClickEventOnDragStart, m = c.preventClickEventByCondition, y = i.isDrag;
        (g || _ || m) && requestAnimationFrame(function() {
          i._allowClickEvent();
        }), !m && !_ && g && !y && i._allowClickEvent(), i._useTouch && h && ir(v, "touchstart", i.onDragStart), i.pinchFlag && i.onPinchEnd(p);
        var b = p != null && p.touches ? Fa(p) : [], x = b.length;
        x === 0 || !i.options.keepDragging ? i.flag = !1 : i._addStore(new es(b));
        var S = i._getPosition(), C = aa(), w = !y && i.doubleFlag;
        i._prevInputEvent = null, i.prevTime = y || w ? 0 : C, i.flag || (i._dettachDragEvent(), i._preventMouseEvent || i.emit("dragEnd", Zt({ data: i.data, datas: i.data, isDouble: w, isDrag: y, isClick: !y, isMouseEvent: i._isMouseEvent, isSecondaryButton: i._isSecondaryButton, inputEvent: p, isTrusted: i._isTrusted }, S)), i.clientStores = [], i._isMouseEvent || (i._preventMouseEvent = !0, clearTimeout(i._preventMouseEventId), i._preventMouseEventId = setTimeout(function() {
          i._preventMouseEvent = !1;
        }, 200)), i._isIdle = !0);
      }
    }, i.onBlur = function() {
      i.onDragEnd();
    }, i._allowClickEvent = function() {
      ir(i._window, "click", i._onClick, !0);
    }, i._onClick = function(p) {
      i._allowClickEvent(), i._allowMouseEvent();
      var c = i.options.preventClickEventByCondition;
      c != null && c(p) || (p.stopPropagation(), p.preventDefault());
    }, i._onContextMenu = function(p) {
      var c = i.options;
      c.preventRightClick ? i.onDragEnd(p) : p.preventDefault();
    }, i._passCallback = function() {
    };
    var a = [].concat(r), o = a[0];
    i._window = zc(o) ? o : qe(o), i.options = Zt({ checkInput: !1, container: o && !("document" in o) ? qe(o) : o, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, e);
    var s = i.options, u = s.container, l = s.events, f = s.checkWindowBlur;
    if (i._useDrag = l.indexOf("drag") > -1, i._useTouch = l.indexOf("touch") > -1, i._useMouse = l.indexOf("mouse") > -1, i.targets = a, i._useDrag && a.forEach(function(p) {
      cr(p, "dragstart", i.onDragStart);
    }), i._useMouse && (a.forEach(function(p) {
      cr(p, "mousedown", i.onDragStart), cr(p, "mousemove", i._passCallback);
    }), cr(u, "contextmenu", i._onContextMenu)), f && cr(qe(), "blur", i.onBlur), i._useTouch) {
      var d = {
        passive: !1
      };
      a.forEach(function(p) {
        cr(p, "touchstart", i.onDragStart, d), cr(p, "touchmove", i._passCallback, d);
      });
    }
    return i;
  }
  return t.prototype.stop = function() {
    this.isDrag = !1, this.data = {}, this.clientStores = [], this.pinchFlag = !1, this.doubleFlag = !1, this.prevTime = 0, this.flag = !1, this._isIdle = !0, this._allowClickEvent(), this._dettachDragEvent(), this._isDragAPI = !1;
  }, t.prototype.getMovement = function(r) {
    return this.getCurrentStore().getMovement(r) + this.clientStores.slice(1).reduce(function(e, i) {
      return e + i.movement;
    }, 0);
  }, t.prototype.isDragging = function() {
    return this.isDrag;
  }, t.prototype.isIdle = function() {
    return this._isIdle;
  }, t.prototype.isFlag = function() {
    return this.flag;
  }, t.prototype.isPinchFlag = function() {
    return this.pinchFlag;
  }, t.prototype.isDoubleFlag = function() {
    return this.doubleFlag;
  }, t.prototype.isPinching = function() {
    return this.isPinch;
  }, t.prototype.scrollBy = function(r, e, i, a) {
    a === void 0 && (a = !0), this.flag && (this.clientStores[0].move(r, e), a && this.onDrag(i, !0));
  }, t.prototype.move = function(r, e) {
    var i = r[0], a = r[1], o = this.getCurrentStore(), s = o.prevClients;
    return this.moveClients(s.map(function(u) {
      var l = u.clientX, f = u.clientY;
      return {
        clientX: l + i,
        clientY: f + a,
        originalClientX: l,
        originalClientY: f
      };
    }), e, !0);
  }, t.prototype.triggerDragStart = function(r) {
    this.onDragStart(r, !1);
  }, t.prototype.setEventData = function(r) {
    var e = this.data;
    for (var i in r)
      e[i] = r[i];
    return this;
  }, t.prototype.setEventDatas = function(r) {
    return this.setEventData(r);
  }, t.prototype.getCurrentEvent = function(r) {
    return r === void 0 && (r = this._prevInputEvent), Zt(Zt({ data: this.data, datas: this.data }, this._getPosition()), { movement: this.getMovement(), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, inputEvent: r });
  }, t.prototype.getEventData = function() {
    return this.data;
  }, t.prototype.getEventDatas = function() {
    return this.data;
  }, t.prototype.unset = function() {
    var r = this, e = this.targets, i = this.options.container;
    this.off(), ir(this._window, "blur", this.onBlur), this._useDrag && e.forEach(function(a) {
      ir(a, "dragstart", r.onDragStart);
    }), this._useMouse && (e.forEach(function(a) {
      ir(a, "mousedown", r.onDragStart);
    }), ir(i, "contextmenu", this._onContextMenu)), this._useTouch && (e.forEach(function(a) {
      ir(a, "touchstart", r.onDragStart);
    }), ir(i, "touchstart", this.onDragStart)), this._prevInputEvent = null, this._allowClickEvent(), this._dettachDragEvent();
  }, t.prototype.onPinchStart = function(r) {
    var e = this, i = this.options.pinchThreshold;
    if (!(this.isDrag && this.getMovement() > i)) {
      var a = new es(Fa(r));
      this.pinchFlag = !0, this._addStore(a);
      var o = this.emit("pinchStart", Zt(Zt({ data: this.data, datas: this.data, angle: a.getAngle(), touches: this.getCurrentStore().getPositions() }, a.getPosition()), { inputEvent: r, isTrusted: this._isTrusted, preventDefault: function() {
        r.preventDefault();
      }, preventDrag: function() {
        e._dragFlag = !1;
      } }));
      o === !1 && (this.pinchFlag = !1);
    }
  }, t.prototype.onPinch = function(r, e) {
    if (!(!this.flag || !this.pinchFlag || e.length < 2)) {
      var i = this.getCurrentStore();
      this.isPinch = !0, this.emit("pinch", Zt(Zt({ data: this.data, datas: this.data, movement: this.getMovement(e), angle: i.getAngle(e), rotation: i.getRotation(e), touches: i.getPositions(e), scale: i.getScale(e), distance: i.getDistance(e) }, i.getPosition(e)), { inputEvent: r, isTrusted: this._isTrusted }));
    }
  }, t.prototype.onPinchEnd = function(r) {
    if (this.pinchFlag) {
      var e = this.isPinch;
      this.isPinch = !1, this.pinchFlag = !1;
      var i = this.getCurrentStore();
      this.emit("pinchEnd", Zt(Zt({ data: this.data, datas: this.data, isPinch: e, touches: i.getPositions() }, i.getPosition()), { inputEvent: r }));
    }
  }, t.prototype.getCurrentStore = function() {
    return this.clientStores[0];
  }, t.prototype.moveClients = function(r, e, i) {
    var a = this._getPosition(r, i), o = this.isDrag;
    (a.deltaX || a.deltaY) && (this.isDrag = !0);
    var s = !1;
    return !o && this.isDrag && (s = !0), Zt(Zt({ data: this.data, datas: this.data }, a), { movement: this.getMovement(r), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, isMouseEvent: this._isMouseEvent, isSecondaryButton: this._isSecondaryButton, inputEvent: e, isTrusted: this._isTrusted, isFirstDrag: s });
  }, t.prototype._addStore = function(r) {
    this.clientStores.splice(0, 0, r);
  }, t.prototype._getPosition = function(r, e) {
    var i = this.getCurrentStore(), a = i.getPosition(r, e), o = this.clientStores.slice(1).reduce(function(l, f) {
      var d = f.getPosition();
      return l.distX += d.distX, l.distY += d.distY, l;
    }, a), s = o.distX, u = o.distY;
    return Zt(Zt({}, a), { distX: s, distY: u });
  }, t.prototype._attchDragEvent = function() {
    var r = this._window, e = this.options.container, i = {
      passive: !1
    };
    this._isDragAPI && (cr(e, "dragover", this.onDrag, i), cr(r, "dragend", this.onDragEnd)), this._useMouse && (cr(e, "mousemove", this.onDrag), cr(r, "mouseup", this.onDragEnd)), this._useTouch && (cr(e, "touchmove", this.onDrag, i), cr(r, "touchend", this.onDragEnd, i), cr(r, "touchcancel", this.onDragEnd, i));
  }, t.prototype._dettachDragEvent = function() {
    var r = this._window, e = this.options.container;
    this._isDragAPI && (ir(e, "dragover", this.onDrag), ir(r, "dragend", this.onDragEnd)), this._useMouse && (ir(e, "mousemove", this.onDrag), ir(r, "mouseup", this.onDragEnd)), this._useTouch && (ir(e, "touchstart", this.onDragStart), ir(e, "touchmove", this.onDrag), ir(r, "touchend", this.onDragEnd), ir(r, "touchcancel", this.onDragEnd));
  }, t.prototype._allowMouseEvent = function() {
    this._preventMouseEvent = !1, clearTimeout(this._preventMouseEventId);
  }, t;
}(ko);
function bg(n) {
  for (var t = 5381, r = n.length; r; )
    t = t * 33 ^ n.charCodeAt(--r);
  return t >>> 0;
}
var Sg = bg;
function wg(n) {
  return Sg(n).toString(36);
}
function Cg(n) {
  if (n && n.getRootNode) {
    var t = n.getRootNode();
    if (t.nodeType === 11)
      return t;
  }
}
function Dg(n, t, r) {
  return r.original ? t : t.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(e, i) {
    var a = i.trim();
    return (a ? mn(a) : [""]).map(function(o) {
      var s = o.trim();
      return s.indexOf("@") === 0 ? s : s.indexOf(":global") > -1 ? s.replace(/\:global/g, "") : s.indexOf(":host") > -1 ? "".concat(s.replace(/\:host/g, ".".concat(n))) : s ? ".".concat(n, " ").concat(s) : ".".concat(n);
    }).join(", ") + " {";
  });
}
function Eg(n, t, r, e, i) {
  var a = bi(e), o = a.createElement("style");
  return o.setAttribute("type", "text/css"), o.setAttribute("data-styled-id", n), o.setAttribute("data-styled-count", "1"), r.nonce && o.setAttribute("nonce", r.nonce), o.innerHTML = Dg(n, t, r), (i || a.head || a.body).appendChild(o), o;
}
function Tg(n) {
  var t = "rCS" + wg(n);
  return {
    className: t,
    inject: function(r, e) {
      e === void 0 && (e = {});
      var i = Cg(r), a = (i || r.ownerDocument || document).querySelector('style[data-styled-id="'.concat(t, '"]'));
      if (!a)
        a = Eg(t, n, e, r, i);
      else {
        var o = parseFloat(a.getAttribute("data-styled-count")) || 0;
        a.setAttribute("data-styled-count", "".concat(o + 1));
      }
      return {
        destroy: function() {
          var s, u = parseFloat(a.getAttribute("data-styled-count")) || 0;
          u <= 1 ? (a.remove ? a.remove() : (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null) : a.setAttribute("data-styled-count", "".concat(u - 1));
        }
      };
    }
  };
}
var Vs = function() {
  return Vs = Object.assign || function(t) {
    for (var r, e = 1, i = arguments.length; e < i; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Vs.apply(this, arguments);
};
function Mg(n, t) {
  var r = {};
  for (var e in n)
    Object.prototype.hasOwnProperty.call(n, e) && t.indexOf(e) < 0 && (r[e] = n[e]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, e = Object.getOwnPropertySymbols(n); i < e.length; i++)
      t.indexOf(e[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, e[i]) && (r[e[i]] = n[e[i]]);
  return r;
}
function sd(n, t) {
  var r = Tg(t), e = r.className;
  return wh(function(i, a) {
    var o = i.className, s = o === void 0 ? "" : o;
    i.cspNonce;
    var u = Mg(i, ["className", "cspNonce"]), l = Bh();
    return Gh(a, function() {
      return l.current;
    }, []), Vc(function() {
      var f = r.inject(l.current, {
        nonce: i.cspNonce
      });
      return function() {
        f.destroy();
      };
    }, []), oe(n, Vs({
      ref: l,
      "data-styled-id": e,
      className: "".concat(s, " ").concat(e)
    }, u));
  });
}
var $s = function(n, t) {
  return $s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
    r.__proto__ = e;
  } || function(r, e) {
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
  }, $s(n, t);
};
function Ea(n, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  $s(n, t);
  function r() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var P = function() {
  return P = Object.assign || function(t) {
    for (var r, e = 1, i = arguments.length; e < i; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, P.apply(this, arguments);
};
function Og(n, t) {
  var r = {};
  for (var e in n)
    Object.prototype.hasOwnProperty.call(n, e) && t.indexOf(e) < 0 && (r[e] = n[e]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, e = Object.getOwnPropertySymbols(n); i < e.length; i++)
      t.indexOf(e[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, e[i]) && (r[e[i]] = n[e[i]]);
  return r;
}
function Pg(n, t, r, e) {
  var i = arguments.length, a = i < 3 ? t : e === null ? e = Object.getOwnPropertyDescriptor(t, r) : e, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(n, t, r, e);
  else
    for (var s = n.length - 1; s >= 0; s--)
      (o = n[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
  return i > 3 && a && Object.defineProperty(t, r, a), a;
}
function Rg(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && n[t], e = 0;
  if (r)
    return r.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && e >= n.length && (n = void 0), { value: n && n[e++], done: !n };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function R(n, t) {
  var r = typeof Symbol == "function" && n[Symbol.iterator];
  if (!r)
    return n;
  var e = r.call(n), i, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = e.next()).done; )
      a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (r = e.return) && r.call(e);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function j(n, t, r) {
  if (r || arguments.length === 2)
    for (var e = 0, i = t.length, a; e < i; e++)
      (a || !(e in t)) && (a || (a = Array.prototype.slice.call(t, 0, e)), a[e] = t[e]);
  return n.concat(a || Array.prototype.slice.call(t));
}
function Ta(n, t) {
  return P({ events: [], props: [], name: n }, t);
}
var Ig = ["n", "w", "s", "e"], Xu = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function kg(n, t) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * n, 'px" height="').concat(32 * n, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(t, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function zg(n) {
  var t = kg(1, n), r = Math.round(n / 45) * 45 % 180, e = "ns-resize";
  return r === 135 ? e = "nwse-resize" : r === 45 ? e = "nesw-resize" : r === 90 && (e = "ew-resize"), "cursor:".concat(e, ";cursor: url('").concat(t, "') 16 16, ").concat(e, ";");
}
var wi = Xh(), ud = wi.browser.webkit, ld = ud && function() {
  var n = typeof window > "u" ? { userAgent: "" } : window.navigator, t = /applewebkit\/([^\s]+)/g.exec(n.userAgent.toLowerCase());
  return t ? parseFloat(t[1]) < 605 : !1;
}(), fd = wi.browser.name, cd = parseInt(wi.browser.version, 10), Ag = fd === "chrome", Bg = wi.browser.chromium, Gg = parseInt(wi.browser.chromiumVersion, 10) || 0, Fg = Ag && cd >= 109 || Bg && Gg >= 109, Ng = fd === "firefox", Lg = parseInt(wi.browser.webkitVersion, 10) >= 612 || cd >= 15, Wu = "moveable-", Yg = Xu.map(function(n) {
  var t = "", r = "", e = "center", i = "center", a = "calc(var(--moveable-control-padding, 20) * -1px)";
  return n.indexOf("n") > -1 && (t = "top: ".concat(a, ";"), i = "bottom"), n.indexOf("s") > -1 && (t = "top: 0px;", i = "top"), n.indexOf("w") > -1 && (r = "left: ".concat(a, ";"), e = "right"), n.indexOf("e") > -1 && (r = "left: 0px;", e = "left"), '.around-control[data-direction*="'.concat(n, `"] {
        `).concat(r).concat(t, `
        transform-origin: `).concat(e, " ").concat(i, `;
    }`);
}).join(`
`), Xg = `
{
position: absolute;
width: 1px;
height: 1px;
left: 0;
top: 0;
z-index: 3000;
--moveable-color: #4af;
--zoom: 1;
--zoompx: 1px;
--moveable-line-padding: 0;
--moveable-control-padding: 0;
will-change: transform;
outline: 1px solid transparent;
}
.control-box {
z-index: 0;
}
.line, .control {
position: absolute;
left: 0;
top: 0;
will-change: transform;
}
.control {
width: 14px;
height: 14px;
border-radius: 50%;
border: 2px solid #fff;
box-sizing: border-box;
background: #4af;
background: var(--moveable-color);
margin-top: -7px;
margin-left: -7px;
border: 2px solid #fff;
z-index: 10;
}
.around-control {
position: absolute;
will-change: transform;
width: calc(var(--moveable-control-padding, 20) * 1px);
height: calc(var(--moveable-control-padding, 20) * 1px);
left: calc(var(--moveable-control-padding, 20) * -0.5px);
top: calc(var(--moveable-control-padding, 20) * -0.5px);
box-sizing: border-box;
background: transparent;
z-index: 8;
cursor: alias;
transform-origin: center center;
}
`.concat(Yg, `
.padding {
position: absolute;
top: 0px;
left: 0px;
width: 100px;
height: 100px;
transform-origin: 0 0;
}
.line {
width: 1px;
height: 1px;
background: #4af;
background: var(--moveable-color);
transform-origin: 0px 50%;
}
.line.edge {
z-index: 1;
background: transparent;
}
.line.dashed {
box-sizing: border-box;
background: transparent;
}
.line.dashed.horizontal {
border-top: 1px dashed #4af;
border-top-color: #4af;
border-top-color: var(--moveable-color);
}
.line.dashed.vertical {
border-left: 1px dashed #4af;
border-left-color: #4af;
border-left-color: var(--moveable-color);
}
.line.vertical {
transform: translateX(-50%);
}
.line.horizontal {
transform: translateY(-50%);
}
.line.vertical.bold {
width: 2px;
}
.line.horizontal.bold {
height: 2px;
}

.control.origin {
border-color: #f55;
background: #fff;
width: 12px;
height: 12px;
margin-top: -6px;
margin-left: -6px;
pointer-events: none;
}
`).concat([0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map(function(n) {
  return `
.direction[data-rotation="`.concat(n, '"], :global .view-control-rotation').concat(n, ` {
`).concat(zg(n), `
}
`);
}).join(`
`), `

.line.direction:before {
content: "";
position: absolute;
width: 100%;
height: calc(var(--moveable-line-padding, 0) * 1px);
bottom: 0;
left: 0;
}
.group {
z-index: -1;
}
.area {
position: absolute;
}
.area-pieces {
position: absolute;
top: 0;
left: 0;
display: none;
}
.area.avoid, .area.pass {
pointer-events: none;
}
.area.avoid+.area-pieces {
display: block;
}
.area-piece {
position: absolute;
}

`).concat(ld ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), Wg = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], qs = 1e-4, Cr = 1e-7, Na = 1e-9, Us = Math.pow(10, 10), af = -Us, Hg = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, Hu = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, dd = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, pd = [
  "isMoveableElement",
  "updateRect",
  "updateTarget",
  "destroy",
  "dragStart",
  "isInside",
  "hitTest",
  "setState",
  "getRect",
  "request",
  "isDragging",
  "getManager",
  "forceUpdate",
  "waitToChangeTarget",
  "updateSelectors",
  "getTargets",
  "stopDrag",
  "getControlBoxElement",
  "getMoveables",
  "getDragElement"
];
function Ma(n, t, r, e, i, a) {
  var o, s;
  a === void 0 && (a = "draggable");
  var u = (s = (o = t.gestos[a]) === null || o === void 0 ? void 0 : o.move(r, n.inputEvent)) !== null && s !== void 0 ? s : {}, l = u.originalDatas || u.datas, f = l[a] || (l[a] = {});
  return P(P({}, i ? rp(t, u) : u), { isPinch: !!e, parentEvent: !0, datas: f, originalDatas: n.originalDatas });
}
var ui = /* @__PURE__ */ function() {
  function n(t) {
    var r;
    t === void 0 && (t = "draggable"), this.ableName = t, this.prevX = 0, this.prevY = 0, this.startX = 0, this.startY = 0, this.isDrag = !1, this.isFlag = !1, this.datas = {
      draggable: {}
    }, this.datas = (r = {}, r[t] = {}, r);
  }
  return n.prototype.dragStart = function(t, r) {
    this.isDrag = !1, this.isFlag = !1;
    var e = r.originalDatas;
    return this.datas = e, e[this.ableName] || (e[this.ableName] = {}), P(P({}, this.move(t, r.inputEvent)), { type: "dragstart" });
  }, n.prototype.drag = function(t, r) {
    return this.move([
      t[0] - this.prevX,
      t[1] - this.prevY
    ], r);
  }, n.prototype.move = function(t, r) {
    var e, i, a = !1;
    if (!this.isFlag)
      this.prevX = t[0], this.prevY = t[1], this.startX = t[0], this.startY = t[1], e = t[0], i = t[1], this.isFlag = !0;
    else {
      var o = this.isDrag;
      e = this.prevX + t[0], i = this.prevY + t[1], (t[0] || t[1]) && (this.isDrag = !0), !o && this.isDrag && (a = !0);
    }
    return this.prevX = e, this.prevY = i, {
      type: "drag",
      clientX: e,
      clientY: i,
      inputEvent: r,
      isFirstDrag: a,
      isDrag: this.isDrag,
      distX: e - this.startX,
      distY: i - this.startY,
      deltaX: t[0],
      deltaY: t[1],
      datas: this.datas[this.ableName],
      originalDatas: this.datas,
      parentEvent: !0,
      parentGesto: this
    };
  }, n;
}();
function Qn(n, t, r, e) {
  var i = n.length === 16, a = i ? 4 : 3, o = In(n, r, e, a), s = R(o, 4), u = R(s[0], 2), l = u[0], f = u[1], d = R(s[1], 2), p = d[0], c = d[1], h = R(s[2], 2), v = h[0], g = h[1], _ = R(s[3], 2), m = _[0], y = _[1], b = R(Lt(n, t, a), 2), x = b[0], S = b[1], C = Math.min(l, p, v, m), w = Math.min(f, c, g, y), D = Math.max(l, p, v, m), T = Math.max(f, c, g, y);
  l = l - C || 0, p = p - C || 0, v = v - C || 0, m = m - C || 0, f = f - w || 0, c = c - w || 0, g = g - w || 0, y = y - w || 0, x = x - C || 0, S = S - w || 0;
  var O = n[0], M = n[a + 1], E = br(O * M);
  return {
    left: C,
    top: w,
    right: D,
    bottom: T,
    origin: [x, S],
    pos1: [l, f],
    pos2: [p, c],
    pos3: [v, g],
    pos4: [m, y],
    direction: E
  };
}
function vd(n, t) {
  var r = t.clientX, e = t.clientY, i = t.datas, a = n.state, o = a.moveableClientRect, s = a.rootMatrix, u = a.is3d, l = a.pos1, f = o.left, d = o.top, p = u ? 4 : 3, c = R(lt(ci(s, [r - f, e - d], p), l), 2), h = c[0], v = c[1], g = R(xe({ datas: i, distX: h, distY: v }), 2), _ = g[0], m = g[1];
  return [_, m];
}
function Rn(n, t) {
  var r = t.datas, e = n.state, i = e.allMatrix, a = e.beforeMatrix, o = e.is3d, s = e.left, u = e.top, l = e.origin, f = e.offsetMatrix, d = e.targetMatrix, p = e.transformOrigin, c = o ? 4 : 3;
  r.is3d = o, r.matrix = i, r.targetMatrix = d, r.beforeMatrix = a, r.offsetMatrix = f, r.transformOrigin = p, r.inverseMatrix = _e(i, c), r.inverseBeforeMatrix = _e(a, c), r.absoluteOrigin = En(Ct([s, u], l), c), r.startDragBeforeDist = _r(r.inverseBeforeMatrix, r.absoluteOrigin, c), r.startDragDist = _r(r.inverseMatrix, r.absoluteOrigin, c);
}
function Vg(n) {
  return Qn(n.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function zo(n, t, r) {
  var e = t.datas, i = t.originalDatas.beforeRenderable, a = e.transformIndex, o = i.nextTransforms, s = o.length, u = i.nextTransformAppendedIndexes, l = -1;
  a === -1 ? (r === "translate" ? l = 0 : r === "rotate" && (l = Re(o, function(c) {
    return c.match(/scale\(/g);
  })), l === -1 && (l = o.length), e.transformIndex = l) : Rr(u, function(c) {
    return c.index === a && c.functionName === r;
  }) ? l = a : l = a + u.filter(function(c) {
    return c.index < a;
  }).length;
  var f = g1(o, n.state, l), d = f.targetFunction, p = r === "rotate" ? "rotateZ" : r;
  e.beforeFunctionTexts = f.beforeFunctionTexts, e.afterFunctionTexts = f.afterFunctionTexts, e.beforeTransform = f.beforeFunctionMatrix, e.beforeTransform2 = f.beforeFunctionMatrix2, e.targetTansform = f.targetFunctionMatrix, e.afterTransform = f.afterFunctionMatrix, e.afterTransform2 = f.afterFunctionMatrix2, e.targetAllTransform = f.allFunctionMatrix, d.functionName === p ? (e.afterFunctionTexts.splice(0, 1), e.isAppendTransform = !1) : s > l && (e.isAppendTransform = !0, i.nextTransformAppendedIndexes = j(j([], R(u), !1), [{
    functionName: r,
    index: l,
    isAppend: !0
  }], !1));
}
function Ao(n, t, r) {
  return "".concat(n.beforeFunctionTexts.join(" "), " ").concat(n.isAppendTransform ? r : t, " ").concat(n.afterFunctionTexts.join(" "));
}
function $g(n) {
  var t = n.datas, r = n.distX, e = n.distY, i = R(gd({ datas: t, distX: r, distY: e }), 2), a = i[0], o = i[1], s = hd(t, qh([a, o], 4));
  return _r(s, En([0, 0, 0], 4), 4);
}
function hd(n, t, r) {
  var e = n.beforeTransform, i = n.afterTransform, a = n.beforeTransform2, o = n.afterTransform2, s = n.targetAllTransform, u = r ? Pt(s, t, 4) : Pt(t, s, 4), l = Pt(_e(r ? a : e, 4), u, 4), f = Pt(l, _e(r ? o : i, 4), 4);
  return f;
}
function gd(n) {
  var t = n.datas, r = n.distX, e = n.distY, i = t.inverseBeforeMatrix, a = t.is3d, o = t.startDragBeforeDist, s = t.absoluteOrigin, u = a ? 4 : 3;
  return lt(_r(i, Ct(s, [r, e]), u), o);
}
function xe(n, t) {
  var r = n.datas, e = n.distX, i = n.distY, a = r.inverseBeforeMatrix, o = r.inverseMatrix, s = r.is3d, u = r.startDragBeforeDist, l = r.startDragDist, f = r.absoluteOrigin, d = s ? 4 : 3;
  return lt(_r(t ? a : o, Ct(f, [e, i]), d), t ? u : l);
}
function qg(n, t) {
  var r = n.datas, e = n.distX, i = n.distY, a = r.beforeMatrix, o = r.matrix, s = r.is3d, u = r.startDragBeforeDist, l = r.startDragDist, f = r.absoluteOrigin, d = s ? 4 : 3;
  return lt(_r(t ? a : o, Ct(t ? u : l, [e, i]), d), f);
}
function Ug(n, t, r, e, i, a) {
  return e === void 0 && (e = t), i === void 0 && (i = r), a === void 0 && (a = [0, 0]), n ? n.map(function(o, s) {
    var u = ya(o), l = u.value, f = u.unit, d = s ? i : e, p = s ? r : t;
    if (o === "%" || isNaN(l)) {
      var c = d ? a[s] / d : 0;
      return p * c;
    } else if (f !== "%")
      return l;
    return p * l / 100;
  }) : a;
}
function _d(n) {
  var t = [];
  return n[1] >= 0 && (n[0] >= 0 && t.push(3), n[0] <= 0 && t.push(2)), n[1] <= 0 && (n[0] >= 0 && t.push(1), n[0] <= 0 && t.push(0)), t;
}
function jg(n, t) {
  return _d(t).map(function(r) {
    return n[r];
  });
}
function ns(n, t) {
  var r = (t + 1) / 2;
  return [
    so(n[0][0], n[1][0], r, 1 - r),
    so(n[0][1], n[1][1], r, 1 - r)
  ];
}
function sr(n, t) {
  var r = ns([n[0], n[1]], t[0]), e = ns([n[2], n[3]], t[0]);
  return ns([r, e], t[1]);
}
function Kg(n, t, r, e, i, a) {
  var o = In(t, r, e, i), s = sr(o, a), u = n[0] - s[0], l = n[1] - s[1];
  return [u, l];
}
function Oa(n, t, r, e) {
  return Pt(n, ji(t, e, r), e);
}
function Zg(n, t, r, e) {
  var i = n.transformOrigin, a = n.offsetMatrix, o = n.is3d, s = o ? 4 : 3, u;
  if (Pr(r)) {
    var l = t.beforeTransform, f = t.afterTransform;
    e ? u = fe(sa(r), 4, s) : u = fe(Pt(Pt(l, sa([r]), 4), f, 4), 4, s);
  } else
    u = r;
  return Oa(a, u, i, s);
}
function Qg(n, t) {
  var r = n.transformOrigin, e = n.offsetMatrix, i = n.is3d, a = n.targetMatrix, o = n.targetAllTransform, s = i ? 4 : 3;
  return Oa(e, Pt(o || a, Nu(t, s), s), r, s);
}
function Bo(n, t) {
  var r = Ci(t);
  return {
    setTransform: function(e, i) {
      i === void 0 && (i = -1), r.startTransforms = rr(e) ? e : Ke(e), js(n, t, i);
    },
    setTransformIndex: function(e) {
      js(n, t, e);
    }
  };
}
function Go(n, t, r) {
  var e = Ci(t), i = e.startTransforms;
  js(n, t, Re(i, function(a) {
    return a.indexOf("".concat(r, "(")) === 0;
  }));
}
function js(n, t, r) {
  var e = Ci(t), i = t.datas;
  if (i.transformIndex = r, r !== -1) {
    var a = e.startTransforms[r];
    if (a) {
      var o = n.state, s = si([a], {
        "x%": function(u) {
          return u / 100 * o.offsetWidth;
        },
        "y%": function(u) {
          return u / 100 * o.offsetHeight;
        }
      });
      i.startValue = s[0].functionValue;
    }
  }
}
function Vu(n, t) {
  var r = Ci(n);
  r.nextTransforms = Ke(t);
}
function Ci(n) {
  return n.originalDatas.beforeRenderable;
}
function co(n) {
  var t = n.originalDatas.beforeRenderable;
  return t.nextTransforms;
}
function La(n) {
  return (co(n) || []).join(" ");
}
function Ya(n) {
  return Ci(n).nextStyle;
}
function md(n, t, r, e, i) {
  Vu(i, t);
  var a = yr.drag(n, Ma(i, n.state, r, e, !1)), o = a ? a.transform : t;
  return P(P({ transform: t, drag: a }, wr({
    transform: o
  }, i)), { afterTransform: o });
}
function $u(n, t, r, e, i, a) {
  var o = Zg(n.state, i, t, a), s = r0(n, r, e, o);
  return s;
}
function xd(n, t, r, e, i, a, o) {
  var s = $u(n, t, r, i, a, o), u = n.state, l = u.left, f = u.top, d = n.props.groupable, p = d ? l : 0, c = d ? f : 0, h = lt(e, s);
  return lt(h, [p, c]);
}
function Jg(n, t, r, e, i, a, o) {
  var s = xd(n, t, r, e, i, a, o);
  return s;
}
function t0(n, t, r) {
  return [
    t ? -1 + n[0] / (t / 2) : 0,
    r ? -1 + n[1] / (r / 2) : 0
  ];
}
function r0(n, t, r, e) {
  e === void 0 && (e = n.state.allMatrix);
  var i = n.state, a = i.width, o = i.height, s = i.is3d, u = s ? 4 : 3, l = [
    a / 2 * (1 + t[0]) + r[0],
    o / 2 * (1 + t[1]) + r[1]
  ];
  return Lt(e, l, u);
}
function e0(n, t, r) {
  var e = r.fixedDirection, i = r.fixedPosition, a = r.fixedOffset;
  return xd(n, "rotate(".concat(t, "deg)"), e, i, a, r);
}
function n0(n, t, r, e, i, a) {
  var o = n.props.groupable, s = n.state, u = s.transformOrigin, l = s.offsetMatrix, f = s.is3d, d = s.width, p = s.height, c = s.left, h = s.top, v = a.fixedDirection, g = a.nextTargetMatrix || s.targetMatrix, _ = f ? 4 : 3, m = Ug(i, t, r, d, p, u), y = o ? c : 0, b = o ? h : 0, x = Oa(l, g, m, _), S = Kg(e, x, t, r, _, v);
  return lt(S, [y, b]);
}
function i0(n, t) {
  return sr(re(n.state), t);
}
function a0(n, t) {
  var r = n.targetGesto, e = n.controlGesto, i;
  return r != null && r.isFlag() && (i = r.getEventData()[t]), !i && (e != null && e.isFlag()) && (i = e.getEventData()[t]), i || {};
}
function o0(n) {
  if (n && n.getRootNode) {
    var t = n.getRootNode();
    if (t.nodeType === 11)
      return t;
  }
}
function s0(n) {
  var t = n("scale"), r = n("rotate"), e = n("translate"), i = [];
  return e && e !== "0px" && e !== "none" && i.push("translate(".concat(e.split(/\s+/).join(","), ")")), r && r !== "1" && r !== "none" && i.push("rotate(".concat(r, ")")), t && t !== "1" && t !== "none" && i.push("scale(".concat(t.split(/\s+/).join(","), ")")), i;
}
function yd(n, t, r) {
  for (var e = n, i = [], a = Iu(n) || en(n), o = !r && n === t || n === a, s = o, u = !1, l = 3, f, d, p, c = !1, h = la(t, t, !0).offsetParent, v = 1; e && !s; ) {
    s = o;
    var g = Ir(e), _ = g("position"), m = Hd(e), y = _ === "fixed", b = s0(g), x = Uh(i1(m)), S = void 0, C = !1, w = !1, D = 0, T = 0, O = 0, M = 0, E = {
      hasTransform: !1,
      fixedContainer: null
    };
    y && (c = !0, E = l1(e), h = E.fixedContainer);
    var I = x.length;
    !u && (I === 16 || b.length) && (u = !0, l = 4, ru(i), p && (p = fe(p, 3, 4))), u && I === 9 && (x = fe(x, 3, 4));
    var k = u1(e, n), B = k.tagName, F = k.hasOffset, G = k.isSVG, X = k.origin, W = k.targetOrigin, A = k.offset, Y = R(A, 2), H = Y[0], L = Y[1];
    B === "svg" && !e.ownerSVGElement && p && (i.push({
      type: "target",
      target: e,
      matrix: f1(e, l)
    }), i.push({
      type: "offset",
      target: e,
      matrix: Bt(l)
    }));
    var U = parseFloat(g("zoom")) || 1;
    if (y)
      S = E.fixedContainer, C = !0;
    else {
      var q = la(e, t, !1, !0, g), tt = q.offsetZoom;
      if (S = q.offsetParent, C = q.isEnd, w = q.isStatic, v *= tt, (q.isCustomElement || tt !== 1) && w)
        H -= S.offsetLeft, L -= S.offsetTop;
      else if (Ng || Fg) {
        var J = q.parentSlotElement;
        if (J) {
          for (var ft = S, dt = 0, Z = 0; ft && o0(ft); )
            dt += ft.offsetLeft, Z += ft.offsetTop, ft = ft.offsetParent;
          H -= dt, L -= Z;
        }
      }
    }
    if (ud && !Lg && F && !G && w && (_ === "relative" || _ === "static") && (H -= S.offsetLeft, L -= S.offsetTop, o = o || C), y)
      F && E.hasTransform && (O = S.clientLeft, M = S.clientTop);
    else if (F && h !== S && (D = S.clientLeft, T = S.clientTop), F && S === a) {
      var nt = Vd(e, !1);
      H += nt[0], L += nt[1];
    }
    if (i.push({
      type: "target",
      target: e,
      matrix: ji(x, l, X)
    }), b.length && (i.push({
      type: "offset",
      target: e,
      matrix: Bt(l)
    }), i.push({
      type: "target",
      target: e,
      matrix: ji(sa(b), l, X)
    })), F) {
      var xt = e === n, at = xt ? 0 : e.scrollLeft, Q = xt ? 0 : e.scrollTop;
      i.push({
        type: "offset",
        target: e,
        matrix: Tn([
          H - at + D - O,
          L - Q + T - M
        ], l)
      });
    } else
      i.push({
        type: "offset",
        target: e,
        origin: X
      });
    if (U !== 1 && i.push({
      type: "zoom",
      target: e,
      matrix: ji(Nu([U, U], l), l, [0, 0])
    }), p || (p = x), f || (f = X), d || (d = W), s || y)
      break;
    e = S, o = C, (!r || e === a) && (s = o);
  }
  return p || (p = Bt(l)), f || (f = [0, 0]), d || (d = [0, 0]), {
    zoom: v,
    offsetContainer: h,
    matrixes: i,
    targetMatrix: p,
    transformOrigin: f,
    targetOrigin: d,
    is3d: u,
    hasFixed: c
  };
}
var pn = null, vn = null, $n = null;
function li(n) {
  n ? (window.Map && (pn = /* @__PURE__ */ new Map(), vn = /* @__PURE__ */ new Map()), $n = []) : (pn = null, $n = null, vn = null);
}
function u0(n) {
  var t = vn == null ? void 0 : vn.get(n);
  if (t)
    return t;
  var r = Ki(n, !0);
  return vn && vn.set(n, r), r;
}
function l0(n, t) {
  if ($n) {
    var r = Rr($n, function(i) {
      return i[0][0] == n && i[0][1] == t;
    });
    if (r)
      return r[1];
  }
  var e = yd(n, t, !0);
  return $n && $n.push([[n, t], e]), e;
}
function Ir(n) {
  var t = pn == null ? void 0 : pn.get(n);
  if (!t) {
    var r = qe(n).getComputedStyle(n);
    if (!pn)
      return function(a) {
        return r[a];
      };
    t = {
      style: r,
      cached: {}
    }, pn.set(n, t);
  }
  var e = t.cached, i = t.style;
  return function(a) {
    return a in e || (e[a] = i[a]), e[a];
  };
}
function se(n, t, r) {
  var e = r.originalDatas;
  e.groupable = e.groupable || {};
  var i = e.groupable;
  i.childDatas = i.childDatas || [];
  var a = i.childDatas;
  return n.moveables.map(function(o, s) {
    return a[s] = a[s] || {}, a[s][t] = a[s][t] || {}, P(P({}, r), { isRequestChild: !0, datas: a[s][t], originalDatas: a[s] });
  });
}
function is(n, t, r, e, i, a, o) {
  var s = !!r.match(/Start$/g), u = !!r.match(/End$/g), l = i.isPinch, f = i.datas, d = se(n, t.name, i), p = n.moveables, c = [], h = d.map(function(v, g) {
    var _ = p[g], m = _.state, y = m.gestos, b = v;
    if (s)
      b = new ui(o).dragStart(e, v), c.push(b);
    else {
      if (y[o] || (y[o] = f.childGestos[g]), !y[o])
        return;
      b = Ma(v, m, e, l, a, o), c.push(b);
    }
    var x = t[r](_, P(P({}, b), { parentFlag: !0 }));
    return u && (y[o] = null), x;
  });
  return s && (f.childGestos = p.map(function(v) {
    return v.state.gestos[o];
  })), {
    eventParams: h,
    childEvents: c
  };
}
function Pe(n, t, r, e, i, a) {
  i === void 0 && (i = function(f, d) {
    return d;
  });
  var o = !!r.match(/End$/g), s = se(n, t.name, e), u = n.moveables, l = s.map(function(f, d) {
    var p = u[d], c = f;
    c = i(p, f);
    var h = t[r](p, P(P({}, c), { parentFlag: !0 }));
    return h && a && a(p, f, h, d), o && (p.state.gestos = {}), h;
  });
  return l;
}
function po(n, t, r, e) {
  var i = r.fixedDirection, a = r.fixedPosition, o = e.datas.startPositions || re(t.state), s = sr(o, i), u = R(_r(Da(-n.rotation / 180 * Math.PI, 3), [s[0] - a[0], s[1] - a[1], 1], 3), 2), l = u[0], f = u[1];
  return e.datas.originalX = l, e.datas.originalY = f, e;
}
function bd(n, t, r, e) {
  var i = n.getState(), a = i.renderPoses, o = i.rotation, s = i.direction, u = On(n.props, t).zoom, l = Ui(o / Math.PI * 180), f = {}, d = n.renderState;
  d.renderDirectionMap || (d.renderDirectionMap = {});
  var p = d.renderDirectionMap;
  r.forEach(function(h) {
    var v = h.dir;
    f[v] = !0;
  });
  var c = br(s);
  return r.map(function(h) {
    var v = h.data, g = h.classNames, _ = h.dir, m = Hu[_];
    if (!m || !f[_])
      return null;
    p[_] = !0;
    var y = (ct(l, 15) + c * dd[_] + 720) % 180, b = {};
    return Ie(v).forEach(function(x) {
      b["data-".concat(x)] = v[x];
    }), e.createElement("div", P({ className: st.apply(void 0, j(["control", "direction", _, t], R(g), !1)), "data-rotation": y, "data-direction": _ }, b, { key: "direction-".concat(_), style: _o.apply(void 0, j([o, u], R(m.map(function(x) {
      return a[x];
    })), !1)) }));
  });
}
function Sd(n, t, r, e) {
  var i = On(n.props, r), a = i.renderDirections, o = a === void 0 ? t : a, s = i.displayAroundControls;
  if (!o)
    return [];
  var u = o === !0 ? Xu : o;
  return j(j([], R(s ? Ed(n, e, r, u) : []), !1), R(bd(n, r, u.map(function(l) {
    return {
      data: {},
      classNames: [],
      dir: l
    };
  }), e)), !1);
}
function ua(n, t, r, e, i, a) {
  for (var o = [], s = 6; s < arguments.length; s++)
    o[s - 6] = arguments[s];
  var u = jt(r, e), l = t ? ct(u / Math.PI * 180, 15) % 180 : -1;
  return n.createElement("div", { key: "line-".concat(a), className: st.apply(void 0, j(["line", "direction", t ? "edge" : "", t], R(o), !1)), "data-rotation": l, "data-line-key": a, "data-direction": t, style: Gi(r, e, i, u) });
}
function wd(n, t, r, e, i) {
  var a = r === !0 ? Ig : r;
  return a.map(function(o, s) {
    var u = R(Hu[o], 2), l = u[0], f = u[1];
    if (f != null)
      return ua(n, o, e[l], e[f], i, "".concat(t, "Edge").concat(s), t);
  }).filter(Boolean);
}
function Cd(n) {
  return function(t, r) {
    var e = On(t.props, n).edge;
    return e && (e === !0 || e.length) ? j(j([], R(wd(r, n, e, t.getState().renderPoses, t.props.zoom)), !1), R(f0(t, n, r)), !1) : Dd(t, n, r);
  };
}
function Dd(n, t, r) {
  return Sd(n, Xu, t, r);
}
function f0(n, t, r) {
  return Sd(n, ["nw", "ne", "sw", "se"], t, r);
}
function Ed(n, t, r, e) {
  var i = n.renderState;
  i.renderDirectionMap || (i.renderDirectionMap = {});
  var a = n.getState(), o = a.renderPoses, s = a.rotation, u = a.direction, l = i.renderDirectionMap, f = n.props.zoom, d = br(u), p = s / Math.PI * 180;
  return (e || Ie(l)).map(function(c) {
    var h = Hu[c];
    if (!h)
      return null;
    var v = (ct(p, 15) + d * dd[c] + 720) % 180, g = ["around-control"];
    return r && g.push("direction", r), t.createElement("div", { className: st.apply(void 0, j([], R(g), !1)), "data-rotation": v, "data-direction": c, key: "direction-around-".concat(c), style: _o.apply(void 0, j([s, f], R(h.map(function(_) {
      return o[_];
    })), !1)) });
  });
}
function qu(n, t, r) {
  var e = n || {}, i = e.position, a = i === void 0 ? "client" : i, o = e.left, s = o === void 0 ? -1 / 0 : o, u = e.top, l = u === void 0 ? -1 / 0 : u, f = e.right, d = f === void 0 ? 1 / 0 : f, p = e.bottom, c = p === void 0 ? 1 / 0 : p, h = {
    position: a,
    left: s,
    top: l,
    right: d,
    bottom: c
  };
  return {
    vertical: of(h, t, !0),
    horizontal: of(h, r, !1)
  };
}
function Fo(n, t) {
  var r = n.state, e = r.containerClientRect, i = e.clientHeight, a = e.clientWidth, o = e.clientLeft, s = e.clientTop, u = r.snapOffset, l = u.left, f = u.top, d = u.right, p = u.bottom, c = t || n.props.bounds || {}, h = c.position || "client", v = h === "css", g = c.left, _ = g === void 0 ? -1 / 0 : g, m = c.top, y = m === void 0 ? -1 / 0 : m, b = c.right, x = b === void 0 ? v ? -1 / 0 : 1 / 0 : b, S = c.bottom, C = S === void 0 ? v ? -1 / 0 : 1 / 0 : S;
  return v && (x = a + d - l - x, C = i + p - f - C), {
    left: _ + l - o,
    right: x + l - o,
    top: y + f - s,
    bottom: C + f - s
  };
}
function c0(n, t, r) {
  var e = Fo(n), i = e.left, a = e.top, o = e.right, s = e.bottom, u = R(r, 2), l = u[0], f = u[1], d = R(lt(r, t), 2), p = d[0], c = d[1];
  V(p) < Cr && (p = 0), V(c) < Cr && (c = 0);
  var h = c > 0, v = p > 0, g = {
    isBound: !1,
    offset: 0,
    pos: 0
  }, _ = {
    isBound: !1,
    offset: 0,
    pos: 0
  };
  if (p === 0 && c === 0)
    return {
      vertical: g,
      horizontal: _
    };
  if (p === 0)
    h ? s < f && (_.pos = s, _.offset = f - s) : a > f && (_.pos = a, _.offset = f - a);
  else if (c === 0)
    v ? o < l && (g.pos = o, g.offset = l - o) : i > l && (g.pos = i, g.offset = l - i);
  else {
    var m = c / p, y = r[1] - m * l, b = 0, x = 0, S = !1;
    v && o <= l ? (b = m * o + y, x = o, S = !0) : !v && l <= i && (b = m * i + y, x = i, S = !0), S && (b < a || b > s) && (S = !1), S || (h && s <= f ? (b = s, x = (b - y) / m, S = !0) : !h && f <= a && (b = a, x = (b - y) / m, S = !0)), S && (g.isBound = !0, g.pos = x, g.offset = l - x, _.isBound = !0, _.pos = b, _.offset = f - b);
  }
  return {
    vertical: g,
    horizontal: _
  };
}
function of(n, t, r) {
  var e = n[r ? "left" : "top"], i = n[r ? "right" : "bottom"], a = Math.min.apply(Math, j([], R(t), !1)), o = Math.max.apply(Math, j([], R(t), !1)), s = [];
  return e + 1 > a && s.push({
    direction: "start",
    isBound: !0,
    offset: a - e,
    pos: e
  }), i - 1 < o && s.push({
    direction: "end",
    isBound: !0,
    offset: o - i,
    pos: i
  }), s.length || s.push({
    isBound: !1,
    offset: 0,
    pos: 0
  }), s.sort(function(u, l) {
    return V(l.offset) - V(u.offset);
  });
}
function sf(n, t, r) {
  var e = r ? n.map(function(i) {
    return Ca(i, r);
  }) : n;
  return e.some(function(i) {
    return i[0] < t.left && V(i[0] - t.left) > 0.1 || i[0] > t.right && V(i[0] - t.right) > 0.1 || i[1] < t.top && V(i[1] - t.top) > 0.1 || i[1] > t.bottom && V(i[1] - t.bottom) > 0.1;
  });
}
function d0(n, t, r) {
  var e = te(n), i = Math.sqrt(e * e - t * t) || 0;
  return [i, -i].sort(function(a, o) {
    return V(a - n[r ? 0 : 1]) - V(o - n[r ? 0 : 1]);
  }).map(function(a) {
    return jt([0, 0], r ? [a, t] : [t, a]);
  });
}
function p0(n, t, r, e, i) {
  if (!n.props.bounds)
    return [];
  var a = i * Math.PI / 180, o = Fo(n), s = o.left, u = o.top, l = o.right, f = o.bottom, d = s - e[0], p = l - e[0], c = u - e[1], h = f - e[1], v = {
    left: d,
    top: c,
    right: p,
    bottom: h
  };
  if (!sf(r, v, 0))
    return [];
  var g = [];
  return [
    [d, 0],
    [p, 0],
    [c, 1],
    [h, 1]
  ].forEach(function(_) {
    var m = R(_, 2), y = m[0], b = m[1];
    r.forEach(function(x) {
      var S = jt([0, 0], x);
      g.push.apply(g, j([], R(d0(x, y, b).map(function(C) {
        return a + C - S;
      }).filter(function(C) {
        return !sf(t, v, C);
      }).map(function(C) {
        return ct(C * 180 / Math.PI, Cr);
      })), !1));
    });
  }), g;
}
var v0 = ["left", "right", "center"], h0 = ["top", "bottom", "middle"], uf = {
  left: "start",
  right: "end",
  center: "center",
  top: "start",
  bottom: "end",
  middle: "center"
}, Ze = {
  start: "left",
  end: "right",
  center: "center"
}, Qe = {
  start: "top",
  end: "bottom",
  center: "middle"
};
function qn() {
  return {
    left: !1,
    top: !1,
    right: !1,
    bottom: !1
  };
}
function Di(n, t) {
  var r = n.props, e = r.snappable, i = r.bounds, a = r.innerBounds, o = r.verticalGuidelines, s = r.horizontalGuidelines, u = r.snapGridWidth, l = r.snapGridHeight, f = n.state, d = f.guidelines, p = f.enableSnap;
  return !e || !p || t && e !== !0 && e.indexOf(t) < 0 ? !1 : !!(u || l || i || a || d && d.length || o && o.length || s && s.length);
}
function Uu(n) {
  return n === !1 ? {} : n === !0 || !n ? { left: !0, right: !0, top: !0, bottom: !0 } : n;
}
function g0(n, t) {
  var r = Uu(n), e = {};
  for (var i in r)
    i in t && r[i] && (e[i] = t[i]);
  return e;
}
function ju(n, t) {
  var r = g0(n, t), e = h0.filter(function(a) {
    return a in r;
  }), i = v0.filter(function(a) {
    return a in r;
  });
  return {
    horizontalNames: e,
    verticalNames: i,
    horizontal: e.map(function(a) {
      return r[a];
    }),
    vertical: i.map(function(a) {
      return r[a];
    })
  };
}
function _0(n, t, r) {
  var e = Lt(n, [t.clientLeft, t.clientTop], r);
  return [
    t.left + e[0],
    t.top + e[1]
  ];
}
function m0(n) {
  var t = R(n, 2), r = t[0], e = t[1], i = e[0] - r[0], a = e[1] - r[1];
  Math.abs(i) < tr && (i = 0), Math.abs(a) < tr && (a = 0);
  var o = 0, s = 0, u = 0;
  return i ? a ? (o = -a / i, s = 1, u = o * r[0] - r[1]) : (s = 1, u = -r[1]) : (o = -1, u = r[0]), [o, s, u].map(function(l) {
    return ct(l, tr);
  });
}
var Td = "snapRotationThreshold", Md = "snapRotationDegrees", Od = "snapHorizontalThreshold", Pd = "snapVerticalThreshold";
function No(n, t, r, e, i, a, o) {
  var s;
  e === void 0 && (e = []), i === void 0 && (i = []);
  var u = n.props, l = ((s = n.state.snapThresholdInfo) === null || s === void 0 ? void 0 : s.multiples) || [1, 1], f = wf(o, u[Od], 5), d = wf(a, u[Pd], 5);
  return Rd(n.state.guidelines, t, r, e, i, f, d, l);
}
function Rd(n, t, r, e, i, a, o, s) {
  return {
    vertical: ff(n, "vertical", t, o * s[0], e),
    horizontal: ff(n, "horizontal", r, a * s[1], i)
  };
}
function x0(n, t, r) {
  var e = R(r, 2), i = e[0], a = e[1], o = R(t, 2), s = o[0], u = o[1], l = R(lt(r, t), 2), f = l[0], d = l[1], p = d > 0, c = f > 0;
  f = mo(f), d = mo(d);
  var h = {
    isSnap: !1,
    offset: 0,
    pos: 0
  }, v = {
    isSnap: !1,
    offset: 0,
    pos: 0
  };
  if (f === 0 && d === 0)
    return {
      vertical: h,
      horizontal: v
    };
  var g = No(n, f ? [i] : [], d ? [a] : [], [], [], void 0, void 0), _ = g.vertical, m = g.horizontal;
  _.posInfos.filter(function(B) {
    var F = B.pos;
    return c ? F >= s : F <= s;
  }), m.posInfos.filter(function(B) {
    var F = B.pos;
    return p ? F >= u : F <= u;
  }), _.isSnap = _.posInfos.length > 0, m.isSnap = m.posInfos.length > 0;
  var y = Ks(_), b = y.isSnap, x = y.guideline, S = Ks(m), C = S.isSnap, w = S.guideline, D = C ? w.pos[1] : 0, T = b ? x.pos[0] : 0;
  if (f === 0)
    C && (v.isSnap = !0, v.pos = w.pos[1], v.offset = a - v.pos);
  else if (d === 0)
    b && (h.isSnap = !0, h.pos = T, h.offset = i - T);
  else {
    var O = d / f, M = r[1] - O * i, E = 0, I = 0, k = !1;
    b ? (I = T, E = O * I + M, k = !0) : C && (E = D, I = (E - M) / O, k = !0), k && (h.isSnap = !0, h.pos = I, h.offset = i - I, v.isSnap = !0, v.pos = E, v.offset = a - E);
  }
  return {
    vertical: h,
    horizontal: v
  };
}
function Ye(n) {
  var t = "";
  return n === -1 || n === "top" || n === "left" ? t = "start" : n === 0 || n === "center" || n === "middle" ? t = "center" : (n === 1 || n === "right" || n === "bottom") && (t = "end"), t;
}
function lf(n, t, r, e) {
  var i = ju(n.props.snapDirections, t), a = No(n, i.vertical, i.horizontal, i.verticalNames.map(function(u) {
    return Ye(u);
  }), i.horizontalNames.map(function(u) {
    return Ye(u);
  }), r, e), o = Ye(i.horizontalNames[a.horizontal.index]), s = Ye(i.verticalNames[a.vertical.index]);
  return {
    vertical: P(P({}, a.vertical), { direction: s }),
    horizontal: P(P({}, a.horizontal), { direction: o })
  };
}
function Ks(n) {
  var t = n.isSnap;
  if (!t)
    return {
      isSnap: !1,
      offset: 0,
      dist: -1,
      pos: 0,
      guideline: null
    };
  var r = n.posInfos[0], e = r.guidelineInfos[0], i = e.offset, a = e.dist, o = e.guideline;
  return {
    isSnap: t,
    offset: i,
    dist: a,
    pos: r.pos,
    guideline: o
  };
}
function ff(n, t, r, e, i) {
  var a, o;
  if (i === void 0 && (i = []), !n || !n.length)
    return {
      isSnap: !1,
      index: -1,
      direction: "",
      posInfos: []
    };
  var s = t === "vertical", u = s ? 0 : 1, l = r.map(function(d, p) {
    var c = i[p] || "", h = n.map(function(v) {
      var g = v.pos, _ = d - g[u];
      return {
        offset: _,
        dist: V(_),
        guideline: v,
        direction: c
      };
    }).filter(function(v) {
      var g = v.guideline, _ = v.dist, m = g.type;
      return !(m !== t || _ > e);
    }).sort(function(v, g) {
      return v.dist - g.dist;
    });
    return {
      pos: d,
      index: p,
      guidelineInfos: h,
      direction: c
    };
  }).filter(function(d) {
    return d.guidelineInfos.length > 0;
  }).sort(function(d, p) {
    return d.guidelineInfos[0].dist - p.guidelineInfos[0].dist;
  }), f = l.length > 0;
  return {
    isSnap: f,
    index: f ? l[0].index : -1,
    direction: (o = (a = l[0]) === null || a === void 0 ? void 0 : a.direction) !== null && o !== void 0 ? o : "",
    posInfos: l
  };
}
function y0(n, t, r, e, i) {
  var a = [];
  r[0] && r[1] ? a = [
    r,
    [-r[0], r[1]],
    [r[0], -r[1]]
  ] : !r[0] && !r[1] ? [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
  ].forEach(function(p, c, h) {
    var v = h[c + 1] || h[0];
    a.push(p), a.push([
      (p[0] + v[0]) / 2,
      (p[1] + v[1]) / 2
    ]);
  }) : n.props.keepRatio ? a.push([-1, -1], [-1, 1], [1, -1], [1, 1], r) : (a.push.apply(a, j([], R(jg([
    [-1, -1],
    [1, -1],
    [-1, -1],
    [1, 1]
  ], r)), !1)), a.length > 1 && a.push([
    (a[0][0] + a[1][0]) / 2,
    (a[0][1] + a[1][1]) / 2
  ]));
  var o = a.map(function(p) {
    return sr(t, p);
  }), s = o.map(function(p) {
    return p[0];
  }), u = o.map(function(p) {
    return p[1];
  }), l = No(n, s, u, a.map(function(p) {
    return Ye(p[0]);
  }), a.map(function(p) {
    return Ye(p[1]);
  }), e, i), f = Ye(a.map(function(p) {
    return p[0];
  })[l.vertical.index]), d = Ye(a.map(function(p) {
    return p[1];
  })[l.horizontal.index]);
  return {
    vertical: P(P({}, l.vertical), { direction: f }),
    horizontal: P(P({}, l.horizontal), { direction: d })
  };
}
function Id(n, t) {
  var r = V(n.offset), e = V(t.offset);
  return n.isBound && t.isBound ? e - r : n.isBound ? -1 : t.isBound ? 1 : n.isSnap && t.isSnap ? e - r : n.isSnap ? -1 : t.isSnap || r < Cr ? 1 : e < Cr ? -1 : r - e;
}
function vo(n, t) {
  return n.slice().sort(function(r, e) {
    var i = r.sign[t], a = e.sign[t], o = r.offset[t], s = e.offset[t];
    if (i) {
      if (!a)
        return -1;
    } else
      return 1;
    return Id({ isBound: r.isBound, isSnap: r.isSnap, offset: o }, { isBound: e.isBound, isSnap: e.isSnap, offset: s });
  })[0];
}
function b0(n, t, r) {
  var e = [];
  if (r)
    V(t[0]) !== 1 || V(t[1]) !== 1 ? e.push([t, [-1, -1]], [t, [-1, 1]], [t, [1, -1]], [t, [1, 1]]) : e.push([t, [n[0], -n[1]]], [t, [-n[0], n[1]]]), e.push([t, n]);
  else if (n[0] && n[1] || !n[0] && !n[1]) {
    var i = n[0] ? n : [1, 1];
    [1, -1].forEach(function(o) {
      [1, -1].forEach(function(s) {
        var u = [o * i[0], s * i[1]];
        t[0] === u[0] && t[1] === u[1] || e.push([t, u]);
      });
    });
  } else if (n[0]) {
    var a = V(t[0]) === 1 ? [1] : [1, -1];
    a.forEach(function(o) {
      e.push([
        [t[0], -1],
        [o * n[0], -1]
      ], [
        [t[0], 0],
        [o * n[0], 0]
      ], [
        [t[0], 1],
        [o * n[0], 1]
      ]);
    });
  } else if (n[1]) {
    var a = V(t[1]) === 1 ? [1] : [1, -1];
    a.forEach(function(s) {
      e.push([
        [-1, t[1]],
        [-1, s * n[1]]
      ], [
        [0, t[1]],
        [0, s * n[1]]
      ], [
        [1, t[1]],
        [1, s * n[1]]
      ]);
    });
  }
  return e;
}
function kd(n, t) {
  var r = zs([t[0][0], t[1][0]]), e = zs([t[0][1], t[1][1]]);
  return {
    vertical: r <= n[0],
    horizontal: e <= n[1]
  };
}
function Ku(n, t) {
  var r = R(t, 2), e = r[0], i = r[1], a = i[0] - e[0], o = i[1] - e[1];
  V(a) < Cr && (a = 0), V(o) < Cr && (o = 0);
  var s, u;
  if (!a)
    s = e[0], u = n[0];
  else if (!o)
    s = e[1], u = n[1];
  else {
    var l = o / a;
    s = l * (n[0] - e[0]) + e[1], u = n[1];
  }
  return s - u;
}
function zd(n, t, r, e) {
  return e === void 0 && (e = Cr), n.every(function(i) {
    var a = Ku(i, t), o = a <= 0;
    return o === r || V(a) <= e;
  });
}
function cf(n, t, r, e, i) {
  return i === void 0 && (i = 0), e && t - i <= n || !e && n <= r + i ? {
    isBound: !0,
    offset: e ? t - n : r - n
  } : {
    isBound: !1,
    offset: 0
  };
}
function S0(n, t) {
  var r = t.line, e = t.centerSign, i = t.verticalSign, a = t.horizontalSign, o = t.lineConstants, s = n.props.innerBounds;
  if (!s)
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var u = s.left, l = s.top, f = s.width, d = s.height, p = [[u, l], [u, l + d]], c = [[u, l], [u + f, l]], h = [[u + f, l], [u + f, l + d]], v = [[u, l + d], [u + f, l + d]];
  if (zd([
    [u, l],
    [u + f, l],
    [u, l + d],
    [u + f, l + d]
  ], r, e))
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var g = Xe(r, o, c, i), _ = Xe(r, o, v, i), m = Xe(r, o, p, a), y = Xe(r, o, h, a), b = g.isBound && _.isBound, x = g.isBound || _.isBound, S = m.isBound && y.isBound, C = m.isBound || y.isBound, w = fi(g.offset, _.offset), D = fi(m.offset, y.offset), T = [0, 0], O = !1, M = !1;
  return V(D) < V(w) ? (T = [w, 0], O = x, M = b) : (T = [0, D], O = C, M = S), {
    isAllBound: M,
    isVerticalBound: x,
    isHorizontalBound: C,
    isBound: O,
    offset: T
  };
}
function Xe(n, t, r, e, i, a) {
  var o = R(t, 2), s = o[0], u = o[1], l = n[0], f = r[0], d = r[1], p = mo(d[1] - f[1]), c = mo(d[0] - f[0]), h = u, v = s, g = -s / u;
  if (c) {
    if (!p) {
      if (a && !h)
        return {
          isBound: !1,
          offset: 0
        };
      if (v) {
        var b = (f[1] - l[1]) / g + l[0];
        return cf(b, f[0], d[0], e, i);
      } else {
        var m = f[1] - l[1], y = V(m) <= (i || 0);
        return {
          isBound: y,
          offset: y ? m : 0
        };
      }
    }
  } else {
    if (a && !v)
      return {
        isBound: !1,
        offset: 0
      };
    if (h) {
      var _ = g * (f[0] - l[0]) + l[1];
      return cf(_, f[1], d[1], e, i);
    } else {
      var m = f[0] - l[0], y = V(m) <= (i || 0);
      return {
        isBound: y,
        offset: y ? m : 0
      };
    }
  }
  return {
    isBound: !1,
    offset: 0
  };
}
function Ad(n, t, r) {
  return t.map(function(e) {
    var i = S0(n, e), a = i.isBound, o = i.offset, s = i.isVerticalBound, u = i.isHorizontalBound, l = e.multiple, f = xe({
      datas: r,
      distX: o[0],
      distY: o[1]
    }).map(function(d, p) {
      return d * (l[p] ? 2 / l[p] : 0);
    });
    return {
      sign: l,
      isBound: a,
      isVerticalBound: s,
      isHorizontalBound: u,
      isSnap: !1,
      offset: f
    };
  });
}
function w0(n, t, r) {
  var e, i = Zu(n, t, [0, 0], !1).map(function(p) {
    return P(P({}, p), { multiple: p.multiple.map(function(c) {
      return V(c) * 2;
    }) });
  }), a = Ad(n, i, r), o = vo(a, 0), s = vo(a, 1), u = 0, l = 0, f = o.isVerticalBound || s.isVerticalBound, d = o.isHorizontalBound || s.isHorizontalBound;
  return (f || d) && (e = R(qg({
    datas: r,
    distX: -o.offset[0],
    distY: -s.offset[1]
  }), 2), u = e[0], l = e[1]), {
    vertical: {
      isBound: f,
      offset: u
    },
    horizontal: {
      isBound: d,
      offset: l
    }
  };
}
function C0(n, t) {
  var r = [], e = n[0], i = n[1];
  return e && i ? r.push([[0, i * 2], n, [-e, i]], [[e * 2, 0], n, [e, -i]]) : e ? (r.push([[e * 2, 0], [e, 1], [e, -1]]), t && r.push([[0, -1], [e, -1], [-e, -1]], [[0, 1], [e, 1], [-e, 1]])) : i ? (r.push([[0, i * 2], [1, i], [-1, i]]), t && r.push([[-1, 0], [-1, i], [-1, -i]], [[1, 0], [1, i], [1, -i]])) : r.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), r;
}
function Zu(n, t, r, e) {
  var i = n.state, a = i.allMatrix, o = i.is3d, s = In(a, 100, 100, o ? 4 : 3), u = sr(s, [0, 0]);
  return C0(r, e).map(function(l) {
    var f = R(l, 3), d = f[0], p = f[1], c = f[2], h = [
      sr(s, p),
      sr(s, c)
    ], v = m0(h), g = kd(u, h), _ = g.vertical, m = g.horizontal, y = Ku(u, h) <= 0;
    return {
      multiple: d,
      centerSign: y,
      verticalSign: _,
      horizontalSign: m,
      lineConstants: v,
      line: [
        sr(t, p),
        sr(t, c)
      ]
    };
  });
}
function df(n, t, r, e) {
  var i = e ? n.map(function(a) {
    return Ca(a, e);
  }) : n;
  return [
    [i[0], i[1]],
    [i[1], i[3]],
    [i[3], i[2]],
    [i[2], i[0]]
  ].some(function(a) {
    var o = Ku(r, a) <= 0;
    return !zd(t, a, o);
  });
}
function D0(n) {
  var t = R(n, 2), r = t[0], e = t[1], i = e[0] - r[0], a = e[1] - r[1];
  if (!i)
    return V(r[0]);
  if (!a)
    return V(r[1]);
  var o = a / i;
  return V((-o * r[0] + r[1]) / Math.sqrt(Math.pow(o, 2) + 1));
}
function E0(n) {
  var t = R(n, 2), r = t[0], e = t[1], i = e[0] - r[0], a = e[1] - r[1];
  if (!i)
    return [r[0], 0];
  if (!a)
    return [0, r[1]];
  var o = a / i, s = -o * r[0] + r[1];
  return [
    -s / (o + 1 / o),
    s / (o * o + 1)
  ];
}
function T0(n, t, r, e, i) {
  var a = n.props.innerBounds, o = i * Math.PI / 180;
  if (!a)
    return [];
  var s = a.left, u = a.top, l = a.width, f = a.height, d = s - e[0], p = s + l - e[0], c = u - e[1], h = u + f - e[1], v = [
    [d, c],
    [p, c],
    [d, h],
    [p, h]
  ], g = sr(r, [0, 0]);
  if (!df(r, v, g, 0))
    return [];
  var _ = [], m = v.map(function(y) {
    return [
      te(y),
      jt([0, 0], y)
    ];
  });
  return [
    [r[0], r[1]],
    [r[1], r[3]],
    [r[3], r[2]],
    [r[2], r[0]]
  ].forEach(function(y) {
    var b = jt([0, 0], E0(y)), x = D0(y);
    _.push.apply(_, j([], R(m.filter(function(S) {
      var C = R(S, 1), w = C[0];
      return w && x <= w;
    }).map(function(S) {
      var C = R(S, 2), w = C[0], D = C[1], T = Math.acos(w ? x / w : 0), O = D + T, M = D - T;
      return [
        o + O - b,
        o + M - b
      ];
    }).reduce(function(S, C) {
      return S.push.apply(S, j([], R(C), !1)), S;
    }, []).filter(function(S) {
      return !df(t, v, g, S);
    }).map(function(S) {
      return ct(S * 180 / Math.PI, Cr);
    })), !1));
  }), _;
}
function M0(n) {
  var t = n.props.innerBounds, r = qn();
  if (!t)
    return {
      boundMap: r,
      vertical: [],
      horizontal: []
    };
  var e = n.getRect(), i = e.pos1, a = e.pos2, o = e.pos3, s = e.pos4, u = [i, a, o, s], l = sr(u, [0, 0]), f = t.left, d = t.top, p = t.width, c = t.height, h = [[f, d], [f, d + c]], v = [[f, d], [f + p, d]], g = [[f + p, d], [f + p, d + c]], _ = [[f, d + c], [f + p, d + c]], m = Zu(n, u, [0, 0], !1), y = [], b = [];
  return m.forEach(function(x) {
    var S = x.line, C = x.lineConstants, w = kd(l, S), D = w.horizontal, T = w.vertical, O = Xe(S, C, v, T, 1, !0), M = Xe(S, C, _, T, 1, !0), E = Xe(S, C, h, D, 1, !0), I = Xe(S, C, g, D, 1, !0);
    O.isBound && !r.top && (y.push(d), r.top = !0), M.isBound && !r.bottom && (y.push(d + c), r.bottom = !0), E.isBound && !r.left && (b.push(f), r.left = !0), I.isBound && !r.right && (b.push(f + p), r.right = !0);
  }), {
    boundMap: r,
    horizontal: y,
    vertical: b
  };
}
function O0(n, t, r, e) {
  var i = t[0] - n[0], a = t[1] - n[1];
  if (V(i) < tr && (i = 0), V(a) < tr && (a = 0), !i)
    return e ? [0, 0] : [0, r];
  if (!a)
    return e ? [r, 0] : [0, 0];
  var o = a / i, s = n[1] - o * n[0];
  if (e) {
    var u = o * (t[0] + r) + s;
    return [r, u - t[1]];
  } else {
    var l = (t[1] + r - s) / o;
    return [l - t[0], r];
  }
}
function Zs(n, t, r, e, i) {
  var a = O0(n, t, r, e);
  if (!a)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var o = Oe(n, t), s = Oe(a, n), u = Oe(a, t), l = s > o || u > o, f = R(xe({
    datas: i,
    distX: a[0],
    distY: a[1]
  }), 2), d = f[0], p = f[1];
  return {
    offset: [d, p],
    isOutside: l
  };
}
function ho(n, t) {
  return n.isBound ? n.offset : t.isSnap ? Ks(t).offset : 0;
}
function P0(n, t, r, e, i) {
  var a = R(t, 2), o = a[0], s = a[1], u = R(r, 2), l = u[0], f = u[1], d = R(e, 2), p = d[0], c = d[1], h = R(i, 2), v = h[0], g = h[1], _ = -v, m = -g;
  if (n && o && s) {
    _ = 0, m = 0;
    var y = [];
    if (l && f ? y.push([0, g], [v, 0]) : l ? y.push([v, 0]) : f ? y.push([0, g]) : p && c ? y.push([0, g], [v, 0]) : p ? y.push([v, 0]) : c && y.push([0, g]), y.length) {
      y.sort(function(C, w) {
        return te(lt([o, s], C)) - te(lt([o, s], w));
      });
      var b = y[0];
      if (b[0] && V(o) > tr)
        _ = -b[0], m = s * V(o + _) / V(o) - s;
      else if (b[1] && V(s) > tr) {
        var x = s;
        m = -b[1], _ = o * V(s + m) / V(x) - o;
      }
      if (n && f && l)
        if (V(_) > tr && V(_) < V(v)) {
          var S = V(v) / V(_);
          _ *= S, m *= S;
        } else if (V(m) > tr && V(m) < V(g)) {
          var S = V(g) / V(m);
          _ *= S, m *= S;
        } else
          _ = fi(-v, _), m = fi(-g, m);
    }
  } else
    _ = o || l ? -v : 0, m = s || f ? -g : 0;
  return [_, m];
}
function R0(n, t, r, e, i, a) {
  if (!Di(n, "draggable"))
    return [
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      },
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      }
    ];
  var o = tl(a.absolutePoses, [t, r]), s = Jr(o), u = s.left, l = s.right, f = s.top, d = s.bottom, p = {
    horizontal: o.map(function(I) {
      return I[1];
    }),
    vertical: o.map(function(I) {
      return I[0];
    })
  }, c = Uu(n.props.snapDirections), h = ju(c, {
    left: u,
    right: l,
    top: f,
    bottom: d,
    center: (u + l) / 2,
    middle: (f + d) / 2
  }), v = Lo(n, i, h, p), g = v.vertical, _ = v.horizontal, m = w0(n, o, a), y = m.vertical, b = m.horizontal, x = g.isSnap, S = _.isSnap, C = g.isBound || y.isBound, w = _.isBound || b.isBound, D = fi(g.offset, y.offset), T = fi(_.offset, b.offset), O = R(P0(e, [t, r], [C, w], [x, S], [D, T]), 2), M = O[0], E = O[1];
  return [
    {
      isBound: C,
      isSnap: x,
      offset: M
    },
    {
      isBound: w,
      isSnap: S,
      offset: E
    }
  ];
}
function Lo(n, t, r, e) {
  e === void 0 && (e = r);
  var i = qu(Fo(n), e.vertical, e.horizontal), a = i.horizontal, o = i.vertical, s = t ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : No(n, r.vertical, r.horizontal, void 0, void 0, void 0, void 0), u = s.horizontal, l = s.vertical, f = ho(a[0], u), d = ho(o[0], l), p = V(f), c = V(d);
  return {
    horizontal: {
      isBound: a[0].isBound,
      isSnap: u.isSnap,
      snapIndex: u.index,
      offset: f,
      dist: p,
      bounds: a,
      snap: u
    },
    vertical: {
      isBound: o[0].isBound,
      isSnap: l.isSnap,
      snapIndex: l.index,
      offset: d,
      dist: c,
      bounds: o,
      snap: l
    }
  };
}
function pf(n, t, r, e, i, a, o) {
  o === void 0 && (o = [1, 1]);
  var s = qu(t, r, e), u = s.horizontal, l = s.vertical, f = Rd(n, r, e, [], [], i, a, o), d = f.horizontal, p = f.vertical, c = ho(u[0], d), h = ho(l[0], p), v = V(c), g = V(h);
  return {
    horizontal: {
      isBound: u[0].isBound,
      isSnap: d.isSnap,
      snapIndex: d.index,
      offset: c,
      dist: v,
      bounds: u,
      snap: d
    },
    vertical: {
      isBound: l[0].isBound,
      isSnap: p.isSnap,
      snapIndex: p.index,
      offset: h,
      dist: g,
      bounds: l,
      snap: p
    }
  };
}
function I0(n, t, r, e) {
  var i = jt(n, t) / Math.PI * 180, a = r.vertical, o = a.isBound, s = a.isSnap, u = a.dist, l = r.horizontal, f = l.isBound, d = l.isSnap, p = l.dist, c = i % 180, h = c < 3 || c > 177, v = c > 87 && c < 93;
  return p < u && (o || s && !v && (!e || !h)) ? "vertical" : f || d && !h && (!e || !v) ? "horizontal" : "";
}
function k0(n, t, r, e, i, a) {
  return r.map(function(o) {
    var s = R(o, 2), u = s[0], l = s[1], f = sr(t, u), d = sr(t, l), p = e ? z0(n, f, d, i) : Lo(n, i, {
      vertical: [d[0]],
      horizontal: [d[1]]
    }), c = p.horizontal, h = c.offset, v = c.isBound, g = c.isSnap, _ = p.vertical, m = _.offset, y = _.isBound, b = _.isSnap, x = lt(l, u);
    if (!m && !h)
      return {
        isBound: y || v,
        isSnap: b || g,
        sign: x,
        offset: [0, 0]
      };
    var S = I0(f, d, p, e);
    if (!S)
      return {
        sign: x,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var C = S === "vertical", w = [0, 0];
    return !e && V(l[0]) === 1 && V(l[1]) === 1 && u[0] !== l[0] && u[1] !== l[1] ? w = xe({
      datas: a,
      distX: -m,
      distY: -h
    }) : w = Zs(f, d, -(C ? m : h), C, a).offset, w = w.map(function(D, T) {
      return D * (x[T] ? 2 / x[T] : 0);
    }), {
      sign: x,
      isBound: C ? y : v,
      isSnap: C ? b : g,
      offset: w
    };
  });
}
function vf(n, t) {
  return n.isBound ? n.offset : t.isSnap ? t.offset : 0;
}
function z0(n, t, r, e) {
  var i = c0(n, t, r), a = i.horizontal, o = i.vertical, s = e ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : x0(n, t, r), u = s.horizontal, l = s.vertical, f = vf(a, u), d = vf(o, l), p = V(f), c = V(d);
  return {
    horizontal: {
      isBound: a.isBound,
      isSnap: u.isSnap,
      offset: f,
      dist: p
    },
    vertical: {
      isBound: o.isBound,
      isSnap: l.isSnap,
      offset: d,
      dist: c
    }
  };
}
function A0(n, t, r, e, i) {
  var a = [-r[0], -r[1]], o = n.state, s = o.width, u = o.height, l = n.props.bounds, f = 1 / 0, d = 1 / 0;
  if (l) {
    var p = [
      [r[0], -r[1]],
      [-r[0], r[1]]
    ], c = l.left, h = c === void 0 ? -1 / 0 : c, v = l.top, g = v === void 0 ? -1 / 0 : v, _ = l.right, m = _ === void 0 ? 1 / 0 : _, y = l.bottom, b = y === void 0 ? 1 / 0 : y;
    p.forEach(function(x) {
      var S = x[0] !== a[0], C = x[1] !== a[1], w = sr(t, x), D = jt(e, w) * 360 / Math.PI;
      if (C) {
        var T = w.slice();
        (V(D - 360) < 2 || V(D - 180) < 2) && (T[1] = e[1]);
        var O = Zs(e, T, (e[1] < w[1] ? b : g) - w[1], !1, i), M = R(O.offset, 2), E = M[1], I = O.isOutside;
        isNaN(E) || (d = u + (I ? 1 : -1) * V(E));
      }
      if (S) {
        var T = w.slice();
        (V(D - 90) < 2 || V(D - 270) < 2) && (T[0] = e[0]);
        var k = Zs(e, T, (e[0] < w[0] ? m : h) - w[0], !0, i), B = R(k.offset, 1), F = B[0], G = k.isOutside;
        isNaN(F) || (f = s + (G ? 1 : -1) * V(F));
      }
    });
  }
  return {
    maxWidth: f,
    maxHeight: d
  };
}
var yr = {
  name: "draggable",
  props: [
    "draggable",
    "throttleDrag",
    "throttleDragRotate",
    "hideThrottleDragRotateLine",
    "startDragRotate",
    "edgeDraggable"
  ],
  events: [
    "dragStart",
    "drag",
    "dragEnd",
    "dragGroupStart",
    "dragGroup",
    "dragGroupEnd"
  ],
  requestStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  requestChildStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  render: function(n, t) {
    var r = n.props, e = r.hideThrottleDragRotateLine, i = r.throttleDragRotate, a = r.zoom, o = n.getState(), s = o.dragInfo, u = o.beforeOrigin;
    if (e || !i || !s)
      return [];
    var l = s.dist;
    if (!l[0] && !l[1])
      return [];
    var f = te(l), d = jt(l, [0, 0]);
    return [t.createElement("div", { className: st("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(f, "px"),
      transform: "translate(".concat(u[0], "px, ").concat(u[1], "px) rotate(").concat(d, "rad) scaleY(").concat(a, ")")
    } })];
  },
  dragStart: function(n, t) {
    var r = t.datas, e = t.parentEvent, i = t.parentGesto, a = n.state, o = a.gestos, s = a.style;
    if (o.draggable)
      return !1;
    o.draggable = i || n.targetGesto, r.datas = {}, r.left = parseFloat(s.left || "") || 0, r.top = parseFloat(s.top || "") || 0, r.bottom = parseFloat(s.bottom || "") || 0, r.right = parseFloat(s.right || "") || 0, r.startValue = [0, 0], Rn(n, t), Go(n, t, "translate"), t1(n, r), r.prevDist = [0, 0], r.prevBeforeDist = [0, 0], r.isDrag = !1, r.deltaOffset = [0, 0];
    var u = vt(n, t, P({ set: function(f) {
      r.startValue = f;
    } }, Bo(n, t))), l = e || et(n, "onDragStart", u);
    return l !== !1 ? (r.isDrag = !0, n.state.dragInfo = {
      startRect: n.getRect(),
      dist: [0, 0]
    }) : (o.draggable = null, r.isPinch = !1), r.isDrag ? u : !1;
  },
  drag: function(n, t) {
    if (t) {
      zo(n, t, "translate");
      var r = t.datas, e = t.parentEvent, i = t.parentFlag, a = t.isPinch, o = t.deltaOffset, s = t.useSnap, u = t.isRequest, l = t.isGroup, f = t.parentThrottleDrag, d = t.distX, p = t.distY, c = r.isDrag, h = r.prevDist, v = r.prevBeforeDist, g = r.startValue;
      if (c) {
        o && (d += o[0], p += o[1]);
        var _ = n.props, m = _.parentMoveable, y = l ? 0 : _.throttleDrag || f || 0, b = e ? 0 : _.throttleDragRotate || 0, x = 0, S = !1, C = !1, w = !1, D = !1;
        if (!e && b > 0 && (d || p)) {
          var T = _.startDragRotate || 0, O = ct(T + jt([0, 0], [d, p]) * 180 / Math.PI, b) - T, M = p * Math.abs(Math.cos((O - 90) / 180 * Math.PI)), E = d * Math.abs(Math.cos(O / 180 * Math.PI)), I = te([E, M]);
          x = O * Math.PI / 180, d = I * Math.cos(x), p = I * Math.sin(x);
        }
        if (!a && !e && !i) {
          var k = R(R0(n, d, p, b, !s && u || o, r), 2), B = k[0], F = k[1];
          S = B.isSnap, C = B.isBound, w = F.isSnap, D = F.isBound;
          var G = B.offset, X = F.offset;
          d += G, p += X;
        }
        var W = Ct(gd({ datas: r, distX: d, distY: p }), g), A = Ct($g({ datas: r, distX: d, distY: p }), g);
        $l(A, Cr), $l(W, Cr), b || (!S && !C && (A[0] = ct(A[0], y), W[0] = ct(W[0], y)), !w && !D && (A[1] = ct(A[1], y), W[1] = ct(W[1], y)));
        var Y = lt(W, g), H = lt(A, g), L = lt(H, h), U = lt(Y, v);
        r.prevDist = H, r.prevBeforeDist = Y, r.passDelta = L, r.passDist = H;
        var q = r.left + Y[0], tt = r.top + Y[1], J = r.right - Y[0], ft = r.bottom - Y[1], dt = Ao(r, "translate(".concat(A[0], "px, ").concat(A[1], "px)"), "translate(".concat(H[0], "px, ").concat(H[1], "px)"));
        if (Vu(t, dt), n.state.dragInfo.dist = e ? [0, 0] : H, !(!e && !m && L.every(function(Q) {
          return !Q;
        }) && U.some(function(Q) {
          return !Q;
        }))) {
          var Z = n.state, nt = Z.width, xt = Z.height, at = vt(n, t, P({ transform: dt, dist: H, delta: L, translate: A, beforeDist: Y, beforeDelta: U, beforeTranslate: W, left: q, top: tt, right: J, bottom: ft, width: nt, height: xt, isPinch: a }, wr({
            transform: dt
          }, t)));
          return !e && et(n, "onDrag", at), at;
        }
      }
    }
  },
  dragAfter: function(n, t) {
    var r = t.datas, e = r.deltaOffset;
    return e[0] || e[1] ? (r.deltaOffset = [0, 0], this.drag(n, P(P({}, t), { deltaOffset: e }))) : !1;
  },
  dragEnd: function(n, t) {
    var r = t.parentEvent, e = t.datas;
    if (n.state.dragInfo = null, !!e.isDrag) {
      e.isDrag = !1;
      var i = Xr(n, t, {});
      return !r && et(n, "onDragEnd", i), i;
    }
  },
  dragGroupStart: function(n, t) {
    var r, e, i = t.datas, a = t.clientX, o = t.clientY, s = this.dragStart(n, t);
    if (!s)
      return !1;
    var u = is(n, this, "dragStart", [
      a || 0,
      o || 0
    ], t, !1, "draggable"), l = u.childEvents, f = u.eventParams, d = P(P({}, s), { targets: n.props.targets, events: f }), p = et(n, "onDragGroupStart", d);
    i.isDrag = p !== !1;
    var c = (e = (r = l[0]) === null || r === void 0 ? void 0 : r.datas.startValue) !== null && e !== void 0 ? e : [0, 0];
    return i.throttleOffset = [c[0] % 1, c[1] % 1], i.isDrag ? s : !1;
  },
  dragGroup: function(n, t) {
    var r = t.datas;
    if (r.isDrag) {
      var e = this.drag(n, P(P({}, t), { parentThrottleDrag: n.props.throttleDrag })), i = t.datas.passDelta, a = is(n, this, "drag", i, t, !1, "draggable").eventParams;
      if (e) {
        var o = P({ targets: n.props.targets, events: a }, e);
        return et(n, "onDragGroup", o), o;
      }
    }
  },
  dragGroupEnd: function(n, t) {
    var r = t.isDrag, e = t.datas;
    if (e.isDrag) {
      this.dragEnd(n, t);
      var i = is(n, this, "dragEnd", [0, 0], t, !1, "draggable").eventParams;
      return et(n, "onDragGroupEnd", Xr(n, t, {
        targets: n.props.targets,
        events: i
      })), r;
    }
  },
  /**
       * @method Moveable.Draggable#request
       * @param {object} [e] - the draggable's request parameter
       * @param {number} [e.x] - x position
       * @param {number} [e.y] - y position
       * @param {number} [e.deltaX] - X number to move
       * @param {number} [e.deltaY] - Y number to move
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("draggable", { deltaX: 10, deltaY: 10 }, true);
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("draggable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 });
       * moveable.request("draggable", { x: 220, y: 100 });
       * moveable.request("draggable", { x: 240, y: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(n) {
    var t = {}, r = n.getRect(), e = 0, i = 0, a = !1;
    return {
      isControl: !1,
      requestStart: function(o) {
        return a = o.useSnap, { datas: t, useSnap: a };
      },
      request: function(o) {
        return "x" in o ? e = o.x - r.left : "deltaX" in o && (e += o.deltaX), "y" in o ? i = o.y - r.top : "deltaY" in o && (i += o.deltaY), { datas: t, distX: e, distY: i, useSnap: a };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0, useSnap: a };
      }
    };
  },
  unset: function(n) {
    n.state.gestos.draggable = null, n.state.dragInfo = null;
  }
};
function Bd(n, t) {
  var r = sr(n, t), e = [0, 0];
  return {
    fixedPosition: r,
    fixedDirection: t,
    fixedOffset: e
  };
}
function B0(n, t) {
  var r = n.allMatrix, e = n.is3d, i = n.width, a = n.height, o = e ? 4 : 3, s = [
    i / 2 * (1 + t[0]),
    a / 2 * (1 + t[1])
  ], u = Lt(r, s, o), l = [0, 0];
  return {
    fixedPosition: u,
    fixedDirection: t,
    fixedOffset: l
  };
}
function Gd(n, t) {
  var r = n.allMatrix, e = n.is3d, i = n.width, a = n.height, o = e ? 4 : 3, s = t0(t, i, a), u = Lt(r, t, o), l = [
    i ? 0 : t[0],
    a ? 0 : t[1]
  ];
  return {
    fixedPosition: u,
    fixedDirection: s,
    fixedOffset: l
  };
}
var hf = nl("resizable"), Qs = {
  name: "resizable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "resizable",
    "throttleResize",
    "renderDirections",
    "displayAroundControls",
    "keepRatio",
    "resizeFormat",
    "keepRatioFinally",
    "edge",
    "checkResizableError"
  ],
  events: [
    "resizeStart",
    "beforeResize",
    "resize",
    "resizeEnd",
    "resizeGroupStart",
    "beforeResizeGroup",
    "resizeGroup",
    "resizeGroupEnd"
  ],
  render: Cd("resizable"),
  dragControlCondition: hf,
  viewClassName: el("resizable"),
  dragControlStart: function(n, t) {
    var r, e = t.inputEvent, i = t.isPinch, a = t.isGroup, o = t.parentDirection, s = t.parentGesto, u = t.datas, l = t.parentFixedDirection, f = t.parentEvent, d = Kd(o, i, e, u), p = n.state, c = p.target, h = p.width, v = p.height, g = p.gestos;
    if (!d || !c || g.resizable)
      return !1;
    g.resizable = s || n.controlGesto, !i && Rn(n, t), u.datas = {}, u.direction = d, u.startOffsetWidth = h, u.startOffsetHeight = v, u.prevWidth = 0, u.prevHeight = 0, u.minSize = [0, 0], u.startWidth = p.inlineCSSWidth || p.cssWidth, u.startHeight = p.inlineCSSHeight || p.cssHeight, u.maxSize = [1 / 0, 1 / 0], a || (u.minSize = [
      p.minOffsetWidth,
      p.minOffsetHeight
    ], u.maxSize = [
      p.maxOffsetWidth,
      p.maxOffsetHeight
    ]);
    var _ = n.props.transformOrigin || "% %";
    u.transformOrigin = _ && Pr(_) ? _.split(" ") : _, u.startOffsetMatrix = p.offsetMatrix, u.startTransformOrigin = p.transformOrigin, u.isWidth = (r = t == null ? void 0 : t.parentIsWidth) !== null && r !== void 0 ? r : !d[0] && !d[1] || d[0] || !d[1];
    function m(D) {
      u.ratio = D && isFinite(D) ? D : 0;
    }
    u.startPositions = re(n.state);
    function y(D) {
      var T = Bd(u.startPositions, D);
      u.fixedDirection = T.fixedDirection, u.fixedPosition = T.fixedPosition, u.fixedOffset = T.fixedOffset;
    }
    function b(D) {
      var T = Gd(n.state, D);
      u.fixedDirection = T.fixedDirection, u.fixedPosition = T.fixedPosition, u.fixedOffset = T.fixedOffset;
    }
    function x(D) {
      u.minSize = [
        Ot("".concat(D[0]), 0) || 0,
        Ot("".concat(D[1]), 0) || 0
      ];
    }
    function S(D) {
      var T = [
        D[0] || 1 / 0,
        D[1] || 1 / 0
      ];
      (!oi(T[0]) || isFinite(T[0])) && (T[0] = Ot("".concat(T[0]), 0) || 1 / 0), (!oi(T[1]) || isFinite(T[1])) && (T[1] = Ot("".concat(T[1]), 0) || 1 / 0), u.maxSize = T;
    }
    m(h / v), y(l || [-d[0], -d[1]]), u.setFixedDirection = y, u.setFixedPosition = b, u.setMin = x, u.setMax = S;
    var C = vt(n, t, {
      direction: d,
      startRatio: u.ratio,
      set: function(D) {
        var T = R(D, 2), O = T[0], M = T[1];
        u.startWidth = O, u.startHeight = M;
      },
      setMin: x,
      setMax: S,
      setRatio: m,
      setFixedDirection: y,
      setFixedPosition: b,
      setOrigin: function(D) {
        u.transformOrigin = D;
      },
      dragStart: yr.dragStart(n, new ui().dragStart([0, 0], t))
    }), w = f || et(n, "onResizeStart", C);
    return u.startFixedDirection = u.fixedDirection, u.startFixedPosition = u.fixedPosition, w !== !1 && (u.isResize = !0, n.state.snapRenderInfo = {
      request: t.isRequest,
      direction: d
    }), u.isResize ? C : !1;
  },
  dragControl: function(n, t) {
    var r, e = t.datas, i = t.parentFlag, a = t.isPinch, o = t.parentKeepRatio, s = t.dragClient, u = t.parentDist, l = t.useSnap, f = t.isRequest, d = t.isGroup, p = t.parentEvent, c = t.resolveMatrix, h = e.isResize, v = e.transformOrigin, g = e.startWidth, _ = e.startHeight, m = e.prevWidth, y = e.prevHeight, b = e.minSize, x = e.maxSize, S = e.ratio, C = e.startOffsetWidth, w = e.startOffsetHeight, D = e.isWidth;
    if (!h)
      return;
    if (c) {
      var T = n.state.is3d, O = e.startOffsetMatrix, M = e.startTransformOrigin, E = T ? 4 : 3, I = sa(co(t)), k = Math.sqrt(I.length);
      E !== k && (I = fe(I, k, E));
      var B = Oa(O, I, M, E), F = In(B, C, w, E);
      e.startPositions = F, e.nextTargetMatrix = I, e.nextAllMatrix = B;
    }
    var G = On(n.props, "resizable"), X = G.resizeFormat, W = G.throttleResize, A = W === void 0 ? i ? 0 : 1 : W, Y = G.parentMoveable, H = G.keepRatioFinally, L = e.direction, U = L, q = 0, tt = 0;
    !L[0] && !L[1] && (U = [1, 1]);
    var J = S && (o ?? G.keepRatio) || !1;
    function ft() {
      var At = e.fixedDirection, Xt = np(U, J, e, t);
      q = Xt.distWidth, tt = Xt.distHeight;
      var nr = U[0] - At[0] || J ? Math.max(C + q, Cr) : C, pr = U[1] - At[1] || J ? Math.max(w + tt, Cr) : w;
      return J && C && w && (D ? pr = nr / S : nr = pr * S), [nr, pr];
    }
    var dt = R(ft(), 2), Z = dt[0], nt = dt[1];
    p || (e.setFixedDirection(e.fixedDirection), et(n, "onBeforeResize", vt(n, t, {
      startFixedDirection: e.startFixedDirection,
      startFixedPosition: e.startFixedPosition,
      setFixedDirection: function(At) {
        var Xt;
        return e.setFixedDirection(At), Xt = R(ft(), 2), Z = Xt[0], nt = Xt[1], [Z, nt];
      },
      setFixedPosition: function(At) {
        var Xt;
        return e.setFixedPosition(At), Xt = R(ft(), 2), Z = Xt[0], nt = Xt[1], [Z, nt];
      },
      boundingWidth: Z,
      boundingHeight: nt,
      setSize: function(At) {
        var Xt;
        Xt = R(At, 2), Z = Xt[0], nt = Xt[1];
      }
    }, !0)));
    var xt = s;
    s || (!i && a ? xt = i0(n, [0, 0]) : xt = e.fixedPosition);
    var at = [0, 0];
    a || (at = Q0(n, Z, nt, L, xt, !l && f, e)), u && (!u[0] && (at[0] = 0), !u[1] && (at[1] = 0));
    function Q() {
      var At;
      X && (At = R(X([Z, nt]), 2), Z = At[0], nt = At[1]), Z = ct(Z, A), nt = ct(nt, A);
    }
    if (J) {
      U[0] && U[1] && at[0] && at[1] && (V(at[0]) > V(at[1]) ? at[1] = 0 : at[0] = 0);
      var ht = !at[0] && !at[1];
      ht && Q(), U[0] && !U[1] || at[0] && !at[1] || ht && D ? (Z += at[0], nt = Z / S) : (!U[0] && U[1] || !at[0] && at[1] || ht && !D) && (nt += at[1], Z = nt * S);
    } else
      Z += at[0], nt += at[1], Z = Math.max(0, Z), nt = Math.max(0, nt);
    r = R(Oc([Z, nt], b, x, J ? S : !1), 2), Z = r[0], nt = r[1], Q(), J && (d || H) && (D ? nt = Z / S : Z = nt * S), q = Z - C, tt = nt - w;
    var gt = [q - m, tt - y];
    e.prevWidth = q, e.prevHeight = tt;
    var _t = n0(n, Z, nt, xt, v, e);
    if (!(!Y && gt.every(function(At) {
      return !At;
    }) && _t.every(function(At) {
      return !At;
    }))) {
      var pt = yr.drag(n, Ma(t, n.state, _t, !!a, !1, "draggable")), St = pt.transform, Ht = g + q, Et = _ + tt, er = vt(n, t, P({ width: Ht, height: Et, offsetWidth: Math.round(Z), offsetHeight: Math.round(nt), startRatio: S, boundingWidth: Z, boundingHeight: nt, direction: L, dist: [q, tt], delta: gt, isPinch: !!a, drag: pt }, Qd({
        style: {
          width: "".concat(Ht, "px"),
          height: "".concat(Et, "px")
        },
        transform: St
      }, pt, t)));
      return !p && et(n, "onResize", er), er;
    }
  },
  dragControlAfter: function(n, t) {
    var r = t.datas, e = r.isResize, i = r.startOffsetWidth, a = r.startOffsetHeight, o = r.prevWidth, s = r.prevHeight;
    if (!(!e || n.props.checkResizableError === !1)) {
      var u = n.state, l = u.width, f = u.height, d = l - (i + o), p = f - (a + s), c = V(d) > 3, h = V(p) > 3;
      if (c && (r.startWidth += d, r.startOffsetWidth += d, r.prevWidth += d), h && (r.startHeight += p, r.startOffsetHeight += p, r.prevHeight += p), c || h)
        return this.dragControl(n, t);
    }
  },
  dragControlEnd: function(n, t) {
    var r = t.datas, e = t.parentEvent;
    if (r.isResize) {
      r.isResize = !1;
      var i = Xr(n, t, {});
      return !e && et(n, "onResizeEnd", i), i;
    }
  },
  dragGroupControlCondition: hf,
  dragGroupControlStart: function(n, t) {
    var r = t.datas, e = this.dragControlStart(n, P(P({}, t), { isGroup: !0 }));
    if (!e)
      return !1;
    var i = se(n, "resizable", t), a = r.startOffsetWidth, o = r.startOffsetHeight;
    function s() {
      var c = r.minSize;
      i.forEach(function(h) {
        var v = h.datas, g = v.minSize, _ = v.startOffsetWidth, m = v.startOffsetHeight, y = a * (_ ? g[0] / _ : 0), b = o * (m ? g[1] / m : 0);
        c[0] = Math.max(c[0], y), c[1] = Math.max(c[1], b);
      });
    }
    function u() {
      var c = r.maxSize;
      i.forEach(function(h) {
        var v = h.datas, g = v.maxSize, _ = v.startOffsetWidth, m = v.startOffsetHeight, y = a * (_ ? g[0] / _ : 0), b = o * (m ? g[1] / m : 0);
        c[0] = Math.min(c[0], y), c[1] = Math.min(c[1], b);
      });
    }
    var l = Pe(n, this, "dragControlStart", t, function(c, h) {
      return po(n, c, r, h);
    });
    s(), u();
    var f = function(c) {
      e.setFixedDirection(c), l.forEach(function(h, v) {
        h.setFixedDirection(c), po(n, h.moveable, r, i[v]);
      });
    };
    r.setFixedDirection = f;
    var d = P(P({}, e), { targets: n.props.targets, events: l.map(function(c) {
      return P(P({}, c), { setMin: function(h) {
        c.setMin(h), s();
      }, setMax: function(h) {
        c.setMax(h), u();
      } });
    }), setFixedDirection: f, setMin: function(c) {
      e.setMin(c), s();
    }, setMax: function(c) {
      e.setMax(c), u();
    } }), p = et(n, "onResizeGroupStart", d);
    return r.isResize = p !== !1, r.isResize ? e : !1;
  },
  dragGroupControl: function(n, t) {
    var r = t.datas;
    if (r.isResize) {
      var e = On(n.props, "resizable");
      Xo(n, "onBeforeResize", function(c) {
        et(n, "onBeforeResizeGroup", vt(n, t, P(P({}, c), { targets: e.targets }), !0));
      });
      var i = this.dragControl(n, P(P({}, t), { isGroup: !0 }));
      if (i) {
        var a = i.boundingWidth, o = i.boundingHeight, s = i.dist, u = e.keepRatio, l = [
          a / (a - s[0]),
          o / (o - s[1])
        ], f = r.fixedPosition, d = Pe(n, this, "dragControl", t, function(c, h) {
          var v = R(_r(Da(n.rotation / 180 * Math.PI, 3), [
            h.datas.originalX * l[0],
            h.datas.originalY * l[1],
            1
          ], 3), 2), g = v[0], _ = v[1];
          return P(P({}, h), { parentDist: null, parentScale: l, dragClient: Ct(f, [g, _]), parentKeepRatio: u });
        }), p = P({ targets: e.targets, events: d }, i);
        return et(n, "onResizeGroup", p), p;
      }
    }
  },
  dragGroupControlEnd: function(n, t) {
    var r = t.isDrag, e = t.datas;
    if (e.isResize) {
      this.dragControlEnd(n, t);
      var i = Pe(n, this, "dragControlEnd", t), a = Xr(n, t, {
        targets: n.props.targets,
        events: i
      });
      return et(n, "onResizeGroupEnd", a), r;
    }
  },
  /**
       * @method Moveable.Resizable#request
       * @param {Moveable.Resizable.ResizableRequestParam} e - the Resizable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("resizable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("resizable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 110, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 120, offsetHeight: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(n) {
    var t = {}, r = 0, e = 0, i = !1, a = n.getRect();
    return {
      isControl: !0,
      requestStart: function(o) {
        var s;
        return i = o.useSnap, {
          datas: t,
          parentDirection: o.direction || [1, 1],
          parentIsWidth: (s = o == null ? void 0 : o.horizontal) !== null && s !== void 0 ? s : !0,
          useSnap: i
        };
      },
      request: function(o) {
        return "offsetWidth" in o ? r = o.offsetWidth - a.offsetWidth : "deltaWidth" in o && (r += o.deltaWidth), "offsetHeight" in o ? e = o.offsetHeight - a.offsetHeight : "deltaHeight" in o && (e += o.deltaHeight), {
          datas: t,
          parentDist: [r, e],
          parentKeepRatio: o.keepRatio,
          useSnap: i
        };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0, useSnap: i };
      }
    };
  },
  unset: function(n) {
    n.state.gestos.resizable = null;
  }
};
function as(n, t, r, e, i) {
  var a = n.props.groupable, o = n.state, s = o.is3d ? 4 : 3, u = t.origin, l = Lt(
    n.state.rootMatrix,
    // TO-DO #710
    lt([u[0], u[1]], a ? [0, 0] : [o.left, o.top]),
    s
  ), f = Ct([i.left, i.top], l);
  t.startAbsoluteOrigin = f, t.prevDeg = jt(f, [r, e]) / Math.PI * 180, t.defaultDeg = t.prevDeg, t.prevSnapDeg = 0, t.loop = 0, t.startDist = Oe(f, [r, e]);
}
function Ja(n, t, r) {
  var e = r.defaultDeg, i = r.prevDeg, a = i % 360, o = Math.floor(i / 360);
  a < 0 && (a += 360), a > n && a > 270 && n < 90 ? ++o : a < n && a < 90 && n > 270 && --o;
  var s = t * (o * 360 + n - e);
  return r.prevDeg = e + s, s;
}
function os(n, t, r, e) {
  return Ja(jt(e.startAbsoluteOrigin, [n, t]) / Math.PI * 180, r, e);
}
function ss(n, t, r, e, i, a) {
  var o = n.props.throttleRotate, s = o === void 0 ? 0 : o, u = r.prevSnapDeg, l = 0, f = !1;
  if (a) {
    var d = Z0(n, t, e, i + e);
    f = d.isSnap, l = i + d.dist;
  }
  f || (l = ct(i + e, s));
  var p = l - i;
  return r.prevSnapDeg = p, [p - u, p, l];
}
function Fd(n, t, r) {
  var e = R(t, 4), i = e[0], a = e[1], o = e[2], s = e[3];
  if (n === "none")
    return [];
  if (rr(n))
    return n.map(function(g) {
      return Fd(g, [i, a, o, s], r)[0];
    });
  var u = R((n || "top").split("-"), 2), l = u[0], f = u[1], d = [i, a];
  l === "left" ? d = [o, i] : l === "right" ? d = [a, s] : l === "bottom" && (d = [s, o]);
  var p = [
    (d[0][0] + d[1][0]) / 2,
    (d[0][1] + d[1][1]) / 2
  ], c = Ud(d, r);
  if (f) {
    var h = f === "top" || f === "left", v = l === "bottom" || l === "left";
    p = d[h && !v || !h && v ? 0 : 1];
  }
  return [[p, c]];
}
function Js(n, t) {
  if (t.isRequest)
    return t.requestAble === "rotatable";
  var r = t.inputEvent.target;
  if (or(r, st("rotation-control")) || n.props.rotateAroundControls && or(r, st("around-control")) || or(r, st("control")) && or(r, st("rotatable")))
    return !0;
  var e = n.props.rotationTarget;
  return e ? il(e, !0).some(function(i) {
    return i ? r === i || r.contains(i) : !1;
  }) : !1;
}
var G0 = `.rotation {
position: absolute;
height: 40px;
width: 1px;
transform-origin: 50% 100%;
height: calc(40px * var(--zoom));
top: auto;
left: 0;
bottom: 100%;
will-change: transform;
}
.rotation .rotation-line {
display: block;
width: 100%;
height: 100%;
transform-origin: 50% 50%;
}
.rotation .rotation-control {
border-color: #4af;
border-color: var(--moveable-color);
background:#fff;
cursor: alias;
}
:global .view-rotation-dragging, .rotatable.direction.control {
cursor: alias;
}
.rotatable.direction.control.move {
cursor: move;
}
`, F0 = {
  name: "rotatable",
  canPinch: !0,
  props: [
    "rotatable",
    "rotationPosition",
    "throttleRotate",
    "renderDirections",
    "rotationTarget",
    "rotateAroundControls",
    "edge",
    "resolveAblesWithRotatable",
    "displayAroundControls"
  ],
  events: [
    "rotateStart",
    "beforeRotate",
    "rotate",
    "rotateEnd",
    "rotateGroupStart",
    "beforeRotateGroup",
    "rotateGroup",
    "rotateGroupEnd"
  ],
  css: [G0],
  viewClassName: function(n) {
    return n.isDragging("rotatable") ? st("view-rotation-dragging") : "";
  },
  render: function(n, t) {
    var r = On(n.props, "rotatable"), e = r.rotatable, i = r.rotationPosition, a = r.zoom, o = r.renderDirections, s = r.rotateAroundControls, u = r.resolveAblesWithRotatable, l = n.getState(), f = l.renderPoses, d = l.direction;
    if (!e)
      return null;
    var p = Fd(i, f, d), c = [];
    if (p.forEach(function(_, m) {
      var y = R(_, 2), b = y[0], x = y[1];
      c.push(t.createElement(
        "div",
        { key: "rotation".concat(m), className: st("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(b[0], "px, ").concat(b[1], "px) rotate(").concat(x, "rad)")
        } },
        t.createElement("div", { className: st("line rotation-line"), style: {
          transform: "scaleX(".concat(a, ")")
        } }),
        t.createElement("div", { className: st("control rotation-control"), style: {
          transform: "translate(0.5px) scale(".concat(a, ")")
        } })
      ));
    }), o) {
      var h = Ie(u || {}), v = {};
      h.forEach(function(_) {
        u[_].forEach(function(m) {
          v[m] = _;
        });
      });
      var g = [];
      rr(o) && (g = o.map(function(_) {
        var m = v[_];
        return {
          data: m ? { resolve: m } : {},
          classNames: m ? ["move"] : [],
          dir: _
        };
      })), c.push.apply(c, j([], R(bd(n, "rotatable", g, t)), !1));
    }
    return s && c.push.apply(c, j([], R(Ed(n, t)), !1)), c;
  },
  dragControlCondition: Js,
  dragControlStart: function(n, t) {
    var r, e, i = t.datas, a = t.clientX, o = t.clientY, s = t.parentRotate, u = t.parentFlag, l = t.isPinch, f = t.isRequest, d = n.state, p = d.target, c = d.left, h = d.top, v = d.direction, g = d.beforeDirection, _ = d.targetTransform, m = d.moveableClientRect, y = d.offsetMatrix, b = d.targetMatrix, x = d.allMatrix, S = d.width, C = d.height;
    if (!f && !p)
      return !1;
    var w = n.getRect();
    i.rect = w, i.transform = _, i.left = c, i.top = h;
    var D = function(U) {
      var q = Gd(n.state, U);
      i.fixedDirection = q.fixedDirection, i.fixedOffset = q.fixedOffset, i.fixedPosition = q.fixedPosition, A && A.setFixedPosition(U);
    }, T = function(U) {
      var q = B0(n.state, U);
      i.fixedDirection = q.fixedDirection, i.fixedOffset = q.fixedOffset, i.fixedPosition = q.fixedPosition, A && A.setFixedDirection(U);
    }, O = a, M = o;
    if (f || l || u) {
      var E = s || 0;
      i.beforeInfo = {
        origin: w.beforeOrigin,
        prevDeg: E,
        defaultDeg: E,
        prevSnapDeg: 0,
        startDist: 0
      }, i.afterInfo = P(P({}, i.beforeInfo), { origin: w.origin }), i.absoluteInfo = P(P({}, i.beforeInfo), { origin: w.origin, startValue: E });
    } else {
      var I = (e = t.inputEvent) === null || e === void 0 ? void 0 : e.target;
      if (I) {
        var k = I.getAttribute("data-direction") || "", B = Hg[k];
        if (B) {
          i.isControl = !0, i.isAroundControl = or(I, st("around-control")), i.controlDirection = B;
          var F = I.getAttribute("data-resolve");
          F && (i.resolveAble = F);
          var G = p1(d.rootMatrix, d.renderPoses, m);
          r = R(sr(G, B), 2), O = r[0], M = r[1];
        }
      }
      i.beforeInfo = { origin: w.beforeOrigin }, i.afterInfo = { origin: w.origin }, i.absoluteInfo = {
        origin: w.origin,
        startValue: w.rotation
      };
      var X = D;
      D = function(U) {
        var q = d.is3d ? 4 : 3, tt = R(Ct(td(b, q), U), 2), J = tt[0], ft = tt[1], dt = _r(y, En([J, ft], q)), Z = _r(x, En([U[0], U[1]], q));
        X(U);
        var nt = d.posDelta;
        i.beforeInfo.origin = lt(dt, nt), i.afterInfo.origin = lt(Z, nt), i.absoluteInfo.origin = lt(Z, nt), as(n, i.beforeInfo, O, M, m), as(n, i.afterInfo, O, M, m), as(n, i.absoluteInfo, O, M, m);
      }, T = function(U) {
        var q = sr([
          [0, 0],
          [S, 0],
          [0, C],
          [S, C]
        ], U);
        D(q);
      };
    }
    i.startClientX = O, i.startClientY = M, i.direction = v, i.beforeDirection = g, i.startValue = 0, i.datas = {}, Go(n, t, "rotate");
    var W = !1, A = !1;
    if (i.isControl && i.resolveAble) {
      var Y = i.resolveAble;
      Y === "resizable" && (A = Qs.dragControlStart(n, P(P({}, new ui("resizable").dragStart([0, 0], t)), { parentPosition: i.controlPosition, parentFixedPosition: i.fixedPosition })));
    }
    A || (W = yr.dragStart(n, new ui().dragStart([0, 0], t))), D(v1(n));
    var H = vt(n, t, P(P({ set: function(U) {
      i.startValue = U * Math.PI / 180;
    }, setFixedDirection: T, setFixedPosition: D }, Bo(n, t)), { dragStart: W, resizeStart: A })), L = et(n, "onRotateStart", H);
    return i.isRotate = L !== !1, d.snapRenderInfo = {
      request: t.isRequest
    }, i.isRotate ? H : !1;
  },
  dragControl: function(n, t) {
    var r, e, i, a = t.datas, o = t.clientDistX, s = t.clientDistY, u = t.parentRotate, l = t.parentFlag, f = t.isPinch, d = t.groupDelta, p = t.resolveMatrix, c = a.beforeDirection, h = a.beforeInfo, v = a.afterInfo, g = a.absoluteInfo, _ = a.isRotate, m = a.startValue, y = a.rect, b = a.startClientX, x = a.startClientY;
    if (_) {
      zo(n, t, "rotate");
      var S = Vg(t), C = c * S, w = n.props.parentMoveable, D = 0, T, O, M = 0, E, I, k = 0, B, F, G = 180 / Math.PI * m, X = g.startValue, W = !1, A = b + o, Y = x + s;
      if (!l && "parentDist" in t) {
        var H = t.parentDist;
        T = H, E = H, B = H;
      } else
        f || l ? (T = Ja(u, c, h), E = Ja(u, C, v), B = Ja(u, C, g)) : (T = os(A, Y, c, h), E = os(A, Y, C, v), B = os(A, Y, C, g), W = !0);
      if (O = G + T, I = G + E, F = X + B, et(n, "onBeforeRotate", vt(n, t, {
        beforeRotation: O,
        rotation: I,
        absoluteRotation: F,
        setRotation: function(xt) {
          E = xt - G, T = E, B = E;
        }
      }, !0)), r = R(ss(n, y, h, T, G, W), 3), D = r[0], T = r[1], O = r[2], e = R(ss(n, y, v, E, G, W), 3), M = e[0], E = e[1], I = e[2], i = R(ss(n, y, g, B, X, W), 3), k = i[0], B = i[1], F = i[2], !(!k && !M && !D && !w && !p)) {
        var L = Ao(a, "rotate(".concat(I, "deg)"), "rotate(".concat(E, "deg)"));
        p && (a.fixedPosition = $u(n, a.targetAllTransform, a.fixedDirection, a.fixedOffset, a));
        var U = e0(n, E, a), q = lt(Ct(d || [0, 0], U), a.prevInverseDist || [0, 0]);
        a.prevInverseDist = U, a.requestValue = null;
        var tt = md(n, L, q, f, t), J = tt, ft = Oe([A, Y], g.startAbsoluteOrigin) - g.startDist, dt = void 0;
        if (a.resolveAble === "resizable") {
          var Z = Qs.dragControl(n, P(P({}, Ma(t, n.state, [t.deltaX, t.deltaY], !!f, !1, "resizable")), { resolveMatrix: !0, parentDistance: ft }));
          Z && (dt = Z, J = Qd(J, Z, t));
        }
        var nt = vt(n, t, P(P({ delta: M, dist: E, rotate: I, rotation: I, beforeDist: T, beforeDelta: D, beforeRotate: O, beforeRotation: O, absoluteDist: B, absoluteDelta: k, absoluteRotate: F, absoluteRotation: F, isPinch: !!f, resize: dt }, tt), J));
        return et(n, "onRotate", nt), nt;
      }
    }
  },
  dragControlEnd: function(n, t) {
    var r = t.datas;
    if (r.isRotate) {
      r.isRotate = !1;
      var e = Xr(n, t, {});
      return et(n, "onRotateEnd", e), e;
    }
  },
  dragGroupControlCondition: Js,
  dragGroupControlStart: function(n, t) {
    var r = t.datas, e = n.state, i = e.left, a = e.top, o = e.beforeOrigin, s = this.dragControlStart(n, t);
    if (!s)
      return !1;
    s.set(r.beforeDirection * n.rotation);
    var u = Pe(n, this, "dragControlStart", t, function(d, p) {
      var c = d.state, h = c.left, v = c.top, g = c.beforeOrigin, _ = Ct(lt([h, v], [i, a]), lt(g, o));
      return p.datas.startGroupClient = _, p.datas.groupClient = _, P(P({}, p), { parentRotate: 0 });
    }), l = P(P({}, s), { targets: n.props.targets, events: u }), f = et(n, "onRotateGroupStart", l);
    return r.isRotate = f !== !1, r.isRotate ? s : !1;
  },
  dragGroupControl: function(n, t) {
    var r = t.datas;
    if (r.isRotate) {
      Xo(n, "onBeforeRotate", function(l) {
        et(n, "onBeforeRotateGroup", vt(n, t, P(P({}, l), { targets: n.props.targets }), !0));
      });
      var e = this.dragControl(n, t);
      if (e) {
        var i = r.beforeDirection, a = e.beforeDist, o = a / 180 * Math.PI, s = Pe(n, this, "dragControl", t, function(l, f) {
          var d = f.datas.startGroupClient, p = R(f.datas.groupClient, 2), c = p[0], h = p[1], v = R(Ca(d, o * i), 2), g = v[0], _ = v[1], m = [g - c, _ - h];
          return f.datas.groupClient = [g, _], P(P({}, f), { parentRotate: a, groupDelta: m });
        });
        n.rotation = i * e.beforeRotation;
        var u = P({ targets: n.props.targets, events: s, set: function(l) {
          n.rotation = l;
        }, setGroupRotation: function(l) {
          n.rotation = l;
        } }, e);
        return et(n, "onRotateGroup", u), u;
      }
    }
  },
  dragGroupControlEnd: function(n, t) {
    var r = t.isDrag, e = t.datas;
    if (e.isRotate) {
      this.dragControlEnd(n, t);
      var i = Pe(n, this, "dragControlEnd", t), a = Xr(n, t, {
        targets: n.props.targets,
        events: i
      });
      return et(n, "onRotateGroupEnd", a), r;
    }
  },
  /**
       * @method Moveable.Rotatable#request
       * @param {object} [e] - the Resizable's request parameter
       * @param {number} [e.deltaRotate=0] -  delta number of rotation
       * @param {number} [e.rotate=0] - absolute number of moveable's rotation
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("rotatable", { deltaRotate: 10 }, true);
       *
       * * moveable.request("rotatable", { rotate: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("rotatable");
       *
       * // request
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       *
       * requester.request({ rotate: 10 });
       * requester.request({ rotate: 20 });
       * requester.request({ rotate: 30 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(n) {
    var t = {}, r = 0, e = n.getRotation();
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: t };
      },
      request: function(i) {
        return "deltaRotate" in i ? r += i.deltaRotate : "rotate" in i && (r = i.rotate - e), { datas: t, parentDist: r };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0 };
      }
    };
  }
};
function N0(n, t) {
  var r, e = n.direction, i = n.classNames, a = n.size, o = n.pos, s = n.zoom, u = n.key, l = e === "horizontal", f = l ? "Y" : "X";
  return t.createElement("div", {
    key: u,
    className: i.join(" "),
    style: (r = {}, r[l ? "width" : "height"] = "".concat(a), r.transform = "translate(".concat(o[0], ", ").concat(o[1], ") translate").concat(f, "(-50%) scale").concat(f, "(").concat(s, ")"), r)
  });
}
function Qu(n, t) {
  return N0(P(P({}, n), { classNames: j([
    st("line", "guideline", n.direction)
  ], R(n.classNames), !1).filter(function(r) {
    return r;
  }), size: n.size || "".concat(n.sizeValue, "px"), pos: n.pos || n.posValue.map(function(r) {
    return "".concat(ct(r, 0.1), "px");
  }) }), t);
}
function gf(n, t, r, e, i, a, o, s) {
  var u = n.props.zoom;
  return r.map(function(l, f) {
    var d = l.type, p = l.pos, c = [0, 0];
    return c[o] = e, c[o ? 0 : 1] = -i + p, Qu({
      key: "".concat(t, "TargetGuideline").concat(f),
      classNames: [st("target", "bold", d)],
      posValue: c,
      sizeValue: a,
      zoom: u,
      direction: t
    }, s);
  });
}
function _f(n, t, r, e, i, a) {
  var o = n.props, s = o.zoom, u = o.isDisplayInnerSnapDigit, l = t === "horizontal" ? Ze : Qe, f = i[l.start], d = i[l.end];
  return r.filter(function(p) {
    var c = p.hide, h = p.elementRect;
    if (c)
      return !1;
    if (u && h) {
      var v = h.rect;
      if (v[l.start] <= f && d <= v[l.end])
        return !1;
    }
    return !0;
  }).map(function(p, c) {
    var h = p.pos, v = p.size, g = p.element, _ = p.className, m = [
      -e[0] + h[0],
      -e[1] + h[1]
    ];
    return Qu({
      key: "".concat(t, "-default-guideline-").concat(c),
      classNames: g ? [st("bold"), _] : [st("normal"), _],
      direction: t,
      posValue: m,
      sizeValue: v,
      zoom: s
    }, a);
  });
}
function Bi(n, t, r, e, i, a, o, s) {
  var u, l = n.props, f = l.snapDigit, d = f === void 0 ? 0 : f, p = l.isDisplaySnapDigit, c = p === void 0 ? !0 : p, h = l.snapDistFormat, v = h === void 0 ? function(x, S) {
    return x;
  } : h, g = l.zoom, _ = t === "horizontal" ? "X" : "Y", m = t === "vertical" ? "height" : "width", y = Math.abs(i), b = c ? parseFloat(y.toFixed(d)) : 0;
  return s.createElement(
    "div",
    { key: "".concat(t, "-").concat(r, "-guideline-").concat(e), className: st("guideline-group", t), style: (u = {
      left: "".concat(a[0], "px"),
      top: "".concat(a[1], "px")
    }, u[m] = "".concat(y, "px"), u) },
    Qu({
      direction: t,
      classNames: [st(r), o],
      size: "100%",
      posValue: [0, 0],
      sizeValue: y,
      zoom: g
    }, s),
    s.createElement("div", { className: st("size-value", "gap"), style: {
      transform: "translate".concat(_, "(-50%) scale(").concat(g, ")")
    } }, b > 0 ? v(b, t) : "")
  );
}
function L0(n, t, r, e) {
  var i = n === "vertical" ? 0 : 1, a = n === "vertical" ? 1 : 0, o = i ? Ze : Qe, s = r[o.start], u = r[o.end];
  return Jd(t, function(l) {
    return l.pos[i];
  }).map(function(l) {
    var f = [], d = [], p = [];
    return l.forEach(function(c) {
      var h, v, g = c.element, _ = c.elementRect.rect;
      if (_[o.end] < s)
        f.push(c);
      else if (u < _[o.start])
        d.push(c);
      else if (_[o.start] <= s && u <= _[o.end] && e) {
        var m = c.pos, y = { element: g, rect: P(P({}, _), (h = {}, h[o.end] = _[o.start], h)) }, b = { element: g, rect: P(P({}, _), (v = {}, v[o.start] = _[o.end], v)) }, x = [0, 0], S = [0, 0];
        x[i] = m[i], x[a] = m[a], S[i] = m[i], S[a] = m[a] + c.size, f.push({
          type: n,
          pos: x,
          size: 0,
          elementRect: y,
          direction: "",
          elementDirection: "end"
        }), d.push({
          type: n,
          pos: S,
          size: 0,
          elementRect: b,
          direction: "",
          elementDirection: "start"
        });
      }
    }), f.sort(function(c, h) {
      return h.pos[a] - c.pos[a];
    }), d.sort(function(c, h) {
      return c.pos[a] - h.pos[a];
    }), {
      total: l,
      start: f,
      end: d,
      inner: p
    };
  });
}
function Y0(n, t, r, e, i) {
  var a = n.props.isDisplayInnerSnapDigit, o = [];
  return ["vertical", "horizontal"].forEach(function(s) {
    var u = t.filter(function(g) {
      return g.type === s;
    }), l = s === "vertical" ? 1 : 0, f = l ? 0 : 1, d = L0(s, u, e, a), p = l ? Qe : Ze, c = l ? Ze : Qe, h = e[p.start], v = e[p.end];
    d.forEach(function(g) {
      var _ = g.total, m = g.start, y = g.end, b = g.inner, x = r[f] + _[0].pos[f] - e[c.start], S = e;
      m.forEach(function(C) {
        var w = C.elementRect.rect, D = S[p.start] - w[p.end];
        if (D > 0) {
          var T = [0, 0];
          T[l] = r[l] + S[p.start] - h - D, T[f] = x, o.push(Bi(n, s, "dashed", o.length, D, T, C.className, i));
        }
        S = w;
      }), S = e, y.forEach(function(C) {
        var w = C.elementRect.rect, D = w[p.start] - S[p.end];
        if (D > 0) {
          var T = [0, 0];
          T[l] = r[l] + S[p.end] - h, T[f] = x, o.push(Bi(n, s, "dashed", o.length, D, T, C.className, i));
        }
        S = w;
      }), b.forEach(function(C) {
        var w = C.elementRect.rect, D = h - w[p.start], T = w[p.end] - v, O = [0, 0], M = [0, 0];
        O[l] = r[l] - D, O[f] = x, M[l] = r[l] + v - h, M[f] = x, o.push(Bi(n, s, "dashed", o.length, D, O, C.className, i)), o.push(Bi(n, s, "dashed", o.length, T, M, C.className, i));
      });
    });
  }), o;
}
function X0(n, t, r, e, i) {
  var a = [];
  return ["horizontal", "vertical"].forEach(function(o) {
    var s = t.filter(function(g) {
      return g.type === o;
    }).slice(0, 1), u = o === "vertical" ? 0 : 1, l = u ? 0 : 1, f = u ? Qe : Ze, d = u ? Ze : Qe, p = e[f.start], c = e[f.end], h = e[d.start], v = e[d.end];
    s.forEach(function(g) {
      var _ = g.gap, m = g.gapRects, y = Math.max.apply(Math, j([h], R(m.map(function(S) {
        var C = S.rect;
        return C[d.start];
      })), !1)), b = Math.min.apply(Math, j([v], R(m.map(function(S) {
        var C = S.rect;
        return C[d.end];
      })), !1)), x = (y + b) / 2;
      y === b || x === (h + v) / 2 || m.forEach(function(S) {
        var C = S.rect, w = S.className, D = [r[0], r[1]];
        if (C[f.end] < p)
          D[u] += C[f.end] - p;
        else if (c < C[f.start])
          D[u] += C[f.start] - p - _;
        else
          return;
        D[l] += x - h, a.push(Bi(n, u ? "vertical" : "horizontal", "gap", a.length, _, D, w, i));
      });
    });
  }), a;
}
function tu(n) {
  var t, r, e = n.state, i = e.containerClientRect, a = e.hasFixed, o = i.overflow, s = i.scrollHeight, u = i.scrollWidth, l = i.clientHeight, f = i.clientWidth, d = i.clientLeft, p = i.clientTop, c = n.props, h = c.snapGap, v = h === void 0 ? !0 : h, g = c.verticalGuidelines, _ = c.horizontalGuidelines, m = c.snapThreshold, y = m === void 0 ? 5 : m, b = c.maxSnapElementGuidelineDistance, x = b === void 0 ? 1 / 0 : b, S = c.isDisplayGridGuidelines, C = Jr(re(n.state)), w = C.top, D = C.left, T = C.bottom, O = C.right, M = { top: w, left: D, bottom: T, right: O, center: (D + O) / 2, middle: (w + T) / 2 }, E = $0(n), I = j([], R(E), !1), k = ((r = (t = e.snapThresholdInfo) === null || t === void 0 ? void 0 : t.multiples) !== null && r !== void 0 ? r : [1, 1]).map(function(X) {
    return X * y;
  });
  v && I.push.apply(I, j([], R(W0(n, M, k)), !1));
  var B = P({}, e.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (I.push.apply(I, j([], R(V0(n, o ? u : f, o ? s : l, d, p, B, S)), !1)), a) {
    var F = i.left, G = i.top;
    B.left += F, B.top += G, B.right += F, B.bottom += G;
  }
  return I.push.apply(I, j([], R(Ld(_ || !1, g || !1, o ? u : f, o ? s : l, d, p, B)), !1)), I = I.filter(function(X) {
    var W = X.element, A = X.elementRect, Y = X.type;
    if (!W || !A)
      return !0;
    var H = A.rect;
    return Nd(M, H, Y, x);
  }), I;
}
function W0(n, t, r) {
  var e = n.props, i = e.maxSnapElementGuidelineDistance, a = i === void 0 ? 1 / 0 : i, o = e.maxSnapElementGapDistance, s = o === void 0 ? 1 / 0 : o, u = n.state.elementRects, l = [];
  return [
    ["vertical", Ze, Qe],
    ["horizontal", Qe, Ze]
  ].forEach(function(f) {
    var d = R(f, 3), p = d[0], c = d[1], h = d[2], v = t[c.start], g = t[c.end], _ = t[c.center], m = t[h.start], y = t[h.end], b = {
      left: r[0],
      top: r[1]
    };
    function x(w) {
      var D = w.rect, T = b[c.start];
      return D[c.end] < v + T ? v - D[c.end] : g - T < D[c.start] ? D[c.start] - g : -1;
    }
    var S = u.filter(function(w) {
      var D = w.rect;
      return D[h.start] > y || D[h.end] < m ? !1 : x(w) > 0;
    }).sort(function(w, D) {
      return x(w) - x(D);
    }), C = [];
    S.forEach(function(w) {
      S.forEach(function(D) {
        if (w !== D) {
          var T = w.rect, O = D.rect, M = T[h.start], E = T[h.end], I = O[h.start], k = O[h.end];
          M > k || I > E || C.push([w, D]);
        }
      });
    }), C.forEach(function(w) {
      var D = R(w, 2), T = D[0], O = D[1], M = T.rect, E = O.rect, I = M[c.start], k = M[c.end], B = E[c.start], F = E[c.end], G = b[c.start], X = 0, W = 0, A = !1, Y = !1, H = !1;
      if (k <= v && g <= B) {
        if (Y = !0, X = (B - k - (g - v)) / 2, W = k + X + (g - v) / 2, V(W - _) > G)
          return;
      } else if (k < B && F < v + G) {
        if (A = !0, X = B - k, W = F + X, V(W - v) > G)
          return;
      } else if (k < B && g - G < I) {
        if (H = !0, X = B - k, W = I - X, V(W - g) > G)
          return;
      } else
        return;
      X && Nd(t, E, p, a) && (X > s || l.push({
        type: p,
        pos: p === "vertical" ? [W, 0] : [0, W],
        element: O.element,
        size: 0,
        className: O.className,
        isStart: A,
        isCenter: Y,
        isEnd: H,
        gap: X,
        hide: !0,
        gapRects: [T, O],
        direction: "",
        elementDirection: ""
      }));
    });
  }), l;
}
function H0(n, t, r, e) {
  var i, a, o = n.props, s = n.state, u = o.snapGridAll, l = o.snapGridWidth, f = l === void 0 ? 0 : l, d = o.snapGridHeight, p = d === void 0 ? 0 : d, c = s.snapRenderInfo, h = c && (((i = c.direction) === null || i === void 0 ? void 0 : i[0]) || ((a = c.direction) === null || a === void 0 ? void 0 : a[1])), v = n.moveables;
  if (u && v && h && (f || p)) {
    if (s.snapThresholdInfo)
      return;
    s.snapThresholdInfo = {
      multiples: [1, 1],
      offset: [0, 0]
    };
    var g = n.getRect(), _ = g.children, m = c.direction;
    if (_) {
      var y = m.map(function(x, S) {
        var C = S === 0 ? {
          snapSize: f,
          posName: "left",
          sizeName: "width",
          clientOffset: e.left - t
        } : {
          snapSize: p,
          posName: "top",
          sizeName: "height",
          clientOffset: e.top - r
        }, w = C.snapSize, D = C.posName, T = C.sizeName, O = C.clientOffset;
        if (!w)
          return {
            dir: x,
            multiple: 1,
            snapSize: w,
            snapOffset: 0
          };
        var M = g[T], E = g[D], I = Pc(_.map(function(A) {
          return [
            A[D] - E,
            A[T],
            M - A[T] - A[D] + E
          ];
        })).filter(function(A) {
          return A;
        }).sort(function(A, Y) {
          return A - Y;
        }), k = I[0], B = I.map(function(A) {
          return ct(A / k, 0.1) * w;
        }), F = 1, G = ct(M / k, 0.1);
        for (F = 1; F <= 10 && !B.every(function(A) {
          return A * F % 1 === 0;
        }); ++F)
          ;
        var X = (-x + 1) / 2, W = so(E - O, E - O + M, X, 1 - X);
        return {
          multiple: G * F,
          dir: x,
          snapSize: w,
          snapOffset: Math.round(W / w)
        };
      }), b = y.map(function(x) {
        return x.multiple || 1;
      });
      s.snapThresholdInfo.multiples = b, s.snapThresholdInfo.offset = y.map(function(x) {
        return x.snapOffset;
      }), y.forEach(function(x, S) {
        x.snapSize;
      });
    }
  } else
    s.snapThresholdInfo = null;
}
function V0(n, t, r, e, i, a, o) {
  e === void 0 && (e = 0), i === void 0 && (i = 0);
  var s = n.props, u = n.state, l = s.snapGridWidth, f = l === void 0 ? 0 : l, d = s.snapGridHeight, p = d === void 0 ? 0 : d, c = [], h = a.left, v = a.top, g = [0, 0];
  H0(n, e, i, a);
  var _ = u.snapThresholdInfo, m = f, y = p;
  if (_ && (f *= _.multiples[0] || 1, p *= _.multiples[1] || 1, g = _.offset), p) {
    for (var b = function(S) {
      c.push({
        type: "horizontal",
        pos: [
          h,
          ct(g[1] * y + S - i + v, 0.1)
        ],
        className: st("grid-guideline"),
        size: t,
        hide: !o,
        direction: "",
        grid: !0
      });
    }, x = 0; x <= r * 2; x += p)
      b(x);
    for (var x = -p; x >= -r; x -= p)
      b(x);
  }
  if (f) {
    for (var b = function(C) {
      c.push({
        type: "vertical",
        pos: [
          ct(g[0] * m + C - e + h, 0.1),
          v
        ],
        className: st("grid-guideline"),
        size: r,
        hide: !o,
        direction: "",
        grid: !0
      });
    }, x = 0; x <= t * 2; x += f)
      b(x);
    for (var x = -f; x >= -t; x -= f)
      b(x);
  }
  return c;
}
function Nd(n, t, r, e) {
  return r === "horizontal" ? V(n.right - t.left) <= e || V(n.left - t.right) <= e || n.left <= t.right && t.left <= n.right : r === "vertical" ? V(n.bottom - t.top) <= e || V(n.top - t.bottom) <= e || n.top <= t.bottom && t.top <= n.bottom : !0;
}
function $0(n) {
  var t = n.state, r = n.props.elementGuidelines, e = r === void 0 ? [] : r;
  if (!e.length)
    return t.elementRects = [], [];
  var i = (t.elementRects || []).filter(function(p) {
    return !p.refresh;
  }), a = e.map(function(p) {
    return le(p) && "element" in p ? P(P({}, p), { element: ge(p.element, !0) }) : {
      element: ge(p, !0)
    };
  }).filter(function(p) {
    return p.element;
  }), o = eg(i.map(function(p) {
    return p.element;
  }), a.map(function(p) {
    return p.element;
  })), s = o.maintained, u = o.added, l = [];
  s.forEach(function(p) {
    var c = R(p, 2), h = c[0], v = c[1];
    l[v] = i[h];
  }), q0(n, u.map(function(p) {
    return a[p];
  })).map(function(p, c) {
    l[u[c]] = p;
  }), t.elementRects = l;
  var f = Uu(n.props.elementSnapDirections), d = [];
  return l.forEach(function(p) {
    var c = p.element, h = p.top, v = h === void 0 ? f.top : h, g = p.left, _ = g === void 0 ? f.left : g, m = p.right, y = m === void 0 ? f.right : m, b = p.bottom, x = b === void 0 ? f.bottom : b, S = p.center, C = S === void 0 ? f.center : S, w = p.middle, D = w === void 0 ? f.middle : w, T = p.className, O = p.rect, M = ju({
      top: v,
      right: y,
      left: _,
      bottom: x,
      center: C,
      middle: D
    }, O), E = M.horizontal, I = M.vertical, k = M.horizontalNames, B = M.verticalNames, F = O.top, G = O.left, X = O.right - G, W = O.bottom - F, A = [X, W];
    I.forEach(function(Y, H) {
      d.push({
        type: "vertical",
        element: c,
        pos: [
          ct(Y, 0.1),
          F
        ],
        size: W,
        sizes: A,
        className: T,
        elementRect: p,
        elementDirection: uf[B[H]] || B[H],
        direction: ""
      });
    }), E.forEach(function(Y, H) {
      d.push({
        type: "horizontal",
        element: c,
        pos: [
          G,
          ct(Y, 0.1)
        ],
        size: X,
        sizes: A,
        className: T,
        elementRect: p,
        elementDirection: uf[k[H]] || k[H],
        direction: ""
      });
    });
  }), d;
}
function mf(n, t) {
  return n ? n.map(function(r) {
    var e = le(r) ? r : { pos: r }, i = e.pos;
    return oi(i) ? e : P(P({}, e), { pos: Ot(i, t) });
  }) : [];
}
function Ld(n, t, r, e, i, a, o) {
  i === void 0 && (i = 0), a === void 0 && (a = 0), o === void 0 && (o = { left: 0, top: 0, right: 0, bottom: 0 });
  var s = [], u = o.left, l = o.top, f = o.bottom, d = o.right, p = r + d - u, c = e + f - l;
  return mf(n, c).forEach(function(h) {
    s.push({
      type: "horizontal",
      pos: [
        u,
        ct(h.pos - a + l, 0.1)
      ],
      size: p,
      className: h.className,
      direction: ""
    });
  }), mf(t, p).forEach(function(h) {
    s.push({
      type: "vertical",
      pos: [
        ct(h.pos - i + u, 0.1),
        l
      ],
      size: c,
      className: h.className,
      direction: ""
    });
  }), s;
}
function q0(n, t) {
  if (!t.length)
    return [];
  var r = n.props.groupable, e = n.state, i = e.containerClientRect, a = e.rootMatrix, o = e.is3d, s = e.offsetDelta, u = o ? 4 : 3, l = R(_0(a, i, u), 2), f = l[0], d = l[1], p = r ? 0 : s[0], c = r ? 0 : s[1];
  return t.map(function(h) {
    var v = h.element.getBoundingClientRect(), g = v.left - f - p, _ = v.top - d - c, m = _ + v.height, y = g + v.width, b = R(ci(a, [g, _], u), 2), x = b[0], S = b[1], C = R(ci(a, [y, m], u), 2), w = C[0], D = C[1];
    return P(P({}, h), { rect: {
      left: x,
      right: w,
      top: S,
      bottom: D,
      center: (x + w) / 2,
      middle: (S + D) / 2
    } });
  });
}
function Xa(n) {
  var t = n.state, r = t.container, e = n.props.snapContainer || r;
  if (t.snapContainer === e && t.guidelines && t.guidelines.length)
    return !1;
  var i = t.containerClientRect, a = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };
  if (r !== e) {
    var o = ge(e, !0);
    if (o) {
      var s = Ki(o), u = Cf(t, [
        s.left - i.left,
        s.top - i.top
      ]), l = Cf(t, [
        s.right - i.right,
        s.bottom - i.bottom
      ]);
      a.left = ct(u[0], 1e-5), a.top = ct(u[1], 1e-5), a.right = ct(l[0], 1e-5), a.bottom = ct(l[1], 1e-5);
    }
  }
  return t.snapContainer = e, t.snapOffset = a, t.guidelines = tu(n), t.enableSnap = !0, !0;
}
function Yd(n, t, r, e, i, a) {
  var o = In(n, t, r, a ? 4 : 3), s = sr(o, e);
  return tl(o, lt(i, s));
}
function xf(n) {
  return n ? n / V(n) : 0;
}
function U0(n, t, r, e, i, a) {
  var o = a.fixedDirection, s = b0(r, o, e), u = Zu(n, t, r, e), l = j(j([], R(k0(n, t, s, e, i, a)), !1), R(Ad(n, u, a)), !1), f = vo(l, 0), d = vo(l, 1);
  return {
    width: {
      isBound: f.isBound,
      offset: f.offset[0]
    },
    height: {
      isBound: d.isBound,
      offset: d.offset[1]
    }
  };
}
function j0(n, t, r, e, i, a, o, s, u) {
  var l = sr(t, o), f = Lo(n, s, {
    vertical: [l[0]],
    horizontal: [l[1]]
  }), d = f.horizontal.offset, p = f.vertical.offset;
  if (ct(p, qs) || ct(d, qs)) {
    var c = R(xe({
      datas: u,
      distX: -p,
      distY: -d
    }), 2), h = c[0], v = c[1], g = Math.min(i || 1 / 0, r + o[0] * h), _ = Math.min(a || 1 / 0, e + o[1] * v);
    return [g - r, _ - e];
  }
  return [0, 0];
}
function Xd(n, t, r, e, i, a, o, s) {
  for (var u = re(n.state), l = n.props.keepRatio, f = 0, d = 0, p = 0; p < 2; ++p) {
    var c = t(f, d), h = U0(n, c, i, l, o, s), v = h.width, g = h.height, _ = v.isBound, m = g.isBound, y = v.offset, b = g.offset;
    if (p === 1 && (_ || (y = 0), m || (b = 0)), p === 0 && o && !_ && !m)
      return [0, 0];
    if (l) {
      var x = V(y) * (r ? 1 / r : 1), S = V(b) * (e ? 1 / e : 1), C = _ && m ? x < S : m || !_ && x < S;
      C ? y = r * b / e : b = e * y / r;
    }
    f += y, d += b;
  }
  if (!l && i[0] && i[1]) {
    var w = A0(n, u, i, a, s), D = w.maxWidth, T = w.maxHeight, O = R(j0(n, t(f, d).map(function(I) {
      return I.map(function(k) {
        return ct(k, qs);
      });
    }), r + f, e + d, D, T, i, o, s), 2), y = O[0], b = O[1];
    f += y, d += b;
  }
  return [f, d];
}
function Ui(n) {
  return n < 0 && (n = n % 360 + 360), n %= 360, n;
}
function K0(n, t) {
  t = Ui(t);
  var r = Math.floor(n / 360), e = r * 360 + 360 - t, i = r * 360 + t;
  return V(n - e) < V(n - i) ? e : i;
}
function us(n, t) {
  n = Ui(n), t = Ui(t);
  var r = Ui(n - t);
  return Math.min(r, 360 - r);
}
function Z0(n, t, r, e) {
  var i, a = n.props, o = (i = a[Td]) !== null && i !== void 0 ? i : 5, s = a[Md];
  if (Di(n, "rotatable")) {
    var u = t.pos1, l = t.pos2, f = t.pos3, d = t.pos4, p = t.origin, c = r * Math.PI / 180, h = [u, l, f, d].map(function(b) {
      return lt(b, p);
    }), v = h.map(function(b) {
      return Ca(b, c);
    }), g = j(j([], R(p0(n, h, v, p, r)), !1), R(T0(n, h, v, p, r)), !1);
    g.sort(function(b, x) {
      return V(b - r) - V(x - r);
    });
    var _ = g.length > 0;
    if (_)
      return {
        isSnap: _,
        dist: _ ? g[0] : r
      };
  }
  if (s != null && s.length && o) {
    var m = s.slice().sort(function(b, x) {
      return us(b, e) - us(x, e);
    }), y = m[0];
    if (us(y, e) <= o)
      return {
        isSnap: !0,
        dist: r + K0(e, y) - e
      };
  }
  return {
    isSnap: !1,
    dist: r
  };
}
function Q0(n, t, r, e, i, a, o) {
  if (!Di(n, "resizable"))
    return [0, 0];
  var s = o.fixedDirection, u = o.nextAllMatrix, l = n.state, f = l.allMatrix, d = l.is3d;
  return Xd(n, function(p, c) {
    return Yd(u || f, t + p, r + c, s, i, d);
  }, t, r, e, i, a, o);
}
function J0(n, t, r, e, i) {
  if (!Di(n, "scalable"))
    return [0, 0];
  var a = i.startOffsetWidth, o = i.startOffsetHeight, s = i.fixedPosition, u = i.fixedDirection, l = i.is3d, f = Xd(n, function(d, p) {
    return Yd(Qg(i, Ct(t, [d / a, p / o])), a, o, u, s, l);
  }, a, o, r, s, e, i);
  return [f[0] / a, f[1] / o];
}
function t1(n, t) {
  t.absolutePoses = re(n.state);
}
function yf(n) {
  var t = [];
  return n.forEach(function(r) {
    r.guidelineInfos.forEach(function(e) {
      var i = e.guideline;
      Rr(t, function(a) {
        return a.guideline === i;
      }) || (i.direction = "", t.push({ guideline: i, posInfo: r }));
    });
  }), t.map(function(r) {
    var e = r.guideline, i = r.posInfo;
    return P(P({}, e), { direction: i.direction });
  });
}
function bf(n, t, r, e, i, a) {
  var o = qu(Fo(n, a), t, r), s = o.vertical, u = o.horizontal, l = qn();
  s.forEach(function(h) {
    h.isBound && (h.direction === "start" && (l.left = !0), h.direction === "end" && (l.right = !0), e.push({
      type: "bounds",
      pos: h.pos
    }));
  }), u.forEach(function(h) {
    h.isBound && (h.direction === "start" && (l.top = !0), h.direction === "end" && (l.bottom = !0), i.push({
      type: "bounds",
      pos: h.pos
    }));
  });
  var f = M0(n), d = f.boundMap, p = f.vertical, c = f.horizontal;
  return p.forEach(function(h) {
    Re(e, function(v) {
      var g = v.type, _ = v.pos;
      return g === "bounds" && _ === h;
    }) >= 0 || e.push({
      type: "bounds",
      pos: h
    });
  }), c.forEach(function(h) {
    Re(i, function(v) {
      var g = v.type, _ = v.pos;
      return g === "bounds" && _ === h;
    }) >= 0 || i.push({
      type: "bounds",
      pos: h
    });
  }), {
    boundMap: l,
    innerBoundMap: d
  };
}
var r1 = nl("", ["resizable", "scalable"]), e1 = {
  name: "snappable",
  dragRelation: "strong",
  props: [
    "snappable",
    "snapContainer",
    "snapDirections",
    "elementSnapDirections",
    "snapGap",
    "snapGridWidth",
    "snapGridHeight",
    "isDisplaySnapDigit",
    "isDisplayInnerSnapDigit",
    "isDisplayGridGuidelines",
    "snapDigit",
    "snapThreshold",
    "snapRenderThreshold",
    "snapGridAll",
    Td,
    Md,
    Od,
    Pd,
    "horizontalGuidelines",
    "verticalGuidelines",
    "elementGuidelines",
    "bounds",
    "innerBounds",
    "snapDistFormat",
    "maxSnapElementGuidelineDistance",
    "maxSnapElementGapDistance"
  ],
  events: ["snap", "bound"],
  css: [
    `:host {
--bounds-color: #d66;
}
.guideline {
pointer-events: none;
z-index: 2;
}
.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}
.guideline-group {
position: absolute;
top: 0;
left: 0;
}
.guideline-group .size-value {
position: absolute;
color: #f55;
font-size: 12px;
font-size: calc(12px * var(--zoom));
font-weight: bold;
}
.guideline-group.horizontal .size-value {
transform-origin: 50% 100%;
transform: translateX(-50%);
left: 50%;
bottom: 5px;
bottom: calc(2px + 3px * var(--zoom));
}
.guideline-group.vertical .size-value {
transform-origin: 0% 50%;
top: 50%;
transform: translateY(-50%);
left: 5px;
left: calc(2px + 3px * var(--zoom));
}
.guideline.gap {
background: #f55;
}
.size-value.gap {
color: #f55;
}
`
  ],
  render: function(n, t) {
    var r = n.state, e = r.top, i = r.left, a = r.pos1, o = r.pos2, s = r.pos3, u = r.pos4, l = r.snapRenderInfo, f = n.props.snapRenderThreshold, d = f === void 0 ? 1 : f;
    if (!l || !l.render || !Di(n, ""))
      return jn(n, "boundMap", qn(), function(L) {
        return JSON.stringify(L);
      }), jn(n, "innerBoundMap", qn(), function(L) {
        return JSON.stringify(L);
      }), [];
    r.guidelines = tu(n);
    var p = Math.min(a[0], o[0], s[0], u[0]), c = Math.min(a[1], o[1], s[1], u[1]), h = l.externalPoses || [], v = re(n.state), g = [], _ = [], m = [], y = [], b = [], x = Jr(v), S = x.width, C = x.height, w = x.top, D = x.left, T = x.bottom, O = x.right, M = { left: D, right: O, top: w, bottom: T, center: (D + O) / 2, middle: (w + T) / 2 }, E = h.length > 0, I = E ? Jr(h) : {};
    if (!l.request) {
      if (l.direction && b.push(y0(n, v, l.direction, d, d)), l.snap) {
        var k = Jr(v);
        l.center && (k.middle = (k.top + k.bottom) / 2, k.center = (k.left + k.right) / 2), b.push(lf(n, k, d, d));
      }
      E && (l.center && (I.middle = (I.top + I.bottom) / 2, I.center = (I.left + I.right) / 2), b.push(lf(n, I, d, d))), b.forEach(function(L) {
        var U = L.vertical.posInfos, q = L.horizontal.posInfos;
        g.push.apply(g, j([], R(U.filter(function(tt) {
          var J = tt.guidelineInfos;
          return J.some(function(ft) {
            var dt = ft.guideline;
            return !dt.hide;
          });
        }).map(function(tt) {
          return {
            type: "snap",
            pos: tt.pos
          };
        })), !1)), _.push.apply(_, j([], R(q.filter(function(tt) {
          var J = tt.guidelineInfos;
          return J.some(function(ft) {
            var dt = ft.guideline;
            return !dt.hide;
          });
        }).map(function(tt) {
          return {
            type: "snap",
            pos: tt.pos
          };
        })), !1)), m.push.apply(m, j([], R(yf(U)), !1)), y.push.apply(y, j([], R(yf(q)), !1));
      });
    }
    var B = bf(n, [D, O], [w, T], g, _), F = B.boundMap, G = B.innerBoundMap;
    E && bf(n, [I.left, I.right], [I.top, I.bottom], g, _, l.externalBounds);
    var X = j(j([], R(m), !1), R(y), !1), W = X.filter(function(L) {
      return L.element && !L.gapRects;
    }), A = X.filter(function(L) {
      return L.gapRects;
    }).sort(function(L, U) {
      return L.gap - U.gap;
    });
    et(n, "onSnap", {
      guidelines: X.filter(function(L) {
        var U = L.element;
        return !U;
      }),
      elements: W,
      gaps: A
    }, !0);
    var Y = jn(n, "boundMap", F, function(L) {
      return JSON.stringify(L);
    }, qn()), H = jn(n, "innerBoundMap", G, function(L) {
      return JSON.stringify(L);
    }, qn());
    return (F === Y || G === H) && et(n, "onBound", {
      bounds: F,
      innerBounds: G
    }, !0), j(j(j(j(j(j([], R(Y0(n, W, [p, c], M, t)), !1), R(X0(n, A, [p, c], M, t)), !1), R(_f(n, "horizontal", y, [i, e], M, t)), !1), R(_f(n, "vertical", m, [i, e], M, t)), !1), R(gf(n, "horizontal", _, p, e, S, 0, t)), !1), R(gf(n, "vertical", g, c, i, C, 1, t)), !1);
  },
  dragStart: function(n, t) {
    n.state.snapRenderInfo = {
      request: t.isRequest,
      snap: !0,
      center: !0
    }, Xa(n);
  },
  drag: function(n) {
    var t = n.state;
    Xa(n) || (t.guidelines = tu(n)), t.snapRenderInfo && (t.snapRenderInfo.render = !0);
  },
  pinchStart: function(n) {
    this.unset(n);
  },
  dragEnd: function(n) {
    this.unset(n);
  },
  dragControlCondition: function(n, t) {
    if (r1(n, t) || Js(n, t))
      return !0;
    if (!t.isRequest && t.inputEvent)
      return or(t.inputEvent.target, st("snap-control"));
  },
  dragControlStart: function(n) {
    n.state.snapRenderInfo = null, Xa(n);
  },
  dragControl: function(n) {
    this.drag(n);
  },
  dragControlEnd: function(n) {
    this.unset(n);
  },
  dragGroupStart: function(n, t) {
    this.dragStart(n, t);
  },
  dragGroup: function(n) {
    this.drag(n);
  },
  dragGroupEnd: function(n) {
    this.unset(n);
  },
  dragGroupControlStart: function(n) {
    n.state.snapRenderInfo = null, Xa(n);
  },
  dragGroupControl: function(n) {
    this.drag(n);
  },
  dragGroupControlEnd: function(n) {
    this.unset(n);
  },
  unset: function(n) {
    var t = n.state;
    t.enableSnap = !1, t.guidelines = [], t.snapRenderInfo = null, t.elementRects = [];
  }
};
function n1(n, t) {
  return [
    n[0] * t[0],
    n[1] * t[1]
  ];
}
function st() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  return jv.apply(void 0, j([Wu], R(n), !1));
}
function Wd(n) {
  n();
}
function i1(n) {
  return !n || n === "none" ? [1, 0, 0, 1, 0, 0] : le(n) ? n : sa(n);
}
function ji(n, t, r) {
  return lo(t, Tn(r, t), n, Tn(r.map(function(e) {
    return -e;
  }), t));
}
function a1(n, t, r) {
  if (t === "%") {
    var e = Ju(n.ownerSVGElement);
    return e[r ? "width" : "height"] / 100;
  }
  return 1;
}
function o1(n) {
  var t = s1(rl(n, ":before"));
  return t.map(function(r, e) {
    var i = ya(r), a = i.value, o = i.unit;
    return a * a1(n, o, e === 0);
  });
}
function go(n) {
  return n ? n.split(" ") : ["0", "0"];
}
function s1(n) {
  return go(n.transformOrigin);
}
function Hd(n) {
  var t = Ir(n), r = t("transform");
  if (r && r !== "none")
    return r;
  if ("transform" in n) {
    var e = n.transform, i = e.baseVal;
    if (!i)
      return "";
    var a = i.length;
    if (!a)
      return "";
    for (var o = [], s = function(l) {
      var f = i[l].matrix;
      o.push("matrix(".concat(["a", "b", "c", "d", "e", "f"].map(function(d) {
        return f[d];
      }).join(", "), ")"));
    }, u = 0; u < a; ++u)
      s(u);
    return o.join(" ");
  }
  return "";
}
function la(n, t, r, e, i) {
  var a, o, s = Iu(n) || en(n), u = !1, l, f;
  if (!n || r)
    l = n;
  else {
    var d = (a = n == null ? void 0 : n.assignedSlot) === null || a === void 0 ? void 0 : a.parentElement, p = n.parentElement;
    d ? (u = !0, f = p, l = d) : l = p;
  }
  for (var c = !1, h = n === t || l === t, v = "relative", g = 1, _ = parseFloat(i == null ? void 0 : i("zoom")) || 1, m = i == null ? void 0 : i("position"); l && l !== s; ) {
    t === l && (h = !0);
    var y = Ir(l), b = l.tagName.toLowerCase(), x = Hd(l), S = y("willChange"), C = parseFloat(y("zoom")) || 1;
    if (v = y("position"), e && C !== 1) {
      g = C;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !r && e && _ !== 1 && m && m !== "absolute" || b === "svg" || b === "foreignobject" || v !== "static" || x && x !== "none" || S === "transform"
    )
      break;
    var w = (o = n == null ? void 0 : n.assignedSlot) === null || o === void 0 ? void 0 : o.parentNode, D = l.parentNode;
    w && (u = !0, f = D);
    var T = D;
    if (T && T.nodeType === 11) {
      l = T.host, c = !0, v = Ir(l)("position");
      break;
    }
    l = T, v = "relative";
  }
  return {
    offsetZoom: g,
    hasSlot: u,
    parentSlotElement: f,
    isCustomElement: c,
    isStatic: v === "static",
    isEnd: h || !l || l === s,
    offsetParent: l || s
  };
}
function u1(n, t) {
  var r, e = n.tagName.toLowerCase(), i = n.offsetLeft, a = n.offsetTop, o = Ir(n), s = Po(i), u = !s, l, f;
  return !u && (e !== "svg" || n.ownerSVGElement) ? (l = ld ? o1(n) : go(o("transformOrigin")).map(function(d) {
    return parseFloat(d);
  }), f = l.slice(), u = !0, e === "svg" ? (i = 0, a = 0) : (r = R(c1(n, l, n === t && t.tagName.toLowerCase() === "g"), 4), i = r[0], a = r[1], l[0] = r[2], l[1] = r[3])) : (l = go(o("transformOrigin")).map(function(d) {
    return parseFloat(d);
  }), f = l.slice()), {
    tagName: e,
    isSVG: s,
    hasOffset: u,
    offset: [i || 0, a || 0],
    origin: l,
    targetOrigin: f
  };
}
function Vd(n, t) {
  var r = Ir(n), e = Ir(en(n)), i = e("position");
  if (!t && (!i || i === "static"))
    return [0, 0];
  var a = parseInt(e("marginLeft"), 10), o = parseInt(e("marginTop"), 10);
  return r("position") === "absolute" && ((r("top") !== "auto" || r("bottom") !== "auto") && (o = 0), (r("left") !== "auto" || r("right") !== "auto") && (a = 0)), [a, o];
}
function ru(n) {
  n.forEach(function(t) {
    var r = t.matrix;
    r && (t.matrix = fe(r, 3, 4));
  });
}
function l1(n) {
  for (var t = n.parentElement, r = !1, e = en(n); t; ) {
    var i = rl(t).transform;
    if (i && i !== "none") {
      r = !0;
      break;
    }
    if (t === e)
      break;
    t = t.parentElement;
  }
  return {
    fixedContainer: t || e,
    hasTransform: r
  };
}
function Yo(n, t) {
  return t === void 0 && (t = n.length > 9), "".concat(t ? "matrix3d" : "matrix", "(").concat(rd(n, !t).join(","), ")");
}
function Ju(n) {
  var t = n.clientWidth, r = n.clientHeight;
  if (!n)
    return { x: 0, y: 0, width: 0, height: 0, clientWidth: t, clientHeight: r };
  var e = n.viewBox, i = e && e.baseVal || { x: 0, y: 0, width: 0, height: 0 };
  return {
    x: i.x,
    y: i.y,
    width: i.width || t,
    height: i.height || r,
    clientWidth: t,
    clientHeight: r
  };
}
function f1(n, t) {
  var r, e = Ju(n), i = e.width, a = e.height, o = e.clientWidth, s = e.clientHeight, u = o / i, l = s / a, f = n.preserveAspectRatio.baseVal, d = f.align, p = f.meetOrSlice, c = [0, 0], h = [u, l], v = [0, 0];
  if (d !== 1) {
    var g = (d - 2) % 3, _ = Math.floor((d - 2) / 3);
    c[0] = i * g / 2, c[1] = a * _ / 2;
    var m = p === 2 ? Math.max(l, u) : Math.min(u, l);
    h[0] = m, h[1] = m, v[0] = (o - i) / 2 * g, v[1] = (s - a) / 2 * _;
  }
  var y = Nu(h, t);
  return r = R(v, 2), y[t * (t - 1)] = r[0], y[t * (t - 1) + 1] = r[1], ji(y, t, c);
}
function c1(n, t, r) {
  var e = n.tagName.toLowerCase();
  if (!n.getBBox || !r && e === "g")
    return [0, 0, 0, 0];
  var i = Ir(n), a = i("transform-box") === "fill-box", o = n.getBBox(), s = Ju(n.ownerSVGElement), u = o.x, l = o.y;
  e === "foreignobject" && !u && !l && (u = parseFloat(n.getAttribute("x")) || 0, l = parseFloat(n.getAttribute("y")) || 0);
  var f = u - s.x, d = l - s.y, p = a ? t[0] : t[0] - f, c = a ? t[1] : t[1] - d;
  return [f, d, p, c];
}
function Lt(n, t, r) {
  return _r(n, En(t, r), r);
}
function In(n, t, r, e) {
  return [[0, 0], [t, 0], [0, r], [t, r]].map(function(i) {
    return Lt(n, i, e);
  });
}
function Jr(n) {
  var t = n.map(function(l) {
    return l[0];
  }), r = n.map(function(l) {
    return l[1];
  }), e = Math.min.apply(Math, j([], R(t), !1)), i = Math.min.apply(Math, j([], R(r), !1)), a = Math.max.apply(Math, j([], R(t), !1)), o = Math.max.apply(Math, j([], R(r), !1)), s = a - e, u = o - i;
  return {
    left: e,
    top: i,
    right: a,
    bottom: o,
    width: s,
    height: u
  };
}
function Sf(n, t, r, e) {
  var i = In(n, t, r, e);
  return Jr(i);
}
function d1(n, t, r, e, i) {
  var a, o = n.target, s = n.origin, u = t.matrix, l = qd(o), f = l.offsetWidth, d = l.offsetHeight, p = r.getBoundingClientRect(), c = [0, 0];
  r === en(r) && (c = Vd(o, !0));
  for (var h = o.getBoundingClientRect(), v = h.left - p.left + r.scrollLeft - (r.clientLeft || 0) + c[0], g = h.top - p.top + r.scrollTop - (r.clientTop || 0) + c[1], _ = h.width, m = h.height, y = lo(e, i, u), b = Sf(y, f, d, e), x = b.left, S = b.top, C = b.width, w = b.height, D = Lt(y, s, e), T = lt(D, [x, S]), O = [
    v + T[0] * _ / C,
    g + T[1] * m / w
  ], M = [0, 0], E = 0; ++E < 10; ) {
    var I = _e(i, e);
    a = R(lt(Lt(I, O, e), Lt(I, D, e)), 2), M[0] = a[0], M[1] = a[1];
    var k = lo(e, i, Tn(M, e), u), B = Sf(k, f, d, e), F = B.left, G = B.top, X = F - v, W = G - g;
    if (V(X) < 2 && V(W) < 2)
      break;
    O[0] -= X, O[1] -= W;
  }
  return M.map(function(A) {
    return Math.round(A);
  });
}
function p1(n, t, r) {
  var e = n.length === 16, i = e ? 4 : 3, a = t.map(function(u) {
    return Lt(n, u, i);
  }), o = r.left, s = r.top;
  return a.map(function(u) {
    return [u[0] + o, u[1] + s];
  });
}
function te(n) {
  return Math.sqrt(n[0] * n[0] + n[1] * n[1]);
}
function $d(n, t) {
  return te([
    t[0] - n[0],
    t[1] - n[1]
  ]);
}
function Gi(n, t, r, e) {
  r === void 0 && (r = 1), e === void 0 && (e = jt(n, t));
  var i = $d(n, t);
  return {
    transform: "translateY(-50%) translate(".concat(n[0], "px, ").concat(n[1], "px) rotate(").concat(e, "rad) scaleY(").concat(r, ")"),
    width: "".concat(i, "px")
  };
}
function _o(n, t) {
  for (var r = [], e = 2; e < arguments.length; e++)
    r[e - 2] = arguments[e];
  var i = r.length, a = r.reduce(function(s, u) {
    return s + u[0];
  }, 0) / i, o = r.reduce(function(s, u) {
    return s + u[1];
  }, 0) / i;
  return {
    transform: "translateZ(0px) translate(".concat(a, "px, ").concat(o, "px) rotate(").concat(n, "rad) scale(").concat(t, ")")
  };
}
function On(n, t) {
  var r = n[t];
  return le(r) ? P(P({}, n), r) : n;
}
function qd(n) {
  var t = n && !Po(n.offsetWidth), r = 0, e = 0, i = 0, a = 0, o = 0, s = 0, u = 0, l = 0, f = 0, d = 0, p = 0, c = 0, h = 1 / 0, v = 1 / 0, g = 1 / 0, _ = 1 / 0, m = 0, y = 0, b = !1;
  if (n)
    if (!t && n.ownerSVGElement) {
      var x = n.getBBox();
      b = !0, r = x.width, e = x.height, o = r, s = e, u = r, l = e, i = r, a = e;
    } else {
      var S = Ir(n), C = n.style, w = S("boxSizing") === "border-box", D = parseFloat(S("borderLeftWidth")) || 0, T = parseFloat(S("borderRightWidth")) || 0, O = parseFloat(S("borderTopWidth")) || 0, M = parseFloat(S("borderBottomWidth")) || 0, E = parseFloat(S("paddingLeft")) || 0, I = parseFloat(S("paddingRight")) || 0, k = parseFloat(S("paddingTop")) || 0, B = parseFloat(S("paddingBottom")) || 0, F = E + I, G = k + B, X = D + T, W = O + M, A = F + X, Y = G + W, H = S("position"), L = 0, U = 0;
      if ("clientLeft" in n) {
        var q = null;
        if (H === "absolute") {
          var tt = la(n, en(n));
          q = tt.offsetParent;
        } else
          q = n.parentElement;
        if (q) {
          var J = Ir(q);
          L = parseFloat(J("width")), U = parseFloat(J("height"));
        }
      }
      f = Math.max(F, Ot(S("minWidth"), L) || 0), d = Math.max(G, Ot(S("minHeight"), U) || 0), h = Ot(S("maxWidth"), L), v = Ot(S("maxHeight"), U), isNaN(h) && (h = 1 / 0), isNaN(v) && (v = 1 / 0), m = Ot(C.width, 0) || 0, y = Ot(C.height, 0) || 0, o = parseFloat(S("width")) || 0, s = parseFloat(S("height")) || 0, u = V(o - m) < 1 ? ks(f, m || o, h) : o, l = V(s - y) < 1 ? ks(d, y || s, v) : s, r = u, e = l, i = u, a = l, w ? (g = h, _ = v, p = f, c = d, u = r - A, l = e - Y) : (g = h + A, _ = v + Y, p = f + A, c = d + Y, r = u + A, e = l + Y), i = u + F, a = l + G;
    }
  return {
    svg: b,
    offsetWidth: r,
    offsetHeight: e,
    clientWidth: i,
    clientHeight: a,
    contentWidth: u,
    contentHeight: l,
    inlineCSSWidth: m,
    inlineCSSHeight: y,
    cssWidth: o,
    cssHeight: s,
    minWidth: f,
    minHeight: d,
    maxWidth: h,
    maxHeight: v,
    minOffsetWidth: p,
    minOffsetHeight: c,
    maxOffsetWidth: g,
    maxOffsetHeight: _
  };
}
function Ud(n, t) {
  return jt(t > 0 ? n[0] : n[1], t > 0 ? n[1] : n[0]);
}
function Wa() {
  return {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  };
}
function jd(n, t) {
  var r = n === en(n) || n === Iu(n), e = {
    clientLeft: n.clientLeft,
    clientTop: n.clientTop,
    clientWidth: n.clientWidth,
    clientHeight: n.clientHeight,
    scrollWidth: n.scrollWidth,
    scrollHeight: n.scrollHeight,
    overflow: !1
  };
  return r && (e.clientHeight = Math.max(t.height, e.clientHeight), e.scrollHeight = Math.max(t.height, e.scrollHeight)), e.overflow = Ir(n)("overflow") !== "visible", P(P({}, t), e);
}
function ls(n, t, r, e) {
  var i = n.left, a = n.right, o = n.top, s = n.bottom, u = t.top, l = t.left, f = {
    left: l + i,
    top: u + o,
    right: l + a,
    bottom: u + s,
    width: a - i,
    height: s - o
  };
  return r && e ? jd(r, f) : f;
}
function Ki(n, t) {
  var r = 0, e = 0, i = 0, a = 0;
  if (n) {
    var o = n.getBoundingClientRect();
    r = o.left, e = o.top, i = o.width, a = o.height;
  }
  var s = {
    left: r,
    top: e,
    width: i,
    height: a,
    right: r + i,
    bottom: e + a
  };
  return n && t ? jd(n, s) : s;
}
function v1(n) {
  var t = n.props, r = t.groupable, e = t.svgOrigin, i = n.getState(), a = i.offsetWidth, o = i.offsetHeight, s = i.svg, u = i.transformOrigin;
  return !r && s && e ? al(e, a, o) : u;
}
function Kd(n, t, r, e) {
  var i;
  if (n)
    i = n;
  else if (t)
    i = [0, 0];
  else {
    var a = r.target;
    i = Zd(a, e);
  }
  return i;
}
function Zd(n, t) {
  if (n) {
    var r = n.getAttribute("data-rotation") || "", e = n.getAttribute("data-direction");
    if (t.deg = r, !!e) {
      var i = [0, 0];
      return e.indexOf("w") > -1 && (i[0] = -1), e.indexOf("e") > -1 && (i[0] = 1), e.indexOf("n") > -1 && (i[1] = -1), e.indexOf("s") > -1 && (i[1] = 1), i;
    }
  }
}
function tl(n, t) {
  return [
    Ct(t, n[0]),
    Ct(t, n[1]),
    Ct(t, n[2]),
    Ct(t, n[3])
  ];
}
function re(n) {
  var t = n.left, r = n.top, e = n.pos1, i = n.pos2, a = n.pos3, o = n.pos4;
  return tl([e, i, a, o], [t, r]);
}
function eu(n, t) {
  n[t ? "controlAbles" : "targetAbles"].forEach(function(r) {
    r.unset && r.unset(n);
  });
}
function Un(n, t) {
  var r = t ? "controlGesto" : "targetGesto", e = n[r];
  (e == null ? void 0 : e.isIdle()) === !1 && eu(n, t), e == null || e.unset(), n[r] = null;
}
function wr(n, t) {
  if (t) {
    var r = Ci(t);
    r.nextStyle = P(P({}, r.nextStyle), n);
  }
  return {
    style: n,
    cssText: Ie(n).map(function(e) {
      return "".concat(Qa(e, "-"), ": ").concat(n[e], ";");
    }).join("")
  };
}
function Qd(n, t, r) {
  var e = t.afterTransform || t.transform;
  return P(P({}, wr(P(P(P({}, n.style), t.style), { transform: e }), r)), { afterTransform: e, transform: n.transform });
}
function vt(n, t, r, e) {
  var i = t.datas;
  i.datas || (i.datas = {});
  var a = P(P({}, r), { target: n.state.target, clientX: t.clientX, clientY: t.clientY, inputEvent: t.inputEvent, currentTarget: n, moveable: n, datas: i.datas, isRequest: t.isRequest, isRequestChild: t.isRequestChild, isFirstDrag: !!t.isFirstDrag, isTrusted: t.isTrusted !== !1, stopAble: function() {
    i.isEventStart = !1;
  }, stopDrag: function() {
    var o;
    (o = t.stop) === null || o === void 0 || o.call(t);
  } });
  return i.isStartEvent ? e || (i.lastEvent = a) : i.isStartEvent = !0, a;
}
function Xr(n, t, r) {
  var e = t.datas, i = "isDrag" in r ? r.isDrag : t.isDrag;
  return e.datas || (e.datas = {}), P(P({ isDrag: i }, r), { moveable: n, target: n.state.target, clientX: t.clientX, clientY: t.clientY, inputEvent: t.inputEvent, currentTarget: n, lastEvent: e.lastEvent, isDouble: t.isDouble, datas: e.datas, isFirstDrag: !!t.isFirstDrag });
}
function Xo(n, t, r) {
  n._emitter.on(t, r);
}
function et(n, t, r, e, i) {
  return n.triggerEvent(t, r, e, i);
}
function rl(n, t) {
  return qe(n).getComputedStyle(n, t);
}
function Ha(n, t, r) {
  var e = {}, i = {};
  return n.filter(function(a) {
    var o = a.name;
    if (e[o] || !t.some(function(s) {
      return a[s];
    }))
      return !1;
    if (!r && a.ableGroup) {
      if (i[a.ableGroup])
        return !1;
      i[a.ableGroup] = !0;
    }
    return e[o] = !0, !0;
  });
}
function nu(n, t) {
  return n === t || n == null && t == null;
}
function wf() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  for (var r = n.length - 1, e = 0; e < r; ++e) {
    var i = n[e];
    if (!Po(i))
      return i;
  }
  return n[r];
}
function Jd(n, t) {
  var r = [], e = [];
  return n.forEach(function(i, a) {
    var o = t(i, a, n), s = e.indexOf(o), u = r[s] || [];
    s === -1 && (e.push(o), r.push(u)), u.push(i);
  }), r;
}
function h1(n, t) {
  var r = [], e = {};
  return n.forEach(function(i, a) {
    var o = t(i, a, n), s = e[o];
    s || (s = [], e[o] = s, r.push(s)), s.push(i);
  }), r;
}
function tp(n) {
  return n.reduce(function(t, r) {
    return t.concat(r);
  }, []);
}
function fi() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  return n.sort(function(r, e) {
    return V(e) - V(r);
  }), n[0];
}
function ci(n, t, r) {
  return _r(_e(n, r), En(t, r), r);
}
function rp(n, t) {
  var r, e = n.is3d, i = n.rootMatrix, a = e ? 4 : 3;
  return r = R(ci(i, [t.distX, t.distY], a), 2), t.distX = r[0], t.distY = r[1], t;
}
function $r(n, t, r, e) {
  if (!r[0] && !r[1])
    return t;
  var i = Lt(n, [xf(r[0] || 1), 0], e), a = Lt(n, [0, xf(r[1] || 1)], e), o = Lt(n, [
    r[0] / te(i),
    r[1] / te(a)
  ], e);
  return Ct(t, o);
}
function ne(n, t, r) {
  return r ? "".concat(n / t * 100, "%") : "".concat(n, "px");
}
function mo(n) {
  return V(n) <= Cr ? 0 : n;
}
function el(n) {
  return function(t) {
    if (!t.isDragging(n))
      return "";
    var r = a0(t, n), e = r.deg;
    return e ? st("view-control-rotation".concat(e)) : "";
  };
}
function nl(n, t) {
  return t === void 0 && (t = [n]), function(r, e) {
    if (e.isRequest)
      return t.some(function(a) {
        return e.requestAble === a;
      }) ? e.parentDirection : !1;
    var i = e.inputEvent.target;
    return or(i, st("direction")) && (!n || or(i, st(n)));
  };
}
function g1(n, t, r) {
  var e, i = si(n, {
    "x%": function(x) {
      return x / 100 * t.offsetWidth;
    },
    "y%": function(x) {
      return x / 100 * t.offsetHeight;
    }
  }), a = n.slice(0, r < 0 ? void 0 : r), o = n.slice(0, r < 0 ? void 0 : r + 1), s = n[r] || "", u = r < 0 ? [] : n.slice(r), l = r < 0 ? [] : n.slice(r + 1), f = i.slice(0, r < 0 ? void 0 : r), d = i.slice(0, r < 0 ? void 0 : r + 1), p = (e = i[r]) !== null && e !== void 0 ? e : si([""])[0], c = r < 0 ? [] : i.slice(r), h = r < 0 ? [] : i.slice(r + 1), v = p ? [p] : [], g = Wn(f), _ = Wn(d), m = Wn(c), y = Wn(h), b = Pt(g, m, 4);
  return {
    transforms: n,
    beforeFunctionMatrix: g,
    beforeFunctionMatrix2: _,
    targetFunctionMatrix: Wn(v),
    afterFunctionMatrix: m,
    afterFunctionMatrix2: y,
    allFunctionMatrix: b,
    beforeFunctions: f,
    beforeFunctions2: d,
    targetFunction: v[0],
    afterFunctions: c,
    afterFunctions2: h,
    beforeFunctionTexts: a,
    beforeFunctionTexts2: o,
    targetFunctionText: s,
    afterFunctionTexts: u,
    afterFunctionTexts2: l
  };
}
function _1(n) {
  return !n || !le(n) || Si(n) ? !1 : rr(n) || "length" in n;
}
function ge(n, t) {
  return n ? Si(n) ? n : Pr(n) ? t ? document.querySelector(n) : n : Ou(n) ? n() : zc(n) ? n : "current" in n ? n.current : n : null;
}
function il(n, t) {
  if (!n)
    return [];
  var r = _1(n) ? [].slice.call(n) : [n];
  return r.reduce(function(e, i) {
    return Pr(i) && t ? j(j([], R(e), !1), R([].slice.call(document.querySelectorAll(i))), !1) : (rr(i) ? e.push(il(i, t)) : e.push(ge(i, t)), e);
  }, []);
}
function m1(n, t, r) {
  var e = jt(n, t) / Math.PI * 180;
  return e = r >= 0 ? e : 180 - e, e = e >= 0 ? e : 360 + e, e;
}
function Cf(n, t) {
  var r = n.rootMatrix, e = n.is3d, i = e ? 4 : 3, a = _e(r, i);
  return e || (a = fe(a, 3, 4)), a[12] = 0, a[13] = 0, a[14] = 0, Jh(a, t);
}
function ep(n, t, r, e, i) {
  var a = R(n, 2), o = a[0], s = a[1], u = 0, l = 0;
  if (i && o && s) {
    var f = jt([0, 0], t), d = jt([0, 0], e), p = te(t), c = Math.cos(f - d) * p;
    if (!e[0])
      l = c, u = l * r;
    else if (!e[1])
      u = c, l = u / r;
    else {
      var h = e[0] * o, v = e[1] * s, g = Math.atan2(h + t[0], v + t[1]), _ = Math.atan2(h, v);
      g < 0 && (g += Math.PI * 2), _ < 0 && (_ += Math.PI * 2);
      var m = 0;
      V(g - _) < Math.PI / 2 || V(g - _) > Math.PI / 2 * 3 || (_ += Math.PI), m = g - _, m > Math.PI * 2 ? m -= Math.PI * 2 : m > Math.PI ? m = 2 * Math.PI - m : m < -Math.PI && (m = -2 * Math.PI - m);
      var y = te([h + t[0], v + t[1]]) * Math.cos(m);
      u = y * Math.sin(_) - h, l = y * Math.cos(_) - v, e[0] < 0 && (u *= -1), e[1] < 0 && (l *= -1);
    }
  } else
    u = e[0] * t[0], l = e[1] * t[1];
  return [u, l];
}
function np(n, t, r, e) {
  var i, a = r.ratio, o = r.startOffsetWidth, s = r.startOffsetHeight, u = 0, l = 0, f = e.distX, d = e.distY, p = e.pinchScale, c = e.parentDistance, h = e.parentDist, v = e.parentScale, g = r.fixedDirection, _ = [0, 1].map(function(C) {
    return V(n[C] - g[C]);
  }), m = [0, 1].map(function(C) {
    var w = _[C];
    return w !== 0 && (w = 2 / w), w;
  });
  if (h)
    u = h[0], l = h[1], t && (u ? l || (l = u / a) : u = l * a);
  else if (oi(p))
    u = (p - 1) * o, l = (p - 1) * s;
  else if (v)
    u = (v[0] - 1) * o, l = (v[1] - 1) * s;
  else if (c) {
    var y = o * _[0], b = s * _[1], x = te([y, b]);
    u = c / x * y * m[0], l = c / x * b * m[1];
  } else {
    var S = xe({ datas: r, distX: f, distY: d });
    S = m.map(function(C, w) {
      return S[w] * C;
    }), i = R(ep([o, s], S, a, n, t), 2), u = i[0], l = i[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: u,
    distHeight: l
  };
}
function iu(n, t) {
  if (t) {
    if (n === "left")
      return { x: "0%", y: "50%" };
    if (n === "top")
      return { x: "50%", y: "50%" };
    if (n === "center")
      return { x: "50%", y: "50%" };
    if (n === "right")
      return { x: "100%", y: "50%" };
    if (n === "bottom")
      return { x: "50%", y: "100%" };
    var r = R(n.split(" "), 2), e = r[0], i = r[1], a = iu(e || ""), o = iu(i || ""), s = P(P({}, a), o), u = {
      x: "50%",
      y: "50%"
    };
    return s.x && (u.x = s.x), s.y && (u.y = s.y), s.value && (s.x && !s.y && (u.y = s.value), !s.x && s.y && (u.x = s.value)), u;
  }
  return n === "left" ? { x: "0%" } : n === "right" ? { x: "100%" } : n === "top" ? { y: "0%" } : n === "bottom" ? { y: "100%" } : n ? n === "center" ? { value: "50%" } : { value: n } : {};
}
function al(n, t, r) {
  var e = iu(n, !0), i = e.x, a = e.y;
  return [
    Ot(i, t) || 0,
    Ot(a, r) || 0
  ];
}
function x1(n, t, r) {
  var e = n.map(function(a) {
    return lt(a, t);
  }), i = e.map(function(a) {
    return Ca(a, r);
  });
  return {
    prev: e,
    next: i,
    result: i.map(function(a) {
      return Ct(a, t);
    })
  };
}
function ip(n, t) {
  return n.length === t.length && n.every(function(r, e) {
    var i = t[e], a = rr(r), o = rr(i);
    return a && o ? ip(r, i) : !a && !o ? r === i : !1;
  });
}
function jn(n, t, r, e, i) {
  var a = n._store, o = a[t];
  if (!(t in a))
    if (i != null)
      a[t] = i, o = i;
    else
      return a[t] = r, r;
  return o === r || e(o) === e(r) ? o : (a[t] = r, r);
}
function br(n) {
  return n >= 0 ? 1 : -1;
}
function V(n) {
  return Math.abs(n);
}
function fs(n, t) {
  return dh(n).map(function(r) {
    return t(r);
  });
}
function ap(n) {
  return oi(n) ? {
    top: n,
    left: n,
    right: n,
    bottom: n
  } : {
    left: n.left || 0,
    top: n.top || 0,
    right: n.right || 0,
    bottom: n.bottom || 0
  };
}
var y1 = Ta("pinchable", {
  props: [
    "pinchable"
  ],
  events: [
    "pinchStart",
    "pinch",
    "pinchEnd",
    "pinchGroupStart",
    "pinchGroup",
    "pinchGroupEnd"
  ],
  dragStart: function() {
    return !0;
  },
  pinchStart: function(n, t) {
    var r = t.datas, e = t.targets, i = t.angle, a = t.originalDatas, o = n.props, s = o.pinchable, u = o.ables;
    if (!s)
      return !1;
    var l = "onPinch".concat(e ? "Group" : "", "Start"), f = "drag".concat(e ? "Group" : "", "ControlStart"), d = (s === !0 ? n.controlAbles : u.filter(function(v) {
      return s.indexOf(v.name) > -1;
    })).filter(function(v) {
      return v.canPinch && v[f];
    }), p = vt(n, t, {});
    e && (p.targets = e);
    var c = et(n, l, p);
    r.isPinch = c !== !1, r.ables = d;
    var h = r.isPinch;
    return h ? (d.forEach(function(v) {
      if (a[v.name] = a[v.name] || {}, !!v[f]) {
        var g = P(P({}, t), { datas: a[v.name], parentRotate: i, isPinch: !0 });
        v[f](n, g);
      }
    }), n.state.snapRenderInfo = {
      request: t.isRequest,
      direction: [0, 0]
    }, h) : !1;
  },
  pinch: function(n, t) {
    var r = t.datas, e = t.scale, i = t.distance, a = t.originalDatas, o = t.inputEvent, s = t.targets, u = t.angle;
    if (r.isPinch) {
      var l = i * (1 - 1 / e), f = vt(n, t, {});
      s && (f.targets = s);
      var d = "onPinch".concat(s ? "Group" : "");
      et(n, d, f);
      var p = r.ables, c = "drag".concat(s ? "Group" : "", "Control");
      return p.forEach(function(h) {
        h[c] && h[c](n, P(P({}, t), { datas: a[h.name], inputEvent: o, resolveMatrix: !0, pinchScale: e, parentDistance: l, parentRotate: u, isPinch: !0 }));
      }), f;
    }
  },
  pinchEnd: function(n, t) {
    var r = t.datas, e = t.isPinch, i = t.inputEvent, a = t.targets, o = t.originalDatas;
    if (r.isPinch) {
      var s = "onPinch".concat(a ? "Group" : "", "End"), u = Xr(n, t, { isDrag: e });
      a && (u.targets = a), et(n, s, u);
      var l = r.ables, f = "drag".concat(a ? "Group" : "", "ControlEnd");
      return l.forEach(function(d) {
        d[f] && d[f](n, P(P({}, t), { isDrag: e, datas: o[d.name], inputEvent: i, isPinch: !0 }));
      }), e;
    }
  },
  pinchGroupStart: function(n, t) {
    return this.pinchStart(n, P(P({}, t), { targets: n.props.targets }));
  },
  pinchGroup: function(n, t) {
    return this.pinch(n, P(P({}, t), { targets: n.props.targets }));
  },
  pinchGroupEnd: function(n, t) {
    return this.pinchEnd(n, P(P({}, t), { targets: n.props.targets }));
  }
}), Df = nl("scalable"), b1 = {
  name: "scalable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "scalable",
    "throttleScale",
    "renderDirections",
    "keepRatio",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "scaleStart",
    "beforeScale",
    "scale",
    "scaleEnd",
    "scaleGroupStart",
    "beforeScaleGroup",
    "scaleGroup",
    "scaleGroupEnd"
  ],
  render: Cd("scalable"),
  dragControlCondition: Df,
  viewClassName: el("scalable"),
  dragControlStart: function(n, t) {
    var r = t.datas, e = t.isPinch, i = t.inputEvent, a = t.parentDirection, o = Kd(a, e, i, r), s = n.state, u = s.width, l = s.height, f = s.targetTransform, d = s.target, p = s.pos1, c = s.pos2, h = s.pos4;
    if (!o || !d)
      return !1;
    e || Rn(n, t), r.datas = {}, r.transform = f, r.prevDist = [1, 1], r.direction = o, r.startOffsetWidth = u, r.startOffsetHeight = l, r.startValue = [1, 1];
    var v = !o[0] && !o[1] || o[0] || !o[1];
    Go(n, t, "scale"), r.isWidth = v;
    function g(S) {
      r.ratio = S && isFinite(S) ? S : 0;
    }
    r.startPositions = re(n.state);
    function _(S) {
      var C = Bd(r.startPositions, S);
      r.fixedDirection = C.fixedDirection, r.fixedPosition = C.fixedPosition, r.fixedOffset = C.fixedOffset;
    }
    r.setFixedDirection = _, g(Oe(p, c) / Oe(c, h)), _([-o[0], -o[1]]);
    var m = function(S) {
      r.minScaleSize = S;
    }, y = function(S) {
      r.maxScaleSize = S;
    };
    m([-1 / 0, -1 / 0]), y([1 / 0, 1 / 0]);
    var b = vt(n, t, P(P({ direction: o, set: function(S) {
      r.startValue = S;
    }, setRatio: g, setFixedDirection: _, setMinScaleSize: m, setMaxScaleSize: y }, Bo(n, t)), { dragStart: yr.dragStart(n, new ui().dragStart([0, 0], t)) })), x = et(n, "onScaleStart", b);
    return r.startFixedDirection = r.fixedDirection, x !== !1 && (r.isScale = !0, n.state.snapRenderInfo = {
      request: t.isRequest,
      direction: o
    }), r.isScale ? b : !1;
  },
  dragControl: function(n, t) {
    zo(n, t, "scale");
    var r = t.datas, e = t.parentKeepRatio, i = t.parentFlag, a = t.isPinch, o = t.dragClient, s = t.isRequest, u = t.useSnap, l = t.resolveMatrix, f = r.prevDist, d = r.direction, p = r.startOffsetWidth, c = r.startOffsetHeight, h = r.isScale, v = r.startValue, g = r.isWidth, _ = r.ratio;
    if (!h)
      return !1;
    var m = n.props, y = m.throttleScale, b = m.parentMoveable, x = d;
    !d[0] && !d[1] && (x = [1, 1]);
    var S = _ && (e ?? m.keepRatio) || !1, C = n.state, w = [
      v[0],
      v[1]
    ];
    function D() {
      var Z = np(x, S, r, t), nt = Z.distWidth, xt = Z.distHeight, at = p ? (p + nt) / p : 1, Q = c ? (c + xt) / c : 1;
      v[0] || (w[0] = nt / p), v[1] || (w[1] = xt / c);
      var ht = (x[0] || S ? at : 1) * w[0], gt = (x[1] || S ? Q : 1) * w[1];
      return ht === 0 && (ht = br(f[0]) * Na), gt === 0 && (gt = br(f[1]) * Na), [ht, gt];
    }
    var T = D();
    if (!a && n.props.groupable) {
      var O = C.snapRenderInfo || {}, M = O.direction;
      rr(M) && (M[0] || M[1]) && (C.snapRenderInfo = { direction: d, request: t.isRequest });
    }
    et(n, "onBeforeScale", vt(n, t, {
      scale: T,
      setFixedDirection: function(Z) {
        return r.setFixedDirection(Z), T = D(), T;
      },
      startFixedDirection: r.startFixedDirection,
      setScale: function(Z) {
        T = Z;
      }
    }, !0));
    var E = [
      T[0] / w[0],
      T[1] / w[1]
    ], I = o, k = [0, 0], B = br(E[0] * E[1]), F = !o && !i && a;
    if (F || l ? I = $u(n, r.targetAllTransform, [0, 0], [0, 0], r) : o || (I = r.fixedPosition), a || (k = J0(n, E, d, !u && s, r)), S) {
      x[0] && x[1] && k[0] && k[1] && (Math.abs(k[0] * p) > Math.abs(k[1] * c) ? k[1] = 0 : k[0] = 0);
      var G = !k[0] && !k[1];
      if (G && (g ? E[0] = ct(E[0] * w[0], y) / w[0] : E[1] = ct(E[1] * w[1], y) / w[1]), x[0] && !x[1] || k[0] && !k[1] || G && g) {
        E[0] += k[0];
        var X = p * E[0] * w[0] / _;
        E[1] = br(B * E[0]) * V(X / c / w[1]);
      } else if (!x[0] && x[1] || !k[0] && k[1] || G && !g) {
        E[1] += k[1];
        var W = c * E[1] * w[1] * _;
        E[0] = br(B * E[1]) * V(W / p / w[0]);
      }
    } else
      E[0] += k[0], E[1] += k[1], k[0] || (E[0] = ct(E[0] * w[0], y) / w[0]), k[1] || (E[1] = ct(E[1] * w[1], y) / w[1]);
    E[0] === 0 && (E[0] = br(f[0]) * Na), E[1] === 0 && (E[1] = br(f[1]) * Na), T = n1(E, [w[0], w[1]]);
    var A = [
      p,
      c
    ], Y = [
      p * T[0],
      c * T[1]
    ];
    Y = Oc(Y, r.minScaleSize, r.maxScaleSize, S ? _ : !1), T = fs(2, function(Z) {
      return A[Z] ? Y[Z] / A[Z] : Y[Z];
    }), E = fs(2, function(Z) {
      return T[Z] / w[Z];
    });
    var H = fs(2, function(Z) {
      return f[Z] ? E[Z] / f[Z] : E[Z];
    }), L = "scale(".concat(E.join(", "), ")"), U = "scale(".concat(T.join(", "), ")"), q = Ao(r, U, L), tt = !v[0] || !v[1], J = Jg(n, tt ? U : L, r.fixedDirection, I, r.fixedOffset, r, tt), ft = F ? J : lt(J, r.prevInverseDist || [0, 0]);
    if (r.prevDist = E, r.prevInverseDist = J, T[0] === f[0] && T[1] === f[1] && ft.every(function(Z) {
      return !Z;
    }) && !b && !F)
      return !1;
    var dt = vt(n, t, P({ offsetWidth: p, offsetHeight: c, direction: d, scale: T, dist: E, delta: H, isPinch: !!a }, md(n, q, ft, a, t)));
    return et(n, "onScale", dt), dt;
  },
  dragControlEnd: function(n, t) {
    var r = t.datas;
    if (!r.isScale)
      return !1;
    r.isScale = !1;
    var e = Xr(n, t, {});
    return et(n, "onScaleEnd", e), e;
  },
  dragGroupControlCondition: Df,
  dragGroupControlStart: function(n, t) {
    var r = t.datas, e = this.dragControlStart(n, t);
    if (!e)
      return !1;
    var i = se(n, "resizable", t);
    r.moveableScale = n.scale;
    var a = Pe(n, this, "dragControlStart", t, function(l, f) {
      return po(n, l, r, f);
    }), o = function(l) {
      e.setFixedDirection(l), a.forEach(function(f, d) {
        f.setFixedDirection(l), po(n, f.moveable, r, i[d]);
      });
    };
    r.setFixedDirection = o;
    var s = P(P({}, e), { targets: n.props.targets, events: a, setFixedDirection: o }), u = et(n, "onScaleGroupStart", s);
    return r.isScale = u !== !1, r.isScale ? s : !1;
  },
  dragGroupControl: function(n, t) {
    var r = t.datas;
    if (r.isScale) {
      Xo(n, "onBeforeScale", function(f) {
        et(n, "onBeforeScaleGroup", vt(n, t, P(P({}, f), { targets: n.props.targets }), !0));
      });
      var e = this.dragControl(n, t);
      if (e) {
        var i = e.dist, a = r.moveableScale;
        n.scale = [
          i[0] * a[0],
          i[1] * a[1]
        ];
        var o = n.props.keepRatio, s = r.fixedPosition, u = Pe(n, this, "dragControl", t, function(f, d) {
          var p = R(_r(Da(n.rotation / 180 * Math.PI, 3), [
            d.datas.originalX * i[0],
            d.datas.originalY * i[1],
            1
          ], 3), 2), c = p[0], h = p[1];
          return P(P({}, d), {
            parentDist: null,
            parentScale: i,
            parentKeepRatio: o,
            // recalculate child fixed position for parent group's dragging.
            dragClient: Ct(s, [c, h])
          });
        }), l = P({ targets: n.props.targets, events: u }, e);
        return et(n, "onScaleGroup", l), l;
      }
    }
  },
  dragGroupControlEnd: function(n, t) {
    var r = t.isDrag, e = t.datas;
    if (e.isScale) {
      this.dragControlEnd(n, t);
      var i = Pe(n, this, "dragControlEnd", t), a = Xr(n, t, {
        targets: n.props.targets,
        events: i
      });
      return et(n, "onScaleGroupEnd", a), r;
    }
  },
  /**
       * @method Moveable.Scalable#request
       * @param {Moveable.Scalable.ScalableRequestParam} e - the Scalable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("scalable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("scalable");
       *
       * // request
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function() {
    var n = {}, t = 0, r = 0, e = !1;
    return {
      isControl: !0,
      requestStart: function(i) {
        return e = i.useSnap, {
          datas: n,
          parentDirection: i.direction || [1, 1],
          useSnap: e
        };
      },
      request: function(i) {
        return t += i.deltaWidth, r += i.deltaHeight, {
          datas: n,
          parentDist: [t, r],
          parentKeepRatio: i.keepRatio,
          useSnap: e
        };
      },
      requestEnd: function() {
        return { datas: n, isDrag: !0, useSnap: e };
      }
    };
  }
};
function Fe(n, t) {
  return n.map(function(r, e) {
    return so(r, t[e], 1, 2);
  });
}
function Ef(n, t, r) {
  var e = jt(n, t), i = jt(n, r), a = i - e;
  return a >= 0 ? a : a + 2 * Math.PI;
}
function S1(n, t) {
  var r = Ef(n[0], n[1], n[2]), e = Ef(t[0], t[1], t[2]), i = Math.PI;
  return !(r >= i && e <= i || r <= i && e >= i);
}
var w1 = {
  name: "warpable",
  ableGroup: "size",
  props: [
    "warpable",
    "renderDirections",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "warpStart",
    "warp",
    "warpEnd"
  ],
  viewClassName: el("warpable"),
  render: function(n, t) {
    var r = n.props, e = r.resizable, i = r.scalable, a = r.warpable, o = r.zoom;
    if (e || i || !a)
      return [];
    var s = n.state, u = s.pos1, l = s.pos2, f = s.pos3, d = s.pos4, p = Fe(u, l), c = Fe(l, u), h = Fe(u, f), v = Fe(f, u), g = Fe(f, d), _ = Fe(d, f), m = Fe(l, d), y = Fe(d, l);
    return j([
      t.createElement("div", { className: st("line"), key: "middeLine1", style: Gi(p, g, o) }),
      t.createElement("div", { className: st("line"), key: "middeLine2", style: Gi(c, _, o) }),
      t.createElement("div", { className: st("line"), key: "middeLine3", style: Gi(h, m, o) }),
      t.createElement("div", { className: st("line"), key: "middeLine4", style: Gi(v, y, o) })
    ], R(Dd(n, "warpable", t)), !1);
  },
  dragControlCondition: function(n, t) {
    if (t.isRequest)
      return !1;
    var r = t.inputEvent.target;
    return or(r, st("direction")) && or(r, st("warpable"));
  },
  dragControlStart: function(n, t) {
    var r = t.datas, e = t.inputEvent, i = n.props.target, a = e.target, o = Zd(a, r);
    if (!o || !i)
      return !1;
    var s = n.state, u = s.transformOrigin, l = s.is3d, f = s.targetTransform, d = s.targetMatrix, p = s.width, c = s.height, h = s.left, v = s.top;
    r.datas = {}, r.targetTransform = f, r.warpTargetMatrix = l ? d : fe(d, 3, 4), r.targetInverseMatrix = Jc(_e(r.warpTargetMatrix, 4), 3, 4), r.direction = o, r.left = h, r.top = v, r.poses = [
      [0, 0],
      [p, 0],
      [0, c],
      [p, c]
    ].map(function(m) {
      return lt(m, u);
    }), r.nextPoses = r.poses.map(function(m) {
      var y = R(m, 2), b = y[0], x = y[1];
      return _r(r.warpTargetMatrix, [b, x, 0, 1], 4);
    }), r.startValue = Bt(4), r.prevMatrix = Bt(4), r.absolutePoses = re(s), r.posIndexes = _d(o), Rn(n, t), Go(n, t, "matrix3d"), s.snapRenderInfo = {
      request: t.isRequest,
      direction: o
    };
    var g = vt(n, t, P({ set: function(m) {
      r.startValue = m;
    } }, Bo(n, t))), _ = et(n, "onWarpStart", g);
    return _ !== !1 && (r.isWarp = !0), r.isWarp;
  },
  dragControl: function(n, t) {
    var r = t.datas, e = t.isRequest, i = t.distX, a = t.distY, o = r.targetInverseMatrix, s = r.prevMatrix, u = r.isWarp, l = r.startValue, f = r.poses, d = r.posIndexes, p = r.absolutePoses;
    if (!u)
      return !1;
    if (zo(n, t, "matrix3d"), Di(n, "warpable")) {
      var c = d.map(function(D) {
        return p[D];
      });
      c.length > 1 && c.push([
        (c[0][0] + c[1][0]) / 2,
        (c[0][1] + c[1][1]) / 2
      ]);
      var h = Lo(n, e, {
        horizontal: c.map(function(D) {
          return D[1] + a;
        }),
        vertical: c.map(function(D) {
          return D[0] + i;
        })
      }), v = h.horizontal, g = h.vertical;
      a -= v.offset, i -= g.offset;
    }
    var _ = xe({ datas: r, distX: i, distY: a }, !0), m = r.nextPoses.slice();
    if (d.forEach(function(D) {
      m[D] = Ct(m[D], _);
    }), !Wg.every(function(D) {
      return S1(D.map(function(T) {
        return f[T];
      }), D.map(function(T) {
        return m[T];
      }));
    }))
      return !1;
    var y = Lu(f[0], f[2], f[1], f[3], m[0], m[2], m[1], m[3]);
    if (!y.length)
      return !1;
    var b = Pt(o, y, 4), x = hd(r, b, !0), S = Pt(_e(s, 4), x, 4);
    r.prevMatrix = x;
    var C = Pt(l, x, 4), w = Ao(r, "matrix3d(".concat(C.join(", "), ")"), "matrix3d(".concat(x.join(", "), ")"));
    return Vu(t, w), et(n, "onWarp", vt(n, t, P({ delta: S, matrix: C, dist: x, multiply: Pt, transform: w }, wr({
      transform: w
    }, t)))), !0;
  },
  dragControlEnd: function(n, t) {
    var r = t.datas, e = t.isDrag;
    return r.isWarp ? (r.isWarp = !1, et(n, "onWarpEnd", Xr(n, t, {})), e) : !1;
  }
}, C1 = /* @__PURE__ */ st("area-pieces"), Va = /* @__PURE__ */ st("area-piece"), op = /* @__PURE__ */ st("avoid"), D1 = st("view-dragging");
function cs(n) {
  var t = n.areaElement;
  if (t) {
    var r = n.state, e = r.width, i = r.height;
    kc(t, op), t.style.cssText += "left: 0px; top: 0px; width: ".concat(e, "px; height: ").concat(i, "px");
  }
}
function Tf(n) {
  return n.createElement(
    "div",
    { key: "area_pieces", className: C1 },
    n.createElement("div", { className: Va }),
    n.createElement("div", { className: Va }),
    n.createElement("div", { className: Va }),
    n.createElement("div", { className: Va })
  );
}
var sp = {
  name: "dragArea",
  props: [
    "dragArea",
    "passDragArea"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  render: function(n, t) {
    var r = n.props, e = r.target, i = r.dragArea, a = r.groupable, o = r.passDragArea, s = n.getState(), u = s.width, l = s.height, f = s.renderPoses, d = o ? st("area", "pass") : st("area");
    if (a)
      return [
        t.createElement("div", { key: "area", ref: Me(n, "areaElement"), className: d }),
        Tf(t)
      ];
    if (!e || !i)
      return [];
    var p = Lu([0, 0], [u, 0], [0, l], [u, l], f[0], f[1], f[2], f[3]), c = p.length ? Yo(p, !0) : "none";
    return [
      t.createElement("div", { key: "area", ref: Me(n, "areaElement"), className: d, style: {
        top: "0px",
        left: "0px",
        width: "".concat(u, "px"),
        height: "".concat(l, "px"),
        transformOrigin: "0 0",
        transform: c
      } }),
      Tf(t)
    ];
  },
  dragStart: function(n, t) {
    var r = t.datas, e = t.clientX, i = t.clientY, a = t.inputEvent;
    if (!a)
      return !1;
    r.isDragArea = !1;
    var o = n.areaElement, s = n.state, u = s.moveableClientRect, l = s.renderPoses, f = s.rootMatrix, d = s.is3d, p = u.left, c = u.top, h = Jr(l), v = h.left, g = h.top, _ = h.width, m = h.height, y = d ? 4 : 3, b = R(ci(f, [e - p, i - c], y), 2), x = b[0], S = b[1];
    x -= v, S -= g;
    var C = [
      { left: v, top: g, width: _, height: S - 10 },
      { left: v, top: g, width: x - 10, height: m },
      { left: v, top: g + S + 10, width: _, height: m - S - 10 },
      { left: v + x + 10, top: g, width: _ - x - 10, height: m }
    ], w = [].slice.call(o.nextElementSibling.children);
    C.forEach(function(D, T) {
      w[T].style.cssText = "left: ".concat(D.left, "px;top: ").concat(D.top, "px; width: ").concat(D.width, "px; height: ").concat(D.height, "px;");
    }), Ic(o, op), s.disableNativeEvent = !0;
  },
  drag: function(n, t) {
    var r = t.datas, e = t.inputEvent;
    if (this.enableNativeEvent(n), !e)
      return !1;
    r.isDragArea || (r.isDragArea = !0, cs(n));
  },
  dragEnd: function(n, t) {
    this.enableNativeEvent(n);
    var r = t.inputEvent, e = t.datas;
    if (!r)
      return !1;
    e.isDragArea || cs(n);
  },
  dragGroupStart: function(n, t) {
    return this.dragStart(n, t);
  },
  dragGroup: function(n, t) {
    return this.drag(n, t);
  },
  dragGroupEnd: function(n, t) {
    return this.dragEnd(n, t);
  },
  unset: function(n) {
    cs(n), n.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(n) {
    var t = n.state;
    t.disableNativeEvent && Mc(function() {
      t.disableNativeEvent = !1;
    });
  }
}, E1 = Ta("origin", {
  props: ["origin", "svgOrigin"],
  render: function(n, t) {
    var r = n.props, e = r.zoom, i = r.svgOrigin, a = r.groupable, o = n.getState(), s = o.beforeOrigin, u = o.rotation, l = o.svg, f = o.allMatrix, d = o.is3d, p = o.left, c = o.top, h = o.offsetWidth, v = o.offsetHeight, g;
    if (!a && l && i) {
      var _ = R(al(i, h, v), 2), m = _[0], y = _[1], b = d ? 4 : 3, x = Lt(f, [m, y], b);
      g = _o(u, e, lt(x, [p, c]));
    } else
      g = _o(u, e, s);
    return [
      t.createElement("div", { className: st("control", "origin"), style: g, key: "beforeOrigin" })
    ];
  }
});
function T1(n) {
  var t = n.scrollContainer;
  return [
    t.scrollLeft,
    t.scrollTop
  ];
}
var M1 = {
  name: "scrollable",
  canPinch: !0,
  props: [
    "scrollable",
    "scrollContainer",
    "scrollThreshold",
    "scrollThrottleTime",
    "getScrollPosition",
    "scrollOptions"
  ],
  events: [
    "scroll",
    "scrollGroup"
  ],
  dragRelation: "strong",
  dragStart: function(n, t) {
    var r = n.props, e = r.scrollContainer, i = e === void 0 ? n.getContainer() : e, a = r.scrollOptions, o = new ug(), s = ge(i, !0);
    t.datas.dragScroll = o, n.state.dragScroll = o;
    var u = t.isControl ? "controlGesto" : "targetGesto", l = t.targets;
    o.on("scroll", function(f) {
      var d = f.container, p = f.direction, c = vt(n, t, {
        scrollContainer: d,
        direction: p
      }), h = l ? "onScrollGroup" : "onScroll";
      l && (c.targets = l), et(n, h, c);
    }).on("move", function(f) {
      var d = f.offsetX, p = f.offsetY, c = f.inputEvent;
      n[u].scrollBy(d, p, c.inputEvent, !1);
    }).on("scrollDrag", function(f) {
      var d = f.next;
      d(n[u].getCurrentEvent());
    }), o.dragStart(t, P({ container: s }, a));
  },
  checkScroll: function(n, t) {
    var r = t.datas.dragScroll;
    if (r) {
      var e = n.props, i = e.scrollContainer, a = i === void 0 ? n.getContainer() : i, o = e.scrollThreshold, s = o === void 0 ? 0 : o, u = e.scrollThrottleTime, l = u === void 0 ? 0 : u, f = e.getScrollPosition, d = f === void 0 ? T1 : f, p = e.scrollOptions;
      return r.drag(t, P({ container: a, threshold: s, throttleTime: l, getScrollPosition: function(c) {
        return d({ scrollContainer: c.container, direction: c.direction });
      } }, p)), !0;
    }
  },
  drag: function(n, t) {
    return this.checkScroll(n, t);
  },
  dragEnd: function(n, t) {
    t.datas.dragScroll.dragEnd(), t.datas.dragScroll = null;
  },
  dragControlStart: function(n, t) {
    return this.dragStart(n, P(P({}, t), { isControl: !0 }));
  },
  dragControl: function(n, t) {
    return this.drag(n, t);
  },
  dragControlEnd: function(n, t) {
    return this.dragEnd(n, t);
  },
  dragGroupStart: function(n, t) {
    return this.dragStart(n, P(P({}, t), { targets: n.props.targets }));
  },
  dragGroup: function(n, t) {
    return this.drag(n, P(P({}, t), { targets: n.props.targets }));
  },
  dragGroupEnd: function(n, t) {
    return this.dragEnd(n, P(P({}, t), { targets: n.props.targets }));
  },
  dragGroupControlStart: function(n, t) {
    return this.dragStart(n, P(P({}, t), { targets: n.props.targets, isControl: !0 }));
  },
  dragGroupControl: function(n, t) {
    return this.drag(n, P(P({}, t), { targets: n.props.targets }));
  },
  dragGroupControEnd: function(n, t) {
    return this.dragEnd(n, P(P({}, t), { targets: n.props.targets }));
  },
  unset: function(n) {
    var t, r = n.state;
    (t = r.dragScroll) === null || t === void 0 || t.dragEnd(), r.dragScroll = null;
  }
}, up = {
  name: "",
  props: [
    "target",
    "dragTargetSelf",
    "dragTarget",
    "dragContainer",
    "container",
    "warpSelf",
    "rootContainer",
    "useResizeObserver",
    "useMutationObserver",
    "zoom",
    "dragFocusedInput",
    "transformOrigin",
    "ables",
    "className",
    "pinchThreshold",
    "pinchOutside",
    "triggerAblesSimultaneously",
    "checkInput",
    "cspNonce",
    "translateZ",
    "hideDefaultLines",
    "props",
    "flushSync",
    "stopPropagation",
    "preventClickEventOnDrag",
    "preventClickDefault",
    "viewContainer",
    "persistData",
    "useAccuratePosition",
    "firstRenderState",
    "linePadding",
    "controlPadding",
    "preventDefault",
    "preventRightClick",
    "preventWheelClick",
    "requestStyles"
  ],
  events: [
    "changeTargets"
  ]
}, O1 = Ta("padding", {
  props: ["padding"],
  render: function(n, t) {
    var r = n.props;
    if (r.dragArea)
      return [];
    var e = ap(r.padding || {}), i = e.left, a = e.top, o = e.right, s = e.bottom, u = n.getState(), l = u.renderPoses, f = u.pos1, d = u.pos2, p = u.pos3, c = u.pos4, h = [f, d, p, c], v = [];
    return i > 0 && v.push([0, 2]), a > 0 && v.push([0, 1]), o > 0 && v.push([1, 3]), s > 0 && v.push([2, 3]), v.map(function(g, _) {
      var m = R(g, 2), y = m[0], b = m[1], x = h[y], S = h[b], C = l[y], w = l[b], D = Lu([0, 0], [100, 0], [0, 100], [100, 100], x, S, C, w);
      if (D.length)
        return t.createElement("div", { key: "padding".concat(_), className: st("padding"), style: {
          transform: Yo(D, !0)
        } });
    });
  }
}), Mf = ["nw", "ne", "se", "sw"];
function $a(n, t) {
  var r = n[0] + n[1], e = r > t ? t / r : 1;
  return n[0] *= e, n[1] = t - n[1] * e, n;
}
var P1 = [1, 2, 5, 6], R1 = [0, 3, 4, 7], hn = [1, -1, -1, 1], gn = [1, 1, -1, -1];
function ol(n, t, r, e, i, a, o, s) {
  i === void 0 && (i = 0), a === void 0 && (a = 0), o === void 0 && (o = r), s === void 0 && (s = e);
  var u = [], l = !1, f = n.filter(function(p) {
    return !p.virtual;
  }), d = f.map(function(p) {
    var c = p.horizontal, h = p.vertical, v = p.pos;
    if (h && !l && (l = !0, u.push("/")), l) {
      var g = Math.max(0, h === 1 ? v[1] - a : s - v[1]);
      return u.push(ne(g, e, t)), g;
    } else {
      var g = Math.max(0, c === 1 ? v[0] - i : o - v[0]);
      return u.push(ne(g, r, t)), g;
    }
  });
  return {
    radiusPoses: f,
    styles: u,
    raws: d
  };
}
function lp(n) {
  for (var t = [0, 0], r = [0, 0], e = n.length, i = 0; i < e; ++i) {
    var a = n[i];
    a.sub && (a.horizontal && (t[1] === 0 && (t[0] = i), t[1] = i - t[0] + 1, r[0] = i + 1), a.vertical && (r[1] === 0 && (r[0] = i), r[1] = i - r[0] + 1));
  }
  return {
    horizontalRange: t,
    verticalRange: r
  };
}
function fp(n, t, r, e, i, a, o) {
  var s, u, l, f;
  a === void 0 && (a = [0, 0]), o === void 0 && (o = !1);
  var d = n.indexOf("/"), p = (d > -1 ? n.slice(0, d) : n).length, c = n.slice(0, p), h = n.slice(p + 1), v = c.length, g = h.length, _ = g > 0, m = R(c, 4), y = m[0], b = y === void 0 ? "0px" : y, x = m[1], S = x === void 0 ? b : x, C = m[2], w = C === void 0 ? b : C, D = m[3], T = D === void 0 ? S : D, O = R(h, 4), M = O[0], E = M === void 0 ? b : M, I = O[1], k = I === void 0 ? _ ? E : S : I, B = O[2], F = B === void 0 ? _ ? E : w : B, G = O[3], X = G === void 0 ? _ ? k : T : G, W = [b, S, w, T].map(function(q) {
    return Ot(q, t);
  }), A = [E, k, F, X].map(function(q) {
    return Ot(q, r);
  }), Y = W.slice(), H = A.slice();
  s = R($a([Y[0], Y[1]], t), 2), Y[0] = s[0], Y[1] = s[1], u = R($a([Y[3], Y[2]], t), 2), Y[3] = u[0], Y[2] = u[1], l = R($a([H[0], H[3]], r), 2), H[0] = l[0], H[3] = l[1], f = R($a([H[1], H[2]], r), 2), H[1] = f[0], H[2] = f[1];
  var L = o ? Y : Y.slice(0, Math.max(a[0], v)), U = o ? H : H.slice(0, Math.max(a[1], g));
  return j(j([], R(L.map(function(q, tt) {
    var J = Mf[tt];
    return {
      virtual: tt >= v,
      horizontal: hn[tt],
      vertical: 0,
      pos: [e + q, i + (gn[tt] === -1 ? r : 0)],
      sub: !0,
      raw: W[tt],
      direction: J
    };
  })), !1), R(U.map(function(q, tt) {
    var J = Mf[tt];
    return {
      virtual: tt >= g,
      horizontal: 0,
      vertical: gn[tt],
      pos: [e + (hn[tt] === -1 ? t : 0), i + q],
      sub: !0,
      raw: A[tt],
      direction: J
    };
  })), !1);
}
function I1(n, t, r, e, i) {
  i === void 0 && (i = t.length);
  var a = lp(n.slice(e)), o = a.horizontalRange, s = a.verticalRange, u = r - e, l = 0;
  if (u === 0)
    l = i;
  else if (u > 0 && u < o[1])
    l = o[1] - u;
  else if (u >= s[0])
    l = s[0] + s[1] - u;
  else
    return;
  n.splice(r, l), t.splice(r, l);
}
function k1(n, t, r, e, i, a, o, s, u, l, f) {
  l === void 0 && (l = 0), f === void 0 && (f = 0);
  var d = lp(n.slice(r)), p = d.horizontalRange, c = d.verticalRange;
  if (e > -1)
    for (var h = hn[e] === 1 ? a - l : s - a, v = p[1]; v <= e; ++v) {
      var g = gn[v] === 1 ? f : u, _ = 0;
      if (e === v ? _ = a : v === 0 ? _ = l + h : hn[v] === -1 && (_ = s - (t[r][0] - l)), n.splice(r + v, 0, {
        horizontal: hn[v],
        vertical: 0,
        pos: [_, g]
      }), t.splice(r + v, 0, [_, g]), v === 0)
        break;
    }
  else if (i > -1) {
    var m = gn[i] === 1 ? o - f : u - o;
    if (p[1] === 0 && c[1] === 0) {
      var y = [
        l + m,
        f
      ];
      n.push({
        horizontal: hn[0],
        vertical: 0,
        pos: y
      }), t.push(y);
    }
    for (var b = c[0], v = c[1]; v <= i; ++v) {
      var _ = hn[v] === 1 ? l : s, g = 0;
      if (i === v ? g = o : v === 0 ? g = f + m : gn[v] === 1 ? g = t[r + b][1] : gn[v] === -1 && (g = u - (t[r + b][1] - f)), n.push({
        horizontal: 0,
        vertical: gn[v],
        pos: [_, g]
      }), t.push([_, g]), v === 0)
        break;
    }
  }
}
function z1(n, t) {
  t === void 0 && (t = n.map(function(i) {
    return i.raw;
  }));
  var r = n.map(function(i, a) {
    return i.horizontal ? t[a] : null;
  }).filter(function(i) {
    return i != null;
  }), e = n.map(function(i, a) {
    return i.vertical ? t[a] : null;
  }).filter(function(i) {
    return i != null;
  });
  return {
    horizontals: r,
    verticals: e
  };
}
var A1 = [
  [0, -1, "n"],
  [1, 0, "e"]
], B1 = [
  [-1, -1, "nw"],
  [0, -1, "n"],
  [1, -1, "ne"],
  [1, 0, "e"],
  [1, 1, "se"],
  [0, 1, "s"],
  [-1, 1, "sw"],
  [-1, 0, "w"]
];
function sl(n, t, r) {
  var e = n.props.clipRelative, i = n.state, a = i.width, o = i.height, s = t, u = s.type, l = s.poses, f = u === "rect", d = u === "circle";
  if (u === "polygon")
    return r.map(function(S) {
      return "".concat(ne(S[0], a, e), " ").concat(ne(S[1], o, e));
    });
  if (f || u === "inset") {
    var p = r[1][1], c = r[3][0], h = r[7][0], v = r[5][1];
    if (f)
      return [
        p,
        c,
        v,
        h
      ].map(function(S) {
        return "".concat(S, "px");
      });
    var g = [p, a - c, o - v, h].map(function(S, C) {
      return ne(S, C % 2 ? a : o, e);
    });
    if (r.length > 8) {
      var _ = R(lt(r[4], r[0]), 2), m = _[0], y = _[1];
      g.push.apply(g, j(["round"], R(ol(l.slice(8).map(function(S, C) {
        return P(P({}, S), { pos: r[C] });
      }), e, m, y, h, p, c, v).styles), !1));
    }
    return g;
  } else if (d || u === "ellipse") {
    var b = r[0], x = ne(V(r[1][1] - b[1]), d ? Math.sqrt((a * a + o * o) / 2) : o, e), g = d ? [x] : [ne(V(r[2][0] - b[0]), a, e), x];
    return g.push("at", ne(b[0], a, e), ne(b[1], o, e)), g;
  }
}
function xo(n, t, r, e) {
  var i = [e, (e + t) / 2, t], a = [n, (n + r) / 2, r];
  return B1.map(function(o) {
    var s = R(o, 3), u = s[0], l = s[1], f = s[2], d = i[u + 1], p = a[l + 1];
    return {
      vertical: V(l),
      horizontal: V(u),
      direction: f,
      pos: [d, p]
    };
  });
}
function cp(n) {
  var t = [1 / 0, -1 / 0], r = [1 / 0, -1 / 0];
  return n.forEach(function(e) {
    var i = e.pos;
    t[0] = Math.min(t[0], i[0]), t[1] = Math.max(t[1], i[0]), r[0] = Math.min(r[0], i[1]), r[1] = Math.max(r[1], i[1]);
  }), [
    V(t[1] - t[0]),
    V(r[1] - r[0])
  ];
}
function Of(n, t, r, e, i) {
  var a, o, s, u, l, f, d, p, c;
  if (n) {
    var h = i;
    if (!h) {
      var v = Ir(n), g = v("clipPath");
      h = g !== "none" ? g : v("clip");
    }
    if (!((!h || h === "none" || h === "auto") && (h = e, !h))) {
      var _ = Tc(h), m = _.prefix, y = m === void 0 ? h : m, b = _.value, x = b === void 0 ? "" : b, S = y === "circle", C = " ";
      if (y === "polygon") {
        var w = mn(x || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        C = ",";
        var D = w.map(function(Ht) {
          var Et = R(Ht.split(" "), 2), er = Et[0], At = Et[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              Ot(er, t),
              Ot(At, r)
            ]
          };
        }), T = Mn(D.map(function(Ht) {
          return Ht.pos;
        }));
        return {
          type: y,
          clipText: h,
          poses: D,
          splitter: C,
          left: T.minX,
          right: T.maxX,
          top: T.minY,
          bottom: T.maxY
        };
      } else if (S || y === "ellipse") {
        var O = "", M = "", E = 0, I = 0, w = Ke(x);
        if (S) {
          var k = "";
          a = R(w, 4), o = a[0], k = o === void 0 ? "50%" : o, s = a[2], O = s === void 0 ? "50%" : s, u = a[3], M = u === void 0 ? "50%" : u, E = Ot(k, Math.sqrt((t * t + r * r) / 2)), I = E;
        } else {
          var B = "", F = "";
          l = R(w, 5), f = l[0], B = f === void 0 ? "50%" : f, d = l[1], F = d === void 0 ? "50%" : d, p = l[3], O = p === void 0 ? "50%" : p, c = l[4], M = c === void 0 ? "50%" : c, E = Ot(B, t), I = Ot(F, r);
        }
        var G = [
          Ot(O, t),
          Ot(M, r)
        ], D = j([
          {
            vertical: 1,
            horizontal: 1,
            pos: G,
            direction: "nesw"
          }
        ], R(A1.slice(0, S ? 1 : 2).map(function(er) {
          return {
            vertical: V(er[1]),
            horizontal: er[0],
            direction: er[2],
            sub: !0,
            pos: [
              G[0] + er[0] * E,
              G[1] + er[1] * I
            ]
          };
        })), !1);
        return {
          type: y,
          clipText: h,
          radiusX: E,
          radiusY: I,
          left: G[0] - E,
          top: G[1] - I,
          right: G[0] + E,
          bottom: G[1] + I,
          poses: D,
          splitter: C
        };
      } else if (y === "inset") {
        var w = Ke(x || "0 0 0 0"), X = w.indexOf("round"), W = (X > -1 ? w.slice(0, X) : w).length, A = w.slice(W + 1), Y = R(w.slice(0, W), 4), H = Y[0], L = Y[1], U = L === void 0 ? H : L, q = Y[2], tt = q === void 0 ? H : q, J = Y[3], ft = J === void 0 ? U : J, dt = R([H, tt].map(function(er) {
          return Ot(er, r);
        }), 2), Z = dt[0], nt = dt[1], xt = R([ft, U].map(function(er) {
          return Ot(er, t);
        }), 2), at = xt[0], Q = xt[1], ht = t - Q, gt = r - nt, _t = fp(A, ht - at, gt - Z, at, Z), D = j(j([], R(xo(Z, ht, gt, at)), !1), R(_t), !1);
        return {
          type: "inset",
          clipText: h,
          poses: D,
          top: Z,
          left: at,
          right: ht,
          bottom: gt,
          radius: A,
          splitter: C
        };
      } else if (y === "rect") {
        var w = mn(x || "0px, ".concat(t, "px, ").concat(r, "px, 0px"));
        C = ",";
        var pt = R(w.map(function(nr) {
          var pr = ya(nr).value;
          return pr;
        }), 4), St = pt[0], Q = pt[1], nt = pt[2], at = pt[3], D = xo(St, Q, nt, at);
        return {
          type: "rect",
          clipText: h,
          poses: D,
          top: St,
          right: Q,
          bottom: nt,
          left: at,
          values: w,
          splitter: C
        };
      }
    }
  }
}
function G1(n, t, r, e, i) {
  var a = n[t], o = a.direction, s = a.sub, u = n.map(function() {
    return [0, 0];
  }), l = o ? o.split("") : [];
  if (e && t < 8) {
    var f = l.filter(function(E) {
      return E === "w" || E === "e";
    }), d = l.filter(function(E) {
      return E === "n" || E === "s";
    }), p = f[0], c = d[0];
    u[t] = r;
    var h = R(cp(n), 2), v = h[0], g = h[1], _ = v && g ? v / g : 0;
    if (_ && i) {
      var m = (t + 4) % 8, y = n[m].pos, b = [0, 0];
      o.indexOf("w") > -1 ? b[0] = -1 : o.indexOf("e") > -1 && (b[0] = 1), o.indexOf("n") > -1 ? b[1] = -1 : o.indexOf("s") > -1 && (b[1] = 1);
      var x = ep([v, g], r, _, b, !0), S = v + x[0], C = g + x[1], w = y[1], D = y[1], T = y[0], O = y[0];
      b[0] === -1 ? T = O - S : b[0] === 1 ? O = T + S : (T = T - S / 2, O = O + S / 2), b[1] === -1 ? w = D - C : (b[1] === 1 || (w = D - C / 2), D = w + C);
      var M = xo(w, O, D, T);
      n.forEach(function(E, I) {
        u[I][0] = M[I].pos[0] - E.pos[0], u[I][1] = M[I].pos[1] - E.pos[1];
      });
    } else
      n.forEach(function(E, I) {
        var k = E.direction;
        k && (k.indexOf(p) > -1 && (u[I][0] = r[0]), k.indexOf(c) > -1 && (u[I][1] = r[1]));
      }), p && (u[1][0] = r[0] / 2, u[5][0] = r[0] / 2), c && (u[3][1] = r[1] / 2, u[7][1] = r[1] / 2);
  } else
    o && !s ? l.forEach(function(E) {
      var I = E === "n" || E === "s";
      n.forEach(function(k, B) {
        var F = k.direction, G = k.horizontal, X = k.vertical;
        !F || F.indexOf(E) === -1 || (u[B] = [
          I || !G ? 0 : r[0],
          !I || !X ? 0 : r[1]
        ]);
      });
    }) : u[t] = r;
  return u;
}
function F1(n, t) {
  var r = R(vd(n, t), 2), e = r[0], i = r[1], a = t.datas, o = a.clipPath, s = a.clipIndex, u = o, l = u.type, f = u.poses, d = u.splitter, p = f.map(function(m) {
    return m.pos;
  });
  if (l === "polygon")
    p.splice(s, 0, [e, i]);
  else if (l === "inset") {
    var c = P1.indexOf(s), h = R1.indexOf(s), v = f.length;
    if (k1(f, p, 8, c, h, e, i, p[4][0], p[4][1], p[0][0], p[0][1]), v === f.length)
      return;
  } else
    return;
  var g = sl(n, o, p), _ = "".concat(l, "(").concat(g.join(d), ")");
  et(n, "onClip", vt(n, t, P({ clipEventType: "added", clipType: l, poses: p, clipStyles: g, clipStyle: _, distX: 0, distY: 0 }, wr({
    clipPath: _
  }, t))));
}
function N1(n, t) {
  var r = t.datas, e = r.clipPath, i = r.clipIndex, a = e, o = a.type, s = a.poses, u = a.splitter, l = s.map(function(c) {
    return c.pos;
  }), f = l.length;
  if (o === "polygon")
    s.splice(i, 1), l.splice(i, 1);
  else if (o === "inset") {
    if (i < 8 || (I1(s, l, i, 8, f), f === s.length))
      return;
  } else
    return;
  var d = sl(n, e, l), p = "".concat(o, "(").concat(d.join(u), ")");
  et(n, "onClip", vt(n, t, P({ clipEventType: "removed", clipType: o, poses: l, clipStyles: d, clipStyle: p, distX: 0, distY: 0 }, wr({
    clipPath: p
  }, t))));
}
var L1 = {
  name: "clippable",
  props: [
    "clippable",
    "defaultClipPath",
    "customClipPath",
    "keepRatio",
    "clipRelative",
    "clipArea",
    "dragWithClip",
    "clipTargetBounds",
    "clipVerticalGuidelines",
    "clipHorizontalGuidelines",
    "clipSnapThreshold"
  ],
  events: [
    "clipStart",
    "clip",
    "clipEnd"
  ],
  css: [
    `.control.clip-control {
background: #6d6;
cursor: pointer;
}
.control.clip-control.clip-radius {
background: #d66;
}
.line.clip-line {
background: #6e6;
cursor: move;
z-index: 1;
}
.clip-area {
position: absolute;
top: 0;
left: 0;
}
.clip-ellipse {
position: absolute;
cursor: move;
border: 1px solid #6d6;
border: var(--zoompx) solid #6d6;
border-radius: 50%;
transform-origin: 0px 0px;
}`,
    `:host {
--bounds-color: #d66;
}`,
    `.guideline {
pointer-events: none;
z-index: 2;
}`,
    `.line.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}`
  ],
  render: function(n, t) {
    var r = n.props, e = r.customClipPath, i = r.defaultClipPath, a = r.clipArea, o = r.zoom, s = r.groupable, u = n.getState(), l = u.target, f = u.width, d = u.height, p = u.allMatrix, c = u.is3d, h = u.left, v = u.top, g = u.pos1, _ = u.pos2, m = u.pos3, y = u.pos4, b = u.clipPathState, x = u.snapBoundInfos, S = u.rotation;
    if (!l || s)
      return [];
    var C = Of(l, f, d, i || "inset", b || e);
    if (!C)
      return [];
    var w = c ? 4 : 3, D = C.type, T = C.poses, O = T.map(function(Q) {
      var ht = Lt(p, Q.pos, w);
      return [
        ht[0] - h,
        ht[1] - v
      ];
    }), M = [], E = [], I = D === "rect", k = D === "inset", B = D === "polygon";
    if (I || k || B) {
      var F = k ? O.slice(0, 8) : O;
      E = F.map(function(Q, ht) {
        var gt = ht === 0 ? F[F.length - 1] : F[ht - 1], _t = jt(gt, Q), pt = $d(gt, Q);
        return t.createElement("div", { key: "clipLine".concat(ht), className: st("line", "clip-line", "snap-control"), "data-clip-index": ht, style: {
          width: "".concat(pt, "px"),
          transform: "translate(".concat(gt[0], "px, ").concat(gt[1], "px) rotate(").concat(_t, "rad) scaleY(").concat(o, ")")
        } });
      });
    }
    if (M = O.map(function(Q, ht) {
      return t.createElement("div", { key: "clipControl".concat(ht), className: st("control", "clip-control", "snap-control"), "data-clip-index": ht, style: {
        transform: "translate(".concat(Q[0], "px, ").concat(Q[1], "px) rotate(").concat(S, "rad) scale(").concat(o, ")")
      } });
    }), k && M.push.apply(M, j([], R(O.slice(8).map(function(Q, ht) {
      return t.createElement("div", { key: "clipRadiusControl".concat(ht), className: st("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + ht, style: {
        transform: "translate(".concat(Q[0], "px, ").concat(Q[1], "px) rotate(").concat(S, "rad) scale(").concat(o, ")")
      } });
    })), !1)), D === "circle" || D === "ellipse") {
      var G = C.left, X = C.top, W = C.radiusX, A = C.radiusY, Y = R(lt(Lt(p, [G, X], w), Lt(p, [0, 0], w)), 2), H = Y[0], L = Y[1], U = "none";
      if (!a) {
        for (var q = Math.max(10, W / 5, A / 5), tt = [], J = 0; J <= q; ++J) {
          var ft = Math.PI * 2 / q * J;
          tt.push([
            W + (W - o) * Math.cos(ft),
            A + (A - o) * Math.sin(ft)
          ]);
        }
        tt.push([W, -2]), tt.push([-2, -2]), tt.push([-2, A * 2 + 2]), tt.push([W * 2 + 2, A * 2 + 2]), tt.push([W * 2 + 2, -2]), tt.push([W, -2]), U = "polygon(".concat(tt.map(function(Q) {
          return "".concat(Q[0], "px ").concat(Q[1], "px");
        }).join(", "), ")");
      }
      M.push(t.createElement("div", { key: "clipEllipse", className: st("clip-ellipse", "snap-control"), style: {
        width: "".concat(W * 2, "px"),
        height: "".concat(A * 2, "px"),
        clipPath: U,
        transform: "translate(".concat(-h + H, "px, ").concat(-v + L, "px) ").concat(Yo(p))
      } }));
    }
    if (a) {
      var dt = Jr(j([g, _, m, y], R(O), !1)), Z = dt.width, nt = dt.height, xt = dt.left, at = dt.top;
      if (B || I || k) {
        var tt = k ? O.slice(0, 8) : O;
        M.push(t.createElement("div", { key: "clipArea", className: st("clip-area", "snap-control"), style: {
          width: "".concat(Z, "px"),
          height: "".concat(nt, "px"),
          transform: "translate(".concat(xt, "px, ").concat(at, "px)"),
          clipPath: "polygon(".concat(tt.map(function(ht) {
            return "".concat(ht[0] - xt, "px ").concat(ht[1] - at, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return x && ["vertical", "horizontal"].forEach(function(Q) {
      var ht = x[Q], gt = Q === "horizontal";
      ht.isSnap && E.push.apply(E, j([], R(ht.snap.posInfos.map(function(_t, pt) {
        var St = _t.pos, Ht = lt(Lt(p, gt ? [0, St] : [St, 0], w), [h, v]), Et = lt(Lt(p, gt ? [f, St] : [St, d], w), [h, v]);
        return ua(t, "", Ht, Et, o, "clip".concat(Q, "snap").concat(pt), "guideline");
      })), !1)), ht.isBound && E.push.apply(E, j([], R(ht.bounds.map(function(_t, pt) {
        var St = _t.pos, Ht = lt(Lt(p, gt ? [0, St] : [St, 0], w), [h, v]), Et = lt(Lt(p, gt ? [f, St] : [St, d], w), [h, v]);
        return ua(t, "", Ht, Et, o, "clip".concat(Q, "bounds").concat(pt), "guideline", "bounds", "bold");
      })), !1));
    }), j(j([], R(M), !1), R(E), !1);
  },
  dragControlCondition: function(n, t) {
    return t.inputEvent && (t.inputEvent.target.getAttribute("class") || "").indexOf("clip") > -1;
  },
  dragStart: function(n, t) {
    var r = n.props, e = r.dragWithClip, i = e === void 0 ? !0 : e;
    return i ? !1 : this.dragControlStart(n, t);
  },
  drag: function(n, t) {
    return this.dragControl(n, P(P({}, t), { isDragTarget: !0 }));
  },
  dragEnd: function(n, t) {
    return this.dragControlEnd(n, t);
  },
  dragControlStart: function(n, t) {
    var r = n.state, e = n.props, i = e.defaultClipPath, a = e.customClipPath, o = r.target, s = r.width, u = r.height, l = t.inputEvent ? t.inputEvent.target : null, f = l && l.getAttribute("class") || "", d = t.datas, p = Of(o, s, u, i || "inset", a);
    if (!p)
      return !1;
    var c = p.clipText, h = p.type, v = p.poses, g = et(n, "onClipStart", vt(n, t, {
      clipType: h,
      clipStyle: c,
      poses: v.map(function(_) {
        return _.pos;
      })
    }));
    return g === !1 ? (d.isClipStart = !1, !1) : (d.isControl = f && f.indexOf("clip-control") > -1, d.isLine = f.indexOf("clip-line") > -1, d.isArea = f.indexOf("clip-area") > -1 || f.indexOf("clip-ellipse") > -1, d.clipIndex = l ? parseInt(l.getAttribute("data-clip-index"), 10) : -1, d.clipPath = p, d.isClipStart = !0, r.clipPathState = c, Rn(n, t), !0);
  },
  dragControl: function(n, t) {
    var r, e, i, a = t.datas, o = t.originalDatas, s = t.isDragTarget;
    if (!a.isClipStart)
      return !1;
    var u = a, l = u.isControl, f = u.isLine, d = u.isArea, p = u.clipIndex, c = u.clipPath;
    if (!c)
      return !1;
    var h = On(n.props, "clippable"), v = h.keepRatio, g = 0, _ = 0, m = o.draggable, y = xe(t);
    s && m ? (r = R(m.prevBeforeDist, 2), g = r[0], _ = r[1]) : (e = R(y, 2), g = e[0], _ = e[1]);
    var b = [g, _], x = n.state, S = x.width, C = x.height, w = !d && !l && !f, D = c.type, T = c.poses, O = c.splitter, M = T.map(function(Dt) {
      return Dt.pos;
    });
    w && (g = -g, _ = -_);
    var E = !l || T[p].direction === "nesw", I = D === "inset" || D === "rect", k = T.map(function() {
      return [0, 0];
    });
    if (l && !E) {
      var B = T[p], F = B.horizontal, G = B.vertical, X = [
        g * V(F),
        _ * V(G)
      ];
      k = G1(T, p, X, I, v);
    } else
      E && (k = M.map(function() {
        return [g, _];
      }));
    var W = M.map(function(Dt, Rt) {
      return Ct(Dt, k[Rt]);
    }), A = j([], R(W), !1);
    x.snapBoundInfos = null;
    var Y = c.type === "circle", H = c.type === "ellipse";
    if (Y || H) {
      var L = Jr(W), U = V(L.bottom - L.top), q = V(H ? L.right - L.left : U), tt = W[0][1] + U, J = W[0][0] - q, ft = W[0][0] + q;
      Y && (A.push([ft, L.bottom]), k.push([1, 0])), A.push([L.left, tt]), k.push([0, 1]), A.push([J, L.bottom]), k.push([1, 0]);
    }
    var dt = Ld((h.clipHorizontalGuidelines || []).map(function(Dt) {
      return Ot("".concat(Dt), C);
    }), (h.clipVerticalGuidelines || []).map(function(Dt) {
      return Ot("".concat(Dt), S);
    }), S, C), Z = [], nt = [];
    if (Y || H)
      Z = [A[4][0], A[2][0]], nt = [A[1][1], A[3][1]];
    else if (I) {
      var xt = [A[0], A[2], A[4], A[6]], at = [k[0], k[2], k[4], k[6]];
      Z = xt.filter(function(Dt, Rt) {
        return at[Rt][0];
      }).map(function(Dt) {
        return Dt[0];
      }), nt = xt.filter(function(Dt, Rt) {
        return at[Rt][1];
      }).map(function(Dt) {
        return Dt[1];
      });
    } else
      Z = A.filter(function(Dt, Rt) {
        return k[Rt][0];
      }).map(function(Dt) {
        return Dt[0];
      }), nt = A.filter(function(Dt, Rt) {
        return k[Rt][1];
      }).map(function(Dt) {
        return Dt[1];
      });
    var Q = [0, 0], ht = pf(dt, h.clipTargetBounds && { left: 0, top: 0, right: S, bottom: C }, Z, nt, 5, 5), gt = ht.horizontal, _t = ht.vertical, pt = gt.offset, St = _t.offset;
    if (gt.isBound && (Q[1] += pt), _t.isBound && (Q[0] += St), (H || Y) && k[0][0] === 0 && k[0][1] === 0) {
      var L = Jr(W), Ht = L.bottom - L.top, Et = H ? L.right - L.left : Ht, er = _t.isBound ? V(St) : _t.snapIndex === 0 ? -St : St, At = gt.isBound ? V(pt) : gt.snapIndex === 0 ? -pt : pt;
      Et -= er, Ht -= At, Y && (Ht = Id(_t, gt) > 0 ? Ht : Et, Et = Ht);
      var Xt = A[0];
      A[1][1] = Xt[1] - Ht, A[2][0] = Xt[0] + Et, A[3][1] = Xt[1] + Ht, A[4][0] = Xt[0] - Et;
    } else if (I && v && l) {
      var nr = R(cp(T), 2), pr = nr[0], zn = nr[1], Ra = pr && zn ? pr / zn : 0, Ei = T[p], An = Ei.direction || "", Ti = A[1][1], tt = A[5][1], J = A[7][0], ft = A[3][0];
      V(pt) <= V(St) ? pt = br(pt) * V(St) / Ra : St = br(St) * V(pt) * Ra, An.indexOf("w") > -1 ? J -= St : An.indexOf("e") > -1 ? ft -= St : (J += St / 2, ft -= St / 2), An.indexOf("n") > -1 ? Ti -= pt : An.indexOf("s") > -1 ? tt -= pt : (Ti += pt / 2, tt -= pt / 2);
      var Mi = xo(Ti, ft, tt, J);
      A.forEach(function(Pi, Ia) {
        var ot;
        ot = R(Mi[Ia].pos, 2), Pi[0] = ot[0], Pi[1] = ot[1];
      });
    } else
      A.forEach(function(Dt, Rt) {
        var sn = k[Rt];
        sn[0] && (Dt[0] -= St), sn[1] && (Dt[1] -= pt);
      });
    var Oi = sl(n, c, W), Ae = "".concat(D, "(").concat(Oi.join(O), ")");
    if (x.clipPathState = Ae, Y || H)
      Z = [A[4][0], A[2][0]], nt = [A[1][1], A[3][1]];
    else if (I) {
      var xt = [A[0], A[2], A[4], A[6]];
      Z = xt.map(function(Rt) {
        return Rt[0];
      }), nt = xt.map(function(Rt) {
        return Rt[1];
      });
    } else
      Z = A.map(function(Dt) {
        return Dt[0];
      }), nt = A.map(function(Dt) {
        return Dt[1];
      });
    if (x.snapBoundInfos = pf(dt, h.clipTargetBounds && { left: 0, top: 0, right: S, bottom: C }, Z, nt, 1, 1), m) {
      var an = x.is3d, qo = x.allMatrix, on = an ? 4 : 3, ee = Q;
      s && (ee = [
        b[0] + Q[0] - y[0],
        b[1] + Q[1] - y[1]
      ]), m.deltaOffset = Pt(qo, [ee[0], ee[1], 0, 0], on);
    }
    return et(n, "onClip", vt(n, t, P({ clipEventType: "changed", clipType: D, poses: W, clipStyle: Ae, clipStyles: Oi, distX: g, distY: _ }, wr((i = {}, i[D === "rect" ? "clip" : "clipPath"] = Ae, i), t)))), !0;
  },
  dragControlEnd: function(n, t) {
    this.unset(n);
    var r = t.isDrag, e = t.datas, i = t.isDouble, a = e.isLine, o = e.isClipStart, s = e.isControl;
    return o ? (et(n, "onClipEnd", Xr(n, t, {})), i && (s ? N1(n, t) : a && F1(n, t)), i || r) : !1;
  },
  unset: function(n) {
    n.state.clipPathState = "", n.state.snapBoundInfos = null;
  }
}, Y1 = {
  name: "originDraggable",
  props: [
    "originDraggable",
    "originRelative"
  ],
  events: [
    "dragOriginStart",
    "dragOrigin",
    "dragOriginEnd"
  ],
  css: [
    `:host[data-able-origindraggable] .control.origin {
pointer-events: auto;
}`
  ],
  dragControlCondition: function(n, t) {
    return t.isRequest ? t.requestAble === "originDraggable" : or(t.inputEvent.target, st("origin"));
  },
  dragControlStart: function(n, t) {
    var r = t.datas;
    Rn(n, t);
    var e = vt(n, t, {
      dragStart: yr.dragStart(n, new ui().dragStart([0, 0], t))
    }), i = et(n, "onDragOriginStart", e);
    return r.startOrigin = n.state.transformOrigin, r.startTargetOrigin = n.state.targetOrigin, r.prevOrigin = [0, 0], r.isDragOrigin = !0, i === !1 ? (r.isDragOrigin = !1, !1) : e;
  },
  dragControl: function(n, t) {
    var r = t.datas, e = t.isPinch, i = t.isRequest;
    if (!r.isDragOrigin)
      return !1;
    var a = R(xe(t), 2), o = a[0], s = a[1], u = n.state, l = u.width, f = u.height, d = u.offsetMatrix, p = u.targetMatrix, c = u.is3d, h = n.props.originRelative, v = h === void 0 ? !0 : h, g = c ? 4 : 3, _ = [o, s];
    if (i) {
      var m = t.distOrigin;
      (m[0] || m[1]) && (_ = m);
    }
    var y = Ct(r.startOrigin, _), b = Ct(r.startTargetOrigin, _), x = lt(_, r.prevOrigin), S = Oa(d, p, y, g), C = n.getRect(), w = Jr(In(S, l, f, g)), D = [
      C.left - w.left,
      C.top - w.top
    ];
    r.prevOrigin = _;
    var T = [
      ne(b[0], l, v),
      ne(b[1], f, v)
    ].join(" "), O = yr.drag(n, Ma(t, n.state, D, !!e, !1)), M = vt(n, t, P(P({ width: l, height: f, origin: y, dist: _, delta: x, transformOrigin: T, drag: O }, wr({
      transformOrigin: T,
      transform: O.transform
    }, t)), { afterTransform: O.transform }));
    return et(n, "onDragOrigin", M), M;
  },
  dragControlEnd: function(n, t) {
    var r = t.datas;
    return r.isDragOrigin ? (et(n, "onDragOriginEnd", Xr(n, t, {})), !0) : !1;
  },
  dragGroupControlCondition: function(n, t) {
    return this.dragControlCondition(n, t);
  },
  dragGroupControlStart: function(n, t) {
    var r = this.dragControlStart(n, t);
    return !!r;
  },
  dragGroupControl: function(n, t) {
    var r = this.dragControl(n, t);
    return r ? (n.transformOrigin = r.transformOrigin, !0) : !1;
  },
  /**
      * @method Moveable.OriginDraggable#request
      * @param {object} e - the OriginDraggable's request parameter
      * @param {number} [e.x] - x position
      * @param {number} [e.y] - y position
      * @param {number} [e.deltaX] - x number to move
      * @param {number} [e.deltaY] - y number to move
      * @param {array} [e.deltaOrigin] - left, top number to move transform-origin
      * @param {array} [e.origin] - transform-origin position
      * @param {number} [e.isInstant] - Whether to execute the request instantly
      * @return {Moveable.Requester} Moveable Requester
      * @example
  
      * // Instantly Request (requestStart - request - requestEnd)
      * // Use Relative Value
      * moveable.request("originDraggable", { deltaX: 10, deltaY: 10 }, true);
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 }, true);
      * // Use Transform Value
      * moveable.request("originDraggable", { deltaOrigin: [10, 0] }, true);
      * moveable.request("originDraggable", { origin: [100, 0] }, true);
      * // requestStart
      * const requester = moveable.request("originDraggable");
      *
      * // request
      * // Use Relative Value
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 });
      * moveable.request("originDraggable", { x: 220, y: 100 });
      * moveable.request("originDraggable", { x: 240, y: 100 });
      *
      * // requestEnd
      * requester.requestEnd();
      */
  request: function(n) {
    var t = {}, r = n.getRect(), e = 0, i = 0, a = r.transformOrigin, o = [0, 0];
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: t };
      },
      request: function(s) {
        return "deltaOrigin" in s ? (o[0] += s.deltaOrigin[0], o[1] += s.deltaOrigin[1]) : "origin" in s ? (o[0] = s.origin[0] - a[0], o[1] = s.origin[1] - a[1]) : ("x" in s ? e = s.x - r.left : "deltaX" in s && (e += s.deltaX), "y" in s ? i = s.y - r.top : "deltaY" in s && (i += s.deltaY)), { datas: t, distX: e, distY: i, distOrigin: o };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0 };
      }
    };
  }
};
function X1(n, t, r, e) {
  var i = n.filter(function(u) {
    var l = u.virtual, f = u.horizontal;
    return f && !l;
  }).length, a = n.filter(function(u) {
    var l = u.virtual, f = u.vertical;
    return f && !l;
  }).length, o = -1;
  if (t === 0 && (i === 0 ? o = 0 : i === 1 && (o = 1)), t === 2 && (i <= 2 ? o = 2 : i <= 3 && (o = 3)), t === 3 && (a === 0 ? o = 4 : a < 4 && (o = 7)), t === 1 && (a <= 1 ? o = 5 : a <= 2 && (o = 6)), !(o === -1 || !n[o].virtual)) {
    var s = n[o];
    W1(n, o), o < 4 ? s.pos[0] = r : s.pos[1] = e;
  }
}
function W1(n, t) {
  t < 4 ? n.slice(0, t + 1).forEach(function(r) {
    r.virtual = !1;
  }) : (n[0].virtual && (n[0].virtual = !1), n.slice(4, t + 1).forEach(function(r) {
    r.virtual = !1;
  }));
}
function H1(n, t) {
  t < 4 ? n.slice(t, 4).forEach(function(r) {
    r.virtual = !0;
  }) : n.slice(t).forEach(function(r) {
    r.virtual = !0;
  });
}
function Pf(n, t, r, e, i) {
  e === void 0 && (e = [0, 0]);
  var a = [];
  return !n || n === "0px" ? a = [] : a = Ke(n), fp(a, t, r, 0, 0, e, i);
}
function Rf(n, t, r, e, i) {
  var a = n.state, o = a.width, s = a.height, u = ol(i, n.props.roundRelative, o, s), l = u.raws, f = u.styles, d = u.radiusPoses, p = z1(d, l), c = p.horizontals, h = p.verticals, v = f.join(" ");
  a.borderRadiusState = v;
  var g = vt(n, t, P({ horizontals: c, verticals: h, borderRadius: v, width: o, height: s, delta: e, dist: r }, wr({
    borderRadius: v
  }, t)));
  return et(n, "onRound", g), g;
}
function If(n) {
  var t, r, e = n.getState().style, i = e.borderRadius || "";
  if (!i && n.props.groupable) {
    var a = n.moveables[0], o = n.getTargets()[0];
    o && ((a == null ? void 0 : a.props.target) === o ? (i = (r = (t = n.moveables[0]) === null || t === void 0 ? void 0 : t.state.style.borderRadius) !== null && r !== void 0 ? r : "", e.borderRadius = i) : (i = rl(o).borderRadius, e.borderRadius = i));
  }
  return i;
}
var V1 = {
  name: "roundable",
  props: [
    "roundable",
    "roundRelative",
    "minRoundControls",
    "maxRoundControls",
    "roundClickable",
    "roundPadding",
    "isDisplayShadowRoundControls"
  ],
  events: [
    "roundStart",
    "round",
    "roundEnd",
    "roundGroupStart",
    "roundGroup",
    "roundGroupEnd"
  ],
  css: [
    `.control.border-radius {
background: #d66;
cursor: pointer;
z-index: 3;
}`,
    `.control.border-radius.vertical {
background: #d6d;
z-index: 2;
}`,
    `.control.border-radius.virtual {
opacity: 0.5;
z-index: 1;
}`,
    `:host.round-line-clickable .line.direction {
cursor: pointer;
}`
  ],
  className: function(n) {
    var t = n.props.roundClickable;
    return t === !0 || t === "line" ? st("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(n, t) {
    var r = n.getState(), e = r.target, i = r.width, a = r.height, o = r.allMatrix, s = r.is3d, u = r.left, l = r.top, f = r.borderRadiusState, d = n.props, p = d.minRoundControls, c = p === void 0 ? [0, 0] : p, h = d.maxRoundControls, v = h === void 0 ? [4, 4] : h, g = d.zoom, _ = d.roundPadding, m = _ === void 0 ? 0 : _, y = d.isDisplayShadowRoundControls, b = d.groupable;
    if (!e)
      return null;
    var x = f || If(n), S = s ? 4 : 3, C = Pf(x, i, a, c, !0);
    if (!C)
      return null;
    var w = 0, D = 0, T = b ? [0, 0] : [u, l];
    return C.map(function(O, M) {
      var E = O.horizontal, I = O.vertical, k = O.direction || "", B = j([], R(O.pos), !1);
      D += Math.abs(E), w += Math.abs(I), E && k.indexOf("n") > -1 && (B[1] -= m), I && k.indexOf("w") > -1 && (B[0] -= m), E && k.indexOf("s") > -1 && (B[1] += m), I && k.indexOf("e") > -1 && (B[0] += m);
      var F = lt(Lt(o, B, S), T), G = y && y !== "horizontal", X = O.vertical ? w <= v[1] && (G || !O.virtual) : D <= v[0] && (y || !O.virtual);
      return t.createElement("div", { key: "borderRadiusControl".concat(M), className: st("control", "border-radius", O.vertical ? "vertical" : "", O.virtual ? "virtual" : ""), "data-radius-index": M, style: {
        display: X ? "block" : "none",
        transform: "translate(".concat(F[0], "px, ").concat(F[1], "px) scale(").concat(g, ")")
      } });
    });
  },
  dragControlCondition: function(n, t) {
    if (!t.inputEvent || t.isRequest)
      return !1;
    var r = t.inputEvent.target.getAttribute("class") || "";
    return r.indexOf("border-radius") > -1 || r.indexOf("moveable-line") > -1 && r.indexOf("moveable-direction") > -1;
  },
  dragGroupControlCondition: function(n, t) {
    return this.dragControlCondition(n, t);
  },
  dragControlStart: function(n, t) {
    var r = t.inputEvent, e = t.datas, i = r.target, a = i.getAttribute("class") || "", o = a.indexOf("border-radius") > -1, s = a.indexOf("moveable-line") > -1 && a.indexOf("moveable-direction") > -1, u = o ? parseInt(i.getAttribute("data-radius-index"), 10) : -1, l = -1;
    if (s) {
      var f = i.getAttribute("data-line-key") || "";
      f && (l = parseInt(f.replace(/render-line-/g, ""), 10), isNaN(l) && (l = -1));
    }
    if (!o && !s)
      return !1;
    var d = vt(n, t, {}), p = et(n, "onRoundStart", d);
    if (p === !1)
      return !1;
    e.lineIndex = l, e.controlIndex = u, e.isControl = o, e.isLine = s, Rn(n, t);
    var c = n.props, h = c.roundRelative, v = c.minRoundControls, g = v === void 0 ? [0, 0] : v, _ = n.state, m = _.width, y = _.height;
    e.isRound = !0, e.prevDist = [0, 0];
    var b = If(n), x = Pf(b || "", m, y, g, !0) || [];
    return e.controlPoses = x, _.borderRadiusState = ol(x, h, m, y).styles.join(" "), d;
  },
  dragControl: function(n, t) {
    var r = t.datas, e = r.controlPoses;
    if (!r.isRound || !r.isControl || !e.length)
      return !1;
    var i = r.controlIndex, a = R(xe(t), 2), o = a[0], s = a[1], u = [o, s], l = lt(u, r.prevDist), f = n.props.maxRoundControls, d = f === void 0 ? [4, 4] : f, p = n.state, c = p.width, h = p.height, v = e[i], g = v.vertical, _ = v.horizontal, m = e.map(function(b) {
      var x = b.horizontal, S = b.vertical, C = [
        x * _ * u[0],
        S * g * u[1]
      ];
      if (x) {
        if (d[0] === 1)
          return C;
        if (d[0] < 4 && x !== _)
          return C;
      } else {
        if (d[1] === 0)
          return C[1] = S * _ * u[0] / c * h, C;
        if (g) {
          if (d[1] === 1)
            return C;
          if (d[1] < 4 && S !== g)
            return C;
        }
      }
      return [0, 0];
    });
    m[i] = u;
    var y = e.map(function(b, x) {
      return P(P({}, b), { pos: Ct(b.pos, m[x]) });
    });
    return i < 4 ? y.slice(0, i + 1).forEach(function(b) {
      b.virtual = !1;
    }) : y.slice(4, i + 1).forEach(function(b) {
      b.virtual = !1;
    }), r.prevDist = [o, s], Rf(n, t, u, l, y);
  },
  dragControlEnd: function(n, t) {
    var r = n.state;
    r.borderRadiusState = "";
    var e = t.datas, i = t.isDouble;
    if (!e.isRound)
      return !1;
    var a = e.isControl, o = e.controlIndex, s = e.isLine, u = e.lineIndex, l = e.controlPoses, f = l.filter(function(_) {
      var m = _.virtual;
      return m;
    }).length, d = n.props.roundClickable, p = d === void 0 ? !0 : d;
    if (i && p) {
      if (a && (p === !0 || p === "control"))
        H1(l, o);
      else if (s && (p === !0 || p === "line")) {
        var c = R(vd(n, t), 2), h = c[0], v = c[1];
        X1(l, u, h, v);
      }
      f !== l.filter(function(_) {
        var m = _.virtual;
        return m;
      }).length && Rf(n, t, [0, 0], [0, 0], l);
    }
    var g = Xr(n, t, {});
    return et(n, "onRoundEnd", g), r.borderRadiusState = "", g;
  },
  dragGroupControlStart: function(n, t) {
    var r = this.dragControlStart(n, t);
    if (!r)
      return !1;
    var e = n.moveables, i = n.props.targets, a = se(n, "roundable", t), o = P({ targets: n.props.targets, events: a.map(function(s, u) {
      return P(P({}, s), { target: i[u], moveable: e[u], currentTarget: e[u] });
    }) }, r);
    return et(n, "onRoundGroupStart", o), r;
  },
  dragGroupControl: function(n, t) {
    var r = this.dragControl(n, t);
    if (!r)
      return !1;
    var e = n.moveables, i = n.props.targets, a = se(n, "roundable", t), o = P({ targets: n.props.targets, events: a.map(function(s, u) {
      return P(P(P({}, s), { target: i[u], moveable: e[u], currentTarget: e[u] }), wr({
        borderRadius: r.borderRadius
      }, s));
    }) }, r);
    return et(n, "onRoundGroup", o), o;
  },
  dragGroupControlEnd: function(n, t) {
    var r = n.moveables, e = n.props.targets, i = se(n, "roundable", t);
    Xo(n, "onRound", function(s) {
      var u = P({ targets: n.props.targets, events: i.map(function(l, f) {
        return P(P(P({}, l), { target: e[f], moveable: r[f], currentTarget: r[f] }), wr({
          borderRadius: s.borderRadius
        }, l));
      }) }, s);
      et(n, "onRoundGroup", u);
    });
    var a = this.dragControlEnd(n, t);
    if (!a)
      return !1;
    var o = P({ targets: n.props.targets, events: i.map(function(s, u) {
      var l;
      return P(P({}, s), { target: e[u], moveable: r[u], currentTarget: r[u], lastEvent: (l = s.datas) === null || l === void 0 ? void 0 : l.lastEvent });
    }) }, a);
    return et(n, "onRoundGroupEnd", o), o;
  },
  unset: function(n) {
    n.state.borderRadiusState = "";
  }
};
function $1(n, t) {
  var r = t ? 4 : 3, e = Bt(r), i = "matrix".concat(t ? "3d" : "", "(").concat(e.join(","), ")");
  return n === i || n === "matrix(1,0,0,1,0,0)";
}
var dp = {
  isPinch: !0,
  name: "beforeRenderable",
  props: [],
  events: [
    "beforeRenderStart",
    "beforeRender",
    "beforeRenderEnd",
    "beforeRenderGroupStart",
    "beforeRenderGroup",
    "beforeRenderGroupEnd"
  ],
  dragRelation: "weak",
  setTransform: function(n, t) {
    var r = n.state, e = r.is3d, i = r.targetMatrix, a = r.inlineTransform, o = e ? "matrix3d(".concat(i.join(","), ")") : "matrix(".concat(rd(i, !0), ")"), s = !a || a === "none" ? o : a;
    t.datas.startTransforms = $1(s, e) ? [] : Ke(s);
  },
  resetStyle: function(n) {
    var t = n.datas;
    t.nextStyle = {}, t.nextTransforms = n.datas.startTransforms, t.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(n, t) {
    return vt(n, t, {
      setTransform: function(r) {
        t.datas.startTransforms = rr(r) ? r : Ke(r);
      },
      isPinch: !!t.isPinch
    });
  },
  fillDragParams: function(n, t) {
    return vt(n, t, {
      isPinch: !!t.isPinch
    });
  },
  dragStart: function(n, t) {
    this.setTransform(n, t), this.resetStyle(t), et(n, "onBeforeRenderStart", this.fillDragStartParams(n, t));
  },
  drag: function(n, t) {
    t.datas.startTransforms || this.setTransform(n, t), this.resetStyle(t), et(n, "onBeforeRender", vt(n, t, {
      isPinch: !!t.isPinch
    }));
  },
  dragEnd: function(n, t) {
    t.datas.startTransforms || (this.setTransform(n, t), this.resetStyle(t)), et(n, "onBeforeRenderEnd", vt(n, t, {
      isPinch: !!t.isPinch,
      isDrag: t.isDrag
    }));
  },
  dragGroupStart: function(n, t) {
    var r = this;
    this.dragStart(n, t);
    var e = se(n, "beforeRenderable", t), i = n.moveables, a = e.map(function(o, s) {
      var u = i[s];
      return r.setTransform(u, o), r.resetStyle(o), r.fillDragStartParams(u, o);
    });
    et(n, "onBeforeRenderGroupStart", vt(n, t, {
      isPinch: !!t.isPinch,
      targets: n.props.targets,
      setTransform: function() {
      },
      events: a
    }));
  },
  dragGroup: function(n, t) {
    var r = this;
    this.drag(n, t);
    var e = se(n, "beforeRenderable", t), i = n.moveables, a = e.map(function(o, s) {
      var u = i[s];
      return r.resetStyle(o), r.fillDragParams(u, o);
    });
    et(n, "onBeforeRenderGroup", vt(n, t, {
      isPinch: !!t.isPinch,
      targets: n.props.targets,
      events: a
    }));
  },
  dragGroupEnd: function(n, t) {
    this.dragEnd(n, t), et(n, "onBeforeRenderGroupEnd", vt(n, t, {
      isPinch: !!t.isPinch,
      isDrag: t.isDrag,
      targets: n.props.targets
    }));
  },
  dragControlStart: function(n, t) {
    return this.dragStart(n, t);
  },
  dragControl: function(n, t) {
    return this.drag(n, t);
  },
  dragControlEnd: function(n, t) {
    return this.dragEnd(n, t);
  },
  dragGroupControlStart: function(n, t) {
    return this.dragGroupStart(n, t);
  },
  dragGroupControl: function(n, t) {
    return this.dragGroup(n, t);
  },
  dragGroupControlEnd: function(n, t) {
    return this.dragGroupEnd(n, t);
  }
}, pp = {
  name: "renderable",
  props: [],
  events: [
    "renderStart",
    "render",
    "renderEnd",
    "renderGroupStart",
    "renderGroup",
    "renderGroupEnd"
  ],
  dragRelation: "weak",
  dragStart: function(n, t) {
    et(n, "onRenderStart", vt(n, t, {
      isPinch: !!t.isPinch
    }));
  },
  drag: function(n, t) {
    et(n, "onRender", this.fillDragParams(n, t));
  },
  dragAfter: function(n, t) {
    return this.drag(n, t);
  },
  dragEnd: function(n, t) {
    et(n, "onRenderEnd", this.fillDragEndParams(n, t));
  },
  dragGroupStart: function(n, t) {
    et(n, "onRenderGroupStart", vt(n, t, {
      isPinch: !!t.isPinch,
      targets: n.props.targets
    }));
  },
  dragGroup: function(n, t) {
    var r = this, e = se(n, "beforeRenderable", t), i = n.moveables, a = e.map(function(o, s) {
      var u = i[s];
      return r.fillDragParams(u, o);
    });
    et(n, "onRenderGroup", vt(n, t, P(P({ isPinch: !!t.isPinch, targets: n.props.targets, transform: La(t), transformObject: {} }, wr(Ya(t))), { events: a })));
  },
  dragGroupEnd: function(n, t) {
    var r = this, e = se(n, "beforeRenderable", t), i = n.moveables, a = e.map(function(o, s) {
      var u = i[s];
      return r.fillDragEndParams(u, o);
    });
    et(n, "onRenderGroupEnd", vt(n, t, P({ isPinch: !!t.isPinch, isDrag: t.isDrag, targets: n.props.targets, events: a, transformObject: {}, transform: La(t) }, wr(Ya(t)))));
  },
  dragControlStart: function(n, t) {
    return this.dragStart(n, t);
  },
  dragControl: function(n, t) {
    return this.drag(n, t);
  },
  dragControlAfter: function(n, t) {
    return this.dragAfter(n, t);
  },
  dragControlEnd: function(n, t) {
    return this.dragEnd(n, t);
  },
  dragGroupControlStart: function(n, t) {
    return this.dragGroupStart(n, t);
  },
  dragGroupControl: function(n, t) {
    return this.dragGroup(n, t);
  },
  dragGroupControlEnd: function(n, t) {
    return this.dragGroupEnd(n, t);
  },
  fillDragParams: function(n, t) {
    var r = {};
    return si(co(t) || []).forEach(function(e) {
      r[e.name] = e.functionValue;
    }), vt(n, t, P({ isPinch: !!t.isPinch, transformObject: r, transform: La(t) }, wr(Ya(t))));
  },
  fillDragEndParams: function(n, t) {
    var r = {};
    return si(co(t) || []).forEach(function(e) {
      r[e.name] = e.functionValue;
    }), vt(n, t, P({ isPinch: !!t.isPinch, isDrag: t.isDrag, transformObject: r, transform: La(t) }, wr(Ya(t))));
  }
};
function Zi(n, t, r, e, i, a, o) {
  a.clientDistX = a.distX, a.clientDistY = a.distY;
  var s = i === "Start", u = i === "End", l = i === "After", f = n.state.target, d = a.isRequest, p = e.indexOf("Control") > -1;
  if (!f || s && p && !d && n.areaElement === a.inputEvent.target)
    return !1;
  var c = j([], R(t), !1);
  if (d) {
    var h = a.requestAble;
    c.some(function(M) {
      return M.name === h;
    }) || c.push.apply(c, j([], R(n.props.ables.filter(function(M) {
      return M.name === h;
    })), !1));
  }
  if (!c.length || c.every(function(M) {
    return M.dragRelation;
  }))
    return !1;
  var v = a.inputEvent, g;
  u && v && (g = document.elementFromPoint(a.clientX, a.clientY) || v.target);
  var _ = !1, m = function() {
    var M;
    _ = !0, (M = a.stop) === null || M === void 0 || M.call(a);
  }, y = s && (!n.targetGesto || !n.controlGesto || !n.targetGesto.isFlag() || !n.controlGesto.isFlag());
  y && n.updateRect(i, !0, !1);
  var b = a.datas, x = p ? "controlGesto" : "targetGesto", S = n[x], C = function(M, E, I) {
    if (!(E in M) || S !== n[x])
      return !1;
    var k = M.name, B = b[k] || (b[k] = {});
    if (s && (B.isEventStart = !I || !M[I] || M[I](n, a)), !B.isEventStart)
      return !1;
    var F = M[E](n, P(P({}, a), { stop: m, datas: B, originalDatas: b, inputTarget: g }));
    return n._emitter.off(), s && F === !1 && (B.isEventStart = !1), F;
  };
  y && c.forEach(function(M) {
    M.unset && M.unset(n);
  }), C(dp, "drag".concat(e).concat(i));
  var w = 0, D = 0;
  r.forEach(function(M) {
    if (_)
      return !1;
    var E = "".concat(M).concat(e).concat(i), I = "".concat(M).concat(e, "Condition");
    i === "" && !d && rp(n.state, a);
    var k = c.filter(function(G) {
      return G[E];
    });
    k = k.filter(function(G, X) {
      return G.name && k.indexOf(G) === X;
    });
    var B = k.filter(function(G) {
      return C(G, E, I);
    }), F = B.length;
    _ && ++w, F && ++D, !_ && s && k.length && !F && (w += k.filter(function(G) {
      var X = G.name, W = b[X];
      return W.isEventStart ? G.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!l || D) && C(pp, "drag".concat(e).concat(i));
  var T = S !== n[x] || w === r.length;
  if ((u || _ || T) && (n.state.gestos = {}, n.moveables && n.moveables.forEach(function(M) {
    M.state.gestos = {};
  }), c.forEach(function(M) {
    M.unset && M.unset(n);
  })), s && !T && !d && D && n.props.preventDefault && (a == null || a.preventDefault()), n.isUnmounted || T)
    return !1;
  if (!s && D && !o || u) {
    var O = n.props.flushSync || Wd;
    O(function() {
      n.updateRect(u ? i : "", !0, !1), n.forceUpdate();
    });
  }
  return !s && !u && !l && D && !o && Zi(n, t, r, e, i + "After", a), !0;
}
function ul(n, t) {
  return function(r, e) {
    var i;
    e === void 0 && (e = r.inputEvent.target);
    var a = e, o = n.areaElement, s = n._dragTarget;
    return !s || !t && (!((i = n.controlGesto) === null || i === void 0) && i.isFlag()) ? !1 : a === s || s.contains(a) || a === o || !n.isMoveableElement(a) && !n.controlBox.contains(a) || or(a, "moveable-area") || or(a, "moveable-padding") || or(a, "moveable-edgeDraggable");
  };
}
function vp(n, t, r) {
  var e = n.controlBox, i = [], a = n.props, o = a.dragArea, s = n.state.target, u = a.dragTarget;
  i.push(e), (!o || u) && i.push(t), !o && u && s && t !== s && a.dragTargetSelf && i.push(s);
  var l = ul(n);
  return gp(n, i, "targetAbles", r, {
    dragStart: l,
    pinchStart: l
  });
}
function hp(n, t) {
  var r = n.controlBox, e = [];
  e.push(r);
  var i = ul(n, !0), a = function(o, s) {
    if (s === void 0 && (s = o.inputEvent.target), s === r)
      return !0;
    var u = i(o, s);
    return !u;
  };
  return gp(n, e, "controlAbles", t, {
    dragStart: a,
    pinchStart: a
  });
}
function gp(n, t, r, e, i) {
  i === void 0 && (i = {});
  var a = r === "targetAbles", o = n.props, s = o.pinchOutside, u = o.pinchThreshold, l = o.preventClickEventOnDrag, f = o.preventClickDefault, d = o.checkInput, p = o.dragFocusedInput, c = o.preventDefault, h = c === void 0 ? !0 : c, v = o.preventRightClick, g = v === void 0 ? !0 : v, _ = o.preventWheelClick, m = _ === void 0 ? !0 : _, y = o.dragContainer, b = ge(y, !0), x = {
    preventDefault: h,
    preventRightClick: g,
    preventWheelClick: m,
    container: b || qe(n.getControlBoxElement()),
    pinchThreshold: u,
    pinchOutside: s,
    preventClickEventOnDrag: a ? l : !1,
    preventClickEventOnDragStart: a ? f : !1,
    preventClickEventByCondition: a ? null : function(w) {
      return n.controlBox.contains(w.target);
    },
    checkInput: a ? d : !1,
    dragFocusedInput: p
  }, S = new yg(t, x), C = e === "Control";
  return ["drag", "pinch"].forEach(function(w) {
    ["Start", "", "End"].forEach(function(D) {
      S.on("".concat(w).concat(D), function(T) {
        var O, M = T.eventType, E = w === "drag" && T.isPinch;
        if (i[M] && !i[M](T)) {
          T.stop();
          return;
        }
        if (!E) {
          var I = w === "drag" ? [w] : ["drag", w], k = j([], R(n[r]), !1), B = Zi(n, k, I, e, D, T);
          B ? (n.props.stopPropagation || D === "Start" && C) && ((O = T == null ? void 0 : T.inputEvent) === null || O === void 0 || O.stopPropagation()) : T.stop();
        }
      });
    });
  }), S;
}
var q1 = /* @__PURE__ */ function() {
  function n(t, r, e) {
    var i = this;
    this.target = t, this.moveable = r, this.eventName = e, this.ables = [], this._onEvent = function(a) {
      var o = i.eventName, s = i.moveable;
      s.state.disableNativeEvent || i.ables.forEach(function(u) {
        u[o](s, {
          inputEvent: a
        });
      });
    }, t.addEventListener(e.toLowerCase(), this._onEvent);
  }
  return n.prototype.setAbles = function(t) {
    this.ables = t;
  }, n.prototype.destroy = function() {
    this.target.removeEventListener(this.eventName.toLowerCase(), this._onEvent), this.target = null, this.moveable = null;
  }, n;
}();
function U1(n, t, r, e) {
  var i;
  r === void 0 && (r = t);
  var a = yd(n, t), o = a.matrixes, s = a.is3d, u = a.targetMatrix, l = a.transformOrigin, f = a.targetOrigin, d = a.offsetContainer, p = a.hasFixed, c = a.zoom, h = l0(d, r), v = h.matrixes, g = h.is3d, _ = h.offsetContainer, m = h.zoom, y = e || g || s, b = y ? 4 : 3, x = n.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in n, S = u, C = Bt(b), w = Bt(b), D = Bt(b), T = Bt(b), O = o.length, M = v.map(function(X) {
    return P(P({}, X), { matrix: X.matrix ? j([], R(X.matrix), !1) : void 0 });
  }).reverse();
  o.reverse(), !s && y && (S = fe(S, 3, 4), ru(o)), !g && y && ru(M), M.forEach(function(X) {
    w = Pt(w, X.matrix, b);
  });
  var E = r || en(n), I = ((i = M[0]) === null || i === void 0 ? void 0 : i.target) || la(E, E, !0).offsetParent, k = M.slice(1).reduce(function(X, W) {
    return Pt(X, W.matrix, b);
  }, Bt(b));
  o.forEach(function(X, W) {
    if (O - 2 === W && (D = C.slice()), O - 1 === W && (T = C.slice()), !X.matrix) {
      var A = o[W + 1], Y = d1(X, A, I, b, Pt(k, C, b));
      X.matrix = Tn(Y, b);
    }
    C = Pt(C, X.matrix, b);
  });
  var B = !x && s;
  S || (S = Bt(B ? 4 : 3));
  var F = Yo(x && S.length === 16 ? fe(S, 4, 3) : S, B), G = w;
  return w = Jc(w, b, b), {
    hasZoom: c !== 1 || m !== 1,
    hasFixed: p,
    matrixes: o,
    rootMatrix: w,
    originalRootMatrix: G,
    beforeMatrix: D,
    offsetMatrix: T,
    allMatrix: C,
    targetMatrix: S,
    targetTransform: F,
    inlineTransform: n.style.transform,
    transformOrigin: l,
    targetOrigin: f,
    is3d: y,
    offsetContainer: d,
    offsetRootContainer: _
  };
}
function j1(n, t, r, e) {
  r === void 0 && (r = t);
  var i = 0, a = 0, o = 0, s = {}, u = qd(n);
  if (n && (i = u.offsetWidth, a = u.offsetHeight), n) {
    var l = U1(n, t, r, e), f = Qn(l.allMatrix, l.transformOrigin, i, a);
    s = P(P({}, l), f);
    var d = Qn(l.allMatrix, [50, 50], 100, 100);
    o = Ud([d.pos1, d.pos2], d.direction);
  }
  var p = e ? 4 : 3;
  return P(P(P({ hasZoom: !1, width: i, height: a, rotation: o }, u), { originalRootMatrix: Bt(p), rootMatrix: Bt(p), beforeMatrix: Bt(p), offsetMatrix: Bt(p), allMatrix: Bt(p), targetMatrix: Bt(p), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !!e, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), s);
}
function au(n, t, r, e, i, a) {
  a === void 0 && (a = []);
  var o = 1, s = [0, 0], u = Wa(), l = Wa(), f = Wa(), d = Wa(), p = [0, 0], c = {}, h = j1(t, r, i, !0);
  if (t) {
    var v = Ir(t);
    a.forEach(function(M) {
      c[M] = v(M);
    });
    var g = h.is3d ? 4 : 3, _ = Qn(h.offsetMatrix, Ct(h.transformOrigin, td(h.targetMatrix, g)), h.width, h.height);
    o = _.direction, s = Ct(_.origin, [_.left - h.left, _.top - h.top]), d = Ki(h.offsetRootContainer);
    var m = la(e, e, !0).offsetParent || h.offsetRootContainer;
    if (h.hasZoom) {
      var y = Qn(Pt(h.originalRootMatrix, h.allMatrix), h.transformOrigin, h.width, h.height), b = Qn(h.originalRootMatrix, go(Ir(m)("transformOrigin")).map(function(M) {
        return parseFloat(M);
      }), m.offsetWidth, m.offsetHeight);
      if (u = ls(y, d), f = ls(b, d, m, !0), n) {
        var x = y.left, S = y.top;
        l = ls({
          left: x,
          top: S,
          bottom: S,
          right: S
        }, d);
      }
    } else {
      u = Ki(t), f = u0(m), n && (l = Ki(n));
      var C = f.left, w = f.top, D = f.clientLeft, T = f.clientTop, O = [
        u.left - C,
        u.top - w
      ];
      p = lt(ci(h.rootMatrix, O, 4), [D + h.left, T + h.top]);
    }
  }
  return P({ targetClientRect: u, containerClientRect: f, moveableClientRect: l, rootContainerClientRect: d, beforeDirection: o, beforeOrigin: s, originalBeforeOrigin: s, target: t, style: c, offsetDelta: p }, h);
}
function kf(n) {
  var t = n.pos1, r = n.pos2, e = n.pos3, i = n.pos4;
  if (!t || !r || !e || !i)
    return null;
  var a = Mn([t, r, e, i]), o = [a.minX, a.minY], s = lt(n.origin, o);
  return t = lt(t, o), r = lt(r, o), e = lt(e, o), i = lt(i, o), P(P({}, n), {
    left: n.left,
    top: n.top,
    posDelta: o,
    pos1: t,
    pos2: r,
    pos3: e,
    pos4: i,
    origin: s,
    beforeOrigin: s,
    // originalBeforeOrigin: origin,
    isPersisted: !0
  });
}
var di = /* @__PURE__ */ function(n) {
  Ea(t, n);
  function t() {
    var r = n !== null && n.apply(this, arguments) || this;
    return r.state = P({ container: null, gestos: {}, renderLines: [
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]]
    ], renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, au(null)), r.renderState = {}, r.enabledAbles = [], r.targetAbles = [], r.controlAbles = [], r.rotation = 0, r.scale = [1, 1], r.isMoveableMounted = !1, r.isUnmounted = !1, r.events = {
      mouseEnter: null,
      mouseLeave: null
    }, r._emitter = new ko(), r._prevOriginalDragTarget = null, r._originalDragTarget = null, r._prevDragTarget = null, r._dragTarget = null, r._prevPropTarget = null, r._propTarget = null, r._prevDragArea = !1, r._isPropTargetChanged = !1, r._hasFirstTarget = !1, r._reiszeObserver = null, r._observerId = 0, r._mutationObserver = null, r._rootContainer = null, r._viewContainer = null, r._viewClassNames = [], r._store = {}, r.checkUpdateRect = function() {
      if (!r.isDragging()) {
        var e = r.props.parentMoveable;
        if (e) {
          e.checkUpdateRect();
          return;
        }
        uh(r._observerId), r._observerId = Mc(function() {
          r.isDragging() || r.updateRect();
        });
      }
    }, r._onPreventClick = function(e) {
      e.stopPropagation(), e.preventDefault();
    }, r;
  }
  return t.prototype.render = function() {
    var r = this.props, e = this.getState(), i = r.parentPosition, a = r.className, o = r.target, s = r.zoom, u = r.cspNonce, l = r.translateZ, f = r.cssStyled, d = r.groupable, p = r.linePadding, c = r.controlPadding;
    this._checkUpdateRootContainer(), this.checkUpdate(), this.updateRenderPoses();
    var h = R(i || [0, 0], 2), v = h[0], g = h[1], _ = e.left, m = e.top, y = e.target, b = e.direction, x = e.hasFixed, S = e.offsetDelta, C = r.targets, w = this.isDragging(), D = {};
    this.getEnabledAbles().forEach(function(k) {
      D["data-able-".concat(k.name.toLowerCase())] = !0;
    });
    var T = this._getAbleClassName(), O = C && C.length && (y || d) || o || !this._hasFirstTarget && this.state.isPersisted, M = this.controlBox || this.props.firstRenderState || this.props.persistData, E = [_ - v, m - g];
    !d && r.useAccuratePosition && (E[0] += S[0], E[1] += S[1]);
    var I = {
      position: x ? "fixed" : "absolute",
      display: O ? "block" : "none",
      visibility: M ? "visible" : "hidden",
      transform: "translate3d(".concat(E[0], "px, ").concat(E[1], "px, ").concat(l, ")"),
      "--zoom": s,
      "--zoompx": "".concat(s, "px")
    };
    return p && (I["--moveable-line-padding"] = p), c && (I["--moveable-control-padding"] = c), oe(
      f,
      P({ cspNonce: u, ref: Me(this, "controlBox"), className: "".concat(st("control-box", b === -1 ? "reverse" : "", w ? "dragging" : ""), " ").concat(T, " ").concat(a) }, D, { onClick: this._onPreventClick, style: I }),
      this.renderAbles(),
      this._renderLines()
    );
  }, t.prototype.componentDidMount = function() {
    this.isMoveableMounted = !0, this.isUnmounted = !1;
    var r = this.props, e = r.parentMoveable, i = r.container;
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateTargets(), this._updateNativeEvents(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(this.props), !i && !e && !this.state.isPersisted && (this.updateRect("", !1, !1), this.forceUpdate());
  }, t.prototype.componentDidUpdate = function(r) {
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateNativeEvents(), this._updateTargets(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(r);
  }, t.prototype.componentWillUnmount = function() {
    var r, e;
    this.isMoveableMounted = !1, this.isUnmounted = !0, this._emitter.off(), (r = this._reiszeObserver) === null || r === void 0 || r.disconnect(), (e = this._mutationObserver) === null || e === void 0 || e.disconnect();
    var i = this._viewContainer;
    i && this._changeAbleViewClassNames([]), Un(this, !1), Un(this, !0);
    var a = this.events;
    for (var o in a) {
      var s = a[o];
      s && s.destroy();
    }
  }, t.prototype.getTargets = function() {
    var r = this.props.target;
    return r ? [r] : [];
  }, t.prototype.getAble = function(r) {
    var e = this.props.ables || [];
    return Rr(e, function(i) {
      return i.name === r;
    });
  }, t.prototype.getContainer = function() {
    var r = this.props, e = r.parentMoveable, i = r.wrapperMoveable, a = r.container;
    return a || i && i.getContainer() || e && e.getContainer() || this.controlBox.parentElement;
  }, t.prototype.getControlBoxElement = function() {
    return this.controlBox;
  }, t.prototype.getDragElement = function() {
    return this._dragTarget;
  }, t.prototype.isMoveableElement = function(r) {
    var e;
    return r && (((e = r.getAttribute) === null || e === void 0 ? void 0 : e.call(r, "class")) || "").indexOf(Wu) > -1;
  }, t.prototype.dragStart = function(r, e) {
    e === void 0 && (e = r.target);
    var i = this.targetGesto, a = this.controlGesto;
    return i && ul(this)({ inputEvent: r }, e) ? i.isFlag() || i.triggerDragStart(r) : a && this.isMoveableElement(e) && (a.isFlag() || a.triggerDragStart(r)), this;
  }, t.prototype.hitTest = function(r) {
    var e = this.state, i = e.target, a = e.pos1, o = e.pos2, s = e.pos3, u = e.pos4, l = e.targetClientRect;
    if (!i)
      return 0;
    var f;
    if (Si(r)) {
      var d = r.getBoundingClientRect();
      f = {
        left: d.left,
        top: d.top,
        width: d.width,
        height: d.height
      };
    } else
      f = P({ width: 0, height: 0 }, r);
    var p = f.left, c = f.top, h = f.width, v = f.height, g = rf([a, o, u, s], l), _ = vg(g, [
      [p, c],
      [p + h, c],
      [p + h, c + v],
      [p, c + v]
    ]), m = id(g);
    return !_ || !m ? 0 : Math.min(100, _ / m * 100);
  }, t.prototype.isInside = function(r, e) {
    var i = this.state, a = i.target, o = i.pos1, s = i.pos2, u = i.pos3, l = i.pos4, f = i.targetClientRect;
    return a ? Xs([r, e], rf([o, s, l, u], f)) : !1;
  }, t.prototype.updateRect = function(r, e, i) {
    i === void 0 && (i = !0);
    var a = this.props, o = !a.parentPosition && !a.wrapperMoveable;
    o && li(!0);
    var s = a.parentMoveable, u = this.state, l = u.target || a.target, f = this.getContainer(), d = s ? s._rootContainer : this._rootContainer, p = au(this.controlBox, l, f, f, d || f, this._getRequestStyles());
    if (!l && this._hasFirstTarget && a.persistData) {
      var c = kf(a.persistData);
      for (var h in c)
        p[h] = c[h];
    }
    o && li(), this.updateState(p, s ? !1 : i);
  }, t.prototype.isDragging = function(r) {
    var e, i, a = this.targetGesto, o = this.controlGesto;
    if (a != null && a.isFlag()) {
      if (!r)
        return !0;
      var s = a.getEventData();
      return !!(!((e = s[r]) === null || e === void 0) && e.isEventStart);
    }
    if (o != null && o.isFlag()) {
      if (!r)
        return !0;
      var s = o.getEventData();
      return !!(!((i = s[r]) === null || i === void 0) && i.isEventStart);
    }
    return !1;
  }, t.prototype.updateTarget = function(r) {
    this.updateRect(r, !0);
  }, t.prototype.getRect = function() {
    var r = this.state, e = re(this.state), i = R(e, 4), a = i[0], o = i[1], s = i[2], u = i[3], l = Jr(e), f = r.width, d = r.height, p = l.width, c = l.height, h = l.left, v = l.top, g = [r.left, r.top], _ = Ct(g, r.origin), m = Ct(g, r.beforeOrigin), y = r.transformOrigin;
    return {
      width: p,
      height: c,
      left: h,
      top: v,
      pos1: a,
      pos2: o,
      pos3: s,
      pos4: u,
      offsetWidth: f,
      offsetHeight: d,
      beforeOrigin: m,
      origin: _,
      transformOrigin: y,
      rotation: this.getRotation()
    };
  }, t.prototype.getManager = function() {
    return this;
  }, t.prototype.stopDrag = function(r) {
    if (!r || r === "target") {
      var e = this.targetGesto;
      (e == null ? void 0 : e.isIdle()) === !1 && eu(this, !1), e == null || e.stop();
    }
    if (!r || r === "control") {
      var e = this.controlGesto;
      (e == null ? void 0 : e.isIdle()) === !1 && eu(this, !0), e == null || e.stop();
    }
  }, t.prototype.getRotation = function() {
    var r = this.state, e = r.pos1, i = r.pos2, a = r.direction;
    return m1(e, i, a);
  }, t.prototype.request = function(r, e, i) {
    e === void 0 && (e = {});
    var a = this, o = a.props, s = o.parentMoveable || o.wrapperMoveable || a, u = s.props.ables, l = o.groupable, f = Rr(u, function(_) {
      return _.name === r;
    });
    if (this.isDragging() || !f || !f.request)
      return {
        request: function() {
          return this;
        },
        requestEnd: function() {
          return this;
        }
      };
    var d = f.request(a), p = i || e.isInstant, c = d.isControl ? "controlAbles" : "targetAbles", h = "".concat(l ? "Group" : "").concat(d.isControl ? "Control" : ""), v = j([], R(s[c]), !1), g = {
      request: function(_) {
        return Zi(a, v, ["drag"], h, "", P(P({}, d.request(_)), { requestAble: r, isRequest: !0 }), p), g;
      },
      requestEnd: function() {
        return Zi(a, v, ["drag"], h, "End", P(P({}, d.requestEnd()), { requestAble: r, isRequest: !0 }), p), g;
      }
    };
    return Zi(a, v, ["drag"], h, "Start", P(P({}, d.requestStart(e)), { requestAble: r, isRequest: !0 }), p), p ? g.request(e).requestEnd() : g;
  }, t.prototype.getMoveables = function() {
    return [this];
  }, t.prototype.destroy = function() {
    this.componentWillUnmount();
  }, t.prototype.updateRenderPoses = function() {
    var r = this.getState(), e = this.props, i = e.padding, a = r.originalBeforeOrigin, o = r.transformOrigin, s = r.allMatrix, u = r.is3d, l = r.pos1, f = r.pos2, d = r.pos3, p = r.pos4, c = r.left, h = r.top, v = r.isPersisted, g = e.zoom || 1;
    if (!i && g <= 1) {
      r.renderPoses = [
        l,
        f,
        d,
        p
      ], r.renderLines = [
        [l, f],
        [f, p],
        [p, d],
        [d, l]
      ];
      return;
    }
    var _ = ap(i || {}), m = _.left, y = _.top, b = _.bottom, x = _.right, S = u ? 4 : 3, C = [];
    v ? C = o : this.controlBox && e.groupable ? C = a : C = Ct(a, [c, h]);
    var w = lo(S, Tn(C.map(function(I) {
      return -I;
    }), S), s, Tn(o, S)), D = $r(w, l, [-m, -y], S), T = $r(w, f, [x, -y], S), O = $r(w, d, [-m, b], S), M = $r(w, p, [x, b], S);
    if (r.renderPoses = [
      D,
      T,
      O,
      M
    ], r.renderLines = [
      [D, T],
      [T, M],
      [M, O],
      [O, D]
    ], g) {
      var E = g / 2;
      r.renderLines = [
        [
          $r(w, l, [-m - E, -y], S),
          $r(w, f, [x + E, -y], S)
        ],
        [
          $r(w, f, [x, -y - E], S),
          $r(w, p, [x, b + E], S)
        ],
        [
          $r(w, p, [x + E, b], S),
          $r(w, d, [-m - E, b], S)
        ],
        [
          $r(w, d, [-m, b + E], S),
          $r(w, l, [-m, -y - E], S)
        ]
      ];
    }
  }, t.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var r = this.props, e = r.target, i = r.container, a = r.parentMoveable, o = this.state, s = o.target, u = o.container;
    if (!(!s && !e)) {
      this.updateAbles();
      var l = !nu(s, e), f = l || !nu(u, i);
      if (f) {
        var d = i || this.controlBox;
        d && this.unsetAbles(), this.updateState({ target: e, container: i }), !a && d && this.updateRect("End", !1, !1), this._isPropTargetChanged = l;
      }
    }
  }, t.prototype.waitToChangeTarget = function() {
    return new Promise(function() {
    });
  }, t.prototype.triggerEvent = function(r, e) {
    var i = this.props;
    if (this._emitter.trigger(r, e), i.parentMoveable && e.isRequest && !e.isRequestChild)
      return i.parentMoveable.triggerEvent(r, e, !0);
    var a = i[r];
    return a && a(e);
  }, t.prototype.useCSS = function(r, e) {
    var i = this.props.customStyledMap, a = r + e;
    return i[a] || (i[a] = sd(r, e)), i[a];
  }, t.prototype.getState = function() {
    var r, e = this.props;
    (e.target || !((r = e.targets) === null || r === void 0) && r.length) && (this._hasFirstTarget = !0);
    var i = this.controlBox, a = e.persistData, o = e.firstRenderState;
    if (o && !i)
      return o;
    if (!this._hasFirstTarget && a) {
      var s = kf(a);
      if (s)
        return this.updateState(s, !1), this.state;
    }
    return this.state.isPersisted = !1, this.state;
  }, t.prototype.updateSelectors = function() {
  }, t.prototype.unsetAbles = function() {
    var r = this;
    this.targetAbles.forEach(function(e) {
      e.unset && e.unset(r);
    });
  }, t.prototype.updateAbles = function(r, e) {
    r === void 0 && (r = this.props.ables), e === void 0 && (e = "");
    var i = this.props, a = i.triggerAblesSimultaneously, o = this.getEnabledAbles(r), s = "drag".concat(e, "Start"), u = "pinch".concat(e, "Start"), l = "drag".concat(e, "ControlStart"), f = Ha(o, [s, u], a), d = Ha(o, [l], a);
    this.enabledAbles = o, this.targetAbles = f, this.controlAbles = d;
  }, t.prototype.updateState = function(r, e) {
    if (e) {
      if (this.isUnmounted)
        return;
      this.setState(r);
    } else {
      var i = this.state;
      for (var a in r)
        i[a] = r[a];
    }
  }, t.prototype.getEnabledAbles = function(r) {
    r === void 0 && (r = this.props.ables);
    var e = this.props;
    return r.filter(function(i) {
      return i && (i.always && e[i.name] !== !1 || e[i.name]);
    });
  }, t.prototype.renderAbles = function() {
    var r = this, e = this.props, i = e.triggerAblesSimultaneously, a = {
      createElement: oe
    };
    return this.renderState = {}, h1(tp(Ha(this.getEnabledAbles(), ["render"], i).map(function(o) {
      var s = o.render;
      return s(r, a) || [];
    })).filter(function(o) {
      return o;
    }), function(o) {
      var s = o.key;
      return s;
    }).map(function(o) {
      return o[0];
    });
  }, t.prototype.updateCheckInput = function() {
    this.targetGesto && (this.targetGesto.options.checkInput = this.props.checkInput);
  }, t.prototype._getRequestStyles = function() {
    var r = this.getEnabledAbles().reduce(function(e, i) {
      var a, o, s = (o = (a = i.requestStyle) === null || a === void 0 ? void 0 : a.call(i)) !== null && o !== void 0 ? o : [];
      return j(j([], R(e), !1), R(s), !1);
    }, j([], R(this.props.requestStyles || []), !1));
    return r;
  }, t.prototype._updateObserver = function(r) {
    this._updateResizeObserver(r), this._updateMutationObserver(r);
  }, t.prototype._updateEvents = function() {
    var r = this.targetAbles.length, e = this.controlAbles.length, i = this._dragTarget, a = !r && this.targetGesto || this._isTargetChanged(!0);
    a && (Un(this, !1), this.updateState({ gestos: {} })), e || Un(this, !0), i && r && !this.targetGesto && (this.targetGesto = vp(this, i, "")), !this.controlGesto && e && (this.controlGesto = hp(this, "Control"));
  }, t.prototype._updateTargets = function() {
    var r = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = r.dragArea, this._propTarget = r.target, this._originalDragTarget = r.dragTarget || r.target, this._dragTarget = ge(this._originalDragTarget, !0);
  }, t.prototype._renderLines = function() {
    var r = this.props, e = r, i = e.zoom, a = e.hideDefaultLines, o = e.hideChildMoveableDefaultLines, s = e.parentMoveable;
    if (a || s && o)
      return [];
    var u = this.getState(), l = {
      createElement: oe
    };
    return u.renderLines.map(function(f, d) {
      return ua(l, "", f[0], f[1], i, "render-line-".concat(d));
    });
  }, t.prototype._isTargetChanged = function(r) {
    var e = this.props, i = e.dragTarget || e.target, a = this._prevOriginalDragTarget, o = this._prevDragArea, s = e.dragArea, u = !s && a !== i, l = (r || s) && o !== s;
    return u || l || this._prevPropTarget != this._propTarget;
  }, t.prototype._updateNativeEvents = function() {
    var r = this, e = this.props, i = e.dragArea ? this.areaElement : this.state.target, a = this.events, o = Ie(a);
    if (this._isTargetChanged())
      for (var s in a) {
        var u = a[s];
        u && u.destroy(), a[s] = null;
      }
    if (i) {
      var l = this.enabledAbles;
      o.forEach(function(f) {
        var d = Ha(l, [f]), p = d.length > 0, c = a[f];
        if (!p) {
          c && (c.destroy(), a[f] = null);
          return;
        }
        c || (c = new q1(i, r, f), a[f] = c), c.setAbles(d);
      });
    }
  }, t.prototype._checkUpdateRootContainer = function() {
    var r = this.props.rootContainer;
    !this._rootContainer && r && (this._rootContainer = ge(r, !0));
  }, t.prototype._checkUpdateViewContainer = function() {
    var r = this.props.viewContainer;
    !this._viewContainer && r && (this._viewContainer = ge(r, !0));
    var e = this._viewContainer;
    e && this._changeAbleViewClassNames(j(j([], R(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? D1 : ""
    ], !1));
  }, t.prototype._changeAbleViewClassNames = function(r) {
    var e = this._viewContainer, i = Jd(r.filter(Boolean), function(l) {
      return l;
    }).map(function(l) {
      var f = R(l, 1), d = f[0];
      return d;
    }), a = this._viewClassNames, o = ba(a, i), s = o.removed, u = o.added;
    s.forEach(function(l) {
      kc(e, a[l]);
    }), u.forEach(function(l) {
      Ic(e, i[l]);
    }), this._viewClassNames = i;
  }, t.prototype._getAbleViewClassNames = function() {
    var r = this;
    return (this.getEnabledAbles().map(function(e) {
      var i;
      return ((i = e.viewClassName) === null || i === void 0 ? void 0 : i.call(e, r)) || "";
    }).join(" ") + " ".concat(this._getAbleClassName("-view"))).split(/\s+/g);
  }, t.prototype._getAbleClassName = function(r) {
    var e = this;
    r === void 0 && (r = "");
    var i = this.getEnabledAbles(), a = this.targetGesto, o = this.controlGesto, s = a != null && a.isFlag() ? a.getEventData() : {}, u = o != null && o.isFlag() ? o.getEventData() : {};
    return i.map(function(l) {
      var f, d, p, c = l.name, h = ((f = l.className) === null || f === void 0 ? void 0 : f.call(l, e)) || "";
      return (!((d = s[c]) === null || d === void 0) && d.isEventStart || !((p = u[c]) === null || p === void 0) && p.isEventStart) && (h += " ".concat(st("".concat(c).concat(r, "-dragging")))), h.trim();
    }).filter(Boolean).join(" ");
  }, t.prototype._updateResizeObserver = function(r) {
    var e, i = this.props, a = i.target, o = qe(this.getControlBoxElement());
    if (!o.ResizeObserver || !a || !i.useResizeObserver) {
      (e = this._reiszeObserver) === null || e === void 0 || e.disconnect();
      return;
    }
    if (!(r.target === a && this._reiszeObserver)) {
      var s = new o.ResizeObserver(this.checkUpdateRect);
      s.observe(a, {
        box: "border-box"
      }), this._reiszeObserver = s;
    }
  }, t.prototype._updateMutationObserver = function(r) {
    var e = this, i, a = this.props, o = a.target, s = qe(this.getControlBoxElement());
    if (!s.MutationObserver || !o || !a.useMutationObserver) {
      (i = this._mutationObserver) === null || i === void 0 || i.disconnect();
      return;
    }
    if (!(r.target === o && this._mutationObserver)) {
      var u = new s.MutationObserver(function(l) {
        var f, d;
        try {
          for (var p = Rg(l), c = p.next(); !c.done; c = p.next()) {
            var h = c.value;
            h.type === "attributes" && h.attributeName === "style" && e.checkUpdateRect();
          }
        } catch (v) {
          f = { error: v };
        } finally {
          try {
            c && !c.done && (d = p.return) && d.call(p);
          } finally {
            if (f)
              throw f.error;
          }
        }
      });
      u.observe(o, {
        attributes: !0
      }), this._mutationObserver = u;
    }
  }, t.defaultProps = {
    dragTargetSelf: !1,
    target: null,
    dragTarget: null,
    container: null,
    rootContainer: null,
    origin: !0,
    parentMoveable: null,
    wrapperMoveable: null,
    isWrapperMounted: !1,
    parentPosition: null,
    warpSelf: !1,
    svgOrigin: "",
    dragContainer: null,
    useResizeObserver: !1,
    useMutationObserver: !1,
    preventDefault: !0,
    preventRightClick: !0,
    preventWheelClick: !0,
    linePadding: 0,
    controlPadding: 0,
    ables: [],
    pinchThreshold: 20,
    dragArea: !1,
    passDragArea: !1,
    transformOrigin: "",
    className: "",
    zoom: 1,
    triggerAblesSimultaneously: !1,
    padding: {},
    pinchOutside: !0,
    checkInput: !1,
    dragFocusedInput: !1,
    groupable: !1,
    hideDefaultLines: !1,
    cspNonce: "",
    translateZ: 0,
    cssStyled: null,
    customStyledMap: {},
    props: {},
    stopPropagation: !1,
    preventClickDefault: !1,
    preventClickEventOnDrag: !0,
    flushSync: Wd,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, t;
}(Lc), ll = {
  name: "groupable",
  props: [
    "defaultGroupRotate",
    "useDefaultGroupRotate",
    "defaultGroupOrigin",
    "groupable",
    "groupableProps",
    "targetGroups",
    "hideChildMoveableDefaultLines"
  ],
  events: [],
  render: function(n, t) {
    var r, e = n.props, i = e.targets || [], a = n.getState(), o = a.left, s = a.top, u = a.isPersisted, l = e.zoom || 1, f = n.renderGroupRects, d = ((r = e.persistData) === null || r === void 0 ? void 0 : r.children) || [];
    u ? i = d.map(function() {
      return null;
    }) : d = [];
    var p = jn(n, "parentPosition", [o, s], function(h) {
      return h.join(",");
    }), c = jn(n, "requestStyles", n.getRequestChildStyles(), function(h) {
      return h.join(",");
    });
    return n.moveables = n.moveables.slice(0, i.length), j(j([], R(i.map(function(h, v) {
      return t.createElement(di, { key: "moveable" + v, ref: Cc(n, "moveables", v), target: h, origin: !1, requestStyles: c, cssStyled: e.cssStyled, customStyledMap: e.customStyledMap, useResizeObserver: e.useResizeObserver, useMutationObserver: e.useMutationObserver, hideChildMoveableDefaultLines: e.hideChildMoveableDefaultLines, parentMoveable: n, parentPosition: [o, s], persistData: d[v], zoom: l });
    })), !1), R(tp(f.map(function(h, v) {
      var g = h.pos1, _ = h.pos2, m = h.pos3, y = h.pos4, b = [g, _, m, y];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(x, S) {
        var C = R(x, 2), w = C[0], D = C[1];
        return ua(t, "", lt(b[w], p), lt(b[D], p), l, "group-rect-".concat(v, "-").concat(S));
      });
    }))), !1);
  }
}, K1 = Ta("clickable", {
  props: [
    "clickable"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  always: !0,
  dragRelation: "weak",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dragStart: function() {
  },
  dragControlStart: function() {
  },
  dragGroupStart: function(n, t) {
    t.datas.inputTarget = t.inputEvent && t.inputEvent.target;
  },
  dragEnd: function(n, t) {
    var r = n.props.target, e = t.inputEvent, i = t.inputTarget, a = n.isMoveableElement(i), o = !a && n.controlBox.contains(i);
    if (!(!e || !i || t.isDrag || n.isMoveableElement(i) || o)) {
      var s = r.contains(i);
      et(n, "onClick", vt(n, t, {
        isDouble: t.isDouble,
        inputTarget: i,
        isTarget: r === i,
        moveableTarget: n.props.target,
        containsTarget: s
      }));
    }
  },
  dragGroupEnd: function(n, t) {
    var r = t.inputEvent, e = t.inputTarget;
    if (!(!r || !e || t.isDrag || n.isMoveableElement(e) || t.datas.inputTarget === e)) {
      var i = n.props.targets, a = i.indexOf(e), o = a > -1, s = !1;
      a === -1 && (a = Re(i, function(u) {
        return u.contains(e);
      }), s = a > -1), et(n, "onClickGroup", vt(n, t, {
        isDouble: t.isDouble,
        targets: i,
        inputTarget: e,
        targetIndex: a,
        isTarget: o,
        containsTarget: s,
        moveableTarget: i[a]
      }));
    }
  },
  dragControlEnd: function(n, t) {
    this.dragEnd(n, t);
  },
  dragGroupControlEnd: function(n, t) {
    this.dragEnd(n, t);
  }
});
function Nn(n) {
  var t = n.originalDatas.draggable;
  return t || (n.originalDatas.draggable = {}, t = n.originalDatas.draggable), P(P({}, n), { datas: t });
}
var Z1 = Ta("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(n, t) {
    var r = n.props, e = r.edgeDraggable;
    return e ? wd(t, "edgeDraggable", e, n.getState().renderPoses, r.zoom) : [];
  },
  dragCondition: function(n, t) {
    var r, e = n.props, i = (r = t.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !e.edgeDraggable || !i ? !1 : !e.draggable && or(i, st("direction")) && or(i, st("edge")) && or(i, st("edgeDraggable"));
  },
  dragStart: function(n, t) {
    return yr.dragStart(n, Nn(t));
  },
  drag: function(n, t) {
    return yr.drag(n, Nn(t));
  },
  dragEnd: function(n, t) {
    return yr.dragEnd(n, Nn(t));
  },
  dragGroupCondition: function(n, t) {
    var r, e = n.props, i = (r = t.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !e.edgeDraggable || !i ? !1 : !e.draggable && or(i, st("direction")) && or(i, st("line"));
  },
  dragGroupStart: function(n, t) {
    return yr.dragGroupStart(n, Nn(t));
  },
  dragGroup: function(n, t) {
    return yr.dragGroup(n, Nn(t));
  },
  dragGroupEnd: function(n, t) {
    return yr.dragGroupEnd(n, Nn(t));
  },
  unset: function(n) {
    return yr.unset(n);
  }
}), _p = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, fl = [
  dp,
  up,
  e1,
  y1,
  yr,
  Z1,
  Qs,
  b1,
  w1,
  F0,
  M1,
  O1,
  E1,
  Y1,
  L1,
  V1,
  ll,
  _p,
  K1,
  sp,
  pp
], Q1 = /* @__PURE__ */ fl.reduce(function(n, t) {
  return (t.events || []).forEach(function(r) {
    Rc(n, r);
  }), n;
}, []), J1 = /* @__PURE__ */ fl.reduce(function(n, t) {
  return (t.props || []).forEach(function(r) {
    Rc(n, r);
  }), n;
}, []);
function zf(n, t) {
  var r = R(n, 3), e = r[0], i = r[1], a = r[2];
  return (e * t[0] + i * t[1] + a) / Math.sqrt(e * e + i * i);
}
function qa(n, t) {
  var r = R(n, 2), e = r[0], i = r[1];
  return -e * t[0] - i * t[1];
}
function Af(n, t) {
  return Math.max.apply(Math, j([], R(n.map(function(r) {
    var e = R(r, 4), i = e[0], a = e[1], o = e[2], s = e[3];
    return Math.max(i[t], a[t], o[t], s[t]);
  })), !1));
}
function Bf(n, t) {
  return Math.min.apply(Math, j([], R(n.map(function(r) {
    var e = R(r, 4), i = e[0], a = e[1], o = e[2], s = e[3];
    return Math.min(i[t], a[t], o[t], s[t]);
  })), !1));
}
function t_(n, t) {
  var r, e, i, a = [0, 0], o = [0, 0], s = [0, 0], u = [0, 0], l = 0, f = 0;
  if (!n.length)
    return {
      pos1: a,
      pos2: o,
      pos3: s,
      pos4: u,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: l,
      height: f,
      rotation: t
    };
  var d = ct(t, Cr);
  if (d % 90) {
    var p = d / 180 * Math.PI, c = Math.tan(p), h = -1 / c, v = [Us, af], g = [[0, 0], [0, 0]], _ = [Us, af], m = [[0, 0], [0, 0]];
    n.forEach(function(H) {
      H.forEach(function(L) {
        var U = zf([-c, 1, 0], L), q = zf([-h, 1, 0], L);
        v[0] > U && (g[0] = L, v[0] = U), v[1] < U && (g[1] = L, v[1] = U), _[0] > q && (m[0] = L, _[0] = q), _[1] < q && (m[1] = L, _[1] = q);
      });
    });
    var y = R(g, 2), b = y[0], x = y[1], S = R(m, 2), C = S[0], w = S[1], D = [-c, 1, qa([-c, 1], b)], T = [-c, 1, qa([-c, 1], x)], O = [-h, 1, qa([-h, 1], C)], M = [-h, 1, qa([-h, 1], w)];
    r = R([
      [D, O],
      [D, M],
      [T, O],
      [T, M]
    ].map(function(H) {
      var L = R(H, 2), U = L[0], q = L[1];
      return Yu(U, q)[0];
    }), 4), a = r[0], o = r[1], s = r[2], u = r[3], l = _[1] - _[0], f = v[1] - v[0];
  } else {
    var E = Bf(n, 0), I = Bf(n, 1), k = Af(n, 0), B = Af(n, 1);
    if (a = [E, I], o = [k, I], s = [E, B], u = [k, B], l = k - E, f = B - I, d % 180) {
      var F = [s, a, u, o];
      e = R(F, 4), a = e[0], o = e[1], s = e[2], u = e[3], l = B - I, f = k - E;
    }
  }
  if (d % 360 > 180) {
    var F = [u, s, o, a];
    i = R(F, 4), a = i[0], o = i[1], s = i[2], u = i[3];
  }
  var G = Mn([a, o, s, u]), X = G.minX, W = G.minY, A = G.maxX, Y = G.maxY;
  return {
    pos1: a,
    pos2: o,
    pos3: s,
    pos4: u,
    width: l,
    height: f,
    minX: X,
    minY: W,
    maxX: A,
    maxY: Y,
    rotation: t
  };
}
function mp(n, t) {
  var r = t.map(function(e) {
    if (rr(e)) {
      var i = mp(n, e), a = i.length;
      return a > 1 ? i : a === 1 ? i[0] : null;
    } else {
      var o = Rr(n, function(s) {
        var u = s.manager;
        return u.props.target === e;
      });
      return o ? (o.finded = !0, o.manager) : null;
    }
  }).filter(Boolean);
  return r.length === 1 && rr(r[0]) ? r[0] : r;
}
var r_ = /* @__PURE__ */ function(n) {
  Ea(t, n);
  function t() {
    var r = n !== null && n.apply(this, arguments) || this;
    return r.differ = new nd(), r.moveables = [], r.transformOrigin = "50% 50%", r.renderGroupRects = [], r._targetGroups = [], r._hasFirstTargets = !1, r;
  }
  return t.prototype.componentDidMount = function() {
    n.prototype.componentDidMount.call(this);
  }, t.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1, this.updateAbles();
  }, t.prototype.getTargets = function() {
    return this.props.targets;
  }, t.prototype.updateRect = function(r, e, i) {
    var a;
    i === void 0 && (i = !0);
    var o = this.state;
    if (!this.controlBox || o.isPersisted)
      return;
    li(!0), this.moveables.forEach(function(J) {
      J.updateRect(r, !1, !1);
    });
    var s = this.props, u = this.moveables, l = o.target || s.target, f = u.map(function(J) {
      return { finded: !1, manager: J };
    }), d = this.props.targetGroups || [], p = mp(f, d), c = s.useDefaultGroupRotate;
    p.push.apply(p, j([], R(f.filter(function(J) {
      var ft = J.finded;
      return !ft;
    }).map(function(J) {
      var ft = J.manager;
      return ft;
    })), !1));
    var h = [], v = !e || r !== "" && s.updateGroup, g = s.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var _ = (a = s.persistData) === null || a === void 0 ? void 0 : a.rotation;
      _ != null && (g = _);
    }
    function m(J, ft, dt) {
      var Z = J.map(function(_t) {
        if (rr(_t)) {
          var pt = m(_t, ft), St = [pt.pos1, pt.pos2, pt.pos3, pt.pos4];
          return h.push(pt), { poses: St, rotation: pt.rotation };
        } else
          return {
            poses: re(_t.state),
            rotation: _t.getRotation()
          };
      }), nt = Z.map(function(_t) {
        var pt = _t.rotation;
        return pt;
      }), xt = 0, at = nt[0], Q = nt.every(function(_t) {
        return Math.abs(at - _t) < 0.1;
      });
      v ? xt = !c && Q ? at : g : xt = !c && !dt && Q ? at : ft;
      var ht = Z.map(function(_t) {
        var pt = _t.poses;
        return pt;
      }), gt = t_(ht, xt);
      return gt;
    }
    var y = m(p, this.rotation, !0);
    v && (this.rotation = y.rotation, this.transformOrigin = s.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = d, this.renderGroupRects = h;
    var b = this.transformOrigin, x = this.rotation, S = this.scale, C = y.width, w = y.height, D = y.minX, T = y.minY, O = x1([
      [0, 0],
      [C, 0],
      [0, w],
      [C, w]
    ], al(b, C, w), this.rotation / 180 * Math.PI), M = Mn(O.result), E = M.minX, I = M.minY, k = " rotate(".concat(x, "deg)") + " scale(".concat(br(S[0]), ", ").concat(br(S[1]), ")"), B = "translate(".concat(-E, "px, ").concat(-I, "px)").concat(k);
    this.controlBox.style.transform = "translate3d(".concat(D, "px, ").concat(T, "px, ").concat(this.props.translateZ || 0, ")"), l.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(b, ";") + "width:".concat(C, "px;height:").concat(w, "px;") + "transform: ".concat(B), o.width = C, o.height = w;
    var F = this.getContainer(), G = au(this.controlBox, l, this.controlBox, this.getContainer(), this._rootContainer || F, []), X = [G.left, G.top], W = R(re(G), 4), A = W[0], Y = W[1], H = W[2], L = W[3], U = Mn([A, Y, H, L]), q = [U.minX, U.minY], tt = br(S[0] * S[1]);
    G.pos1 = lt(A, q), G.pos2 = lt(Y, q), G.pos3 = lt(H, q), G.pos4 = lt(L, q), G.left = D - G.left + q[0], G.top = T - G.top + q[1], G.origin = lt(Ct(X, G.origin), q), G.beforeOrigin = lt(Ct(X, G.beforeOrigin), q), G.originalBeforeOrigin = Ct(X, G.originalBeforeOrigin), G.transformOrigin = lt(Ct(X, G.transformOrigin), q), l.style.transform = "translate(".concat(-E - q[0], "px, ").concat(-I - q[1], "px)") + k, li(), this.updateState(P(P({}, G), { posDelta: q, direction: tt, beforeDirection: tt }), i);
  }, t.prototype.getRect = function() {
    return P(P({}, n.prototype.getRect.call(this)), { children: this.moveables.map(function(r) {
      return r.getRect();
    }) });
  }, t.prototype.triggerEvent = function(r, e, i) {
    if (i || r.indexOf("Group") > -1)
      return n.prototype.triggerEvent.call(this, r, e);
    this._emitter.trigger(r, e);
  }, t.prototype.getRequestChildStyles = function() {
    var r = this.getEnabledAbles().reduce(function(e, i) {
      var a, o, s = (o = (a = i.requestChildStyle) === null || a === void 0 ? void 0 : a.call(i)) !== null && o !== void 0 ? o : [];
      return j(j([], R(e), !1), R(s), !1);
    }, []);
    return r;
  }, t.prototype.getMoveables = function() {
    return j([], R(this.moveables), !1);
  }, t.prototype.updateAbles = function() {
    n.prototype.updateAbles.call(this, j(j([], R(this.props.ables), !1), [ll], !1), "Group");
  }, t.prototype._updateTargets = function() {
    n.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = ge(this._originalDragTarget, !0);
  }, t.prototype._updateEvents = function() {
    var r = this.state, e = this.props, i = this._prevDragTarget, a = e.dragTarget || this.areaElement, o = e.targets, s = this.differ.update(o), u = s.added, l = s.changed, f = s.removed, d = u.length || f.length;
    (d || this._prevOriginalDragTarget !== this._originalDragTarget) && (Un(this, !1), Un(this, !0), this.updateState({ gestos: {} })), i !== a && (r.target = null), r.target || (r.target = this.areaElement, this.controlBox.style.display = "block"), r.target && (this.targetGesto || (this.targetGesto = vp(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = hp(this, "GroupControl")));
    var p = !nu(r.container, e.container);
    p && (r.container = e.container), (p || d || this.transformOrigin !== (e.defaultGroupOrigin || "50% 50%") || l.length || o.length && !ip(this._targetGroups, e.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!d;
  }, t.prototype._updateObserver = function() {
  }, t.defaultProps = P(P({}, di.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), t;
}(di), e_ = /* @__PURE__ */ function(n) {
  Ea(t, n);
  function t() {
    var r = n !== null && n.apply(this, arguments) || this;
    return r.moveables = [], r;
  }
  return t.prototype.render = function() {
    var r = this, e, i = this.props, a = i.cspNonce, o = i.cssStyled, s = i.persistData, u = i.targets || [], l = u.length, f = this.isUnmounted || !l, d = (e = s == null ? void 0 : s.children) !== null && e !== void 0 ? e : [];
    return f && !l && d.length ? u = d.map(function() {
      return null;
    }) : f || (d = []), oe(o, { cspNonce: a, ref: Me(this, "controlBox"), className: st("control-box") }, u.map(function(p, c) {
      var h, v, g = (v = (h = i.individualGroupableProps) === null || h === void 0 ? void 0 : h.call(i, p, c)) !== null && v !== void 0 ? v : {};
      return oe(di, P({ key: "moveable" + c, ref: Cc(r, "moveables", c) }, i, g, { target: p, wrapperMoveable: r, isWrapperMounted: r.isMoveableMounted, persistData: d[c] }));
    }));
  }, t.prototype.componentDidMount = function() {
  }, t.prototype.componentDidUpdate = function() {
  }, t.prototype.getTargets = function() {
    return this.props.targets;
  }, t.prototype.updateRect = function(r, e, i) {
    i === void 0 && (i = !0), li(!0), this.moveables.forEach(function(a) {
      a.updateRect(r, e, i);
    }), li();
  }, t.prototype.getRect = function() {
    return P(P({}, n.prototype.getRect.call(this)), { children: this.moveables.map(function(r) {
      return r.getRect();
    }) });
  }, t.prototype.request = function(r, e, i) {
    e === void 0 && (e = {});
    var a = this.moveables.map(function(u) {
      return u.request(r, P(P({}, e), { isInstant: !1 }), !1);
    }), o = i || e.isInstant, s = {
      request: function(u) {
        return a.forEach(function(l) {
          return l.request(u);
        }), this;
      },
      requestEnd: function() {
        return a.forEach(function(u) {
          return u.requestEnd();
        }), this;
      }
    };
    return o ? s.request(e).requestEnd() : s;
  }, t.prototype.dragStart = function(r, e) {
    e === void 0 && (e = r.target);
    var i = e, a = Rr(this.moveables, function(o) {
      var s = o.getTargets()[0], u = o.getControlBoxElement(), l = o.getDragElement();
      return !s || !l ? !1 : l === i || l.contains(i) || l !== s && s === i || s.contains(i) || u === i || u.contains(i);
    });
    return a && a.dragStart(r, e), this;
  }, t.prototype.hitTest = function() {
    return 0;
  }, t.prototype.isInside = function() {
    return !1;
  }, t.prototype.isDragging = function() {
    return !1;
  }, t.prototype.getDragElement = function() {
    return null;
  }, t.prototype.getMoveables = function() {
    return j([], R(this.moveables), !1);
  }, t.prototype.updateRenderPoses = function() {
  }, t.prototype.checkUpdate = function() {
  }, t.prototype.triggerEvent = function() {
  }, t.prototype.updateAbles = function() {
  }, t.prototype._updateEvents = function() {
  }, t.prototype._updateObserver = function() {
  }, t;
}(di);
function xp(n, t) {
  var r = [];
  return n.forEach(function(e) {
    if (e) {
      if (Pr(e)) {
        t[e] && r.push.apply(r, j([], R(t[e]), !1));
        return;
      }
      rr(e) ? r.push.apply(r, j([], R(xp(e, t)), !1)) : r.push(e);
    }
  }), r;
}
function yp(n, t) {
  var r = [];
  return n.forEach(function(e) {
    if (e) {
      if (Pr(e)) {
        t[e] && r.push.apply(r, j([], R(t[e]), !1));
        return;
      }
      rr(e) ? r.push(yp(e, t)) : r.push(e);
    }
  }), r;
}
function bp(n, t) {
  return n.length !== t.length || n.some(function(r, e) {
    var i = t[e];
    return !r && !i ? !1 : r != i ? rr(r) && rr(i) ? bp(r, i) : !0 : !1;
  });
}
var n_ = /* @__PURE__ */ function(n) {
  Ea(t, n);
  function t() {
    var r = n !== null && n.apply(this, arguments) || this;
    return r.refTargets = [], r.selectorMap = {}, r._differ = new nd(), r._elementTargets = [], r._tmpRefTargets = [], r._tmpSelectorMap = {}, r._onChangeTargets = null, r;
  }
  return t.makeStyled = function() {
    var r = {}, e = this.getTotalAbles();
    e.forEach(function(a) {
      var o = a.css;
      o && o.forEach(function(s) {
        r[s] = !0;
      });
    });
    var i = Ie(r).join(`
`);
    this.defaultStyled = sd("div", Kv(Wu, Xg + i));
  }, t.getTotalAbles = function() {
    return j([up, ll, _p, sp], R(this.defaultAbles), !1);
  }, t.prototype.render = function() {
    var r, e = this.constructor;
    e.defaultStyled || e.makeStyled();
    var i = this.props, a = i.ables, o = i.props, s = Og(i, ["ables", "props"]), u = R(this._updateRefs(!0), 2), l = u[0], f = u[1], d = xp(l, f), p = d.length > 1, c = e.getTotalAbles(), h = j(j([], R(c), !1), R(a || []), !1), v = P(P(P({}, s), o || {}), { ables: h, cssStyled: e.defaultStyled, customStyledMap: e.customStyledMap });
    this._elementTargets = d;
    var g = null, _ = this.moveable, m = s.persistData;
    if (m != null && m.children && (p = !0), s.individualGroupable)
      return oe(e_, P({ key: "individual-group", ref: Me(this, "moveable") }, v, { target: null, targets: d }));
    if (p) {
      var y = yp(l, f);
      if (_ && !_.props.groupable && !_.props.individualGroupable) {
        var b = _.props.target;
        b && d.indexOf(b) > -1 && (g = P({}, _.state));
      }
      return oe(r_, P({ key: "group", ref: Me(this, "moveable") }, v, (r = s.groupableProps) !== null && r !== void 0 ? r : {}, { target: null, targets: d, targetGroups: y, firstRenderState: g }));
    } else {
      var x = d[0];
      if (_ && (_.props.groupable || _.props.individualGroupable)) {
        var S = _.moveables || [], C = Rr(S, function(w) {
          return w.props.target === x;
        });
        C && (g = P({}, C.state));
      }
      return oe(di, P({ key: "single", ref: Me(this, "moveable") }, v, { target: x, firstRenderState: g }));
    }
  }, t.prototype.componentDidMount = function() {
    this._checkChangeTargets();
  }, t.prototype.componentDidUpdate = function() {
    this._checkChangeTargets();
  }, t.prototype.componentWillUnmount = function() {
    this.selectorMap = {}, this.refTargets = [];
  }, t.prototype.getTargets = function() {
    var r, e;
    return (e = (r = this.moveable) === null || r === void 0 ? void 0 : r.getTargets()) !== null && e !== void 0 ? e : [];
  }, t.prototype.updateSelectors = function() {
    this.selectorMap = {}, this._updateRefs(), this.forceUpdate();
  }, t.prototype.waitToChangeTarget = function() {
    var r = this, e;
    return this._onChangeTargets = function() {
      r._onChangeTargets = null, e();
    }, new Promise(function(i) {
      e = i;
    });
  }, t.prototype.waitToChangeTargets = function() {
    return this.waitToChangeTarget();
  }, t.prototype.getManager = function() {
    return this.moveable;
  }, t.prototype.getMoveables = function() {
    return this.moveable.getMoveables();
  }, t.prototype.getDragElement = function() {
    return this.moveable.getDragElement();
  }, t.prototype._updateRefs = function(r) {
    var e = this.refTargets, i = il(this.props.target || this.props.targets), a = typeof document < "u", o = bp(e, i), s = this.selectorMap, u = {};
    return this.refTargets.forEach(function l(f) {
      if (Pr(f)) {
        var d = s[f];
        d ? u[f] = s[f] : a && (o = !0, u[f] = [].slice.call(document.querySelectorAll(f)));
      } else
        rr(f) && f.forEach(l);
    }), this._tmpRefTargets = i, this._tmpSelectorMap = u, [
      i,
      u,
      !r && o
    ];
  }, t.prototype._checkChangeTargets = function() {
    var r, e, i;
    this.refTargets = this._tmpRefTargets, this.selectorMap = this._tmpSelectorMap;
    var a = this._differ.update(this._elementTargets), o = a.added, s = a.removed, u = o.length || s.length;
    u && ((e = (r = this.props).onChangeTargets) === null || e === void 0 || e.call(r, {
      moveable: this.moveable,
      targets: this._elementTargets
    }), (i = this._onChangeTargets) === null || i === void 0 || i.call(this));
    var l = R(this._updateRefs(), 3), f = l[0], d = l[1], p = l[2];
    this.refTargets = f, this.selectorMap = d, p && this.forceUpdate();
  }, t.defaultAbles = [], t.customStyledMap = {}, t.defaultStyled = null, Pg([
    Zv(pd)
  ], t.prototype, "moveable", void 0), t;
}(Lc), i_ = /* @__PURE__ */ function(n) {
  Ea(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t.defaultAbles = fl, t;
}(n_), ou = function(n, t) {
  return ou = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
    r.__proto__ = e;
  } || function(r, e) {
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
  }, ou(n, t);
};
function cl(n, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ou(n, t);
  function r() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var fa = function() {
  return fa = Object.assign || function(t) {
    for (var r, e = 1, i = arguments.length; e < i; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, fa.apply(this, arguments);
};
function a_(n, t, r, e) {
  var i = arguments.length, a = i < 3 ? t : e === null ? e = Object.getOwnPropertyDescriptor(t, r) : e, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(n, t, r, e);
  else
    for (var s = n.length - 1; s >= 0; s--)
      (o = n[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
  return i > 3 && a && Object.defineProperty(t, r, a), a;
}
var o_ = /* @__PURE__ */ function(n) {
  cl(t, n);
  function t(e) {
    var i = n.call(this, e) || this;
    return i.state = {}, i.state = i.props, i;
  }
  var r = t.prototype;
  return r.render = function() {
    return oe(i_, fa({
      ref: Me(this, "moveable")
    }, this.state));
  }, t;
}(Au), s_ = J1, u_ = pd, l_ = Q1, f_ = /* @__PURE__ */ function(n) {
  cl(t, n);
  function t(e, i) {
    i === void 0 && (i = {});
    var a = n.call(this) || this;
    a.containerProvider = null, a.selfElement = null, a._warp = !1;
    var o = fa({}, i), s = {};
    l_.forEach(function(f) {
      s[sh("on ".concat(f))] = function(d) {
        return a.trigger(f, d);
      };
    });
    var u;
    i.warpSelf ? (delete i.warpSelf, a._warp = !0, u = e) : (u = bi(e).createElement("div"), e.appendChild(u)), a.containerProvider = Ql(oe(o_, fa({
      ref: Me(a, "innerMoveable")
    }, o, s)), u), a.selfElement = u;
    var l = o.target;
    return rr(l) && l.length > 1 && a.updateRect(), a;
  }
  var r = t.prototype;
  return r.setState = function(e, i) {
    this.innerMoveable.setState(e, i);
  }, r.forceUpdate = function(e) {
    this.innerMoveable.forceUpdate(e);
  }, r.dragStart = function(e, i) {
    i === void 0 && (i = e.target);
    var a = this.innerMoveable;
    a.$_timer && this.forceUpdate(), this.getMoveable().dragStart(e, i);
  }, r.destroy = function() {
    var e, i = this.selfElement;
    Ql(null, i, this.containerProvider), this._warp || (e = i == null ? void 0 : i.parentElement) === null || e === void 0 || e.removeChild(i), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, r.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, t = a_([Wl(u_, function(e, i) {
    e[i] || (e[i] = function() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      var s = this.getMoveable();
      if (!(!s || !s[i]))
        return s[i].apply(s, a);
    });
  }), Wl(s_, function(e, i) {
    Object.defineProperty(e, i, {
      get: function() {
        return this.getMoveable().props[i];
      },
      set: function(a) {
        var o;
        this.setState((o = {}, o[i] = a, o));
      },
      enumerable: !0,
      configurable: !0
    });
  })], t), t;
}(ko), Gf = /* @__PURE__ */ function(n) {
  cl(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t;
}(f_), ve = function(n, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 1), n > r ? r : n > t ? n : t;
}, ds = function(n) {
  var t = n / 255;
  return t < 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}, ps = function(n) {
  return 255 * (n > 31308e-7 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n);
}, dl = 96.422, pl = 100, vl = 82.521, c_ = function(n) {
  var t, r, e = { x: 0.9555766 * (t = n).x + -0.0230393 * t.y + 0.0631636 * t.z, y: -0.0282895 * t.x + 1.0099416 * t.y + 0.0210077 * t.z, z: 0.0122982 * t.x + -0.020483 * t.y + 1.3299098 * t.z };
  return r = { r: ps(0.032404542 * e.x - 0.015371385 * e.y - 4985314e-9 * e.z), g: ps(-969266e-8 * e.x + 0.018760108 * e.y + 41556e-8 * e.z), b: ps(556434e-9 * e.x - 2040259e-9 * e.y + 0.010572252 * e.z), a: n.a }, { r: ve(r.r, 0, 255), g: ve(r.g, 0, 255), b: ve(r.b, 0, 255), a: ve(r.a) };
}, d_ = function(n) {
  var t = ds(n.r), r = ds(n.g), e = ds(n.b);
  return function(i) {
    return { x: ve(i.x, 0, dl), y: ve(i.y, 0, pl), z: ve(i.z, 0, vl), a: ve(i.a) };
  }(function(i) {
    return { x: 1.0478112 * i.x + 0.0228866 * i.y + -0.050127 * i.z, y: 0.0295424 * i.x + 0.9904844 * i.y + -0.0170491 * i.z, z: -92345e-7 * i.x + 0.0150436 * i.y + 0.7521316 * i.z, a: i.a };
  }({ x: 100 * (0.4124564 * t + 0.3575761 * r + 0.1804375 * e), y: 100 * (0.2126729 * t + 0.7151522 * r + 0.072175 * e), z: 100 * (0.0193339 * t + 0.119192 * r + 0.9503041 * e), a: n.a }));
}, Qi = 216 / 24389, Jn = 24389 / 27, Ff = function(n) {
  var t = d_(n), r = t.x / dl, e = t.y / pl, i = t.z / vl;
  return r = r > Qi ? Math.cbrt(r) : (Jn * r + 16) / 116, { l: 116 * (e = e > Qi ? Math.cbrt(e) : (Jn * e + 16) / 116) - 16, a: 500 * (r - e), b: 200 * (e - (i = i > Qi ? Math.cbrt(i) : (Jn * i + 16) / 116)), alpha: t.a };
}, p_ = function(n, t, r) {
  var e, i = Ff(n), a = Ff(t);
  return function(o) {
    var s = (o.l + 16) / 116, u = o.a / 500 + s, l = s - o.b / 200;
    return c_({ x: (Math.pow(u, 3) > Qi ? Math.pow(u, 3) : (116 * u - 16) / Jn) * dl, y: (o.l > 8 ? Math.pow((o.l + 16) / 116, 3) : o.l / Jn) * pl, z: (Math.pow(l, 3) > Qi ? Math.pow(l, 3) : (116 * l - 16) / Jn) * vl, a: o.alpha });
  }({ l: ve((e = { l: i.l * (1 - r) + a.l * r, a: i.a * (1 - r) + a.a * r, b: i.b * (1 - r) + a.b * r, alpha: i.alpha * (1 - r) + a.alpha * r }).l, 0, 400), a: e.a, b: e.b, alpha: ve(e.alpha) });
};
function Sp(n) {
  function t(r, e, i) {
    i === void 0 && (i = 5);
    for (var a = [], o = 1 / (i - 1), s = 0; s <= i - 1; s++)
      a.push(r.mix(e, o * s));
    return a;
  }
  n.prototype.mix = function(r, e) {
    e === void 0 && (e = 0.5);
    var i = r instanceof n ? r : new n(r), a = p_(this.toRgb(), i.toRgb(), e);
    return new n(a);
  }, n.prototype.tints = function(r) {
    return t(this, "#fff", r);
  }, n.prototype.shades = function(r) {
    return t(this, "#000", r);
  }, n.prototype.tones = function(r) {
    return t(this, "#808080", r);
  };
}
var Nf;
const v_ = typeof window < "u", Lf = () => {
};
v_ && ((Nf = window == null ? void 0 : window.navigator) != null && Nf.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Yf(n) {
  return typeof n == "function" ? n() : xr(n);
}
function h_(n, t) {
  function r(...e) {
    return new Promise((i, a) => {
      Promise.resolve(n(() => t.apply(this, e), { fn: t, thisArg: this, args: e })).then(i).catch(a);
    });
  }
  return r;
}
const g_ = (n) => n();
function __(n, t = {}) {
  let r, e, i = Lf;
  const a = (s) => {
    clearTimeout(s), i(), i = Lf;
  };
  return (s) => {
    const u = Yf(n), l = Yf(t.maxWait);
    return r && a(r), u <= 0 || l !== void 0 && l <= 0 ? (e && (a(e), e = null), Promise.resolve(s())) : new Promise((f, d) => {
      i = t.rejectOnCancel ? d : f, l && !e && (e = setTimeout(() => {
        r && a(r), e = null, f(s());
      }, l)), r = setTimeout(() => {
        e && a(e), e = null, f(s());
      }, u);
    });
  };
}
var Xf = Object.getOwnPropertySymbols, m_ = Object.prototype.hasOwnProperty, x_ = Object.prototype.propertyIsEnumerable, y_ = (n, t) => {
  var r = {};
  for (var e in n)
    m_.call(n, e) && t.indexOf(e) < 0 && (r[e] = n[e]);
  if (n != null && Xf)
    for (var e of Xf(n))
      t.indexOf(e) < 0 && x_.call(n, e) && (r[e] = n[e]);
  return r;
};
function b_(n, t, r = {}) {
  const e = r, {
    eventFilter: i = g_
  } = e, a = y_(e, [
    "eventFilter"
  ]);
  return Av(n, h_(i, t), a);
}
var S_ = Object.defineProperty, w_ = Object.defineProperties, C_ = Object.getOwnPropertyDescriptors, yo = Object.getOwnPropertySymbols, wp = Object.prototype.hasOwnProperty, Cp = Object.prototype.propertyIsEnumerable, Wf = (n, t, r) => t in n ? S_(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, D_ = (n, t) => {
  for (var r in t || (t = {}))
    wp.call(t, r) && Wf(n, r, t[r]);
  if (yo)
    for (var r of yo(t))
      Cp.call(t, r) && Wf(n, r, t[r]);
  return n;
}, E_ = (n, t) => w_(n, C_(t)), T_ = (n, t) => {
  var r = {};
  for (var e in n)
    wp.call(n, e) && t.indexOf(e) < 0 && (r[e] = n[e]);
  if (n != null && yo)
    for (var e of yo(n))
      t.indexOf(e) < 0 && Cp.call(n, e) && (r[e] = n[e]);
  return r;
};
function M_(n, t, r = {}) {
  const e = r, {
    debounce: i = 0,
    maxWait: a = void 0
  } = e, o = T_(e, [
    "debounce",
    "maxWait"
  ]);
  return b_(n, t, E_(D_({}, o), {
    eventFilter: __(i, { maxWait: a })
  }));
}
function we(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Dp(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Yr = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, pi = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, hl, dr, Gt, Zr = 1e8, zt = 1 / Zr, su = Math.PI * 2, O_ = su / 4, P_ = 0, Ep = Math.sqrt, R_ = Math.cos, I_ = Math.sin, lr = function(t) {
  return typeof t == "string";
}, Wt = function(t) {
  return typeof t == "function";
}, ke = function(t) {
  return typeof t == "number";
}, gl = function(t) {
  return typeof t > "u";
}, me = function(t) {
  return typeof t == "object";
}, Er = function(t) {
  return t !== !1;
}, _l = function() {
  return typeof window < "u";
}, Ua = function(t) {
  return Wt(t) || lr(t);
}, Tp = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, gr = Array.isArray, k_ = /random\([^)]+\)/g, z_ = /,\s*/g, Hf = /(?:-?\.?\d|\.)+/gi, Mp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Kn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, vs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Op = /[+-]=-?[.\d]+/, A_ = /[^,'"\[\]\s]+/gi, B_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Nt, ce, uu, ml, Wr = {}, bo = {}, Pp, Rp = function(t) {
  return (bo = vi(t, Wr)) && kr;
}, xl = function(t, r) {
  return console.warn("Invalid property", t, "set to", r, "Missing plugin? gsap.registerPlugin()");
}, ca = function(t, r) {
  return !r && console.warn(t);
}, Ip = function(t, r) {
  return t && (Wr[t] = r) && bo && (bo[t] = r) || Wr;
}, da = function() {
  return 0;
}, G_ = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, to = {
  suppressEvents: !0,
  kill: !1
}, F_ = {
  suppressEvents: !0
}, yl = {}, Ue = [], lu = {}, kp, Br = {}, hs = {}, Vf = 30, ro = [], bl = "", Sl = function(t) {
  var r = t[0], e, i;
  if (me(r) || Wt(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
    for (i = ro.length; i-- && !ro[i].targetTest(r); )
      ;
    e = ro[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new nv(t[i], e))) || t.splice(i, 1);
  return t;
}, yn = function(t) {
  return t._gsap || Sl(Qr(t))[0]._gsap;
}, zp = function(t, r, e) {
  return (e = t[r]) && Wt(e) ? t[r]() : gl(e) && t.getAttribute && t.getAttribute(r) || e;
}, Tr = function(t, r) {
  return (t = t.split(",")).forEach(r) || t;
}, Ut = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Ft = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, ti = function(t, r) {
  var e = r.charAt(0), i = parseFloat(r.substr(2));
  return t = parseFloat(t), e === "+" ? t + i : e === "-" ? t - i : e === "*" ? t * i : t / i;
}, N_ = function(t, r) {
  for (var e = r.length, i = 0; t.indexOf(r[i]) < 0 && ++i < e; )
    ;
  return i < e;
}, So = function() {
  var t = Ue.length, r = Ue.slice(0), e, i;
  for (lu = {}, Ue.length = 0, e = 0; e < t; e++)
    i = r[e], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, wl = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Ap = function(t, r, e, i) {
  Ue.length && !dr && So(), t.render(r, e, i || !!(dr && r < 0 && wl(t))), Ue.length && !dr && So();
}, Bp = function(t) {
  var r = parseFloat(t);
  return (r || r === 0) && (t + "").match(A_).length < 2 ? r : lr(t) ? t.trim() : t;
}, Gp = function(t) {
  return t;
}, Hr = function(t, r) {
  for (var e in r)
    e in t || (t[e] = r[e]);
  return t;
}, L_ = function(t) {
  return function(r, e) {
    for (var i in e)
      i in r || i === "duration" && t || i === "ease" || (r[i] = e[i]);
  };
}, vi = function(t, r) {
  for (var e in r)
    t[e] = r[e];
  return t;
}, $f = function n(t, r) {
  for (var e in r)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = me(r[e]) ? n(t[e] || (t[e] = {}), r[e]) : r[e]);
  return t;
}, wo = function(t, r) {
  var e = {}, i;
  for (i in t)
    i in r || (e[i] = t[i]);
  return e;
}, Ji = function(t) {
  var r = t.parent || Nt, e = t.keyframes ? L_(gr(t.keyframes)) : Hr;
  if (Er(t.inherit))
    for (; r; )
      e(t, r.vars.defaults), r = r.parent || r._dp;
  return t;
}, Y_ = function(t, r) {
  for (var e = t.length, i = e === r.length; i && e-- && t[e] === r[e]; )
    ;
  return e < 0;
}, Fp = function(t, r, e, i, a) {
  e === void 0 && (e = "_first"), i === void 0 && (i = "_last");
  var o = t[i], s;
  if (a)
    for (s = r[a]; o && o[a] > s; )
      o = o._prev;
  return o ? (r._next = o._next, o._next = r) : (r._next = t[e], t[e] = r), r._next ? r._next._prev = r : t[i] = r, r._prev = o, r.parent = r._dp = t, r;
}, Wo = function(t, r, e, i) {
  e === void 0 && (e = "_first"), i === void 0 && (i = "_last");
  var a = r._prev, o = r._next;
  a ? a._next = o : t[e] === r && (t[e] = o), o ? o._prev = a : t[i] === r && (t[i] = a), r._next = r._prev = r.parent = null;
}, Je = function(t, r) {
  t.parent && (!r || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, bn = function(t, r) {
  if (t && (!r || r._end > t._dur || r._start < 0))
    for (var e = t; e; )
      e._dirty = 1, e = e.parent;
  return t;
}, X_ = function(t) {
  for (var r = t.parent; r && r.parent; )
    r._dirty = 1, r.totalDuration(), r = r.parent;
  return t;
}, fu = function(t, r, e, i) {
  return t._startAt && (dr ? t._startAt.revert(to) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(r, !0, i));
}, W_ = function n(t) {
  return !t || t._ts && n(t.parent);
}, qf = function(t) {
  return t._repeat ? hi(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, hi = function(t, r) {
  var e = Math.floor(t = Ft(t / r));
  return t && e === t ? e - 1 : e;
}, Co = function(t, r) {
  return (t - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur);
}, Ho = function(t) {
  return t._end = Ft(t._start + (t._tDur / Math.abs(t._ts || t._rts || zt) || 0));
}, Vo = function(t, r) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = Ft(e._time - (t._ts > 0 ? r / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - r) / -t._ts)), Ho(t), e._dirty || bn(e, t)), t;
}, Np = function(t, r) {
  var e;
  if ((r._time || !r._dur && r._initted || r._start < t._time && (r._dur || !r.add)) && (e = Co(t.rawTime(), r), (!r._dur || Pa(0, r.totalDuration(), e) - r._tTime > zt) && r.render(e, !0)), bn(t, r)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -zt;
  }
}, de = function(t, r, e, i) {
  return r.parent && Je(r), r._start = Ft((ke(e) ? e : e || t !== Nt ? jr(t, e, r) : t._time) + r._delay), r._end = Ft(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), Fp(t, r, "_first", "_last", t._sort ? "_start" : 0), cu(r) || (t._recent = r), i || Np(t, r), t._ts < 0 && Vo(t, t._tTime), t;
}, Lp = function(t, r) {
  return (Wr.ScrollTrigger || xl("scrollTrigger", r)) && Wr.ScrollTrigger.create(r, t);
}, Yp = function(t, r, e, i, a) {
  if (Dl(t, r, a), !t._initted)
    return 1;
  if (!e && t._pt && !dr && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && kp !== Gr.frame)
    return Ue.push(t), t._lazy = [a, i], 1;
}, H_ = function n(t) {
  var r = t.parent;
  return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || n(r));
}, cu = function(t) {
  var r = t.data;
  return r === "isFromStart" || r === "isStart";
}, V_ = function(t, r, e, i) {
  var a = t.ratio, o = r < 0 || !r && (!t._start && H_(t) && !(!t._initted && cu(t)) || (t._ts < 0 || t._dp._ts < 0) && !cu(t)) ? 0 : 1, s = t._rDelay, u = 0, l, f, d;
  if (s && t._repeat && (u = Pa(0, t._tDur, r), f = hi(u, s), t._yoyo && f & 1 && (o = 1 - o), f !== hi(t._tTime, s) && (a = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== a || dr || i || t._zTime === zt || !r && t._zTime) {
    if (!t._initted && Yp(t, r, i, e, u))
      return;
    for (d = t._zTime, t._zTime = r || (e ? zt : 0), e || (e = r && !d), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = u, l = t._pt; l; )
      l.r(o, l.d), l = l._next;
    r < 0 && fu(t, r, e, !0), t._onUpdate && !e && Nr(t, "onUpdate"), u && t._repeat && !e && t.parent && Nr(t, "onRepeat"), (r >= t._tDur || r < 0) && t.ratio === o && (o && Je(t, 1), !e && !dr && (Nr(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = r);
}, $_ = function(t, r, e) {
  var i;
  if (e > r)
    for (i = t._first; i && i._start <= e; ) {
      if (i.data === "isPause" && i._start > r)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= e; ) {
      if (i.data === "isPause" && i._start < r)
        return i;
      i = i._prev;
    }
}, gi = function(t, r, e, i) {
  var a = t._repeat, o = Ft(r) || 0, s = t._tTime / t._tDur;
  return s && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = a ? a < 0 ? 1e10 : Ft(o * (a + 1) + t._rDelay * a) : o, s > 0 && !i && Vo(t, t._tTime = t._tDur * s), t.parent && Ho(t), e || bn(t.parent, t), t;
}, Uf = function(t) {
  return t instanceof Sr ? bn(t) : gi(t, t._dur);
}, q_ = {
  _start: 0,
  endTime: da,
  totalDuration: da
}, jr = function n(t, r, e) {
  var i = t.labels, a = t._recent || q_, o = t.duration() >= Zr ? a.endTime(!1) : t._dur, s, u, l;
  return lr(r) && (isNaN(r) || r in i) ? (u = r.charAt(0), l = r.substr(-1) === "%", s = r.indexOf("="), u === "<" || u === ">" ? (s >= 0 && (r = r.replace(/=/, "")), (u === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (l ? (s < 0 ? a : e).totalDuration() / 100 : 1)) : s < 0 ? (r in i || (i[r] = o), i[r]) : (u = parseFloat(r.charAt(s - 1) + r.substr(s + 1)), l && e && (u = u / 100 * (gr(e) ? e[0] : e).totalDuration()), s > 1 ? n(t, r.substr(0, s - 1), e) + u : o + u)) : r == null ? o : +r;
}, ta = function(t, r, e) {
  var i = ke(r[1]), a = (i ? 2 : 1) + (t < 2 ? 0 : 1), o = r[a], s, u;
  if (i && (o.duration = r[1]), o.parent = e, t) {
    for (s = o, u = e; u && !("immediateRender" in s); )
      s = u.vars.defaults || {}, u = Er(u.vars.inherit) && u.parent;
    o.immediateRender = Er(s.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = r[a - 1];
  }
  return new Jt(r[0], o, r[a + 1]);
}, nn = function(t, r) {
  return t || t === 0 ? r(t) : r;
}, Pa = function(t, r, e) {
  return e < t ? t : e > r ? r : e;
}, hr = function(t, r) {
  return !lr(t) || !(r = B_.exec(t)) ? "" : r[1];
}, U_ = function(t, r, e) {
  return nn(e, function(i) {
    return Pa(t, r, i);
  });
}, du = [].slice, Xp = function(t, r) {
  return t && me(t) && "length" in t && (!r && !t.length || t.length - 1 in t && me(t[0])) && !t.nodeType && t !== ce;
}, j_ = function(t, r, e) {
  return e === void 0 && (e = []), t.forEach(function(i) {
    var a;
    return lr(i) && !r || Xp(i, 1) ? (a = e).push.apply(a, Qr(i)) : e.push(i);
  }) || e;
}, Qr = function(t, r, e) {
  return Gt && !r && Gt.selector ? Gt.selector(t) : lr(t) && !e && (uu || !_i()) ? du.call((r || ml).querySelectorAll(t), 0) : gr(t) ? j_(t, e) : Xp(t) ? du.call(t, 0) : t ? [t] : [];
}, pu = function(t) {
  return t = Qr(t)[0] || ca("Invalid scope") || {}, function(r) {
    var e = t.current || t.nativeElement || t;
    return Qr(r, e.querySelectorAll ? e : e === t ? ca("Invalid scope") || ml.createElement("div") : t);
  };
}, Wp = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Hp = function(t) {
  if (Wt(t))
    return t;
  var r = me(t) ? t : {
    each: t
  }, e = Sn(r.ease), i = r.from || 0, a = parseFloat(r.base) || 0, o = {}, s = i > 0 && i < 1, u = isNaN(i) || s, l = r.axis, f = i, d = i;
  return lr(i) ? f = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && u && (f = i[0], d = i[1]), function(p, c, h) {
    var v = (h || r).length, g = o[v], _, m, y, b, x, S, C, w, D;
    if (!g) {
      if (D = r.grid === "auto" ? 0 : (r.grid || [1, Zr])[1], !D) {
        for (C = -Zr; C < (C = h[D++].getBoundingClientRect().left) && D < v; )
          ;
        D < v && D--;
      }
      for (g = o[v] = [], _ = u ? Math.min(D, v) * f - 0.5 : i % D, m = D === Zr ? 0 : u ? v * d / D - 0.5 : i / D | 0, C = 0, w = Zr, S = 0; S < v; S++)
        y = S % D - _, b = m - (S / D | 0), g[S] = x = l ? Math.abs(l === "y" ? b : y) : Ep(y * y + b * b), x > C && (C = x), x < w && (w = x);
      i === "random" && Wp(g), g.max = C - w, g.min = w, g.v = v = (parseFloat(r.amount) || parseFloat(r.each) * (D > v ? v - 1 : l ? l === "y" ? v / D : D : Math.max(D, v / D)) || 0) * (i === "edges" ? -1 : 1), g.b = v < 0 ? a - v : a, g.u = hr(r.amount || r.each) || 0, e = e && v < 0 ? tv(e) : e;
    }
    return v = (g[p] - g.min) / g.max || 0, Ft(g.b + (e ? e(v) : v) * g.v) + g.u;
  };
}, vu = function(t) {
  var r = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var i = Ft(Math.round(parseFloat(e) / t) * t * r);
    return (i - i % 1) / r + (ke(e) ? 0 : hr(e));
  };
}, Vp = function(t, r) {
  var e = gr(t), i, a;
  return !e && me(t) && (i = e = t.radius || Zr, t.values ? (t = Qr(t.values), (a = !ke(t[0])) && (i *= i)) : t = vu(t.increment)), nn(r, e ? Wt(t) ? function(o) {
    return a = t(o), Math.abs(a - o) <= i ? a : o;
  } : function(o) {
    for (var s = parseFloat(a ? o.x : o), u = parseFloat(a ? o.y : 0), l = Zr, f = 0, d = t.length, p, c; d--; )
      a ? (p = t[d].x - s, c = t[d].y - u, p = p * p + c * c) : p = Math.abs(t[d] - s), p < l && (l = p, f = d);
    return f = !i || l <= i ? t[f] : o, a || f === o || ke(o) ? f : f + hr(o);
  } : vu(t));
}, $p = function(t, r, e, i) {
  return nn(gr(t) ? !r : e === !0 ? !!(e = 0) : !i, function() {
    return gr(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (r - t + e * 0.99)) / e) * e * i) / i;
  });
}, K_ = function() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return function(i) {
    return r.reduce(function(a, o) {
      return o(a);
    }, i);
  };
}, Z_ = function(t, r) {
  return function(e) {
    return t(parseFloat(e)) + (r || hr(e));
  };
}, Q_ = function(t, r, e) {
  return Up(t, r, 0, 1, e);
}, qp = function(t, r, e) {
  return nn(e, function(i) {
    return t[~~r(i)];
  });
}, J_ = function n(t, r, e) {
  var i = r - t;
  return gr(t) ? qp(t, n(0, t.length), r) : nn(e, function(a) {
    return (i + (a - t) % i) % i + t;
  });
}, tm = function n(t, r, e) {
  var i = r - t, a = i * 2;
  return gr(t) ? qp(t, n(0, t.length - 1), r) : nn(e, function(o) {
    return o = (a + (o - t) % a) % a || 0, t + (o > i ? a - o : o);
  });
}, pa = function(t) {
  return t.replace(k_, function(r) {
    var e = r.indexOf("[") + 1, i = r.substring(e || 7, e ? r.indexOf("]") : r.length - 1).split(z_);
    return $p(e ? i : +i[0], e ? 0 : +i[1], +i[2] || 1e-5);
  });
}, Up = function(t, r, e, i, a) {
  var o = r - t, s = i - e;
  return nn(a, function(u) {
    return e + ((u - t) / o * s || 0);
  });
}, rm = function n(t, r, e, i) {
  var a = isNaN(t + r) ? 0 : function(c) {
    return (1 - c) * t + c * r;
  };
  if (!a) {
    var o = lr(t), s = {}, u, l, f, d, p;
    if (e === !0 && (i = 1) && (e = null), o)
      t = {
        p: t
      }, r = {
        p: r
      };
    else if (gr(t) && !gr(r)) {
      for (f = [], d = t.length, p = d - 2, l = 1; l < d; l++)
        f.push(n(t[l - 1], t[l]));
      d--, a = function(h) {
        h *= d;
        var v = Math.min(p, ~~h);
        return f[v](h - v);
      }, e = r;
    } else
      i || (t = vi(gr(t) ? [] : {}, t));
    if (!f) {
      for (u in r)
        Cl.call(s, t, u, "get", r[u]);
      a = function(h) {
        return Ml(h, s) || (o ? t.p : t);
      };
    }
  }
  return nn(e, a);
}, jf = function(t, r, e) {
  var i = t.labels, a = Zr, o, s, u;
  for (o in i)
    s = i[o] - r, s < 0 == !!e && s && a > (s = Math.abs(s)) && (u = o, a = s);
  return u;
}, Nr = function(t, r, e) {
  var i = t.vars, a = i[r], o = Gt, s = t._ctx, u, l, f;
  if (a)
    return u = i[r + "Params"], l = i.callbackScope || t, e && Ue.length && So(), s && (Gt = s), f = u ? a.apply(l, u) : a.call(l), Gt = o, f;
}, Fi = function(t) {
  return Je(t), t.scrollTrigger && t.scrollTrigger.kill(!!dr), t.progress() < 1 && Nr(t, "onInterrupt"), t;
}, Zn, jp = [], Kp = function(t) {
  if (t)
    if (t = !t.name && t.default || t, _l() || t.headless) {
      var r = t.name, e = Wt(t), i = r && !e && t.init ? function() {
        this._props = [];
      } : t, a = {
        init: da,
        render: Ml,
        add: Cl,
        kill: _m,
        modifier: gm,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Tl,
        aliases: {},
        register: 0
      };
      if (_i(), t !== i) {
        if (Br[r])
          return;
        Hr(i, Hr(wo(t, a), o)), vi(i.prototype, vi(a, wo(t, o))), Br[i.prop = r] = i, t.targetTest && (ro.push(i), yl[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin";
      }
      Ip(r, i), t.register && t.register(kr, i, Mr);
    } else
      jp.push(t);
}, It = 255, Ni = {
  aqua: [0, It, It],
  lime: [0, It, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, It],
  navy: [0, 0, 128],
  white: [It, It, It],
  olive: [128, 128, 0],
  yellow: [It, It, 0],
  orange: [It, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [It, 0, 0],
  pink: [It, 192, 203],
  cyan: [0, It, It],
  transparent: [It, It, It, 0]
}, gs = function(t, r, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? r + (e - r) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? r + (e - r) * (2 / 3 - t) * 6 : r) * It + 0.5 | 0;
}, Zp = function(t, r, e) {
  var i = t ? ke(t) ? [t >> 16, t >> 8 & It, t & It] : 0 : Ni.black, a, o, s, u, l, f, d, p, c, h;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ni[t])
      i = Ni[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (a = t.charAt(1), o = t.charAt(2), s = t.charAt(3), t = "#" + a + a + o + o + s + s + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & It, i & It, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & It, t & It];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = h = t.match(Hf), !r)
        u = +i[0] % 360 / 360, l = +i[1] / 100, f = +i[2] / 100, o = f <= 0.5 ? f * (l + 1) : f + l - f * l, a = f * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = gs(u + 1 / 3, a, o), i[1] = gs(u, a, o), i[2] = gs(u - 1 / 3, a, o);
      else if (~t.indexOf("="))
        return i = t.match(Mp), e && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(Hf) || Ni.transparent;
    i = i.map(Number);
  }
  return r && !h && (a = i[0] / It, o = i[1] / It, s = i[2] / It, d = Math.max(a, o, s), p = Math.min(a, o, s), f = (d + p) / 2, d === p ? u = l = 0 : (c = d - p, l = f > 0.5 ? c / (2 - d - p) : c / (d + p), u = d === a ? (o - s) / c + (o < s ? 6 : 0) : d === o ? (s - a) / c + 2 : (a - o) / c + 4, u *= 60), i[0] = ~~(u + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(f * 100 + 0.5)), e && i.length < 4 && (i[3] = 1), i;
}, Qp = function(t) {
  var r = [], e = [], i = -1;
  return t.split(je).forEach(function(a) {
    var o = a.match(Kn) || [];
    r.push.apply(r, o), e.push(i += o.length + 1);
  }), r.c = e, r;
}, Kf = function(t, r, e) {
  var i = "", a = (t + i).match(je), o = r ? "hsla(" : "rgba(", s = 0, u, l, f, d;
  if (!a)
    return t;
  if (a = a.map(function(p) {
    return (p = Zp(p, r, 1)) && o + (r ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")";
  }), e && (f = Qp(t), u = e.c, u.join(i) !== f.c.join(i)))
    for (l = t.replace(je, "1").split(Kn), d = l.length - 1; s < d; s++)
      i += l[s] + (~u.indexOf(s) ? a.shift() || o + "0,0,0,0)" : (f.length ? f : a.length ? a : e).shift());
  if (!l)
    for (l = t.split(je), d = l.length - 1; s < d; s++)
      i += l[s] + a[s];
  return i + l[d];
}, je = function() {
  var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Ni)
    n += "|" + t + "\\b";
  return new RegExp(n + ")", "gi");
}(), em = /hsl[a]?\(/, Jp = function(t) {
  var r = t.join(" "), e;
  if (je.lastIndex = 0, je.test(r))
    return e = em.test(r), t[1] = Kf(t[1], e), t[0] = Kf(t[0], e, Qp(t[1])), !0;
}, va, Gr = function() {
  var n = Date.now, t = 500, r = 33, e = n(), i = e, a = 1e3 / 240, o = a, s = [], u, l, f, d, p, c, h = function v(g) {
    var _ = n() - i, m = g === !0, y, b, x, S;
    if ((_ > t || _ < 0) && (e += _ - r), i += _, x = i - e, y = x - o, (y > 0 || m) && (S = ++d.frame, p = x - d.time * 1e3, d.time = x = x / 1e3, o += y + (y >= a ? 4 : a - y), b = 1), m || (u = l(v)), b)
      for (c = 0; c < s.length; c++)
        s[c](x, p, S, g);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      h(!0);
    },
    deltaRatio: function(g) {
      return p / (1e3 / (g || 60));
    },
    wake: function() {
      Pp && (!uu && _l() && (ce = uu = window, ml = ce.document || {}, Wr.gsap = kr, (ce.gsapVersions || (ce.gsapVersions = [])).push(kr.version), Rp(bo || ce.GreenSockGlobals || !ce.gsap && ce || {}), jp.forEach(Kp)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && d.sleep(), l = f || function(g) {
        return setTimeout(g, o - d.time * 1e3 + 1 | 0);
      }, va = 1, h(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(u), va = 0, l = da;
    },
    lagSmoothing: function(g, _) {
      t = g || 1 / 0, r = Math.min(_ || 33, t);
    },
    fps: function(g) {
      a = 1e3 / (g || 240), o = d.time * 1e3 + a;
    },
    add: function(g, _, m) {
      var y = _ ? function(b, x, S, C) {
        g(b, x, S, C), d.remove(y);
      } : g;
      return d.remove(g), s[m ? "unshift" : "push"](y), _i(), y;
    },
    remove: function(g, _) {
      ~(_ = s.indexOf(g)) && s.splice(_, 1) && c >= _ && c--;
    },
    _listeners: s
  }, d;
}(), _i = function() {
  return !va && Gr.wake();
}, bt = {}, nm = /^[\d.\-M][\d.\-,\s]/, im = /["']/g, am = function(t) {
  for (var r = {}, e = t.substr(1, t.length - 3).split(":"), i = e[0], a = 1, o = e.length, s, u, l; a < o; a++)
    u = e[a], s = a !== o - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, s), r[i] = isNaN(l) ? l.replace(im, "").trim() : +l, i = u.substr(s + 1).trim();
  return r;
}, om = function(t) {
  var r = t.indexOf("(") + 1, e = t.indexOf(")"), i = t.indexOf("(", r);
  return t.substring(r, ~i && i < e ? t.indexOf(")", e + 1) : e);
}, sm = function(t) {
  var r = (t + "").split("("), e = bt[r[0]];
  return e && r.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [am(r[1])] : om(t).split(",").map(Bp)) : bt._CE && nm.test(t) ? bt._CE("", t) : e;
}, tv = function(t) {
  return function(r) {
    return 1 - t(1 - r);
  };
}, rv = function n(t, r) {
  for (var e = t._first, i; e; )
    e instanceof Sr ? n(e, r) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== r && (e.timeline ? n(e.timeline, r) : (i = e._ease, e._ease = e._yEase, e._yEase = i, e._yoyo = r)), e = e._next;
}, Sn = function(t, r) {
  return t && (Wt(t) ? t : bt[t] || sm(t)) || r;
}, kn = function(t, r, e, i) {
  e === void 0 && (e = function(u) {
    return 1 - r(1 - u);
  }), i === void 0 && (i = function(u) {
    return u < 0.5 ? r(u * 2) / 2 : 1 - r((1 - u) * 2) / 2;
  });
  var a = {
    easeIn: r,
    easeOut: e,
    easeInOut: i
  }, o;
  return Tr(t, function(s) {
    bt[s] = Wr[s] = a, bt[o = s.toLowerCase()] = e;
    for (var u in a)
      bt[o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = bt[s + "." + u] = a[u];
  }), a;
}, ev = function(t) {
  return function(r) {
    return r < 0.5 ? (1 - t(1 - r * 2)) / 2 : 0.5 + t((r - 0.5) * 2) / 2;
  };
}, _s = function n(t, r, e) {
  var i = r >= 1 ? r : 1, a = (e || (t ? 0.3 : 0.45)) / (r < 1 ? r : 1), o = a / su * (Math.asin(1 / i) || 0), s = function(f) {
    return f === 1 ? 1 : i * Math.pow(2, -10 * f) * I_((f - o) * a) + 1;
  }, u = t === "out" ? s : t === "in" ? function(l) {
    return 1 - s(1 - l);
  } : ev(s);
  return a = su / a, u.config = function(l, f) {
    return n(t, l, f);
  }, u;
}, ms = function n(t, r) {
  r === void 0 && (r = 1.70158);
  var e = function(o) {
    return o ? --o * o * ((r + 1) * o + r) + 1 : 0;
  }, i = t === "out" ? e : t === "in" ? function(a) {
    return 1 - e(1 - a);
  } : ev(e);
  return i.config = function(a) {
    return n(t, a);
  }, i;
};
Tr("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, t) {
  var r = t < 5 ? t + 1 : t;
  kn(n + ",Power" + (r - 1), t ? function(e) {
    return Math.pow(e, r);
  } : function(e) {
    return e;
  }, function(e) {
    return 1 - Math.pow(1 - e, r);
  }, function(e) {
    return e < 0.5 ? Math.pow(e * 2, r) / 2 : 1 - Math.pow((1 - e) * 2, r) / 2;
  });
});
bt.Linear.easeNone = bt.none = bt.Linear.easeIn;
kn("Elastic", _s("in"), _s("out"), _s());
(function(n, t) {
  var r = 1 / t, e = 2 * r, i = 2.5 * r, a = function(s) {
    return s < r ? n * s * s : s < e ? n * Math.pow(s - 1.5 / t, 2) + 0.75 : s < i ? n * (s -= 2.25 / t) * s + 0.9375 : n * Math.pow(s - 2.625 / t, 2) + 0.984375;
  };
  kn("Bounce", function(o) {
    return 1 - a(1 - o);
  }, a);
})(7.5625, 2.75);
kn("Expo", function(n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
kn("Circ", function(n) {
  return -(Ep(1 - n * n) - 1);
});
kn("Sine", function(n) {
  return n === 1 ? 1 : -R_(n * O_) + 1;
});
kn("Back", ms("in"), ms("out"), ms());
bt.SteppedEase = bt.steps = Wr.SteppedEase = {
  config: function(t, r) {
    t === void 0 && (t = 1);
    var e = 1 / t, i = t + (r ? 0 : 1), a = r ? 1 : 0, o = 1 - zt;
    return function(s) {
      return ((i * Pa(0, o, s) | 0) + a) * e;
    };
  }
};
pi.ease = bt["quad.out"];
Tr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
  return bl += n + "," + n + "Params,";
});
var nv = function(t, r) {
  this.id = P_++, t._gsap = this, this.target = t, this.harness = r, this.get = r ? r.get : zp, this.set = r ? r.getSetter : Tl;
}, ha = /* @__PURE__ */ function() {
  function n(r) {
    this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, gi(this, +r.duration, 1, 1), this.data = r.data, Gt && (this._ctx = Gt, Gt.data.push(this)), va || Gr.wake();
  }
  var t = n.prototype;
  return t.delay = function(e) {
    return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
  }, t.duration = function(e) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(e) {
    return arguments.length ? (this._dirty = 0, gi(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(e, i) {
    if (_i(), !arguments.length)
      return this._tTime;
    var a = this._dp;
    if (a && a.smoothChildTiming && this._ts) {
      for (Vo(this, e), !a._dp || a.parent || Np(a, this); a && a.parent; )
        a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0), a = a.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && de(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !i || this._initted && Math.abs(this._zTime) === zt || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Ap(this, e, i)), this;
  }, t.time = function(e, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + qf(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(e, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + qf(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, i) {
    var a = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * a, i) : this._repeat ? hi(this._tTime, a) + 1 : 1;
  }, t.timeScale = function(e, i) {
    if (!arguments.length)
      return this._rts === -zt ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var a = this.parent && this._ts ? Co(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -zt ? 0 : this._rts, this.totalTime(Pa(-Math.abs(this._delay), this.totalDuration(), a), i !== !1), Ho(this), X_(this);
  }, t.paused = function(e) {
    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (_i(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== zt && (this._tTime -= zt)))), this) : this._ps;
  }, t.startTime = function(e) {
    if (arguments.length) {
      this._start = Ft(e);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && de(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(e) {
    return this._start + (Er(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(e) {
    var i = this.parent || this._dp;
    return i ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Co(i.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = F_);
    var i = dr;
    return dr = e, wl(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), dr = i, this;
  }, t.globalTime = function(e) {
    for (var i = this, a = arguments.length ? e : i.rawTime(); i; )
      a = i._start + a / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : a;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Uf(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = e, Uf(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(e) {
    return arguments.length ? (this._yoyo = e, this) : this._yoyo;
  }, t.seek = function(e, i) {
    return this.totalTime(jr(this, e), Er(i));
  }, t.restart = function(e, i) {
    return this.play().totalTime(e ? -this._delay : 0, Er(i)), this._dur || (this._zTime = -zt), this;
  }, t.play = function(e, i) {
    return e != null && this.seek(e, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(e, i) {
    return e != null && this.seek(e || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(e, i) {
    return e != null && this.seek(e, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(e) {
    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -zt : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -zt, this;
  }, t.isActive = function() {
    var e = this.parent || this._dp, i = this._start, a;
    return !!(!e || this._ts && this._initted && e.isActive() && (a = e.rawTime(!0)) >= i && a < this.endTime(!0) - zt);
  }, t.eventCallback = function(e, i, a) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[e] = i, a && (o[e + "Params"] = a), e === "onUpdate" && (this._onUpdate = i)) : delete o[e], this) : o[e];
  }, t.then = function(e) {
    var i = this, a = i._prom;
    return new Promise(function(o) {
      var s = Wt(e) ? e : Gp, u = function() {
        var f = i.then;
        i.then = null, a && a(), Wt(s) && (s = s(i)) && (s.then || s === i) && (i.then = f), o(s), i.then = f;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? u() : i._prom = u;
    });
  }, t.kill = function() {
    Fi(this);
  }, n;
}();
Hr(ha.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -zt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Sr = /* @__PURE__ */ function(n) {
  Dp(t, n);
  function t(e, i) {
    var a;
    return e === void 0 && (e = {}), a = n.call(this, e) || this, a.labels = {}, a.smoothChildTiming = !!e.smoothChildTiming, a.autoRemoveChildren = !!e.autoRemoveChildren, a._sort = Er(e.sortChildren), Nt && de(e.parent || Nt, we(a), i), e.reversed && a.reverse(), e.paused && a.paused(!0), e.scrollTrigger && Lp(we(a), e.scrollTrigger), a;
  }
  var r = t.prototype;
  return r.to = function(i, a, o) {
    return ta(0, arguments, this), this;
  }, r.from = function(i, a, o) {
    return ta(1, arguments, this), this;
  }, r.fromTo = function(i, a, o, s) {
    return ta(2, arguments, this), this;
  }, r.set = function(i, a, o) {
    return a.duration = 0, a.parent = this, Ji(a).repeatDelay || (a.repeat = 0), a.immediateRender = !!a.immediateRender, new Jt(i, a, jr(this, o), 1), this;
  }, r.call = function(i, a, o) {
    return de(this, Jt.delayedCall(0, i, a), o);
  }, r.staggerTo = function(i, a, o, s, u, l, f) {
    return o.duration = a, o.stagger = o.stagger || s, o.onComplete = l, o.onCompleteParams = f, o.parent = this, new Jt(i, o, jr(this, u)), this;
  }, r.staggerFrom = function(i, a, o, s, u, l, f) {
    return o.runBackwards = 1, Ji(o).immediateRender = Er(o.immediateRender), this.staggerTo(i, a, o, s, u, l, f);
  }, r.staggerFromTo = function(i, a, o, s, u, l, f, d) {
    return s.startAt = o, Ji(s).immediateRender = Er(s.immediateRender), this.staggerTo(i, a, s, u, l, f, d);
  }, r.render = function(i, a, o) {
    var s = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = i <= 0 ? 0 : Ft(i), d = this._zTime < 0 != i < 0 && (this._initted || !l), p, c, h, v, g, _, m, y, b, x, S, C;
    if (this !== Nt && f > u && i >= 0 && (f = u), f !== this._tTime || o || d) {
      if (s !== this._time && l && (f += this._time - s, i += this._time - s), p = f, b = this._start, y = this._ts, _ = !y, d && (l || (s = this._zTime), (i || !a) && (this._zTime = i)), this._repeat) {
        if (S = this._yoyo, g = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(g * 100 + i, a, o);
        if (p = Ft(f % g), f === u ? (v = this._repeat, p = l) : (x = Ft(f / g), v = ~~x, v && v === x && (p = l, v--), p > l && (p = l)), x = hi(this._tTime, g), !s && this._tTime && x !== v && this._tTime - x * g - this._dur <= 0 && (x = v), S && v & 1 && (p = l - p, C = 1), v !== x && !this._lock) {
          var w = S && x & 1, D = w === (S && v & 1);
          if (v < x && (w = !w), s = w ? 0 : f % l ? l : f, this._lock = 1, this.render(s || (C ? 0 : Ft(v * g)), a, !l)._lock = 0, this._tTime = f, !a && this.parent && Nr(this, "onRepeat"), this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1, x = v), s && s !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, u = this._tDur, D && (this._lock = 2, s = w ? l : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !C && this.invalidate()), this._lock = 0, !this._ts && !_)
            return this;
          rv(this, C);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (m = $_(this, Ft(s), Ft(p)), m && (f -= p - (p = m._start))), this._tTime = f, this._time = p, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && f && l && !a && !x && (Nr(this, "onStart"), this._tTime !== f))
        return this;
      if (p >= s && i >= 0)
        for (c = this._first; c; ) {
          if (h = c._next, (c._act || p >= c._start) && c._ts && m !== c) {
            if (c.parent !== this)
              return this.render(i, a, o);
            if (c.render(c._ts > 0 ? (p - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (p - c._start) * c._ts, a, o), p !== this._time || !this._ts && !_) {
              m = 0, h && (f += this._zTime = -zt);
              break;
            }
          }
          c = h;
        }
      else {
        c = this._last;
        for (var T = i < 0 ? i : p; c; ) {
          if (h = c._prev, (c._act || T <= c._end) && c._ts && m !== c) {
            if (c.parent !== this)
              return this.render(i, a, o);
            if (c.render(c._ts > 0 ? (T - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (T - c._start) * c._ts, a, o || dr && wl(c)), p !== this._time || !this._ts && !_) {
              m = 0, h && (f += this._zTime = T ? -zt : zt);
              break;
            }
          }
          c = h;
        }
      }
      if (m && !a && (this.pause(), m.render(p >= s ? 0 : -zt)._zTime = p >= s ? 1 : -1, this._ts))
        return this._start = b, Ho(this), this.render(i, a, o);
      this._onUpdate && !a && Nr(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && s) && (b === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && Je(this, 1), !a && !(i < 0 && !s) && (f || s || !u) && (Nr(this, f === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, r.add = function(i, a) {
    var o = this;
    if (ke(a) || (a = jr(this, a, i)), !(i instanceof ha)) {
      if (gr(i))
        return i.forEach(function(s) {
          return o.add(s, a);
        }), this;
      if (lr(i))
        return this.addLabel(i, a);
      if (Wt(i))
        i = Jt.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? de(this, i, a) : this;
  }, r.getChildren = function(i, a, o, s) {
    i === void 0 && (i = !0), a === void 0 && (a = !0), o === void 0 && (o = !0), s === void 0 && (s = -Zr);
    for (var u = [], l = this._first; l; )
      l._start >= s && (l instanceof Jt ? a && u.push(l) : (o && u.push(l), i && u.push.apply(u, l.getChildren(!0, a, o)))), l = l._next;
    return u;
  }, r.getById = function(i) {
    for (var a = this.getChildren(1, 1, 1), o = a.length; o--; )
      if (a[o].vars.id === i)
        return a[o];
  }, r.remove = function(i) {
    return lr(i) ? this.removeLabel(i) : Wt(i) ? this.killTweensOf(i) : (i.parent === this && Wo(this, i), i === this._recent && (this._recent = this._last), bn(this));
  }, r.totalTime = function(i, a) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ft(Gr.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), n.prototype.totalTime.call(this, i, a), this._forcing = 0, this) : this._tTime;
  }, r.addLabel = function(i, a) {
    return this.labels[i] = jr(this, a), this;
  }, r.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, r.addPause = function(i, a, o) {
    var s = Jt.delayedCall(0, a || da, o);
    return s.data = "isPause", this._hasPause = 1, de(this, s, jr(this, i));
  }, r.removePause = function(i) {
    var a = this._first;
    for (i = jr(this, i); a; )
      a._start === i && a.data === "isPause" && Je(a), a = a._next;
  }, r.killTweensOf = function(i, a, o) {
    for (var s = this.getTweensOf(i, o), u = s.length; u--; )
      We !== s[u] && s[u].kill(i, a);
    return this;
  }, r.getTweensOf = function(i, a) {
    for (var o = [], s = Qr(i), u = this._first, l = ke(a), f; u; )
      u instanceof Jt ? N_(u._targets, s) && (l ? (!We || u._initted && u._ts) && u.globalTime(0) <= a && u.globalTime(u.totalDuration()) > a : !a || u.isActive()) && o.push(u) : (f = u.getTweensOf(s, a)).length && o.push.apply(o, f), u = u._next;
    return o;
  }, r.tweenTo = function(i, a) {
    a = a || {};
    var o = this, s = jr(o, i), u = a, l = u.startAt, f = u.onStart, d = u.onStartParams, p = u.immediateRender, c, h = Jt.to(o, Hr({
      ease: a.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: a.duration || Math.abs((s - (l && "time" in l ? l.time : o._time)) / o.timeScale()) || zt,
      onStart: function() {
        if (o.pause(), !c) {
          var g = a.duration || Math.abs((s - (l && "time" in l ? l.time : o._time)) / o.timeScale());
          h._dur !== g && gi(h, g, 0, 1).render(h._time, !0, !0), c = 1;
        }
        f && f.apply(h, d || []);
      }
    }, a));
    return p ? h.render(0) : h;
  }, r.tweenFromTo = function(i, a, o) {
    return this.tweenTo(a, Hr({
      startAt: {
        time: jr(this, i)
      }
    }, o));
  }, r.recent = function() {
    return this._recent;
  }, r.nextLabel = function(i) {
    return i === void 0 && (i = this._time), jf(this, jr(this, i));
  }, r.previousLabel = function(i) {
    return i === void 0 && (i = this._time), jf(this, jr(this, i), 1);
  }, r.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + zt);
  }, r.shiftChildren = function(i, a, o) {
    o === void 0 && (o = 0);
    var s = this._first, u = this.labels, l;
    for (i = Ft(i); s; )
      s._start >= o && (s._start += i, s._end += i), s = s._next;
    if (a)
      for (l in u)
        u[l] >= o && (u[l] += i);
    return bn(this);
  }, r.invalidate = function(i) {
    var a = this._first;
    for (this._lock = 0; a; )
      a.invalidate(i), a = a._next;
    return n.prototype.invalidate.call(this, i);
  }, r.clear = function(i) {
    i === void 0 && (i = !0);
    for (var a = this._first, o; a; )
      o = a._next, this.remove(a), a = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), bn(this);
  }, r.totalDuration = function(i) {
    var a = 0, o = this, s = o._last, u = Zr, l, f, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (d = o.parent; s; )
        l = s._prev, s._dirty && s.totalDuration(), f = s._start, f > u && o._sort && s._ts && !o._lock ? (o._lock = 1, de(o, s, f - s._delay, 1)._lock = 0) : u = f, f < 0 && s._ts && (a -= f, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += Ft(f / o._ts), o._time -= f, o._tTime -= f), o.shiftChildren(-f, !1, -1 / 0), u = 0), s._end > a && s._ts && (a = s._end), s = l;
      gi(o, o === Nt && o._time > a ? o._time : a, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(i) {
    if (Nt._ts && (Ap(Nt, Co(i, Nt)), kp = Gr.frame), Gr.frame >= Vf) {
      Vf += Yr.autoSleep || 120;
      var a = Nt._first;
      if ((!a || !a._ts) && Yr.autoSleep && Gr._listeners.length < 2) {
        for (; a && !a._ts; )
          a = a._next;
        a || Gr.sleep();
      }
    }
  }, t;
}(ha);
Hr(Sr.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var um = function(t, r, e, i, a, o, s) {
  var u = new Mr(this._pt, t, r, 0, 1, lv, null, a), l = 0, f = 0, d, p, c, h, v, g, _, m;
  for (u.b = e, u.e = i, e += "", i += "", (_ = ~i.indexOf("random(")) && (i = pa(i)), o && (m = [e, i], o(m, t, r), e = m[0], i = m[1]), p = e.match(vs) || []; d = vs.exec(i); )
    h = d[0], v = i.substring(l, d.index), c ? c = (c + 1) % 5 : v.substr(-5) === "rgba(" && (c = 1), h !== p[f++] && (g = parseFloat(p[f - 1]) || 0, u._pt = {
      _next: u._pt,
      p: v || f === 1 ? v : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: h.charAt(1) === "=" ? ti(g, h) - g : parseFloat(h) - g,
      m: c && c < 4 ? Math.round : 0
    }, l = vs.lastIndex);
  return u.c = l < i.length ? i.substring(l, i.length) : "", u.fp = s, (Op.test(i) || _) && (u.e = 0), this._pt = u, u;
}, Cl = function(t, r, e, i, a, o, s, u, l, f) {
  Wt(i) && (i = i(a || 0, t, o));
  var d = t[r], p = e !== "get" ? e : Wt(d) ? l ? t[r.indexOf("set") || !Wt(t["get" + r.substr(3)]) ? r : "get" + r.substr(3)](l) : t[r]() : d, c = Wt(d) ? l ? pm : sv : El, h;
  if (lr(i) && (~i.indexOf("random(") && (i = pa(i)), i.charAt(1) === "=" && (h = ti(p, i) + (hr(p) || 0), (h || h === 0) && (i = h))), !f || p !== i || hu)
    return !isNaN(p * i) && i !== "" ? (h = new Mr(this._pt, t, r, +p || 0, i - (p || 0), typeof d == "boolean" ? hm : uv, 0, c), l && (h.fp = l), s && h.modifier(s, this, t), this._pt = h) : (!d && !(r in t) && xl(r, i), um.call(this, t, r, p, i, c, u || Yr.stringFilter, l));
}, lm = function(t, r, e, i, a) {
  if (Wt(t) && (t = ra(t, a, r, e, i)), !me(t) || t.style && t.nodeType || gr(t) || Tp(t))
    return lr(t) ? ra(t, a, r, e, i) : t;
  var o = {}, s;
  for (s in t)
    o[s] = ra(t[s], a, r, e, i);
  return o;
}, iv = function(t, r, e, i, a, o) {
  var s, u, l, f;
  if (Br[t] && (s = new Br[t]()).init(a, s.rawVars ? r[t] : lm(r[t], i, a, o, e), e, i, o) !== !1 && (e._pt = u = new Mr(e._pt, a, t, 0, 1, s.render, s, 0, s.priority), e !== Zn))
    for (l = e._ptLookup[e._targets.indexOf(a)], f = s._props.length; f--; )
      l[s._props[f]] = u;
  return s;
}, We, hu, Dl = function n(t, r, e) {
  var i = t.vars, a = i.ease, o = i.startAt, s = i.immediateRender, u = i.lazy, l = i.onUpdate, f = i.runBackwards, d = i.yoyoEase, p = i.keyframes, c = i.autoRevert, h = t._dur, v = t._startAt, g = t._targets, _ = t.parent, m = _ && _.data === "nested" ? _.vars.targets : g, y = t._overwrite === "auto" && !hl, b = t.timeline, x, S, C, w, D, T, O, M, E, I, k, B, F;
  if (b && (!p || !a) && (a = "none"), t._ease = Sn(a, pi.ease), t._yEase = d ? tv(Sn(d === !0 ? a : d, pi.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !b && !!i.runBackwards, !b || p && !i.stagger) {
    if (M = g[0] ? yn(g[0]).harness : 0, B = M && i[M.prop], x = wo(i, yl), v && (v._zTime < 0 && v.progress(1), r < 0 && f && s && !c ? v.render(-1, !0) : v.revert(f && h ? to : G_), v._lazy = 0), o) {
      if (Je(t._startAt = Jt.set(g, Hr({
        data: "isStart",
        overwrite: !1,
        parent: _,
        immediateRender: !0,
        lazy: !v && Er(u),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return Nr(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (dr || !s && !c) && t._startAt.revert(to), s && h && r <= 0 && e <= 0) {
        r && (t._zTime = r);
        return;
      }
    } else if (f && h && !v) {
      if (r && (s = !1), C = Hr({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !v && Er(u),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: _
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, x), B && (C[M.prop] = B), Je(t._startAt = Jt.set(g, C)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (dr ? t._startAt.revert(to) : t._startAt.render(-1, !0)), t._zTime = r, !s)
        n(t._startAt, zt, zt);
      else if (!r)
        return;
    }
    for (t._pt = t._ptCache = 0, u = h && Er(u) || u && !h, S = 0; S < g.length; S++) {
      if (D = g[S], O = D._gsap || Sl(g)[S]._gsap, t._ptLookup[S] = I = {}, lu[O.id] && Ue.length && So(), k = m === g ? S : m.indexOf(D), M && (E = new M()).init(D, B || x, t, k, m) !== !1 && (t._pt = w = new Mr(t._pt, D, E.name, 0, 1, E.render, E, 0, E.priority), E._props.forEach(function(G) {
        I[G] = w;
      }), E.priority && (T = 1)), !M || B)
        for (C in x)
          Br[C] && (E = iv(C, x, t, k, D, m)) ? E.priority && (T = 1) : I[C] = w = Cl.call(t, D, C, "get", x[C], k, m, 0, i.stringFilter);
      t._op && t._op[S] && t.kill(D, t._op[S]), y && t._pt && (We = t, Nt.killTweensOf(D, I, t.globalTime(r)), F = !t.parent, We = 0), t._pt && u && (lu[O.id] = 1);
    }
    T && fv(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !F, p && r <= 0 && b.render(Zr, !0, !0);
}, fm = function(t, r, e, i, a, o, s, u) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[r], f, d, p, c;
  if (!l)
    for (l = t._ptCache[r] = [], p = t._ptLookup, c = t._targets.length; c--; ) {
      if (f = p[c][r], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== r && f.fp !== r; )
          f = f._next;
      if (!f)
        return hu = 1, t.vars[r] = "+=0", Dl(t, s), hu = 0, u ? ca(r + " not eligible for reset") : 1;
      l.push(f);
    }
  for (c = l.length; c--; )
    d = l[c], f = d._pt || d, f.s = (i || i === 0) && !a ? i : f.s + (i || 0) + o * f.c, f.c = e - f.s, d.e && (d.e = Ut(e) + hr(d.e)), d.b && (d.b = f.s + hr(d.b));
}, cm = function(t, r) {
  var e = t[0] ? yn(t[0]).harness : 0, i = e && e.aliases, a, o, s, u;
  if (!i)
    return r;
  a = vi({}, r);
  for (o in i)
    if (o in a)
      for (u = i[o].split(","), s = u.length; s--; )
        a[u[s]] = a[o];
  return a;
}, dm = function(t, r, e, i) {
  var a = r.ease || i || "power1.inOut", o, s;
  if (gr(r))
    s = e[t] || (e[t] = []), r.forEach(function(u, l) {
      return s.push({
        t: l / (r.length - 1) * 100,
        v: u,
        e: a
      });
    });
  else
    for (o in r)
      s = e[o] || (e[o] = []), o === "ease" || s.push({
        t: parseFloat(t),
        v: r[o],
        e: a
      });
}, ra = function(t, r, e, i, a) {
  return Wt(t) ? t.call(r, e, i, a) : lr(t) && ~t.indexOf("random(") ? pa(t) : t;
}, av = bl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ov = {};
Tr(av + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
  return ov[n] = 1;
});
var Jt = /* @__PURE__ */ function(n) {
  Dp(t, n);
  function t(e, i, a, o) {
    var s;
    typeof i == "number" && (a.duration = i, i = a, a = null), s = n.call(this, o ? i : Ji(i)) || this;
    var u = s.vars, l = u.duration, f = u.delay, d = u.immediateRender, p = u.stagger, c = u.overwrite, h = u.keyframes, v = u.defaults, g = u.scrollTrigger, _ = u.yoyoEase, m = i.parent || Nt, y = (gr(e) || Tp(e) ? ke(e[0]) : "length" in i) ? [e] : Qr(e), b, x, S, C, w, D, T, O;
    if (s._targets = y.length ? Sl(y) : ca("GSAP target " + e + " not found. https://gsap.com", !Yr.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = c, h || p || Ua(l) || Ua(f)) {
      if (i = s.vars, b = s.timeline = new Sr({
        data: "nested",
        defaults: v || {},
        targets: m && m.data === "nested" ? m.vars.targets : y
      }), b.kill(), b.parent = b._dp = we(s), b._start = 0, p || Ua(l) || Ua(f)) {
        if (C = y.length, T = p && Hp(p), me(p))
          for (w in p)
            ~av.indexOf(w) && (O || (O = {}), O[w] = p[w]);
        for (x = 0; x < C; x++)
          S = wo(i, ov), S.stagger = 0, _ && (S.yoyoEase = _), O && vi(S, O), D = y[x], S.duration = +ra(l, we(s), x, D, y), S.delay = (+ra(f, we(s), x, D, y) || 0) - s._delay, !p && C === 1 && S.delay && (s._delay = f = S.delay, s._start += f, S.delay = 0), b.to(D, S, T ? T(x, D, y) : 0), b._ease = bt.none;
        b.duration() ? l = f = 0 : s.timeline = 0;
      } else if (h) {
        Ji(Hr(b.vars.defaults, {
          ease: "none"
        })), b._ease = Sn(h.ease || i.ease || "none");
        var M = 0, E, I, k;
        if (gr(h))
          h.forEach(function(B) {
            return b.to(y, B, ">");
          }), b.duration();
        else {
          S = {};
          for (w in h)
            w === "ease" || w === "easeEach" || dm(w, h[w], S, h.easeEach);
          for (w in S)
            for (E = S[w].sort(function(B, F) {
              return B.t - F.t;
            }), M = 0, x = 0; x < E.length; x++)
              I = E[x], k = {
                ease: I.e,
                duration: (I.t - (x ? E[x - 1].t : 0)) / 100 * l
              }, k[w] = I.v, b.to(y, k, M), M += k.duration;
          b.duration() < l && b.to({}, {
            duration: l - b.duration()
          });
        }
      }
      l || s.duration(l = b.duration());
    } else
      s.timeline = 0;
    return c === !0 && !hl && (We = we(s), Nt.killTweensOf(y), We = 0), de(m, we(s), a), i.reversed && s.reverse(), i.paused && s.paused(!0), (d || !l && !h && s._start === Ft(m._time) && Er(d) && W_(we(s)) && m.data !== "nested") && (s._tTime = -zt, s.render(Math.max(0, -f) || 0)), g && Lp(we(s), g), s;
  }
  var r = t.prototype;
  return r.render = function(i, a, o) {
    var s = this._time, u = this._tDur, l = this._dur, f = i < 0, d = i > u - zt && !f ? u : i < zt ? 0 : i, p, c, h, v, g, _, m, y, b;
    if (!l)
      V_(this, i, a, o);
    else if (d !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (p = d, y = this.timeline, this._repeat) {
        if (v = l + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(v * 100 + i, a, o);
        if (p = Ft(d % v), d === u ? (h = this._repeat, p = l) : (g = Ft(d / v), h = ~~g, h && h === g ? (p = l, h--) : p > l && (p = l)), _ = this._yoyo && h & 1, _ && (b = this._yEase, p = l - p), g = hi(this._tTime, v), p === s && !o && this._initted && h === g)
          return this._tTime = d, this;
        h !== g && (y && this._yEase && rv(y, _), this.vars.repeatRefresh && !_ && !this._lock && p !== v && this._initted && (this._lock = o = 1, this.render(Ft(v * h), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Yp(this, f ? i : p, o, a, d))
          return this._tTime = 0, this;
        if (s !== this._time && !(o && this.vars.repeatRefresh && h !== g))
          return this;
        if (l !== this._dur)
          return this.render(i, a, o);
      }
      if (this._tTime = d, this._time = p, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = m = (b || this._ease)(p / l), this._from && (this.ratio = m = 1 - m), !s && d && !a && !g && (Nr(this, "onStart"), this._tTime !== d))
        return this;
      for (c = this._pt; c; )
        c.r(m, c.d), c = c._next;
      y && y.render(i < 0 ? i : y._dur * y._ease(p / this._dur), a, o) || this._startAt && (this._zTime = i), this._onUpdate && !a && (f && fu(this, i, a, o), Nr(this, "onUpdate")), this._repeat && h !== g && this.vars.onRepeat && !a && this.parent && Nr(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (f && !this._onUpdate && fu(this, i, !0, !0), (i || !l) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Je(this, 1), !a && !(f && !s) && (d || s || _) && (Nr(this, d === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, r.targets = function() {
    return this._targets;
  }, r.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), n.prototype.invalidate.call(this, i);
  }, r.resetTo = function(i, a, o, s, u) {
    va || Gr.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Dl(this, l), f = this._ease(l / this._dur), fm(this, i, a, o, s, f, l, u) ? this.resetTo(i, a, o, s, 1) : (Vo(this, 0), this.parent || Fp(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, r.kill = function(i, a) {
    if (a === void 0 && (a = "all"), !i && (!a || a === "all"))
      return this._lazy = this._pt = 0, this.parent ? Fi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!dr), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, a, We && We.vars.overwrite !== !0)._first || Fi(this), this.parent && o !== this.timeline.totalDuration() && gi(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var s = this._targets, u = i ? Qr(i) : s, l = this._ptLookup, f = this._pt, d, p, c, h, v, g, _;
    if ((!a || a === "all") && Y_(s, u))
      return a === "all" && (this._pt = 0), Fi(this);
    for (d = this._op = this._op || [], a !== "all" && (lr(a) && (v = {}, Tr(a, function(m) {
      return v[m] = 1;
    }), a = v), a = cm(s, a)), _ = s.length; _--; )
      if (~u.indexOf(s[_])) {
        p = l[_], a === "all" ? (d[_] = a, h = p, c = {}) : (c = d[_] = d[_] || {}, h = a);
        for (v in h)
          g = p && p[v], g && ((!("kill" in g.d) || g.d.kill(v) === !0) && Wo(this, g, "_pt"), delete p[v]), c !== "all" && (c[v] = 1);
      }
    return this._initted && !this._pt && f && Fi(this), this;
  }, t.to = function(i, a) {
    return new t(i, a, arguments[2]);
  }, t.from = function(i, a) {
    return ta(1, arguments);
  }, t.delayedCall = function(i, a, o, s) {
    return new t(a, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: a,
      onReverseComplete: a,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: s
    });
  }, t.fromTo = function(i, a, o) {
    return ta(2, arguments);
  }, t.set = function(i, a) {
    return a.duration = 0, a.repeatDelay || (a.repeat = 0), new t(i, a);
  }, t.killTweensOf = function(i, a, o) {
    return Nt.killTweensOf(i, a, o);
  }, t;
}(ha);
Hr(Jt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Tr("staggerTo,staggerFrom,staggerFromTo", function(n) {
  Jt[n] = function() {
    var t = new Sr(), r = du.call(arguments, 0);
    return r.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), t[n].apply(t, r);
  };
});
var El = function(t, r, e) {
  return t[r] = e;
}, sv = function(t, r, e) {
  return t[r](e);
}, pm = function(t, r, e, i) {
  return t[r](i.fp, e);
}, vm = function(t, r, e) {
  return t.setAttribute(r, e);
}, Tl = function(t, r) {
  return Wt(t[r]) ? sv : gl(t[r]) && t.setAttribute ? vm : El;
}, uv = function(t, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e6) / 1e6, r);
}, hm = function(t, r) {
  return r.set(r.t, r.p, !!(r.s + r.c * t), r);
}, lv = function(t, r) {
  var e = r._pt, i = "";
  if (!t && r.b)
    i = r.b;
  else if (t === 1 && r.e)
    i = r.e;
  else {
    for (; e; )
      i = e.p + (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) + i, e = e._next;
    i += r.c;
  }
  r.set(r.t, r.p, i, r);
}, Ml = function(t, r) {
  for (var e = r._pt; e; )
    e.r(t, e.d), e = e._next;
}, gm = function(t, r, e, i) {
  for (var a = this._pt, o; a; )
    o = a._next, a.p === i && a.modifier(t, r, e), a = o;
}, _m = function(t) {
  for (var r = this._pt, e, i; r; )
    i = r._next, r.p === t && !r.op || r.op === t ? Wo(this, r, "_pt") : r.dep || (e = 1), r = i;
  return !e;
}, mm = function(t, r, e, i) {
  i.mSet(t, r, i.m.call(i.tween, e, i.mt), i);
}, fv = function(t) {
  for (var r = t._pt, e, i, a, o; r; ) {
    for (e = r._next, i = a; i && i.pr > r.pr; )
      i = i._next;
    (r._prev = i ? i._prev : o) ? r._prev._next = r : a = r, (r._next = i) ? i._prev = r : o = r, r = e;
  }
  t._pt = a;
}, Mr = /* @__PURE__ */ function() {
  function n(r, e, i, a, o, s, u, l, f) {
    this.t = e, this.s = a, this.c = o, this.p = i, this.r = s || uv, this.d = u || this, this.set = l || El, this.pr = f || 0, this._next = r, r && (r._prev = this);
  }
  var t = n.prototype;
  return t.modifier = function(e, i, a) {
    this.mSet = this.mSet || this.set, this.set = mm, this.m = e, this.mt = a, this.tween = i;
  }, n;
}();
Tr(bl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
  return yl[n] = 1;
});
Wr.TweenMax = Wr.TweenLite = Jt;
Wr.TimelineLite = Wr.TimelineMax = Sr;
Nt = new Sr({
  sortChildren: !1,
  defaults: pi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Yr.stringFilter = Jp;
var wn = [], eo = {}, xm = [], Zf = 0, ym = 0, xs = function(t) {
  return (eo[t] || xm).map(function(r) {
    return r();
  });
}, gu = function() {
  var t = Date.now(), r = [];
  t - Zf > 2 && (xs("matchMediaInit"), wn.forEach(function(e) {
    var i = e.queries, a = e.conditions, o, s, u, l;
    for (s in i)
      o = ce.matchMedia(i[s]).matches, o && (u = 1), o !== a[s] && (a[s] = o, l = 1);
    l && (e.revert(), u && r.push(e));
  }), xs("matchMediaRevert"), r.forEach(function(e) {
    return e.onMatch(e, function(i) {
      return e.add(null, i);
    });
  }), Zf = t, xs("matchMedia"));
}, cv = /* @__PURE__ */ function() {
  function n(r, e) {
    this.selector = e && pu(e), this.data = [], this._r = [], this.isReverted = !1, this.id = ym++, r && this.add(r);
  }
  var t = n.prototype;
  return t.add = function(e, i, a) {
    Wt(e) && (a = i, i = e, e = Wt);
    var o = this, s = function() {
      var l = Gt, f = o.selector, d;
      return l && l !== o && l.data.push(o), a && (o.selector = pu(a)), Gt = o, d = i.apply(o, arguments), Wt(d) && o._r.push(d), Gt = l, o.selector = f, o.isReverted = !1, d;
    };
    return o.last = s, e === Wt ? s(o, function(u) {
      return o.add(null, u);
    }) : e ? o[e] = s : s;
  }, t.ignore = function(e) {
    var i = Gt;
    Gt = null, e(this), Gt = i;
  }, t.getTweens = function() {
    var e = [];
    return this.data.forEach(function(i) {
      return i instanceof n ? e.push.apply(e, i.getTweens()) : i instanceof Jt && !(i.parent && i.parent.data === "nested") && e.push(i);
    }), e;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(e, i) {
    var a = this;
    if (e ? function() {
      for (var s = a.getTweens(), u = a.data.length, l; u--; )
        l = a.data[u], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(f) {
          return s.splice(s.indexOf(f), 1);
        }));
      for (s.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, d) {
        return d.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(e);
      }), u = a.data.length; u--; )
        l = a.data[u], l instanceof Sr ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof Jt) && l.revert && l.revert(e);
      a._r.forEach(function(f) {
        return f(e, a);
      }), a.isReverted = !0;
    }() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), i)
      for (var o = wn.length; o--; )
        wn[o].id === this.id && wn.splice(o, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, n;
}(), bm = /* @__PURE__ */ function() {
  function n(r) {
    this.contexts = [], this.scope = r, Gt && Gt.data.push(this);
  }
  var t = n.prototype;
  return t.add = function(e, i, a) {
    me(e) || (e = {
      matches: e
    });
    var o = new cv(0, a || this.scope), s = o.conditions = {}, u, l, f;
    Gt && !o.selector && (o.selector = Gt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = e;
    for (l in e)
      l === "all" ? f = 1 : (u = ce.matchMedia(e[l]), u && (wn.indexOf(o) < 0 && wn.push(o), (s[l] = u.matches) && (f = 1), u.addListener ? u.addListener(gu) : u.addEventListener("change", gu)));
    return f && i(o, function(d) {
      return o.add(null, d);
    }), this;
  }, t.revert = function(e) {
    this.kill(e || {});
  }, t.kill = function(e) {
    this.contexts.forEach(function(i) {
      return i.kill(e, !0);
    });
  }, n;
}(), Do = {
  registerPlugin: function() {
    for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
      r[e] = arguments[e];
    r.forEach(function(i) {
      return Kp(i);
    });
  },
  timeline: function(t) {
    return new Sr(t);
  },
  getTweensOf: function(t, r) {
    return Nt.getTweensOf(t, r);
  },
  getProperty: function(t, r, e, i) {
    lr(t) && (t = Qr(t)[0]);
    var a = yn(t || {}).get, o = e ? Gp : Bp;
    return e === "native" && (e = ""), t && (r ? o((Br[r] && Br[r].get || a)(t, r, e, i)) : function(s, u, l) {
      return o((Br[s] && Br[s].get || a)(t, s, u, l));
    });
  },
  quickSetter: function(t, r, e) {
    if (t = Qr(t), t.length > 1) {
      var i = t.map(function(f) {
        return kr.quickSetter(f, r, e);
      }), a = i.length;
      return function(f) {
        for (var d = a; d--; )
          i[d](f);
      };
    }
    t = t[0] || {};
    var o = Br[r], s = yn(t), u = s.harness && (s.harness.aliases || {})[r] || r, l = o ? function(f) {
      var d = new o();
      Zn._pt = 0, d.init(t, e ? f + e : f, Zn, 0, [t]), d.render(1, d), Zn._pt && Ml(1, Zn);
    } : s.set(t, u);
    return o ? l : function(f) {
      return l(t, u, e ? f + e : f, s, 1);
    };
  },
  quickTo: function(t, r, e) {
    var i, a = kr.to(t, Hr((i = {}, i[r] = "+=0.1", i.paused = !0, i.stagger = 0, i), e || {})), o = function(u, l, f) {
      return a.resetTo(r, u, l, f);
    };
    return o.tween = a, o;
  },
  isTweening: function(t) {
    return Nt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Sn(t.ease, pi.ease)), $f(pi, t || {});
  },
  config: function(t) {
    return $f(Yr, t || {});
  },
  registerEffect: function(t) {
    var r = t.name, e = t.effect, i = t.plugins, a = t.defaults, o = t.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !Br[s] && !Wr[s] && ca(r + " effect requires " + s + " plugin.");
    }), hs[r] = function(s, u, l) {
      return e(Qr(s), Hr(u || {}, a), l);
    }, o && (Sr.prototype[r] = function(s, u, l) {
      return this.add(hs[r](s, me(u) ? u : (l = u) && {}, this), l);
    });
  },
  registerEase: function(t, r) {
    bt[t] = Sn(r);
  },
  parseEase: function(t, r) {
    return arguments.length ? Sn(t, r) : bt;
  },
  getById: function(t) {
    return Nt.getById(t);
  },
  exportRoot: function(t, r) {
    t === void 0 && (t = {});
    var e = new Sr(t), i, a;
    for (e.smoothChildTiming = Er(t.smoothChildTiming), Nt.remove(e), e._dp = 0, e._time = e._tTime = Nt._time, i = Nt._first; i; )
      a = i._next, (r || !(!i._dur && i instanceof Jt && i.vars.onComplete === i._targets[0])) && de(e, i, i._start - i._delay), i = a;
    return de(Nt, e, 0), e;
  },
  context: function(t, r) {
    return t ? new cv(t, r) : Gt;
  },
  matchMedia: function(t) {
    return new bm(t);
  },
  matchMediaRefresh: function() {
    return wn.forEach(function(t) {
      var r = t.conditions, e, i;
      for (i in r)
        r[i] && (r[i] = !1, e = 1);
      e && t.revert();
    }) || gu();
  },
  addEventListener: function(t, r) {
    var e = eo[t] || (eo[t] = []);
    ~e.indexOf(r) || e.push(r);
  },
  removeEventListener: function(t, r) {
    var e = eo[t], i = e && e.indexOf(r);
    i >= 0 && e.splice(i, 1);
  },
  utils: {
    wrap: J_,
    wrapYoyo: tm,
    distribute: Hp,
    random: $p,
    snap: Vp,
    normalize: Q_,
    getUnit: hr,
    clamp: U_,
    splitColor: Zp,
    toArray: Qr,
    selector: pu,
    mapRange: Up,
    pipe: K_,
    unitize: Z_,
    interpolate: rm,
    shuffle: Wp
  },
  install: Rp,
  effects: hs,
  ticker: Gr,
  updateRoot: Sr.updateRoot,
  plugins: Br,
  globalTimeline: Nt,
  core: {
    PropTween: Mr,
    globals: Ip,
    Tween: Jt,
    Timeline: Sr,
    Animation: ha,
    getCache: yn,
    _removeLinkedListItem: Wo,
    reverting: function() {
      return dr;
    },
    context: function(t) {
      return t && Gt && (Gt.data.push(t), t._ctx = Gt), Gt;
    },
    suppressOverwrites: function(t) {
      return hl = t;
    }
  }
};
Tr("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
  return Do[n] = Jt[n];
});
Gr.add(Sr.updateRoot);
Zn = Do.to({}, {
  duration: 0
});
var Sm = function(t, r) {
  for (var e = t._pt; e && e.p !== r && e.op !== r && e.fp !== r; )
    e = e._next;
  return e;
}, wm = function(t, r) {
  var e = t._targets, i, a, o;
  for (i in r)
    for (a = e.length; a--; )
      o = t._ptLookup[a][i], o && (o = o.d) && (o._pt && (o = Sm(o, i)), o && o.modifier && o.modifier(r[i], t, e[a], i));
}, ys = function(t, r) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, a, o) {
      o._onInit = function(s) {
        var u, l;
        if (lr(a) && (u = {}, Tr(a, function(f) {
          return u[f] = 1;
        }), a = u), r) {
          u = {};
          for (l in a)
            u[l] = r(a[l]);
          a = u;
        }
        wm(s, a);
      };
    }
  };
}, kr = Do.registerPlugin({
  name: "attr",
  init: function(t, r, e, i, a) {
    var o, s, u;
    this.tween = e;
    for (o in r)
      u = t.getAttribute(o) || "", s = this.add(t, "setAttribute", (u || 0) + "", r[o], i, a, 0, 0, o), s.op = o, s.b = u, this._props.push(o);
  },
  render: function(t, r) {
    for (var e = r._pt; e; )
      dr ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, r) {
    for (var e = r.length; e--; )
      this.add(t, e, t[e] || 0, r[e], 0, 0, 0, 0, 0, 1);
  }
}, ys("roundProps", vu), ys("modifiers"), ys("snap", Vp)) || Do;
Jt.version = Sr.version = kr.version = "3.14.2";
Pp = 1;
_l() && _i();
bt.Power0;
bt.Power1;
bt.Power2;
bt.Power3;
bt.Power4;
bt.Linear;
bt.Quad;
bt.Cubic;
bt.Quart;
bt.Quint;
bt.Strong;
bt.Elastic;
bt.Back;
bt.SteppedEase;
bt.Bounce;
bt.Sine;
bt.Expo;
bt.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Qf, He, ri, Ol, xn, Jf, Pl, Cm = function() {
  return typeof window < "u";
}, ze = {}, dn = 180 / Math.PI, ei = Math.PI / 180, Ln = Math.atan2, tc = 1e8, Rl = /([A-Z])/g, Dm = /(left|right|width|margin|padding|x)/i, Em = /[\s,\(]\S/, he = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, _u = function(t, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u, r);
}, Tm = function(t, r) {
  return r.set(r.t, r.p, t === 1 ? r.e : Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u, r);
}, Mm = function(t, r) {
  return r.set(r.t, r.p, t ? Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u : r.b, r);
}, Om = function(t, r) {
  return r.set(r.t, r.p, t === 1 ? r.e : t ? Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u : r.b, r);
}, Pm = function(t, r) {
  var e = r.s + r.c * t;
  r.set(r.t, r.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + r.u, r);
}, dv = function(t, r) {
  return r.set(r.t, r.p, t ? r.e : r.b, r);
}, pv = function(t, r) {
  return r.set(r.t, r.p, t !== 1 ? r.b : r.e, r);
}, Rm = function(t, r, e) {
  return t.style[r] = e;
}, Im = function(t, r, e) {
  return t.style.setProperty(r, e);
}, km = function(t, r, e) {
  return t._gsap[r] = e;
}, zm = function(t, r, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, Am = function(t, r, e, i, a) {
  var o = t._gsap;
  o.scaleX = o.scaleY = e, o.renderTransform(a, o);
}, Bm = function(t, r, e, i, a) {
  var o = t._gsap;
  o[r] = e, o.renderTransform(a, o);
}, Yt = "transform", Or = Yt + "Origin", Gm = function n(t, r) {
  var e = this, i = this.target, a = i.style, o = i._gsap;
  if (t in ze && a) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = he[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(s) {
        return e.tfm[s] = Ce(i, s);
      }) : this.tfm[t] = o.x ? o[t] : Ce(i, t), t === Or && (this.tfm.zOrigin = o.zOrigin);
    else
      return he.transform.split(",").forEach(function(s) {
        return n.call(e, s, r);
      });
    if (this.props.indexOf(Yt) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Or, r, "")), t = Yt;
  }
  (a || r) && this.props.push(t, r, a[t]);
}, vv = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Fm = function() {
  var t = this.props, r = this.target, e = r.style, i = r._gsap, a, o;
  for (a = 0; a < t.length; a += 3)
    t[a + 1] ? t[a + 1] === 2 ? r[t[a]](t[a + 2]) : r[t[a]] = t[a + 2] : t[a + 2] ? e[t[a]] = t[a + 2] : e.removeProperty(t[a].substr(0, 2) === "--" ? t[a] : t[a].replace(Rl, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), a = Pl(), (!a || !a.isStart) && !e[Yt] && (vv(e), i.zOrigin && e[Or] && (e[Or] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, hv = function(t, r) {
  var e = {
    target: t,
    props: [],
    revert: Fm,
    save: Gm
  };
  return t._gsap || kr.core.getCache(t), r && t.style && t.nodeType && r.split(",").forEach(function(i) {
    return e.save(i);
  }), e;
}, gv, mu = function(t, r) {
  var e = He.createElementNS ? He.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : He.createElement(t);
  return e && e.style ? e : He.createElement(t);
}, Lr = function n(t, r, e) {
  var i = getComputedStyle(t);
  return i[r] || i.getPropertyValue(r.replace(Rl, "-$1").toLowerCase()) || i.getPropertyValue(r) || !e && n(t, mi(r) || r, 1) || "";
}, rc = "O,Moz,ms,Ms,Webkit".split(","), mi = function(t, r, e) {
  var i = r || xn, a = i.style, o = 5;
  if (t in a && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(rc[o] + t in a); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? rc[o] : "") + t;
}, xu = function() {
  Cm() && window.document && (Qf = window, He = Qf.document, ri = He.documentElement, xn = mu("div") || {
    style: {}
  }, mu("div"), Yt = mi(Yt), Or = Yt + "Origin", xn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", gv = !!mi("perspective"), Pl = kr.core.reverting, Ol = 1);
}, ec = function(t) {
  var r = t.ownerSVGElement, e = mu("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0), a;
  i.style.display = "block", e.appendChild(i), ri.appendChild(e);
  try {
    a = i.getBBox();
  } catch {
  }
  return e.removeChild(i), ri.removeChild(e), a;
}, nc = function(t, r) {
  for (var e = r.length; e--; )
    if (t.hasAttribute(r[e]))
      return t.getAttribute(r[e]);
}, _v = function(t) {
  var r, e;
  try {
    r = t.getBBox();
  } catch {
    r = ec(t), e = 1;
  }
  return r && (r.width || r.height) || e || (r = ec(t)), r && !r.width && !r.x && !r.y ? {
    x: +nc(t, ["x", "cx", "x1"]) || 0,
    y: +nc(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : r;
}, mv = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && _v(t));
}, tn = function(t, r) {
  if (r) {
    var e = t.style, i;
    r in ze && r !== Or && (r = Yt), e.removeProperty ? (i = r.substr(0, 2), (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), e.removeProperty(i === "--" ? r : r.replace(Rl, "-$1").toLowerCase())) : e.removeAttribute(r);
  }
}, Ve = function(t, r, e, i, a, o) {
  var s = new Mr(t._pt, r, e, 0, 1, o ? pv : dv);
  return t._pt = s, s.b = i, s.e = a, t._props.push(e), s;
}, ic = {
  deg: 1,
  rad: 1,
  turn: 1
}, Nm = {
  grid: 1,
  flex: 1
}, rn = function n(t, r, e, i) {
  var a = parseFloat(e) || 0, o = (e + "").trim().substr((a + "").length) || "px", s = xn.style, u = Dm.test(r), l = t.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (u ? "Width" : "Height"), d = 100, p = i === "px", c = i === "%", h, v, g, _;
  if (i === o || !a || ic[i] || ic[o])
    return a;
  if (o !== "px" && !p && (a = n(t, r, e, "px")), _ = t.getCTM && mv(t), (c || o === "%") && (ze[r] || ~r.indexOf("adius")))
    return h = _ ? t.getBBox()[u ? "width" : "height"] : t[f], Ut(c ? a / h * d : a / 100 * h);
  if (s[u ? "width" : "height"] = d + (p ? o : i), v = i !== "rem" && ~r.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, _ && (v = (t.ownerSVGElement || {}).parentNode), (!v || v === He || !v.appendChild) && (v = He.body), g = v._gsap, g && c && g.width && u && g.time === Gr.time && !g.uncache)
    return Ut(a / g.width * d);
  if (c && (r === "height" || r === "width")) {
    var m = t.style[r];
    t.style[r] = d + i, h = t[f], m ? t.style[r] = m : tn(t, r);
  } else
    (c || o === "%") && !Nm[Lr(v, "display")] && (s.position = Lr(t, "position")), v === t && (s.position = "static"), v.appendChild(xn), h = xn[f], v.removeChild(xn), s.position = "absolute";
  return u && c && (g = yn(v), g.time = Gr.time, g.width = v[f]), Ut(p ? h * a / d : h && a ? d / h * a : 0);
}, Ce = function(t, r, e, i) {
  var a;
  return Ol || xu(), r in he && r !== "transform" && (r = he[r], ~r.indexOf(",") && (r = r.split(",")[0])), ze[r] && r !== "transform" ? (a = _a(t, i), a = r !== "transformOrigin" ? a[r] : a.svg ? a.origin : To(Lr(t, Or)) + " " + a.zOrigin + "px") : (a = t.style[r], (!a || a === "auto" || i || ~(a + "").indexOf("calc(")) && (a = Eo[r] && Eo[r](t, r, e) || Lr(t, r) || zp(t, r) || (r === "opacity" ? 1 : 0))), e && !~(a + "").trim().indexOf(" ") ? rn(t, r, a, e) + e : a;
}, Lm = function(t, r, e, i) {
  if (!e || e === "none") {
    var a = mi(r, t, 1), o = a && Lr(t, a, 1);
    o && o !== e ? (r = a, e = o) : r === "borderColor" && (e = Lr(t, "borderTopColor"));
  }
  var s = new Mr(this._pt, t.style, r, 0, 1, lv), u = 0, l = 0, f, d, p, c, h, v, g, _, m, y, b, x;
  if (s.b = e, s.e = i, e += "", i += "", i.substring(0, 6) === "var(--" && (i = Lr(t, i.substring(4, i.indexOf(")")))), i === "auto" && (v = t.style[r], t.style[r] = i, i = Lr(t, r) || i, v ? t.style[r] = v : tn(t, r)), f = [e, i], Jp(f), e = f[0], i = f[1], p = e.match(Kn) || [], x = i.match(Kn) || [], x.length) {
    for (; d = Kn.exec(i); )
      g = d[0], m = i.substring(u, d.index), h ? h = (h + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (h = 1), g !== (v = p[l++] || "") && (c = parseFloat(v) || 0, b = v.substr((c + "").length), g.charAt(1) === "=" && (g = ti(c, g) + b), _ = parseFloat(g), y = g.substr((_ + "").length), u = Kn.lastIndex - y.length, y || (y = y || Yr.units[r] || b, u === i.length && (i += y, s.e += y)), b !== y && (c = rn(t, r, v, y) || 0), s._pt = {
        _next: s._pt,
        p: m || l === 1 ? m : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: c,
        c: _ - c,
        m: h && h < 4 || r === "zIndex" ? Math.round : 0
      });
    s.c = u < i.length ? i.substring(u, i.length) : "";
  } else
    s.r = r === "display" && i === "none" ? pv : dv;
  return Op.test(i) && (s.e = 0), this._pt = s, s;
}, ac = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ym = function(t) {
  var r = t.split(" "), e = r[0], i = r[1] || "50%";
  return (e === "top" || e === "bottom" || i === "left" || i === "right") && (t = e, e = i, i = t), r[0] = ac[e] || e, r[1] = ac[i] || i, r.join(" ");
}, Xm = function(t, r) {
  if (r.tween && r.tween._time === r.tween._dur) {
    var e = r.t, i = e.style, a = r.u, o = e._gsap, s, u, l;
    if (a === "all" || a === !0)
      i.cssText = "", u = 1;
    else
      for (a = a.split(","), l = a.length; --l > -1; )
        s = a[l], ze[s] && (u = 1, s = s === "transformOrigin" ? Or : Yt), tn(e, s);
    u && (tn(e, Yt), o && (o.svg && e.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", _a(e, 1), o.uncache = 1, vv(i)));
  }
}, Eo = {
  clearProps: function(t, r, e, i, a) {
    if (a.data !== "isFromStart") {
      var o = t._pt = new Mr(t._pt, r, e, 0, 0, Xm);
      return o.u = i, o.pr = -10, o.tween = a, t._props.push(e), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, ga = [1, 0, 0, 1, 0, 0], xv = {}, yv = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, oc = function(t) {
  var r = Lr(t, Yt);
  return yv(r) ? ga : r.substr(7).match(Mp).map(Ut);
}, Il = function(t, r) {
  var e = t._gsap || yn(t), i = t.style, a = oc(t), o, s, u, l;
  return e.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, a = [u.a, u.b, u.c, u.d, u.e, u.f], a.join(",") === "1,0,0,1,0,0" ? ga : a) : (a === ga && !t.offsetParent && t !== ri && !e.svg && (u = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, s = t.nextElementSibling, ri.appendChild(t)), a = oc(t), u ? i.display = u : tn(t, "display"), l && (s ? o.insertBefore(t, s) : o ? o.appendChild(t) : ri.removeChild(t))), r && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
}, yu = function(t, r, e, i, a, o) {
  var s = t._gsap, u = a || Il(t, !0), l = s.xOrigin || 0, f = s.yOrigin || 0, d = s.xOffset || 0, p = s.yOffset || 0, c = u[0], h = u[1], v = u[2], g = u[3], _ = u[4], m = u[5], y = r.split(" "), b = parseFloat(y[0]) || 0, x = parseFloat(y[1]) || 0, S, C, w, D;
  e ? u !== ga && (C = c * g - h * v) && (w = b * (g / C) + x * (-v / C) + (v * m - g * _) / C, D = b * (-h / C) + x * (c / C) - (c * m - h * _) / C, b = w, x = D) : (S = _v(t), b = S.x + (~y[0].indexOf("%") ? b / 100 * S.width : b), x = S.y + (~(y[1] || y[0]).indexOf("%") ? x / 100 * S.height : x)), i || i !== !1 && s.smooth ? (_ = b - l, m = x - f, s.xOffset = d + (_ * c + m * v) - _, s.yOffset = p + (_ * h + m * g) - m) : s.xOffset = s.yOffset = 0, s.xOrigin = b, s.yOrigin = x, s.smooth = !!i, s.origin = r, s.originIsAbsolute = !!e, t.style[Or] = "0px 0px", o && (Ve(o, s, "xOrigin", l, b), Ve(o, s, "yOrigin", f, x), Ve(o, s, "xOffset", d, s.xOffset), Ve(o, s, "yOffset", p, s.yOffset)), t.setAttribute("data-svg-origin", b + " " + x);
}, _a = function(t, r) {
  var e = t._gsap || new nv(t);
  if ("x" in e && !r && !e.uncache)
    return e;
  var i = t.style, a = e.scaleX < 0, o = "px", s = "deg", u = getComputedStyle(t), l = Lr(t, Or) || "0", f, d, p, c, h, v, g, _, m, y, b, x, S, C, w, D, T, O, M, E, I, k, B, F, G, X, W, A, Y, H, L, U;
  return f = d = p = v = g = _ = m = y = b = 0, c = h = 1, e.svg = !!(t.getCTM && mv(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[Yt] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[Yt] !== "none" ? u[Yt] : "")), i.scale = i.rotate = i.translate = "none"), C = Il(t, e.svg), e.svg && (e.uncache ? (G = t.getBBox(), l = e.xOrigin - G.x + "px " + (e.yOrigin - G.y) + "px", F = "") : F = !r && t.getAttribute("data-svg-origin"), yu(t, F || l, !!F || e.originIsAbsolute, e.smooth !== !1, C)), x = e.xOrigin || 0, S = e.yOrigin || 0, C !== ga && (O = C[0], M = C[1], E = C[2], I = C[3], f = k = C[4], d = B = C[5], C.length === 6 ? (c = Math.sqrt(O * O + M * M), h = Math.sqrt(I * I + E * E), v = O || M ? Ln(M, O) * dn : 0, m = E || I ? Ln(E, I) * dn + v : 0, m && (h *= Math.abs(Math.cos(m * ei))), e.svg && (f -= x - (x * O + S * E), d -= S - (x * M + S * I))) : (U = C[6], H = C[7], W = C[8], A = C[9], Y = C[10], L = C[11], f = C[12], d = C[13], p = C[14], w = Ln(U, Y), g = w * dn, w && (D = Math.cos(-w), T = Math.sin(-w), F = k * D + W * T, G = B * D + A * T, X = U * D + Y * T, W = k * -T + W * D, A = B * -T + A * D, Y = U * -T + Y * D, L = H * -T + L * D, k = F, B = G, U = X), w = Ln(-E, Y), _ = w * dn, w && (D = Math.cos(-w), T = Math.sin(-w), F = O * D - W * T, G = M * D - A * T, X = E * D - Y * T, L = I * T + L * D, O = F, M = G, E = X), w = Ln(M, O), v = w * dn, w && (D = Math.cos(w), T = Math.sin(w), F = O * D + M * T, G = k * D + B * T, M = M * D - O * T, B = B * D - k * T, O = F, k = G), g && Math.abs(g) + Math.abs(v) > 359.9 && (g = v = 0, _ = 180 - _), c = Ut(Math.sqrt(O * O + M * M + E * E)), h = Ut(Math.sqrt(B * B + U * U)), w = Ln(k, B), m = Math.abs(w) > 2e-4 ? w * dn : 0, b = L ? 1 / (L < 0 ? -L : L) : 0), e.svg && (F = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !yv(Lr(t, Yt)), F && t.setAttribute("transform", F))), Math.abs(m) > 90 && Math.abs(m) < 270 && (a ? (c *= -1, m += v <= 0 ? 180 : -180, v += v <= 0 ? 180 : -180) : (h *= -1, m += m <= 0 ? 180 : -180)), r = r || e.uncache, e.x = f - ((e.xPercent = f && (!r && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + o, e.y = d - ((e.yPercent = d && (!r && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + o, e.z = p + o, e.scaleX = Ut(c), e.scaleY = Ut(h), e.rotation = Ut(v) + s, e.rotationX = Ut(g) + s, e.rotationY = Ut(_) + s, e.skewX = m + s, e.skewY = y + s, e.transformPerspective = b + o, (e.zOrigin = parseFloat(l.split(" ")[2]) || !r && e.zOrigin || 0) && (i[Or] = To(l)), e.xOffset = e.yOffset = 0, e.force3D = Yr.force3D, e.renderTransform = e.svg ? Hm : gv ? bv : Wm, e.uncache = 0, e;
}, To = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, bs = function(t, r, e) {
  var i = hr(r);
  return Ut(parseFloat(r) + parseFloat(rn(t, "x", e + "px", i))) + i;
}, Wm = function(t, r) {
  r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, bv(t, r);
}, un = "0deg", ki = "0px", ln = ") ", bv = function(t, r) {
  var e = r || this, i = e.xPercent, a = e.yPercent, o = e.x, s = e.y, u = e.z, l = e.rotation, f = e.rotationY, d = e.rotationX, p = e.skewX, c = e.skewY, h = e.scaleX, v = e.scaleY, g = e.transformPerspective, _ = e.force3D, m = e.target, y = e.zOrigin, b = "", x = _ === "auto" && t && t !== 1 || _ === !0;
  if (y && (d !== un || f !== un)) {
    var S = parseFloat(f) * ei, C = Math.sin(S), w = Math.cos(S), D;
    S = parseFloat(d) * ei, D = Math.cos(S), o = bs(m, o, C * D * -y), s = bs(m, s, -Math.sin(S) * -y), u = bs(m, u, w * D * -y + y);
  }
  g !== ki && (b += "perspective(" + g + ln), (i || a) && (b += "translate(" + i + "%, " + a + "%) "), (x || o !== ki || s !== ki || u !== ki) && (b += u !== ki || x ? "translate3d(" + o + ", " + s + ", " + u + ") " : "translate(" + o + ", " + s + ln), l !== un && (b += "rotate(" + l + ln), f !== un && (b += "rotateY(" + f + ln), d !== un && (b += "rotateX(" + d + ln), (p !== un || c !== un) && (b += "skew(" + p + ", " + c + ln), (h !== 1 || v !== 1) && (b += "scale(" + h + ", " + v + ln), m.style[Yt] = b || "translate(0, 0)";
}, Hm = function(t, r) {
  var e = r || this, i = e.xPercent, a = e.yPercent, o = e.x, s = e.y, u = e.rotation, l = e.skewX, f = e.skewY, d = e.scaleX, p = e.scaleY, c = e.target, h = e.xOrigin, v = e.yOrigin, g = e.xOffset, _ = e.yOffset, m = e.forceCSS, y = parseFloat(o), b = parseFloat(s), x, S, C, w, D;
  u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= ei, l *= ei, x = Math.cos(u) * d, S = Math.sin(u) * d, C = Math.sin(u - l) * -p, w = Math.cos(u - l) * p, l && (f *= ei, D = Math.tan(l - f), D = Math.sqrt(1 + D * D), C *= D, w *= D, f && (D = Math.tan(f), D = Math.sqrt(1 + D * D), x *= D, S *= D)), x = Ut(x), S = Ut(S), C = Ut(C), w = Ut(w)) : (x = d, w = p, S = C = 0), (y && !~(o + "").indexOf("px") || b && !~(s + "").indexOf("px")) && (y = rn(c, "x", o, "px"), b = rn(c, "y", s, "px")), (h || v || g || _) && (y = Ut(y + h - (h * x + v * C) + g), b = Ut(b + v - (h * S + v * w) + _)), (i || a) && (D = c.getBBox(), y = Ut(y + i / 100 * D.width), b = Ut(b + a / 100 * D.height)), D = "matrix(" + x + "," + S + "," + C + "," + w + "," + y + "," + b + ")", c.setAttribute("transform", D), m && (c.style[Yt] = D);
}, Vm = function(t, r, e, i, a) {
  var o = 360, s = lr(a), u = parseFloat(a) * (s && ~a.indexOf("rad") ? dn : 1), l = u - i, f = i + l + "deg", d, p;
  return s && (d = a.split("_")[1], d === "short" && (l %= o, l !== l % (o / 2) && (l += l < 0 ? o : -o)), d === "cw" && l < 0 ? l = (l + o * tc) % o - ~~(l / o) * o : d === "ccw" && l > 0 && (l = (l - o * tc) % o - ~~(l / o) * o)), t._pt = p = new Mr(t._pt, r, e, i, l, Tm), p.e = f, p.u = "deg", t._props.push(e), p;
}, sc = function(t, r) {
  for (var e in r)
    t[e] = r[e];
  return t;
}, $m = function(t, r, e) {
  var i = sc({}, e._gsap), a = "perspective,force3D,transformOrigin,svgOrigin", o = e.style, s, u, l, f, d, p, c, h;
  i.svg ? (l = e.getAttribute("transform"), e.setAttribute("transform", ""), o[Yt] = r, s = _a(e, 1), tn(e, Yt), e.setAttribute("transform", l)) : (l = getComputedStyle(e)[Yt], o[Yt] = r, s = _a(e, 1), o[Yt] = l);
  for (u in ze)
    l = i[u], f = s[u], l !== f && a.indexOf(u) < 0 && (c = hr(l), h = hr(f), d = c !== h ? rn(e, u, l, h) : parseFloat(l), p = parseFloat(f), t._pt = new Mr(t._pt, s, u, d, p - d, _u), t._pt.u = h || 0, t._props.push(u));
  sc(s, i);
};
Tr("padding,margin,Width,Radius", function(n, t) {
  var r = "Top", e = "Right", i = "Bottom", a = "Left", o = (t < 3 ? [r, e, i, a] : [r + a, r + e, i + e, i + a]).map(function(s) {
    return t < 2 ? n + s : "border" + s + n;
  });
  Eo[t > 1 ? "border" + n : n] = function(s, u, l, f, d) {
    var p, c;
    if (arguments.length < 4)
      return p = o.map(function(h) {
        return Ce(s, h, l);
      }), c = p.join(" "), c.split(p[0]).length === 5 ? p[0] : c;
    p = (f + "").split(" "), c = {}, o.forEach(function(h, v) {
      return c[h] = p[v] = p[v] || p[(v - 1) / 2 | 0];
    }), s.init(u, c, d);
  };
});
var Sv = {
  name: "css",
  register: xu,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, r, e, i, a) {
    var o = this._props, s = t.style, u = e.vars.startAt, l, f, d, p, c, h, v, g, _, m, y, b, x, S, C, w, D;
    Ol || xu(), this.styles = this.styles || hv(t), w = this.styles.props, this.tween = e;
    for (v in r)
      if (v !== "autoRound" && (f = r[v], !(Br[v] && iv(v, r, e, i, t, a)))) {
        if (c = typeof f, h = Eo[v], c === "function" && (f = f.call(e, i, t, a), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = pa(f)), h)
          h(this, t, v, f, e) && (C = 1);
        else if (v.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(v) + "").trim(), f += "", je.lastIndex = 0, je.test(l) || (g = hr(l), _ = hr(f), _ ? g !== _ && (l = rn(t, v, l, _) + _) : g && (f += g)), this.add(s, "setProperty", l, f, i, a, 0, 0, v), o.push(v), w.push(v, 0, s[v]);
        else if (c !== "undefined") {
          if (u && v in u ? (l = typeof u[v] == "function" ? u[v].call(e, i, t, a) : u[v], lr(l) && ~l.indexOf("random(") && (l = pa(l)), hr(l + "") || l === "auto" || (l += Yr.units[v] || hr(Ce(t, v)) || ""), (l + "").charAt(1) === "=" && (l = Ce(t, v))) : l = Ce(t, v), p = parseFloat(l), m = c === "string" && f.charAt(1) === "=" && f.substr(0, 2), m && (f = f.substr(2)), d = parseFloat(f), v in he && (v === "autoAlpha" && (p === 1 && Ce(t, "visibility") === "hidden" && d && (p = 0), w.push("visibility", 0, s.visibility), Ve(this, s, "visibility", p ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), v !== "scale" && v !== "transform" && (v = he[v], ~v.indexOf(",") && (v = v.split(",")[0]))), y = v in ze, y) {
            if (this.styles.save(v), D = f, c === "string" && f.substring(0, 6) === "var(--") {
              if (f = Lr(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var T = t.style.perspective;
                t.style.perspective = f, f = Lr(t, "perspective"), T ? t.style.perspective = T : tn(t, "perspective");
              }
              d = parseFloat(f);
            }
            if (b || (x = t._gsap, x.renderTransform && !r.parseTransform || _a(t, r.parseTransform), S = r.smoothOrigin !== !1 && x.smooth, b = this._pt = new Mr(this._pt, s, Yt, 0, 1, x.renderTransform, x, 0, -1), b.dep = 1), v === "scale")
              this._pt = new Mr(this._pt, x, "scaleY", x.scaleY, (m ? ti(x.scaleY, m + d) : d) - x.scaleY || 0, _u), this._pt.u = 0, o.push("scaleY", v), v += "X";
            else if (v === "transformOrigin") {
              w.push(Or, 0, s[Or]), f = Ym(f), x.svg ? yu(t, f, 0, S, 0, this) : (_ = parseFloat(f.split(" ")[2]) || 0, _ !== x.zOrigin && Ve(this, x, "zOrigin", x.zOrigin, _), Ve(this, s, v, To(l), To(f)));
              continue;
            } else if (v === "svgOrigin") {
              yu(t, f, 1, S, 0, this);
              continue;
            } else if (v in xv) {
              Vm(this, x, v, p, m ? ti(p, m + f) : f);
              continue;
            } else if (v === "smoothOrigin") {
              Ve(this, x, "smooth", x.smooth, f);
              continue;
            } else if (v === "force3D") {
              x[v] = f;
              continue;
            } else if (v === "transform") {
              $m(this, f, t);
              continue;
            }
          } else
            v in s || (v = mi(v) || v);
          if (y || (d || d === 0) && (p || p === 0) && !Em.test(f) && v in s)
            g = (l + "").substr((p + "").length), d || (d = 0), _ = hr(f) || (v in Yr.units ? Yr.units[v] : g), g !== _ && (p = rn(t, v, l, _)), this._pt = new Mr(this._pt, y ? x : s, v, p, (m ? ti(p, m + d) : d) - p, !y && (_ === "px" || v === "zIndex") && r.autoRound !== !1 ? Pm : _u), this._pt.u = _ || 0, y && D !== f ? (this._pt.b = l, this._pt.e = D, this._pt.r = Om) : g !== _ && _ !== "%" && (this._pt.b = l, this._pt.r = Mm);
          else if (v in s)
            Lm.call(this, t, v, l, m ? m + f : f);
          else if (v in t)
            this.add(t, v, l || t[v], m ? m + f : f, i, a);
          else if (v !== "parseTransform") {
            xl(v, f);
            continue;
          }
          y || (v in s ? w.push(v, 0, s[v]) : typeof t[v] == "function" ? w.push(v, 2, t[v]()) : w.push(v, 1, l || t[v])), o.push(v);
        }
      }
    C && fv(this);
  },
  render: function(t, r) {
    if (r.tween._time || !Pl())
      for (var e = r._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      r.styles.revert();
  },
  get: Ce,
  aliases: he,
  getSetter: function(t, r, e) {
    var i = he[r];
    return i && i.indexOf(",") < 0 && (r = i), r in ze && r !== Or && (t._gsap.x || Ce(t, "x")) ? e && Jf === e ? r === "scale" ? zm : km : (Jf = e || {}) && (r === "scale" ? Am : Bm) : t.style && !gl(t.style[r]) ? Rm : ~r.indexOf("-") ? Im : Tl(t, r);
  },
  core: {
    _removeProperty: tn,
    _getMatrix: Il
  }
};
kr.utils.checkPrefix = mi;
kr.core.getStyleSaver = hv;
(function(n, t, r, e) {
  var i = Tr(n + "," + t + "," + r, function(a) {
    ze[a] = 1;
  });
  Tr(t, function(a) {
    Yr.units[a] = "deg", xv[a] = 1;
  }), he[i[13]] = n + "," + t, Tr(e, function(a) {
    var o = a.split(":");
    he[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Tr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
  Yr.units[n] = "px";
});
kr.registerPlugin(Sv);
var no = kr.registerPlugin(Sv) || kr;
no.core.Tween;
/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ee, Cn, kl, $o, Li, io, Mo, ea, ae = "transform", bu = ae + "Origin", wv, Cv = function(t) {
  var r = t.ownerDocument || t;
  for (!(ae in t.style) && ("msTransform" in t.style) && (ae = "msTransform", bu = ae + "Origin"); r.parentNode && (r = r.parentNode); )
    ;
  if (Cn = window, Mo = new Pn(), r) {
    Ee = r, kl = r.documentElement, $o = r.body, ea = Ee.createElementNS("http://www.w3.org/2000/svg", "g"), ea.style.transform = "none";
    var e = r.createElement("div"), i = r.createElement("div"), a = r && (r.body || r.firstElementChild);
    a && a.appendChild && (a.appendChild(e), e.appendChild(i), e.style.position = "static", e.style.transform = "translate3d(0,0,1px)", wv = i.offsetParent !== e, a.removeChild(e));
  }
  return r;
}, qm = function(t) {
  for (var r, e; t && t !== $o; )
    e = t._gsap, e && e.uncache && e.get(t, "x"), e && !e.scaleX && !e.scaleY && e.renderTransform && (e.scaleX = e.scaleY = 1e-4, e.renderTransform(1, e), r ? r.push(e) : r = [e]), t = t.parentNode;
  return r;
}, Dv = [], Ev = [], Um = function() {
  return Cn.pageYOffset || Ee.scrollTop || kl.scrollTop || $o.scrollTop || 0;
}, jm = function() {
  return Cn.pageXOffset || Ee.scrollLeft || kl.scrollLeft || $o.scrollLeft || 0;
}, zl = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, Km = function n(t) {
  if (Cn.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return n(t);
}, Ss = function n(t, r) {
  if (t.parentNode && (Ee || Cv(t))) {
    var e = zl(t), i = e ? e.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = e ? r ? "rect" : "g" : "div", o = r !== 2 ? 0 : 100, s = r === 3 ? 100 : 0, u = {
      position: "absolute",
      display: "block",
      pointerEvents: "none",
      margin: "0",
      padding: "0"
    }, l = Ee.createElementNS ? Ee.createElementNS(i.replace(/^https/, "http"), a) : Ee.createElement(a);
    return r && (e ? (io || (io = n(t)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), io.appendChild(l)) : (Li || (Li = n(t), Object.assign(Li.style, u)), Object.assign(l.style, u, {
      width: "0.1px",
      height: "0.1px",
      top: s + "px",
      left: o + "px"
    }), Li.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, Zm = function(t) {
  for (var r = new Pn(), e = 0; e < t.numberOfItems; e++)
    r.multiply(t.getItem(e).matrix);
  return r;
}, Qm = function(t) {
  var r = t.getCTM(), e;
  return r || (e = t.style[ae], t.style[ae] = "none", t.appendChild(ea), r = ea.getCTM(), t.removeChild(ea), e ? t.style[ae] = e : t.style.removeProperty(ae.replace(/([A-Z])/g, "-$1").toLowerCase())), r || Mo.clone();
}, Jm = function(t, r) {
  var e = zl(t), i = t === e, a = e ? Dv : Ev, o = t.parentNode, s = o && !e && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o, u, l, f, d, p, c;
  if (t === Cn)
    return t;
  if (a.length || a.push(Ss(t, 1), Ss(t, 2), Ss(t, 3)), u = e ? io : Li, e)
    i ? (f = Qm(t), d = -f.e / f.a, p = -f.f / f.d, l = Mo) : t.getBBox ? (f = t.getBBox(), l = t.transform ? t.transform.baseVal : {}, l = l.numberOfItems ? l.numberOfItems > 1 ? Zm(l) : l.getItem(0).matrix : Mo, d = l.a * f.x + l.c * f.y, p = l.b * f.x + l.d * f.y) : (l = new Pn(), d = p = 0), r && t.tagName.toLowerCase() === "g" && (d = p = 0), (i || !t.getBoundingClientRect().width ? e : o).appendChild(u), u.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + d) + "," + (l.f + p) + ")");
  else {
    if (d = p = 0, wv)
      for (l = t.offsetParent, f = t; f && (f = f.parentNode) && f !== l && f.parentNode; )
        (Cn.getComputedStyle(f)[ae] + "").length > 4 && (d = f.offsetLeft, p = f.offsetTop, f = 0);
    if (c = Cn.getComputedStyle(t), c.position !== "absolute" && c.position !== "fixed")
      for (l = t.offsetParent; o && o !== l; )
        d += o.scrollLeft || 0, p += o.scrollTop || 0, o = o.parentNode;
    f = u.style, f.top = t.offsetTop - p + "px", f.left = t.offsetLeft - d + "px", f[ae] = c[ae], f[bu] = c[bu], f.position = c.position === "fixed" ? "fixed" : "absolute", s.appendChild(u);
  }
  return u;
}, ws = function(t, r, e, i, a, o, s) {
  return t.a = r, t.b = e, t.c = i, t.d = a, t.e = o, t.f = s, t;
}, Pn = /* @__PURE__ */ function() {
  function n(r, e, i, a, o, s) {
    r === void 0 && (r = 1), e === void 0 && (e = 0), i === void 0 && (i = 0), a === void 0 && (a = 1), o === void 0 && (o = 0), s === void 0 && (s = 0), ws(this, r, e, i, a, o, s);
  }
  var t = n.prototype;
  return t.inverse = function() {
    var e = this.a, i = this.b, a = this.c, o = this.d, s = this.e, u = this.f, l = e * o - i * a || 1e-10;
    return ws(this, o / l, -i / l, -a / l, e / l, (a * u - o * s) / l, -(e * u - i * s) / l);
  }, t.multiply = function(e) {
    var i = this.a, a = this.b, o = this.c, s = this.d, u = this.e, l = this.f, f = e.a, d = e.c, p = e.b, c = e.d, h = e.e, v = e.f;
    return ws(this, f * i + p * o, f * a + p * s, d * i + c * o, d * a + c * s, u + h * i + v * o, l + h * a + v * s);
  }, t.clone = function() {
    return new n(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(e) {
    var i = this.a, a = this.b, o = this.c, s = this.d, u = this.e, l = this.f;
    return i === e.a && a === e.b && o === e.c && s === e.d && u === e.e && l === e.f;
  }, t.apply = function(e, i) {
    i === void 0 && (i = {});
    var a = e.x, o = e.y, s = this.a, u = this.b, l = this.c, f = this.d, d = this.e, p = this.f;
    return i.x = a * s + o * l + d || 0, i.y = a * u + o * f + p || 0, i;
  }, n;
}();
function _n(n, t, r, e) {
  if (!n || !n.parentNode || (Ee || Cv(n)).documentElement === n)
    return new Pn();
  var i = qm(n), a = zl(n), o = a ? Dv : Ev, s = Jm(n, r), u = o[0].getBoundingClientRect(), l = o[1].getBoundingClientRect(), f = o[2].getBoundingClientRect(), d = s.parentNode, p = !e && Km(n), c = new Pn((l.left - u.left) / 100, (l.top - u.top) / 100, (f.left - u.left) / 100, (f.top - u.top) / 100, u.left + (p ? 0 : jm()), u.top + (p ? 0 : Um()));
  if (d.removeChild(s), i)
    for (u = i.length; u--; )
      l = i[u], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
  return t ? c.inverse() : c;
}
function uc(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function tx(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.__proto__ = t;
}
var yt, kt, Fr, ue, Te, Cs, De, Su, Yi, $e, Tv, wu, ma, Al, Xi, Ar, Wi, ao, Mv, Cu, Oo = 0, Ov = function() {
  return typeof window < "u";
}, Pv = function() {
  return yt || Ov() && (yt = window.gsap) && yt.registerPlugin && yt;
}, Le = function(t) {
  return typeof t == "function";
}, na = function(t) {
  return typeof t == "object";
}, ie = function(t) {
  return typeof t > "u";
}, oo = function() {
  return !1;
}, ia = "transform", Du = "transformOrigin", mr = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, zi = Array.isArray, ja = function(t, r) {
  var e = Fr.createElementNS ? Fr.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Fr.createElement(t);
  return e.style ? e : Fr.createElement(t);
}, lc = 180 / Math.PI, fn = 1e20, rx = new Pn(), Ne = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
}, Dn = [], ni = {}, ex = 0, nx = /^(?:a|input|textarea|button|select)$/i, fc = 0, Yn = {}, Se = {}, Rv = function(t, r) {
  var e = {}, i;
  for (i in t)
    e[i] = r ? t[i] * r : t[i];
  return e;
}, ix = function(t, r) {
  for (var e in r)
    e in t || (t[e] = r[e]);
  return t;
}, cc = function n(t, r) {
  for (var e = t.length, i; e--; )
    r ? t[e].style.touchAction = r : t[e].style.removeProperty("touch-action"), i = t[e].children, i && i.length && n(i, r);
}, Iv = function() {
  return Dn.forEach(function(t) {
    return t();
  });
}, ax = function(t) {
  Dn.push(t), Dn.length === 1 && yt.ticker.add(Iv);
}, dc = function() {
  return !Dn.length && yt.ticker.remove(Iv);
}, pc = function(t) {
  for (var r = Dn.length; r--; )
    Dn[r] === t && Dn.splice(r, 1);
  yt.to(dc, {
    overwrite: !0,
    delay: 15,
    duration: 0,
    onComplete: dc,
    data: "_draggable"
  });
}, ox = function(t, r) {
  for (var e in r)
    e in t || (t[e] = r[e]);
  return t;
}, ar = function(t, r, e, i) {
  if (t.addEventListener) {
    var a = ma[r];
    i = i || (Tv ? {
      passive: !1
    } : null), t.addEventListener(a || r, e, i), a && r !== a && t.addEventListener(r, e, i);
  }
}, Qt = function(t, r, e, i) {
  if (t.removeEventListener) {
    var a = ma[r];
    t.removeEventListener(a || r, e, i), a && r !== a && t.removeEventListener(r, e, i);
  }
}, qr = function(t) {
  t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation();
}, sx = function(t, r) {
  for (var e = t.length; e--; )
    if (t[e].identifier === r)
      return !0;
}, ux = function n(t) {
  Al = t.touches && Oo < t.touches.length, Qt(t.target, "touchend", n);
}, vc = function(t) {
  Al = t.touches && Oo < t.touches.length, ar(t.target, "touchend", ux);
}, ii = function(t) {
  return kt.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0;
}, ai = function(t) {
  return kt.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0;
}, hc = function n(t, r) {
  ar(t, "scroll", r), xi(t.parentNode) || n(t.parentNode, r);
}, gc = function n(t, r) {
  Qt(t, "scroll", r), xi(t.parentNode) || n(t.parentNode, r);
}, xi = function(t) {
  return !t || t === ue || t.nodeType === 9 || t === Fr.body || t === kt || !t.nodeType || !t.parentNode;
}, _c = function(t, r) {
  var e = r === "x" ? "Width" : "Height", i = "scroll" + e, a = "client" + e;
  return Math.max(0, xi(t) ? Math.max(ue[i], Te[i]) - (kt["inner" + e] || ue[a] || Te[a]) : t[i] - t[a]);
}, Ds = function n(t, r) {
  var e = _c(t, "x"), i = _c(t, "y");
  xi(t) ? t = Se : n(t.parentNode, r), t._gsMaxScrollX = e, t._gsMaxScrollY = i, r || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0);
}, Es = function(t, r, e) {
  var i = t.style;
  i && (ie(i[r]) && (r = Yi(r, t) || r), e == null ? i.removeProperty && i.removeProperty(r.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[r] = e);
}, xa = function(t) {
  return kt.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t);
}, cn = {}, Xn = function(t) {
  if (t === kt)
    return cn.left = cn.top = 0, cn.width = cn.right = ue.clientWidth || t.innerWidth || Te.clientWidth || 0, cn.height = cn.bottom = (t.innerHeight || 0) - 20 < ue.clientHeight ? ue.clientHeight : t.innerHeight || Te.clientHeight || 0, cn;
  var r = t.ownerDocument || Fr, e = ie(t.pageX) ? !t.nodeType && !ie(t.left) && !ie(t.top) ? t : $e(t)[0].getBoundingClientRect() : {
    left: t.pageX - ai(r),
    top: t.pageY - ii(r),
    right: t.pageX - ai(r) + 1,
    bottom: t.pageY - ii(r) + 1
  };
  return ie(e.right) && !ie(e.width) ? (e.right = e.left + e.width, e.bottom = e.top + e.height) : ie(e.width) && (e = {
    width: e.right - e.left,
    height: e.bottom - e.top,
    right: e.right,
    left: e.left,
    bottom: e.bottom,
    top: e.top
  }), e;
}, $t = function(t, r, e) {
  var i = t.vars, a = i[e], o = t._listeners[r], s;
  return Le(a) && (s = a.apply(i.callbackScope || t, i[e + "Params"] || [t.pointerEvent])), o && t.dispatchEvent(r) === !1 && (s = !1), s;
}, mc = function(t, r) {
  var e = $e(t)[0], i, a, o;
  return !e.nodeType && e !== kt ? ie(t.left) ? (a = t.min || t.minX || t.minRotation || 0, i = t.min || t.minY || 0, {
    left: a,
    top: i,
    width: (t.max || t.maxX || t.maxRotation || 0) - a,
    height: (t.max || t.maxY || 0) - i
  }) : (o = {
    x: 0,
    y: 0
  }, {
    left: t.left - o.x,
    top: t.top - o.y,
    width: t.width,
    height: t.height
  }) : lx(e, r);
}, Ur = {}, lx = function(t, r) {
  r = $e(r)[0];
  var e = t.getBBox && t.ownerSVGElement, i = t.ownerDocument || Fr, a, o, s, u, l, f, d, p, c, h, v, g, _;
  if (t === kt)
    s = ii(i), a = ai(i), o = a + (i.documentElement.clientWidth || t.innerWidth || i.body.clientWidth || 0), u = s + ((t.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : t.innerHeight || i.body.clientHeight || 0);
  else {
    if (r === kt || ie(r))
      return t.getBoundingClientRect();
    a = s = 0, e ? (h = t.getBBox(), v = h.width, g = h.height) : (t.viewBox && (h = t.viewBox.baseVal) && (a = h.x || 0, s = h.y || 0, v = h.width, g = h.height), v || (_ = xa(t), h = _.boxSizing === "border-box", v = (parseFloat(_.width) || t.clientWidth || 0) + (h ? 0 : parseFloat(_.borderLeftWidth) + parseFloat(_.borderRightWidth)), g = (parseFloat(_.height) || t.clientHeight || 0) + (h ? 0 : parseFloat(_.borderTopWidth) + parseFloat(_.borderBottomWidth)))), o = v, u = g;
  }
  return t === r ? {
    left: a,
    top: s,
    width: o - a,
    height: u - s
  } : (l = _n(r, !0).multiply(_n(t)), f = l.apply({
    x: a,
    y: s
  }), d = l.apply({
    x: o,
    y: s
  }), p = l.apply({
    x: o,
    y: u
  }), c = l.apply({
    x: a,
    y: u
  }), a = Math.min(f.x, d.x, p.x, c.x), s = Math.min(f.y, d.y, p.y, c.y), {
    left: a,
    top: s,
    width: Math.max(f.x, d.x, p.x, c.x) - a,
    height: Math.max(f.y, d.y, p.y, c.y) - s
  });
}, Ts = function(t, r, e, i, a, o) {
  var s = {}, u, l, f;
  if (r)
    if (a !== 1 && r instanceof Array) {
      if (s.end = u = [], f = r.length, na(r[0]))
        for (l = 0; l < f; l++)
          u[l] = Rv(r[l], a);
      else
        for (l = 0; l < f; l++)
          u[l] = r[l] * a;
      e += 1.1, i -= 1.1;
    } else
      Le(r) ? s.end = function(d) {
        var p = r.call(t, d), c, h;
        if (a !== 1)
          if (na(p)) {
            c = {};
            for (h in p)
              c[h] = p[h] * a;
            p = c;
          } else
            p *= a;
        return p;
      } : s.end = r;
  return (e || e === 0) && (s.max = e), (i || i === 0) && (s.min = i), o && (s.velocity = 0), s;
}, fx = function n(t) {
  var r;
  return !t || !t.getAttribute || t === Te ? !1 : (r = t.getAttribute("data-clickable")) === "true" || r !== "false" && (nx.test(t.nodeName + "") || t.getAttribute("contentEditable") === "true") ? !0 : n(t.parentNode);
}, Ka = function(t, r) {
  for (var e = t.length, i; e--; )
    i = t[e], i.ondragstart = i.onselectstart = r ? null : oo, yt.set(i, {
      lazy: !0,
      userSelect: r ? "text" : "none"
    });
}, cx = function n(t) {
  if (xa(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return n(t);
}, kv, Eu, dx = function(t, r) {
  t = yt.utils.toArray(t)[0], r = r || {};
  var e = document.createElement("div"), i = e.style, a = t.firstChild, o = 0, s = 0, u = t.scrollTop, l = t.scrollLeft, f = t.scrollWidth, d = t.scrollHeight, p = 0, c = 0, h = 0, v, g, _, m, y, b;
  kv && r.force3D !== !1 ? (y = "translate3d(", b = "px,0px)") : ia && (y = "translate(", b = "px)"), this.scrollTop = function(x, S) {
    if (!arguments.length)
      return -this.top();
    this.top(-x, S);
  }, this.scrollLeft = function(x, S) {
    if (!arguments.length)
      return -this.left();
    this.left(-x, S);
  }, this.left = function(x, S) {
    if (!arguments.length)
      return -(t.scrollLeft + s);
    var C = t.scrollLeft - l, w = s;
    if ((C > 2 || C < -2) && !S) {
      l = t.scrollLeft, yt.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      }), this.left(-l), r.onKill && r.onKill();
      return;
    }
    x = -x, x < 0 ? (s = x - 0.5 | 0, x = 0) : x > c ? (s = x - c | 0, x = c) : s = 0, (s || w) && (this._skip || (i[ia] = y + -s + "px," + -o + b), s + p >= 0 && (i.paddingRight = s + p + "px")), t.scrollLeft = x | 0, l = t.scrollLeft;
  }, this.top = function(x, S) {
    if (!arguments.length)
      return -(t.scrollTop + o);
    var C = t.scrollTop - u, w = o;
    if ((C > 2 || C < -2) && !S) {
      u = t.scrollTop, yt.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      }), this.top(-u), r.onKill && r.onKill();
      return;
    }
    x = -x, x < 0 ? (o = x - 0.5 | 0, x = 0) : x > h ? (o = x - h | 0, x = h) : o = 0, (o || w) && (this._skip || (i[ia] = y + -s + "px," + -o + b)), t.scrollTop = x | 0, u = t.scrollTop;
  }, this.maxScrollTop = function() {
    return h;
  }, this.maxScrollLeft = function() {
    return c;
  }, this.disable = function() {
    for (a = e.firstChild; a; )
      m = a.nextSibling, t.appendChild(a), a = m;
    t === e.parentNode && t.removeChild(e);
  }, this.enable = function() {
    if (a = t.firstChild, a !== e) {
      for (; a; )
        m = a.nextSibling, e.appendChild(a), a = m;
      t.appendChild(e), this.calibrate();
    }
  }, this.calibrate = function(x) {
    var S = t.clientWidth === v, C, w, D;
    u = t.scrollTop, l = t.scrollLeft, !(S && t.clientHeight === g && e.offsetHeight === _ && f === t.scrollWidth && d === t.scrollHeight && !x) && ((o || s) && (w = this.left(), D = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), C = xa(t), (!S || x) && (i.display = "block", i.width = "auto", i.paddingRight = "0px", p = Math.max(0, t.scrollWidth - t.clientWidth), p && (p += parseFloat(C.paddingLeft) + (Eu ? parseFloat(C.paddingRight) : 0))), i.display = "inline-block", i.position = "relative", i.overflow = "visible", i.verticalAlign = "top", i.boxSizing = "content-box", i.width = "100%", i.paddingRight = p + "px", Eu && (i.paddingBottom = C.paddingBottom), v = t.clientWidth, g = t.clientHeight, f = t.scrollWidth, d = t.scrollHeight, c = t.scrollWidth - v, h = t.scrollHeight - g, _ = e.offsetHeight, i.display = "block", (w || D) && (this.left(w), this.top(D)));
  }, this.content = e, this.element = t, this._skip = !1, this.enable();
}, Ms = function(t) {
  if (Ov() && document.body) {
    var r = window && window.navigator;
    kt = window, Fr = document, ue = Fr.documentElement, Te = Fr.body, Cs = ja("div"), ao = !!window.PointerEvent, De = ja("div"), De.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Wi = De.style.cursor === "grab" ? "grab" : "move", Xi = r && r.userAgent.toLowerCase().indexOf("android") !== -1, wu = "ontouchstart" in ue && "orientation" in kt || r && (r.MaxTouchPoints > 0 || r.msMaxTouchPoints > 0), Eu = function() {
      var e = ja("div"), i = ja("div"), a = i.style, o = Te, s;
      return a.display = "inline-block", a.position = "relative", e.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", e.appendChild(i), o.appendChild(e), s = i.offsetHeight + 18 > e.scrollHeight, o.removeChild(e), s;
    }(), ma = function(e) {
      for (var i = e.split(","), a = ("onpointerdown" in Cs ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Cs ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","), o = {}, s = 4; --s > -1; )
        o[i[s]] = a[s], o[a[s]] = i[s];
      try {
        ue.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function() {
            Tv = 1;
          }
        }));
      } catch {
      }
      return o;
    }("touchstart,touchmove,touchend,touchcancel"), ar(Fr, "touchcancel", oo), ar(kt, "touchmove", oo), Te && Te.addEventListener("touchstart", oo), ar(Fr, "contextmenu", function() {
      for (var e in ni)
        ni[e].isPressed && ni[e].endDrag();
    }), yt = Su = Pv();
  }
  yt ? (Ar = yt.plugins.inertia, Mv = yt.core.context || function() {
  }, Yi = yt.utils.checkPrefix, ia = Yi(ia), Du = Yi(Du), $e = yt.utils.toArray, Cu = yt.core.getStyleSaver, kv = !!Yi("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)");
}, px = /* @__PURE__ */ function() {
  function n(r) {
    this._listeners = {}, this.target = r || this;
  }
  var t = n.prototype;
  return t.addEventListener = function(e, i) {
    var a = this._listeners[e] || (this._listeners[e] = []);
    ~a.indexOf(i) || a.push(i);
  }, t.removeEventListener = function(e, i) {
    var a = this._listeners[e], o = a && a.indexOf(i);
    o >= 0 && a.splice(o, 1);
  }, t.dispatchEvent = function(e) {
    var i = this, a;
    return (this._listeners[e] || []).forEach(function(o) {
      return o.call(i, {
        type: e,
        target: i.target
      }) === !1 && (a = !1);
    }), a;
  }, n;
}(), yi = /* @__PURE__ */ function(n) {
  tx(t, n);
  function t(r, e) {
    var i;
    i = n.call(this) || this, Su || Ms(1), r = $e(r)[0], i.styles = Cu && Cu(r, "transform,left,top"), Ar || (Ar = yt.plugins.inertia), i.vars = e = Rv(e || {}), i.target = r, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(e.dragResistance) || 0, i.edgeResistance = isNaN(e.edgeResistance) ? 1 : parseFloat(e.edgeResistance) || 0, i.lockAxis = e.lockAxis, i.autoScroll = e.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!e.allowEventDefault, yt.getProperty(r, "x");
    var a = (e.type || "x,y").toLowerCase(), o = ~a.indexOf("x") || ~a.indexOf("y"), s = a.indexOf("rotation") !== -1, u = s ? "rotation" : o ? "x" : "left", l = o ? "y" : "top", f = !!(~a.indexOf("x") || ~a.indexOf("left") || a === "scroll"), d = !!(~a.indexOf("y") || ~a.indexOf("top") || a === "scroll"), p = e.minimumMovement || 2, c = uc(i), h = $e(e.trigger || e.handle || r), v = {}, g = 0, _ = !1, m = e.autoScrollMarginTop || 40, y = e.autoScrollMarginRight || 40, b = e.autoScrollMarginBottom || 40, x = e.autoScrollMarginLeft || 40, S = e.clickableTest || fx, C = 0, w = r._gsap || yt.core.getCache(r), D = cx(r), T = function(z, $) {
      return parseFloat(w.get(r, z, $));
    }, O = r.ownerDocument || Fr, M, E, I, k, B, F, G, X, W, A, Y, H, L, U, q, tt, J, ft, dt, Z, nt, xt, at, Q, ht, gt, _t, pt, St, Ht, Et, er, At, Xt = function(z) {
      return qr(z), z.stopImmediatePropagation && z.stopImmediatePropagation(), !1;
    }, nr = function ot(z) {
      if (c.autoScroll && c.isDragging && (_ || J)) {
        var $ = r, N = c.autoScroll * 15, K, rt, it, mt, ut, Tt, wt, Mt;
        for (_ = !1, Se.scrollTop = kt.pageYOffset != null ? kt.pageYOffset : O.documentElement.scrollTop != null ? O.documentElement.scrollTop : O.body.scrollTop, Se.scrollLeft = kt.pageXOffset != null ? kt.pageXOffset : O.documentElement.scrollLeft != null ? O.documentElement.scrollLeft : O.body.scrollLeft, mt = c.pointerX - Se.scrollLeft, ut = c.pointerY - Se.scrollTop; $ && !rt; )
          rt = xi($.parentNode), K = rt ? Se : $.parentNode, it = rt ? {
            bottom: Math.max(ue.clientHeight, kt.innerHeight || 0),
            right: Math.max(ue.clientWidth, kt.innerWidth || 0),
            left: 0,
            top: 0
          } : K.getBoundingClientRect(), Tt = wt = 0, d && (Mt = K._gsMaxScrollY - K.scrollTop, Mt < 0 ? wt = Mt : ut > it.bottom - b && Mt ? (_ = !0, wt = Math.min(Mt, N * (1 - Math.max(0, it.bottom - ut) / b) | 0)) : ut < it.top + m && K.scrollTop && (_ = !0, wt = -Math.min(K.scrollTop, N * (1 - Math.max(0, ut - it.top) / m) | 0)), wt && (K.scrollTop += wt)), f && (Mt = K._gsMaxScrollX - K.scrollLeft, Mt < 0 ? Tt = Mt : mt > it.right - y && Mt ? (_ = !0, Tt = Math.min(Mt, N * (1 - Math.max(0, it.right - mt) / y) | 0)) : mt < it.left + x && K.scrollLeft && (_ = !0, Tt = -Math.min(K.scrollLeft, N * (1 - Math.max(0, mt - it.left) / x) | 0)), Tt && (K.scrollLeft += Tt)), rt && (Tt || wt) && (kt.scrollTo(K.scrollLeft, K.scrollTop), Dt(c.pointerX + Tt, c.pointerY + wt)), $ = K;
      }
      if (J) {
        var Vt = c.x, vr = c.y;
        s ? (c.deltaX = Vt - parseFloat(w.rotation), c.rotation = Vt, w.rotation = Vt + "deg", w.renderTransform(1, w)) : E ? (d && (c.deltaY = vr - E.top(), E.top(vr)), f && (c.deltaX = Vt - E.left(), E.left(Vt))) : o ? (d && (c.deltaY = vr - parseFloat(w.y), w.y = vr + "px"), f && (c.deltaX = Vt - parseFloat(w.x), w.x = Vt + "px"), w.renderTransform(1, w)) : (d && (c.deltaY = vr - parseFloat(r.style.top || 0), r.style.top = vr + "px"), f && (c.deltaX = Vt - parseFloat(r.style.left || 0), r.style.left = Vt + "px")), X && !z && !pt && (pt = !0, $t(c, "drag", "onDrag") === !1 && (f && (c.x -= c.deltaX), d && (c.y -= c.deltaY), ot(!0)), pt = !1);
      }
      J = !1;
    }, pr = function(z, $) {
      var N = c.x, K = c.y, rt, it;
      r._gsap || (w = yt.core.getCache(r)), w.uncache && yt.getProperty(r, "x"), o ? (c.x = parseFloat(w.x), c.y = parseFloat(w.y)) : s ? c.x = c.rotation = mr(parseFloat(w.rotation)) : E ? (c.y = E.top(), c.x = E.left()) : (c.y = parseFloat(r.style.top || (it = xa(r)) && it.top) || 0, c.x = parseFloat(r.style.left || (it || {}).left) || 0), (dt || Z || nt) && !$ && (c.isDragging || c.isThrowing) && (nt && (Yn.x = c.x, Yn.y = c.y, rt = nt(Yn), rt.x !== c.x && (c.x = rt.x, J = !0), rt.y !== c.y && (c.y = rt.y, J = !0)), dt && (rt = dt(c.x), rt !== c.x && (c.x = rt, s && (c.rotation = rt), J = !0)), Z && (rt = Z(c.y), rt !== c.y && (c.y = rt), J = !0)), J && nr(!0), z || (c.deltaX = c.x - N, c.deltaY = c.y - K, $t(c, "throwupdate", "onThrowUpdate"));
    }, zn = function(z, $, N, K) {
      return $ == null && ($ = -fn), N == null && (N = fn), Le(z) ? function(rt) {
        var it = c.isPressed ? 1 - c.edgeResistance : 1;
        return z.call(c, (rt > N ? N + (rt - N) * it : rt < $ ? $ + (rt - $) * it : rt) * K) * K;
      } : zi(z) ? function(rt) {
        for (var it = z.length, mt = 0, ut = fn, Tt, wt; --it > -1; )
          Tt = z[it], wt = Tt - rt, wt < 0 && (wt = -wt), wt < ut && Tt >= $ && Tt <= N && (mt = it, ut = wt);
        return z[mt];
      } : isNaN(z) ? function(rt) {
        return rt;
      } : function() {
        return z * K;
      };
    }, Ra = function(z, $, N, K, rt, it, mt) {
      return it = it && it < fn ? it * it : fn, Le(z) ? function(ut) {
        var Tt = c.isPressed ? 1 - c.edgeResistance : 1, wt = ut.x, Mt = ut.y, Vt, vr, ye;
        return ut.x = wt = wt > N ? N + (wt - N) * Tt : wt < $ ? $ + (wt - $) * Tt : wt, ut.y = Mt = Mt > rt ? rt + (Mt - rt) * Tt : Mt < K ? K + (Mt - K) * Tt : Mt, Vt = z.call(c, ut), Vt !== ut && (ut.x = Vt.x, ut.y = Vt.y), mt !== 1 && (ut.x *= mt, ut.y *= mt), it < fn && (vr = ut.x - wt, ye = ut.y - Mt, vr * vr + ye * ye > it && (ut.x = wt, ut.y = Mt)), ut;
      } : zi(z) ? function(ut) {
        for (var Tt = z.length, wt = 0, Mt = fn, Vt, vr, ye, Vr; --Tt > -1; )
          ye = z[Tt], Vt = ye.x - ut.x, vr = ye.y - ut.y, Vr = Vt * Vt + vr * vr, Vr < Mt && (wt = Tt, Mt = Vr);
        return Mt <= it ? z[wt] : ut;
      } : function(ut) {
        return ut;
      };
    }, Ei = function() {
      var z, $, N, K;
      G = !1, E ? (E.calibrate(), c.minX = Y = -E.maxScrollLeft(), c.minY = L = -E.maxScrollTop(), c.maxX = A = c.maxY = H = 0, G = !0) : e.bounds && (z = mc(e.bounds, r.parentNode), s ? (c.minX = Y = z.left, c.maxX = A = z.left + z.width, c.minY = L = c.maxY = H = 0) : !ie(e.bounds.maxX) || !ie(e.bounds.maxY) ? (z = e.bounds, c.minX = Y = z.minX, c.minY = L = z.minY, c.maxX = A = z.maxX, c.maxY = H = z.maxY) : ($ = mc(r, r.parentNode), c.minX = Y = Math.round(T(u, "px") + z.left - $.left), c.minY = L = Math.round(T(l, "px") + z.top - $.top), c.maxX = A = Math.round(Y + (z.width - $.width)), c.maxY = H = Math.round(L + (z.height - $.height))), Y > A && (c.minX = A, c.maxX = A = Y, Y = c.minX), L > H && (c.minY = H, c.maxY = H = L, L = c.minY), s && (c.minRotation = Y, c.maxRotation = A), G = !0), e.liveSnap && (N = e.liveSnap === !0 ? e.snap || {} : e.liveSnap, K = zi(N) || Le(N), s ? (dt = zn(K ? N : N.rotation, Y, A, 1), Z = null) : N.points ? nt = Ra(K ? N : N.points, Y, A, L, H, N.radius, E ? -1 : 1) : (f && (dt = zn(K ? N : N.x || N.left || N.scrollLeft, Y, A, E ? -1 : 1)), d && (Z = zn(K ? N : N.y || N.top || N.scrollTop, L, H, E ? -1 : 1))));
    }, An = function() {
      c.isThrowing = !1, $t(c, "throwcomplete", "onThrowComplete");
    }, Ti = function() {
      c.isThrowing = !1;
    }, Mi = function(z, $) {
      var N, K, rt, it;
      z && Ar ? (z === !0 && (N = e.snap || e.liveSnap || {}, K = zi(N) || Le(N), z = {
        resistance: (e.throwResistance || e.resistance || 1e3) / (s ? 10 : 1)
      }, s ? z.rotation = Ts(c, K ? N : N.rotation, A, Y, 1, $) : (f && (z[u] = Ts(c, K ? N : N.points || N.x || N.left, A, Y, E ? -1 : 1, $ || c.lockedAxis === "x")), d && (z[l] = Ts(c, K ? N : N.points || N.y || N.top, H, L, E ? -1 : 1, $ || c.lockedAxis === "y")), (N.points || zi(N) && na(N[0])) && (z.linkedProps = u + "," + l, z.radius = N.radius))), c.isThrowing = !0, it = isNaN(e.overshootTolerance) ? e.edgeResistance === 1 ? 0 : 1 - c.edgeResistance + 0.2 : e.overshootTolerance, z.duration || (z.duration = {
        max: Math.max(e.minDuration || 0, "maxDuration" in e ? e.maxDuration : 2),
        min: isNaN(e.minDuration) ? it === 0 || na(z) && z.resistance > 1e3 ? 0 : 0.5 : e.minDuration,
        overshoot: it
      }), c.tween = rt = yt.to(E || r, {
        inertia: z,
        data: "_draggable",
        inherit: !1,
        onComplete: An,
        onInterrupt: Ti,
        onUpdate: e.fastMode ? $t : pr,
        onUpdateParams: e.fastMode ? [c, "onthrowupdate", "onThrowUpdate"] : N && N.radius ? [!1, !0] : []
      }), e.fastMode || (E && (E._skip = !0), rt.render(1e9, !0, !0), pr(!0, !0), c.endX = c.x, c.endY = c.y, s && (c.endRotation = c.x), rt.play(0), pr(!0, !0), E && (E._skip = !1))) : G && c.applyBounds();
    }, Oi = function(z) {
      var $ = Q, N;
      Q = _n(r.parentNode, !0), z && c.isPressed && !Q.equals($ || new Pn()) && (N = $.inverse().apply({
        x: I,
        y: k
      }), Q.apply(N, N), I = N.x, k = N.y), Q.equals(rx) && (Q = null);
    }, Ae = function() {
      var z = 1 - c.edgeResistance, $ = D ? ai(O) : 0, N = D ? ii(O) : 0, K, rt, it;
      o && (w.x = T(u, "px") + "px", w.y = T(l, "px") + "px", w.renderTransform()), Oi(!1), Ur.x = c.pointerX - $, Ur.y = c.pointerY - N, Q && Q.apply(Ur, Ur), I = Ur.x, k = Ur.y, J && (Dt(c.pointerX, c.pointerY), nr(!0)), er = _n(r), E ? (Ei(), F = E.top(), B = E.left()) : (an() ? (pr(!0, !0), Ei()) : c.applyBounds(), s ? (K = r.ownerSVGElement ? [w.xOrigin - r.getBBox().x, w.yOrigin - r.getBBox().y] : (xa(r)[Du] || "0 0").split(" "), tt = c.rotationOrigin = _n(r).apply({
        x: parseFloat(K[0]) || 0,
        y: parseFloat(K[1]) || 0
      }), pr(!0, !0), rt = c.pointerX - tt.x - $, it = tt.y - c.pointerY + N, B = c.x, F = c.y = Math.atan2(it, rt) * lc) : (F = T(l, "px"), B = T(u, "px"))), G && z && (B > A ? B = A + (B - A) / z : B < Y && (B = Y - (Y - B) / z), s || (F > H ? F = H + (F - H) / z : F < L && (F = L - (L - F) / z))), c.startX = B = mr(B), c.startY = F = mr(F);
    }, an = function() {
      return c.tween && c.tween.isActive();
    }, qo = function() {
      De.parentNode && !an() && !c.isDragging && De.parentNode.removeChild(De);
    }, on = function(z, $) {
      var N;
      if (!M || c.isPressed || !z || (z.type === "mousedown" || z.type === "pointerdown") && !$ && Ne() - C < 30 && ma[c.pointerEvent.type]) {
        Et && z && M && qr(z);
        return;
      }
      if (ht = an(), At = !1, c.pointerEvent = z, ma[z.type] ? (at = ~z.type.indexOf("touch") ? z.currentTarget || z.target : O, ar(at, "touchend", Rt), ar(at, "touchmove", ee), ar(at, "touchcancel", Rt), ar(O, "touchstart", vc)) : (at = null, ar(O, "mousemove", ee)), _t = null, (!ao || !at) && (ar(O, "mouseup", Rt), z && z.target && ar(z.target, "mouseup", Rt)), xt = S.call(c, z.target) && e.dragClickables === !1 && !$, xt) {
        ar(z.target, "change", Rt), $t(c, "pressInit", "onPressInit"), $t(c, "press", "onPress"), Ka(h, !0), Et = !1;
        return;
      }
      if (gt = !at || f === d || c.vars.allowNativeTouchScrolling === !1 || c.vars.allowContextMenu && z && (z.ctrlKey || z.which > 2) ? !1 : f ? "y" : "x", Et = !gt && !c.allowEventDefault, Et && (qr(z), ar(kt, "touchforcechange", qr)), z.changedTouches ? (z = U = z.changedTouches[0], q = z.identifier) : z.pointerId ? q = z.pointerId : U = q = null, Oo++, ax(nr), k = c.pointerY = z.pageY, I = c.pointerX = z.pageX, $t(c, "pressInit", "onPressInit"), (gt || c.autoScroll) && Ds(r.parentNode), r.parentNode && c.autoScroll && !E && !s && r.parentNode._gsMaxScrollX && !De.parentNode && !r.getBBox && (De.style.width = r.parentNode.scrollWidth + "px", r.parentNode.appendChild(De)), Ae(), c.tween && c.tween.kill(), c.isThrowing = !1, yt.killTweensOf(E || r, v, !0), E && yt.killTweensOf(r, {
        scrollTo: 1
      }, !0), c.tween = c.lockedAxis = null, (e.zIndexBoost || !s && !E && e.zIndexBoost !== !1) && (r.style.zIndex = t.zIndex++), c.isPressed = !0, X = !!(e.onDrag || c._listeners.drag), W = !!(e.onMove || c._listeners.move), e.cursor !== !1 || e.activeCursor)
        for (N = h.length; --N > -1; )
          yt.set(h[N], {
            cursor: e.activeCursor || e.cursor || (Wi === "grab" ? "grabbing" : Wi)
          });
      $t(c, "press", "onPress"), Ar && Ar.track(E || r, o ? "x,y" : s ? "rotation" : "top,left");
    }, ee = function(z) {
      var $ = z, N, K, rt, it, mt, ut;
      if (!M || Al || !c.isPressed || !z) {
        Et && z && M && qr(z);
        return;
      }
      if (c.pointerEvent = z, N = z.changedTouches, N) {
        if (z = N[0], z !== U && z.identifier !== q) {
          for (it = N.length; --it > -1 && (z = N[it]).identifier !== q && z.target !== r; )
            ;
          if (it < 0)
            return;
        }
      } else if (z.pointerId && q && z.pointerId !== q)
        return;
      if (at && gt && !_t && (Ur.x = z.pageX - (D ? ai(O) : 0), Ur.y = z.pageY - (D ? ii(O) : 0), Q && Q.apply(Ur, Ur), K = Ur.x, rt = Ur.y, mt = Math.abs(K - I), ut = Math.abs(rt - k), (mt !== ut && (mt > p || ut > p) || Xi && gt === _t) && (_t = mt > ut && f ? "x" : "y", gt && _t !== gt && ar(kt, "touchforcechange", qr), c.vars.lockAxisOnTouchScroll !== !1 && f && d && (c.lockedAxis = _t === "x" ? "y" : "x", Le(c.vars.onLockAxis) && c.vars.onLockAxis.call(c, $)), Xi && gt === _t))) {
        Rt($);
        return;
      }
      !c.allowEventDefault && (!gt || _t && gt !== _t) && $.cancelable !== !1 ? (qr($), Et = !0) : Et && (Et = !1), c.autoScroll && (_ = !0), Dt(z.pageX, z.pageY, W);
    }, Dt = function(z, $, N) {
      var K = 1 - c.dragResistance, rt = 1 - c.edgeResistance, it = c.pointerX, mt = c.pointerY, ut = F, Tt = c.x, wt = c.y, Mt = c.endX, Vt = c.endY, vr = c.endRotation, ye = J, Vr, Be, fr, Kt, Uo, zr;
      c.pointerX = z, c.pointerY = $, D && (z -= ai(O), $ -= ii(O)), s ? (Kt = mr(Math.atan2(tt.y - $, z - tt.x) * lc), Uo = c.y - Kt, Uo > 180 ? (F -= 360, c.y = Kt) : Uo < -180 && (F += 360, c.y = Kt), Q && (zr = z * Q.a + $ * Q.c + Q.e, $ = z * Q.b + $ * Q.d + Q.f, z = zr), c.x !== B || Math.max(Math.abs(I - z), Math.abs(k - $)) > p ? (c.y = Kt, fr = mr(B + (F - Kt) * K)) : fr = B) : (Q && (zr = z * Q.a + $ * Q.c + Q.e, $ = z * Q.b + $ * Q.d + Q.f, z = zr), Be = $ - k, Vr = z - I, Be < p && Be > -p && (Be = 0), Vr < p && Vr > -p && (Vr = 0), (c.lockAxis || c.lockedAxis) && (Vr || Be) && (zr = c.lockedAxis, zr || (c.lockedAxis = zr = f && Math.abs(Vr) > Math.abs(Be) ? "y" : d ? "x" : null, zr && Le(c.vars.onLockAxis) && c.vars.onLockAxis.call(c, c.pointerEvent)), zr === "y" ? Be = 0 : zr === "x" && (Vr = 0)), fr = mr(B + Vr * K), Kt = mr(F + Be * K)), (dt || Z || nt) && (c.x !== fr || c.y !== Kt && !s) && (nt && (Yn.x = fr, Yn.y = Kt, zr = nt(Yn), fr = mr(zr.x), Kt = mr(zr.y)), dt && (fr = mr(dt(fr))), Z && (Kt = mr(Z(Kt)))), G && (fr > A ? fr = A + Math.round((fr - A) * rt) : fr < Y && (fr = Y + Math.round((fr - Y) * rt)), s || (Kt > H ? Kt = Math.round(H + (Kt - H) * rt) : Kt < L && (Kt = Math.round(L + (Kt - L) * rt)))), (c.x !== fr || c.y !== Kt && !s) && (s ? (c.endRotation = c.x = c.endX = mr(fr), J = !0) : (d && (c.y = c.endY = Kt, J = !0), f && (c.x = c.endX = fr, J = !0)), !N || $t(c, "move", "onMove") !== !1 ? !c.isDragging && c.isPressed && (c.isDragging = At = !0, $t(c, "dragstart", "onDragStart")) : (c.pointerX = it, c.pointerY = mt, F = ut, c.x = Tt, c.y = wt, c.endX = Mt, c.endY = Vt, c.endRotation = vr, J = ye));
    }, Rt = function ot(z, $) {
      if (!M || !c.isPressed || z && q != null && !$ && (z.pointerId && z.pointerId !== q && z.target !== r || z.changedTouches && !sx(z.changedTouches, q))) {
        Et && z && M && qr(z);
        return;
      }
      c.isPressed = !1;
      var N = z, K = c.isDragging, rt = c.vars.allowContextMenu && z && (z.ctrlKey || z.which > 2), it = yt.delayedCall(1e-3, qo), mt, ut, Tt, wt, Mt;
      if (at ? (Qt(at, "touchend", ot), Qt(at, "touchmove", ee), Qt(at, "touchcancel", ot), Qt(O, "touchstart", vc)) : Qt(O, "mousemove", ee), Qt(kt, "touchforcechange", qr), (!ao || !at) && (Qt(O, "mouseup", ot), z && z.target && Qt(z.target, "mouseup", ot)), J = !1, K && (g = fc = Ne(), c.isDragging = !1), pc(nr), xt && !rt) {
        z && (Qt(z.target, "change", ot), c.pointerEvent = N), Ka(h, !1), $t(c, "release", "onRelease"), $t(c, "click", "onClick"), xt = !1;
        return;
      }
      for (ut = h.length; --ut > -1; )
        Es(h[ut], "cursor", e.cursor || (e.cursor !== !1 ? Wi : null));
      if (Oo--, z) {
        if (mt = z.changedTouches, mt && (z = mt[0], z !== U && z.identifier !== q)) {
          for (ut = mt.length; --ut > -1 && (z = mt[ut]).identifier !== q && z.target !== r; )
            ;
          if (ut < 0 && !$)
            return;
        }
        c.pointerEvent = N, c.pointerX = z.pageX, c.pointerY = z.pageY;
      }
      return rt && N ? (qr(N), Et = !0, $t(c, "release", "onRelease")) : N && !K ? (Et = !1, ht && (e.snap || e.bounds) && Mi(e.inertia || e.throwProps), $t(c, "release", "onRelease"), (!Xi || N.type !== "touchmove") && N.type.indexOf("cancel") === -1 && ($t(c, "click", "onClick"), Ne() - C < 300 && $t(c, "doubleclick", "onDoubleClick"), wt = N.target || r, C = Ne(), Mt = function() {
        C !== St && c.enabled() && !c.isPressed && !N.defaultPrevented && (wt.click ? wt.click() : O.createEvent && (Tt = O.createEvent("MouseEvents"), Tt.initMouseEvent("click", !0, !0, kt, 1, c.pointerEvent.screenX, c.pointerEvent.screenY, c.pointerX, c.pointerY, !1, !1, !1, !1, 0, null), wt.dispatchEvent(Tt)));
      }, !Xi && !N.defaultPrevented && yt.delayedCall(0.05, Mt))) : (Mi(e.inertia || e.throwProps), !c.allowEventDefault && N && (e.dragClickables !== !1 || !S.call(c, N.target)) && K && (!gt || _t && gt === _t) && N.cancelable !== !1 ? (Et = !0, qr(N)) : Et = !1, $t(c, "release", "onRelease")), an() && it.duration(c.tween.duration()), K && $t(c, "dragend", "onDragEnd"), !0;
    }, sn = function(z) {
      if (z && c.isDragging && !E) {
        var $ = z.target || r.parentNode, N = $.scrollLeft - $._gsScrollX, K = $.scrollTop - $._gsScrollY;
        (N || K) && (Q ? (I -= N * Q.a + K * Q.c, k -= K * Q.d + N * Q.b) : (I -= N, k -= K), $._gsScrollX += N, $._gsScrollY += K, Dt(c.pointerX, c.pointerY));
      }
    }, Pi = function(z) {
      var $ = Ne(), N = $ - C < 100, K = $ - g < 50, rt = N && St === C, it = c.pointerEvent && c.pointerEvent.defaultPrevented, mt = N && Ht === C, ut = z.isTrusted || z.isTrusted == null && N && rt;
      if ((rt || K && c.vars.suppressClickOnDrag !== !1) && z.stopImmediatePropagation && z.stopImmediatePropagation(), N && !(c.pointerEvent && c.pointerEvent.defaultPrevented) && (!rt || ut && !mt)) {
        ut && rt && (Ht = C), St = C;
        return;
      }
      (c.isPressed || K || N) && (!ut || !z.detail || !N || it) && qr(z), !N && !K && !At && (z && z.target && (c.pointerEvent = z), $t(c, "click", "onClick"));
    }, Ia = function(z) {
      return Q ? {
        x: z.x * Q.a + z.y * Q.c + Q.e,
        y: z.x * Q.b + z.y * Q.d + Q.f
      } : {
        x: z.x,
        y: z.y
      };
    };
    return ft = t.get(r), ft && ft.kill(), i.startDrag = function(ot, z) {
      var $, N, K, rt;
      on(ot || c.pointerEvent, !0), z && !c.hitTest(ot || c.pointerEvent) && ($ = Xn(ot || c.pointerEvent), N = Xn(r), K = Ia({
        x: $.left + $.width / 2,
        y: $.top + $.height / 2
      }), rt = Ia({
        x: N.left + N.width / 2,
        y: N.top + N.height / 2
      }), I -= K.x - rt.x, k -= K.y - rt.y), c.isDragging || (c.isDragging = At = !0, $t(c, "dragstart", "onDragStart"));
    }, i.drag = ee, i.endDrag = function(ot) {
      return Rt(ot || c.pointerEvent, !0);
    }, i.timeSinceDrag = function() {
      return c.isDragging ? 0 : (Ne() - g) / 1e3;
    }, i.timeSinceClick = function() {
      return (Ne() - C) / 1e3;
    }, i.hitTest = function(ot, z) {
      return t.hitTest(c.target, ot, z);
    }, i.getDirection = function(ot, z) {
      var $ = ot === "velocity" && Ar ? ot : na(ot) && !s ? "element" : "start", N, K, rt, it, mt, ut;
      return $ === "element" && (mt = Xn(c.target), ut = Xn(ot)), N = $ === "start" ? c.x - B : $ === "velocity" ? Ar.getVelocity(r, u) : mt.left + mt.width / 2 - (ut.left + ut.width / 2), s ? N < 0 ? "counter-clockwise" : "clockwise" : (z = z || 2, K = $ === "start" ? c.y - F : $ === "velocity" ? Ar.getVelocity(r, l) : mt.top + mt.height / 2 - (ut.top + ut.height / 2), rt = Math.abs(N / K), it = rt < 1 / z ? "" : N < 0 ? "left" : "right", rt < z && (it !== "" && (it += "-"), it += K < 0 ? "up" : "down"), it);
    }, i.applyBounds = function(ot, z) {
      var $, N, K, rt, it, mt;
      if (ot && e.bounds !== ot)
        return e.bounds = ot, c.update(!0, z);
      if (pr(!0), Ei(), G && !an()) {
        if ($ = c.x, N = c.y, $ > A ? $ = A : $ < Y && ($ = Y), N > H ? N = H : N < L && (N = L), (c.x !== $ || c.y !== N) && (K = !0, c.x = c.endX = $, s ? c.endRotation = $ : c.y = c.endY = N, J = !0, nr(!0), c.autoScroll && !c.isDragging))
          for (Ds(r.parentNode), rt = r, Se.scrollTop = kt.pageYOffset != null ? kt.pageYOffset : O.documentElement.scrollTop != null ? O.documentElement.scrollTop : O.body.scrollTop, Se.scrollLeft = kt.pageXOffset != null ? kt.pageXOffset : O.documentElement.scrollLeft != null ? O.documentElement.scrollLeft : O.body.scrollLeft; rt && !mt; )
            mt = xi(rt.parentNode), it = mt ? Se : rt.parentNode, d && it.scrollTop > it._gsMaxScrollY && (it.scrollTop = it._gsMaxScrollY), f && it.scrollLeft > it._gsMaxScrollX && (it.scrollLeft = it._gsMaxScrollX), rt = it;
        c.isThrowing && (K || c.endX > A || c.endX < Y || c.endY > H || c.endY < L) && Mi(e.inertia || e.throwProps, K);
      }
      return c;
    }, i.update = function(ot, z, $) {
      if (z && c.isPressed) {
        if (s)
          c.x = c.y = mr(parseFloat(w.rotation));
        else {
          var N = _n(r), K = er.apply({
            x: c.x - B,
            y: c.y - F
          }), rt = _n(r.parentNode, !0);
          rt.apply({
            x: N.e - K.x,
            y: N.f - K.y
          }, K), c.x = mr(c.x - (K.x - rt.e)), c.y = mr(c.y - (K.y - rt.f));
        }
        nr(!0), Ae();
      }
      var it = c.x, mt = c.y;
      return Oi(!z), ot ? c.applyBounds() : (J && $ && nr(!0), pr(!0)), z && (Dt(c.pointerX, c.pointerY), J && nr(!0)), c.isPressed && !z && (f && Math.abs(it - c.x) > 0.01 || d && Math.abs(mt - c.y) > 0.01 && !s) && Ae(), c.autoScroll && (Ds(r.parentNode, c.isDragging), _ = c.isDragging, nr(!0), gc(r, sn), hc(r, sn)), c;
    }, i.enable = function(ot) {
      var z = {
        lazy: !0
      }, $, N, K;
      if (e.cursor !== !1 && (z.cursor = e.cursor || Wi), yt.utils.checkPrefix("touchCallout") && (z.touchCallout = "none"), ot !== "soft") {
        for (cc(h, f === d ? "none" : e.allowNativeTouchScrolling && r.scrollHeight === r.clientHeight == (r.scrollWidth === r.clientHeight) || e.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"), N = h.length; --N > -1; )
          K = h[N], ao || ar(K, "mousedown", on), ar(K, "touchstart", on), ar(K, "click", Pi, !0), yt.set(K, z), K.getBBox && K.ownerSVGElement && f !== d && yt.set(K.ownerSVGElement, {
            touchAction: e.allowNativeTouchScrolling || e.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"
          }), e.allowContextMenu || ar(K, "contextmenu", Xt);
        Ka(h, !1);
      }
      return hc(r, sn), M = !0, Ar && ot !== "soft" && Ar.track(E || r, o ? "x,y" : s ? "rotation" : "top,left"), r._gsDragID = $ = r._gsDragID || "d" + ex++, ni[$] = c, E && (E.enable(), E.element._gsDragID = $), (e.bounds || s) && Ae(), e.bounds && c.applyBounds(), c;
    }, i.disable = function(ot) {
      for (var z = c.isDragging, $ = h.length, N; --$ > -1; )
        Es(h[$], "cursor", null);
      if (ot !== "soft") {
        for (cc(h, null), $ = h.length; --$ > -1; )
          N = h[$], Es(N, "touchCallout", null), Qt(N, "mousedown", on), Qt(N, "touchstart", on), Qt(N, "click", Pi, !0), Qt(N, "contextmenu", Xt);
        Ka(h, !0), at && (Qt(at, "touchcancel", Rt), Qt(at, "touchend", Rt), Qt(at, "touchmove", ee)), Qt(O, "mouseup", Rt), Qt(O, "mousemove", ee);
      }
      return gc(r, sn), M = !1, Ar && ot !== "soft" && (Ar.untrack(E || r, o ? "x,y" : s ? "rotation" : "top,left"), c.tween && c.tween.kill()), E && E.disable(), pc(nr), c.isDragging = c.isPressed = xt = !1, z && $t(c, "dragend", "onDragEnd"), c;
    }, i.enabled = function(ot, z) {
      return arguments.length ? ot ? c.enable(z) : c.disable(z) : M;
    }, i.kill = function() {
      return c.isThrowing = !1, c.tween && c.tween.kill(), c.disable(), yt.set(h, {
        clearProps: "userSelect"
      }), delete ni[r._gsDragID], c;
    }, i.revert = function() {
      this.kill(), this.styles && this.styles.revert();
    }, ~a.indexOf("scroll") && (E = i.scrollProxy = new dx(r, ix({
      onKill: function() {
        c.isPressed && Rt(null);
      }
    }, e)), r.style.overflowY = d && !wu ? "auto" : "hidden", r.style.overflowX = f && !wu ? "auto" : "hidden", r = E.content), s ? v.rotation = 1 : (f && (v[u] = 1), d && (v[l] = 1)), w.force3D = "force3D" in e ? e.force3D : !0, Mv(uc(i)), i.enable(), i;
  }
  return t.register = function(e) {
    yt = e, Ms();
  }, t.create = function(e, i) {
    return Su || Ms(!0), $e(e).map(function(a) {
      return new t(a, i);
    });
  }, t.get = function(e) {
    return ni[($e(e)[0] || {})._gsDragID];
  }, t.timeSinceDrag = function() {
    return (Ne() - fc) / 1e3;
  }, t.hitTest = function(e, i, a) {
    if (e === i)
      return !1;
    var o = Xn(e), s = Xn(i), u = o.top, l = o.left, f = o.right, d = o.bottom, p = o.width, c = o.height, h = s.left > f || s.right < l || s.top > d || s.bottom < u, v, g, _;
    return h || !a ? !h : (_ = (a + "").indexOf("%") !== -1, a = parseFloat(a) || 0, v = {
      left: Math.max(l, s.left),
      top: Math.max(u, s.top)
    }, v.width = Math.min(f, s.right) - v.left, v.height = Math.min(d, s.bottom) - v.top, v.width < 0 || v.height < 0 ? !1 : _ ? (a *= 0.01, g = v.width * v.height, g >= p * c * a || g >= s.width * s.height * a) : v.width > a && v.height > a);
  }, t;
}(px);
ox(yi.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1
});
yi.zIndex = 1e3;
yi.version = "3.14.2";
Pv() && yt.registerPlugin(yi);
wc([Sp]);
const vx = {
  complementary: [180],
  analogous: [-30, 30],
  split: [-150, 150],
  triad: [120, 240],
  tetradic: [60, 180, 240],
  square: [90, 180, 270],
  compound: [30, 150, 180],
  // doubleAnalogous: [-60, -30, 30, 60]
  monochromatic: [360, 720],
  doubleSplit: [-150, -30, 30, 150]
}, Hn = (n, t) => {
  let r = Math.sqrt(n * n + t * t), e = Math.atan2(t, n);
  return [r, e];
}, Hi = (n, t) => {
  let r = n * Math.cos(t), e = n * Math.sin(t);
  return [r, e];
}, Tu = (n) => (n + Math.PI) / (2 * Math.PI) * 360, hx = (n) => n * (Math.PI / 180), Os = (n, t, r) => {
  const e = {
    h: n,
    s: t * 100,
    v: r * 100
  };
  return r === 1 ? qt(e).toRgb() : qt(e).mix("#ffffff", r).toRgb();
}, xc = (n) => {
  const { h: t, s: r, v: e } = qt(n).toHsv();
  return {
    hue: t,
    saturation: r / 100,
    value: e / 100
  };
}, Za = (n, t, r, e = 1) => {
  n -= r, t -= r;
  const [i, a] = Hn(n, t), o = Tu(a), s = i / r * 100, u = e * 100;
  return qt({
    h: o,
    s,
    v: u
  }).toRgb();
}, Ps = (n, t, r, e) => {
  const i = n - 180, [a, o] = Hi(e * t, hx(i));
  return {
    x: a + e,
    y: o + e
  };
}, _x = /* @__PURE__ */ Bv({
  name: "VueColorWheel",
  inheritAttrs: !1,
  __name: "ColorWheel",
  props: {
    radius: { default: 120 },
    harmony: { default: "analogous" },
    wheel: { default: "spectrum" },
    showBrightness: { type: Boolean, default: !1 },
    color: { default: "#33ffee" },
    defaultColor: { default: "#33ffee" }
  },
  emits: ["update:color", "change"],
  setup(n, { emit: t }) {
    wc([Sp]), no.registerPlugin(yi);
    const r = t, e = n, { defaultColor: i, radius: a, wheel: o, showBrightness: s } = Gv(e), u = xc(i.value), l = Ri(null), f = Ri(null), d = Ri(null), p = Ri(
      Ps(u.hue, u.saturation, u.value, a.value)
    ), c = Ri(0.8), h = Bn(() => {
      const T = qt(i.value).tints(11).map((O) => O.toRgbString());
      return `linear-gradient(rgb(0, 0, 0), ${T.slice(
        0,
        1
      )}, ${T.slice(9, 10)})`;
    }), v = Bn(() => vx[e.harmony]), g = Bn(() => e.harmony === "monochromatic"), _ = Bn(() => s.value ? c.value : 1), m = Bn(() => {
      const {
        r: T,
        g: O,
        b: M
      } = Za(p.value.x, p.value.y, a.value);
      return `rgb(${T}, ${O}, ${M})`;
    }), y = Bn(() => {
      const T = p.value.x - a.value, O = p.value.y - a.value, [M, E] = Hn(T, O), I = Tu(E), k = M / a.value, B = _.value, F = Os(I, k, B), G = {
        x: T,
        y: O,
        h: I,
        s: k,
        v: B,
        rgb: `rgb(${F.r}, ${F.g}, ${F.b})`
      }, X = v.value.map((Y) => {
        const H = Y === 360 ? qt(G.rgb).tints(5).map((U) => U.toRgbString())[1] : qt(G.rgb).shades(5).map((U) => U.toRgbString())[1], L = Y === 360 ? qt(G.rgb).tints(5).map((U) => U.toHsv())[1] : qt(G.rgb).shades(5).map((U) => U.toHsv())[1];
        return {
          x: p.value.x,
          y: p.value.y,
          h: (L == null ? void 0 : L.h) ?? I,
          s: (L == null ? void 0 : L.s) ?? k,
          v: (L == null ? void 0 : L.v) ?? B,
          rgb: H ?? G.rgb
        };
      }), W = v.value.map((Y) => {
        let H = (I + Y) % 360;
        H = H < 0 ? 360 + H : H;
        const [L, U] = Hi(M, H * (Math.PI / 180)), q = Os(H, k, B);
        return {
          x: -L + a.value,
          y: -U + a.value,
          h: H,
          s: k,
          v: B,
          rgb: `rgb(${q.r}, ${q.g}, ${q.b})`
        };
      }), A = g.value ? X : W;
      return g.value ? r("change", [
        ...X.slice(0, 1),
        G,
        ...X.slice(1)
      ]) : r("change", [G, ...W]), A;
    }), b = (T) => {
      let O = T.createImageData(2 * a.value, 2 * a.value), M = O.data;
      for (let E = -a.value; E < a.value; E++)
        for (let I = -a.value; I < a.value; I++) {
          let [k, B] = Hn(E, I), F = Tu(B), G = 2 * a.value, X = E + a.value, W = I + a.value, A = 4, Y = (X + W * G) * A, H = F, L = k / a.value, U = 1, { r: q, g: tt, b: J } = Os(H, L, U), ft = 255;
          M[Y] = q, M[Y + 1] = tt, M[Y + 2] = J, M[Y + 3] = ft;
        }
      T.putImageData(O, 0, 0);
    }, x = () => {
      if (!l.value)
        return;
      const T = l.value.getContext("2d");
      T && (T.canvas.width = a.value * 2, T.canvas.height = a.value * 2, b(T));
    }, S = () => {
      new Gf(document.body, {
        target: document.getElementById("handleRef"),
        container: document.getElementById("ColorWheel"),
        draggable: !0,
        origin: !1,
        keepRatio: !0,
        // Resize, Scale Events at edges.
        edge: !1,
        throttleDrag: 0,
        throttleResize: 0,
        throttleScale: 0,
        throttleRotate: 0,
        bounds: { left: 0, top: 0, right: 0, bottom: 0, position: "css" }
      }).on("drag", ({ target: O, translate: M, transform: E }) => {
        const [I, k] = M;
        if (I === void 0 || k === void 0)
          return;
        let [B, F] = Hn(I - a.value, k - a.value);
        B = Math.min(B, a.value);
        const [G, X] = Hi(B, F), W = { x: G + a.value, y: X + a.value };
        p.value = W;
        const {
          r: A,
          g: Y,
          b: H
        } = Za(W.x, W.y, a.value, _.value);
        r("update:color", qt({ r: A, g: Y, b: H }).toHex());
      });
    }, C = () => {
      const O = 180 / Math.PI;
      no.set("#ringTrackerRef", { transformOrigin: "center center", rotate: 30 }), yi.create("#ringTrackerRef", {
        // trigger: '#ringHandleRef',
        type: "rotation",
        // bounds: { minRotation: 0, maxRotation: 270 },
        // liveSnap: {
        //   rotation: function (value) {
        //     //snap to the closest increment of 10.
        //     return Math.round(value / 10) * 10
        //   }
        // },
        onPressInit: function() {
          if (!this.rotationOrigin)
            return;
          let M = Math.atan2(
            this.pointerY - this.rotationOrigin.y,
            this.pointerX - this.rotationOrigin.x
          ) * O + -90;
          if (M < 0 ? M += 360 : M > 270 && (M -= 360), M) {
            const E = Math.abs(M) % 360, I = Math.abs(180 - E) / 180;
            c.value = I;
          }
          no.set(this.target, { rotation: M });
        },
        onDrag: function() {
          if (this.rotation) {
            const M = Math.abs(this.rotation) % 360, E = Math.abs(180 - M) / 180;
            c.value = E;
          }
        }
      })[0];
    }, w = () => {
      new Gf(document.body, {
        target: document.getElementById("auroraWheelRef"),
        container: document.getElementById("ColorWheel"),
        draggable: !0,
        origin: !1,
        keepRatio: !0,
        // Resize, Scale Events at edges.
        edge: !1,
        throttleDrag: 0,
        throttleResize: 0,
        throttleScale: 0,
        throttleRotate: 0,
        bounds: { left: 0, top: 0, right: 0, bottom: 0, position: "css" }
      }).on("dragStart", ({ target: O }) => {
        let M = event;
        if ((M == null ? void 0 : M.target) === O) {
          const E = M == null ? void 0 : M.offsetX, I = M == null ? void 0 : M.offsetY;
          let [k, B] = Hn(E - a.value, I - a.value);
          k = Math.min(k, a.value);
          const [F, G] = Hi(k, B), X = { x: F + a.value, y: G + a.value };
          p.value = X;
          const {
            r: W,
            g: A,
            b: Y
          } = Za(X.x, X.y, a.value, _.value);
          r("update:color", qt({ r: W, g: A, b: Y }).toHex());
        }
      });
    }, D = (T) => {
      const O = T.target.getBoundingClientRect(), M = T.clientX - O.left, E = T.clientY - O.top;
      let [I, k] = Hn(M - a.value, E - a.value);
      I = Math.min(I, a.value);
      const [B, F] = Hi(I, k), G = { x: B + a.value, y: F + a.value };
      p.value = G;
      const {
        r: X,
        g: W,
        b: A
      } = Za(G.x, G.y, a.value, _.value);
      r("update:color", qt({ r: X, g: W, b: A }).toHex());
    };
    return M_(
      () => [i.value, a.value],
      () => {
        if (i.value) {
          const T = xc(i.value);
          p.value = Ps(T.hue, T.saturation, T.value, a.value);
        } else
          p.value = Ps(0, 1, 1, a.value);
      },
      {
        deep: !0,
        immediate: !0,
        debounce: 200
      }
    ), Fv(() => {
      x(), S(), C(), w();
    }), (T, O) => (Gn(), Fn("div", {
      ref_key: "wrapperRef",
      ref: f,
      id: "ColorWheel",
      class: "vue-color-wheel",
      style: Ge({
        position: "relative",
        width: `${xr(a) * 2}px`,
        height: `${xr(a) * 2}px`
      })
    }, [
      ka("div", {
        class: "wheel-ring-mask",
        style: Ge({
          position: "absolute",
          borderRadius: "100%",
          background: "#ffffff",
          width: `${xr(a) * 2 + 24}px`,
          height: `${xr(a) * 2 + 24}px`,
          top: "-12px",
          left: "-12px",
          zIndex: "1"
        })
      }, null, 4),
      xr(s) ? (Gn(), Fn("div", {
        key: 0,
        class: "wheel-ring-tracker",
        style: Ge({
          position: "absolute",
          borderRadius: "100%",
          width: `${xr(a) * 2 + 48}px`,
          height: `${xr(a) * 2 + 48}px`,
          top: "-24px",
          left: "-24px",
          background: `${h.value}`
        }),
        role: "slider"
      }, [
        ka("div", {
          id: "ringTrackerRef",
          class: "wheel-ring-inner",
          style: Ge({
            position: "relative",
            borderRadius: "100%",
            background: "transparent",
            width: `${xr(a) * 2 + 48}px`,
            height: `${xr(a) * 2 + 48}px`,
            top: "0",
            left: "0",
            cursor: "pointer"
          })
        }, [...O[0] || (O[0] = [
          ka("div", {
            id: "ringHandleRef",
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: "50%",
              bottom: "-2px",
              width: "14px",
              height: "14px",
              borderRadius: "99px",
              border: "1px solid rgba(0, 0, 0, 0.24)",
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.08)",
              cursor: "move",
              userSelect: "none",
              transform: "translateX(-50%)",
              zIndex: "10"
            }
          }, null, -1)
        ])], 4)
      ], 4)) : Nv("", !0),
      xr(o) === "spectrum" ? (Gn(), Fn("canvas", {
        key: 1,
        ref_key: "canvasRef",
        ref: l,
        style: Ge({
          position: "absolute",
          top: "0",
          left: "0",
          width: `${xr(a) * 2}px`,
          height: `${xr(a) * 2}px`,
          borderRadius: "50%",
          zIndex: "10",
          cursor: "pointer"
        }),
        onClick: D
      }, null, 4)) : (Gn(), Fn("div", {
        key: 2,
        ref: "auroraWheelRef",
        id: "auroraWheelRef",
        class: "aurora-wheel",
        style: Ge({
          width: `${xr(a) * 2}px`,
          height: `${xr(a) * 2}px`,
          zIndex: "10"
        })
      }, null, 4)),
      (Gn(!0), Fn(Lv, null, Yv(y.value, (M, E) => (Gn(), Fn("div", {
        key: E,
        style: Ge({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "-8px",
          left: "-8px",
          width: "16px",
          height: "16px",
          borderRadius: "999px",
          border: "3px solid #ffffff",
          backgroundColor: `rgb(${M.rgb})`,
          transform: `translate(${M.x}px, ${M.y}px)`,
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)",
          zIndex: "10"
        })
      }, null, 4))), 128)),
      ka("div", {
        id: "handleRef",
        ref_key: "handleRef",
        ref: d,
        style: Ge({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "-12px",
          left: "-12px",
          width: "24px",
          height: "24px",
          borderRadius: "99px",
          border: "5px solid #ffffff",
          backgroundColor: `${m.value}`,
          transform: `translate(${p.value.x}px, ${p.value.y}px)`,
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)",
          cursor: "move",
          userSelect: "none",
          zIndex: "10"
        })
      }, null, 4)
    ], 4));
  }
});
export {
  _x as VueColorWheel,
  hx as deg2rad,
  vx as harmonies,
  xc as hex2hsv,
  Os as hsv2rgb,
  Ps as hsv2xy,
  Hi as polar2xy,
  Tu as rad2deg,
  Hn as xy2polar,
  Za as xy2rgb
};
//# sourceMappingURL=vue-color-wheel.js.map
