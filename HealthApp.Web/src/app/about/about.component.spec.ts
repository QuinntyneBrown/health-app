import { AboutComponent } from './about.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('AboutComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AboutComponent).then(fixture => {
                expect(fixture.componentInstance instanceof AboutComponent).toBe(true, 'should create AboutComponent');
            });
        })));    
});
