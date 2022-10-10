var reviews = [{
  userDisc:'review 1 star',
  rate:1
},{
  userDisc: 'review 2 star',
  rate:2
},{
  userDisc: 'review 3 star',
  rate:3
},{
  userDisc: 'review 4 star',
  rate:4
},{
  userDisc: 'review 5 star',
  rate:5
}];
var no = 0;

function submit() {
  var discription = document.getElementById('discription').value;
  var alertContainer = document.getElementById('alert');
  var alertMsg = document.getElementById('alertMsg');
  var rating=document.getElementById('ratings').value

  if (discription.length > 2 ) {
    no = no + 1;
    var review = {
      userDisc: discription,
      no:no,
      rate:rating
    };
    reviews.push(review);
    console.log(reviews);

    alertContainer.classList.remove('d-none')
    alertContainer.classList.remove('alert-danger')
    alertContainer.classList.add('alert-success')
    alertMsg.innerHTML = 'your review id added successfully✅!!'


    var yourrevs= document.getElementById('yourrevs');
    yourrevs.innerHTML="related reviews will shown below";
   


    // let container = document.getElementById('userContainer');
    // container.innerHTML = ''
    // reviews.map((x) => {
    //   let div = document.createElement('div');
    //   div.classList.add('user-card');

    // //   let div2 = document.createElement('div');
    // //   div2.classList.add('div2')

    //   let review_disc = document.createElement('h5');
    //   review_disc.innerHTML = x.userDisc;

    //   let userRatings = document.createElement('h5')
    //   userRatings.innerHTML=x.rate;

    //   let notag = document.createElement('span')
    //   notag.innerHTML = x.no;

    // //   let chekbx = document.createElement('input');
    // //   chekbx.setAttribute("type", "checkbox");
   
    //   container.appendChild(div);

    //   div.appendChild(notag);
    // //   div.append(div2)
    //   div.appendChild(review_disc);
    //   div.appendChild(userRatings);


    // })




    setTimeout(() => {
      alertContainer.classList.add('d-none')
    }, 1500)
  }
  else {
    alertContainer.classList.remove('d-none')
    alertContainer.classList.remove('alert-success')
    alertContainer.classList.add('alert-danger')
    alertMsg.innerHTML = 'blank review cannot be added 🚨!!'
    setTimeout(() => {
      alertContainer.classList.add('d-none')
    }, 1700)
  }
  document.getElementById('discription').value = ""; // it erases the inserted content in input fields  or equals to the empty string

}

function showReview1(){
  var reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML=''

  let filter1 = reviews.filter((x)=>{
    return x.rate == 1;
  })

  filter1.map((x)=>{
    let review = document.createElement('div')
    let text = document.createElement('p')
    text.innerHTML=x.userDisc;
    review.classList.add('reviews')
    reviewContainer.appendChild(review)
    review.appendChild(text)
  })

}

function showReview2(){
  var reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML=''

  let filter2 = reviews.filter((x)=>{
    return x.rate == 2;
  })

  filter2.map((x)=>{
    let review = document.createElement('div')
    let text = document.createElement('p')
    text.innerHTML=x.userDisc;
    review.classList.add('reviews')
    reviewContainer.appendChild(review)
    review.appendChild(text)
  })

}


function showReview3(){
  var reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML=''

  let filter3 = reviews.filter((x)=>{
    return x.rate == 3;
  })

  filter3.map((x)=>{
    let review = document.createElement('div')
    let text = document.createElement('p')
    text.innerHTML=x.userDisc;
    review.classList.add('reviews')
    reviewContainer.appendChild(review)
    review.appendChild(text)
  })

}
function showReview4(){
  var reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML=''

  let filter4 = reviews.filter((x)=>{
    return x.rate == 4;
  })

  filter4.map((x)=>{
    let review = document.createElement('div')
    let text = document.createElement('p')
    text.innerHTML=x.userDisc;
    review.classList.add('reviews')
    reviewContainer.appendChild(review)
    review.appendChild(text)
  })

}


function showReview5(){
  var reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML=''

  let filter5 = reviews.filter((x)=>{
    return x.rate == 5;
  })

  filter5.map((x)=>{
    let review = document.createElement('div')
    let text = document.createElement('p')
    text.innerHTML=x.userDisc;
    review.classList.add('reviews')
    reviewContainer.appendChild(review)
    review.appendChild(text)
  })

}