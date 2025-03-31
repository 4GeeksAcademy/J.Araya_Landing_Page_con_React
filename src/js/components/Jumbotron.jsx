import React from "react";

const Jumbotron = () => {
    return (
        <div className="container p-5 mb-4 bg-light rounded-3 text-center">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A warm welcome!</h1>
                <p className="col fs-4">Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
            </div>
        </div>

    )
}

export default Jumbotron;