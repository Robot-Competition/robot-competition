class TrackBox extends HTMLElement {
  connectedCallback() {
      var id = this.attributes.id.value;
      var image = this.attributes.image.value;
      var description = this.attributes.description.value;
      var clss = "";
      if (this.attributes.center) {
        clss = "custom-container-center"
      }
      this.innerHTML = `
      <div class="img-box b-${id} ${clss}">
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