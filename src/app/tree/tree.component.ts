import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  @Input() roots: any[] = [];
  isFormVisible = false;
  isFileFolder = false;
  type = '';
  currentId : number = 0; 

  chooseFileFolder(id:number){
    this.isFileFolder = true;
    this.currentId = id;
  }
  openForm(type:string, id:number){
    this.isFormVisible=true;
    this.type = type;
    this.isFileFolder = false;
    this.currentId = id;

  }
  addChildren(parentId:number){
    let folder = this.roots.find(folder=>folder.id == parentId);
    let child = {'id': Math.floor(1000 + Math.random() * 9000), 'name':this.form.controls.name.value, 'type':this.type, 'children':[]};
    folder.children.push(child);
    this.isFormVisible=false;
    this.form.reset();
  }

  deleteFolderFilde(parentId:number){
    let folder = this.roots.findIndex(folder=>folder.id == parentId);
    this.roots.splice(folder,1);
  }

  closeForm(){
    this.isFormVisible = false;
    this.form.reset();
  }


}
