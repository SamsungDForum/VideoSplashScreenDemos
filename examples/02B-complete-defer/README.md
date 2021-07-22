# Complete example B

The application screen should appear with the `load` event. The expected difference between `"Loaded"` and `"Focused"` logs should be miniscule, but the demo uses 10 big, slow-loading, asynchronous scripts, which introduces significant delay for the `load` event.

Together with ["First paint B"](../01B-first-paint-defer), this demo emphasizes the difference between `first-paint` and `complete`.

<img src="../../img/timeline-complete.svg" width="100%">

## Config changes

To get this behavior in your application, inside top-level `<widget>` element, at minimum add

```xml
<tizen:video_splash_screen ready_when="complete">
    <tizen:vss_default
        video="path-to-splash.mp4"
        background_image="path-to-background.png"
        background_color="#abcdef"
        image="path-to-splash.png"
        image_border="0px stretch" />
</tizen:video_splash_screen>
```

## Using the example

To see, how to prepare a package with this widget, see [Using the examples](../usage.md) and use the [`02-complete/widget`](widget) directory.
