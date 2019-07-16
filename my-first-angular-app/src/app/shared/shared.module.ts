import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule ({
    declarations: [ CapitalizePipe], // declarations of a module can have 3 things: pipes, directives, components
    exports: [ CapitalizePipe ]
})

export class SharedModule {
    
}