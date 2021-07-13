(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapas-mapas-module"],{

/***/ "9pgY":
/*!***********************************************!*\
  !*** ./src/app/mapas/mapas-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MapasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapasRoutingModule", function() { return MapasRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/full-screen/full-screen.component */ "Xdc8");
/* harmony import */ var _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/marcadores/marcadores.component */ "YDeP");
/* harmony import */ var _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/zoom-range/zoom-range.component */ "X8r5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        children: [
            { path: 'fullscreen', component: _pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_1__["FullScreenComponent"] },
            { path: 'zoom-range', component: _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_3__["ZoomRangeComponent"] },
            { path: 'marcadores', component: _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_2__["MarcadoresComponent"] },
            { path: '**', redirectTo: 'fullscreen' }
        ]
    }
];
class MapasRoutingModule {
}
MapasRoutingModule.ɵfac = function MapasRoutingModule_Factory(t) { return new (t || MapasRoutingModule)(); };
MapasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MapasRoutingModule });
MapasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MapasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "NnOM":
/*!***************************************!*\
  !*** ./src/app/mapas/mapas.module.ts ***!
  \***************************************/
/*! exports provided: MapasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapasModule", function() { return MapasModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mapas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapas-routing.module */ "9pgY");
/* harmony import */ var _pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/full-screen/full-screen.component */ "Xdc8");
/* harmony import */ var _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/zoom-range/zoom-range.component */ "X8r5");
/* harmony import */ var _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/marcadores/marcadores.component */ "YDeP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class MapasModule {
}
MapasModule.ɵfac = function MapasModule_Factory(t) { return new (t || MapasModule)(); };
MapasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MapasModule });
MapasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _mapas_routing_module__WEBPACK_IMPORTED_MODULE_1__["MapasRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MapasModule, { declarations: [_pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_2__["FullScreenComponent"],
        _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_3__["ZoomRangeComponent"],
        _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_4__["MarcadoresComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _mapas_routing_module__WEBPACK_IMPORTED_MODULE_1__["MapasRoutingModule"]] }); })();


/***/ }),

/***/ "X8r5":
/*!****************************************************************!*\
  !*** ./src/app/mapas/pages/zoom-range/zoom-range.component.ts ***!
  \****************************************************************/
/*! exports provided: ZoomRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomRangeComponent", function() { return ZoomRangeComponent; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["mapa"];
class ZoomRangeComponent {
    constructor() {
        this.zoomLevel = 10;
        this.center = [123, 456];
    }
    ngOnDestroy() {
        this.mapa.off('zoom', () => { });
        this.mapa.off('zoomend', () => { });
        this.mapa.off('move', () => { });
    }
    ngAfterViewInit() {
        this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Map"]({
            container: this.divMapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-64.23822810208624, -31.405245724304315],
            zoom: this.zoomLevel
        });
        this.mapa.on('zoom', () => {
            this.zoomLevel = this.mapa.getZoom();
        });
        this.mapa.on('zoomend', () => {
            if (this.mapa.getZoom() > 20) {
                this.mapa.zoomTo(20);
            }
        });
        this.mapa.on('move', (event) => {
            this.zoomLevel = this.mapa.getZoom();
            const target = event.target;
            const { lng, lat } = target.getCenter();
            this.center = [lng, lat];
        });
    }
    zoomOut() {
        this.mapa.zoomOut();
    }
    zoomIn() {
        this.mapa.zoomIn();
    }
    zoomCambio(value) {
        this.mapa.zoomTo(Number(value));
    }
}
ZoomRangeComponent.ɵfac = function ZoomRangeComponent_Factory(t) { return new (t || ZoomRangeComponent)(); };
ZoomRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ZoomRangeComponent, selectors: [["app-zoom-range"]], viewQuery: function ZoomRangeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divMapa = _t.first);
    } }, decls: 16, vars: 13, consts: [[1, "mapa-container"], ["mapa", ""], [1, "row"], [1, "col-12"], [1, "form-label"], ["type", "range", "min", "0", "max", "20", 1, "form-range", 3, "value", "input"], ["zoomInput", ""], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "float-end", 3, "click"]], template: function ZoomRangeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ZoomRangeComponent_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return ctx.zoomCambio(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ZoomRangeComponent_Template_button_click_12_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ZoomRangeComponent_Template_button_click_14_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" Zoom: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 4, ctx.zoomLevel, "2.0-2"), " - Lng,Lat: [", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 7, ctx.center[0], "2.4-4"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 10, ctx.center[1], "2.4-4"), "] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.zoomLevel);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".mapa-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]{\r\n    background-color: aliceblue;\r\n    border-radius: 5px ;\r\n    position: fixed;\r\n    bottom: 50px;\r\n    left: 50px;\r\n    padding: 10px;\r\n    z-index: 999;\r\n    width: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvb20tcmFuZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoiem9vbS1yYW5nZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcGEtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG4gICAgbGVmdDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Xdc8":
/*!******************************************************************!*\
  !*** ./src/app/mapas/pages/full-screen/full-screen.component.ts ***!
  \******************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FullScreenComponent {
    constructor() { }
    ngOnInit() {
        var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Map"]({
            container: 'mapa',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-64.23822810208624, -31.405245724304315],
            zoom: 18
        });
    }
}
FullScreenComponent.ɵfac = function FullScreenComponent_Factory(t) { return new (t || FullScreenComponent)(); };
FullScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FullScreenComponent, selectors: [["app-full-screen"]], decls: 1, vars: 0, consts: [["id", "mapa"]], template: function FullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#mapa[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJmdWxsLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcGF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "YDeP":
/*!****************************************************************!*\
  !*** ./src/app/mapas/pages/marcadores/marcadores.component.ts ***!
  \****************************************************************/
/*! exports provided: MarcadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadoresComponent", function() { return MarcadoresComponent; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["mapa"];
const _c1 = function (a0) { return { "background-color": a0 }; };
function MarcadoresComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarcadoresComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const marcador_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.irMarcador(marcador_r2.marcador); })("dblclick", function MarcadoresComponent_li_3_Template_li_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.borrarMarcador(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marcador_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, marcador_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Marcador ", i_r3 + 1, " ");
} }
class MarcadoresComponent {
    constructor() {
        this.zoomLevel = 15;
        this.center = [-64.23822810208624, -31.405245724304315];
        this.marcadores = [];
    }
    ngAfterViewInit() {
        this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Map"]({
            container: this.divMapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-64.23822810208624, -31.405245724304315],
            zoom: this.zoomLevel
        });
        // const maker = new mapboxgl.Marker()
        //   .setLngLat(this.center)
        //   .addTo(this.mapa)
        this.leerMArcadoresLS();
    }
    irMarcador(marker) {
        this.mapa.flyTo({
            center: marker.getLngLat()
        });
    }
    agregarMarcador() {
        const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
        const nuevoMarcador = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Marker"]({
            draggable: true,
            color: color
        })
            .setLngLat(this.center)
            .addTo(this.mapa);
        this.marcadores.push({
            color: color,
            marcador: nuevoMarcador
        });
        this.guardarMarcadorLS();
    }
    guardarMarcadorLS() {
        const lngLatAr = [];
        this.marcadores.forEach(m => {
            const color = m.color;
            const { lng, lat } = m.marcador.getLngLat();
            lngLatAr.push({
                color: color,
                centro: [lng, lat]
            });
        });
        localStorage.setItem('marcadores', JSON.stringify(lngLatAr));
    }
    leerMArcadoresLS() {
        if (!localStorage.getItem('marcadores'))
            return;
        const lngLatArr = JSON.parse(localStorage.getItem('marcadores'));
        lngLatArr.forEach(m => {
            const newMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Marker"]({
                color: m.color,
                draggable: true
            })
                .setLngLat(m.centro)
                .addTo(this.mapa);
            this.marcadores.push({
                marcador: newMarker,
                color: m.color
            });
            this.guardarMarcadorLS();
            newMarker.on('dragend', () => {
                this.guardarMarcadorLS();
            });
        });
    }
    borrarMarcador(i) {
        var _a;
        (_a = this.marcadores[i].marcador) === null || _a === void 0 ? void 0 : _a.remove();
        this.marcadores.splice(i, 1);
        this.guardarMarcadorLS();
    }
}
MarcadoresComponent.ɵfac = function MarcadoresComponent_Factory(t) { return new (t || MarcadoresComponent)(); };
MarcadoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MarcadoresComponent, selectors: [["app-marcadores"]], viewQuery: function MarcadoresComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divMapa = _t.first);
    } }, decls: 6, vars: 1, consts: [[1, "list-group"], [1, "list-group-item", "list-group-item-info", 3, "click"], ["class", "list-group-item", 3, "ngStyle", "click", "dblclick", 4, "ngFor", "ngForOf"], [1, "mapa-container"], ["mapa", ""], [1, "list-group-item", 3, "ngStyle", "click", "dblclick"]], template: function MarcadoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarcadoresComponent_Template_li_click_1_listener() { return ctx.agregarMarcador(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " + Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MarcadoresComponent_li_3_Template, 2, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3, 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.marcadores);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".mapa-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.list-group[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 20px;\r\n    z-index: 99;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmNhZG9yZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJtYXJjYWRvcmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwYS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG5saXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=mapas-mapas-module.js.map