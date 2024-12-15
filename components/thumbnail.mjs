export default class Thumbnail {
    constructor(props) {
        this.props = props;
    }

    render() {
      return `
        <div class="thumbnail">
         <img src="assets/images/photo2.jpg" alt="photo2">
          <div class="caption">
           <h3>Javascript</h3>
            <p>Javascript Deep Clone</p>
            <a href="photo1.html" class="btn btn-primary" role="button">See More</a>
          </div>
        </div>  
      `  
    }
}