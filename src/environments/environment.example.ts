// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  api_url: "",
  google_maps_api_url: "",
  employer_content_url: "",
  cv_download: "",
  social: {
    github: "",
    linkedin: "",
    facebook: "",
    px500: "",
    twitter: ""
  },
  version: {
    app: "",
    api: ""
  }
};