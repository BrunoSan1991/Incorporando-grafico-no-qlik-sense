"use strict";
(self.webpackChunk_am5 = self.webpackChunk_am5 || []).push([
  [6450],
  {
    6901: function (e, t, i) {
      i.d(t, {
        z: function () {
          return _;
        },
      });
      var s = i(55),
        a = i(8777),
        o = i(7142),
        n = i(5829),
        r = i(7144),
        l = i(6245),
        h = i(8054),
        c = i(1479),
        u = i(5071),
        d = i(5040),
        g = i(3540),
        m = i(256),
        p = i(7652),
        b = i(751);
      class _ extends n.j {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "xAxes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new r.dn(),
            }),
            Object.defineProperty(this, "yAxes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new r.dn(),
            }),
            Object.defineProperty(this, "topAxesContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.chartContainer.children.push(
                a.W.new(this._root, {
                  width: l.AQ,
                  layout: this._root.verticalLayout,
                })
              ),
            }),
            Object.defineProperty(this, "yAxesAndPlotContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.chartContainer.children.push(
                a.W.new(this._root, {
                  width: l.AQ,
                  height: l.AQ,
                  layout: this._root.horizontalLayout,
                })
              ),
            }),
            Object.defineProperty(this, "bottomAxesContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.chartContainer.children.push(
                a.W.new(this._root, {
                  width: l.AQ,
                  layout: this._root.verticalLayout,
                })
              ),
            }),
            Object.defineProperty(this, "leftAxesContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.yAxesAndPlotContainer.children.push(
                a.W.new(this._root, {
                  height: l.AQ,
                  layout: this._root.horizontalLayout,
                })
              ),
            }),
            Object.defineProperty(this, "plotsContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.yAxesAndPlotContainer.children.push(
                a.W.new(this._root, {
                  width: l.AQ,
                  height: l.AQ,
                  maskContent: !1,
                })
              ),
            }),
            Object.defineProperty(this, "plotContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.plotsContainer.children.push(
                a.W.new(this._root, { width: l.AQ, height: l.AQ })
              ),
            }),
            Object.defineProperty(this, "topPlotContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.plotsContainer.children.push(
                a.W.new(this._root, { width: l.AQ, height: l.AQ })
              ),
            }),
            Object.defineProperty(this, "gridContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.plotContainer.children.push(
                a.W.new(this._root, {
                  width: l.AQ,
                  height: l.AQ,
                  isMeasured: !1,
                })
              ),
            }),
            Object.defineProperty(this, "topGridContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a.W.new(this._root, {
                width: l.AQ,
                height: l.AQ,
                isMeasured: !1,
              }),
            }),
            Object.defineProperty(this, "rightAxesContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.yAxesAndPlotContainer.children.push(
                a.W.new(this._root, {
                  height: l.AQ,
                  layout: this._root.horizontalLayout,
                })
              ),
            }),
            Object.defineProperty(this, "axisHeadersContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.plotContainer.children.push(a.W.new(this._root, {})),
            }),
            Object.defineProperty(this, "zoomOutButton", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.topPlotContainer.children.push(
                h.z.new(this._root, {
                  themeTags: ["zoom"],
                  icon: c.T.new(this._root, { themeTags: ["button", "icon"] }),
                })
              ),
            }),
            Object.defineProperty(this, "_movePoint", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { x: 0, y: 0 },
            }),
            Object.defineProperty(this, "_wheelDp", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_otherCharts", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_movePoints", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "_downStartX", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_downEndX", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_downStartY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_downEndY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        _afterNew() {
          this._defaultThemes.push(s.l.new(this._root)),
            super._afterNew(),
            this._disposers.push(this.xAxes),
            this._disposers.push(this.yAxes);
          const e = this._root;
          let t = this._root.verticalLayout;
          const i = this.zoomOutButton;
          i.events.on("click", () => {
            this.zoomOut();
          }),
            i.hide(0),
            i.states.lookup("default").set("opacity", 1),
            this.chartContainer.set("layout", t);
          const a = this.plotContainer;
          a.children.push(this.seriesContainer),
            this._disposers.push(
              this._processAxis(this.xAxes, this.bottomAxesContainer)
            ),
            this._disposers.push(
              this._processAxis(this.yAxes, this.leftAxesContainer)
            ),
            a.children.push(this.topGridContainer),
            a.children.push(this.bulletsContainer),
            a.set("interactive", !0),
            a.set("interactiveChildren", !1),
            a.set(
              "background",
              o.A.new(e, { themeTags: ["plotbackground", "xy", "background"] })
            ),
            this._disposers.push(
              a.events.on("pointerdown", (e) => {
                this._handlePlotDown(e);
              })
            ),
            this._disposers.push(
              a.events.on("globalpointerup", (e) => {
                this._handlePlotUp(e);
              })
            ),
            this._disposers.push(
              a.events.on("globalpointermove", (e) => {
                this._handlePlotMove(e);
              })
            ),
            this._maskGrid(),
            this._setUpTouch();
        }
        _beforeChanged() {
          super._beforeChanged(),
            (this.isDirty("pinchZoomX") ||
              this.isDirty("pinchZoomY") ||
              this.get("panX") ||
              this.get("panY")) &&
              this._setUpTouch();
        }
        _setUpTouch() {
          this.plotContainer._display.cancelTouch ||
            (this.plotContainer._display.cancelTouch = !!(
              this.get("pinchZoomX") ||
              this.get("pinchZoomY") ||
              this.get("panX") ||
              this.get("panY")
            ));
        }
        _maskGrid() {
          this.gridContainer.set("maskContent", !0),
            this.topGridContainer.set("maskContent", !0);
        }
        _removeSeries(e) {
          e._unstack(),
            e._posXDp && e._posXDp.dispose(),
            e._posYDp && e._posYDp.dispose(),
            e.set("baseAxis", void 0);
          const t = e.get("xAxis");
          t && (u.remove(t.series, e), t.markDirtyExtremes());
          const i = e.get("yAxis");
          i && (u.remove(i.series, e), i.markDirtyExtremes());
          const s = this.get("cursor");
          if (s) {
            const t = s.get("snapToSeries");
            t && u.remove(t, e);
          }
          super._removeSeries(e);
        }
        handleWheel(e) {
          const t = this.get("wheelX"),
            i = this.get("wheelY"),
            s = this.plotContainer,
            a = e.originalEvent;
          let o = !1;
          if (!p.isLocalEvent(a, this)) return;
          o = !0;
          const n = s.toLocal(e.point),
            r = this.get("wheelStep", 0.2),
            l = a.deltaY / 100,
            h = a.deltaX / 100,
            c = this.get("wheelZoomPositionX"),
            u = this.get("wheelZoomPositionY");
          ("zoomX" !== t && "zoomXY" !== t) ||
            0 == h ||
            this.xAxes.each((e) => {
              if (e.get("zoomX")) {
                let t = e.get("start"),
                  i = e.get("end"),
                  a = e.fixPosition(n.x / s.width());
                null != c && (a = c);
                let l = e.get("maxDeviation", 0),
                  u = Math.min(1 + l, Math.max(-l, t - r * (i - t) * h * a)),
                  d = Math.max(
                    -l,
                    Math.min(1 + l, i + r * (i - t) * h * (1 - a))
                  );
                u == t && d == i && (o = !1),
                  1 / (d - u) <
                  e.getPrivate("maxZoomFactor", 1 / 0) /
                    e.get("minZoomCount", 1)
                    ? this._handleWheelAnimation(e.zoom(u, d))
                    : (o = !1);
              }
            }),
            ("zoomX" !== i && "zoomXY" !== i) ||
              0 == l ||
              this.xAxes.each((e) => {
                if (e.get("zoomX")) {
                  let t = e.get("start"),
                    i = e.get("end"),
                    a = e.fixPosition(n.x / s.width());
                  null != c && (a = c);
                  let h = e.get("maxDeviation", 0),
                    u = Math.min(1 + h, Math.max(-h, t - r * (i - t) * l * a)),
                    d = Math.max(
                      -h,
                      Math.min(1 + h, i + r * (i - t) * l * (1 - a))
                    );
                  u == t && d == i && (o = !1),
                    1 / (d - u) <
                    e.getPrivate("maxZoomFactor", 1 / 0) /
                      e.get("minZoomCount", 1)
                      ? this._handleWheelAnimation(e.zoom(u, d))
                      : (o = !1);
                }
              }),
            ("zoomY" !== t && "zoomXY" !== t) ||
              0 == h ||
              this.yAxes.each((e) => {
                if (e.get("zoomY")) {
                  let t = e.get("start"),
                    i = e.get("end"),
                    a = e.fixPosition(n.y / s.height());
                  null != u && (a = u);
                  let l = e.get("maxDeviation", 0),
                    c = Math.min(1 + l, Math.max(-l, t - r * (i - t) * h * a)),
                    d = Math.max(
                      -l,
                      Math.min(1 + l, i + r * (i - t) * h * (1 - a))
                    );
                  c == t && d == i && (o = !1),
                    1 / (d - c) <
                    e.getPrivate("maxZoomFactor", 1 / 0) /
                      e.get("minZoomCount", 1)
                      ? this._handleWheelAnimation(e.zoom(c, d))
                      : (o = !1);
                }
              }),
            ("zoomY" !== i && "zoomXY" !== i) ||
              0 == l ||
              this.yAxes.each((e) => {
                if (e.get("zoomY")) {
                  let t = e.get("start"),
                    i = e.get("end"),
                    a = e.fixPosition(n.y / s.height());
                  null != u && (a = u);
                  let h = e.get("maxDeviation", 0),
                    c = Math.min(1 + h, Math.max(-h, t - r * (i - t) * l * a)),
                    d = Math.max(
                      -h,
                      Math.min(1 + h, i + r * (i - t) * l * (1 - a))
                    );
                  c == t && d == i && (o = !1),
                    1 / (d - c) <
                    e.getPrivate("maxZoomFactor", 1 / 0) /
                      e.get("minZoomCount", 1)
                      ? this._handleWheelAnimation(e.zoom(c, d))
                      : (o = !1);
                }
              }),
            ("panX" !== t && "panXY" !== t) ||
              0 == h ||
              this.xAxes.each((e) => {
                if (e.get("panX")) {
                  let t = e.get("start"),
                    i = e.get("end"),
                    s = this._getWheelSign(e) * r * (i - t) * h,
                    a = t + s,
                    n = i + s,
                    l = this._fixWheel(a, n);
                  (a = l[0]),
                    (n = l[1]),
                    a == t && n == i && (o = !1),
                    this._handleWheelAnimation(e.zoom(a, n));
                }
              }),
            ("panX" !== i && "panXY" !== i) ||
              0 == l ||
              this.xAxes.each((e) => {
                if (e.get("panX")) {
                  let t = e.get("start"),
                    i = e.get("end"),
                    s = this._getWheelSign(e) * r * (i - t) * l,
                    a = t + s,
                    n = i + s,
                    h = this._fixWheel(a, n);
                  (a = h[0]),
                    (n = h[1]),
                    a == t && n == i && (o = !1),
                    this._handleWheelAnimation(e.zoom(a, n));
                }
              }),
            ("panY" !== t && "panXY" !== t) ||
              0 == h ||
              this.yAxes.each((e) => {
                if (e.get("panY")) {
                  let t = e.get("start"),
                    i = e.get("end"),
                    s = this._getWheelSign(e) * r * (i - t) * h,
                    a = t + s,
                    n = i + s,
                    l = this._fixWheel(a, n);
                  (a = l[0]),
                    (n = l[1]),
                    a == t && n == i && (o = !1),
                    this._handleWheelAnimation(e.zoom(a, n));
                }
              }),
            ("panY" !== i && "panXY" !== i) ||
              0 == l ||
              this.yAxes.each((e) => {
                if (e.get("panY")) {
                  let t = e.get("start"),
                    i = e.get("end"),
                    s = this._getWheelSign(e) * r * (i - t) * l,
                    a = t - s,
                    n = i - s,
                    h = this._fixWheel(a, n);
                  (a = h[0]),
                    (n = h[1]),
                    a == t && n == i && (o = !1),
                    this._handleWheelAnimation(e.zoom(a, n));
                }
              }),
            o && a.preventDefault();
        }
        _handleSetWheel() {
          const e = this.get("wheelX"),
            t = this.get("wheelY"),
            i = this.plotContainer;
          "none" !== e || "none" !== t
            ? ((this._wheelDp = i.events.on("wheel", (i) => {
                const s = i.originalEvent;
                (("none" !== e && 0 != Math.abs(s.deltaX)) ||
                  ("none" !== t && 0 != Math.abs(s.deltaY))) &&
                  this.handleWheel(i);
              })),
              this._disposers.push(this._wheelDp))
            : this._wheelDp && this._wheelDp.dispose();
        }
        _getWheelSign(e) {
          let t = 1;
          return e.get("renderer").get("inversed") && (t = -1), t;
        }
        _fixWheel(e, t) {
          const i = t - e;
          return e < 0 && (t = (e = 0) + i), t > 1 && (e = (t = 1) - i), [e, t];
        }
        _handlePlotDown(e) {
          const t = e.originalEvent;
          if (2 == t.button) return;
          const i = this.plotContainer;
          let s = i.toLocal(e.point);
          if (
            (this.get("pinchZoomX") || this.get("pinchZoomY")) &&
            t.pointerId &&
            m.keys(i._downPoints).length > 0
          ) {
            const e = this.xAxes.getIndex(0),
              t = this.yAxes.getIndex(0);
            e &&
              ((this._downStartX = e.get("start", 0)),
              (this._downEndX = e.get("end", 1))),
              t &&
                ((this._downStartY = t.get("start", 0)),
                (this._downEndY = t.get("end", 1)));
          }
          if (
            (this.get("panX") || this.get("panY")) &&
            s.x >= 0 &&
            s.y >= 0 &&
            s.x <= i.width() &&
            s.y <= this.height()
          ) {
            this._downPoint = { x: t.clientX, y: t.clientY };
            const i = this.get("panX"),
              s = this.get("panY");
            i &&
              this.xAxes.each((e) => {
                (e._panStart = e.get("start")), (e._panEnd = e.get("end"));
              }),
              s &&
                this.yAxes.each((e) => {
                  (e._panStart = e.get("start")), (e._panEnd = e.get("end"));
                });
            const a = "panstarted";
            this.events.isEnabled(a) &&
              this.events.dispatch(a, {
                type: a,
                target: this,
                originalEvent: e.originalEvent,
              });
          }
        }
        _handleWheelAnimation(e) {
          e
            ? e.events.on("stopped", () => {
                this._dispatchWheelAnimation();
              })
            : this._dispatchWheelAnimation();
        }
        _dispatchWheelAnimation() {
          const e = "wheelended";
          this.events.isEnabled(e) &&
            this.events.dispatch(e, { type: e, target: this });
        }
        _handlePlotUp(e) {
          const t = this._downPoint;
          if (t && (this.get("panX") || this.get("panY"))) {
            if (
              e.originalEvent.clientX == t.x &&
              e.originalEvent.clientY == t.y
            ) {
              const t = "pancancelled";
              this.events.isEnabled(t) &&
                this.events.dispatch(t, {
                  type: t,
                  target: this,
                  originalEvent: e.originalEvent,
                });
            }
            const i = "panended";
            this.events.isEnabled(i) &&
              this.events.dispatch(i, {
                type: i,
                target: this,
                originalEvent: e.originalEvent,
              });
          }
          (this._downPoint = void 0),
            this.xAxes.each((e) => {
              e._isPanning = !1;
            }),
            this.yAxes.each((e) => {
              e._isPanning = !1;
            });
        }
        _handlePlotMove(e) {
          const t = this.plotContainer;
          if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
            const i = e.originalEvent.pointerId;
            if (
              i &&
              ((this._movePoints[i] = e.point),
              m.keys(t._downPoints).length > 1)
            )
              return void this._handlePinch();
          }
          let i = this._downPoint;
          if (i) {
            i = t.toLocal(this._root.documentPointToRoot(i));
            let s = t.toLocal(e.point);
            const a = this.get("panX"),
              o = this.get("panY");
            if (a) {
              let e = this.get("scrollbarX");
              e && e.events.disableType("rangechanged"),
                this.xAxes.each((e) => {
                  if (e.get("panX")) {
                    e._isPanning = !0;
                    let a = e._panStart,
                      o = e._panEnd,
                      n = ((o - a) * (i.x - s.x)) / t.width();
                    e.get("renderer").get("inversed") && (n *= -1);
                    let r = a + n,
                      l = o + n;
                    l - r < 1 + 2 * e.get("maxDeviation", 1) &&
                      (e.set("start", r), e.set("end", l));
                  }
                }),
                e && e.events.enableType("rangechanged");
            }
            if (o) {
              let e = this.get("scrollbarY");
              e && e.events.disableType("rangechanged"),
                this.yAxes.each((e) => {
                  if (e.get("panY")) {
                    e._isPanning = !0;
                    let a = e._panStart,
                      o = e._panEnd,
                      n = ((o - a) * (i.y - s.y)) / t.height();
                    e.get("renderer").get("inversed") && (n *= -1);
                    let r = a - n,
                      l = o - n;
                    l - r < 1 + 2 * e.get("maxDeviation", 1) &&
                      (e.set("start", r), e.set("end", l));
                  }
                }),
                e && e.events.enableType("rangechanged");
            }
          }
        }
        _handlePinch() {
          const e = this.plotContainer;
          let t = 0,
            i = [],
            s = [];
          if (
            (m.each(e._downPoints, (e, a) => {
              i[t] = a;
              let o = this._movePoints[e];
              o && (s[t] = o), t++;
            }),
            i.length > 1 && s.length > 1)
          ) {
            const t = e.width(),
              a = e.height();
            let o = i[0],
              n = i[1],
              r = s[0],
              l = s[1];
            if (o && n && r && l) {
              if (
                ((r = e.toLocal(r)),
                (l = e.toLocal(l)),
                (o = e.toLocal(o)),
                (n = e.toLocal(n)),
                this.get("pinchZoomX"))
              ) {
                const e = this._downStartX,
                  i = this._downEndX;
                if (null != e && null != i) {
                  o.x > n.x && (([o, n] = [n, o]), ([r, l] = [l, r]));
                  let s = e + (o.x / t) * (i - e),
                    a = e + (n.x / t) * (i - e),
                    h = e + (r.x / t) * (i - e),
                    c = e + (l.x / t) * (i - e),
                    u = Math.max(0.001, a - s) / Math.max(0.001, c - h),
                    d = e * u + s - h * u,
                    g = i * u + a - c * u;
                  this.xAxes.each((e) => {
                    let t = e.fixPosition(d),
                      i = e.fixPosition(g);
                    e.zoom(t, i, 0);
                  });
                }
              }
              if (this.get("pinchZoomY")) {
                const e = this._downStartY,
                  t = this._downEndY;
                if (null != e && null != t) {
                  o.y < n.y && (([o, n] = [n, o]), ([r, l] = [l, r]));
                  let i = e + (1 - o.y / a) * (t - e),
                    s = e + (1 - n.y / a) * (t - e),
                    h = e + (1 - r.y / a) * (t - e),
                    c = e + (1 - l.y / a) * (t - e),
                    u = Math.max(0.001, s - i) / Math.max(0.001, c - h),
                    d = e * u + i - h * u,
                    g = t * u + s - c * u;
                  this.yAxes.each((e) => {
                    let t = e.fixPosition(d),
                      i = e.fixPosition(g);
                    e.zoom(t, i, 0);
                  });
                }
              }
            }
          }
        }
        _handleCursorPosition() {
          const e = this.get("cursor");
          if (e) {
            const t = e.getPrivate("point");
            let i = e.get("snapToSeries");
            if ((e._downPoint && (i = void 0), i && t)) {
              const s = e.get("snapToSeriesBy"),
                a = [];
              u.each(i, (e) => {
                if (!e.isHidden() && !e.isHiding())
                  if ("x!" != s && "y!" != s) {
                    const t = e.startIndex(),
                      i = e.endIndex();
                    for (let s = t; s < i; s++) {
                      const t = e.dataItems[s];
                      t && !t.isHidden() && a.push(t);
                    }
                  } else {
                    const t = e.get("tooltipDataItem");
                    t && a.push(t);
                  }
              });
              let o,
                n = 1 / 0;
              if (
                (u.each(a, (e) => {
                  const i = e.get("point");
                  if (i) {
                    let a = 0;
                    (a =
                      "x" == s || "x!" == s
                        ? Math.abs(t.x - i.x)
                        : "y" == s || "y!" == s
                        ? Math.abs(t.y - i.y)
                        : Math.hypot(t.x - i.x, t.y - i.y)),
                      a < n && ((n = a), (o = e));
                  }
                }),
                u.each(i, (e) => {
                  const t = e.get("tooltip");
                  t && t._setDataItem(void 0);
                }),
                o)
              ) {
                let t = o.component;
                t.showDataItemTooltip(o), t.setRaw("tooltipDataItem", o);
                const i = o.get("point");
                i &&
                  e.handleMove(
                    t.toGlobal({ x: i.x - t.x(), y: i.y - t.y() }),
                    !0
                  );
              }
            }
          }
        }
        _updateCursor() {
          let e = this.get("cursor");
          e && e.updateCursor();
        }
        _addCursor(e) {
          this.plotContainer.children.push(e);
        }
        _prepareChildren() {
          if (
            (super._prepareChildren(),
            this.series.each((e) => {
              this._colorize(e);
            }),
            (this.isDirty("wheelX") || this.isDirty("wheelY")) &&
              this._handleSetWheel(),
            this.isDirty("cursor"))
          ) {
            const e = this._prevSettings.cursor,
              t = this.get("cursor");
            t !== e &&
              (this._disposeProperty("cursor"),
              e && e.dispose(),
              t &&
                (t._setChart(this),
                this._addCursor(t),
                this._pushPropertyDisposer(
                  "cursor",
                  t.events.on("selectended", () => {
                    this._handleCursorSelectEnd();
                  })
                )),
              (this._prevSettings.cursor = t));
          }
          if (this.isDirty("scrollbarX")) {
            const e = this._prevSettings.scrollbarX,
              t = this.get("scrollbarX");
            t !== e &&
              (this._disposeProperty("scrollbarX"),
              e && e.dispose(),
              t &&
                (t.parent || this.topAxesContainer.children.push(t),
                this._pushPropertyDisposer(
                  "scrollbarX",
                  t.events.on("rangechanged", (e) => {
                    this._handleScrollbar(this.xAxes, e.start, e.end, e.grip);
                  })
                ),
                this._pushPropertyDisposer(
                  "scrollbarX",
                  t.events.on("released", () => {
                    this.xAxes.each((e) => {
                      e.get("zoomable") && this._handleAxisSelection(e);
                    });
                  })
                ),
                t.setPrivate("positionTextFunction", (e) => {
                  const t = this.xAxes.getIndex(0);
                  return (t && t.getTooltipText(e, !1)) || "";
                })),
              (this._prevSettings.scrollbarX = t));
          }
          if (this.isDirty("scrollbarY")) {
            const e = this._prevSettings.scrollbarY,
              t = this.get("scrollbarY");
            t !== e &&
              (this._disposeProperty("scrollbarY"),
              e && e.dispose(),
              t &&
                (t.parent || this.rightAxesContainer.children.push(t),
                this._pushPropertyDisposer(
                  "scrollbarY",
                  t.events.on("rangechanged", (e) => {
                    this._handleScrollbar(this.yAxes, e.start, e.end, e.grip);
                  })
                ),
                this._pushPropertyDisposer(
                  "scrollbarY",
                  t.events.on("released", () => {
                    this.yAxes.each((e) => {
                      e.get("zoomable") && this._handleAxisSelection(e);
                    });
                  })
                ),
                t.setPrivate("positionTextFunction", (e) => {
                  const t = this.yAxes.getIndex(0);
                  return (t && t.getTooltipText(e, !1)) || "";
                })),
              (this._prevSettings.scrollbarY = t));
          }
          this._handleZoomOut();
        }
        _processSeries(e) {
          super._processSeries(e);
          const t = e.get("xAxis"),
            i = e.get("yAxis");
          u.move(t.series, e),
            u.move(i.series, e),
            (e._posXDp = e.addDisposer(
              t.events.on("positionchanged", () => {
                e._fixPosition();
              })
            )),
            (e._posXDp = e.addDisposer(
              i.events.on("positionchanged", () => {
                e._fixPosition();
              })
            )),
            e.get("baseAxis") ||
              (i.isType("CategoryAxis") || i.isType("DateAxis")
                ? e.set("baseAxis", i)
                : e.set("baseAxis", t)),
            e.get("stacked") &&
              (e._markDirtyKey("stacked"),
              u.each(e.dataItems, (e) => {
                e.set("stackToItemY", void 0), e.set("stackToItemX", void 0);
              })),
            e._markDirtyAxes(),
            i.markDirtyExtremes(),
            t.markDirtyExtremes(),
            (t._seriesAdded = !0),
            (i._seriesAdded = !0),
            this._colorize(e);
        }
        _colorize(e) {
          const t = this.get("colors");
          if (t && null == e.get("fill")) {
            const i = t.next();
            e._setSoft("stroke", i), e._setSoft("fill", i);
          }
          const i = this.get("patterns");
          if (i && null == e.get("fillPattern")) {
            const t = i.next();
            e._setSoft("fillPattern", t);
          }
        }
        _handleCursorSelectEnd() {
          const e = this.get("cursor"),
            t = e.get("behavior"),
            i = e.getPrivate("downPositionX", 0),
            s = e.getPrivate("downPositionY", 0),
            a = Math.min(1, Math.max(0, e.getPrivate("positionX", 0.5))),
            o = Math.min(1, Math.max(0, e.getPrivate("positionY", 0.5)));
          this.xAxes.each((e) => {
            if ("zoomX" === t || "zoomXY" === t) {
              let t = e.toAxisPosition(i),
                s = e.toAxisPosition(a);
              e.zoom(t, s);
            }
            e.setPrivate("updateScrollbar", !0);
          }),
            this.yAxes.each((e) => {
              if ("zoomY" === t || "zoomXY" === t) {
                let t = e.toAxisPosition(s),
                  i = e.toAxisPosition(o);
                e.zoom(t, i);
              }
              e.setPrivate("updateScrollbar", !0);
            });
        }
        _handleScrollbar(e, t, i, s) {
          e.each((e) => {
            let a = e.fixPosition(t),
              o = e.fixPosition(i),
              n = e.zoom(a, o, void 0, s);
            const r = "updateScrollbar";
            e.setPrivateRaw(r, !1),
              n
                ? n.events.on("stopped", () => {
                    e.setPrivateRaw(r, !0);
                  })
                : e.setPrivateRaw(r, !0);
          });
        }
        _processAxis(e, t) {
          return e.events.onAll((e) => {
            if ("clear" === e.type)
              u.each(e.oldValues, (e) => {
                this._removeAxis(e);
              });
            else if ("push" === e.type)
              t.children.push(e.newValue), e.newValue.processChart(this);
            else if ("setIndex" === e.type)
              t.children.setIndex(e.index, e.newValue),
                e.newValue.processChart(this);
            else if ("insertIndex" === e.type)
              t.children.insertIndex(e.index, e.newValue),
                e.newValue.processChart(this);
            else if ("removeIndex" === e.type) this._removeAxis(e.oldValue);
            else {
              if ("moveIndex" !== e.type)
                throw new Error("Unknown IListEvent type");
              t.children.moveValue(e.value, e.newIndex),
                e.value.processChart(this);
            }
          });
        }
        _removeAxis(e) {
          if (!e.isDisposed()) {
            const t = e.parent;
            t && t.children.removeValue(e);
            const i = e.gridContainer,
              s = i.parent;
            s && s.children.removeValue(i);
            const a = e.topGridContainer,
              o = a.parent;
            o && o.children.removeValue(a);
          }
        }
        _updateChartLayout() {
          const e = this.leftAxesContainer.width(),
            t = this.rightAxesContainer.width(),
            i = this.bottomAxesContainer;
          i.set("paddingLeft", e), i.set("paddingRight", t);
          const s = this.topAxesContainer;
          s.set("paddingLeft", e), s.set("paddingRight", t);
        }
        processAxis(e) {
          this.get("cursor") &&
            (this.addDisposer(
              e.on("start", () => {
                this._updateCursor();
              })
            ),
            this.addDisposer(
              e.on("end", () => {
                this._updateCursor();
              })
            ));
        }
        _handleAxisSelection(e, t) {
          let i = e.fixPosition(e.get("start", 0)),
            s = e.fixPosition(e.get("end", 1));
          if ((i > s && ([i, s] = [s, i]), -1 != this.xAxes.indexOf(e))) {
            if (t || e.getPrivate("updateScrollbar")) {
              let e = this.get("scrollbarX");
              !e ||
                (e.getPrivate("isBusy") && !t) ||
                (e.setRaw("start", i), e.setRaw("end", s), e.updateGrips());
            }
          } else if (
            -1 != this.yAxes.indexOf(e) &&
            (t || e.getPrivate("updateScrollbar"))
          ) {
            let e = this.get("scrollbarY");
            !e ||
              (e.getPrivate("isBusy") && !t) ||
              (e.setRaw("start", i), e.setRaw("end", s), e.updateGrips());
          }
          this._handleZoomOut();
        }
        _handleZoomOut() {
          let e = this.zoomOutButton;
          if (e && e.parent) {
            let t = !1;
            this.xAxes.each((e) => {
              (0 == b.round(e.get("start", 0), 6) &&
                1 == b.round(e.get("end", 1), 6)) ||
                (t = !0);
            }),
              this.yAxes.each((e) => {
                (0 == b.round(e.get("start", 0), 6) &&
                  1 == b.round(e.get("end", 1), 6)) ||
                  (t = !0);
              }),
              t ? e.isHidden() && e.show() : e.hide();
          }
        }
        inPlot(e) {
          const t = this.plotContainer,
            i = this.getPrivate("otherCharts", this._otherCharts),
            s = t.toGlobal(e);
          if (
            e.x >= -0.5 &&
            e.y >= -0.5 &&
            e.x <= t.width() + 0.5 &&
            e.y <= t.height() + 0.5
          )
            return !0;
          if (i)
            for (let e = i.length - 1; e >= 0; e--) {
              const t = i[e];
              if (t != this) {
                const e = t.plotContainer,
                  i = this._root.rootPointToDocument(s),
                  a = t._root.documentPointToRoot(i),
                  o = e.toLocal(a);
                if (
                  o.x >= -0.1 &&
                  o.y >= -0.1 &&
                  o.x <= e.width() + 0.1 &&
                  o.y <= e.height() + 0.1
                )
                  return !0;
              }
            }
          return !1;
        }
        arrangeTooltips() {
          const e = this.plotContainer,
            t = e.width(),
            i = e.height();
          let s = this.height();
          const a = this._root.tooltipContainer.get("layerMargin");
          a && a.bottom > s && (s = a.bottom);
          let o = e._display.toGlobal({ x: 0, y: 0 }),
            n = e._display.toGlobal({ x: t, y: i });
          const r = [];
          let h,
            c,
            m = 0,
            p = 1 / 0,
            b = this._movePoint,
            _ = this.get("maxTooltipDistance"),
            x = this.get("maxTooltipDistanceBy", "xy");
          d.isNumber(_) &&
            this.series.each((e) => {
              if (!e.isHidden()) {
                const t = e.get("tooltip");
                if (t) {
                  let i = t.get("pointTo");
                  if (i) {
                    let t = Math.hypot(b.x - i.x, b.y - i.y);
                    "x" == x
                      ? (t = Math.abs(b.x - i.x))
                      : "y" == x && (t = Math.abs(b.y - i.y)),
                      t < p && ((p = t), (h = e), (c = i));
                  }
                }
              }
            });
          const v = [];
          if (
            (this.series.each((e) => {
              const t = e.get("tooltip");
              if (t && !t.get("forceHidden")) {
                let i = !1,
                  s = t.get("pointTo");
                if (s) {
                  if (_ >= 0) {
                    let s = t.get("pointTo");
                    if (s && c && e != h) {
                      let e = Math.hypot(c.x - s.x, c.y - s.y);
                      "x" == x
                        ? (e = Math.abs(c.x - s.x))
                        : "y" == x && (e = Math.abs(c.y - s.y)),
                        e > _ && (i = !0);
                    }
                  } else -1 == _ && e != h && (i = !0);
                  this.inPlot(this._tooltipToLocal(s)) && t.dataItem
                    ? i || (m += s.y)
                    : (i = !0),
                    i || e.isHidden() || e.isHiding()
                      ? t.hide(0)
                      : (t.show(), r.push(t), v.push(e));
                }
              }
            }),
            this.setPrivate("tooltipSeries", v),
            this.get("arrangeTooltips"))
          ) {
            const e = this._root.tooltipContainer,
              t = r.length;
            if (m / t > i / 2 + o.y) {
              r.sort((e, t) => g.HO(t.get("pointTo").y, e.get("pointTo").y));
              let t = n.y;
              if (
                (u.each(r, (i) => {
                  let s = i.height(),
                    a = i.get("centerY");
                  a instanceof l.gG && (s *= a.value),
                    (s += i.get("marginBottom", 0)),
                    i.set("bounds", {
                      left: o.x,
                      top: o.y,
                      right: n.x,
                      bottom: t,
                    }),
                    i.setPrivate("customData", {
                      left: o.x,
                      top: o.y,
                      right: n.x,
                      bottom: t,
                    }),
                    (t = Math.min(t - s, i._fy - s)),
                    i.parent == e && e.children.moveValue(i, 0);
                }),
                t < 0)
              ) {
                r.reverse();
                let e = t;
                u.each(r, (i) => {
                  let s = i.get("bounds");
                  if (s) {
                    let a = s.top - t,
                      o = s.bottom - t;
                    a < e && ((a = e), (o = a + i.height())),
                      i.set("bounds", {
                        left: s.left,
                        top: a,
                        right: s.right,
                        bottom: o,
                      }),
                      (e = s.bottom - t + i.get("marginBottom", 0));
                  }
                });
              }
            } else {
              r.reverse(),
                r.sort((e, t) => g.HO(e.get("pointTo").y, t.get("pointTo").y));
              let t = 0;
              if (
                (u.each(r, (i) => {
                  let a = i.height(),
                    r = i.get("centerY");
                  r instanceof l.gG && (a *= r.value),
                    (a += i.get("marginBottom", 0)),
                    i.set("bounds", {
                      left: o.x,
                      top: t,
                      right: n.x,
                      bottom: Math.max(o.y + s, t + a),
                    }),
                    i.parent == e && e.children.moveValue(i, 0),
                    (t = Math.max(t + a, i._fy + a));
                }),
                t > s)
              ) {
                r.reverse();
                let e = s;
                u.each(r, (i) => {
                  let a = i.get("bounds");
                  if (a) {
                    let o = a.top - (s - t),
                      n = a.bottom - (s - t);
                    n > e && ((n = e), (o = n - i.height())),
                      i.set("bounds", {
                        left: a.left,
                        top: o,
                        right: a.right,
                        bottom: n,
                      }),
                      (e = n - i.height() - i.get("marginBottom", 0));
                  }
                });
              }
            }
          }
        }
        _tooltipToLocal(e) {
          return this.plotContainer.toLocal(e);
        }
        zoomOut() {
          this.xAxes.each((e) => {
            e.setPrivate("updateScrollbar", !0), e.zoom(0, 1);
          }),
            this.yAxes.each((e) => {
              e.setPrivate("updateScrollbar", !0), e.zoom(0, 1);
            });
        }
        _dispose() {
          super._dispose();
          const e = this.get("cursor");
          e && e.dispose();
        }
      }
      Object.defineProperty(_, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "XYChart",
      }),
        Object.defineProperty(_, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n.j.classNames.concat([_.className]),
        });
    },
    55: function (e, t, i) {
      i.d(t, {
        l: function () {
          return g;
        },
      });
      var s = i(3409),
        a = i(6245),
        o = i(1112),
        n = i(2754),
        r = i(3783),
        l = i(1926),
        h = i(5040),
        c = i(751),
        u = i(256),
        d = i(5071);
      class g extends s.Q {
        setupDefaultRules() {
          super.setupDefaultRules();
          const e = this._root.interfaceColors,
            t = this._root.language,
            i = this.rule.bind(this);
          i("XYChart").setAll({
            colors: n.U.new(this._root, {}),
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 16,
            paddingBottom: 16,
            panX: !1,
            panY: !1,
            wheelStep: 0.25,
            arrangeTooltips: !0,
            pinchZoomX: !1,
            pinchZoomY: !1,
          }),
            i("XYSeries").setAll({ legendLabelText: "{name}" }),
            i("Rectangle", ["plotbackground", "xy", "background"]).setAll({
              fill: o.Il.fromHex(0),
              fillOpacity: 0,
            }),
            i("XYChart", ["scrollbar", "chart"]).setAll({
              paddingBottom: 0,
              paddingLeft: 0,
              paddingTop: 0,
              paddingRight: 0,
              colors: n.U.new(this._root, { saturation: 0 }),
            });
          {
            const t = i("Graphics", ["scrollbar", "overlay"]);
            t.setAll({ fillOpacity: 0.5 }),
              (0, r.v)(t, "fill", e, "background");
          }
          i("RoundedRectangle", ["xy", "scrollbar", "thumb"]).setAll({
            cornerRadiusTR: 0,
            cornerRadiusTL: 0,
            cornerRadiusBR: 0,
            cornerRadiusBL: 0,
            fillOpacity: 0,
            focusable: !0,
          }),
            i("RoundedRectangle", ["xy", "scrollbar", "thumb"]).states.create(
              "hover",
              { fillOpacity: 0.4 }
            ),
            i("RoundedRectangle", [
              "xy",
              "scrollbar",
              "chart",
              "background",
            ]).setAll({
              cornerRadiusTL: 0,
              cornerRadiusBL: 0,
              cornerRadiusTR: 0,
              cornerRadiusBR: 0,
            }),
            i("RoundedRectangle", [
              "xy",
              "scrollbar",
              "chart",
              "background",
              "resize",
              "button",
            ]).setAll({
              cornerRadiusBL: 40,
              cornerRadiusBR: 40,
              cornerRadiusTL: 40,
              cornerRadiusTR: 40,
            }),
            i("AxisRendererX", ["xy", "chart", "scrollbar"]).setAll({
              strokeOpacity: 0,
              inside: !0,
            }),
            i("AxisRendererY", ["xy", "chart", "scrollbar"]).setAll({
              strokeOpacity: 0,
              inside: !0,
              minGridDistance: 5,
            }),
            i("AxisLabel", ["xy", "scrollbar", "x"]).setAll({
              opacity: 0.5,
              centerY: a.AQ,
              minPosition: 0.01,
              maxPosition: 0.99,
              fontSize: "0.8em",
            }),
            i("AxisLabel", ["category"]).setAll({
              text: "{category}",
              populateText: !0,
            }),
            i("AxisLabel", ["x"]).setAll({ centerY: 0 }),
            i("AxisLabel", ["x", "inside"]).setAll({ centerY: a.AQ }),
            i("AxisLabel", ["x", "inside", "opposite"]).setAll({ centerY: 0 }),
            i("AxisLabel", ["x", "opposite"]).setAll({ centerY: a.AQ }),
            i("AxisLabel", ["y"]).setAll({ centerX: a.AQ }),
            i("AxisLabel", ["y", "inside"]).setAll({ centerX: 0 }),
            i("AxisLabel", ["y", "inside", "opposite"]).setAll({
              centerX: a.AQ,
            }),
            i("AxisLabel", ["y", "opposite"]).setAll({ centerX: 0 }),
            i("AxisLabel", ["minor"]).setAll({ fontSize: "0.6em" }),
            i("AxisLabel", ["xy", "scrollbar", "y"]).setAll({ visible: !1 }),
            i("Grid", ["xy", "scrollbar", "y"]).setAll({ visible: !1 }),
            i("Grid", ["xy", "scrollbar", "x"]).setAll({ opacity: 0.5 }),
            i("XYCursor").setAll({
              behavior: "none",
              layer: 30,
              exportable: !1,
              snapToSeriesBy: "xy",
              moveThreshold: 1,
            });
          {
            const s = i("Grid", ["cursor", "x"]);
            s.setAll({
              forceInactive: !0,
              strokeOpacity: 0.8,
              strokeDasharray: [2, 2],
              role: "slider",
              ariaLabel: t.translate(
                "Use left and right arrows to move selection"
              ),
            }),
              (0, r.v)(s, "stroke", e, "alternativeBackground");
          }
          {
            const s = i("Grid", ["cursor", "y"]);
            s.setAll({
              forceInactive: !0,
              strokeOpacity: 0.8,
              strokeDasharray: [2, 2],
              role: "slider",
              ariaLabel: t.translate(
                "Use up and down arrows to move selection"
              ),
            }),
              (0, r.v)(s, "stroke", e, "alternativeBackground");
          }
          {
            const t = i("Graphics", ["cursor", "selection"]);
            t.setAll({ fillOpacity: 0.15 }),
              (0, r.v)(t, "fill", e, "alternativeBackground");
          }
          i("Axis").setAll({
            start: 0,
            end: 1,
            minZoomCount: 1,
            maxZoomCount: 1 / 0,
            maxZoomFactor: 1e3,
            maxDeviation: 0.1,
            snapTooltip: !0,
            tooltipLocation: 0.5,
            panX: !0,
            panY: !0,
            zoomX: !0,
            zoomY: !0,
            fixAxisSize: !0,
          }),
            i("AxisLabel").setAll({
              location: 0.5,
              multiLocation: 0,
              centerX: a.CI,
              centerY: a.CI,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 5,
              paddingRight: 5,
            }),
            i("Container", ["axis", "header"]).setAll({ layer: 30 }),
            i("Rectangle", ["axis", "header", "background"]).setAll({
              crisp: !0,
            });
          {
            const t = i("AxisRenderer");
            t.setAll({ crisp: !0, strokeOpacity: 0 }),
              (0, r.v)(t, "stroke", e, "grid");
          }
          i("AxisRendererX").setAll({
            minGridDistance: 120,
            opposite: !1,
            inversed: !1,
            cellStartLocation: 0,
            cellEndLocation: 1,
            width: a.AQ,
          }),
            i("AxisRendererY").setAll({
              minGridDistance: 40,
              opposite: !1,
              inversed: !1,
              cellStartLocation: 0,
              cellEndLocation: 1,
              height: a.AQ,
            });
          {
            const t = i("Rectangle", ["axis", "thumb"]);
            t.setAll({ fillOpacity: 0 }),
              (0, r.v)(t, "fill", e, "alternativeBackground"),
              t.states.create("hover", { fillOpacity: 0.1 });
          }
          i("Rectangle", ["axis", "thumb", "x"]).setAll({
            cursorOverStyle: "ew-resize",
          }),
            i("Rectangle", ["axis", "thumb", "y"]).setAll({
              cursorOverStyle: "ns-resize",
            });
          {
            const t = i("Grid");
            t.setAll({ location: 0, strokeOpacity: 0.15, crisp: !0 }),
              (0, r.v)(t, "stroke", e, "grid");
          }
          {
            const t = i("Grid", ["minor"]);
            t.setAll({ location: 0, strokeOpacity: 0.07, crisp: !0 }),
              (0, r.v)(t, "stroke", e, "grid");
          }
          i("Grid", ["base"]).setAll({ strokeOpacity: 0.3 });
          {
            const t = i("Graphics", ["axis", "fill"]);
            t.setAll({
              visible: !1,
              isMeasured: !1,
              position: "absolute",
              fillOpacity: 0.05,
            }),
              (0, r.v)(t, "fill", e, "alternativeBackground");
          }
          i("Graphics", ["axis", "fill", "range"]).setAll({ isMeasured: !0 }),
            i("Graphics", ["series", "fill", "range"]).setAll({
              visible: !1,
              isMeasured: !0,
            }),
            i("Grid", ["series", "range"]).setAll({ visible: !1 }),
            i("AxisTick", ["series", "range"]).setAll({ visible: !1 }),
            i("AxisLabel", ["series", "range"]).setAll({ visible: !1 });
          {
            const t = i("AxisTick");
            t.setAll({
              location: 0.5,
              multiLocation: 0,
              strokeOpacity: 1,
              isMeasured: !1,
              position: "absolute",
              visible: !1,
            }),
              (0, r.v)(t, "stroke", e, "grid");
          }
          i("CategoryAxis").setAll({
            startLocation: 0,
            endLocation: 1,
            fillRule: (e, t) => {
              const i = e.get("axisFill");
              i &&
                (h.isNumber(t) && t % 2 != 0
                  ? i.setPrivate("visible", !1)
                  : i.setPrivate("visible", !0));
            },
          });
          const s = [
              { timeUnit: "millisecond", count: 1 },
              { timeUnit: "millisecond", count: 5 },
              { timeUnit: "millisecond", count: 10 },
              { timeUnit: "millisecond", count: 50 },
              { timeUnit: "millisecond", count: 100 },
              { timeUnit: "millisecond", count: 500 },
              { timeUnit: "second", count: 1 },
              { timeUnit: "second", count: 5 },
              { timeUnit: "second", count: 10 },
              { timeUnit: "second", count: 30 },
              { timeUnit: "minute", count: 1 },
              { timeUnit: "minute", count: 5 },
              { timeUnit: "minute", count: 10 },
              { timeUnit: "minute", count: 15 },
              { timeUnit: "minute", count: 30 },
              { timeUnit: "hour", count: 1 },
              { timeUnit: "hour", count: 3 },
              { timeUnit: "hour", count: 6 },
              { timeUnit: "hour", count: 12 },
              { timeUnit: "day", count: 1 },
              { timeUnit: "day", count: 2 },
              { timeUnit: "day", count: 3 },
              { timeUnit: "day", count: 4 },
              { timeUnit: "day", count: 5 },
              { timeUnit: "week", count: 1 },
              { timeUnit: "month", count: 1 },
              { timeUnit: "month", count: 2 },
              { timeUnit: "month", count: 3 },
              { timeUnit: "month", count: 6 },
              { timeUnit: "year", count: 1 },
              { timeUnit: "year", count: 2 },
              { timeUnit: "year", count: 5 },
              { timeUnit: "year", count: 10 },
              { timeUnit: "year", count: 50 },
              { timeUnit: "year", count: 100 },
              { timeUnit: "year", count: 200 },
              { timeUnit: "year", count: 500 },
              { timeUnit: "year", count: 1e3 },
              { timeUnit: "year", count: 2e3 },
              { timeUnit: "year", count: 5e3 },
              { timeUnit: "year", count: 1e4 },
              { timeUnit: "year", count: 1e5 },
            ],
            g = {
              millisecond: t.translate("_date_millisecond"),
              second: t.translate("_date_second"),
              minute: t.translate("_date_minute"),
              hour: t.translate("_date_hour"),
              day: t.translate("_date_day"),
              week: t.translate("_date_day"),
              month: t.translate("_date_month"),
              year: t.translate("_date_year"),
            },
            m = {
              millisecond: t.translate("_date_millisecond"),
              second: t.translate("_date_second"),
              minute: t.translate("_date_minute"),
              hour: t.translate("_date_day"),
              day: t.translate("_date_day"),
              week: t.translate("_date_day"),
              month:
                t.translate("_date_month") + " " + t.translate("_date_year"),
              year: t.translate("_date_year"),
            },
            p = {
              millisecond: t.translate("_date_millisecond_full"),
              second: t.translate("_date_second_full"),
              minute: t.translate("_date_minute_full"),
              hour: t.translate("_date_hour_full"),
              day: t.translate("_date_day_full"),
              week: t.translate("_date_week_full"),
              month: t.translate("_date_month_full"),
              year: t.translate("_date_year"),
            };
          i("CategoryDateAxis").setAll({
            markUnitChange: !0,
            gridIntervals: d.copy(s),
            dateFormats: u.copy(g),
            periodChangeDateFormats: u.copy(m),
          }),
            i("DateAxis").setAll({
              maxZoomFactor: null,
              strictMinMax: !0,
              startLocation: 0,
              endLocation: 1,
              markUnitChange: !0,
              groupData: !1,
              groupCount: 500,
              gridIntervals: d.copy(s),
              dateFormats: u.copy(g),
              periodChangeDateFormats: u.copy(m),
              tooltipDateFormats: p,
              groupIntervals: [
                { timeUnit: "millisecond", count: 1 },
                { timeUnit: "millisecond", count: 10 },
                { timeUnit: "millisecond", count: 100 },
                { timeUnit: "second", count: 1 },
                { timeUnit: "second", count: 10 },
                { timeUnit: "minute", count: 1 },
                { timeUnit: "minute", count: 10 },
                { timeUnit: "hour", count: 1 },
                { timeUnit: "day", count: 1 },
                { timeUnit: "week", count: 1 },
                { timeUnit: "month", count: 1 },
                { timeUnit: "year", count: 1 },
              ],
              fillRule: (e) => {
                const t = e.get("axisFill");
                if (t) {
                  const i = e.component,
                    s = e.get("value"),
                    a = e.get("endValue"),
                    o = i.intervalDuration(),
                    n = i.getPrivate("baseInterval"),
                    r = i.getPrivate("gridInterval", n);
                  let h = i.getPrivate("min", 0);
                  if (
                    ((h = l
                      .round(
                        new Date(h),
                        r.timeUnit,
                        r.count,
                        this._root.locale.firstDayOfWeek,
                        this._root.utc,
                        void 0,
                        this._root.timezone
                      )
                      .getTime()),
                    null != s && null != a)
                  ) {
                    const e = Math.round(Math.round((s - h) / o)) / 2;
                    e == Math.round(e)
                      ? t.setPrivate("visible", !0)
                      : t.setPrivate("visible", !1);
                  }
                }
              },
            }),
            i("GaplessDateAxis").setAll({
              fillRule: (e) => {
                const t = e.get("axisFill");
                if (t) {
                  const i = e.get("index");
                  let s = !1;
                  (h.isNumber(i) && i % 2 != 0) || (s = !0),
                    t.setPrivate("visible", s);
                }
              },
            }),
            i("ValueAxis").setAll({
              baseValue: 0,
              logarithmic: !1,
              strictMinMax: !1,
              autoZoom: !0,
              fillRule: (e) => {
                const t = e.get("axisFill");
                if (t) {
                  const i = e.component,
                    s = e.get("value"),
                    a = i.getPrivate("step");
                  h.isNumber(s) &&
                    h.isNumber(a) &&
                    (c.round(s / a / 2, 5) == Math.round(s / a / 2)
                      ? t.setPrivate("visible", !1)
                      : t.setPrivate("visible", !0));
                }
              },
            }),
            i("DurationAxis").setAll({ baseUnit: "second" }),
            i("XYSeries").setAll({
              maskBullets: !0,
              stackToNegative: !0,
              locationX: 0.5,
              locationY: 0.5,
              snapTooltip: !1,
              openValueXGrouped: "open",
              openValueYGrouped: "open",
              valueXGrouped: "close",
              valueYGrouped: "close",
              seriesTooltipTarget: "series",
            }),
            i("BaseColumnSeries").setAll({ adjustBulletPosition: !0 }),
            i("ColumnSeries").setAll({ clustered: !0 }),
            i("RoundedRectangle", ["series", "column"]).setAll({
              position: "absolute",
              isMeasured: !1,
              width: (0, a.aQ)(70),
              height: (0, a.aQ)(70),
              strokeWidth: 1,
              strokeOpacity: 1,
              cornerRadiusBL: 0,
              cornerRadiusTL: 0,
              cornerRadiusBR: 0,
              cornerRadiusTR: 0,
              fillOpacity: 1,
              role: "figure",
            }),
            i("LineSeries").setAll({
              connect: !0,
              autoGapCount: 1.1,
              stackToNegative: !1,
            }),
            i("Graphics", ["series", "stroke"]).setAll({
              position: "absolute",
              strokeWidth: 1,
              strokeOpacity: 1,
              isMeasured: !1,
            }),
            i("Graphics", ["series", "fill"]).setAll({
              visible: !1,
              fillOpacity: 0,
              position: "absolute",
              strokeWidth: 0,
              strokeOpacity: 0,
              isMeasured: !1,
            }),
            i("Graphics", [
              "line",
              "series",
              "legend",
              "marker",
              "stroke",
            ]).setAll({
              draw: (e, t) => {
                const i = t.parent;
                if (i) {
                  const t = i.height(),
                    s = i.width();
                  e.moveTo(0, t / 2), e.lineTo(s, t / 2);
                }
              },
            });
          {
            const t = i("Graphics", [
              "line",
              "series",
              "legend",
              "marker",
              "stroke",
            ]).states.create("disabled", {});
            (0, r.v)(t, "stroke", e, "disabled");
          }
          i("Graphics", ["line", "series", "legend", "marker", "fill"]).setAll({
            draw: (e, t) => {
              const i = t.parent;
              if (i) {
                const t = i.height(),
                  s = i.width();
                e.moveTo(0, 0),
                  e.lineTo(s, 0),
                  e.lineTo(s, t),
                  e.lineTo(0, t),
                  e.lineTo(0, 0);
              }
            },
          });
          {
            const t = i("Graphics", [
              "line",
              "series",
              "legend",
              "marker",
              "fill",
            ]).states.create("disabled", {});
            (0, r.v)(t, "stroke", e, "disabled");
          }
          i("SmoothedXYLineSeries").setAll({ tension: 0.5 }),
            i("SmoothedXLineSeries").setAll({ tension: 0.5 }),
            i("SmoothedYLineSeries").setAll({ tension: 0.5 }),
            i("Candlestick").setAll({
              position: "absolute",
              isMeasured: !1,
              width: (0, a.aQ)(50),
              height: (0, a.aQ)(50),
              strokeWidth: 1,
              strokeOpacity: 1,
              cornerRadiusBL: 0,
              cornerRadiusTL: 0,
              cornerRadiusBR: 0,
              cornerRadiusTR: 0,
              fillOpacity: 1,
              role: "figure",
            }),
            i("OHLC").setAll({ width: (0, a.aQ)(80), height: (0, a.aQ)(80) }),
            i("CandlestickSeries").setAll({
              lowValueXGrouped: "low",
              lowValueYGrouped: "low",
              highValueXGrouped: "high",
              highValueYGrouped: "high",
              openValueXGrouped: "open",
              openValueYGrouped: "open",
              valueXGrouped: "close",
              valueYGrouped: "close",
            });
          {
            const t = i("Rectangle", ["column", "autocolor"]).states.create(
              "riseFromOpen",
              {}
            );
            (0, r.v)(t, "fill", e, "positive"),
              (0, r.v)(t, "stroke", e, "positive");
          }
          {
            const t = i("Rectangle", ["column", "autocolor"]).states.create(
              "dropFromOpen",
              {}
            );
            (0, r.v)(t, "fill", e, "negative"),
              (0, r.v)(t, "stroke", e, "negative");
          }
          i("Rectangle", ["column", "autocolor", "pro"]).states.create(
            "riseFromOpen",
            { fillOpacity: 0 }
          ),
            i("Rectangle", ["column", "autocolor", "pro"]).states.create(
              "dropFromOpen",
              { fillOpacity: 1 }
            );
          {
            const t = i("Rectangle", [
              "column",
              "autocolor",
              "pro",
            ]).states.create("riseFromPrevious", {});
            (0, r.v)(t, "fill", e, "positive"),
              (0, r.v)(t, "stroke", e, "positive");
          }
          {
            const t = i("Rectangle", [
              "column",
              "autocolor",
              "pro",
            ]).states.create("dropFromPrevious", {});
            (0, r.v)(t, "fill", e, "negative"),
              (0, r.v)(t, "stroke", e, "negative");
          }
          i("RoundedRectangle", ["rangegrip"]).setAll({
            strokeOpacity: 0,
            fillOpacity: 0,
            strokeWidth: 1,
            width: 12,
            height: 12,
          });
          {
            const t = i("Graphics", ["rangegrip", "button", "icon"]);
            t.setAll({
              interactive: !1,
              crisp: !0,
              strokeOpacity: 0.5,
              draw: (e) => {
                e.moveTo(0, 0.5),
                  e.lineTo(0, 12.5),
                  e.moveTo(2, 0.5),
                  e.lineTo(2, 12.5),
                  e.moveTo(4, 0.5),
                  e.lineTo(4, 12.5);
              },
            }),
              (0, r.v)(t, "stroke", e, "secondaryButtonText");
          }
          i("Button", ["rangegrip"]).setAll({
            draggable: !0,
            paddingTop: 0,
            paddingBottom: 0,
          }),
            i("Button", ["rangegrip", "vertical"]).setAll({
              rotation: 90,
              cursorOverStyle: "ns-resize",
              centerX: a.CI,
            }),
            i("Button", ["rangegrip", "horizontal"]).setAll({
              cursorOverStyle: "ew-resize",
              centerX: a.CI,
            }),
            i("Button", ["rangegrip", "vertical", "left"]).setAll({
              centerY: a.AQ,
            }),
            i("Button", ["rangegrip", "vertical", "right"]).setAll({
              centerY: 0,
            }),
            i("Button", ["rangegrip", "horizontal", "top"]).setAll({
              centerY: 0,
            }),
            i("Button", ["rangegrip", "horizontal", "bottom"]).setAll({
              centerY: a.AQ,
            });
        }
      }
    },
    3355: function (e, t, i) {
      i.d(t, {
        L: function () {
          return d;
        },
      });
      var s = i(8777),
        a = i(6245),
        o = i(1479),
        n = i(8943),
        r = i(5040),
        l = i(7652),
        h = i(751),
        c = i(5071),
        u = i(256);
      class d extends s.W {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_alwaysShow", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "lineX", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(
                n.r.new(this._root, { themeTags: ["x"] })
              ),
            }),
            Object.defineProperty(this, "lineY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(
                n.r.new(this._root, { themeTags: ["y"] })
              ),
            }),
            Object.defineProperty(this, "selection", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(
                o.T.new(this._root, {
                  themeTags: ["selection", "cursor"],
                  layer: 30,
                })
              ),
            }),
            Object.defineProperty(this, "_movePoint", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_lastPoint", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { x: 0, y: 0 },
            }),
            Object.defineProperty(this, "_lastPoint2", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: { x: 0, y: 0 },
            }),
            Object.defineProperty(this, "_tooltipX", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_tooltipY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "chart", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_toX", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_toY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        _afterNew() {
          (this._settings.themeTags = l.mergeTags(this._settings.themeTags, [
            "xy",
            "cursor",
          ])),
            super._afterNew(),
            this.setAll({
              width: a.AQ,
              height: a.AQ,
              isMeasured: !0,
              position: "absolute",
            }),
            this.states.create("hidden", { visible: !0, opacity: 0 }),
            this._drawLines(),
            this.setPrivateRaw("visible", !1),
            this._disposers.push(
              this.setTimeout(() => {
                this.setPrivate("visible", !0);
              }, 500)
            ),
            this._disposers.push(
              this.lineX.events.on("positionchanged", () => {
                this._handleXLine();
              })
            ),
            this._disposers.push(
              this.lineY.events.on("positionchanged", () => {
                this._handleYLine();
              })
            ),
            this._disposers.push(
              this.lineX.events.on("focus", () => this._handleLineFocus())
            ),
            this._disposers.push(
              this.lineX.events.on("blur", () => this._handleLineBlur())
            ),
            this._disposers.push(
              this.lineY.events.on("focus", () => this._handleLineFocus())
            ),
            this._disposers.push(
              this.lineY.events.on("blur", () => this._handleLineBlur())
            ),
            l.supports("keyboardevents") &&
              this._disposers.push(
                l.addEventListener(document, "keydown", (e) => {
                  this._handleLineMove(l.getEventKey(e), e.ctrlKey);
                })
              );
        }
        _setUpTouch() {
          const e = this.chart;
          e &&
            (e.plotContainer._display.cancelTouch =
              "none" != this.get("behavior"));
        }
        _handleXLine() {
          let e = this.lineX.x(),
            t = !0;
          (e < 0 || e > this.width()) && (t = !1),
            this.lineX.setPrivate("visible", t);
        }
        _handleYLine() {
          let e = this.lineY.y(),
            t = !0;
          (e < 0 || e > this.height()) && (t = !1),
            this.lineY.setPrivate("visible", t);
        }
        _handleLineMove(e, t) {
          let i = "";
          const s = this.chart;
          let a;
          if (s && s.xAxes.length) {
            this._root.focused(this.lineX)
              ? ((i = "positionX"), (a = s.xAxes.getIndex(0)))
              : this._root.focused(this.lineY) &&
                ((a = s.yAxes.getIndex(0)), (i = "positionY"));
            let o = 1;
            if ((t && (o = 5), a)) {
              let t,
                s = a.get("renderer").get("inversed", !1);
              "ArrowRight" == e || "ArrowDown" == e
                ? (t = 1)
                : "ArrowLeft" == e || "ArrowUp" == e
                ? (t = -1)
                : "Tab" == e && (t = 0),
                null != t &&
                  (s && (t *= -1), this.set(i, a.nextPosition(t * o)));
            }
          }
        }
        _handleLineFocus() {
          (this._alwaysShow = this.get("alwaysShow", !1)),
            this.setAll({
              positionX: this.getPrivate("positionX", 0),
              positionY: this.getPrivate("positionY", 0),
              alwaysShow: !0,
            }),
            this._handleLineMove("Tab");
        }
        _handleLineBlur() {
          (this.lineX.isFocus() || this.lineY.isFocus()) &&
            this.setAll({
              positionX: void 0,
              positionY: void 0,
              alwaysShow: this._alwaysShow,
            });
        }
        _prepareChildren() {
          if ((super._prepareChildren(), this.isDirty("xAxis"))) {
            this._tooltipX = !1;
            const e = this.get("xAxis");
            if (e) {
              const t = e.get("tooltip");
              t &&
                ((this._tooltipX = !0),
                this._disposers.push(
                  t.on("pointTo", () => {
                    this._updateXLine(t);
                  })
                ));
            }
          }
          if (this.isDirty("yAxis")) {
            this._tooltipY = !1;
            const e = this.get("yAxis");
            if (e) {
              const t = e.get("tooltip");
              t &&
                ((this._tooltipY = !0),
                this._disposers.push(
                  t.on("pointTo", () => {
                    this._updateYLine(t);
                  })
                ));
            }
          }
        }
        _handleSyncWith() {
          const e = this.chart;
          if (e) {
            const t = this.get("syncWith"),
              i = [];
            t &&
              c.each(t, (e) => {
                const t = e.chart;
                t && i.push(t);
              }),
              (e._otherCharts = i);
          }
        }
        _updateChildren() {
          if (
            (super._updateChildren(),
            this._handleSyncWith(),
            this.isDirty("positionX") || this.isDirty("positionY"))
          ) {
            const e = this.get("positionX"),
              t = this.get("positionY");
            null == e && null == t
              ? this.hide(0)
              : ((this._movePoint = this.toGlobal(
                  this._getPoint(
                    this.get("positionX", 0),
                    this.get("positionY", 0)
                  )
                )),
                this.handleMove());
          }
        }
        _updateXLine(e) {
          let t = h.round(
            this._display.toLocal(e.get("pointTo", { x: 0, y: 0 })).x,
            3
          );
          this._toX != t &&
            (this.lineX.animate({
              key: "x",
              to: t,
              duration: e.get("animationDuration", 0),
              easing: e.get("animationEasing"),
            }),
            (this._toX = t));
        }
        _updateYLine(e) {
          let t = h.round(
            this._display.toLocal(e.get("pointTo", { x: 0, y: 0 })).y,
            3
          );
          this._toY != t &&
            (this.lineY.animate({
              key: "y",
              to: t,
              duration: e.get("animationDuration", 0),
              easing: e.get("animationEasing"),
            }),
            (this._toY = t));
        }
        _drawLines() {
          this.lineX.set("draw", (e) => {
            e.moveTo(0, 0), e.lineTo(0, this.height());
          }),
            this.lineY.set("draw", (e) => {
              e.moveTo(0, 0), e.lineTo(this.width(), 0);
            });
        }
        updateCursor() {
          this.get("alwaysShow") &&
            (this._movePoint = this.toGlobal(
              this._getPoint(this.get("positionX", 0), this.get("positionY", 0))
            )),
            this.handleMove();
        }
        _setChart(e) {
          (this.chart = e), this._handleSyncWith();
          const t = e.plotContainer;
          this.events.on("boundschanged", () => {
            this._disposers.push(
              this.setTimeout(() => {
                this.updateCursor();
              }, 50)
            );
          }),
            l.supports("touchevents") &&
              (this._disposers.push(
                t.events.on("click", (e) => {
                  l.isTouchEvent(e.originalEvent) && this._handleMove(e);
                })
              ),
              this._setUpTouch()),
            this._disposers.push(
              t.events.on("pointerdown", (e) => {
                this._handleCursorDown(e);
              })
            ),
            this._disposers.push(
              t.events.on("globalpointerup", (e) => {
                this._handleCursorUp(e),
                  e.native || this.isHidden() || this._handleMove(e);
              })
            ),
            this._disposers.push(
              t.events.on("globalpointermove", (e) => {
                (this.get("syncWith") ||
                  0 != u.keys(t._downPoints).length ||
                  e.native ||
                  !this.isHidden()) &&
                  (this._handleMove(e),
                  Math.hypot(
                    this._lastPoint2.x - e.point.x,
                    this._lastPoint2.y - e.point.y
                  ) > 1 &&
                    (this._handleLineBlur(), (this._lastPoint2 = e.point)));
              })
            );
          const i = this.parent;
          i && i.children.moveValue(this.selection);
        }
        _inPlot(e) {
          const t = this.chart;
          return !!t && t.inPlot(e);
        }
        _handleCursorDown(e) {
          if (2 == e.originalEvent.button) return;
          const t = e.point;
          let i = this._display.toLocal(t);
          const s = this.chart;
          if ((this.selection.set("draw", () => {}), s && this._inPlot(i))) {
            if (((this._downPoint = i), "none" != this.get("behavior"))) {
              this.selection.show();
              const t = "selectstarted";
              this.events.isEnabled(t) &&
                this.events.dispatch(t, {
                  type: t,
                  target: this,
                  originalEvent: e.originalEvent,
                });
            }
            let t = this._getPosition(i).x,
              s = this._getPosition(i).y;
            this.setPrivate("downPositionX", t),
              this.setPrivate("downPositionY", s);
          }
        }
        _handleCursorUp(e) {
          if (this._downPoint) {
            const t = this.get("behavior", "none");
            if ("none" != t) {
              "z" === t.charAt(0) && this.selection.hide();
              const i = e.point;
              let s = this._display.toLocal(i);
              const a = this._downPoint,
                o = this.get("moveThreshold", 1);
              if (s && a) {
                let i = !1;
                if (
                  (("zoomX" !== t &&
                    "zoomXY" !== t &&
                    "selectX" !== t &&
                    "selectXY" !== t) ||
                    (Math.abs(s.x - a.x) > o && (i = !0)),
                  ("zoomY" !== t &&
                    "zoomXY" !== t &&
                    "selectY" !== t &&
                    "selectXY" !== t) ||
                    (Math.abs(s.y - a.y) > o && (i = !0)),
                  i)
                ) {
                  const t = "selectended";
                  this.events.isEnabled(t) &&
                    this.events.dispatch(t, {
                      type: t,
                      target: this,
                      originalEvent: e.originalEvent,
                    });
                } else {
                  const t = "selectcancelled";
                  this.events.isEnabled(t) &&
                    this.events.dispatch(t, {
                      type: t,
                      target: this,
                      originalEvent: e.originalEvent,
                    });
                }
              }
            }
          }
          this._downPoint = void 0;
        }
        _handleMove(e) {
          if (this.getPrivate("visible")) {
            const t = this.chart;
            if (t && u.keys(t.plotContainer._downPoints).length > 1)
              return void this.set("forceHidden", !0);
            this.set("forceHidden", !1);
            const i = e.point,
              s = this._lastPoint;
            if (
              Math.round(s.x) === Math.round(i.x) &&
              Math.round(s.y) === Math.round(i.y)
            )
              return;
            (this._lastPoint = i),
              this.setPrivate("lastPoint", i),
              this.handleMove({ x: i.x, y: i.y }, !1, e.originalEvent);
          }
        }
        _getPosition(e) {
          return { x: e.x / this.width(), y: e.y / this.height() };
        }
        handleMove(e, t, i) {
          e || (e = this._movePoint);
          const s = this.get("alwaysShow");
          if (!e) return void this.hide(0);
          this._movePoint = e;
          let a = this._display.toLocal(e),
            o = this.chart;
          if (o && (this._inPlot(a) || this._downPoint)) {
            (o._movePoint = e),
              this.isHidden() &&
                (this.show(),
                "z" == this.get("behavior", "").charAt(0) &&
                  this.selection.set("draw", () => {}));
            let n = a.x,
              l = a.y,
              h = this._getPosition(a);
            this.setPrivate("point", a);
            let c = this.get("snapToSeries");
            this._downPoint && (c = void 0);
            let u = this.get("positionX"),
              d = h.x;
            r.isNumber(u) && (d = u);
            let g = this.get("positionY"),
              m = h.y;
            r.isNumber(g) && (m = g),
              this.setPrivate("positionX", d),
              this.setPrivate("positionY", m);
            const p = this._getPoint(d, m);
            if (
              ((n = p.x),
              (l = p.y),
              o.xAxes.each((e) => {
                e._handleCursorPosition(d, c), s && e.handleCursorShow();
              }),
              o.yAxes.each((e) => {
                e._handleCursorPosition(m, c), s && e.handleCursorShow();
              }),
              !t)
            ) {
              o._handleCursorPosition();
              const t = "cursormoved";
              this.events.isEnabled(t) &&
                this.events.dispatch(t, {
                  type: t,
                  target: this,
                  point: e,
                  originalEvent: i,
                });
            }
            this._updateLines(n, l), o.arrangeTooltips();
          } else if (!this._downPoint && !s) {
            this.hide(0);
            const e = "cursorhidden";
            this.events.isEnabled(e) &&
              this.events.dispatch(e, { type: e, target: this });
          }
          this._downPoint &&
            "none" != this.get("behavior") &&
            this._updateSelection(a);
        }
        _getPoint(e, t) {
          return { x: this.width() * e, y: this.height() * t };
        }
        _updateLines(e, t) {
          this._tooltipX || this.lineX.set("x", e),
            this._tooltipY || this.lineY.set("y", t),
            this._drawLines();
        }
        _updateSelection(e) {
          const t = this.selection,
            i = this.get("behavior"),
            s = this.width(),
            a = this.height();
          e.x < 0 && (e.x = 0),
            e.x > s && (e.x = s),
            e.y < 0 && (e.y = 0),
            e.y > a && (e.y = a),
            t.set("draw", (t) => {
              const o = this._downPoint;
              o &&
                ("zoomXY" === i || "selectXY" === i
                  ? (t.moveTo(o.x, o.y),
                    t.lineTo(o.x, e.y),
                    t.lineTo(e.x, e.y),
                    t.lineTo(e.x, o.y),
                    t.lineTo(o.x, o.y))
                  : "zoomX" === i || "selectX" === i
                  ? (t.moveTo(o.x, 0),
                    t.lineTo(o.x, a),
                    t.lineTo(e.x, a),
                    t.lineTo(e.x, 0),
                    t.lineTo(o.x, 0))
                  : ("zoomY" !== i && "selectY" !== i) ||
                    (t.moveTo(0, o.y),
                    t.lineTo(s, o.y),
                    t.lineTo(s, e.y),
                    t.lineTo(0, e.y),
                    t.lineTo(0, o.y)));
            });
        }
        _onHide() {
          if (this.isHidden()) {
            let e = this.chart;
            e &&
              (e.xAxes.each((e) => {
                e.handleCursorHide();
              }),
              e.yAxes.each((e) => {
                e.handleCursorHide();
              }),
              e.series.each((e) => {
                e.handleCursorHide();
              }));
          }
          super._onHide();
        }
        _onShow() {
          if (!this.isHidden()) {
            let e = this.chart;
            e &&
              (e.xAxes.each((e) => {
                e.handleCursorShow();
              }),
              e.yAxes.each((e) => {
                e.handleCursorShow();
              }));
          }
          super._onShow();
        }
        _dispose() {
          super._dispose(), this.selection.dispose();
        }
      }
      Object.defineProperty(d, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "XYCursor",
      }),
        Object.defineProperty(d, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.W.classNames.concat([d.className]),
        });
    },
    6515: function (e, t, i) {
      i.d(t, {
        R: function () {
          return u;
        },
      });
      var s = i(9361),
        a = i(8777),
        o = i(6245),
        n = i(7144),
        r = i(7142),
        l = i(5071),
        h = i(5040),
        c = i(7652);
      class u extends s.w {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_series", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "_isPanning", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "minorDataItems", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "labelsContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(a.W.new(this._root, {})),
            }),
            Object.defineProperty(this, "gridContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a.W.new(this._root, { width: o.AQ, height: o.AQ }),
            }),
            Object.defineProperty(this, "topGridContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a.W.new(this._root, { width: o.AQ, height: o.AQ }),
            }),
            Object.defineProperty(this, "bulletsContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(
                a.W.new(this._root, {
                  isMeasured: !1,
                  width: o.AQ,
                  height: o.AQ,
                  position: "absolute",
                })
              ),
            }),
            Object.defineProperty(this, "chart", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_rangesDirty", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_panStart", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_panEnd", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_sAnimation", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_eAnimation", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_skipSync", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "axisRanges", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new n.aV(),
            }),
            Object.defineProperty(this, "_seriesAxisRanges", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "ghostLabel", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_cursorPosition", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: -1,
            }),
            Object.defineProperty(this, "_snapToSeries", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_seriesValuesDirty", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_seriesAdded", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "axisHeader", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(
                a.W.new(this._root, {
                  themeTags: ["axis", "header"],
                  position: "absolute",
                  background: r.A.new(this._root, {
                    themeTags: ["header", "background"],
                    fill: this._root.interfaceColors.get("background"),
                  }),
                })
              ),
            }),
            Object.defineProperty(this, "_bullets", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            });
        }
        _dispose() {
          this.gridContainer.dispose(),
            this.topGridContainer.dispose(),
            this.bulletsContainer.dispose(),
            this.labelsContainer.dispose(),
            this.axisHeader.dispose(),
            super._dispose();
        }
        _afterNew() {
          super._afterNew(),
            this.setPrivate("updateScrollbar", !0),
            this._disposers.push(
              this.axisRanges.events.onAll((e) => {
                if ("clear" === e.type)
                  l.each(e.oldValues, (e) => {
                    this.disposeDataItem(e);
                  });
                else if ("push" === e.type)
                  this._processAxisRange(e.newValue, ["range"]);
                else if ("setIndex" === e.type)
                  this._processAxisRange(e.newValue, ["range"]);
                else if ("insertIndex" === e.type)
                  this._processAxisRange(e.newValue, ["range"]);
                else if ("removeIndex" === e.type)
                  this.disposeDataItem(e.oldValue);
                else {
                  if ("moveIndex" !== e.type)
                    throw new Error("Unknown IStreamEvent type");
                  this._processAxisRange(e.value, ["range"]);
                }
              })
            );
          const e = this.get("renderer");
          e && ((e.axis = this), e.processAxis()),
            this.children.push(e),
            (this.ghostLabel = e.makeLabel(new s.z(this, void 0, {}), [])),
            this.ghostLabel.adapters.disable("text"),
            this.ghostLabel.setAll({
              opacity: 0,
              tooltipText: void 0,
              tooltipHTML: void 0,
              interactive: !1,
            }),
            this.ghostLabel.events.disable();
        }
        _updateFinals(e, t) {}
        zoom(e, t, i, s) {
          if (this.get("zoomable", !0))
            if (
              (this._updateFinals(e, t),
              this.get("start") !== e || this.get("end") != t)
            ) {
              let a = this._sAnimation,
                o = this._eAnimation,
                n = this.get("maxDeviation", 0.5) * Math.min(1, t - e);
              e < -n && (e = -n),
                t > 1 + n && (t = 1 + n),
                e > t && ([e, t] = [t, e]),
                h.isNumber(i) || (i = this.get("interpolationDuration", 0)),
                s || (s = "end");
              let r = this.getPrivate(
                  "maxZoomFactor",
                  this.get("maxZoomFactor", 100)
                ),
                l = r;
              1 === t &&
                0 !== e &&
                (s = e < this.get("start", 0) ? "start" : "end"),
                0 === e &&
                  1 !== t &&
                  (s = t > this.get("end", 1) ? "end" : "start");
              let c = this.get("minZoomCount", 0),
                u = this.get("maxZoomCount", 1 / 0);
              h.isNumber(c) && (r = l / c);
              let d = 1;
              if (
                (h.isNumber(u) && (d = l / u),
                "start" === s
                  ? (u > 0 && 1 / (t - e) < d && (t = e + 1 / d),
                    1 / (t - e) > r && (t = e + 1 / r),
                    t > 1 && t - e < 1 / r && (e = t - 1 / r))
                  : (u > 0 && 1 / (t - e) < d && (e = t - 1 / d),
                    1 / (t - e) > r && (e = t - 1 / r),
                    e < 0 && t - e < 1 / r && (t = e + 1 / r)),
                1 / (t - e) > r && (t = e + 1 / r),
                1 / (t - e) > r && (e = t - 1 / r),
                null != u &&
                  null != c &&
                  e == this.get("start") &&
                  t == this.get("end"))
              ) {
                const e = this.chart;
                e && e._handleAxisSelection(this, !0);
              }
              if (
                ((a && a.playing && a.to == e) || this.get("start") == e) &&
                ((o && o.playing && o.to == t) || this.get("end") == t)
              )
                return;
              if (i > 0) {
                let s,
                  a,
                  o = this.get("interpolationEasing");
                if (
                  (this.get("start") != e &&
                    (s = this.animate({
                      key: "start",
                      to: e,
                      duration: i,
                      easing: o,
                    })),
                  this.get("end") != t &&
                    (a = this.animate({
                      key: "end",
                      to: t,
                      duration: i,
                      easing: o,
                    })),
                  (this._sAnimation = s),
                  (this._eAnimation = a),
                  s)
                )
                  return s;
                if (a) return a;
              } else this.set("start", e), this.set("end", t);
            } else
              this._sAnimation && this._sAnimation.stop(),
                this._eAnimation && this._eAnimation.stop();
        }
        get series() {
          return this._series;
        }
        _processAxisRange(e, t) {
          e.setRaw("isRange", !0),
            this._createAssets(e, t),
            (this._rangesDirty = !0),
            this._prepareDataItem(e);
          const i = e.get("above"),
            s = this.topGridContainer,
            a = e.get("grid");
          i && a && s.children.moveValue(a);
          const o = e.get("axisFill");
          i && o && s.children.moveValue(o);
        }
        _prepareDataItem(e, t) {}
        markDirtyExtremes() {}
        markDirtySelectionExtremes() {}
        _calculateTotals() {}
        _updateAxisRanges() {
          (this._bullets = {}),
            this.axisRanges.each((e) => {
              this._prepareDataItem(e);
            }),
            l.each(this._seriesAxisRanges, (e) => {
              this._prepareDataItem(e);
            });
        }
        _prepareChildren() {
          if (
            (super._prepareChildren(),
            this.get("fixAxisSize")
              ? this.ghostLabel.set("visible", !0)
              : this.ghostLabel.set("visible", !1),
            this.isDirty("start") || this.isDirty("end"))
          ) {
            const e = this.chart;
            e && e._updateCursor();
            let t = this.get("start", 0),
              i = this.get("end", 1),
              s = this.get("maxDeviation", 0.5) * Math.min(1, i - t);
            if (t < -s) {
              let e = t + s;
              (t = -s),
                this.setRaw("start", t),
                this.isDirty("end") && this.setRaw("end", i - e);
            }
            if (i > 1 + s) {
              let e = i - 1 - s;
              (i = 1 + s),
                this.setRaw("end", i),
                this.isDirty("start") && this.setRaw("start", t - e);
            }
          }
          const e = this.get("renderer");
          if (
            ((e._start = this.get("start")),
            (e._end = this.get("end")),
            (e._inversed = e.get("inversed", !1)),
            (e._axisLength = e.axisLength() / (e._end - e._start)),
            e._updateLC(),
            this.isDirty("tooltip"))
          ) {
            const t = this.get("tooltip");
            if (t) {
              const i = e.get("themeTags");
              t.addTag("axis"),
                t.addTag(this.className.toLowerCase()),
                t._applyThemes(),
                i &&
                  (t.set("themeTags", c.mergeTags(t.get("themeTags"), i)),
                  t.label._applyThemes());
            }
          }
        }
        _updateTooltipBounds() {
          const e = this.get("tooltip");
          e && this.get("renderer").updateTooltipBounds(e);
        }
        _updateBounds() {
          super._updateBounds(), this._updateTooltipBounds();
        }
        processChart(e) {
          (this.chart = e),
            (this.get("renderer").chart = e),
            e.gridContainer.children.push(this.gridContainer),
            e.topGridContainer.children.push(this.topGridContainer),
            e.axisHeadersContainer.children.push(this.axisHeader),
            this.on("start", () => {
              e._handleAxisSelection(this);
            }),
            this.on("end", () => {
              e._handleAxisSelection(this);
            }),
            e.plotContainer.onPrivate("width", () => {
              this.markDirtySize();
            }),
            e.plotContainer.onPrivate("height", () => {
              this.markDirtySize();
            }),
            e.processAxis(this);
        }
        hideDataItem(e) {
          return this._toggleFHDataItem(e, !0), super.hideDataItem(e);
        }
        showDataItem(e) {
          return this._toggleFHDataItem(e, !1), super.showDataItem(e);
        }
        _toggleFHDataItem(e, t) {
          const i = "forceHidden",
            s = e.get("label");
          s && s.set(i, t);
          const a = e.get("grid");
          a && a.set(i, t);
          const o = e.get("tick");
          o && o.set(i, t);
          const n = e.get("axisFill");
          n && n.set(i, t);
          const r = e.get("bullet");
          if (r) {
            const e = r.get("sprite");
            e && e.set(i, t);
          }
        }
        _toggleDataItem(e, t) {
          const i = e.get("label"),
            s = "visible";
          i && i.setPrivate(s, t);
          const a = e.get("grid");
          a && a.setPrivate(s, t);
          const o = e.get("tick");
          o && o.setPrivate(s, t);
          const n = e.get("axisFill");
          n && n.setPrivate(s, t);
          const r = e.get("bullet");
          if (r) {
            const e = r.get("sprite");
            e && e.setPrivate(s, t);
          }
        }
        _createAssets(e, t, i) {
          var s, a, o;
          const n = this.get("renderer");
          let r = "minor";
          const l = e.get("label");
          if (l) {
            let a = l.get("themeTags"),
              o = !1;
            i
              ? -1 == (null == a ? void 0 : a.indexOf(r)) && (o = !0)
              : -1 != (null == a ? void 0 : a.indexOf(r)) && (o = !0),
              o &&
                (null === (s = l.parent) ||
                  void 0 === s ||
                  s.children.removeValue(l),
                n.makeLabel(e, t),
                l.dispose(),
                n.labels.removeValue(l));
          } else n.makeLabel(e, t);
          const h = e.get("grid");
          if (h) {
            let s = h.get("themeTags"),
              o = !1;
            i
              ? -1 == (null == s ? void 0 : s.indexOf(r)) && (o = !0)
              : -1 != (null == s ? void 0 : s.indexOf(r)) && (o = !0),
              o &&
                (null === (a = h.parent) ||
                  void 0 === a ||
                  a.children.removeValue(h),
                n.makeGrid(e, t),
                h.dispose(),
                n.grid.removeValue(h));
          } else n.makeGrid(e, t);
          const c = e.get("tick");
          if (c) {
            let s = !1,
              a = c.get("themeTags");
            i
              ? -1 == (null == a ? void 0 : a.indexOf(r)) && (s = !0)
              : -1 != (null == a ? void 0 : a.indexOf(r)) && (s = !0),
              s &&
                (null === (o = c.parent) ||
                  void 0 === o ||
                  o.children.removeValue(c),
                n.makeTick(e, t),
                c.dispose(),
                n.ticks.removeValue(c));
          } else n.makeTick(e, t);
          i || e.get("axisFill") || n.makeAxisFill(e, t),
            this._processBullet(e);
        }
        _processBullet(e) {
          let t = e.get("bullet"),
            i = this.get("bullet");
          if (
            (t || !i || e.get("isRange") || (t = i(this._root, this, e)), t)
          ) {
            t.axis = this;
            const i = t.get("sprite");
            i &&
              (i._setDataItem(e),
              e.setRaw("bullet", t),
              i.parent || this.bulletsContainer.children.push(i));
          }
        }
        _afterChanged() {
          super._afterChanged();
          const e = this.chart;
          e && (e._updateChartLayout(), e.axisHeadersContainer.markDirtySize()),
            this.get("renderer")._updatePositions(),
            (this._seriesAdded = !1);
        }
        disposeDataItem(e) {
          super.disposeDataItem(e);
          const t = this.get("renderer"),
            i = e.get("label");
          i && (t.labels.removeValue(i), i.dispose());
          const s = e.get("tick");
          s && (t.ticks.removeValue(s), s.dispose());
          const a = e.get("grid");
          a && (t.grid.removeValue(a), a.dispose());
          const o = e.get("axisFill");
          o && (t.axisFills.removeValue(o), o.dispose());
          const n = e.get("bullet");
          n && n.dispose();
        }
        _updateGhost() {
          this.setPrivate(
            "cellWidth",
            this.getCellWidthPosition() * this.get("renderer").axisLength()
          );
          const e = this.ghostLabel;
          if (!e.isHidden()) {
            const t = e.localBounds(),
              i = Math.ceil(t.right - t.left);
            let s = e.get("text");
            l.each(this.dataItems, (e) => {
              const t = e.get("label");
              if (t && !t.isHidden()) {
                const e = t.localBounds();
                Math.ceil(e.right - e.left) > i && (s = t.text._getText());
              }
            }),
              e.set("text", s);
          }
          let t = this.get("start", 0),
            i = this.get("end", 1);
          this.get("renderer").updateLabel(e, t + 0.5 * (i - t));
        }
        _handleCursorPosition(e, t) {
          (e = this.get("renderer").toAxisPosition(e)),
            (this._cursorPosition = e),
            (this._snapToSeries = t),
            this.updateTooltip();
        }
        updateTooltip() {
          const e = this._snapToSeries;
          let t = this._cursorPosition;
          const i = this.get("tooltip"),
            s = this.get("renderer");
          h.isNumber(t) &&
            (l.each(this.series, (i) => {
              if (i.get("baseAxis") === this) {
                const s = this.getSeriesItem(i, t, this.get("tooltipLocation"));
                e && -1 != e.indexOf(i)
                  ? (i.updateLegendMarker(s),
                    i.updateLegendValue(s),
                    (i._settings.tooltipDataItem = s))
                  : (i.showDataItemTooltip(s), i.setRaw("tooltipDataItem", s));
              }
            }),
            this.get("snapTooltip") &&
              (t = this.roundAxisPosition(t, this.get("tooltipLocation", 0.5))),
            this.setPrivateRaw("tooltipPosition", t),
            i &&
              (s.updateTooltipBounds(i),
              h.isNaN(t)
                ? i.hide(0)
                : (this._updateTooltipText(i, t),
                  s.positionTooltip(i, t),
                  t < this.get("start", 0) || t > this.get("end", 1)
                    ? i.hide(0)
                    : i.show(0))));
        }
        _updateTooltipText(e, t) {
          e.label.set("text", this.getTooltipText(t));
        }
        roundAxisPosition(e, t) {
          return e;
        }
        handleCursorShow() {
          let e = this.get("tooltip");
          e && e.show();
        }
        handleCursorHide() {
          let e = this.get("tooltip");
          e && e.hide();
        }
        processSeriesDataItem(e, t) {}
        _clearDirty() {
          super._clearDirty(), (this._sizeDirty = !1), (this._rangesDirty = !1);
        }
        coordinateToPosition(e) {
          const t = this.get("renderer");
          return t.toAxisPosition(e / t.axisLength());
        }
        toAxisPosition(e) {
          return this.get("renderer").toAxisPosition(e);
        }
        toGlobalPosition(e) {
          return this.get("renderer").toGlobalPosition(e);
        }
        fixPosition(e) {
          return this.get("renderer").fixPosition(e);
        }
        shouldGap(e, t, i, s) {
          return !1;
        }
        createAxisRange(e) {
          return this.axisRanges.push(e);
        }
        _groupSeriesData(e) {}
        getCellWidthPosition() {
          return 0.05;
        }
      }
      Object.defineProperty(u, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Axis",
      }),
        Object.defineProperty(u, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.w.classNames.concat([u.className]),
        });
    },
    2586: function (e, t, i) {
      i.d(t, {
        _: function () {
          return o;
        },
      });
      var s = i(6331),
        a = i(256);
      class o extends s.JH {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "axis", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        _beforeChanged() {
          super._beforeChanged();
          const e = this.get("sprite");
          if (
            (this.isDirty("sprite") &&
              e &&
              (e.setAll({ position: "absolute", role: "figure" }),
              this._disposers.push(e)),
            this.isDirty("location"))
          ) {
            const t = e.dataItem;
            this.axis && e && t && this.axis._prepareDataItem(t);
          }
        }
        _dispose() {
          const e = this.axis;
          e &&
            a.each(e._bullets, (t, i) => {
              i.uid == this.uid && delete e._bullets[t];
            }),
            super._dispose();
        }
      }
      Object.defineProperty(o, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AxisBullet",
      }),
        Object.defineProperty(o, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.JH.classNames.concat([o.className]),
        });
    },
    6293: function (e, t, i) {
      i.d(t, {
        k: function () {
          return a;
        },
      });
      var s = i(962);
      class a extends s._ {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_tickPoints", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            });
        }
      }
      Object.defineProperty(a, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AxisLabel",
      }),
        Object.defineProperty(a, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s._.classNames.concat([a.className]),
        });
    },
    9084: function (e, t, i) {
      i.d(t, {
        p: function () {
          return a;
        },
      });
      var s = i(815);
      class a extends s.x {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_tickPoints", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            });
        }
      }
      Object.defineProperty(a, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AxisLabelRadial",
      }),
        Object.defineProperty(a, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.x.classNames.concat([a.className]),
        });
    },
    6275: function (e, t, i) {
      i.d(t, {
        Y: function () {
          return c;
        },
      });
      var s = i(1479),
        a = i(5769),
        o = i(7144),
        n = i(4714),
        r = i(8943),
        l = i(6293),
        h = i(7652);
      class c extends s.T {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_axisLength", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 100,
            }),
            Object.defineProperty(this, "_start", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_end", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_inversed", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_minSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "chart", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_lc", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_ls", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_thumbDownPoint", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_downStart", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_downEnd", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "ticks", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new o.o(a.YS.new({}), () =>
                  n.T._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.ticks.template.get("themeTags", []),
                        this.get("themeTags", [])
                      ),
                    },
                    [this.ticks.template]
                  )
                )
              ),
            }),
            Object.defineProperty(this, "grid", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new o.o(a.YS.new({}), () =>
                  r.r._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.grid.template.get("themeTags", []),
                        this.get("themeTags", [])
                      ),
                    },
                    [this.grid.template]
                  )
                )
              ),
            }),
            Object.defineProperty(this, "axisFills", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new o.o(a.YS.new({}), () =>
                  s.T._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.axisFills.template.get("themeTags", [
                          "axis",
                          "fill",
                        ]),
                        this.get("themeTags", [])
                      ),
                    },
                    [this.axisFills.template]
                  )
                )
              ),
            }),
            Object.defineProperty(this, "labels", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new o.o(a.YS.new({}), () =>
                  l.k._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.labels.template.get("themeTags", []),
                        this.get("themeTags", [])
                      ),
                    },
                    [this.labels.template]
                  )
                )
              ),
            }),
            Object.defineProperty(this, "axis", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "thumb", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        makeTick(e, t) {
          const i = this.ticks.make();
          return (
            i._setDataItem(e),
            e.setRaw("tick", i),
            i.set("themeTags", h.mergeTags(i.get("themeTags"), t)),
            this.axis.labelsContainer.children.push(i),
            this.ticks.push(i),
            i
          );
        }
        makeGrid(e, t) {
          const i = this.grid.make();
          return (
            i._setDataItem(e),
            e.setRaw("grid", i),
            i.set("themeTags", h.mergeTags(i.get("themeTags"), t)),
            this.axis.gridContainer.children.push(i),
            this.grid.push(i),
            i
          );
        }
        makeAxisFill(e, t) {
          const i = this.axisFills.make();
          return (
            i._setDataItem(e),
            i.set("themeTags", h.mergeTags(i.get("themeTags"), t)),
            this.axis.gridContainer.children.push(i),
            e.setRaw("axisFill", i),
            this.axisFills.push(i),
            i
          );
        }
        makeLabel(e, t) {
          const i = this.labels.make();
          return (
            i.set("themeTags", h.mergeTags(i.get("themeTags"), t)),
            this.axis.labelsContainer.children.moveValue(i, 0),
            i._setDataItem(e),
            e.setRaw("label", i),
            this.labels.push(i),
            i
          );
        }
        axisLength() {
          return 0;
        }
        gridCount() {
          return this.axisLength() / this.get("minGridDistance", 50);
        }
        _updatePositions() {}
        _afterNew() {
          super._afterNew(), this.set("isMeasured", !1);
          const e = this.thumb;
          e &&
            (this._disposers.push(
              e.events.on("pointerdown", (e) => {
                this._handleThumbDown(e);
              })
            ),
            this._disposers.push(
              e.events.on("globalpointerup", (e) => {
                this._handleThumbUp(e);
              })
            ),
            this._disposers.push(
              e.events.on("globalpointermove", (e) => {
                this._handleThumbMove(e);
              })
            ));
        }
        _beforeChanged() {
          super._beforeChanged(),
            this.isDirty("minGridDistance") &&
              this.root.events.once("frameended", () => {
                this.axis.markDirtySize();
              });
        }
        _changed() {
          if ((super._changed(), this.isDirty("pan"))) {
            const e = this.thumb;
            if (e) {
              const t = this.axis.labelsContainer,
                i = this.get("pan");
              "zoom" == i
                ? t.children.push(e)
                : "none" == i && t.children.removeValue(e);
            }
          }
        }
        _handleThumbDown(e) {
          this._thumbDownPoint = this.toLocal(e.point);
          const t = this.axis;
          (this._downStart = t.get("start")), (this._downEnd = t.get("end"));
        }
        _handleThumbUp(e) {
          this._thumbDownPoint = void 0;
        }
        _handleThumbMove(e) {
          const t = this._thumbDownPoint;
          if (t) {
            const i = this.toLocal(e.point),
              s = this._downStart,
              a = this._downEnd,
              o =
                ((this._getPan(i, t) * Math.min(1, a - s)) / 2) *
                this.get("panSensitivity", 1);
            this.axis.zoom(s - o, a + o, 0);
          }
        }
        _getPan(e, t) {
          return 0;
        }
        positionToCoordinate(e) {
          return this._inversed
            ? (this._end - e) * this._axisLength
            : (e - this._start) * this._axisLength;
        }
        updateTooltipBounds(e) {}
        _updateSize() {
          this.markDirty(), (this._clear = !0);
        }
        toAxisPosition(e) {
          const t = this._start || 0,
            i = this._end || 1;
          return (e *= i - t), this.get("inversed") ? i - e : t + e;
        }
        toGlobalPosition(e) {
          const t = this._start || 0,
            i = this._end || 1;
          return this.get("inversed") ? (e = i - e) : (e -= t), e / (i - t);
        }
        fixPosition(e) {
          return this.get("inversed") ? 1 - e : e;
        }
        _updateLC() {}
        toggleVisibility(e, t, i, s) {
          let a = this.axis;
          const o = a.get("start", 0),
            n = a.get("end", 1);
          t < o + (n - o) * (i - 1e-4) || t > o + (n - o) * (s + 1e-4)
            ? e.setPrivate("visible", !1)
            : e.setPrivate("visible", !0);
        }
        _positionTooltip(e, t) {
          const i = this.chart;
          i &&
            (e.set("pointTo", this._display.toGlobal(t)),
            i.inPlot(t) || e.hide());
        }
        processAxis() {}
      }
      Object.defineProperty(c, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AxisRenderer",
      }),
        Object.defineProperty(c, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.T.classNames.concat([c.className]),
        });
    },
    6284: function (e, t, i) {
      i.d(t, {
        n: function () {
          return l;
        },
      });
      var s = i(6275),
        a = i(6245),
        o = i(5040),
        n = i(7652),
        r = i(7142);
      class l extends s.Y {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "thumb", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r.A.new(this._root, {
                width: a.AQ,
                isMeasured: !1,
                themeTags: ["axis", "x", "thumb"],
              }),
            });
        }
        _afterNew() {
          (this._settings.themeTags = n.mergeTags(this._settings.themeTags, [
            "renderer",
            "x",
          ])),
            super._afterNew(),
            this.setPrivateRaw("letter", "X");
          const e = this.grid.template;
          e.set("height", a.AQ),
            e.set("width", 0),
            e.set("draw", (e, t) => {
              e.moveTo(0, 0), e.lineTo(0, t.height());
            }),
            this.set("draw", (e, t) => {
              e.moveTo(0, 0), e.lineTo(t.width(), 0);
            });
        }
        _changed() {
          super._changed();
          const e = this.axis;
          e.ghostLabel.setPrivate("visible", !this.get("inside")),
            e.ghostLabel.set("x", -1e3);
          const t = "opposite",
            i = "inside";
          if (this.isDirty(t) || this.isDirty(i)) {
            const s = this.chart,
              a = e.children;
            if ((this.get(i) ? e.addTag(i) : e.removeTag(i), s)) {
              if (this.get(t)) {
                const i = s.topAxesContainer.children;
                -1 == i.indexOf(e) && i.insertIndex(0, e),
                  e.addTag(t),
                  a.moveValue(this);
              } else {
                const i = s.bottomAxesContainer.children;
                -1 == i.indexOf(e) && i.moveValue(e),
                  e.removeTag(t),
                  a.moveValue(this, 0);
              }
              e.ghostLabel._applyThemes(),
                this.labels.each((e) => {
                  e._applyThemes();
                }),
                this.root._markDirtyRedraw();
            }
            e.markDirtySize();
          }
          this.thumb.setPrivate("height", e.labelsContainer.height());
        }
        _getPan(e, t) {
          return (t.x - e.x) / this.width();
        }
        toAxisPosition(e) {
          const t = this._start || 0,
            i = this._end || 1;
          return (
            (e = ((e -= this._ls) * (i - t)) / this._lc),
            this.get("inversed") ? i - e : t + e
          );
        }
        toGlobalPosition(e) {
          const t = this._start || 0,
            i = this._end || 1;
          return (
            this.get("inversed") ? (e = i - e) : (e -= t),
            (e = (e / (i - t)) * this._lc) + this._ls
          );
        }
        _updateLC() {
          const e = this.axis,
            t = e.parent;
          if (t) {
            const i = t.innerWidth();
            (this._lc = this.axisLength() / i),
              (this._ls = (e.x() - t.get("paddingLeft", 0)) / i);
          }
        }
        _updatePositions() {
          const e = this.axis,
            t =
              e.x() -
              n.relativeToValue(e.get("centerX", 0), e.width()) -
              e.parent.get("paddingLeft", 0);
          e.gridContainer.set("x", t),
            e.topGridContainer.set("x", t),
            e.bulletsContainer.set("y", this.y());
          const i = e.chart;
          if (i) {
            const t = i.plotContainer,
              s = e.axisHeader;
            let a = e.get("marginLeft", 0),
              o = e.x() - a;
            const n = e.parent;
            n && (o -= n.get("paddingLeft", 0)),
              s.children.length > 0
                ? ((a = e.axisHeader.width()), e.set("marginLeft", a + 1))
                : s.set("width", a),
              s.setAll({ x: o, y: -1, height: t.height() + 2 });
          }
        }
        processAxis() {
          super.processAxis();
          const e = this.axis;
          null == e.get("width") && e.set("width", a.AQ);
          const t = this._root.verticalLayout;
          e.set("layout", t),
            e.labelsContainer.set("width", a.AQ),
            e.axisHeader.setAll({ layout: t });
        }
        axisLength() {
          return this.axis.width();
        }
        positionToPoint(e) {
          return { x: this.positionToCoordinate(e), y: 0 };
        }
        updateTick(e, t, i, s) {
          if (e) {
            o.isNumber(t) || (t = 0);
            let n = 0.5;
            (n =
              o.isNumber(s) && s > 1
                ? e.get("multiLocation", n)
                : e.get("location", n)),
              o.isNumber(i) && i != t && (t += (i - t) * n),
              e.set("x", this.positionToCoordinate(t));
            let r = e.get("length", 0);
            const l = e.get("inside", this.get("inside", !1));
            this.get("opposite")
              ? (e.set("y", a.AQ), l || (r *= -1))
              : (e.set("y", 0), l && (r *= -1)),
              e.set("draw", (e) => {
                e.moveTo(0, 0), e.lineTo(0, r);
              }),
              this.toggleVisibility(
                e,
                t,
                e.get("minPosition", 0),
                e.get("maxPosition", 1)
              );
          }
        }
        updateLabel(e, t, i, s) {
          if (e) {
            let n = 0.5;
            (n =
              o.isNumber(s) && s > 1
                ? e.get("multiLocation", n)
                : e.get("location", n)),
              o.isNumber(t) || (t = 0);
            const r = e.get("inside", this.get("inside", !1));
            this.get("opposite")
              ? r
                ? (e.set("position", "absolute"), e.set("y", 0))
                : (e.set("position", "relative"), e.set("y", a.AQ))
              : r
              ? (e.set("y", 0), e.set("position", "absolute"))
              : (e.set("y", void 0), e.set("position", "relative")),
              o.isNumber(i) && i != t && (t += (i - t) * n),
              e.set("x", this.positionToCoordinate(t)),
              this.toggleVisibility(
                e,
                t,
                e.get("minPosition", 0),
                e.get("maxPosition", 1)
              );
          }
        }
        updateGrid(e, t, i) {
          if (e) {
            o.isNumber(t) || (t = 0);
            let s = e.get("location", 0.5);
            o.isNumber(i) && i != t && (t += (i - t) * s),
              e.set("x", this.positionToCoordinate(t)),
              this.toggleVisibility(e, t, 0, 1);
          }
        }
        updateBullet(e, t, i) {
          if (e) {
            const s = e.get("sprite");
            if (s) {
              o.isNumber(t) || (t = 0);
              let a = e.get("location", 0.5);
              o.isNumber(i) && i != t && (t += (i - t) * a);
              let n = this.axis.roundAxisPosition(t, a),
                r = this.axis._bullets[n],
                l = -1;
              if ((this.get("opposite") && (l = 1), e.get("stacked")))
                if (r) {
                  let e = r.get("sprite");
                  e && s.set("y", e.y() + e.height() * l);
                } else s.set("y", 0);
              (this.axis._bullets[n] = e),
                s.set("x", this.positionToCoordinate(t)),
                this.toggleVisibility(s, t, 0, 1);
            }
          }
        }
        updateFill(e, t, i) {
          if (e) {
            o.isNumber(t) || (t = 0), o.isNumber(i) || (i = 1);
            let s = this.positionToCoordinate(t),
              a = this.positionToCoordinate(i);
            this.fillDrawMethod(e, s, a);
          }
        }
        fillDrawMethod(e, t, i) {
          e.set("draw", (e) => {
            const s = this.axis.gridContainer.height(),
              a = this.width();
            i < t && ([i, t] = [t, i]),
              t > a ||
                i < 0 ||
                (e.moveTo(t, 0),
                e.lineTo(i, 0),
                e.lineTo(i, s),
                e.lineTo(t, s),
                e.lineTo(t, 0));
          });
        }
        positionTooltip(e, t) {
          this._positionTooltip(e, { x: this.positionToCoordinate(t), y: 0 });
        }
        updateTooltipBounds(e) {
          const t = this.get("inside"),
            i = 1e5;
          let s = this._display.toGlobal({ x: 0, y: 0 }),
            a = s.x,
            o = 0,
            r = this.axisLength(),
            l = i,
            h = "up";
          this.get("opposite")
            ? t
              ? ((h = "up"), (o = s.y), (l = i))
              : ((h = "down"), (o = s.y - i), (l = i))
            : t
            ? ((h = "down"), (o = s.y - i), (l = i))
            : ((h = "up"), (o = s.y), (l = i));
          const c = { left: a, right: a + r, top: o, bottom: o + l },
            u = e.get("bounds");
          n.sameBounds(c, u) ||
            (e.set("bounds", c), e.set("pointerOrientation", h));
        }
      }
      Object.defineProperty(l, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AxisRendererX",
      }),
        Object.defineProperty(l, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.Y.classNames.concat([l.className]),
        });
    },
    7909: function (e, t, i) {
      i.d(t, {
        j: function () {
          return l;
        },
      });
      var s = i(6275),
        a = i(6245),
        o = i(5040),
        n = i(7652),
        r = i(7142);
      class l extends s.Y {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_downY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "thumb", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r.A.new(this._root, {
                height: a.AQ,
                isMeasured: !1,
                themeTags: ["axis", "y", "thumb"],
              }),
            });
        }
        _afterNew() {
          (this._settings.themeTags = n.mergeTags(this._settings.themeTags, [
            "renderer",
            "y",
          ])),
            this._settings.opposite &&
              this._settings.themeTags.push("opposite"),
            super._afterNew(),
            this.setPrivateRaw("letter", "Y");
          const e = this.grid.template;
          e.set("width", a.AQ),
            e.set("height", 0),
            e.set("draw", (e, t) => {
              e.moveTo(0, 0), e.lineTo(t.width(), 0);
            }),
            this.set("draw", (e, t) => {
              e.moveTo(0, 0), e.lineTo(0, t.height());
            });
        }
        _getPan(e, t) {
          return (e.y - t.y) / this.height();
        }
        _changed() {
          super._changed();
          const e = this.axis;
          e.ghostLabel.setPrivate("visible", !this.get("inside")),
            e.ghostLabel.set("y", -1e3);
          const t = this.thumb,
            i = "opposite",
            s = "inside",
            a = this.chart;
          if (this.isDirty(i) || this.isDirty(s)) {
            const t = e.children;
            if ((this.get(s) ? e.addTag(s) : e.removeTag(s), a)) {
              if (this.get(i)) {
                const s = a.rightAxesContainer.children;
                -1 == s.indexOf(e) && s.moveValue(e, 0),
                  e.addTag(i),
                  t.moveValue(this, 0);
              } else {
                const s = a.leftAxesContainer.children;
                -1 == s.indexOf(e) && s.moveValue(e),
                  e.removeTag(i),
                  t.moveValue(this);
              }
              e.ghostLabel._applyThemes(),
                this.labels.each((e) => {
                  e._applyThemes();
                }),
                this.root._markDirtyRedraw();
            }
            e.markDirtySize();
          }
          const o = e.labelsContainer.width();
          a && (this.get(i) ? t.set("centerX", 0) : t.set("centerX", o)),
            t.setPrivate("width", o);
        }
        processAxis() {
          super.processAxis();
          const e = this.axis;
          null == e.get("height") && e.set("height", a.AQ);
          const t = this._root.horizontalLayout;
          e.set("layout", t),
            e.labelsContainer.set("height", a.AQ),
            e.axisHeader.set("layout", t);
        }
        _updatePositions() {
          const e = this.axis,
            t = e.y() - n.relativeToValue(e.get("centerY", 0), e.height());
          e.gridContainer.set("y", t),
            e.topGridContainer.set("y", t),
            e.bulletsContainer.set("x", this.x());
          const i = e.chart;
          if (i) {
            const t = i.plotContainer,
              s = e.axisHeader;
            let a = e.get("marginTop", 0);
            s.children.length > 0
              ? ((a = e.axisHeader.height()), e.set("marginTop", a + 1))
              : s.set("height", a),
              s.setAll({ y: e.y() - a, x: -1, width: t.width() + 2 });
          }
        }
        axisLength() {
          return this.axis.innerHeight();
        }
        positionToPoint(e) {
          return { x: 0, y: this.positionToCoordinate(e) };
        }
        updateLabel(e, t, i, s) {
          if (e) {
            o.isNumber(t) || (t = 0);
            let a = 0.5;
            a =
              o.isNumber(s) && s > 1
                ? e.get("multiLocation", a)
                : e.get("location", a);
            const n = this.get("opposite"),
              r = e.get("inside", this.get("inside", !1));
            n
              ? (e.set("x", 0),
                r
                  ? e.set("position", "absolute")
                  : e.set("position", "relative"))
              : r
              ? (e.set("x", 0), e.set("position", "absolute"))
              : (e.set("x", void 0), e.set("position", "relative")),
              o.isNumber(i) && i != t && (t += (i - t) * a),
              e.set("y", this.positionToCoordinate(t)),
              this.toggleVisibility(
                e,
                t,
                e.get("minPosition", 0),
                e.get("maxPosition", 1)
              );
          }
        }
        updateGrid(e, t, i) {
          if (e) {
            o.isNumber(t) || (t = 0);
            let s = e.get("location", 0.5);
            o.isNumber(i) && i != t && (t += (i - t) * s),
              e.set("y", this.positionToCoordinate(t)),
              this.toggleVisibility(e, t, 0, 1);
          }
        }
        updateTick(e, t, i, s) {
          if (e) {
            o.isNumber(t) || (t = 0);
            let a = 0.5;
            (a =
              o.isNumber(s) && s > 1
                ? e.get("multiLocation", a)
                : e.get("location", a)),
              o.isNumber(i) && i != t && (t += (i - t) * a),
              e.set("y", this.positionToCoordinate(t));
            let n = e.get("length", 0);
            const r = e.get("inside", this.get("inside", !1));
            this.get("opposite")
              ? (e.set("x", 0), r && (n *= -1))
              : r || (n *= -1),
              e.set("draw", (e) => {
                e.moveTo(0, 0), e.lineTo(n, 0);
              }),
              this.toggleVisibility(
                e,
                t,
                e.get("minPosition", 0),
                e.get("maxPosition", 1)
              );
          }
        }
        updateBullet(e, t, i) {
          if (e) {
            const s = e.get("sprite");
            if (s) {
              o.isNumber(t) || (t = 0);
              let a = e.get("location", 0.5);
              o.isNumber(i) && i != t && (t += (i - t) * a);
              let n = this.axis.roundAxisPosition(t, a),
                r = this.axis._bullets[n],
                l = 1;
              if ((this.get("opposite") && (l = -1), e.get("stacked")))
                if (r) {
                  let e = r.get("sprite");
                  e && s.set("x", e.x() + e.width() * l);
                } else s.set("x", 0);
              (this.axis._bullets[n] = e),
                s.set("y", this.positionToCoordinate(t)),
                this.toggleVisibility(s, t, 0, 1);
            }
          }
        }
        updateFill(e, t, i) {
          if (e) {
            o.isNumber(t) || (t = 0), o.isNumber(i) || (i = 1);
            let s = this.positionToCoordinate(t),
              a = this.positionToCoordinate(i);
            this.fillDrawMethod(e, s, a);
          }
        }
        fillDrawMethod(e, t, i) {
          e.set("draw", (e) => {
            const s = this.axis.gridContainer.width(),
              a = this.height();
            i < t && ([i, t] = [t, i]),
              t > a ||
                i < 0 ||
                (e.moveTo(0, t),
                e.lineTo(s, t),
                e.lineTo(s, i),
                e.lineTo(0, i),
                e.lineTo(0, t));
          });
        }
        positionToCoordinate(e) {
          return this._inversed
            ? (e - this._start) * this._axisLength
            : (this._end - e) * this._axisLength;
        }
        positionTooltip(e, t) {
          this._positionTooltip(e, { x: 0, y: this.positionToCoordinate(t) });
        }
        updateTooltipBounds(e) {
          const t = this.get("inside"),
            i = 1e5;
          let s = this._display.toGlobal({ x: 0, y: 0 }),
            a = s.y,
            o = 0,
            r = this.axisLength(),
            l = i,
            h = "right";
          this.get("opposite")
            ? t
              ? ((h = "right"), (o = s.x - i), (l = i))
              : ((h = "left"), (o = s.x), (l = i))
            : t
            ? ((h = "left"), (o = s.x), (l = i))
            : ((h = "right"), (o = s.x - i), (l = i));
          const c = { left: o, right: o + l, top: a, bottom: a + r },
            u = e.get("bounds");
          n.sameBounds(c, u) ||
            (e.set("bounds", c), e.set("pointerOrientation", h));
        }
        _updateLC() {
          const e = this.axis,
            t = e.parent;
          if (t) {
            const i = t.innerHeight();
            (this._lc = this.axisLength() / i), (this._ls = e.y() / i);
          }
        }
        toAxisPosition(e) {
          const t = this._start || 0,
            i = this._end || 1;
          return (
            (e = ((e -= this._ls) * (i - t)) / this._lc),
            this.get("inversed") ? t + e : i - e
          );
        }
        toGlobalPosition(e) {
          const t = this._start || 0,
            i = this._end || 1;
          return (
            this.get("inversed") ? (e -= t) : (e = i - e),
            (e = (e / (i - t)) * this._lc) + this._ls
          );
        }
        fixPosition(e) {
          return this.get("inversed") ? e : 1 - e;
        }
      }
      Object.defineProperty(l, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AxisRendererY",
      }),
        Object.defineProperty(l, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.Y.classNames.concat([l.className]),
        });
    },
    4714: function (e, t, i) {
      i.d(t, {
        T: function () {
          return a;
        },
      });
      var s = i(2438);
      class a extends s.d {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_tickPoints", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            });
        }
      }
      Object.defineProperty(a, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AxisTick",
      }),
        Object.defineProperty(a, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.d.classNames.concat([a.className]),
        });
    },
    5638: function (e, t, i) {
      i.d(t, {
        S: function () {
          return d;
        },
      });
      var s = i(9361),
        a = i(7261),
        o = i(5040),
        n = i(751),
        r = i(3540),
        l = i(5071),
        h = i(256),
        c = i(7652),
        u = i(1926);
      class d extends a.m {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_dataGrouped", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_seriesDataGrouped", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_groupingCalculated", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_intervalDuration", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_baseDuration", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_intervalMax", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "_intervalMin", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            });
        }
        _afterNew() {
          (this._settings.themeTags = c.mergeTags(this._settings.themeTags, [
            "axis",
          ])),
            super._afterNew(),
            this._setBaseInterval(this.get("baseInterval")),
            this.on("baseInterval", () => {
              this._setBaseInterval(this.get("baseInterval"));
            });
        }
        _setBaseInterval(e) {
          this.setPrivateRaw("baseInterval", e),
            (this._baseDuration = u.getIntervalDuration(e));
        }
        _fixZoomFactor() {
          const e = this.get("maxZoomFactor");
          null != e && e != 1 / 0
            ? this.setPrivateRaw("maxZoomFactor", e)
            : this.setPrivateRaw(
                "maxZoomFactor",
                Math.round(
                  (this.getPrivate("max", 0) - this.getPrivate("min", 0)) /
                    this.baseMainDuration()
                )
              );
        }
        _groupData() {
          const e = this.getPrivate("min"),
            t = this.getPrivate("max");
          if (o.isNumber(e) && o.isNumber(t)) {
            this._fixZoomFactor();
            const e = this.getPrivate("groupInterval");
            if (
              (e
                ? this._setBaseInterval(e)
                : this._setBaseInterval(this.get("baseInterval")),
              this.isDirty("groupInterval"))
            ) {
              let e = this.get("groupInterval");
              e &&
                (this.setRaw("groupIntervals", [e]), this._handleRangeChange());
            }
            if (this.isDirty("groupData") && !this._dataGrouped) {
              if (this.get("groupData"))
                l.each(this.series, (e) => {
                  this._groupSeriesData(e);
                }),
                  this._handleRangeChange();
              else {
                let e = this.get("baseInterval"),
                  t = e.timeUnit + e.count;
                l.each(this.series, (e) => {
                  e.setDataSet(t), e.resetGrouping();
                }),
                  this._setBaseInterval(e),
                  this.setPrivateRaw("groupInterval", void 0),
                  this.markDirtyExtremes();
              }
              this._dataGrouped = !0;
            }
          }
        }
        _groupSeriesData(e) {
          if (this.get("groupData") && !e.get("groupDataDisabled")) {
            (this._dataGrouped = !0), (this._seriesDataGrouped = !0);
            let t = [],
              i = this.baseMainDuration(),
              a = this.get("groupIntervals");
            l.each(a, (e) => {
              u.getIntervalDuration(e) > i && t.push(e);
            }),
              (e._dataSets = {});
            const n =
              this.getPrivate("name") +
              this.get("renderer").getPrivate("letter");
            let r;
            const c = e.get("baseAxis");
            e.get("xAxis") === c
              ? (r = e._valueYFields)
              : e.get("yAxis") === c && (r = e._valueXFields);
            let d = e._mainDataItems,
              g = this.get("baseInterval"),
              m = g.timeUnit + g.count;
            e._dataSets[m] = d;
            const p = e.get("groupDataCallback");
            let b = e.get("groupDataWithOriginals", !1);
            p && (b = !0),
              l.each(t, (t) => {
                let i,
                  a = -1 / 0,
                  c = t.timeUnit + t.count;
                e._dataSets[c] = [];
                let g = {},
                  m = {},
                  _ = {},
                  x = {};
                l.each(r, (t) => {
                  (g[t] = 0),
                    (m[t] = 0),
                    (_[t] = e.get(t + "Grouped")),
                    (x[t] = t + "Working");
                });
                let v,
                  f,
                  y = u.getDuration(t.timeUnit);
                d[0] && (v = d[0].get(n)),
                  l.each(d, (d) => {
                    let P,
                      w = d.get(n),
                      D = u.roun(w, t.timeUnit, t.count, this._root, v);
                    a < D - y / 24
                      ? ((P = h.copy(d.dataContext)),
                        (i = new s.z(e, P, e._makeDataItem(P))),
                        i.setRaw(n, D),
                        e._dataSets[c].push(i),
                        l.each(r, (e) => {
                          let t = d.get(e);
                          o.isNumber(t)
                            ? (i.setRaw(e, t),
                              i.setRaw(x[e], t),
                              (m[e] = 1),
                              (g[e] = t))
                            : ((g[e] = 0), (m[e] = 0));
                        }),
                        b && i.set("originals", [d]),
                        p && f && p(f, t),
                        (f = i))
                      : (l.each(r, (e) => {
                          let t = _[e],
                            s = d.get(e);
                          if (null != s) {
                            let a = i.get(e);
                            switch (t) {
                              case "close":
                                i.setRaw(e, s);
                                break;
                              case "sum":
                                i.setRaw(e, a + s);
                                break;
                              case "open":
                                break;
                              case "low":
                                s < a && i.setRaw(e, s);
                                break;
                              case "high":
                                s > a && i.setRaw(e, s);
                                break;
                              case "average":
                                m[e]++, (g[e] += s);
                                let t = g[e] / m[e];
                                i.setRaw(e, t);
                                break;
                              case "extreme":
                                Math.abs(s) > Math.abs(a) && i.setRaw(e, s);
                            }
                            i.setRaw(x[e], i.get(e));
                            let o = h.copy(d.dataContext);
                            (o[n] = D), (i.dataContext = o);
                          }
                        }),
                        b && i.get("originals").push(d)),
                      (a = D);
                  }),
                  p && f && p(f, t);
              }),
              e._dataSetId && e.setDataSet(e._dataSetId),
              this.markDirtySize(),
              this._seriesAdded &&
                this._root.events.once("frameended", () => {
                  this.markDirtySize();
                });
          }
        }
        _clearDirty() {
          super._clearDirty(),
            (this._groupingCalculated = !1),
            (this._dataGrouped = !1);
        }
        getGroupInterval(e) {
          let t = this.get("baseInterval"),
            i = u.chooseInterval(
              0,
              e,
              this.get("groupCount", 1 / 0),
              this.get("groupIntervals")
            );
          return (
            u.getIntervalDuration(i) < u.getIntervalDuration(t) &&
              (i = Object.assign({}, t)),
            i
          );
        }
        getIntervalMax(e) {
          return this._intervalMax[e.timeUnit + e.count];
        }
        getIntervalMin(e) {
          return this._intervalMin[e.timeUnit + e.count];
        }
        _handleRangeChange() {
          super._handleRangeChange();
          let e = Math.round(this.getPrivate("selectionMin")),
            t = Math.round(this.getPrivate("selectionMax"));
          if (o.isNumber(e) && o.isNumber(t)) {
            if (
              (0 == this.get("endLocation") && (t += 1),
              this.get("groupData") && !this._groupingCalculated)
            ) {
              this._groupingCalculated = !0;
              let i = this.get("groupInterval"),
                s = this.getPrivate("groupInterval"),
                a =
                  t -
                  e +
                  (this.get("startLocation", 0) +
                    (1 - this.get("endLocation", 1)) * this.baseDuration());
              if (s) {
                let e = u.getIntervalDuration(s);
                a = Math.ceil(a / e) * e;
              }
              if (
                (i || (i = this.getGroupInterval(a)),
                i &&
                  (!s ||
                    s.timeUnit !== i.timeUnit ||
                    s.count !== i.count ||
                    this._seriesDataGrouped))
              ) {
                (this._seriesDataGrouped = !1),
                  this.setPrivateRaw("groupInterval", i),
                  this._setBaseInterval(i);
                let e = i.timeUnit + i.count;
                l.each(this.series, (t) => {
                  t.get("baseAxis") === this && t.setDataSet(e);
                }),
                  this.markDirtyExtremes(),
                  this._root.events.once("frameended", () => {
                    this._root.events.once("frameended", () => {
                      const e = "groupintervalchanged";
                      this.events.isEnabled(e) &&
                        this.events.dispatch(e, { type: e, target: this });
                    });
                  });
              }
            }
            l.each(this.series, (i) => {
              if (i.get("baseAxis") === this) {
                let s =
                    this.getPrivate("name") +
                    this.get("renderer").getPrivate("letter"),
                  a = l.getFirstSortedIndex(i.dataItems, (t) =>
                    r.qu(t.get(s), e)
                  ).index;
                a > 0 && (a -= 1),
                  (t += this.baseDuration() * (1 - this.get("endLocation", 1)));
                let o = l.getSortedIndex(i.dataItems, (e) =>
                    r.qu(e.get(s), t)
                  ).index,
                  n = o;
                n > 1 && n--;
                const h = i.dataItems[a],
                  c = i.dataItems[n];
                let u, d;
                h && (d = h.get(s)), c && (u = c.get(s));
                let g = !1;
                null != u && null != d && (u < e || d > t) && (g = !0),
                  i.setPrivate("outOfSelection", g),
                  i.setPrivate("startIndex", a),
                  i.setPrivate("adjustedStartIndex", i._adjustStartIndex(a)),
                  i.setPrivate("endIndex", o),
                  this.root.events.once("frameended", () => {
                    i._markDirtyPrivateKey("adjustedStartIndex");
                  });
              }
            });
          }
        }
        _adjustMinMax(e, t, i, s) {
          return { min: e, max: t, step: (t - e) / i };
        }
        intervalDuration() {
          return this._intervalDuration;
        }
        _saveMinMax(e, t) {
          let i = this.getPrivate("groupInterval");
          i || (i = this.get("baseInterval"));
          let s = i.timeUnit + i.count;
          (this._intervalMin[s] = e), (this._intervalMax[s] = t);
        }
        _getM(e) {
          return "month" == e || "year" == e || "day" == e ? 1.05 : 1.01;
        }
        _getMinorInterval(e) {
          var t;
          let i,
            s = e.count,
            a = e.timeUnit;
          return (
            s > 1 &&
              (10 == s || 15 == s
                ? (s = 5)
                : 12 == s
                ? (s = 2)
                : 6 == s
                ? (s = 1)
                : 30 == s
                ? (s = 10)
                : s < 10 && (s = 1),
              (i = { timeUnit: a, count: s })),
            "week" == a &&
              (i =
                "week" !=
                (null === (t = this.getPrivate("baseInterval")) || void 0 === t
                  ? void 0
                  : t.timeUnit)
                  ? { timeUnit: "day", count: 1 }
                  : { timeUnit: "week", count: 1 }),
            i
          );
        }
        _prepareAxisItems() {
          const e = this.getPrivate("min"),
            t = this.getPrivate("max");
          if (o.isNumber(e) && o.isNumber(t)) {
            const t = this._root,
              i = Math.round(this.getPrivate("selectionMin")),
              a = Math.round(this.getPrivate("selectionMax")),
              n = this.get("renderer"),
              r = this.getPrivate("baseInterval");
            let h = i,
              c = 0;
            const d = this.get("gridIntervals");
            let g = u.chooseInterval(0, a - i, n.gridCount(), d);
            u.getIntervalDuration(g) < this.baseDuration() &&
              (g = Object.assign({}, r));
            const m = u.getIntervalDuration(g);
            this._intervalDuration = m;
            const p = u.getNextUnit(g.timeUnit),
              b = t.utc,
              _ = t.timezone;
            h = u.roun(i - m, g.timeUnit, g.count, t, e);
            let x,
              v = h - m;
            const f = this.get("dateFormats");
            this.setPrivateRaw("gridInterval", g);
            const y = n.get("minorLabelsEnabled"),
              P = n.get("minorGridEnabled", y);
            let w,
              D = 0;
            P &&
              ((w = this._getMinorInterval(g)), (D = u.getIntervalDuration(w)));
            let T = 0;
            for (; h < a + m; ) {
              let e;
              this.dataItems.length < c + 1
                ? ((e = new s.z(this, void 0, {})),
                  this._dataItems.push(e),
                  this.processDataItem(e))
                : (e = this.dataItems[c]),
                this._createAssets(e, []),
                this._toggleDataItem(e, !0),
                e.setRaw("value", h),
                e.setRaw("labelEndValue", void 0);
              let i =
                h + u.getDuration(g.timeUnit, g.count * this._getM(g.timeUnit));
              (i = u.roun(i, g.timeUnit, 1, t)), e.setRaw("endValue", i);
              let a = new Date(h);
              (x = f[g.timeUnit]),
                p &&
                  this.get("markUnitChange") &&
                  o.isNumber(v) &&
                  "year" != g.timeUnit &&
                  u.checkChange(h, v, p, b, _) &&
                  (x = this.get("periodChangeDateFormats")[g.timeUnit]);
              const n = e.get("label");
              n && n.set("text", t.dateFormatter.format(a, x));
              let r = g.count;
              if (("week" == g.timeUnit && e.setRaw("labelEndValue", h), P)) {
                r = 1;
                let i = g.timeUnit;
                "week" == i && (i = "day");
                let s = h + u.getDuration(i, this._getM(i));
                (s = u.roun(s, i, 1, t)), e.setRaw("labelEndValue", s);
              }
              if ((this._prepareDataItem(e, r), (v = h), (h = i), w)) {
                const e = w.timeUnit,
                  i = w.count,
                  a = this._getM(e);
                let o,
                  n = u.roun(v + D * a, e, i, t, v),
                  r = this.get("minorDateFormats", this.get("dateFormats"));
                for (; n < h - 0.01 * D; ) {
                  let l;
                  this.minorDataItems.length < T + 1
                    ? ((l = new s.z(this, void 0, {})),
                      this.minorDataItems.push(l),
                      this.processDataItem(l))
                    : (l = this.minorDataItems[T]),
                    this._createAssets(l, ["minor"], !0),
                    this._toggleDataItem(l, !0),
                    l.setRaw("value", n);
                  let h = n + u.getDuration(e, i * a);
                  (h = u.roun(h, e, 1, t)), l.setRaw("endValue", h);
                  let c = new Date(n);
                  x = r[e];
                  const d = l.get("label");
                  if (
                    (d &&
                      (y
                        ? d.set("text", t.dateFormatter.format(c, x))
                        : d.setPrivate("visible", !1)),
                    this._prepareDataItem(l, 1),
                    n == o)
                  )
                    break;
                  (o = n), (n = h), T++;
                }
              }
              if (h == v) break;
              c++;
            }
            for (let e = c; e < this.dataItems.length; e++)
              this._toggleDataItem(this.dataItems[e], !1);
            for (let e = T; e < this.minorDataItems.length; e++)
              this._toggleDataItem(this.minorDataItems[e], !1);
            l.each(this.series, (e) => {
              e.inited && e._markDirtyAxes();
            });
          }
          this._updateGhost();
        }
        _updateFinals(e, t) {
          this.setPrivateRaw("selectionMinFinal", this.positionToValue(e)),
            this.setPrivateRaw("selectionMaxFinal", this.positionToValue(t));
        }
        _getDelta() {
          this._deltaMinMax = this.baseDuration() / 2;
        }
        _fixMin(e) {
          const t = this.getPrivate("baseInterval"),
            i = t.timeUnit;
          let s = u.roun(e, i, t.count, this._root),
            a = s + u.getDuration(i, t.count * this._getM(i));
          return (
            (a = u.roun(a, i, 1, this._root)),
            s + (a - s) * this.get("startLocation", 0)
          );
        }
        _fixMax(e) {
          const t = this.getPrivate("baseInterval"),
            i = t.timeUnit;
          let s = u.roun(e, i, t.count, this._root),
            a = s + u.getDuration(i, t.count * this._getM(i));
          return (
            (a = u.roun(a, i, 1, this._root)),
            s + (a - s) * this.get("endLocation", 1)
          );
        }
        _updateDates(e, t) {}
        baseDuration() {
          return this._baseDuration;
        }
        baseMainDuration() {
          return u.getIntervalDuration(this.get("baseInterval"));
        }
        processSeriesDataItem(e, t) {
          const i = this.getPrivate("baseInterval");
          e.open || (e.open = {}),
            e.close || (e.close = {}),
            l.each(t, (t) => {
              let s = e.get(t);
              if (o.isNumber(s)) {
                let a = e.open[t],
                  o = e.close[t];
                if (s >= a && s <= o);
                else {
                  const n = i.timeUnit,
                    r = i.count;
                  (a = u.roun(s, n, r, this._root)),
                    (o = a + u.getDuration(n, r * this._getM(n))),
                    (o = u.roun(o, n, 1, this._root)),
                    (e.open[t] = a),
                    (e.close[t] = o);
                }
                this._updateDates(a, e.component);
              }
            });
        }
        _handleSizeDirty() {}
        getDataItemPositionX(e, t, i, s) {
          let a, o;
          e.open && e.close
            ? ((a = e.open[t]), (o = e.close[t]))
            : ((a = e.get(t)), (o = a));
          let n = a + (o - a) * i;
          return (
            (n = this._baseValue + (n - this._baseValue) * s),
            this.valueToPosition(n)
          );
        }
        getDataItemCoordinateX(e, t, i, s) {
          return this._settings.renderer.positionToCoordinate(
            this.getDataItemPositionX(e, t, i, s)
          );
        }
        getDataItemPositionY(e, t, i, s) {
          let a, o;
          e.open && e.close
            ? ((a = e.open[t]), (o = e.close[t]))
            : ((a = e.get(t)), (o = a));
          let n = a + (o - a) * i;
          return (
            (n = this._baseValue + (n - this._baseValue) * s),
            this.valueToPosition(n)
          );
        }
        getDataItemCoordinateY(e, t, i, s) {
          return this._settings.renderer.positionToCoordinate(
            this.getDataItemPositionY(e, t, i, s)
          );
        }
        roundAxisPosition(e, t) {
          let i = this.positionToValue(e);
          i -= (t - 0.5) * this.baseDuration();
          let s = this.getPrivate("baseInterval");
          if (!o.isNaN(i)) {
            const e = this._root.locale.firstDayOfWeek,
              a = s.timeUnit,
              o = this._root.utc,
              n = this._root.timezone,
              r = s.count;
            i = u.roun(i, a, r, this._root, this.getPrivate("min", 0));
            let l = u.getDateIntervalDuration(s, new Date(i), e, o, n);
            return (
              n &&
                ((i = u.roun(
                  i + 0.05 * this.baseDuration(),
                  a,
                  r,
                  this._root,
                  this.getPrivate("min", 0)
                )),
                (l = u.getDateIntervalDuration(
                  s,
                  new Date(i + l * t),
                  e,
                  o,
                  n
                ))),
              this.valueToPosition(i + l * t)
            );
          }
          return NaN;
        }
        getTooltipText(e, t) {
          if (null != this.getPrivate("min")) {
            let i =
                this.get("tooltipDateFormats")[
                  this.getPrivate("baseInterval").timeUnit
                ],
              s = this.positionToValue(e);
            if (o.isNumber(s)) {
              let e = new Date(s),
                a = this.getPrivate("baseInterval"),
                o = u.getDateIntervalDuration(
                  a,
                  e,
                  this._root.locale.firstDayOfWeek,
                  this._root.utc,
                  this._root.timezone
                );
              return (
                !1 !== t &&
                  (e = new Date(
                    s +
                      this.get(
                        "tooltipIntervalOffset",
                        -this.get("tooltipLocation", 0.5)
                      ) *
                        o
                  )),
                this._root.dateFormatter.format(
                  e,
                  this.get("tooltipDateFormat", i)
                )
              );
            }
          }
          return "";
        }
        getSeriesItem(e, t, i, s) {
          let a =
              this.getPrivate("name") +
              this.get("renderer").getPrivate("letter"),
            o = this.positionToValue(t);
          null == i && (i = 0.5), (o -= (i - 0.5) * this.baseDuration());
          const n = l.getSortedIndex(e.dataItems, (e) => {
            let t = 0;
            return e.open && (t = e.open[a]), r.qu(t, o);
          });
          if (s || e.get("snapTooltip")) {
            let t = e.dataItems[n.index - 1],
              i = e.dataItems[n.index];
            if (t && i && t.open && i.close) {
              let e = t.open[a],
                s = i.close[a];
              if (Math.abs(o - e) > Math.abs(o - s)) return i;
            }
            if (t) return t;
            if (i) return i;
          } else {
            const t = e.dataItems[n.index - 1];
            if (t && t.open && t.close) {
              let e = t.open[a],
                i = t.close[a];
              if (o >= e && o <= i) return t;
            }
          }
        }
        shouldGap(e, t, i, s) {
          const a = e.get(s);
          return t.get(s) - a > this.baseDuration() * i;
        }
        zoomToDates(e, t, i) {
          this.zoomToValues(e.getTime(), t.getTime(), i);
        }
        zoomToValues(e, t, i) {
          const s = this.getPrivate("minFinal", 0),
            a = this.getPrivate("maxFinal", 0);
          if (null != this.getPrivate("min") && null != this.getPrivate("max"))
            if (this.get("groupData")) {
              const s = this.getGroupInterval(t - e),
                a = this.get("baseInterval");
              let o = this.getIntervalMin(a),
                n = this.getIntervalMax(a) - 1;
              (n = u.roun(n, s.timeUnit, s.count, this.root)),
                (n += this._getM(s.timeUnit) * u.getIntervalDuration(s)),
                (n = u.roun(n, s.timeUnit, s.count, this.root));
              let r = u.roun(o, s.timeUnit, s.count, this.root),
                l = u.roun(n, s.timeUnit, s.count, this.root),
                h = (e - r) / (l - r),
                c = (t - r) / (l - r);
              this.zoom(h, c, i);
            } else this.zoom((e - s) / (a - s), (t - s) / (a - s), i);
        }
        positionToDate(e) {
          return new Date(this.positionToValue(e));
        }
        dateToPosition(e) {
          return this.valueToPosition(e.getTime());
        }
        getCellWidthPosition() {
          let e = this.getPrivate("selectionMax", this.getPrivate("max")),
            t = this.getPrivate("selectionMin", this.getPrivate("min"));
          return o.isNumber(e) && o.isNumber(t)
            ? this._intervalDuration / (e - t)
            : 0.05;
        }
        nextPosition(e) {
          null == e && (e = 1);
          let t = this.get("tooltipLocation", 0.5) * this.baseDuration();
          "Y" == this.get("renderer").getPrivate("letter") && (e *= -1);
          let i = this.positionToValue(this.getPrivate("tooltipPosition", 0));
          const s = this.getPrivate("baseInterval");
          let a = this._nextTime(i, e, s),
            o = this.getPrivate("selectionMin", 0),
            r = this.getPrivate("selectionMax", 0),
            l = u.roun(o, s.timeUnit, s.count, this._root),
            h = u.roun(r, s.timeUnit, s.count, this._root);
          return (
            (a += t),
            (a = n.fitToRange(a, l + t, h - t)),
            this.toGlobalPosition(this.valueToPosition(a))
          );
        }
        _nextTime(e, t, i) {
          return u.roun(
            e + t * this.baseDuration(),
            i.timeUnit,
            i.count,
            this._root
          );
        }
      }
      Object.defineProperty(d, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "DateAxis",
      }),
        Object.defineProperty(d, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a.m.classNames.concat([d.className]),
        });
    },
    8701: function (e, t, i) {
      i.d(t, {
        J: function () {
          return c;
        },
      });
      var s = i(5638),
        a = i(9361),
        o = i(5071),
        n = i(3540),
        r = i(1926),
        l = i(5040),
        h = i(751);
      class c extends s.S {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_frequency", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_m", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_dates", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "_customDates", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        _afterNew() {
          this.valueFields.push("date"), super._afterNew();
        }
        _getDates() {
          return this._customDates ? this._customDates : this._dates;
        }
        _updateDates(e, t) {
          if (!t.get("ignoreMinMax")) {
            const t = this._getDates(),
              i = o.getSortedIndex(t, (t) => n.qu(t, e));
            i.found || o.insertIndex(t, i.index, e);
          }
        }
        _updateAllDates() {
          if (!this._customDates) {
            const e = this._dates;
            (e.length = 0),
              o.each(this.series, (e) => {
                let t = "valueX";
                e.get("yAxis") == this && (t = "valueY"),
                  o.each(e.dataItems, (i) => {
                    let s = i.get(t);
                    l.isNumber(s) && i.open && this._updateDates(i.open[t], e);
                  });
              });
            const t = this.get("extraMax", 0),
              i = this.get("extraMin", 0);
            let s = e.length;
            const a = this.getPrivate("baseInterval"),
              n = a.count,
              h = a.timeUnit;
            if (t > 0) {
              const i = s * t;
              let a = e[s - 1];
              if (l.isNumber(a))
                for (let t = s - 1; t < s + i; t++)
                  (a += r.getDuration(h, n * this._getM(h))),
                    (a = r.roun(a, h, n, this._root)),
                    e.push(a);
            }
            if (i > 0) {
              const t = s * i;
              let a = e[0];
              if (l.isNumber(a))
                for (let i = 0; i < t; i++)
                  (a -= r.getDuration(h, n)),
                    (a = r.roun(a, h, n, this._root)),
                    e.unshift(a);
            }
          }
        }
        valueToPosition(e) {
          const t = this._getDates(),
            i = this.get("startLocation", 0),
            s = this.get("endLocation", 1),
            a = t.length - i - (1 - s),
            r = o.getSortedIndex(t, (t) => n.qu(t, e));
          let l = r.index;
          if (r.found) return (l - i) / a;
          {
            l > 0 && (l -= 1);
            let s = t[l];
            const o = t[l + 1];
            if (o) {
              let t = o;
              Math.abs(t - e) < Math.abs(s - e) && ((s = t), l++);
            }
            return (l - i) / a + (e - s) / this.baseDuration() / a;
          }
        }
        valueToIndex(e) {
          const t = this._getDates(),
            i = o.getSortedIndex(t, (t) => n.qu(t, e));
          let s = i.index;
          return i.found || (s > 0 && (s -= 1)), s;
        }
        positionToValue(e) {
          const t = this.get("startLocation", 0),
            i = this.get("endLocation", 1),
            s = this._getDates();
          let a = Math.round(s.length - t - (1 - i)),
            o = e * a,
            n = Math.floor(o);
          return (
            n < 0 && (n = 0),
            n > a - 1 && (n = a - 1),
            s[n] + (o - n + t) * this.baseDuration()
          );
        }
        _fixZoomFactor() {
          this.setPrivateRaw(
            "maxZoomFactor",
            this._getDates().length -
              this.get("startLocation", 0) -
              (1 - this.get("endLocation", 1))
          );
        }
        zoomToDates(e, t, i) {
          const s = this._getDates(),
            a = s.length;
          let r = o.getSortedIndex(s, (t) => n.qu(t, e.getTime())),
            l = s[Math.min(r.index, a - 1)];
          r = o.getSortedIndex(s, (e) => n.qu(e, t.getTime()));
          let h = s[r.index];
          r.index >= a && (h = s[a - 1] + this.baseDuration()),
            this.zoomToValues(l, h, i);
        }
        zoomToValues(e, t, i) {
          const s = this.getPrivate("min", 0),
            a = this.getPrivate("max", 0);
          (e = h.fitToRange(e, s, a)),
            (t = h.fitToRange(t, s, a)),
            this.zoom(this.valueToPosition(e), this.valueToPosition(t), i);
        }
        _prepareAxisItems() {
          let e = this.getPrivate("selectionMin", 0),
            t = this.getPrivate("selectionMax", 0);
          if (l.isNumber(e) && l.isNumber(t)) {
            this._seriesValuesDirty &&
              ((this._seriesValuesDirty = !1), this._updateAllDates());
            const i = this._root,
              s = i.utc,
              n = i.timezone,
              h = this._getDates(),
              c = this.get("renderer"),
              u = h.length,
              d = this.baseDuration();
            let g = this.valueToIndex(e);
            g > 0 && g--;
            let m = this.valueToIndex(t);
            m < u - 1 && m++;
            let p =
                c.axisLength() /
                Math.max(c.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER),
              b = Math.min(u, Math.ceil((m - g) / p));
            (b = Math.max(1, b)),
              (g = Math.floor(g / b) * b),
              (this._frequency = b),
              o.each(this.dataItems, (e) => {
                this._toggleDataItem(e, !1);
              }),
              o.each(this.minorDataItems, (e) => {
                this._toggleDataItem(e, !1);
              });
            let _ = t - e - ((t - e) / d - (m - g)) * d,
              x = r.chooseInterval(0, _, p, this.get("gridIntervals"));
            const v = this.getPrivate("baseInterval");
            let f = r.getIntervalDuration(x);
            f < d &&
              ((x = Object.assign({}, v)), (f = r.getIntervalDuration(x))),
              (this._intervalDuration = f);
            const y = x.timeUnit,
              P = this.get("dateFormats");
            let w = Date.now();
            h[0] && (w = h[0]);
            let D = r.roun(
              this.getPrivate("selectionMin", 0),
              y,
              x.count,
              i,
              w
            );
            const T = c.get("minorLabelsEnabled"),
              A = c.get("minorGridEnabled", T);
            let I,
              k,
              M = 0;
            A &&
              ((I = this._getMinorInterval(x)), (M = r.getIntervalDuration(I)));
            let O = this._getIndexes(
              D,
              this.getPrivate("selectionMax", D) + f,
              x,
              this.getPrivate("min", D)
            );
            if (O.length > 0) {
              let e = 0;
              this._m = 0;
              let t = D - 10 * f;
              const u = r.getNextUnit(y);
              if (I) {
                let e = h[O[0]];
                this._addMinorGrid(e - f, e, M, I);
              }
              let d = (c.axisLength() / c.gridCount()) * 0.5;
              o.each(O, (o) => {
                var g;
                let m;
                this.dataItems.length < e + 1
                  ? ((m = new a.z(this, void 0, {})),
                    this._dataItems.push(m),
                    this.processDataItem(m))
                  : (m = this.dataItems[e]);
                let p = h[o],
                  b = new Date(p),
                  _ = p;
                e < O.length - 1 ? (_ = h[O[e + 1]]) : (_ += f),
                  m.setRaw("value", p),
                  m.setRaw("endValue", _),
                  m.setRaw("index", e),
                  m.setRaw("labelEndValue", void 0);
                let v = P[y];
                u &&
                  this.get("markUnitChange") &&
                  l.isNumber(t) &&
                  "year" != y &&
                  r.checkChange(p, t, u, s, n) &&
                  (v = this.get("periodChangeDateFormats")[y]),
                  this._createAssets(m, []);
                const w = m.get("label");
                w && w.set("text", i.dateFormatter.format(b, v)),
                  this._toggleDataItem(m, !0);
                let D = x.count;
                if (("week" == y && m.setRaw("labelEndValue", p), A)) {
                  let e = x.timeUnit;
                  if (
                    ("week" == e && (e = "day"), D > 1 || "week" == x.timeUnit)
                  ) {
                    let t =
                        r.roun(p, e, 1, i) + r.getDuration(e, this._getM(e)),
                      s = this.valueToIndex(t);
                    if (((t = h[s]), t == p)) {
                      let e = h[s + 1];
                      e ? (t = e) : (t += M);
                    }
                    m.setRaw("labelEndValue", t);
                  }
                  D = 1;
                }
                if (
                  (this._prepareDataItem(m, D),
                  w && k && "X" == c.getPrivate("letter"))
                ) {
                  let e = k.get("label");
                  if (e && w.x() - e.x() < d) {
                    let e = this._pickWorse(k, m, x);
                    e &&
                      (null === (g = e.get("label")) ||
                        void 0 === g ||
                        g.setPrivate("visible", !1));
                  }
                }
                I && this._addMinorGrid(p, _, M, I),
                  e++,
                  w && w.getPrivate("visible") && (k = m),
                  (t = p);
              });
            }
            o.each(this.series, (e) => {
              e.inited && e._markDirtyAxes();
            });
          }
          this._updateGhost();
        }
        _pickWorse(e, t, i) {
          const s = i.timeUnit,
            a = e.get("value", 0),
            o = t.get("value", 0);
          return "hour" == s && new Date(a).getDate() != new Date(o).getDate()
            ? e
            : t;
        }
        _addMinorGrid(e, t, i, s) {
          const n = this.get("minorDateFormats", this.get("dateFormats")),
            l = s.timeUnit;
          let h = e + r.getDuration(l, this._getM(l));
          h = r.roun(h, l, 1, this._root);
          let c = t - 0.5 * i,
            u = this._getIndexes(h, c, s, h);
          const d = this._getDates();
          o.each(u, (e) => {
            let t;
            this.minorDataItems.length < this._m + 1
              ? ((t = new a.z(this, void 0, {})),
                this.minorDataItems.push(t),
                this.processDataItem(t))
              : (t = this.minorDataItems[this._m]),
              (h = d[e]),
              t.setRaw("value", h),
              t.setRaw("endValue", h + i),
              t.setRaw("index", e),
              this._createAssets(t, ["minor"], !0);
            const s = t.get("label");
            if (s)
              if (this.get("renderer").get("minorLabelsEnabled")) {
                let e = new Date(h),
                  t = n[l];
                s.set("text", this._root.dateFormatter.format(e, t));
              } else s.setPrivate("visible", !1);
            this._toggleDataItem(t, !0), this._prepareDataItem(t, 1), this._m++;
          });
        }
        _getIndexes(e, t, i, s) {
          const a = [],
            n = i.timeUnit,
            l = i.count,
            h = this._getM(n),
            c = this.getPrivate("baseInterval"),
            u = this._root,
            d = this._getDates();
          let g = l - 1,
            m = -1 / 0,
            p = r.getDuration(n, h),
            b = r.getDuration(n, l * h),
            _ = e;
          for ("day" == n && (e = s); e <= t; ) {
            e = r.roun(e, n, l, u);
            let t = this.valueToIndex(e),
              i = d[t];
            if ("day" == n && "day" == c.timeUnit)
              this._hasDate(e) && g++,
                g == l && (e >= _ - 2 * b && o.move(a, t), (g = 0)),
                (e += p),
                (e = r.roun(e, n, 1, u));
            else {
              if (i < e)
                for (let s = t, a = d.length; s < a; s++)
                  if (((i = d[s]), i >= e)) {
                    t = s;
                    break;
                  }
              o.move(a, t), (e += b), (e = r.roun(e, n, l, u));
            }
            if ((e == m && ((e += b + p), (e = r.roun(e, n, l, u))), e == m))
              break;
            m = e;
          }
          return a;
        }
        _hasDate(e) {
          return o.getSortedIndex(this._getDates(), (t) => n.HO(t, e)).found;
        }
        _nextTime(e, t, i) {
          let s = h.fitToRange(
            this.valueToIndex(e) + t,
            0,
            this._dates.length - 1
          );
          return this._dates[s];
        }
      }
      Object.defineProperty(c, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "GaplessDateAxis",
      }),
        Object.defineProperty(c, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.S.classNames.concat([c.className]),
        });
    },
    8943: function (e, t, i) {
      i.d(t, {
        r: function () {
          return a;
        },
      });
      var s = i(1479);
      class a extends s.T {
        _beforeChanged() {
          super._beforeChanged(),
            (this.isPrivateDirty("width") || this.isPrivateDirty("height")) &&
              (this._clear = !0);
        }
      }
      Object.defineProperty(a, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Grid",
      }),
        Object.defineProperty(a, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.T.classNames.concat([a.className]),
        });
    },
    7261: function (e, t, i) {
      i.d(t, {
        m: function () {
          return c;
        },
      });
      var s = i(9361),
        a = i(6515),
        o = i(7449),
        n = i(5040),
        r = i(5071),
        l = i(751),
        h = i(7652);
      class c extends a.R {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_dirtyExtremes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_dirtySelectionExtremes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_dseHandled", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_deltaMinMax", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_minReal", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_maxReal", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_minRealLog", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_baseValue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_syncDp", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_minLogAdjusted", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            });
        }
        markDirtyExtremes() {
          (this._dirtyExtremes = !0), this.markDirty();
        }
        markDirtySelectionExtremes() {
          (this._dirtySelectionExtremes = !0), this.markDirty();
        }
        _afterNew() {
          (this._settings.themeTags = h.mergeTags(this._settings.themeTags, [
            "axis",
          ])),
            this.setPrivateRaw("name", "value"),
            this.addTag("value"),
            super._afterNew();
        }
        _prepareChildren() {
          if ((super._prepareChildren(), this.isDirty("syncWithAxis"))) {
            this._prevSettings.syncWithAxis &&
              this._syncDp &&
              this._syncDp.dispose();
            let e = this.get("syncWithAxis");
            e &&
              (this._syncDp = new o.FV([
                e.onPrivate("selectionMinFinal", () => {
                  this._dirtySelectionExtremes = !0;
                }),
                e.onPrivate("selectionMaxFinal", () => {
                  this._dirtySelectionExtremes = !0;
                }),
              ]));
          }
          let e = !1;
          if (
            ((this.isDirty("min") ||
              this.isDirty("max") ||
              this.isDirty("maxPrecision") ||
              this.isDirty("numberFormat")) &&
              ((e = !0), this.ghostLabel.set("text", "")),
            (this._sizeDirty ||
              this._dirtyExtremes ||
              this._valuesDirty ||
              e ||
              this.isPrivateDirty("width") ||
              this.isPrivateDirty("height") ||
              this.isDirty("extraMin") ||
              this.isDirty("extraMax") ||
              this.isDirty("logarithmic") ||
              this.isDirty("treatZeroAs") ||
              this.isDirty("baseValue") ||
              this.isDirty("strictMinMax") ||
              this.isDirty("strictMinMaxSelection")) &&
              (this._getMinMax(), (this._dirtyExtremes = !1)),
            this._handleSizeDirty(),
            this._dirtySelectionExtremes &&
              !this._isPanning &&
              this.get("autoZoom", !0))
          ) {
            const e = this.chart;
            let t = !1;
            if (e) {
              const i = this.get("renderer").getPrivate("letter");
              "Y" == i
                ? e.xAxes.each((e) => {
                    "ValueAxis" != e.className && (t = !0);
                  })
                : "X" == i &&
                  e.yAxes.each((e) => {
                    "ValueAxis" != e.className && (t = !0);
                  });
            }
            t && this._getSelectionMinMax(),
              (this._dirtySelectionExtremes = !1);
          }
          this._groupData(),
            (this._sizeDirty ||
              this._valuesDirty ||
              this.isDirty("start") ||
              this.isDirty("end") ||
              this.isPrivateDirty("min") ||
              this.isPrivateDirty("selectionMax") ||
              this.isPrivateDirty("selectionMin") ||
              this.isPrivateDirty("max") ||
              this.isPrivateDirty("step") ||
              this.isPrivateDirty("width") ||
              this.isPrivateDirty("height") ||
              this.isDirty("logarithmic")) &&
              (this._handleRangeChange(),
              this._prepareAxisItems(),
              this._updateAxisRanges()),
            (this._baseValue = this.baseValue());
        }
        _handleSizeDirty() {
          this._sizeDirty &&
            !this._dseHandled &&
            ((this._dirtySelectionExtremes = !0), (this._dseHandled = !0));
        }
        _clearDirty() {
          super._clearDirty(), (this._dseHandled = !1);
        }
        _groupData() {}
        _formatText(e) {
          const t = this.get("numberFormat"),
            i = this.getNumberFormatter();
          let s = "";
          return (
            (s = t
              ? i.format(e, t)
              : i.format(e, void 0, this.getPrivate("stepDecimalPlaces"))),
            s
          );
        }
        _prepareAxisItems() {
          const e = this.getPrivate("min"),
            t = this.getPrivate("max");
          if (n.isNumber(e) && n.isNumber(t)) {
            const t = this.get("logarithmic"),
              i = this.getPrivate("step"),
              a = this.getPrivate("selectionMin"),
              o = this.getPrivate("selectionMax") + i;
            let h = a - i,
              c = 1,
              u = e;
            if (t) {
              if (((h = this._minLogAdjusted), h < a)) for (; h < a; ) h += i;
              (u = h),
                u <= 0 &&
                  ((u = 1),
                  i < 1 &&
                    (u = n.isNumber(this._minRealLog)
                      ? this._minRealLog
                      : Math.pow(10, -50))),
                (c = Math.log(o - i) * Math.LOG10E - Math.log(u) * Math.LOG10E),
                c > 2 && (h = Math.pow(10, Math.log(u) * Math.LOG10E - 50));
            }
            const d = this.get("renderer"),
              g = d.get("minorLabelsEnabled"),
              m = d.get("minorGridEnabled", g);
            let p = Math.pow(
              10,
              Math.floor(Math.log(Math.abs(i)) * Math.LOG10E)
            );
            const b = Math.round(i / p);
            let _ = 2;
            l.round(b / 5, 10) % 1 == 0 && (_ = 5),
              l.round(b / 10, 10) % 1 == 0 && (_ = 10);
            let x = i / _,
              v = 0,
              f = 0,
              y = -1 / 0;
            for (; h < o; ) {
              let e;
              this.dataItems.length < v + 1
                ? ((e = new s.z(this, void 0, {})),
                  this._dataItems.push(e),
                  this.processDataItem(e))
                : (e = this.dataItems[v]),
                this._createAssets(e, []),
                this._toggleDataItem(e, !0),
                e.setRaw("value", h);
              const a = e.get("label");
              a && a.set("text", this._formatText(h)), this._prepareDataItem(e);
              let o = h;
              if (
                (t && c > 2
                  ? (o = Math.pow(10, Math.log(u) * Math.LOG10E + v - 50))
                  : (o += i),
                m)
              ) {
                let e = h + x;
                for (
                  t &&
                  (c > 2 && (x = this._adjustMinMax(h, o, 10).step),
                  (e = h + x));
                  e < o - 1e-11 * i;

                ) {
                  let t;
                  this.minorDataItems.length < f + 1
                    ? ((t = new s.z(this, void 0, {})),
                      this.minorDataItems.push(t),
                      this.processDataItem(t))
                    : (t = this.minorDataItems[f]),
                    this._createAssets(t, ["minor"], !0),
                    this._toggleDataItem(t, !0),
                    t.setRaw("value", e);
                  const i = t.get("label");
                  i &&
                    (g
                      ? i.set("text", this._formatText(e))
                      : i.setPrivate("visible", !1)),
                    this._prepareDataItem(t),
                    (e += x),
                    f++;
                }
              }
              if (((h = o), y == h)) break;
              let n = Math.pow(
                10,
                Math.floor(Math.log(Math.abs(i)) * Math.LOG10E)
              );
              if (n < 1 && !t) {
                let e =
                  Math.round(Math.abs(Math.log(Math.abs(n)) * Math.LOG10E)) + 2;
                h = l.round(h, e);
              }
              v++, (y = h);
            }
            for (let e = v; e < this.dataItems.length; e++)
              this._toggleDataItem(this.dataItems[e], !1);
            for (let e = f; e < this.minorDataItems.length; e++)
              this._toggleDataItem(this.minorDataItems[e], !1);
            r.each(this.series, (e) => {
              e.inited && e._markDirtyAxes();
            }),
              this._updateGhost();
          }
        }
        _prepareDataItem(e, t) {
          let i = this.get("renderer"),
            s = e.get("value"),
            a = e.get("endValue"),
            o = this.valueToPosition(s),
            r = o,
            l = this.valueToPosition(s + this.getPrivate("step"));
          n.isNumber(a) && ((r = this.valueToPosition(a)), (l = r)),
            e.get("isRange") && null == a && (l = o);
          let h = r,
            c = e.get("labelEndValue");
          null != c && (h = this.valueToPosition(c)),
            i.updateLabel(e.get("label"), o, h, t);
          const u = e.get("grid");
          if (
            (i.updateGrid(u, o, r),
            u &&
              (s == this.get("baseValue", 0)
                ? (u.addTag("base"), u._applyThemes())
                : u.hasTag("base") && (u.removeTag("base"), u._applyThemes())),
            i.updateTick(e.get("tick"), o, h, t),
            i.updateFill(e.get("axisFill"), o, l),
            this._processBullet(e),
            i.updateBullet(e.get("bullet"), o, r),
            !e.get("isRange"))
          ) {
            const t = this.get("fillRule");
            t && t(e);
          }
        }
        _handleRangeChange() {
          let e = this.positionToValue(this.get("start", 0)),
            t = this.positionToValue(this.get("end", 1));
          const i = this.get("renderer").gridCount();
          let s = this._adjustMinMax(e, t, i, !0),
            a = h.decimalPlaces(s.step);
          this.setPrivateRaw("stepDecimalPlaces", a),
            (e = l.round(e, a)),
            (t = l.round(t, a)),
            (s = this._adjustMinMax(e, t, i, !0));
          let o = s.step;
          (e = s.min),
            (t = s.max),
            (this.getPrivate("selectionMin") === e &&
              this.getPrivate("selectionMax") === t &&
              this.getPrivate("step") === o) ||
              (this.setPrivateRaw("selectionMin", e),
              this.setPrivateRaw("selectionMax", t),
              this.setPrivateRaw("step", o));
        }
        positionToValue(e) {
          const t = this.getPrivate("min"),
            i = this.getPrivate("max");
          return this.get("logarithmic")
            ? Math.pow(
                Math.E,
                (e * (Math.log(i) * Math.LOG10E - Math.log(t) * Math.LOG10E) +
                  Math.log(t) * Math.LOG10E) /
                  Math.LOG10E
              )
            : e * (i - t) + t;
        }
        valueToPosition(e) {
          const t = this.getPrivate("min"),
            i = this.getPrivate("max");
          if (this.get("logarithmic")) {
            if (e <= 0) {
              let t = this.get("treatZeroAs");
              n.isNumber(t) && (e = t);
            }
            return (
              (Math.log(e) * Math.LOG10E - Math.log(t) * Math.LOG10E) /
              (Math.log(i) * Math.LOG10E - Math.log(t) * Math.LOG10E)
            );
          }
          return (e - t) / (i - t);
        }
        valueToFinalPosition(e) {
          const t = this.getPrivate("minFinal"),
            i = this.getPrivate("maxFinal");
          if (this.get("logarithmic")) {
            if (e <= 0) {
              let t = this.get("treatZeroAs");
              n.isNumber(t) && (e = t);
            }
            return (
              (Math.log(e) * Math.LOG10E - Math.log(t) * Math.LOG10E) /
              (Math.log(i) * Math.LOG10E - Math.log(t) * Math.LOG10E)
            );
          }
          return (e - t) / (i - t);
        }
        getX(e, t, i) {
          e = i + (e - i) * t;
          const s = this.valueToPosition(e);
          return this._settings.renderer.positionToCoordinate(s);
        }
        getY(e, t, i) {
          e = i + (e - i) * t;
          const s = this.valueToPosition(e);
          return this._settings.renderer.positionToCoordinate(s);
        }
        getDataItemCoordinateX(e, t, i, s) {
          return this._settings.renderer.positionToCoordinate(
            this.getDataItemPositionX(e, t, i, s)
          );
        }
        getDataItemPositionX(e, t, i, s) {
          let a = e.get(t);
          return (
            (a = e.get("stackToItemX")
              ? a * s + e.component.getStackedXValueWorking(e, t)
              : this._baseValue + (a - this._baseValue) * s),
            this.valueToPosition(a)
          );
        }
        getDataItemCoordinateY(e, t, i, s) {
          return this._settings.renderer.positionToCoordinate(
            this.getDataItemPositionY(e, t, i, s)
          );
        }
        getDataItemPositionY(e, t, i, s) {
          let a = e.get(t);
          return (
            (a = e.get("stackToItemY")
              ? a * s + e.component.getStackedYValueWorking(e, t)
              : this._baseValue + (a - this._baseValue) * s),
            this.valueToPosition(a)
          );
        }
        basePosition() {
          return this.valueToPosition(this.baseValue());
        }
        baseValue() {
          const e = Math.min(
              this.getPrivate("minFinal", -1 / 0),
              this.getPrivate("selectionMin", -1 / 0)
            ),
            t = Math.max(
              this.getPrivate("maxFinal", 1 / 0),
              this.getPrivate("selectionMax", 1 / 0)
            );
          let i = this.get("baseValue", 0);
          return i < e && (i = e), i > t && (i = t), i;
        }
        cellEndValue(e) {
          return e;
        }
        fixSmallStep(e) {
          return 1 + e === 1 ? ((e *= 2), this.fixSmallStep(e)) : e;
        }
        _fixMin(e) {
          return e;
        }
        _fixMax(e) {
          return e;
        }
        _calculateTotals() {
          if (this.get("calculateTotals")) {
            let e = this.series[0];
            if (e) {
              let t = e.startIndex();
              if (e.dataItems.length > 0) {
                t > 0 && t--;
                let i,
                  s,
                  a = e.endIndex();
                a < e.dataItems.length && a++,
                  e.get("yAxis") == this
                    ? ((i = "valueY"), (s = "vcy"))
                    : e.get("xAxis") == this && ((i = "valueX"), (s = "vcx"));
                let o = i + "Working";
                if (i)
                  for (let e = t; e < a; e++) {
                    let t = 0,
                      a = 0;
                    r.each(this.series, (i) => {
                      if (!i.get("excludeFromTotal")) {
                        let r = i.dataItems[e];
                        if (r) {
                          let e = r.get(o) * i.get(s);
                          n.isNaN(e) || ((t += e), (a += Math.abs(e)));
                        }
                      }
                    }),
                      r.each(this.series, (r) => {
                        if (!r.get("excludeFromTotal")) {
                          let l = r.dataItems[e];
                          if (l) {
                            let e = l.get(o) * r.get(s);
                            n.isNaN(e) ||
                              (l.set(i + "Total", a),
                              l.set(i + "Sum", t),
                              l.set(i + "TotalPercent", (e / a) * 100));
                          }
                        }
                      });
                  }
              }
            }
          }
        }
        _getSelectionMinMax() {
          const e = this.getPrivate("minFinal"),
            t = this.getPrivate("maxFinal"),
            i = this.get("min"),
            s = this.get("max");
          let a = this.get("extraMin", 0),
            o = this.get("extraMax", 0);
          this.get("logarithmic") &&
            (null == this.get("extraMin") && (a = 0.1),
            null == this.get("extraMax") && (o = 0.2));
          const h = this.get("renderer").gridCount(),
            c = this.get("strictMinMaxSelection");
          let u = this.get("strictMinMax");
          if (n.isNumber(e) && n.isNumber(t)) {
            let d = t,
              g = e;
            if (
              (r.each(this.series, (e) => {
                if (!e.get("ignoreMinMax")) {
                  let t, i;
                  const s = e.getPrivate("outOfSelection");
                  if (e.get("xAxis") === this) {
                    if (!s) {
                      let s = e.getPrivate("minX"),
                        a = e.getPrivate("maxX");
                      (0 == e.startIndex() &&
                        e.endIndex() == e.dataItems.length) ||
                        ((s = void 0), (a = void 0)),
                        (t = e.getPrivate("selectionMinX", s)),
                        (i = e.getPrivate("selectionMaxX", a));
                    }
                  } else if (e.get("yAxis") === this && !s) {
                    let s = e.getPrivate("minY"),
                      a = e.getPrivate("maxY");
                    (0 == e.startIndex() &&
                      e.endIndex() == e.dataItems.length) ||
                      ((s = void 0), (a = void 0)),
                      (t = e.getPrivate("selectionMinY", s)),
                      (i = e.getPrivate("selectionMaxY", a));
                  }
                  e.isHidden() ||
                    e.isShowing() ||
                    (n.isNumber(t) && (d = Math.min(d, t)),
                    n.isNumber(i) && (g = Math.max(g, i)));
                }
              }),
              this.axisRanges.each((e) => {
                if (e.get("affectsMinMax")) {
                  let t = e.get("value");
                  null != t && ((d = Math.min(d, t)), (g = Math.max(g, t))),
                    (t = e.get("endValue")),
                    null != t && ((d = Math.min(d, t)), (g = Math.max(g, t)));
                }
              }),
              d > g && ([d, g] = [g, d]),
              n.isNumber(i)
                ? (d = u ? i : e)
                : u && n.isNumber(this._minReal) && (d = this._minReal),
              n.isNumber(s)
                ? (g = u ? s : t)
                : u && n.isNumber(this._maxReal) && (g = this._maxReal),
              d === g)
            ) {
              let t = d;
              if (((d -= this._deltaMinMax), (g += this._deltaMinMax), d < e)) {
                let i = t - e;
                0 == i && (i = this._deltaMinMax),
                  (d = t - i),
                  (g = t + i),
                  (u = !0);
              }
              let i = this._adjustMinMax(d, g, h, u);
              (d = i.min), (g = i.max);
            }
            let m = d,
              p = g,
              b = g - d;
            (d -= b * a), (g += b * o);
            let _ = this._adjustMinMax(d, g, h);
            (d = _.min),
              (g = _.max),
              (d = l.fitToRange(d, e, t)),
              (g = l.fitToRange(g, e, t)),
              (_ = this._adjustMinMax(d, g, h, !0)),
              u || ((d = _.min), (g = _.max));
            const x = this.get("syncWithAxis");
            if (
              (x &&
                ((_ = this._syncAxes(
                  d,
                  g,
                  _.step,
                  x.getPrivate(
                    "selectionMinFinal",
                    x.getPrivate("minFinal", 0)
                  ),
                  x.getPrivate(
                    "selectionMaxFinal",
                    x.getPrivate("maxFinal", 1)
                  ),
                  x.getPrivate("selectionStepFinal", x.getPrivate("step", 1))
                )),
                _.min < e && (_.min = e),
                _.max > t && (_.max = t),
                (d = _.min),
                (g = _.max)),
              u &&
                (n.isNumber(i) && (d = Math.max(d, i)),
                n.isNumber(s) && (g = Math.min(g, s))),
              c && ((d = m - (p - m) * a), (g = p + (p - m) * o)),
              u)
            ) {
              (d = n.isNumber(i) ? i : m),
                (g = n.isNumber(s) ? s : p),
                g - d <= 1e-8 &&
                  ((d -= this._deltaMinMax), (g += this._deltaMinMax));
              let e = g - d;
              (d -= e * a), (g += e * o);
            }
            this.get("logarithmic") &&
              (d <= 0 && (d = m * (1 - Math.min(a, 0.99))),
              d < e && (d = e),
              g > t && (g = t));
            let v = Math.min(
                20,
                Math.ceil(
                  Math.log(this.getPrivate("maxZoomFactor", 100) + 1) /
                    Math.LN10
                ) + 2
              ),
              f = l.round(this.valueToFinalPosition(d), v),
              y = l.round(this.valueToFinalPosition(g), v);
            this.setPrivateRaw("selectionMinFinal", d),
              this.setPrivateRaw("selectionMaxFinal", g),
              this.setPrivateRaw("selectionStepFinal", _.step),
              this.zoom(f, y);
          }
        }
        _getMinMax() {
          let e = this.get("min"),
            t = this.get("max"),
            i = 1 / 0,
            s = -1 / 0,
            a = this.get("extraMin", 0),
            o = this.get("extraMax", 0);
          this.get("logarithmic") &&
            (null == this.get("extraMin") && (a = 0.1),
            null == this.get("extraMax") && (o = 0.2));
          let h = 1 / 0;
          if (
            (r.each(this.series, (e) => {
              if (!e.get("ignoreMinMax")) {
                let t, a;
                if (
                  (e.get("xAxis") === this
                    ? ((t = e.getPrivate("minX")), (a = e.getPrivate("maxX")))
                    : e.get("yAxis") === this &&
                      ((t = e.getPrivate("minY")), (a = e.getPrivate("maxY"))),
                  n.isNumber(t) && n.isNumber(a))
                ) {
                  (i = Math.min(i, t)), (s = Math.max(s, a));
                  let e = a - t;
                  e <= 0 && (e = Math.abs(a / 100)), e < h && (h = e);
                }
              }
            }),
            this.axisRanges.each((e) => {
              if (e.get("affectsMinMax")) {
                let t = e.get("value");
                null != t && ((i = Math.min(i, t)), (s = Math.max(s, t))),
                  (t = e.get("endValue")),
                  null != t && ((i = Math.min(i, t)), (s = Math.max(s, t)));
              }
            }),
            this.get("logarithmic"))
          ) {
            let e = this.get("treatZeroAs");
            n.isNumber(e) && i <= 0 && (i = e),
              i <= 0 &&
                new Error("Logarithmic value axis can not have values <= 0.");
          }
          if (
            (0 === i && 0 === s && ((s = 0.9), (i = -0.9)),
            n.isNumber(e) && (i = e),
            n.isNumber(t) && (s = t),
            i === 1 / 0 || s === -1 / 0)
          )
            return (
              this.setPrivate("minFinal", void 0),
              void this.setPrivate("maxFinal", void 0)
            );
          i > s && ([i, s] = [s, i]);
          const c = i,
            u = s;
          let d = this.adapters.fold("min", i),
            g = this.adapters.fold("max", s);
          (this._minRealLog = i),
            n.isNumber(d) && (i = d),
            n.isNumber(g) && (s = g),
            (i = this._fixMin(i)),
            (s = this._fixMax(s)),
            s - i <= 1 / Math.pow(10, 15) &&
              (s - i != 0
                ? (this._deltaMinMax = (s - i) / 2)
                : this._getDelta(s),
              (i -= this._deltaMinMax),
              (s += this._deltaMinMax)),
            (i -= (s - i) * a),
            (s += (s - i) * o),
            this.get("logarithmic") &&
              (i < 0 && c >= 0 && (i = 0), s > 0 && u <= 0 && (s = 0)),
            (this._minReal = i),
            (this._maxReal = s);
          let m = this.get("strictMinMax"),
            p = this.get("strictMinMaxSelection", !1);
          p && (m = p);
          let b = m;
          n.isNumber(t) && (b = !0);
          let _ = this.get("renderer").gridCount(),
            x = this._adjustMinMax(i, s, _, b);
          if (
            ((i = x.min),
            (s = x.max),
            (x = this._adjustMinMax(i, s, _, !0)),
            (i = x.min),
            (s = x.max),
            m)
          ) {
            (i = n.isNumber(e) ? e : this._minReal),
              (s = n.isNumber(t) ? t : this._maxReal),
              s - i <= 1e-8 &&
                ((i -= this._deltaMinMax), (s += this._deltaMinMax));
            let r = s - i;
            (i -= r * a), (s += r * o);
          }
          (d = this.adapters.fold("min", i)),
            (g = this.adapters.fold("max", s)),
            n.isNumber(d) && (i = d),
            n.isNumber(g) && (s = g),
            h == 1 / 0 && (h = s - i);
          let v =
            Math.round(Math.abs(Math.log(Math.abs(s - i)) * Math.LOG10E)) + 5;
          (i = l.round(i, v)), (s = l.round(s, v));
          const f = this.get("syncWithAxis");
          if (
            (f &&
              ((x = this._syncAxes(
                i,
                s,
                x.step,
                f.getPrivate("minFinal", f.getPrivate("min", 0)),
                f.getPrivate("maxFinal", f.getPrivate("max", 1)),
                f.getPrivate("step", 1)
              )),
              (i = x.min),
              (s = x.max)),
            this.setPrivateRaw(
              "maxZoomFactor",
              Math.max(
                1,
                Math.ceil(((s - i) / h) * this.get("maxZoomFactor", 100))
              )
            ),
            this._fixZoomFactor(),
            this.get("logarithmic") &&
              ((this._minLogAdjusted = i),
              (i = this._minReal),
              (s = this._maxReal),
              i <= 0 && (i = c * (1 - Math.min(a, 0.99)))),
            n.isNumber(i) &&
              n.isNumber(s) &&
              (this.getPrivate("minFinal") !== i ||
                this.getPrivate("maxFinal") !== s))
          ) {
            this.setPrivate("minFinal", i),
              this.setPrivate("maxFinal", s),
              this._saveMinMax(i, s);
            const e = this.get("interpolationDuration", 0),
              t = this.get("interpolationEasing");
            this.animatePrivate({ key: "min", to: i, duration: e, easing: t }),
              this.animatePrivate({
                key: "max",
                to: s,
                duration: e,
                easing: t,
              });
          }
        }
        _fixZoomFactor() {}
        _getDelta(e) {
          let t = Math.log(Math.abs(e)) * Math.LOG10E,
            i = Math.pow(10, Math.floor(t));
          (i /= 10), (this._deltaMinMax = i);
        }
        _saveMinMax(e, t) {}
        _adjustMinMax(e, t, i, s) {
          i <= 1 && (i = 1), (i = Math.round(i));
          let a = e,
            o = t,
            r = t - e;
          0 === r && (r = Math.abs(t));
          let h = Math.log(Math.abs(r)) * Math.LOG10E,
            c = Math.pow(10, Math.floor(h));
          c /= 10;
          let u = c;
          s && (u = 0),
            s
              ? ((e = Math.floor(e / c) * c), (t = Math.ceil(t / c) * c))
              : ((e = Math.ceil(e / c) * c - u),
                (t = Math.floor(t / c) * c + u)),
            e < 0 && a >= 0 && (e = 0),
            t > 0 && o <= 0 && (t = 0),
            (h = Math.log(Math.abs(r)) * Math.LOG10E),
            (c = Math.pow(10, Math.floor(h))),
            (c /= 100);
          let d = Math.ceil(r / i / c) * c,
            g = Math.pow(10, Math.floor(Math.log(Math.abs(d)) * Math.LOG10E)),
            m = Math.ceil(d / g);
          m > 5 ? (m = 10) : m <= 5 && m > 2 && (m = 5),
            (d = Math.ceil(d / (g * m)) * g * m);
          let p = this.get("maxPrecision");
          if (n.isNumber(p)) {
            let e = l.ceil(d, p);
            p < Number.MAX_VALUE && d !== e && ((d = e), 0 == d && (d = 1));
          }
          let b = 0;
          g < 1 &&
            ((b =
              Math.round(Math.abs(Math.log(Math.abs(g)) * Math.LOG10E)) + 1),
            (d = l.round(d, b)));
          let _,
            x = Math.floor(e / d);
          return (
            (e = l.round(d * x, b)),
            (_ = s ? Math.floor(t / d) : Math.ceil(t / d)),
            _ === x && _++,
            (t = l.round(d * _, b)) < o && (t += d),
            e > a && (e -= d),
            (d = this.fixSmallStep(d)),
            { min: e, max: t, step: d }
          );
        }
        getTooltipText(e, t) {
          const i = this.get("tooltipNumberFormat", this.get("numberFormat")),
            s = this.getNumberFormatter(),
            a = this.get("extraTooltipPrecision", 0),
            o = this.getPrivate("stepDecimalPlaces", 0) + a,
            n = l.round(this.positionToValue(e), o);
          return i ? s.format(n, i) : s.format(n, void 0, o);
        }
        getSeriesItem(e, t) {
          let i,
            s,
            a =
              this.getPrivate("name") +
              this.get("renderer").getPrivate("letter"),
            o = this.positionToValue(t);
          if (
            (r.each(e.dataItems, (e, t) => {
              const n = Math.abs(e.get(a) - o);
              (void 0 === i || n < s) && ((i = t), (s = n));
            }),
            null != i)
          )
            return e.dataItems[i];
        }
        zoomToValues(e, t, i) {
          const s = this.getPrivate("minFinal", 0),
            a = this.getPrivate("maxFinal", 0);
          null != this.getPrivate("min") &&
            null != this.getPrivate("max") &&
            this.zoom((e - s) / (a - s), (t - s) / (a - s), i);
        }
        _syncAxes(e, t, i, s, a, o) {
          if (this.get("syncWithAxis")) {
            let r = Math.round(a - s) / o,
              l = Math.round((t - e) / i),
              h = this.get("renderer").gridCount();
            if (n.isNumber(r) && n.isNumber(l)) {
              let s = !1,
                a = 0,
                o = 0.01 * (t - e),
                n = e,
                l = t,
                c = i;
              for (; 1 != s; )
                if (
                  ((s = this._checkSync(n, l, c, r)),
                  a++,
                  a > 500 && (s = !0),
                  s)
                )
                  (e = n), (t = l), (i = c);
                else {
                  a / 3 == Math.round(a / 3)
                    ? ((n = e - o * a), e >= 0 && n < 0 && (n = 0))
                    : ((l = t + o * a), l <= 0 && l > 0 && (l = 0));
                  let i = this._adjustMinMax(n, l, h, !0);
                  (n = i.min), (l = i.max), (c = i.step);
                }
            }
          }
          return { min: e, max: t, step: i };
        }
        _checkSync(e, t, i, s) {
          let a = (t - e) / i;
          for (let e = 1; e < s; e++)
            if (l.round(a / e, 1) == s || a * e == s) return !0;
          return !1;
        }
        getCellWidthPosition() {
          let e = this.getPrivate("selectionMax", this.getPrivate("max")),
            t = this.getPrivate("selectionMin", this.getPrivate("min"));
          return n.isNumber(e) && n.isNumber(t)
            ? this.getPrivate("step", 1) / (e - t)
            : 0.05;
        }
        nextPosition(e) {
          null == e && (e = 1),
            "Y" == this.get("renderer").getPrivate("letter") && (e *= -1);
          let t = this.positionToValue(this.getPrivate("tooltipPosition", 0));
          return (
            (t += this.getPrivate("step", 1) * e),
            (t = l.fitToRange(
              t,
              this.getPrivate("selectionMin", 0),
              this.getPrivate("selectionMax", 1)
            )),
            this.toGlobalPosition(this.valueToPosition(t))
          );
        }
      }
      Object.defineProperty(c, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ValueAxis",
      }),
        Object.defineProperty(c, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a.R.classNames.concat([c.className]),
        });
    },
    757: function (e, t, i) {
      i.d(t, {
        d: function () {
          return h;
        },
      });
      var s = i(7582),
        a = i(4604),
        o = i(6245),
        n = i(1479),
        r = i(5071),
        l = i(5040);
      class h extends a.o {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_ph", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_pw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            });
        }
        _makeGraphics(e, t) {
          return this.makeColumn(t, e);
        }
        _makeFieldNames() {
          super._makeFieldNames();
          const e = this.get("xAxis"),
            t = this.get("yAxis"),
            i = "CategoryAxis",
            s = "ValueAxis";
          e.isType(i) &&
            (this.get("openCategoryXField") ||
              (this._xOpenField = this._xField)),
            e.isType(s) &&
              (this.get("openValueXField") ||
                (this._xOpenField = this._xField)),
            t.isType(i) &&
              (this.get("openCategoryYField") ||
                (this._yOpenField = this._yField)),
            t.isType(s) &&
              (this.get("openValueYField") ||
                (this._yOpenField = this._yField));
        }
        _prepareChildren() {
          super._prepareChildren();
          const e = this.get("xAxis"),
            t = this.get("yAxis"),
            i = this.dataItems.length,
            s = Math.max(0, this.startIndex() - 2),
            a = Math.min(this.endIndex() + 2, i - 1);
          if (e.inited && t.inited)
            for (let e = s; e <= a; e++) {
              let t = this.dataItems[e];
              this._createGraphics(t);
            }
        }
        _updateChildren() {
          const e = this.chart;
          e &&
            ((this._ph = e.plotContainer.height()),
            (this._pw = e.plotContainer.width()));
          const t = this.get("xAxis"),
            i = this.get("yAxis"),
            s = this.get("baseAxis"),
            a = this.columns.template;
          this.isDirty("fill") &&
            null == a.get("fill") &&
            a.set("fill", this.get("fill")),
            this.isDirty("fillPattern") &&
              null == a.get("fillPattern") &&
              a.set("fillPattern", this.get("fillPattern")),
            this.isDirty("stroke") &&
              null == a.get("stroke") &&
              a.set("stroke", this.get("stroke"));
          let o = 0,
            n = 0,
            l = 0;
          r.each(s.series, (e) => {
            if (e instanceof h) {
              const t = e.get("stacked");
              t && 0 == l && n++, !t && e.get("clustered") && n++;
            }
            e === this && (o = n - 1), l++;
          }),
            this.get("clustered") || ((o = 0), (n = 1)),
            0 === n && ((n = 1), (o = 0));
          const c = t.get("renderer"),
            u = i.get("renderer"),
            d = "cellStartLocation",
            g = "cellEndLocation",
            m = c.get(d, 0),
            p = c.get(g, 1),
            b = u.get(d, 0),
            _ = u.get(g, 1);
          if (
            ((this._aLocationX0 = m + (o / n) * (p - m)),
            (this._aLocationX1 = m + ((o + 1) / n) * (p - m)),
            (this._aLocationY0 = b + (o / n) * (_ - b)),
            (this._aLocationY1 = b + ((o + 1) / n) * (_ - b)),
            t.inited && i.inited)
          ) {
            if (
              this._axesDirty ||
              this._valuesDirty ||
              this._stackDirty ||
              this.isDirty("vcx") ||
              this.isDirty("vcy") ||
              this._sizeDirty
            ) {
              const e = this.dataItems.length;
              let t = Math.max(0, this.startIndex() - 2),
                i = Math.min(this.endIndex() + 2, e - 1);
              for (let e = 0; e < t; e++)
                this._toggleColumn(this.dataItems[e], !1);
              let s = this.dataItems[t];
              for (let e = t; e <= i; e++) {
                let i = this.dataItems[e];
                if (null != i.get("valueX") && null != i.get("valueY")) {
                  if (((s = i), e > 0 && t > 0))
                    for (let t = e - 1; t >= 0; t--) {
                      let e = this.dataItems[t];
                      if (null != e.get("valueX") && null != e.get("valueY")) {
                        s = e;
                        break;
                      }
                    }
                  break;
                }
                this._toggleColumn(i, !1);
              }
              for (let e = t; e <= i; e++) {
                let t = this.dataItems[e];
                this._updateGraphics(t, s),
                  null != t.get("valueX") && null != t.get("valueY") && (s = t);
              }
              for (let t = i + 1; t < e; t++)
                this._toggleColumn(this.dataItems[t], !1);
            }
          } else this._skipped = !0;
          this.updateLegendMarker(this.get("tooltipDataItem")),
            super._updateChildren();
        }
        _createGraphics(e) {
          let t = e.get("graphics");
          if (!t) {
            (t = this._makeGraphics(this.columns, e)),
              e.set("graphics", t),
              t._setDataItem(e);
            const i = e.get("legendDataItem");
            if (i) {
              const e = i.get("markerRectangle");
              if (e) {
                const i = e.states.lookup("default");
                r.each(n.u, (s) => {
                  const a = t.get(s, this.get(s));
                  e.set(s, a), i.set(s, a);
                });
              }
            }
            let s = e.get("rangeGraphics");
            s &&
              r.each(s, (e) => {
                e.dispose();
              }),
              (s = []),
              e.setRaw("rangeGraphics", s),
              this.axisRanges.each((t) => {
                const i = t.container,
                  a = this._makeGraphics(t.columns, e);
                s && s.push(a),
                  a.setPrivate("list", t.columns),
                  i.children.push(a);
              });
          }
        }
        createAxisRange(e) {
          return (
            r.each(this.dataItems, (e) => {
              const t = e.get("graphics");
              t && (t.dispose(), e.set("graphics", void 0));
            }),
            super.createAxisRange(e)
          );
        }
        _updateGraphics(e, t) {
          let i = e.get("graphics");
          const s = this._xField,
            a = this._yField,
            n = e.get(s),
            h = e.get(a);
          if (null != n && null != h) {
            const n = this._xOpenField,
              h = this._yOpenField,
              c = this.get("locationX", e.get("locationX", 0.5)),
              u = this.get("locationY", e.get("locationY", 0.5)),
              d = this.get("openLocationX", e.get("openLocationX", c)),
              g = this.get("openLocationY", e.get("openLocationY", u)),
              m = i.get("width"),
              p = i.get("height"),
              b = this.get("stacked"),
              _ = this.get("xAxis"),
              x = this.get("yAxis"),
              v = this.get("baseAxis"),
              f = _.get("start"),
              y = _.get("end"),
              P = x.get("start"),
              w = x.get("end");
            let D,
              T,
              A,
              I,
              k = this.get("vcy", 1),
              M = this.get("vcx", 1),
              O = !1,
              C = !1;
            if (x.isType("CategoryAxis") && _.isType("CategoryAxis")) {
              let t = this._aLocationX0 + d - 0.5,
                i = this._aLocationX1 + c - 0.5;
              if (m instanceof o.gG) {
                let e = ((i - t) * (1 - m.value)) / 2;
                (t += e), (i -= e);
              }
              if (
                ((D = _.getDataItemPositionX(e, n, t, M)),
                (T = _.getDataItemPositionX(e, s, i, M)),
                (t = this._aLocationY0 + g - 0.5),
                (i = this._aLocationY1 + u - 0.5),
                p instanceof o.gG)
              ) {
                let e = ((i - t) * (1 - p.value)) / 2;
                (t += e), (i -= e);
              }
              (A = x.getDataItemPositionY(e, h, t, k)),
                (I = x.getDataItemPositionY(e, a, i, k)),
                e.setRaw("point", { x: D + (T - D) / 2, y: A + (I - A) / 2 });
            } else if (_ === v) {
              let t = this._aLocationX0 + d - 0.5,
                i = this._aLocationX1 + c - 0.5;
              if (m instanceof o.gG) {
                let e = ((i - t) * (1 - m.value)) / 2;
                (t += e), (i -= e);
              }
              if (
                ((D = _.getDataItemPositionX(e, n, t, M)),
                (T = _.getDataItemPositionX(e, s, i, M)),
                (A = x.getDataItemPositionY(e, a, u, k)),
                this._yOpenField !== this._yField)
              )
                I = x.getDataItemPositionY(e, h, g, k);
              else if (b) {
                let t = e.get("stackToItemY");
                I = t
                  ? x.getDataItemPositionY(t, a, g, t.component.get("vcy"))
                  : x.basePosition();
              } else I = x.basePosition();
              e.setRaw("point", { x: D + (T - D) / 2, y: A }), (C = !0);
            } else if (x === v) {
              let t = this._aLocationY0 + g - 0.5,
                i = this._aLocationY1 + u - 0.5;
              if (p instanceof o.gG) {
                let e = ((i - t) * (1 - p.value)) / 2;
                (t += e), (i -= e);
              }
              if (
                ((A = x.getDataItemPositionY(e, h, t, k)),
                (I = x.getDataItemPositionY(e, a, i, k)),
                (T = _.getDataItemPositionX(e, s, c, M)),
                this._xOpenField !== this._xField)
              )
                D = _.getDataItemPositionX(e, n, d, M);
              else if (b) {
                let t = e.get("stackToItemX");
                D = t
                  ? _.getDataItemPositionX(t, s, d, t.component.get("vcx"))
                  : _.basePosition();
              } else D = _.basePosition();
              (O = !0), e.setRaw("point", { x: T, y: A + (I - A) / 2 });
            }
            this._updateSeriesGraphics(e, i, D, T, A, I, O, C),
              (D < f && T < f) ||
              (D > y && T > y) ||
              (A < P && I <= P) ||
              (A >= w && I > w) ||
              l.isNaN(D) ||
              l.isNaN(A)
                ? this._toggleColumn(e, !1)
                : this._toggleColumn(e, !0);
            let Y = e.get("rangeGraphics");
            Y &&
              r.each(Y, (t) => {
                this._updateSeriesGraphics(e, t, D, T, A, I, O, C);
              }),
              this._applyGraphicsStates(e, t);
          } else this._toggleColumn(e, !1);
        }
        _updateSeriesGraphics(e, t, i, s, a, o, n, r) {
          const h = t.get("width"),
            c = t.get("height"),
            u = t.get("maxWidth"),
            d = t.get("maxHeight"),
            g = this.getPoint(i, a),
            m = this.getPoint(s, o),
            p = e.get("point");
          if (p) {
            const e = this.getPoint(p.x, p.y);
            (p.x = e.x + this._x), (p.y = e.y + this._y);
          }
          if (((i = g.x), (s = m.x), (a = g.y), (o = m.y), l.isNumber(h))) {
            const e = (s - i - h) / 2;
            (i += e), (s -= e);
          }
          if (l.isNumber(u) && u < Math.abs(s - i)) {
            const e = (s - i - u) / 2;
            (i += e), (s -= e);
          }
          if (l.isNumber(c)) {
            const e = (o - a - c) / 2;
            (a += e), (o -= e);
          }
          if (l.isNumber(d) && d < Math.abs(o - a)) {
            const e = (o - a - d) / 2;
            (a += e), (o -= e);
          }
          this.get("adjustBulletPosition") &&
            (n &&
              ((s = Math.min(Math.max(0, s), this._pw)),
              (i = Math.min(Math.max(0, i), this._pw))),
            r &&
              ((a = Math.min(Math.max(0, a), this._ph)),
              (o = Math.min(Math.max(0, o), this._ph)))),
            e.setRaw("left", i),
            e.setRaw("right", s),
            e.setRaw("top", a),
            e.setRaw("bottom", o),
            t.setPrivate("width", s - i),
            t.setPrivate("height", o - a),
            t.set("x", i),
            t.set("y", o - (o - a));
        }
        _handleDataSetChange() {
          super._handleDataSetChange(),
            r.each(this._dataItems, (e) => {
              this._toggleColumn(e, !1);
            });
        }
        _applyGraphicsStates(e, t) {
          const i = e.get("graphics"),
            s = i.states.lookup("dropFromOpen"),
            a = i.states.lookup("riseFromOpen"),
            o = i.states.lookup("dropFromPrevious"),
            n = i.states.lookup("riseFromPrevious");
          if (s || o || a || n) {
            const i = this.get("xAxis"),
              r = this.get("yAxis"),
              h = this.get("baseAxis");
            let c, u, d;
            h === i && r.isType("ValueAxis")
              ? ((c = e.get(this._yOpenField)),
                (u = e.get(this._yField)),
                (d = t.get(this._yField)))
              : h === r &&
                i.isType("ValueAxis") &&
                ((c = e.get(this._xOpenField)),
                (u = e.get(this._xField)),
                (d = t.get(this._xField))),
              l.isNumber(c) &&
                l.isNumber(u) &&
                (u < c ? s && s.apply() : a && a.apply(),
                l.isNumber(d) && (u < d ? o && o.apply() : n && n.apply()));
          }
        }
        disposeDataItem(e) {
          super.disposeDataItem(e);
          const t = e.get("graphics");
          t && (this.columns.removeValue(t), t.dispose());
          const i = e.get("rangeGraphics");
          i &&
            r.each(i, (e) => {
              const t = e.getPrivate("list");
              t && t.removeValue(e), e.dispose();
            });
        }
        hideDataItem(e, t) {
          const i = Object.create(null, {
            hideDataItem: { get: () => super.hideDataItem },
          });
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s = [i.hideDataItem.call(this, e, t)],
              a = e.get("graphics");
            a && s.push(a.hide(t));
            const o = e.get("rangeGraphics");
            o &&
              r.each(o, (e) => {
                s.push(e.hide(t));
              }),
              yield Promise.all(s);
          });
        }
        _toggleColumn(e, t) {
          const i = e.get("graphics");
          i && i.setPrivate("visible", t);
          const s = e.get("rangeGraphics");
          s &&
            r.each(s, (e) => {
              e.setPrivate("visible", t);
            });
          const a = e.bullets;
          a &&
            r.each(a, (e) => {
              e.setPrivate("hidden", !t);
            });
        }
        showDataItem(e, t) {
          const i = Object.create(null, {
            showDataItem: { get: () => super.showDataItem },
          });
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s = [i.showDataItem.call(this, e, t)],
              a = e.get("graphics");
            a && s.push(a.show(t));
            const o = e.get("rangeGraphics");
            o &&
              r.each(o, (e) => {
                s.push(e.show(t));
              }),
              yield Promise.all(s);
          });
        }
        updateLegendMarker(e) {
          let t = this.get("legendDataItem");
          if (this.get("useLastColorForLegendMarker") && !e) {
            const t = this.dataItems[this.endIndex() - 1];
            t && (e = t);
          }
          if (t) {
            let i = this.columns.template;
            if (e) {
              let t = e.get("graphics");
              t && (i = t);
            }
            const s = t.get("markerRectangle");
            if (s && !t.get("itemContainer").get("disabled")) {
              const e = s.states.lookup("default");
              r.each(n.u, (t) => {
                const a = i.get(t, this.get(t));
                s.set(t, a), e.set(t, a);
              });
            }
          }
        }
        _getTooltipTarget(e) {
          if ("bullet" == this.get("seriesTooltipTarget"))
            return super._getTooltipTarget(e);
          return e.get("graphics") || this;
        }
      }
      Object.defineProperty(h, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BaseColumnSeries",
      }),
        Object.defineProperty(h, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a.o.classNames.concat([h.className]),
        });
    },
    2976: function (e, t, i) {
      i.d(t, {
        j: function () {
          return a;
        },
      });
      var s = i(3497);
      class a extends s.c {
        _beforeChanged() {
          super._beforeChanged(),
            (this.isDirty("lowX0") ||
              this.isDirty("lowY0") ||
              this.isDirty("lowX1") ||
              this.isDirty("lowY1") ||
              this.isDirty("highX0") ||
              this.isDirty("highX1") ||
              this.isDirty("highY0") ||
              this.isDirty("highY1")) &&
              (this._clear = !0);
        }
        _draw() {
          super._draw();
          const e = this._display;
          e.moveTo(this.get("lowX0", 0), this.get("lowY0", 0)),
            e.lineTo(this.get("lowX1", 0), this.get("lowY1", 0)),
            e.moveTo(this.get("highX0", 0), this.get("highY0", 0)),
            e.lineTo(this.get("highX1", 0), this.get("highY1", 0));
        }
      }
      Object.defineProperty(a, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Candlestick",
      }),
        Object.defineProperty(a, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.c.classNames.concat([a.className]),
        });
    },
    2312: function (e, t, i) {
      i.d(t, {
        $: function () {
          return h;
        },
      });
      var s = i(62),
        a = i(2976),
        o = i(5769),
        n = i(7144),
        r = i(7652),
        l = i(5071);
      class h extends s.d {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "columns", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new n.o(o.YS.new({ themeTags: ["autocolor"] }), () =>
                  a.j._new(
                    this._root,
                    {
                      themeTags: r.mergeTags(
                        this.columns.template.get("themeTags", []),
                        ["candlestick", "series", "column"]
                      ),
                    },
                    [this.columns.template]
                  )
                )
              ),
            });
        }
        makeColumn(e, t) {
          const i = this.mainContainer.children.push(t.make());
          return i._setDataItem(e), t.push(i), i;
        }
        _updateGraphics(e, t) {
          super._updateGraphics(e, t);
          const i = this.getRaw("xAxis"),
            s = this.getRaw("yAxis"),
            a = this.getRaw("baseAxis");
          let o,
            n,
            r,
            l,
            h,
            c,
            u,
            d,
            g,
            m = this.get("vcy", 1),
            p = this.get("vcx", 1),
            b = this.get("locationX", e.get("locationX", 0.5)),
            _ = this.get("locationY", e.get("locationY", 0.5)),
            x = this.get("openLocationX", e.get("openLocationX", b)),
            v = this.get("openLocationY", e.get("openLocationY", _));
          if (s === a) {
            let t = i.getDataItemPositionX(e, this._xOpenField, 1, p),
              a = i.getDataItemPositionX(e, this._xField, 1, p);
            (n = i.getDataItemPositionX(e, this._xLowField, 1, p)),
              (c = i.getDataItemPositionX(e, this._xHighField, 1, p)),
              (h = Math.max(t, a)),
              (o = Math.min(t, a));
            let b = this._aLocationY0 + v - 0.5,
              x = this._aLocationY1 + _ - 0.5;
            (r = s.getDataItemPositionY(e, this._yField, b + (x - b) / 2, m)),
              (l = r),
              (u = r),
              (d = r),
              (g = "horizontal");
          } else {
            let t = s.getDataItemPositionY(e, this._yOpenField, 1, m),
              a = s.getDataItemPositionY(e, this._yField, 1, m);
            (l = s.getDataItemPositionY(e, this._yLowField, 1, m)),
              (d = s.getDataItemPositionY(e, this._yHighField, 1, m)),
              (u = Math.max(t, a)),
              (r = Math.min(t, a));
            let _ = this._aLocationX0 + x - 0.5,
              v = this._aLocationX1 + b - 0.5;
            (o = i.getDataItemPositionX(e, this._xField, _ + (v - _) / 2, p)),
              (n = o),
              (h = o),
              (c = o),
              (g = "vertical");
          }
          this._updateCandleGraphics(e, o, n, r, l, h, c, u, d, g);
        }
        _updateCandleGraphics(e, t, i, s, a, o, n, r, h, c) {
          let u = e.get("graphics");
          if (u) {
            let d = this.getPoint(t, s),
              g = this.getPoint(i, a),
              m = this.getPoint(o, r),
              p = this.getPoint(n, h),
              b = u.x(),
              _ = u.y();
            u.set("lowX0", d.x - b),
              u.set("lowY0", d.y - _),
              u.set("lowX1", g.x - b),
              u.set("lowY1", g.y - _),
              u.set("highX0", m.x - b),
              u.set("highY0", m.y - _),
              u.set("highX1", p.x - b),
              u.set("highY1", p.y - _),
              u.set("orientation", c);
            let x = e.get("rangeGraphics");
            x &&
              l.each(x, (e) => {
                e.set("lowX0", d.x - b),
                  e.set("lowY0", d.y - _),
                  e.set("lowX1", g.x - b),
                  e.set("lowY1", g.y - _),
                  e.set("highX0", m.x - b),
                  e.set("highY0", m.y - _),
                  e.set("highX1", p.x - b),
                  e.set("highY1", p.y - _),
                  e.set("orientation", c);
              });
          }
        }
        _processAxisRange(e) {
          super._processAxisRange(e),
            (e.columns = new n.o(o.YS.new({}), () =>
              a.j._new(
                this._root,
                {
                  themeTags: r.mergeTags(
                    e.columns.template.get("themeTags", []),
                    ["candlestick", "series", "column"]
                  ),
                },
                [this.columns.template, e.columns.template]
              )
            ));
        }
      }
      Object.defineProperty(h, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "CandlestickSeries",
      }),
        Object.defineProperty(h, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.d.classNames.concat([h.className]),
        });
    },
    62: function (e, t, i) {
      i.d(t, {
        d: function () {
          return l;
        },
      });
      var s = i(757),
        a = i(5769),
        o = i(7144),
        n = i(3497),
        r = i(7652);
      class l extends s.d {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "columns", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new o.o(a.YS.new({}), () =>
                  n.c._new(
                    this._root,
                    {
                      position: "absolute",
                      themeTags: r.mergeTags(
                        this.columns.template.get("themeTags", []),
                        ["series", "column"]
                      ),
                    },
                    [this.columns.template]
                  )
                )
              ),
            });
        }
        makeColumn(e, t) {
          const i = this.mainContainer.children.push(t.make());
          return i._setDataItem(e), t.push(i), i;
        }
        _processAxisRange(e) {
          super._processAxisRange(e),
            (e.columns = new o.o(a.YS.new({}), () =>
              n.c._new(
                this._root,
                {
                  position: "absolute",
                  themeTags: r.mergeTags(
                    e.columns.template.get("themeTags", []),
                    ["series", "column"]
                  ),
                },
                [this.columns.template, e.columns.template]
              )
            ));
        }
      }
      Object.defineProperty(l, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ColumnSeries",
      }),
        Object.defineProperty(l, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.d.classNames.concat([l.className]),
        });
    },
    2338: function (e, t, i) {
      i.d(t, {
        e: function () {
          return p;
        },
      });
      var s = i(4604),
        a = i(1479),
        o = i(774),
        n = i(3794),
        r = i(5769),
        l = i(7144),
        h = i(1112),
        c = i(9361),
        u = i(7142),
        d = i(5040),
        g = i(5071),
        m = i(7652);
      class p extends s.o {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_endIndex", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_strokeGenerator", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: (0, o.Z)(),
            }),
            Object.defineProperty(this, "_fillGenerator", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: (0, n.Z)(),
            }),
            Object.defineProperty(this, "_legendStroke", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_legendFill", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "strokes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new l.o(r.YS.new({}), () =>
                  a.T._new(
                    this._root,
                    {
                      themeTags: m.mergeTags(
                        this.strokes.template.get("themeTags", []),
                        ["line", "series", "stroke"]
                      ),
                    },
                    [this.strokes.template]
                  )
                )
              ),
            }),
            Object.defineProperty(this, "fills", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new l.o(r.YS.new({}), () =>
                  a.T._new(
                    this._root,
                    {
                      themeTags: m.mergeTags(
                        this.strokes.template.get("themeTags", []),
                        ["line", "series", "fill"]
                      ),
                    },
                    [this.fills.template]
                  )
                )
              ),
            }),
            Object.defineProperty(this, "_fillTemplate", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_strokeTemplate", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_previousPoint", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [0, 0, 0, 0],
            }),
            Object.defineProperty(this, "_dindex", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_sindex", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            });
        }
        _afterNew() {
          this._fillGenerator.y0(function (e) {
            return e[3];
          }),
            this._fillGenerator.x0(function (e) {
              return e[2];
            }),
            this._fillGenerator.y1(function (e) {
              return e[1];
            }),
            this._fillGenerator.x1(function (e) {
              return e[0];
            }),
            super._afterNew();
        }
        makeStroke(e) {
          const t = this.mainContainer.children.push(e.make());
          return e.push(t), t;
        }
        makeFill(e) {
          const t = this.mainContainer.children.push(e.make());
          return e.push(t), t;
        }
        _updateChildren() {
          (this._strokeTemplate = void 0), (this._fillTemplate = void 0);
          let e = this.get("xAxis"),
            t = this.get("yAxis");
          if (this.isDirty("stroke")) {
            const e = this.get("stroke");
            this.strokes.template.set("stroke", e);
            const t = this._legendStroke;
            t && t.states.lookup("default").set("stroke", e);
          }
          if (this.isDirty("fill")) {
            const e = this.get("fill");
            this.fills.template.set("fill", e);
            const t = this._legendFill;
            t && t.states.lookup("default").set("fill", e);
          }
          if (this.isDirty("fillPattern")) {
            const e = this.get("fillPattern");
            this.fills.template.set("fillPattern", e);
            const t = this._legendFill;
            t && t.states.lookup("default").set("fillPattern", e);
          }
          if (this.isDirty("curveFactory")) {
            const e = this.get("curveFactory");
            e && (this._strokeGenerator.curve(e), this._fillGenerator.curve(e));
          }
          if (e.inited && t.inited) {
            if (
              this._axesDirty ||
              this._valuesDirty ||
              this._stackDirty ||
              this.isDirty("vcx") ||
              this.isDirty("vcy") ||
              this._sizeDirty ||
              this.isDirty("connect") ||
              this.isDirty("curveFactory")
            ) {
              this.fills.each((e) => {
                e.setPrivate("visible", !1);
              }),
                this.strokes.each((e) => {
                  e.setPrivate("visible", !1);
                }),
                this.axisRanges.each((e) => {
                  let t = e.fills;
                  t &&
                    t.each((e) => {
                      e.setPrivate("visible", !1);
                    });
                  let i = e.strokes;
                  i &&
                    i.each((e) => {
                      e.setPrivate("visible", !1);
                    });
                });
              let e = this.startIndex(),
                t = this.strokes.template.get("templateField"),
                i = this.fills.template.get("templateField"),
                s = !0,
                a = !0;
              t && (s = !1), i && (a = !1);
              for (let o = e - 1; o >= 0; o--) {
                let n = this.dataItems[o],
                  r = !0,
                  l = n.dataContext;
                if (
                  (t && l[t] && (s = !0),
                  i && l[i] && (a = !0),
                  g.each(this._valueFields, (e) => {
                    d.isNumber(n.get(e)) || (r = !1);
                  }),
                  r && s && a)
                ) {
                  e = o;
                  break;
                }
              }
              let o = this.dataItems.length,
                n = this.endIndex();
              if (n < o) {
                n++;
                for (let e = n; e < o; e++) {
                  let t = this.dataItems[e],
                    i = !0;
                  if (
                    (g.each(this._valueFields, (e) => {
                      d.isNumber(t.get(e)) || (i = !1);
                    }),
                    i)
                  ) {
                    n = e + 1;
                    break;
                  }
                }
              }
              if (
                (e > 0 && e--,
                (this._endIndex = n),
                this._clearGraphics(),
                (this._sindex = 0),
                (this._dindex = e),
                1 == this.dataItems.length)
              )
                this._startSegment(0);
              else
                for (; this._dindex < n - 1; )
                  this._startSegment(this._dindex), this._sindex++;
            }
          } else this._skipped = !0;
          super._updateChildren();
        }
        _clearGraphics() {
          this.strokes.clear(),
            this.fills.clear(),
            this.axisRanges.each((e) => {
              e.fills.clear(), e.strokes.clear();
            });
        }
        _startSegment(e) {
          let t = this._endIndex,
            i = t;
          const s = this.get("autoGapCount"),
            a = this.get("connect"),
            o = this.makeFill(this.fills),
            n = this._fillTemplate,
            l = this.fills.template;
          n && n != l && (o.template = n), o.setPrivate("visible", !0);
          const h = this.makeStroke(this.strokes),
            c = this._strokeTemplate;
          c && c != this.strokes.template && (h.template = c),
            h.setPrivate("visible", !0);
          let u = this.get("xAxis"),
            d = this.get("yAxis"),
            g = this.get("baseAxis"),
            m = this.get("vcx", 1),
            p = this.get("vcy", 1),
            b = this._xField,
            _ = this._yField,
            x = this._xOpenField,
            v = this._yOpenField;
          const f = this.get("openValueXField"),
            y = this.get("openValueYField");
          f || (x = this._xField), y || (v = this._yField);
          const P = this.get("stacked"),
            w = u.basePosition(),
            D = d.basePosition();
          let T;
          T = g === d ? this._yField : this._xField;
          const A = [];
          let I = [];
          A.push(I);
          const k = this.strokes.template.get("templateField"),
            M = this.fills.template.get("templateField");
          let O = this.get("locationX", 0.5),
            C = this.get("locationY", 0.5),
            Y = this.get("openLocationX", O),
            S = this.get("openLocationY", C);
          const F = this.get("minDistance", 0);
          let X,
            L = this.fills.template.get("visible");
          this.axisRanges.length > 0 && (L = !0);
          let N = !1;
          (P || f || y) && (N = !0);
          const R = {
            points: I,
            segments: A,
            stacked: P,
            getOpen: N,
            basePosX: w,
            basePosY: D,
            fillVisible: L,
            xField: b,
            yField: _,
            xOpenField: x,
            yOpenField: v,
            vcx: m,
            vcy: p,
            baseAxis: g,
            xAxis: u,
            yAxis: d,
            locationX: O,
            locationY: C,
            openLocationX: Y,
            openLocationY: S,
            minDistance: F,
          };
          let j = this._strokeTemplate,
            V = this._fillTemplate;
          for (X = e; X < i; X++) {
            this._dindex = X;
            const t = this._dataItems[X];
            let n = t.get(b),
              l = t.get(_);
            if (
              (null == n || null == l
                ? a || ((I = []), A.push(I), (R.points = I))
                : this._getPoints(t, R),
              k)
            ) {
              let s = t.dataContext[k];
              if (s) {
                if (
                  (s instanceof r.YS || (s = r.YS.new(s)),
                  (this._strokeTemplate = s),
                  X > e)
                ) {
                  i = X;
                  break;
                }
                (j = s), (h.template = s);
              }
            }
            if (M) {
              let s = t.dataContext[M];
              if (s) {
                if (
                  (s instanceof r.YS || (s = r.YS.new(s)),
                  (this._fillTemplate = s),
                  X > e)
                ) {
                  i = X;
                  break;
                }
                (V = s), (o.template = s);
              }
            }
            if (!a) {
              let e = this.dataItems[X + 1];
              e &&
                g.shouldGap(t, e, s, T) &&
                ((I = []), A.push(I), (R.points = I));
            }
          }
          o.setRaw("userData", [e, X]),
            h.setRaw("userData", [e, X]),
            X === t && this._endLine(I, A[0][0]),
            h && this._drawStroke(h, A),
            o && this._drawFill(o, A),
            this.axisRanges.each((t) => {
              const i = t.container,
                s = t.fills,
                a = this.makeFill(s);
              i && i.children.push(a),
                a.setPrivate("visible", !0),
                this._drawFill(a, A);
              const o = t.strokes,
                n = this.makeStroke(o);
              i && i.children.push(n),
                j && j != this.strokes.template && (n.template = j),
                V && V != this.fills.template && (a.template = V),
                n.setPrivate("visible", !0),
                this._drawStroke(n, A),
                a.setRaw("userData", [e, X]),
                n.setRaw("userData", [e, X]);
            });
        }
        _getPoints(e, t) {
          let i = t.points,
            s = e.get("locationX", t.locationX),
            a = e.get("locationY", t.locationY),
            o = t.xAxis.getDataItemPositionX(e, t.xField, s, t.vcx),
            n = t.yAxis.getDataItemPositionY(e, t.yField, a, t.vcy);
          if (this._shouldInclude(o)) {
            const s = this.getPoint(o, n),
              a = [s.x, s.y];
            if (
              ((s.x += this._x),
              (s.y += this._y),
              e.set("point", s),
              t.fillVisible)
            ) {
              let i = o,
                s = n;
              if (
                (t.baseAxis === t.xAxis
                  ? (s = t.basePosY)
                  : t.baseAxis === t.yAxis && (i = t.basePosX),
                t.getOpen)
              ) {
                let a = e.get(t.xOpenField),
                  o = e.get(t.yOpenField);
                if (null != a && null != o) {
                  let a = e.get("openLocationX", t.openLocationX),
                    o = e.get("openLocationY", t.openLocationY);
                  if (t.stacked) {
                    let n = e.get("stackToItemX"),
                      r = e.get("stackToItemY");
                    n
                      ? ((i = t.xAxis.getDataItemPositionX(
                          n,
                          t.xField,
                          a,
                          n.component.get("vcx")
                        )),
                        d.isNaN(i) && (i = t.basePosX))
                      : (i =
                          t.yAxis === t.baseAxis
                            ? t.basePosX
                            : t.xAxis.getDataItemPositionX(
                                e,
                                t.xOpenField,
                                a,
                                t.vcx
                              )),
                      r
                        ? ((s = t.yAxis.getDataItemPositionY(
                            r,
                            t.yField,
                            o,
                            r.component.get("vcy")
                          )),
                          d.isNaN(s) && (s = t.basePosY))
                        : (s =
                            t.xAxis === t.baseAxis
                              ? t.basePosY
                              : t.yAxis.getDataItemPositionY(
                                  e,
                                  t.yOpenField,
                                  o,
                                  t.vcy
                                ));
                  } else
                    (i = t.xAxis.getDataItemPositionX(
                      e,
                      t.xOpenField,
                      a,
                      t.vcx
                    )),
                      (s = t.yAxis.getDataItemPositionY(
                        e,
                        t.yOpenField,
                        o,
                        t.vcy
                      ));
                }
              }
              let r = this.getPoint(i, s);
              (a[2] = r.x), (a[3] = r.y);
            }
            if (t.minDistance > 0) {
              const e = a[0],
                s = a[1],
                o = a[2],
                n = a[3],
                r = this._previousPoint,
                l = r[0],
                h = r[1],
                c = r[2],
                u = r[3];
              (Math.hypot(e - l, s - h) > t.minDistance ||
                (o && n && Math.hypot(o - c, n - u) > t.minDistance)) &&
                (i.push(a), (this._previousPoint = a));
            } else i.push(a);
          }
        }
        _endLine(e, t) {}
        _drawStroke(e, t) {
          e.get("visible") &&
            !e.get("forceHidden") &&
            e.set("draw", (e) => {
              g.each(t, (t) => {
                this._strokeGenerator.context(e), this._strokeGenerator(t);
              });
            });
        }
        _drawFill(e, t) {
          e.get("visible") &&
            !e.get("forceHidden") &&
            e.set("draw", (e) => {
              g.each(t, (t) => {
                this._fillGenerator.context(e), this._fillGenerator(t);
              });
            });
        }
        _processAxisRange(e) {
          super._processAxisRange(e),
            (e.fills = new l.o(r.YS.new({}), () =>
              a.T._new(
                this._root,
                {
                  themeTags: m.mergeTags(
                    e.fills.template.get("themeTags", []),
                    ["line", "series", "fill"]
                  ),
                },
                [this.fills.template, e.fills.template]
              )
            )),
            (e.strokes = new l.o(r.YS.new({}), () =>
              a.T._new(
                this._root,
                {
                  themeTags: m.mergeTags(
                    e.strokes.template.get("themeTags", []),
                    ["line", "series", "stroke"]
                  ),
                },
                [this.strokes.template, e.strokes.template]
              )
            ));
        }
        createLegendMarker(e) {
          const t = this.get("legendDataItem");
          if (t) {
            const e = t.get("marker"),
              i = t.get("markerRectangle");
            i && i.setPrivate("visible", !1),
              e.set(
                "background",
                u.A.new(e._root, { fillOpacity: 0, fill: (0, h.$_)(0) })
              );
            const s = e.children.push(
              a.T._new(
                e._root,
                {
                  themeTags: ["line", "series", "legend", "marker", "stroke"],
                  interactive: !1,
                },
                [this.strokes.template]
              )
            );
            this._legendStroke = s;
            const o = e.children.push(
              a.T._new(
                e._root,
                { themeTags: ["line", "series", "legend", "marker", "fill"] },
                [this.fills.template]
              )
            );
            this._legendFill = o;
            const n = this._root.interfaceColors.get("disabled");
            if (
              (s.states.create("disabled", { fill: n, stroke: n }),
              o.states.create("disabled", { fill: n, stroke: n }),
              this.bullets.length > 0)
            ) {
              const t = this.bullets.getIndex(0);
              if (t) {
                const i = t(e._root, this, new c.z(this, { legend: !0 }, {}));
                if (i) {
                  const t = i.get("sprite");
                  t instanceof a.T &&
                    t.states.create("disabled", { fill: n, stroke: n }),
                    t &&
                      (t.set("tooltipText", void 0),
                      t.set("tooltipHTML", void 0),
                      e.children.push(t),
                      t.setAll({ x: e.width() / 2, y: e.height() / 2 }),
                      e.events.on("boundschanged", () => {
                        t.setAll({ x: e.width() / 2, y: e.height() / 2 });
                      }));
                }
              }
            }
          }
        }
      }
      Object.defineProperty(p, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "LineSeries",
      }),
        Object.defineProperty(p, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: s.o.classNames.concat([p.className]),
        });
    },
    4604: function (e, t, i) {
      i.d(t, {
        o: function () {
          return g;
        },
      });
      var s = i(7582),
        a = i(9361),
        o = i(3399),
        n = i(7144),
        r = i(8777),
        l = i(1479),
        h = i(5040),
        c = i(256),
        u = i(5071),
        d = i(7652);
      class g extends o.F {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_xField", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_yField", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_xOpenField", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_yOpenField", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_xLowField", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_xHighField", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_yLowField", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_yHighField", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_axesDirty", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_stackDirty", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_selectionProcessed", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_dataSets", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "_mainContainerMask", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_x", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_y", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_bullets", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "mainContainer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(r.W.new(this._root, {})),
            }),
            Object.defineProperty(this, "axisRanges", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new n.aV(),
            }),
            Object.defineProperty(this, "_skipped", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_couldStackTo", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "_reallyStackedTo", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "_stackedSeries", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "_aLocationX0", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_aLocationX1", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_aLocationY0", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            Object.defineProperty(this, "_aLocationY1", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_showBullets", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "valueXFields", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["valueX", "openValueX", "lowValueX", "highValueX"],
            }),
            Object.defineProperty(this, "valueYFields", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["valueY", "openValueY", "lowValueY", "highValueY"],
            }),
            Object.defineProperty(this, "_valueXFields", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_valueYFields", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_valueXShowFields", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_valueYShowFields", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "__valueXShowFields", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "__valueYShowFields", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_emptyDataItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new a.z(this, void 0, {}),
            }),
            Object.defineProperty(this, "_dataSetId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_tooltipFieldX", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_tooltipFieldY", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_posXDp", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_posYDp", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        _afterNew() {
          this.fields.push(
            "categoryX",
            "categoryY",
            "openCategoryX",
            "openCategoryY"
          ),
            this.valueFields.push(
              "valueX",
              "valueY",
              "openValueX",
              "openValueY",
              "lowValueX",
              "lowValueY",
              "highValueX",
              "highValueY"
            ),
            this._setRawDefault("vcx", 1),
            this._setRawDefault("vcy", 1),
            this._setRawDefault("valueXShow", "valueXWorking"),
            this._setRawDefault("valueYShow", "valueYWorking"),
            this._setRawDefault("openValueXShow", "openValueXWorking"),
            this._setRawDefault("openValueYShow", "openValueYWorking"),
            this._setRawDefault("lowValueXShow", "lowValueXWorking"),
            this._setRawDefault("lowValueYShow", "lowValueYWorking"),
            this._setRawDefault("highValueXShow", "highValueXWorking"),
            this._setRawDefault("highValueYShow", "highValueYWorking"),
            this._setRawDefault("lowValueXGrouped", "low"),
            this._setRawDefault("lowValueYGrouped", "low"),
            this._setRawDefault("highValueXGrouped", "high"),
            this._setRawDefault("highValueYGrouped", "high"),
            super._afterNew(),
            this.set("maskContent", !0),
            this._disposers.push(
              this.axisRanges.events.onAll((e) => {
                if ("clear" === e.type)
                  u.each(e.oldValues, (e) => {
                    this._removeAxisRange(e);
                  });
                else if ("push" === e.type) this._processAxisRange(e.newValue);
                else if ("setIndex" === e.type)
                  this._processAxisRange(e.newValue);
                else if ("insertIndex" === e.type)
                  this._processAxisRange(e.newValue);
                else if ("removeIndex" === e.type)
                  this._removeAxisRange(e.oldValue);
                else {
                  if ("moveIndex" !== e.type)
                    throw new Error("Unknown IStreamEvent type");
                  this._processAxisRange(e.value);
                }
              })
            ),
            this.states.create("hidden", { opacity: 1, visible: !1 }),
            this.onPrivate("startIndex", () => {
              this.root.events.once("frameended", () => {
                this.updateLegendValue();
              });
            }),
            this.onPrivate("endIndex", () => {
              this.root.events.once("frameended", () => {
                this.updateLegendValue();
              });
            }),
            this._makeFieldNames();
        }
        _processAxisRange(e) {
          const t = r.W.new(this._root, {});
          (e.container = t), this.children.push(t), (e.series = this);
          const i = e.axisDataItem;
          i.setRaw("isRange", !0);
          const s = i.component;
          if (s) {
            s._processAxisRange(i, ["range", "series"]);
            const e = i.get("bullet");
            if (e) {
              const t = e.get("sprite");
              t && t.setPrivate("visible", !1);
            }
            const a = i.get("axisFill");
            a && t.set("mask", a), s._seriesAxisRanges.push(i);
          }
        }
        _removeAxisRange(e) {
          const t = e.axisDataItem,
            i = t.component;
          i.disposeDataItem(t), u.remove(i._seriesAxisRanges, t);
          const s = e.container;
          s && s.dispose();
        }
        _updateFields() {
          super._updateFields(),
            (this._valueXFields = []),
            (this._valueYFields = []),
            (this._valueXShowFields = []),
            (this._valueYShowFields = []),
            (this.__valueXShowFields = []),
            (this.__valueYShowFields = []),
            this.valueXFields &&
              u.each(this.valueXFields, (e) => {
                if (this.get(e + "Field")) {
                  this._valueXFields.push(e);
                  let t = this.get(e + "Show");
                  this.__valueXShowFields.push(t),
                    -1 != t.indexOf("Working")
                      ? this._valueXShowFields.push(t.split("Working")[0])
                      : this._valueXShowFields.push(t);
                }
              }),
            this.valueYFields &&
              u.each(this.valueYFields, (e) => {
                if (this.get(e + "Field")) {
                  this._valueYFields.push(e);
                  let t = this.get(e + "Show");
                  this.__valueYShowFields.push(t),
                    -1 != t.indexOf("Working")
                      ? this._valueYShowFields.push(t.split("Working")[0])
                      : this._valueYShowFields.push(t);
                }
              });
        }
        _dispose() {
          super._dispose(), (this._bullets = {});
          const e = this.chart;
          e && e.series.removeValue(this),
            u.removeFirst(this.get("xAxis").series, this),
            u.removeFirst(this.get("yAxis").series, this);
        }
        _min(e, t) {
          let i =
            ((a = t),
            null == (s = this.getPrivate(e))
              ? a
              : null == a
              ? s
              : a < s
              ? a
              : s);
          var s, a;
          this.setPrivate(e, i);
        }
        _max(e, t) {
          let i =
            ((a = t),
            null == (s = this.getPrivate(e))
              ? a
              : null == a
              ? s
              : a > s
              ? a
              : s);
          var s, a;
          this.setPrivate(e, i);
        }
        _shouldMakeBullet(e) {
          const t = this.get("xAxis"),
            i = this.get("yAxis"),
            s = this.get("baseAxis");
          if (!t.inited || !i.inited) return !1;
          const a = this.get("minBulletDistance", 0);
          if (a > 0) {
            let e = this.startIndex(),
              o = this.endIndex() - e;
            if (t == s) {
              if (t.get("renderer").axisLength() / o < a / 5) return !1;
            } else if (i == s && i.get("renderer").axisLength() / o < a / 5)
              return !1;
          }
          return null != e.get(this._xField) && null != e.get(this._yField);
        }
        _makeFieldNames() {
          const e = this.get("xAxis"),
            t = this.get("yAxis"),
            i = e.getPrivate("name"),
            s = d.capitalizeFirst(i),
            a = t.getPrivate("name"),
            o = d.capitalizeFirst(a),
            n = e.get("renderer").getPrivate("letter"),
            r = t.get("renderer").getPrivate("letter"),
            l = "open",
            h = "low",
            c = "high",
            u = "Show";
          "ValueAxis" === e.className
            ? ((this._xField = this.get(i + n + u)),
              (this._xOpenField = this.get(l + s + n + u)),
              (this._xLowField = this.get(h + s + n + u)),
              (this._xHighField = this.get(c + s + n + u)))
            : ((this._xField = i + n),
              (this._xOpenField = l + s + n),
              (this._xLowField = h + s + n),
              (this._xHighField = c + s + n)),
            "ValueAxis" === t.className
              ? ((this._yField = this.get(a + r + u)),
                (this._yOpenField = this.get(l + o + r + u)),
                (this._yLowField = this.get(h + o + r + u)),
                (this._yHighField = this.get(c + o + r + u)))
              : ((this._yField = a + r),
                (this._yOpenField = l + o + r),
                (this._yLowField = h + o + r),
                (this._yHighField = c + o + r));
        }
        _fixVC() {
          const e = this.get("xAxis"),
            t = this.get("yAxis"),
            i = this.get("baseAxis"),
            s = this.states.lookup("hidden"),
            a = this.get("sequencedInterpolation");
          if (s) {
            let o = 0;
            a && (o = 0.999999999999),
              e === i
                ? s.set("vcy", o)
                : (t === i || s.set("vcy", o), s.set("vcx", o));
          }
        }
        _handleMaskBullets() {
          this.isDirty("maskBullets") &&
            this.bulletsContainer.set("maskContent", this.get("maskBullets"));
        }
        _fixPosition() {
          const e = this.get("xAxis"),
            t = this.get("yAxis");
          this.set(
            "x",
            e.x() -
              d.relativeToValue(e.get("centerX", 0), e.width()) -
              e.parent.get("paddingLeft", 0)
          ),
            this.set(
              "y",
              t.y() -
                d.relativeToValue(t.get("centerY", 0), t.height()) -
                t.parent.get("paddingTop", 0)
            ),
            this.bulletsContainer.set("y", this.y()),
            this.bulletsContainer.set("x", this.x());
        }
        _prepareChildren() {
          super._prepareChildren(),
            (this._bullets = {}),
            (this.isDirty("valueYShow") ||
              this.isDirty("valueXShow") ||
              this.isDirty("openValueYShow") ||
              this.isDirty("openValueXShow") ||
              this.isDirty("lowValueYShow") ||
              this.isDirty("lowValueXShow") ||
              this.isDirty("highValueYShow") ||
              this.isDirty("highValueXShow")) &&
              (this._updateFields(),
              this._makeFieldNames(),
              (this._valuesDirty = !0)),
            (this.isDirty("xAxis") || this.isDirty("yAxis")) &&
              (this._valuesDirty = !0),
            this.set("width", this.get("xAxis").width()),
            this.set("height", this.get("yAxis").height()),
            this._handleMaskBullets();
          const e = this.get("xAxis"),
            t = this.get("yAxis"),
            i = this.get("baseAxis");
          let s, a;
          switch (this.get("tooltipPositionX")) {
            case "open":
              s = this._xOpenField;
              break;
            case "low":
              s = this._xLowField;
              break;
            case "high":
              s = this._xHighField;
              break;
            default:
              s = this._xField;
          }
          switch (((this._tooltipFieldX = s), this.get("tooltipPositionY"))) {
            case "open":
              a = this._yOpenField;
              break;
            case "low":
              a = this._yLowField;
              break;
            case "high":
              a = this._yHighField;
              break;
            default:
              a = this._yField;
          }
          (this._tooltipFieldY = a),
            this.isDirty("baseAxis") && this._fixVC(),
            this._fixPosition();
          const o = this.get("stacked");
          if (
            (this.isDirty("stacked") &&
              (o
                ? (this._valuesDirty && !this._dataProcessed) || this._stack()
                : this._unstack()),
            this._valuesDirty &&
              !this._dataProcessed &&
              ((this._dataProcessed = !0),
              o && this._stack(),
              u.each(this.dataItems, (i) => {
                u.each(this._valueXShowFields, (e) => {
                  let t = i.get(e);
                  null != t &&
                    (o && (t += this.getStackedXValue(i, e)),
                    this._min("minX", t),
                    this._max("maxX", t));
                }),
                  u.each(this._valueYShowFields, (e) => {
                    let t = i.get(e);
                    null != t &&
                      (o && (t += this.getStackedYValue(i, e)),
                      this._min("minY", t),
                      this._max("maxY", t));
                  }),
                  e.processSeriesDataItem(i, this._valueXFields),
                  t.processSeriesDataItem(i, this._valueYFields);
              }),
              (e._seriesValuesDirty = !0),
              (t._seriesValuesDirty = !0),
              this.get("ignoreMinMax") ||
                ((this.isPrivateDirty("minX") || this.isPrivateDirty("maxX")) &&
                  e.markDirtyExtremes(),
                (this.isPrivateDirty("minY") || this.isPrivateDirty("maxY")) &&
                  t.markDirtyExtremes()),
              this._markStakedDirtyStack(),
              this.get("tooltipDataItem") || this.updateLegendValue(void 0)),
            (this.isDirty("vcx") || this.isDirty("vcy")) &&
              this._markStakedDirtyStack(),
            this._dataGrouped ||
              (e._groupSeriesData(this),
              t._groupSeriesData(this),
              (this._dataGrouped = !0)),
            this._valuesDirty ||
              this.isPrivateDirty("startIndex") ||
              this.isPrivateDirty("adjustedStartIndex") ||
              this.isPrivateDirty("endIndex") ||
              this.isDirty("vcx") ||
              this.isDirty("vcy") ||
              this._stackDirty ||
              this._sizeDirty)
          ) {
            let s = this.startIndex(),
              a = this.endIndex(),
              o = this.get("minBulletDistance", 0);
            if (
              (o > 0 &&
                i &&
                (i.get("renderer").axisLength() / (a - s) > o
                  ? (this._showBullets = !0)
                  : (this._showBullets = !1)),
              (this._psi != s ||
                this._pei != a ||
                this.isDirty("vcx") ||
                this.isDirty("vcy") ||
                this.isPrivateDirty("adjustedStartIndex") ||
                this._stackDirty ||
                this._valuesDirty) &&
                !this._selectionProcessed)
            ) {
              this._selectionProcessed = !0;
              const o = this.get("vcx", 1),
                n = this.get("vcy", 1),
                r = this.get("stacked", !1),
                l = this.getPrivate("outOfSelection");
              if (i === e || !i)
                if (
                  (t._calculateTotals(),
                  this.setPrivateRaw("selectionMinY", void 0),
                  this.setPrivateRaw("selectionMaxY", void 0),
                  l)
                )
                  t.markDirtySelectionExtremes();
                else
                  for (let e = s; e < a; e++)
                    this.processYSelectionDataItem(this.dataItems[e], n, r);
              if (i === t || !i)
                if (
                  (e._calculateTotals(),
                  this.setPrivateRaw("selectionMinX", void 0),
                  this.setPrivateRaw("selectionMaxX", void 0),
                  l)
                )
                  t.markDirtySelectionExtremes();
                else
                  for (let e = s; e < a; e++)
                    this.processXSelectionDataItem(this.dataItems[e], o, r);
              if (
                (i === e || !i) &&
                ("valueYWorking" !== this.get("valueYShow") ||
                  this.get("useSelectionExtremes"))
              ) {
                const e = this.getPrivate("selectionMinY");
                null != e &&
                  (this.setPrivateRaw("minY", e), t.markDirtyExtremes());
                const i = this.getPrivate("selectionMaxY");
                null != i &&
                  (this.setPrivateRaw("maxY", i), t.markDirtyExtremes());
              }
              if (
                (i === t || !i) &&
                ("valueXWorking" !== this.get("valueXShow") ||
                  this.get("useSelectionExtremes"))
              ) {
                const i = this.getPrivate("selectionMinX");
                null != i &&
                  (this.setPrivateRaw("minX", i), t.markDirtyExtremes());
                const s = this.getPrivate("selectionMaxX");
                null != s &&
                  (this.setPrivateRaw("maxX", s), e.markDirtyExtremes());
              }
              (this.isPrivateDirty("selectionMinX") ||
                this.isPrivateDirty("selectionMaxX")) &&
                e.markDirtySelectionExtremes(),
                (this.isPrivateDirty("selectionMinY") ||
                  this.isPrivateDirty("selectionMaxY")) &&
                  t.markDirtySelectionExtremes();
            }
          }
        }
        _makeRangeMask() {
          if (this.axisRanges.length > 0) {
            let e = this._mainContainerMask;
            null == e &&
              ((e = this.children.push(l.T.new(this._root, {}))),
              (this._mainContainerMask = e),
              e.set("draw", (t, i) => {
                const s = this.parent;
                if (s) {
                  const e = this._root.container.width(),
                    a = this._root.container.height();
                  t.moveTo(-e, -a),
                    t.lineTo(-e, 2 * a),
                    t.lineTo(2 * e, 2 * a),
                    t.lineTo(2 * e, -a),
                    t.lineTo(-e, -a),
                    this.axisRanges.each((e) => {
                      const a = e.axisDataItem.get("axisFill");
                      if (s && a) {
                        let e = a.get("draw");
                        e && e(t, i);
                      }
                    });
                }
                this.mainContainer._display.mask = e._display;
              })),
              e.markDirty(),
              e._markDirtyKey("fill");
          } else this.mainContainer._display.mask = null;
        }
        _updateChildren() {
          super._updateChildren(),
            (this._x = this.x()),
            (this._y = this.y()),
            this._makeRangeMask();
        }
        _stack() {
          const e = this.chart;
          if (e) {
            const t = e.series.indexOf(this);
            if (((this._couldStackTo = []), t > 0)) {
              let i;
              for (
                let s = t - 1;
                s >= 0 &&
                ((i = e.series.getIndex(s)),
                i.get("xAxis") !== this.get("xAxis") ||
                  i.get("yAxis") !== this.get("yAxis") ||
                  i.className !== this.className ||
                  (this._couldStackTo.push(i), i.get("stacked")));
                s--
              );
            }
            this._stackDataItems();
          }
        }
        _unstack() {
          c.each(this._reallyStackedTo, (e, t) => {
            delete t._stackedSeries[this.uid];
          }),
            (this._reallyStackedTo = {}),
            u.each(this.dataItems, (e) => {
              e.setRaw("stackToItemY", void 0),
                e.setRaw("stackToItemX", void 0);
            });
        }
        _stackDataItems() {
          const e = this.get("baseAxis"),
            t = this.get("xAxis"),
            i = this.get("yAxis");
          let s, a;
          e === t
            ? ((s = "valueY"), (a = "stackToItemY"))
            : e === i && ((s = "valueX"), (a = "stackToItemX"));
          let o = this._couldStackTo.length,
            n = 0;
          const r = this.get("stackToNegative");
          (this._reallyStackedTo = {}),
            u.each(this.dataItems, (e) => {
              for (let t = 0; t < o; t++) {
                let i = this._couldStackTo[t],
                  o = i.dataItems[n],
                  l = e.get(s);
                if (o) {
                  let t = o.get(s);
                  if (r) {
                    if (!h.isNumber(l)) break;
                    if (h.isNumber(t)) {
                      if (l >= 0 && t >= 0) {
                        e.setRaw(a, o),
                          (this._reallyStackedTo[i.uid] = i),
                          (i._stackedSeries[this.uid] = this);
                        break;
                      }
                      if (l < 0 && t < 0) {
                        e.setRaw(a, o),
                          (this._reallyStackedTo[i.uid] = i),
                          (i._stackedSeries[this.uid] = this);
                        break;
                      }
                    }
                  } else if (h.isNumber(l) && h.isNumber(t)) {
                    e.setRaw(a, o),
                      (this._reallyStackedTo[i.uid] = i),
                      (i._stackedSeries[this.uid] = this);
                    break;
                  }
                }
              }
              n++;
            });
        }
        processXSelectionDataItem(e, t, i) {
          u.each(this.__valueXShowFields, (s) => {
            let a = e.get(s);
            null != a &&
              (i && (a += this.getStackedXValueWorking(e, s)),
              this._min("selectionMinX", a),
              this._max("selectionMaxX", a * t));
          });
        }
        processYSelectionDataItem(e, t, i) {
          u.each(this.__valueYShowFields, (s) => {
            let a = e.get(s);
            null != a &&
              (i && (a += this.getStackedYValueWorking(e, s)),
              this._min("selectionMinY", a),
              this._max("selectionMaxY", a * t));
          });
        }
        getStackedYValueWorking(e, t) {
          const i = e.get("stackToItemY");
          if (i) {
            const e = i.component;
            return (
              i.get(t, 0) * e.get("vcy", 1) + this.getStackedYValueWorking(i, t)
            );
          }
          return 0;
        }
        getStackedXValueWorking(e, t) {
          const i = e.get("stackToItemX");
          if (i) {
            const e = i.component;
            return (
              i.get(t, 0) * e.get("vcx", 1) + this.getStackedXValueWorking(i, t)
            );
          }
          return 0;
        }
        getStackedYValue(e, t) {
          const i = e.get("stackToItemY");
          return i ? i.get(t, 0) + this.getStackedYValue(i, t) : 0;
        }
        getStackedXValue(e, t) {
          const i = e.get("stackToItemX");
          return i ? i.get(t, 0) + this.getStackedXValue(i, t) : 0;
        }
        createLegendMarker(e) {
          this.updateLegendMarker();
        }
        _markDirtyAxes() {
          (this._axesDirty = !0), this.markDirty();
        }
        _markDataSetDirty() {
          this._afterDataChange(),
            (this._valuesDirty = !0),
            (this._dataProcessed = !1),
            (this._aggregatesCalculated = !1),
            this.markDirty();
        }
        _clearDirty() {
          super._clearDirty(),
            (this._axesDirty = !1),
            (this._selectionProcessed = !1),
            (this._stackDirty = !1),
            (this._dataProcessed = !1);
        }
        _positionBullet(e) {
          let t = e.get("sprite");
          if (t) {
            let i = t.dataItem,
              s = e.get("locationX", i.get("locationX", 0.5)),
              a = e.get("locationY", i.get("locationY", 0.5)),
              o = this.get("xAxis"),
              n = this.get("yAxis"),
              r = o.getDataItemPositionX(
                i,
                this._xField,
                s,
                this.get("vcx", 1)
              ),
              l = n.getDataItemPositionY(
                i,
                this._yField,
                a,
                this.get("vcy", 1)
              ),
              h = this.getPoint(r, l),
              c = i.get("left", h.x),
              u = i.get("right", h.x),
              d = i.get("top", h.y),
              g = i.get("bottom", h.y),
              m = 0,
              p = 0,
              b = u - c,
              _ = g - d;
            if (this._shouldShowBullet(r, l)) {
              t.setPrivate("visible", !e.getPrivate("hidden"));
              let o = e.get("field");
              const n = this.get("baseAxis"),
                u = this.get("xAxis"),
                d = this.get("yAxis");
              if (null != o) {
                let e;
                n == u
                  ? ("value" == o
                      ? (e = this._yField)
                      : "open" == o
                      ? (e = this._yOpenField)
                      : "high" == o
                      ? (e = this._yHighField)
                      : "low" == o && (e = this._yLowField),
                    e &&
                      ((l = d.getDataItemPositionY(
                        i,
                        e,
                        0,
                        this.get("vcy", 1)
                      )),
                      (h = d.get("renderer").positionToPoint(l)),
                      (p = h.y),
                      (m = c + b * s)))
                  : ("value" == o
                      ? (e = this._xField)
                      : "open" == o
                      ? (e = this._xOpenField)
                      : "high" == o
                      ? (e = this._xHighField)
                      : "low" == o && (e = this._xLowField),
                    e &&
                      ((r = u.getDataItemPositionX(
                        i,
                        e,
                        0,
                        this.get("vcx", 1)
                      )),
                      (h = u.get("renderer").positionToPoint(r)),
                      (m = h.x),
                      (p = g - _ * a)));
              } else (m = c + b * s), (p = g - _ * a);
              const x = e.get("stacked");
              if (x) {
                const e = this.chart;
                if (n == u) {
                  let i = this._bullets[r + "_" + l];
                  if (i) {
                    let s = i.bounds(),
                      a = t.localBounds(),
                      o = p;
                    (p = s.top),
                      "down" == x
                        ? (p = s.bottom - a.top)
                        : "auto" == x
                        ? e &&
                          (o < e.plotContainer.height() / 2
                            ? (p = s.bottom - a.top)
                            : (p += a.bottom))
                        : (p += a.bottom);
                  }
                  this._bullets[r + "_" + l] = t;
                } else {
                  let i = this._bullets[r + "_" + l];
                  if (i) {
                    let s = i.bounds(),
                      a = t.localBounds(),
                      o = m;
                    (m = s.right),
                      "down" == x
                        ? (m = s.left - a.right)
                        : "auto" == x
                        ? e &&
                          (o < e.plotContainer.width() / 2
                            ? (m = s.left - a.right)
                            : (m -= a.left))
                        : (m -= a.left);
                  }
                  this._bullets[r + "_" + l] = t;
                }
              }
              t.isType("Label") &&
                (t.setPrivate("maxWidth", Math.abs(b)),
                t.setPrivate("maxHeight", Math.abs(_))),
                t.setAll({ x: m, y: p });
            } else t.setPrivate("visible", !1);
          }
        }
        _shouldShowBullet(e, t) {
          return this._showBullets;
        }
        setDataSet(e) {
          if (this._dataSets[e]) {
            this._handleDataSetChange(),
              (this._dataItems = this._dataSets[e]),
              this._markDataSetDirty(),
              (this._dataSetId = e);
            const t = "datasetchanged";
            this.events.isEnabled(t) &&
              this.events.dispatch(t, { type: t, target: this, id: e });
          }
        }
        resetGrouping() {
          c.each(this._dataSets, (e, t) => {
            t != this._mainDataItems &&
              u.each(t, (e) => {
                this.disposeDataItem(e);
              });
          }),
            (this._dataSets = {}),
            (this._dataItems = this.mainDataItems);
        }
        _handleDataSetChange() {
          u.each(this._dataItems, (e) => {
            let t = e.bullets;
            t &&
              u.each(t, (e) => {
                if (e) {
                  let t = e.get("sprite");
                  t && t.setPrivate("visible", !1);
                }
              });
          }),
            (this._selectionProcessed = !1);
        }
        show(e) {
          const t = Object.create(null, { show: { get: () => super.show } });
          return (0, s.mG)(this, void 0, void 0, function* () {
            this._fixVC();
            let i = [];
            i.push(
              t.show.call(this, e).then(() => {
                this._isShowing = !1;
                let e = this.get("xAxis"),
                  t = this.get("yAxis"),
                  i = this.get("baseAxis");
                t !== i && t.markDirtySelectionExtremes(),
                  e !== i && e.markDirtySelectionExtremes();
              })
            ),
              i.push(this.bulletsContainer.show(e)),
              i.push(this._sequencedShowHide(!0, e)),
              yield Promise.all(i);
          });
        }
        hide(e) {
          const t = Object.create(null, { hide: { get: () => super.hide } });
          return (0, s.mG)(this, void 0, void 0, function* () {
            this._fixVC();
            let i = [];
            i.push(
              t.hide.call(this, e).then(() => {
                this._isHiding = !1;
              })
            ),
              i.push(this.bulletsContainer.hide(e)),
              i.push(this._sequencedShowHide(!1, e)),
              yield Promise.all(i);
          });
        }
        showDataItem(e, t) {
          const i = Object.create(null, {
            showDataItem: { get: () => super.showDataItem },
          });
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s = [i.showDataItem.call(this, e, t)];
            h.isNumber(t) || (t = this.get("stateAnimationDuration", 0));
            const a = this.get("stateAnimationEasing");
            u.each(this._valueFields, (i) => {
              s.push(
                e
                  .animate({
                    key: i + "Working",
                    to: e.get(i),
                    duration: t,
                    easing: a,
                  })
                  .waitForStop()
              );
            }),
              yield Promise.all(s);
          });
        }
        hideDataItem(e, t) {
          const i = Object.create(null, {
            hideDataItem: { get: () => super.hideDataItem },
          });
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s = [i.hideDataItem.call(this, e, t)],
              a = this.states.create("hidden", {});
            h.isNumber(t) ||
              (t = a.get(
                "stateAnimationDuration",
                this.get("stateAnimationDuration", 0)
              ));
            const o = a.get(
                "stateAnimationEasing",
                this.get("stateAnimationEasing")
              ),
              n = this.get("xAxis"),
              r = this.get("yAxis"),
              l = this.get("baseAxis"),
              c = this.get("stacked");
            if (
              ((l !== n && l) ||
                u.each(this._valueYFields, (i) => {
                  let a = r.getPrivate("min"),
                    n = r.baseValue();
                  h.isNumber(a) && a > n && (n = a),
                    c && (n = 0),
                    null != e.get(i) &&
                      s.push(
                        e
                          .animate({
                            key: i + "Working",
                            to: n,
                            duration: t,
                            easing: o,
                          })
                          .waitForStop()
                      );
                }),
              l === r || !l)
            ) {
              let i = n.getPrivate("min"),
                a = n.baseValue();
              h.isNumber(i) && i > a && (a = i),
                c && (a = 0),
                u.each(this._valueXFields, (i) => {
                  null != e.get(i) &&
                    s.push(
                      e
                        .animate({
                          key: i + "Working",
                          to: a,
                          duration: t,
                          easing: o,
                        })
                        .waitForStop()
                    );
                });
            }
            yield Promise.all(s);
          });
        }
        _markDirtyStack() {
          (this._stackDirty = !0),
            this.markDirty(),
            this._markStakedDirtyStack();
        }
        _markStakedDirtyStack() {
          const e = this._stackedSeries;
          e &&
            c.each(e, (e, t) => {
              t._stackDirty || t._markDirtyStack();
            });
        }
        _afterChanged() {
          super._afterChanged(),
            this._skipped && (this._markDirtyAxes(), (this._skipped = !1));
        }
        showDataItemTooltip(e) {
          this.getPrivate("doNotUpdateLegend") ||
            (this.updateLegendMarker(e), this.updateLegendValue(e));
          const t = this.get("tooltip");
          if (t)
            if (!this.isHidden() && this.get("visible")) {
              if ((t._setDataItem(e), e)) {
                let i = this.get("locationX", 0),
                  s = this.get("locationY", 1),
                  a = e.get("locationX", i),
                  o = e.get("locationY", s);
                const n = this.get("xAxis"),
                  r = this.get("yAxis"),
                  l = this.get("vcx", 1),
                  h = this.get("vcy", 1),
                  c = n.getDataItemPositionX(
                    e,
                    this._tooltipFieldX,
                    this._aLocationX0 +
                      (this._aLocationX1 - this._aLocationX0) * a,
                    l
                  ),
                  d = r.getDataItemPositionY(
                    e,
                    this._tooltipFieldY,
                    this._aLocationY0 +
                      (this._aLocationY1 - this._aLocationY0) * o,
                    h
                  ),
                  g = this.getPoint(c, d);
                let m = !0;
                if (
                  (u.each(this._valueFields, (t) => {
                    null == e.get(t) && (m = !1);
                  }),
                  m)
                ) {
                  const i = this.chart;
                  i && i.inPlot(g)
                    ? (t.label.text.markDirtyText(),
                      t.set("tooltipTarget", this._getTooltipTarget(e)),
                      t.set(
                        "pointTo",
                        this._display.toGlobal({ x: g.x, y: g.y })
                      ))
                    : t._setDataItem(void 0);
                } else t._setDataItem(void 0);
              }
            } else this.hideTooltip();
        }
        hideTooltip() {
          const e = this.get("tooltip");
          return e && e.set("tooltipTarget", this), super.hideTooltip();
        }
        _getTooltipTarget(e) {
          if ("bullet" == this.get("seriesTooltipTarget")) {
            const t = e.bullets;
            if (t && t.length > 0) {
              const e = t[0].get("sprite");
              if (e) return e;
            }
          }
          return this;
        }
        updateLegendValue(e) {
          const t = this.get("legendDataItem");
          if (t) {
            const i = t.get("label");
            if (i) {
              let t = "";
              e
                ? (i._setDataItem(e),
                  (t = this.get(
                    "legendLabelText",
                    i.get("text", this.get("name", ""))
                  )))
                : (i._setDataItem(this._emptyDataItem),
                  (t = this.get(
                    "legendRangeLabelText",
                    this.get(
                      "legendLabelText",
                      i.get("text", this.get("name", ""))
                    )
                  ))),
                i.set("text", t);
            }
            const s = t.get("valueLabel");
            if (s) {
              let t = "";
              e
                ? (s._setDataItem(e),
                  (t = this.get("legendValueText", s.get("text", ""))))
                : (s._setDataItem(this._emptyDataItem),
                  (t = this.get("legendRangeValueText", s.get("text", "")))),
                s.set("text", t);
            }
          }
        }
        _getItemReaderLabel() {
          let e = "X: {" + this._xField;
          return (
            this.get("xAxis").isType("DateAxis") && (e += ".formatDate()"),
            (e += "}; Y: {" + this._yField),
            this.get("yAxis").isType("DateAxis") && (e += ".formatDate()"),
            (e += "}"),
            e
          );
        }
        getPoint(e, t) {
          let i = this.get("xAxis").get("renderer").positionToCoordinate(e),
            s = this.get("yAxis").get("renderer").positionToCoordinate(t),
            a = 999999999;
          return (
            s < -a && (s = -a),
            s > a && (s = a),
            i < -a && (i = -a),
            i > a && (i = a),
            { x: i, y: s }
          );
        }
        _shouldInclude(e) {
          return !0;
        }
        handleCursorHide() {
          this.hideTooltip(),
            this.updateLegendValue(void 0),
            this.updateLegendMarker(void 0);
        }
        _afterDataChange() {
          super._afterDataChange(),
            this.get("xAxis")._markDirtyKey("start"),
            this.get("yAxis")._markDirtyKey("start"),
            this.resetExtremes();
        }
        resetExtremes() {
          this.setPrivate("selectionMinX", void 0),
            this.setPrivate("selectionMaxX", void 0),
            this.setPrivate("selectionMinY", void 0),
            this.setPrivate("selectionMaxY", void 0),
            this.setPrivate("minX", void 0),
            this.setPrivate("minY", void 0),
            this.setPrivate("maxX", void 0),
            this.setPrivate("maxY", void 0);
        }
        createAxisRange(e) {
          return this.axisRanges.push({ axisDataItem: e });
        }
        get mainDataItems() {
          return this._mainDataItems;
        }
        _adjustStartIndex(e) {
          const t = this.get("xAxis");
          if (this.get("baseAxis") == t && t.isType("DateAxis")) {
            const i = t.baseDuration(),
              s = t.getPrivate("selectionMin", t.getPrivate("min", 0)),
              a = i * this.get("locationX", 0.5);
            let o = -1 / 0;
            for (; o < s; ) {
              const t = this.dataItems[e];
              if (!t) break;
              {
                const i = t.open;
                if (
                  ((o = i ? i.valueX : t.get("valueX", 0)), (o += a), !(o < s))
                )
                  break;
                e++;
              }
            }
          }
          return e;
        }
      }
      Object.defineProperty(g, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "XYSeries",
      }),
        Object.defineProperty(g, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: o.F.classNames.concat([g.className]),
        });
    },
    3405: function (e, t, i) {
      i.r(t),
        i.d(t, {
          Axis: function () {
            return c.R;
          },
          AxisBullet: function () {
            return P._;
          },
          AxisLabel: function () {
            return w.k;
          },
          AxisLabelRadial: function () {
            return D.p;
          },
          AxisRenderer: function () {
            return I.Y;
          },
          AxisRendererX: function () {
            return k.n;
          },
          AxisRendererY: function () {
            return M.j;
          },
          AxisTick: function () {
            return T.T;
          },
          BaseColumnSeries: function () {
            return h.d;
          },
          Candlestick: function () {
            return C.j;
          },
          CandlestickSeries: function () {
            return Y.$;
          },
          CategoryAxis: function () {
            return b;
          },
          CategoryDateAxis: function () {
            return x;
          },
          ColumnSeries: function () {
            return N.d;
          },
          DateAxis: function () {
            return v.S;
          },
          DefaultTheme: function () {
            return Q.l;
          },
          DurationAxis: function () {
            return y;
          },
          GaplessDateAxis: function () {
            return f.J;
          },
          Grid: function () {
            return A.r;
          },
          LineSeries: function () {
            return R.e;
          },
          OHLC: function () {
            return S;
          },
          OHLCSeries: function () {
            return L;
          },
          SmoothedXLineSeries: function () {
            return E;
          },
          SmoothedXYLineSeries: function () {
            return z;
          },
          SmoothedYLineSeries: function () {
            return V;
          },
          StepLineSeries: function () {
            return Z;
          },
          ValueAxis: function () {
            return p.m;
          },
          XYChart: function () {
            return s.z;
          },
          XYChartScrollbar: function () {
            return r;
          },
          XYCursor: function () {
            return l.L;
          },
          XYSeries: function () {
            return O.o;
          },
        });
      var s = i(6901),
        a = i(6001),
        o = i(1479),
        n = i(7652);
      class r extends a.L {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "chart", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(
                s.z.new(this._root, {
                  themeTags: ["chart"],
                  interactive: !1,
                  interactiveChildren: !1,
                  panX: !1,
                  panY: !1,
                  wheelX: "none",
                  wheelY: "none",
                })
              ),
            }),
            Object.defineProperty(this, "overlay", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.children.push(
                o.T.new(this._root, { themeTags: ["overlay"], interactive: !1 })
              ),
            });
        }
        _afterNew() {
          this._addOrientationClass(),
            (this._settings.themeTags = n.mergeTags(this._settings.themeTags, [
              "scrollbar",
              "xy",
              "chart",
              this._settings.orientation,
            ]));
          const e = this.children;
          e.moveValue(this.thumb),
            e.moveValue(this.startGrip),
            e.moveValue(this.endGrip),
            this.thumb.set("opacity", 0),
            this.thumb.states.create("hover", { opacity: 0.2 });
          const t = this.chart.plotContainer;
          t.set("interactive", !1),
            t.remove("background"),
            t.children.removeValue(this.chart.zoomOutButton),
            super._afterNew();
        }
        _updateThumb() {
          super._updateThumb(),
            this.overlay.set("draw", (e) => {
              const t = this.startGrip,
                i = this.endGrip;
              let s = t.x(),
                a = t.y(),
                o = i.x(),
                n = i.y();
              const r = this.height(),
                l = this.width();
              s > o && ([s, o] = [o, s]),
                a > n && ([a, n] = [n, a]),
                "horizontal" === this.get("orientation")
                  ? (e.moveTo(0, 0),
                    e.lineTo(s, 0),
                    e.lineTo(s, r),
                    e.lineTo(0, r),
                    e.lineTo(0, 0),
                    e.moveTo(o, 0),
                    e.lineTo(l, 0),
                    e.lineTo(l, r),
                    e.lineTo(o, r),
                    e.lineTo(o, 0))
                  : (e.moveTo(0, 0),
                    e.lineTo(0, a),
                    e.lineTo(l, a),
                    e.lineTo(l, 0),
                    e.lineTo(0, 0),
                    e.moveTo(0, n),
                    e.lineTo(0, r),
                    e.lineTo(l, r),
                    e.lineTo(l, n),
                    e.lineTo(0, n));
            });
        }
      }
      Object.defineProperty(r, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "XYChartScrollbar",
      }),
        Object.defineProperty(r, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a.L.classNames.concat([r.className]),
        });
      var l = i(3355),
        h = i(757),
        c = i(6515),
        u = i(5071),
        d = i(5040),
        g = i(751),
        m = i(2132),
        p = i(7261);
      class b extends c.R {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_frequency", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_itemMap", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            });
        }
        _afterNew() {
          (this._settings.themeTags = n.mergeTags(this._settings.themeTags, [
            "axis",
          ])),
            this.fields.push("category"),
            this.setPrivateRaw("name", "category"),
            this.addTag("category"),
            super._afterNew();
        }
        _prepareChildren() {
          super._prepareChildren();
          const e = this.dataItems.length;
          let t = 0;
          this._valuesDirty &&
            ((this._itemMap = {}),
            u.each(this.dataItems, (e) => {
              e.setRaw("index", t), (this._itemMap[e.get("category")] = e), t++;
            }),
            this.setPrivateRaw("maxZoomFactor", e)),
            this.setPrivateRaw(
              "startIndex",
              Math.max(Math.round(this.get("start", 0) * e), 0)
            ),
            this.setPrivateRaw(
              "endIndex",
              Math.min(Math.round(this.get("end", 1) * e), e)
            ),
            (this._sizeDirty ||
              this._valuesDirty ||
              this.isDirty("start") ||
              this.isDirty("end") ||
              this.isPrivateDirty("endIndex") ||
              this.isPrivateDirty("startIndex") ||
              this.isPrivateDirty("width") ||
              this.isPrivateDirty("height")) &&
              this.dataItems.length > 0 &&
              (this._handleRangeChange(),
              this._prepareAxisItems(),
              this._updateAxisRanges());
        }
        _handleRangeChange() {
          u.each(this.series, (e) => {
            let t = this.dataItems[this.startIndex()].get("category"),
              i = this.dataItems[this.endIndex() - 1].get("category"),
              s = e.get("baseAxis"),
              a = e.get("xAxis"),
              o = e.get("yAxis");
            if (a instanceof b && o instanceof b) e._markDirtyAxes();
            else if (s === this) {
              let n,
                r,
                l = o;
              if (
                (a === s
                  ? (e.get("categoryXField") && (n = "categoryX"),
                    e.get("openCategoryXField") && (r = "openCategoryX"))
                  : o === s &&
                    (e.get("categoryYField") && (n = "categoryY"),
                    e.get("openCategoryYField") && (r = "openCategoryY"),
                    (l = a)),
                l instanceof p.m && (n || r))
              ) {
                let s, a;
                for (let i = 0, a = e.dataItems.length; i < a; i++) {
                  let a = e.dataItems[i];
                  if (n && a.get(n) === t) {
                    s = a;
                    break;
                  }
                  if (r && a.get(r) === t) {
                    s = a;
                    break;
                  }
                }
                for (let t = e.dataItems.length - 1; t >= 0; t--) {
                  let s = e.dataItems[t];
                  if (n && s.get(n) === i) {
                    a = s;
                    break;
                  }
                  if (r && s.get(r) === i) {
                    a = s;
                    break;
                  }
                }
                let o = 0,
                  l = e.dataItems.length;
                s && (o = e.dataItems.indexOf(s)),
                  a && (l = e.dataItems.indexOf(a) + 1),
                  e.setPrivate("startIndex", o),
                  e.setPrivate("endIndex", l);
                let h = !1;
                for (let t = o; t < l; t++) {
                  const i = e.dataItems[t];
                  if (
                    (u.each(e.__valueXShowFields, (e) => {
                      null != i.get(e) && (h = !0);
                    }),
                    u.each(e.__valueYShowFields, (e) => {
                      null != i.get(e) && (h = !0);
                    }),
                    h)
                  )
                    break;
                }
                e.setPrivate("outOfSelection", !h);
              }
              e._markDirtyAxes();
            }
          });
        }
        _prepareAxisItems() {
          var e;
          const t = this.get("renderer"),
            i = this.dataItems.length;
          let s = this.startIndex();
          s > 0 && s--;
          let a = this.endIndex();
          a < i && a++;
          const o = t.get("minorLabelsEnabled"),
            n = t.get("minorGridEnabled", o);
          let r = t.axisLength() / Math.max(t.get("minGridDistance"), 1),
            l = Math.max(1, Math.min(i, Math.ceil((a - s) / r)));
          (s = Math.floor(s / l) * l), (this._frequency = l);
          for (let e = 0; e < i; e++)
            this._toggleDataItem(this.dataItems[e], !1);
          let h = this.dataItems[s].get("index", 0);
          for (let e = s; e < a; e += l) {
            let t = this.dataItems[e];
            this._createAssets(t, []), this._toggleDataItem(t, !0);
            let i = l;
            n && (i = 1), this._prepareDataItem(t, h, i), h++;
          }
          if (t.get("minorGridEnabled"))
            for (let t = s; t < a; t++) {
              let i = this.dataItems[t];
              t % l != 0 &&
                (this._createAssets(i, ["minor"], !0),
                this._toggleDataItem(i, !0),
                this._prepareDataItem(i, 0, 1),
                o ||
                  null === (e = i.get("label")) ||
                  void 0 === e ||
                  e.setPrivate("visible", !1));
            }
          this._updateGhost();
        }
        _prepareDataItem(e, t, i) {
          let s = this.get("renderer"),
            a = e.get("categoryLocation", 0),
            o = e.get("endCategoryLocation", 1),
            n = e.get("index");
          d.isNumber(n) || (n = this.categoryToIndex(e.get("category")));
          let r,
            l = this.indexToPosition(n, a),
            h = e.get("endCategory");
          h
            ? ((r = this.categoryToIndex(h)), d.isNumber(r) || (r = n))
            : (r = n);
          let c,
            u,
            g = this.indexToPosition(r, o);
          (c = e.get("isRange") ? r : n + this._frequency - 1),
            (u = this.indexToPosition(c, o)),
            s.updateLabel(e.get("label"), l, g, i),
            s.updateGrid(e.get("grid"), l, g),
            s.updateTick(e.get("tick"), l, g, i),
            s.updateFill(e.get("axisFill"), l, u),
            this._processBullet(e),
            s.updateBullet(e.get("bullet"), l, g);
          const m = this.get("fillRule");
          m && m(e, t);
        }
        startIndex() {
          let e = this.dataItems.length;
          return Math.min(Math.max(this.getPrivate("startIndex", 0), 0), e - 1);
        }
        endIndex() {
          let e = this.dataItems.length;
          return Math.max(1, Math.min(this.getPrivate("endIndex", e), e));
        }
        baseValue() {}
        basePosition() {
          return 0;
        }
        getX(e) {
          let t = this._itemMap[e];
          return t
            ? this._settings.renderer.positionToCoordinate(
                this.indexToPosition(t.get("index", 0))
              )
            : NaN;
        }
        getY(e) {
          let t = this._itemMap[e];
          return t
            ? this._settings.renderer.positionToCoordinate(
                this.indexToPosition(t.get("index", 0))
              )
            : NaN;
        }
        getDataItemPositionX(e, t, i, s) {
          const a = e.get(t),
            o = this._itemMap[a];
          return o ? this.indexToPosition(o.get("index", 0), i) : NaN;
        }
        getDataItemCoordinateX(e, t, i, s) {
          return this._settings.renderer.positionToCoordinate(
            this.getDataItemPositionX(e, t, i, s)
          );
        }
        getDataItemPositionY(e, t, i, s) {
          const a = e.get(t),
            o = this._itemMap[a];
          return o ? this.indexToPosition(o.get("index", 0), i) : NaN;
        }
        getDataItemCoordinateY(e, t, i, s) {
          return this._settings.renderer.positionToCoordinate(
            this.getDataItemPositionY(e, t, i, s)
          );
        }
        indexToPosition(e, t) {
          d.isNumber(t) || (t = 0.5);
          let i = this.dataItems.length,
            s = this.get("startLocation", 0);
          (i -= s), (i -= 1 - this.get("endLocation", 1));
          let a = (e + t - s) / i,
            o = this.dataItems[e];
          return o && (a += o.get("deltaPosition", 0)), a;
        }
        categoryToIndex(e) {
          let t = this._itemMap[e];
          return t ? t.get("index") : NaN;
        }
        dataItemToPosition(e) {
          return this.indexToPosition(e.get("index"));
        }
        roundAxisPosition(e, t) {
          return (
            (e += (0.5 - t) / this.dataItems.length),
            this.indexToPosition(this.axisPositionToIndex(e), t)
          );
        }
        axisPositionToIndex(e) {
          let t = this.dataItems.length;
          return g.fitToRange(Math.floor(e * t), 0, t - 1);
        }
        getTooltipText(e, t) {
          const i = this.dataItems[this.axisPositionToIndex(e)];
          if (i) {
            const e = i.get("label");
            if (e) return (0, m.q)(e, this.get("tooltipText", ""));
          }
        }
        _updateTooltipText(e, t) {
          e._setDataItem(this.dataItems[this.axisPositionToIndex(t)]),
            e.label.text.markDirtyText();
        }
        getSeriesItem(e, t) {
          if (this.dataItems.length > 0) {
            let i =
                this.getPrivate("name") +
                this.get("renderer").getPrivate("letter"),
              s = this.axisPositionToIndex(t),
              a = e.dataItems[s],
              o = this.dataItems[s],
              n = o.get("category");
            if (a && o && a.get(i) === n) return a;
            for (let t = 0, s = e.dataItems.length; t < s; t++) {
              let s = e.dataItems[t];
              if (s.get(i) === n) return s;
            }
          }
        }
        zoomToIndexes(e, t, i) {
          let s = this.dataItems.length;
          this.zoom(e / s, t / s, i);
        }
        zoomToCategories(e, t, i) {
          this.zoomToIndexes(
            this.categoryToIndex(e),
            this.categoryToIndex(t) + 1,
            i
          );
        }
        getCellWidthPosition() {
          return (
            this._frequency /
            this.dataItems.length /
            (this.get("end", 1) - this.get("start", 0))
          );
        }
        nextPosition(e) {
          null == e && (e = 1),
            "Y" == this.get("renderer").getPrivate("letter") && (e *= -1);
          const t = this.getPrivate("tooltipPosition", 0),
            i = g.fitToRange(
              this.axisPositionToIndex(t) + e,
              0,
              this.dataItems.length - 1
            );
          return this.toGlobalPosition(this.indexToPosition(i));
        }
      }
      Object.defineProperty(b, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "CategoryAxis",
      }),
        Object.defineProperty(b, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: c.R.classNames.concat([b.className]),
        });
      var _ = i(1926);
      class x extends b {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_frequency", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "_itemMap", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            });
        }
        _afterNew() {
          (this._settings.themeTags = n.mergeTags(this._settings.themeTags, [
            "axis",
          ])),
            this.fields.push("category"),
            super._afterNew();
        }
        _prepareAxisItems() {
          this.setPrivateRaw("baseInterval", this.get("baseInterval"));
          const e = this.get("renderer"),
            t = this.dataItems.length;
          let i = this.startIndex();
          i > 0 && i--;
          let s = this.endIndex();
          s < t && s++;
          let a =
              e.axisLength() /
              Math.max(e.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER),
            o = Math.min(t, Math.ceil((s - i) / a));
          (i = Math.floor(i / o) * o), (this._frequency = o);
          for (let e = 0; e < t; e++)
            this._toggleDataItem(this.dataItems[e], !1);
          let n = Number(this.dataItems[i].get("category")),
            r = Number(this.dataItems[s - 1].get("category")),
            l = r - n;
          s - i < a &&
            (l =
              r -
              n -
              ((r - n) / this.baseDuration() - (s - i)) * this.baseDuration());
          let h = _.chooseInterval(0, l, a, this.get("gridIntervals"));
          const c = _.getNextUnit(h.timeUnit),
            g = this.getPrivate("baseInterval");
          _.getIntervalDuration(h) < this.baseDuration() &&
            (h = Object.assign({}, g));
          const m = this.get("dateFormats");
          let p,
            b = -1 / 0,
            x = -1 / 0,
            v = -1 / 0,
            f = [],
            y = !1;
          for (let e = i; e < s; e++) {
            let t = this.dataItems[e],
              i = t.get("index"),
              s = !1,
              a = Number(t.get("category")),
              n = new Date(a),
              r = _.getUnitValue(n, h.timeUnit);
            p = m[h.timeUnit];
            let l = !1;
            "year" != h.timeUnit &&
              "week" != h.timeUnit &&
              c &&
              this.get("markUnitChange") &&
              d.isNumber(b) &&
              _.checkChange(a, b, c, this._root.utc) &&
              ((p = this.get("periodChangeDateFormats")[h.timeUnit]),
              i - 0.5 * o < x && f.pop(),
              f.push({ format: p, dataItem: t }),
              (y = !0),
              (l = !0),
              (x = i),
              (v = r));
            let u = !1;
            "day" === h.timeUnit || "week" === h.timeUnit
              ? i - x >= o && (u = !0)
              : r % h.count == 0 && r != v && (u = !0),
              !l &&
                u &&
                (i - 0.7 * o < x && y && (s = !0),
                s || (f.push({ format: p, dataItem: t }), (x = i), (v = r)),
                (y = !1)),
              (b = a);
          }
          if (f.length > 0) {
            let e = f[0].dataItem.get("index", 0);
            u.each(f, (t) => {
              const i = t.dataItem,
                s = t.format;
              this._createAssets(i, []), this._toggleDataItem(i, !0);
              let a = Number(i.get("category")),
                n = new Date(a);
              const r = i.get("label");
              r && r.set("text", this._root.dateFormatter.format(n, s)),
                e++,
                this._prepareDataItem(i, e, o);
            });
          }
        }
        baseDuration() {
          return _.getIntervalDuration(this.getPrivate("baseInterval"));
        }
        getTooltipText(e, t) {
          let i = this.dataItems[this.axisPositionToIndex(e)];
          if (i) {
            let e =
              this.get("dateFormats")[this.getPrivate("baseInterval").timeUnit];
            return this._root.dateFormatter.format(
              new Date(i.get("category", 0)),
              this.get("tooltipDateFormat", e)
            );
          }
        }
        _updateTooltipText(e, t) {
          e.label.set("text", this.getTooltipText(t));
        }
      }
      Object.defineProperty(x, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "CategoryDateAxis",
      }),
        Object.defineProperty(x, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: b.classNames.concat([x.className]),
        });
      var v = i(5638),
        f = i(8701);
      class y extends p.m {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "_dataGrouped", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_groupingCalculated", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "_intervalDuration", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            });
        }
        _afterNew() {
          (this._settings.themeTags = n.mergeTags(this._settings.themeTags, [
            "axis",
          ])),
            super._afterNew();
        }
        _adjustMinMax(e, t, i, s) {
          let a;
          const o = this.getDurationFormatter(),
            n = this.get("baseUnit");
          if (
            (this.setRaw("maxPrecision", 0),
            "millisecond" == n || "second" == n || "minute" == n || "hour" == n)
          ) {
            i <= 1 && (i = 1), (i = Math.round(i));
            let s = t - e;
            0 === s && (s = Math.abs(t));
            let o = s / i,
              r = [60, 30, 20, 15, 10, 2, 1],
              l = 1;
            "hour" == n && (r = [24, 12, 6, 4, 2, 1]);
            for (let e of r)
              if (s / e > i) {
                l = e;
                break;
              }
            let h = Math.ceil((t - e) / l / i),
              c = Math.log(Math.abs(h)) * Math.LOG10E,
              u = Math.pow(10, Math.floor(c)) / 10,
              d = h / u;
            (h = g.closest(r, d) * u),
              (o = l * h),
              (a = {
                min: (e = Math.floor(e / o) * o),
                max: (t = Math.ceil(t / o) * o),
                step: o,
              });
          } else a = super._adjustMinMax(e, t, i, s);
          return (
            this.setPrivateRaw("durationFormat", o.getFormat(a.step, a.max, n)),
            a
          );
        }
        _formatText(e) {
          return this.getDurationFormatter().format(
            e,
            this.getPrivate("durationFormat"),
            this.get("baseUnit")
          );
        }
        getTooltipText(e, t) {
          const i = this.getDurationFormatter(),
            s = this.get("extraTooltipPrecision", 0),
            a = this.getPrivate("stepDecimalPlaces", 0) + s,
            o = g.round(this.positionToValue(e), a);
          return i.format(
            o,
            this.getPrivate("durationFormat"),
            this.get("baseUnit")
          );
        }
      }
      Object.defineProperty(y, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "DurationAxis",
      }),
        Object.defineProperty(y, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: p.m.classNames.concat([y.className]),
        });
      var P = i(2586),
        w = i(6293),
        D = i(9084),
        T = i(4714),
        A = i(8943),
        I = i(6275),
        k = i(6284),
        M = i(7909),
        O = i(4604),
        C = i(2976),
        Y = i(2312);
      class S extends C.j {
        _draw() {
          const e = this._display;
          e.moveTo(this.get("lowX1", 0), this.get("lowY1", 0)),
            e.lineTo(this.get("highX1", 0), this.get("highY1", 0));
          let t = this.width(),
            i = this.height();
          if ("vertical" == this.get("orientation")) {
            let s = i,
              a = 0;
            e.moveTo(0, s),
              e.lineTo(t / 2, s),
              e.moveTo(t / 2, a),
              e.lineTo(t, a);
          } else {
            let s = 0,
              a = t;
            e.moveTo(s, 0),
              e.lineTo(s, i / 2),
              e.moveTo(a, i / 2),
              e.lineTo(a, i);
          }
        }
      }
      Object.defineProperty(S, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "OHLC",
      }),
        Object.defineProperty(S, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: C.j.classNames.concat([S.className]),
        });
      var F = i(5769),
        X = i(7144);
      class L extends Y.$ {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "columns", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: this.addDisposer(
                new X.o(F.YS.new({ themeTags: ["autocolor"] }), () =>
                  S._new(
                    this._root,
                    {
                      themeTags: n.mergeTags(
                        this.columns.template.get("themeTags", []),
                        ["ohlc", "series", "column"]
                      ),
                    },
                    [this.columns.template]
                  )
                )
              ),
            });
        }
        makeColumn(e, t) {
          const i = this.mainContainer.children.push(t.make());
          return i._setDataItem(e), t.push(i), i;
        }
        _processAxisRange(e) {
          super._processAxisRange(e),
            (e.columns = new X.o(F.YS.new({}), () =>
              S._new(
                this._root,
                {
                  themeTags: n.mergeTags(
                    e.columns.template.get("themeTags", []),
                    ["ohlc", "series", "column"]
                  ),
                },
                [this.columns.template, e.columns.template]
              )
            ));
        }
      }
      Object.defineProperty(L, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "OHLCSeries",
      }),
        Object.defineProperty(L, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Y.$.classNames.concat([L.className]),
        });
      var N = i(62),
        R = i(2338),
        j = i(5892);
      class V extends R.e {
        _afterNew() {
          this._setDefault("curveFactory", (0, j.$)(this.get("tension", 0.5))),
            super._afterNew();
        }
        _updateChildren() {
          this.isDirty("tension") &&
            (this.set("curveFactory", (0, j.$)(this.get("tension", 0.5))),
            (this._valuesDirty = !0)),
            super._updateChildren();
        }
      }
      Object.defineProperty(V, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SmoothedYLineSeries",
      }),
        Object.defineProperty(V, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: R.e.classNames.concat([V.className]),
        });
      var G = i(8289);
      class E extends R.e {
        _afterNew() {
          this._setDefault("curveFactory", (0, G.G)(this.get("tension", 0.5))),
            super._afterNew();
        }
        _updateChildren() {
          this.isDirty("tension") &&
            (this.set("curveFactory", (0, G.G)(this.get("tension", 0.5))),
            (this._valuesDirty = !0)),
            super._updateChildren();
        }
      }
      Object.defineProperty(E, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SmoothedXLineSeries",
      }),
        Object.defineProperty(E, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: R.e.classNames.concat([E.className]),
        });
      var U = i(2818);
      class z extends R.e {
        _afterNew() {
          this._setDefault(
            "curveFactory",
            U.ZP.tension(this.get("tension", 0.5))
          ),
            super._afterNew();
        }
        _updateChildren() {
          this.isDirty("tension") &&
            (this.set("curveFactory", U.ZP.tension(this.get("tension", 0.5))),
            (this._valuesDirty = !0)),
            super._updateChildren();
        }
      }
      Object.defineProperty(z, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SmoothedXYLineSeries",
      }),
        Object.defineProperty(z, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: R.e.classNames.concat([z.className]),
        });
      var W = i(6245);
      function B(e, t) {
        (this._context = e), (this._t = t);
      }
      function H(e) {
        return new B(e, 1);
      }
      B.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = this._y = NaN), (this._point = 0);
        },
        lineEnd: function () {
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, t), this._context.lineTo(e, t);
              else {
                var i = this._x * (1 - this._t) + e * this._t;
                this._context.lineTo(i, this._y), this._context.lineTo(i, t);
              }
          }
          (this._x = e), (this._y = t);
        },
      };
      class Z extends R.e {
        _afterNew() {
          this._setDefault("curveFactory", H), super._afterNew();
        }
        _getPoints(e, t) {
          let i = t.points,
            s = this.get("stepWidth", W.AQ).value / 2,
            a = e.get("locationX", t.locationX),
            o = e.get("locationY", t.locationY),
            n = a,
            r = o;
          t.baseAxis === t.xAxis
            ? ((a -= s), (n += s))
            : t.baseAxis === t.yAxis && ((o -= s), (r += s));
          let l = t.xAxis.getDataItemPositionX(e, t.xField, a, t.vcx),
            h = t.yAxis.getDataItemPositionY(e, t.yField, o, t.vcy),
            c = t.xAxis.getDataItemPositionX(e, t.xField, n, t.vcx),
            u = t.yAxis.getDataItemPositionY(e, t.yField, r, t.vcy);
          if (this._shouldInclude(l)) {
            const d = this.getPoint(l, h),
              g = [d.x, d.y],
              m = this.getPoint(c, u),
              p = [m.x, m.y];
            if (t.fillVisible) {
              let i = l,
                d = h,
                m = c,
                b = u;
              if (
                (t.baseAxis === t.xAxis
                  ? ((d = t.basePosY), (b = t.basePosY))
                  : t.baseAxis === t.yAxis &&
                    ((i = t.basePosX), (m = t.basePosX)),
                t.getOpen)
              ) {
                let l = e.get(t.xOpenField),
                  h = e.get(t.yOpenField);
                if (null != l && null != h)
                  if (
                    ((a = e.get("openLocationX", t.openLocationX)),
                    (o = e.get("openLocationY", t.openLocationY)),
                    (n = a),
                    (r = o),
                    t.baseAxis === t.xAxis
                      ? ((a -= s), (n += s))
                      : t.baseAxis === t.yAxis && ((o -= s), (r += s)),
                    t.stacked)
                  ) {
                    let s = e.get("stackToItemX"),
                      l = e.get("stackToItemY");
                    s
                      ? ((i = t.xAxis.getDataItemPositionX(
                          s,
                          t.xField,
                          a,
                          s.component.get("vcx")
                        )),
                        (m = t.xAxis.getDataItemPositionX(
                          s,
                          t.xField,
                          n,
                          s.component.get("vcx")
                        )))
                      : t.yAxis === t.baseAxis
                      ? ((i = t.basePosX), (m = t.basePosX))
                      : t.baseAxis === t.yAxis &&
                        ((i = t.xAxis.getDataItemPositionX(
                          e,
                          t.xOpenField,
                          a,
                          t.vcx
                        )),
                        (m = t.xAxis.getDataItemPositionX(
                          e,
                          t.xOpenField,
                          n,
                          t.vcx
                        ))),
                      l
                        ? ((d = t.yAxis.getDataItemPositionY(
                            l,
                            t.yField,
                            o,
                            l.component.get("vcy")
                          )),
                          (b = t.yAxis.getDataItemPositionY(
                            l,
                            t.yField,
                            r,
                            l.component.get("vcy")
                          )))
                        : t.xAxis === t.baseAxis
                        ? ((d = t.basePosY), (b = t.basePosY))
                        : t.baseAxis === t.yAxis &&
                          ((d = t.yAxis.getDataItemPositionY(
                            e,
                            t.yOpenField,
                            o,
                            t.vcy
                          )),
                          (b = t.yAxis.getDataItemPositionY(
                            e,
                            t.yOpenField,
                            r,
                            t.vcy
                          )));
                  } else
                    (i = t.xAxis.getDataItemPositionX(
                      e,
                      t.xOpenField,
                      a,
                      t.vcx
                    )),
                      (d = t.yAxis.getDataItemPositionY(
                        e,
                        t.yOpenField,
                        o,
                        t.vcy
                      )),
                      (m = t.xAxis.getDataItemPositionX(
                        e,
                        t.xOpenField,
                        n,
                        t.vcx
                      )),
                      (b = t.yAxis.getDataItemPositionY(
                        e,
                        t.yOpenField,
                        r,
                        t.vcy
                      ));
              }
              let _ = this.getPoint(i, d),
                x = this.getPoint(m, b);
              (g[2] = _.x), (g[3] = _.y), (p[2] = x.x), (p[3] = x.y);
            }
            i.push(g),
              i.push(p),
              e.set("point", {
                x: g[0] + (p[0] - g[0]) / 2,
                y: g[1] + (p[1] - g[1]) / 2,
              });
          }
          this.get("noRisers") && ((t.points = []), t.segments.push(i));
        }
      }
      Object.defineProperty(Z, "className", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "StepLineSeries",
      }),
        Object.defineProperty(Z, "classNames", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: R.e.classNames.concat([Z.className]),
        });
      var Q = i(55);
    },
    7825: function (e, t, i) {
      i.r(t),
        i.d(t, {
          am5xy: function () {
            return s;
          },
        });
      const s = i(3405);
    },
    2818: function (e, t, i) {
      function s(e, t, i) {
        e._context.bezierCurveTo(
          e._x1 + e._k * (e._x2 - e._x0),
          e._y1 + e._k * (e._y2 - e._y0),
          e._x2 + e._k * (e._x1 - t),
          e._y2 + e._k * (e._y1 - i),
          e._x2,
          e._y2
        );
      }
      function a(e, t) {
        (this._context = e), (this._k = (1 - t) / 6);
      }
      i.d(t, {
        xm: function () {
          return s;
        },
      }),
        (a.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._y0 =
              this._y1 =
              this._y2 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                s(this, this._x1, this._y1);
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t);
                break;
              case 1:
                (this._point = 2), (this._x1 = e), (this._y1 = t);
                break;
              case 2:
                this._point = 3;
              default:
                s(this, e, t);
            }
            (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = e),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = t);
          },
        }),
        (t.ZP = (function e(t) {
          function i(e) {
            return new a(e, t);
          }
          return (
            (i.tension = function (t) {
              return e(+t);
            }),
            i
          );
        })(0));
    },
  },
  function (e) {
    var t = (7825, e((e.s = 7825))),
      i = window;
    for (var s in t) i[s] = t[s];
    t.__esModule && Object.defineProperty(i, "__esModule", { value: !0 });
  },
]);
//# sourceMappingURL=xy.js.map
