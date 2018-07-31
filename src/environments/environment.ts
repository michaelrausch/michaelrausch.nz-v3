// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  api_url: "https://api.michaelrausch.nz/contact",
  google_maps_api_url: "https://maps.google.com/maps/api/js?key=AIzaSyA22kfHDqa24r-eCqNI9lWkWXpYfvMgMDU",
  cv_download: "/assets/Michael_Rausch_CV.pdf",
  social: {
    bitbucket: "https://bitbucket.org/michaelrausch",
    linkedin: "https://www.linkedin.com/in/michael-rausch-13445b8a/",
    facebook: "https://www.facebook.com/michael.rausch123",
    px500: "https://500px.com/michael_rausch",
    twitter: "https://twitter.com/michaelrausch_"
  },
  version: {
    app: "1D0005",
    api: "2B0001"
  }
};