import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs';

interface Input { 
  name: string;
  color: string;
  message: string;
  timestamp: firebase.default.firestore.Timestamp;  
}

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent {

  inputCol: AngularFirestoreCollection<Input>;
  inputs: Observable<Input[]>;

  name: string = "";
  message: string = "";
  color: string = "";

  constructor(private db: AngularFirestore) {
    this.inputCol = this.db.collection<Input>("digicommer", ref => ref.orderBy('timestamp'));
    this.inputs = this.inputCol.valueChanges();
  }
  
  add() {
    this.db.collection('digicommer').add({ 
      "timestamp": new Date(),
      "name": this.name,
      "color": this.color,
      "message": this.message})
  }
}

