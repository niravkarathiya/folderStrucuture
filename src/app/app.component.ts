import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  folderForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  fileForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  childFolderForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  isFormFolderVisible = false;
  isFileFormVisible = false;
  isChileFolderForm=false;
  isEmpty = true;
  isError = false;
  rootFolder: string[] = [];
  childFolder:string[]=[];
  isButtonVisible = false;

  rootClick() {
    this.isFormFolderVisible = true;
  }
  closeFolderForm() {
    this.isFormFolderVisible = false;
    this.isError = false;
    this.folderForm.reset();
  }
  checkFolderInput() {
    if (!this.folderForm.controls.name.value) {
      this.isError = true;
    } else {
      this.isError = false;
      this.rootFolder.push(this.folderForm.controls.name.value);
      this.closeFolderForm();
      this.folderForm.reset();
    }
  }
  addFolderFile() {
    this.isButtonVisible = true;
  }
  removeFolder(i: any) {
    this.rootFolder.splice(this.rootFolder.indexOf(i), 1);
  }

  openFileForm() {
    this.isFileFormVisible = true;
  }
  closeFileForm() {
    this.isFileFormVisible = false;
    this.isError = false;
    this.fileForm.reset();
  }
  checkFileInput() {
    if (!this.fileForm.controls.name.value) {
      this.isError = true;
    } else {
      this.isError = false;
      this.closeFileForm();
      this.fileForm.reset();
    }
  }
  childFolderClick(){
    this.isChileFolderForm = true;
  }
  closeChildFolderForm() {
    this.isChileFolderForm = false;
    this.isError = false;
    this.childFolderForm.reset();
  }
  checkChildFolderInput() {
    if (!this.childFolderForm.controls.name.value) {
      this.isError = true;
    } else {
      this.childFolder.push(this.childFolderForm.controls.name.value);
      this.isError = false;
      this.closeFolderForm();
      this.childFolderForm.reset();
    }
  }
}


/* 

checkChildFolderInput() {
  if (!this.childFolderForm.controls.name.value) {
    this.isError = true;
  } else {
    const node = document.createElement("li");
    const img = document.createElement('img');
    img.src = '/src/assets/img/check-mark-circle-icon.svg';
    let folderName = this.childFolderForm.controls.name.value;
    const textnode = document.createTextNode(folderName || '');
    node.appendChild(textnode);
    document.getElementById("myList")?.appendChild(node);
    document.getElementById("myList")?.appendChild(img);
  } 

 */