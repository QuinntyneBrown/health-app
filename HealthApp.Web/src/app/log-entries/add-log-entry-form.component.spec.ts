import { AddLogEntryFormComponent } from './add-log-entry-form.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('AddLogEntryFormComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AddLogEntryFormComponent).then(fixture => {
                expect(fixture.componentInstance instanceof AddLogEntryFormComponent).toBe(true, 'should create AddLogEntryFormComponent');
            });
        })));    
});
