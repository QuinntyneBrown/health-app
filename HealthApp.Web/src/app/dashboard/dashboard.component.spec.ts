import { DashboardComponent } from './dashboard.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('DashboardComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(DashboardComponent).then(fixture => {
                expect(fixture.componentInstance instanceof DashboardComponent).toBe(true, 'should create DashboardComponent');
            });
        })));    
});
