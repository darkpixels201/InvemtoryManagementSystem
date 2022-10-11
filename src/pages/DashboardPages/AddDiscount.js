import React from "react";

function AddDiscount() {
  return (
    <section id="category_area">
      <div className="container">
        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
          <div className="account_form rounded">
            <h3>Add Discount</h3>
            <form
            // onSubmit={submitHandler}
            >
              <div className="default-form-box">
                <input
                  style={{ width: "100%", paddingLeft: 5 }}
                  type="text"
                  placeholder="Enter Discount"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="rounded"
                  required
                />
              </div>
            </form>
            <div style={{ marginTop: 29, marginLeft: 7 }}>
              <button
                className="theme-btn-one btn-black-overlay btn_sm rounded"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddDiscount;
