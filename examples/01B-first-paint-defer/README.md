# First Paint example B

The application screen should appear as soon as the first paint of the page becomes available. With 10 big, slow-loading, asynchronous scripts, this will be long before `"Loaded"` is logged.

Together with ["Completed load B"](../02B-complete-defer), this demo emphasizes the difference between `first-paint` and `complete`.

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
