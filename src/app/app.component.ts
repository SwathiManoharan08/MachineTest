import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'machinetest';
  public toDoList:any = [] ;
  public isEditable = true;

  addList(item: string){
  
    this.toDoList.push({id:item.length,name:item, newName:[]})
    console.log(this.toDoList);    
  }
  removeTask(id: number){ 
       
    this.toDoList= this.toDoList.filter((item:any) =>item.id !== id)
  }  
  editTask(id:any){  
  this.isEditable;
  
  }


}
