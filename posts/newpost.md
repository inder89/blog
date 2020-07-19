---

title: "Why build Server Side Rendered applications?"
author: "Inder"

---

## Static Site Generators
* Creating HTML pages from templates or components and a given content source. You just give it some text files and content, and the generator will give you back a complete website. The site pages are generated at build time and the content only changes when you add new components. *
May be good if the content doesn't change too often.
The risk of static files being vulnerable to cyber attacks is minimal.
But remember you have to build the whole site again if the content changes too often.

## Server Side Rendering

The web pages are displayed on the server and passed to the client instead of rendering it in the browser. With Client side rendering you can only render the page when the client navigate to the page, making it slower. If the content changes too often this is a better approach so that the user is able to see the updated content as soon as possible.

*It is also good for tailored content*
*Cannot deploy to a CDN*

### Static Site Generators                                Server-Side Rendering
Can easily be deployed to a static CDN                    Cannot be deployed to a static CDN
Content and pages generated at build time                 Content and pages generated per request
Content may become stale quickly                          Content is always up to date
Fewer API calls since it only makes it at build time      Makes API calls each time a new page is visited.
