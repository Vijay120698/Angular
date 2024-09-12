import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
capacity: any;
price: any;
screenSize: any;
products: any;
onSubmit() {
throw new Error('Method not implemented.');
}
  apiUrl = 'https://api.restful-api.dev/objects';
  data: any[] = [];
name: any;
color: any;
 
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    this.fetchDataFromStoredIds();
  }
 
  fetchDataFromStoredIds() {
    if (typeof window !== 'undefined') {
      const storedIds = localStorage.getItem('Id');
 
      if (storedIds) {
        try {
          const ids = JSON.parse(storedIds);
          if (Array.isArray(ids) && ids.length > 0) {
            const queryParams = ids
              .map((id) => `id=${encodeURIComponent(id)}`)
              .join('&');
            const url = `${this.apiUrl}?${queryParams}`;
 
            this.http.get<any[]>(url).subscribe(
              (response) => {
                console.log('Data fetched from API:', response);
                this.data = response;
                // Handle the response data as needed
              },
              (error) => {
                console.error('Error fetching data from API:', error);
              }
            );
          }
        } catch (e) {
          console.error('Error parsing JSON from local storage', e);
        }
      } else {
        console.warn('No IDs found in local storage');
      }
    }
  }
}
 