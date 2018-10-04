import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Host } from '../host';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HostServiceService {

  hostCollection: AngularFirestoreCollection<Host>
  host3Collection: AngularFirestoreCollection<Host>
  hostList: AngularFirestoreDocument<Host>
  hostDoc: AngularFirestoreDocument<Host>

  constructor(private afs: AngularFirestore, private router: Router) { 
    this.hostCollection = this.afs.collection(`accomodation-listing`, ref =>
        ref.orderBy('published', 'desc')
      )
      this.host3Collection = this.afs.collection(`accomodation-listing`, ref =>
      ref.orderBy('published', 'desc').limit(4)
    )
  }

  getPosts(){
    return this.hostCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Host
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }))}

  create(data: Host){
    this.hostCollection.add(data) 
  }

  getPost(id: string){
    return this.afs.doc<Host>(`accomodation-listing/${id}`)
  }

  delete(id: string){
    this.getPost(id).delete()
  }


  get3Posts(){
    return this.host3Collection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Host
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }))}

  getPostData(id: string){
    this.hostDoc = this.afs.doc<Host>(`accomodation-listing/${id}`)
    return  this.hostDoc.valueChanges()
   }

   //getImages(id: string)){
   // return this.hostCollection.snapshotChanges().pipe(map(actions=>{
   //   return actions.map(a =>{
   //     const data = a.payload.doc<Host>(`accomodation-listing/${id}`).data().image as Host
   //     const id = a.payload.doc.id
   //     return { id, ...data}
   //   })
   // }))}

   update(id: string, formData){
    return this.getPost(id).update(formData)
    .then(() =>
    this.router.navigate(['/'])
    )
   }
   
}
