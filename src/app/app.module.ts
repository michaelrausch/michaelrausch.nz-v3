import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NguiMapModule} from '@ngui/map';
import { MatomoModule } from 'ngx-matomo';
import { PdfViewerModule } from 'ng2-pdf-viewer';

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
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { GoogleSearchComponent } from './pages/home/components/google-search/google-search.component';
import { WidgetComponent } from './pages/home/components/widget/widget.component';
import { ProjectPageComponent } from './pages/project/project-page/project-page.component';
import { CtaBlockComponent } from './pages/project/components/cta-block/cta-block.component';
import { ShowcaseImageWideComponent } from './pages/project/components/showcase-image-wide/showcase-image-wide.component';

import { ParticlesModule } from 'angular-particle';
import { Seng404BlogPostComponent } from './pages/project/project-pages/seng404-blog-post/seng404-blog-post.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { YoutubeEmbedComponent } from './components/youtube-embed/youtube-embed.component';
import { Error404Component } from './pages/Error404/Error404.component';
import { EmployerPageComponent } from './pages/employer-page/employer-page.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { CtaPopupComponent } from './components/cta-popup/cta-popup.component';

const routes: Routes = [
  { path: '', component: AboutPageComponent},
  { path: 'cv', component: ResumePageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'project/hard-times', component: ProjectPageComponent},
  { path: 'project/requirements-blog-post', component: Seng404BlogPostComponent},
  { path: 'e/:id', component: EmployerPageComponent },
  { path: "**", component: Error404Component}
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
    SocialIconComponent,
    HomePageComponent,
    GoogleSearchComponent,
    WidgetComponent,
    ProjectPageComponent,
    CtaBlockComponent,
    ShowcaseImageWideComponent,
    Seng404BlogPostComponent,
    ProjectModalComponent,
    YoutubeEmbedComponent,
    Error404Component,
    EmployerPageComponent,
    PdfViewerComponent,
    CtaPopupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: environment.google_maps_api_url}),
    ParticlesModule,
    MatomoModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }