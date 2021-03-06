## MapX : change log
- 1.5.13 
   - Removed a bug where a dashboard was not removed if no source layer where used
   - Use pointer events instead of mouse event
   - Added a 'minimize' button in modal windows
   - Removed resize corner in modal windows – ( it's not widely used and it produced a bug with flexbox )
- 1.5.12
   - Solved an issue in view button when a zoom was applied in the browser: the nested circle was not well aligned producing a weird effect. Using SVG, the problem as been solved. 
   - Update dependencies, see `app/package.json`
   - Changed the service worker generator to `workbox-webpack-plugin` 
   - Solved #277 where removal of a project did not remove releated views that does not had sources (raster, story, etc). 
- 1.5.11
   - Solved #276
   - Solved #274
   - Added a function to unregister service worker 
- 1.5.10
   - New radial progress svg constructor
   - Direct local storage for views object, in addition to browser cache and service worker cache. Faster. 
   - Bug fixes : label too long in map data properties query popup. Display the full thing on hover.
   - Code cleaning
- 1.5.9
   - Improvement of road style : added more than 30 layers extracted and modified from style "Lè Shine" (https://frama.link/leshine),
   - Integrated simplified colors setting for roads, road border and building in style editor.
- 1.5.8
   - Solved #272 : the built date was wrong in the encrypted mail validation.
- 1.5.7
   - Add service worker to cache assets and tiles,
   - Migrate language dict file to JSON, instead of csv, to be able to merge pull requests more easily,
   - Minor changes.
- 1.5.6 
   - Updated version of R,
   - Added api upload for geojson stored client side,
   - Minor changes.
- 1.5.5
   - Added query parameter support to filter max role for view fetching : `?filterViewsByRoleMax=public` will show all public views only,
   - Added styling option for map labels :  outline color.
- 1.5.4
  - Faster and more accurate view count without analyzing sequentially every project. It should counts shared views, external views, private views, public views and targeted views for every project of the current user.
- 1.5.3
  - Added a new sharing option : any view can be imported as external, non-modifiable view in a project where the user is at least a publisher,
  - Removed www/ files from git repo : those are built with webpack, not useful to have them around.
- 1.5.2
  - Fixed story map view selection #255,
  - Fixed raster legend size : let the user click to expand the image into a modal,
  - Fixed legend label alignment,
  - Fixed long abstract #253.
- 1.5.1 
  - Solved bug where user was not able to authenticate when uploading an image,
  - Better legend and description of view content, using multi-column layout.
- 1.5.0 
  - Refactoring,
  - Manage by project. It's now possible to manage your data by project, in addition to collections and classes, 
  - Using docker for the whole stack,
  - Merged app and api under the same repository.
