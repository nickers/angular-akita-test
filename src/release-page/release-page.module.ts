import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { FiltersScreenComponent } from './components/filters-screen/filters-screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterListComponent, FiltersScreenComponent],
  exports: [FilterListComponent, FiltersScreenComponent]
})
export class ReleasePageModule { }