# Angular Cat Wiki

This is a conversion of my [Next Cat Wiki app](https://github.com/jdegand/devchallenges-cat-wiki) to use Angular and Angular SSR.

## Built With

- [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.
- [Angular](https://angular.dev)
- [Angular SSR](https://angular.dev/guide/ssr)

## Thoughts

- Fetch seems to be preferred in Angular 17.
- NG02801: Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application.
- Observables are discouraged for simple API requests now.  Observables are better when you need to transform data but most of the time you just serve what the API returns.  And it is more performant to optimize the backend to return the JSON you need versus manipulating returned JSON data.  
- SSR seems easy to setup and requires less intervention by developers.  You don't have to add the express engine separately anymore.    
- SSR documentation is pretty scarce.  [Angular.io's SSR guide](https://angular.io/guide/ssr) removed the older Angular Universal implementation details.   
- I found Next to be a way better option for SSR than Angular SSR.  If you knew both, there would have been few reasons to pick Angular over Next.  Now, I think this is good enough to stick with Angular versus converting to another framework. 
- I used mergeMap and forkJoin to batch the API requests in the breed component.
- Chaining multiple sequential fetch requests is not better than using RxJs. 
- Images have a large intrisnic size.  This is api-specific and don't think I can do much to mitigate it.
- There are some slight styling issues from the conversion.  There is unused CSS code lingering in some files.  I was able to keep most of the HTML formatting in the conversion and only had to make slight alterations.  I used the new control flow syntax.  
- I removed Karma, Jasmine and any generated test files.  I think Cypress would probably be the quickest option to get testing done quickly.  Cypress 13.5 supports Angular 17 component testing. 
- I used `object-fit: contain` globally for all images to preserve the aspect ratio.  It is not ideal, as it can make the layout look less uniform, but the pictures look much better.  
- I looked into hiding the API key versus adding it inside the environments folder.  This is something that Next does better than Angular.  There is very little documentation about hiding API keys and SSR in Angular.  I looked into adding a plugin for dotenv and adding an .env file which holds the key that is referenced inside the environments file. 
- `@angular-builders/custom-webpack` has been updated for Angular 17 but `dotenv-webpack` has not been updated in a while.  I need to investigate more.  
- Since I only needed one input, I used ngModel and didn't save state in the home component.  At times, I second-guessed this choice as there were issues with modal functionality.  I didn't have as easy access to the input value to pass to the modal component.
- If you make the arrow html entities bigger with font-size, you will have a mismatched underline of the link.  
- NgOptimizedImage seems very similar to Next's Legacy Image.  A lot of the same attributes carry over.   
- In the Next version, I used Image with `HeroImage-md.png`.  I could do the same with NgOptimizedImage but right now I use a picture tag with the multiple images for different screen sizes.
- HeroImage div width is too short on very large screens.  
- Ragdoll and Norwegian Forest Cat are good breeds to test image filtering.  Ragdoll has enough pictures where you can refresh many times, and if there are only 5 bottom images, then the duplicate of the main image is gone.  This doesn't account for duplicates in the extra images themselves.  You need to convert the array to a set and then convert back to an array to eliminate duplicates from the extra images array.  The catapi is aware of duplicates, but not much work has been done on the api in a while. 

## Continued Development

- Styling issues - Mobile & other viewport adjustments
- Accessibility 
- Focus management after navigation - [See angular.dev for more](https://angular.dev/best-practices/a11y)
- Better way to hide api key
- File Structure - pages folder?
- Tests (Cypress)
- Performance 
- Typescript -> interfaces matching the api responses
- NgOptimizedImage for the main hero image ?

## How to Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jdegand/angular-cat-wiki.git

# Install dependencies
$ npm install

# Need to add / update environment.development.ts file with an apiKey from thecatapi

# Run the app and navigate to localhost:4200
$ npm start
```

### Need to add / update environment.development.ts file 

```javascript
export const environment = {
    production: false,
    apiKey: 'catapi goes here'
};
```

## Useful Resources

- [Reddit](https://www.reddit.com/r/Angular2/comments/15gev39/how_to_make_api_call_from_server_side_instead_of/) - how to make api call from server side
- [YouTube](https://www.youtube.com/watch?v=lZoRAcoEFOw) - Angular 16 Server Side Rendering and Client Side Rendering - Angular Universal
- [Angular.dev](https://angular.dev/guide/http/setup#withinterceptorsfromdi) - HttpClient
- [YouTube](https://www.youtube.com/watch?v=25FgSUH4DCk) - All About Server-side Rendering w/Angular v16 and Angular Universal
- [Medium](https://medium.com/@desinaoluseun/using-env-to-store-environment-variables-in-angular-20c15c7c0e6a) - using env to store environment variables in angular
- [YouTube](https://www.youtube.com/watch?v=7ljEz52zdUM) - Learn How to Use Angular Environment Variables with Custom Webpack
- [YouTube](https://www.youtube.com/watch?v=CcdyJJolM-Y) - How to chain and wait for multiple API calls in Angular: A Step-by-Step Guide | Angular | LSC
- [YouTube](https://www.youtube.com/watch?v=6ooB_HmzeAY) - Sequencial API Calls with Angular: Mastering API Integration
- [Stack Overflow](https://stackoverflow.com/questions/60501425/angular-sequential-http-rest-request) - angular sequential http rest request (concat)
- [Dev.to](https://dev.to/mana95/how-to-use-mergemap-and-forkjoin-to-handle-multiple-api-requests-in-angular-412p) - how to use mergeMap and forkjoin to handle multiple api requests in angular
- [Medium](https://cosmincrisan.medium.com/angular-http-calls-chain-execution-with-rxjs-mergemap-eb2d7f25139) - angular http calls chain execution with rxjs mergemap
- [Code With Srini](https://www.codewithsrini.com/make-sequence-of-http-api-request-using-mergemap-and-forkjoin/) - make sequence of http api request using mergemap and forkjoin
- [Stack Overflow](https://stackoverflow.com/questions/51103799/how-to-catch-error-in-observable-forkjoin) - how to catch error in observable forkjoin
- [YouTube](https://www.youtube.com/watch?v=FdsGA2HFBQc) - Part 6 Angular 12 Intercept @Input using ngOnChanges | Getters and Setters - Learn from Scratch
- [Medium](https://medium.com/@7hwyl/how-to-pass-a-function-to-a-child-component-in-angular-719fc3d1ee90) - how to pass a function to a child component
- [Stack Overflow](https://stackoverflow.com/questions/37093432/angular-2-template-driven-form-access-ngform-in-component) - angular 2 template driven form access ngForm in component