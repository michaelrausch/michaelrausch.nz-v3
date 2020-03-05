import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { JumbotronComponent } from './about/components/jumbotron/jumbotron.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CurrentProjectsComponent } from './about/components/current-projects/current-projects.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { CtaSectionComponent } from './about/components/cta-section/cta-section.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ResumePageComponent } from './resume/resume-page/resume-page.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { ContactFormComponent } from './contact/components/contact-form/contact-form.component';
import { ContactInfoComponent } from './contact/components/contact-info/contact-info.component';
import { BtnLargeComponent } from './shared/btn-large/btn-large.component';
import { ResumeSectionComponent } from './resume/components/resume-section/resume-section.component';
import { ResumeSectionHeaderComponent } from './resume/components/resume-section-header/resume-section-header.component';
import { ResumeSectionBlurbComponent } from './resume/components/resume-section-blurb/resume-section-blurb.component';
import { ResumeSectionContentWithGlyphComponent } from './resume/components/resume-section-content-with-glyph/resume-section-content-with-glyph.component';
import { EducationComponent } from './resume/components/education/education.component';
import { SkillsComponent } from './resume/components/skills/skills.component';
import { FeaturedProjectsComponent } from './resume/components/featured-projects/featured-projects.component';
import { ResumeCtaComponent } from './resume/components/resume-cta/resume-cta.component';
import { AlertComponent } from './shared/alert/alert.component';
import { environment } from '../environments/environment';
import { SocialIconComponent } from './contact/components/social-icon/social-icon.component';
import { HomePageComponent } from './homepage/home-page/home-page.component';
import { WidgetComponent } from './homepage/components/widget/widget.component';
import { CtaBlockComponent } from './shared/cta-block/cta-block.component';
import { ShowcaseImageWideComponent } from './shared/showcase-image-wide/showcase-image-wide.component';

import { ParticlesModule } from 'angular-particle';
import { ProjectModalComponent } from './shared/project-modal/project-modal.component';
import { YoutubeEmbedComponent } from './shared/youtube-embed/youtube-embed.component';
import { Error404Component } from './Error404/Error404.component';
import { CustomLandingPage } from './custom-landing/custom-landing-page/custom-landing-page.component';
import { PdfViewerComponent } from './shared/pdf-viewer/pdf-viewer.component';
import { CtaPopupComponent } from './shared/cta-popup/cta-popup.component';
import { MapComponent } from './shared/map/map.component';
import { ContactItemComponent } from './contact/components/contact-item/contact-item.component';
import { ContactService } from './services/contact.service';
import { GoogleSearchComponent } from './homepage/components/google-search/google-search.component';

const routes: Routes = [
  { path: '', component: AboutPageComponent},
  { path: 'cv', component: ResumePageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'c/:id', component: CustomLandingPage },
  { path: "**", component: Error404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JumbotronComponent,
    FooterComponent,
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
    EducationComponent,
    SkillsComponent,
    FeaturedProjectsComponent,
    ResumeCtaComponent,
    ContactItemComponent,
    AlertComponent,
    SocialIconComponent,
    HomePageComponent,
    GoogleSearchComponent,
    WidgetComponent,
    CtaBlockComponent,
    ShowcaseImageWideComponent,
    ProjectModalComponent,
    YoutubeEmbedComponent,
    Error404Component,
    CustomLandingPage,
    PdfViewerComponent,
    CtaPopupComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ParticlesModule,
    PdfViewerModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }