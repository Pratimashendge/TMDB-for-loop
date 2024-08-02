const c1=console.log;


const moviecardcontainer=document.getElementById('moviecardcontainer');
let IMG_BASE_URL=`https://image.tmdb.org/t/p/w500`


let moviecardhtml=''
for(let i=0;i< movieArray.length;i++){
	moviecardhtml+=`<div class="col-md-4 mb-4">
                    <div class="card">
                    <figure class="moviecard text-white" >
                     <img 
                    class="w-100"
                      src="https://image.tmdb.org/t/p/w500${movieArray[i].poster_path}"
					  alt="${movieArray[i].title}"
					  title="${movieArray[i].title}"
                     <figcaption>
                    <div class="movietitle p-3">
                    <div class="row">
                    <div class="col-10">
                    <h3 class="mb-0">
                      ${movieArray[i].title}
                     </h3>
                       </div>
                       <div class="col-2  align-self-center">
                      <span class="${setRatingBg(movieArray[i].vote_average)} p-2 rating">
                              ${movieArray[i].vote_average}
                        </span>
                        </div>
                         </div>
                            </div>
                         <div class="movieoverview">
                        <h4>${movieArray[i].title}
                            </h4>
                            <p>
                       <em>Overview</em>
                           
                            ${movieArray[i].overview}

                           </p>
                            </div>

                           </figcaption>

                            </figure>


                                </div>
                                </div>`
}

moviecardcontainer.innerHTML=moviecardhtml;

function setRatingBg(rating){
	if(rating>7.5){
		return 'bg-success'
		}else if (rating<=7.5&& rating>5){
			return'bg-warning'
		}else{
			return 'bg-danger'
		}	
	
}