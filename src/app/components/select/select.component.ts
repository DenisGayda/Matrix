import { Component, ChangeDetectionStrategy, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  // @Input() array: string[];
  public array: string[] = ['option1', 'option2', 'option3', 'option4', 'option5'];
  public selectForm: FormGroup;

  ngOnInit() {
    this.selectForm = new FormGroup({
      selectedValue: new FormControl(this.array),
    });
    // this.selectedValue.valueChanges.subscribe(value => console.log(value));
  }
}
