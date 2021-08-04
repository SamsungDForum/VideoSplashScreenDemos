<!--
  Copyright 2021 Samsung Electronics. All rights reserved.
  Use of this source code is governed by a BSD-style license that can be
  found in the LICENSE file.
-->

# Examples

To see, how to prepare a package with a widget, see [Using the examples](usage.md).

|Example|Short description|
|-------|-----------------|
|[First&nbsp;paint](01-first-paint)|The application screen should appear as the first paint of the page becomes available.|
|[First&nbsp;paint&nbsp;B](01B-first-paint-defer)|Similar to "First paint", but it uses async scripts, some of which should still be loading after focus log.|
|[Completed&nbsp;load](02-complete)|The application screen should appear with the `load` event.|
|[Completed&nbsp;load&nbsp;B](02B-complete-defer)|Similar to "Completed load", but it uses async scripts, which introduces significant delay for the `load` event.|
[Video&nbsp;finished](03-video-finished)|The `video-finished` event is received by the runtime, when the video is no longer playing.|
[Custom&nbsp;event](04-custom)|The application screen should appear once the application calls `window.screen.show()`.|
[None](00-none)|This example does not use Video Splash Screen.|
