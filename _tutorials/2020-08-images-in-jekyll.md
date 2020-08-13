# Working with images on your Jekyll blog

It turns out to be not so easy to work with images on a [Jekyll](https://jekyllrb.com)-powered static website.

#### _-prefixed folders and static assets

First of all you can't put your images into your `_posts` directories along with your Markdown files.
In fact you can't put [static assets](https://jekyllrb.com/docs/static-files/) in any `_`-prefixed folder, such as `_images`, as these will be ignored after compilation by Jekyll.
They will work just file in a folder or subfolder of `assets` or `images`!

```
├── _posts
│   └── 2020-08-13-my-blog-post.md
└── pictures
    └── 2020-08-13-my-blog-post
        ├── picture-1.png
        └── picture-2.png
```

#### relative paths

Markdown works with relative paths so for the above folder structure you can reference pictures as follows:

```markdown
![my-alt-text](../pictures/2020-08-13-my-blog-post/picture-1.png)
```

However this no longer works on Jekyll as it works with absolute paths, so you will need to update this to:

```markdown
![my-alt-text](/pictures/2020-08-13-my-blog-post/picture-1.png)
```

You can also use even more explicit versions if you prefer:

```markdown
![my-alt-text]({{site.url}}/pictures/2020-08-13-my-blog-post/picture-1.png)
![my-alt-text]({{site.url}}/pictures/2020-08-13-my-blog-post/picture-1.png)
```

#### add specific CSS to your pictures

Markdown is by design very feature-limited to keep the language concise.
However there are ways to add more styling options ot your pictures in Jekyll with CSS.

```markdown
![apple-photos](/pictures/2020-08-sort-photos/apple-photos.png){: .center-image}
```

Another solution is to use a URL hash in addition to a specific url, name-based selector

```markdown
![my image](/img/myImage.jpg#left)
![my image](/img/myImage.jpg#right)
``` 

#### center-aligning pictures

Because Jekyll places each picture in a separate `<p>` element, you can't use a basic `text-align: center` if you don't want to center your text as well, however there are workarounds.

```
.center-image {
    margin: 0 auto;
    display: block;
}

img[src*='#left'] {
    float: left;
}

img[src*='#right'] {
    float: right;
}

img[src*='#center'] {
    display: block;
    margin: auto;
}
```

#### scaling pictures

The blog post contained a lot of vertical screenshots from a phone, that I didn't want to take up too much vertical space so it it's good to set max dimensions for any picture:

```css
img {
    max-width: 800px;
    max-height: 500px;
}
```

Some screenshots were in 2x size because they were taken on a high resolution screen (Retina screen on Mac) so I wanted to scale them to show them in their original size.

```css
.retina {
    transform: scale(0.5);
}
```

(However I have yet to find a solution which work with both of these combined!)

Sources:

[picture paths](https://travis.media/how-to-add-images-in-jekyll-posts-with-relative-links/)
[url hash selector](https://stackoverflow.com/questions/255170/markdown-and-image-alignment/16278366#16278366)
