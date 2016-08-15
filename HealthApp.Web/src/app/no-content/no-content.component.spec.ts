import { NoContentComponent } from './no-content.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('NoContentComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(NoContentComponent).then(fixture => {
                expect(fixture.componentInstance instanceof NoContentComponent).toBe(true, 'should create NoContentComponent');
            });
        })));    
});
