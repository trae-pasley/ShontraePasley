export default ( { posts } ) => `
    ${generateArticlesHTML(posts)}
`
;

function generateArticlesHTML(posts) {
    return posts
    .map(
        ({title, subtitle, description, netlifyUrl, githubUrl}) => `<div class='entryDiv'><h2>${title}</h2>
        <h3>${subtitle}</h3>
        <p>${description}</p>
        <a href='${netlifyUrl}'><i class="fas fa-child"></i>view project</a><br>
            <a href='${githubUrl}'><i class="fab fa-github-alt"></i>view code</a></div> 
        </div>`
        
    )
    .join(" ");
}





 