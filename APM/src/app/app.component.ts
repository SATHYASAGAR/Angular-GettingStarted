import { Component } from "@angular/core";
import { productService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `,
  providers:[productService]

})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}