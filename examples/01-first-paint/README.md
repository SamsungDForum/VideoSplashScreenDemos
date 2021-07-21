# First Paint example

The application screen should appear as soon as the first paint of the page becomes available. The expected difference between `"Loaded"` and `"Focused"` logs should be miniscule.

If the application uses big images or `defer`, or `async` scripts, then the `"Loaded"` message can be logged after `"Focused"`.

<img src="../../img/timeline-first-paint.svg" width="100%">

## Config changes

To get this behavior in your application, inside top-level `<widget>` element, at minimum add

```xml
<tizen:video_splash_screen ready_when="first-paint">
    <tizen:vss_default
        video="path-to-splash.mp4"
        background_image="path-to-background.png"
        background_color="#abcdef"
        image="path-to-splash.png"
        image_border="0px stretch" />
</tizen:video_splash_screen>
```

## Using the example

To see, how to prepare a package with this widget, see [Using the examples](../usage.md) and use the [`01-first-paint/widget`](widget) directory.
