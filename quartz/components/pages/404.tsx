import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>Oh no! A 404 error!</h1>
      <p><b>Don't worry</b>. This page is most likely under construction! Please check back later :)</p>
      <h3>If you'd like to help out with making this (or any other) page, let Alex know</h3>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
