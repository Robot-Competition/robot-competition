class TrackModal extends HTMLElement {
  connectedCallback() {
      var id = this.attributes.id.value;
      var description = this.attributes.description.value;
      var img_src = this.attributes.img_src.value;
      var leaderboard_link = this.attributes.leaderboard_link.value;
      var build_link = this.attributes.build_link.value;
      this.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img src=${img_src} alt="">
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                Track<span> ${id}</span>
              </h2>
            </div>
            <p>
              ${description}
            </p>
            <div class="btn-container">
              <a class="custom-button button-2" href=${leaderboard_link}>
                See the Leaderboards
              </a>
              <a class="custom-button button-2" href=${build_link}>
                Build it Yourself
              </a>
            </div>
          </div>
        </div>
      </div>
`
  }
}

customElements.define('track-modal', TrackModal);