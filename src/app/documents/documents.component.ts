import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['/documents.component.css']
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "adklfdfjlkdfj,fkldjflkdjf",
      file_url: "http://google.com",
      updated_at: '1/9/2017',
      image_url: 'http://www.artshine.com.au/wp-content/uploads/2017/08/3-Mistakes-That-Stop-Freelancers-From-Getting-Repeat-Business-artshine.com_.au_.png',
    },
    {
      title: "My Second Doc",
      description: "adklfdfjlkdfj,fkldjflkdjf",
      file_url: "http://google.com",
      updated_at: '1/9/2017',
      image_url: 'http://www.artshine.com.au/wp-content/uploads/2017/08/3-Mistakes-That-Stop-Freelancers-From-Getting-Repeat-Business-artshine.com_.au_.png',
    },
    {
      title: "My Last Doc",
      description: "adklfdfjlkdfj,fkldjflkdjf",
      file_url: "http://google.com",
      updated_at: '1/9/2017',
      image_url: 'http://www.artshine.com.au/wp-content/uploads/2017/08/3-Mistakes-That-Stop-Freelancers-From-Getting-Repeat-Business-artshine.com_.au_.png',
    },
  ]
}