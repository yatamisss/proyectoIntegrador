import React from "react";

const HazMemoria = () => {
    return (
        <div className="container py-5 h-100" style={{ backgroundColor: "#71B578" }} >
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/7191423/pexels-photo-7191423.jpeg?auto=compress&cs=tinysrgb&w=800" class="card-img-top" alt="..." height={300} />
                        <div class="card-body">
                            <h5 class="card-title">Recuerda como reciclar vidrio</h5>
                            <button type="button" class="btn btn-link">Click Aquí</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://th.bing.com/th/id/R.839211fcf437740335f906b07cf27727?rik=k9vU21eK1%2fSghg&riu=http%3a%2f%2fwww.cintex.com.mx%2fwp-content%2fuploads%2f2017%2f09%2fbotellas-de-plastico-precio.jpg&ehk=AAqPCefX2qGxuFZEKcLjI1Dc5KRbsnQIklG8fgNVmZg%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="..." height={300} />
                        <div class="card-body">
                            <h5 class="card-title">Recuerda como reciclar plástico</h5>
                            <button type="button" class="btn btn-link">Click Aquí</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/5121657/pexels-photo-5121657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..." height={300} />
                        <div class="card-body">
                            <h5 class="card-title">Recuerda como reciclar aluminio</h5>
                            <button type="button" class="btn btn-link">Click Aquí</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HazMemoria;