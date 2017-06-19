const Nightmare = require('nightmare');


const primeiro = Nightmare({show: true});

primeiro.goto('https://docs.google.com/forms/d/e/1FAIpQLScHDOPbeTOxMtEJG4j9OL6Wh7x_3tOVUPnWm8tSSqkGz-Tf8g/viewform')
	.wait('.docssharedWizToggleLabeledLabelText')
  .click()
  .wait(3000)
	.evaluate(function() {
		 return document.getElementsByTagName("BODY")[0].innerHTML;
	})
	.end()
	.then(function(a){
      console.log(a);
  })
