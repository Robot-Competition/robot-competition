class TrackBox extends HTMLElement {
  connectedCallback() {
      var id = this.attributes.id.value;
      var image = this.attributes.image.value;
      var description = this.attributes.description.value;
      this.innerHTML = `
      <div class="img-box b-${id}">
        <a href="tracks.html#${id}">
          <img src=${image} alt="">
          <div class="btn-box">
            <h1>Round ${id}</h1>
            <p>${description}</p>
          </div>
        </a>
      </div>
`
  }
}

customElements.define('track-box', TrackBox);