/*
	MIT License
	
	Copyright (c) 2018 Sanheen Sethi
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

	@package BloodBank
	@Autor Sanheen Sethi
	@Date 08-03-2018
	@Time 7:30 AM
*/
$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
		
		// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
		// Prevent default anchor click behavior
			event.preventDefault();
		
		// Store hash
			var hash = this.hash;
		
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			},1000, function(){
		
		// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});
	} // End if
});
});