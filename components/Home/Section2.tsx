import CustomButton from "../CustomButton";

    const Section2 = () => {
    return (
        
        <section className="wrapper pattern-wrapper bg-image section-frame" data-image-src="/images/pattern.png" style={{ backgroundImage: 'url("/images/pattern.png")'}}>
        <div className="container pt-15 pt-md-17 pb-16 pb-md-18">
            <div className="row gx-lg-0 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2 ms-lg-auto">
                <div className="card rounded-xl me-lg-6 bg-pale-grape">
                <div className="card-body p-6">
                    <div className="d-flex flex-row">
                    <div>
                        <span className="icon btn btn-block btn-lg shadow-xl rounded-xl btn-white pe-none me-4"><span className="number text-grape">01</span></span>
                    </div>
                    <div>
                        <h3 className="mb-1 text-grape">Collect Ideas</h3>
                        <p className="mb-0">Nulla vitae elit libero pharetra augue dapibus.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card rounded-xl ms-lg-13 mt-6 bg-pale-fuchsia">
                <div className="card-body p-6">
                    <div className="d-flex flex-row">
                    <div>
                        <span className="icon btn btn-block btn-lg shadow-xl rounded-xl btn-white pe-none me-4"><span className="number text-fuchsia">02</span></span>
                    </div>
                    <div>
                        <h3 className="mb-1 text-fuchsia">Data Analysis</h3>
                        <p className="mb-0">Vivamus sagittis lacus vel augue laoreet.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card rounded-xl mx-lg-6 mt-6 bg-pale-green">
                <div className="card-body p-6">
                    <div className="d-flex flex-row">
                    <div>
                        <span className="icon btn btn-block btn-lg shadow-xl rounded-xl btn-white pe-none me-4"><span className="number text-green">03</span></span>
                    </div>
                    <div>
                        <h3 className="mb-1 text-green">Finalize Product</h3>
                        <p className="mb-0">Cras mattis consectetur purus sit amet.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-5 text-inverse">
                <h2 className="display-2 mb-3 text-white">Our Working Process</h2>
                <p className="lead fs-lg pe-lg-5">Find out everything you need to know and more about how we create our business process models.</p>
                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p className="mb-6">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla.</p>
                {/* <a href="#" className="btn btn-white rounded-xl mb-0">Learn More</a> */}
                <CustomButton
                  text={"Learn More"}
                  backgroundClass={"btn-white"}
                />
            </div>
            </div>
        </div>
        </section>
        
    )
    }

    export default Section2