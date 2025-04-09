# Cradle eCommerce theme
Tailwind component design from daisyUI made into a Cradle CMS theme. 

* Index page components
* daisyUI color presets with theme settings support
* Open graph tags
* Production and Development mode

## Templates
* Index
* Page
* Contact page
* Blog
* Article
* 404-not found
* Search page
* Closed site template with signup form

And eCommerce templates

## Contact page

1. To add a contact form to a page, choose the page template `contact`.
2. Add a form (forms are under Messages) named `contact`: [Forms guide at CradleCMS.com](https://cradlecms.com/blogs/guides/article/form-functionality).

### Formfields to add 

Please note that there are forms validations done and it is important that the submitted form from the website corresponds to what is specified in admin/in the system.

Required | Name | Type | Value | Attributes | Match
---|---|---|---|---|---
Y | name | text | - | - | -
Y | email | email | - | - | -
Y | message | textarea | - | - | -
Y | Submit | submit | Submit | - | -

## Development

The repo contains a builder included for generating the tailwind CSS file for production. With command `make` in the terminal it will build a new ouput.css file. The builder requires Podman or Docker (and the environment, Colima on Mac for example) to work.

## References
* <https://daisyui.com/> - daisyUI webpage
* <https://tailwindcss.com/> - Tailwind CSS (daisyUI is created ontop of Tailwind)
* <https://cradlecms.com/> - Cradle CMS
* <https://cradlecms.com/blogs/guides/article/dasiy-ui-theme> - Go to theme documentation
