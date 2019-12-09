export default ( { posts } ) => `
${generateArticlesHTML(posts)}
<div id="blogDiv">blogs</div>
`;

function generateArticlesHTML(posts) {
    return posts
    .map(
        ({title, subtitle}) => `
        <article>
        <h2>${title}</h2>
        <p>${subtitle}</p>
        </article>
    `
    )
    .join(" ");
}
