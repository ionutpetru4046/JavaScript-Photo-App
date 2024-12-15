export default class Thumbnail {
    constructor(props) {
        this.props = props;
    }

    render() {
      return `
        <div class="thumbnail">
         <img src="${this.props.srcThumbnail}" alt="photo2">
          <div class="caption">
           <h3>${this.props.title}</h3>
            <p>${this.props.shortDesc}</p>
            <a href="photo1?id=${this.props.id}" class="btn btn-primary" role="button">See More</a>
          </div>
        </div>  
      `  
    }
}