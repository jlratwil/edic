Edic jQuery Plugin
==================

Edic (EDIC or edic, depending on your convenience) stands for Enable/Disable Input from Checkbox. This jQuery plugin lets you enable or disable input elements with a single check in the box.

Usage
=====

First, make sure you link the jQuery library and the edic plugin to your web page.

By using your local copy of jQuery:

    <script src="/your_path/jquery.min.js"></script>
    <script src="/your_path/jquery.edic.js"></script>

Or using the a copy from Google CDN:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
    <script src="/your_path/jquery.edic.js"></script>

Insert the code which triggers the plugin on the jQuery elements you want to apply it.

    <script type="text/javascript">
    /* <![CDATA[ */
    $(document).ready(function(){
        // your code...
        $("input[type=checkbox]").edic();
    });
    /* ]]> */
    </script>

Then in a checkbox, you have to insert `data-affected-elements` attribute in the checkbox input tag. The `data-affected-elements` must contain a CSS selector. See examples below on how to use the attributes.


Examples
========

Single form element
-------------------

    <input type="checkbox" name="enable-email" value="1" data-affected-elements="#email-address">
    
Where `#email-address` is the CSS selector for the email address input field.

Multiple form elements
----------------------

    <input type="checkbox" name="enable-slideshow" value="1" data-affected-elements="#transition-type, #transition-speed">
    
Or you can use the class selector instead.

    <input type="checkbox" name="enable-slideshow" value="1" data-affected-elements=".input-slideshow">
    
    
Demos
=====

Coming soon.
