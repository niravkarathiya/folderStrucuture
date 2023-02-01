import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  roots = new Array;
  isInputVisible = false;
  addRootFolder(){
    this.isInputVisible = true;
  }
  addToRoot(){
    const folder  = {'id': Math.floor(1000 + Math.random() * 9000), 'name': this.form.controls.name.value, 'type':'folder', 'children':[]}
    this.roots.push(folder);
    this.form.reset();
    this.isInputVisible=false;
  }

  closeForm(){
    this.isInputVisible = false;
    this.form.reset();
  }
}
