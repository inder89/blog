---

title: 'How does CSS actually work'
author: 'Inder'

---

The browser loads the HTML(e.g. receives it from the network)

It converts the HTML into a DOM(Document Object Model). The DOM represents the document in the computer's memory. 

The browser then fetches most of the resources that are linked by the HTML document, such as embedded images and videos ... and linked CSS! JavaScript is handled a bit later on in the process. 

The browser parses the fetched CSS, and sorts the different rules by their selector types into different "buckets", e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree).

The render tree is laid out in the structure it should appear in after the rules have been applied to it.

The visual display of the page is shown on the screen (this stage is called painting).

Each element, attribute, and piece of text becomes a DOM node in the DOM tree structure. The nodes are defined by their relationship to other DOM nodes.

DOM is where the content and style(CSS) meet up.
