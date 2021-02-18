import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";

import { DragDropModule } from '@angular/cdk/drag-drop';

const MATERIAL_MODULES = [MatButtonModule, MatChipsModule, DragDropModule];

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule {}
