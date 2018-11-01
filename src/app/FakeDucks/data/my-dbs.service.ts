import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { Stories } from './../stories'
// import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyDBsService {
    newData : any;
    constructor(
        // private http: HttpClient
    ) { }

    createDb(whatsUp,data) {

        const stories = [
            {
                id: 1,
                story: "Lorem Ipsum is simply ....",
                title: "What is Lorem Ipsum?",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
            },
            {
                id: 2,
                story: "Lorem Ipsum is simply ....",
                title: "What is Lorem Ipsum?",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
            }
        ];
        // this.http.get('./../../../assets/data.json')
        // .map(res => res.json())

        if (whatsUp == 'getStories') {
            return { stories };
        }
        else if (whatsUp == 'iGotData') {
            debugger
            console.log(data);
            this.newData ={
                id: 23,
                story: "Lor is simply ....",
                title: "What issum?",
                details: "Loremng industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
            }
            stories.push( this.newData)

            console.log(stories);
            
            
        }
    }
}

