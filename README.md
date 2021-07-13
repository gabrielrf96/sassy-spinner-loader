
# Sassy Spinner Loader

**Sassy Spinner Loader** is a SASS-based, pure CSS, fully customizable spinning wheel for your *loading...* screens.

Sassy Spinner Loader is provided as a SASS mixin, for maximum flexibility and convenience. Using it is very easy!


## How to use?

First, in your SASS file, you have to import the main file:

```scss
@use 'sassy-spinner-loader';
```

Then, you can define a CSS class and inject all the necessary spinner loader styles by using the `spinner-loader` mixin:

```scss
.loading-wheel {
    @include sassy-spinner-loader.spinner-loader(100px);
}
```

That's it! Now, in your HTML file, you can add this class to any element and you'll have a nice, infinitely loading spinning wheel.

Wondering what's that '`100px`' we've passed as the mixin argument? No worries! Let's take a look at the `spinner-loader` mixin parameters.


## The spinner-loader mixin parameters and customization

Sassy Spinner Loader is fully customizable.

The `spinner-loader` mixin accepts two parameters:

### $size

The `$size` parameter defines what size the spinner loader will be. A 1:1 aspect ratio is automatically enforced, so this defines both horizontal and vertical size.

Therefore, you can use relative units (for instance, percentages) without worrying about deformation on the vertical axis.

### $options

The second parameter, `$options`, is a SASS map that you can use to customize everything about your spinning wheels, from the colors to the speed, and even the thickness.

Here is a complete list of all available options with a brief explanation.

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
            <th>Possible values</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>thickness</strong></td>
            <td>
                Thickness of the spinning wheel (width of the ring).
                <br>
                If it's set to <em><strong>auto</strong></em>, it will be automatically calculated proportionally to the <strong>$size</strong> parameter.<br>
            </td>
            <td>
                <em>&lt;length&#8209;percentage&gt;</em> or <em><strong>auto</strong></em>
            </td>
            <td><em><strong>auto</strong></em></td>
        </tr>
        <tr>
            <td><strong>thicknessRatio</strong></td>
            <td>
                When <strong>thickness</strong> is set to <em><strong>auto</strong></em>, this option defines the relationship between the size of the spinning wheel and its <strong>thickness</strong>.
                <br>
                For instance, for the default value of <em><strong>0.125</strong></em>, and a spinner size of <em><strong>80px</strong></em>, final automatic thickness would be:
                <br>
                <em>80 x 0.125 = <strong>10px</strong></em>
                <br>
                If <strong>thickness</strong> is a fixed value, this option has no effect.
            </td>
            <td><em>&lt;number&gt;</em></td>
            <td><em><strong>0.125</strong></em></td>
        </tr>
        <tr>
            <td><strong>speed</strong></td>
            <td>Spinning speed in spins per second.</td>
            <td><em>&lt;number&gt;</em></td>
            <td><em><strong>1.25</strong></em></td>
        </tr>
        <tr>
            <td><strong>fgColor</strong></td>
            <td>Foreground color. It's the color of the semicircular, spinning piece. Saturated blue by default.</td>
            <td><em>&lt;color&gt;</em></td>
            <td><em><strong>#008cff</strong></em></td>
        </tr>
        position: relative,
        display: block,
        useCssVariables: true,
        defineAnimation: true
        <tr>
            <td><strong>bgColor</strong></td>
            <td>Background color. It's the color of the static ring behind the moving piece. Semitransparent, neutral grey by default.</td>
            <td><em>&lt;color&gt;</em></td>
            <td><em><strong>rgba(#828382, 0.25)</strong></em></td>
        </tr>
        <tr>
            <td><strong>position</strong></td>
            <td>Value for the <em>position</em> CSS rule.</td>
            <td><em>CSS position</em></td>
            <td><em><strong>relative</strong></em></td>
        </tr>
        <tr>
            <td><strong>display</strong></td>
            <td>Value for the <em>display</em> CSS rule.</td>
            <td><em>CSS display</em></td>
            <td><em><strong>block</strong></em></td>
        </tr>
        <tr>
            <td><strong>useCssVariables</strong></td>
            <td>
                By default, Sassy Spinner Loader uses CSS custom properties (variables) for flexibility and customization purposes.
                <br>
                If you need to support older browsers where CSS custom properties are not available, you can disable them by setting this option to <em><strong>false</strong></em>.
            </td>
            <td><em>boolean</em></td>
            <td><em><strong>true</strong></em></td>
        </tr>
        <tr>
            <td><strong>defineAnimation</strong></td>
            <td>
                A call to the spinner-loader mixin automatically defines the necessary spinning animation via a @keyframes definition.
                <br>
                It is best practice to include the spinner-loader mixin only once, and then define variants and special cases using CSS classes and complex selectors, and overriding customizable CSS properties or redefining CSS rules.
                <br>
                If, for any reason, you still need to include the spinner-loader more than once, you can set this option to <em><strong>false</strong></em> in all calls after the first one. By doing that, you will avoid multiple re-definitions of the spinning animation, saving CSS file size.
            </td>
            <td><em>boolean</em></td>
            <td><em><strong>true</strong></em></td>
        </tr>
    </tbody>
</table>

_**Note:** data types expressed in the format '&lt;data-type&gt;' in the "Possible values" column are [CSS data types](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types)._

Let's take a look at an example of how to customize Sassy Spinner Loader by using the `$options` parameter. Imagine that we need our loading wheel to be orange, thicker, and we want it to spin much faster, to give the impression that our website is as fast as a sports car.

For the thickness, we don't want a fixed value. We are going to be defining additional spinning wheel variants later, with different sizes, and we don't want to have to define their thickness manually, one by one. Therefore, we want to keep their thickness proportional to their size. To do that, but still affect how thick we want them to be, we have to use the **thicknessRatio** option.

This is how we would do that:

```scss
    .loading-wheel {
        @include sassy-spinner-loader.spinner-loader(100px, (
            fgColor: orange,
            thicknessRatio: 0.2,
            speed: 2
        ));
    }
```


## Defining variants and overriding options

We've seen how easy it is to define our spinner loader, and how to customize it to fit our website's look and feel.

> That's all good and dandy, but no one needs a single loading wheel!
>
> *~ Jane Doe, about needing multiple loading wheels on her website.*

Indeed, one might need more than one loading wheel on their website. You might need different sizes, different speeds, and even different colors.

There is always, of course, the option of calling the `spinner-loader` mixin multiple times, with different options, to define these variants. However, that can be a little bit cumbersome, and will end up generating tons of redundant CSS code. And nobody wants trash, redundant CSS code in their already bloated stylesheets.

Luckily for all of us, Sassy Spinner Loader uses **CSS variables** to define all customizable properties, which means we can easily override these CSS variables in any point of our CSS code to generate variants. For every customization option, there is an equivalent CSS variable.

> Hooray!
>
> *~ Jane Doe, after reading the last few paragraphs.*

Here is a list of all available customization options, from the `$options` parameter, and their corresponding CSS variables:

<table>
    <thead>
        <tr>
            <th>Mixin parameter</th>
            <th>Option key</th>
            <th>Equivalent CSS variable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="2">$size</td>
            <td><strong>--size</strong></td>
        </tr>
        <tr>
            <td rowspan="8">$options</td>
        </tr>
        <tr>
            <td>thickness</td>
            <td><strong>--thickness</strong></td>
        </tr>
        <tr>
            <td>thicknessRatio</td>
            <td><strong>--thickness-ratio</strong></td>
        </tr>
        <tr>
            <td>speed</td>
            <td><strong>--speed</strong></td>
        </tr>
        <tr>
            <td>fgColor</td>
            <td><strong>--fg-color</strong></td>
        </tr>
        <tr>
            <td>bgColor</td>
            <td><strong>--bg-color</strong></td>
        </tr>
        <tr>
            <td>position</td>
            <td><strong>--position</strong></td>
        </tr>
        <tr>
            <td>display</td>
            <td><strong>--display</strong></td>
        </tr>
    </tbody>
</table>

Since **useCssVariables** and **defineAnimation** are internal setup options, they *(obviously)* don't have an equivalent CSS variable.

You might be tempted to ignore the `--size` variable and just define size variants by overriding the `width` CSS property. That's fine, but be aware that doing so will detach **size** and **thickness**, in the case that thickness is set to `auto`.

These CSS variables are a convenience, to make it easier for you to override styles and customization options for variants without having to look at the source code, in the mixin, to check if certain CSS rule is defined at the root level or in a pseudo-element.

So, here is an example of how you could define variants for your loading wheel using these CSS variables:

```scss
    .loading-wheel {
        /*
        Our base loading wheel should have a size of 100px,
        and it should be orange, and have a speed of 2 spins per second
        */
        @include sassy-spinner-loader.spinner-loader(100px, (
            fgColor: orange,
            thicknessRatio: 0.2,
            speed: 2
        ));

        /* Size variants */

        &.small {
            --size: 50px;
        }

        &.big {
            --size: 200px;
        }

        /* Color variants */

        &.purple {
            --fg-color: purple;
        }

        /* Other variants */

        &.ultra-fast {
            --speed: 3;
        }

        &.slim {
            --thickness-ratio: 0.075;
        }

        &.fixed-thickness-regardless-of-size {
            --thickness: 10px;
        }

        &.variant-for-that-very-specific-place-in-that-hidden-page {
            --size: 400px;
            --thickness-ratio: 0.3;
            --fg-color: white;
            --bg-color: black;
            // Of course, you can customize it further with any CSS property
            opacity: 0.15;
        }
    }
```


## Legacy mode

Sadly, though, not all of us live in the *(mostly)* beautiful world of modern browsers that keep getting updated regularly and *(generally speaking)* comply with the standards.

Some people still need to support Internet Explorer and older versions of major browsers. A moment of silence for these brave brothers and sisters.

With them in mind, there is a **legacy mode** available in Sassy Spinner Loader that removes the use of CSS custom properties (variables). To enable this mode, you one have to set the `useCssVariables` option to `false` in the `$options` parameter:

```scss
.legacy-loading-wheel {
    @include sassy-spinner-loader.spinner-loader(100px, (
        useCssVariables: false
    ));
}
```

In legacy mode, defining variants is a bit more cumbersome, but still possible. You just need to check the source code to see what CSS rules control each customizable option, and in which element they are defined. With that in mind, you can go back to your code and override the proper CSS rules. Here's a reduced example with some of the variants defined in the previous example:

```scss
    .loading-wheel {
        @include sassy-spinner-loader.spinner-loader(100px, (
            fgColor: orange,
            thicknessRatio: 0.2,
            speed: 2
        ));

        &.big {
            width: 200px;
        }

        &.purple::after {
            border-top-color: purple;
        }

        &.ultra-fast::after {
            animation-duration: 0.5s;
        }

        &.slim {
            /* In legacy mode, there is no way to override thickness ratio
            dynamically (only possibility is setting a fixed thickness) */
        }

        &.fixed-thickness-regardless-of-size::after {
            border-width: 20px;
        }
    }
```


## Best practices

**The `spinner-loader` mixin should only be invoked once**.

That is, ideally and as long as possible.

The philosophy behind Sassy Spinner Loader is: define a general class for your loading wheels, invoke the mixin to generate the base styles once, and then use that class for all your loading wheels.

Variants can be defined using CSS classes and selectors, and by overriding CSS variables (in normal mode) or CSS rules (in legacy mode).

The reason for this 'rule' is that including the mixin multiple times will create a lot of redundant CSS code, therefore overbloating the resulting stylesheet with multiple, very similar definitions.

That's it, really. There are no other 'rules' on how to use Sassy Spinner Loader.


<br/>
<br/>
<p align="center">
    Made by Gabriel Rodríguez
    <br/>
    <a href="https://www.gabrielrf.dev">www.gabrielrf.dev</a>
</p>
