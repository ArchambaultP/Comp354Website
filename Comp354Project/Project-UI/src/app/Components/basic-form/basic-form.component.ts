import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

    categories = ['Clothes', 'Electronics', 'Sports'];
    submitted = false;
    selectedFile: File = null;
    public imagePath;
    imgURL: any;
    public message:string;

    onSubmit(value: any){
        this.submitted = true;
        console.log(value);

        //const fd = new FormData();
        //fd.append('image', this.selectedFile, this.selectedFile.name);
        //this.http.post('', fd).subscribe(res => {console.log(res)});
    }
    onFileSelected(files){
        //this.selectedFile = <File>event.target.files[0];
        if (files.length === 0)
              return;

            var mimeType = files[0].type;
            if (mimeType.match(/image\/*/) == null) {
              this.message = "Only images are supported.";
              return;
             }
             var reader = new FileReader();
             this.imagePath = files;
             reader.readAsDataURL(files[0]);
             reader.onload = (_event) => {
                this.imgURL = reader.result;
             }
    }




}
