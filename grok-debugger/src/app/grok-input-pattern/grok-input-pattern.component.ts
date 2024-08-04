import { Component, OnInit } from '@angular/core';
import { GrokInputService } from '../grok.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grok-input-pattern',
  templateUrl: './grok-input-pattern.component.html',
  styleUrls: ['./grok-input-pattern.component.css']
})
export class GrokInputPatternComponent implements OnInit {

  grokInput = "asdfasfddfsfasdfasdfasdfasdfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
  grokPattern = "%{GREEDYDATA:data}"
  grokOutput = ""

  constructor(public grokInputService: GrokInputService,  private router: Router) { }

  ngOnInit(): void {
  }

  changed(): void {
    let grok_input_data = {
      grokInput: this.grokInput,
      grokPattern: this.grokPattern,
    }
    this.grokInputService.grokInput(grok_input_data).subscribe(response => {
      this.grokOutput = JSON.stringify(response, null, 4);
      
      // console.log(response)
    });
  }

  // newMessage() {
  //   this.data.changeMessage("Hello from a unrelated component");
  // }

}
