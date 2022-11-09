import React from 'react';

const WorkPhases = () => {
    return (
        <div className="grid grid-cols-2 py-32 px-64 justify-start">
            <img src="https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="working" />
            <div>
                <h1 className="text-5xl font-bold mb-12">Work Phases</h1>
                <div className="collapse-open"> 
                    <div className="collapse-title text-xl font-medium border-2 my-4 bg-gray-900 text-gray-50">
                        Initial Design
                    </div>
                    <div className="collapse-content text-justify"> 
                        <p>First line of business is to curate a design that works best for you accorrding your requirements.</p>
                    </div>
                </div>
                <div className="collapse-open">
                    <div className="collapse-title text-xl font-medium border-2 my-4 bg-gray-900 text-gray-50">
                        Work In Progress
                    </div>
                    <div className="collapse-content text-justify"> 
                        <p>There will be several going back and forth to adjust with the initial concept and produce the most ideal output</p>
                    </div>
                </div>
                <div className="collapse-open"> 
                    <div className="collapse-title text-xl font-medium border-2 my-4 bg-gray-900 text-gray-50">
                        Finished Job
                    </div>
                    <div className="collapse-content text-justify"> 
                        <p>Feel free to add a review under the service that you have accessed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkPhases;