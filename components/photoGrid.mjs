import Thumbnail from "./thumbnail.mjs";
export default class PhotoGrid {
    constructor(data) {
        this.data = data;
        this.thumbnails = [];
    }

    componentWillRender() {
        if(this.thumbnails.length > 0) {
            return;
        }

        this.data.forEach(thumbnail => this.thumbnails.push(new Thumbnail(thumbnail)));
    }
    
    render() {
        this.componentWillRender();

        let thumbnailsHTML = "";
        this.thumbnails.forEach(thumbnail => thumbnailsHTML += thumbnail.render());

      return `
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xs-6">
            ${thumbnailsHTML}
            </div>
          </div>
        </div>      
      ` 
    }
}