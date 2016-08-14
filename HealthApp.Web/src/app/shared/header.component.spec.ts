import { HeaderComponent } from './header.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('HeaderComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(HeaderComponent).then(fixture => {
                expect(fixture.componentInstance instanceof HeaderComponent).toBe(true, 'should create HeaderComponent');
            });
        })));    
});
