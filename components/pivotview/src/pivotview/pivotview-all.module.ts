import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotViewComponent } from './pivotview.component';
import { PivotViewModule } from './pivotview.module';
import {GroupingBar, FieldList, CalculatedField, ConditionalFormatting, VirtualScroll} from '@syncfusion/ej2-pivotview'


export const GroupingBarService: ValueProvider = { provide: 'PivotViewGroupingBar', useValue: GroupingBar};
export const FieldListService: ValueProvider = { provide: 'PivotViewFieldList', useValue: FieldList};
export const CalculatedFieldService: ValueProvider = { provide: 'PivotViewCalculatedField', useValue: CalculatedField};
export const ConditionalFormattingService: ValueProvider = { provide: 'PivotViewConditionalFormatting', useValue: ConditionalFormatting};
export const VirtualScrollService: ValueProvider = { provide: 'PivotViewVirtualScroll', useValue: VirtualScroll};

/**
 * NgModule definition for the PivotView component with providers.
 */
@NgModule({
    imports: [CommonModule, PivotViewModule],
    exports: [
        PivotViewModule
    ],
    providers:[
        GroupingBarService,
        FieldListService,
        CalculatedFieldService,
        ConditionalFormattingService,
        VirtualScrollService
    ]
})
export class PivotViewAllModule { }