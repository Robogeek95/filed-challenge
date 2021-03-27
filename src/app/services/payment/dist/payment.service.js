"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentService = void 0;
var core_1 = require("@angular/core");
var PaymentService = /** @class */ (function () {
    function PaymentService(store, http) {
        this.store = store;
        this.http = http;
    }
    PaymentService.prototype.makePayment = function (details) {
        // this.http.post()
        this.addProduct(details);
    };
    PaymentService.prototype.addProduct = function (details) {
        this.store.dispatch({
            type: 'ADD_DETAIL',
            payload: {
                firstName: details.firstName,
                lastName: details.lastName,
                monthlyAdBudget: details.monthlyAdBudget,
                phone: details.phone,
                email: details.email
            }
        });
    };
    PaymentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
