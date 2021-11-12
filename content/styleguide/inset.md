---
title:  Inset
---

# Inset

[[TOC]]

## Couleurs

<z-inset class="is-light">Inset light</z-inset>
~~~
<z-inset class="is-light">Inset light</z-inset>
~~~

<z-inset>Inset par défaut</z-inset>
~~~
<z-inset>Inset par défaut</z-inset>
~~~
<z-inset class="is-dark">Inset dark</z-inset>
~~~
<z-inset class="is-dark">Inset dark</z-inset>
~~~
<z-inset class="is-success">Inset success</z-inset>
~~~
<z-inset class="is-success">Inset success</z-inset>
~~~
<z-inset class="is-danger">Inset danger</z-inset>
~~~
<z-inset class="is-danger">Inset danger</z-inset>
~~~
<z-inset class="is-info">Inset info</z-inset>
~~~
<z-inset class="is-info">Inset info</z-inset>
~~~
<z-inset class="is-warning">Inset warning</z-inset>
~~~
<z-inset class="is-warning">Inset warning</z-inset>
~~~

## Bordures

<z-inset class="is-bordered">
  Inset avec une bordure
</z-inset>

~~~
<z-inset class="is-bordered">
  Inset avec une bordure
</z-inset>
~~~

## Exemples d'usages

### Message système
<z-inset class="is-success is-bordered">
  <z-icon icon="CheckCircle"/>
  Article enregistré
</z-inset>

~~~
<z-inset class="is-success is-bordered">
  <z-icon icon="CheckCircle"/>
  Article enregistré
</z-inset>
~~~

### Message Toast

<style>
.z-inset.my-toast {
  /* --z-inset-padding: 1.5rem 2rem; */
  /* --z-inset-padding: 0.75rem 1.5rem; */
  --padding: 0.75rem 1.5rem;
  /* --z-inset-font-size: 0.9rem; */
  --font-size: 0.9rem;
  /* --z-inset-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); */
  --box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  /* --z-inset-background: rgba(250, 204, 21, 0.6); */
  --color-warning: rgba(250, 204, 21, 0.6);
  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6); */
}
.z-inset.my-toast code{
  color: var(--z-inset-color);
}
</style>
<z-inset class="my-toast is-warning is-rounded is-align-right">
  <z-icon icon="ExclamationCircle"/>
  Une erreur c'est produite : <code>system dead X/</code>
  <template #right>
    <z-button
      icon="XCircle"
      class="is-danger is-compact is-rounded"
    />
  </template>
</z-inset>

~~~
<style>
.z-inset.my-toast {
  --z-inset-padding: 0.2rem 0.8rem;
  --z-inset-font-size: 0.9rem;
}
.z-inset.my-toast code{
  color: var(--z-inset-color);
}
</style>
<z-inset class="my-toast is-dark is-rounded is-align-right">
  <z-icon icon="ExclamationCircle"/>
  Une erreur c'est produite : <code>system dead X/</code>
  <template #right>
    <z-button
      icon="XCircle"
      class="is-danger is-compact is-rounded"
    />
  </template>
</z-inset>
~~~

### Callout

<z-inset class="is-outlined is-dark">
  <img src="https://via.placeholder.com/140" />
  <template #right>
    <small>À lire égalemment</small>
    <h2>
      <a href="#">
        Une publication incroyable
      </a>
    </h2>
  </template>
</z-inset>

~~~
  <z-inset class="is-outlined is-dark">
    <img src="https://via.placeholder.com/140" />
    <template #right>
      <small>À lire égalemment</small>
      <h2>
        <a href="#">
          Une publication incroyable
        </a>
      </h2>
    </template>
  </z-inset>
~~~

### Personnalisé

Personnalisation de variable et de style.

<style>
.z-inset.my-blockquote {
  --z-inset-border-width: .3rem 0;
  /* align-items: center; */
}
.z-inset .my-blockquote-body {
  font-family: serif;
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 0;
  text-align: center;
}
.z-inset .my-blockquote-credit {
  text-align: right;
  font-style: italic;
}
</style>
<z-inset class="my-blockquote is-light is-align-right">
  <p class="my-blockquote-body">“ Someone says <br>something, somewhere… ”</p>
  <div class="my-blockquote-credit">— Somebody</div>
  <template #right>
    <img src="https://via.placeholder.com/140" />
  </template>
</z-inset>

~~~
<style>
.z-inset.my-blockquote {
  --z-inset-border-width: .3rem 0;
  align-items: center;
}
.z-inset .my-blockquote-body {
  font-family: serif;
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 0;
  text-align: center;
}
.z-inset .my-blockquote-credit {
  text-align: right;
  font-style: italic;
}
</style>
<z-inset class="my-blockquote is-light is-align-right">
  <p class="my-blockquote-body">“ Someone says <br>something, somewhere…… ”</p>
  <div class="my-blockquote-credit">— Somebody</div>
  <template #right>
    <img src="https://via.placeholder.com/140" />
  </template>
</z-inset>
~~~
