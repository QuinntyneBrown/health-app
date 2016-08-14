import { AppComponent } from './app.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('AppComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AppComponent).then(fixture => {
                expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
            });
        })));    
});
