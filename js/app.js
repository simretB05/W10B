//getting elements by diffrent DOM manipulation methods 
let get_book_title = document.querySelector( `main h1` );
let get_all_articles_p =  document.querySelectorAll(`article > p`);
let get_element_id = document.getElementById( `header` );
let get_elements_className = document.getElementsByClassName( `books` );

// changing an elements style by using there given name.
get_element_id[`style`][`min-height`] = `10vh`
get_element_id[`style`][`backgroundColor`] = `green`
get_element_id[`style`][`color`]=`white`
get_book_title[`style`][`color`] = ` green`;
get_book_title[`style`][`textTransform`] = `upperCase`;

//created a new variable and assign it to a selector
let changingInnertext = get_all_articles_p
// adding new content to a tag using innerText and a loop to get all the tags
for ( let i = 0; i < changingInnertext.length; i++ )
{
    changingInnertext[i][`innerText`] = `Online`
    changingInnertext[i][`style`][`textAlign`]=`center` 
}

//create a new variable and assign it to the a selector
let adding_btn = get_elements_className
// adding new content to a tag using innerText and a loop to get all the tags
for ( let i = 0; i < changingInnertext.length; i++ )
{
    adding_btn[i].insertAdjacentHTML( `beforeend`, `<button id="add_btn"> buy here</button>` )
}
//styling the new created tag
let btn = document.querySelectorAll( `#add_btn` )
for ( let i = 0; i < btn.length; i++ ){
    btn[i][`style`][`backgroundColor`] = `green`;
    btn[i][`style`][`color`] = `white`;
    btn[i][`style`][`border`] = `none`;
}
 //create a new variable and assign it to the a selector
let adding_div = get_elements_className;
// adding new content to a tag using  the insertAdjaentHTML method and a loop to get all the tags
for ( let i = 0; i < adding_div.length; i++ )
{
// adding a new tag before an existing tag using insertSdjecentHTML method
    adding_div[i].insertAdjacentHTML( `beforebegin`, `<div class="img_card"><img class="boooks_img" src="/images/books_n.jpg" alt="books images"></div>`)
}

//styling the new created tag
let img = document.querySelectorAll( `.img_card > img` )
for ( let i = 0; i < img.length; i++ )
{
    img[i][`style`][`weidth`] = `200px`;
    img[i][`style`][`height`] = `200px`;
   
}


//functions  BONUS
// BONUS 1)
// created a function that takes a string as an argument and preformes a innerHTML change if coditions are not met
function checkEnough( string )
{
    let get_book_title = document.querySelectorAll( string )
    for ( let i = 0; i < get_book_title.length; i++ )
    {
        let inner_content = get_book_title[i][`innerHTML`] 
        console.log(inner_content)
        if ( inner_content.length < 30)
        {
            inner_content = `NOT ENOUGH`
            console.log( inner_content )
           get_book_title[i][`innerHTML`] =inner_content
        }
    }
}

checkEnough(`.books_title`)
//  BONUS 2) still working on it
// BONUS 3)
// created an arry of objects 

let userName = [{
    username: `Gladys `,
    bio: `Gladys is a compassionate and dedicated nurse golly  with a passion for providing the highest level of care to her patients. She has been working as a registered nurse for over a decade, specializing in emergency care and critical care. Gladys is known for her exceptional bedside manner, her ability to remain calm under pressure, and her attention to detail.`,
    profile_image_url: `<img class="boooks_img" src="/images/Gladys.jpg" alt="bio images">`
},
{
    username: `Ashely `,
    bio: `Dr. Maria Rodriguez is a  frick licensed clinical psychologist with over 15 years of experience in the field. She specializes in treating adults with anxiety, depression, and trauma-related disorders. Dr. Rodriguez is known for her warm and empathetic approach, and her ability to create a safe and supportive environment for her clients.`,
    profile_image_url: `<img class="boooks_img" src="/images/ashely.jpg" alt="bio images">`
},
{
    username: `Brendan `,
    bio: `an accomplished drummer with over 20 years  darn of experience in the music industry. He has played with a wide range of artists and bands, and is known for his versatility and dynamic playing style. John's musical journey began when he was just 10 years old, and he quickly developed a passion for drumming that has stayed with him ever since.`,
    profile_image_url: `<img class="boooks_img" src="/images/brendan.jpg" alt="bio images">`
}
]
//selected a div from the DOM OBJECT using a selector 
let users_profile = document.getElementById(`profile`)
 //created a function that takes arry of objects as an argument 
function userProfile( arry )
{
    //loop through the arry of objects and added h2,p and and an image tage with .insertAdjacentHTML method to the dome object div
    for ( i = 0; i < userName.length; i++ ){
        // if ( userName[i][`bio`].includes( `frick`, `darn`, `golly` ) )/still working on this
        {
                   
        }
        users_profile.insertAdjacentHTML( `beforebegin`, `<h2>${ userName[i][`username`] }</h2>` )
        users_profile.insertAdjacentHTML( `beforeend`, `<p>${ userName[i][`bio`] }</p>` )
        users_profile.insertAdjacentHTML( `afterbegin`, `${ userName[i][`profile_image_url`] }` )
        
    }
}

userProfile(userName)