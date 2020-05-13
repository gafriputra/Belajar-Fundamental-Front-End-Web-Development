class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   width:23%;
                   height:450px;
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
                   float: left;
                    margin-right: 2%;
               }
              
               .fan-art-movie {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .movie-info {
                   padding: 24px;
               }
              
               .movie-info > h2 {
                   font-weight: lighter;
               }
              
               .movie-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }
               @media screen and (max-width: 550px){
                :host {
                    width:100%;
                }
            }
           </style>
           <img class="fan-art-movie" src="${this._movie.Poster}" alt="Fan Art">
           <div class="movie-info">
               <h2>${this._movie.Title}</h2>
               <h4>${this._movie.Type}</h4>
               <p>${this._movie.Year}</p>
               <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${this._movie.imdbID}">See Detail</a>
           </div>`;
    }
}

customElements.define("movie-item", MovieItem);