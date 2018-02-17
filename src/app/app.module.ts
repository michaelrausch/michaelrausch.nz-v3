import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NguiMapModule} from '@ngui/map';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { JumbotronComponent } from './pages/about/components/jumbotron/jumbotron.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutSectionComponent } from './pages/about/components/about-section/about-section.component';
import { CurrentProjectsComponent } from './pages/about/components/current-projects/current-projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CtaSectionComponent } from './pages/about/components/cta-section/cta-section.component';
import { AboutPageComponent } from './pages/about/about-page/about-page.component';
import { ResumePageComponent } from './pages/resume/resume-page/resume-page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ContactPageComponent } from './pages/contact/contact-page/contact-page.component';
import { ContactFormComponent } from './pages/contact/sections/contact-form/contact-form.component';
import { ContactInfoComponent } from './pages/contact/sections/contact-info/contact-info.component';
import { BtnLargeComponent } from './components/buttons/btn-large/btn-large.component';
import { ResumeSectionComponent } from './pages/resume/components/resume-section/resume-section.component';
import { ResumeSectionHeaderComponent } from './pages/resume/components/resume-section-header/resume-section-header.component';
import { ResumeSectionBlurbComponent } from './pages/resume/components/resume-section-blurb/resume-section-blurb.component';
import { ResumeSectionContentWithGlyphComponent } from './pages/resume/components/resume-section-content-with-glyph/resume-section-content-with-glyph.component';
import { AboutComponent } from './pages/resume/sections/about/about.component';
import { EducationComponent } from './pages/resume/sections/education/education.component';
import { SkillsComponent } from './pages/resume/sections/skills/skills.component';
import { FeaturedProjectsComponent } from './pages/resume/sections/featured-projects/featured-projects.component';
import { ResumeCtaComponent } from './pages/resume/sections/resume-cta/resume-cta.component';
import { ContactItemComponent } from './pages/contact/components/contact-item/contact-item.component';
import { AlertComponent } from './components/alert/alert.component';
import { environment } from '../environments/environment';
import { SocialIconComponent } from './pages/contact/sections/social-icon/social-icon.component';

const routes: Routes = [
  { path: '', component: AboutPageComponent},
  { path: 'resume', component: ResumePageComponent},
  { path: 'contact', component: ContactPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JumbotronComponent,
    FooterComponent,
    AboutSectionComponent,
    CurrentProjectsComponent,
    ProjectCardComponent,
    CtaSectionComponent,
    AboutPageComponent,
    ResumePageComponent,
    PageHeaderComponent,
    ContactPageComponent,
    ContactFormComponent,
    ContactInfoComponent,
    BtnLargeComponent,
    ResumeSectionComponent,
    ResumeSectionHeaderComponent,
    ResumeSectionBlurbComponent,
    ResumeSectionContentWithGlyphComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    FeaturedProjectsComponent,
    ResumeCtaComponent,
    ContactItemComponent,
    AlertComponent,
    SocialIconComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: environment.google_maps_api_url})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
