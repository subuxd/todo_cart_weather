import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <main>
                <h1>Contact Us</h1>

                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" required placeholders="ABC" />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" required placeholders="ABC@xyz.com" />
                    </div>

                    <div>
                        <label>Message</label>
                        <input type="text" required placeholders="Are you looking for job?" />
                    </div>

                    <button type='submit'>Send</button>
                </form>
            </main>
        </div>
    );
}

export default Contact
