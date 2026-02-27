"use strict";
(self["webpackChunkQAWorkbook"] = self["webpackChunkQAWorkbook"] || []).push([["main"],{

/***/ 9744
/*!****************************************!*\
  !*** ./src/app/Home/home.component.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _StructuralComponents_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StructuralComponents/notice-board/notice-board.component */ 9590);



var _HomeComponent;




function HomeComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var qaWbHomeContent_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", qaWbHomeContent_r1.wbRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", qaWbHomeContent_r1.wbNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", qaWbHomeContent_r1.wbName, " ");
  }
}
var HomeComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaWbHomeTitle", "Welcome! Please choose your Question & Answers Workbook\uD83D\uDE0A");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaWbHomeContentList", [{
    wbNumber: this.wbNumber++,
    wbName: "Economics QA",
    wbRoute: '/EconomicsQA'
  }, {
    wbNumber: this.wbNumber++,
    wbName: "Geography QA",
    wbRoute: '/GeographyQA'
  }, {
    wbNumber: this.wbNumber++,
    wbName: "History QA",
    wbRoute: '/HistoryQA'
  }, {
    wbNumber: this.wbNumber++,
    wbName: "Political Science QA",
    wbRoute: '/PoliticalScienceQA'
  }, {
    wbNumber: this.wbNumber++,
    wbName: "Facts QA",
    wbRoute: '/FactsQA'
  }]);
});
_HomeComponent = HomeComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(HomeComponent, "\u0275fac", function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(HomeComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _HomeComponent,
  selectors: [["app-home"]],
  standalone: false,
  decls: 7,
  vars: 2,
  consts: [[1, "outerContainer"], [1, "pageTitleContainer"], [1, "homeTitle"], [1, "qaWbListContainer"], ["class", "qaWBContainer", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "qaWBContainer", 3, "routerLink"], [1, "qaWbNumber"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HomeComponent_a_5_Template, 4, 3, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-notice-board");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.qaWbHomeTitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.qaWbHomeContentList);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _StructuralComponents_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_6__.NoticeBoardComponent],
  styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box; \n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n    font-variant-numeric: lining-nums;\n}\n\n.outerContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow:row wrap;\n    flex-direction: column;\n}\n\n.pageTitleContainer[_ngcontent-%COMP%] {\n    align-content: center;\n    color: #FFD700;\n    margin-bottom: 5px;\n    font-size: 18px;\n    text-align: center;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.qaWbContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow:row wrap;\n    flex-direction: column;\n}\n\n.qaWbListContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    padding: 5px;\n    border-radius: 5px;\n    text-decoration: none;\n    color: #F5F5F5;\n    background-color: #383838;\n    margin-bottom: 5px;\n}\n\n.qaWbListContainer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    margin-left: 5px;\n}\n\n.qaWbNumber[_ngcontent-%COMP%] {\n    color: #FFD700;\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QiwwRUFBMEU7SUFDMUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogbGluaW5nLW51bXM7XHJcbn1cclxuXHJcbi5vdXRlckNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OnJvdyB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnBhZ2VUaXRsZUNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLjVweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnFhV2JDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzpyb3cgd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5xYVdiTGlzdENvbnRhaW5lciBhIHtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNGNUY1RjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ucWFXYkxpc3RDb250YWluZXIgOmhvdmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5xYVdiTnVtYmVyIHtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvSG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsMEVBQTBFO0lBQzFFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0EsZzRFQUFnNEUiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiBsaW5pbmctbnVtcztcclxufVxyXG5cclxuLm91dGVyQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGFnZVRpdGxlQ29udGFpbmVyIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAuNXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucWFXYkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OnJvdyB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnFhV2JMaXN0Q29udGFpbmVyIGEge1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0Y1RjVGNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5xYVdiTGlzdENvbnRhaW5lciA6aG92ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnFhV2JOdW1iZXIge1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 2584
/*!*************************************************************************************!*\
  !*** ./src/app/StructuralComponents/about-qaworkbook/about-qaworkbook.component.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutQAWorkbookComponent: () => (/* binding */ AboutQAWorkbookComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);



var _AboutQAWorkbookComponent;

var AboutQAWorkbookComponent = /*#__PURE__*/function () {
  function AboutQAWorkbookComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutQAWorkbookComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutQAWorkbookComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_AboutQAWorkbookComponent = AboutQAWorkbookComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AboutQAWorkbookComponent, "\u0275fac", function AboutQAWorkbookComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutQAWorkbookComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AboutQAWorkbookComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _AboutQAWorkbookComponent,
  selectors: [["app-about-qaworkbook"]],
  standalone: false,
  decls: 11,
  vars: 0,
  consts: [[1, "aboutTitle"], [1, "aboutDescription"]],
  template: function AboutQAWorkbookComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " About QAWorkbook\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " QAWorkbook is an initiative to help students and candidates learn and revise facts easily and totally free of cost. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " QAWorkbook delivers Questions and Answers on chapter by chapter basis, which helps in systematic learning and revision. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Now students and candidates, by using QAWorkbook, can use even their spare time to learn new facts or consolidate their learnings. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Happy learning! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
  },
  styles: ["*[_ngcontent-%COMP%] {\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n}\n\n.aboutTitle[_ngcontent-%COMP%] {\n    color: #FFD700;\n    text-align: center;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 5px;\n}\n\n.aboutDescription[_ngcontent-%COMP%] {\n    padding: 5px;\n    border-radius: 5px;\n    color: #F5F5F5;\n    background-color: #383838;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXFhd29ya2Jvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtJQUMxRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJhYm91dC1xYXdvcmtib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5hYm91dFRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAuNXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYWJvdXREZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogI0Y1RjVGNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvYWJvdXQtcWF3b3JrYm9vay9hYm91dC1xYXdvcmtib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwRUFBMEU7SUFDMUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQSxndENBQWd0QyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLmFib3V0VGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5hYm91dERlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 2598
/*!*******************************************************************************!*\
  !*** ./src/app/StructuralComponents/bottom-ad-bar/bottom-ad-bar.component.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomAdBarComponent: () => (/* binding */ BottomAdBarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);



var _BottomAdBarComponent;

var BottomAdBarComponent = /*#__PURE__*/function () {
  function BottomAdBarComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BottomAdBarComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BottomAdBarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_BottomAdBarComponent = BottomAdBarComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BottomAdBarComponent, "\u0275fac", function BottomAdBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BottomAdBarComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BottomAdBarComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _BottomAdBarComponent,
  selectors: [["app-bottom-ad-bar"]],
  standalone: false,
  decls: 2,
  vars: 0,
  template: function BottomAdBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bottom-ad-bar works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  styles: ["*[_ngcontent-%COMP%] {\n    margin: 0px;\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS1hZC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYm90dG9tLWFkLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvYm90dG9tLWFkLWJhci9ib3R0b20tYWQtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBLDRWQUE0ViIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 534
/*!*****************************************************************************!*\
  !*** ./src/app/StructuralComponents/contact-info/contact-info.component.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactInfoComponent: () => (/* binding */ ContactInfoComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);



var _ContactInfoComponent;


var ContactInfoComponent = /*#__PURE__*/function () {
  function ContactInfoComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactInfoComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactInfoComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_ContactInfoComponent = ContactInfoComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ContactInfoComponent, "\u0275fac", function ContactInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactInfoComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ContactInfoComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ContactInfoComponent,
  selectors: [["app-contact-info"]],
  standalone: false,
  decls: 6,
  vars: 0,
  consts: [[1, "contactInfoTitle"], [1, "contactDetails"]],
  template: function ContactInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Contact Info\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " riji.qaworkbook@gmail.com\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: ["*[_ngcontent-%COMP%] {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: 1px;\n}\n\n.material-icons[_ngcontent-%COMP%]{\n    font-family: 'Material Icons';\n    vertical-align: top;\n    color: #FFD700;\n}\n\n.contactInfoTitle[_ngcontent-%COMP%] {\n    color: #FFD700;\n    text-align: center;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 5px;\n}\n\n.contactDetails[_ngcontent-%COMP%] {\n    padding: 5px;\n    border-radius: 5px;\n    color: #F5F5F5;\n    background-color: #383838;\n    font-variant: lining-nums;\n    margin-bottom: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscURBQXFEO0lBQ3JELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiY29udGFjdC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBjb2xvcjogI0ZGRDcwMDtcclxufVxyXG5cclxuLmNvbnRhY3RJbmZvVGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0RGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogI0Y1RjVGNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbiAgICBmb250LXZhcmlhbnQ6IGxpbmluZy1udW1zO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvY29udGFjdC1pbmZvL2NvbnRhY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscURBQXFEO0lBQ3JELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7OztBQUdBLHdnREFBd2dEIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbn1cclxuXHJcbi5jb250YWN0SW5mb1RpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAuNXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY29udGFjdERldGFpbHMge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICNGNUY1RjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgZm9udC12YXJpYW50OiBsaW5pbmctbnVtcztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ },

/***/ 9118
/*!*************************************************************************!*\
  !*** ./src/app/StructuralComponents/display-qa/display-qa.component.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayQAComponent: () => (/* binding */ DisplayQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ 9322);



var _DisplayQAComponent;



function DisplayQAComponent_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var qa_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", qa_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function DisplayQAComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "mat-expansion-panel", 6)(3, "mat-expansion-panel-header")(4, "div", 7)(5, "div", 8)(6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 11)(10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Answer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DisplayQAComponent_div_5_div_13_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var qa_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@.disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("expanded", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", qa_r1.qaNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", qa_r1.question, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", qa_r1.answer, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", qa_r1.description);
  }
}
var DisplayQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DisplayQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DisplayQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", void 0);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qas", void 0);
});
_DisplayQAComponent = DisplayQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DisplayQAComponent, "\u0275fac", function DisplayQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DisplayQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DisplayQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _DisplayQAComponent,
  selectors: [["app-display-qa"]],
  inputs: {
    workbookName: "workbookName",
    qas: "qas"
  },
  standalone: false,
  decls: 6,
  vars: 2,
  consts: [[1, "qaContainer"], [1, "pageTitleContainer"], [1, "chapterName"], [1, "qaPaletteContainer"], [4, "ngFor", "ngForOf"], [1, "qaExpansionPanelContainer"], [3, "expanded"], [1, "questionContainer"], [1, "question"], [2, "color", "#FFD700"], [3, "innerHTML"], [1, "answerContainer"], [1, "answerLabel"], [1, "answer", 3, "innerHTML"], ["class", "descriptionContainer", 4, "ngIf"], [1, "descriptionContainer"], [1, "descriptionLabel"], [1, "description", 3, "innerHTML"]],
  template: function DisplayQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DisplayQAComponent_div_5_Template, 14, 6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.workbookName, " QAs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.qas);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanelHeader],
  styles: ["* {\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n    font-variant-numeric: lining-nums;\n}\n\n.qaContainer{\n    display:flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    \n}\n\n.pageTitleContainer {\n    align-content: center;\n    color: #FFD700;\n    margin-bottom: 5px; \n    font-size: 18px;\n    text-align: center;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.qaExpansionPanelContainer {\n    margin-bottom: 5px;\n}\n\n.mat-expansion-panel {\n    background-color: #383838;\n    color: #F5E8D8;\n}\n\n.mat-expansion-panel-header {\n    height: fit-content !important; \n    padding: 5px !important;\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif !important;\n    font-size: 18px !important;\n    line-height: 27px !important;\n    letter-spacing: 0.5px !important;\n    font-variant-numeric: lining-nums !important; \n}\n\n.mat-expansion-panel-body {\n    padding: 5px !important;\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif !important;\n    font-size: 18px !important;\n    line-height: 27px !important;\n    letter-spacing: 0.5px !important;\n    font-variant-numeric: lining-nums !important;\n}\n\n.mat-expansion-panel-header :active{\n    background-color: transparent;\n}\n\n.questionLabel {\n    color:#FFD700;\n}\n\n.answerLabel {\n    color:#FFD700;\n}\n\n.descriptionLabel {\n    color:#FFD700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktcWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtJQUMxRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIscUZBQXFGO0lBQ3JGLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxRkFBcUY7SUFDckYsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImRpc3BsYXktcWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiBsaW5pbmctbnVtcztcclxufVxyXG5cclxuLnFhQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG59XHJcblxyXG4ucGFnZVRpdGxlQ29udGFpbmVyIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLjVweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnFhRXhwYW5zaW9uUGFuZWxDb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgY29sb3I6ICNGNUU4RDg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7IFxyXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ0Jvb2ttYW4gT2xkIFN0eWxlJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogbGluaW5nLW51bXMgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ0Jvb2ttYW4gT2xkIFN0eWxlJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogbGluaW5nLW51bXMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIDphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnF1ZXN0aW9uTGFiZWwge1xyXG4gICAgY29sb3I6I0ZGRDcwMDtcclxufVxyXG5cclxuLmFuc3dlckxhYmVsIHtcclxuICAgIGNvbG9yOiNGRkQ3MDA7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbkxhYmVsIHtcclxuICAgIGNvbG9yOiNGRkQ3MDA7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvZGlzcGxheS1xYS9kaXNwbGF5LXFhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwRUFBMEU7SUFDMUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHFGQUFxRjtJQUNyRiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUZBQXFGO0lBQ3JGLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLG90R0FBb3RHIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogJ0Jvb2ttYW4gT2xkIFN0eWxlJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgZm9udC12YXJpYW50LW51bWVyaWM6IGxpbmluZy1udW1zO1xyXG59XHJcblxyXG4ucWFDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbn1cclxuXHJcbi5wYWdlVGl0bGVDb250YWluZXIge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAuNXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucWFFeHBhbnNpb25QYW5lbENvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbiAgICBjb2xvcjogI0Y1RThEODtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDsgXHJcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiBsaW5pbmctbnVtcyAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiBsaW5pbmctbnVtcyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucXVlc3Rpb25MYWJlbCB7XHJcbiAgICBjb2xvcjojRkZENzAwO1xyXG59XHJcblxyXG4uYW5zd2VyTGFiZWwge1xyXG4gICAgY29sb3I6I0ZGRDcwMDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uTGFiZWwge1xyXG4gICAgY29sb3I6I0ZGRDcwMDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
}));

/***/ },

/***/ 2990
/*!***************************************************************************************!*\
  !*** ./src/app/StructuralComponents/display-qawb-list/display-qawb-list.component.ts ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayQAWbListComponent: () => (/* binding */ DisplayQAWbListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);



var _DisplayQAWbListComponent;



function DisplayQAWbListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var qaWb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", qaWb_r1.wbRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", qaWb_r1.wbNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", qaWb_r1.wbName, " ");
  }
}
var DisplayQAWbListComponent = /*#__PURE__*/function () {
  function DisplayQAWbListComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DisplayQAWbListComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaWbList", void 0);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", void 0);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DisplayQAWbListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_DisplayQAWbListComponent = DisplayQAWbListComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DisplayQAWbListComponent, "\u0275fac", function DisplayQAWbListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DisplayQAWbListComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DisplayQAWbListComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _DisplayQAWbListComponent,
  selectors: [["app-display-qawb-list"]],
  inputs: {
    qaWbList: "qaWbList",
    workbookName: "workbookName"
  },
  standalone: false,
  decls: 6,
  vars: 2,
  consts: [[1, "outerContainer"], [1, "pageTitleContainer"], [1, "wbName"], [1, "qaWbListContainer"], ["class", "qaWBContainer", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "qaWBContainer", 3, "routerLink"], [1, "qaWbNumber"]],
  template: function DisplayQAWbListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DisplayQAWbListComponent_a_5_Template, 4, 3, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.workbookName, " QAWorkbooks ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.qaWbList);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
  styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box; \n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n    font-variant-numeric: lining-nums;\n}\n\n.outerContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow:row wrap;\n    flex-direction: column;\n}\n\n.pageTitleContainer[_ngcontent-%COMP%] {\n    align-content: center;\n    color: #FFD700;\n    margin-bottom: 5px;\n    font-size: 18px;\n    text-align: center;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.qaWBContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow:row wrap;\n    flex-direction: column;\n}\n\n.qaWbListContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    padding: 5px;\n    border-radius: 5px;\n    text-decoration: none;\n    color: #F5F5F5;\n    background-color: #383838;\n    margin-bottom: 5px;\n}\n\n.qaWbListContainer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    margin-left: 5px;\n}\n\n.qaWbNumber[_ngcontent-%COMP%] {\n    color: #FFD700;\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktcWF3Yi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsMEVBQTBFO0lBQzFFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImRpc3BsYXktcWF3Yi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiBsaW5pbmctbnVtcztcclxufVxyXG5cclxuLm91dGVyQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGFnZVRpdGxlQ29udGFpbmVyIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAuNXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucWFXQkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OnJvdyB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnFhV2JMaXN0Q29udGFpbmVyIGEge1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0Y1RjVGNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5xYVdiTGlzdENvbnRhaW5lciA6aG92ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnFhV2JOdW1iZXIge1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvZGlzcGxheS1xYXdiLWxpc3QvZGlzcGxheS1xYXdiLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QiwwRUFBMEU7SUFDMUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQSxvNkVBQW82RSIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICBmb250LWZhbWlseTogJ0Jvb2ttYW4gT2xkIFN0eWxlJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgZm9udC12YXJpYW50LW51bWVyaWM6IGxpbmluZy1udW1zO1xyXG59XHJcblxyXG4ub3V0ZXJDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzpyb3cgd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYWdlVGl0bGVDb250YWluZXIge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5xYVdCQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucWFXYkxpc3RDb250YWluZXIgYSB7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnFhV2JMaXN0Q29udGFpbmVyIDpob3ZlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4ucWFXYk51bWJlciB7XHJcbiAgICBjb2xvcjogI0ZGRDcwMDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ },

/***/ 1048
/*!*****************************************************************************!*\
  !*** ./src/app/StructuralComponents/left-sidebar/left-sidebar.component.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftSidebarComponent: () => (/* binding */ LeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _left_top_sidebar_left_top_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left-top-sidebar/left-top-sidebar.component */ 1425);
/* harmony import */ var _quick_nav_quick_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quick-nav/quick-nav.component */ 9615);



var _LeftSidebarComponent;



var LeftSidebarComponent = /*#__PURE__*/function () {
  function LeftSidebarComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LeftSidebarComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LeftSidebarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_LeftSidebarComponent = LeftSidebarComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(LeftSidebarComponent, "\u0275fac", function LeftSidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeftSidebarComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(LeftSidebarComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _LeftSidebarComponent,
  selectors: [["app-left-sidebar"]],
  standalone: false,
  decls: 2,
  vars: 0,
  template: function LeftSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-left-top-sidebar")(1, "app-quick-nav");
    }
  },
  dependencies: [_left_top_sidebar_left_top_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.LeftTopSidebarComponent, _quick_nav_quick_nav_component__WEBPACK_IMPORTED_MODULE_5__.QuickNavComponent],
  styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQiIsImZpbGUiOiJsZWZ0LXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlcyBoZXJlICovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvbGVmdC1zaWRlYmFyL2xlZnQtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixnUkFBZ1IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgaGVyZSAqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 1425
/*!**************************************************************************************************!*\
  !*** ./src/app/StructuralComponents/left-sidebar/left-top-sidebar/left-top-sidebar.component.ts ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftTopSidebarComponent: () => (/* binding */ LeftTopSidebarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);



var _LeftTopSidebarComponent;

var LeftTopSidebarComponent = /*#__PURE__*/function () {
  function LeftTopSidebarComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LeftTopSidebarComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LeftTopSidebarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_LeftTopSidebarComponent = LeftTopSidebarComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(LeftTopSidebarComponent, "\u0275fac", function LeftTopSidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeftTopSidebarComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(LeftTopSidebarComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _LeftTopSidebarComponent,
  selectors: [["app-left-top-sidebar"]],
  standalone: false,
  decls: 2,
  vars: 0,
  template: function LeftTopSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "left-top-sidebar works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  styles: ["p[_ngcontent-%COMP%] {\n    margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtdG9wLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJsZWZ0LXRvcC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvbGVmdC1zaWRlYmFyL2xlZnQtdG9wLXNpZGViYXIvbGVmdC10b3Atc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0Esb1RBQW9UIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 9615
/*!************************************************************************************!*\
  !*** ./src/app/StructuralComponents/left-sidebar/quick-nav/quick-nav.component.ts ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickNavComponent: () => (/* binding */ QuickNavComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);



var _QuickNavComponent;



function QuickNavComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var qaWb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", qaWb_r1.wbRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \uD83D\uDC49 ", qaWb_r1.wbName, " ");
  }
}
var QuickNavComponent = /*#__PURE__*/function () {
  function QuickNavComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuickNavComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Economics QA",
      wbRoute: '/EconomicsQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Geography QA",
      wbRoute: '/GeographyQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "History QA",
      wbRoute: '/HistoryQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Political Science QA",
      wbRoute: '/PoliticalScienceQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Facts QA",
      wbRoute: '/FactsQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(QuickNavComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_QuickNavComponent = QuickNavComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(QuickNavComponent, "\u0275fac", function QuickNavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QuickNavComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(QuickNavComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _QuickNavComponent,
  selectors: [["app-quick-nav"]],
  standalone: false,
  decls: 6,
  vars: 1,
  consts: [[1, "outerContainer"], [1, "pageTitleContainer"], [1, "wbName"], [1, "qaWbListContainer"], ["class", "qaWBContainer", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "qaWBContainer", 3, "routerLink"]],
  template: function QuickNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Main QAWorkbooks ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, QuickNavComponent_a_5_Template, 2, 2, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.qaWbList);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
  styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box; \n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n    font-variant-numeric: lining-nums;\n}\n\n.outerContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow:row wrap;\n    flex-direction: column;\n}\n\n.pageTitleContainer[_ngcontent-%COMP%] {\n    align-content: center;\n    color: #FFD700;\n    margin-bottom: 5px;\n    font-size: 18px;\n    text-align: center;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.qaWBContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow:row wrap;\n    flex-direction: column;\n}\n\n.qaWbListContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;    \n    border-radius: 5px;\n    padding: 5px;\n    text-decoration: none;\n    color: #F5F5F5;\n    background-color: #383838;\n    margin-bottom: 5px;\n}\n\n.qaWbListContainer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNrLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBFQUEwRTtJQUMxRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InF1aWNrLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogbGluaW5nLW51bXM7XG59XG5cbi5vdXRlckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBhZ2VUaXRsZUNvbnRhaW5lciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZENzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnFhV0JDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OnJvdyB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5xYVdiTGlzdENvbnRhaW5lciBhIHtcbiAgICBmbGV4OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNGNUY1RjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5xYVdiTGlzdENvbnRhaW5lciA6aG92ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvbGVmdC1zaWRlYmFyL3F1aWNrLW5hdi9xdWljay1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QiwwRUFBMEU7SUFDMUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBLGdvRUFBZ29FIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogbGluaW5nLW51bXM7XG59XG5cbi5vdXRlckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBhZ2VUaXRsZUNvbnRhaW5lciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZENzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnFhV0JDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OnJvdyB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5xYVdiTGlzdENvbnRhaW5lciBhIHtcbiAgICBmbGV4OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNGNUY1RjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5xYVdiTGlzdENvbnRhaW5lciA6aG92ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ },

/***/ 4262
/*!*******************************************************************************!*\
  !*** ./src/app/StructuralComponents/main-nav-menu/main-nav-menu.component.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainNavMenuComponent: () => (/* binding */ MainNavMenuComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 8431);



var _MainNavMenuComponent;




var MainNavMenuComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MainNavMenuComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainNavMenuComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "menu", void 0);
});
_MainNavMenuComponent = MainNavMenuComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MainNavMenuComponent, "\u0275fac", function MainNavMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainNavMenuComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MainNavMenuComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _MainNavMenuComponent,
  selectors: [["app-main-nav-menu"]],
  viewQuery: function MainNavMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, 7);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    }
  },
  exportAs: ["mainNavMenu"],
  standalone: false,
  decls: 189,
  vars: 26,
  consts: [["economicsQA", "matMenu"], ["geographyQA", "matMenu"], ["indianGeographyQA", "matMenu"], ["physicalGeographyQA", "matMenu"], ["historyQA", "matMenu"], ["ancientIndianHistoryQA", "matMenu"], ["medievalIndianHistoryQA", "matMenu"], ["modernIndianHistoryQA", "matMenu"], ["keralaHistoryQA", "matMenu"], ["politicalScienceQA", "matMenu"], ["indianPolityQA", "matMenu"], ["indianConstitutionQA", "matMenu"], ["unionGovernmentQA", "matMenu"], ["stateGovernmentQA", "matMenu"], ["localGovernmentQA", "matMenu"], ["unionTerritoriesQA", "matMenu"], ["constitutionalBodiesQA", "matMenu"], ["statutoryBodiesQA", "matMenu"], ["nonConstitutionalAndNonStatutoryBodiesQA", "matMenu"], ["regulatoryAuthoritiesQA", "matMenu"], ["policiesAndStrategiesQA", "matMenu"], ["notForProfitCompaniesAndTrustsQA", "matMenu"], ["internationalInstitutionsAndAgenciesQA", "matMenu"], ["internationalAgreementsAndGroupingsQA", "matMenu"], ["otherCountriesRulesAndDevelopmentsQA", "matMenu"], ["factsQA", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "routerLink", "GeographyQA/IndianGeographyQA/LocationAndSizeQA"], ["mat-menu-item", "", "routerLink", "GeographyQA/IndianGeographyQA/DrainageSystemQA"], ["mat-menu-item", "", "routerLink", "GeographyQA/PhysicalGeographyQA/EarthOriginAndEvolutionQA"], ["mat-menu-item", "", "routerLink", "GeographyQA/PhysicalGeographyQA/EarthInteriorQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/StoneAgeQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/ChalcolithicAgeQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/BronzeAgeAndHarappanCivilizationQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/VedicAgeQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/JainismAndBuddhismAgeQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/AgeOfMahajanapadasQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/MauryaAgeQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/CentralAsianInfluenceQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/SatavahanasQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/DawnOfHistoryInSouthIndiaQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/PostMauryaCraftsTradeAndTownsQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/GuptaAgeQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/AncientIndianHistoryQA/ScienceAndCivilizationLegacyQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/ModernIndianHistoryQA/EighteenthCenturyIndiaQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/ModernIndianHistoryQA/EuropeanPenetrationAndConquestQA"], ["mat-menu-item", "", "routerLink", "HistoryQA/KeralaHistoryQA/TravancoreHistoryQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/IntroductionAndFeaturesQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/ConstitutionalHistoryQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/MakingOfConstitutionQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/PreambleQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/UnionAndItsTerritoryQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/CitizenshipQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/FundamentalRightsQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/DPSPQA"], ["mat-menu-item", "", "routerLink", ""], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA/FSDCQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA/NSFEQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA/NCFEQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/FATFQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/ILOQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/EMGFQA"], ["mat-menu-item", "", "routerLink", "PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA/UnitedStatesOfAmericaQA"], ["mat-menu-item", "", "routerLink", "FactsQA/BooksAndAuthorsQA"], ["mat-menu-item", "", "routerLink", "FactsQA/AllInOneQA"]],
  template: function MainNavMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-menu")(1, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Economics QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Geography QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "History QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Political Science QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Facts QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-menu", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-menu", null, 1)(16, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Indian Geography QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Physical Geography QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-menu", null, 2)(22, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Location And Size QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Drainage System QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-menu", null, 3)(28, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Earth - Origin And Evolution QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Earth - Interior QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-menu", null, 4)(34, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Ancient Indian History QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Medieval Indian History QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Modern Indian History QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Kerala History QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-menu", null, 5)(44, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Stone Age QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Chalcolithic Age QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Bronze Age and Harappan Civilization QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Vedic Age QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Jainism And Buddhism Age QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Age Of Mahajanapadas QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Maurya Age QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Central Asian Influence QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Age of the Satavahanas QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Dawn Of History In South India QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Post-Maurya Age Crafts, Trade, and Towns QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Gupta Age QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Legacy in Science And Civilization QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-menu", null, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "mat-menu", null, 7)(75, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Eighteenth Century India QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " European Penetration And Conquest QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "mat-menu", null, 8)(81, "button", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Travancore History QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-menu", null, 9)(85, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Indian Polity QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "International Institutions And Agencies QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "International Agreements And Groupings QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Other Countries - Rules And Developments QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "mat-menu", null, 10)(95, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Indian Constitution QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Union Government QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "State Government QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Local Government QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Union Territories QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Constitutional Bodies QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Statutory Bodies QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Non-Constitutional And Non-Statutory Bodies QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Regulatory Authorities QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Policies And Strategies QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "Not For Profit Companies And Trusts QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "mat-menu", null, 11)(119, "button", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "Introduction And Features QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Constitutional History QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Making Of Constitution QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Preamble QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "Union And Its Territory QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Citizenship QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "Fundamental Rights QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "button", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "DPSP QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "mat-menu", null, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](137, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "mat-menu", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "mat-menu", null, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](143, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "mat-menu", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](146, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "mat-menu", null, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](149, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "mat-menu", null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](152, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "mat-menu", null, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](155, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "mat-menu", null, 19)(158, "button", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "FSDC QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "mat-menu", null, 20)(162, "button", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "NSFE QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "mat-menu", null, 21)(166, "button", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "NCFE QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "mat-menu", null, 22)(170, "button", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, "FATF QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "ILO QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "button", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "EMGF QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "mat-menu", null, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](178, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "mat-menu", null, 24)(181, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "United States Of America QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "mat-menu", null, 25)(185, "button", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Books And Authors QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "button", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "All In One QA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      var economicsQA_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
      var geographyQA_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
      var indianGeographyQA_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
      var physicalGeographyQA_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
      var historyQA_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
      var ancientIndianHistoryQA_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](43);
      var medievalIndianHistoryQA_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](71);
      var modernIndianHistoryQA_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](74);
      var keralaHistoryQA_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](80);
      var politicalScienceQA_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](84);
      var indianPolityQA_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](94);
      var indianConstitutionQA_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](118);
      var unionGovernmentQA_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](136);
      var stateGovernmentQA_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](139);
      var localGovernmentQA_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](142);
      var unionTerritoriesQA_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](145);
      var constitutionalBodiesQA_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](148);
      var statutoryBodiesQA_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](151);
      var nonConstitutionalAndNonStatutoryBodiesQA_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](154);
      var regulatoryAuthoritiesQA_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](157);
      var policiesAndStrategiesQA_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](161);
      var notForProfitCompaniesAndTrustsQA_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](165);
      var internationalInstitutionsAndAgenciesQA_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](169);
      var internationalAgreementsAndGroupingsQA_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](177);
      var otherCountriesRulesAndDevelopmentsQA_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](180);
      var factsQA_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](184);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", economicsQA_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", geographyQA_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", historyQA_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", politicalScienceQA_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", factsQA_r26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", indianGeographyQA_r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", physicalGeographyQA_r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", ancientIndianHistoryQA_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", medievalIndianHistoryQA_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", modernIndianHistoryQA_r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", keralaHistoryQA_r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", indianPolityQA_r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", internationalInstitutionsAndAgenciesQA_r23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", internationalAgreementsAndGroupingsQA_r24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", otherCountriesRulesAndDevelopmentsQA_r25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", indianConstitutionQA_r12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", unionGovernmentQA_r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", stateGovernmentQA_r14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", localGovernmentQA_r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", unionTerritoriesQA_r16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", constitutionalBodiesQA_r17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", statutoryBodiesQA_r18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", nonConstitutionalAndNonStatutoryBodiesQA_r19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", regulatoryAuthoritiesQA_r20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", policiesAndStrategiesQA_r21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", notForProfitCompaniesAndTrustsQA_r22);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger],
  styles: [".mat-menu-item[_ngcontent-%COMP%] {\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px !important;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n    padding-left: 5px;\n    color: #FFD700;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtJQUMxRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQiIsImZpbGUiOiJtYWluLW5hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LW1lbnUtaXRlbSB7XHJcbiAgICBmb250LWZhbWlseTogJ0Jvb2ttYW4gT2xkIFN0eWxlJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gIH0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvbWFpbi1uYXYtbWVudS9tYWluLW5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwRUFBMEU7SUFDMUUsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFDRix3cUJBQXdxQiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbWVudS1pdGVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 7294
/*!*************************************************************!*\
  !*** ./src/app/StructuralComponents/main/main.component.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _bottom_ad_bar_bottom_ad_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bottom-ad-bar/bottom-ad-bar.component */ 2598);



var _MainComponent;



var MainComponent = /*#__PURE__*/function () {
  function MainComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MainComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_MainComponent = MainComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MainComponent, "\u0275fac", function MainComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MainComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _MainComponent,
  selectors: [["app-main"]],
  standalone: false,
  decls: 2,
  vars: 0,
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet")(1, "app-bottom-ad-bar");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _bottom_ad_bar_bottom_ad_bar_component__WEBPACK_IMPORTED_MODULE_5__.BottomAdBarComponent],
  styles: ["*[_ngcontent-%COMP%] {\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtJQUMxRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwRUFBMEU7SUFDMUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQSx3Z0JBQXdnQiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 9590
/*!*****************************************************************************!*\
  !*** ./src/app/StructuralComponents/notice-board/notice-board.component.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticeBoardComponent: () => (/* binding */ NoticeBoardComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);



var _NoticeBoardComponent;


function NoticeBoardComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \uD83D\uDC49");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var notice_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", notice_r1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
var NoticeBoardComponent = /*#__PURE__*/function () {
  function NoticeBoardComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NoticeBoardComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "noticeItems", ["QAWorkbook is still in its infant stage. We are adding and updating contents regularly.", "How to use the site?\n      <ol>\n        <li>Select a QAWorkbook.</li>\n        <li>Read a question.</li>\n        <li>Guess the answer.</li>\n        <li>Click anywhere on the question to see answer and description (if any).</li>\n      </ol>"]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NoticeBoardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_NoticeBoardComponent = NoticeBoardComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NoticeBoardComponent, "\u0275fac", function NoticeBoardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NoticeBoardComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NoticeBoardComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _NoticeBoardComponent,
  selectors: [["app-notice-board"]],
  standalone: false,
  decls: 5,
  vars: 1,
  consts: [[1, "outerContainer"], [1, "pageTitleContainer"], [1, "noticeBoardContainer"], ["class", "noticeContainer", 4, "ngFor", "ngForOf"], [1, "noticeContainer"], [3, "innerHTML"]],
  template: function NoticeBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Notice Board ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NoticeBoardComponent_a_4_Template, 3, 1, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.noticeItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box; \n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n    font-variant-numeric: lining-nums;\n}\n\n.outerContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow:row wrap;\n    flex-direction: column;\n}\n\n.pageTitleContainer[_ngcontent-%COMP%] {\n    align-content: center;\n    color: #FFD700;\n    margin-bottom: 5px;\n    font-size: 18px;\n    text-align: center;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.noticeContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow:row wrap;\n    flex-direction: column;\n}\n\n.noticeBoardContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;    \n    border-radius: 5px;\n    padding: 5px;\n    text-decoration: none;\n    color: #F5F5F5;\n    background-color: #383838;\n    margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBFQUEwRTtJQUMxRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Im5vdGljZS1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogbGluaW5nLW51bXM7XG59XG5cbi5vdXRlckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBhZ2VUaXRsZUNvbnRhaW5lciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZENzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLm5vdGljZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vdGljZUJvYXJkQ29udGFpbmVyIGEge1xuICAgIGZsZXg6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI0Y1RjVGNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvbm90aWNlLWJvYXJkL25vdGljZS1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBFQUEwRTtJQUMxRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0Esb2lFQUFvaUUiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcbiAgICBmb250LWZhbWlseTogJ0Jvb2ttYW4gT2xkIFN0eWxlJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiBsaW5pbmctbnVtcztcbn1cblxuLm91dGVyQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzpyb3cgd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGFnZVRpdGxlQ29udGFpbmVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkQ3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbiAgICBib3gtc2hhZG93OiAwcHggLjVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ubm90aWNlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzpyb3cgd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm90aWNlQm9hcmRDb250YWluZXIgYSB7XG4gICAgZmxleDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjRjVGNUY1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 4606
/*!*******************************************************************************!*\
  !*** ./src/app/StructuralComponents/right-sidebar/right-sidebar.component.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightSidebarComponent: () => (/* binding */ RightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _right_top_sidebar_right_top_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./right-top-sidebar/right-top-sidebar.component */ 5330);



var _RightSidebarComponent;


var RightSidebarComponent = /*#__PURE__*/function () {
  function RightSidebarComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RightSidebarComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RightSidebarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_RightSidebarComponent = RightSidebarComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RightSidebarComponent, "\u0275fac", function RightSidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RightSidebarComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RightSidebarComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _RightSidebarComponent,
  selectors: [["app-right-sidebar"]],
  standalone: false,
  decls: 1,
  vars: 0,
  template: function RightSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-right-top-sidebar");
    }
  },
  dependencies: [_right_top_sidebar_right_top_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.RightTopSidebarComponent],
  styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpZ2h0LXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlIiwiZmlsZSI6InJpZ2h0LXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBzdHlsZXMgKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvcmlnaHQtc2lkZWJhci9yaWdodC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmLGdSQUFnUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBzdHlsZXMgKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
}));

/***/ },

/***/ 5330
/*!*****************************************************************************************************!*\
  !*** ./src/app/StructuralComponents/right-sidebar/right-top-sidebar/right-top-sidebar.component.ts ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightTopSidebarComponent: () => (/* binding */ RightTopSidebarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);



var _RightTopSidebarComponent;

var RightTopSidebarComponent = /*#__PURE__*/function () {
  function RightTopSidebarComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RightTopSidebarComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RightTopSidebarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_RightTopSidebarComponent = RightTopSidebarComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RightTopSidebarComponent, "\u0275fac", function RightTopSidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RightTopSidebarComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RightTopSidebarComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _RightTopSidebarComponent,
  selectors: [["app-right-top-sidebar"]],
  standalone: false,
  decls: 2,
  vars: 0,
  template: function RightTopSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Right Top Sidebar!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  styles: ["p[_ngcontent-%COMP%] {\n    margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpZ2h0LXRvcC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoicmlnaHQtdG9wLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvcmlnaHQtc2lkZWJhci9yaWdodC10b3Atc2lkZWJhci9yaWdodC10b3Atc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0Esd1RBQXdUIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 1396
/*!*********************************************************************************************!*\
  !*** ./src/app/StructuralComponents/terms-and-conditions/terms-and-conditions.component.ts ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsAndConditionsComponent: () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);



var _TermsAndConditionsComponent;

var TermsAndConditionsComponent = /*#__PURE__*/function () {
  function TermsAndConditionsComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TermsAndConditionsComponent);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TermsAndConditionsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_TermsAndConditionsComponent = TermsAndConditionsComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TermsAndConditionsComponent, "\u0275fac", function TermsAndConditionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermsAndConditionsComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TermsAndConditionsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _TermsAndConditionsComponent,
  selectors: [["app-terms-and-conditions"]],
  standalone: false,
  decls: 14,
  vars: 0,
  consts: [[1, "tAndCTitle"], [1, "title"], [1, "description"]],
  template: function TermsAndConditionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Terms & Conditions\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Indemnity\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " The User unilaterally agree to indemnify and hold harmless, without objection, the QAWorkbook, its proprieter(s), employee(s), agent(s), or anyone else working/acting for QAWorkbook from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of QAWorkbook or their breach of the terms.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Liability\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " User agrees that neither QAWorkbook, nor its proprieter(s), employee(s), any associated partie(s), organization(s), agent(s), entitie(s), or anyone else working/acting for QAWorkbook shall be liable for any damages whatsoever resulting from the use or inability to use the QAWorkbook or QAWorkbook data/material.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Disclaimer\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Under no circumstances shall QAWorkbook, or its proprieter(s), employee(s), any associated partie(s), organization(s), agent(s) or entitie(s) shall be liable for any damages whatsoever resulting from the use or inability to use the QAWorkbook or QAWorkbook data/material.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  styles: ["*[_ngcontent-%COMP%] {\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n}\n\n.tAndCTitle[_ngcontent-%COMP%] {\n    color: #FFD700;\n    text-align: center;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 5px;\n}\n\n.title[_ngcontent-%COMP%] {\n    color: #FFD700;\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 5px;\n}\n\n.description[_ngcontent-%COMP%] {\n    background-color: #383838;\n    box-shadow: 0px .5px black;\n    color: #F5F5F5;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwRUFBMEU7SUFDMUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi50QW5kQ1RpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAuNXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XHJcbiAgICBjb2xvcjogI0Y1RjVGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtJQUMxRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUEsd3JEQUF3ckQiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi50QW5kQ1RpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAuNXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC41cHggYmxhY2s7XHJcbiAgICBjb2xvcjogI0Y1RjVGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
}));

/***/ },

/***/ 3610
/*!***************************************************************************!*\
  !*** ./src/app/StructuralComponents/top-toolbar/top-toolbar.component.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopToolbarComponent: () => (/* binding */ TopToolbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _whatshot_nav_menu_whatshot_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../whatshot-nav-menu/whatshot-nav-menu.component */ 3782);
/* harmony import */ var _main_nav_menu_main_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../main-nav-menu/main-nav-menu.component */ 4262);



var _TopToolbarComponent;







var TopToolbarComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TopToolbarComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TopToolbarComponent);
});
_TopToolbarComponent = TopToolbarComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TopToolbarComponent, "\u0275fac", function TopToolbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TopToolbarComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TopToolbarComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _TopToolbarComponent,
  selectors: [["app-top-toolbar"]],
  standalone: false,
  decls: 18,
  vars: 2,
  consts: [["x", "mainNavMenu"], ["y", "whatshotNavMenu"], [1, "top-toolbar-row"], [1, "mainNavMenuButtonContainer"], ["mat-icon-button", "", 1, "sideNavButton", 3, "matMenuTriggerFor"], ["routerLink", ""], ["src", "assets\\QAWorkbook-Logo.png", "width", "60", "height", "60", 1, "toolbarQAWorkbookLogo"], ["routerLink", "", 1, "toolbarWbTitle"], [1, "syllabiMenuButtonContainer"], ["mat-icon-button", "", 1, "whatshotNavButton", 3, "matMenuTriggerFor"]],
  template: function TopToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar")(1, "mat-toolbar-row", 2)(2, "div", 3)(3, "button", 4)(4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Workbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "button", 9)(12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "whatshot");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-main-nav-menu", null, 0)(16, "app-whatshot-nav-menu", null, 1);
    }
    if (rf & 2) {
      var x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
      var y_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", x_r1.menu);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", y_r2.menu);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarRow, _whatshot_nav_menu_whatshot_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__.SyllabusNavMenuComponent, _main_nav_menu_main_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__.MainNavMenuComponent],
  styles: [".mat-toolbar[_ngcontent-%COMP%] {\n    min-height: 56px !important; \n    height: 56px !important;\n  }\n  \n  .mat-toolbar-row[_ngcontent-%COMP%] {\n    min-height: 56px !important; \n    height: 56px !important;\n    padding: 0 !important;\n  }\n\n.top-toolbar-row[_ngcontent-%COMP%] {\n    position: fixed;\n    \n\n    z-index: 2;\n}\n\n.topToolbarMenuItem[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.mainNavMenuButtonContainer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    align-self: center;\n    text-align: center  ;\n}\n\n.syllabiMenuButtonContainer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    align-self: center;\n    text-align: center;\n}\n\n.sideNavButton[_ngcontent-%COMP%], \n.whatshotNavButton[_ngcontent-%COMP%] {\n    background-color:transparent;\n    color: white;\n    border: none;\n    outline: none;\n    flex: 1 1 auto;\n    text-align: center;\n    padding: 0;\n}\n\n.sideNavButton[_ngcontent-%COMP%]:hover, \n.whatshotNavButton[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.toolbarQAWorkbookLogo[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n\n.toolbarQAWorkbookLogo[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\nimg.toolbarQAWorkbookLogo[_ngcontent-%COMP%] {\n    width: 56px;\n    height: 56px;\n}\n\n.toolbarWbTitle[_ngcontent-%COMP%] {\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-variant-caps: petite-caps;\n    font-size: 24px;\n    color: #FFD700;\n    text-decoration: none;    \n}\n\n.toolbarWbTitle[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n\n.sideNavButton[_ngcontent-%COMP%], \n.whatshotNavButton[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC10b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixxQkFBcUI7RUFDdkI7O0FBRUY7SUFDSSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEVBQTBFO0lBQzFFLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InRvcC10b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gICAgbWluLWhlaWdodDogNTZweCAhaW1wb3J0YW50OyBcclxuICAgIGhlaWdodDogNTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWF0LXRvb2xiYXItcm93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHggIWltcG9ydGFudDsgXHJcbiAgICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4udG9wLXRvb2xiYXItcm93IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi50b3BUb29sYmFyTWVudUl0ZW06aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFpbk5hdk1lbnVCdXR0b25Db250YWluZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIDtcclxufVxyXG5cclxuLnN5bGxhYmlNZW51QnV0dG9uQ29udGFpbmVyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2lkZU5hdkJ1dHRvbixcclxuLndoYXRzaG90TmF2QnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2lkZU5hdkJ1dHRvbjpob3ZlcixcclxuLndoYXRzaG90TmF2QnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRvb2xiYXJRQVdvcmtib29rTG9nbyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udG9vbGJhclFBV29ya2Jvb2tMb2dvOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nLnRvb2xiYXJRQVdvcmtib29rTG9nbyB7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxufVxyXG5cclxuLnRvb2xiYXJXYlRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC12YXJpYW50LWNhcHM6IHBldGl0ZS1jYXBzO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICAgIFxyXG59XHJcblxyXG4udG9vbGJhcldiVGl0bGU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNpZGVOYXZCdXR0b24sXHJcbi53aGF0c2hvdE5hdkJ1dHRvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvdG9wLXRvb2xiYXIvdG9wLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2Qjs7QUFFRjtJQUNJLGVBQWU7SUFDZiw4RUFBOEU7SUFDOUUsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwRUFBMEU7SUFDMUUsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7QUFDQSw0bkdBQTRuRyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhciB7XHJcbiAgICBtaW4taGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdG9vbGJhci1yb3cge1xyXG4gICAgbWluLWhlaWdodDogNTZweCAhaW1wb3J0YW50OyBcclxuICAgIGhlaWdodDogNTZweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi50b3AtdG9vbGJhci1yb3cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnRvcFRvb2xiYXJNZW51SXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYWluTmF2TWVudUJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAgO1xyXG59XHJcblxyXG4uc3lsbGFiaU1lbnVCdXR0b25Db250YWluZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlTmF2QnV0dG9uLFxyXG4ud2hhdHNob3ROYXZCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zaWRlTmF2QnV0dG9uOmhvdmVyLFxyXG4ud2hhdHNob3ROYXZCdXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9vbGJhclFBV29ya2Jvb2tMb2dvIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50b29sYmFyUUFXb3JrYm9va0xvZ286aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWcudG9vbGJhclFBV29ya2Jvb2tMb2dvIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG4udG9vbGJhcldiVGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXZhcmlhbnQtY2FwczogcGV0aXRlLWNhcHM7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI0ZGRDcwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICAgXHJcbn1cclxuXHJcbi50b29sYmFyV2JUaXRsZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2lkZU5hdkJ1dHRvbixcclxuLndoYXRzaG90TmF2QnV0dG9uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
}));

/***/ },

/***/ 3782
/*!***************************************************************************************!*\
  !*** ./src/app/StructuralComponents/whatshot-nav-menu/whatshot-nav-menu.component.ts ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyllabusNavMenuComponent: () => (/* binding */ SyllabusNavMenuComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 8431);



var _SyllabusNavMenuComponent;




var SyllabusNavMenuComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SyllabusNavMenuComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SyllabusNavMenuComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "menu", void 0);
});
_SyllabusNavMenuComponent = SyllabusNavMenuComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(SyllabusNavMenuComponent, "\u0275fac", function SyllabusNavMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SyllabusNavMenuComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(SyllabusNavMenuComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _SyllabusNavMenuComponent,
  selectors: [["app-whatshot-nav-menu"]],
  viewQuery: function SyllabusNavMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, 7);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    }
  },
  exportAs: ["whatshotNavMenu"],
  standalone: false,
  decls: 7,
  vars: 0,
  consts: [["mat-menu-item", "", "routerLink", "About"], ["mat-menu-item", "", "routerLink", "T&C"], ["mat-menu-item", "", "routerLink", "ContactInfo"]],
  template: function SyllabusNavMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-menu")(1, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "About QAWorkbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Terms & Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Contact Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem],
  styles: [".mat-menu-item[_ngcontent-%COMP%] {\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 16px !important;\n    line-height: 24px;\n    letter-spacing: 1px;\n    padding-left: 5px;\n    color: #FFD700;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRzaG90LW5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwRUFBMEU7SUFDMUUsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEIiLCJmaWxlIjoid2hhdHNob3QtbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbWVudS1pdGVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gIH0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvU3RydWN0dXJhbENvbXBvbmVudHMvd2hhdHNob3QtbmF2LW1lbnUvd2hhdHNob3QtbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtJQUMxRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtBQUNGLGdyQkFBZ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZW51LWl0ZW0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
}));

/***/ },

/***/ 4114
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _Home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home/home.component */ 9744);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_ancient_indian_history_qa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component */ 1844);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_stone_age_qa_stone_age_qa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component */ 3231);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_harappan_culture_bronze_age_civilization_qa_harappan_culture_bronze_age_civilization_qa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component */ 3417);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_chalcolithic_farming_cultures_qa_chalcolithic_farming_cultures_qa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component */ 2833);
/* harmony import */ var _general_awareness_qa_history_qa_history_qa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/history-qa.component */ 2780);
/* harmony import */ var _StructuralComponents_about_qaworkbook_about_qaworkbook_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StructuralComponents/about-qaworkbook/about-qaworkbook.component */ 2584);
/* harmony import */ var _StructuralComponents_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StructuralComponents/contact-info/contact-info.component */ 534);
/* harmony import */ var _StructuralComponents_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StructuralComponents/terms-and-conditions/terms-and-conditions.component */ 1396);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_vedic_age_qa_vedic_age_qa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/vedic-age-qa/vedic-age-qa.component */ 9891);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_jainism_and_buddhism_age_qa_jainism_and_buddhism_age_qa_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/jainism-and-buddhism-age-qa/jainism-and-buddhism-age-qa.component */ 8869);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_age_of_mahajanapadasQA_age_of_mahajanapadas_qa_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/age-of-mahajanapadasQA/age-of-mahajanapadas-qa.component */ 9418);
/* harmony import */ var _general_awareness_qa_political_science_qa_political_science_qa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/political-science-qa.component */ 1420);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_polity_qa_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-polity-qa.component */ 2006);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_agreements_and_groupings_qa_international_agreements_and_groupings_qa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-agreements-and-groupings-qa/international-agreements-and-groupings-qa.component */ 9479);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_international_institutions_and_agencies_qa_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/international-institutions-and-agencies-qa.component */ 7144);
/* harmony import */ var _general_awareness_qa_geography_qa_geography_qa_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/geography-qa.component */ 3176);
/* harmony import */ var _general_awareness_qa_economics_qa_economics_qa_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./general-awareness-qa/economics-qa/economics-qa.component */ 1424);
/* harmony import */ var _general_awareness_qa_political_science_qa_other_countries_rules_and_developments_qa_other_countries_rules_and_developments_qa_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/other-countries-rules-and-developments-qa.component */ 4504);
/* harmony import */ var _general_awareness_qa_political_science_qa_other_countries_rules_and_developments_qa_united_states_of_america_qa_united_states_of_america_qa_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/united-states-of-america-qa/united-states-of-america-qa.component */ 7598);
/* harmony import */ var _general_awareness_qa_geography_qa_indian_geography_qa_indian_geography_qa_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/indian-geography-qa/indian-geography-qa.component */ 7550);
/* harmony import */ var _general_awareness_qa_geography_qa_indian_geography_qa_drainage_system_qa_drainage_system_qa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/indian-geography-qa/drainage-system-qa/drainage-system-qa.component */ 5654);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_regulatory_authorities_qa_regulatory_authorities_qa_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/regulatory-authorities-qa.component */ 7413);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_not_for_profit_companies_and_trusts_qa_not_for_profit_companies_and_trusts_qa_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/not-for-profit-companies-and-trusts-qa.component */ 6309);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_fatfqa_fatfqa_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/fatfqa/fatfqa.component */ 5180);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_iloqa_iloqa_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/iloqa/iloqa.component */ 0);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_emgfqa_emgfqa_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/emgfqa/emgfqa.component */ 1196);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_regulatory_authorities_qa_fsdcqa_fsdcqa_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/fsdcqa/fsdcqa.component */ 7711);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_not_for_profit_companies_and_trusts_qa_ncfeqa_ncfeqa_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/ncfeqa/ncfeqa.component */ 8731);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_policies_and_strategies_qa_policies_and_strategies_qa_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/policies-and-strategies-qa.component */ 4721);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_policies_and_strategies_qa_nsfeqa_nsfeqa_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/nsfeqa/nsfeqa.component */ 4361);
/* harmony import */ var _general_awareness_qa_geography_qa_indian_geography_qa_location_and_size_qa_location_and_size_qa_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/indian-geography-qa/location-and-size-qa/location-and-size-qa.component */ 5998);
/* harmony import */ var _general_awareness_qa_facts_qa_facts_qa_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./general-awareness-qa/facts-qa/facts-qa.component */ 4354);
/* harmony import */ var _general_awareness_qa_facts_qa_books_and_authors_qa_books_and_authors_qa_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./general-awareness-qa/facts-qa/books-and-authors-qa/books-and-authors-qa.component */ 7347);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_organizations_associations_and_movements_qa_organizations_associations_and_movements_qa_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/organizations-associations-and-movements-qa/organizations-associations-and-movements-qa.component */ 6941);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_organizations_associations_and_movements_qa_all_india_kisan_sabha_qa_all_india_kisan_sabha_qa_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/organizations-associations-and-movements-qa/all-india-kisan-sabha-qa/all-india-kisan-sabha-qa.component */ 3375);
/* harmony import */ var _general_awareness_qa_history_qa_modern_indian_history_qa_modern_indian_history_qa_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/modern-indian-history-qa/modern-indian-history-qa.component */ 1080);
/* harmony import */ var _general_awareness_qa_history_qa_modern_indian_history_qa_eighteenth_century_india_qa_eighteenth_century_india_qa_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/modern-indian-history-qa/eighteenth-century-india-qa/eighteenth-century-india-qa.component */ 2064);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_indian_constitution_qa_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/indian-constitution-qa.component */ 4503);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_fundamental_rights_qa_fundamental_rights_qa_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/fundamental-rights-qa/fundamental-rights-qa.component */ 3964);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_dpspqa_dpspqa_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/dpspqa/dpspqa.component */ 5099);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_science_and_civilization_legacy_qa_science_and_civilization_legacy_qa_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/science-and-civilization-legacy-qa/science-and-civilization-legacy-qa.component */ 717);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_maurya_age_qa_maurya_age_qa_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/maurya-age-qa/maurya-age-qa.component */ 9785);
/* harmony import */ var _general_awareness_qa_facts_qa_all_in_one_qa_all_in_one_qa_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./general-awareness-qa/facts-qa/all-in-one-qa/all-in-one-qa.component */ 6621);
/* harmony import */ var _general_awareness_qa_history_qa_modern_indian_history_qa_european_penetration_and_conquest_qa_european_penetration_and_conquest_qa_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/modern-indian-history-qa/european-penetration-and-conquest-qa/european-penetration-and-conquest-qa.component */ 420);
/* harmony import */ var _general_awareness_qa_geography_qa_physical_geography_qa_physical_geography_qa_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/physical-geography-qa/physical-geography-qa.component */ 5238);
/* harmony import */ var _general_awareness_qa_geography_qa_physical_geography_qa_earth_origin_and_evolution_qa_earth_origin_and_evolution_qa_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/physical-geography-qa/earth-origin-and-evolution-qa/earth-origin-and-evolution-qa.component */ 5094);
/* harmony import */ var _general_awareness_qa_geography_qa_physical_geography_qa_earth_interior_qa_earth_interior_qa_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/physical-geography-qa/earth-interior-qa/earth-interior-qa.component */ 9946);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_central_asian_influence_qa_central_asian_influence_qa_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/central-asian-influence-qa/central-asian-influence-qa.component */ 7657);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_satavahanas_qa_satavahanas_qa_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/satavahanas-qa/satavahanas-qa.component */ 3887);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_dawn_of_history_in_south_india_qa_dawn_of_history_in_south_india_qa_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/dawn-of-history-in-south-india-qa/dawn-of-history-in-south-india-qa.component */ 329);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_post_maurya_crafts_trade_and_towns_qa_post_maurya_crafts_trade_and_towns_qa_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/post-maurya-crafts-trade-and-towns-qa/post-maurya-crafts-trade-and-towns-qa.component */ 5925);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_gupta_age_qa_gupta_age_qa_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/gupta-age-qa/gupta-age-qa.component */ 7611);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_introduction_and_features_qa_introduction_and_features_qa_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/introduction-and-features-qa/introduction-and-features-qa.component */ 4448);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_constitutional_history_qa_constitutional_history_qa_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/constitutional-history-qa/constitutional-history-qa.component */ 6560);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_making_of_constitution_qa_making_of_constitution_qa_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/making-of-constitution-qa/making-of-constitution-qa.component */ 7296);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_preamble_qa_preamble_qa_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/preamble-qa/preamble-qa.component */ 9464);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_union_and_its_territory_qa_union_and_its_territory_qa_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/union-and-its-territory-qa/union-and-its-territory-qa.component */ 2706);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_citizenship_qa_citizenship_qa_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/citizenship-qa/citizenship-qa.component */ 5652);
/* harmony import */ var _general_awareness_qa_history_qa_kerala_history_qa_kerala_history_qa_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/kerala-history-qa/kerala-history-qa.component */ 7716);
/* harmony import */ var _general_awareness_qa_history_qa_kerala_history_qa_travancore_history_qa_travancore_history_qa_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/kerala-history-qa/travancore-history-qa/travancore-history-qa.component */ 8547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/core */ 7580);



var _AppRoutingModule;
































































var routes = [{
  path: '',
  component: _Home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
}, {
  path: 'About',
  component: _StructuralComponents_about_qaworkbook_about_qaworkbook_component__WEBPACK_IMPORTED_MODULE_10__.AboutQAWorkbookComponent
}, {
  path: 'ContactInfo',
  component: _StructuralComponents_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_11__.ContactInfoComponent
}, {
  path: 'T&C',
  component: _StructuralComponents_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_12__.TermsAndConditionsComponent
}, {
  path: 'EconomicsQA',
  component: _general_awareness_qa_economics_qa_economics_qa_component__WEBPACK_IMPORTED_MODULE_21__.EconomicsQAComponent
}, {
  path: 'GeographyQA',
  component: _general_awareness_qa_geography_qa_geography_qa_component__WEBPACK_IMPORTED_MODULE_20__.GeographyQAComponent
}, {
  path: 'GeographyQA/IndianGeographyQA',
  component: _general_awareness_qa_geography_qa_indian_geography_qa_indian_geography_qa_component__WEBPACK_IMPORTED_MODULE_24__.IndianGeographyQAComponent
}, {
  path: 'GeographyQA/IndianGeographyQA/LocationAndSizeQA',
  component: _general_awareness_qa_geography_qa_indian_geography_qa_location_and_size_qa_location_and_size_qa_component__WEBPACK_IMPORTED_MODULE_35__.LocationAndSizeQAComponent
}, {
  path: 'GeographyQA/IndianGeographyQA/DrainageSystemQA',
  component: _general_awareness_qa_geography_qa_indian_geography_qa_drainage_system_qa_drainage_system_qa_component__WEBPACK_IMPORTED_MODULE_25__.DrainageSystemQAComponent
}, {
  path: 'GeographyQA/PhysicalGeographyQA',
  component: _general_awareness_qa_geography_qa_physical_geography_qa_physical_geography_qa_component__WEBPACK_IMPORTED_MODULE_49__.PhysicalGeographyQAComponent
}, {
  path: 'GeographyQA/PhysicalGeographyQA/EarthOriginAndEvolutionQA',
  component: _general_awareness_qa_geography_qa_physical_geography_qa_earth_origin_and_evolution_qa_earth_origin_and_evolution_qa_component__WEBPACK_IMPORTED_MODULE_50__.EarthOriginAndEvolutionQAComponent
}, {
  path: 'GeographyQA/PhysicalGeographyQA/EarthInteriorQA',
  component: _general_awareness_qa_geography_qa_physical_geography_qa_earth_interior_qa_earth_interior_qa_component__WEBPACK_IMPORTED_MODULE_51__.EarthInteriorQAComponent
}, {
  path: 'HistoryQA',
  component: _general_awareness_qa_history_qa_history_qa_component__WEBPACK_IMPORTED_MODULE_9__.HistoryQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_ancient_indian_history_qa_component__WEBPACK_IMPORTED_MODULE_5__.AncientIndianHistoryQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/StoneAgeQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_stone_age_qa_stone_age_qa_component__WEBPACK_IMPORTED_MODULE_6__.StoneAgeQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/ChalcolithicAgeQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_chalcolithic_farming_cultures_qa_chalcolithic_farming_cultures_qa_component__WEBPACK_IMPORTED_MODULE_8__.ChalcolithicAgeQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/BronzeAgeAndHarappanCivilizationQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_harappan_culture_bronze_age_civilization_qa_harappan_culture_bronze_age_civilization_qa_component__WEBPACK_IMPORTED_MODULE_7__.BronzeAgeAndHarappanCivilizationQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/VedicAgeQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_vedic_age_qa_vedic_age_qa_component__WEBPACK_IMPORTED_MODULE_13__.VedicAgeQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/JainismAndBuddhismAgeQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_jainism_and_buddhism_age_qa_jainism_and_buddhism_age_qa_component__WEBPACK_IMPORTED_MODULE_14__.JainismAndBuddhismAgeQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/AgeOfMahajanapadasQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_age_of_mahajanapadasQA_age_of_mahajanapadas_qa_component__WEBPACK_IMPORTED_MODULE_15__.AgeOfMahajanapadasQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/MauryaAgeQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_maurya_age_qa_maurya_age_qa_component__WEBPACK_IMPORTED_MODULE_46__.MauryaAgeQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/CentralAsianInfluenceQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_central_asian_influence_qa_central_asian_influence_qa_component__WEBPACK_IMPORTED_MODULE_52__.CentralAsianInfluenceQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/ScienceAndCivilizationLegacyQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_science_and_civilization_legacy_qa_science_and_civilization_legacy_qa_component__WEBPACK_IMPORTED_MODULE_45__.ScienceAndCivilizationLegacyQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/SatavahanasQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_satavahanas_qa_satavahanas_qa_component__WEBPACK_IMPORTED_MODULE_53__.SatavahanasQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/DawnOfHistoryInSouthIndiaQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_dawn_of_history_in_south_india_qa_dawn_of_history_in_south_india_qa_component__WEBPACK_IMPORTED_MODULE_54__.DawnOfHistoryInSouthIndia
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/PostMauryaCraftsTradeAndTownsQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_post_maurya_crafts_trade_and_towns_qa_post_maurya_crafts_trade_and_towns_qa_component__WEBPACK_IMPORTED_MODULE_55__.PostMauryaCraftsTradeAndTownsQAComponent
}, {
  path: 'HistoryQA/AncientIndianHistoryQA/GuptaAgeQA',
  component: _general_awareness_qa_history_qa_ancient_indian_history_qa_gupta_age_qa_gupta_age_qa_component__WEBPACK_IMPORTED_MODULE_56__.GuptaAgeQAComponent
}, {
  path: 'HistoryQA/ModernIndianHistoryQA',
  component: _general_awareness_qa_history_qa_modern_indian_history_qa_modern_indian_history_qa_component__WEBPACK_IMPORTED_MODULE_40__.ModernIndianHistoryQAComponent
}, {
  path: 'HistoryQA/ModernIndianHistoryQA/EighteenthCenturyIndiaQA',
  component: _general_awareness_qa_history_qa_modern_indian_history_qa_eighteenth_century_india_qa_eighteenth_century_india_qa_component__WEBPACK_IMPORTED_MODULE_41__.EighteenthCenturyIndiaQAComponent
}, {
  path: 'HistoryQA/ModernIndianHistoryQA/EuropeanPenetrationAndConquestQA',
  component: _general_awareness_qa_history_qa_modern_indian_history_qa_european_penetration_and_conquest_qa_european_penetration_and_conquest_qa_component__WEBPACK_IMPORTED_MODULE_48__.EuropeanPenetrationAndConquestQAComponent
}, {
  path: 'HistoryQA/KeralaHistoryQA',
  component: _general_awareness_qa_history_qa_kerala_history_qa_kerala_history_qa_component__WEBPACK_IMPORTED_MODULE_63__.KeralaHistoryQAComponent
}, {
  path: 'HistoryQA/KeralaHistoryQA/TravancoreHistoryQA',
  component: _general_awareness_qa_history_qa_kerala_history_qa_travancore_history_qa_travancore_history_qa_component__WEBPACK_IMPORTED_MODULE_64__.TravancoreHistoryQAComponent
}, {
  path: 'PoliticalScienceQA',
  component: _general_awareness_qa_political_science_qa_political_science_qa_component__WEBPACK_IMPORTED_MODULE_16__.PoliticalScienceQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_polity_qa_component__WEBPACK_IMPORTED_MODULE_17__.IndianPolityQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_indian_constitution_qa_component__WEBPACK_IMPORTED_MODULE_42__.IndianConstitutionQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/IntroductionAndFeaturesQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_introduction_and_features_qa_introduction_and_features_qa_component__WEBPACK_IMPORTED_MODULE_57__.IntroductionAndFeaturesQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/ConstitutionalHistoryQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_constitutional_history_qa_constitutional_history_qa_component__WEBPACK_IMPORTED_MODULE_58__.ConstitutionalHistoryQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/MakingOfConstitutionQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_making_of_constitution_qa_making_of_constitution_qa_component__WEBPACK_IMPORTED_MODULE_59__.MakingOfConstitutionQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/PreambleQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_preamble_qa_preamble_qa_component__WEBPACK_IMPORTED_MODULE_60__.PreambleQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/UnionAndItsTerritoryQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_union_and_its_territory_qa_union_and_its_territory_qa_component__WEBPACK_IMPORTED_MODULE_61__.UnionAndItsTerritoryQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/CitizenshipQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_citizenship_qa_citizenship_qa_component__WEBPACK_IMPORTED_MODULE_62__.CitizenshipQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/FundamentalRightsQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_fundamental_rights_qa_fundamental_rights_qa_component__WEBPACK_IMPORTED_MODULE_43__.FundamentalRightsQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/DPSPQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_dpspqa_dpspqa_component__WEBPACK_IMPORTED_MODULE_44__.DPSPQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_regulatory_authorities_qa_regulatory_authorities_qa_component__WEBPACK_IMPORTED_MODULE_26__.RegulatoryAuthoritiesQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA/FSDCQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_regulatory_authorities_qa_fsdcqa_fsdcqa_component__WEBPACK_IMPORTED_MODULE_31__.FSDCQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_not_for_profit_companies_and_trusts_qa_not_for_profit_companies_and_trusts_qa_component__WEBPACK_IMPORTED_MODULE_27__.NotForProfitCompaniesAndTrustsQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA/NCFEQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_not_for_profit_companies_and_trusts_qa_ncfeqa_ncfeqa_component__WEBPACK_IMPORTED_MODULE_32__.NCFEQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_policies_and_strategies_qa_policies_and_strategies_qa_component__WEBPACK_IMPORTED_MODULE_33__.PoliciesAndStrategiesQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA/NSFEQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_policies_and_strategies_qa_nsfeqa_nsfeqa_component__WEBPACK_IMPORTED_MODULE_34__.NSFEQAComponent
}, {
  path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA',
  component: _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_international_institutions_and_agencies_qa_component__WEBPACK_IMPORTED_MODULE_19__.InternationalInstitutionsAndAgenciesQAComponent
}, {
  path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/FATFQA',
  component: _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_fatfqa_fatfqa_component__WEBPACK_IMPORTED_MODULE_28__.FATFQAComponent
}, {
  path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/EMGFQA',
  component: _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_emgfqa_emgfqa_component__WEBPACK_IMPORTED_MODULE_30__.EMGFQAComponent
}, {
  path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/ILOQA',
  component: _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_iloqa_iloqa_component__WEBPACK_IMPORTED_MODULE_29__.ILOQAComponent
}, {
  path: 'PoliticalScienceQA/InternationalAgreementsAndGroupingsQA',
  component: _general_awareness_qa_political_science_qa_international_agreements_and_groupings_qa_international_agreements_and_groupings_qa_component__WEBPACK_IMPORTED_MODULE_18__.InternationalAgreementsAndGroupingsQAComponent
}, {
  path: 'PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA',
  component: _general_awareness_qa_political_science_qa_other_countries_rules_and_developments_qa_other_countries_rules_and_developments_qa_component__WEBPACK_IMPORTED_MODULE_22__.OtherCountriesRulesAndDevelopmentsQAComponent
}, {
  path: 'PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA/UnitedStatesOfAmericaQA',
  component: _general_awareness_qa_political_science_qa_other_countries_rules_and_developments_qa_united_states_of_america_qa_united_states_of_america_qa_component__WEBPACK_IMPORTED_MODULE_23__.UnitedStatesOfAmericaQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/OrganizationsAssociationsAndMovementsQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_organizations_associations_and_movements_qa_organizations_associations_and_movements_qa_component__WEBPACK_IMPORTED_MODULE_38__.OrganizationsAssociationsAndMovementsQAComponent
}, {
  path: 'PoliticalScienceQA/IndianPolityQA/OrganizationsAssociationsAndMovementsQA/AllIndiaKisanSabhaQA',
  component: _general_awareness_qa_political_science_qa_indian_polity_qa_organizations_associations_and_movements_qa_all_india_kisan_sabha_qa_all_india_kisan_sabha_qa_component__WEBPACK_IMPORTED_MODULE_39__.AllIndiaKisanSabhaQAComponent
}, {
  path: 'FactsQA',
  component: _general_awareness_qa_facts_qa_facts_qa_component__WEBPACK_IMPORTED_MODULE_36__.FactsQAComponent
}, {
  path: 'FactsQA/BooksAndAuthorsQA',
  component: _general_awareness_qa_facts_qa_books_and_authors_qa_books_and_authors_qa_component__WEBPACK_IMPORTED_MODULE_37__.BooksAndAuthorsQAComponent
}, {
  path: 'FactsQA/AllInOneQA',
  component: _general_awareness_qa_facts_qa_all_in_one_qa_all_in_one_qa_component__WEBPACK_IMPORTED_MODULE_47__.AllInOneQAComponent
}, {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];
var AppRoutingModule = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});
_AppRoutingModule = AppRoutingModule;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppRoutingModule, "\u0275fac", function AppRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppRoutingModule)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵdefineNgModule"]({
  type: _AppRoutingModule
}));
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ },

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 622);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _StructuralComponents_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StructuralComponents/top-toolbar/top-toolbar.component */ 3610);
/* harmony import */ var _StructuralComponents_right_sidebar_right_top_sidebar_right_top_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StructuralComponents/right-sidebar/right-top-sidebar/right-top-sidebar.component */ 5330);
/* harmony import */ var _StructuralComponents_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StructuralComponents/main/main.component */ 7294);
/* harmony import */ var _StructuralComponents_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StructuralComponents/right-sidebar/right-sidebar.component */ 4606);
/* harmony import */ var _StructuralComponents_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StructuralComponents/left-sidebar/left-sidebar.component */ 1048);
/* harmony import */ var _StructuralComponents_left_sidebar_left_top_sidebar_left_top_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StructuralComponents/left-sidebar/left-top-sidebar/left-top-sidebar.component */ 1425);
/* harmony import */ var _StructuralComponents_left_sidebar_quick_nav_quick_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./StructuralComponents/left-sidebar/quick-nav/quick-nav.component */ 9615);



var _AppComponent;











function AppComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-left-top-sidebar")(2, "app-main")(3, "app-right-top-sidebar")(4, "app-quick-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-left-sidebar")(2, "app-main")(3, "app-right-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
var AppComponent = /*#__PURE__*/function () {
  function AppComponent(changeDetectorRef, media) {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "mobileQuery", void 0);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_mobileQueryListener", void 0);
    this.mobileQuery = media.matchMedia("(max-width: 1024px)");
    this._mobileQueryListener = function () {
      return changeDetectorRef.detectChanges();
    };
    //this.mobileQuery.addListener(this._mobileQueryListener);
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      //this.mobileQuery.removeListener(this._mobileQueryListener);
      this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
    }
  }]);
}();
_AppComponent = AppComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppComponent, "\u0275fac", function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.M));
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["my-app"]],
  standalone: false,
  decls: 6,
  vars: 4,
  consts: [[1, "total-container"], ["autosize", "", 1, "main-sidenav-container"], ["class", "mobileSidenavContentContainer", 4, "ngIf"], ["class", "desktopSidenavContentContainer", 4, "ngIf"], [1, "mobileSidenavContentContainer"], [1, "desktopSidenavContentContainer"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-top-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-sidenav-container", 1)(3, "mat-sidenav-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppComponent_div_4_Template, 5, 0, "div", 2)(5, AppComponent_div_5_Template, 4, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-top", 0, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mobileQuery.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.mobileQuery.matches);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent, _StructuralComponents_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.TopToolbarComponent, _StructuralComponents_right_sidebar_right_top_sidebar_right_top_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.RightTopSidebarComponent, _StructuralComponents_main_main_component__WEBPACK_IMPORTED_MODULE_9__.MainComponent, _StructuralComponents_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.RightSidebarComponent, _StructuralComponents_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.LeftSidebarComponent, _StructuralComponents_left_sidebar_left_top_sidebar_left_top_sidebar_component__WEBPACK_IMPORTED_MODULE_12__.LeftTopSidebarComponent, _StructuralComponents_left_sidebar_quick_nav_quick_nav_component__WEBPACK_IMPORTED_MODULE_13__.QuickNavComponent],
  styles: ["*[_ngcontent-%COMP%] {\n   box-sizing: border-box;\n   font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n   font-size: 18px;\n   line-height: 27px;\n   letter-spacing: 0.5px;\n}\n\n.total-container[_ngcontent-%COMP%] {\n   display: flex;\n   flex-direction: column;\n   position: absolute;\n   top: 0;\n   bottom: 0;\n   left: 0;\n   right: 0;\n   }\n\n   .main-sidenav-container[_ngcontent-%COMP%] {\n    \n\n\n    flex: 1;\n    background-color: #282828;\n    color: #F5E8D8 ;\n    }\n\n   .desktopSidenavContentContainer[_ngcontent-%COMP%] {\n    display:flex;\n    flex-flow:row wrap;\n    flex-direction: row;\n   }\n\n   .mobileSidenavContentContainer[_ngcontent-%COMP%]\n   {\n    display:flex;\n    flex-flow:row wrap;\n    flex-direction: row;\n   }\n\n   .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-main[_ngcontent-%COMP%] {\n     padding: 5px;\n   }\n\n   .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-left-top-sidebar[_ngcontent-%COMP%], \n   .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-quick-nav[_ngcontent-%COMP%], \n   .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-left-sidebar[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-top: 5px;\n  }\n\n   .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-right-top-sidebar[_ngcontent-%COMP%], \n   .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-notice-board[_ngcontent-%COMP%], \n   .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-right-sidebar[_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-top: 5px;\n  }\n\n  .mobileSidenavContentContainer[_ngcontent-%COMP%]   app-left-top-sidebar[_ngcontent-%COMP%], \n   .mobileSidenavContentContainer[_ngcontent-%COMP%]   app-right-top-sidebar[_ngcontent-%COMP%], \n   .mobileSidenavContentContainer[_ngcontent-%COMP%]   app-left-sidebar[_ngcontent-%COMP%], \n   .mobileSidenavContentContainer[_ngcontent-%COMP%]   app-main[_ngcontent-%COMP%], \n   .mobileSidenavContentContainer[_ngcontent-%COMP%]   app-quick-nav[_ngcontent-%COMP%], \n   .mobileSidenavContentContainer[_ngcontent-%COMP%]   app-notice-board[_ngcontent-%COMP%], \n   .mobileSidenavContentContainer[_ngcontent-%COMP%]   app-right-sidebar[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n\n  app-left-top-sidebar[_ngcontent-%COMP%], \n   app-right-top-sidebar[_ngcontent-%COMP%], \n   app-left-sidebar[_ngcontent-%COMP%], \n   app-quick-nav[_ngcontent-%COMP%], \n   app-notice-board[_ngcontent-%COMP%], \n   app-right-sidebar[_ngcontent-%COMP%] {\n    margin: 0;\n    text-align: left;\n  }\n\n  app-main[_ngcontent-%COMP%] {\n    font-family: 'Bookman Old Style', Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.5px;\n  }\n\n  .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-left-sidebar[_ngcontent-%COMP%] {\n    order:1;\n    flex: auto;\n    float: left;\n    width: 22.5%;\n    overflow-wrap: anywhere;\n  }\n\n .desktopSidenavContentContainer[_ngcontent-%COMP%]   app-main[_ngcontent-%COMP%] {\n    order:2;\n    flex: auto;\n    float: left;\n    width: 55%;\n    overflow-wrap: anywhere;\n  }\n\n.desktopSidenavContentContainer[_ngcontent-%COMP%]   app-right-sidebar[_ngcontent-%COMP%] {\n    order:3;\n    flex: auto;\n    float: right;\n    width: 22.5%;\n    overflow-wrap: anywhere;\n  }\n\n.mobileSidenavContentContainer\napp-left-top-sidebar[_ngcontent-%COMP%], \napp-right-top-sidebar[_ngcontent-%COMP%], \napp-main[_ngcontent-%COMP%], \napp-quick-nav[_ngcontent-%COMP%], \napp-notice-board[_ngcontent-%COMP%] {\n  flex: unset;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csc0JBQXNCO0dBQ3RCLDBFQUEwRTtHQUMxRSxlQUFlO0dBQ2YsaUJBQWlCO0dBQ2pCLHFCQUFxQjtBQUN4Qjs7QUFFQTtHQUNHLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsa0JBQWtCO0dBQ2xCLE1BQU07R0FDTixTQUFTO0dBQ1QsT0FBTztHQUNQLFFBQVE7R0FDUjs7R0FFQTtJQUNDO3lGQUNxRjtJQUNyRixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZjs7R0FFRDtJQUNDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCOztHQUVBOztJQUVDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCOztHQUVBO0tBQ0UsWUFBWTtHQUNkOztHQUVBOzs7SUFHQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztHQUVDOzs7SUFHQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7Ozs7O0lBT0UsWUFBWTtFQUNkOztFQUVBOzs7Ozs7SUFNRSxTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMEVBQTBFO0lBQzFFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7Q0FFRDtJQUNHLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVix1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztBQUVGOzs7Ozs7RUFNRSxXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgZm9udC1mYW1pbHk6ICdCb29rbWFuIE9sZCBTdHlsZScsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICBmb250LXNpemU6IDE4cHg7XG4gICBsaW5lLWhlaWdodDogMjdweDtcbiAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnRvdGFsLWNvbnRhaW5lciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogMDtcbiAgIGJvdHRvbTogMDtcbiAgIGxlZnQ6IDA7XG4gICByaWdodDogMDtcbiAgIH1cblxuICAgLm1haW4tc2lkZW5hdi1jb250YWluZXIge1xuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcbiAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgICBjb2xvcjogI0Y1RThEOCA7XG4gICAgfVxuXG4gICAuZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1mbG93OnJvdyB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICB9XG5cbiAgIC5tb2JpbGVTaWRlbmF2Q29udGVudENvbnRhaW5lclxuICAge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIH1cblxuICAgLmRlc2t0b3BTaWRlbmF2Q29udGVudENvbnRhaW5lciBhcHAtbWFpbiB7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgIH1cblxuICAgLmRlc2t0b3BTaWRlbmF2Q29udGVudENvbnRhaW5lciBhcHAtbGVmdC10b3Atc2lkZWJhcixcbiAgIC5kZXNrdG9wU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLXF1aWNrLW5hdixcbiAgIC5kZXNrdG9wU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLWxlZnQtc2lkZWJhciB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuXG4gICAuZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1yaWdodC10b3Atc2lkZWJhcixcbiAgIC5kZXNrdG9wU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLW5vdGljZS1ib2FyZCxcbiAgIC5kZXNrdG9wU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLXJpZ2h0LXNpZGViYXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG5cbiAgLm1vYmlsZVNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1sZWZ0LXRvcC1zaWRlYmFyLFxuICAubW9iaWxlU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLXJpZ2h0LXRvcC1zaWRlYmFyLFxuICAubW9iaWxlU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLWxlZnQtc2lkZWJhcixcbiAgLm1vYmlsZVNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1tYWluLFxuICAubW9iaWxlU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLXF1aWNrLW5hdixcbiAgLm1vYmlsZVNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1ub3RpY2UtYm9hcmQsXG4gIC5tb2JpbGVTaWRlbmF2Q29udGVudENvbnRhaW5lciBhcHAtcmlnaHQtc2lkZWJhciB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgYXBwLWxlZnQtdG9wLXNpZGViYXIsXG4gIGFwcC1yaWdodC10b3Atc2lkZWJhcixcbiAgYXBwLWxlZnQtc2lkZWJhcixcbiAgYXBwLXF1aWNrLW5hdixcbiAgYXBwLW5vdGljZS1ib2FyZCxcbiAgYXBwLXJpZ2h0LXNpZGViYXIge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgYXBwLW1haW4ge1xuICAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cblxuICAuZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1sZWZ0LXNpZGViYXIge1xuICAgIG9yZGVyOjE7XG4gICAgZmxleDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjIuNSU7XG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIH1cblxuIC5kZXNrdG9wU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLW1haW4ge1xuICAgIG9yZGVyOjI7XG4gICAgZmxleDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTUlO1xuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICB9XG5cbi5kZXNrdG9wU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLXJpZ2h0LXNpZGViYXIge1xuICAgIG9yZGVyOjM7XG4gICAgZmxleDogYXV0bztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDIyLjUlO1xuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICB9XG5cbi5tb2JpbGVTaWRlbmF2Q29udGVudENvbnRhaW5lclxuYXBwLWxlZnQtdG9wLXNpZGViYXIsXG5hcHAtcmlnaHQtdG9wLXNpZGViYXIsXG5hcHAtbWFpbixcbmFwcC1xdWljay1uYXYsXG5hcHAtbm90aWNlLWJvYXJkIHtcbiAgZmxleDogdW5zZXQ7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxzQkFBc0I7R0FDdEIsMEVBQTBFO0dBQzFFLGVBQWU7R0FDZixpQkFBaUI7R0FDakIscUJBQXFCO0FBQ3hCOztBQUVBO0dBQ0csYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixrQkFBa0I7R0FDbEIsTUFBTTtHQUNOLFNBQVM7R0FDVCxPQUFPO0dBQ1AsUUFBUTtHQUNSOztHQUVBO0lBQ0M7eUZBQ3FGO0lBQ3JGLE9BQU87SUFDUCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmOztHQUVEO0lBQ0MsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7O0dBRUE7O0lBRUMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7O0dBRUE7S0FDRSxZQUFZO0dBQ2Q7O0dBRUE7OztJQUdDLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0dBRUM7OztJQUdDLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7Ozs7Ozs7SUFPRSxZQUFZO0VBQ2Q7O0VBRUE7Ozs7OztJQU1FLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwwRUFBMEU7SUFDMUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztDQUVEO0lBQ0csT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0FBRUY7Ozs7OztFQU1FLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQSx3ekpBQXd6SiIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIGZvbnQtZmFtaWx5OiAnQm9va21hbiBPbGQgU3R5bGUnLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgZm9udC1zaXplOiAxOHB4O1xuICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi50b3RhbC1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDA7XG4gICBib3R0b206IDA7XG4gICBsZWZ0OiAwO1xuICAgcmlnaHQ6IDA7XG4gICB9XG5cbiAgIC5tYWluLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gICAgY29sb3I6ICNGNUU4RDggO1xuICAgIH1cblxuICAgLmRlc2t0b3BTaWRlbmF2Q29udGVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZmxvdzpyb3cgd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgfVxuXG4gICAubW9iaWxlU2lkZW5hdkNvbnRlbnRDb250YWluZXJcbiAgIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1mbG93OnJvdyB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICB9XG5cbiAgIC5kZXNrdG9wU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLW1haW4ge1xuICAgICBwYWRkaW5nOiA1cHg7XG4gICB9XG5cbiAgIC5kZXNrdG9wU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLWxlZnQtdG9wLXNpZGViYXIsXG4gICAuZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1xdWljay1uYXYsXG4gICAuZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1sZWZ0LXNpZGViYXIge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cblxuICAgLmRlc2t0b3BTaWRlbmF2Q29udGVudENvbnRhaW5lciBhcHAtcmlnaHQtdG9wLXNpZGViYXIsXG4gICAuZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1ub3RpY2UtYm9hcmQsXG4gICAuZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1yaWdodC1zaWRlYmFyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuXG4gIC5tb2JpbGVTaWRlbmF2Q29udGVudENvbnRhaW5lciBhcHAtbGVmdC10b3Atc2lkZWJhcixcbiAgLm1vYmlsZVNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1yaWdodC10b3Atc2lkZWJhcixcbiAgLm1vYmlsZVNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1sZWZ0LXNpZGViYXIsXG4gIC5tb2JpbGVTaWRlbmF2Q29udGVudENvbnRhaW5lciBhcHAtbWFpbixcbiAgLm1vYmlsZVNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1xdWljay1uYXYsXG4gIC5tb2JpbGVTaWRlbmF2Q29udGVudENvbnRhaW5lciBhcHAtbm90aWNlLWJvYXJkLFxuICAubW9iaWxlU2lkZW5hdkNvbnRlbnRDb250YWluZXIgYXBwLXJpZ2h0LXNpZGViYXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIGFwcC1sZWZ0LXRvcC1zaWRlYmFyLFxuICBhcHAtcmlnaHQtdG9wLXNpZGViYXIsXG4gIGFwcC1sZWZ0LXNpZGViYXIsXG4gIGFwcC1xdWljay1uYXYsXG4gIGFwcC1ub3RpY2UtYm9hcmQsXG4gIGFwcC1yaWdodC1zaWRlYmFyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIGFwcC1tYWluIHtcbiAgICBmb250LWZhbWlseTogJ0Jvb2ttYW4gT2xkIFN0eWxlJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB9XG5cbiAgLmRlc2t0b3BTaWRlbmF2Q29udGVudENvbnRhaW5lciBhcHAtbGVmdC1zaWRlYmFyIHtcbiAgICBvcmRlcjoxO1xuICAgIGZsZXg6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDIyLjUlO1xuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICB9XG5cbiAuZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1tYWluIHtcbiAgICBvcmRlcjoyO1xuICAgIGZsZXg6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgfVxuXG4uZGVza3RvcFNpZGVuYXZDb250ZW50Q29udGFpbmVyIGFwcC1yaWdodC1zaWRlYmFyIHtcbiAgICBvcmRlcjozO1xuICAgIGZsZXg6IGF1dG87XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAyMi41JTtcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgfVxuXG4ubW9iaWxlU2lkZW5hdkNvbnRlbnRDb250YWluZXJcbmFwcC1sZWZ0LXRvcC1zaWRlYmFyLFxuYXBwLXJpZ2h0LXRvcC1zaWRlYmFyLFxuYXBwLW1haW4sXG5hcHAtcXVpY2stbmF2LFxuYXBwLW5vdGljZS1ib2FyZCB7XG4gIGZsZXg6IHVuc2V0O1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
}));

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9736);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _StructuralComponents_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StructuralComponents/top-toolbar/top-toolbar.component */ 3610);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _Home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Home/home.component */ 9744);
/* harmony import */ var _StructuralComponents_right_sidebar_right_top_sidebar_right_top_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StructuralComponents/right-sidebar/right-top-sidebar/right-top-sidebar.component */ 5330);
/* harmony import */ var _StructuralComponents_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StructuralComponents/notice-board/notice-board.component */ 9590);
/* harmony import */ var _StructuralComponents_main_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StructuralComponents/main/main.component */ 7294);
/* harmony import */ var _StructuralComponents_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./StructuralComponents/right-sidebar/right-sidebar.component */ 4606);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./StructuralComponents/display-qa/display-qa.component */ 9118);
/* harmony import */ var _general_awareness_qa_history_qa_history_qa_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/history-qa.component */ 2780);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_ancient_indian_history_qa_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component */ 1844);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_stone_age_qa_stone_age_qa_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component */ 3231);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_chalcolithic_farming_cultures_qa_chalcolithic_farming_cultures_qa_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component */ 2833);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_harappan_culture_bronze_age_civilization_qa_harappan_culture_bronze_age_civilization_qa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component */ 3417);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);
/* harmony import */ var _StructuralComponents_whatshot_nav_menu_whatshot_nav_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StructuralComponents/whatshot-nav-menu/whatshot-nav-menu.component */ 3782);
/* harmony import */ var _StructuralComponents_main_nav_menu_main_nav_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StructuralComponents/main-nav-menu/main-nav-menu.component */ 4262);
/* harmony import */ var _StructuralComponents_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StructuralComponents/left-sidebar/left-sidebar.component */ 1048);
/* harmony import */ var _StructuralComponents_left_sidebar_left_top_sidebar_left_top_sidebar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./StructuralComponents/left-sidebar/left-top-sidebar/left-top-sidebar.component */ 1425);
/* harmony import */ var _StructuralComponents_left_sidebar_quick_nav_quick_nav_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./StructuralComponents/left-sidebar/quick-nav/quick-nav.component */ 9615);
/* harmony import */ var _StructuralComponents_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./StructuralComponents/terms-and-conditions/terms-and-conditions.component */ 1396);
/* harmony import */ var _StructuralComponents_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./StructuralComponents/contact-info/contact-info.component */ 534);
/* harmony import */ var _StructuralComponents_about_qaworkbook_about_qaworkbook_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./StructuralComponents/about-qaworkbook/about-qaworkbook.component */ 2584);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_vedic_age_qa_vedic_age_qa_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/vedic-age-qa/vedic-age-qa.component */ 9891);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_jainism_and_buddhism_age_qa_jainism_and_buddhism_age_qa_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/jainism-and-buddhism-age-qa/jainism-and-buddhism-age-qa.component */ 8869);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_age_of_mahajanapadasQA_age_of_mahajanapadas_qa_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/age-of-mahajanapadasQA/age-of-mahajanapadas-qa.component */ 9418);
/* harmony import */ var _general_awareness_qa_political_science_qa_political_science_qa_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/political-science-qa.component */ 1420);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_polity_qa_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-polity-qa.component */ 2006);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_international_institutions_and_agencies_qa_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/international-institutions-and-agencies-qa.component */ 7144);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_agreements_and_groupings_qa_international_agreements_and_groupings_qa_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-agreements-and-groupings-qa/international-agreements-and-groupings-qa.component */ 9479);
/* harmony import */ var _general_awareness_qa_economics_qa_economics_qa_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./general-awareness-qa/economics-qa/economics-qa.component */ 1424);
/* harmony import */ var _general_awareness_qa_geography_qa_geography_qa_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/geography-qa.component */ 3176);
/* harmony import */ var _general_awareness_qa_political_science_qa_other_countries_rules_and_developments_qa_other_countries_rules_and_developments_qa_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/other-countries-rules-and-developments-qa.component */ 4504);
/* harmony import */ var _general_awareness_qa_political_science_qa_other_countries_rules_and_developments_qa_united_states_of_america_qa_united_states_of_america_qa_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/united-states-of-america-qa/united-states-of-america-qa.component */ 7598);
/* harmony import */ var _general_awareness_qa_geography_qa_indian_geography_qa_indian_geography_qa_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/indian-geography-qa/indian-geography-qa.component */ 7550);
/* harmony import */ var _general_awareness_qa_geography_qa_indian_geography_qa_drainage_system_qa_drainage_system_qa_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/indian-geography-qa/drainage-system-qa/drainage-system-qa.component */ 5654);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_regulatory_authorities_qa_regulatory_authorities_qa_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/regulatory-authorities-qa.component */ 7413);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_not_for_profit_companies_and_trusts_qa_not_for_profit_companies_and_trusts_qa_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/not-for-profit-companies-and-trusts-qa.component */ 6309);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_fatfqa_fatfqa_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/fatfqa/fatfqa.component */ 5180);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_emgfqa_emgfqa_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/emgfqa/emgfqa.component */ 1196);
/* harmony import */ var _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_iloqa_iloqa_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/iloqa/iloqa.component */ 0);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_regulatory_authorities_qa_fsdcqa_fsdcqa_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/fsdcqa/fsdcqa.component */ 7711);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_not_for_profit_companies_and_trusts_qa_ncfeqa_ncfeqa_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/ncfeqa/ncfeqa.component */ 8731);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_policies_and_strategies_qa_policies_and_strategies_qa_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/policies-and-strategies-qa.component */ 4721);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_policies_and_strategies_qa_nsfeqa_nsfeqa_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/nsfeqa/nsfeqa.component */ 4361);
/* harmony import */ var _StructuralComponents_bottom_ad_bar_bottom_ad_bar_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./StructuralComponents/bottom-ad-bar/bottom-ad-bar.component */ 2598);
/* harmony import */ var _general_awareness_qa_geography_qa_indian_geography_qa_location_and_size_qa_location_and_size_qa_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/indian-geography-qa/location-and-size-qa/location-and-size-qa.component */ 5998);
/* harmony import */ var _general_awareness_qa_facts_qa_facts_qa_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./general-awareness-qa/facts-qa/facts-qa.component */ 4354);
/* harmony import */ var _general_awareness_qa_facts_qa_books_and_authors_qa_books_and_authors_qa_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./general-awareness-qa/facts-qa/books-and-authors-qa/books-and-authors-qa.component */ 7347);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_organizations_associations_and_movements_qa_organizations_associations_and_movements_qa_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/organizations-associations-and-movements-qa/organizations-associations-and-movements-qa.component */ 6941);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_organizations_associations_and_movements_qa_all_india_kisan_sabha_qa_all_india_kisan_sabha_qa_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/organizations-associations-and-movements-qa/all-india-kisan-sabha-qa/all-india-kisan-sabha-qa.component */ 3375);
/* harmony import */ var _general_awareness_qa_history_qa_modern_indian_history_qa_modern_indian_history_qa_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/modern-indian-history-qa/modern-indian-history-qa.component */ 1080);
/* harmony import */ var _general_awareness_qa_history_qa_modern_indian_history_qa_eighteenth_century_india_qa_eighteenth_century_india_qa_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/modern-indian-history-qa/eighteenth-century-india-qa/eighteenth-century-india-qa.component */ 2064);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_indian_constitution_qa_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/indian-constitution-qa.component */ 4503);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_fundamental_rights_qa_fundamental_rights_qa_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/fundamental-rights-qa/fundamental-rights-qa.component */ 3964);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_dpspqa_dpspqa_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/dpspqa/dpspqa.component */ 5099);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_science_and_civilization_legacy_qa_science_and_civilization_legacy_qa_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/science-and-civilization-legacy-qa/science-and-civilization-legacy-qa.component */ 717);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_maurya_age_qa_maurya_age_qa_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/maurya-age-qa/maurya-age-qa.component */ 9785);
/* harmony import */ var _general_awareness_qa_facts_qa_all_in_one_qa_all_in_one_qa_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./general-awareness-qa/facts-qa/all-in-one-qa/all-in-one-qa.component */ 6621);
/* harmony import */ var _general_awareness_qa_history_qa_modern_indian_history_qa_european_penetration_and_conquest_qa_european_penetration_and_conquest_qa_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/modern-indian-history-qa/european-penetration-and-conquest-qa/european-penetration-and-conquest-qa.component */ 420);
/* harmony import */ var _general_awareness_qa_geography_qa_physical_geography_qa_physical_geography_qa_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/physical-geography-qa/physical-geography-qa.component */ 5238);
/* harmony import */ var _general_awareness_qa_geography_qa_physical_geography_qa_earth_origin_and_evolution_qa_earth_origin_and_evolution_qa_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/physical-geography-qa/earth-origin-and-evolution-qa/earth-origin-and-evolution-qa.component */ 5094);
/* harmony import */ var _general_awareness_qa_geography_qa_physical_geography_qa_earth_interior_qa_earth_interior_qa_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./general-awareness-qa/geography-qa/physical-geography-qa/earth-interior-qa/earth-interior-qa.component */ 9946);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_central_asian_influence_qa_central_asian_influence_qa_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/central-asian-influence-qa/central-asian-influence-qa.component */ 7657);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_satavahanas_qa_satavahanas_qa_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/satavahanas-qa/satavahanas-qa.component */ 3887);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_dawn_of_history_in_south_india_qa_dawn_of_history_in_south_india_qa_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/dawn-of-history-in-south-india-qa/dawn-of-history-in-south-india-qa.component */ 329);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_post_maurya_crafts_trade_and_towns_qa_post_maurya_crafts_trade_and_towns_qa_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/post-maurya-crafts-trade-and-towns-qa/post-maurya-crafts-trade-and-towns-qa.component */ 5925);
/* harmony import */ var _general_awareness_qa_history_qa_ancient_indian_history_qa_gupta_age_qa_gupta_age_qa_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/ancient-indian-history-qa/gupta-age-qa/gupta-age-qa.component */ 7611);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_introduction_and_features_qa_introduction_and_features_qa_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/introduction-and-features-qa/introduction-and-features-qa.component */ 4448);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_constitutional_history_qa_constitutional_history_qa_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/constitutional-history-qa/constitutional-history-qa.component */ 6560);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_making_of_constitution_qa_making_of_constitution_qa_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/making-of-constitution-qa/making-of-constitution-qa.component */ 7296);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_preamble_qa_preamble_qa_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/preamble-qa/preamble-qa.component */ 9464);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_union_and_its_territory_qa_union_and_its_territory_qa_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/union-and-its-territory-qa/union-and-its-territory-qa.component */ 2706);
/* harmony import */ var _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_citizenship_qa_citizenship_qa_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/citizenship-qa/citizenship-qa.component */ 5652);
/* harmony import */ var _general_awareness_qa_history_qa_kerala_history_qa_kerala_history_qa_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/kerala-history-qa/kerala-history-qa.component */ 7716);
/* harmony import */ var _general_awareness_qa_history_qa_kerala_history_qa_travancore_history_qa_travancore_history_qa_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./general-awareness-qa/history-qa/kerala-history-qa/travancore-history-qa/travancore-history-qa.component */ 8547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @angular/core */ 7580);



var _AppModule;






















































































var AppModule = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});
_AppModule = AppModule;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppModule, "\u0275fac", function AppModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppModule)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_88__["ɵɵdefineNgModule"]({
  type: _AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent]
}));
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_88__["ɵɵdefineInjector"]({
  imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_13__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_88__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent, _StructuralComponents_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_12__.TopToolbarComponent, _Home_home_component__WEBPACK_IMPORTED_MODULE_15__.HomeComponent, _StructuralComponents_right_sidebar_right_top_sidebar_right_top_sidebar_component__WEBPACK_IMPORTED_MODULE_16__.RightTopSidebarComponent, _StructuralComponents_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_17__.NoticeBoardComponent, _StructuralComponents_main_main_component__WEBPACK_IMPORTED_MODULE_18__.MainComponent, _StructuralComponents_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_19__.RightSidebarComponent, _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_20__.DisplayQAComponent, _general_awareness_qa_history_qa_history_qa_component__WEBPACK_IMPORTED_MODULE_21__.HistoryQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_ancient_indian_history_qa_component__WEBPACK_IMPORTED_MODULE_22__.AncientIndianHistoryQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_stone_age_qa_stone_age_qa_component__WEBPACK_IMPORTED_MODULE_23__.StoneAgeQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_chalcolithic_farming_cultures_qa_chalcolithic_farming_cultures_qa_component__WEBPACK_IMPORTED_MODULE_24__.ChalcolithicAgeQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_harappan_culture_bronze_age_civilization_qa_harappan_culture_bronze_age_civilization_qa_component__WEBPACK_IMPORTED_MODULE_25__.BronzeAgeAndHarappanCivilizationQAComponent, _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_26__.DisplayQAWbListComponent, _StructuralComponents_whatshot_nav_menu_whatshot_nav_menu_component__WEBPACK_IMPORTED_MODULE_27__.SyllabusNavMenuComponent, _StructuralComponents_main_nav_menu_main_nav_menu_component__WEBPACK_IMPORTED_MODULE_28__.MainNavMenuComponent, _StructuralComponents_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_29__.LeftSidebarComponent, _StructuralComponents_left_sidebar_left_top_sidebar_left_top_sidebar_component__WEBPACK_IMPORTED_MODULE_30__.LeftTopSidebarComponent, _StructuralComponents_left_sidebar_quick_nav_quick_nav_component__WEBPACK_IMPORTED_MODULE_31__.QuickNavComponent, _StructuralComponents_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_32__.TermsAndConditionsComponent, _StructuralComponents_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_33__.ContactInfoComponent, _StructuralComponents_about_qaworkbook_about_qaworkbook_component__WEBPACK_IMPORTED_MODULE_34__.AboutQAWorkbookComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_vedic_age_qa_vedic_age_qa_component__WEBPACK_IMPORTED_MODULE_35__.VedicAgeQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_jainism_and_buddhism_age_qa_jainism_and_buddhism_age_qa_component__WEBPACK_IMPORTED_MODULE_36__.JainismAndBuddhismAgeQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_age_of_mahajanapadasQA_age_of_mahajanapadas_qa_component__WEBPACK_IMPORTED_MODULE_37__.AgeOfMahajanapadasQAComponent, _general_awareness_qa_political_science_qa_political_science_qa_component__WEBPACK_IMPORTED_MODULE_38__.PoliticalScienceQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_polity_qa_component__WEBPACK_IMPORTED_MODULE_39__.IndianPolityQAComponent, _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_international_institutions_and_agencies_qa_component__WEBPACK_IMPORTED_MODULE_40__.InternationalInstitutionsAndAgenciesQAComponent, _general_awareness_qa_political_science_qa_international_agreements_and_groupings_qa_international_agreements_and_groupings_qa_component__WEBPACK_IMPORTED_MODULE_41__.InternationalAgreementsAndGroupingsQAComponent, _general_awareness_qa_economics_qa_economics_qa_component__WEBPACK_IMPORTED_MODULE_42__.EconomicsQAComponent, _general_awareness_qa_geography_qa_geography_qa_component__WEBPACK_IMPORTED_MODULE_43__.GeographyQAComponent, _general_awareness_qa_political_science_qa_other_countries_rules_and_developments_qa_other_countries_rules_and_developments_qa_component__WEBPACK_IMPORTED_MODULE_44__.OtherCountriesRulesAndDevelopmentsQAComponent, _general_awareness_qa_political_science_qa_other_countries_rules_and_developments_qa_united_states_of_america_qa_united_states_of_america_qa_component__WEBPACK_IMPORTED_MODULE_45__.UnitedStatesOfAmericaQAComponent, _general_awareness_qa_geography_qa_indian_geography_qa_indian_geography_qa_component__WEBPACK_IMPORTED_MODULE_46__.IndianGeographyQAComponent, _general_awareness_qa_geography_qa_indian_geography_qa_drainage_system_qa_drainage_system_qa_component__WEBPACK_IMPORTED_MODULE_47__.DrainageSystemQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_regulatory_authorities_qa_regulatory_authorities_qa_component__WEBPACK_IMPORTED_MODULE_48__.RegulatoryAuthoritiesQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_not_for_profit_companies_and_trusts_qa_not_for_profit_companies_and_trusts_qa_component__WEBPACK_IMPORTED_MODULE_49__.NotForProfitCompaniesAndTrustsQAComponent, _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_fatfqa_fatfqa_component__WEBPACK_IMPORTED_MODULE_50__.FATFQAComponent, _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_emgfqa_emgfqa_component__WEBPACK_IMPORTED_MODULE_51__.EMGFQAComponent, _general_awareness_qa_political_science_qa_international_institutions_and_agencies_qa_iloqa_iloqa_component__WEBPACK_IMPORTED_MODULE_52__.ILOQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_regulatory_authorities_qa_fsdcqa_fsdcqa_component__WEBPACK_IMPORTED_MODULE_53__.FSDCQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_not_for_profit_companies_and_trusts_qa_ncfeqa_ncfeqa_component__WEBPACK_IMPORTED_MODULE_54__.NCFEQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_policies_and_strategies_qa_policies_and_strategies_qa_component__WEBPACK_IMPORTED_MODULE_55__.PoliciesAndStrategiesQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_policies_and_strategies_qa_nsfeqa_nsfeqa_component__WEBPACK_IMPORTED_MODULE_56__.NSFEQAComponent, _StructuralComponents_bottom_ad_bar_bottom_ad_bar_component__WEBPACK_IMPORTED_MODULE_57__.BottomAdBarComponent, _general_awareness_qa_geography_qa_indian_geography_qa_location_and_size_qa_location_and_size_qa_component__WEBPACK_IMPORTED_MODULE_58__.LocationAndSizeQAComponent, _general_awareness_qa_facts_qa_facts_qa_component__WEBPACK_IMPORTED_MODULE_59__.FactsQAComponent, _general_awareness_qa_facts_qa_books_and_authors_qa_books_and_authors_qa_component__WEBPACK_IMPORTED_MODULE_60__.BooksAndAuthorsQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_organizations_associations_and_movements_qa_organizations_associations_and_movements_qa_component__WEBPACK_IMPORTED_MODULE_61__.OrganizationsAssociationsAndMovementsQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_organizations_associations_and_movements_qa_all_india_kisan_sabha_qa_all_india_kisan_sabha_qa_component__WEBPACK_IMPORTED_MODULE_62__.AllIndiaKisanSabhaQAComponent, _general_awareness_qa_history_qa_modern_indian_history_qa_modern_indian_history_qa_component__WEBPACK_IMPORTED_MODULE_63__.ModernIndianHistoryQAComponent, _general_awareness_qa_history_qa_modern_indian_history_qa_eighteenth_century_india_qa_eighteenth_century_india_qa_component__WEBPACK_IMPORTED_MODULE_64__.EighteenthCenturyIndiaQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_indian_constitution_qa_component__WEBPACK_IMPORTED_MODULE_65__.IndianConstitutionQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_fundamental_rights_qa_fundamental_rights_qa_component__WEBPACK_IMPORTED_MODULE_66__.FundamentalRightsQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_dpspqa_dpspqa_component__WEBPACK_IMPORTED_MODULE_67__.DPSPQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_science_and_civilization_legacy_qa_science_and_civilization_legacy_qa_component__WEBPACK_IMPORTED_MODULE_68__.ScienceAndCivilizationLegacyQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_maurya_age_qa_maurya_age_qa_component__WEBPACK_IMPORTED_MODULE_69__.MauryaAgeQAComponent, _general_awareness_qa_facts_qa_all_in_one_qa_all_in_one_qa_component__WEBPACK_IMPORTED_MODULE_70__.AllInOneQAComponent, _general_awareness_qa_history_qa_modern_indian_history_qa_european_penetration_and_conquest_qa_european_penetration_and_conquest_qa_component__WEBPACK_IMPORTED_MODULE_71__.EuropeanPenetrationAndConquestQAComponent, _general_awareness_qa_geography_qa_physical_geography_qa_physical_geography_qa_component__WEBPACK_IMPORTED_MODULE_72__.PhysicalGeographyQAComponent, _general_awareness_qa_geography_qa_physical_geography_qa_earth_origin_and_evolution_qa_earth_origin_and_evolution_qa_component__WEBPACK_IMPORTED_MODULE_73__.EarthOriginAndEvolutionQAComponent, _general_awareness_qa_geography_qa_physical_geography_qa_earth_interior_qa_earth_interior_qa_component__WEBPACK_IMPORTED_MODULE_74__.EarthInteriorQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_central_asian_influence_qa_central_asian_influence_qa_component__WEBPACK_IMPORTED_MODULE_75__.CentralAsianInfluenceQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_satavahanas_qa_satavahanas_qa_component__WEBPACK_IMPORTED_MODULE_76__.SatavahanasQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_dawn_of_history_in_south_india_qa_dawn_of_history_in_south_india_qa_component__WEBPACK_IMPORTED_MODULE_77__.DawnOfHistoryInSouthIndia, _general_awareness_qa_history_qa_ancient_indian_history_qa_post_maurya_crafts_trade_and_towns_qa_post_maurya_crafts_trade_and_towns_qa_component__WEBPACK_IMPORTED_MODULE_78__.PostMauryaCraftsTradeAndTownsQAComponent, _general_awareness_qa_history_qa_ancient_indian_history_qa_gupta_age_qa_gupta_age_qa_component__WEBPACK_IMPORTED_MODULE_79__.GuptaAgeQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_introduction_and_features_qa_introduction_and_features_qa_component__WEBPACK_IMPORTED_MODULE_80__.IntroductionAndFeaturesQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_constitutional_history_qa_constitutional_history_qa_component__WEBPACK_IMPORTED_MODULE_81__.ConstitutionalHistoryQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_making_of_constitution_qa_making_of_constitution_qa_component__WEBPACK_IMPORTED_MODULE_82__.MakingOfConstitutionQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_preamble_qa_preamble_qa_component__WEBPACK_IMPORTED_MODULE_83__.PreambleQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_union_and_its_territory_qa_union_and_its_territory_qa_component__WEBPACK_IMPORTED_MODULE_84__.UnionAndItsTerritoryQAComponent, _general_awareness_qa_political_science_qa_indian_polity_qa_indian_constitution_qa_citizenship_qa_citizenship_qa_component__WEBPACK_IMPORTED_MODULE_85__.CitizenshipQAComponent, _general_awareness_qa_history_qa_kerala_history_qa_kerala_history_qa_component__WEBPACK_IMPORTED_MODULE_86__.KeralaHistoryQAComponent, _general_awareness_qa_history_qa_kerala_history_qa_travancore_history_qa_travancore_history_qa_component__WEBPACK_IMPORTED_MODULE_87__.TravancoreHistoryQAComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_13__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule]
  });
})();

/***/ },

/***/ 1424
/*!*****************************************************************************!*\
  !*** ./src/app/general-awareness-qa/economics-qa/economics-qa.component.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EconomicsQAComponent: () => (/* binding */ EconomicsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _EconomicsQAComponent;


var EconomicsQAComponent = /*#__PURE__*/function () {
  function EconomicsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EconomicsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Economics");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "economicsQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Indian Economy QA",
      wbRoute: '/EconomicsQA/IndianEconomyQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EconomicsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_EconomicsQAComponent = EconomicsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EconomicsQAComponent, "\u0275fac", function EconomicsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EconomicsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EconomicsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _EconomicsQAComponent,
  selectors: [["app-economics-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function EconomicsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.economicsQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 6621
/*!****************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/facts-qa/all-in-one-qa/all-in-one-qa.component.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllInOneQAComponent: () => (/* binding */ AllInOneQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _AllInOneQAComponent;


var AllInOneQAComponent = /*#__PURE__*/function () {
  function AllInOneQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AllInOneQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "All In One");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "allInOneQAs", [{
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "\n          <ul>\n            <li>.\n            </li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Whose prior consent is required for the Supreme Court to initiate criminal contempt \n        action?",
      answer: "Attorney General of India."
    }, {
      qaNumber: this.qaNumber++,
      question: "According to the Contempt of Courts Act, 1971, contempt of court can either be \n        _____ contempt or _____ contempt?",
      answer: "Civil contempt or Criminal contempt.",
      description: "\n          <ul>\n            <li>Civil contempt means wilful disobedience to any judgment, decree, direction, order, \n            writ or other process of a court or wilful breach of an undertaking given to a court.\n            </li>\n            <li>Criminal contempt means the publication (whether by words, spoken or written, or by \n              signs, or by visible representations, or otherwise) of any matter or the doing of any \n              other act whatsoever which\n              <ol>\n                <li>scandalises or tends to scandalise, or lowers or tends to lower the authority of, \n                any court; or\n                </li>\n                <li>prejudices, or interferes or tends to interfere with, the due course of any \n                judicial proceeding; or\n                </li>\n                <li>interferes or tends to interfere with, or obstructs or tends to obstruct, the \n                administration of justice in any other manner.\n                </li>\n              </ol>\n            </li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Invest India, set up in the year _____, is a non-profit venture under the \n        Department for Promotion of Industry and Internal Trade, Ministry of Commerce and Industry, \n        Government of India ?",
      answer: "2009.",
      description: "\n          <ul>\n            <li>It is the national investment promotion and facilitation agency.</li>\n            <li>Invest India actively works with several Indian states to build capacity as well \n            as bring in global best practices in investment targeting, promotion and facilitation \n            areas.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Indian Space Research Organisation was formed in the year _____ ?",
      answer: "1969.",
      description: "\n          <ul>\n            <li>It was superseded the erstwhile Indian National Committee for Space Research \n            (INCOSPAR).</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Indian National Committee for Space Research (INCOSPAR) was set up by \n        the Government of India under the Department of Atomic Energy (DAE) in the year _____ ?",
      answer: "1962",
      description: "\n          <ul>\n            <li>.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Indian Ocean Naval Symposium (IONS) conceived by the Indian Navy in the year \n        _____, seeks to enhance maritime cooperation among Navies of the littoral states of the \n        Indian Ocean Region (IOR)?",
      answer: "2008.",
      description: "\n          <ul>\n            <li>A biennial event.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ is a portion of a commercial bank\u2019s Net Demand and Time Liabilities (NDTL) \n        that needs to be maintained at the central bank of the country (which is RBI in India)?",
      answer: "Cash reserve ratio or CRR.",
      description: "\n          <ul>\n            <li>CRR deposits are not eligible for earning interests.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ the minimum percentage of Net Demand and Time Liabilities (NDTL) that \n        commercial banks needs to maintain in the form of liquid assets, cash, gold, government \n        securities, etc.?",
      answer: "Statutory liquidity ratio or SLR.",
      description: "\n          <ul>\n            <li>The limit of SLR for commercial banks is decided by the central bank of the \n            country (Reserve Bank of India or RBI in India) but the deposits are maintained by \n            the respective banks themselves. However, the SLR cannot be used by the bank for \n            lending.</li>\n            <li>The deposits designated towards SLR are eligible for earning interests.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ is the rate the central bank of a country pays its commercial banks to \n        park their excess funds in the central bank?",
      answer: "Reverse Repo Rate."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ is the interest rate at which the central bank of a country lends money \n        to commercial banks?",
      answer: "Repo Rate.",
      description: "\n          <ul>\n            <li>When there is a shortage of funds, commercial banks borrow money from the central \n            bank which is repaid according to the repo rate applicable. The central bank provides \n            these short terms loans against securities such as treasury bills or government bonds.\n            </li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Minor Forest Produce (MFP) is a subset of forest produce and got a definition \n        only in 2007 when the _____ Act was enacted?",
      answer: "Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest \n        Rights) Act, 2006.",
      description: "\n          <ul>\n            <li>Section 2(4) of the Indian Forest Act 1927 defines only \"forest-produce\" and this \n            term connotes to those products whether found in, or brought from a forest such as \n            timber, charcoal, caoutchouc, catechu, wood-oil, resin, natural varnish, bark, lac, \n            mahua flowers, mahua seeds, kuth and myrobalans, trees and leaves, flowers and fruits, \n            and all other parts or produce of trees, plants not being trees (including grass, \n            creepers, reeds, and moss), and all parts or produce of such plants, wild animals and\n            skins, tusks, horns, bones, silk, cocoons, honey and wax, and all other parts or produce \n            of animals, and peat, surface soil, rock and minerals (including limestone, laterite, \n            mineral oils), and all products of mines or quarries.\n            </li>\n            <li>The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights)\n            Act, 2006, popularly known as the Forests Rights Act (FRA) recognizes and vests individual \n            forest-dwellers with forest rights to live in and cultivate forest land that was occupied \n            before 13 December 2005 and grants community forest rights to manage, protect and regenerate \n            the forest under section 3(1)(i), and to own and dispose minor forest products from\n            forests where they had traditional access.\n            </li>\n            <li>Section 2(i) of the Scheduled Tribes and Other Traditional Forest Dwellers \n            (Recognition of Forest Rights) Act, 2006 defines a Minor Forest Produce (MFP) as all \n            non-timber forest produce of plant origin and includes bamboo, brushwood, stumps, canes, \n            Tusser, cocoon, honey, waxes, Lac, tendu/kendu leaves, medicinal plants and herbs, \n            roots, tuber and the like. Thus, the definition of \u201Cminor forest produce\u201D includes\n            bamboo and cane, thereby changing the categorization of bamboo and cane as \u201Ctrees\u201D under \n            the Indian Forest Act 1927.\n            </li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "CBI is a non-constitutional and non-statutory body which derives its powers from \n        the _____ Act?",
      answer: "Delhi Special Police Establishment Act (DSPE), 1946.",
      description: "\n          <ul>\n            <li>It has the following three divisions for investigation of crime:.\n              <ol>\n                <li>Anti-Corruption Division.</li>\n                <li>Economic Offences Division.</li>\n                <li>Special Crimes Division.</li>\n              </ol>\n            </li>\n            <li>CBI can suo-moto take up investigation of offences notified in DSPE act, only in \n            the Union Territories.</li>\n            <li>CVC shall exercise superintendence over the functioning of the CBI insofar as it \n            relates to the investigation of offences under the Prevention of Corruption Act, 1988.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Indian territory can be ceded to a foreign state only by amending the Constitution \n        under Article _____ ?",
      answer: "Article 368.",
      description: "\n          <ul>\n            <li>Being a sovereign state, India can acquire foreign territories or cede own territories \n            according to the modes recognized by international law, i.e., cession (following treaty, \n            purchase, gift, lease or plebiscite), occupation (hitherto unoccupied by a recognized \n            ruler), conquest or subjugation.</li>\n            <li>Article 2 relates to the admission or establishment of new states that are not part \n            of the Union of India.</li>\n            <li>Article 3 relates to the formation of or changes in the existing states of the Union \n            of India. The Supreme Court held that the power of Parliament to diminish the area of a \n            state (under Article 3) does not cover the cession of Indian territory to a foreign \n            country.</li>\n            <li>The settlement of a boundary dispute between India and another country does not \n            require a constitutional amendment. As was ruled by the Supreme Court in 1969, it can be \n            done by executive action as it does not involve cession of Indian territory to a\n            foreign country.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Chak - Hao is a black rice variety of _____ ?",
      answer: "Manipur.",
      description: "\n          <ul>\n            <li>Black Aromatic Rice locally named as Chak-hao is well known for its attractive \n            colour and aromatic flavour and considered as on of the richest source of anthocyanin \n            found among food grain product apart from its optimal content of vitamins, minerals, \n            fibre, proteins, and many othe nutrients.</li>\n            <li>GI tag has been given to the Chak-Hao rice.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ are a sequence of earthquakes that happen after a larger mainshock on a fault?",
      answer: "Aftershocks.",
      description: "\n          <ul>\n            <li>Aftershocks occur near the fault zone where the mainshock rupture occurred and are \n            part of the \"readjustment process\u201D after the main slip on the fault.</li>\n            <li>Aftershocks become less frequent with time, although they can continue for days, \n            weeks, months, or even years for a very large mainshock.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "A _____ is a sequence of mostly small earthquakes with no identifiable mainshock?",
      answer: "Swarm.",
      description: "\n          <ul>\n            <li>Swarms are usually short-lived, but they can continue for days, weeks, or \n            sometimes even months.</li>\n            <li>They often recur at the same locations.</li>\n            <li>Most swarms are associated with geothermal activity.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ is a specialized agency of the United Nations that leads \n        international efforts to defeat hunger and improve nutrition and food security?",
      answer: "Food and Agriculture Organization (FAO).",
      description: "\n          <ul>\n            <li>.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ is the motto of of Food and Agriculture Organization (FAO)?",
      answer: "Fiat panis.",
      description: "\n          <ul>\n            <li>FAO's Latin motto, \"fiat panis\", translates to \"let there be bread\".</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Food and Agriculture Organization (FAO) was founded in the year _____?",
      answer: "1945.",
      description: "\n          <ul>\n            <li>First session of FAO Conference at Quebec City, Canada, in 1945, established \n            FAO as a specialized United Nations agency.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Under Article _____, the President can declare a national emergency when the \n        security of India or a part of it is threatened by war or external aggression or armed \n        rebellion?",
      answer: "Article 352.",
      description: "\n          <ul>\n            <li>The President, however, can proclaim a national emergency only after receiving a \n            written recommendation from the cabinet.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The proclamation of national emergency must be approved by both the Houses of \n        the Parliament within _____ month(s) from the date of its proclamation by the President?",
      answer: "1 month.",
      description: "\n          <ul>\n            <li>A proclamation of emergency may be revoked by the President at any time by a subsequent\n            proclamation. Such a proclamation does not require parliamentary approval.</li>\n          </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Once approved by both the houses of the Parliament the emergency continues for \n        _____ months?",
      answer: "6 months.",
      description: "\n          <ul>\n            <li>After completion of six months, the emergency can be extended for another six months \n            with the approval of both the houses of Parliament. Thus the emergency can be extended to \n            an indefinite period with an approval of the Parliament for every six months. This provision \n            for periodical parliamentary approval was added by the 44th Amendment Act of 1978. Before \n            that, the emergency, once approved by the Parliament, could remain in operation as long as \n            the Executive (cabinet) desired.</li>\n            <li>Every resolution approving the proclamation of emergency or its continuance must be \n            passed by either House of Parliament by a special majority, that is,\n              <ol>\n                <li>a majority of the total membership of that house, and</li>\n                <li>a majority of not less than two-thirds of the members of that house present and \n                voting.</li>\n              </ol> \n            </li>\n          </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AllInOneQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_AllInOneQAComponent = AllInOneQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AllInOneQAComponent, "\u0275fac", function AllInOneQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AllInOneQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AllInOneQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _AllInOneQAComponent,
  selectors: [["app-all-in-one-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function AllInOneQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.allInOneQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7347
/*!******************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/facts-qa/books-and-authors-qa/books-and-authors-qa.component.ts ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooksAndAuthorsQAComponent: () => (/* binding */ BooksAndAuthorsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _BooksAndAuthorsQAComponent;


var BooksAndAuthorsQAComponent = /*#__PURE__*/function () {
  function BooksAndAuthorsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BooksAndAuthorsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Books And Authors");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "booksAndAuthorsQAs", [{
      qaNumber: this.qaNumber++,
      question: "Who is the author of the work, 'The evolution of provincial finance \n      in British India : a study in the provincial decentralization of imperial finance'?",
      answer: "Dr. B. R. Ambedkar."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'Poverty and un-British rule in India'?",
      answer: "Dadabhai Naoroji."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'The Discovery of India'?",
      answer: "Jawaharlal Nehru."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'Annihilation of Caste'?",
      answer: "Dr. B. R. Ambedkar.",
      description: "<ul>\n      <li>1936.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'India's Message'?",
      answer: "M N Roy."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'Poverty of India'?",
      answer: "Dadabhai Naoroji.",
      description: "<ul>\n      <li>1876.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'The European and Asiatic Races'?",
      answer: "Dadabhai Naoroji.",
      description: "<ul>\n      <li>1866.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'The Buddha and His Dhamma'?",
      answer: "Dr. B. R. Ambedkar.",
      description: "<ul>\n      <li>1957.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'Letters from a Father to his Daughter'?",
      answer: "Jawaharlal Nehru."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'The Problem of the Rupee: Its \n      Origin and Its Solution'?",
      answer: "Dr. B. R. Ambedkar.",
      description: "<ul>\n      <li>1923.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'Castes in India: Their Mechanism, Genesis \n      and Development'?",
      answer: "Dr. B. R. Ambedkar.",
      description: "<ul>\n      <li>1917.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'Waiting for a Visa'?",
      answer: "Dr. B. R. Ambedkar."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'Glimpses of World History'?",
      answer: "Jawaharlal Nehru."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book, 'Toward- Freedom'?",
      answer: "Jawaharlal Nehru.",
      description: "<ul>\n      <li>An Autobiography of Jawaharlal Nehru.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the author of the book \"We the people\"?",
      answer: "Nani Palkhiwala."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BooksAndAuthorsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_BooksAndAuthorsQAComponent = BooksAndAuthorsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BooksAndAuthorsQAComponent, "\u0275fac", function BooksAndAuthorsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BooksAndAuthorsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BooksAndAuthorsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _BooksAndAuthorsQAComponent,
  selectors: [["app-books-and-authors-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function BooksAndAuthorsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.booksAndAuthorsQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 4354
/*!*********************************************************************!*\
  !*** ./src/app/general-awareness-qa/facts-qa/facts-qa.component.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactsQAComponent: () => (/* binding */ FactsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _FactsQAComponent;


var FactsQAComponent = /*#__PURE__*/function () {
  function FactsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FactsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Facts");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "factsQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Books And Authors QA",
      wbRoute: '/FactsQA/BooksAndAuthorsQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "All In One QA",
      wbRoute: '/FactsQA/AllInOneQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FactsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_FactsQAComponent = FactsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FactsQAComponent, "\u0275fac", function FactsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FactsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FactsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _FactsQAComponent,
  selectors: [["app-facts-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function FactsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.factsQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 3176
/*!*****************************************************************************!*\
  !*** ./src/app/general-awareness-qa/geography-qa/geography-qa.component.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeographyQAComponent: () => (/* binding */ GeographyQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _GeographyQAComponent;


var GeographyQAComponent = /*#__PURE__*/function () {
  function GeographyQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GeographyQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Geography");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "geographyQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Indian Geography QA",
      wbRoute: '/GeographyQA/IndianGeographyQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Physical Geography QA",
      wbRoute: '/GeographyQA/PhysicalGeographyQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GeographyQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_GeographyQAComponent = GeographyQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(GeographyQAComponent, "\u0275fac", function GeographyQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GeographyQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(GeographyQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _GeographyQAComponent,
  selectors: [["app-geography-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function GeographyQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.geographyQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 5654
/*!**************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/geography-qa/indian-geography-qa/drainage-system-qa/drainage-system-qa.component.ts ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrainageSystemQAComponent: () => (/* binding */ DrainageSystemQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _DrainageSystemQAComponent;


var DrainageSystemQAComponent = /*#__PURE__*/function () {
  function DrainageSystemQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DrainageSystemQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Drainage System");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "drainageSystemQAs", [{
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DrainageSystemQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_DrainageSystemQAComponent = DrainageSystemQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DrainageSystemQAComponent, "\u0275fac", function DrainageSystemQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DrainageSystemQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DrainageSystemQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _DrainageSystemQAComponent,
  selectors: [["app-drainage-system-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function DrainageSystemQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.drainageSystemQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7550
/*!********************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/geography-qa/indian-geography-qa/indian-geography-qa.component.ts ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndianGeographyQAComponent: () => (/* binding */ IndianGeographyQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _IndianGeographyQAComponent;


var IndianGeographyQAComponent = /*#__PURE__*/function () {
  function IndianGeographyQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndianGeographyQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Indian Geography");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "indianGeographyQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Location And Size QA",
      wbRoute: '/GeographyQA/IndianGeographyQA/LocationAndSizeQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Drainage System QA",
      wbRoute: '/GeographyQA/IndianGeographyQA/DrainageSystemQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IndianGeographyQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_IndianGeographyQAComponent = IndianGeographyQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(IndianGeographyQAComponent, "\u0275fac", function IndianGeographyQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IndianGeographyQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(IndianGeographyQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _IndianGeographyQAComponent,
  selectors: [["app-indian-geography-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function IndianGeographyQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.indianGeographyQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 5998
/*!******************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/geography-qa/indian-geography-qa/location-and-size-qa/location-and-size-qa.component.ts ***!
  \******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationAndSizeQAComponent: () => (/* binding */ LocationAndSizeQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _LocationAndSizeQAComponent;


var LocationAndSizeQAComponent = /*#__PURE__*/function () {
  function LocationAndSizeQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocationAndSizeQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Location And Size");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "locationAndSizeQAs", [{
      qaNumber: this.qaNumber++,
      question: "Indian mainland extends between latitudes _____ and _____ ?",
      answer: "8\xB0 4' N and 37\xB0 6' N."
    }, {
      qaNumber: this.qaNumber++,
      question: "Indian mainland extends between longitudes _____ and _____ ?",
      answer: "68\xB0 7' E and 97\xB0 25' E."
    }, {
      qaNumber: this.qaNumber++,
      question: "India\u2019s territorial limit extends towards the sea upto _____ nautical miles from the coast?",
      answer: "12 nautical miles (22.224 km).",
      description: "<ul>\n      <li>1 Nautical mile = 1.852 km.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "India\u2019s southern boundary extends upto _____ latitude in the Bay of Bengal?",
      answer: "6\xB0 45' N."
    }, {
      qaNumber: this.qaNumber++,
      question: "India\u2019s total area accounts for about _____ per cent of the total geographical area \n      of the world?",
      answer: "2.4 per cent.",
      description: "<ul>\n      <li>The land mass of India has an area of 3,287,240 Sq km.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: " India is the ______ largest country of the world?",
      answer: "7th."
    }, {
      qaNumber: this.qaNumber++,
      question: "India has a land boundary of about _____ km?",
      answer: "15,200 km."
    }, {
      qaNumber: this.qaNumber++,
      question: "The total length of the coastline of India, including the island groups \n      (Andaman and Nicobar and Lakshadweep), is about _____ km?",
      answer: "7,516.6 km.",
      description: "<ul>\n      <li>Indian mainland has a coastline of about 6,100 km.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "\u2018Standard meridian\u2019 of India is _____?",
      answer: "82\xB0 30' E.",
      description: "<ul>\n      <li>There is a general understanding among the countries of the world to select the standard\n      meridian in multiples of 7\xB0 30' of longitude.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The \u2018Standard meridian\u2019 of India passes through how many states?",
      answer: "5.",
      description: "<ul>\n      <li>The standard meridian of India passes through the following 5 states:\n        <ol>\n          <li>Uttar Pradesh (Mirzapur).</li>\n          <li>Madhya Pradesh.</li>\n          <li>Chhattisgarh.</li>\n          <li>Odisha.</li>\n          <li>Andhra Pradesh.</li>\n        </ol>\n      </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Indian Standard Time is ahead of Greenwich Mean Time by _____ hours and _____ minutes?",
      answer: "5 hours and 30 minutes."
    }, {
      qaNumber: this.qaNumber++,
      question: "The distance from north to south extremity of Indian mainland is _____ km, \n      and that from east to west extremity of Indian mainland is _____ km?",
      answer: "3,214 km (north to south) and 2,933 km (east to west).",
      description: "<ul>\n      <li>The latitudinal and longitudinal extent of India are roughly about 30 degrees, \n      whereas the actual distance measured from north to south extremity is 3,214 km, \n      and that from east to west is only 2,933 km. This difference is based on the fact that \n      the distance between two longitudes decreases towards the poles whereas the distance \n      between two latitudes remains the same everywhere.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Tropic of Cancer passes through how many states in India?",
      answer: "8.",
      description: "<ul>\n      <li>Tropic of Cancer passes through the following 8 Indian states:\n        <ol>\n          <li>Gujarat.</li>\n          <li>Rajasthan.</li>\n          <li>Madhya Pradesh.</li>\n          <li>Chhattisgarh.</li>\n          <li>Jharkhand.</li>\n          <li>West Bengal.</li>\n          <li>Tripura.</li>\n          <li>Mizoram.</li>\n        </ol>\n      </li>\n      <li>Udaipur (23.5360\xB0 N) of Tripura is the Indian city closest to the Tropic of Cancer.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which is the only river in India that cuts the Tropic of Cancer twice?",
      answer: "Mahi River."
    }, {
      qaNumber: this.qaNumber++,
      question: "Which country shares the longest land frontier with India?",
      answer: "Bangladesh."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LocationAndSizeQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_LocationAndSizeQAComponent = LocationAndSizeQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(LocationAndSizeQAComponent, "\u0275fac", function LocationAndSizeQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LocationAndSizeQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(LocationAndSizeQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _LocationAndSizeQAComponent,
  selectors: [["app-location-and-size-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function LocationAndSizeQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.locationAndSizeQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 9946
/*!**************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/geography-qa/physical-geography-qa/earth-interior-qa/earth-interior-qa.component.ts ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EarthInteriorQAComponent: () => (/* binding */ EarthInteriorQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _EarthInteriorQAComponent;


var EarthInteriorQAComponent = /*#__PURE__*/function () {
  function EarthInteriorQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EarthInteriorQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Earth - Interior");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "earthInteriorQAs", [{
      qaNumber: this.qaNumber++,
      question: "The earth\u2019s equatorial radius is _____ km?",
      answer: "6378.137 km."
    }, {
      qaNumber: this.qaNumber++,
      question: "The earth\u2019s polar radius is _____ km?",
      answer: "6356.752 km."
    }, {
      qaNumber: this.qaNumber++,
      question: "Temperature and pressure _____ with the increasing distance from the \n      surface towards the interior of the earth?",
      answer: "Increase.",
      description: "<ul>\n        <li>Density of the material also increases with depth.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The gravitation force (g) is same at different latitudes on the surface of the \n      earth. State true or false?",
      answer: "False.",
      description: "<ul>\n        <li>The gravitation force (g) is not the same at different latitudes on the surface.</li>\n        <li>It is greater near the poles and less at the equator. This is because of the distance \n        from the centre at the equator being greater than that at the poles.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The point where the energy is released is called the _____ of an earthquake?",
      answer: "Focus.",
      description: "<ul>\n        <li>Alternatively, it is called the hypocentre.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The point on the surface, nearest to the focus of an earthquake, is called _____?",
      answer: "Epicentre.",
      description: "<ul>\n        <li>It is a point directly above the focus.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "All natural earthquakes take place in the _____?",
      answer: "Lithosphere."
    }, {
      qaNumber: this.qaNumber++,
      question: "An instrument called _____ records the earthquake waves reaching the surface?",
      answer: "Seismograph."
    }, {
      qaNumber: this.qaNumber++,
      question: "Earthquake waves are basically of two types, _____ waves and _____ waves?",
      answer: "Body waves and Surface waves.",
      description: "<ul>\n        <li>The velocity of waves changes as they travel through materials with different densities. \n        The denser the material, the higher is the velocity. </li>\n        <li>Their direction also changes as they reflect or refract when coming across materials \n        with different densities.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ waves are generated due to the release of energy at the focus of an earthquake \n      and move in all directions travelling through the body of the earth?",
      answer: "Body waves."
    }, {
      qaNumber: this.qaNumber++,
      question: "The earthquake body waves interact with the surface rocks and generate new set of \n      waves called _____ waves, which cause displacement of rocks, and hence, collapse of structures?",
      answer: "Surface waves.",
      description: "<ul>\n        <li>The surface waves are the last to report on seismograph.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "There are two types of body waves. They are called _____ waves and _____ waves?",
      answer: "P waves and S waves."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ waves move faster and are the first to arrive at the surface?",
      answer: "P-waves.",
      description: "<ul>\n        <li>These are also called \u2018primary waves\u2019.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ waves of earthquake are similar to sound waves?",
      answer: "P-waves.",
      description: "<ul>\n        <li>They travel through gaseous, liquid and solid materials.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "S-waves of earthquake can travel only through _____ materials?",
      answer: "Solid materials."
    }, {
      qaNumber: this.qaNumber++,
      question: "Reflection causes earthquake waves to rebound whereas _____ makes waves move in\n      different directions?",
      answer: "Refraction.",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EarthInteriorQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_EarthInteriorQAComponent = EarthInteriorQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EarthInteriorQAComponent, "\u0275fac", function EarthInteriorQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EarthInteriorQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EarthInteriorQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _EarthInteriorQAComponent,
  selectors: [["app-earth-interior-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function EarthInteriorQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.earthInteriorQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 5094
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/geography-qa/physical-geography-qa/earth-origin-and-evolution-qa/earth-origin-and-evolution-qa.component.ts ***!
  \**************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EarthOriginAndEvolutionQAComponent: () => (/* binding */ EarthOriginAndEvolutionQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _EarthOriginAndEvolutionQAComponent;


var EarthOriginAndEvolutionQAComponent = /*#__PURE__*/function () {
  function EarthOriginAndEvolutionQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EarthOriginAndEvolutionQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Earth - Origin and Evolution");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "earthOriginAndEvolutionQAs", [{
      qaNumber: this.qaNumber++,
      question: "The nebular hypothesis theory was developed by _____ ?",
      answer: "Immanuel Kant.",
      description: "<ul>\n        <li>Mathematician Laplace revised it in 1796.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "A galaxy starts to form by accumulation of hydrogen gas in the form of a very large \n      cloud called _____ ?",
      answer: "Nebula."
    }, {
      qaNumber: this.qaNumber++,
      question: "Out of the eight planets of our Solar system, mercury, venus, earth and mars are \n      called as the _____ as they lie between the sun and the belt of asteroids?",
      answer: "Inner planets.",
      description: "<ul>\n        <li>The other four planets are called the outer planets.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The first four planets of our Solar system are called _____, meaning earth-like \n      as they are made up of rock and metals, and have relatively high densities?",
      answer: "Terrestrial planets.",
      description: "<ul>\n        <li>The rest four are called Jovian or Gas Giant planets. Jovian means jupiter-like.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In August 2006, the International Astronomical Union (IAU) downgraded the status \n      of Pluto to that of _____ ?",
      answer: "Dwarf planet.",
      description: "<ul>\n        <li>The three criteria of the IAU for a full-sized planet are:\n          <ol>\n            <li>It is in orbit around the Sun.</li>\n            <li>It has sufficient mass to assume hydrostatic equilibrium (a nearly round shape).</li>\n            <li>It has \u201Ccleared the neighborhood\u201D around its orbit.</li>\n          </ol>\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The planet earth initially was a barren, rocky and hot object with a thin atmosphere \n      of _____ and _____?",
      answer: "Hydrogen and Helium.",
      description: "<ul>\n        <li>The early atmosphere, with hydrogen and helium, is supposed to have been stripped off\n        as a result of the solar winds.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The primarily defined divisions of the geological time scale (GTS) are _____?",
      answer: "Eons.",
      description: "<ul>\n        <li>Each eon is subsequently divided into eras, which in turn are divided into periods, \n        which are further divided into epochs.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ is the process of liberation of gases from within a planet, and it may occur \n      directly during volcanism or indirectly by the weathering of igneous rocks on a planetary \n      surface?",
      answer: "Degassing."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EarthOriginAndEvolutionQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_EarthOriginAndEvolutionQAComponent = EarthOriginAndEvolutionQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EarthOriginAndEvolutionQAComponent, "\u0275fac", function EarthOriginAndEvolutionQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EarthOriginAndEvolutionQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EarthOriginAndEvolutionQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _EarthOriginAndEvolutionQAComponent,
  selectors: [["app-earth-origin-and-evolution-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function EarthOriginAndEvolutionQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.earthOriginAndEvolutionQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 5238
/*!************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/geography-qa/physical-geography-qa/physical-geography-qa.component.ts ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhysicalGeographyQAComponent: () => (/* binding */ PhysicalGeographyQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _PhysicalGeographyQAComponent;


var PhysicalGeographyQAComponent = /*#__PURE__*/function () {
  function PhysicalGeographyQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhysicalGeographyQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Physical Geography");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "physicalGeographyQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Earth - Origin and Evolution QA",
      wbRoute: '/GeographyQA/PhysicalGeographyQA/EarthOriginAndEvolutionQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Earth - Interior QA",
      wbRoute: '/GeographyQA/PhysicalGeographyQA/EarthInteriorQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PhysicalGeographyQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_PhysicalGeographyQAComponent = PhysicalGeographyQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PhysicalGeographyQAComponent, "\u0275fac", function PhysicalGeographyQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhysicalGeographyQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PhysicalGeographyQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PhysicalGeographyQAComponent,
  selectors: [["app-physical-geography-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function PhysicalGeographyQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.physicalGeographyQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 9418
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/age-of-mahajanapadasQA/age-of-mahajanapadas-qa.component.ts ***!
  \***************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgeOfMahajanapadasQAComponent: () => (/* binding */ AgeOfMahajanapadasQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _AgeOfMahajanapadasQAComponent;


var AgeOfMahajanapadasQAComponent = /*#__PURE__*/function () {
  function AgeOfMahajanapadasQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AgeOfMahajanapadasQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Age Of Mahajanapadas");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "ageOfMahajanapadasQAs", [{
      qaNumber: this.qaNumber++,
      question: "Mahajanapadas were a set of _____ large states/kingdoms that existed in the iron age?",
      answer: "16.",
      description: "<ul>\n      <li>With the rise of large states using iron tools, people changed their allegiance from the jana or \n      the tribe to which they belonged to the janapada or the territory to which they belonged. Mahajanapadas \n      were 16 such large states/kingdoms.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Magadha came into prominence under the leadership of _____, who belonged to the Haryanka \n      dynasty?",
      answer: "Bimbisara.",
      description: "<ul>\n      <li>He was a contemporary of Buddha.</li>\n      <li>The rulers of Magadha during their prominenece (in the order of succession) were: \n\n      <p>Bimbisara > Ajatashatru > Udayin > Shishunagas > Nandas > Maurya dynasty.</p>\n      </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The earliest capital of Magadha was at _____, which was called Girivraja at that time?",
      answer: "Rajgir."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ succeeded in destroying Vaishali and enlarging Magadhan empire?",
      answer: "Ajatashatru.",
      description: "Ajatashatru succeeded in destroying Vaishali and enlarging Magadhan empire because of \n      mainly 2 reasons:\n      <ol>\n      <li>A war engine which was used to throw stones like catapults.</li>\n      <li>A chariot to which a mace was attached, which facilitated mass killings.</li>\n      </ol>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Magadha was the first Indian state to use elephants on a large scale in its wars. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Although contemporary Indian states were well aquainted with the use of horses and chariots, it was \n      Magadha which first used elephants on a large scale in its wars.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Iranian ruler _____ penetrated into north-west India in 516 B.C and annexed \n      Punjab - west of the Indus, the north-west frontier, and Sindh?",
      answer: "Darius.",
      description: "<ul>\n      <li>This area constituted the 20th province or satrapy of Iran, the total number of satrapies \n      in the Iranian empire being 28.</li>\n      <li>It was the most fertile and populous part of the empire. It paid a tribute of 360 \n      talents of gold, which accounted for one-third of the total revenue of Iran from its Asian \n      provinces.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Iranian scribes brought into India a form of writing which came to be known as \n      the _____ script?",
      answer: "Kharoshthi script.",
      description: "<ul>\n      <li>It was written from right to left like the Arabic.</li>\n      <li>Some Ashokan inscriptions in north-west India were written in the 3rd century B.C. in \n      this script, which continued to be used in the country till the 3rd century A.D.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "After the conquest of Iran, Alexander moved on to Kabul, from where he marched to \n      India through _____ pass in 326 B.C.?",
      answer: "Khyber pass."
    }, {
      qaNumber: this.qaNumber++,
      question: "Alexander advanced as far as the _____ river in India?",
      answer: "Beas river."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AgeOfMahajanapadasQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_AgeOfMahajanapadasQAComponent = AgeOfMahajanapadasQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AgeOfMahajanapadasQAComponent, "\u0275fac", function AgeOfMahajanapadasQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AgeOfMahajanapadasQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AgeOfMahajanapadasQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _AgeOfMahajanapadasQAComponent,
  selectors: [["app-age-of-mahajanapadas"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function AgeOfMahajanapadasQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.ageOfMahajanapadasQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 1844
/*!******************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component.ts ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AncientIndianHistoryQAComponent: () => (/* binding */ AncientIndianHistoryQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _AncientIndianHistoryQAComponent;


var AncientIndianHistoryQAComponent = /*#__PURE__*/function () {
  function AncientIndianHistoryQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AncientIndianHistoryQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Ancient Indian History");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "ancientIndianHistoryQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Stone Age QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/StoneAgeQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Chalcolithic Age QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/ChalcolithicAgeQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Bronze Age And Harappan Civilization QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/BronzeAgeAndHarappanCivilizationQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Vedic Age QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/VedicAgeQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Jainism And Buddhism Age QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/JainismAndBuddhismAgeQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Age Of Mahajanapadas QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/AgeOfMahajanapadasQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Maurya Age QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/MauryaAgeQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Central Asian Influence QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/CentralAsianInfluenceQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Age of the Satavahanas QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/SatavahanasQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Dawn Of History In South India QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/DawnOfHistoryInSouthIndiaQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Post-Maurya Age Crafts, Trade, and Towns QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/PostMauryaCraftsTradeAndTownsQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Gupta Age QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/GuptaAgeQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Legacy in Science And Civilization QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA/ScienceAndCivilizationLegacyQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AncientIndianHistoryQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_AncientIndianHistoryQAComponent = AncientIndianHistoryQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AncientIndianHistoryQAComponent, "\u0275fac", function AncientIndianHistoryQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AncientIndianHistoryQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AncientIndianHistoryQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _AncientIndianHistoryQAComponent,
  selectors: [["app-ancient-indian-history-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function AncientIndianHistoryQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.ancientIndianHistoryQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7657
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/central-asian-influence-qa/central-asian-influence-qa.component.ts ***!
  \**********************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CentralAsianInfluenceQAComponent: () => (/* binding */ CentralAsianInfluenceQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _CentralAsianInfluenceQAComponent;


var CentralAsianInfluenceQAComponent = /*#__PURE__*/function () {
  function CentralAsianInfluenceQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CentralAsianInfluenceQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Central Asian Influence");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "centralAsianInfluenceQAs", [{
      qaNumber: this.qaNumber++,
      question: "The famous Indo-Greek ruler Menander (165-145 B.C.) is also known by the name \n      _____ ?",
      answer: "Milinda."
    }, {
      qaNumber: this.qaNumber++,
      question: "The famous Indo-Greek ruler Menander (165-145 B.C.) had his capital at _____ \n      in Punjab ?",
      answer: "Sakala (modern Sialkot)."
    }, {
      qaNumber: this.qaNumber++,
      question: "The famous Indo-Greek ruler Menander (165-145 B.C.) was converted to Buddhism \n      by _____ ?",
      answer: "Nagasena (also known as Nagarjuna)."
    }, {
      qaNumber: this.qaNumber++,
      question: "The questions relating to Buddhism which Menander asked Nagasena, and Nagasena's \n      answers were recorded in the form of a book known as _____ ?",
      answer: "Milinda Panho (or the 'Question of Milinda')."
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ were the first rulers in India to issue coins which can be definitely \n      attributed to the kings ?",
      answer: "Indo-Greeks.",
      description: "<ul>\n      <li>The Punch-marked coins, which were issued in earlier period, cannot be assigned \n      with certainty to any dynasty.</li>\n      <li>The Indo-Greek rule is important in the history of India because of the large number \n      of coins which the Greeks issued.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ were the first rulers to issue gold coins in India, which increased \n      in number under the Kushans?",
      answer: "Indo-Greeks."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Greek rulers introduced features of _____ art in the north-west frontier \n      of India?",
      answer: "Hellenistic art.",
      description: "<ul>\n      <li>This art was not purely Greek. It was the outcome of the Greek contact with \n      non-Greek conquered peoples after Alexander's death.</li>\n      <li>Gandhara art was its best example in India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The invasion of the Greeks were followed by that of the Shakas. There were \n      _____ branches of the Shakas with their seats of power in different parts of India and \n      Afghanistan?",
      answer: "5 branches.",
      description: "<ul>\n      <li>One branch of the Shakas settled in Afghanistan.</li>\n      <li>The second branch settled in Punjab with Taxila as its capital.</li>\n      <li>The third branch settled in Mathura.</li>\n      <li>The fourth branch established its hold over western India.</li>\n      <li>The fifth branch of the Shakas established its power in the upper Deccan.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In about 57-58 B.C, _____, the king of Ujjain effectively fought against \n      the Shakas and succeeded in driving them out in his time?",
      answer: "Vikramaditya."
    }, {
      qaNumber: this.qaNumber++,
      question: "An era called the _____ is reckoned from the event of Vikramaditya's victory \n      over Shakas in 57 B.C.?",
      answer: "Vikrama Samvat."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Shaka ruler Rudradaman I (AD 130 - 150) is famous because of the repairs \n      he undertook to improve _____ lake in the semi-arid zone of Kathiawar?",
      answer: "Sudarshana lake.",
      description: "<ul>\n      <li>This lake had been in use for irrigation for a long time, and was as old as the \n      time of the Mauryas.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Although a foreigner settled in India, _____ issued the first-ever long \n      inscription in chaste Sanskrit?",
      answer: "Rudradaman I (AD 130 - 150).",
      description: "<ul>\n      <li>All the earlier longer inscriptions that we have in this country were composed in \n      Prakrit.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Shaka domination in north-western India was followed by that of the \n      _____ ?",
      answer: "Parthians."
    }, {
      qaNumber: this.qaNumber++,
      question: "Originally the Parthians lived in _____, from where they moved to India ?",
      answer: "Iran.",
      description: "<ul>\n      <li>In comparison with the Greeks and the Shakas, they occupied only a small portion \n      of north-western India in the first century.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The most famous Parthian king was _____, in whose reign St. Thomas is said to \n      have come to India for the propagation of Christianity?",
      answer: "Gondophernes."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Parthians were followed by the ______, who are also called Yuechis or \n      Tocharians?",
      answer: "Kushans.",
      description: "<ul>\n      <li>Though a nomadic people from the steppes of north Central Asia living in the \n      neighbourhood of China, their empire extended from the Oxus to the Ganga, from Khorasan \n      in Central Asia to Varanasi in Uttar Pradesh.</li>\n      <li>A good part of Central Asia now included in the Commonwealth of Independent \n      States (in former USSR), a portion of Iran, a portion of Afghanistan, almost the whole \n      of Pakistan, and almost the whole of northern India were brought under one rule by the \n      Kushans.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Among the 2 successive dynasties of the Kushans, the first dynasty was \n      founded by a house of chiefs who were called _____, who ruled for 28 years from about \n      A.D. 50 ?",
      answer: "Kadphises.",
      description: "<ul>\n      <li>\n        It had 2 kings.\n        <ol>\n          <li>The first was Kadphises I, who issued coins south of the Hindukush. He minted \n          coppers in imitation of Roman coins.</li>\n          <li>The second king was Kadphises II, who issued a large number of gold money and \n          spread his kingdom east of the Indus.</li>\n        </ol>\n      </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In the Kushan dynasty, the house of Kadphises was succeeded by that of \n      _____ ?",
      answer: "Kanishka.",
      description: "<ul>\n      <li>Its kings extended the Kushan power over upper India and the lower Indus basin.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The early Kushan Kings issued numerous gold coins with higher degree of \n      metallic purity than is found in the Gupta gold coins. State true or false?",
      answer: "True."
    }, {
      qaNumber: this.qaNumber++,
      question: "Kushan coins, inscriptions, constructions and pieces of sculpture found in \n      Mathura show that it was their second capital in India, the first being _____,  where \n      Kanishka erected a monastery and a huge stupa or relic-tower?",
      answer: "Peshawar.",
      description: "<ul>\n      <li>Peshawar is historically known as Purushapura.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who started an era in A.D. 78, which is now known as the Shaka era?",
      answer: "Kanishka.",
      description: "<ul>\n      <li>Kanishka was the most famous Kushan ruler.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Kanishka held a Buddhist council in _____, where the doctrines of the \n      Mahayana form of Buddhism were finalized?",
      answer: "Kashmir.",
      description: "<ul>\n        <li>Fourth Buddhist Council:\n          <ul>\n            <li>Venue: Kundalavana, Kashmir.</li>\n            <li>Year: A.D. 72.</li>\n            <li>King: Kanishka.</li>\n            <li>Priest: Vasumitra deputed by Asvaghosha.</li>\n            <li>Divided Buddhism into Mahayana and Hinayana sects.</li>\n          </ul>\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The typical pottery of the Shaka-Kushan phase is _____, both plain and \n      polished?",
      answer: "Red ware.",
      description: "<ul>\n      <li>The period is also marked by the use of burnt bricks for flooring, use of tiles for \n      both flooring and roofing, and the construction of brick-walls.</li>\n      <li>The distinctive pots are sprinklers and spouted channels.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Shakas and Kushans introduced better cavalry and the use of riding horse \n      on a large scale. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>They made common the use of reins and saddles, which appear in the Buddhist \n      sculptures of the second and third centuries A.D.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Shakas and Kushans introduced turban, tunic, trousers, and heavy long \n      coat. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>The Central Asians also brought in cap, helmet, and boots which were used by \n      warriors.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who were the first rulers in India to issue gold coins on a wide scale?",
      answer: "Kushans."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Kushans introduced the _____ system of government?",
      answer: "Satrap.",
      description: "<ul>\n      <li>The empire was divided into numerous satrapies, and each satrapy was placed under \n      the rule of a satrap.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Greeks introduced the practice of military governorship. They appointed \n      their governors called _____?",
      answer: "Strategos."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Greek ambassador _____ set up a pillar in honour of Vasudeva near Vidisa \n      in Madhya Pradesh around the middle of the second century B.C.?",
      answer: "Heliodorus."
    }, {
      qaNumber: this.qaNumber++,
      question: "Indian craftsmen coming into contact with the Central Asians, Greeks, and \n      Romans, especially in the north-western frontier of India in Gandhara gave rise to a \n      new kind of art in which images of the Buddha were made in the _____ style?",
      answer: "Graeco-Roman style.",
      description: "<ul>\n      <li>The hair of the Buddha was fashioned in the Graeco-Roman style.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The earliest specimen of <i>kavya</i> style is found in the Junagadh \n      inscription of _____ in Kathiawar in about A.D. 150?",
      answer: "Rudradaman."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ wrote the <i>Buddhacharita</i>, which is a biography of the Buddha?",
      answer: "Ashvaghosha."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ composed the <i>Saundarananda</i>, which is a fine example of Sanskrit \n      kavya?",
      answer: "Ashvaghosha."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Greeks contributed to the development of the Indian theatre by introducing \n      the use of the _____?",
      answer: "Curtain.",
      description: "<ul>\n      <li>Since the curtain was borrowed from the Greeks, it came to be known as <i>yavanika</i>\n      </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "<i>Kamasutra</i> was written by _____?",
      answer: "Vatsyayana.",
      description: "<ul>\n      <li>It is attributed to the third century A.D.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CentralAsianInfluenceQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_CentralAsianInfluenceQAComponent = CentralAsianInfluenceQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CentralAsianInfluenceQAComponent, "\u0275fac", function CentralAsianInfluenceQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CentralAsianInfluenceQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CentralAsianInfluenceQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _CentralAsianInfluenceQAComponent,
  selectors: [["app-central-asian-influence-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function CentralAsianInfluenceQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.centralAsianInfluenceQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 2833
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component.ts ***!
  \**********************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChalcolithicAgeQAComponent: () => (/* binding */ ChalcolithicAgeQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _ChalcolithicAgeQAComponent;


var ChalcolithicAgeQAComponent = /*#__PURE__*/function () {
  function ChalcolithicAgeQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChalcolithicAgeQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Chalcolithic Age");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "chalcolithicFarmingCulturesQAs", [{
      qaNumber: this.qaNumber++,
      question: "Which was the first metal to be used?",
      answer: "Copper",
      description: ""
    }, {
      qaNumber: this.qaNumber++,
      question: "The culture based on the use of copper and stone implements is called _____?",
      answer: "Chalcolithic",
      description: "<ul>\n      <li>Chalcolithic means stone-copper phase.</li>\n      <li>Though, many of the chalcolithic cultures appear after the end of the bronze based Harappan culture, \n      chalcolithic cultures seems to be technologically less advanced than the Harappan cultures.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Occasionally, the chalcolithic people used bronze as well. State true or false?",
      answer: "True",
      description: "<ul>\n      <li>The bronze they used was found to be of low-grade.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "While the Harappans attained urbanisation, the chalcolithic people were primarily rural communities. \n      State true or false?",
      answer: "True",
      description: "<ul>\n      <li>The chalcolithic people spread over places where hilly land and rivers were available.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ is considered the richest among the chalcolithic ceramics?",
      answer: "Malwa ware",
      description: "<ul>\n      <li>Malwa ware is typical of the Malwa chalcolithic culture of central and western India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which chalcolithic culture covered majority of modern Maharashtra?",
      answer: "Jorwe culture (C. 1400 B.C to 700 B.C)",
      description: "<ul>\n      <li>Jorwe culture sites were located in semi-arid areas in the riverine tracts, \n      mostly on brown-black soil which had ber and babul vegetation.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Unlike the other chalcolithic farming cultures, Ahar (Between C. 2,100 and 1,500 B.C.) practically did not use microlithic tools. \n      State true or false?",
      answer: "True",
      description: "<ul>\n      <li>Stone axes or blades were almost absent.</li>\n      <li>Almost all of its objects were made of copper.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Black-and-red pottery was widely prevalent during the chalcolithic phase. State true of false?",
      answer: "True",
      description: "<ul>\n      <li>It was thrown on wheel and occasionally painted with white linear designs.</li>\n      <li>Considering the pre-bronze phase of chalcolithic cultures, chalcolithic people seems to be the first ones to use painted pottery.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Though people of the chalcolithic age domesticated animals and practised agriculture, they generally were not \n      acquainted with _____?",
      answer: "Horse",
      description: "<ul>\n      <li>Some animal remains are identified as belonging either to the horse or donkey or wild ass.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "People of the chalcolithic age produced wheat and rice. State true or false?",
      answer: "True",
      description: "<ul>\n      <li>They also produced bajra, ber, linseed, cotton (mainly in Deccan), ragi, bajra, millets, and several pulses \n      (such as the lentil, black gram, green gram, and grass pea.)</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Generally, the houses of the chalcolithic people were made of _____ and _____ ?",
      answer: "Wattle and daub",
      description: "<ul>\n      <li>Burnt bricks were seldom used.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The largest Jorwe site discoverd so far is _____ in the Godavari valley?",
      answer: "Daimabad",
      description: "<ul>\n      <li>Seems to have been fortified with a mud wall.</li>\n      <li>Large number of bronze goods have been discovered from here.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "At Inamgaon, a house of later chalcolithic phase with 4 _____ shaped rooms and 1 _____ shaped room, have been discovered?",
      answer: "4 rectangular and 1 circular",
      description: "<ul>\n      <li>Of the earlier chalcolithic phase, large mud houses with ovens and circular pit houses, have been discovered from here.</li>\n      <li>A granary lies close to it.</li>\n      <li>Despite the Inamgaon being a large chalcolithic settlement with more than 100 houses and numerous burials, \n      it was fortified and surrounded by a moat.</li>\n      <li>Works of potters, smiths, ivory carvers, lime makers, and terracotta artisans were found at Inamgaon.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Chalcolithic people manufactured beads of semi-precious stones such as carnelian, steatite, and quartz crystal. \n      State true or false?",
      answer: "True",
      description: "<ul>\n      <li>Copper bangles were also recovered.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Chalcolithic people didn't knew the art of spinning and weaving. State true or false?",
      answer: "False",
      description: "<ul>\n      <li>They knew spinning and weaving. Spindle whorls have been discovered in Malwa.</li>\n      <li>Cotton, flax, and silk threads have been found in Maharashtra.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In which age/phase did regional differences with regard to cereals, pottery, etc., appear?",
      answer: "Stone-copper or Chalcolithic phase",
      description: "<ul>\n      <li>Western India cultivated barley and wheat, while eastern India produced rice.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Chalcolithic people of Maharashtra buried their dead in urns under the _____ in the north-to-south position?",
      answer: "Floor of their house",
      description: "<ul>\n      <li>Unlike Harappans, they did not use separate cemeteries.</li>\n      <li>Valuables like pots and some copper objects were deposited in the graves.</li>\n      <li>In south India, dead body was placed in the east-west position.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ suggests that the mother goddess was venerated by the chalcolithic people?",
      answer: "Terracotta figures of women",
      description: "<ul>\n      <li>Some unbaked nude clay figurines were also used for worship.</li>\n      <li>Stylized bull terracottas suggests that the bull was the symbol of a religious cult.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "There were no social inequalities in the chalcolithic society. State true or false?",
      answer: "False",
      description: "<ul>\n      <li>The settlement pattern and burial practices of the chalcolithic people suggest beginning of\n      social inequalities.</li>\n      <li>It is believed that the chief and his kinsmen who lived in rectanular houses dominated others who lived in round huts.</li>\n      <li>In Inamgaon, while the chief lived probably in the centre, the craftsmen lived in the western fringes.</li>\n      <li>While the grave goods of affluent consisted of bangles, necklaces of semi-precious stones, and copper objects, \n      the grave goods of some others consisted of only pots.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Traces of chalcolithic cultures have been discovered almost all over the country, except for the \n      _____ and the _____?",
      answer: "Alluvial plains and thickly forested areas"
    }, {
      qaNumber: this.qaNumber++,
      question: "Since the neolithic phase imperceptibly faded into the chalcolithic phase in south India, these cultures are called _____?",
      answer: "Neolithic-chalcolithic"
    }, {
      qaNumber: this.qaNumber++,
      question: "Plough and hoe were found at chalcolithic sites. State true or false?",
      answer: "False",
      description: "<ul>\n      <li>Neither plough nor hoe has been found at chalcolithic sites.</li>\n      <li>Perforated stone discs were tied as weights to the digging sticks.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Chalcolithic people did not know the art of writing. State true or false?",
      answer: "True"
    }, {
      qaNumber: this.qaNumber++,
      question: "Ochre-coloured pottery (OCP) culture period may roughly be placed in the range _____ B.C. to _____ B.C.?",
      answer: "2,000 B.C. to 1,500 B.C.",
      description: "<ul>\n      <li>OCP people lived in areas not far removed from that of the Harappans.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChalcolithicAgeQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_ChalcolithicAgeQAComponent = ChalcolithicAgeQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ChalcolithicAgeQAComponent, "\u0275fac", function ChalcolithicAgeQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChalcolithicAgeQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ChalcolithicAgeQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ChalcolithicAgeQAComponent,
  selectors: [["app-chalcolithic-farming-cultures-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function ChalcolithicAgeQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.chalcolithicFarmingCulturesQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 329
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/dawn-of-history-in-south-india-qa/dawn-of-history-in-south-india-qa.component.ts ***!
  \************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DawnOfHistoryInSouthIndia: () => (/* binding */ DawnOfHistoryInSouthIndia)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _DawnOfHistoryInSouthIndia;


var DawnOfHistoryInSouthIndia = /*#__PURE__*/function () {
  function DawnOfHistoryInSouthIndia() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DawnOfHistoryInSouthIndia);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Dawn Of History In South India");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dawnOfHistoryInSouthIndiaQAs", [{
      qaNumber: this.qaNumber++,
      question: "The megalithic people in the southern districts of Tamil Nadu buried the \n      skeletons of the dead in urns made of _____ in pits?",
      answer: "Red pottery.",
      description: "<ul>\n      <li>In many cases these urns were not surrounded by stone circles, and grave goods \n      were not too many.</li>\n      <li>Their practice of urn burial was different from that of cist-burial or pit-burial \n      surrounded by stone circles, which prevailed in the Krishna-Godavari valley.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The route to the southern India called the _____ was valued by the northerners \n      because the south supplied gold, pearls, and various precious stones?",
      answer: "Dakshinapatha.",
      description: "<ul>\n      <li>Cultural and economic contacts between the north and the deep south known as the \n      <i>Tamizhakam</i> became extremely important from the fourth century B.C.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Pandyas are mentioned by Megasthenes, who says that their kingdom was \n      celebrated for _____?",
      answer: "Pearls.",
      description: "<ul>\n      <li>He also speaks of its being ruled by a woman, which may suggest some matriarchal \n      influence in the Pandya society.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Pandya kingdom had its capital at _____?",
      answer: "Madurai.",
      description: "<ul>\n      <li>The Pandya territory occupied the southern-most and the south-eastern portion of \n      the Indian peninsula.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Pandya kings profited from trade with the Roman empire and sent \n      embassies to the Roman emperor _____?",
      answer: "Augustus."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Chola kingdom, which was situated to the north-east of the territory of \n      the Pandyas, between the Pennar and the Velar rivers, came to be called _____ in early \n      medieval times?",
      answer: "Cholamandalam (Coromandel)."
    }, {
      qaNumber: this.qaNumber++,
      question: "The chief centre of political power of the Cholas lay at _____,  a place famous \n      for cotton trade?",
      answer: "Uraiyur."
    }, {
      qaNumber: this.qaNumber++,
      question: "Which Chola king founded Puhar and constructed 160km of embankment along the \n      Kaveri river?",
      answer: "Karikala."
    }, {
      qaNumber: this.qaNumber++,
      question: "Puhar is identical with _____, which was the Chola capital?",
      answer: "Kaveripattnam.",
      description: "<ul>\n      <li>It was a great centre of trade and commerce, and excavations show that it had a \n      large dock.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "One of the main sources of the wealth of the Cholas was trade in _____ cloth?",
      answer: "Cotton."
    }, {
      qaNumber: this.qaNumber++,
      question: "Which country was situated to the west and north of the land of the Pandyas?",
      answer: "The Chera or the Kerala country.",
      description: "<ul>\n      <li>It included the narrow strip of land between the sea and the mountains, and covered \n      portions of both Kerala and Tamil Nadu.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Where did the Romans set up two regiments in the Chera country?",
      answer: "Muziris (identical with Cranganore)."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Sangam literature can roughly be divided into 2 groups, narrative and \n      didactic. The narrative texts are called _____?",
      answer: "Melkanakku (or 18 major works).",
      description: "<ul>\n      <li>They comprise 18 major works consisting of 8 anthologies and 10 idylls.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Sangam literature can roughly be divided into 2 groups, narrative and \n      didactic. The didactic works are called _____?",
      answer: "Kilkanakku (or 18 minor works)."
    }, {
      qaNumber: this.qaNumber++,
      question: "Tolkkappiyam in an important tamil text which deals with philosophy and wise \n      maxims. State true or false?",
      answer: "False.",
      description: "<ul>\n      <li>Tolkkappiyam deals with grammar and poetics.</li>\n      <li>Tirukkural deals with philosophy and wise maxims.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DawnOfHistoryInSouthIndia, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_DawnOfHistoryInSouthIndia = DawnOfHistoryInSouthIndia;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DawnOfHistoryInSouthIndia, "\u0275fac", function DawnOfHistoryInSouthIndia_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DawnOfHistoryInSouthIndia)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DawnOfHistoryInSouthIndia, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _DawnOfHistoryInSouthIndia,
  selectors: [["dawn-of-history-in-south-india-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function DawnOfHistoryInSouthIndia_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.dawnOfHistoryInSouthIndiaQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7611
/*!******************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/gupta-age-qa/gupta-age-qa.component.ts ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuptaAgeQAComponent: () => (/* binding */ GuptaAgeQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _GuptaAgeQAComponent;


var GuptaAgeQAComponent = /*#__PURE__*/function () {
  function GuptaAgeQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GuptaAgeQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Gupta Age");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "guptaAgeQAs", [{
      qaNumber: this.qaNumber++,
      question: "Who started the Gupta era in A.D. 319-20?",
      answer: "Chandragupta I (A.D. 319-334)."
    }, {
      qaNumber: this.qaNumber++,
      question: "In which inscription did Harishena, the court poet of Samudragupta \n      (A.D. 335-380), wrote a glowing account of the military exploits of his patron?",
      answer: "Allahabad inscription.",
      description: "<ul>\n      <li>The inscription is engraved at Allahabad on the same pillar which carries the \n      inscriptions of the peace-loving Ashoka.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Chandragupta II (A.D. 380-412) adopted the title of _____?",
      answer: "Vikramaditya.",
      description: "<ul>\n      <li>The title Vikramaditya had been first used by an Ujjain ruler in 57 B.C. as a \n      mark of victory over the Shaka Kshatrapas of western India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "It was in Chandragupta II's time that the Chinese pilgrim _____ (A.D. 399-414) \n      visited India and wrote an elaborate account of the life of its people?",
      answer: "Fa-hsien."
    }, {
      qaNumber: this.qaNumber++,
      question: "In central and western India the villagers were subjected to forced labour \n      called _____ for serving the royal army and officials?",
      answer: "Vishti."
    }, {
      qaNumber: this.qaNumber++,
      question: "For the first time civil and criminal laws were clearly demarcated under \n      the Guptas. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Theft and adultery came under criminal law. Disputes regarding various types of \n      property came under civil law.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Gupta empire was divided into divisions called _____?",
      answer: "Bhuktis."
    }, {
      qaNumber: this.qaNumber++,
      question: "Under the Gupta rule, each <i>bhukti</i> was placed under the charge of an \n      _____?",
      answer: "Uparika."
    }, {
      qaNumber: this.qaNumber++,
      question: "Under the Gupta rule, <i>bhuktis</i> were divided into districts called _____?",
      answer: "Vishayas."
    }, {
      qaNumber: this.qaNumber++,
      question: "Under the Gupta rule, <i>vishayas</i> were placed under the charge of _____?",
      answer: "Vishayapati.",
      description: "<ul>\n      <li>In eastern India, the <i>vishayas</i> were divided into <i>vithis</i>, which \n      again were divided into villages.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In ancient India, the Guptas issued the largest number of gold coins, \n      which were called _____ in their inscriptions?",
      answer: "Dinaras."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____, the law book of Narads, is a work of about the fifth century A.D.?",
      answer: "Narada Smriti."
    }, {
      qaNumber: this.qaNumber++,
      question: "The first example of the immolation of widow after the death of her husband \n      appears in Gupta times in A.D. _____?",
      answer: "510."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is credited with maintaining in his court nine luminaries or great \n      scholars?",
      answer: "Chandragupta II."
    }, {
      qaNumber: this.qaNumber++,
      question: "In the Gupta period we find an over 2 metre high bronze image of the Buddha, \n      which was recovered from _____ near Bhagalpur?",
      answer: "Sultanganj."
    }, {
      qaNumber: this.qaNumber++,
      question: "The greatest specimen of Buddhist art in Gupta times is provided by the \n      _____ paintings?",
      answer: "Ajanta paintings.",
      description: "<ul>\n      <li>Although these paintings covered the period from the first to the seventh century \n      A.D., most of them belong to Gupta times. However, there is nothing to show that the \n      Guptas were the patrons of the Ajanta paintings.</li>\n      <li>They depict various events in the life of Gautama Buddha and the previous Buddhas.\n      </li>\n      <li>These paintings are life-like and natural and the brilliance of their colours has \n      not faded even after fourteen centuries.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Buddhist university at Nalanda was set up in the _____ century, and its \n      earliest structure, made of brick, belongs to this period?",
      answer: "Fifth century."
    }, {
      qaNumber: this.qaNumber++,
      question: "The 13 plays written by Bhasa belong to the Gupta period. State true or false?",
      answer: "True.",
      description: "<ul> \n      <li>The Gupta period is remarkable for the production of secular literature.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The <i>Mrichchhakatika</i> or the <i>Little Clay Court</i> is written by _____?",
      answer: "Shudraka.",
      description: "<ul>\n      <li>It deals with the love affair of a poor brahmana with the beautiful daughter of a \n      courtesan, and is considered one of the best works of ancient drama.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who wrote Abhijnanashakuntalam?",
      answer: "Kalidasa.",
      description: "<ul>\n      <li>It tells us about the love story of King Dushyanta and Shakuntala.</li>\n      <li>The Shakuntalam was one of the earliest Indian works to be translated into\n      European languages, the other work being the Bhagavadgita.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Two things can be noted about the plays produced in India in the Gupta \n      period. First, these are all comedies. We do not come across any tragedies. Secondly, \n      characters of the higher and lower classes do not speak the same language; women \n      and shudras featuring in these plays use __(1)__ while the higher classes use __(2)__?",
      answer: "<br> (1) Prakrit <br> (2) Sanskrit."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Gupta period is memorable for the compilation of the Amarakosha by \n      _____ ?",
      answer: "Amarasimha.",
      description: "<ul>\n      <li>This lexicon is learnt by heart by students who were taught Sanskrit in the \n      traditional fashion.</li>\n      <li>Amarasimha was a luminary in the court of Chandragupta II.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "During the Gupta Age, in the field of mathematics, we come across a work \n      called _____ written by Aryabhata, who belonged to Pataliputra ?",
      answer: "Aryabhatiya."
    }, {
      qaNumber: this.qaNumber++,
      question: "For a century from A.D. 432-33, we notice a series of land sale documents \n      recorded on copper-plates in Pundravardhanabhukti, which covered almost the whole of \n      north Bengal, now mostly in Bangladesh. Most land grants indicate that land was \n      purchased with gold coins called _____ ?",
      answer: "Dinara."
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul> \n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GuptaAgeQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_GuptaAgeQAComponent = GuptaAgeQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(GuptaAgeQAComponent, "\u0275fac", function GuptaAgeQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GuptaAgeQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(GuptaAgeQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _GuptaAgeQAComponent,
  selectors: [["app-gupta-age-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function GuptaAgeQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.guptaAgeQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 3417
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component.ts ***!
  \********************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BronzeAgeAndHarappanCivilizationQAComponent: () => (/* binding */ BronzeAgeAndHarappanCivilizationQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _BronzeAgeAndHarappanCivilizationQAComponent;


var BronzeAgeAndHarappanCivilizationQAComponent = /*#__PURE__*/function () {
  function BronzeAgeAndHarappanCivilizationQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BronzeAgeAndHarappanCivilizationQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Bronze Age and Harappan Civilization");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "harappanCultureBronzeAgeCivilizationQAs", [{
      qaNumber: this.qaNumber++,
      question: "The Indus culture/civilization arose in which part of the Indian subcontinent?",
      answer: "North-western",
      description: "<ul>\n      <li>Also called Harappan culture.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Indus civilization is also called as Harappan civilization because this civilization was first discovered \n      in the year ____ at the modern Harappa in the West Punjab province of Pakistan?",
      answer: "1921",
      description: "<ul>\n      <li>The central zone of the mature Harappan culture lay in Sindh and Punjab, mainly in the Indus valley.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Extend of Harappan culture was larger than any other culture zone in the 3rd and 2nd millenium B.C. \n      State true or false?",
      answer: "True",
      description: "<ul>\n      <li>The Harappan culture extended from Jammu in the north to the Narmada estuary in the south, and from Makran coast of\n      Baluchistan in the west to Meerut in the east.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Harappa, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?",
      answer: "Punjab (Pakistan)"
    }, {
      qaNumber: this.qaNumber++,
      question: "Mohenjo-daro, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?",
      answer: "Sindh (Pakistan)",
      description: "<ul>\n      <li>Mohenjo-daro literally means 'the mound of the dead'.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Chanhu-daro, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?",
      answer: "Sindh (Pakistan)"
    }, {
      qaNumber: this.qaNumber++,
      question: "Lothal, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?",
      answer: "Gujarat"
    }, {
      qaNumber: this.qaNumber++,
      question: "Kalibangan, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?",
      answer: "Rajasthan",
      description: "<ul>\n      <li>Kalibangan means black bangles.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Banawali, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?",
      answer: "Hissar district in Haryana"
    }, {
      qaNumber: this.qaNumber++,
      question: "Harappa and Mohenjo-daro did not had citadel. State true or falses?",
      answer: "Flase.",
      description: "<ul>\n      <li>Harappa and Mohenjo-daro each had its own citadel or acropolis, which is believed to have been occupied by members \n      of the ruling class.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The arrangement of houses in the Harappan cities followed _____ system/pattern?",
      answer: "Grid.",
      description: "<ul>\n      <li>Apart from the city being divided into so many blocks, roads cut across one another almost at right angles.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Great Bath, which is considered one of the earliest public water tank, is located at _____?",
      answer: "Mohenjo-daro.",
      description: "<ul>\n      <li>It was part of a large citadel.</li>\n      <li>Measures 11.88 x 7.01 metres; Depth: 2.43 metres.</li>\n      <li>Flights of steps at either ends.</li>\n      <li>Had side rooms for changing clothes.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Floor of Great Bath was made of _____?",
      answer: "Burnt bricks.",
      description: "<ul>\n      <li>Water was drawn from a large well in an adjacent room.</li>\n      <li>Outlet from the corner of the Bath led to a drain.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The largest building in Mohenjo-daro is a _____?",
      answer: "Granary.",
      description: "<ul>\n      <li>Length: 45.71 metres; Width: 15.23 metres.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Brick platforms of two rows of six rooms each, which appear to be foundations of granaries \n      is found in _____?",
      answer: "Harappa.",
      description: "<ul>\n      <li>Each room (granary) measured 15.23 x 6.09 metres.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Harappans used baked bricks to a much larger extent than any other contemporary civilization. \n      State true or false?",
      answer: "True."
    }, {
      qaNumber: this.qaNumber++,
      question: "Since the Indus people were the earliest to produce cotton, Greeks called it _____?",
      answer: "Sindon.",
      description: "<ul>\n      <li>Derived from Sindh.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "A piece of woven cotton has been recovered from _____?",
      answer: "Mohenjo-daro.",
      description: "<ul>\n      <li>Weavers wove cloth of wool and cotton.</li>\n      <li>Spindle whorls were used for spinning.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Harappans used metal money. State true or false?",
      answer: "False.",
      description: "<ul>\n      <li>Harappans did not use metal money. It is believed that they carried out all exchanges through barter.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In which place did Harappans set up a trading colony, which facilitated trade with Central Asia?",
      answer: "Northern Afghanistan."
    }, {
      qaNumber: this.qaNumber++,
      question: "Many Harappan seals have been discovered in Mesopotamia. State true or false?",
      answer: "True."
    }, {
      qaNumber: this.qaNumber++,
      question: "What was the ancient name given to the Indus region, which is referred to in the Mesopotamian records?",
      answer: "Meluha.",
      description: "<ul>\n      <li>The Mesopotamian records from about 2350 B.C. onwards refer to trade relations with Meluha.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Temples have been found at some Harappan sites. State true or false?",
      answer: "False.",
      description: "<ul>\n      <li>Unlike Egypt and Mesopotamia, no temples have been found at any Harappan site.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "A male deity is found to have been represented on a harappan seal. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>The deity has 3 horned head.</li>\n      <li>Represented in the sitting posture of a yogi, placing one foot on the other.</li>\n      <li>Deity is surrounded by an elephant, a tiger, and a rhinoceros. He has a buffalo below his throne. At his feet appear \n      2 deer.</li>\n      <li>The depicted god is supposedly identified as Pashupati Mahadeva.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Numerous symbols of the phallus and female sex organs made of stone have been found in Harappa. \n      State true or false?",
      answer: "True."
    }, {
      qaNumber: this.qaNumber++,
      question: "Among many animals represented on Harappan seals, which animal is considered to be the most important one?",
      answer: "Unicorn.",
      description: "<ul>\n      <li>Unicorn is a one horned animal, which may be identified with the rhinoceros.</li>\n      <li>Next in importance is the humped bull.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Harappan script was deciphered in 1923. State true or false?",
      answer: "False.",
      description: "<ul>\n      <li>Harappan script has not been deciphered so far.</li>\n      <li>Earliest specimen of the script was recovered by 1853, while the complete script was discovered by 1923.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Harappans wrote long inscriptions. State true or false?",
      answer: "False.",
      description: "<ul>\n      <li>Unlike the Egyptians and Mesopotamians, the Harappans did not write long inscriptions.</li>\n      <li>Most inscriptions were recorded on seals, and contain only a few words.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Harappan script is mainly a _____ script than an alphabetical one?",
      answer: "Pictographic."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Harappan weights discovered so far indicate that, in wheighing mostly _____ or its multiples were used?",
      answer: "16.",
      description: "<ul>\n      <li>The tradition of 16 has continued in India till modern times, and till recently 16 annas made 1 ruppee.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Harappans knew the art of measurement. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Sticks inscribed with measure marks have been discovered; one of these is made of bronze.</li>\n      <li>In the late Harappan phase, no object for measuring the length is noticed.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Harappan pots were generally decorated with the designs of _____?",
      answer: "Tress and circles.",
      description: "<ul>\n      <li>Numerous pots painted in various designs have been discovered.</li>\n      <li>The images of men also appear on some pottery fragments.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Great majority of about 2000 Harappan seals found so far carry short inscriptions with pictures. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Pictures are usually that of humped bull, buffalo, tiger, rhinoneros, goat, and elephant.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Harappan seals and images were manufactured with great skill, and so were Terracotta figurines. State true or false?",
      answer: "False.",
      description: "<ul>\n      <li>The Harappan seals and images were manufatured with great skill, whereas the terracotta pieces represent unsophisticated \n      artistic works.</li>\n      <li>The Harappan culture is poor in artistic works made of stone.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The post-urban phase of the Harappan culture is also knaown as _____?",
      answer: "Sub-Indus culture.",
      description: "<ul>\n      <li>It is also known as the late Harappan culture.</li>\n      <li>The post-urban phase broadly cover the period from 1900 B.C. to 1200 B.C.</li>\n      <li>The late Harappan cultures are primarily chalcolithic in which tools of stone and copper are used.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The people of post-urban Harappan settlements of Swat valley used _____ ware, produced on a slow wheel?",
      answer: "Black-grey burnished ware.",
      description: "<ul>\n      <li>The Swat valley people also produced black-on-red painted and wheel-turned pottery.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BronzeAgeAndHarappanCivilizationQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_BronzeAgeAndHarappanCivilizationQAComponent = BronzeAgeAndHarappanCivilizationQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BronzeAgeAndHarappanCivilizationQAComponent, "\u0275fac", function BronzeAgeAndHarappanCivilizationQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BronzeAgeAndHarappanCivilizationQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(BronzeAgeAndHarappanCivilizationQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _BronzeAgeAndHarappanCivilizationQAComponent,
  selectors: [["app-harappan-culture-bronze-age-civilization-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function BronzeAgeAndHarappanCivilizationQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.harappanCultureBronzeAgeCivilizationQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 8869
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/jainism-and-buddhism-age-qa/jainism-and-buddhism-age-qa.component.ts ***!
  \************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JainismAndBuddhismAgeQAComponent: () => (/* binding */ JainismAndBuddhismAgeQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _JainismAndBuddhismAgeQAComponent;


var JainismAndBuddhismAgeQAComponent = /*#__PURE__*/function () {
  function JainismAndBuddhismAgeQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JainismAndBuddhismAgeQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Jainism And Buddhism Age");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "jainismAndBuddhismAgeQAs", [{
      qaNumber: this.qaNumber++,
      question: "The earliest coins used in India which belong to the 5th century B.C. are called \n      _____ coins?",
      answer: "Punch-marked coins.",
      description: "<ul>\n      <li>Coins made of metal appear first in the age of Gautama Buddha.</li>\n      <li>The earliest were made largely of silver though a few coppers also appear.</li>\n      <li>They are called punch-marked because pieces of these metals were punched with \n      certain marks such as hill, tree, fish, bull, elephant, crescent, etc.</li>\n      <li>They circulated for the first time in eastern Uttar Pradesh and Bihar.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In the middle Gangetic plains, large-scale habitations began in about 600 B.C. when \n      _____ came to be used in this area?",
      answer: "Iron.",
      description: "<ul>\n      <li>The use of iron tools made possible clearance, agriculture, and large settlements.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The vaishyas extended generous support to both Vardhamana Mahavira and Gautama Buddha. State true or false?",
      answer: "True.",
      description: "Despite the fact that Vardhamana Mahavira who founded Jainism and Gautama Buddha who founded Buddhism \n      belonged to the kshatriya clan, vaishyas extended generous support to them. Some reasons for this are: \n      <ol>\n      <li>Jainism and Buddhism in the initial stage did not attach any importance to the existing varna system. \n      And both disputed the authority of the Brahmanas.</li>\n      <li>They preached the gospel of non-violence, which would put an end to wars between different kingdoms and consequently \n      promote trade and commerce.</li>\n      <li>The brahmanical law books, called the Dharmasutras, decried lending money on interest. A person who lived on interest \n      was condemned by them. Therefore, the vaishyas, who lent money on account of growing trade and commerce, were not held in \n      esteem and were eager to improve their social status.</li>\n      </ol>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Jainas consider ______ as the first tirthankara or great teacher?",
      answer: "Rishabhadev."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ is the 23rd tirthankara or great teacher of Jainas?",
      answer: "Parshvanath."
    }, {
      qaNumber: this.qaNumber++,
      question: "The last, 24th, tirthankara or great teacher of Jainas is _____?",
      answer: "Vardhamana Mahavira."
    }, {
      qaNumber: this.qaNumber++,
      question: "How many doctrines are taught by Jainism?",
      answer: "5.",
      description: "<ol>\n      <li>Do not commit violence.</li>\n      <li>Do not speak a lie.</li>\n      <li>Do not steal.</li>\n      <li>Do not acquire property.</li>\n      <li>Observe continence (brahmacharya).</li>\n      </ol>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Jainas were divided into 2 sects: _____ or those who put on white dress, and _____ or those who \n      keep themselves naked?",
      answer: "Shvetambaras and Digambaras.",
      description: "<ul>\n      <li>While Parshvanath had asked his followers to cover the upper and lower portions of their body, \n      Mahavira asked them to discard clothes altogether.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "According to Jaina tradition, the spread of Jainism in Karnataka is attributed to _____?",
      answer: "Chandragupta Maurya."
    }, {
      qaNumber: this.qaNumber++,
      question: "The early Jainas, discarded Sanskrit language mainly patronized by the brahmanas, and adopted \n      _____ language of the common people to preach their doctrines?",
      answer: "Prakrit."
    }, {
      qaNumber: this.qaNumber++,
      question: "The religious literature of the early Jainas were written in _____?",
      answer: "Ardhamagadhi."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Jaina texts were compiled in the 6th century A.D. in Gujarat at a place called _____?",
      answer: "Valabhi."
    }, {
      qaNumber: this.qaNumber++,
      question: "According to Buddhist tradition, Gautama Buddha was born in _____ in Nepal.?",
      answer: "Lumbini."
    }, {
      qaNumber: this.qaNumber++,
      question: "Gautama attained enlightment at _____, under a pipal tree?",
      answer: "Bodh Gaya.",
      description: "<ul>\n      <li>After that Gautama began to be called the Buddha or the enlightened.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Gautama Buddha delivered his first sermons at _____ in Banaras?",
      answer: "Sarnath."
    }, {
      qaNumber: this.qaNumber++,
      question: "According to Buddhist tradition, Gautama Buddha passed away at a place called _____ in Uttar Pradesh?",
      answer: "Kushinagar."
    }, {
      qaNumber: this.qaNumber++,
      question: "Gautama Buddha recommended _____ or an 8 fold path for the elimination of human misery?",
      answer: "Ashtangika marga.",
      description: "<ol>\n      <li>Right observation.</li>\n      <li>Right determination.</li>\n      <li>Right speech.</li>\n      <li>Right action.</li>\n      <li>Right livelihood.</li>\n      <li>Right exercise.</li>\n      <li>Right memory.</li>\n      <li>Right meditation.</li>\n      </ol>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Gautama Buddha advised people to follow extreme austerity. State true or false?",
      answer: "False.",
      description: "<ul>\n      <li>Gautama taught that a person should avoid the excess of both luxury and austerity. He \n      prescribed the middle path.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The use of _____, the language of the common people, contributed to the spread of Buddhism?",
      answer: "Pali."
    }, {
      qaNumber: this.qaNumber++,
      question: "Gautama Buddha organized the sangha or the religious order, whose doors were kept open to \n      everybody, irrespective of caste and sex. State true or false?",
      answer: "True."
    }, {
      qaNumber: this.qaNumber++,
      question: "3 main elements in Buddhism are Buddha, sangha, and _____?",
      answer: "Dhamma."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Buddhist text _____ declares the cattle to be givers of food, beauty, and happiness \n      (annada, vannada, sukhada), and thus pleads for their protection?",
      answer: "Suttanipata."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Greek and the Indian sculptors worked together to create a new kind of art on the \n      north-west frontier of India, which is known as the _____?",
      answer: "Gandhara Art."
    }, {
      qaNumber: this.qaNumber++,
      question: "Archaeologically, the 6th century B.C. marks the beginning of the _____ phase?",
      answer: "NBPW (Northern Black Polished Ware) phase.",
      description: "<ul>\n      <li>NBPW was a very glossy, shining type of pottery made of very fine fabric and apparently \n      served as the tableware of richer people.</li>\n      <li>In association with this pottery are found iron implements, especially those meant for \n      crafts and agriculture.</li>\n      <li>This phase also saw the beginning of metal money.</li>\n      <li>The use of burnt bricks and ringwells appreared in the middle of the NBPW phase, i.e. in \n      the 3rd century B.C.</li>\n      <li>The NBPW phase marked the beginning of the second urbanization in India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Pali texts speak of _____ types of villages ?",
      answer: "3.",
      description: "<ul>\n      <li>The first category included the typical village inhabited by various castes and \n      communities. Its number seems to have been the largest, and it was headed by a village \n      headman called bhojaka.</li>\n      <li>The second included suburban villages which were in the nature of craft villages; \n      for instance, a carpenter's village or chariotmaker's village lay in the vicinity of \n      Varanasi. Obviously these villages served as markets for the other villages and linked \n      the towns with the countryside.</li>\n      <li>The third category consisted of border villages situated on the limits of the \n      countryside which merged into forests. People living in these villages were mainly \n      fowlers and hunters, who mostly lived on food gathering.</li>\n      <li>It seems that the nucleated rural settlement in which all people settled at one \n      place with their agricultural lands mostly outside the settlement first appeared in \n      the middle Gangetic plain in the age of Gautama Buddha.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In the age of the Buddha, kings' higher officials who performed \n      various functions such as those of the minister (mantrin), commander (senanayaka), \n      judge, chief accountant and head of the royal harem were called _____ ?",
      answer: "Mahamatras.",
      description: "<ul>\n      <li>It is likely that a class of officers called 'ayuktas' also performed similar \n      functions in some of the states.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In the age of the Buddha, the rural administration was in the hands of \n      the village headmen who functioned as leaders of the tribal regiments, and so they \n      were called _____, which means the leader of the grama or a tribal military unit ?",
      answer: "Gramini.",
      description: "<ul>\n      <li>The village headmen were known by different titles such as gramabhojaka, gramini, \n      or gramika.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Bali, a voluntary payment made by the tribesmen to their chiefs in Vedic \n      times became a compulsory payment to be made by the peasants in the age of the Buddha, \n      and officers called _____ were appointed to collect it ?",
      answer: "Balisadhakas.",
      description: "<ul>\n      <li>It seems that one-sixth of the produce was collected as tax by the king from \n      the peasants.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(JainismAndBuddhismAgeQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_JainismAndBuddhismAgeQAComponent = JainismAndBuddhismAgeQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(JainismAndBuddhismAgeQAComponent, "\u0275fac", function JainismAndBuddhismAgeQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JainismAndBuddhismAgeQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(JainismAndBuddhismAgeQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _JainismAndBuddhismAgeQAComponent,
  selectors: [["app-jainism-and-buddhism-age-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function JainismAndBuddhismAgeQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.jainismAndBuddhismAgeQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 9785
/*!********************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/maurya-age-qa/maurya-age-qa.component.ts ***!
  \********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MauryaAgeQAComponent: () => (/* binding */ MauryaAgeQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _MauryaAgeQAComponent;


var MauryaAgeQAComponent = /*#__PURE__*/function () {
  function MauryaAgeQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MauryaAgeQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Maurya Age");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "mauryaAgeQAs", [{
      qaNumber: this.qaNumber++,
      question: "The Maurya dynasty was founded by _____ ?",
      answer: "Chandragupta Maurya.",
      description: "<ul>\n      <li>With the help of Chanakya, Chandragupta Maurya overthrew the Nandas and established the \n      rule of the Maurya dynasty.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Chanakya is also known as _____ ?",
      answer: "Kautilya."
    }, {
      qaNumber: this.qaNumber++,
      question: "The machinations of Chanakya against Chandragupta's enemies are described in \n      detail in the _____, a drama written by Vishakhadatta in the 9th century?",
      answer: "Mudrarakshasa.",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Arthashastra was authored by _____ ?",
      answer: "Kautilya.",
      description: "<ul>\n      <li>It provides information about the Mauryan administration system.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ was a Greek ambassador sent by Seleucus to the court of Chandragupta Maurya?",
      answer: "Megasthenes.",
      description: "<ul>\n      <li>Megasthenes lived in Pataliputra and wrote an account not only of the administration \n      of the city of Pataliputra but also of the Maurya empire as a whole.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ was the capital of Maurya?",
      answer: "Pataliputra."
    }, {
      qaNumber: this.qaNumber++,
      question: "The account of Megasthenes about the Maurya Empire does not survive in full, but quotations occur in the \n      works of several subsequent Greek writers. These fragments have been collected and published \n      in the form of a book called _____ ?",
      answer: "Indika.",
      description: "<ul>\n      <li>It throws valuable light on the administration, society, and economy of Maurya times.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Ashoka was the son of _____, who succeeded Chandragupta Maurya?",
      answer: "Bindusara.",
      description: "<ul>\n      <li>He is the first Indian King to speak directly to the people through his inscriptions, which \n      carry royal orders.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Among all Ashokan inscriptions, the name of Ashoka occurs only in copies of Minor \n      Rock Edict I found at 3 places in __(1)__ and at 1 place in __(2)__ ?",
      answer: "<ol>\n      <li>Karnataka.</li>\n      <li>Madhya Pradesh.</li>\n      </ol>",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Most of the Ashokan inscriptions mention only _____, meaning dear to gods, and \n      leave out the word Ashoka?",
      answer: "Devanampiya piyadasi.",
      description: "<ul>\n      <li>The Ashokan inscriptions are found in India, Nepal, Pakistan, and Afghanistan.</li>\n      <li>They were generally placed on ancient highways.</li>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Composed in __(1)__, Ashokan inscriptions were written in __(2)__ script in the \n      greater part of the subcontinent?",
      answer: "<ol>\n      <li>Prakrit.</li>\n      <li>Brahmi.</li>\n      </ol>",
      description: "<ul>\n      <li>But in its north-western part they appeared in Aramic language and Kharoshthi script, \n      and in Afghanistan they were written in both Aramic and Greek scripts and languages.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "After his accession to the throne, Ashoka fought only one major war called \n      _____ war?",
      answer: "Kalinga war.",
      description: "<ul>\n      <li>After Kalinga war, Ashoka abandoned the policy of physical occupation in favour of \n      a policy of cultural conquest. In other words, <i>bherighosha</i> was replaced with \n      <i>dhammaghosha</i>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Within the empire, Ashoka appointed a class of officers known as the _____, \n      who were vested with the authority of not only rewarding people but also punishing them, \n      wherever necessary?",
      answer: "Rajukas."
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ inscription speaks of the success of Ashoka's policy of dhamma with \n      the hunters and fishermen, who gave up killing animals and possibly took to a settled life?",
      answer: "Kandhar inscription.",
      description: "<ul>\n      <li>After Kalinga war, Ashoka adopted a policy of consolidating his empire through dhamma \n      (dharma). He now made an ideological appeal towards the tribal people to follow the \n      principles of dhamma.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The fact of Ashoka visiting the Buddhist shrines is suggested by the _____ \n      mentioned in his inscriptions?",
      answer: "Dhamma yatras.",
      description: "<ul>\n      <li>According to tradition, Ashoka became a monk, made huge gifts to the Buddhists and \n      undertook pilgrimages to the Buddhist shrines.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "According to tradition, which Buddhist council (Sangiti) was held by Ashoka?",
      answer: "3<sup>rd</sup> Buddhist council.",
      description: "<ul>\n      <li>According to tradition, the third Buddhist council (Sangiti) was held by Ashoka and \n      missionaries were sent not only to south India but also to Sri Lanka, Burma, and other \n      countries to convert the people there.</li>\n      <li>Brahmi inscriptions of the second and first centuries B.C. have been found in Sri \n      Lanka.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Ashoka appointed _____ for propagating dhamma among various social groups \n      including women?",
      answer: "Dhammamahamatras."
    }, {
      qaNumber: this.qaNumber++,
      question: "During Mauryan peorid __(1)__ was the highest officer in charge of assessment \n      and the __(2)__ was the chief custodian of the state treasury and store-house?",
      answer: "<ol>\n      <li>Samaharta.</li>\n      <li>Sannidhata.</li>\n      </ol>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Mauryas introduced _____ masonry on a wide scale?",
      answer: "Stone masonry.",
      description: "<ul>\n      <li>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Maurya empire was destroyed by _____ in 185 B.C?",
      answer: "Pushyamitra Shunga.",
      description: "<ul>\n      <li>He is said to have killed the last Maurya king called Brihadratha in public and \n      forcibly usurped the throne of Pataliputra.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MauryaAgeQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_MauryaAgeQAComponent = MauryaAgeQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MauryaAgeQAComponent, "\u0275fac", function MauryaAgeQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MauryaAgeQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MauryaAgeQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _MauryaAgeQAComponent,
  selectors: [["app-maurya-age-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function MauryaAgeQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.mauryaAgeQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 5925
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/post-maurya-crafts-trade-and-towns-qa/post-maurya-crafts-trade-and-towns-qa.component.ts ***!
  \********************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostMauryaCraftsTradeAndTownsQAComponent: () => (/* binding */ PostMauryaCraftsTradeAndTownsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _PostMauryaCraftsTradeAndTownsQAComponent;


var PostMauryaCraftsTradeAndTownsQAComponent = /*#__PURE__*/function () {
  function PostMauryaCraftsTradeAndTownsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostMauryaCraftsTradeAndTownsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Post-Maurya Age Crafts, Trade, and Towns");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "postMauryaCraftsTradeAndTownsQAs", [{
      qaNumber: this.qaNumber++,
      question: "The _____ or the <i>Questions of Milinda</i> enumerates as many as 75 \n      occupations, 60 of which are connected with various kinds of crafts?",
      answer: "Milinda Panho."
    }, {
      qaNumber: this.qaNumber++,
      question: "Mathura was a great centre for the manufacture of a special type of \n      cloth, which was called _____?",
      answer: "Shataka."
    }, {
      qaNumber: this.qaNumber++,
      question: "Artisans were organised into guilds which were called _____?",
      answer: "Shrenis."
    }, {
      qaNumber: this.qaNumber++,
      question: "Which Roman writer wrote <i>Natural History</i> in Latin in A.D. 77?",
      answer: "Pliny.",
      description: "<ul>\n      <li>He complains that Rome was being drained of gold on account of her trade with \n      India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Since the Westerners were very much fond of Indian pepper, it is called \n      _____ in Sanskrit?",
      answer: "Yavanpriya."
    }, {
      qaNumber: this.qaNumber++,
      question: "Most Kushan towns in India lay exactly on the north-western or _____ \n      route passing from Mathura to Taxila?",
      answer: "Uttarapatha."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PostMauryaCraftsTradeAndTownsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_PostMauryaCraftsTradeAndTownsQAComponent = PostMauryaCraftsTradeAndTownsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PostMauryaCraftsTradeAndTownsQAComponent, "\u0275fac", function PostMauryaCraftsTradeAndTownsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostMauryaCraftsTradeAndTownsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PostMauryaCraftsTradeAndTownsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PostMauryaCraftsTradeAndTownsQAComponent,
  selectors: [["app-post-maurya-crafts-trade-and-towns-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function PostMauryaCraftsTradeAndTownsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.postMauryaCraftsTradeAndTownsQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 3887
/*!**********************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/satavahanas-qa/satavahanas-qa.component.ts ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SatavahanasQAComponent: () => (/* binding */ SatavahanasQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _SatavahanasQAComponent;


var SatavahanasQAComponent = /*#__PURE__*/function () {
  function SatavahanasQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SatavahanasQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Age of the Satavahanas");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "satavahanasQAs", [{
      qaNumber: this.qaNumber++,
      question: "The Satavahanas issued mostly coins of _____, which is found in the Deccan?",
      answer: "Lead.",
      description: "<ul>\n      <li>They also issued potin, copper, and bronze money.</li>\n      <li>The Satavahanas may have used gold as bullion, for they did not issue gold coins as \n      the Kushans did.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "District of the Satavahanas was called _____, as it was known in the time of \n      Ashoka?",
      answer: "Ahara.",
      description: "<ul>\n      <li>Their officials were known as <i>amatyas</i> and <i>mahamatras</i>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "During Satavahana rule, the administration in the rural areas was placed in \n      the hands of _____?",
      answer: "Gaulmika.",
      description: "<ul>\n      <li>Gaulmika was the head of a military regiment consisting of nine chariots, nine \n      elephants, 25 horses, and 45 foot-soldiers.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Satavahanas started the practice of granting tax-free villages to \n      brahmanas and Buddhist monks. State true or false?",
      answer: "True."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Satavahana kingdom had _____ grades of feudatories?",
      answer: "Three.",
      description: "<ul>\n      <li>The highest grade was formed by the king who was called <i>raja</i>.</li>\n      <li>The second grade was formed by the <i>mahabhoja</i>.</li>\n      <li>The third grade was formed by the <i>senapati</i>.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ is a large round structure erected over some relic of the \n      Buddha?",
      answer: "Stupa."
    }, {
      qaNumber: this.qaNumber++,
      question: "The official language of the Satavahanas was _____?",
      answer: "Prakrit."
    }, {
      qaNumber: this.qaNumber++,
      question: "All Satavahana inscriptions were composed in Prakrit and written in the \n      _____ script, as was the case in Ashokan times?",
      answer: "Brahmi."
    }, {
      qaNumber: this.qaNumber++,
      question: "One Prakrit text called Gathasattasai or the Gathasaptasati is attributed \n      to a Satavahana king called _____?",
      answer: "Hala.",
      description: "<ul>\n      <li>It consisted of 700 verses, all written in Prakrit, but it seems to have been \n      finally re-touched much later, possibly after the sixth century A.D.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SatavahanasQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_SatavahanasQAComponent = SatavahanasQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(SatavahanasQAComponent, "\u0275fac", function SatavahanasQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SatavahanasQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(SatavahanasQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _SatavahanasQAComponent,
  selectors: [["app-satavahanas-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function SatavahanasQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.satavahanasQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 717
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/science-and-civilization-legacy-qa/science-and-civilization-legacy-qa.component.ts ***!
  \**************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScienceAndCivilizationLegacyQAComponent: () => (/* binding */ ScienceAndCivilizationLegacyQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _ScienceAndCivilizationLegacyQAComponent;


var ScienceAndCivilizationLegacyQAComponent = /*#__PURE__*/function () {
  function ScienceAndCivilizationLegacyQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScienceAndCivilizationLegacyQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Legacy in Science And Civilization");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "scienceAndCivilizationLegacyQAs", [{
      qaNumber: this.qaNumber++,
      question: "_____ of Panini, a work on Sanskrit grammar, was composed around 500 BCE?",
      answer: "Ashtadhyayi."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ of Bharata is a detailed treatise and handbook on dramaturgy in Sanskrit ?",
      answer: "Natyashastra.",
      description: "<ul>\n      <li>It is the principal work of dramatic theory, encompassing dance, music, poetics, and \n      general aesthetics.</li>\n      <li>It is attributed to the Bharatamuni and is believed to have been written during the period \n      between 200 BCE and 200 CE.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Natyashastra is also known as the _____ ?",
      answer: "Fifth veda.",
      description: "<ul>\n      <li>It is known as the fifth veda as it has been evolved by taking words from the Rigveda, \n      music from the Samaveda, gestures from the Yajurveda and emotions from the Atharvaveda.</li>\n      <li>The text contains a set of precepts on the writing and performance of dance, music and \n      theater, and while it primarily deals with stagecraft, it has influenced Indian music, dance, \n      sculpture, painting and literature as well. Thus, the Natya Shastra is considered the foundation \n      of the fine arts in India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Bharata\u2019s theory of drama refers to _____, the imitations of emotions that the actors \n      perform, and the _____ (emotional responses), that they inspire in the audience.?",
      answer: "Bhavas, and rasas.",
      description: "<ul>\n      <li>The eight basic bhavas (emotions) are: love, humor, energy, anger, fear, grief, disgust \n      and astonishment.</li>\n      <li>In observing and imagining the bhavas, the audience experiences eight principal \n      responses, or rasas, which are: love, pity, anger, disgust, heroism, awe, terror and comedy.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ScienceAndCivilizationLegacyQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_ScienceAndCivilizationLegacyQAComponent = ScienceAndCivilizationLegacyQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ScienceAndCivilizationLegacyQAComponent, "\u0275fac", function ScienceAndCivilizationLegacyQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScienceAndCivilizationLegacyQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ScienceAndCivilizationLegacyQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ScienceAndCivilizationLegacyQAComponent,
  selectors: [["app-science-and-civilization-legacy-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function ScienceAndCivilizationLegacyQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.scienceAndCivilizationLegacyQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 3231
/*!******************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component.ts ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoneAgeQAComponent: () => (/* binding */ StoneAgeQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _StoneAgeQAComponent;


var StoneAgeQAComponent = /*#__PURE__*/function () {
  function StoneAgeQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StoneAgeQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Stone Age");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "stoneAgeQAs", [{
      qaNumber: this.qaNumber++,
      question: "Which period represents the time during which recognizable modern humans evolved?",
      answer: "Quaternary period",
      description: "<ul>\n      <li>Quaternary period is often considered the \"Age of Humans\". The quaternary period began\n      2.588 million years ago and extends into the present. It's a part of the Cenozoic Era.</li>\n      <li>But now, though not officially accepted, appearance of modern man seems to have occured in Africa \n      about 3 million years ago.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Quaternary Period is divided into two epochs. Which are they?",
      answer: "Pleistocene Epoch and Holocene Epoch",
      description: "<ul>\n      <li>Pleistocene Epoch: 2.588 million years ago to 11,700 years ago</li>\n      <li>Holocene Epoch: 11,700 years ago to present</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which are the three classifications of Stone age?",
      answer: "<ol>\n      <li>Palaeolithic age</li>\n      <li>Mesolithic age</li>\n      <li>Neolithic age</li>\n      </ol>",
      description: "<ul>\n      <li>Palaeolithic age: Considered to have begun in India around 500,000 B.C. \n      Humans were hunters and food gatherers.</li>\n      <li>Mesolithic age: Considered to have begun in India around 9,000 B.C. \n      Humans were largely hunters and herders.</li>\n      <li>Neolithic age: Considered to have begun in India around 5,000 B.C. \n      Humans became food producers.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Considering the nature of the stone tools used as well as the nature of climate change, \n      the Palaeolithic Age in India is divided into 3 phases. Which are they?",
      answer: "<ol>\n      <li>Early or Lower Palaeolithic</li>\n      <li>Middle Palaeolithic</li>\n      <li>Upper Palaeolithic</li>\n      </ol>",
      description: "<ul>\n      <li>Early or Lower Palaeolithic: Roughly between 500,000 B.C. and 50,000 B.C.\n      Hand-axes, cleavers, and choppers were used.</li>\n      <li>Middle Palaeolithic: Roughly between 50,000 B.C. and 40,000 B.C. \n      Blades, points, borers, and scrapers made of flakes were used.</li>\n      <li>Upper Palaeolithic: Roughly between 40,000 B.C. and 10,000 B.C. \n      Blades, burins, scrapers, and flakes were used.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Since the fossils of early men have not been found in India, _____ obtained from the excavations\n      are being considered as the evidence of earliest human presence?",
      answer: "Stone tools",
      description: "<ul>\n      <li>The early man in India used stone tools roughly dressed by crude chipping. Since man did not had \n      knowledge of cultivation and house building during the stone age, chipped stone tools were mainly used for hunting,\n       cutting, and gathering food.</li>\n      <li>As of now, earliest human presence in India, based on the analysis of stone tools, is dated to somewhere between \n      500,000 B.C and 250,000 B.C.</li>\n      <li>Though the evolution of Stone tools and related technology is similar to that in Africa, it is believed \n      that modern humans appeared in India much later than in Africa.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Palaeolithic stone tools used by the early man in India have been discovered throughout the country except the _____?",
      answer: "Alluvial plains of Indus, Ganga, and Yamuna rivers",
      description: "<ul>\n      <li>Palaeolithic sites are mainly found in river valleys and hill slopes.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ are the characteristic tools of the Mesolithic age?",
      answer: "Microliths",
      description: "<ul>\n      <li>A microlith is a minute stone tool, usually made of flint, typically used as a part of a composite tool such as \n      a spear or arrow.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Earliest evidence for the domestication of animals provided by Adamgarh in Madhya Pradesh and Bagor in Rajasthan\n      is dated to around _____ B.C.?",
      answer: "5,000 B.C."
    }, {
      qaNumber: this.qaNumber++,
      question: "A study of deposits of the Sambhar salt lake of Rajasthan hints cultivation of plants around _____ B.C.??",
      answer: "7,000 - 6,000 B.C."
    }, {
      qaNumber: this.qaNumber++,
      question: "Name 2 valleys where all the three phases of the Palaeolithic followed by the Mesolithic and then by the Neolithic\n      have been found in sequence?",
      answer: "Belan Valley, and Narmada Valley"
    }, {
      qaNumber: this.qaNumber++,
      question: "With more than 500 painted rock shelters, _____ in Madhya Pradesh is a striking site having prehistoric art?",
      answer: "Bhimbetka",
      description: "<ul>\n      <li>The time period of rock paintings spans from the Palaeolithic to recent times. Human beings, animals, and birds are painted.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ in Baluchistan is the only neolithic settlement in the Indian subcontinent attributed to 7,000 B.C.",
      answer: "Mehrgarh",
      description: "<ul>\n      <li>Considering world as a whole, neolithic age is believed to have begun by 9,000 B.C. But, in India, generally, neolithic \n      settlements are considered to range between 5,000 B.C. and 1,000 B.C.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "People of Neolithic age generally used tools and implements of _____?",
      answer: "Polished stone",
      description: "<ul>\n      <li>Stone axes need special mention, as they were very popular.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which neolithic culture was distinguished by its dwelling pits, and the complete absence of the microliths?",
      answer: "Kashmiri neolithic culture",
      description: "<ul>\n      <li>It is distinguished by its range of ceramics, and the variety of stone, and bone tools as well.</li>\n      <li>Burzahom and Gufkral are two such prominent sites.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Apart from Kashmir, _____ is the only place in India which yielded considerable neolithic bone implements?",
      answer: "Chirand",
      description: "<ul>\n      <li>These bone implements were mostly made of antlers (horns of deer).</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Burying domestic dogs with their masters in their graves seems to be a practice unique to the neolithic people of _____?",
      answer: "Burzahom",
      description: ""
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ pottery were used by the neolithic people of Burzahom?",
      answer: "Coarse grey pottery",
      description: ""
    }, {
      qaNumber: this.qaNumber++,
      question: "The neolithic people who lived to the south of Godavari had the knowledge of making/using fire-baked earthern figurines \n      as well as rubbing stone querns. State true or false?",
      answer: "True",
      description: "<ul>\n      <li>Fire-baked earthern figurines recovered suggests that they possesed cattle, sheep, and goats.</li>\n      <li>Rubbing stone querns recovered suggests that they were acquainted with the art of producing cereals.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "From the neolithic sites in Allahabad district, evidence for the cultivation of _____ in the sixth millenium B.C has been obtained?",
      answer: "Rice",
      description: ""
    }, {
      qaNumber: this.qaNumber++,
      question: "In general, neolithic settlers lived in circular or rectangular houses made of _____ and _____?",
      answer: "Mud, and reed",
      description: ""
    }, {
      qaNumber: this.qaNumber++,
      question: "Neolithic people of Mehrgarh lived in houses made of _____ and _____?",
      answer: "Mud, and brick",
      description: ""
    }, {
      qaNumber: this.qaNumber++,
      question: "Pottery first appears in which phase of the stone age?",
      answer: "Neolithic phase",
      description: "<ul>\n      <li>Settled life necesseciated the use of pots for storing foodgrains, cooking, eating, and drinking.</li>\n      <li>Hand-made pottery is found in the early neolithic phase while footwheel turned pottery emerged towards later neolithic phase.</li>\n      <li>Black-burnished ware, grey ware, and mat-impressed ware were used.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "From the perspective of general progress in technology, the neolithic age in Indian subcontinent can be said to have \n      begun around _____ millennium B.C.?",
      answer: "Sixth millennium B.C.",
      description: "<ul>\n      <li>Rice, wheat, and barley started to be cultivated.</li>\n      <li>Villages started appearing.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The people of stone age could settle down only on the hilly river valleys, slopes of the hills, and in the rock-shelters.\n      State True or False?",
      answer: "True",
      description: "<ul>\n      <li>With just tools and weapons made of stone, and bones, they could not establish settlements far away from the hilly areas.</li>\n      <li>Also, they could not produce much more than what they needed for their subsistence.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StoneAgeQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_StoneAgeQAComponent = StoneAgeQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(StoneAgeQAComponent, "\u0275fac", function StoneAgeQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StoneAgeQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(StoneAgeQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _StoneAgeQAComponent,
  selectors: [["app-stone-age-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function StoneAgeQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.stoneAgeQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 9891
/*!******************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/ancient-indian-history-qa/vedic-age-qa/vedic-age-qa.component.ts ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VedicAgeQAComponent: () => (/* binding */ VedicAgeQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _VedicAgeQAComponent;


var VedicAgeQAComponent = /*#__PURE__*/function () {
  function VedicAgeQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VedicAgeQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Vedic Age");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "aryansAndRigVedaQAs", [{
      qaNumber: this.qaNumber++,
      question: "Originally the Aryans seem to have lived somewhere in the steppes stretching from southern Russia \n      to  Central Asia. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>They spoke Indo-European languages.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "What is the source of knowledge about the Aryans in India?",
      answer: "Rig Veda.",
      description: "<ul>\n      <li>The term Arya occurs 36 times in this text, and generally indicates a cultural community.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which is the earliest text of the Indo-European languages?",
      answer: "Rig Veda.",
      description: "<ul>\n      <li>It is a collection of prayers offered to Indra, Agni, Mitra, Varuna, and other gods by various families \n      of poets or sages.</li>\n      <li>The Rig Veda has many things in common with the Avesta, which is the oldest text in the Iranian language.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Rig Veda consists of how many mandalas or books?",
      answer: "10.",
      description: "<ul>\n      <li>Books II to VII form its earliest portions.</li>\n      <li>Books I and X seems to be the latest additions.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Aryans appeared in India a little earlier than 1,500 B.C. State true or false?",
      answer: "True."
    }, {
      qaNumber: this.qaNumber++,
      question: "Indus and its 5 branches are mentioned in the Rig Veda. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>The Sindhu, currently known as the Indus, was the river par excellence of the Aryans.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The river Saraswati is called _____ or the best of the rivers in the Rig Veda?",
      answer: "Naditarna.",
      description: "<ul>\n      <li>It is identified with the Ghaggar-Hakra channel in Haryana and Rajasthan. But its Rig Vedic description shows \n      it to be the Avestan river Harakhwati or the present Helmand river in south Afghanistan from where the name Saraswati \n      was transferred to India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The whole region in which the Aryans first settled in the Indian suncontinent is called _____?",
      answer: "The land of the seven rivers.",
      description: "<ul>\n      <li>Also known as the Vedic land.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Rig Veda mentions the defeat of Sambara by a chief called _____, who belonged to the Bharata clan?",
      answer: "Divodasa."
    }, {
      qaNumber: this.qaNumber++,
      question: "Possibly the dasyus in the Rig Veda represent the original inhabitants of the country, and an Aryan chief who \n      overpowered them was called _____?",
      answer: "Trasadasyu.",
      description: "<ul>\n      <li>The term dasyuhatya, slaughter of the dasyus, is repeatedly mentioned in the Rig Veda.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In the Rig Veda, Indra is called _____, which means that he was the breaker of forts?",
      answer: "Purandara.",
      description: "<ul>\n      <li>Indra played the role of a warload.</li>\n      <li>He was also considered to be the rain god.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who introduced chariots driven by horses for the first time into West Asia and India?",
      answer: "The Aryans.",
      description: "<ul>\n      <li>It played a crucial role in their successes as well.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "According to tradition, the Aryans were divided into 5 tribes called _____?",
      answer: "Panchajana.",
      description: "<ul>\n      <li>There might have been other tribes also.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The country 'Bharatavarsha' was named after the tribe _____, which appears first in the Rig Veda?",
      answer: "Bharata.",
      description: "<ul>\n      <li>The Bharatas and the Tritsu were the ruling Aryan clans, and they were supported by priest Vasishtha.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Battle of Ten Kings was fought on the river _____, identical with the modern river Ravi?",
      answer: "Parushni.",
      description: "<ul>\n      <li>The battle was fought between the Bharatas on the one side and a host of 10 chiefs (5 of whom were heads of \n        Aryan tribes and the remaining 5 were heads of non-Aryan people.) on the other side.</li>\n      <li>Sudas, the king of Bharatas, emerged victorious in the battle which established the supremacy of Bharatas.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Ploughshare is mentioned in the earliest part of the Rig Veda. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Some consider it an interpolation.</li>\n      <li>Possibly, this ploughshare was made of wood.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "There are so many references to the cow and the bull in the Rig Veda that the Rig Vedic Aryans can be called \n      predominantly pastoral people. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Though agriculture was known, agriculture was perhaps used mainly to produce fodder.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The term for war in the Rig Veda is _____ or search for cows?",
      answer: "Gavishthi.",
      description: "<ul>\n      <li>Most of their wars were fought for the sake of cows.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The tribal chief of the Aryans in the Rig Vedic period was called _____?",
      answer: "Rajan.",
      description: "<ul>\n      <li>He was the pivot of the administrative machinery of the Aryans in the Rig Vedic perioed because of his successful \n      leadership in war.</li>\n      <li>Rajan did not exercise unlimited power, for he had to reckon with the tribal organizations.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Rig Vedic references suggest that the rajan (or king) was elected by the tribal assembly called the _____?",
      answer: "Samiti."
    }, {
      qaNumber: this.qaNumber++,
      question: "Women attended the sabha and vidatha in Rig Vedic times. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Not only that women could attend assemblies, but also they could offer sacrifices along with their husbands.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The priest who assisted king in the day-to-day administration during Rig Vedic times was called _____?",
      answer: "Purohita.",
      description: "<ul>\n      <li>The two priests who played major part in the time of Rig Veda are Vasishtha and Vishvamitra.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who composed the Gayatri mantra?",
      answer: "Vishvamitra.",
      description: "<ul>\n      <li>The Gayatri Mantra, a highly revered mantra from the Rig Veda, is also known as the Savitri Mantra.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "During the Rig Vedic period, the one who commanded the army was called _____?",
      answer: "Senani."
    }, {
      qaNumber: this.qaNumber++,
      question: "The voluntary offerings from the Rig Vedic people, which probably was received by the chiefs, was called _____?",
      answer: "Bali."
    }, {
      qaNumber: this.qaNumber++,
      question: "During the Rig Vedic period, the officer who enjoyed authority over a large land or pasture ground \n      was called _____?",
      answer: "Vrajapati.",
      description: "<ul>\n      <li>He led heads of the families called Kulapas, or the heads of the fighting hordes called Gramanis, to battle.</li>\n      <li>In the beginning, the gramani was just the head of a small tribal fighting unit. But when the unit settled, \n      the gramani became the head of the village, and in course of time he became identical with the vrajapati.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "During the Rig Vedic period, people gave their primary loyalty to the tribe, which was called _____?",
      answer: "Jana.",
      description: "<ul>\n      <li>Another important term for the tribe is vis.</li>\n      <li>Kinship was the basis of social structure, and a man was identified by the clan to which he belonged, as can be seen in the \n      names of several Rig Vedic kings.</li>\n      <li>The term jana occurs at about 275 places in the Rig Veda, and the term janapada or territory is not used even once.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "When the Rig Vedic gramas clashed with one another, it caused _____ or war?",
      answer: "Samgrama.",
      description: "<ul>\n      <li>Gramas probably were the smaller units of vis or tribe, meant for fighting.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "There are some indications of polyandry in Rig Vedic period. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Rodasi is stated to be the consort of the Maruts, and the 2 Asvin brothers are represented as living with Surya, \n      the daughter of the sun god.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Shudras, a division of the tribal society, seems to have appeared towards the end of the Rig Vedic \n      period, because it is mentioned for the first in which mandala or book of the Rig Veda?",
      answer: "10th.",
      description: "<ul>\n      <li>10th mandala is the latest addition to the Rig Veda.</li>\n      <li>During Rig Vedic period, differentiation based on occupations had started.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "During the Rig Vedic period, _____ was considered to be the fire god?",
      answer: "Agni."
    }, {
      qaNumber: this.qaNumber++,
      question: "During the Rig Vedic period, _____ was considered to be the water god?",
      answer: "Varuna.",
      description: "<ul>\n      <li>Varuna was also supposed to uphold the natural order.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "During the Rig Vedic period, _____ was considered to be the god of plants?",
      answer: "Soma.",
      description: "<ul>\n      <li>An intoxicating drink is named after him.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "During the Rig Vedic period, _____ personified the storm?",
      answer: "Maruts."
    }, {
      qaNumber: this.qaNumber++,
      question: "The collections of the Vedic hymns or mantras were known as the _____?",
      answer: "Samhitas.",
      description: "<ul>\n      <li>The Rig Veda Samhita is the oldest Vedic text.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "For the purpose of recitation, the prayers of the Rig Veda were set to tune, and this modified collection \n      is known as the _____ Samhita?",
      answer: "Sama Veda Samhita."
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ Samhita contains not only hymns but also rituals which have to accompany their recitation?",
      answer: "Yajur Veda Samhita."
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ Samhita contains charms and spells to ward off evils and diseases?",
      answer: "Atharva Veda Samhita."
    }, {
      qaNumber: this.qaNumber++,
      question: "Compilation of the Vedic Samhitas were followed by the composition of a series of texts known as the _____ which are \n      full of ritualistic formulae and explain the social and religious meaning of rituals?",
      answer: "Brahmanas."
    }, {
      qaNumber: this.qaNumber++,
      question: "Around 1,000 B.C., iron appears in _____ district in Karnataka?",
      answer: "Dharwar.",
      description: "<ul>\n      <li>How it spread from here is not clear.</li>\n      <li>From the same time onwards, iron was used in the Gandhara area in Pakistan.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Iron is called _____ or _____ in the later Vedic texts?",
      answer: "Shyama or Krishna ayas."
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____ Brahmana speaks at length about the ploughing rituals?",
      answer: "Shatapatha Brahmana."
    }, {
      qaNumber: this.qaNumber++,
      question: "Rice is called _____ in the Vedic texts?",
      answer: "Vrihi.",
      description: "<ul>\n      <li>The use of rice is recommended in Vedic rituals, but that of  wheat only rarely.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The _____, considered to be the hallmark of the early Iron age in northern India, is a distinctive kind of pottery, \n      which is largely wheel-thrown, smooth, ash-grey in colour, and often painted with linear, dotted or circular patterns in a black pigment?",
      answer: "Painted Grey Ware (PGW).",
      description: "<ul>\n      <li>Analysis of PGW recovered suggest their time period to be around 1,000 B.C to 500 B.C.</li>\n      <li>People of PGW sites used iron weapons.</li>\n      <li>Copper objects have also been found in PGW sites.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Although the term 'nagara' is used in later Vedic texts, we can trace only the faint beginnings of towns towards the \n      end of the later Vedic period. State true or false?",
      answer: "True."
    }, {
      qaNumber: this.qaNumber++,
      question: "In later Vedic period, women were no longer permitted to sit on the sabha. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>In later Vedic peorid, sabha came to be dominated by nobles and brahmanas.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In the later vedic period, only the 3 higher varnas (brahmanas, rajanyas or kshatriyas, and vaishyas) were entitled to \n      _____ or investiture with the sacred thread according to the Vedic mantras?",
      answer: "Upanayana.",
      description: "<ul>\n      <li>Shudras (4th varna) were deprived of the sacred thread ceremony and the recitation of the gayatri mantra.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The institution of gotra appeared in the later vedic times. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Literally, gotra means the cow-pen or the place where cattle belonging to the whole clan are kept, but in course of time \n      it signified descent from a common ancestor.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Signs of idolatry appear in the later Vedic times. State true or false?",
      answer: "True.",
      description: "<ul>\n      <li>Some objects began to be worshipped as symbols of divinity.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VedicAgeQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_VedicAgeQAComponent = VedicAgeQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(VedicAgeQAComponent, "\u0275fac", function VedicAgeQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VedicAgeQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(VedicAgeQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _VedicAgeQAComponent,
  selectors: [["app-aryans-and-rig-veda-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function VedicAgeQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.aryansAndRigVedaQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 2780
/*!*************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/history-qa.component.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryQAComponent: () => (/* binding */ HistoryQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _HistoryQAComponent;


var HistoryQAComponent = /*#__PURE__*/function () {
  function HistoryQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HistoryQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "History");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "historyQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Ancient Indian History QA",
      wbRoute: '/HistoryQA/AncientIndianHistoryQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Modern Indian History QA",
      wbRoute: '/HistoryQA/ModernIndianHistoryQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Kerala History QA",
      wbRoute: '/HistoryQA/KeralaHistoryQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HistoryQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_HistoryQAComponent = HistoryQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(HistoryQAComponent, "\u0275fac", function HistoryQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HistoryQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(HistoryQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _HistoryQAComponent,
  selectors: [["app-history-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function HistoryQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.historyQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7716
/*!**************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/kerala-history-qa/kerala-history-qa.component.ts ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeralaHistoryQAComponent: () => (/* binding */ KeralaHistoryQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _KeralaHistoryQAComponent;


var KeralaHistoryQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function KeralaHistoryQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, KeralaHistoryQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Kerala History");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "keralaHistoryQAWbList", [{
    wbNumber: this.wbNumber++,
    wbName: "Travancore History",
    wbRoute: '/HistoryQA/KeralaHistoryQA/TravancoreHistoryQA'
  }]);
});
_KeralaHistoryQAComponent = KeralaHistoryQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(KeralaHistoryQAComponent, "\u0275fac", function KeralaHistoryQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _KeralaHistoryQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(KeralaHistoryQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _KeralaHistoryQAComponent,
  selectors: [["app-kerala-history-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function KeralaHistoryQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.keralaHistoryQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 8547
/*!****************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/kerala-history-qa/travancore-history-qa/travancore-history-qa.component.ts ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravancoreHistoryQAComponent: () => (/* binding */ TravancoreHistoryQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _TravancoreHistoryQAComponent;


var TravancoreHistoryQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TravancoreHistoryQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TravancoreHistoryQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Travancore History");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "travancoreHistoryQAs", [{
    qaNumber: this.qaNumber++,
    question: "What is the geographical and historical significance of the Kingdom of Travancore?",
    answer: "The Kingdom of Travancore, historically known as the Thiruvithamkoor Kingdom, represents one of \n        the most critical socio-political entities in the history of the Indian subcontinent. Emerging from the \n        fragmented medieval principality of Venad, the Kingdom of Travancore lasted as a centralized, modernized \n        sovereign state from 1729 until its integration into the Indian Union in 1949. Geographically, at its zenith, \n        the kingdom encompassed the vast expanse of modern-day southern and central Kerala\u2014covering the districts of \n        Thiruvananthapuram, Kollam, Pathanamthitta, Alappuzha, Kottayam, Idukki, and major portions of Ernakulam\u2014as \n        well as the southernmost extremities of modern Tamil Nadu, specifically the Kanyakumari district and parts of \n        Tenkasi.  \n        <br>\n        The state served as the primary crucible for Kerala's modern socio-economic and political architecture. The \n        timeline spanning from Anizham Thirunal Marthanda Varma to Sree Chithira Thirunal Balarama Varma is not merely \n        a chronological sequence of monarchs; it is the definitive blueprint of Kerala's transition from a rigid, feudal, \n        and caste-bound society into a progressive, highly literate, and democratically conscious state. This era \n        witnessed the earliest instances of organized anti-colonial resistance in India, the systematic dismantling of \n        the agrarian feudal structure, pioneering state-sponsored educational initiatives, and some of the most profound \n        anti-caste social reform movements in global history. Kingdom of Travancore defined foundational administrative, \n        judicial, and cultural frameworks that define modern Kerala.",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "?",
    answer: ".",
    description: "<ul>\n        <li>.</li>\n        </ul>"
  }]);
});
_TravancoreHistoryQAComponent = TravancoreHistoryQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TravancoreHistoryQAComponent, "\u0275fac", function TravancoreHistoryQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TravancoreHistoryQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TravancoreHistoryQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _TravancoreHistoryQAComponent,
  selectors: [["app-travancore-history-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function TravancoreHistoryQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.travancoreHistoryQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 2064
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/modern-indian-history-qa/eighteenth-century-india-qa/eighteenth-century-india-qa.component.ts ***!
  \***********************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EighteenthCenturyIndiaQAComponent: () => (/* binding */ EighteenthCenturyIndiaQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _EighteenthCenturyIndiaQAComponent;


var EighteenthCenturyIndiaQAComponent = /*#__PURE__*/function () {
  function EighteenthCenturyIndiaQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EighteenthCenturyIndiaQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Eighteenth Century India");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "eighteenthCenturyIndiaQAs", [{
      qaNumber: this.qaNumber++,
      question: "Mughal emperor Aurangzeb died in the year _____ ?",
      answer: "1707.",
      description: "<ul>\n      <li>Aurangzeb died on 1707 March 3.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "On Aurangzeb's death, his 3 sons fought among themselves for the throne \n      and _____ emerged victorious?",
      answer: "Bahadur Shah.",
      description: "<ul>\n        <li>Bahadur Shah died in Lahore on 1712 February 27.</li>\n        <li>He was the only Mughal Emperor who used the title of Sayyid. His full name \n        was 'Abul-nasr Sayyid Qutb-ud-din Muhammad Shah Alam Bahadur Shah Badshah'.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In 1679 _____ reintroduced the jizyah, a poll tax for non-Muslims that had been \n      abolished by Akbar the Great a century earlier?",
      answer: "Aurangzeb."
    }, {
      qaNumber: this.qaNumber++,
      question: "Under _____ system, encouraged by Jahandar Shah (1712-1713), Government contracted \n      with revenue farmers and middlemen to pay the government a fixed amount of money while they \n      were left free to collect whatever they could from the peasant?",
      answer: "Ijarah or revenue-farming.",
      description: "\n      <ul>\n        <li>As per this system, when peasants lacked the means to cultivate their land or cultivation \n        was impossible due to some calamity, the lands were farmed out on ijarah to a third party \n        known as revenue farmers.</li>\n        <li>This led to the increased oppression of the peasant.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Jahandar Shah's reign came to an end in 1713 January when he was defeated at Agra \n      by Farrukh Siyar, with the help of Sayyid brothers, _____ and _____ ?",
      answer: "Abdullah Khan and Hussain Ali Khan.",
      description: "<ul>\n        <li>After the victory, Abdullah Khan was appointed Wazir and Hussain Ali Khan was appointed \n        Mir Bakshi.</li>\n        <li>They are known in Indian history as 'King makers'.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ was a tax or tribute imposed nominally at 25% on revenue or produce, by the \n      Maratha Empire?",
      answer: "Chauth.",
      description: "<ul>\n       <li>The name was derived from the Sanskrit word meaning \u201Cone-fourth\u201D.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: " In 1739, the Persian King _____ defeated the Mughal ruler Muhammad Shah in the \n      Battle of Karnal?",
      answer: "Nadir Shah.",
      description: "<ul>\n        <li>Nadir Shah carried away the famous Koh-i-Noor diamond and the jewel studded Peacock Throne \n        of Shahjahan.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Third Battle of Panipat took place in 1761, at Panipat, between a northern \n      expeditionary force of the Maratha Empire and a coalition of the King of Afghanistan, _____ \n      with two Indian Muslim allies\u2014the Rohilla Afghans of the Doab, and Shuja-ud-Daula, the Nawab of Oudh?",
      answer: "Ahmad Shah Durrani (also known as Ahmad Shah Abdali)."
    }, {
      qaNumber: this.qaNumber++,
      question: "Battle of Buxar was fought in the year _____, between the English Forces led by Hector Munro, \n      and a joint army of Shuja-ud-Daula, the Nawab of Oudh, Mir Qasim, the Nawab of Bengal, and Shah Alam II, \n      the Mughal Emperor?",
      answer: "1764.",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The battle of Buxar ended with the Treaty of _____ in 1765?",
      answer: "Treaty of Allahabad."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ signed the treaties of Allahabad with Shuja-Ud-Daulah and Shah Alam-II after winning \n      the battle of Buxar?",
      answer: "Robert Clive."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ established  a modern arsenal in Dindigal in 1755 with the help of French experts?",
      answer: "Haidar Ali."
    }, {
      qaNumber: this.qaNumber++,
      question: "Tipu Sultan planted 'Tree of Liberty' at ______?",
      answer: "Srirangapatnam."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ founded the city of Jaipur?",
      answer: "Maharaja Sawai Jai Singh II."
    }, {
      qaNumber: this.qaNumber++,
      question: "Maharaja Sawai Jai Singh II compiled planetary tables entitled _____ to enable people \n      to make astronomical observations?",
      answer: "Zij-i Muhammad Shahi.",
      description: "<ul>\n        <li>He had Euclid's \"Elements of Geometry\" translated into Sanskrit as also several works on \n        Trigonometry, and Napier's work on the construction and use of logarithms.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Tayaumanavar (1706-44) was one of the best exponents of _____ poetry in Tamil?",
      answer: "Sittar poetry."
    }, {
      qaNumber: this.qaNumber++,
      question: "Heer Ranjha, the famous romantic epic in Punjabi was composed in the 18th century \n      by _____ ?",
      answer: "Waris Shah."
    }, {
      qaNumber: this.qaNumber++,
      question: "During 18th century, _____ composed his famous collection of poems, 'Risalo', \n      which is considered as the greatest classic of Sindhi literature?",
      answer: "Shah Abdul Latif."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EighteenthCenturyIndiaQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_EighteenthCenturyIndiaQAComponent = EighteenthCenturyIndiaQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EighteenthCenturyIndiaQAComponent, "\u0275fac", function EighteenthCenturyIndiaQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EighteenthCenturyIndiaQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EighteenthCenturyIndiaQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _EighteenthCenturyIndiaQAComponent,
  selectors: [["app-eighteenth-century-india-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function EighteenthCenturyIndiaQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.eighteenthCenturyIndiaQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 420
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/modern-indian-history-qa/european-penetration-and-conquest-qa/european-penetration-and-conquest-qa.component.ts ***!
  \*****************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EuropeanPenetrationAndConquestQAComponent: () => (/* binding */ EuropeanPenetrationAndConquestQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _EuropeanPenetrationAndConquestQAComponent;


var EuropeanPenetrationAndConquestQAComponent = /*#__PURE__*/function () {
  function EuropeanPenetrationAndConquestQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EuropeanPenetrationAndConquestQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "European Penetration And The Conquest Of India");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "europeanPenetrationAndConquestQAs", [{
      qaNumber: this.qaNumber++,
      question: "The old trading routes between the East and the West came under Turkish control \n      after the Ottoman conquest of Asia Minor and the capture of Constantinople in the year _____ ?",
      answer: "1453."
    }, {
      qaNumber: this.qaNumber++,
      question: "In 1492, _____ of Spain set out to reach India and dircovered America instead?",
      answer: "Columbus."
    }, {
      qaNumber: this.qaNumber++,
      question: "In 1498, _____ of Portugal discovered a new and all-sea route from Europe to India?",
      answer: "Vasco da Gama."
    }, {
      qaNumber: this.qaNumber++,
      question: "Vasco da Gama sailed Africa via the Cape of Good Hope and reached _____ ?",
      answer: "Calicut."
    }, {
      qaNumber: this.qaNumber++,
      question: "The three-legged trade in which the merchant ships carried manufactured goods from \n      Europe to Africa, exchanged them on the coast of Africa for Negroes, took these slaves across \n      the Atlantic and exchanged them them for the colonial produce of plantations or mines, and \n      finally brought back and sold this produce in Europe is popularly known as _____ ?",
      answer: "Triangular trade (also the transatlantic slave trade).",
      description: "<ul>\n        <li>A great deal of West European and North American prosperity was based on the slave trade \n        and the plantations worked by slave labour.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Under the viceroyalty of _____, who captured Goa in 1510, the Portuguese established \n      their domination over the entire Asian coast from Hormuz in the Persian Gulf to Malacca in \n      Malaya and the Spice Islands in Indonesia?",
      answer: "Afonso de Albuquerque.",
      description: "<ul>\n        <li>In India, Portuguese established trading settlements at Cochin, Goa, Diu, and Daman.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In the later half of the 16th century, after fierce struggle for building empire in \n      the East, _____ gained control over Indonesia and the British over India, Sri Lanka, and Malaya?",
      answer: "Dutch."
    }, {
      qaNumber: this.qaNumber++,
      question: "Dutch East India company was formed in the year _____ ?",
      answer: "1602.",
      description: "<ul>\n        <li>The Dutch States General - the Dutch Parliament - gave it a charter empowering it to \n        make war, conclude treaties, acquire territories, and build fortresses.</li>\n        <li>They established trading depots at\n          <ul>\n            <li>Surat, Broach, Cambay, and Ahmedabad in Gujarat.</li>\n            <li>Cochin in Kerala.</li>\n            <li>Nagapattinam in Madras.</li>\n            <li>Masulipatnam in Andhra.</li>\n            <li>Chinsura in Bengal.</li>\n            <li>Patna in Bihar.</li>\n            <li>Agra in Uttar Pradesh.</li>\n          </ul>\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "An English association or company to trade with the East, popularly known as the \n      East India Company, was formed in the year _____ ?",
      answer: "1599.",
      description: "<ul>\n        <li>The East India Company was formed in 1599 under the auspices of a group of merchants \n        known as the Merchant Adventurers.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The English East India Company was granted a royal charter and the exclusive privilage \n      to trade in the East by _____ on 1600 December 31?",
      answer: "Queen Elizabeth.",
      description: "<ul>\n        <li>The Charter of 1600 granted the East India Company the exclusive privilege of trading \n        east of the Cape of Good Hope for a period of 15 years.\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In 1608, the English East India Company decided to open a 'factory' (trading depot) \n      at Surat on the west coast of India and sent _____ to Jahangir's court to obtain royal favours?",
      answer: "Captain Hawkins.",
      description: "<ul>\n        <li>Consequently, the English Company was given permission by a royal farman to open \n        factories at several places on the west coast.\n        </li>\n        <li>In 1615, Sir Thomas Roe succeeded in getting an imperial farman to trade and establish \n        factories in all parts of the Mughal Empire.\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "In 1662, the Portuguese gave the island of _____ to King Charles II of England \n      as dowry for marrying a Portuguese princess?",
      answer: "Bombay.",
      description: "<ul>\n        <li> The island of Bombay was acquired by the East India Company from the British government \n        in 1668.\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The English opened their first 'factory' (trading depot) in the south at _____ \n      in 1611?",
      answer: "Masulipatnam."
    }, {
      qaNumber: this.qaNumber++,
      question: "The French East India Company was founded in the year ____ ?",
      answer: "1664."
    }, {
      qaNumber: this.qaNumber++,
      question: "Battle of _____ was fought on 22 January 1760 between the army of the British East \n      India Company, commanded by Colonel Eyre Coote (1726-83) and the French, commanded by Thomas \n      Arthur, comte de Lally, Baron de Tollendal (1702-66), resulting in a British victory?",
      answer: "Battle of Wandiwash.",
      description: "<ul>\n        <li>This battle established Britain as the paramount European power in India and the path \n        was cleared for the establishment of a British colonial rule in India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n        <li></li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EuropeanPenetrationAndConquestQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_EuropeanPenetrationAndConquestQAComponent = EuropeanPenetrationAndConquestQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EuropeanPenetrationAndConquestQAComponent, "\u0275fac", function EuropeanPenetrationAndConquestQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EuropeanPenetrationAndConquestQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EuropeanPenetrationAndConquestQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _EuropeanPenetrationAndConquestQAComponent,
  selectors: [["app-european-penetration-and-conquest-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function EuropeanPenetrationAndConquestQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.europeanPenetrationAndConquestQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 1080
/*!****************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/history-qa/modern-indian-history-qa/modern-indian-history-qa.component.ts ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModernIndianHistoryQAComponent: () => (/* binding */ ModernIndianHistoryQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _ModernIndianHistoryQAComponent;


var ModernIndianHistoryQAComponent = /*#__PURE__*/function () {
  function ModernIndianHistoryQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModernIndianHistoryQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Modern Indian History");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "modernIndianHistoryQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Eighteenth Century India",
      wbRoute: '/HistoryQA/ModernIndianHistoryQA/EighteenthCenturyIndiaQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "European Penetration And The Conquest Of India",
      wbRoute: '/HistoryQA/ModernIndianHistoryQA/EuropeanPenetrationAndConquestQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModernIndianHistoryQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_ModernIndianHistoryQAComponent = ModernIndianHistoryQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ModernIndianHistoryQAComponent, "\u0275fac", function ModernIndianHistoryQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModernIndianHistoryQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ModernIndianHistoryQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ModernIndianHistoryQAComponent,
  selectors: [["app-modern-indian-history-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function ModernIndianHistoryQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.modernIndianHistoryQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 5652
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/citizenship-qa/citizenship-qa.component.ts ***!
  \**********************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitizenshipQAComponent: () => (/* binding */ CitizenshipQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _CitizenshipQAComponent;


var CitizenshipQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CitizenshipQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CitizenshipQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Citizenship");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "citizenshipQAs", [{
    qaNumber: this.qaNumber++,
    question: "Which Part of the Indian Constitution deals with \n      Citizenship?",
    answer: "Part II.",
    description: "<ul>\n      <li>Article 5 to 11.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "From where did India adopt the idea of single citizenship?",
    answer: "Britain."
  }, {
    qaNumber: this.qaNumber++,
    question: "In which year did Parliament enact the Citizenship Act?",
    answer: "1955.",
    description: "<ul>\n      <li>Only the Parliament can make provisions relating to citizenship.</li>\n      <li>Only the citizens of India have the right to vote in Parliamentary \n      and Assembly elections.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "According to the Citizenship Act 1955, by how many ways \n      can a person acquire Indian Citizenship?",
    answer: "5.",
    description: "<ol>\n      <li>By Birth.</li>\n      <li>By Descent.</li>\n      <li>By Registration.</li>\n      <li>By Naturalisation.</li>\n      <li>By Incorporation of Territory.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "According to the Citizenship Act 1955, by how many ways \n      can a person lose Indian Citizenship?",
    answer: "3.",
    description: "<ol>\n      <li>By Renunciation: Voluntarily giving up citizenship.</li>\n      <li>By Termination: Indian government revokes citizenship for \n      reasons like obtaining it through fraud, disloyalty to the \n      Constitution, or certain criminal activities.</li>\n      <li>By Deprivation: Automatic loss of citizenship in specific \n      situations like if someone is imprisoned abroad for two years within \n      five years of registration/naturalization of their citizenship.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who all cannot have OCI (Overseas Citizen of India) status?",
    answer: "<ol>\n      <li>Anyone who has ever been a citizen of Pakistan or Bangladesh.</li>\n      <li>Anyone whose parents or grand parents were citizens of Afghanistan, \n      Pakistan, Bangladesh, China, or Sri Lanka.</li>\n      <li>Anyone who served in a foreign defence department.</li>\n      </ol>",
    description: "Benefits of OCI status includes:\n      <ul>\n      <li>Life long multiple entry Visa to India.</li>\n      <li>OCI card holder never have to report to the FRRO (Foreigners \n      Regional Registration Officer) regardless of the length of their \n      stay.</li>\n      <li>They can eventually become a citizen of India, if they remain \n      an OCI for 5 years and live in India for at least 1 year.</li>\n      <li>They can use special counters during immigration.</li>\n      <li>They don't need a student Visa to study in India.</li>\n      <li>They don't need an employment Visa to get a private job.</li>\n      <li>OCI card holder shall be treated at par with resident Indian \n      nationals in the matter of tariffs in air fares in domestic sectors \n      in India.</li>\n      <li>They can open a special bank account in India.</li>\n      <li>They can make investments in India.</li>\n      <li>They can buy non farm property and exercise property ownership \n      rights.</li>\n      <li>They can use their OCI card to apply for a driver's license, \n      open a bank account, or get a PAN card.</li>\n      <li>They can get the same economic, financial, and educational \n      benefits as NRIs, and they can adopt children like an NRI.</li>\n      <li>They can pay the Indian resident fee when visiting national parks, monuments, museum, \n      or wild life sanctuary.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the rights and privileges conferred only to Indian Citizens?",
    answer: "<ol>\n      <li>Right against discrimination on grounds of religion, race, caste,\n      sex or place of birth (Article 15).</li>\n      <li>Right to equality of opportunity in matters of public employment (Article 16).</li>\n      <li>Right to freedom of speech & expression, assembly, association, movement, residence, and \n      profession (Article 19).</li>\n      <li>Right to protection of interests of minorities (Article 29).</li>\n      <li>Right of minorities to establish and administer educational\n      institutions (Article 30).</li>\n      <li>Right to vote in elections to the Loksabha and State Legislative assemblies.</li>\n      <li>Right to contest for the membership of the Parliament and State legislatures.</li>\n      <li>Eligibility to hold certain public offices, i.e., President of India, Vice-President \n      of India, Judges of Supreme Court and High Courts, Governors of States, Attorney General of India,\n      and Advocate General of States.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "In 2000 September, the Government of India set up a high level committee of the Indian diaspora \n      under whose chairmanship?",
    answer: "LM Singhvi."
  }, {
    qaNumber: this.qaNumber++,
    question: "The PIO (Person of Indian Origin) card scheme was introduced on ______?",
    answer: "19 August 2002."
  }, {
    qaNumber: this.qaNumber++,
    question: "The OCI (Overseas Citizenship of India) card scheme was made operational from which date?",
    answer: "2 December 2005.",
    description: "<ul>\n      <li>PIO card holders were deemed to be OCI card holders with effect from 9th January 2015.</li>\n      </ul>"
  }]);
});
_CitizenshipQAComponent = CitizenshipQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CitizenshipQAComponent, "\u0275fac", function CitizenshipQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CitizenshipQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CitizenshipQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _CitizenshipQAComponent,
  selectors: [["app-citizenship-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function CitizenshipQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.citizenshipQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 6560
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/constitutional-history-qa/constitutional-history-qa.component.ts ***!
  \********************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConstitutionalHistoryQAComponent: () => (/* binding */ ConstitutionalHistoryQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _ConstitutionalHistoryQAComponent;


var ConstitutionalHistoryQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ConstitutionalHistoryQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ConstitutionalHistoryQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Constitutional History");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "constitutionalHistoryQAs", [{
    qaNumber: this.qaNumber++,
    question: "Which was the first law passed by the British Parliament for India?",
    answer: "Regulating Act, 1773.",
    description: "<ul>\n      <li>Regulating Act, 1773 was the first step taken by the British Government to control \n      the affairs of the British East India Company in India.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which was the last law passed by the British Parliament for India?",
    answer: "Indian Independence Act, 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act laid the foundation for a Central administration in India?",
    answer: "Regulating Act, 1773."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Regulating Act, 1773, changed the post of <i>Governor</i> of Bengal to \n      ______ of Bengal?",
    answer: "Governor General of Bengal."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the first Governor General of Bengal?",
    answer: "Warren Hastings."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Regulating Act, 1773, created an executive council containing ______ number \n      of members to assist the Governor General?",
    answer: "4."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Regulating Act, 1773, provided for the establishment of a Supreme Court \n      at ______?",
    answer: "Calcutta."
  }, {
    qaNumber: this.qaNumber++,
    question: "Calcutta Supreme Court came into being in the year ______?",
    answer: "1774.",
    description: "<ul>\n      <li>It comprised of 1 Chief Justice and 3 other judges.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the first Chief Justice of Calcuatta Supreme Court?",
    answer: "Sir Elija Impey."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Regulating Act, 1773?",
    answer: "<ul>\n      <li>It was the first step taken by the British Government to control the affairs of the \n      British East India Company in India.</li>\n      <li>The Act laid the foundation for a Central administration in India.</li>\n      <li>The Act changed the post of <i>Governor of Bengal</i> to <i>Governor General of \n      Bengal</i>.</li>\n      <li>The Act created an executive council containing 4 members to assist the Governor \n      General.</li>\n      <li>The Act provided for the establishment of a Supreme Court at Culcatta.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "After the eneactment of which act did the East India Company's territories \n      in India were for the first time called the British possessions in India?",
    answer: "Pitts India Act, 1784."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act has given the British Government supreme control over East India \n      company's affairs and its administration in India?",
    answer: "Pitts India Act, 1784."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Pitts India Act, 1784?",
    answer: "<ul>\n      <li>Pitts Indian Act was passed to rectify the defects of the Regulating Act, 1773.</li>\n      <li>After the enactment of the Act, East India Company's territories in India were for \n      the first time called the British possessions in India.</li>\n      <li>The Act had given the British Government supreme control over East India company's \n      affairs and its administration in India.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Charter Act of 1793?",
    answer: "<ul>\n      <li>The Act renewed the charter issued to the British East India Company to a further \n      period of 20 years.</li>\n      <li>Royal approval was mandated for the appointment of the Governor General, the Governors, \n      and the commander-in-chief.</li>\n      <li>The civil and criminal justice system was reorganized by the regulations of the \n      Charter Act of 1793.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Charter Act of 1813 abolished the English East India Company's commercial \n      monopoly, except for the ______ ?",
    answer: "Tea and opinum trade with China."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Charter Act of 1813 provided for a financial grant towards the revival of \n      __(1)__ and promotion of __(2)__?",
    answer: "<ol>\n      <li>Indian literature.</li>\n      <li>Science.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The charter Act of 1813 permitted christian missionaries to ______?",
    answer: "Propagate English and preach their religion."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Charter Act of 1813?",
    answer: "<ul>\n      <li>The Charter Act of 1813 renewed the East India Company's charter for another 20 years.</li>\n      <li>.The company's commercial monopoly was abolished, except for the tea and opium tradewith \n      China.</li>\n      <li>It asserted the sovereignty of the British crown over the Indian territories held by the \n      company.</li>\n      <li>The charter Act of 1813 permitted christian missionaries to propagate English and preach \n      their religion.</li>\n      <li>It empowered the local governments to tax people subject to the Jurisdiction of the \n      Supreme Court.</li>\n      <li>The company's dividend was fixed at 10.5%.</li>\n      <li>The Act provided for a financial grant towards the revival of Indian literature and the \n      promotion of science.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "As per the provisions of which Act did Governor General of Bengal became the \n      Governor General of India?",
    answer: "Charter Act of 1833."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the first Governor General of British India?",
    answer: "William Bentinck."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Charter Act of 1833?",
    answer: "<ul>\n      <li>Charter Act of 1833 was the final step towards centralisation in British India.</li>\n      <li>Governor General of Bengal became the Governor General of India.</li>\n      <li>The Governor-General of India was given executive and legislative powers for the entire \n      British India.</li>\n      <li>It ended the activities of the East India Company as a commercial body. It became a \n      purely administrative body.</li>\n      <li>The Charter Act of 1833 introduced a system of nomination to Indian Civil Service.</li>\n      <li>It stated that the Indians should not be debarred from holding any office under the \n      company. However this provision was invalidated because of the opposition from the Court \n      of Directors.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act introduced a system of open competition for recruitment of civil \n      servants?",
    answer: "Charter Act of 1853."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act introduced, for the first time, local representation in the Central \n      Legislative Council?",
    answer: "Charter Act of 1853."
  }, {
    qaNumber: this.qaNumber++,
    question: "Committee on the Indian Civil Service is also known as ______?",
    answer: "The Macaulay Committee."
  }, {
    qaNumber: this.qaNumber++,
    question: "Committee on the Indian Civil Service was appointed in which year?",
    answer: "1854."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Charter Act of 1853?",
    answer: "<ul>\n      <li>This was the last of Charter Acts passed by the British Parliament.</li>\n      <li>It separated for the first time, the legislative and executive functions of the \n      Governor General's Council.</li>\n      <li>It established a separate Governor General's executive council which came to be known \n      as the Indian Legislative Council.</li>\n      <li>It introduced a system of open competition for recruitment of civil servants. The \n      higher civil service was thus thrown open to the Indians also.</li>\n      <li>It introduced, for the first time, local representation in the Central Legislative \n      Council.</li>\n      </ul>",
    description: ""
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the first Indian to become an Indian Civil Service (ICS) officer in \n      1863?",
    answer: "Satyendranath Tagore."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the father of \u201CCivil Services\u201D in India?",
    answer: "Charles Cornwallis (Lord Cornwallis)."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Government of India Act, 1858 was followed by Queen's Proclamation which \n      was made on ______?",
    answer: "1st November 1858."
  }, {
    qaNumber: this.qaNumber++,
    question: "Government of India Act 1858 changed the designation of Governor General of \n      India to the ______ ?",
    answer: "Viceroy of India."
  }, {
    qaNumber: this.qaNumber++,
    question: "______ was the last Governor General and the first Viceroy of British India?",
    answer: "Lord Canning."
  }, {
    qaNumber: this.qaNumber++,
    question: "Queen's Proclamation was read out by Lord Canning at a durbar held at ______?",
    answer: "Allahabad."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Government of India Act 1858?",
    answer: "<ul>\n      <li>Government of India Act 1858 was enacted in the wake of the First War of Indian \n      Independence 1857.</li>\n      <li>Government of India Act 1858 is otherwise known as the Act for the Better Government \n      of India.</li>\n      <li>The Government of India Act, 1858 was followed by Queen's Proclamation which was made \n      on 1st November 1858.</li>\n      <li>This proclamation was read out by Lord Canning at a durbar held in Allahabad.</li>\n      <li>This proclamation is otherwise known as the Magnacarta of the people of India.</li>\n      <li>It abolished the East India Company and transferred the powers of government \n      territories and revenues to the British Crown.</li>\n      <li>It changed the designation of Governor General of India to the Viceroy of India.</li>\n      <li>It ended the system of double government by abolishing the Board of Control and Court \n      of Directors.</li>\n      <li>It created a new office called Secretary of State for India. He had the full authority \n      and control over Indian administration.</li>\n      <li>It established a 15 member council of India to assist the Secretary of State. The \n      Secretary of State was the Chairman of the council.</li>\n      </ul>",
    description: ""
  }, {
    qaNumber: this.qaNumber++,
    question: "First Secretary of State for India ?",
    answer: "Edward Henry Stanley."
  }, {
    qaNumber: this.qaNumber++,
    question: "Last Secretary of State for India ?",
    answer: "William Francis Harre."
  }, {
    qaNumber: this.qaNumber++,
    question: "The longest serving secretary of State for India ?",
    answer: "George Hamilton."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who introduced the 'Portfolio' system in 1859?",
    answer: "Lord Canning.",
    description: "<ul>\n      <li>Indian Councils Act of 1861 gave recognition to the 'Portfolio' system introduced by \n      Lord Canning in 1859.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Name the Indians whom Lord Canning, the then Viceroy nominated to his \n      legislative council in 1862?",
    answer: "Raja of Banaras, Maharaja of Patiala and Sir Dinkar Rao."
  }, {
    qaNumber: this.qaNumber++,
    question: "Indian Councils Act of 1861 authorised Viceroy to issue ordinances during \n      emergencies for a maximum period of ______ months?",
    answer: "6 months."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Indian Councils Act of 1861?",
    answer: "<ul>\n      <li>It was the beginning of representative institutions in India by associating Indians \n      in the law making process.</li>\n      <li>Lord Canning, the then Viceroy nominated three Indians (Raja of Banaras, Maharaja of \n      Patiala and Sir Dinkar Rao) to his legislative council in 1862.</li>\n      <li>It initiated the process of decentralisation.</li>\n      <li>The Viceroy was authorised to issue ordinances during emergencies for a maximum period \n      of six months.</li>\n      <li>It gave recognition to the 'Portfolio' system introduced by Lord Canning in 1859.</li>\n      </ul>",
    description: ""
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act empowered legislative councils to discuss the budget and to address \n      the questions to the executive?",
    answer: "Indian Council Act 1892."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Indian Council Act 1892?",
    answer: "<ul>\n      <li>It increased the number of additional (non- official) members in the Central and \n      provincial legislative councils, but maintained the official majority in them.</li>\n      <li>It increased the functions of legislative councils and gave them the power to discuss \n      the budget and to address the questions to the executive.</li>\n      </ul>",
    description: ""
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act introduced a system of communal representation in India by accepting \n      the concept of separate electorate for Muslims?",
    answer: "Indian Council Act 1909."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the first Indian to become a member of the Viceroy's Executive Council \n      (1909)?",
    answer: "Satyendra Prasanna Sinha.",
    description: "<ul>\n      <li>He was appointed as the law member.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the father of Communal Electorate in India?",
    answer: "Lord Minto."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Indian Council Act 1909?",
    answer: "<ul>\n      <li>This Act is also known as Minto-Morley Reforms. Lord Minto was the then Viceroy and \n      Morley was the then Secretary of State for India.</li>\n      <li>It provided for the first time, for the association of Indians with the executive \n      councils of the Viceroy and Governors.</li>\n      <li>Satyendra Prasanna Sinha became the first Indian to become a member of the Viceroy's \n      Executive Council (1909). He was appointed as the law member.</li>\n      <li>It introduced a system of communal representation in India by accepting the concept of \n      separate electorate for Muslims.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act provided the right to vote for women in India?",
    answer: "Government of India Act 1919."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act introduced 'dyarchy' in provinces in India?",
    answer: "Government of India Act 1919.",
    description: "<ul>\n      <li>Government of India Act 1919 introduced 'dyarchy' in provinces by dividing the provincial \n      subjects into two parts, <i>transferred</i> and <i>reserved</i>.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act introduced for the first time bicameralism and direct elections in the \n      country?",
    answer: "Government of India Act 1919.",
    description: "<ul>\n      <li>The Act clearly defined the jurisdiction of the central and provincial governments.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "As per the Government of India Act 1919, out of the 6 members of the Viceroy's \n      executive council (except Commander-in Chief), how many members were to be Indian?",
    answer: "3."
  }, {
    qaNumber: this.qaNumber++,
    question: "Government of India Act 1919 extended the principle of communal representation by \n      providing separate electorates for __(1)__, __(2)__, __(3)__, and __(4)__?",
    answer: "Sikhs, Indian Christians, Anglo Indians and Europeans."
  }, {
    qaNumber: this.qaNumber++,
    question: "Government of India Act 1919 provided for the establishment of a public service \n      commission which was set up in the year ______ for recruiting civil servants?",
    answer: "1926."
  }, {
    qaNumber: this.qaNumber++,
    question: "The General Elections of the Central Legislative Assembly in the years __(1)__ \n      and __(2)__ were held under the Government of India Act, 1919?",
    answer: "1926 and 1945."
  }, {
    qaNumber: this.qaNumber++,
    question: "Government of India Act 1919 is popularly known known as ______?",
    answer: "Montague-Chelmsford Reforms.",
    description: "<ul>\n      <li>Montague was the Secretary of State for India and Chelmsford was the Viceroy of India.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of the Government of India Act 1919?",
    answer: "<ul>\n      <li>This Act is popularly known as the Montague-Chelmsford Reforms. Montague was the \n      Secretary of State for India and Chelmsford was the Viceroy of India.\n      .</li>\n      <li>This Act provided the right to vote for women in India.</li>\n      <li>It introduced 'dyarchy' in provinces by dividing the provincial subjects into two parts,      \n      transferred and reserved.</li>\n      <li>It introduced for the first time bicameralism and direct elections in the country. \n      The Act clearly defined the jurisdiction of the central and provincial governments.</li>\n      <li>Out of the 6 members of the Viceroy's executive council (except Commander-in Chief) 3 \n      were to be Indian members.</li>\n      <li>It extended the principle of communal representation by providing separate electorates \n      for Sikhs, Indian Christians, Anglo Indians and Europeans.</li>\n      <li>It provided for the Establishment of a public service commission which was set up in \n      1926 for recruiting civil servants.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Montague Chelmsford Reforms came into force in the year ______?",
    answer: "1921."
  }, {
    qaNumber: this.qaNumber++,
    question: "Simon Commission was formed in the year _____ to report on the condition of \n      India under its new constitution?",
    answer: "November 1927.",
    description: "<ul>\n      <li>It was an all white commission and no Indian was associated with it.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Simon Commission arrived in India on ______?",
    answer: "3rd February 1928.",
    description: "<ul>\n      <li>The Simon Commission was received with black flags, mass demonstrations, harthals and \n      slogans of simon go back.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "How many members were there in the Simon Commission?",
    answer: "7.",
    description: "<ul>\n      <li>The commission consisted of seven Englishmen.</li>\n      <li>Sir John Simon was its chairman.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which member of the Simon Commission later became the Prime Minister of \n      Britain?",
    answer: "Clement Attlee."
  }, {
    qaNumber: this.qaNumber++,
    question: "The slogan 'Simon go back' was raised by ______?",
    answer: "Yusuf Meherally."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who died after the police lathi charge on the activists, protesting against \n      the arrival of Simon Commission?",
    answer: "Lala Lajpath Rai."
  }, {
    qaNumber: this.qaNumber++,
    question: "What is the name of the police officer who suppressed the revolt against \n      Simon Commission?",
    answer: "General Sanderson."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which session of the Congress passed the resolution to boycott the \n      Simon Commission (1927)?",
    answer: "Madras Session.",
    description: "<ul>\n      <li>Dr. M.A. Ansari was the president of the Madras Congress session.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Simon Commission (1927) submitted its report on ______ ?",
    answer: "27th May 1930.",
    description: "<ul>\n      <li>The commission proposed a limited transfer of power in the provinces with many \n      restrictions.</li>\n      <li>The commission recommended the abolition of dyarchy and the setting up of \n      representative governments in the provinces and also establishment of a federation of \n      British India and princely states.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The main objective of ______ Committee of 1927 was to improve the \n      relationship between the Government of India and the Indian states?",
    answer: "Butler Committee."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the British Prime Minister who announced a scheme of representation \n      for minorities of British India, which came to be known as Communal Award?",
    answer: "Ramsay Mc Donald.",
    description: "<ul>\n      <li>It extended the system of separate electorates to the depressed classes.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "On which date did Ramsay Mc Donald announce Communal Award?",
    answer: "16th August 1932."
  }, {
    qaNumber: this.qaNumber++,
    question: "Gandhiji protested against the extension of communal representation to the \n      scheduled castes and undertook a fast unto death in which jail?",
    answer: "Yervada Jail, Pune."
  }, {
    qaNumber: this.qaNumber++,
    question: "To stop Gandhiji's fast unto death in protest against the Communal Award, \n      an agreement known as <b><i>Poona Pact</i></b> was signed between Gandhiji and ______?",
    answer: "Dr. B.R. Ambedkar.",
    description: "<ul>\n      <li>Madan Mohan Malavva signed on behalf of Gandhiji.</li>\n      <li>By this agreement, joint electorate was retained. But seats reserved to the depressed \n      classes were increased from 71 to 147 in provincial legislatures and 18 percent of the \n      total in the central legislature.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "What is known as the 'Blue Print' of Indian Constitution?",
    answer: "Government of India Act 1935.",
    description: "<ul>\n      <li>The Congress Committee did not agree to the proposals in the \"white paper\" issued \n      after the Third Round Table Conference in 1932. Based on these proposals the British\n      government introduced a bill in the British Parliament on 19 December 1934, which was \n      passed as the Government of India Act 1935.</li>\n      <li>The Act proposed a federal system consisting of two houses, council of states and \n      federal assembly. However the federation did not come into being as the Princely States \n      did not join.</li>\n      <li>The major structural part of the Constitution is derived from Government of India \n      Act 1935.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Government of India Act 1935 abolishod dvarchy in the provinces and \n      introduced ______ in its place?",
    answer: "Provincial autonomy.",
    description: "<ul>\n      <li>The Act introduced Dyarchy at the centre.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The first general election as per the Government of India Act 1935 was held in \n      the year ______?",
    answer: "1937.",
    description: "<ul>\n      <li>In the General Election held in 1937, Congress got the majority. But all the Congress \n      ministers resigned in 1939 as a protest against the decision of Britain to drag India into \n      the second world war.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Government of India Act 1935 proposed to establish a federal court, which \n      came into being on ______?",
    answer: "1st October 1937."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Federal Court established under the Government of India Act 1935 became \n      the Supreme Court of India on ______?",
    answer: "28 January 1950."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the Viceroy when the Government of India Act 1935 was passed?",
    answer: "Lord Willingdon."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the Viceroy when the Government of India Act 1935 was enforced in the \n      provinces in 1937?",
    answer: "Lord Linlithgow."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is the Chief Architect of Government of India Act 1935?",
    answer: "Sir Samuel Hoare."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act provided for the establishment of the Reserve Bank of India?",
    answer: "Government of India Act 1935."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Government of India Act 1935 divided the powers between the centre and \n      the units in terms of how many lists?",
    answer: "3 (Federal List, Provincial List, and the Concurrent List).",
    description: "<ul>\n      <li>Residuary powers were given to the Viceroy/ Governor General.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who described the Government of India Act 1935 as a \"Machine with strong brakes \n      but no engine?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which region was separated from India in 1937 as per the Government of India \n      Act 1935?",
    answer: "Burma."
  }, {
    qaNumber: this.qaNumber++,
    question: "\"Office of the governor\" feature of Indian Constitution was borrowed from ______?",
    answer: "The Government of India Act 1935."
  }, {
    qaNumber: this.qaNumber++,
    question: "The distribution of powers between the Centre and the States in the Indian \n      Constitution is based on the scheme provided in ______?",
    answer: "The Government of India Act, 1935."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the first Indian to put forward the idea of a Constitution for India in 1934?",
    answer: "M.N. Roy.",
    description: "<ul>\n      <li>He expressed it through his newspaper - Indian Patriot.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is the propounder of Peoples Plan?",
    answer: "M.N. Roy.",
    description: "<ul>\n      <li>He is the founding member of the Mexican Communist Party and the Communist Party of \n      India.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is the first General Secretary of Communist Party of India?",
    answer: "Puran Chand Joshi (PC Joshi)."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is first Indian to become a member of Communist International?",
    answer: "M.N. Roy."
  }, {
    qaNumber: this.qaNumber++,
    question: "Radical Democratic Party was founded by ______?",
    answer: "M.N. Roy."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Book \"India in Transition\" was written by ______?",
    answer: "M.N. Roy."
  }, {
    qaNumber: this.qaNumber++,
    question: " Real name of M.N Roy is ______?",
    answer: "Manabendra Nath Roy."
  }, {
    qaNumber: this.qaNumber++,
    question: "The book \"Gandhian Constitution of Free India' was authored by ______ in 1946?",
    answer: "Shriman Narayan Agarwal."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which was the first political party which raised the demand for a Constituent \n      Assembly to frame a constitution for India?",
    answer: "Swaraj party."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who are the two founders of Swaraj Party?",
    answer: "C.R. Das, and Motilal Nehru.",
    description: "<ul>\n      <li>Dissatisfied with the policies of Gandhiji, C.R Das and Motilal Nehru resigned \n      from Congress on 31 December 1922 and founded the new party on 1st January 1923.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is the first President of Swaraj Party?",
    answer: "C.R. Das."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is the first Secretary of Swaraj Party?",
    answer: "Motilal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "The first session of Swaraj Party was held at ______?",
    answer: "Allahabad."
  }, {
    qaNumber: this.qaNumber++,
    question: "The initial name of Swaraj Party was ______?",
    answer: "Congress Khilaphat Swarajya Party."
  }, {
    qaNumber: this.qaNumber++,
    question: "The programme of Swarajist was called ______?",
    answer: "Council Entry."
  }, {
    qaNumber: this.qaNumber++,
    question: "Swaraj party secured absolute majority in the election held in which year?",
    answer: "1923.",
    description: "<ul>\n      <li>Vithalbhai Patel became the President of the Central Legislative Assembly.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Congress session that passed the Poorna Swarajya Resolution is ______?",
    answer: "Lahore Session (1929).",
    description: "<ul>\n      <li>Jawaharlal Nehru was the President of the Lahore Session (1929).</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Congress session in which a resolution for fundamental rights was passed \n      is ______?",
    answer: "Karachi Session (1931).",
    description: "<ul>\n      <li>Sardar Vallabhbhai Patel was the President of the Karachi Session (1931).</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Congress session that passed a resolution to establish a socialistic \n      pattern for India is ______ ?",
    answer: "Awadi session (1955).",
    description: "<ul>\n      <li>U.N. Dhebar was the President of the Awadi session (1955).</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Swaraj party lost its influence after the death of C.R. Das in ______?",
    answer: "1925.",
    description: "<ul>\n      <li>Later the Swaraj Party merged with the Congress.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Indian National Congress for the first time, officially demanded a \n      Constituent Assembly to frame the Constitution of India in which year ?",
    answer: "1935."
  }, {
    qaNumber: this.qaNumber++,
    question: "A resolution regarding the demand for a Constituent Assembly was passed in \n      ______ session chaired by Jawaharlal Nehru in 1937?",
    answer: "Faizpur session.",
    description: "<ul>\n      <li>In 1938, Jawaharlal Nehru declared that the Constitution of free India must be \n      framed, without outside interference, by a Constituent Assembly elected on the basis \n      of adult franchise.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Accepting, in principle, the demand for a constituent assembly to frame a \n      constitution for India, British Viceroy of India announced what came to be called as \n      'August Offer' on which date?",
    answer: "8 August 1940.",
    description: "<ul>\n      <li>Key provisions of the August Offer:\n        <ol>      \n        <li>The Executive Council of the Viceroy would be expanded to include 10 Indians and \n        4 British members.</li>\n        <li>An advisory war council would be established, with 6 Indian and 3 British members.</li>\n        <li>The British government would recognize the right of Indians to frame their own \n        constitution, but only after the war.</li>\n        <li>The British government would give full weight to minority opinion in the framing of \n        the constitution.</li>\n        </ol>\n      </li>\n      <li>It was an offer made by the British to obtain the support of India in the Second \n      World War.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Viceroy who proclaimed the August offer is ______?",
    answer: "Lord Linlithgow."
  }, {
    qaNumber: this.qaNumber++,
    question: "Cripps Mission came to India on ______?",
    answer: "22 March 1942.",
    description: "<ul>\n      <li>Cripps Mission was sent by the British Government to India with the key objective \n      to secure Indian cooperation and support for British war efforts in the 2nd World War.</li>\n      <li>Sir Stafford Cripps was the Chairman of Cripps Mission.</li>\n      <li>Cripps proposed that \n        <ol>\n          <li>India would be give the Dominion Status immediately after the end of the war.</li>\n          <li>India would be free to frame its own constitution after the war.</li>\n        </ol>\n      </li>\n      <li>It envisaged a federation of British India and the Indian states as a dominion \n      within the British commonwealth.</li>        \n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the Viceroy of India during the time of Cripps Mission?",
    answer: "Lord Linlithgow."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who called the Cripps mission as 'A post dated cheque on a Crashing Bank'?",
    answer: "Gandhiji."
  }, {
    qaNumber: this.qaNumber++,
    question: "Cripps Mission left India on ______?",
    answer: "12th April 1942."
  }, {
    qaNumber: this.qaNumber++,
    question: "On which day did Viceroy Lord Wavell formulate the Wavell plan?",
    answer: "14 June 1945."
  }, {
    qaNumber: this.qaNumber++,
    question: "Wavell plan is also known as ______?",
    answer: "Breakdown Plan.",
    description: "<ul>\n      <li>The essence of the plan:\n        <ol>\n        <li>Formation of a new executive council at the centre in which all members \n        except Viceroy and Commander in Chief were Indians.</li>\n        <li>All portfolios except Defence were to be under the control of Indian members.</li>\n        <li>Indian National Congress and Muslim League would get equal preference in the \n        reconstituted council.</li>\n        <li>The plan proposed the formation of an interim government before proceeding for the \n        work of framing constitution.</li>\n        </ol>\n      </li>\n      <li>Indian leaders were invited for Simla Conference by Wavell to discuss the plan.</li>\n      <li>The plan was rejected as no agreement could be reached over the composition of the \n      viceroy's executive council.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who convened the Simla Conference?",
    answer: "Lord Wavell.",
    description: "<ul>\n      <li>It was held from 25 June to 14 July 1945.</li>\n      <li>21 members, from all political parties participated in Simla Conference.</li>\n      <li>The main aim of Simla Conference was to prepare a list of members to the Viceroy's \n      executive council.</li>\n      <li>Simla Conference did not succeed since the Muslim League rejected the proposal.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which British committee/mission recommended the setting up of a Constituent \n      Assembly to frame a constitution for India?",
    answer: "Cabinet Mission.",
    description: "<ul>\n      <li>Cabinet Mission made arrangements for the formation of interim government.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the British Prime Minister who sent the Cabinet Mission to India?",
    answer: "Clement Atlee.",
    description: "<ul>\n      <li>It was to discuss and formulate a plan for the transfer of power to Indians from \n      British.</li>\n      <li>The main aim of the Cabinet Mission was to help the Indians to frame a constitution \n      by themselves.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "In which year was Cabinet Mission sent to India?",
    answer: "1946."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the Viceroy of India when Cabinet Mission reached India?",
    answer: "Lord Wavell."
  }, {
    qaNumber: this.qaNumber++,
    question: "List the names of members of the Cabinet Mission?",
    answer: "Lord Pethick Lawrence, Stafford Cripps and A.V. Alexander.",
    description: "<ul>\n      <li>They were the members of the British Cabinet also.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Cabinet Mission?",
    answer: "Pethick Lawrence."
  }, {
    qaNumber: this.qaNumber++,
    question: " Cabinet Mission arrived in India on ______?",
    answer: "23 March 1946.",
    description: "<ul>\n      <li>Cabinet Mission reached Karachi on 23 March 1946 and in Delhi on 24th March 1946.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Cabinet Mission published its plan on ______?",
    answer: "16 May 1946.",
    description: "<ul>\n      <li>Cabinet Mission recommended the setting up of a Constituent Assembly to frame a \n      constitution for India.</li>\n      <li>Both the Congress and the Muslim League accepted the proposals in principle.</li>\n      <li>Cabinet Mission made arrangements for the formation of interim government.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Interim Government was formed in India on ______, on the recommendation \n      of Cabinet Mission?",
    answer: "2nd September 1946."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the Vice President of Interim Government formed on the recommendation \n      of Cabinet Mission?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the President of Interim Government formed on the recommendation \n      of Cabinet Mission?",
    answer: "Lord Wavell."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the last Viceroy of India and the first Governor General of Independent \n      India?",
    answer: "Levis Mountbatten.",
    description: "<ul>\n      <li>He was sent to India by Clement Attlee to ease the process of transfer of power to \n      India from Britain.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Levis Mountbatten arrived in India on ______?",
    answer: "22nd March 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Levis Mountbatten formulated and announced the Mountbatten plan in a jont conference \n      of Congress and Muslim League in Delhi on ______?",
    answer: "3rd June 1947.",
    description: "<ul>\n      <li>India was partitioned according to the Mountbatten Plan.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Mountbatten Plan is otherwise known as ______?",
    answer: "June 3rd Plan or Balkan Plan.",
    description: "<ul>\n      <li>Indian National Congress and the Muslim League completely accepted the Mountbatten \n      Plan.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Act was enacted by the British Government to give immediate effect \n      to the Mountbatten Plan?",
    answer: "The Indian Independence Act 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Indian Independence Bill was introduced in British Parliament on ______ ?",
    answer: "4th July 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Indian Independence Bill was passed by the British Parliament on ______ ?",
    answer: "5th July 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Indian Independence Bill received royal accent on ______?",
    answer: "18th July 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Indian Independence Bill came into effect on ______?",
    answer: "15th August 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which was the last act that was passed by British Parliament for India?",
    answer: "Indian Independence Act 1947.",
    description: "<ul>\n      <li>India became independent on 15th August 1947 according to the Indian Independence \n      Act 1947.</li>\n      <li>It abolished the office of the Secretary of State for India.</li>\n      <li>It abolished the office of Viceroy and provided a governor general for each \n      dominion.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "What day of the week was August 15, 1947, when India gained independence?",
    answer: "Friday."
  }, {
    qaNumber: this.qaNumber++,
    question: "What day of the week was 26th January 1950, the on which India became republic?",
    answer: "Thursday."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the British King when India became independent?",
    answer: "George VI."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the British Prime Minister when India became independent?",
    answer: "Clement Attlee."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the Viceroy of India when India became independent?",
    answer: "Mount Batten."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the INC President when India became independent?",
    answer: "J.B. Kripalani."
  }, {
    qaNumber: this.qaNumber++,
    question: "Members of the first Cabinet of Independent India took the oath of office \n      on ______?",
    answer: "15 August 1947.",
    description: "<ul>\n      <li>Mount Batten, Governor General of India handed over the power to the first Indian \n      cabinet headed by Prime minister Pt. Jawaharlal Nehru.</li>\n      <li>There were 14 members in the first union ministry of Independent India.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Prime Minister, External Affairs, Common Wealth Relations \n      and Scientific Research in the first Cabinet of Independent India?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Deputy Prime Minister & Home in the first Cabinet of Independent India?",
    answer: "Sardar Vallabhbhai Patel."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Defence in the first Cabinet of Independent India?",
    answer: "Sardar Baldev Singh."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Finance in the first Cabinet of Independent India??",
    answer: "Shanmugam Chetty."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Law in the first Cabinet of Independent India??",
    answer: "Dr. B. R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Railways and Transport in the first Cabinet of Independent India?",
    answer: "Dr. John Mathai."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Industry and Supply in the first Cabinet of Independent India?",
    answer: "Syama Prasad Mookerjee."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Education in the first Cabinet of Independent India?",
    answer: "Moulana Abul Kalam Azad."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Health in the first Cabinet of Independent India?",
    answer: "Rajkumari Amrit Kaur."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Food and Agriculture in the first Cabinet of Independent India?",
    answer: "Dr. Rajendra Prasad."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Communications in the first Cabinet of Independent India?",
    answer: "Rafi Ahmed Kidwai."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Labour in the first Cabinet of Independent India?",
    answer: "Babu Jagjivan Ram."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Public Works, Mines and Power in the first Cabinet of Independent India?",
    answer: "Narhar Vishnu Gadgil."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Commerce in the first Cabinet of Independent India?",
    answer: "C.H Bhabha."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who held the portfolio of Relief and Rehabilitation in the first Cabinet of Independent India?",
    answer: "K. C. Neogy."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who were the Ministers without portfolio (Non-portfolio Ministers) in the first Cabinet of Independent India?",
    answer: "N. Gopalaswami Ayyangar and Mohanlal Saxena."
  }]);
});
_ConstitutionalHistoryQAComponent = ConstitutionalHistoryQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ConstitutionalHistoryQAComponent, "\u0275fac", function ConstitutionalHistoryQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConstitutionalHistoryQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ConstitutionalHistoryQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ConstitutionalHistoryQAComponent,
  selectors: [["app-constitutional-history-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function ConstitutionalHistoryQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.constitutionalHistoryQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 5099
/*!******************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/dpspqa/dpspqa.component.ts ***!
  \******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DPSPQAComponent: () => (/* binding */ DPSPQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _DPSPQAComponent;


var DPSPQAComponent = /*#__PURE__*/function () {
  function DPSPQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DPSPQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Directive Principles Of State Policy");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dpspQAs", [{
      qaNumber: this.qaNumber++,
      question: "Directive Principles Of State Policy are defined in which part of \n      the Constitution of India?",
      answer: "Part IV.",
      description: "<ul>\n        <li>Though, it shall be the duty of the State to apply these principles in making \n      laws, the provisions contained in this Part are not be enforceable by any court.\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 38, which comes under the Part IV of the Constitution of India,\n      states that _____ ?",
      answer: "State to secure a social order for the promotion of welfare of the people."
    }, {
      qaNumber: this.qaNumber++,
      question: "As per the Directive Principles Of State Policy defined in the Constitution \n      of India, the State shall secure and protect a social order in which _____, _____, and \n      _____ justice prevails?",
      answer: "Social, economic, and political.",
      description: "<ul>\n        <li>Art 38(1): The State shall strive to promote the welfare of the people by \n        securing and protecting as effectively as it may a social order in which justice, \n        social, economic and political, shall inform all the institutions of the\n        national life.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "As per the Directive Principles Of State Policy defined in the Constitution \n      of India, the State shall strive to minimise the inequalities in __(1)__, and endeavour \n      to eliminate inequalities in __(2)__, __(3)__, and __(4)__?",
      answer: "<ol>\n        <li>Income.</li>\n        <li>Status.</li>\n        <li>Facilities.</li>\n        <li>Opportunities.</li>\n      </ol>",
      description: "<ul>\n        <li>Art 38(2): The State shall, in particular, strive to minimise the inequalities \n        in income, and endeavour to eliminate inequalities in status, facilities and \n        opportunities, not only amongst individuals but also amongst groups of people \n        residing in different areas or engaged in different vocations.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 39(a) of the Constitution of India says that the State shall \n      direct its policy towards securing _____ ?",
      answer: "That the citizens, men and women equally, have the right to an adequate means \n      of livelihood."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 39(b) of the Constitution of India says that the State shall \n      direct its policy towards securing _____ ?",
      answer: "That the ownership and control of the material resources of the community \n      are so distributed as best to subserve the common good."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 39(c) of the Constitution of India says that the State shall \n      direct its policy towards securing _____ ?",
      answer: "That the operation of the economic system does not result in the concentration \n      of wealth and means of production to the common detriment."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 39(d) of the Constitution of India says that the State shall \n      direct its policy towards securing _____ ?",
      answer: "That there is equal pay for equal work for both men and women."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 39(e) of the Constitution of India says that the State shall \n      direct its policy towards securing _____ ?",
      answer: "That the health and strength of workers, men and women, and the tender age of \n      children are not abused and that citizens are not forced by economic necessity to enter \n      avocations unsuited to their age or strength."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 39(f) of the Constitution of India says that the State shall \n      direct its policy towards securing _____ ?",
      answer: "That children are given opportunities and facilities to develop in a healthy \n      manner and in conditions of freedom and dignity and that childhood and youth are \n      protected against exploitation and against moral and material abandonment."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 39A of the Constitution of India deals with _____ ?",
      answer: "Equal justice and free legal aid.",
      description: "<ul>\n        <li>Article 39A: The State shall secure that the operation of the legal system \n        promotes justice, on a basis of equal opportunity, and shall, in particular, \n        provide free legal aid, by suitable legislation or schemes or in any other way, \n        to ensure that opportunities for securing justice are not denied to any citizen by \n        reason of economic or other disabilities.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 40 of the Constitution of India deals with _____ ?",
      answer: "Organisation of village panchayats.",
      description: "<ul>\n        <li>The State shall take steps to organise village panchayats and endow them with \n        such powers and authority as may be necessary to enable them to function as units \n        of self-government.\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 41 of the Constitution of India deals with _____ ?",
      answer: "Right to work, to education and to public assistance in certain cases.",
      description: "<ul>\n        <li>Article 41: The State shall, within the limits of its economic capacity and \n        development, make effective provision for securing the right to work, to education \n        and to public assistance in cases of unemployment, old age, sickness and \n        disablement, and in other cases of undeserved want.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 42 of the Constitution of India deals with _____ ?",
      answer: "Provision for just and humane conditions of work and maternity relief.",
      description: "<ul>\n       <li>Article 42: The State shall make provision for securing just and humane \n       conditions of work and for maternity relief.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 43 of the Constitution of India deals with _____ ?",
      answer: "Living wage, etc., for workers.",
      description: "<ul>\n        <li>Article 43: The State shall endeavour to secure, by suitable legislation or \n        economic organisation or in any other way, to all workers, agricultural, industrial \n        or otherwise, work, a living wage, conditions of work ensuring a decent standard of \n        life and full enjoyment of leisure and social and cultural opportunities and, in \n        particular, the State shall endeavour to promote cottage industries on an\n        individual or co-operative basis in rural areas.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which Article of the Constitution of India instructs the State to promote \n      cottage industries?",
      answer: "Article 43.",
      description: "<ul>\n        <li>Article 43: The State shall endeavour to secure, by suitable legislation or \n        economic organisation or in any other way, to all workers, agricultural, industrial \n        or otherwise, work, a living wage, conditions of work ensuring a decent standard of \n        life and full enjoyment of leisure and social and cultural opportunities and, in \n        particular, the State shall endeavour to promote cottage industries on an\n        individual or co-operative basis in rural areas.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 43A of the Constitution of India deals with _____ ?",
      answer: "Participation of workers in management of industries.",
      description: "<ul>\n        <li>Article 43A: The State shall take steps, by suitable legislation or in any \n        other way, to secure the participation of workers in the management of undertakings, \n        establishments or other organisations engaged in any industry.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 44 of the Constitution of India deals with _____ ?",
      answer: "Uniform civil code for the citizens.",
      description: "<ul>\n        <li>Article 44: The State shall endeavour to secure for the citizens a uniform civil \n        code throughout the territory of India.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 45 of the Constitution of India deals with _____ ?",
      answer: "Provision for free and compulsory education for children.",
      description: "<ul>\n       <li>Article 45: The State shall endeavour to provide, within a period of ten years \n       from the commencement of this Constitution, for free and compulsory education for all\n       children until they complete the age of fourteen years.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 46 of the Constitution of India deals with _____ ?",
      answer: "Promotion of educational and economic interests of Scheduled Castes, Scheduled \n      Tribes and other weaker sections.",
      description: "<ul>\n        <li>Article 46: The State shall promote with special care the educational and economic \n        interests of the weaker sections of the people, and, in particular, of the Scheduled \n        Castes and the Scheduled Tribes, and shall protect them from social injustice and all \n        forms of exploitation.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 47 of the Constitution of India deals with _____ ?",
      answer: "Duty of the State to raise the level of nutrition and the standard of living \n      and to improve public health.",
      description: "<ul>\n        <li>Article 47: The State shall regard the raising of the level of nutrition and the \n        standard of living of its people and the improvement of public health as among its \n        primary duties and, in particular, the State shall endeavour to bring about \n        prohibition of the consumption, except for medicinal purposes, of intoxicating drinks \n        and of drugs which are injurious to health.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which Article of the Constitution of India urges the State to bring about \n      prohibition of the consumption of intoxicating drinks and drugs?",
      answer: "Article 47.",
      description: "<ul>\n        <li>Article 47: The State shall regard the raising of the level of nutrition and the \n        standard of living of its people and the improvement of public health as among its \n        primary duties and, in particular, the State shall endeavour to bring about \n        prohibition of the consumption, except for medicinal purposes, of intoxicating drinks \n        and of drugs which are injurious to health.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 48 of the Constitution of India deals with _____ ?",
      answer: "Organisation of agriculture and animal husbandry.",
      description: "<ul>\n        <li>Article 48: The State shall endeavour to organise agriculture and animal \n        husbandry on modern and scientific lines and shall, in particular, take steps for \n        preserving and improving the breeds, and prohibiting the slaughter, of cows and \n        calves and other milch and draught cattle.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 48A of the Constitution of India deals with _____ ?",
      answer: "Protection and improvement of environment and safeguarding of forests and \n      wild life.",
      description: "<ul>\n       <li>Article 48A: The State shall endeavour to protect and improve the environment \n       and to safeguard the forests and wild life of the country.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 49 of the Constitution of India deals with _____ ?",
      answer: "Protection of monuments and places and objects of national importance.",
      description: "<ul>\n        <li>Article 49: It shall be the obligation of the State to protect every monument, \n        or place or object of artistic or historic interest, declared by or under law made \n        by Parliament to be of national importance, from spoliation, disfigurement, \n        destruction, removal, disposal or export, as the case may be.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 50 of the Constitution of India deals with _____ ?",
      answer: "Separation of judiciary from executive.",
      description: "<ul>\n        <li>Article 50: The State shall take steps to separate the judiciary\n        from the executive in the public services of the State.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 51 of the Constitution of India deals with _____ ?",
      answer: "Promotion of international peace and security.",
      description: "<ul>\n        <li>The State shall endeavour to\n          <ol type=\"a\">\n            <li>promote international peace and security;</li>\n            <li>maintain just and honourable relations between nations;</li>\n            <li>foster respect for international law and treaty obligations in the dealings \n            of organized peoples with one another; and</li>\n            <li>encourage settlement of international disputes by arbitration.</li>\n          </ol>\n        </li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DPSPQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_DPSPQAComponent = DPSPQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DPSPQAComponent, "\u0275fac", function DPSPQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DPSPQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DPSPQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _DPSPQAComponent,
  selectors: [["app-dpspqa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function DPSPQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.dpspQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 3964
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/fundamental-rights-qa/fundamental-rights-qa.component.ts ***!
  \************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FundamentalRightsQAComponent: () => (/* binding */ FundamentalRightsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _FundamentalRightsQAComponent;


var FundamentalRightsQAComponent = /*#__PURE__*/function () {
  function FundamentalRightsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FundamentalRightsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Fundamental Rights");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "fundamentalRightsQAs", [{
      qaNumber: this.qaNumber++,
      question: "Fundamental Rights are defined in which part of the Constitution \n      of India?",
      answer: "Part III (Articles 12 to 35).",
      description: "<ul>\n      <li>Part III of the Constitution is known as the 'Magnacarta of India' or the 'keystone of the Constitution'.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is considered as the father of Fundamental rights in India?",
      answer: "Sardar Vallabhbhai Patel."
    }, {
      qaNumber: this.qaNumber++,
      question: "The idea of Fundamental Rights has been taken from which constitution?",
      answer: "US Constitution (Bill of Rights)."
    }, {
      qaNumber: this.qaNumber++,
      question: "How many categories of Fundamental Rights were there in the Original Constitution?",
      answer: "7.",
      description: "<ul>\n      <li>Now, there are only 6 categories of Fundamental Rights.</li>\n      <li>Right to property is no longer a fundamental right.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Right to property as a fundamental right was abolished by which amendment?",
      answer: "44th Constitutional Amendment Act of 1978.",
      description: "<ul>\n      <li>44th Constitutional Amendment Act of 1978 abolished the Right to Property as a Fundamental Right, by repealing Article 19(1)(f) \n      and Article 31 from Part III of the Constitution.</li>\n      <li>Instead, Article 300-A was insterted in Part XII, under heading 'Right to Property'.</li>\n      <li>Presently, right to property is a Constitutional or Legal right, but not fundamental right.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "What does Article 13 deal with?",
      answer: "Laws inconsistent with or in derogation of the fundamental rights.",
      description: "<ul>\n        <li>As per Article 13, laws inconsistent with or in derogation of the fundamental \n        rights shall, to the extent of such inconsistency or contravention, be void.\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "How many fundamental rights are provided by the Constitution of India?",
      answer: "6."
    }, {
      qaNumber: this.qaNumber++,
      question: "What are the fundamental rights provided by the Constitution of India?",
      answer: "<ol>\n      <li>Right to Equality.</li>\n      <li>Right to Freedom.</li>\n      <li>Right against Exploitation.</li>\n      <li>Right to Freedom of Religion.</li>\n      <li>Cultural and Educational Rights.</li>\n      <li>Right to Constitutional Remedies.</li>\n      </ol>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Right to Equality is guaranteed by the Constitution of India through \n      articles _____ to _____ ?",
      answer: "Article 14 to 18."
    }, {
      qaNumber: this.qaNumber++,
      question: "Right to Freedom is guaranteed by the Constitution of India through \n      articles _____ to _____ ?",
      answer: "Article 19 to 22."
    }, {
      qaNumber: this.qaNumber++,
      question: "Right against Exploitation is guaranteed by the Constitution of India \n      through articles _____ to _____ ?",
      answer: "Article 23 to 24."
    }, {
      qaNumber: this.qaNumber++,
      question: "Right to Freedom of Religion is guaranteed by the Constitution of India \n      through articles _____ to _____ ?",
      answer: "Article 25 to 28."
    }, {
      qaNumber: this.qaNumber++,
      question: "Cultural and Educational Rights is guaranteed by the Constitution of India \n      through articles _____ to _____ ?",
      answer: "Article 29 to 31."
    }, {
      qaNumber: this.qaNumber++,
      question: "Right to Constitutional Remedies is guaranteed by the Constitution of India \n      through article _____ ?",
      answer: "Article 32."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 14 deals with _____, which comes under the Right to Equality \n      guaranteed by the Constitution of India",
      answer: "Equality before law.",
      description: "<ul>\n        <li>Article 14: The State shall not deny to any person equality before \n        the law or the equal protection of the laws within the territory of India.\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The idea of equality before law was borrowed from __(1)__ whereas the idea of equal protection of the laws was \n      borrowed from __(2)__?",
      answer: "<ol>\n      <li>Britain.</li>\n      <li>USA.</li>\n      </ol>",
      description: "<ul>\n      <li>The idea of equality before law was borrowed from Britain whereas the idea of equal protection of the laws was \n      borrowed from USA.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 14 is based on the concept of Rule of Law prepared by whom?",
      answer: "A V Dicey.",
      description: "<ul>\n      <li>Rule of law was borrowed from Britain.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which Article is an exception to Article 14?",
      answer: "Article 31-C.",
      description: "<ul>\n      <li>It provides that the laws made by the State for implementing Directive Principles of State Policy contained in clause (b) \n      or clause (c) of Article 39 cannot be challenged on the ground that they are violative of Article 14.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 15 deals with _____, which comes under the Right to Equality \n      guaranteed by the Constitution of India?",
      answer: "Prohibition of discrimination on grounds only of religion, race, caste, \n      sex or place of birth."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 16 deals with _____, which comes under the Right to Equality \n      guaranteed by the Constitution of India?",
      answer: "Equality of opportunity in matters of public employment."
    }, {
      qaNumber: this.qaNumber++,
      question: "Which was the 7 member committee constituted in 2005 to study the social, economic and educational condition of \n      Muslims in India?",
      answer: "Sachar Committee.",
      description: "<ul>\n      <li>It recommended setting up of an equal opportunity commission.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 17 deals with _____, which comes under the Right to Equality \n      guaranteed by the Constitution of India?",
      answer: "Abolition of Untouchability.",
      description: "<ul>\n      <li>Untouchability is abolished by Article 17 and through the Protection of Civil Rights Act, 1955.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which Article was adopted by the Constituent Assembly with the slogan 'Mahatma Gandhi Ki Jai'?",
      answer: "Article 17."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 18 deals with _____, which comes under the Right to Equality \n      guaranteed by the Constitution of India?",
      answer: "Abolition of titles."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 19 deals with _____, which comes under the Right to Freedom \n      guaranteed by the Constitution of India?",
      answer: "Protection of certain rights regarding freedom of speech, assembly, etc."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 19(1)(a) guarantees that all citizens shall have the right\n      to _____?",
      answer: "Freedom of speech and expression."
    }, {
      qaNumber: this.qaNumber++,
      question: "The freedom of press (Fourth Estate) is implicit in which Article?",
      answer: "Article 19(1)(a)."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who coined the term 'Fourth Estate'?",
      answer: "Edmund Burke."
    }, {
      qaNumber: this.qaNumber++,
      question: "To curtail the freedom of the Indian Press, which Act was enacted by British \n      in the year 1878?",
      answer: "Vernacular Press Act."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who was the Viceroy of British India when the Vernacular Press Act was enacted?",
      answer: "Lord Lytton."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who was the Viceroy of British India when the Vernacular Press Act was repealed?",
      answer: "Lord Rippon."
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is known as the liberator of Indian Press?",
      answer: "Charles Metcalfe."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 19(1)(b) guarantees that all citizens shall have the right\n      to _____?",
      answer: "Assemble peaceably and without arms."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 19(1)(c) guarantees that all citizens shall have the right\n      to _____?",
      answer: "Form associations or unions."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 19(1)(d) guarantees that all citizens shall have the right\n      to _____?",
      answer: "Move freely throughout the territory of India."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 19(1)(e) guarantees that all citizens shall have the right\n      to _____?",
      answer: "Reside and settle in any part of the territory of India."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 19(1)(g) guarantees that all citizens shall have the right\n      to _____?",
      answer: "Practise any profession, or to carry on any occupation, trade or business."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 20 deals with _____, which comes under the Right to Freedom \n      guaranteed by the Constitution of India?",
      answer: "Protection in respect of conviction for offences.",
      description: "<ul>\n        <li>Article 20(1): No ex post facto laws.\n          <ul>\n          <li>No person shall be convicted of any offence except for violation of a law \n          in force at the time of the commission of the Act charged as an offence, nor be\n          subjected to a penalty greater than that which might have been inflicted under \n          the law in force at the time of the commission of the offence.</li>\n          </ul>\n        </li>\n        <li>Article 20(2): No double jeopardy.\n          <ul>\n          <li>No person shall be prosecuted and punished for the same offence more \n          than once.</li>\n          </ul>\n        </li>\n        <li>Article 20(3): No self incrimination.\n          <ul>\n          <li>No person accused of any offence shall be compelled to be a witness against \n          himself.</li>\n          </ul>\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 20(1) of the Constitution ensures that there should be no ______?",
      answer: "Ex-post-facto law.",
      description: "<ul>\n      <li>No person shall be convicted of any offence except for violation of a law \n      in force at the time of the commission of the Act charged as an offence, nor be\n      subjected to a penalty greater than that which might have been inflicted under \n      the law in force at the time of the commission of the offence.</li>\n      <li>The limitation is imposed only on criminal laws and not on civil laws or tax laws, which \n      can be imposed retrospectively.</li>\n      <li>This immunity is not available in case of preventive detention or demanding security from \n      a person.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 20(2) of the Constitution ensures that there should be no ______?",
      answer: "Double jeopardy.",
      description: "<ul>\n      <li>No person shall be prosecuted and punished for the same offence more than once.</li>\n      <li>This protection is available only for proceedings before a court of law or judicial tribunal, and \n      is not available against proceedings before departmental or administrative authorities which are \n      not judicial in nature.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 20(3) of the Constitution ensures that there should be no ______?",
      answer: ": Self incrimination.",
      description: "<ul>\n      <li>No person accused of any offence shall be compelled to be a witness against himself.</li>\n      <li>This protection is not available against the need to give thumb impression, specimen signature, \n      and blood sample, etc.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which Article is known as the base of fundamental rights?",
      answer: "Article 21."
    }, {
      qaNumber: this.qaNumber++,
      question: "Which are the Articles which are considered as the Golden triangle of Indian Constitution?",
      answer: "Article 14, 19, and 21."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 21 deals with _____, which comes under the Right to Freedom \n      guaranteed by the Constitution of India?",
      answer: "Protection of life and personal liberty.",
      description: "<ul>\n      <li>Article 21: No person shall be deprived of his life or personal liberty except\n       according to procedure established by law.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 21A deals with _____, which comes under the Right to Freedom \n      guaranteed by the Constitution of India?",
      answer: "Right to education."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 21A is inserted into the Constitution by which amendment act?",
      answer: "Eighty-sixth Amendment Act, 2002."
    }, {
      qaNumber: this.qaNumber++,
      question: "Right to education is guaranteed by the Constitution of India to all \n      children of the age of _____ to _____ years?",
      answer: "6 to 14 years.",
      description: "<ul>\n      <li>Article 21A: The State shall provide free and compulsory education to all \n      children of the age of six to fourteen years in such manner as the State may, by law, \n      determine.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Based on Article 21A, Parliament enacted Right to Education Act, which came into force on\n      ______?",
      answer: "2010 April 01."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 22 deals with _____, which comes under the Right to Freedom \n      guaranteed by the Constitution of India?",
      answer: "Protection against arrest and detention in certain cases."
    }, {
      qaNumber: this.qaNumber++,
      question: "As per Article 22(2) of the Constitution of India, arrested person \n      shall be produced before magistrate within a period of _____ hours of such arrest?",
      answer: "24 hours.",
      description: "<ul>\n      <li>Article 22(2): Every person who is arrested and detained in custody shall be \n      produced before the nearest magistrate within a period of twenty-four hours of such \n      arrest excluding the time necessary for the journey from the place of arrest to the \n      court of the magistrate and no such person shall be detained in custody beyond the \n      said period without the authority of a magistrate.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 23 deals with _____, which comes under the Right against \n      Exploitation guaranteed by the Constitution of India?",
      answer: "Prohibition of traffic in human beings and forced labour.",
      description: "<ul>\n      <li>Article 23(1): Traffic in human beings and begar and other similar forms of \n      forced labour are prohibited and any contravention of this provision shall be an \n      offence punishable in accordance with law.</li>\n      <li>State can impose compulsory service for public purposes without any \n      discrimination.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 24 deals with _____, which comes under the Right against \n      Exploitation guaranteed by the Constitution of India?",
      answer: "Prohibition of employment of children in factories, etc."
    }, {
      qaNumber: this.qaNumber++,
      question: "Constitution of India prohibits employment of children under _____ \n      years of age in hazardous employment?",
      answer: "14 years.",
      description: "<ul>\n      <li>Article 24: No child below the age of fourteen years shall be employed \n      to work in any factory or mine or engaged in any other hazardous employment.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which is the label given to products to certify that no child, forced or bonded labor was \n      used in its making?",
      answer: "GoodWeave label.",
      description: "<ul>\n      <li>Formerly known as Rugmark.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Who is the founder of GoodWeave, a nonprofit organization working to stop child labor in \n      global supply chains?",
      answer: "Kailash Satyarthi."
    }, {
      qaNumber: this.qaNumber++,
      question: "When was GoodWeave founded?",
      answer: "1994."
    }, {
      qaNumber: this.qaNumber++,
      question: "Which was the movement established by Kailash Satyarthi in 1980 with a vision to end the \n      menace of child labour?",
      answer: "Bachpan Bachao Andolan."
    }, {
      qaNumber: this.qaNumber++,
      question: "Kailash Satyarthi was awarded nobel peace price along with Malala Yousafzai in which year?",
      answer: "2014."
    }, {
      qaNumber: this.qaNumber++,
      question: "World day against child labour?",
      answer: "June 12."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 25 deals with _____, which comes under the Right to Freedom \n      of Religion guaranteed by the Constitution of India?",
      answer: "Freedom of conscience and free profession, practice and propagation of\n      religion."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 26 deals with _____, which comes under the Right to Freedom \n      of Religion guaranteed by the Constitution of India?",
      answer: "Freedom to manage religious affairs."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 27 deals with _____, which comes under the Right to Freedom \n      of Religion guaranteed by the Constitution of India?",
      answer: "Freedom as to payment of taxes for promotion of any particular religion."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 28 deals with _____, which comes under the Right to Freedom \n      of Religion guaranteed by the Constitution of India?",
      answer: "Freedom as to attendance at religious instruction or religious worship \n      in certain educational institutions."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 29 deals with _____, which comes under the Right to Cultural \n      and Educational Rights guaranteed by the Constitution of India?",
      answer: "Protection of interests of minorities.",
      description: "<ul>\n      <li>Any section of the citizens residing in the territory of India or any part thereof having a \n      distinct language, script or culture of its own shall have the right to conserve the same.</li>\n      <li>No citizen shall be denied admission into any educational institution maintained by the State \n      or receiving aid out of State funds on grounds only of religion, race, caste, language or any \n      of them.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 30 deals with _____, which comes under the Cultural and \n      Educational Rights guaranteed by the Constitution of India?",
      answer: "Right of minorities to establish and administer educational institutions."
    }, {
      qaNumber: this.qaNumber++,
      question: "Which Article is termed by Ambedkar as the \"Heart and Soul\" of the Constitution?",
      answer: "Article 32."
    }, {
      qaNumber: this.qaNumber++,
      question: "Article 32 deals with _____, which comes under the Right to Constitutional \n      Remedies guaranteed by the Constitution of India?",
      answer: "Remedies for enforcement of rights conferred by the Part III of the Indian \n      Constitution.",
      description: "<ul>\n      <li>Article 32(2): The Supreme Court shall have power to issue directions or orders \n      or writs, including writs in the nature of habeas corpus, mandamus, prohibition, \n      quo warranto and certiorari, whichever may be appropriate, for the enforcement of any \n      of the rights conferred by this Part.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Which are the Fundamental Rights available only to Indian Citizens and not to foreigners?",
      answer: "Articles 15, 16, 19, 29, and 30."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FundamentalRightsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_FundamentalRightsQAComponent = FundamentalRightsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FundamentalRightsQAComponent, "\u0275fac", function FundamentalRightsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FundamentalRightsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FundamentalRightsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _FundamentalRightsQAComponent,
  selectors: [["app-fundamental-rights-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function FundamentalRightsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.fundamentalRightsQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 4503
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/indian-constitution-qa.component.ts ***!
  \***************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndianConstitutionQAComponent: () => (/* binding */ IndianConstitutionQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _IndianConstitutionQAComponent;


var IndianConstitutionQAComponent = /*#__PURE__*/function () {
  function IndianConstitutionQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndianConstitutionQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Indian Constitution");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "indianConstitutionQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Introduction And Features QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/IntroductionAndFeaturesQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Constitutional History QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/ConstitutionalHistoryQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Making Of Constitution QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/MakingOfConstitutionQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Preamble QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/PreambleQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Union And Its Territory QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/UnionAndItsTerritoryQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Citizenship QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/CitizenshipQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Fundamental Rights QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/FundamentalRightsQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Directive Principles Of State Policy QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/DPSPQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IndianConstitutionQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_IndianConstitutionQAComponent = IndianConstitutionQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(IndianConstitutionQAComponent, "\u0275fac", function IndianConstitutionQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IndianConstitutionQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(IndianConstitutionQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _IndianConstitutionQAComponent,
  selectors: [["app-indian-constitution-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function IndianConstitutionQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.indianConstitutionQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 4448
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/introduction-and-features-qa/introduction-and-features-qa.component.ts ***!
  \**************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroductionAndFeaturesQAComponent: () => (/* binding */ IntroductionAndFeaturesQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _IntroductionAndFeaturesQAComponent;


var IntroductionAndFeaturesQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function IntroductionAndFeaturesQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IntroductionAndFeaturesQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Introduction And Features");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "introductionQAs", [{
    qaNumber: this.qaNumber++,
    question: "The term 'Constitution' is derived from which Latin term?",
    answer: "Constituere.",
    description: "<ul>\n      <li>Constituere means to establish.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The idea of constitution originated in which country?",
    answer: "Britain."
  }, {
    qaNumber: this.qaNumber++,
    question: "The idea of written constitution originated in which country?",
    answer: "USA."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which country is known as the largest democracy in the world?",
    answer: "India."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which country is known as the first democracy in the world?",
    answer: "Greece."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which country is known as the cradle of democracy?",
    answer: "Greece."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which country is the longest surviving democracy in the world?",
    answer: "Britain."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which country is known as the land of modern democracy?",
    answer: "Britain."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which book is known as the bible of modern democracy and French revolution?",
    answer: "The Social Contract.",
    description: "<ul>\n      <li>Jean-Jacques Rousseau's The Social Contract is often referred to as the \"bible of \n      modern democracy\" because of its influence on the French Revolution and the development \n      of democratic ideas.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which country is known as the home of direct democracy?",
    answer: "Switzerland."
  }, {
    qaNumber: this.qaNumber++,
    question: "Earliest known mention of 'eye for eye and tooth for a tooth' is found in which \n      law?",
    answer: "Hamurabi's code."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is considered as the world's first law giver?",
    answer: "Hammurabi.",
    description: "<ul>\n      <li>The Code of Hammurabi was written in Babylonia around 1755 BC.</li>\n      <li>The Code of Ur-Nammu is now found to be compiled around c. 2100 BC.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is considered as the first law giver in India?",
    answer: "Manu.",
    description: "<ul>\n      <li>\n      The Laws of Manu, also known as the M\u0101nava-Dharma\u015B\u0101stra or Manusm\u1E5Bti, is a Sanskrit text \n      that is considered one of the most important sources of Hindu law, believed to have been \n      composed in the 2nd or 3rd centuries BCE.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the Modern Manu?",
    answer: "Dr.B R Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which is the first written constitution in the world?",
    answer: "American constitution."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the father of American constitution?",
    answer: "James Madison."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which is the shortest and the oldest written constitution in the world?",
    answer: "American constitution.",
    description: "<ul>\n      <li>American constitution has only 7 articles.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Amerian constitution came into force in the year _____ ?",
    answer: "1789."
  }, {
    qaNumber: this.qaNumber++,
    question: "The first ten amendments of the American constitution are collectively known \n      as _____ ?",
    answer: "Bill of Rights.",
    description: "<ul>\n      <li>India adopted the idea of Fundamental Rights from the Bill of Rights.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "A written constitution is otherwise known as _____ constitution?",
    answer: "Enacted constitution.",
    description: "<ul>\n      <li>Indian constitution and American constitution are examples of written constitution.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "An unwritten constitution is also known as 'Cumulative' or _____ constitution?",
    answer: "Evolved.",
    description: "<ul>\n      <li>British constitution and Israel constitution are examples of unwritten constitution.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Constitution of USA, Canada, Switzerland, Japan, and Australia are examples of \n      flexible constitution. State true or false?",
    answer: "False.",
    description: "<ul>\n      <li>Constitution of USA, Canada, Switzerland, Japan, and Australia are examples of rigid \n      constitution.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which is the lengthiest of all the written constitutions of the world?",
    answer: "Indian constitution.",
    description: "<ul>\n      <li>Originally Indian constitution contained a preamble, 395 articles, 8 schedules,and \n      22 parts.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Indian constitution is federal in character and unitary in spirit. Hence, it \n      is referred to as _____ ?",
    answer: "Quasi federal."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the most important features of the Indian Constitution?",
    answer: "<ol>\n      <li>Lengthiest Written Constitution.</li>\n      <li>Drawn from Various Sources.</li>\n      <li>Blend of Rigidity and Flexibility.</li>\n      <li>Federal System with Unitary Bias.</li>\n      <li>Parliamentary Form of Government.</li>\n      <li>Synthesis of Parliamentary Sovereignty and Judicial Supremacy.</li>\n      <li>Rule of Law.</li>\n      <li>Integrated and Independent Judiciary.</li>\n      <li>Fundamental Rights.</li>\n      <li>Directive Principles of State Policy.</li>\n      <li>Fundamental Duties.</li>\n      <li>Secularism.</li>\n      <li>Universal Adult Franchise.</li>\n      <li>Single Citizenship.</li>\n      <li>Independent Bodies.</li>\n      <li>Emergency Provisions.</li>\n      <li>Three-tier Government.</li>\n      <li>Co-operative Societies.</li>\n      </ol>",
    description: "<ul>\n      <li>Lengthiest Written Constitution: The Indian Constitution is the lengthiest written \n      constitution in the world. It has 395 articles, 22 parts, and 12 schedules.</li>\n      <li>Drawn from Various Sources: The Indian Constitution was not created in a vacuum. It       \n      was inspired by many different sources, including the constitutions of other countries, \n      such as the United States, the United Kingdom, and Canada.</li>\n      <li>Blend of Rigidity and Flexibility: The Indian Constitution is a blend of rigidity and \n      flexibility. It is rigid in the sense that it is difficult to amend, but it is also \n      flexible in the sense that it allows for change.</li>\n      <li>Federal System with Unitary Bias: The Indian Constitution establishes a federal system \n      of government. This means that there are two levels of government: the central government \n      and the state governments. However, the Constitution also gives the central government more \n      power than the state governments. This is known as a \"unitary bias\".</li>\n      <li>Parliamentary Form of Government: The Indian Constitution establishes a parliamentary \n      form of government. This means that the executive branch is responsible to the legislative \n      branch. The Prime Minister is the head of the government, and he or she is appointed by \n      the President.</li>\n      <li>Synthesis of Parliamentary Sovereignty and Judicial Supremacy: The Indian Constitution \n      synthesizes the principles of parliamentary sovereignty and judicial supremacy. This means \n      that the Parliament is supreme in the legislative realm, but the Supreme Court is supreme \n      in the judicial realm.</li>\n      <li>Rule of Law: The Indian Constitution guarantees the rule of law. This means that \n      everyone is subject to the law, including the government.</li>\n      <li>Integrated and Independent Judiciary: The Indian Constitution establishes an \n      independent judiciary. This means that the judges are not subject to the control of the \n      executive branch.</li>\n      <li>Fundamental Rights: The Indian Constitution guarantees fundamental rights to all \n      citizens.</li>\n      <li>Directive Principles of State Policy: The Indian Constitution also contains directive \n      principles of state policy. These principles are not enforceable by the courts, but they \n      are nevertheless important guidelines for the government.</li>\n      <li>Fundamental Duties: The Indian Constitution also enumerates fundamental duties for all \n      citizens. These duties include the duty to uphold the Constitution, the duty to protect \n      the environment, and the duty to promote harmony among different religious groups.</li>\n      <li>Secularism: The Indian Constitution establishes India as a secular state. This \n      means that the government is not affiliated with any particular religion.</li>\n      <li>Universal Adult Franchise: The Indian Constitution guarantees universal adult franchise. \n      This means that all adults, regardless of their gender, caste, or religion, have the right \n      to vote.</li>\n      <li>Single Citizenship: The Indian Constitution establishes a single citizenship for all \n      Indians. This means that all Indians are citizens of India, regardless of the state in \n      which they live.</li>\n      <li>Independent Bodies: The Indian Constitution establishes a number of independent bodies, \n      such as the Election Commission, the Comptroller and Auditor General, and the National \n      Human Rights Commission. These bodies are responsible for ensuring that the government is \n      accountable to the people.</li>\n      <li>Emergency Provisions: The Indian Constitution provides for emergency provisions. These \n      provisions can be used by the President to suspend certain fundamental rights and to \n      assume more power. However, the emergency provisions can only be used in very limited \n      circumstances.</li>\n      <li>Three-tier Government: The Indian Constitution establishes a three-tier system of \n      government: the central government, the state governments, and the local governments. \n      This system of government is designed to ensure that power is distributed more evenly \n      throughout the country.</li>\n      <li>Co-operative Societies: The Indian Constitution recognizes the importance of \n      co-operative societies. These societies are voluntary organizations that are formed to \n      promote the economic interests of their members..</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>quasi federal</i>?",
    answer: "K C Wheare."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>co-operative federalism</i>?",
    answer: "Granville Austin."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>Federation with centralising \n      tendency</i>?",
    answer: "Ivor Jennings."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>lawyer's paradise</i>?",
    answer: "Ivor Jennings."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>unitary as well as federal</i>?",
    answer: "Dr. B R Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>extremely federal</i>?",
    answer: "Paul Appleby."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>bargaining federalism</i>?",
    answer: "Morris Jones."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>mixture of unitary and federal \n      features</i>?",
    answer: "D D Basu."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who characterized Indian constitution as <i>a case sui generis</i>?",
    answer: "Alexandrowics."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Amendment Act deleted Part VII (dealing with Part -B States)?",
    answer: "7th Amendment Act of 1956."
  }, {
    qaNumber: this.qaNumber++,
    question: "Part IV-A and Part XIV-A were added by which Amendment Act?",
    answer: "42nd Amendment Act of 1976."
  }, {
    qaNumber: this.qaNumber++,
    question: "Part IX-A was added by which Amendment Act?",
    answer: "74th Amendment Act of 1992."
  }, {
    qaNumber: this.qaNumber++,
    question: "Part IX-B was added by which Amendment Act?",
    answer: "97th Amendment Act of 2011."
  }]);
});
_IntroductionAndFeaturesQAComponent = IntroductionAndFeaturesQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(IntroductionAndFeaturesQAComponent, "\u0275fac", function IntroductionAndFeaturesQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IntroductionAndFeaturesQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(IntroductionAndFeaturesQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _IntroductionAndFeaturesQAComponent,
  selectors: [["app-introduction-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function IntroductionAndFeaturesQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.introductionQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7296
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/making-of-constitution-qa/making-of-constitution-qa.component.ts ***!
  \********************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MakingOfConstitutionQAComponent: () => (/* binding */ MakingOfConstitutionQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _MakingOfConstitutionQAComponent;


var MakingOfConstitutionQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MakingOfConstitutionQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MakingOfConstitutionQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Making Of Constitution");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "makingOfConstitutionQAs", [{
    qaNumber: this.qaNumber++,
    question: "Constitution of India was framed by ______?",
    answer: "Constituent Assembly."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Constituent Assembly was set up in November 1946, under the provisions of the ______ plan?",
    answer: "Cabinet Mission Plan (1946).",
    description: "<ul>\n      <li>The members of the Constituent Assembly were chosen by an indirect election and it was not based on Adult Franchise.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: " The first meeting of the Constituent Assembly was held on ______?",
    answer: "9th December 1946."
  }, {
    qaNumber: this.qaNumber++,
    question: "At what time did the first meeting of the Constituent Assembly began at the Central hall of Parliament building?",
    answer: "11 AM."
  }, {
    qaNumber: this.qaNumber++,
    question: "How many members attended the first meeting of the Constituent Assembly?",
    answer: "207 members including 9 women."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the first person to address the constituent assembly?",
    answer: "Acharya J.B. Kripalani."
  }, {
    qaNumber: this.qaNumber++,
    question: "On the day of the first meeting, ______, the oldest member in the assembly was appointed \n      as the temporary chairman of the Constituent Assembly?",
    answer: "Dr. Sachidananda Sinha."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the President of the Constituent Assembly?",
    answer: "Dr. Rajendra Prasad.",
    description: "<ul>\n      <li>He was elected on 11th December 1946.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who all served as the Vice Presidents of the Constituent Assembly?",
    answer: "H.C. Mukherjee and V.T. Krishnamachari."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who served as the Secretary of the Constituent Assembly?",
    answer: "H.V.R Iyengar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who served as the Constitutional Advisor to the Constituent Assembly?",
    answer: "B.N. Rao."
  }, {
    qaNumber: this.qaNumber++,
    question: "Constituent Assembly adopted National Flag on ______?",
    answer: "22nd July 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Constituent Assembly adopted National Anthem on ______?",
    answer: "24 January 1950."
  }, {
    qaNumber: this.qaNumber++,
    question: "Constituent Assembly adopted National Song on ______?",
    answer: "24 January 1950."
  }, {
    qaNumber: this.qaNumber++,
    question: "Total strength of the Constituent Assembly, as fixed by the \n      Cabinet Mission, was ______?",
    answer: "389."
  }, {
    qaNumber: this.qaNumber++,
    question: "Out of the total strength of the Constituent Assembly, \n      how many were from Governor's provinces of British India?",
    answer: "292.",
    description: "<ul>\n      <li>The representatives of Provinces in the Constituent Assembly were \n      elected by the Provincial Legislative Assemblies.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Out of the total strength of the Constituent Assembly, \n      how many were from Chief Commissioner's Provinces?",
    answer: "4."
  }, {
    qaNumber: this.qaNumber++,
    question: "Out of the total strength of the Constituent Assembly, \n      how many were from Indian princely states?",
    answer: "93."
  }, {
    qaNumber: this.qaNumber++,
    question: "How many elected members were there in the Constituent \n      Assembly?",
    answer: "296."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Lion capital of Ashoka was adopted as the official \n      emblem of India on ______?",
    answer: "26th January 1950."
  }, {
    qaNumber: this.qaNumber++,
    question: "Saka Era was adopted as the National Calendar of India on\n      ______?",
    answer: "22nd March 1957."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which political party got majority in Constituent Assembly?",
    answer: " Congress (208 seats)."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which is the province from which most number of people were \n      elected?",
    answer: "United Province (55)."
  }, {
    qaNumber: this.qaNumber++,
    question: "The membership of the Constituent Assembly was reduced to \n      ______ as the members from the Pakistan region left after partition?",
    answer: "299."
  }, {
    qaNumber: this.qaNumber++,
    question: "How many women members were there in the constituent \n      assembly before partition?",
    answer: "17."
  }, {
    qaNumber: this.qaNumber++,
    question: "How many women members were there in the constituent \n      assembly after partition?",
    answer: "15."
  }, {
    qaNumber: this.qaNumber++,
    question: "How many Malayalee women members were there in the \n      Constituent Assembly?",
    answer: "3.",
    description: "They are\n      <ol>\n      <li>Ammu Swaminathan.</li>\n      <li>Annic Mascarene.</li>\n      <li>Dakshayani Velayudhan.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "How many members of the Constituent Assembly were \n      Malayalees?",
    answer: "17 (Including 3 women).",
    description: "<ul>\n      <li>9 from Madras:\n        <ol>\n        <li>Ammu Swaminathan.</li>\n        <li>Dakshayani Velayudhan.</li>\n        <li>A.K. Menon.</li>\n        <li>B. Pocker Sahib Bahadur.</li>\n        <li>K.T.M. Ahmed Ibrahim.</li>\n        <li>Muhammad Ismail Sahib.</li>\n        <li>P. Kunhiraman.</li>\n        <li>Abdul Sathar Haji.</li>        \n        <li>K. Madhava Menon.</li>\n        </ol>\n      </li>\n      <li>6 from Travancore:\n        <ol>\n        <li>Pattom Thanu Pillai.</li>\n        <li>R. Sankar.</li>\n        <li>PS. Nataraja Pillai.</li>\n        <li>Annie Mascarene.</li>\n        <li>KA. Mohamed.</li>\n        <li>P.T. Chacko.</li>\n        </ol>\n      </li>\n      <li>1 from Kochi:\n        <ol>\n        <li>P. Govinda Menon.</li>\n        </ol>\n      </li>\n      <li>1 from United Provinces (now UP):\n        <ol>\n        <li>Dr. John Mathai.</li>\n        </ol>\n      </li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised the Constituent Assembly by stating \"The \n      Constituent Assembly was a one party body in an essentially one-party \n      country. The Assembly was the congress and the congress was India\"?",
    answer: "Granville Austin."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised the Constituent Assembly by terming it as \n      \"A Body of Hindus\"?",
    answer: "Lord Viscount Simon."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised the Constituent Assembly by stating \"The \n      Constituent Assembly represented only one major community in India\"?",
    answer: "Winston Churchill."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the first SC/ST woman to pass pre-degree in India?",
    answer: "Dakshayani Velayudhan."
  }, {
    qaNumber: this.qaNumber++,
    question: "What was the symbol (seal) of the Constituent Assembly?",
    answer: "Elephant."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Union Powers Committee of the \n      Constituent Assembly?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Union Constitution Committee \n      of the Constituent Assembly?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the States Committee of the \n      Constituent Assembly?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Drafting Committee of the \n      Constituent Assembly?",
    answer: "B.R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Provincial Constitution \n      Committee of the Constituent Assembly?",
    answer: "Sardar Patel."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Advisory Committee on \n      Fundamental Rights, Minorities, Tribal and Excluded Areas of the \n      Constituent Assembly?",
    answer: "Sardar Patel."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Fundamental Rights Sub \n      Committee of Advisory Committee on Fundamental Rights, Minorities, \n      Tribal and Excluded Areas of the Constituent Assembly?",
    answer: "J.B. Kripalani."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Minorities Sub Committee of \n      Advisory Committee on Fundamental Rights, Minorities, Tribal and \n      Excluded Areas of the Constituent Assembly?",
    answer: "H.C. Mukherjee."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the North East Frontier Tribal \n      Areas & Assam Excluded & Partially Excluded Areas Sub Committee of \n      Advisory Committee on Fundamental Rights, Minorities, Tribal and \n      Excluded Areas of the Constituent Assembly?",
    answer: "Gopinath Bardoloi."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Excluded & Partially Excluded \n      Areas (Other than those in Assam) Sub Committee of the Constituent \n      Assembly?",
    answer: "A.V. Thakkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Rules of Procedure Committee \n      of the Constituent Assembly?",
    answer: "Dr. Rajendra Prasad."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Steering Committee of the \n      Constituent Assembly?",
    answer: "Dr. Rajendra Prasad."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Finance & Staff Committee of \n      the Constituent Assembly?",
    answer: "Dr. Rajendra Prasad."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the  Ad-hoc Committee on the \n      National Flag of the Constituent Assembly?",
    answer: "Dr. Rajendra Prasad."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Credentials Committee of the \n      Constituent Assembly?",
    answer: "Alladi Krishnaswami Ayyar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the House Committee of the \n      Constituent Assembly?",
    answer: "Pattabhi Sitaramayya."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Committee on Chief \n      Commissioners Provinces of the Constituent Assembly?",
    answer: "Pattabhi Sitaramayya."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Order of Business Committee \n      of the Constituent Assembly?",
    answer: "K.M. Munshi."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Ad-hoc Committee on the \n      Supreme Court of the Constituent Assembly?",
    answer: "S Varadachari (Non member)."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Ad-hoc Committee on citizenship \n      of the Constituent Assembly?",
    answer: "S Varadachari (Non member)."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Linguistic Provinces Committee \n      of the Constituent Assembly?",
    answer: "S.K. Dhar (Non member)."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Press Gallery Committee of the \n      Constituent Assembly?",
    answer: "Usha Nath Sen."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Committee on the functions of \n      the Constitutional Assembly?",
    answer: "G.V. Mavalankar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who was the chairman of the Special Committee to examine \n      the draft constitution of the Constituent Assembly?",
    answer: "Alladi Krishnaswami Ayyar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Drafting Committee of the Constituent Assembly was \n      appointed on ______?",
    answer: "29th August 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who all were members of the Drafting Committee of the \n      Constituent Assembly?",
    answer: "There were 7 members:\n      <ol>\n      <li>Dr. B.R. Ambedkar (Chairman).</li>\n      <li>K.M. Munshi.</li>\n      <li>Muhammed Saadullah.</li>\n      <li>Alladi Krishnaswami Ayyar.</li>\n      <li>N. Gopalaswami Ayyangar.</li>\n      <li>D.P. Khaitan (who died in 1948 and was replaced by \n        T.T Krishnamachari).</li>\n      <li>B.L. Mitter (who was replaced by N. Madhava Rao, because of ill health).</li>\n      </ol>",
    description: ""
  }, {
    qaNumber: this.qaNumber++,
    question: "Drafting Committee prepared and published the first draft \n      of the constitution in ______?",
    answer: "February 1948.",
    description: "<ul>\n      <li>The people of India were given eight months time to give comments, \n      criticisms and suggestions about the draft.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "In the light of the public response, a second draft of       \n      the constitution was prepared and published by the drafting \n      committee in ______?",
    answer: "October 1948."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Drafting Committee was described as 'Drifting \n      Committee' by ______?",
    answer: "Nasaruddin Ahmed."
  }, {
    qaNumber: this.qaNumber++,
    question: "How many members signed in the Indian Constitution?",
    answer: "284."
  }, {
    qaNumber: this.qaNumber++,
    question: "Dr. B.R. Ambedkar introduced the final draft of our \n      Constitution in the Assembly on ______ (First reading)?",
    answer: "4th November 1948."
  }, {
    qaNumber: this.qaNumber++,
    question: "The second reading of the Constitution started on ______ \n      and ended on 17th October 1949?",
    answer: "15th November 1948."
  }, {
    qaNumber: this.qaNumber++,
    question: "The third and final reading of the draft of the \n      Constitution was started on ______ and ended on 26th November 1949, \n      and it was declared as passed?",
    answer: "14th November 1949."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Constituent Assembly was set up as a mere constitution \n      making body. It became a legislative body also in the midnight of \n      ______?",
    answer: "14 August 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "On ______, the Constituent Assembly, for the first time, \n      met as the Legislative Assembly?",
    answer: "17 November 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "Constituent Assembly elected ______ as the speaker of the \n      Assembly when it met for the first time as the Legislative Assembly?",
    answer: "Dr. GV. Mavlankar.",
    description: "<ul>\n      <li>Since then whenever it met as the Constituent Assembly, it was \n      chaired by Dr. Rajendra Prasad and whenever it met as the Legislative \n      Assembly, it was chaired by G.V. Mavlankar.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "India became a republic on ______?",
    answer: "26th January 1950."
  }, {
    qaNumber: this.qaNumber++,
    question: "The draft of the Indian Constitution was prepared by \n      ______?",
    answer: "B.N. Rao."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the Father of Indian Constitution?",
    answer: "B.R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the Architect of Indian Constitution?",
    answer: "B.R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the Modern Manu?",
    answer: "B.R. Ambedkar.",
    description: "<ul>\n      <li>He is also known as Modern Buddha, Baba Saheb, Indian Jefferson, \n      etc.\n      </li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is the first Union Law Minister of India?",
    answer: "B.R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which party was founded by B.R. Ambedkar in 1936?",
    answer: "Independent Labour Party."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which was the federation founded by B.R. Ambedkar in 1942?",
    answer: "All India Scheduled Caste Federation."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which was the Society founded by B.R. Ambedkar in 1945?",
    answer: "People's Education Society."
  }, {
    qaNumber: this.qaNumber++,
    question: "Bahishkrit Hitakarini Sabha was established by ______?",
    answer: "B.R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which were the 2 journals started by B.R. Ambedkar?",
    answer: "Mookh Nayak, and Bahishkrit Bharat."
  }, {
    qaNumber: this.qaNumber++,
    question: "Mahar Movement was started by ______?",
    answer: "B.R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who participated in all the three Round Table Conferences \n      held in London?",
    answer: "B.R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who presented the Hindu Code Bill in the Parliament?",
    answer: "B.R. Ambedkar.",
    description: "<ul>\n      <li>He resigned from the Union Cabinet due to the differences of \n      opinion with his colleagues relating to Hindu Code Bill.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Article  was called as the heart and soul of the \n      constitution by Dr. Ambedkar?",
    answer: "Article 32."
  }, {
    qaNumber: this.qaNumber++,
    question: "Ambedkar was converted to Buddhism in the year ______?",
    answer: "1956."
  }, {
    qaNumber: this.qaNumber++,
    question: "Ambedkar died on ______?",
    answer: "6th December 1956."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which is the resting place of B.R. Ambedkar?",
    answer: "Chaitya Bhumi."
  }, {
    qaNumber: this.qaNumber++,
    question: "Ambedkar Jayanti is on ______?",
    answer: "April 14."
  }, {
    qaNumber: this.qaNumber++,
    question: "India's highest civilian award Bharat Ratna was \n      posthumously conferred upon Ambedkar in the year ______?",
    answer: "1990."
  }, {
    qaNumber: this.qaNumber++,
    question: "The death anniversary of B.R. Ambedkar (6 December) is \n      observed as ______ Diwas ?",
    answer: "Mahaparinirvan Diwas."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Speech 'Annihilation of Caste' is associated with \n      ______?",
    answer: "B.R. Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which are 6 main works of B.R. Ambedkar?",
    answer: "<ol>\n      <li>The Untouchables.</li>\n      <li>Buddha and his Dhamma.</li>\n      <li>The Buddha or Karl Marx.</li>\n      <li>Who were Sudras.</li>\n      <li>Waiting for a Visa.</li>\n      <li>What Congress and Gandhi have done to the untouchables.</li>\n      </ol>."
  }, {
    qaNumber: this.qaNumber++,
    question: "The original Constitution consisted of ______ Articles, \n      ______ Schedules, and ______ parts?",
    answer: "395 Articles 8 Schedules and 22 parts."
  }, {
    qaNumber: this.qaNumber++,
    question: "On ______, Indian people observed the \"first \n      Independence Day\" following the 'Purna Swaraj' resolution passed \n      at the Lahore Congress session held in 1929?",
    answer: "26th January 1930.",
    description: "<ul>\n      <li>January 26 was selected as the date of commencement of the \n      constitution of India because of this historical importance.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "How much time did the Constituent Assembly take to frame \n      the Constitution of India?",
    answer: "2 years 11 months and 18 days.",
    description: "<ul>\n      <li>Constituent Assembly held eleven sessions in 165 days.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The Constitution of India was adopted by the Constituent \n      Assembly on ______?",
    answer: "26 November 1949."
  }, {
    qaNumber: this.qaNumber++,
    question: "The Constitution of India came into being on ______?",
    answer: "26 January 1950."
  }, {
    qaNumber: this.qaNumber++,
    question: "The final session (Special Session) of the Constituent \n      Assembly was held on ______?",
    answer: "24 January 1950."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised Constitution by saying \"Both in language \n      and substance a close copy of the Act of 1935\"?",
    answer: "N. Srinivasan."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised Constitution by saying \"The Constitution \n      derives directly from the Government of India Act of 1935 from which in fact many of it's provisions are copied almost textually\"?",
    answer: "Ivor Jennings."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised Constitution by saying \"The Constitution \n      is essentially the Government of India Act of 1935 with only adult \n      franchise added\"?",
    answer: "P.R. Deshmukh."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised Constitution by saying \"We wanted the \n      music of Veena or Sitar, but here we have the music of an English \n      band\"?",
    answer: "K. Hanumanthaiya."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised Constitution by saying \"That is exactly \n      the kind of Constitution Mahatma Gandhi did not want and did not \n      envisage\"?",
    answer: "K. Hanumanthaiya."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised Constitution by saying \"The emblem and \n      the crest that we have selected for our assembly is an elephant. It \n      is perhaps in consonance with that our constitution too is the \n      bulkiest that the world has produced\"?",
    answer: "H.V. Kamath."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who criticised Constitution by saying \"The ideals on \n      which this draft constitution is framed have no manifest relation to \n      the fundamental spirit of India. This constitution would not prove \n      suitable and would break down soon after being brought into \n      operation\"?",
    answer: "Lakshminarayan Sahu."
  }, {
    qaNumber: this.qaNumber++,
    question: "Constitution Day is celebrated in India on which day?",
    answer: "November 26."
  }, {
    qaNumber: this.qaNumber++,
    question: "National Law Day is celebrated in India on which day?",
    answer: "November 26."
  }, {
    qaNumber: this.qaNumber++,
    question: "National Legal Services day is observed on which day?",
    answer: "November 9."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the architect of Indian Constitution?",
    answer: "Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the architect of Fundamental Rights?",
    answer: "Vallabhbhai Patel."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the architect of Preamble?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is known as the architect of cover page of Indian \n      Constitution?",
    answer: "Nandalal Bose."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who founded Bharatiya Vidya Bhavan in 1938?",
    answer: "Kanhaiyalal Maneklal Munshi (KM. Munshi).",
    description: "<ul>\n      <li>He was a member of the Drafting committee of Indian \n      Constitution.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "KM. Munshi started a Gujarati monthly called ______?",
    answer: "Bhargav."
  }, {
    qaNumber: this.qaNumber++,
    question: "The idea of Ombudsman was first introduced by ______?",
    answer: "K.M. Munshi."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who quoted Preamble as \"political Horoscope of Indian \n      Constitution?",
    answer: "KM. Munshi."
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from Govt. of India Act 1935?",
    answer: "<ol>\n      <li>Office of Governor.</li>\n      <li>Federal Court.</li>\n      <li>PSCs.</li>\n      <li>Emergency.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from Germany (Weimer Constitution)?",
    answer: "<ol>\n      <li>Suspension of Fundamental Rights during Emergency.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from USA?",
    answer: "<ol>\n      <li>Written Constitution.</li>\n      <li>Fundamental Rights.</li>\n      <li>Preamble.</li>\n      <li>Judicial Review.</li>\n      <li>Impeachment.</li>\n      <li>Functions of Vice President.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from Britain?",
    answer: "<ol>\n      <li>Parliamentary form of Govt.</li>\n      <li>Rule of Law.</li>\n      <li>Single Citizenship.</li>\n      <li>Office of CAG.</li>\n      <li>Writs.</li>\n      <li>Speaker and his duties.</li>\n      <li>Bicameralism.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from Ireland?",
    answer: "<ol>\n      <li>Directive Principles.</li>\n      <li>Presidential election.</li>\n      <li>Nomination of members to the Rajya Sabha.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from Canada?",
    answer: "<ol>\n      <li>Federation with strong centre.</li>\n      <li>Residuary powers.</li>\n      <li>Union List.</li>\n      <li>State List.</li>\n      <li>Appointment of Governors by Centre.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from Australia?",
    answer: "<ol>\n      <li>Concurrent List.</li>\n      <li>Joint sitting.</li>\n      <li>Trade and Commerce.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from South Africa?",
    answer: "<ol>\n      <li>Amendment to the Constitution.</li>\n      <li>Election of Rajyasaba Members.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from Russia?",
    answer: "<ol>\n      <li>Fundamental Duties.</li>\n      <li>Five year plan.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from France?",
    answer: "<ol>\n      <li>Republic.</li>\n      <li>Liberty, Equality and Fraternity.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "List out the features of Indian Constitution borrowed \n      from Japan?",
    answer: "<ol>\n      <li>Procedure established by law.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "A country is said to be ______, if the head of the \n      state is elected directly or indirectly by the people?",
    answer: "Republic.",
    description: "<ul>\n      <li>In a Monarchy the head of the state is not elected by the people. \n      There the King or Queen derive their powers from hereditary position.\n      eg: UK.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which country in Southeast Asia practices a system of \n      elective monarchy, where the head of state, the Yang di-Pertuan \n      Agong, is chosen through a selection process among hereditary rulers, \n      rather than by direct popular vote?",
    answer: "Malaysia."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which is the oldest Republic in the world?",
    answer: "San Marino.",
    description: "<ul>\n      <li>It was founded in 301 AD.</li>\n      <li>It's also the fifth-smallest country in the world..</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Which is the smallest Republic in the world?",
    answer: "Nauru."
  }, {
    qaNumber: this.qaNumber++,
    question: "The book Republic was written by ______?",
    answer: "Plato."
  }, {
    qaNumber: this.qaNumber++,
    question: "Politically and economically unstable countries \n      (especially in Latin America) whose economy largely depends on \n      exportation of a few goods are called ______?",
    answer: "Banana Republic.",
    description: "<ul>\n      <li>The term Banana Republic was coined by O. Henry.</li>\n      </ul>"
  }]);
});
_MakingOfConstitutionQAComponent = MakingOfConstitutionQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MakingOfConstitutionQAComponent, "\u0275fac", function MakingOfConstitutionQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MakingOfConstitutionQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MakingOfConstitutionQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _MakingOfConstitutionQAComponent,
  selectors: [["app-making-of-constitution-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function MakingOfConstitutionQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.makingOfConstitutionQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 9464
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/preamble-qa/preamble-qa.component.ts ***!
  \****************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreambleQAComponent: () => (/* binding */ PreambleQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _PreambleQAComponent;


var PreambleQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PreambleQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PreambleQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Preamble");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "preambleQAs", [{
    qaNumber: this.qaNumber++,
    question: "India adopted the idea of preamble from which country?",
    answer: "USA.",
    description: "<ul>\n      <li>American Constitution was the first to begin with a preamble.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "In India, Preamble is often referred as the ______ of the \n      Constitution?",
    answer: "Soul."
  }, {
    qaNumber: this.qaNumber++,
    question: "Preamble declares that the sovereignty or supreme power \n      in India belongs to the ______?",
    answer: "people."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who is the architect of the preamble of Indian \n      Constitution?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "The preamble was prepared based on ______'?",
    answer: "Objective Resolution."
  }, {
    qaNumber: this.qaNumber++,
    question: "Objective Resolution was introduced in the constituent \n      assembly on which date?",
    answer: "13 December 1946."
  }, {
    qaNumber: this.qaNumber++,
    question: "Objective Resolution was introduced in the constituent \n      assembly by whom?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Objective Resolution was passed by the Assembly on \n      which date?",
    answer: "22 January 1947."
  }, {
    qaNumber: this.qaNumber++,
    question: "As originally enacted, the preamble described India as a \n      ______ Republic?",
    answer: "Sovereign, Democractic."
  }, {
    qaNumber: this.qaNumber++,
    question: "After the 42nd Constitutional Amendment Act of 1976, \n      preamble describe India as a ______ Republic?",
    answer: "Sovereign, Socialist, Secular, Democractic."
  }, {
    qaNumber: this.qaNumber++,
    question: "What are the 3 new words inserted into the preamble by \n      the 42nd Constitutional Amendment Act of 1976?",
    answer: "<ol>\n      <li>Socialist.</li>\n      <li>Secular.</li>\n      <li>Integrity.</li>\n      </ol>"
  }, {
    qaNumber: this.qaNumber++,
    question: "State the text of the Preamble to the Indian \n      Constitution?",
    answer: "WE, THE PEOPLE OF INDIA, having solemnly \n      resolved to constitute India into a SOVEREIGN\n      SOCIALIST SECULAR DEMOCRATIC REPUBLIC and\n      to secure to all its citizens:</br>\n      JUSTICE, social, economic and political;</br>\n      LIBERTY of thought, expression, belief, faith and\n      worship;</br>\n      EQUALITY of status and of opportunity; and to promote among them all</br>\n      FRATERNITY assuring the dignity of the individual\n      and the unity and integrity of the Nation;</br>\n      IN OUR CONSTITUENT ASSEMBLY this twenty-\n      sixth day of November, 1949, do HEREBY ADOPT,\n      ENACT AND GIVE TO OURSELVES THIS\n      CONSTITUTION."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which is the only date mentioned in Preamble?",
    answer: "26 November 1949.",
    description: "<ul>\n      <li>It is the date on which Indian Constitution was adopted.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "In which case did the Supreme Court hold that the Preamble \n      is part of the Constitution?",
    answer: "Kesavananda Bharati Vs State of Kerala (1973).",
    description: "<ul>\n      <li>The 'Basic Structure' doctrine of Indian Constitution was \n      propunded by the Supreme Court in the Kesavananda Bharati Vs State \n      of Kerala case.</li>\n      <li>In the Berubari case (1960), Supreme Court held that the Preamble \n      was not an integral part of the Constitution.</li>\n      <li>In the Union Government Vs LIC of India (1995) case, the \n      Supreme Court once again held that the Preamble is an integral \n      part of the Constitution.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "Preamble can be amended under which Article without \n      destroying the basic structure of the Constitution?",
    answer: "Article 368."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who called Preamble as the 'Political Horoscope' of the \n      Constitution?",
    answer: "K M Munshi."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who called Preamble as the 'Identity Card' of the \n      Constitution?",
    answer: "N A Palkivala."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who called Preamble as the 'Key' to the Constitution?",
    answer: "Earnest Barker."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who called Preamble as the 'Heart and Soul' of the \n      Constitution?",
    answer: "Thakur Das Bhargav."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who called Preamble as the 'Soul and key' to the \n      Constitution?",
    answer: "Jawaharlal Nehru."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who called Preamble as the 'Soul' of the Constitution?",
    answer: "M Hidayatullah."
  }, {
    qaNumber: this.qaNumber++,
    question: "In which case Supreme Court hold that Preamble is not a \n      collection of useless rhetoric?",
    answer: "Atam Prakash Vs State of Haryana (1986)."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who commented on the Preamble by saying that \"the Preamble \n      expresses what we had thought or dreamt so long\"?",
    answer: "Alladi Krishnaswami Iyer."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who commented on the Preamble by saying that \"the proper \n      functioning of a Preamble is to explain certain facts which are \n      necessary to be explained before the provisions contained in the act \n      can be understood\"?",
    answer: "Dr. Durgadas Basu."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who commented on the Preamble by saying that \"the Preamble \n      contains in a nutshell,its ideals and aspiration\"?",
    answer: "Koka Subha Rao."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who commented on the Preamble by saying that \"Preamble is \n      neither a source of power nor a source of privation of power\"?",
    answer: "P B Gajendragadkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who commented on the Preamble by saying that \"the Preamble \n      is the key to open the minds of the makers of the Act, and the mischief\n      which they intended to redress\"?",
    answer: "James Dyer."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who said that \"this Preamble embodies what is the desire \n      of every member of the house that this Constitution should have its \n      root, its authority, its sovereignty from the people\", on the floor \n      of Constituent Assembly in 1949?",
    answer: "Dr. B R Ambedkar."
  }, {
    qaNumber: this.qaNumber++,
    question: "Who suggested that the Preamble should begin with the \n      words \"In the name of god\"?",
    answer: "H V Kamath."
  }, {
    qaNumber: this.qaNumber++,
    question: "'Economic Justice' as one of the objectives of the Indian \n      Constitution has been provided in the Preamble, and the ______?",
    answer: "Directive Principles of State Policy."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Congress session put forward a socialistic pattern \n      to India?",
    answer: "Avadi session (1955).",
    description: "<ul>\n      <li>President of 1955 Avadi session was UN Dhebar.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "From where did the ideal of 'Justice in social, economic, \n      and political' taken?",
    answer: "Russian Revolution (1917)."
  }, {
    qaNumber: this.qaNumber++,
    question: "From where did the ideal of 'liberty, equality, and \n      fraternity' taken?",
    answer: "French Revolution (1789)."
  }]);
});
_PreambleQAComponent = PreambleQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PreambleQAComponent, "\u0275fac", function PreambleQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PreambleQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PreambleQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PreambleQAComponent,
  selectors: [["app-preamble-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function PreambleQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.preambleQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 2706
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/union-and-its-territory-qa/union-and-its-territory-qa.component.ts ***!
  \**********************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnionAndItsTerritoryQAComponent: () => (/* binding */ UnionAndItsTerritoryQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _UnionAndItsTerritoryQAComponent;


var UnionAndItsTerritoryQAComponent = /*#__PURE__*/(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UnionAndItsTerritoryQAComponent() {
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UnionAndItsTerritoryQAComponent);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Union And Its Territory");
  (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "unionAndItsTerritoryQAs", [{
    qaNumber: this.qaNumber++,
    question: "Which Part of the Indian Constitution deals with Union and \n      its terrirories?",
    answer: "Part I.",
    description: "<ul>\n      <li>Article 1 to 4.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "According to Indian Constitution, India is otherwise known \n      as ______?",
    answer: "Bharat."
  }, {
    qaNumber: this.qaNumber++,
    question: "According to Article 1 of Indian Constitution, India shall \n      be a ______?",
    answer: "Union of States.",
    description: "<ul>\n      <li>India is known as \"Indestructible union of destructible states\".</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The States and the territories thereof are specified in\n      which Schedule of the Indian Constitution?",
    answer: "First Schedule."
  }, {
    qaNumber: this.qaNumber++,
    question: "No Bill for the purpose of formation of new States and \n      alteration of areas, boundaries or names of existing States shall be \n      introduced in either House of Parliament except on the recommendation \n      of ______?",
    answer: "President.",
    description: "<ul>\n      <li>And also, unless, where the proposal contained in the Bill affects\n      the area, boundaries or name of any of the States, the Bill has been\n      referred by the President to the Legislature of that State for \n      expressing its views thereon within such period as may be specified in \n      the reference or within such further period as the President may allow \n      and the period so specified or allowed has expired.</li>\n      </ul>"
  }, {
    qaNumber: this.qaNumber++,
    question: "The majority required to form a new state by the Parliament \n      is ______?",
    answer: "Simple majority."
  }, {
    qaNumber: this.qaNumber++,
    question: "Which Article of the Indian Constitution deals with the \n      formation of new states?",
    answer: "Article 3."
  }]);
});
_UnionAndItsTerritoryQAComponent = UnionAndItsTerritoryQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(UnionAndItsTerritoryQAComponent, "\u0275fac", function UnionAndItsTerritoryQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UnionAndItsTerritoryQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(UnionAndItsTerritoryQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _UnionAndItsTerritoryQAComponent,
  selectors: [["app-union-and-its-territory-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function UnionAndItsTerritoryQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.unionAndItsTerritoryQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 2006
/*!**********************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/indian-polity-qa.component.ts ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndianPolityQAComponent: () => (/* binding */ IndianPolityQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _IndianPolityQAComponent;


var IndianPolityQAComponent = /*#__PURE__*/function () {
  function IndianPolityQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndianPolityQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Indian Polity");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "indianPolityQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Indian Constitution QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Union Government QA",
      wbRoute: ''
    }, {
      wbNumber: this.wbNumber++,
      wbName: "State Government QA",
      wbRoute: ''
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Local Government QA",
      wbRoute: ''
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Union Territories QA",
      wbRoute: ''
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Constitutional Bodies QA",
      wbRoute: ''
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Statutory Bodies QA",
      wbRoute: ''
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Non-Constitutional And Non-Statutory Bodies QA",
      wbRoute: ''
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Regulatory Authorities QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Policies And Strategies QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Not For Profit Companies And Trusts QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Organizations, Associations, And Movements QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/OrganizationsAssociationsAndMovementsQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IndianPolityQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_IndianPolityQAComponent = IndianPolityQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(IndianPolityQAComponent, "\u0275fac", function IndianPolityQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IndianPolityQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(IndianPolityQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _IndianPolityQAComponent,
  selectors: [["app-indian-polity-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function IndianPolityQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.indianPolityQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 8731
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/ncfeqa/ncfeqa.component.ts ***!
  \**********************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NCFEQAComponent: () => (/* binding */ NCFEQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _NCFEQAComponent;


var NCFEQAComponent = /*#__PURE__*/function () {
  function NCFEQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NCFEQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "National Centre for Financial Education (NCFE)");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "ncfeQAs", [{
      qaNumber: this.qaNumber++,
      question: "National Centre for Financial Education (NCFE) is a Section 8 (Not for Profit) Company promoted by (1) _____, \n      (2) _____, (3) _____, and (4) _____?",
      answer: "<ol>\n      <li>Reserve Bank of India (RBI).</li>\n      <li>Securities and Exchange Board of India (SEBI).</li>\n      <li>Insurance Regulatory and Development Authority of India (IRDAI).</li>\n      <li>Pension Fund Regulatory and Development Authority (PFRDA).</li>\n      </ol>",
      description: "<ul>\n      <li>Objects of the Company:\n        <ol>\n          <li>To promote Financial Education across India for all sections of the population as per the National strategy for \n          Financial Education of Financial Stability and Development Council.</li>\n          <li>To create financial awareness and empowerment.  </li>\n        </ol>\n      </li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NCFEQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_NCFEQAComponent = NCFEQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NCFEQAComponent, "\u0275fac", function NCFEQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NCFEQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NCFEQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _NCFEQAComponent,
  selectors: [["app-ncfeqa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function NCFEQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.ncfeQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 6309
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/not-for-profit-companies-and-trusts-qa.component.ts ***!
  \***********************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotForProfitCompaniesAndTrustsQAComponent: () => (/* binding */ NotForProfitCompaniesAndTrustsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _NotForProfitCompaniesAndTrustsQAComponent;


var NotForProfitCompaniesAndTrustsQAComponent = /*#__PURE__*/function () {
  function NotForProfitCompaniesAndTrustsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotForProfitCompaniesAndTrustsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Not For Profit Companies And Trusts");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "notForProfitCompaniesAndTrustsQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "National Centre for Financial Education (NCFE) QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA/NCFEQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NotForProfitCompaniesAndTrustsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_NotForProfitCompaniesAndTrustsQAComponent = NotForProfitCompaniesAndTrustsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NotForProfitCompaniesAndTrustsQAComponent, "\u0275fac", function NotForProfitCompaniesAndTrustsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotForProfitCompaniesAndTrustsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NotForProfitCompaniesAndTrustsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _NotForProfitCompaniesAndTrustsQAComponent,
  selectors: [["app-not-for-profit-companies-and-trusts-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function NotForProfitCompaniesAndTrustsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.notForProfitCompaniesAndTrustsQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 3375
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/organizations-associations-and-movements-qa/all-india-kisan-sabha-qa/all-india-kisan-sabha-qa.component.ts ***!
  \***************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllIndiaKisanSabhaQAComponent: () => (/* binding */ AllIndiaKisanSabhaQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _AllIndiaKisanSabhaQAComponent;


var AllIndiaKisanSabhaQAComponent = /*#__PURE__*/function () {
  function AllIndiaKisanSabhaQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AllIndiaKisanSabhaQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "All India Kisan Sabha");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "allIndiaKisanSabhaQAs", [{
      qaNumber: this.qaNumber++,
      question: "Where did the Kisan Sabha movement start?",
      answer: "Bihar."
    }, {
      qaNumber: this.qaNumber++,
      question: "The Kisan Sabha movement started under the leadership of ____ ?",
      answer: "Sahajanand Saraswati."
    }, {
      qaNumber: this.qaNumber++,
      question: "All India Kisan Sabha was formed in the year _____ ?",
      answer: "1936."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AllIndiaKisanSabhaQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_AllIndiaKisanSabhaQAComponent = AllIndiaKisanSabhaQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AllIndiaKisanSabhaQAComponent, "\u0275fac", function AllIndiaKisanSabhaQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AllIndiaKisanSabhaQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AllIndiaKisanSabhaQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _AllIndiaKisanSabhaQAComponent,
  selectors: [["app-all-india-kisan-sabha-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function AllIndiaKisanSabhaQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.allIndiaKisanSabhaQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 6941
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/organizations-associations-and-movements-qa/organizations-associations-and-movements-qa.component.ts ***!
  \*********************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationsAssociationsAndMovementsQAComponent: () => (/* binding */ OrganizationsAssociationsAndMovementsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _OrganizationsAssociationsAndMovementsQAComponent;


var OrganizationsAssociationsAndMovementsQAComponent = /*#__PURE__*/function () {
  function OrganizationsAssociationsAndMovementsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OrganizationsAssociationsAndMovementsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Organizations, Associations, And Movements");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "organizationsAssociationsAndMovementsQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "All India Kisan Sabha QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/OrganizationsAssociationsAndMovementsQA/AllIndiaKisanSabhaQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OrganizationsAssociationsAndMovementsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_OrganizationsAssociationsAndMovementsQAComponent = OrganizationsAssociationsAndMovementsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(OrganizationsAssociationsAndMovementsQAComponent, "\u0275fac", function OrganizationsAssociationsAndMovementsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrganizationsAssociationsAndMovementsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(OrganizationsAssociationsAndMovementsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _OrganizationsAssociationsAndMovementsQAComponent,
  selectors: [["app-organizations-associations-and-movements-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function OrganizationsAssociationsAndMovementsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.organizationsAssociationsAndMovementsQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 4361
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/nsfeqa/nsfeqa.component.ts ***!
  \**********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NSFEQAComponent: () => (/* binding */ NSFEQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _NSFEQAComponent;


var NSFEQAComponent = /*#__PURE__*/function () {
  function NSFEQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NSFEQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "National Strategy for Financial Education (NSFE)");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "nsfeQAs", [{
      qaNumber: this.qaNumber++,
      question: "The National Strategy for Financial Education (NSFE): 2020-2025 document has been prepared by _____?",
      answer: "National Centre for Financial Education (NCFE).",
      description: "\n      <ul>\n        <li>National Centre for Financial Education (NCFE) is a Section 8 (Not for Profit) Company promoted by\n          <ol>\n            <li>Reserve Bank of India (RBI).</li>\n            <li>Securities and Exchange Board of India (SEBI).</li>\n            <li>Insurance Regulatory and Development Authority of India (IRDAI).</li>\n            <li>Pension Fund Regulatory and Development Authority (PFRDA).</li>\n          </ol>\n        </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The National Strategy for Financial Education (NSFE): 2020-2025 has recommended a _____ approach for dissemination of \n      financial education in the country?",
      answer: "\u20185 C\u2019 approach.",
      description: "\n      <ul>\n        <li>\u20185 C\u2019 approach:\n          <ul>\n            <li>Development of relevant <font color=\"white\">Content</font> in curriculum in schools, colleges and training establishments.</li>\n            <li>Developing <font color=\"white\">Capacity</font> among intermediaries involved in providing financial services.</li>\n            <li>Leveraging the positive effect of <font color=\"white\">Community</font> led model for financial literacy through appropriate \n                <font color=\"white\">Communication</font> strategy.</li>\n            <li>Enhancing <font color=\"white\">Collaboration</font> among various stakeholders.</li>\n          </ul>\n        </li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NSFEQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_NSFEQAComponent = NSFEQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NSFEQAComponent, "\u0275fac", function NSFEQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NSFEQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NSFEQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _NSFEQAComponent,
  selectors: [["app-nsfeqa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function NSFEQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.nsfeQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 4721
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/policies-and-strategies-qa.component.ts ***!
  \***********************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PoliciesAndStrategiesQAComponent: () => (/* binding */ PoliciesAndStrategiesQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _PoliciesAndStrategiesQAComponent;


var PoliciesAndStrategiesQAComponent = /*#__PURE__*/function () {
  function PoliciesAndStrategiesQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PoliciesAndStrategiesQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Policies And Strategies");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "policiesAndStrategiesQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "National Strategy for Financial Education (NSFE) QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA/NSFEQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PoliciesAndStrategiesQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_PoliciesAndStrategiesQAComponent = PoliciesAndStrategiesQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PoliciesAndStrategiesQAComponent, "\u0275fac", function PoliciesAndStrategiesQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PoliciesAndStrategiesQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PoliciesAndStrategiesQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PoliciesAndStrategiesQAComponent,
  selectors: [["app-policies-and-strategies-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function PoliciesAndStrategiesQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.policiesAndStrategiesQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7711
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/fsdcqa/fsdcqa.component.ts ***!
  \*********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FSDCQAComponent: () => (/* binding */ FSDCQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _FSDCQAComponent;


var FSDCQAComponent = /*#__PURE__*/function () {
  function FSDCQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FSDCQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Financial Stability and Development Council (FSDC)");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "fsdcQAs", [{
      qaNumber: this.qaNumber++,
      question: "Financial Stability and Development Council (FSDC) was set up by the Government as the apex level forum \n      in the year _____ ?",
      answer: "2010 (December).",
      description: "<ul>\n      <li>Set up with a view to strengthening and institutionalizing the mechanism for maintaining financial stability, \n      enhancing inter-regulatory coordination, and promoting financial sector development.</li>\n      <li>Without prejudice to the autonomy of regulators, the Council monitors macro prudential supervision of the economy, \n      including functioning of large financial conglomerates, and addresses inter-regulatory coordination and financial \n      sector development issues. It also focuses on financial literacy and financial inclusion. </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Chairman of the Financial Stability and Development Council (FSDC) is _____ ?",
      answer: "The Finance Minister.",
      description: "<ul>\n      <li>Members include the heads of financial sector Regulators, Finance Secretary and/or Department of Economic Affairs Secretary, \n      Department of Financial Services Secretary, and Chief Economic Adviser.</li>\n      <li>The Council can invite experts to its meeting if required.</li>\n      <li>The FSDC Secretariat in DEA is the Secretariat for the Council.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The Financial Stability and Development Council (FSDC) Sub-committee has been set up under the chairmanship of _____ ?",
      answer: "RBI Governor.",
      description: "<ul>\n      <li>The Financial Stability Unit (FSU) of RBI is the Secretariat for the Sub-committee.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FSDCQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_FSDCQAComponent = FSDCQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FSDCQAComponent, "\u0275fac", function FSDCQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FSDCQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FSDCQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _FSDCQAComponent,
  selectors: [["app-fsdcqa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function FSDCQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.fsdcQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7413
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/regulatory-authorities-qa.component.ts ***!
  \*********************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegulatoryAuthoritiesQAComponent: () => (/* binding */ RegulatoryAuthoritiesQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _RegulatoryAuthoritiesQAComponent;


var RegulatoryAuthoritiesQAComponent = /*#__PURE__*/function () {
  function RegulatoryAuthoritiesQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RegulatoryAuthoritiesQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Regulatory Authorities");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "regulatoryAuthoritiesQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Financial Stability and Development Council (FSDC) QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA/FSDCQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RegulatoryAuthoritiesQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_RegulatoryAuthoritiesQAComponent = RegulatoryAuthoritiesQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RegulatoryAuthoritiesQAComponent, "\u0275fac", function RegulatoryAuthoritiesQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegulatoryAuthoritiesQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RegulatoryAuthoritiesQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _RegulatoryAuthoritiesQAComponent,
  selectors: [["app-regulatory-authorities-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function RegulatoryAuthoritiesQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.regulatoryAuthoritiesQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 9479
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/international-agreements-and-groupings-qa/international-agreements-and-groupings-qa.component.ts ***!
  \************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternationalAgreementsAndGroupingsQAComponent: () => (/* binding */ InternationalAgreementsAndGroupingsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _InternationalAgreementsAndGroupingsQAComponent;


var InternationalAgreementsAndGroupingsQAComponent = /*#__PURE__*/function () {
  function InternationalAgreementsAndGroupingsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InternationalAgreementsAndGroupingsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "International Agreements And Groupings");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "internationalAgreementsAndGroupingsQAs", [{
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "?",
      answer: ".",
      description: "<ul>\n      <li></li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InternationalAgreementsAndGroupingsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_InternationalAgreementsAndGroupingsQAComponent = InternationalAgreementsAndGroupingsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(InternationalAgreementsAndGroupingsQAComponent, "\u0275fac", function InternationalAgreementsAndGroupingsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InternationalAgreementsAndGroupingsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(InternationalAgreementsAndGroupingsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _InternationalAgreementsAndGroupingsQAComponent,
  selectors: [["app-international-agreements-and-groupings-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function InternationalAgreementsAndGroupingsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.internationalAgreementsAndGroupingsQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 1196
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/emgfqa/emgfqa.component.ts ***!
  \*********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMGFQAComponent: () => (/* binding */ EMGFQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _EMGFQAComponent;


var EMGFQAComponent = /*#__PURE__*/function () {
  function EMGFQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EMGFQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "EastMed Gas Forum (EMGF)");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "otherInternationalInstitutionsAndAgenciesQAs", [{
      qaNumber: this.qaNumber++,
      question: "Following the discovery of gas in the Mediterranean waters, EastMed Gas Forum (EMGF) was formed by which all countries?",
      answer: "Cyprus, Egypt, Greece, Israel, Italy, Jordan, and Palestine.",
      description: "<ul>\n      <li>EMGF foundation charter was signed in Cairo on 2020 January 16.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Headquarters of EastMed Gas Forum (EMGF) is located in _____?",
      answer: "Cairo."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EMGFQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_EMGFQAComponent = EMGFQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EMGFQAComponent, "\u0275fac", function EMGFQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EMGFQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(EMGFQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _EMGFQAComponent,
  selectors: [["app-emgfqa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function EMGFQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.otherInternationalInstitutionsAndAgenciesQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 5180
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/fatfqa/fatfqa.component.ts ***!
  \*********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FATFQAComponent: () => (/* binding */ FATFQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _FATFQAComponent;


var FATFQAComponent = /*#__PURE__*/function () {
  function FATFQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FATFQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Financial Action Task Force (FATF)");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "fatfQAs", [{
      qaNumber: this.qaNumber++,
      question: "The Financial Action Task Force on Money Laundering (FATF) was established by the G-7 Summit that was held in Paris in \n      _____?",
      answer: "1989.",
      description: "<ul>\n      <li>In 2001, the development of standards in the fight against terrorist financing was added to the mission of the FATF.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ statement published by Financial Action Task Force (FATF) at the end of each plenary meeting is often externally \n      referred to as the \"grey list\"?",
      answer: "Jurisdictions under Increased Monitoring.",
      description: "<ul>\n      <li>When the FATF places a jurisdiction under increased monitoring, it means the country has committed to resolve swiftly the \n      identified strategic deficiencies within agreed timeframes and is subject to increased monitoring.</li>\n      <li>Jurisdictions under increased monitoring actively works with the FATF to address strategic deficiencies in their regimes \n      to counter money laundering, terrorist financing, and proliferation financing.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ statement published by Financial Action Task Force (FATF) at the end of each plenary meeting is often externally \n      referred to as the \"black list\"?",
      answer: "High-Risk Jurisdictions subject to a Call for Action.",
      description: "<ul>\n      <li>High-risk jurisdictions have significant strategic deficiencies in their regimes to counter money laundering, terrorist financing, \n      and financing of proliferation.</li>\n      <li>For all countries identified as high-risk, the FATF calls on all members and urges all jurisdictions to apply enhanced due \n      diligence, and in the most serious cases, countries are called upon to apply counter-measures to protect the international financial \n      system from the ongoing money laundering, terrorist financing, and proliferation financing (ML/TF/PF) risks emanating from the country.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Financial Action Task Force (FATF) Secretariat/Headquarters is located at the OECD Headquarters in _____?",
      answer: "Paris.",
      description: "<ul>\n      <li>The FATF President is a senior official appointed by the FATF Plenary from among its members.</li>\n      <li>The term of the President begins on 1 July and ends on 30 June, two years after assuming office. </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "India is a member of the FATF since _____?",
      answer: "2010."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FATFQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_FATFQAComponent = FATFQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FATFQAComponent, "\u0275fac", function FATFQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FATFQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FATFQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _FATFQAComponent,
  selectors: [["app-fatfqa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function FATFQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.fatfQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 0
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/iloqa/iloqa.component.ts ***!
  \*******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ILOQAComponent: () => (/* binding */ ILOQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _ILOQAComponent;


var ILOQAComponent = /*#__PURE__*/function () {
  function ILOQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ILOQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "International Labour Organization (ILO)");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "iloQAs", [{
      qaNumber: this.qaNumber++,
      question: "The International Labour Organization (ILO) was created as part of which treaty?",
      answer: "Treaty of Versailles.",
      description: "<ul>\n      <li>ILO is a tripartite U.N. agency which brings together governments, employers and workers.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The International Labour Organization (ILO) was created in the year _____ ?",
      answer: "1919.",
      description: "<ul>      \n      <li>In 1946, the ILO became a specialized agency of the newly formed United Nations.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Headquarters of the International Labour Organization (ILO) is in _____ ?",
      answer: "Geneva.",
      description: "<ul>\n      <li>The ILO moved to Geneva in the summer of 1920.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "The International Labour Organization (ILO) established the Geneva-based _____ in 1960?",
      answer: "International Institute for Labour Studies."
    }, {
      qaNumber: this.qaNumber++,
      question: "The International Labour Organization (ILO) established the _____ in Turin in 1965?",
      answer: "International Training Centre."
    }, {
      qaNumber: this.qaNumber++,
      question: "_____ are legal instruments drawn up by the ILO's constituents (governments, employers and workers) \n      for setting out basic principles and rights at work?",
      answer: "International labour standards.",
      description: "<ul>\n      <li>They are either <font color=\"white\">Conventions (or Protocols)</font>, which are legally binding international treaties \n      that may be ratified by member states, or <font color=\"white\">Recommendations</font>, which serve as non-binding guidelines.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Once an International labour standard is adopted at the annual International Labour Conference, \n      member states are required under article 19(6) of the ILO Constitution, to submit it to their competent authority \n      (normally Parliament) within a period of _____ months for consideration/ratification?",
      answer: "12.",
      description: "<ul>\n      <li>If it is ratified, a Convention generally comes into force for that country one year after the date of ratification.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "How many conventions have been identified by the International Labour Organization (ILO) Governing Body \n      as \u201Cfundamental\u201D?",
      answer: "8.",
      description: "<ul>\n      <li>The eight fundamental Conventions are:\n        <ol>\n          <li>Convention No.29</li>\n          <li>Convention No.87</li>\n          <li>Convention No.98</li>\n          <li>Convention No.100</li>         \n          <li>Convention No.105</li>\n          <li>Convention No.111</li>\n          <li>Convention No.138</li>\n          <li>Convention No.182</li>          \n        </ol>\n      </li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "What is convention No.87, a fundamental convention of the International Labour Organization (ILO)?",
      answer: "Freedom of Association and Protection of the Right to Organise Convention, 1948."
    }, {
      qaNumber: this.qaNumber++,
      question: "What is convention No.98, a fundamental convention of the International Labour Organization (ILO)?",
      answer: " Right to Organise and Collective Bargaining Convention, 1949."
    }, {
      qaNumber: this.qaNumber++,
      question: "What is convention No.29, a fundamental convention of the International Labour Organization (ILO)?",
      answer: " Forced Labour Convention, 1930."
    }, {
      qaNumber: this.qaNumber++,
      question: "What is convention No.105, a fundamental convention of the International Labour Organization (ILO)?",
      answer: " Abolition of Forced Labour Convention, 1957."
    }, {
      qaNumber: this.qaNumber++,
      question: "What is convention No.138, a fundamental convention of the International Labour Organization (ILO)?",
      answer: "Minimum Age Convention, 1973."
    }, {
      qaNumber: this.qaNumber++,
      question: "What is convention No.182, a fundamental convention of the International Labour Organization (ILO)?",
      answer: "Worst Forms of Child Labour Convention, 1999."
    }, {
      qaNumber: this.qaNumber++,
      question: "What is convention No.100, a fundamental convention of the International Labour Organization (ILO)?",
      answer: "Equal Remuneration Convention, 1951."
    }, {
      qaNumber: this.qaNumber++,
      question: "What is convention No.111, a fundamental convention of the International Labour Organization (ILO)?",
      answer: " Discrimination (Employment and Occupation) Convention, 1958."
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ILOQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_ILOQAComponent = ILOQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ILOQAComponent, "\u0275fac", function ILOQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ILOQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ILOQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ILOQAComponent,
  selectors: [["app-iloqa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function ILOQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.iloQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7144
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/international-institutions-and-agencies-qa.component.ts ***!
  \**************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternationalInstitutionsAndAgenciesQAComponent: () => (/* binding */ InternationalInstitutionsAndAgenciesQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _InternationalInstitutionsAndAgenciesQAComponent;


var InternationalInstitutionsAndAgenciesQAComponent = /*#__PURE__*/function () {
  function InternationalInstitutionsAndAgenciesQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InternationalInstitutionsAndAgenciesQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "International Institutions And Agencies");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "internationalInstitutionsAndAgenciesQAsindianPolityQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Financial Action Task Force (FATF) QA",
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/FATFQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "International Labour Organization (ILO) QA",
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/ILOQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "EastMed Gas Forum (EMGF) QA",
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/EMGFQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InternationalInstitutionsAndAgenciesQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_InternationalInstitutionsAndAgenciesQAComponent = InternationalInstitutionsAndAgenciesQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(InternationalInstitutionsAndAgenciesQAComponent, "\u0275fac", function InternationalInstitutionsAndAgenciesQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InternationalInstitutionsAndAgenciesQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(InternationalInstitutionsAndAgenciesQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _InternationalInstitutionsAndAgenciesQAComponent,
  selectors: [["app-international-institutions-and-agencies-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function InternationalInstitutionsAndAgenciesQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.internationalInstitutionsAndAgenciesQAsindianPolityQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 4504
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/other-countries-rules-and-developments-qa.component.ts ***!
  \************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtherCountriesRulesAndDevelopmentsQAComponent: () => (/* binding */ OtherCountriesRulesAndDevelopmentsQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _OtherCountriesRulesAndDevelopmentsQAComponent;


var OtherCountriesRulesAndDevelopmentsQAComponent = /*#__PURE__*/function () {
  function OtherCountriesRulesAndDevelopmentsQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OtherCountriesRulesAndDevelopmentsQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Other Countries - Rules And Developments");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "otherCountriesRulesAndDevelopmentsQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "United States Of America QA",
      wbRoute: '/PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA/UnitedStatesOfAmericaQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OtherCountriesRulesAndDevelopmentsQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_OtherCountriesRulesAndDevelopmentsQAComponent = OtherCountriesRulesAndDevelopmentsQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(OtherCountriesRulesAndDevelopmentsQAComponent, "\u0275fac", function OtherCountriesRulesAndDevelopmentsQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OtherCountriesRulesAndDevelopmentsQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(OtherCountriesRulesAndDevelopmentsQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _OtherCountriesRulesAndDevelopmentsQAComponent,
  selectors: [["app-other-countries-rules-and-developments"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function OtherCountriesRulesAndDevelopmentsQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.otherCountriesRulesAndDevelopmentsQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 7598
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/united-states-of-america-qa/united-states-of-america-qa.component.ts ***!
  \**************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitedStatesOfAmericaQAComponent: () => (/* binding */ UnitedStatesOfAmericaQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../StructuralComponents/display-qa/display-qa.component */ 9118);



var _UnitedStatesOfAmericaQAComponent;


var UnitedStatesOfAmericaQAComponent = /*#__PURE__*/function () {
  function UnitedStatesOfAmericaQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UnitedStatesOfAmericaQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "qaNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "United States Of America");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "unitedStatesOfAmericaQAs", [{
      qaNumber: this.qaNumber++,
      question: "Which Visa program of the USA allows individuals to work in specialty occupations?",
      answer: "H-1B.",
      description: "<ul>\n      <li>A bachelor's or higher degree or its equivalent is normally the minimum requirement for such specialty occupations.</li>\n      <li>Limit: 65,000 new visas each year.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "H-1B visa is normally granted for a period of up to _____ years?",
      answer: "3 years.",
      description: "<ul>\n      <li>Time period may be extended, but generally cannot go beyond a total of 6 years.</li>\n      </ul>"
    }, {
      qaNumber: this.qaNumber++,
      question: "Spouse and unmarried children (under 21 years of age) of the H-1B visa holder may seek admission to the US\n      under which visa classification?",
      answer: "H-4 visa.",
      description: "<ul>\n      <li>Similar to H-1B visa classification, H-4 is also a nonimmigrant classification.</li>\n      </ul>"
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UnitedStatesOfAmericaQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_UnitedStatesOfAmericaQAComponent = UnitedStatesOfAmericaQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(UnitedStatesOfAmericaQAComponent, "\u0275fac", function UnitedStatesOfAmericaQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UnitedStatesOfAmericaQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(UnitedStatesOfAmericaQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _UnitedStatesOfAmericaQAComponent,
  selectors: [["app-united-states-of-america-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qas", "workbookName"]],
  template: function UnitedStatesOfAmericaQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qa", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qas", ctx.unitedStatesOfAmericaQAs)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qa_display_qa_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAComponent],
  encapsulation: 2
}));

/***/ },

/***/ 1420
/*!*********************************************************************************************!*\
  !*** ./src/app/general-awareness-qa/political-science-qa/political-science-qa.component.ts ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PoliticalScienceQAComponent: () => (/* binding */ PoliticalScienceQAComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StructuralComponents/display-qawb-list/display-qawb-list.component */ 2990);



var _PoliticalScienceQAComponent;


var PoliticalScienceQAComponent = /*#__PURE__*/function () {
  function PoliticalScienceQAComponent() {
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PoliticalScienceQAComponent);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wbNumber", 1);
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "workbookName", "Political Science");
    (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "politicalScienceQAWbList", [{
      wbNumber: this.wbNumber++,
      wbName: "Indian Polity QA",
      wbRoute: '/PoliticalScienceQA/IndianPolityQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "International Institutions And Agencies QA",
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "International Agreements And Groupings QA",
      wbRoute: '/PoliticalScienceQA/InternationalAgreementsAndGroupingsQA'
    }, {
      wbNumber: this.wbNumber++,
      wbName: "Other Countries - Rules And Developments QA",
      wbRoute: '/PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA'
    }]);
  }
  return (0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PoliticalScienceQAComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
_PoliticalScienceQAComponent = PoliticalScienceQAComponent;
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PoliticalScienceQAComponent, "\u0275fac", function PoliticalScienceQAComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PoliticalScienceQAComponent)();
});
(0,_home_runner_work_QAWorkbook_QAWorkbook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PoliticalScienceQAComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PoliticalScienceQAComponent,
  selectors: [["app-polity-qa"]],
  standalone: false,
  decls: 1,
  vars: 2,
  consts: [[3, "qaWbList", "workbookName"]],
  template: function PoliticalScienceQAComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-display-qawb-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("qaWbList", ctx.politicalScienceQAWbList)("workbookName", ctx.workbookName);
    }
  },
  dependencies: [_StructuralComponents_display_qawb_list_display_qawb_list_component__WEBPACK_IMPORTED_MODULE_4__.DisplayQAWbListComponent],
  encapsulation: 2
}));

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 9736);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills */ 4050);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 635);



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule).then(function (ref) {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
  // Otherwise, log the boot error
})["catch"](function (err) {
  return console.error(err);
});

/***/ },

/***/ 4050
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 4124);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map