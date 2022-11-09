import React from 'react';

const Blogs = () => {
    return (
        <div className="h-screen m-16 text-left">
            <div>
                <p className="text-xl my-8">Difference between SQL and NoSQL</p>
                <p>SQL is primarily used to interface with relational databeses whereas NoSQL are non-relational or distribute. SQL has a fixed structure in which data needs to be stored but NoSQL has a dynamic schema for unstructured data.</p>
            </div>
            <div>
                <p className="text-xl my-8">What is JWT, and how does it work?</p>
                <p>JSON Web Token or JWT is an open standard that provides a prompt and secure method for transmitting data between parties as JSON object. When a user successfully logs in using their credentials, a JSON web token is returned and stored for a session during which the user has access to certain pages and elements to whaich they wouldn't have access to otherwise.</p>
            </div>
            <div>
                <p className="text-xl my-8">What is the difference between JavaScript and NodeJS?</p>
                <p>JavaScript is a Scripting Language that runs on a browser following certian standards to make websites functional whereas NodeJS is a cross-platform and opensource Javascript runtime environment that allows javascript to run on outside the browser.</p>
            </div>
            <div>
                <p className="text-xl my-8">How does NodeJS handle multiple requests at the same time?</p>
                <p>NodeJS server may receive multiple requests from clients and places them into the EventLoop where the requests are processed asynchronously and therefore looks to be in a sequence.</p>
            </div>
        </div>
    );
};

export default Blogs;