---
layout: default
title: Gallery
permalink: /
---

<h1>{{ page.title }}</h1>

<div class="carousel">
  <button class="carousel-control prev"><</button>
  <button class="carousel-control next">></button>
  {% for f in site.static_files %}
    {% if f.path contains 'images/gallery' %}
  <img class="carousel-slide" src="{{ site.baseurl }}{{ f.path }}" alt="{{ f.name }}">
    {% endif %}
  {% endfor %}
</div>
