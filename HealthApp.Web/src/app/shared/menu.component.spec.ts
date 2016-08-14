import { MenuComponent } from './menu.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('MenuComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(MenuComponent).then(fixture => {
                expect(fixture.componentInstance instanceof MenuComponent).toBe(true, 'should create MenuComponent');
            });
        })));    
});
