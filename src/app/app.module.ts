import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentsComponent } from './parents/parents.component';
import { ChildComponent } from './child/child.component';
import { FormsModule  } from '@angular/forms';
import { ParentProductListComponent } from './parent-product-list/parent-product-list.component';
import { ChildProductComponent } from './child-product/child-product.component';
import { ParentInshuranceComponent } from './parent-inshurance/parent-inshurance.component';
import { InshuranceTypechildComponent } from './inshurance-typechild/inshurance-typechild.component';
import { TableParentComponent } from './table-parent/table-parent.component';
import { TableChildComponent } from './table-child/table-child.component';
import { InshuranceNewParentComponent } from './inshurance-new-parent/inshurance-new-parent.component';
import { InshuranceChildComponent } from './inshurance-new-child/inshurance-child.component';
import { ParentPracticeComponentComponent } from './parent-practice-component/parent-practice-component.component';
import { ChildPracticeComponentComponent } from './child-practice-component/child-practice-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    ChildComponent,
    ParentProductListComponent,
    ChildProductComponent,
    ParentInshuranceComponent,
    InshuranceTypechildComponent,
    TableParentComponent,
    TableChildComponent,
    InshuranceNewParentComponent,
    InshuranceChildComponent,
    ParentPracticeComponentComponent,
    ChildPracticeComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
