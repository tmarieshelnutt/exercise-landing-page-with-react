import React from "react";

function Cards() {
  return (
    <div className="container-fluid">
  <div className="row">
    <div className="col-sm">
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="https://picsum.photos/id/10/200/300" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://picsum.photos/id/13/200/300" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://picsum.photos/id/16/200/300" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
  );
}
export default Cards;
