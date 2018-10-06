import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



//Servicios
import {SpeechRecognitionService} from "./services/speech-recognition.service";
import { SpeechSynthesizerService } from "./services/speech-synthesizer.service";
import { DialogflowService } from "./services/dialogflow.service";

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Services } from '@angular/core/src/view';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    SpeechRecognitionService,
    SpeechSynthesizerService,
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
