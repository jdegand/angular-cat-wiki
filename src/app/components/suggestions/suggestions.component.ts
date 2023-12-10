import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breed } from '../../interfaces/Breed';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css',
})
export class SuggestionsComponent implements OnChanges {

  matchedBreeds: string[] = [];

  private _breeds: string[] = [];

  @Input() searchTerm = '';

  @Input() handleSuggestion!: ((event: any) => void);

  @Input() set breeds(json: Breed[]) {
    this._breeds = json.map(el => el.name.toLowerCase());
  }

  handleClick(event: any) {
    this.handleSuggestion(event);
  }

  ngOnChanges() {
    this.matchedBreeds = this._breeds.filter(name => name.includes(this.searchTerm.toLowerCase()));
  }

}
