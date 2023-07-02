import React from "react";

export function Form() {
  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Menu Hari ini</h3>
        </div>
      </div>
      <div className="card-body pt-0">
        <form method="post" autoComplete="off" id="form-product">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input type="number" name="name" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="mb-3">
                <label className="form-label">Harga</label>
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input type="text" name="price" className="form-control" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-light" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
