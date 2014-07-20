# metavida.github.com

A quick replacement for kuhnsfam.com

## Working on the website

While Jekyll is crazy easy to use, given enough time I inevitably forget how to do local development, so here's the trick

    bundle install
    bundle exec jekyll server --watch
    open http://127.0.0.1:4000 # if you're on OS X

## Upgrading Bourbon

I use Bourbon for common SASS mixins. If I ever want to update bourbon in the future, the following steps should do.

    bundle update bourbon
    bundle exec bourbon update --path=_sass
