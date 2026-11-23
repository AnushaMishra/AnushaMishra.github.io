# Blog

A small Jekyll blog for GitHub Pages. No theme dependency, no build step on your end.

## Publish it

1. Create a GitHub repo named exactly `USERNAME.github.io` (your username), public.
2. Upload everything in this folder to the repo root (or `git push` it).
3. Repo **Settings → Pages → Build and deployment**: Source = "Deploy from a branch", Branch = `main`, folder = `/ (root)`.
4. Edit `_config.yml`: set `title`, `url`, `twitter_handle`, `github_handle`.
5. Wait about a minute, then visit `https://USERNAME.github.io`. Build errors show up under the **Actions** tab.

If you use a pseudonym, turn on **Settings → Emails → "Keep my email addresses private"** and "Block command line pushes that expose my email" before your first commit.

## Write a post

Add a file to `_posts/` named `YYYY-MM-DD-title.md`:

```
---
layout: post
title: "Your title"
status: draft        # optional label shown next to the date
description: One line shown on the home page.
---

Markdown here. Math works: $a : b :: c : ?$
```

Commit it and it publishes automatically.

## Preview locally (optional)

```
gem install bundler jekyll
bundle init && bundle add jekyll jekyll-feed jekyll-seo-tag webrick
bundle exec jekyll serve
```
