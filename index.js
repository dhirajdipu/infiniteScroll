const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getSchoolList = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data = await response.json();
    ///console.log(data);

    data.map((curElm, index) => {
        const htmlData = `
            <div class="card d-flex flex-column p-3 mt-3">
                <span class="data-id">${postCount++}</span>
                <h4 class="title">${curElm.title}</h4>
                <p class="text-body">${curElm.body}</p>
            </div>
        `;

        container.insertAdjacentHTML("beforeend", htmlData);
    })
}
getSchoolList();

const showSchoolList = () =>{
    setTimeout(() =>{
        pageCount++;
    }, 300)
    getSchoolList();
}

window.addEventListener('scroll', () =>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight){
        console.log('I am a bottom');
        showSchoolList();
    }
});