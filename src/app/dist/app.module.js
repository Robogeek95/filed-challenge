"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var header_component_1 = require("./header/header.component");
var animations_1 = require("@angular/platform-browser/animations");
var grid_list_1 = require("@angular/material/grid-list");
var trial_form_component_1 = require("./trial-form/trial-form.component");
var navbar_component_1 = require("./navbar/navbar.component");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var input_1 = require("@angular/material/input");
var offer_component_1 = require("./offer/offer.component");
var benefits_component_1 = require("./benefits/benefits.component");
var feedbacks_component_1 = require("./feedbacks/feedbacks.component");
var footer_component_1 = require("./footer/footer.component");
var icon_1 = require("@angular/material/icon");
var form_field_1 = require("@angular/material/form-field");
var trial_page_component_1 = require("./trial-page/trial-page.component");
var home_component_1 = require("./home/home.component");
var store_1 = require("@ngrx/store");
var details_reducer_1 = require("./reducers/details.reducer");
var appearance = {
    appearance: 'outline'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                trial_form_component_1.TrialFormComponent,
                navbar_component_1.NavbarComponent,
                offer_component_1.OfferComponent,
                benefits_component_1.BenefitsComponent,
                feedbacks_component_1.FeedbacksComponent,
                footer_component_1.FooterComponent,
                trial_page_component_1.TrialPageComponent,
                home_component_1.HomeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                grid_list_1.MatGridListModule,
                button_1.MatButtonModule,
                radio_1.MatRadioModule,
                form_field_1.MatFormFieldModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                http_1.HttpClientModule,
                store_1.StoreModule.forRoot({ detail: details_reducer_1.addDetailReducer }),
            ],
            providers: [
                {
                    provide: form_field_1.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                    useValue: appearance
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
