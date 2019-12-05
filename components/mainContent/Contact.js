
export default () => `

<main class="container">
<h4>let's get in FORMation!</h4>
<form name="contact" method="POST" data-netlify="true">
    <div>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Full Name">
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="hello@hi.com">
    </div>
    <div>
        <label for="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" placeholder="666-666-6666">
    </div>
    <div>
        <label for="message">Enter your message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </div>

    <p>What's this message about?</p>

        <input type="radio" name="subject" value="professional" id="pro" checked>
        <label for="pro">Let's network!</label>
    <div>
        <input type="radio" name="subject" value="personal" id="personal">
        <label for="personal">Personal compliment</label>
    </div>
    <div>
        <input type="radio" name="subject" value="other">
        <label>Something else</label>
    </div>
    <input type="checkbox" name="option" value="trusting" id="news" checked>
    <label for="news">Subscribe me to  your newsletter</label>

    <div>
        <label for="marketing">How did you hear about me?</label>
        <select name="marketing">
            <optgroup label="Online">
                <option value="social">Social Media</option>
                <option value="github">Github</option>
                <option value="search">Search Engine</option>
                <option value="email">Email</option>
            </optgroup>
            <optgroup label="In-Person">
                <option value="networking">We met at a networking event</option>
                <option value="referral">Personal referral</option>
                <option value="random">We met somewhere else</option>
            </optgroup>
            <option value="other">Other</option>
        </select>
    </div>


    <input type="submit" value="Submit">
</form>
</main>
``