export default ( { posts } ) => `
    ${generateArticlesHTML(posts)}
`
;

function generateArticlesHTML(posts) {
    return posts
    .map(
        ({title, subtitle, dateComplete, description, technologiesUsed, projectHighlights, netlifyUrl, githubUrl}) => `<div class='entryDiv'><h2>${title}</h2>
        <h3>${subtitle}</h3>
        <strong>finished on ${dateComplete}</strong>
        <p>${description}</p>
        <hr><div class='entryDetails'><p>Technologies used: ${technologiesUsed}</p>
        <p>Project highlights: ${projectHighlights}</p>
        <a href='${netlifyUrl}'><i class="fas fa-child"></i>view project</a><br>
            <a href='${githubUrl}'><i class="fab fa-github-alt"></i>view code</a></div> 
        </div>`
        
    )
    .join(" ");
}





 