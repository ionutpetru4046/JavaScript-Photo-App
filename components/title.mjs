export default class title {
    constructor() {
        this.heading = "My Gallery Photo";
        this.subHeading = "This is my Gallery Photo";
    }

    render() {
       return `
        <section class="text-center jumbotron">
            <h1>${this.heading}</h1>
            <p>${this.subHeading}</p>
        </section>
       `;
    }
}